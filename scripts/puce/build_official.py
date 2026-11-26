#!/usr/bin/env python3
"""
Une la página oficial y el brochure de cada carrera, los compara con la plataforma
y genera la base oficial que usa Aurelio.

Entradas: data/puce/landings.json, data/puce/brochures.json, js/data/vocationalData.js (vía node)
Salidas:
  data/puce/official_careers.json   datos oficiales consolidados por carrera, con su fuente
  docs/aurelio/extraccion_oficial.md informe: qué se extrajo y en qué difiere de la plataforma

Prioridad de fuentes:
  - Precios, título, duración, modalidad, perfil y campo laboral: la página oficial (se actualiza
    más a menudo); el brochure se usa para comprobarlos y como respaldo.
  - Malla curricular: el brochure (la página la publica como imagen).
"""

import json
import re
import subprocess
import sys
import unicodedata
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / "data" / "puce"
OUT = DATA / "official_careers.json"
REPORT = ROOT / "docs" / "aurelio" / "extraccion_oficial.md"


def norm(s):
    s = unicodedata.normalize("NFD", str(s or "").lower())
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-z0-9ñ ]+", " ", re.sub(r"\s+", " ", s)).strip()


def platform_careers():
    js = (
        "import('./js/data/vocationalData.js').then(d=>{const o={};"
        "for(const [k,c] of Object.entries(d.ALL_CAREERS_CATALOG)){o[k]={name:c.name,faculty:c.faculty||null,"
        "semesters:c.syllabus?.semesters||[],benefits:c.benefits||[],fieldOfWork:c.fieldOfWork||''}}"
        "process.stdout.write(JSON.stringify(o))})"
    )
    return json.loads(subprocess.run(["node", "-e", js], cwd=ROOT, capture_output=True, text=True, check=True).stdout)


def money(s):
    m = re.search(r"\$\s*([\d.,]+)", str(s or ""))
    return int(re.sub(r"[.,]", "", m.group(1))) if m else None


def percent(s):
    m = re.search(r"(\d+(?:[.,]\d+)?)\s*%", str(s or ""))
    return float(m.group(1).replace(",", ".")) if m else None


def semesters_from_duration(text):
    m = re.search(r"(\d+)\s*semestres?", norm(text))
    return int(m.group(1)) if m else None


FACULTY_PAGES = {
    # id de página (fetch_sources.py) -> nombre oficial (lista "Facultades" del pie de www.puce.edu.ec)
    "facultad-aprendizaje": "Facultad de Aprendizaje, Lenguas y Comunicación",
    "facultad-derecho": "Facultad de Derecho y Sociedad",
    "facultad-economia": "Facultad de Economía y Gestión Empresarial",
    "facultad-exactas": "Facultad de Ciencias Exactas, Naturales y Ambientales",
    "facultad-habitat": "Facultad de Hábitat, Infraestructura y Creatividad",
    "facultad-innovacion": "Facultad Internacional de Innovación PUCE – Icam",
    "facultad-salud": "Facultad de Salud y Bienestar",
    "facultad-teologia": "Facultad Eclesiástica de Ciencias Filosófico-Teológicas",
}

# Nombre de la carrera en la tabla oficial de aranceles (Anexo 2) cuando difiere del de su página.
ARANCEL_NAMES = {"sistemas_informacion": "Sistemas de Información", "veterinaria": "Veterinaria"}


def resolve_faculties(names: dict, deans: dict) -> tuple[dict, dict]:
    """Facultad de cada carrera según las páginas oficiales de facultad.
    Si una carrera se menciona en varias, se elige la facultad cuyas carreras inequívocas tienen el mismo decano/a."""
    sys.path.insert(0, str(Path(__file__).resolve().parent))
    from parse_landings import html_to_lines
    manifest = json.loads((DATA / "manifest.json").read_text(encoding="utf8"))
    candidates = {k: [] for k in names}
    page_texts = {}
    for pid, fname in FACULTY_PAGES.items():
        rec = manifest["institutional"].get(pid, {})
        if rec.get("status") != 200:
            continue
        text = norm(" ".join(html_to_lines((ROOT / rec["file"]).read_text(encoding="utf8", errors="replace"))))
        page_texts[(fname, rec["url"])] = text
        for k, n in names.items():
            if f" {norm(n)} " in f" {text} ":
                candidates[k].append((fname, rec["url"]))
    dean_faculty = {}
    for k, c in candidates.items():
        if len(c) == 1 and deans.get(k):
            dean_faculty.setdefault(norm(deans[k]).replace("-", " "), set()).add(c[0])
    result, notes = {}, {}
    for k, c in candidates.items():
        if len(c) == 1:
            result[k] = c[0]
            continue
        by_dean = dean_faculty.get(norm(deans.get(k) or "").replace("-", " "), set()) & set(c)
        # Respaldo: la página de facultad que menciona los apellidos del decano/a.
        tokens = [t for t in norm(deans.get(k) or "").replace("-", " ").split() if len(t) > 3 and t not in ("mgtr", "dra.", "dr.")]
        by_name = {f for f in c if sum(t in page_texts.get(f, "") for t in tokens) >= 2}
        if len(by_dean) == 1:
            result[k] = next(iter(by_dean))
            notes[k] = f"facultad resuelta por decano/a ({deans[k]}) entre: {', '.join(f for f, _ in c)}"
        elif len(by_name) == 1:
            result[k] = next(iter(by_name))
            notes[k] = f"facultad resuelta por el nombre del decano/a ({deans[k]}) en la página de la facultad"
        else:
            result[k] = None
            notes[k] = f"facultad ambigua: {', '.join(f for f, _ in c) or 'ninguna página la menciona'}"
    return result, notes


def first(*values):
    return next((v for v in values if v not in (None, "", [])), None)


def main():
    landings = json.loads((DATA / "landings.json").read_text(encoding="utf8"))
    brochures = json.loads((DATA / "brochures.json").read_text(encoding="utf8"))
    platform = platform_careers()
    aranceles = json.loads((DATA / "aranceles.json").read_text(encoding="utf8"))
    arancel_by_name = {norm(r["carrera"]): r for r in aranceles["carreras"].values()}
    faculties, faculty_notes = resolve_faculties(
        {k: landings.get(k, {}).get("nombre") or v["name"] for k, v in platform.items()},
        {k: landings.get(k, {}).get("decano") for k in platform},
    )

    official, rows = {}, []
    for key, plat in platform.items():
        L = landings.get(key, {})
        B = brochures.get(key, {})
        issues, diffs = [], []

        # ---------- Consolidación ----------
        price = {
            "precio_real": first(L.get("precio_real"), B.get("precio_sin_descuento")),
            "descuento_pct": first(L.get("descuento_pct"), B.get("descuento_pct")),
            "precio_con_descuento": first(L.get("precio_con_descuento"), B.get("inversion")),
            "nota": L.get("nota_precio"),
            "matricula": None,
            "periodo": "por semestre",
        }
        for field_l, field_b, label in (("precio_real", "precio_sin_descuento", "precio real"), ("descuento_pct", "descuento_pct", "descuento"), ("precio_con_descuento", "inversion", "precio con descuento")):
            if L.get(field_l) is not None and B.get(field_b) is not None and float(L[field_l]) != float(B[field_b]):
                issues.append(f"{label}: página {L[field_l]} vs brochure {B[field_b]} (se usa la página)")
        if None not in (price["precio_real"], price["descuento_pct"], price["precio_con_descuento"]):
            expected = price["precio_real"] * (1 - price["descuento_pct"] / 100)
            if abs(expected - price["precio_con_descuento"]) > 0.03 * price["precio_real"]:
                issues.append(f"el descuento no cuadra en la fuente oficial: {price['descuento_pct']}% de ${price['precio_real']} = ${expected:.0f}, publicado ${price['precio_con_descuento']}")

        malla = B.get("malla") or None
        duration = first(L.get("duracion"), B.get("duracion"))
        n_dur = semesters_from_duration(duration)
        if malla and n_dur and len(malla) != n_dur:
            issues.append(f"la duración dice {n_dur} semestres y el brochure tiene {len(malla)} en la malla")
        if B.get("problemas_malla"):
            issues.extend(f"malla: {p}" for p in B["problemas_malla"])
        if B.get("malla_lineas_sin_asignar"):
            issues.append(f"malla: {len(B['malla_lineas_sin_asignar'])} líneas sin semestre ({'; '.join(B['malla_lineas_sin_asignar'][:3])})")
        if L.get("error") or not L:
            issues.append("no se pudo leer la página oficial")
        if B.get("error") or not B:
            issues.append(f"no se pudo leer el brochure ({B.get('error', 'sin datos')})")
        for f in L.get("faltantes") or []:
            issues.append(f"la página no tiene el campo '{f}'")

        # Tabla oficial de aranceles 2026 (Anexo 2): arancel y matrícula por carrera.
        tabla = arancel_by_name.get(norm(ARANCEL_NAMES.get(key) or L.get("nombre") or plat["name"]))
        if tabla:
            price["matricula"] = tabla["matricula"]
            price["fuente_tabla"] = aranceles["fuente"]
            price["tabla_actualizada"] = aranceles["actualizado"]
            if price["precio_real"] is not None and float(price["precio_real"]) != tabla["arancel_regular"]:
                issues.append(f"precio real: página ${price['precio_real']} vs tabla oficial de aranceles ${tabla['arancel_regular']:g}")
        else:
            issues.append("la carrera no aparece en la tabla oficial de aranceles (Anexo 2)")
        if faculty_notes.get(key, "").startswith("facultad ambigua"):
            issues.append(faculty_notes[key])

        official[key] = {
            "key": key,
            "facultad": faculties[key][0] if faculties.get(key) else None,
            "facultad_fuente": faculties[key][1] if faculties.get(key) else None,
            "nombre": first(L.get("nombre"), (B.get("nombre") or "").title()),
            "titulo": first(L.get("titulo"), B.get("titulo")),
            "duracion": duration,
            "semestres": len(malla) if malla else n_dur,
            "modalidad": first(L.get("modalidad"), B.get("modalidad")),
            "costo": price if price["precio_con_descuento"] else None,
            "decano": {"nombre": L.get("decano"), "cargo": L.get("cargo_decano")} if L.get("decano") else None,
            "por_que_estudiar": L.get("por_que_estudiar"),
            "resultados_aprendizaje": L.get("resultados_aprendizaje") or [],
            "campo_laboral": L.get("campo_laboral"),
            "malla": malla,
            "bloques_adicionales": B.get("bloques_adicionales") or [],
            "semestres_compartidos": B.get("semestres_compartidos") or [],
            "itinerarios": B.get("itinerarios") or [],
            "contacto": {"telefonos": L.get("contacto_telefonos"), "correos": L.get("contacto_correos"), "direccion": L.get("contacto_direccion")},
            "fuentes": {
                "pagina": L.get("fuente"),
                "pagina_fecha": L.get("fecha_fuente"),
                "brochure": B.get("fuente"),
                "brochure_fecha": B.get("fecha_fuente"),
                "brochure_sha256": B.get("sha256"),
            },
            "problemas": issues,
        }

        # ---------- Comparación con la plataforma ----------
        o = official[key]
        pb = plat["benefits"]
        is_cost = bool(pb) and "descuento" in norm(pb[0].get("topText"))
        p_disc = percent(pb[0].get("highlight")) if is_cost else None
        p_base = money(pb[0].get("bottomText")) if is_cost else None
        p_inv = money(pb[1].get("highlight")) if is_cost and len(pb) > 1 else None
        if o["costo"]:
            c = o["costo"]
            if not is_cost:
                diffs.append(f"la plataforma no muestra el costo; oficial: ${c['precio_con_descuento']} con {c['descuento_pct']:g}% (precio real ${c['precio_real']})")
            else:
                if p_base != c["precio_real"]:
                    diffs.append(f"precio real: plataforma ${p_base} → oficial ${c['precio_real']}")
                if p_disc != c["descuento_pct"]:
                    diffs.append(f"descuento: plataforma {p_disc:g}% → oficial {c['descuento_pct']:g}%")
                if p_inv != c["precio_con_descuento"]:
                    diffs.append(f"precio con descuento: plataforma ${p_inv} → oficial ${c['precio_con_descuento']}")
        if o["malla"]:
            ps = plat["semesters"]
            if len(ps) != len(o["malla"]):
                diffs.append(f"semestres: plataforma {len(ps)} → oficial {len(o['malla'])}")
            off_set = {norm(x) for s in o["malla"] for x in s}
            plat_set = {norm(x) for s in ps for x in s}
            only_off, only_plat = off_set - plat_set, plat_set - off_set
            if only_off or only_plat:
                diffs.append(f"materias distintas: {len(only_off)} solo en el oficial, {len(only_plat)} solo en la plataforma")
            moved = sum(1 for i, s in enumerate(o["malla"]) for x in s if i < len(ps) and norm(x) in plat_set and norm(x) not in {norm(y) for y in ps[i]})
            if moved:
                diffs.append(f"{moved} materias están en otro semestre en la plataforma")
        o["diferencias_con_plataforma"] = diffs
        rows.append((key, o, issues, diffs))

    OUT.write_text(json.dumps(official, ensure_ascii=False, indent=1), encoding="utf8")

    # ---------- Informe ----------
    md = [
        "# Extracción de datos oficiales de la PUCE",
        "",
        f"> Generado el {date.today().isoformat()} por `scripts/puce/build_official.py` a partir de las páginas oficiales de cada carrera en www.puce.edu.ec y de los brochures PDF enlazados en ellas. No editar a mano.",
        "",
        f"- Carreras revisadas: **{len(rows)}**",
        f"- Con costo oficial: **{sum(1 for r in rows if r[1]['costo'])}**",
        f"- Con malla oficial extraída: **{sum(1 for r in rows if r[1]['malla'])}**",
        f"- Con diferencias respecto de la plataforma: **{sum(1 for r in rows if r[3])}**",
        f"- Con problemas en la fuente o en la extracción: **{sum(1 for r in rows if r[2])}**",
        "",
        "## Resumen por carrera",
        "",
        "| Carrera | Título | Duración | Modalidad | Precio real | Desc. | Con descuento | Semestres (malla) |",
        "|---|---|---|---|---|---|---|---|",
    ]
    cell = lambda v: str(v if v not in (None, "") else "—").replace("|", "\\|")
    for key, o, _, _ in rows:
        c = o["costo"] or {}
        disc = f"{c['descuento_pct']:g}%" if c.get("descuento_pct") is not None else None
        real = f"${c['precio_real']}" if c.get("precio_real") else None
        con = f"${c['precio_con_descuento']}" if c.get("precio_con_descuento") else None
        sems = len(o["malla"]) if o["malla"] else None
        md.append(f"| [{cell(o['nombre'])}]({o['fuentes']['pagina']}) | {cell(o['titulo'])} | {cell(o['duracion'])} | {cell(o['modalidad'])} | {cell(real)} | {cell(disc)} | {cell(con)} | {cell(sems)} |")
    md += ["", "## Diferencias entre la plataforma y los datos oficiales", "", "Estos datos de la plataforma (pantalla de resultados) no coinciden con lo publicado por la PUCE.", ""]
    for key, o, _, diffs in rows:
        if diffs:
            md.append(f"- **{o['nombre']}**: " + "; ".join(diffs))
    md += ["", "## Problemas en la fuente o en la extracción", "", "Revisar a mano: pueden ser errores de la propia publicación o casos que el extractor no resolvió.", ""]
    any_issue = False
    for key, o, issues, _ in rows:
        if issues:
            any_issue = True
            md.append(f"- **{o['nombre']}**: " + "; ".join(issues))
    if not any_issue:
        md.append("Ninguno.")
    REPORT.write_text("\n".join(md) + "\n", encoding="utf8")

    print(f"Carreras: {len(rows)} · con costo: {sum(1 for r in rows if r[1]['costo'])} · con malla: {sum(1 for r in rows if r[1]['malla'])}")
    print(f"Con diferencias vs plataforma: {sum(1 for r in rows if r[3])} · con problemas: {sum(1 for r in rows if r[2])}")
    print(f"Salidas: {OUT.relative_to(ROOT)}, {REPORT.relative_to(ROOT)}")


if __name__ == "__main__":
    sys.exit(main())
