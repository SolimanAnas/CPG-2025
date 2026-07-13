# ITLS Course Reviewer

A self-contained study reviewer for **ITLS (International Trauma Life Support)**, generated from the c1–c22 chapter PDFs. Built for incorporating into an app: pure JSON data + a standalone HTML reviewer.

## What's inside

```
Claude/
├── index.html            ← the reviewer app (open in a browser)
├── build.py              ← regenerates data/bundle.js from the JSON + validates
├── data/
│   ├── bundle.js         ← all data bundled as window.ITLS_DATA (lets index.html run offline)
│   └── itls/
│       ├── manifest.json         ← course + chapter index
│       ├── chapters/c01..c22.json   ← summary, objectives, pearls, red flags, mistakes, memory aids, decision trees
│       ├── flashcards/c01..c22.json ← Q/A cards (444 total)
│       ├── quizzes/c01..c22.json    ← NREMT/ITLS-style MCQs with rationale (455 total)
│       ├── scenarios/c01..c22.json  ← EMS case scenarios with vitals + explanations (66 total)
│       ├── algorithms/   ← structured clinical algorithms (c01 sample)
│       └── tables/       ← structured comparison tables (c01 sample)
```

## Content totals
- 22 chapters
- 444 flashcards
- 455 quiz questions (with rationales and difficulty)
- 66 clinical scenarios (with vitals, correct answer, explanation, clinical pearl)

## Running the reviewer

**Option A — double-click (offline):** Open `index.html` directly. It loads `data/bundle.js`
(`window.ITLS_DATA`), so it works with no web server. Features: chapter sidebar with search,
Summary / Flashcards / Quiz / Scenarios tabs, flip-cards, scored quizzes, and progress saved
to `localStorage`.

**Option B — served:** Serve the folder over HTTP (`python -m http.server` from `Claude/`).
If `bundle.js` is absent, `index.html` falls back to fetching the individual JSON files.

## Regenerating / extending

The per-chapter JSON files are the **canonical source**. After editing any JSON, run:

```
python build.py
```

This rebuilds `data/bundle.js` and validates: JSON parse, unique IDs across all content,
and chapter cross-references. It prints a coverage table and exits non-zero on errors.

## Integrating into your app

- Consume the per-chapter JSON directly (stable schema, consistent IDs like `c10_q03`, `c08_fc14`, `c06_s02`).
- IDs are unique across the whole course, so they can be used as primary keys.
- No HTML or JavaScript is embedded inside the JSON — it is pure data, UTF-8, pretty-printed.

## Schema quick reference

- **chapters/cNN.json**: `id, title, shortTitle, estimatedStudyTime, difficulty, learningObjectives[], summary[{title,content}], clinicalPearls[], redFlags[], commonMistakes[], memoryAids[], decisionTrees[{title,content}], references[]`
- **flashcards/cNN.json**: `chapter, cards[{id, question, answer, category}]`
- **quizzes/cNN.json**: `chapter, questions[{id, question, options[], correct (index), rationale, difficulty}]`
- **scenarios/cNN.json**: `chapter, cases[{id, title, presentation, vitals{}, question, options[], correct (index), explanation, clinicalPearl}]`

> Educational reviewer content, rewritten in original summary form from the ITLS curriculum.
> Not a substitute for the official ITLS course, certification, or local protocols.
