#!/usr/bin/env python3
"""
Extrae el Anexo 2 de la "Tabla de aranceles, matrículas y derechos" oficial de la PUCE:
matrícula y arancel por carrera para estudiantes que ingresan en carreras repotenciadas desde 2023-02.

Entrada: el PDF enlazado en www.puce.edu.ec/aranceles/ (ver fetch_sources.py, carpeta .cache/puce/docs)
Salida:  data/puce/aranceles.json
"""

import json
import re
import subprocess
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = ROOT / "data" / "puce" / "manifest.json"
OUT = ROOT / "data" / "puce" / "aranceles.json"


def norm(s):
    s = unicodedata.normalize("NFD", str(s or "").lower())
    return re.sub(r"\s+", " ", "".join(c for c in s if unicodedata.category(c) != "Mn")).strip()


def amount(s):
    return float(s.replace(".", "").replace(",", "."))


def main():
    manifest = json.loads(MANIFEST.read_text(encoding="utf8"))
    docs = manifest["institutional"].get("aranceles", {}).get("documentos", [])
    doc = next((d for d in docs if "arancel" in d["url"].lower() and d.get("status") == 200), None)
    if not doc:
        print("No se encontró el PDF de aranceles en el manifiesto.")
        return 1
    text = subprocess.run(["pdftotext", "-layout", str(ROOT / doc["file"]), "-"], capture_output=True, text=True, check=True).stdout

    updated = re.search(r"Actualizado:\s*([^\n]+)", text)
    start = text.find("ANEXO 2")
    end = text.find("ANEXO 3", start)
    section = text[start:end]
    rows = {}
    for m in re.finditer(r"(Q\d{3})\s+(.+?)\s{2,}([\d.]+,\d{2})\s+([\d.]+,\d{2})\s+([\d.]+,\d{2})", section):
        code, name, mat, regular, partial = m.groups()
        rows[code] = {
            "codigo": code,
            "carrera": name.strip(),
            "matricula": amount(mat),
            "arancel_regular": amount(regular),
            "arancel_no_regular": amount(partial),
        }
    notes = [n.strip() for n in re.findall(r"\(\*+\)\s*([^\n]+(?:\n(?!\(\*)[^\n]+)?)", section)]

    general = {}
    for label, pattern in (
        ("matricula_grado", r"MATR[ÍI]CULA ESTUDIANTES DE GRADO \(Excepto Ingenier[íi]a Integral ICAM\)\s+([\d.]+,\d{2})"),
        ("seguro_medico_voluntario_semestral_grado", r"SEGURO M[ÉE]DICO VOLUNTARIO SEMESTRAL GRADO[^\n]*?\s+([\d.]+,\d{2})"),
        ("aporte_asociaciones_escuela_grado", r"APORTE ASOCIACIONES ESCUELA - GRADO\s+([\d.]+,\d{2})"),
        ("curso_idiomas", r"CURSOS DE IDIOMAS \(EDUCACI[ÓO]N CONTINUA\)\s+([\d.]+,\d{2})"),
    ):
        m = re.search(pattern, text)
        general[label] = amount(m.group(1)) if m else None
    no_fee = re.search(r"Nota: (No se realizar[áa] cobro de inscripci[óo]n[^\n]+)", text)

    out = {
        "fuente": doc["url"],
        "pagina": manifest["institutional"]["aranceles"]["url"],
        "fecha_descarga": doc.get("fetched_at"),
        "sha256": doc.get("sha256"),
        "actualizado": updated.group(1).strip() if updated else None,
        "alcance": "Estudiantes que ingresan en carreras repotenciadas desde 2023-02, modalidad presencial y semipresencial (Anexo 2). Valores por semestre en USD.",
        "generales": general,
        "nota_inscripcion": no_fee.group(1).strip() if no_fee else None,
        "notas": notes,
        "carreras": rows,
    }
    OUT.write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf8")
    print(f"Actualizado: {out['actualizado']} · carreras en Anexo 2: {len(rows)} · generales: {general}")
    print(f"Salida: {OUT.relative_to(ROOT)}")
    return 0 if rows else 1


if __name__ == "__main__":
    sys.exit(main())
