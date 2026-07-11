# PALS Course Reviewer

A self-contained study reviewer for **PALS (Pediatric Advanced Life Support)**, aligned to the
**AHA/AAP 2025 Guidelines for CPR and ECC**. Built for incorporating into an app: pure JSON
data + a standalone HTML reviewer.

## What's inside

```
pals/
├── index.html            ← the reviewer app (open in a browser)
├── build.py              ← regenerates data/bundle.js from the JSON + validates
├── data/
│   ├── bundle.js         ← all data bundled as window.PALS_DATA (lets index.html run offline)
│   └── pals/
│       ├── manifest.json         ← course + chapter index
│       ├── chapters/c01..c13.json   ← summary, objectives, pearls, red flags, mistakes, memory aids, decision trees
│       ├── flashcards/c01..c13.json ← Q/A cards
│       ├── quizzes/c01..c13.json    ← AHA-PALS-style MCQs with rationale
│       ├── scenarios/c01..c13.json  ← case scenarios with vitals + explanations
│       ├── algorithms/c01..c13.json ← structured clinical algorithms
│       └── tables/c01..c13.json     ← structured comparison tables
```

## Content totals

- 13 chapters
- ≥ 190 flashcards
- ≥ 215 quiz questions (with rationales and difficulty)
- 39 clinical scenarios (with vitals, correct answer, explanation, clinical pearl)
- ≥ 11 structured clinical algorithms
- ≥ 10 structured comparison tables

The chapters cover the PALS Provider curriculum: systematic approach, pediatric assessment
triangle, BLS foundation, airway management, respiratory distress and failure, shock recognition
and management, cardiac arrest (VF/pVT and asystole/PEA), pharmacology and weight-based
dosing, bradycardia, tachycardia, post-cardiac arrest care, and special circumstances.

## Running the reviewer

**Option A — double-click (offline):** Open `index.html` directly. It loads `data/bundle.js`
(`window.PALS_DATA`), so it works with no web server. Features: chapter sidebar with search,
Summary / Flashcards / Quiz / Scenarios / Algorithms / Tables tabs, flip-cards, scored
quizzes, and progress saved to `localStorage` (all keys namespaced with `pals_`).

**Option B — served:** Serve the folder over HTTP (`python -m http.server` from `pals/`).
If `bundle.js` is absent, `index.html` falls back to fetching the individual JSON files.

## Regenerating / extending

The per-chapter JSON files are the **canonical source**. After editing any JSON, run:

```
python build.py
```

This rebuilds `data/bundle.js` and validates: JSON parse, unique IDs across all content,
and chapter cross-references. It prints a coverage table and exits non-zero on errors.

## Integrating into your app

- Consume the per-chapter JSON directly (stable schema, consistent IDs like `c03_q05`, `c09_fc12`, `c10_s02`).
- IDs are unique across the whole course, so they can be used as primary keys.
- No HTML or JavaScript is embedded inside the JSON — it is pure data, UTF-8, pretty-printed.

## Schema quick reference

- **chapters/cNN.json**: `id, title, shortTitle, estimatedStudyTime, difficulty, learningObjectives[], summary[{title,content}], clinicalPearls[], redFlags[], commonMistakes[], memoryAids[], decisionTrees[{title,content}], references[]`
- **flashcards/cNN.json**: `chapter, cards[{id, question, answer, category}]`
- **quizzes/cNN.json**: `chapter, questions[{id, question, options[], correct (index), rationale, difficulty}]`
- **scenarios/cNN.json**: `chapter, cases[{id, title, presentation, vitals{}, question, options[], correct (index), explanation, clinicalPearl}]`
- **algorithms/cNN.json**: `chapter, algorithms[{id, title, description, steps[]}]`
- **tables/cNN.json**: `chapter, tables[{id, title, headers[], rows[[]]}]`

## Guideline provenance

Clinical content reflects the **2025 AHA/AAP Guidelines for CPR and ECC — Part 8: Pediatric
Advanced Life Support**, published in *Circulation* on October 22, 2025. These guidelines are
jointly issued by the American Heart Association and the American Academy of Pediatrics.

Verified 2025 changes reflected throughout the content:

- **Early epinephrine for nonshockable rhythms:** the initial dose should be given as early as
  possible — ideally within the first 3–5 minutes of pulselessness — while ensuring effective
  compressions and ventilation. For shockable rhythms, the optimal timing relative to
  defibrillation remains unknown; prioritize defibrillation first.
- **Post-arrest temperature control:** for comatose children after ROSC, actively prevent fever
  and maintain core temperature at or below 37.5°C (99.5°F). A 5-day course of targeted
  temperature management is reasonable: either 32–34°C for 48 hours followed by 36–37.5°C,
  or maintaining 36–37.5°C throughout. Hypothermic TTM is not widely recommended but may be
  considered in selected cases.
- **Fluid-refractory septic shock:** either epinephrine or norepinephrine is acceptable as the
  first-line vasoactive medication. Recent evidence suggests norepinephrine may have a mortality
  benefit in children without known cardiac dysfunction, but the evidence is not yet definitive.
- **Cuffed ET tubes:** cuffed endotracheal tubes are now preferred for most pediatric patients.
  The Duracher formula (age/4 + 3.5, rounded to nearest 0.5mm) is recommended for cuffed tube
  sizing in children ages 1–12.
- **Age-banded vital signs:** confirmed standard pediatric vital sign ranges and the hypotension
  formula — systolic BP < 70 + (2 × age in years) for children 1–10 years.
- **Ventilation rate with advanced airway:** 1 breath every 2–3 seconds (20–30 breaths/min),
  consistent with BLS pediatric guidance.
- **Opioid emergencies:** the 2025 algorithm integrates naloxone guidance; opioid antagonist
  administration is recommended for children in cardiac arrest with suspected opioid overdose,
  provided it does not interfere with standard resuscitation including high-quality
  compression-ventilation CPR.
- **Algorithm updates:** the 2025 Pediatric Cardiac Arrest, Bradycardia, and Tachycardia
  algorithms were reviewed and content reflects the current structured steps.

Verified October 2025 against: AHA Newsroom guideline release, *Circulation* Part 8 (Pediatric
Advanced Life Support), AHA 2025 Algorithm PDFs, AHA 2025 Guideline Highlights, and
corroborating professional summaries. Where a 2025-specific detail could not be confirmed,
the stable 2020-guideline value is used and noted.

> Educational reviewer content, rewritten in original summary form from AHA guideline concepts.
> Not a substitute for an official AHA PALS Provider course, certification card, or local protocols.
