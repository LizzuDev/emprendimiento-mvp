#!/usr/bin/env python3
"""
Extrae la malla curricular y los datos clave del brochure PDF oficial de cada carrera.

Entrada: .cache/puce/brochure/<clave>.pdf (ver fetch_sources.py)
Salida:  data/puce/brochures.json

La malla se reconstruye con las coordenadas de cada línea (pdftotext -bbox-layout):
  - Las etiquetas de semestre son líneas con solo un número (1..14).
  - Cada materia se asigna a la etiqueta de su misma columna (a su izquierda)
    con el centro vertical más cercano.
  - Una línea que empieza con "-" o "•" es una materia nueva; si no, continúa la anterior.
Se valida que los semestres sean consecutivos desde 1 y que ninguno quede vacío.
Requiere pdftotext (poppler-utils).
"""

import html
import json
import re
import subprocess
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".cache" / "puce" / "brochure"
MANIFEST = ROOT / "data" / "puce" / "manifest.json"
OUT = ROOT / "data" / "puce" / "brochures.json"

BULLET = re.compile(r"^\s*[-–•·▪●]\s*")


def norm(s: str) -> str:
    s = unicodedata.normalize("NFD", (s or "").lower())
    return re.sub(r"\s+", " ", "".join(c for c in s if unicodedata.category(c) != "Mn")).strip()


def read_lines(pdf: Path) -> list[dict]:
    xml = subprocess.run(["pdftotext", "-bbox-layout", str(pdf), "-"], capture_output=True, text=True, check=True).stdout
    lines = []
    for page_no, page in enumerate(re.findall(r"(?s)<page .*?</page>", xml)):
        for x0, y0, x1, y1, inner in re.findall(
            r'(?s)<line xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">(.*?)</line>', page
        ):
            text = " ".join(html.unescape(w) for w in re.findall(r">([^<]*)</word>", inner)).strip()
            if text:
                lines.append({"page": page_no, "x0": float(x0), "y0": float(y0), "x1": float(x1), "y1": float(y1), "text": text})
    # Viñetas sueltas: el guion como línea aparte del texto a su derecha, en la misma altura.
    merged, used = [], set()
    for i, l in enumerate(lines):
        if i in used:
            continue
        if re.fullmatch(r"[-–•·▪●]", l["text"]):
            j = next((j for j, o in enumerate(lines) if j != i and j not in used and o["page"] == l["page"] and abs(o["y0"] - l["y0"]) < 1.5 and 0 <= o["x0"] - l["x1"] < 15), None)
            if j is not None:
                o = lines[j]
                used.add(j)
                merged.append({**o, "x0": l["x0"], "text": f"- {o['text']}"})
                continue
        merged.append(l)
    return merged


ITINERARY_HEADING = re.compile(r"^(itinerario|intinerario)\s+([ivx]+\b|de\b|\d)", re.I)
CONNECTOR_END = re.compile(r"\s(de|del|y|e|en|la|las|los|para|con|a|al|o|u)$", re.I)
# Materias que aparecen solas en al menos dos carreras (se calcula en una primera pasada).
KNOWN_SUBJECTS: set[str] = set()
RECUERDA = re.compile(r"^\*?\s*recuerda que", re.I)


def is_heading(line) -> bool:
    return not BULLET.match(line["text"]) and bool(ITINERARY_HEADING.match(line["text"]) or RECUERDA.match(line["text"]))


def is_continuation(prev, line, column_x1, prev_item: str = "") -> bool:
    """¿La línea continúa la materia anterior? Reglas, en orden:
    1. La materia anterior termina en conector ("de", "y"...): continúa (aunque el brochure le ponga guion).
    2. Con guion o tras un salto vertical: materia nueva.
    3. La anterior termina en " -" (guion corto como separador): materia nueva.
    4. Empieza en minúscula: continúa.
    5. Si la unión con la anterior es una materia conocida en otras carreras: continúa.
       Si la anterior ya es una materia conocida: materia nueva (falta el guion en el brochure).
    6. Si no: continúa solo si su primera palabra no cabía en la línea previa (salto de línea por ancho).
    """
    text = line["text"].strip()
    if line["y0"] - prev["y1"] > 6:
        return False
    if prev_item and CONNECTOR_END.search(prev_item.strip()):
        return True
    if prev_item and norm(prev_item) not in KNOWN_SUBJECTS and norm(join_lines(prev_item, text)) in KNOWN_SUBJECTS:
        return True  # la unión es una materia que existe en otras carreras (aunque el brochure le ponga guion)
    if BULLET.match(text):
        return False
    if re.search(r"\s-$", prev["text"].rstrip()):  # " -" separa materias; la raya " –" es parte del nombre
        return False
    if text[:1].islower():
        return True
    if prev["text"].rstrip().endswith("-"):
        return True
    if prev_item and norm(prev_item) in KNOWN_SUBJECTS:
        return False
    first_word = text.split()[0]
    char_w = (line["x1"] - line["x0"]) / max(len(text), 1)
    return prev["x1"] + char_w * (len(first_word) + 1) > column_x1 + 2


def join_lines(prev_text, text):
    text = BULLET.sub("", text).strip()
    if prev_text.endswith("-") and not prev_text.endswith(" -"):
        return f"{prev_text[:-1]}{text}" if text[:1].islower() else f"{prev_text}{text}"
    return f"{prev_text} {text}"


def clean_item(text):
    return re.sub(r"\s+", " ", re.sub(r"\s-$", "", BULLET.sub("", text))).strip()


def group_lines(lines):
    """Agrupa líneas consecutivas en materias (listas de líneas)."""
    column_x1 = max([l["x1"] for l in lines] or [0])
    groups, texts, prev = [], [], None
    for line in lines:
        if prev is not None and groups and is_continuation(prev, line, column_x1, texts[-1]):
            groups[-1].append(line)
            texts[-1] = join_lines(texts[-1], line["text"].strip())
        else:
            groups.append([line])
            texts.append(clean_item(line["text"]))
        prev = line
    return groups


def group_items(lines, column_x1):
    """Convierte líneas ordenadas en materias, uniendo continuaciones."""
    items, prev = [], None
    for line in lines:
        if prev is not None and items and is_continuation(prev, line, column_x1, items[-1]):
            items[-1] = join_lines(items[-1], line["text"].strip())
        else:
            items.append(clean_item(line["text"]))
        prev = line
    return [clean_item(i) for i in items if i.strip()]


def parse_syllabus(lines: list[dict]):
    """Devuelve (semestres, bloques adicionales, itinerarios, extras, problemas)."""
    problems = []
    header = next((l for l in lines if norm(l["text"]) == "malla"), None)
    if not header:
        return None, [], [], [], ["no se encontró la sección MALLA"], []
    page = header["page"]
    stop_y = min([l["y0"] for l in lines if l["page"] == page and l["y0"] > header["y0"] and (norm(l["text"]) in ("precio sin descuento", "inversion", "descuento") or norm(l["text"]).startswith("mas informacion"))] or [1e9])
    region = [l for l in lines if l["page"] == page and header["y0"] < l["y0"] < stop_y and norm(l["text"]) not in ("curricular", "malla curricular")]

    # Los itinerarios van debajo de la malla. El corte se aplica solo a la columna de cada encabezado
    # (en algunos brochures la nota de itinerarios está al lado del último semestre).
    headings = [l for l in region if is_heading(l)]

    def below_heading(l):
        return any(h["y0"] <= l["y0"] + 1 and l["x1"] > h["x0"] - 20 and l["x0"] < h["x1"] + 20 for h in headings)

    upper = [l for l in region if not below_heading(l)]
    lower = [l for l in region if below_heading(l)]

    labels = [l for l in upper if re.fullmatch(r"\d{1,2}", l["text"]) and 1 <= int(l["text"]) <= 14]
    if not labels:
        return None, [], [], [], ["no se encontraron etiquetas de semestre"], []
    if len({l["text"] for l in labels}) != len(labels):
        problems.append("hay etiquetas de semestre repetidas")

    # Líneas de continuación de materias que quedaron justo debajo del corte (misma columna, sin guion).
    upper_sorted = sorted(upper, key=lambda l: l["y0"])
    for line in sorted(lower, key=lambda l: l["y0"]):
        if is_heading(line) or BULLET.match(line["text"]):
            continue
        above = [u for u in upper_sorted if abs(u["x0"] - line["x0"]) < 3 and 0 <= line["y0"] - u["y1"] <= 6]
        if above:
            upper.append(line)
            upper_sorted.append(line)
    lower = [l for l in lower if l not in upper]

    assigned: dict[int, list[dict]] = {int(l["text"]): [] for l in labels}
    headings_for: dict[int, str] = {}
    extra_blocks: list[dict] = []
    extras = []
    # Columnas: cada línea pertenece a la columna de etiquetas más cercana a su izquierda.
    columns: dict[int, list[dict]] = {}
    for line in [l for l in upper if l not in labels]:
        candidates = [lb for lb in labels if lb["x1"] <= line["x0"] + 4 and line["x0"] - lb["x1"] < 70]
        if not candidates:
            extras.append(line["text"])
            continue
        nearest = min(candidates, key=lambda lb: line["x0"] - lb["x1"])
        col = round(nearest["x1"] / 25)
        columns.setdefault(col, []).append(line)
    for col, col_lines in columns.items():
        col_labels = [lb for lb in labels if round(lb["x1"] / 25) == col] or labels
        # Bloques: líneas separadas por más de 4 pt de espacio vertical pertenecen a semestres distintos.
        blocks_, current = [], []
        for line in sorted(col_lines, key=lambda l: l["y0"]):
            if current and line["y0"] - current[-1]["y1"] > 4:
                blocks_.append(current)
                current = []
            current.append(line)
        if current:
            blocks_.append(current)
        mid = lambda o: (o["y0"] + o["y1"]) / 2
        pending_heading = None
        for blk in blocks_:
            y0, y1 = blk[0]["y0"], blk[-1]["y1"]
            inside = [lb for lb in col_labels if y0 - 8 <= mid(lb) <= y1 + 8]
            if not inside:
                first_is_heading = not BULLET.match(blk[0]["text"])
                if len(blk) == 1 and first_is_heading:
                    # Encabezado suelto (ej. "Internado Rotativo") que agrupa los semestres del bloque siguiente.
                    pending_heading = blk[0]["text"]
                    continue
                above = [lb for lb in col_labels if mid(lb) < y0]
                if first_is_heading and above and all(mid(lb) < y0 for lb in col_labels):
                    # Bloque después del último semestre de la columna (ej. internado de Medicina).
                    last = max(above, key=mid)
                    extra_blocks.append({"titulo": blk[0]["text"], "despues_del_semestre": int(last["text"]), "materias": group_items(blk[1:], max(l["x1"] for l in blk))})
                    continue
                best = min(col_labels, key=lambda lb: abs(mid(lb) - (y0 + y1) / 2))
                problems.append(f"bloque sin etiqueta dentro ('{blk[0]['text'][:40]}'), asignado al semestre {best['text']}")
                inside = [best]
            for item in group_lines(blk) if len(inside) > 1 else [blk]:
                best = min(inside, key=lambda lb: abs(mid(lb) - (item[0]["y0"] + item[-1]["y1"]) / 2))
                n = int(best["text"])
                assigned[n].extend(item)
                if pending_heading:
                    headings_for[n] = pending_heading
            pending_heading = None

    semesters, blocks = [], []
    for n in sorted(assigned):
        sem_lines = sorted(assigned[n], key=lambda l: l["y0"])
        column_x1 = max([l["x1"] for l in sem_lines] or [0])
        # Un encabezado sin guion seguido de materias con guion (ej. "Internado Rotativo I") abre un bloque aparte.
        split = None
        for i, l in enumerate(sem_lines[1:], 1):
            nxt = sem_lines[i + 1] if i + 1 < len(sem_lines) else None
            if not BULLET.match(l["text"]) and l["y0"] - sem_lines[i - 1]["y1"] > 6 and nxt and BULLET.match(nxt["text"]):
                split = i
                break
        main_lines = sem_lines[:split] if split else sem_lines
        items = group_items(main_lines, column_x1)
        head = headings_for.get(n)
        if head:
            items = [i if norm(i).startswith(norm(head)) else f"{head}: {i}" for i in items]
        semesters.append(items)
        if split:
            blocks.append({"titulo": sem_lines[split]["text"], "despues_del_semestre": n, "materias": group_items(sem_lines[split + 1:], column_x1)})

    blocks.extend(extra_blocks)
    itineraries, it_extras = parse_itineraries(lower)
    extras += it_extras

    # Semestre vacío justo después de uno con encabezado compartido (ej. "Internado Rotativo" para 8 y 9):
    # el brochure no permite saber qué materia va en cada uno, así que se registran como compartidos.
    shared = []
    for n in sorted(assigned):
        i = n - 1
        if 0 < i < len(semesters) and not semesters[i] and headings_for.get(n - 1) and semesters[i - 1]:
            semesters[i] = list(semesters[i - 1])
            shared.append([n - 1, n])
            problems.append(f"los semestres {n - 1} y {n} comparten el bloque '{headings_for[n - 1]}' en el brochure: no se distingue qué materia va en cada uno")

    numbers = sorted(assigned)
    if numbers != list(range(1, len(numbers) + 1)):
        problems.append(f"etiquetas de semestre no consecutivas: {numbers}")
    for i, s in enumerate(semesters, 1):
        if not s:
            problems.append(f"semestre {i} sin materias")
    return semesters, blocks, itineraries, extras, problems, shared


def parse_itineraries(lines):
    """Itinerarios: encabezado "Itinerario X: nombre", columnas Asignaturas / Nivel."""
    heads = sorted([l for l in lines if ITINERARY_HEADING.match(l["text"]) and not BULLET.match(l["text"])], key=lambda l: l["y0"])
    if not heads:
        # Variante: itinerarios listados como viñetas, solo con su nombre (ej. Veterinaria).
        names = group_items(sorted([l for l in lines if not RECUERDA.match(l["text"]) and not re.match(r"^(itinerario puedes|enfoques|puedes darles|los siguientes)", norm(l["text"]))], key=lambda l: l["y0"]), max([l["x1"] for l in lines] or [0]))
        return [{"nombre": n, "materias": []} for n in names if ITINERARY_HEADING.match(n)], [n for n in names if not ITINERARY_HEADING.match(n)]
    skip = re.compile(r"^(asignaturas|nivel|puedes darles|los siguientes enfoques|\*?\s*recuerda)", re.I)
    itineraries = [{"nombre": h["text"], "_h": h, "materias": []} for h in heads]
    used = set()

    def owner(line):
        """Itinerario de la línea: el encabezado más cercano por encima. Si hay dos encabezados a la misma
        altura (diseño en dos columnas), decide el más cercano en horizontal."""
        above = [it for it in itineraries if it["_h"]["y0"] < line["y0"]]
        if not above:
            return None
        closest = max(above, key=lambda it: it["_h"]["y0"])
        siblings = [it for it in above if abs(it["_h"]["y0"] - closest["_h"]["y0"]) < 12]
        if len(siblings) == 1:
            return closest
        cx = (line["x0"] + line["x1"]) / 2
        return min(siblings, key=lambda it: abs((it["_h"]["x0"] + it["_h"]["x1"]) / 2 - cx))

    # Continuación del encabezado (nombre largo en dos líneas).
    for it in itineraries:
        h = it["_h"]
        for l in sorted(lines, key=lambda l: l["y0"]):
            if l is h or id(l) in used or BULLET.match(l["text"]) or skip.match(l["text"]) or re.fullmatch(r"\d{1,2}", l["text"]) or ITINERARY_HEADING.match(l["text"]):
                continue
            if -3 <= l["y0"] - h["y1"] <= 4 and l["x0"] < h["x1"] and l["x1"] > h["x0"]:
                it["nombre"] = f"{it['nombre']} {l['text']}"
                used.add(id(l))
                h = l

    subject_lines, levels = {}, []
    nivel_labels = [l for l in lines if norm(l["text"]) == "nivel"]
    for l in lines:
        if id(l) in used or l in heads or skip.match(l["text"]):
            continue
        if re.fullmatch(r"\d{1,2}", l["text"]):
            levels.append(l)
            continue
        it = owner(l)
        if it is None:
            continue
        subject_lines.setdefault(id(it), []).append(l)

    extras = []
    for it in itineraries:
        ls = sorted(subject_lines.get(id(it), []), key=lambda l: l["y0"])
        col_x1 = max([l["x1"] for l in ls] or [0])
        names = group_items(ls, col_x1)
        # Nivel: el número a la derecha con la misma altura que la primera línea de cada materia.
        starts, prev, cur = [], None, ""
        for l in ls:
            if prev is None or not is_continuation(prev, l, col_x1, cur):
                starts.append(l)
                cur = clean_item(l["text"])
            else:
                cur = join_lines(cur, l["text"].strip())
            prev = l
        # Nivel: números a la derecha de las materias de este itinerario (o pegados al final del nombre).
        clean_names, inline_levels = [], []
        for name in names:
            m = re.search(r"\s(\d{1,2})$", name)
            clean_names.append(name[: m.start()].strip() if m else name)
            inline_levels.append(int(m.group(1)) if m else None)
        y_top = it["_h"]["y0"]
        y_bottom = (ls[-1]["y1"] + 4) if ls else y_top
        # La columna de niveles está bajo el rótulo "Nivel" de este itinerario (el más cercano por debajo del encabezado).
        first_y = ls[0]["y0"] if ls else y_top
        min_x = min((l["x0"] for l in ls), default=0)
        nivel_heads = [n for n in nivel_labels if y_top <= n["y0"] <= first_y + 2 and n["x0"] > min_x]
        nivel_head = min(nivel_heads, key=lambda n: n["x0"] - min_x) if nivel_heads else None
        in_column = (lambda v: nivel_head["x0"] - 6 <= v["x0"] <= nivel_head["x1"] + 6) if nivel_head else (lambda v: v["x0"] > min_x)
        col_levels = sorted([v for v in levels if y_top < v["y0"] < y_bottom and in_column(v)], key=lambda v: v["y0"])
        # Mezcla en orden vertical los números de la columna y los pegados al nombre.
        seq = [(v["y0"], int(v["text"])) for v in col_levels] + [(st["y0"], lv) for st, lv in zip(starts, inline_levels) if lv is not None]
        seq = [lv for _, lv in sorted(seq)]
        materias = []
        if len(seq) == len(clean_names):
            materias = [{"materia": n, "nivel": lv} for n, lv in zip(clean_names, seq)]
        else:
            for name, st, inl in zip(clean_names, starts, inline_levels):
                cy = (st["y0"] + st["y1"]) / 2
                lv = [v for v in col_levels if abs((v["y0"] + v["y1"]) / 2 - cy) < 4]
                lv = int(min(lv, key=lambda v: v["x0"] - st["x1"])["text"]) if lv else inl
                materias.append({"materia": name, "nivel": lv})
        it["materias"] = materias
        del it["_h"]
    return [it for it in itineraries if it["materias"] or extras.append(it["nombre"])], extras


def value_below(lines, label_pred, max_gap=40):
    label = next((l for l in lines if label_pred(norm(l["text"]))), None)
    if not label:
        return None
    out, last_y = [], label["y1"]
    below = sorted(
        [l for l in lines if l["page"] == label["page"] and l["y0"] > label["y0"] + 1 and l["x0"] < label["x1"] + 30 and l["x1"] > label["x0"] - 30],
        key=lambda l: l["y0"],
    )
    for l in below:
        if l["y0"] - last_y > (max_gap if not out else 6):
            break
        out.append(l["text"])
        last_y = l["y1"]
    return " ".join(out) or None


def parse_prices(lines):
    text = " ".join(l["text"] for l in lines)
    amounts = [int(re.sub(r"[.,]", "", m)) for m in re.findall(r"\$\s?(\d[\d.,]*)", text)]
    pct = re.search(r"(\d+(?:[.,]\d+)?)\s*%", " ".join(l["text"] for l in lines if norm(l["text"]).endswith("%") or re.fullmatch(r"\d+\s*%", l["text"])))
    return {
        "precio_sin_descuento": amounts[0] if amounts else None,
        "inversion": amounts[-1] if len(amounts) > 1 else None,
        "descuento_pct": float(pct.group(1).replace(",", ".")) if pct else None,
        "montos_encontrados": amounts,
    }


def parse(pdf: Path) -> dict:
    lines = read_lines(pdf)
    semesters, blocks, itineraries, extras, problems, shared = parse_syllabus(lines)
    data = {
        "nombre": lines[0]["text"] if lines else None,
        "modalidad": value_below(lines, lambda t: t == "modalidad"),
        "duracion": value_below(lines, lambda t: t == "duracion"),
        "titulo": value_below(lines, lambda t: t.startswith("titulo a obtener") or t == "titulo"),
        "malla": semesters,
        "bloques_adicionales": blocks,
        "itinerarios": itineraries,
        "semestres_compartidos": shared,
        "malla_lineas_sin_asignar": extras,
        "problemas_malla": problems,
        **parse_prices(lines),
    }
    return data


def build_known_subjects(manifest):
    """Primera pasada: materias que aparecen como ítem completo en al menos dos carreras."""
    from collections import Counter
    count = Counter()
    for key in manifest["careers"]:
        pdf = CACHE / f"{key}.pdf"
        if not pdf.exists():
            continue
        try:
            sems = parse_syllabus(read_lines(pdf))[0] or []
        except subprocess.CalledProcessError:
            continue
        for subject in {norm(x) for sem in sems for x in sem}:
            count[subject] += 1
    return {s for s, n in count.items() if n >= 2}


def main():
    manifest = json.loads(MANIFEST.read_text(encoding="utf8"))
    KNOWN_SUBJECTS.update(build_known_subjects(manifest))
    result = {}
    for key, entry in manifest["careers"].items():
        pdf = CACHE / f"{key}.pdf"
        b = entry.get("brochure", {})
        if not pdf.exists():
            result[key] = {"error": b.get("error", "brochure no descargado"), "fuente": b.get("url")}
            continue
        try:
            data = parse(pdf)
        except subprocess.CalledProcessError as err:
            data = {"error": f"pdftotext falló: {err}"}
        data["fuente"] = b.get("url")
        data["fecha_fuente"] = b.get("fetched_at")
        data["sha256"] = b.get("sha256")
        result[key] = data
    OUT.write_text(json.dumps(result, ensure_ascii=False, indent=1), encoding="utf8")
    for k, v in result.items():
        if v.get("error"):
            print(f"  {k}: ERROR {v['error']}")
            continue
        sems = v.get("malla") or []
        flag = "; ".join(v["problemas_malla"]) if v.get("problemas_malla") else "ok"
        its = v.get("itinerarios") or []
        sin_nivel = sum(1 for it in its for m in it["materias"] if m["nivel"] is None)
        print(f"  {k:28} sem={len(sems):2} materias={sum(map(len, sems)):3} itin={len(its)} ({sum(len(i['materias']) for i in its)} mat, {sin_nivel} sin nivel) sin_asignar={len(v['malla_lineas_sin_asignar']):2} malla={flag}")
    print(f"Salida: {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    sys.exit(main())
