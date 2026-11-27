#!/usr/bin/env python3
"""
Verifica los datos institucionales de Aurelio contra las fuentes oficiales descargadas.

Para cada entrada de supabase/functions/aurelio-chat/knowledge/puce.json:
  - Fuente HTML o PDF: cada cita debe aparecer textualmente en la fuente (se ignoran mayúsculas
    y espacios). Si falta una, la entrada queda verificado=false con el motivo.
  - Fuente imagen: la transcripción se hizo a mano; se guarda el sha256 de la imagen transcrita.
    Si la imagen publicada cambia, la entrada queda verificado=false hasta volver a transcribirla.

Uso:
  python3 scripts/puce/verify_facts.py                       # verifica y actualiza 'verificado'
  python3 scripts/puce/verify_facts.py --registrar-imagenes  # guarda el hash de imágenes recién transcritas (PENDIENTE)

Requiere haber ejecutado antes fetch_sources.py.
"""

import argparse
import hashlib
import json
import re
import subprocess
import sys
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from parse_landings import html_to_lines  # noqa: E402

ROOT = Path(__file__).resolve().parents[2]
KB = ROOT / "supabase" / "functions" / "aurelio-chat" / "knowledge" / "puce.json"
MANIFEST = ROOT / "data" / "puce" / "manifest.json"


def norm(s: str) -> str:
    s = re.sub(r"\s+", " ", s or "")
    s = re.sub(r"\s+([,.;:)!?])", r"\1", s)
    s = re.sub(r"([(¿¡])\s+", r"\1", s)
    return s.strip().casefold()


def index_sources(manifest) -> dict:
    """URL -> archivo descargado, para todas las fuentes del manifiesto."""
    idx = {}

    def add(rec):
        if rec and rec.get("status") == 200 and rec.get("file"):
            idx[rec["url"].rstrip("/")] = ROOT / rec["file"]

    for entry in manifest.get("careers", {}).values():
        add(entry.get("landing"))
        add(entry.get("brochure"))
    for rec in manifest.get("institutional", {}).values():
        add(rec)
        for doc in rec.get("documentos", []):
            add(doc)
    return idx


_text_cache: dict = {}


def source_text(path: Path) -> str:
    if path not in _text_cache:
        if path.suffix.lower() == ".pdf":
            raw = subprocess.run(["pdftotext", "-layout", str(path), "-"], capture_output=True, text=True, check=True).stdout
        else:
            raw = " ".join(html_to_lines(path.read_text(encoding="utf8", errors="replace")))
        _text_cache[path] = norm(raw)
    return _text_cache[path]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--registrar-imagenes", action="store_true", help="guardar el hash de las imágenes con transcripción PENDIENTE")
    args = parser.parse_args()

    kb = json.loads(KB.read_text(encoding="utf8"))
    manifest = json.loads(MANIFEST.read_text(encoding="utf8"))
    idx = index_sources(manifest)
    today = date.today().isoformat()
    ok = 0

    for e in kb["entradas"]:
        path = idx.get(e["fuente"].rstrip("/"))
        reason = None
        if path is None or not path.exists():
            reason = "la fuente no está descargada (ejecutar fetch_sources.py o agregarla a su lista)"
        elif e.get("tipo") == "imagen":
            digest = hashlib.sha256(path.read_bytes()).hexdigest()
            if e.get("sha256_transcrito") == "PENDIENTE" and args.registrar_imagenes:
                e["sha256_transcrito"] = digest
            if e.get("sha256_transcrito") != digest:
                reason = "la imagen cambió (o no se registró) desde su transcripción: revisarla y volver a transcribir"
        else:
            text = source_text(path)
            missing = [c for c in e.get("citas", []) if norm(c) not in text]
            if not e.get("citas"):
                reason = "no tiene citas"
            elif missing:
                reason = "citas no encontradas en la fuente: " + " | ".join(missing)

        e["verificado"] = reason is None
        e["verificado_en"] = today
        if reason:
            e["motivo"] = reason
        else:
            e.pop("motivo", None)
            ok += 1
        print(f"{'✅' if reason is None else '❌'} {e['id']:32} {reason or ''}")

    KB.write_text(json.dumps(kb, ensure_ascii=False, indent=2) + "\n", encoding="utf8")
    print(f"\nVerificados: {ok}/{len(kb['entradas'])}")
    return 0 if ok == len(kb["entradas"]) else 1


if __name__ == "__main__":
    sys.exit(main())
