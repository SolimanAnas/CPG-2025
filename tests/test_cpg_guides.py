"""Rewritten CPG pages must match the official text.

Every guideline written for cpg-guide.js (content/*.js with a `guide`) and
every drug sheet (content/drugs/*.js setting window.CPG_DRUG) names its source
PDF. Each number on the page – doses, rates, ages, times, thresholds – must
appear in that PDF's text (data/cpg-source/), so a typo or an invented value
fails the build. The same goes for the right answers and explanations in the
page's quiz, flashcards and scenarios.
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
    "texts",
    "pages",
    "group",
    "type",
    "icon",
    "tone",
    "start",
    "level",
    "label",
    "ecg",
}

UNITS = (
    r"mcg/kg/min|mg/kg|mcg/min|mcg|mg|ml|l/min|breaths/min|/min|bpm|mmhg|°c|%|j|cm|"
    r"minute|second|hour|week|year|st|nd|rd|th"
)
NUMBER = re.compile(
    r"(?<![a-z0-9.])(\d+(?:\.\d+)?(?:\s*-\s*\d+(?:\.\d+)?)?)(?:\s*(" + UNITS + r")(?![a-z]))?"
)


def unify(text: str) -> str:
    text = re.sub(r"[‐-―−]", "-", text.lower())
    # "60 seconds" and the PDF's "60second" are the same value, as are
    # "11 years" and the PDF's "11yrs", and "38°C" and the PDF's "38oC".
    text = re.sub(r"(?<=\d)(\s*)yrs?\b", r"\1year", text)
    text = re.sub(r"(?<=\d)(\s*)oc\b", r"\1°c", text)
    return re.sub(r"\b(second|minute|hour|week|year)s\b", r"\1", text)


def page_text(text: str) -> str:
    """A page string without its inline tags (<b>, <sub>) and entities."""
    return unify(html.unescape(re.sub(r"<[^>]+>", "", text)))


def squash(text: str) -> str:
    return re.sub(r"\s+", "", text)


def load(path: Path) -> list[dict]:
    """The rewritten pages a content file defines, via node (it is plain JS).

    A chapter file may hold one guideline (CPG_DATA.guide) or several sections
    (CPG_DATA.sections[].guide); a drug sheet sets CPG_DRUG. Each page comes
    with its study sets."""
    script = (
        "global.window = {};"
        f"require({json.dumps(str(path))});"
        "const d = window.CPG_DATA || {};"
        "const units = d.sections ? d.sections : [d];"
        "const pages = units.filter(u => u.guide).map(u => ({name: u.id, page: u.guide,"
        " quiz: u.quiz || [], flashcards: u.flashcards || [], critical: u.critical || []}));"
        "if (window.CPG_DRUG) pages.push({name: window.CPG_DRUG.code, page: window.CPG_DRUG,"
        " quiz: [], flashcards: [], critical: []});"
        "console.log(JSON.stringify(pages));"
    )
    out = subprocess.run(  # nosec B603 B607
        ["node", "-e", script], check=True, capture_output=True, text=True
    ).stdout
    return json.loads(out)


def study_strings(data: dict):
    """The parts of the study sets that state facts: right answers and
    explanations. Wrong options and scenario stems (made-up vital signs) are
    not facts from the CPG, so they are not checked."""
    for q in data["quiz"]:
        yield q["options"][q["correct"]]
        yield q["explanation"]
    for card in data["flashcards"]:
        yield card["answer"]
    for c in data["critical"]:
        yield c["options"][c["correct"]]["t"]
        yield c["explanation"]
        yield c.get("kpi", "")


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
        if re.search(r"""["']?guide["']?\s*:""", text) or "window.CPG_DRUG" in text:
            pages += [(f"{path.name}:{p['name']}", p) for p in load(path)]
    return pages


PAGES = rewritten_pages()
IDS = [name for name, _ in PAGES]


@pytest.mark.skipif(not shutil.which("node"), reason="node is needed to read content files")
def test_pilot_pages_are_rewritten():
    names = {name.split(":")[0] for name in IDS}
    assert {"c3-2.js", "c4-3.js", "m3.js"} <= names


@pytest.mark.parametrize("name,data", PAGES, ids=IDS)
def test_study_sets_are_well_formed(name, data):
    for q in data["quiz"]:
        assert 0 <= q["correct"] < len(q["options"]), q["q"]
        assert len(set(q["options"])) == len(q["options"]), q["q"]
    for c in data["critical"]:
        assert 0 <= c["correct"] < len(c["options"]), c["id"]
    if data["page"].get("cpg"):  # guidelines keep all three study sets
        assert data["quiz"] and data["flashcards"] and data["critical"], name


@pytest.mark.parametrize("name,data", PAGES, ids=IDS)
def test_numbers_match_the_official_text(name, data):
    # One PDF section, or (an index page) the texts of several sections.
    src = data["page"]["source"]
    names = src.get("texts") or [Path(src["pdf"]).stem]
    texts = []
    for name in names:
        source_file = SOURCES / f"{name}.txt"
        assert source_file.is_file(), (
            f"Missing {source_file.relative_to(ROOT)}: run scripts/extract_cpg_source.py {name}"
        )
        texts.append(source_file.read_text(encoding="utf-8"))
    # Plain text: "<" and ">" in it are values ("<10 seconds"), never tags.
    source = squash(unify("\n".join(texts)))

    missing = []
    for text in [*strings(data["page"]), *study_strings(data)]:
        for number, unit in NUMBER.findall(page_text(text)):
            token = squash(number + (unit or ""))
            # Tables in the PDF give units in the header ("Systolic BP (mmHg)"),
            # so a range like "67-84" stands alone there; it is specific enough.
            if "-" in number and squash(number) in source:
                continue
            if token not in source:
                missing.append(f"{token!r} in: {html.unescape(re.sub('<[^>]+>', '', text))}")
    assert not missing, "Not in the official text:\n" + "\n".join(missing)
