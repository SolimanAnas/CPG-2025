# EMPACT Course Reviewer

A self-contained study reviewer for **EMPACT (Emergency Medical Patients: Assessment, Care
& Transport)** — systematic medical-patient assessment for EMS providers. Built for
incorporating into an app: pure JSON data + a standalone HTML reviewer, cloned from the
SmartCare BLS/BDLS reviewer architecture.

## What's inside

```
empact/
├── index.html            ← the reviewer app (open in a browser)
├── build.py              ← regenerates data/bundle.js from the JSON + validates
├── data/
│   ├── bundle.js         ← all data bundled as window.EMPACT_DATA (offline-capable)
│   └── empact/
│       ├── manifest.json            ← course + chapter index
│       ├── chapters/c01..c10.json   ← summary, objectives, pearls, red flags, mistakes, memory aids, decision trees
│       ├── flashcards/c01..c10.json ← Q/A cards
│       ├── quizzes/c01..c10.json    ← differential-diagnosis MCQs with rationale
│       ├── scenarios/c01..c10.json  ← patient case scenarios with explanations
│       ├── algorithms/c01..c10.json ← structured assessment/management algorithms
│       └── tables/c01..c10.json     ← structured comparison tables
```

## Content totals

Recorded after authoring (see `python build.py` coverage table): 10 chapters spanning the
systematic assessment approach and differential diagnosis, airway management, respiratory,
cardiovascular, shock, neurological, endocrine, abdominal/GI, infectious disease/sepsis/
anaphylaxis, and oncologic/special medical considerations.

## Running the reviewer

**Option A — double-click (offline):** open `index.html`; it loads `data/bundle.js`
(`window.EMPACT_DATA`). Tabs: Summary / Flashcards / Quiz / Scenarios / Algorithms / Tables.
Progress persists in `localStorage` under `empact_`-prefixed keys.

**Option B — served:** serve over HTTP; without `bundle.js` the app falls back to fetching
the per-chapter JSON.

After editing any JSON, run `python build.py` — it rebuilds the bundle and validates JSON
parse, globally unique IDs, and chapter cross-references.

## Schema quick reference

Identical to the BLS/BDLS reviewers: chapters, flashcards (`cards[]`), quizzes
(`questions[]`, 0-based `correct`), scenarios (`cases[]`), algorithms (`algorithms[]` with
`steps[]`), tables (`tables[]` with `headers[]`/`rows[][]`). IDs follow `cNN_qMM` /
`cNN_fcMM` / `cNN_sMM` and are unique across the course.

## Content provenance

This reviewer expands the clinical pearls and exam bank already present in
`src/EMPACT/pearls.json` (47 pearls) and `src/EMPACT/exam1.json` (50 questions), which
formed the seed content. Every fact from the original pearls is preserved and traceable to
a chapter; all reviewer content is rewritten in original wording, organized around a
systematic, assessment-based approach: scene size-up, primary/secondary assessment,
differential diagnosis (possibilities → probabilities), and management of the major
medical-complaint categories.

**Naming note:** `data/courses.json` titles this course "Emergency Medical Patients:
Assessment, Care & Transport," which this reviewer follows. The `<meta>` tags in the
existing `pages/empact.html` describe a different framing ("Emergency Medicine Physician
Assistant Certification Test" prep) — that discrepancy predates this reviewer and was not
resolved by editing `pages/empact.html`, which is out of scope here. EMPACT is not tied to
a single outside certifying body or dated guideline edition (unlike the BLS/ACLS/PALS/BDLS
reviewers); it reflects general, current EMS assessment-based patient-management practice.

> Educational reviewer content, rewritten in original summary form. Not a substitute for
> formal EMS education, certification, or local protocols.
