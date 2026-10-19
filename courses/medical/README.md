# Medical Course Reviewer

A self-contained study reviewer for **Medical, Behavioral & Geriatric Emergencies**, built for
EMTs, paramedics, and nursing/allied-health students preparing for licensing-style cognitive
exams (Prometric-administered, NREMT-aligned). Pure JSON data + a standalone HTML reviewer,
cloned architecturally from the PALS reviewer at `courses/pals/`.

Unlike BLS/ACLS/PALS, this course has **no single governing guideline document** — it draws on
multiple current, mainstream clinical sources per topic area (see "Guideline provenance" below).
It is also **complaint/diagnosis-heavy, not algorithm-heavy**: most chapters have zero or one
algorithm and lean on comparison tables as the signature content type.

## What's inside

```
medical/
├── index.html            ← the reviewer app (open in a browser)
├── build.py               ← regenerates data/bundle.js from the JSON + validates
├── data/
│   ├── bundle.js          ← all data bundled as window.MEDICAL_DATA (lets index.html run offline)
│   └── medical/
│       ├── manifest.json          ← course + chapter index
│       ├── chapters/c01..c12.json    ← summary, objectives, pearls, red flags, mistakes, memory aids
│       ├── flashcards/c01..c12.json  ← Q/A cards
│       ├── quizzes/c01..c12.json     ← exam-style MCQs with rationale
│       ├── scenarios/c01..c12.json   ← case scenarios with vitals + explanations
│       ├── algorithms/c01..c12.json  ← decision-process algorithms (sparse by design)
│       └── tables/c01..c12.json      ← structured comparison tables
```

## Content totals

- 12 chapters
- ≥ 150 flashcards
- ≥ 180 quiz questions (with rationales and difficulty, ~40% Easy / 40% Medium / 20% Hard)
- ≥ 30 clinical scenarios (with vitals, correct answer, explanation, clinical pearl)
- ≥ 4 structured algorithms
- ≥ 8 structured comparison tables, including mandatory tables: stroke-scale comparison (c01),
  asthma severity/staging (c04), DKA vs. HHS (c03), personality-disorder clusters (c08), and
  delirium vs. dementia (c09)

The chapters cover: stroke/TIA, seizures & altered mental status, hypoglycemia/DKA/HHS, asthma &
COPD, preeclampsia/eclampsia, behavioral assessment & de-escalation, psychotic & mood disorders,
personality/substance-related/high-risk behavioral presentations, geriatric delirium vs. dementia
& atypical presentations, geriatric polypharmacy/falls/elder abuse, toxicological & environmental
medical presentations, and sepsis/GI/renal emergencies & general medical red flags.

## Scope boundary with EMPACT

This course owns **disease/complaint-specific content** (stroke, seizure, DKA, asthma,
behavioral/psychiatric conditions, geriatric-specific presentations). It does **not** duplicate
the EMPACT reviewer's scope (scene safety, history-taking technique, and differential-diagnosis
*process*) — chapters cross-reference EMPACT for assessment technique rather than re-teaching it.
It also does not duplicate ACLS/PALS arrest-algorithm or drug-dosing depth — any arrest-adjacent
content points to those reviewers instead.

## Guideline provenance

This course has no single governing body. Content was verified (web search, July 2026) against
the following sources before authoring, per chapter area:

- **Stroke (c01):** 2026 AHA/ASA Guideline for the Early Management of Patients With Acute
  Ischemic Stroke (replaces the 2018 guideline and 2019 update). The guideline reinforces public
  recognition tools (FAST/BE-FAST) and the use of validated prehospital stroke scales (CPSS,
  LAPSS, RACE, FAST-ED) to screen for large-vessel occlusion, and endorses refined EMS triage and
  direct transport to EVT-capable centers where systems support it. This reviewer presents these
  scales as a comparison table without asserting one single guideline-mandated LVO cutoff, since
  exact thresholds are system/protocol-dependent.
- **Asthma (c04):** GINA 2025 Global Strategy for Asthma Management and Prevention. GINA 2025
  uses a dual-track, ICS-formoterol-centered stepwise approach (Steps 1–4, graded by symptom
  frequency/control) and has moved away from the older "intermittent / mild-moderate-severe
  persistent" severity-label framework. The exam bank's legacy "asthma phase 1–4" framing
  (spontaneous/bronchodilator-responsive → anti-inflammatory-requiring → refractory → respiratory
  failure) is presented in this reviewer as a historical/simplified clinical staging concept
  distinct from GINA's current step-based control framework, with that distinction made explicit.
- **DKA / HHS (c03):** ADA Standards of Care in Diabetes—2026, Section 16 (Diabetes Care in the
  Hospital), informed by the 2024 ADA Consensus Report "Hyperglycemic Crises in Adults With
  Diabetes." Diagnostic framework used: DKA = hyperglycemia (glucose ≥200 mg/dL or known
  diabetes) + ketosis (beta-hydroxybutyrate ≥3.0 mmol/L or urine ketones ≥2+) + acidosis (pH
  <7.3 and/or bicarbonate <18 mEq/L); HHS = severe hyperglycemia (often >600 mg/dL) +
  hyperosmolality (>320 mOsm/kg) + minimal ketosis + near-normal pH/bicarbonate. ~10% of DKA
  presents as euglycemic DKA (glucose <200 mg/dL in the presence of diabetes).
- **COPD oxygen / "hypoxic drive" (c04):** current EMS/respiratory literature confirms the
  classic "hypoxic drive" teaching (that supplemental oxygen removes COPD patients' drive to
  breathe) is an outdated oversimplification — oxygen-induced hypercapnia in COPD is now
  understood to arise mainly from V/Q mismatch and increased dead space, not loss of respiratory
  drive. Current guidance is titrated oxygen to an SpO2 target of 88–92% in acute COPD
  exacerbation, avoiding both hypoxia and unnecessary hyperoxia. This reviewer teaches the
  titrated-target approach and flags the binary "true/false hypoxic drive" framing as outdated.
- **Behavioral/psychiatric definitions (c06–c08):** DSM-5-TR. Personality disorders are grouped
  into three clusters — Cluster A (odd/eccentric: paranoid, schizoid, schizotypal), Cluster B
  (dramatic/emotional/erratic: antisocial, borderline, histrionic, narcissistic), Cluster C
  (anxious/fearful: avoidant, dependent, obsessive-compulsive). All behavioral-health content in
  this reviewer is scoped to prehospital recognition and safe-approach vocabulary, not diagnostic
  application.
- **NREMT domain weighting:** the current public NREMT Paramedic Test Plan lists five domains:
  Airway/Respiration/Ventilation (18–22%), Cardiology/Resuscitation (22–28%), Trauma (14–18%),
  **Medical/Obstetrics/Gynecology (27–33%)**, and EMS Operations (10–14%). This reviewer cites
  the 27–33% figure (verified July 2026) as the closest published analog for this course's scope,
  rather than the plan document's earlier unverified 24–28% estimate.
- **SCFHS-specific content blueprint:** no publicly documented SCFHS clinical-content blueprint
  for this exam could be confirmed. Prometric's public materials describe delivery logistics, not
  content outlines. This reviewer therefore uses the NREMT Paramedic test plan as the closest
  public analog rather than citing an unconfirmed SCFHS blueprint.

Every chapter's `references[]` names the specific source relied on for that chapter's content.
No verbatim text is copied from any guideline or the DSM-5-TR — all wording is original.

## Disclaimer

This is an educational reviewer, not a substitute for an official EMS/paramedic course, licensing
exam preparation program, certification, or local protocols. Behavioral-health content is
provided for prehospital recognition and safe scene management only — it is not a diagnostic tool
and should not be used to diagnose a patient.

## Running the reviewer

**Option A — double-click (offline):** Open `index.html` directly. It loads `data/bundle.js`
(`window.MEDICAL_DATA`), so it works with no web server. Features: chapter sidebar with search,
Summary / Flashcards / Quiz / Scenarios / Algorithms / Tables tabs, flip-cards, scored quizzes,
and progress saved to `localStorage` (all keys namespaced with `medical_`).

**Option B — served:** Serve the folder over HTTP (`python -m http.server` from `medical/`).
If `bundle.js` is absent, `index.html` falls back to fetching the individual JSON files.

## Regenerating / extending

The per-chapter JSON files are the **canonical source**. After editing any JSON, run:

```
python build.py
```

This rebuilds `data/bundle.js` and validates: JSON parse, unique IDs across all content, and
chapter cross-references. It prints a coverage table and exits non-zero on errors.

## Schema quick reference

Identical to the PALS/BLS schema (frozen across all course reviewers in this repo):

- **chapters**: `learningObjectives[]`, `summary[{title,content}]`, `clinicalPearls[]`,
  `redFlags[]`, `commonMistakes[]`, `memoryAids[]`, `decisionTrees[{title,content}]` (optional),
  `references[]`
- **flashcards**: `{chapter, cards[{id,question,answer,category}]}`
- **quizzes**: `{chapter, questions[{id,question,options[4],correct(0-indexed),rationale,difficulty}]}`
- **scenarios**: `{chapter, cases[{id,title,presentation,vitals{},question,options[4 lettered],correct,explanation,clinicalPearl}]}`
- **algorithms**: `{chapter, algorithms[{id,title,description,steps[]}]}`
- **tables**: `{chapter, tables[{id,title,headers[],rows[][]}]}`

IDs follow `cNN_qMM` / `cNN_fcMM` / `cNN_sMM` / `cNN_algMM` / `cNN_tMM`, globally unique,
validated by `build.py`.
