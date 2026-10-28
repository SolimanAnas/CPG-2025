"""Save the text of official CPG PDF sections to data/cpg-source/.

The rewritten guideline pages (content/*.js with a `guide`, content/drugs/*.js
drug sheets) are checked against these files by tests/test_cpg_guides.py,
so every number and dose on a page must appear in the official text.

Usage: python3 scripts/extract_cpg_source.py 3_2_Adult_Bradycardia [...]
Needs `pdftotext` (poppler-utils).
"""

import subprocess  # nosec B404
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PDF_DIR = ROOT / "pdf_sections"
OUT_DIR = ROOT / "data" / "cpg-source"


def extract(name: str) -> Path:
    pdf = PDF_DIR / f"{name}.pdf"
    if not pdf.is_file():
        raise SystemExit(f"No such PDF: {pdf}")
    out = OUT_DIR / f"{name}.txt"
    text = subprocess.run(  # nosec B603 B607
        ["pdftotext", "-layout", str(pdf), "-"],
        check=True,
        capture_output=True,
        text=True,
    ).stdout
    out.write_text(text.replace("\f", "\n"), encoding="utf-8")
    return out


def main(names: list[str]) -> None:
    if not names:
        raise SystemExit(__doc__)
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for name in names:
        print(extract(name).relative_to(ROOT))


if __name__ == "__main__":
    main(sys.argv[1:])
