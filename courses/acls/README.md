# ACLS Course Reviewer

A self-contained study reviewer for **ACLS (Advanced Cardiovascular Life Support)**, aligned to the
**AHA 2025 Guidelines for CPR and ECC**. Built for incorporating into an app: pure JSON
data + a standalone HTML reviewer.

## What's inside

```
acls/
├── index.html            ← the reviewer app (open in a browser)
├── build.py              ← regenerates data/bundle.js from the JSON + validates
├── data/
│   ├── bundle.js         ← all data bundled as window.ACLS_DATA (lets index.html run offline)
│   └── acls/
│       ├── manifest.json         ← course + chapter index
│       ├── chapters/c01..c14.json   ← summary, objectives, pearls, red flags, mistakes, memory aids, decision trees
│       ├── flashcards/c01..c14.json ← Q/A cards
│       ├── quizzes/c01..c14.json    ← AHA-ACLS-style MCQs with rationale
│       ├── scenarios/c01..c14.json  ← case scenarios with vitals + explanations
│       ├── algorithms/c01..c14.json ← structured clinical algorithms
│       └── tables/c01..c14.json     ← structured comparison / drug / energy tables
```

## Content totals

- 14 chapters
- 228 flashcards
- 241 quiz questions (with rationales and difficulty)
- 42 clinical scenarios (with vitals, correct answer, explanation, clinical pearl)
- 25 structured clinical algorithms
- 39 structured comparison/drug/energy tables

The chapters cover the ACLS Provider curriculum: systems of care and the Chain of Survival,
high-quality BLS inside ACLS and team dynamics, airway management and waveform capnography,
rhythm recognition, defibrillation/cardioversion/pacing, cardiac arrest (VF/pVT and
asystole/PEA), pharmacology of cardiac arrest, reversible causes (H's & T's) and refractory
arrest, bradycardia and tachycardia with a pulse, acute coronary syndromes, acute stroke, and
post-cardiac arrest care including ECPR and recovery.

## Running the reviewer

**Option A — double-click (offline):** Open `index.html` directly. It loads `data/bundle.js`
(`window.ACLS_DATA`), so it works with no web server. Features: chapter sidebar with search,
Summary / Flashcards / Quiz / Scenarios / Algorithms / Tables tabs, flip-cards, scored
quizzes, and progress saved to `localStorage` (all keys namespaced with `acls_`).

**Option B — served:** Serve the folder over HTTP (`python -m http.server` from `acls/`).
If `bundle.js` is absent, `index.html` falls back to fetching the individual JSON files.

## Regenerating / extending

The per-chapter JSON files are the **canonical source**. After editing any JSON, run:

```
python build.py
```

This rebuilds `data/bundle.js` and validates: JSON parse, unique IDs across all content,
and chapter cross-references. It prints a coverage table and exits non-zero on errors.

## Integrating into your app

- Consume the per-chapter JSON directly (stable schema, consistent IDs like `c05_q05`, `c09_fc12`, `c10_s02`).
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
published in *Circulation* on October 22, 2025 (Part 9: Adult Advanced Life Support; Part 11:
Post-Cardiac Arrest Care) — the first full revision since 2020. The following items, flagged
for verification during planning, were researched against AHA/*Circulation* sources and
corroborating professional summaries during authoring (verified July 2026):

- **Dual sequential external defibrillation (DSED) and vector-change defibrillation** for
  refractory VF/pVT (≥3 shocks): both remain **Class 2b ("may be considered"), LOE B-R** —
  usefulness is not established as routine therapy; presented as selective/systems-level
  options, not first-line steps.
- **Vasopressin**: epinephrine alone remains preferred; vasopressin (alone or combined with
  methylprednisolone) offers no demonstrated advantage over epinephrine for most arrests. In
  selected **in-hospital** arrests, low-dose vasopressin (20 IU) with epinephrine and
  methylprednisolone followed by post-ROSC hydrocortisone **may be considered (Class 2b)** —
  not preferred, not routine, and not used for OHCA in this course.
- **Post-ROSC temperature control**: maintain temperature **≤37.5°C**, with **32–36°C** an
  acceptable target range where TTM is chosen; continuous temperature monitoring and immediate
  treatment of fever (>37.5°C); maintain control for **≥36 hours**. Neuroprognostication is
  deferred to **≥72 hours** after ROSC (or after rewarming if TTM was used), once sedation/
  paralysis/metabolic derangements have cleared.
- **IV vs IO access**: **IV access is preferred first-line**; IO is reasonable when IV cannot
  be obtained quickly — unchanged from the 2023 focused update and carried into 2025.
  Epinephrine remains 1 mg IV/IO every 3–5 minutes; give it **as soon as feasible** for
  nonshockable rhythms.
  - **Synchronized cardioversion energy by rhythm**: atrial fibrillation/flutter — **≥200 J**
  first shock (shift away from escalating low-energy starts); narrow-regular SVT — **100 J**;
  monomorphic VT with a pulse — **100 J**. **Polymorphic VT is treated with unsynchronized
  high-energy defibrillation**, not synchronized cardioversion, because synchronization is
  unreliable/contraindicated on an irregular waveform.
- **ACS / stroke specifics**: the companion 2025 ACC/AHA/ACEP/NAEMSP/SCAI ACS guideline
  emphasizes a first-medical-contact-to-device goal of **≤90 minutes** for primary PCI, with
  each 30-minute delay increasing 1-year mortality risk (~7.5% relative increase); fibrinolysis
  is given when symptom onset is **<12 hours** and anticipated PPCI delay **>120 minutes**
  (unless contraindicated), followed by transfer to a PCI-capable center. For acute ischemic
  stroke, the well-established **≤4.5-hour IV thrombolysis window** remains the core teaching
  point, with imaging-based selection extending eligibility for some patients beyond that
  window in specialized stroke systems.
- **Mechanical CPR devices**: routine use is **not recommended**; piston and load-distributing
  band devices perform similarly and remain reasonable **only in specific circumstances** where
  manual compressions are impractical or unsafe to sustain (e.g., prolonged transport, limited
  personnel, rescuer safety).
- **Renamed/merged algorithm boxes**: no substantive box renaming was identified in the 2025
  Bradycardia and Tachycardia algorithms beyond structural regrouping (more clearly separating
  "observe" from "intervene" pathways); drug doses (atropine 1 mg, repeat q3–5 min, max 3 mg)
  are confirmed unchanged from the prior cycle.

Long-stable core facts (compression fraction, epinephrine dosing/interval, amiodarone/lidocaine
doses for refractory VF/pVT, H's & T's, ETCO₂ interpretation) were sanity-checked against the
same sources and are used directly.

Verified July 2026 against: AHA/*Circulation* Part 9 (Adult Advanced Life Support) and Part 11
(Post-Cardiac Arrest Care), the AHA 2025 Guidelines Highlights, cpr.heart.org algorithm pages,
the 2025 ACC/AHA ACS guideline, and corroborating professional summaries (EMCrit, The
Hospitalist, JournalFeed, EMS1). Where a 2025-specific detail could not be confirmed with
confidence, the stable prior-guideline value is used and noted above.

> Educational reviewer content, rewritten in original summary form from AHA guideline concepts.
> Not a substitute for an official AHA ACLS Provider course, certification card, or local protocols.
