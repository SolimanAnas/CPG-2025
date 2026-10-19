/**
 * SmartCare · ACLS Megacode scenario bank
 * Source: 2020 AHA ACLS Megacode Testing Scenarios 1–12 (case progressions,
 * vitals and instructor notes), restructured into a stage machine for the
 * live simulator in megacode.js.
 *
 * Stage fields
 *   type    brady | tachyU | tachyS | resp | vf | pvt | pea | asys | rosc
 *   rhythm  synth descriptor — k: sinus | svt | vt | escape | avb2 | avb3 | vf | asys
 *   v       vitals the patient drifts toward (hr is taken from the rhythm)
 *   quiz    { rhythm: <answer id>, stable: true|false } — rhythm-ID challenge
 *   fx      per-action overrides { msg, kind, hr, sbp, spo2, fail }
 *   exit    first matching condition moves to the next stage:
 *           { on:'action', any:[keys], n, delay }  · { on:'time', sec }
 *           { on:'check', checks, shocks, epi, needAll, needAny, fallback }
 *           { on:'tick', test(S) } — every condition may carry msg
 */
/* eslint-disable no-unused-vars */
const MEGACODE_SCENARIOS = [
  {
    id: 1,
    title: "Syncope at Home",
    setting: "ooh",
    place: "Patient's home",
    path: ["Brady", "pVT", "PEA", "ROSC"],
    sex: "M", age: 62,
    leadIn: "You are a paramedic treating a man who had a syncopal episode.",
    known: { BP: "78/42 mmHg", Age: "62 y" },
    assessment: [
      "The patient is conscious and alert on your arrival.",
      "His skin is pale and he is diaphoretic.",
      "He is now not following commands.",
      "No radial pulse — the carotid pulse is weak and slow."
    ],
    history: "He fainted while standing in the kitchen. No further history — he is confused and can't answer questions.",
    exam: "Pale, cool, diaphoretic. Lungs clear bilaterally.",
    glucose: "118 mg/dL (6.5 mmol/L)",
    teach: [
      "Symptomatic bradycardia: give a single dose of atropine 1 mg while preparing transcutaneous pacing.",
      "When pVT appears with the pacer running — stop pacing and defibrillate immediately.",
      "Follow the VF/pVT pathway: shock → 2 min CPR → epinephrine after the 2nd shock → amiodarone after the 3rd.",
      "PEA: high-quality CPR, epinephrine ASAP, and look for reversible causes — here, effective ventilation (hypoxia) restores a pulse."
    ],
    stages: [
      {
        type: "brady", rhythm: { k: "sinus", hr: 38, pvc: 6 },
        v: { sbp: 78, dbp: 42, spo2: 93, rr: 18 }, cons: "Confused, not following commands", pulseText: "Carotid weak and slow (~38/min), no radial pulse",
        quiz: { rhythm: "sbrady", stable: false },
        ecg12: "Sinus bradycardia ~38/min with occasional unifocal PVCs. No acute ST elevation.",
        fx: { atropine: { hr: 6, sbp: 4, kind: "good", msg: "Heart rate rises only slightly (mid-40s) — still hypotensive. Prepare transcutaneous pacing." } },
        exit: [{ on: "action", any: ["paceOn", "dopamine", "epiInf"], delay: 4, msg: "As second-line therapy begins, the monitor suddenly shows VT. He is unresponsive and has no pulse." }]
      },
      {
        type: "pvt", rhythm: { k: "vt", hr: 175 }, quiz: { rhythm: "pvt" },
        exit: [{ on: "check", checks: 3, shocks: 3, msg: "Rhythm check after the third shock: an organized, slow rhythm on the monitor." }]
      },
      {
        type: "pea", rhythm: { k: "sinus", hr: 42 }, quiz: { rhythm: "pea" }, hts: ["hypoxia"], etco2: 14,
        pocus: "Weak, uncoordinated cardiac activity. No pericardial effusion.",
        exit: [{ on: "check", checks: 1, needAll: ["vent", "epi"], fallback: 3, msg: "After effective ventilation, a carotid pulse can now be detected." }]
      },
      {
        type: "rosc", rhythm: { k: "sinus", hr: 92 }, v: { sbp: 92, dbp: 56, spo2: 92, rr: 8, etco2: 38 },
        cons: "Unresponsive, not following commands", pulseText: "Carotid pulse present ~92/min",
        ecg12: "Sinus rhythm 92/min, no ST elevation."
      }
    ]
  },

  {
    id: 2,
    title: "Collapse at a Restaurant",
    setting: "ooh",
    place: "Restaurant",
    path: ["Brady", "VF", "Asystole", "ROSC"],
    sex: "M", age: 55,
    leadIn: "You are called to a restaurant for a man who suddenly became unresponsive, vomited, and then stopped breathing. You have a 4-minute response in your ALS ambulance.",
    known: { HR: "44/min, very strong", BP: "84/50 mmHg", RR: "3/min" },
    assessment: [
      "Three firefighters are assisting: one maintains an open airway, one is suctioning, the third is getting vitals.",
      "Witnesses state he had a normal day but seemed irritated."
    ],
    history: "His wife: he is normally healthy, takes only vitamin supplements, but has been under extreme stress at work lately.",
    exam: "Unresponsive, vomitus in the oropharynx (suctioned). Agonal, very slow respirations.",
    glucose: "187 mg/dL (10.4 mmol/L)",
    teach: [
      "Unresponsive with RR 3/min — ventilation is the first priority even with a strong pulse.",
      "Sinus bradycardia with a 12-lead not suspicious for injury: think neurologic or toxic causes.",
      "VF: shock, 2 minutes CPR, shock, then epinephrine; place an advanced airway and use waveform capnography.",
      "Asystole: confirm in 2 leads, never shock, epinephrine ASAP, consider treatable causes.",
      "Post-ROSC: apneic patient — ventilate to ETCO₂ 35–45; choose a destination that fits the suspected cause."
    ],
    stages: [
      {
        type: "brady", rhythm: { k: "sinus", hr: 44 },
        v: { sbp: 84, dbp: 50, spo2: 86, rr: 3 }, cons: "Unresponsive", pulseText: "Strong, slow pulse ~44/min",
        quiz: { rhythm: "sbrady", stable: false },
        ecg12: "Sinus bradycardia 44/min. Not suspicious for injury or ischemia.",
        fx: { bvm: { spo2: 10, kind: "good", msg: "Bag-mask ventilation with 100% O₂ started — chest rising, SpO₂ improving." } },
        exit: [
          { on: "action", any: ["iv", "io"], delay: 6, msg: "While the IV is being started he has a 5-second grand mal seizure, then remains unresponsive. Moments later: no respirations, no pulse. The monitor shows VF." },
          { on: "time", sec: 75, msg: "He has a 5-second grand mal seizure, then remains unresponsive. Moments later: no respirations, no pulse. The monitor shows VF." }
        ]
      },
      {
        type: "vf", rhythm: { k: "vf", amp: 0.75 }, quiz: { rhythm: "vf" }, etco2: 22,
        exit: [{ on: "check", checks: 2, shocks: 2, msg: "Rhythm check: flat line. Asystole is confirmed in 2 leads." }]
      },
      {
        type: "asys", rhythm: { k: "asys" }, quiz: { rhythm: "asys" }, hts: ["hypoxia", "acidosis"], etco2: 16,
        pocus: "No cardiac activity (cardiac standstill).",
        exit: [{ on: "check", checks: 1, needAll: ["epi"], fallback: 2, msg: "After 2 minutes of CPR the monitor shows a borderline wide-complex organized rhythm at 56/min." }]
      },
      {
        type: "rosc", rhythm: { k: "sinus", hr: 56, wide: 0.45 }, v: { sbp: 180, dbp: 108, spo2: 95, rr: 0, etco2: 50 },
        cons: "Unresponsive, apneic", pulseText: "Strong carotid pulse ~56/min",
        ecg12: "Sinus rhythm 56/min with borderline wide QRS. No ST elevation.",
        dest: {
          q: "Where do you transport?",
          options: [
            { t: "Nearest emergency department — 4 min", ok: false, why: "Closest, but it cannot offer the post-arrest bundle or neuro intervention this patient may need." },
            { t: "Comprehensive stroke center — 12 min", ok: true, why: "Reasonable: seizure, severe hypertension (180/108) and persistent coma raise concern for an intracranial cause." },
            { t: "Cardiac arrest receiving center — 16 min", ok: true, why: "Reasonable: post-arrest care, TTM and cath capability. Discuss the trade-off with the stroke center as a team." }
          ]
        }
      }
    ]
  },

  {
    id: 3,
    title: "Chest Pain After Transplant",
    setting: "ooh",
    place: "Patient's home",
    path: ["Brady", "pVT", "PEA", "ROSC"],
    sex: "M", age: 74,
    leadIn: "Your ALS ambulance is dispatched to help an elderly man having chest pain. A BLS engine is also responding. Firefighters are placing a non-rebreathing oxygen mask on the patient.",
    known: { BP: "86/48 mmHg (Doppler)", RR: "18/min, nonlabored" },
    assessment: [
      "He is sitting with his back against a wall, alert and talking with firefighters.",
      "He says his chest feels heavy and he might need to vomit — it started while he waited in line at the bank.",
      "He has had cardiac problems and received a heart transplant 2 years ago."
    ],
    history: "Heart transplant 2 years ago. Takes multiple medications (they are at his home). Allergic to sulfa.",
    exam: "Grossly diaphoretic, pale and gray. Slow, weak pulse.",
    glucose: "104 mg/dL (5.8 mmol/L)",
    teach: [
      "A transplanted (denervated) heart does not respond to atropine — go straight to pacing or an adrenergic infusion.",
      "12-lead suspicious for inferior injury: plan for a STEMI-receiving center.",
      "pVT: defibrillate, high-quality CPR, epinephrine; bag-mask is fine if it is effective.",
      "Rising ETCO₂ (22 → 48 mmHg) with an organized rhythm is a strong ROSC signal — check a pulse.",
      "Post-ROSC hypotension (68/40): support with dopamine or epinephrine infusion."
    ],
    stages: [
      {
        type: "brady", rhythm: { k: "avb3", hr: 32, aRate: 76, wide: 1 },
        v: { sbp: 86, dbp: 48, spo2: 94, rr: 18 }, cons: "Alert, talking", pulseText: "Slow, weak pulse ~32/min",
        quiz: { rhythm: "avb3", stable: false }, atropineOptional: true,
        ecg12: "Third-degree AV block, ventricular rate 32/min with wide QRS. Suspicious for injury in II, III and aVF; lead V4R is flat.",
        fx: { atropine: { kind: "warn", msg: "No effect — a transplanted, denervated heart does not respond to atropine. Move to pacing or an adrenergic infusion." } },
        exit: [{ on: "action", any: ["paceOn", "dopamine", "epiInf"], delay: 3, msg: "Before the pacer acquires capture he becomes unresponsive and apneic. The rhythm changes to VT — no pulse." }]
      },
      {
        type: "pvt", rhythm: { k: "vt", hr: 165 }, quiz: { rhythm: "pvt" },
        exit: [{ on: "check", checks: 2, shocks: 2, msg: "Rhythm check: sinus bradycardia with marginally wide QRS complexes. No pulse." }]
      },
      {
        type: "pea", rhythm: { k: "sinus", hr: 50, wide: 0.5 }, quiz: { rhythm: "pea" }, hts: ["thrombosisC", "hypoxia"], etco2: 22,
        pocus: "Weak cardiac activity, no pericardial effusion.",
        exit: [{ on: "check", checks: 1, needAll: ["epi"], fallback: 2, msg: "After 2 minutes of CPR the rhythm is nearly the same, QRS less wide. ETCO₂ is now 48 mmHg." }]
      },
      {
        type: "rosc", rhythm: { k: "sinus", hr: 52, wide: 0.3 }, v: { sbp: 68, dbp: 40, spo2: 92, rr: 8, etco2: 48 },
        cons: "Bats his eyes to loud voices", pulseText: "Carotid pulse present, radial not palpable",
        ecg12: "Sinus bradycardia 52/min, inferior ST elevation.",
        dest: {
          q: "Where do you transport?",
          options: [
            { t: "Closest emergency department — 3 min", ok: false, why: "Closer, but the 12-lead suggests an inferior STEMI — this patient needs a cath lab." },
            { t: "STEMI-receiving center — 12 min", ok: true, why: "Correct: post-arrest STEMI pattern with transplant history — needs emergent coronary angiography." }
          ]
        }
      }
    ]
  },

  {
    id: 4,
    title: "Roadside Dialysis Patient",
    setting: "ooh",
    place: "Car on the highway shoulder",
    path: ["Unstable VT", "VF", "PEA", "ROSC"],
    sex: "F", age: 65,
    leadIn: "Your ALS ambulance is dispatched to a car pulled to the side of the highway. The driver was taking the patient to an appointment, but she was sick and needed to stop. She reports shortness of breath and weakness.",
    known: { HR: "150/min", BP: "84/54 mmHg", RR: "20/min, mildly labored", "SpO₂": "94% on 15 L/min O₂", Age: "65 y" },
    assessment: [
      "She is in the passenger seat of an SUV, awake and talking in 2- to 3-word sentences.",
      "Fine crackles in both lung bases.",
      "Palpable carotid and radial pulses."
    ],
    history: "The driver: “I was taking her to dialysis because she missed her appointment 2 days ago.”",
    exam: "Fine crackles at both bases. AV fistula in the left forearm.",
    glucose: "330 mg/dL (18.3 mmol/L)",
    o2Start: true,
    teach: [
      "Unstable wide-complex tachycardia (hypotension, pulmonary edema): immediate synchronized cardioversion.",
      "A failed peripheral IV should not delay cardioversion — IO is a fine alternative.",
      "VF: early defibrillation, minimal interruptions, epinephrine and an advanced airway with capnography.",
      "PEA in a dialysis patient who missed treatment → hyperkalemia: give calcium chloride/gluconate and sodium bicarbonate.",
      "Severely peaked T waves after ROSC confirm the diagnosis; also note hyperglycemia (330 mg/dL)."
    ],
    stages: [
      {
        type: "tachyU", rhythm: { k: "vt", hr: 150 },
        v: { sbp: 84, dbp: 54, spo2: 94, rr: 20 }, cons: "Awake, talking in 2–3 word sentences", pulseText: "Rapid carotid and radial pulses ~150/min",
        quiz: { rhythm: "vt", stable: false },
        ecg12: "Monomorphic wide-complex tachycardia at 150/min.",
        fx: { iv: { fail: 1, kind: "warn", msg: "Peripheral IV attempt unsuccessful. Don't let IV access delay cardioversion — consider IO." } },
        exit: [{ on: "action", any: ["sync"], n: 1, delay: 5, msg: "Cardioversion — no change. While you prepare to increase the energy, her head slumps and she stops breathing. The monitor shows VF." }]
      },
      {
        type: "vf", rhythm: { k: "vf", amp: 0.7 }, quiz: { rhythm: "vf" }, etco2: 25,
        exit: [{ on: "check", checks: 2, shocks: 2, msg: "Rhythm check: an organized wide-complex rhythm at 70/min — but no pulse." }]
      },
      {
        type: "pea", rhythm: { k: "sinus", hr: 70, wide: 0.9, peakT: true }, quiz: { rhythm: "pea" }, hts: ["hyperK"], etco2: 24,
        clue: { after: 25, text: "The driver says: “I was taking her to dialysis because she missed her appointment 2 days ago.”" },
        fx: {
          calcium: { kind: "good", msg: "Calcium chloride 1 g IV — stabilizes the myocardium in hyperkalemia. Exactly right here." },
          bicarb: { kind: "good", msg: "Sodium bicarbonate 50 mEq — shifts potassium into cells. Appropriate for suspected hyperkalemia." }
        },
        exit: [{ on: "check", checks: 1, needAny: ["calcium", "bicarb"], fallback: 3, msg: "Rhythm check: a marginally wide-complex rhythm with severely peaked T waves at 100/min. There is a carotid pulse." }]
      },
      {
        type: "rosc", rhythm: { k: "sinus", hr: 100, wide: 0.45, peakT: true }, v: { sbp: 94, dbp: 56, spo2: 100, rr: 8, etco2: 60 },
        cons: "Unresponsive, disorganized spontaneous respirations", pulseText: "Carotid pulse ~100/min",
        ecg12: "Sinus rhythm 100/min, marginally wide QRS, severely peaked T waves (hyperkalemia).",
        dest: {
          q: "Where do you transport?",
          options: [
            { t: "Nearest emergency department — 7 min", ok: false, why: "Closer, but she will need emergent dialysis and post-arrest ICU care." },
            { t: "Tertiary care center — 14 min", ok: true, why: "Correct: emergent dialysis, ICU and post-arrest care are available — worth the extra 7 minutes for a now-perfusing patient." }
          ]
        }
      }
    ]
  },

  {
    id: 5,
    title: "Diltiazem Overdose",
    setting: "ed",
    place: "Emergency department",
    path: ["Brady", "VF", "Asystole", "ROSC"],
    sex: "M", age: 28,
    leadIn: "You are working in the emergency department when paramedics bring in a drowsy man. They are concerned about a drug overdose.",
    known: { Age: "28 y" },
    assessment: [
      "History of depression; also takes diltiazem for an unknown reason.",
      "A family member says he has had a very low mood and threatened suicide earlier in the day.",
      "An empty bottle of diltiazem was found beside him.",
      "He is very drowsy and slurring his words — no useful history from the patient."
    ],
    history: "Empty bottle of diltiazem at the scene. Threatened suicide earlier today.",
    exam: "Drowsy, slurred speech. Temperature 36.5 °C.",
    glucose: "195 mg/dL (10.8 mmol/L)",
    o2Start: true,
    teach: [
      "Wide-QRS ventricular escape at 30/min with long QT in a calcium-channel-blocker overdose — atropine is unlikely to work.",
      "Consider calcium, high-dose insulin/glucagon and early pacing or vasopressors; involve toxicology/poison center.",
      "VF: follow the VF pathway. Advanced options: IV lipid emulsion therapy and extracorporeal CPR.",
      "Asystole: high-quality CPR with great team communication; treat the toxin."
    ],
    stages: [
      {
        type: "brady", rhythm: { k: "escape", hr: 30, longQT: true },
        v: { sbp: 80, dbp: 48, spo2: 98, rr: 16 }, cons: "Very drowsy, slurring words", pulseText: "Weak, slow pulse ~30/min",
        quiz: { rhythm: "escape", stable: false }, atropineOptional: true,
        ecg12: "Wide-QRS ventricular escape rhythm at 30/min with a long QT interval.",
        fx: {
          atropine: { kind: "warn", msg: "Atropine given — no response. Expected with a calcium-channel-blocker overdose; move to calcium, pressors or pacing." },
          calcium: { kind: "good", sbp: 4, msg: "Calcium chloride 1 g IV — a reasonable antidote step for calcium-channel-blocker toxicity." },
          glucagon: { kind: "good", msg: "Glucagon / high-dose insulin started — appropriate antidote therapy for CCB toxicity." }
        },
        exit: [
          { on: "action", any: ["atropine", "paceOn", "dopamine", "epiInf", "calcium", "glucagon"], n: 2, delay: 6, msg: "His heart rate continues to drop. He suddenly becomes unresponsive and loses his pulse. The monitor shows VF." },
          { on: "time", sec: 90, msg: "His heart rate continues to drop. He suddenly becomes unresponsive and loses his pulse. The monitor shows VF." }
        ]
      },
      {
        type: "vf", rhythm: { k: "vf", amp: 0.6 }, quiz: { rhythm: "vf" }, etco2: 18, hts: ["toxins"],
        fx: { lipid: { kind: "good", msg: "IV lipid emulsion 20% — a reasonable advanced therapy for lipophilic drug toxicity. Also consider ECPR." } },
        exit: [{ on: "check", checks: 2, shocks: 2, msg: "Rhythm check after the second shock: asystole." }]
      },
      {
        type: "asys", rhythm: { k: "asys" }, quiz: { rhythm: "asys" }, hts: ["toxins"], etco2: 15,
        fx: { lipid: { kind: "good", msg: "IV lipid emulsion 20% — a reasonable advanced therapy for lipophilic drug toxicity." } },
        exit: [{ on: "check", checks: 2, needAll: ["epi"], fallback: 3, msg: "After several rounds of CPR and ACLS, the monitor shows a slow wide-complex rhythm." }]
      },
      {
        type: "rosc", rhythm: { k: "escape", hr: 42 }, v: { sbp: 76, dbp: 40, spo2: 95, rr: 6, etco2: 36 },
        cons: "Unresponsive", pulseText: "Weak carotid pulse ~42/min",
        ecg12: "Ventricular escape bradycardia ~42/min.",
        fx: { calcium: { kind: "good", sbp: 6, msg: "Calcium for persistent CCB toxicity after ROSC — appropriate." }, glucagon: { kind: "good", sbp: 6, msg: "High-dose insulin / glucagon for CCB toxicity — appropriate." } }
      }
    ]
  },

  {
    id: 6,
    title: "Heart Block on the Ward",
    setting: "ih",
    place: "Medical ward",
    path: ["Brady", "VF", "PEA", "ROSC"],
    sex: "M", age: 58,
    leadIn: "A man admitted with pneumonia has chest pain on the second day of his hospital course. You are called to evaluate him.",
    known: { Age: "58 y" },
    assessment: ["Day 2 of admission for pneumonia, new chest pain."],
    history: "Admitted for community-acquired pneumonia. New central chest pain this morning.",
    exam: "Pale, clammy. Crackles right base (known pneumonia).",
    glucose: "126 mg/dL (7.0 mmol/L)",
    teach: [
      "Third-degree block: atropine will not do much — start pacing early; pacing restores BP so he can go to the cath lab.",
      "Refractory VF (≥3 shocks): epinephrine after the 2nd shock, then amiodarone. Epinephrine before 2 shocks is an error.",
      "A sudden rise in ETCO₂ to 40 mmHg during CPR means ROSC — stop and check a pulse, even before the 2 minutes are up.",
      "Post-ROSC shock (70/30): fluid bolus plus a vasopressor; candidate for targeted temperature management."
    ],
    stages: [
      {
        type: "brady", rhythm: { k: "avb3", hr: 35, aRate: 84, wide: 0.2 },
        v: { sbp: 88, dbp: 49, spo2: 94, rr: 18 }, cons: "Awake, anxious, chest pain", pulseText: "Slow pulse ~35/min",
        quiz: { rhythm: "avb3", stable: false }, paceThreshold: 70,
        ecg12: "Third-degree AV block, ventricular rate 35/min. Inferior ST elevation.",
        fx: {
          atropine: { hr: 2, kind: "warn", msg: "Atropine given — not much effect, as expected in third-degree block. Initiate pacing." },
          capture: { sbp: 16, kind: "good", msg: "Electrical and mechanical capture! BP improves to ~104/62 — he can now go to the cardiac cath lab." }
        },
        exit: [{ on: "action", any: ["capture", "dopamine", "epiInf"], delay: 14, msg: "Just after cardiac catheterization (100% right coronary artery occlusion) the patient develops VF." }]
      },
      {
        type: "vf", rhythm: { k: "vf", amp: 0.8 }, quiz: { rhythm: "vf" }, etco2: 20,
        exit: [{ on: "check", checks: 3, shocks: 3, msg: "Rhythm check after the third shock: sinus tachycardia on the monitor." }]
      },
      {
        type: "pea", rhythm: { k: "sinus", hr: 118 }, quiz: { rhythm: "pea" }, hts: ["thrombosisC", "tamponade"], etco2: 22,
        pocus: "No pericardial fluid. Weak, hypokinetic contractions.",
        exit: [{ on: "action", any: ["epi"], delay: 30, msg: "During compressions the continuous ETCO₂ suddenly rises to 40 mmHg." }]
      },
      {
        type: "rosc", rhythm: { k: "sinus", hr: 110 }, v: { sbp: 70, dbp: 30, spo2: 93, rr: 10, etco2: 40 }, etco2Rosc: true,
        cons: "Does not follow commands", pulseText: "Weak pulse ~110/min",
        ecg12: "Sinus tachycardia 110/min, inferior ST elevation (post-PCI)."
      }
    ]
  },

  {
    id: 7,
    title: "Crescendo Angina",
    setting: "ih",
    place: "Cardiology ward",
    path: ["Unstable VT", "VF", "PEA", "ROSC"],
    sex: "M", age: 66,
    leadIn: "You are caring for a patient admitted for chest pain; MI has been ruled out. He was diagnosed with stable angina 10 years ago, but over the past few months his pain has been increasing in duration and intensity.",
    known: { HR: "160/min (was 82)", BP: "156/92 mmHg (was 124/74)", RR: "22/min", "SpO₂": "93%" },
    assessment: [
      "At the change of shift he denied chest pain. You leave the room and are soon called back by his son.",
      "He is clutching his chest, stating he has chest pain, and is diaphoretic.",
      "His bedside monitor shows a monomorphic, wide and rapid rhythm — different from previous recordings."
    ],
    history: "Stable angina for 10 years, now crescendo pattern. MI ruled out on admission.",
    exam: "Diaphoretic, clutching chest. Lungs clear.",
    glucose: "112 mg/dL (6.2 mmol/L)",
    monitorOn: true, ivStart: true,
    teach: [
      "Symptomatic VT with ongoing ischemic chest pain needs immediate synchronized cardioversion — don't delay it for drug therapy.",
      "Nitroglycerin is fine while SBP > 90 mmHg; aspirin while he is responsive.",
      "After the cardioversion shock he develops VF: assign roles, defibrillate, vasopressor, consider an antiarrhythmic.",
      "PEA with second-degree AV block: think cardiogenic shock / ACS and the other H's & T's."
    ],
    stages: [
      {
        type: "tachyU", rhythm: { k: "vt", hr: 160 },
        v: { sbp: 156, dbp: 92, spo2: 93, rr: 22 }, cons: "Awake, clutching chest", pulseText: "Rapid pulse ~160/min",
        quiz: { rhythm: "vt", stable: false },
        ecg12: "Monomorphic VT at 160/min.",
        fx: {
          ntg: { kind: "good", msg: "Nitroglycerin 0.4 mg SL — acceptable with SBP > 90 mmHg and ongoing chest pain. Don't let it delay cardioversion." },
          aspirin: { kind: "good", msg: "Aspirin 162–325 mg chewed — appropriate while he is responsive." },
          amio: { kind: "warn", msg: "Amiodarone started — but symptomatic VT with chest pain requires immediate synchronized cardioversion; drug therapy should not delay it." }
        },
        exit: [{ on: "action", any: ["sync"], n: 1, delay: 2, msg: "Upon delivery of the cardioversion shock he develops a different rhythm — VF. He is unresponsive and pulseless." }]
      },
      {
        type: "vf", rhythm: { k: "vf", amp: 0.7 }, quiz: { rhythm: "vf" }, etco2: 20,
        exit: [{ on: "check", checks: 2, shocks: 2, msg: "Rhythm check: second-degree AV block on the monitor. No pulse." }]
      },
      {
        type: "pea", rhythm: { k: "avb2", aRate: 84, ratio: 2 }, quiz: { rhythm: "pea" }, hts: ["thrombosisC"], etco2: 18,
        pocus: "Severely reduced contractility, no effusion — consistent with cardiogenic shock.",
        exit: [{ on: "check", checks: 2, needAll: ["epi"], fallback: 3, msg: "The team continues high-quality compressions — at the rhythm check an organized sinus rhythm appears." }]
      },
      {
        type: "rosc", rhythm: { k: "sinus", hr: 96 }, v: { sbp: 92, dbp: 58, spo2: 94, rr: 10, etco2: 38 },
        cons: "Unresponsive", pulseText: "Carotid pulse ~96/min",
        ecg12: "Sinus rhythm 96/min with anterior ST depression."
      }
    ]
  },

  {
    id: 8,
    title: "Inferior STEMI",
    setting: "ih",
    place: "Telemetry unit",
    path: ["Brady (stable)", "pVT", "PEA", "VF", "ROSC"],
    sex: "M", age: 72,
    leadIn: "A man admitted to the hospital with palpitations now reports chest discomfort, and you are called to evaluate him.",
    known: { HR: "50/min", BP: "150/70 mmHg", RR: "24/min", "SpO₂": "90% on room air", Age: "72 y" },
    assessment: ["A 12-lead ECG reveals an acute inferior STEMI."],
    history: "Admitted with palpitations. Chest discomfort started 20 minutes ago.",
    exam: "Uncomfortable but alert. Lungs clear. JVP not raised.",
    glucose: "140 mg/dL (7.8 mmol/L)",
    ivStart: true, monitorOn: true,
    teach: [
      "STEMI + bradycardia + hypoxia: oxygen, aspirin, activate the cath lab. BP is stable — no bradycardia intervention needed.",
      "Atropine in acute MI without clinical indication can increase ischemia. Avoid nitroglycerin in inferior MI (RV involvement).",
      "Witnessed, monitored VT: immediate defibrillation with good CPR.",
      "PEA → VF after epinephrine: defibrillate again; ETCO₂ rising to 40 mmHg signals ROSC — stop CPR and check a pulse.",
      "After ROSC: fluids for hypotension, rapid transfer to the cath lab, targeted temperature management."
    ],
    stages: [
      {
        type: "brady", stable: true, rhythm: { k: "sinus", hr: 50, stE: 0.25 },
        v: { sbp: 150, dbp: 70, spo2: 90, rr: 24 }, cons: "Alert, chest discomfort", pulseText: "Regular pulse ~50/min, good volume",
        quiz: { rhythm: "sbrady", stable: true },
        ecg12: "Acute inferior STEMI (ST elevation II, III, aVF) with sinus bradycardia 50/min.",
        fx: {
          atropine: { kind: "warn", hr: 14, msg: "Atropine given — BP was stable, so no intervention was needed. In acute MI atropine can increase myocardial O₂ demand and ischemia." },
          ntg: { kind: "bad", msg: "Avoid nitroglycerin in inferior MI — possible RV involvement makes him preload-dependent." },
          aspirin: { kind: "good", msg: "Aspirin 162–325 mg chewed — correct for STEMI." },
          cathlab: { kind: "good", msg: "Cath lab activated — STEMI alert sent." }
        },
        exit: [
          { on: "action", any: ["cathlab"], delay: 20, msg: "While waiting to go to the cath lab he becomes unresponsive and pulseless. The monitor shows VT." },
          { on: "time", sec: 80, msg: "While waiting to go to the cath lab he becomes unresponsive and pulseless. The monitor shows VT." }
        ]
      },
      {
        type: "pvt", rhythm: { k: "vt", hr: 180 }, quiz: { rhythm: "pvt" }, etco2: 20,
        exit: [{ on: "check", checks: 2, shocks: 2, msg: "Rhythm check after the second shock: an organized rhythm on the monitor." }]
      },
      {
        type: "pea", rhythm: { k: "sinus", hr: 64, stE: 0.25 }, quiz: { rhythm: "pea" }, hts: ["thrombosisC"], etco2: 18,
        exit: [{ on: "check", checks: 1, needAll: ["epi"], fallback: 2, msg: "Rhythm check: the rhythm has gone back to VF." }]
      },
      {
        type: "vf", rhythm: { k: "vf", amp: 0.65 }, quiz: { rhythm: "vf" }, etco2: 20,
        exit: [{ on: "action", any: ["shock"], delay: 45, msg: "About 1 minute into CPR, the ETCO₂ rises to 40 mmHg." }]
      },
      {
        type: "rosc", rhythm: { k: "sinus", hr: 108, stE: 0.25 }, v: { sbp: 80, dbp: 60, spo2: 95, rr: 10, etco2: 40 }, etco2Rosc: true,
        cons: "Unresponsive", pulseText: "Pulse ~108/min",
        ecg12: "Sinus tachycardia 108/min, inferior ST elevation.",
        fx: { cathlab: { kind: "good", msg: "Rapid transfer to the cath lab for revascularization — ideally with TTM started simultaneously." } }
      }
    ]
  },

  {
    id: 9,
    title: "SVT in an Asthmatic",
    setting: "ih",
    place: "Medical ward",
    path: ["Stable SVT", "PEA", "VF", "ROSC"],
    sex: "F", age: 42,
    leadIn: "A woman with a history of lupus and asthma was admitted with pneumonia. She was doing well initially but develops tachycardia while receiving albuterol for ongoing wheezing.",
    known: { HR: "160/min, monitor shows SVT", BP: "140/70 mmHg", Age: "42 y" },
    assessment: ["Receiving nebulized albuterol for ongoing wheezing.", "Talking, palpitations, no chest pain."],
    history: "Lupus, asthma (two prior ICU admissions). Admitted with pneumonia.",
    exam: "Diffuse expiratory wheeze. Alert, speaking full sentences.",
    glucose: "132 mg/dL (7.3 mmol/L)",
    ivStart: true, monitorOn: true,
    teach: [
      "Stable narrow-complex SVT: vagal maneuvers, then adenosine — but adenosine is relatively contraindicated in asthma exacerbation. A calcium-channel blocker is a good alternative.",
      "Severe bronchospasm can progress to respiratory failure requiring intubation regardless.",
      "PEA right after intubation in severe asthma: suspect auto-PEEP (and tension pneumothorax). Disconnect the bag to allow full exhalation, slow the ventilation rate.",
      "VF: defibrillate. ETCO₂ rising from 12 to 38 mmHg indicates ROSC — stop CPR, confirm pulse and BP.",
      "After ROSC avoid excessive ventilation and hypoxia; no cath lab needed — the cause is respiratory."
    ],
    stages: [
      {
        type: "tachyS", stable: true, rhythm: { k: "svt", hr: 160 },
        v: { sbp: 140, dbp: 70, spo2: 94, rr: 24 }, cons: "Alert, anxious", pulseText: "Regular rapid pulse ~160/min",
        quiz: { rhythm: "svt", stable: true },
        ecg12: "Regular narrow-complex tachycardia 160/min, no visible P waves — SVT.",
        fx: {
          vagal: { kind: "good", msg: "Vagal maneuver (modified Valsalva) attempted — no conversion. Consider drug therapy." },
          adenosine: { kind: "warn", msg: "Adenosine converts the rhythm to sinus — but it is relatively contraindicated in asthma exacerbation. Her wheezing worsens markedly." },
          diltiazem: { kind: "good", msg: "Diltiazem — a good alternative to adenosine in an asthmatic. Rate slows to sinus tachycardia." },
          bblocker: { kind: "bad", msg: "Beta-blockers can trigger severe bronchospasm in asthma — avoid." }
        },
        exit: [
          { on: "action", any: ["adenosine", "diltiazem", "bblocker"], delay: 4, msg: "The rhythm is now sinus — but she progresses to severe respiratory distress with marked wheezing." },
          { on: "time", sec: 100, msg: "Her wheezing becomes severe and she progresses to respiratory distress." }
        ]
      },
      {
        type: "resp", rhythm: { k: "sinus", hr: 132 },
        v: { sbp: 132, dbp: 74, spo2: 85, rr: 34 }, cons: "Exhausted, can only nod", pulseText: "Rapid pulse ~132/min",
        exam: "Silent chest bilaterally, accessory muscle use.",
        fx: {
          albuterol: { kind: "info", msg: "Continuous albuterol — no improvement. She is tiring: she needs ventilatory support / intubation." },
          bvm: { spo2: 6, kind: "good", msg: "Bag-mask assisted ventilation — difficult with severe bronchospasm. Prepare for intubation." }
        },
        exit: [
          { on: "action", any: ["airway"], delay: 7, msg: "After intubation and bagging, her pulse disappears. The monitor still shows an organized rhythm — PEA." },
          { on: "time", sec: 90, msg: "She stops breathing. After bag-mask ventilation and intubation her pulse disappears — PEA." }
        ]
      },
      {
        type: "pea", rhythm: { k: "sinus", hr: 124 }, quiz: { rhythm: "pea" }, hts: ["tension", "hypoxia"], etco2: 12, spo2Low: true,
        fx: {
          ventSlow: { kind: "good", msg: "Bag disconnected to allow full exhalation, ventilation slowed to 1 breath every 6 s — treating auto-PEEP." },
          pocus: { kind: "info", msg: "Lung sliding present bilaterally — no tension pneumothorax. Hyperinflated lungs." }
        },
        exit: [{ on: "check", checks: 1, needAll: ["ventSlow", "epi"], fallback: 3, msg: "Rhythm check: the rhythm has changed to VF." }]
      },
      {
        type: "vf", rhythm: { k: "vf", amp: 0.7 }, quiz: { rhythm: "vf" }, etco2: 12,
        exit: [{ on: "action", any: ["shock"], delay: 50, msg: "About 1 minute into compressions, ETCO₂ rises from 12 to 38 mmHg." }]
      },
      {
        type: "rosc", rhythm: { k: "sinus", hr: 110 }, v: { sbp: 89, dbp: 70, spo2: 91, rr: 10, etco2: 38 }, etco2Rosc: true,
        cons: "Not following commands", pulseText: "Pulse ~110/min",
        ecg12: "Sinus tachycardia 110/min, otherwise normal.",
        fx: {
          cathlab: { kind: "warn", msg: "Not indicated — the arrest was caused by pneumonia and asthma; the 12-lead shows only sinus tachycardia." },
          ventSlow: { kind: "good", msg: "Ventilation rate reduced to avoid auto-PEEP — key in severe asthma after ROSC." }
        }
      }
    ]
  },

  {
    id: 10,
    title: "Post-PCI VT",
    setting: "ih",
    place: "Cardiac care unit",
    path: ["Unstable VT", "VF", "PEA", "ROSC"],
    sex: "F", age: 51,
    leadIn: "You are working in the cardiac care unit. A woman who underwent PCI 3 hours ago is reporting heavy central chest pressure and nausea.",
    known: { HR: "130/min", BP: "72/40 mmHg", RR: "20/min", Temp: "37 °C", Age: "51 y" },
    assessment: [
      "She reports feeling light-headed and nauseated, with severe central crushing chest pain.",
      "She appears drowsy, pale and diaphoretic. The SpO₂ monitor is not showing a waveform.",
      "The rhythm strip shows a regular wide-complex tachycardia at 130/min."
    ],
    history: "PCI to the LAD 3 hours ago. Previous ECG before the procedure: normal sinus rhythm, narrow complex.",
    exam: "Drowsy, pale, diaphoretic. Femoral access site clean, no hematoma.",
    glucose: "118 mg/dL (6.5 mmol/L)",
    monitorOn: true, ivStart: true, noSpo2: true,
    teach: [
      "Unstable VT (hypotension, altered mental status, ischemic pain): assess ABCs, O₂, IV access, then safe synchronized cardioversion.",
      "Discuss analgesia and sedation for cardioversion when it does not delay therapy.",
      "After 2 failed cardioversions she arrests: safe defibrillation, high-quality compressions, differential diagnosis.",
      "PEA post-PCI: consider acute stent thrombosis, PE, tamponade and hemorrhage. Involve interventional cardiology after ROSC."
    ],
    stages: [
      {
        type: "tachyU", rhythm: { k: "vt", hr: 130 },
        v: { sbp: 72, dbp: 40, spo2: 92, rr: 20 }, cons: "Drowsy, light-headed", pulseText: "Weak, rapid pulse ~130/min",
        quiz: { rhythm: "vt", stable: false },
        ecg12: "VT at 130/min. Previous ECG before the procedure: normal sinus rhythm with narrow complexes.",
        fx: { sedation: { kind: "good", msg: "Analgesia/sedation given — reasonable when it doesn't delay cardioversion in an unstable patient." } },
        exit: [{ on: "action", any: ["sync"], n: 2, delay: 3, msg: "After 2 failed synchronized cardioversions she loses her pulse, becomes apneic and unresponsive. The monitor shows VF." }]
      },
      {
        type: "vf", rhythm: { k: "vf", amp: 0.7 }, quiz: { rhythm: "vf" }, etco2: 20,
        exit: [{ on: "check", checks: 2, shocks: 2, msg: "Rhythm check after the second defibrillation: a wide-complex regular rhythm with P waves at 70/min. Still no pulse." }]
      },
      {
        type: "pea", rhythm: { k: "sinus", hr: 70, wide: 0.85 }, quiz: { rhythm: "pea" }, hts: ["thrombosisC", "thrombosisP", "tamponade", "hypovolemia"], etco2: 18,
        pocus: "No pericardial effusion. RV not dilated. Akinetic anterior wall.",
        exit: [{ on: "check", checks: 2, needAll: ["epi"], fallback: 3, msg: "The team continues high-quality compressions — at the rhythm check an organized narrow rhythm appears." }]
      },
      {
        type: "rosc", rhythm: { k: "sinus", hr: 98, stE: 0.3 }, v: { sbp: 90, dbp: 56, spo2: 94, rr: 10, etco2: 37 },
        cons: "Unresponsive, not following commands", pulseText: "Carotid pulse ~98/min",
        ecg12: "Sinus rhythm 98/min with new anterior ST elevation — suspect acute stent thrombosis.",
        fx: { cathlab: { kind: "good", msg: "Interventional cardiologist called back — question acute stent occlusion." } }
      }
    ]
  },

  {
    id: 11,
    title: "Sedation in the Endoscopy Suite",
    setting: "ih",
    place: "Colonoscopy suite",
    path: ["Resp. depression", "Brady", "VF", "PEA", "ROSC"],
    sex: "M", age: 51,
    leadIn: "A patient is undergoing his initial colon screening. Fifteen minutes into the procedure, under conscious sedation, his respiratory rate drops to 4 and ETCO₂ is 55 mmHg.",
    known: { RR: "4/min", "ETCO₂": "55 mmHg", Age: "51 y" },
    assessment: [
      "A healthy man; family history of colon cancer.",
      "No significant past medical history except daily alcohol use (3 to 4 drinks per day).",
      "He received fentanyl and midazolam for conscious sedation.",
      "As the ETCO₂ rises he becomes less arousable, then apneic. The Code Team is activated."
    ],
    history: "Fentanyl + midazolam for conscious sedation. 3–4 alcoholic drinks per day.",
    exam: "Pinpoint pupils, apneic episodes, unresponsive to voice.",
    glucose: "98 mg/dL (5.4 mmol/L)",
    monitorOn: true, capnoOn: true, ivStart: true, o2Start: true,
    teach: [
      "Recognize impending respiratory failure from sedation: bag-mask with 100% O₂, reversal agents (naloxone, flumazenil), supraglottic airway.",
      "Slow narrow-complex bradycardia with hypotension, unstable: atropine 1 mg (repeat) — if no effect, dopamine/epinephrine infusion or pacing.",
      "VF: shocks, epinephrine and amiodarone, advanced airway.",
      "Narrow-complex tachycardia without a pulse is PEA — follow the PEA pathway."
    ],
    stages: [
      {
        type: "resp", rhythm: { k: "sinus", hr: 30 },
        v: { sbp: 70, dbp: 40, spo2: 82, rr: 3, etco2: 58 }, cons: "Barely arousable, apneic spells", pulseText: "Slow, weak pulse ~30/min",
        quiz: { rhythm: "sbrady", stable: false },
        fx: {
          bvm: { spo2: 10, kind: "good", msg: "Bag-mask ventilation with 100% O₂ — oxygenation improving." },
          naloxone: { kind: "good", msg: "Naloxone IV — correct opioid reversal. No change in respiratory rate yet." },
          flumazenil: { kind: "good", msg: "Flumazenil IV — benzodiazepine reversal ordered." },
          airway: { kind: "good", spo2: 4, msg: "Supraglottic airway placed — ventilation secured." }
        },
        exit: [
          { on: "tick", test: S => S.vent && (S.used.naloxone || S.used.flumazenil), delay: 6, msg: "Oxygenation improves (SpO₂ 95%) but the respiratory rate hasn't changed. His respiratory status is now supported — but the heart rate stays at 30/min with hypotension." },
          { on: "time", sec: 100, msg: "With bag-mask ventilation his SpO₂ improves, but the heart rate stays at 30/min with hypotension." }
        ]
      },
      {
        type: "brady", rhythm: { k: "sinus", hr: 30 },
        v: { sbp: 70, dbp: 40, spo2: 95, rr: 3, etco2: 45 }, cons: "Unresponsive (sedated)", pulseText: "Slow, weak pulse ~30/min",
        quiz: { rhythm: "sbrady", stable: false },
        ecg12: "Sinus bradycardia 30/min, narrow complex, no ST changes.",
        fx: { atropine: { kind: "good", msg: "Atropine 1 mg IV — no change in heart rate or blood pressure." } },
        exit: [
          { on: "action", any: ["dopamine", "epiInf", "paceOn"], delay: 6, msg: "While the infusion/pacer is being prepared, the patient becomes unresponsive and pulseless. The monitor shows VF." },
          { on: "action", any: ["atropine"], n: 2, delay: 10, msg: "While the dopamine infusion is being prepared, the patient becomes pulseless. The monitor shows VF." },
          { on: "time", sec: 110, msg: "The patient becomes pulseless. The monitor shows VF." }
        ]
      },
      {
        type: "vf", rhythm: { k: "vf", amp: 0.7 }, quiz: { rhythm: "vf" }, etco2: 20,
        exit: [{ on: "check", checks: 3, shocks: 3, msg: "Rhythm check: a narrow-complex tachycardia on the monitor — no pulse, no spontaneous respirations." }]
      },
      {
        type: "pea", rhythm: { k: "svt", hr: 142 }, quiz: { rhythm: "pea" }, hts: ["hypoxia", "toxins"], etco2: 18,
        exit: [{ on: "check", checks: 1, needAll: ["epi"], fallback: 3, msg: "The team continues high-quality compressions — at the rhythm check the rhythm is organized and slower." }]
      },
      {
        type: "rosc", rhythm: { k: "sinus", hr: 96 }, v: { sbp: 98, dbp: 60, spo2: 96, rr: 8, etco2: 40 },
        cons: "Unresponsive", pulseText: "Pulse ~96/min",
        ecg12: "Sinus rhythm 96/min, no ST changes."
      }
    ]
  },

  {
    id: 12,
    title: "Waiting-Room Collapse",
    setting: "ih",
    place: "Surgical waiting room",
    path: ["Brady", "VF", "Asystole", "PEA", "ROSC"],
    sex: "F", age: 67,
    leadIn: "A woman sits in the surgical waiting room awaiting news about her husband's surgery, when she suddenly becomes light-headed and dizzy and nearly passes out.",
    known: { Age: "67 y" },
    assessment: [
      "History of breast cancer (in remission) and diabetes.",
      "She is lying on the floor.",
      "You respond as a member of the medical emergency team."
    ],
    history: "She forgot to eat breakfast today. Breast cancer (remission), diabetes.",
    exam: "Pale, clammy. Moved to a stretcher.",
    glucose: "90 mg/dL (5 mmol/L)",
    teach: [
      "Second-degree type II AV block, narrow complex, hypotensive: unstable — atropine (often ineffective in Mobitz II), then pacing/infusions and urgent transfer.",
      "VF: shocks, epinephrine and amiodarone, advanced airway.",
      "Asystole: confirm, no shock, epinephrine, high-quality CPR.",
      "Narrow-complex tachycardia without a pulse is PEA — continue the PEA pathway; treat causes."
    ],
    stages: [
      {
        type: "brady", rhythm: { k: "avb2", aRate: 84, ratio: 3 },
        v: { sbp: 68, dbp: 40, spo2: 96, rr: 18 }, cons: "Light-headed, dizzy", pulseText: "Slow, weak pulse ~28/min",
        quiz: { rhythm: "avb2", stable: false },
        ecg12: "Second-degree AV block type II (3:1), narrow complex, no ST changes.",
        fx: { atropine: { kind: "good", msg: "Atropine 1 mg IV — no change in heart rate or blood pressure (common in Mobitz II)." } },
        exit: [
          { on: "action", any: ["atropine"], n: 2, delay: 8, msg: "She is wheeled urgently to the emergency department. On arrival she becomes pulseless — the monitor shows VF." },
          { on: "action", any: ["paceOn", "dopamine", "epiInf"], delay: 10, msg: "She is wheeled urgently to the emergency department. On arrival she becomes pulseless — the monitor shows VF." },
          { on: "time", sec: 110, msg: "She becomes pulseless — the monitor shows VF." }
        ]
      },
      {
        type: "vf", rhythm: { k: "vf", amp: 0.7 }, quiz: { rhythm: "vf" }, etco2: 20,
        exit: [{ on: "check", checks: 2, shocks: 2, msg: "Rhythm check: a flat line. No pulse or spontaneous respirations — asystole." }]
      },
      {
        type: "asys", rhythm: { k: "asys" }, quiz: { rhythm: "asys" }, hts: ["hypoxia", "hypovolemia"], etco2: 14,
        exit: [{ on: "check", checks: 1, needAll: ["epi"], fallback: 2, msg: "Rhythm check: a narrow-complex tachycardia — but no pulse." }]
      },
      {
        type: "pea", rhythm: { k: "svt", hr: 138 }, quiz: { rhythm: "pea" }, hts: ["hypovolemia", "hypoxia"], etco2: 18,
        exit: [{ on: "check", checks: 1, needAll: ["epi"], fallback: 2, msg: "The team continues high-quality compressions — at the rhythm check an organized sinus rhythm appears." }]
      },
      {
        type: "rosc", rhythm: { k: "sinus", hr: 94 }, v: { sbp: 96, dbp: 58, spo2: 95, rr: 10, etco2: 38 },
        cons: "Unresponsive", pulseText: "Carotid pulse ~94/min",
        ecg12: "Sinus rhythm 94/min, no ST changes."
      }
    ]
  }
];
