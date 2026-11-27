#!/usr/bin/env python3
"""
Descarga las fuentes públicas oficiales de la PUCE que usa Aurelio.

  - Página oficial de cada carrera (www.puce.edu.ec/landing-<carrera>/)
  - Brochure PDF enlazado en el botón "BROCHURE" de esa página
  - Páginas institucionales (aranceles, becas, admisiones, internacionalización, etc.)

Uso:
  python3 scripts/puce/fetch_sources.py            # usa la caché si el archivo tiene menos de 24 h
  python3 scripts/puce/fetch_sources.py --refresh  # vuelve a descargar todo

Salida:
  .cache/puce/            archivos descargados (no se suben a git)
  data/puce/manifest.json procedencia de cada fuente: URL, fecha de descarga, tamaño y sha256

Solo usa la biblioteca estándar. Espera entre solicitudes para no sobrecargar el sitio.
"""

import argparse
import hashlib
import json
import re
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".cache" / "puce"
MANIFEST = ROOT / "data" / "puce" / "manifest.json"
BASE = "https://www.puce.edu.ec"
USER_AGENT = "Mozilla/5.0 (compatible; OrientaPUCE-data-check/1.0; proyecto academico)"
DELAY_SECONDS = 1.5
MAX_AGE_SECONDS = 24 * 3600

# Clave de la carrera en la plataforma -> slug de su página oficial.
CAREER_LANDINGS = {
    "ingenieria_integral": "landing-ingenieria-integral",
    "arquitectura": "landing-arquitectura",
    "ciencia_datos": "landing-ciencia-de-datos",
    "diseno_grafico": "landing-diseno-grafico",
    "ingenieria_civil": "landing-ingenieria-civil",
    "sistemas_informacion": "landing-ingenieria-en-sistemas-de-informacion",
    "biologia": "landing-biologia",
    "quimica": "landing-quimica",
    "medicina": "landing-medicina",
    "enfermeria": "landing-enfermeria",
    "odontologia": "landing-odontologia",
    "fisioterapia": "landing-fisioterapia",
    "nutricion": "landing-nutricion-y-dietetica",
    "psicologia_clinica": "landing-psicologia-clinica",
    "bioingenieria": "landing-bioingenieria",
    "ciencias_biomedicas": "landing-ciencias-biomedicas",
    "laboratorio_clinico": "landing-laboratorio-clinico",
    "microbiologia": "landing-microbiologia",
    "veterinaria": "landing-veterinaria",
    "derecho": "landing-derecho",
    "relaciones_internacionales": "landing-relaciones-internacionales",
    "comunicacion": "landing-comunicacion",
    "lenguas_aplicadas": "landing-lenguas-aplicadas-a-los-estudios-globales",
    "linguistica": "landing-linguistica",
    "literatura": "landing-literatura",
    "educacion_inicial": "landing-educacion-inicial-presencial",
    "psicologia_educativa": "landing-psicologia-educativa",
    "artes_visuales": "landing-artes-visuales",
    "filosofia": "landing-filosofia",
    "teologia": "landing-teologia",
    "administracion_empresas": "landing-administracion-de-empresas",
    "turismo": "landing-administracion-en-turismo-y-hospitalidad",
    "contabilidad": "landing-contabilidad-y-auditoria",
    "economia_carrera": "landing-economia",
    "finanzas": "landing-finanzas",
    "marketing": "landing-marketing",
    "negocios_internacionales": "landing-negocios-internacionales",
    "fpe": "landing-filosofia-politica-economia",
    "psicologia_organizacional": "landing-psicologia-organizacional",
}

# Páginas institucionales: id -> ruta. Fuente de los datos de puce.json.
INSTITUTIONAL_PAGES = {
    "inicio": "/",
    "grado": "/grado/",
    "admisiones-grado": "/admisiones/grado/",
    "examen-de-ingreso": "/admisiones/grado/examen-de-ingreso/",
    "curso-de-admision": "/admisiones/grado/curso-de-admision/",
    "admisiones-convenios": "/admisiones/grado/convenios/",
    "aranceles": "/aranceles/",
    "financiamiento-y-becas": "/financiamiento-y-becas/",
    "becas": "/financiamiento-y-becas/becas/",
    "financiamiento-estudiantil": "/financiamiento-estudiantil/",
    "beca-excelencia-academica": "/financiamiento-y-becas/becas/excelencia-academica/",
    "beca-abanderados": "/financiamiento-y-becas/becas/abanderados-mejores-egresados-y-escoltas/",
    "beca-deportistas": "/financiamiento-y-becas/becas/deportistas-de-alto-rendimiento/",
    "beca-cultural": "/financiamiento-y-becas/becas/beca-cultural-puce/",
    "beca-igualdad": "/financiamiento-y-becas/becas/beca-igualdad-de-oportunidades/",
    "beca-discapacidad": "/financiamiento-y-becas/becas/beca-discapacidad/",
    "beca-pueblos": "/financiamiento-y-becas/becas/beca-pueblos-y-nacionalidades/",
    "beca-hermanos": "/financiamiento-y-becas/becas/becas-hermanos/",
    "beca-solidaridad": "/financiamiento-y-becas/becas/beca-solidaridad-grado/",
    "beca-intercambio": "/financiamiento-y-becas/becas/beca-para-intercambio-academico-internacional/",
    "beca-ausjal": "/financiamiento-y-becas/becas/ausjal/",
    "internacionalizacion": "/internacionalizacion-universitaria/",
    "internacionalizacion-estudiantes-puce": "/internacionalizacion-universitaria/estudiantes-puce/",
    "internacionalizacion-becas-intercambios": "/internacionalizacion-universitaria/becas-e-intercambios/",
    "internacionalizacion-convenios-redes": "/internacionalizacion-universitaria/convenios-y-redes-internacionales/",
    "internacionalizacion-preguntas": "/internacionalizacion-universitaria/preguntas-y-respuestas/",
    "quienes-somos": "/adn-puce/quienes-somos/",
    "mision-y-vision": "/mision-y-vision/",
    "identidad-y-mision": "/identidad-y-mision/",
    "calidad": "/calidad-en-la-puce/",
    "calidad-que-es": "/calidad-en-la-puce/que-es/",
    "biblioteca": "/biblioteca/",
    "biblioteca-nosotros": "/biblioteca/nosotros/",
    "centro-de-simulacion": "/centro-de-simulacion/",
    "estacion-yasuni": "/estacion-cientifica-yasuni/",
    "consultorios-juridicos": "/servicios/consultorios-juridicos-gratuitos/",
    "bienestar": "/bienestar-universitario/",
    "acompanamiento-integral": "/bienestar-universitario/acompanamiento-integral/",
    "puce-activa": "/bienestar-universitario/puce-activa/",
    "centro-cultural": "/centro-cultural/nosotros/",
    "idiomas": "/admisiones/idiomas/",
    "orientacion-vocacional": "/servicios-de-orientacion-vocacional-y-profesional/",
    "vinculacion": "/vinculacion-con-la-colectividad/",
    "facultad-habitat": "/facultad-de-habitat-infraestructura-y-creatividad/",
    "facultad-derecho": "/facultad-de-derecho-y-sociedad/",
    "facultad-economia": "/facultad-de-economia-y-gestion-empresarial/",
    "facultad-aprendizaje": "/facultad-de-aprendizaje-lenguas-y-comunicacion/",
    "facultad-salud": "/facultad-de-salud-y-bienestar/",
    "facultad-exactas": "/facultad-de-ciencias-exactas-naturales-y-ambientales/",
    "facultad-innovacion": "/facultad-internacional-de-innovacion/",
    "facultad-teologia": "/facultad-de-ciencias-filosofico-teologicas/",
    "ingenieria-integral-icam": "/admisiones/grado/ingenieria-integral-puce-icam/",
}

# Páginas cuyos PDF enlazados son fuente de datos (aranceles, admisión, financiamiento).
DOC_PAGES = {"aranceles", "examen-de-ingreso", "financiamiento-estudiantil", "financiamiento-y-becas", "admisiones-grado", "curso-de-admision", "becas", "idiomas"}

# Imágenes oficiales con cifras institucionales (se transcriben a mano en puce.json; el hash detecta cambios).
INSTITUTIONAL_IMAGES = {
    "imagen-indicador-qs": f"{BASE}/wp-content/uploads/2025/10/Indicador-QS.png",
    "imagen-mensajes-clave-2025": f"{BASE}/wp-content/uploads/2025/03/MENSAJES-CLAVE-2025@2x.png",
}

_last_request = 0.0


def fetch(url: str, dest: Path, refresh: bool) -> dict:
    """Descarga url en dest (con caché) y devuelve su registro para el manifiesto."""
    global _last_request
    if not refresh and dest.exists() and time.time() - dest.stat().st_mtime < MAX_AGE_SECONDS:
        status, from_cache = 200, True
    else:
        wait = DELAY_SECONDS - (time.time() - _last_request)
        if wait > 0:
            time.sleep(wait)
        _last_request = time.time()
        req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
        try:
            with urllib.request.urlopen(req, timeout=60) as res:
                body, status = res.read(), res.status
        except urllib.error.HTTPError as err:
            return {"url": url, "status": err.code, "error": str(err)}
        except Exception as err:  # red, timeout
            return {"url": url, "status": None, "error": str(err)}
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(body)
        from_cache = False
    data = dest.read_bytes()
    return {
        "url": url,
        "status": status,
        "file": str(dest.relative_to(ROOT)),
        "bytes": len(data),
        "sha256": hashlib.sha256(data).hexdigest(),
        "fetched_at": datetime.fromtimestamp(dest.stat().st_mtime, timezone.utc).isoformat(timespec="seconds"),
        "from_cache": from_cache,
    }


def linked_documents(page_html: str) -> list[str]:
    """PDF enlazados desde los botones de Divi de una página (et_link_options_data)."""
    m = re.search(r"et_link_options_data\s*=\s*(\[.*?\]);", page_html, re.S)
    if not m:
        return []
    try:
        links = json.loads(m.group(1))
    except json.JSONDecodeError:
        return []
    urls = [re.sub(r"^http://www\.puce\.edu\.ec", "https://www.puce.edu.ec", l.get("url", "")) for l in links]
    return [u for u in dict.fromkeys(urls) if u.lower().endswith(".pdf") and "puce.edu.ec" in u]


def brochure_url(landing_html: str):
    """El botón BROCHURE de Divi guarda su enlace en et_link_options_data."""
    m = re.search(r"et_link_options_data\s*=\s*(\[.*?\]);", landing_html, re.S)
    if not m:
        return None
    try:
        links = json.loads(m.group(1))
    except json.JSONDecodeError:
        return None
    pdfs = [l["url"] for l in links if str(l.get("url", "")).lower().endswith(".pdf")]
    # Algunas páginas enlazan por http://; el servidor solo responde bien por https.
    return re.sub(r"^http://www\.puce\.edu\.ec", "https://www.puce.edu.ec", pdfs[0]) if pdfs else None


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--refresh", action="store_true", help="ignorar la caché")
    parser.add_argument("--only", help="claves de carrera separadas por coma")
    args = parser.parse_args()

    manifest = {"generated_at": datetime.now(timezone.utc).isoformat(timespec="seconds"), "careers": {}, "institutional": {}}
    if MANIFEST.exists():
        previous = json.loads(MANIFEST.read_text(encoding="utf8"))
        manifest["careers"].update(previous.get("careers", {}))
        manifest["institutional"].update(previous.get("institutional", {}))

    only = set(args.only.split(",")) if args.only else None
    for key, slug in CAREER_LANDINGS.items():
        if only and key not in only:
            continue
        landing = fetch(f"{BASE}/{slug}/", CACHE / "landing" / f"{key}.html", args.refresh)
        entry = {"landing": landing}
        if landing.get("status") == 200:
            pdf = brochure_url((ROOT / landing["file"]).read_text(encoding="utf8", errors="replace"))
            if pdf:
                entry["brochure"] = fetch(pdf, CACHE / "brochure" / f"{key}.pdf", args.refresh)
            else:
                entry["brochure"] = {"url": None, "error": "la página no tiene enlace de brochure"}
        manifest["careers"][key] = entry
        b = entry.get("brochure", {})
        print(f"{key:28} landing={landing.get('status')} brochure={b.get('status')} {b.get('url') or b.get('error', '')}")

    if not only:
        for pid, path in INSTITUTIONAL_PAGES.items():
            rec = fetch(f"{BASE}{path}", CACHE / "pages" / f"{pid}.html", args.refresh)
            if rec.get("status") == 200 and pid in DOC_PAGES:
                docs = linked_documents((ROOT / rec["file"]).read_text(encoding="utf8", errors="replace"))
                rec["documentos"] = [fetch(u, CACHE / "docs" / Path(u).name, args.refresh) for u in docs]
            manifest["institutional"][pid] = rec
            print(f"{pid:40} {rec.get('status')} {len(rec.get('documentos', []))} documentos")
        for iid, url in INSTITUTIONAL_IMAGES.items():
            rec = fetch(url, CACHE / "images" / Path(url).name, args.refresh)
            manifest["institutional"][iid] = rec
            print(f"{iid:40} {rec.get('status')} (imagen)")

    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=1), encoding="utf8")
    failed = [k for k, v in manifest["careers"].items() if v["landing"].get("status") != 200 or v.get("brochure", {}).get("status") != 200]
    failed += [k for k, v in manifest["institutional"].items() if v.get("status") != 200]
    failed += [d["url"] for v in manifest["institutional"].values() for d in v.get("documentos", []) if d.get("status") != 200]
    print(f"\nManifiesto: {MANIFEST.relative_to(ROOT)} · fallidos: {failed or 'ninguno'}")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
