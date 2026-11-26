#!/usr/bin/env python3
"""
Extrae los campos oficiales de la página pública de cada carrera.

Entrada: .cache/puce/landing/<clave>.html (ver fetch_sources.py)
Salida:  data/puce/landings.json

Campos: nombre, precio real, descuento, precio con descuento, nota de precio, título,
duración, modalidad, decano/a, cifras de "¿Por qué estudiar esta carrera?",
resultados de aprendizaje, campo laboral y contactos.
Cada campo que no se encuentra queda en null y se lista en "faltantes".
"""

import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".cache" / "puce" / "landing"
MANIFEST = ROOT / "data" / "puce" / "manifest.json"
OUT = ROOT / "data" / "puce" / "landings.json"


def html_to_lines(raw: str) -> list[str]:
    s = re.sub(r"(?is)<(script|style|noscript|select|form|svg)[^>]*>.*?</\1>", " ", raw)
    m = re.search(r"(?is)<body.*?</body>", s)
    s = m.group(0) if m else s
    s = re.sub(r"(?i)<br\s*/?>|</(p|div|h\d|li|tr|section|span|a|strong|b)>", "\n", s)
    s = html.unescape(re.sub(r"<[^>]+>", " ", s))
    lines = [re.sub(r"\s+", " ", l).strip() for l in s.split("\n")]
    return [l for l in lines if l and l not in ("-->", "Seguir")]


def norm(s: str) -> str:
    import unicodedata
    s = unicodedata.normalize("NFD", s.lower())
    return re.sub(r"\s+", " ", "".join(c for c in s if unicodedata.category(c) != "Mn")).strip()


def find(lines, pred, start=0):
    for i in range(start, len(lines)):
        if pred(norm(lines[i])):
            return i
    return -1


def money(s):
    m = re.search(r"(\d{1,3}(?:[.,]\d{3})+|\d+)(?:[.,](\d{2}))?\b", s or "")
    if not m:
        return None
    return int(re.sub(r"[.,]", "", m.group(1)))


LABELS = ("titulo", "titulo a obtener", "titulo:", "duracion", "duracion:", "modalidad", "modalidad:")


def value_after(lines, label_pred, start, stop):
    """Valor de una etiqueta (TÍTULO, DURACIÓN, ...): todas las líneas hasta la siguiente etiqueta o sección."""
    i = find(lines, label_pred, start)
    if i == -1 or (stop != -1 and i >= stop):
        return None, i
    out = []
    for line in lines[i + 1:]:
        n = norm(line)
        if n in LABELS or "decan" in n or n.startswith(("mensaje del", "¿por que", "por que estudiar")):
            break
        out.append(line)
        if len(out) == 3:
            break
    return (" ".join(out) or None), i


def section(lines, start_pred, end_preds, start=0):
    i = find(lines, start_pred, start)
    if i == -1:
        return [], -1
    j = len(lines)
    for p in end_preds:
        k = find(lines, p, i + 1)
        if k != -1:
            j = min(j, k)
    return lines[i + 1:j], i


def parse(lines: list[str]) -> dict:
    out: dict = {}
    start = find(lines, lambda l: l == "estudia")
    out["nombre"] = lines[start + 1] if start != -1 else None
    body = lines[start:] if start != -1 else lines

    # Precios: "Precio real" USD 5.500 / "Descuento" 18% / "Precio con descuento" USD 4.500
    pr = find(body, lambda l: l.startswith("precio real"))
    if pr != -1:
        window = body[pr:pr + 14]
        nums = [money(x) for x in window if re.fullmatch(r"(USD\s*)?\$?\s*[\d.,]+", x.strip())]
        pct = next((x for x in window if re.fullmatch(r"\d+(?:[.,]\d+)?\s*%", x.strip())), None)
        out["precio_real"] = nums[0] if len(nums) > 0 else None
        out["descuento_pct"] = float(pct.replace("%", "").replace(",", ".")) if pct else None
        out["precio_con_descuento"] = nums[1] if len(nums) > 1 else None
        note = next((x for x in window if norm(x).startswith("no incluye")), None)
        out["nota_precio"] = note
    else:
        out.update(precio_real=None, descuento_pct=None, precio_con_descuento=None, nota_precio=None)

    desc = find(body, lambda l: l.startswith("descripcion general"))
    stop = find(body, lambda l: "decan" in l or l.startswith("¿por que estudiar") or l.startswith("por que estudiar"), desc + 1 if desc != -1 else 0)
    out["titulo"], _ = value_after(body, lambda l: l in ("titulo", "titulo a obtener", "titulo:"), max(desc, 0), stop)
    out["duracion"], _ = value_after(body, lambda l: l in ("duracion", "duracion:"), max(desc, 0), stop)
    out["modalidad"], _ = value_after(body, lambda l: l in ("modalidad", "modalidad:"), max(desc, 0), stop)

    # Decano/a: la línea anterior a "DECANO"/"DECANA"
    d = find(body, lambda l: l in ("decano", "decana", "decano/a", "decana (e)", "decano (e)"))
    out["decano"] = body[d - 1] if d > 0 else None
    out["cargo_decano"] = body[d] if d > 0 else None

    why, _ = section(body, lambda l: "por que estudiar esta carrera" in l, [lambda l: "que aprenderas" in l, lambda l: "donde puedo trabajar" in l])
    out["por_que_estudiar"] = " ".join(why) if why else None

    learn, _ = section(body, lambda l: "que aprenderas" in l, [lambda l: "donde puedo trabajar" in l, lambda l: "por que estudiar en la puce" in l])
    learn = [x for x in learn if not norm(x).startswith(("al final de tu carrera", "al final de su carrera", "al finalizar")) and norm(x) != "perfil de egreso"]
    out["resultados_aprendizaje"] = learn or None

    work, _ = section(body, lambda l: "donde puedo trabajar" in l, [lambda l: "por que estudiar en la puce" in l, lambda l: l == "contacto", lambda l: l.startswith("redes y alianzas")])
    out["campo_laboral"] = " ".join(work) if work else None

    contact, _ = section(body, lambda l: l == "contacto", [lambda l: l == "sedes"])
    out["contacto_telefonos"] = [x for x in contact if re.search(r"\d{3}\s?\d{3}\s?\d{3,4}", x)] or None
    out["contacto_correos"] = [x for x in contact if "@" in x] or None
    out["contacto_direccion"] = next((x for x in contact if norm(x).startswith("avenida") or norm(x).startswith("av.")), None)

    out["faltantes"] = [k for k in ("nombre", "precio_real", "descuento_pct", "precio_con_descuento", "titulo", "duracion", "modalidad", "resultados_aprendizaje", "campo_laboral") if not out.get(k)]
    return out


def main():
    manifest = json.loads(MANIFEST.read_text(encoding="utf8"))
    result = {}
    for key, entry in manifest["careers"].items():
        path = CACHE / f"{key}.html"
        if not path.exists():
            result[key] = {"error": "página no descargada"}
            continue
        data = parse(html_to_lines(path.read_text(encoding="utf8", errors="replace")))
        data["fuente"] = entry["landing"]["url"]
        data["fecha_fuente"] = entry["landing"].get("fetched_at")
        data["brochure_url"] = entry.get("brochure", {}).get("url")
        result[key] = data
    OUT.write_text(json.dumps(result, ensure_ascii=False, indent=1), encoding="utf8")
    incompletas = {k: v.get("faltantes") for k, v in result.items() if v.get("faltantes")}
    print(f"Carreras: {len(result)} · completas: {len(result) - len(incompletas)}")
    for k, f in incompletas.items():
        print(f"  {k}: faltan {f}")
    print(f"Salida: {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    sys.exit(main())
