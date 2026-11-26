#!/usr/bin/env python3
"""
Actualiza toda la base de conocimiento oficial de Aurelio en un solo paso:

  1. fetch_sources.py   descarga páginas, brochures, tabla de aranceles e imágenes oficiales
  2. parse_landings.py  extrae los datos de la página de cada carrera
  3. parse_brochures.py extrae la malla e itinerarios de cada brochure
  4. parse_aranceles.py extrae la tabla oficial de aranceles 2026
  5. build_official.py  consolida, compara con la plataforma y genera el informe
  6. verify_facts.py    comprueba las citas de cada dato institucional
  7. exportar_conocimiento.mjs genera los archivos que usan la Edge Function y el navegador

Uso: python3 scripts/puce/actualizar.py [--refresh]
     --refresh vuelve a descargar todo aunque la caché tenga menos de 24 h.
Después: revisar docs/aurelio/extraccion_oficial.md, hacer commit y desplegar la Edge Function.
"""

import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent


def run(cmd):
    print(f"\n$ {' '.join(cmd)}", flush=True)
    return subprocess.run(cmd, cwd=ROOT).returncode


def main():
    refresh = ["--refresh"] if "--refresh" in sys.argv else []
    steps = [
        [sys.executable, "-I", str(HERE / "fetch_sources.py"), *refresh],
        [sys.executable, "-I", str(HERE / "parse_landings.py")],
        [sys.executable, "-I", str(HERE / "parse_brochures.py")],
        [sys.executable, "-I", str(HERE / "parse_aranceles.py")],
        [sys.executable, "-I", str(HERE / "build_official.py")],
    ]
    for cmd in steps:
        if run(cmd) != 0:
            print("\nFalló un paso: se detiene la actualización.")
            return 1
    facts_ok = run([sys.executable, "-I", str(HERE / "verify_facts.py")]) == 0
    if run(["node", str(ROOT / "scripts" / "aurelio" / "exportar_conocimiento.mjs")]) != 0:
        return 1
    if not facts_ok:
        print("\nAtención: hay datos institucionales sin verificar (ver arriba). Aurelio no los usará.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
