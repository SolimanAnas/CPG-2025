# BLS Course Reviewer

A self-contained study reviewer for **BLS (Basic Life Support)**, aligned to the
**AHA 2025 Guidelines for CPR and ECC**. Built for incorporating into an app: pure JSON
data + a standalone HTML reviewer.

## What's inside

```
bls/
├── index.html            ← the reviewer app (open in a browser)
├── build.py              ← regenerates data/bundle.js from the JSON + validates
├── data/
│   ├── bundle.js         ← all data bundled as window.BLS_DATA (lets index.html run offline)
│   └── bls/
│       ├── manifest.json         ← course + chapter index
│       ├── chapters/c01..c12.json   ← summary, objectives, pearls, red flags, mistakes, memory aids, decision trees
│       ├── flashcards/c01..c12.json ← Q/A cards
│       ├── quizzes/c01..c12.json    ← AHA-BLS-style MCQs with rationale
│       ├── scenarios/c01..c12.json  ← case scenarios with vitals + explanations
│       ├── algorithms/c01..c12.json ← structured clinical algorithms
│       └── tables/c01..c12.json     ← structured comparison tables
```

## Content totals

- 12 chapters
- 190 flashcards
- 220 quiz questions (with rationales and difficulty)
- 36 clinical scenarios (with vitals, correct answer, explanation, clinical pearl)
- 19 structured clinical algorithms
- 26 structured comparison tables

The chapters cover the BLS Provider curriculum: Chain of Survival & systems of care,
assessment and recognition of arrest, adult 1- and 2-rescuer CPR, AED, ventilation and
breaths, child and infant BLS, foreign-body airway obstruction, opioid-associated
emergencies, and special circumstances (drowning, pregnancy, recovery, post-arrest care).

## Running the reviewer

**Option A — double-click (offline):** Open `index.html` directly. It loads `data/bundle.js`
(`window.BLS_DATA`), so it works with no web server. Features: chapter sidebar with search,
Summary / Flashcards / Quiz / Scenarios / Algorithms / Tables tabs, flip-cards, scored
quizzes, and progress saved to `localStorage` (all keys namespaced with `bls_`).

**Option B — served:** Serve the folder over HTTP (`python -m http.server` from `bls/`).
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

Clinical content reflects the **2025 American Heart Association Guidelines for CPR and ECC**,
published in *Circulation* on October 22, 2025 — the first full revision since 2020. The
following 2025 changes were verified against AHA and peer sources during authoring and are
reflected throughout the content:

- **Single universal Chain of Survival (six links):** the previously separate adult/pediatric
  and in-hospital/out-of-hospital chains were consolidated into one universal chain; a separate
  Neonatal Chain of Care was introduced.
- **Choking (adults and children):** cycles of **5 back blows/slaps followed by 5 abdominal
  thrusts** for responsive patients, with back blows added to the sequence; chest thrusts are
  used for pregnant or obese patients. First-time explicit guidance for the responsive choking
  adult was added.
- **Infant choking:** alternate **5 back blows and 5 chest thrusts**; abdominal thrusts are not
  used in infants.
- **Infant chest compressions:** the **two-thumb encircling-hands technique** is preferred
  (including for a lone rescuer when the chest can be encircled); the two-finger technique is no
  longer recommended, with heel-of-one-hand as an alternative when encircling is not possible.
- **Terminology:** "rescue breaths" are now termed **"breaths"** (patient with a pulse but not
  breathing normally) and **"ventilations"** (when delivered with a device).
- **Opioid emergencies:** a dedicated algorithm and expanded **public-access naloxone** guidance;
  naloxone is given for suspected opioid-associated respiratory arrest, and lay rescuers, trained
  rescuers, and the public may all administer it.
- **Drowning:** updated guidance emphasizing early ventilation (a breaths-inclusive approach)
  for cardiac arrest due to drowning.
- **Compression depth (adult):** at least 2 inches (5 cm) and not exceeding 2.4 inches (6 cm).
- **Quality:** real-time feedback devices are recommended to improve compression quality.

Verified October 2025 against: AHA Newsroom guideline release, *Circulation* Executive Summary
(Part 1) and Adult Basic Life Support (Part 7), AHA 2025 Guideline Highlights, and corroborating
professional summaries. Where a 2025-specific detail could not be confirmed, the stable
2020-guideline value is used and noted.

> Educational reviewer content, rewritten in original summary form from AHA guideline concepts.
> Not a substitute for an official AHA BLS Provider course, certification card, or local protocols.
