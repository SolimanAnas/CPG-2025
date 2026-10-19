# PEPP Course Reviewer

A self-contained study reviewer for **PEPP (Pediatric Education for Prehospital Professionals)**,
based on the **AAP PEPP, 4th Edition**. Built for incorporating into an app: pure JSON data +
a standalone HTML reviewer, cloned from the SmartCare PALS reviewer architecture.

## What's inside

```
pepp/
├── index.html            ← the reviewer app (open in a browser)
├── build.py              ← regenerates data/bundle.js from the JSON + validates
├── data/
│   ├── bundle.js         ← all data bundled as window.PEPP_DATA (offline-capable)
│   └── pepp/
│       ├── manifest.json            ← course + chapter index
│       ├── chapters/c01..c14.json   ← summary, objectives, pearls, red flags, mistakes, memory aids, decision trees
│       ├── flashcards/c01..c14.json ← Q/A cards
│       ├── quizzes/c01..c14.json    ← PEPP-style MCQs with rationale
│       ├── scenarios/c01..c14.json  ← pediatric case scenarios with age-appropriate vitals
│       ├── algorithms/c01..c14.json ← structured assessment/management algorithms
│       └── tables/c01..c14.json     ← structured comparison tables
```

## Content totals

Recorded after authoring (see `python build.py` coverage table): 14 chapters spanning why
children are different, the Pediatric Assessment Triangle, primary/secondary assessment,
family-centered communication, respiratory distress/failure, shock, cardiac emergencies,
neurologic emergencies, trauma, toxic exposures, neonatal care, child maltreatment
recognition, children with special healthcare needs, and EMS operations/MCI triage.

## Running the reviewer

**Option A — double-click (offline):** open `index.html`; it loads `data/bundle.js`
(`window.PEPP_DATA`). Tabs: Summary / Flashcards / Quiz / Scenarios / Algorithms / Tables.
Progress persists in `localStorage` under `pepp_`-prefixed keys.

**Option B — served:** serve over HTTP; without `bundle.js` the app falls back to fetching
the per-chapter JSON.

After editing any JSON, run `python build.py` — it rebuilds the bundle and validates JSON
parse, globally unique IDs, and chapter cross-references.

## Schema quick reference

Identical to the PALS/BLS reviewers: chapters, flashcards (`cards[]`), quizzes
(`questions[]`, 0-based `correct`), scenarios (`cases[]`), algorithms (`algorithms[]` with
`steps[]`), tables (`tables[]` with `headers[]`/`rows[][]`). IDs follow `cNN_qMM` /
`cNN_fcMM` / `cNN_sMM` and are unique across the course.

## Curriculum & guideline provenance

Verified via web search, July 2026:

- The current published edition is **PEPP, Fourth Edition (2020)**, authored by the American
  Academy of Pediatrics and published by Jones & Bartlett Learning (Public Safety Group).
  A **Fifth Edition is announced for September 2026** — confirmed not yet shipped as of this
  writing, so the 4th edition remains authoritative for this reviewer.
- PEPP offers courses at two levels: a **BLS-level course** (EMRs/EMTs) and an **ALS-level
  course** (AEMTs/paramedics), sharing the same assessment framework, with the ALS course
  adding advanced interventions.
- The course's signature tool is the **Pediatric Assessment Triangle (PAT)** — a rapid,
  hands-off, across-the-room assessment of Appearance, Work of Breathing, and Circulation to
  Skin, used to form a general impression ("sick vs. not sick") and identify the likely
  physiologic category before hands-on primary assessment.
- PEPP's scope spans pediatric assessment, respiratory emergencies, shock, cardiac/rhythm
  disturbances, neurologic emergencies, trauma, toxic exposures/environmental emergencies,
  neonatal care, child maltreatment recognition, children with special healthcare needs,
  family-centered/developmental communication, and EMS operations including disaster/MCI
  triage involving children.

**PEPP does not duplicate PALS.** Where a chapter here touches cardiac arrest, weight-based
drug dosing, or defibrillation/cardioversion energies, this reviewer describes field
recognition and initial stabilization only, and explicitly points to the `courses/pals/`
reviewer for resuscitation depth — so the two reviewers never carry two conflicting sources
of truth for the same number. The age-banded normal vital sign table in this course
reuses the exact ranges already validated in `courses/pals/data/pals/tables/c01.json`.

Item-by-item resolution of the plan's verification list (`docs/PEPP.md` §2.3):
1. **5th edition status** — confirmed not shipped as of authoring (announced Sept 2026); 4th
   edition used throughout.
2. **Module/chapter list** — the 14-chapter plan here is a reasonable synthesis from public
   AAP/Jones & Bartlett materials (course description, fact sheet), not a verbatim table of
   contents from the course manual, which was not accessible for this build.
3. **BLS-vs-ALS content boundaries** — flagged per-chapter in the summary/decision-tree
   content where a skill or intervention is ALS-only (e.g., IO access, advanced airway
   adjuncts); kept general rather than asserting a jurisdiction-specific scope-of-practice
   rule.
4. **Child maltreatment reporting** — content in c12 is kept general/educational (recognition
   of concerning findings, the principle that all U.S. jurisdictions require reporting to
   the appropriate authority), without asserting specific statutory language, since mandatory
   reporting requirements vary by jurisdiction.
5. **Pediatric MCI triage tool** — JumpSTART is used in c14 as the pediatric-specific
   mass-casualty triage tool; no 2023–2025 supersession was found during this build (⚠️
   re-verify if a newer consensus tool has since been adopted).
6. **Shock/respiratory-failure field-management alignment with 2025 AHA/AAP Part 8** — this
   reviewer's field-recognition language was checked for consistency with the terms already
   used in `courses/pals/` (e.g., compensated/hypotensive shock terminology, respiratory
   distress vs. failure) rather than re-deriving them.

> Educational reviewer content, rewritten in original summary form. Not a substitute for the
> official AAP PEPP course, a completion card, or local protocols.
