"""Rewritten CPG pages must match the official text.

Every guideline written for cpg-guide.js (content/*.js with a `guide`) and
every drug sheet (content/drugs/*.js setting window.CPG_DRUG) names its source
PDF. Each number on the page – doses, rates, ages, times, thresholds – must
appear in that PDF's text (data/cpg-source/), so a typo or an invented value
fails the build.
"""

import html
import json
import re
import shutil
import subprocess  # nosec B404
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"
SOURCES = ROOT / "data" / "cpg-source"

# Keys that hold links, ids or page numbers rather than clinical text.
SKIP_KEYS = {
    "id",
    "href",
    "pdf",
    "pages",
    "group",
    "type",
    "icon",
    "tone",
    "start",
    "level",
    "label",
}

UNITS = (
    r"mcg/kg/min|mg/kg|mcg/min|mcg|mg|ml|l/min|breaths/min|/min|bpm|mmhg|°c|%|j|cm|"
    r"minutes|minute|seconds|weeks|years|st|nd|rd|th"
)
NUMBER = re.compile(
    r"(?<![a-z0-9.])(\d+(?:\.\d+)?(?:\s*-\s*\d+(?:\.\d+)?)?)(?:\s*(" + UNITS + r")(?![a-z]))?"
)


def unify(text: str) -> str:
    return re.sub(r"[‐-―−]", "-", text.lower())


def page_text(text: str) -> str:
    """A page string without its inline tags (<b>, <sub>) and entities."""
    return unify(html.unescape(re.sub(r"<[^>]+>", "", text)))


def squash(text: str) -> str:
    return re.sub(r"\s+", "", text)


def load(path: Path) -> dict | None:
    """The page data a content file defines, via node (it is plain JS)."""
    script = (
        "global.window = {};"
        f"require({json.dumps(str(path))});"
        "const d = window.CPG_DATA, g = d && d.guide;"
        "console.log(JSON.stringify(g || window.CPG_DRUG || null));"
    )
    out = subprocess.run(  # nosec B603 B607
        ["node", "-e", script], check=True, capture_output=True, text=True
    ).stdout
    return json.loads(out)


def strings(node, key=None):
    if key in SKIP_KEYS:
        return
    if isinstance(node, str):
        yield node
    elif isinstance(node, list):
        for item in node:
            yield from strings(item)
    elif isinstance(node, dict):
        for k, v in node.items():
            yield from strings(v, k)


def rewritten_pages():
    if not shutil.which("node"):
        return []
    pages = []
    for path in sorted([*CONTENT.glob("*.js"), *CONTENT.glob("drugs/*.js")]):
        text = path.read_text(encoding="utf-8")
        if "guide:" in text or "window.CPG_DRUG" in text:
            pages.append(path)
    return pages


PAGES = rewritten_pages()


@pytest.mark.skipif(not shutil.which("node"), reason="node is needed to read content files")
def test_pilot_pages_are_rewritten():
    names = {p.name for p in PAGES}
    assert {"c3-2.js", "c4-3.js", "m3.js"} <= names


@pytest.mark.parametrize("path", PAGES, ids=[p.name for p in PAGES])
def test_numbers_match_the_official_text(path):
    data = load(path)
    assert data, f"{path.name} defines no guide or drug sheet"
    pdf = Path(data["source"]["pdf"]).name
    source_file = SOURCES / pdf.replace(".pdf", ".txt")
    assert source_file.is_file(), (
        f"Missing {source_file.relative_to(ROOT)}: run scripts/extract_cpg_source.py {pdf[:-4]}"
    )
    # Plain text: "<" and ">" in it are values ("<10 seconds"), never tags.
    source = squash(unify(source_file.read_text(encoding="utf-8")))

    missing = []
    for text in strings(data):
        for number, unit in NUMBER.findall(page_text(text)):
            token = squash(number + (unit or ""))
            if token not in source:
                missing.append(f"{token!r} in: {html.unescape(re.sub('<[^>]+>', '', text))}")
    assert not missing, "Not in the official text:\n" + "\n".join(missing)
