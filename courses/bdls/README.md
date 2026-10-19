# BDLS Course Reviewer

A self-contained study reviewer for **BDLS (Basic Disaster Life Support)**, aligned to the
**NDLSF BDLS v4.0 curriculum**. Built for incorporating into an app: pure JSON data + a
standalone HTML reviewer, cloned from the SmartCare BLS reviewer architecture.

## What's inside

```
bdls/
├── index.html            ← the reviewer app (open in a browser)
├── build.py              ← regenerates data/bundle.js from the JSON + validates
├── data/
│   ├── bundle.js         ← all data bundled as window.BDLS_DATA (offline-capable)
│   └── bdls/
│       ├── manifest.json            ← course + chapter index
│       ├── chapters/c01..c10.json   ← summary, objectives, pearls, red flags, mistakes, memory aids, decision trees
│       ├── flashcards/c01..c10.json ← Q/A cards
│       ├── quizzes/c01..c10.json    ← course-style MCQs with rationale
│       ├── scenarios/c01..c10.json  ← disaster case scenarios with explanations
│       ├── algorithms/c01..c10.json ← structured response algorithms
│       └── tables/c01..c10.json     ← structured comparison tables
```

## Content totals

Recorded after authoring (see `python build.py` coverage table): 10 chapters spanning
disaster medicine foundations, the PRE-DISASTER and DISASTER paradigms, ICS/NIMS,
SALT mass-casualty triage, and the all-hazards chapters (natural, traumatic/explosive,
chemical, biological, radiological/nuclear), plus surge capacity, psychosocial care,
and vulnerable populations.

## Running the reviewer

**Option A — double-click (offline):** open `index.html`; it loads `data/bundle.js`
(`window.BDLS_DATA`). Tabs: Summary / Flashcards / Quiz / Scenarios / Algorithms / Tables.
Progress persists in `localStorage` under `bdls_`-prefixed keys.

**Option B — served:** serve over HTTP; without `bundle.js` the app falls back to fetching
the per-chapter JSON.

After editing any JSON, run `python build.py` — it rebuilds the bundle and validates JSON
parse, globally unique IDs, and chapter cross-references.

## Schema quick reference

Identical to the BLS reviewer (see `courses/bls/README.md`): chapters, flashcards
(`cards[]`), quizzes (`questions[]`, 0-based `correct`), scenarios (`cases[]`),
algorithms (`algorithms[]` with `steps[]`), tables (`tables[]` with `headers[]`/`rows[][]`).
IDs follow `cNN_qMM` / `cNN_fcMM` / `cNN_sMM` and are unique across the course.

## Curriculum provenance

Content reflects the **NDLSF BDLS v4.0 curriculum** (released 2020; confirmed current via
ndlsf.org, checked during authoring): the PRE-DISASTER Paradigm (mitigation/preparedness),
the DISASTER Paradigm (Detection, Incident command, Safety and security, Assess hazards,
Support, Triage and treatment, Evacuation, Recovery), CDC-sponsored **SALT** mass-casualty
triage (Sort, Assess, Lifesaving interventions, Treatment/transport) with its five
categories (Immediate, Delayed, Minimal, Expectant, Dead), and the all-hazards approach.
Where resuscitation intersects, content stays consistent with the AHA-2025-aligned BLS
reviewer. BDLS is a **National Disaster Life Support Foundation** course — not an AHA course.

> Educational reviewer content, rewritten in original summary form from public disaster-
> medicine curriculum concepts. Not a substitute for the official NDLSF BDLS course,
> certification, or local emergency-operations plans and protocols.
