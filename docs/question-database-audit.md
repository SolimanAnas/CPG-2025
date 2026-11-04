# Question Database Audit

**Date:** 2026-06-23
**Scope:** All question banks under `src/**/*.json` (19 live exam files + 3 pearls files + 1 orphan)
**Status:** Read-only audit — **no files were changed.** This document lists findings for your review.

---

## 1. Summary

| Metric | Value |
|---|---|
| Live question files | 19 |
| Total questions | **3,548** |
| Files fully clean | 7 |
| Files with at least one issue | 12 |
| Distinct issue instances | ~179 |

**Headline findings:**

1. **36 "questions" have only a single option** (no distractors) — these are unanswerable as multiple-choice. *(High priority)*
2. **~95 duplicate questions** across BLS and Prometric (whole blocks copy-pasted). *(Medium)*
3. **All 4 ITLS files double-print option letters** (`[A] A. text`) because the option text already embeds `A. B. C. D.` and the exam engine adds its own letter badge. *(Medium, cosmetic but affects every ITLS question)*
4. **4 course badge counts on `courses.html` don't match the actual data.** *(Low, cosmetic)*
5. **One genuine answer conflict** (ITLS needle-decompression) where two copies of the same question give different correct answers. *(Needs a clinical decision)*
6. Minor: UTF-8 BOM on 8 files, mojibake in 12 Prometric explanations.

---

## 2. Data schema (for reference)

Most files use this shape (question text in `text`, options as a 4-item array, answer as a letter):

```json
{
  "title": "...", "description": "...",
  "questions": [
    { "id": 1, "text": "...", "options": ["...","...","...","..."],
      "correct_answer": "B", "difficulty": "...", "topic": "..." }
  ]
}
```

The 4 ITLS files are a bare top-level **array** (no wrapper object) and use `explanation` + `hint` instead of `difficulty`/`topic`. `correct_answer` is **always a single letter A–D** and is clean in every file (verified).

---

## 3. Findings by severity

### 🔴 HIGH — Single-option questions (36 total)

These have exactly one option, so there is nothing to choose. They look like short-answer items that were imported without distractors.

| File | Question IDs | Count |
|---|---|---|
| `src/PEPP/exam_d.json` | 34, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60 | 16 |
| `src/prometric/exam-db.json` | 713, 715, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729 | 13 |
| `src/BLS/bls.json` | 196, 199, 200, 201, 202 | 5 |
| `src/PEPP/exam_c.json` | 80, 82 | 2 |

Example (`exam_d` id 46):
```
text:    "After a seizure, patients are in a lethargic and confused state. What is this state known as?"
options: ["Postictal"]
correct: "A"
```
**Fix options:** add 3 distractors to each, or convert to a different question type, or remove. Several of these are the *same* underlying questions repeated across PEPP/BLS/Prometric, so they can be fixed once and reused.

---

### 🟠 MEDIUM — Duplicate questions

Exact-duplicate question text (same answer) — these inflate the bank and repeat during a session.

| File | Duplicate pairs | Notes |
|---|---|---|
| `src/prometric/exam-db.json` | 58 | e.g. ids 780–828 mirror 830–878 — looks like a block was pasted twice |
| `src/BLS/bls.json` | 31 | ids **223–253 are duplicated as 254–284** — an entire 31-question block |
| `src/PEPP/exam_d.json` | 3 | ids [2,43], [8,44], [25,26] |
| `src/ITLS/itls-post-B.json` | 2 | within-form repeats |
| `src/ITLS/itls-pre-9th.json` | 2 | within-form repeats |

**Fix:** de-duplicate (keep one of each pair). The BLS 254–284 block in particular looks like an accidental paste.

---

### 🟠 MEDIUM — ITLS double letter prefixes (all 4 files, ~800 options)

Every ITLS option text already starts with its letter, e.g. `"A. Initial assessment"`. The exam engine (`itls.html`, line ~1240) *also* renders a letter badge:

```js
`<div class="opt-letter">${letter}</div> ... <span class="opt-txt">${optText}</span>`
```

So the user sees **`[A]  A. Initial assessment`** on every ITLS question. One pair (id 31/41 in `itls-post-B` / `itls-pre-9th`) is even doubled in the source data itself: `"A. A. Directly under..."`.

| File | Letter-prefixed options |
|---|---|
| `src/ITLS/itls-post-A.json` | 200 / 200 |
| `src/ITLS/itls-post-B.json` | 200 / 200 |
| `src/ITLS/itls-pre-9th.json` | 200 / 200 |
| `src/ITLS/itls-pre.json` | 199 / 200 (one option missing its prefix — inconsistent) |

**Fix options:** (a) strip the leading `^[A-D]\.\s` from ITLS option text so only the engine's badge shows, or (b) special-case ITLS in the renderer to suppress its badge. Option (a) is cleaner and makes ITLS consistent with every other bank.

---

### 🟡 NEEDS CLINICAL DECISION — One real answer conflict

Two copies of the same ITLS question give **different** correct answers (not just shuffled options):

`itls-post-B.json` / `itls-pre-9th.json`, ids **31** and **41** — *"When performing a needle decompression, which is the correct anatomical location?"*
- id 31 → **D**: "over the top of the third rib, midclavicular line"
- id 41 → **A**: "over the top of the fourth rib, midaxillary line"

These reflect two different guideline editions (older midclavicular vs. newer midaxillary placement). **A human needs to pick which one this bank should teach** and align both.

> Note: the two **Prometric** "conflicts" the scan flagged (gallbladder ids 1289/1674; delivery-prep ids 1428/1557) are **not** errors — the options are just shuffled, and both point to the same correct text. No action needed.

---

### 🟡 LOW — Course badge counts vs. actual data (`pages/courses.html`)

The `count:` shown on each course card doesn't match the questions the page actually loads:

| Course | Badge | Actual (files loaded) | Δ |
|---|---|---|---|
| PEPP | 200 | 135 (Forms A 25 + B 25 + C 25 + D 60) | −65 |
| Medical | 45 | 28 (`medical.json`) | −17 |
| PALS | 57 | 45 (`pals.json`) | −12 |
| PPET | 57 | 114 (`ppet.json` 57 + `exam2.json` 57) | badge counts one form only |

The other 7 courses match exactly (Prometric 2559, ITLS 200, BLS 284, ACLS 33, BDLS 40, EMPACT 50, ECG-Test 60). These badges are display-only and don't affect exam logic.

---

### 🟡 LOW — Two-option questions are **fine**

The scan flags ~25 questions with only 2 options (ACLS 6/8, PALS 19, Medical 4/5, and others). **All verified as legitimate True/False items** — no action needed. Listed here only so they aren't mistaken for the single-option bug above.

---

### 🟢 MINOR — Encoding

- **UTF-8 BOM** present on 8 files: `acls.json`, `BDLS.json`, `bls.json`, `medical.json`, `pals.json`, `ppet.json` (and others). Browsers' `response.json()` strips it, so it's harmless at runtime, but it's inconsistent and trips standard JSON parsers (e.g. `json.load` in Python). Optional cleanup.
- **Mojibake** in `src/prometric/exam-db.json` — 12 questions have `â€"` / `Â` artifacts (en/em-dash and non-breaking-space corruption from PDF extraction), all in `explanation`/`hint` fields: ids **59, 65, 66, 72, 73, 74, 85, 87, 94, 117, 146, 339**. Cosmetic; appears in the post-answer explanation text.

---

## 4. Orphan file

`src/BLS/bls-post-test.json` (25 questions) is **not referenced by any page**, uses a *different* schema (`question`/`scenario` + options as an object `{A,B,C,D}`), and **has no answer key** (`correct_answer` is missing). It's effectively dead data. Either wire it up (after adding answers + converting schema) or remove it.

---

## 5. Suggested priority order

1. **Fix the 36 single-option questions** (add distractors or remove) — they're the only ones that block a user mid-exam.
2. **Resolve the ITLS needle-decompression answer conflict** (clinical call).
3. **Strip ITLS letter prefixes** so options render cleanly.
4. **De-duplicate** BLS 254–284 and the Prometric pasted block.
5. Correct the 4 **courses.html badge counts**.
6. Optional cleanup: strip BOMs, fix the 12 Prometric mojibake explanations, decide on the orphan `bls-post-test.json`.

---

*Audit performed read-only. No question data, pages, or counts were modified. Awaiting approval before any changes.*

---

## 6. Follow-up: Prometric bank cleanup (November 2026)

The Prometric findings above were acted on in `src/prometric/exam-db.json`, applying the same edits as the SmartCare copy of this bank. This bank has no paramedic (ALS) set or `level` field. The 13 single-option questions (713–729) now have the four answer choices and explanations SmartCare gave them; their answer keys are unchanged, and the correct answers of 719 and 728 use SmartCare's tighter wording. The garbled characters (`â€”`, `Â°`) in 17 questions (59, 65, 66, 72, 73, 74, 78, 80, 85, 87, 91, 94, 117, 132, 143, 146, 339) are also fixed, as in SmartCare. Question 721's answer now reads "Protect the airway and suction secretions as needed", so it no longer teaches routine suctioning during a seizure. Its explanation adds checking blood glucose as the second step.

### What changed

| Change | Questions |
|---|---|
| Exact duplicates removed (same question and answers, kept the lower id) | 59 |
| Source watermarks removed from answers (`–emt-basic practice exam 386`) | 101 |
| Stray dashes from line wrapping removed (`and -circulation`) | 194 |
| `→` arrows restored in hints and explanations where import had turned them into `?` (ids 513–779) | 247 |
| Arrows, symbols and a word restored by hand where `?` was ambiguous (531, 535, 536, 537, 547, 553, 562, 569, 585, 636, 687, 773) | 12 |
| Explanations that named an answer by letter, which shuffling makes wrong (732, 734, 738, 748, 755, 758, 760, 765, 773) | 9 |
| Space before punctuation, broken hyphens (`bag--mask`, `size- up`, `two - way`), double spaces | 52 |
| New explanations written for questions that had none | 409 |

That left 2,500 questions before the clinical decisions below. Removed duplicate ids: 249, 251, 290, 309, 388, 718, 830–879, 1485, 1511 and 1674.

Question 773's third answer read `insulin and ?`; it was restored as `insulin and glucose`, which matches the explanation and keeps it a wrong answer (it includes lidocaine).

### Clinical decisions (22 questions)

These were flagged during the cleanup because the key looked wrong or taught outdated practice. Each was then resolved as below and given an explanation, so every question in the bank now has one.

| ID | Question | Decision | Answer now |
|---|---|---|---|
| 4 | The S in the "OPQRST" acronym stands for: | Key fixed (was A. swelling) | D. severity |
| 11 | The first step in the focused history and physical exam performed on an uncon… | Key fixed (was B. obtain a focused history) | D. Rapidly assess the patient from head to toe |
| 189 | When assessing patient adult, EMTs should start with the: | Key fixed (was C. toe-head) | B. Head to-toe. |
| 335 | When you assign patient you found his skin PALE this: | Key fixed (was B, the description for cyanosis) | A. Indicates poor perfusion. |
| 501 | You are dispatched to a home for an 85 year old female who is not feeling wel… | Key fixed (was C. delirium) | D. Dementia |
| 805 | You are dispatched to a soccer game for a 12-year-old female with signs and s… | Key fixed (was B. administer the epi-pen) | C. begin the primary assessment |
| 825 | Which of the following signs of hypoxia is more common in pediatric patients? | Key fixed (was C. tachycardia) | A. bradycardia |
| 39 | The single most important factor in determining survival from cardiac arrest is: | Key fixed (was A. early CPR) | B. Early defibrillation. |
| 151 | Blood that oozes and is dark is most likely from a: | Key fixed (was A. venous) | C. Capillary |
| 164 | Information using a standard medical format called: | Key fixed (was C. prehospital care report) | B. Patient narrative |
| 198 | postical state is a term refers to a patients complains of: | Key fixed (was B) | D. B+C |
| 507 | Which of the following statements about delirium tremens is not true? | Key fixed (was C) | B. They occur in individuals who have experienced recent binge drinking |
| 780 | The primary assessment of an adult with chest pain includes: | Key fixed (was B. ensuring the scene is safe) | C. Determine the transport priority |
| 45 | The preferred method of ventilation a nonbreathing patient is: | Key moved to two-person bag-mask (was A. mouth-to-mask) | B. Tow person bag-valve-mask |
| 16 | A 63-year-old man is complaining of substernal chest pain radiating to his le… | Answer rewritten: aspirin, with oxygen only if SpO2 is below 94% (was routine high-concentration oxygen) | D. Place the patient in a position of comfort, give aspirin if there are no c… |
| 156 | The right order of procedures for controlling severe external bleeding from a… | Answer rewritten: direct pressure, then a tourniquet (was elevation and pressure points) | A. Direct pressure, then a tourniquet above the wound if pressure does not co… |
| 319 | To further reduce bleeding, the next action may be to: | Answer rewritten: a tourniquet above an extremity wound (was elevation) | C. Apply a tourniquet above the wound if it is on an extremity and direct pre… |
| 366 | What modifications of the usual management of cardiac arrest should be made f… | Answer rewritten: manual left uterine displacement (was compressions higher on the sternum) | C. Manually displace the uterus to the patient's left during compressions |
| 13 | During the assessment of the patient's pelvis, you should: | Options clarified: one gentle press toward the midline, then posteriorly; the other order replaced with rocking, which is wrong | B. Gently press the pelvic wings toward the midline and then posteriorly, onl… |

Removed, leaving **2,497** questions:

| ID | Reason |
|---|---|
| 38 | Near-duplicate of 16 with the same outdated oxygen answer |
| 152 | PASG is obsolete for controlling bleeding |
| 498 | All four answers are parts of the SEA-3 mental status exam, so it had no correct answer |

Wording: question 502's answer "Mental retardation" now reads "Intellectual disability", and the stems of 13, 14, 15, 19, 20 and 29 no longer end in `:-`.

The new explanations follow the key of each question and current EMT teaching, but like the rest of this bank (`review_status: unreviewed`) they have not had a clinical review.
