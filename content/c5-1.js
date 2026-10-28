/* ========== CPG 5.1 – Stroke ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c5-1",
    "title": "Stroke",
    "shortTitle": "5.1 Stroke",
    "guide": {
        "cpg": "5.1",
        "group": "neuro",
        "groupLabel": "Neurology",
        "title": "Stroke",
        "lead": "Stroke is a time-critical transfer. Fix the time last known well, run a BEFAST, check glucose, and leave: onset under 4.5 hours goes to a stroke center within 15 minutes of arrival. Do not lower blood pressure unless it exceeds 220/120 with end-organ dysfunction.",
        "source": {
            "label": "CPG 5.1",
            "pages": "139–142",
            "pdf": "../pdf_sections/5_1_Stroke.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Suspected acute stroke or TIA: sudden focal weakness, numbness or paralysis; speech difficulty; sudden vision change; dizziness or loss of balance; severe headache with no known cause.",
                    "A positive stroke screen (BEFAST)."
                ],
                "exclude": [
                    "Symptoms clearly due to another cause (hypoglycemia, seizure, trauma) without stroke-like features.",
                    "Resolved symptoms with no ongoing deficit (e.g. a prior TIA with no new symptoms)."
                ]
            },
            {
                "type": "table",
                "title": "BEFAST",
                "icon": "brain",
                "columns": [
                    "",
                    "Look for"
                ],
                "rows": [
                    [
                        "<b>B</b>alance",
                        "Sudden loss of balance"
                    ],
                    [
                        "<b>E</b>yes",
                        "Vision loss"
                    ],
                    [
                        "<b>F</b>ace",
                        "Facial droop or asymmetry; uneven smile"
                    ],
                    [
                        "<b>A</b>rms",
                        "Unilateral weakness or drift"
                    ],
                    [
                        "<b>S</b>peech",
                        "Slurred speech or inability to speak clearly"
                    ],
                    [
                        "<b>T</b>ime",
                        "Exact time of onset, or last known well"
                    ]
                ],
                "notes": [
                    "Last known well is the moment the patient was last known normal. It decides eligibility for treatment and the destination hospital.",
                    "Also: gaze deviation, pupil asymmetry, sensory loss or neglect; AVPU or GCS."
                ]
            },
            {
                "type": "steps",
                "title": "Management",
                "icon": "list",
                "steps": [
                    {
                        "title": "Surveys and back-up",
                        "text": "Primary and secondary survey (Universal Care CPG); consider ALS back-up. All acute stroke patients are Red priority."
                    },
                    {
                        "title": "Position",
                        "text": "Semi-reclined, head up 15–30°, unless the patient must be supine for airway management."
                    },
                    {
                        "title": "Oxygen only if hypoxic",
                        "level": "EMR",
                        "text": "Titrate to SpO<sub>2</sub> ≥94% (flowchart: &gt;94%). Avoid routine oxygen in normoxic patients."
                    },
                    {
                        "title": "Glucose",
                        "text": "Rule out hypoglycemia (&lt;70 mg/dL) and hyperglycemia. Abnormal: Hypoglycemia or Hyperglycemia CPG."
                    },
                    {
                        "title": "Blood pressure",
                        "text": "Do not lower it unless &gt;220/120 mmHg with signs of end-organ dysfunction: lowering it reduces cerebral perfusion in ischemic stroke. Contact Tele-EMS for exceptionally hypertensive patients."
                    },
                    {
                        "title": "12-lead ECG",
                        "level": "EMT",
                        "text": "Do not delay transport: record it en route."
                    },
                    {
                        "title": "IV access",
                        "level": "EMT",
                        "text": "18g or larger in a large peripheral vein: needed for contrast CT. Do not delay scene time for it."
                    },
                    {
                        "title": "Reassess frequently",
                        "text": "As per the Universal Care CPG."
                    }
                ]
            },
            {
                "type": "pathways",
                "title": "Destination (via Dispatch 2)",
                "icon": "ambulance",
                "paths": [
                    {
                        "title": "Onset or last known well &lt;4.5 hours",
                        "tone": "shock",
                        "steps": [
                            {
                                "text": "Stroke center, rapidly. Tell Dispatch 2 the symptoms and onset time."
                            }
                        ]
                    },
                    {
                        "title": "&gt;4.5 hours",
                        "tone": "noshock",
                        "steps": [
                            {
                                "text": "Other appropriate hospital, as directed by dispatch."
                            }
                        ]
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Red flags and mimics",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "Red flags",
                        "items": [
                            "Onset within 4.5 hours (thrombolysis) or up to 24 hours (endovascular therapy).",
                            "Rapidly falling GCS or loss of consciousness.",
                            "Raised intracranial pressure: unequal pupils, severe headache, vomiting.",
                            "Respiratory distress or SpO<sub>2</sub> &lt;90%.",
                            "Suspected hemorrhage: sudden severe headache, seizures."
                        ]
                    },
                    {
                        "title": "Stroke mimics",
                        "items": [
                            "Hypoglycemia; electrolyte abnormalities (e.g. hyponatremia).",
                            "Seizures and post-ictal states (Todd's paralysis).",
                            "Intracerebral lesions (tumour, abscess); hemiplegic migraine.",
                            "Conversion disorder (acute psychosocial stressors)."
                        ]
                    }
                ]
            },
            {
                "type": "tools",
                "title": "Practise with the app",
                "icon": "monitor",
                "groups": [
                    {
                        "title": "On the 12-lead",
                        "items": [
                            {
                                "ecg": "afib",
                                "label": "Atrial fibrillation",
                                "sub": "Document it: a relevant history in stroke"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "list",
                "title": "Documentation",
                "icon": "notebook-pen",
                "items": [
                    "Time of onset or last known well, and the symptom timeline.",
                    "BEFAST findings, GCS, pupils, vital signs and glucose; mimics considered.",
                    "Oxygen and SpO<sub>2</sub>, IV and cannula size, stroke alert and hospital notification.",
                    "Anticoagulants and antiplatelets; previous stroke, cardiovascular disease, atrial fibrillation."
                ]
            },
            {
                "type": "list",
                "title": "Key performance indicators",
                "icon": "chart-no-axes-column",
                "items": [
                    "BEFAST performed and documented in every suspected stroke.",
                    "Glucose (RBS) checked in every suspected stroke.",
                    "Onset &lt;4.5 hours: transport started within 15 minutes of EMS arrival."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "6.8 Hypoglycemia",
                        "href": "c6-8.html"
                    },
                    {
                        "label": "6.9 Hyperglycemia",
                        "href": "c6-9.html"
                    },
                    {
                        "label": "5.2 Seizures",
                        "href": "c5-2.html"
                    },
                    {
                        "label": "6.5 Altered Mental Status",
                        "href": "c6-5.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "What does the B in BEFAST stand for?",
            "options": [
                "Balance",
                "Blood pressure",
                "Breathing",
                "Bradycardia"
            ],
            "correct": 0,
            "explanation": "Balance, Eyes, Face, Arms, Speech, Time."
        },
        {
            "q": "Sudden right arm weakness and slurred speech. Which check must not be missed?",
            "options": [
                "Blood glucose",
                "Temperature",
                "Peak flow",
                "Capillary refill"
            ],
            "correct": 0,
            "explanation": "Hypoglycemia is a common stroke mimic; RBS in every suspected stroke is a KPI."
        },
        {
            "q": "What is the thrombolysis window used for destination decisions?",
            "options": [
                "4.5 hours",
                "1 hour",
                "12 hours",
                "48 hours"
            ],
            "correct": 0,
            "explanation": "Onset or last known well <4.5 hours: stroke center."
        },
        {
            "q": "Suspected stroke with glucose 50 mg/dL. What do you do?",
            "options": [
                "Treat as per the Hypoglycemia CPG and reassess",
                "Stroke alert, no glucose",
                "Give aspirin",
                "Lower the BP"
            ],
            "correct": 0,
            "explanation": "Glucose <70 mg/dL: go to the Hypoglycemia CPG."
        },
        {
            "q": "When is oxygen given in stroke?",
            "options": [
                "Only if hypoxic, to SpO₂ ≥94%",
                "Always at 15 L/min",
                "Never",
                "Only if GCS <8"
            ],
            "correct": 0,
            "explanation": "Avoid routine oxygen in normoxic patients."
        },
        {
            "q": "Which is a stroke mimic?",
            "options": [
                "Todd's paralysis after a seizure",
                "Atrial fibrillation",
                "Hypertension",
                "Facial droop"
            ],
            "correct": 0,
            "explanation": "Mimics: hypoglycemia, seizures and post-ictal states, lesions, hemiplegic migraine, electrolyte disorders, conversion disorder."
        },
        {
            "q": "When is the 12-lead ECG recorded?",
            "options": [
                "En route: do not delay transport",
                "Before leaving scene, always",
                "Only with chest pain",
                "Never in stroke"
            ],
            "correct": 0,
            "explanation": "Perform it, but en route if stroke is suspected."
        },
        {
            "q": "How is an alert stroke patient positioned?",
            "options": [
                "Head up 15–30° (semi-reclined)",
                "Flat supine",
                "Head down",
                "Prone"
            ],
            "correct": 0,
            "explanation": "Unless supine positioning is needed for airway management."
        },
        {
            "q": "BP 210/120 mmHg, no end-organ dysfunction. What do you do?",
            "options": [
                "Do not lower it",
                "GTN",
                "Give a beta-blocker",
                "Fluid bolus"
            ],
            "correct": 0,
            "explanation": "Lower BP only above 220/120 mmHg with end-organ dysfunction; contact Tele-EMS for exceptional hypertension."
        },
        {
            "q": "Which suggests hemorrhagic stroke?",
            "options": [
                "Sudden severe headache or seizures",
                "Gradual weakness over weeks",
                "Normal glucose",
                "Mild facial droop alone"
            ],
            "correct": 0,
            "explanation": "A red flag for suspected hemorrhage."
        },
        {
            "q": "What is the most important time to establish?",
            "options": [
                "Last known well",
                "Time of the 911 call",
                "Last meal",
                "Time of the last medication"
            ],
            "correct": 0,
            "explanation": "It decides treatment eligibility and the destination."
        },
        {
            "q": "Which level may give oxygen in this CPG?",
            "options": [
                "EMR",
                "EMT only",
                "P only",
                "AP only"
            ],
            "correct": 0,
            "explanation": "Oxygen is EMR; 12-lead and IV are EMT."
        },
        {
            "q": "Which is part of BEFAST?",
            "options": [
                "Eyes: vision loss",
                "ECG",
                "Electrolytes",
                "End-tidal CO₂"
            ],
            "correct": 0,
            "explanation": "E is for eyes."
        },
        {
            "q": "Left-sided weakness, slurred speech, glucose 120 mg/dL, onset 1 hour ago. Destination?",
            "options": [
                "Stroke center",
                "Nearest clinic",
                "Home",
                "Any hospital after observation"
            ],
            "correct": 0,
            "explanation": "Under 4.5 hours: stroke center, transport within 15 minutes of arrival."
        },
        {
            "q": "What is the scene-time KPI for onset under 4.5 hours?",
            "options": [
                "Transport within 15 minutes of EMS arrival",
                "Within 45 minutes",
                "No target",
                "Within 2 hours"
            ],
            "correct": 0,
            "explanation": "KPI 3."
        },
        {
            "q": "Why document atrial fibrillation?",
            "options": [
                "It is relevant stroke history",
                "It excludes stroke",
                "It means hemorrhage",
                "It is not relevant"
            ],
            "correct": 0,
            "explanation": "Background history includes previous stroke, cardiovascular disease and atrial fibrillation."
        },
        {
            "q": "Why is an 18g or larger cannula preferred?",
            "options": [
                "It is needed for contrast CT",
                "For blood transfusion only",
                "It is easier to insert",
                "It is not preferred"
            ],
            "correct": 0,
            "explanation": "But do not delay scene time to place it."
        },
        {
            "q": "A seizure was witnessed at onset of weakness. What do you consider?",
            "options": [
                "A post-ictal state (Todd's paralysis) or hemorrhage",
                "Nothing changes",
                "TIA only",
                "Migraine only"
            ],
            "correct": 0,
            "explanation": "Post-ictal states mimic stroke; seizures are also a red flag for hemorrhage."
        },
        {
            "q": "When does the endovascular window extend to?",
            "options": [
                "Up to 24 hours",
                "1 hour",
                "4.5 hours only",
                "72 hours"
            ],
            "correct": 0,
            "explanation": "Thrombolysis within 4.5 hours; endovascular therapy up to 24 hours."
        },
        {
            "q": "BP 180/100 mmHg in a stable stroke patient. Do you lower it?",
            "options": [
                "No",
                "Yes, with GTN",
                "Yes, with fluids",
                "Yes, to 120/80"
            ],
            "correct": 0,
            "explanation": "Only above 220/120 with end-organ dysfunction."
        },
        {
            "q": "A normoxic stroke patient, SpO₂ 97%. Oxygen?",
            "options": [
                "No",
                "Yes, high flow",
                "Yes, 2 L/min routinely",
                "Only via BVM"
            ],
            "correct": 0,
            "explanation": "Routine oxygen should be avoided."
        },
        {
            "q": "Which SpO₂ is a red flag?",
            "options": [
                "Below 90%",
                "96%",
                "98%",
                "100%"
            ],
            "correct": 0,
            "explanation": "Respiratory distress or hypoxia (SpO₂ <90%)."
        },
        {
            "q": "Weakness lasted 30 minutes and has fully resolved; no ongoing deficit. Where does this sit?",
            "options": [
                "Excluded from this CPG: assess under Universal Care",
                "Stroke center alert",
                "Thrombolysis candidate",
                "Red flag"
            ],
            "correct": 0,
            "explanation": "Resolved symptoms with no ongoing deficit are excluded; the patient still needs assessment."
        },
        {
            "q": "Which sign suggests raised intracranial pressure?",
            "options": [
                "Unequal pupils, severe headache, vomiting",
                "Warm skin",
                "Normal GCS",
                "Bradypnea from opioids"
            ],
            "correct": 0,
            "explanation": "A red flag."
        },
        {
            "q": "What triage category is acute stroke?",
            "options": [
                "Red",
                "Yellow",
                "Green",
                "Depends on age"
            ],
            "correct": 0,
            "explanation": "All patients with signs of acute stroke are Red priority."
        },
        {
            "q": "Who directs the destination decision?",
            "options": [
                "Dispatch 2, based on onset time",
                "The family",
                "The patient's GP",
                "Nearest hospital always"
            ],
            "correct": 0,
            "explanation": "Communicate symptoms and onset time to Dispatch 2."
        },
        {
            "q": "Which medicines must be documented?",
            "options": [
                "Anticoagulants and antiplatelets",
                "Vitamins only",
                "None",
                "Only insulin"
            ],
            "correct": 0,
            "explanation": "Document chronic medications, especially anticoagulants and antiplatelets."
        },
        {
            "q": "Onset 6 hours ago. Destination per the flowchart?",
            "options": [
                "Other appropriate hospital, as directed by dispatch",
                "Stroke center for thrombolysis",
                "Home",
                "Treat at scene"
            ],
            "correct": 0,
            "explanation": "Over 4.5 hours: other appropriate hospital as directed."
        },
        {
            "q": "Symptoms improve rapidly in the ambulance. What do you do?",
            "options": [
                "Continue transport and reassess",
                "Return home",
                "Stop monitoring",
                "Discharge on scene"
            ],
            "correct": 0,
            "explanation": "Reassess frequently; the patient still needs stroke evaluation."
        },
        {
            "q": "Which are the KPIs?",
            "options": [
                "BEFAST, RBS, and transport within 15 minutes if onset <4.5 hours",
                "CT in the ambulance",
                "BP below 140",
                "Oxygen in all"
            ],
            "correct": 0,
            "explanation": "Three KPIs."
        }
    ],
    "flashcards": [
        {
            "question": "BEFAST",
            "answer": "Balance, Eyes, Face, Arms, Speech, Time (last known well)."
        },
        {
            "question": "Stroke mimics",
            "answer": "Hypoglycemia; seizures and post-ictal states (Todd's); intracerebral lesions; hemiplegic migraine; electrolyte abnormalities; conversion disorder."
        },
        {
            "question": "Why the onset time matters",
            "answer": "Thrombolysis within 4.5 hours, endovascular therapy up to 24 hours; it decides the destination."
        },
        {
            "question": "Glucose",
            "answer": "Check in every suspected stroke; <70 mg/dL or high: Hypo/Hyperglycemia CPG."
        },
        {
            "question": "Oxygen",
            "answer": "Only if hypoxic: SpO₂ ≥94% (EMR). No routine oxygen."
        },
        {
            "question": "Position",
            "answer": "Head up 15–30°, unless supine is needed for the airway."
        },
        {
            "question": "Blood pressure",
            "answer": "Do not lower unless >220/120 mmHg with end-organ dysfunction; Tele-EMS for exceptional hypertension."
        },
        {
            "question": "12-lead ECG",
            "answer": "EMT; en route, never delaying transport."
        },
        {
            "question": "IV access",
            "answer": "EMT; 18g or larger (contrast CT); do not delay scene time."
        },
        {
            "question": "Destination",
            "answer": "<4.5 hours: stroke center. >4.5 hours: other appropriate hospital. Directed by Dispatch 2."
        },
        {
            "question": "Scene time KPI",
            "answer": "Transport within 15 minutes of EMS arrival if onset <4.5 hours."
        },
        {
            "question": "Hemorrhagic stroke clues",
            "answer": "Sudden severe headache, seizures."
        },
        {
            "question": "Raised ICP signs",
            "answer": "Unequal pupils, severe headache, vomiting."
        },
        {
            "question": "Hypoxia red flag",
            "answer": "SpO₂ <90% or respiratory distress."
        },
        {
            "question": "Neurological red flag",
            "answer": "Rapidly falling GCS or loss of consciousness."
        },
        {
            "question": "Todd's paralysis",
            "answer": "Post-ictal focal weakness that mimics stroke."
        },
        {
            "question": "Last known well",
            "answer": "The moment the patient was last known normal."
        },
        {
            "question": "Triage",
            "answer": "Red priority."
        },
        {
            "question": "Exclusions",
            "answer": "Clear other cause without stroke-like features; resolved symptoms with no ongoing deficit."
        },
        {
            "question": "Neurological examination",
            "answer": "Focal signs, gaze deviation, pupils, facial paralysis; AVPU or GCS."
        },
        {
            "question": "Communication",
            "answer": "Tell Dispatch 2 the stroke symptoms and onset time."
        },
        {
            "question": "Documentation essentials",
            "answer": "Onset/LKW, BEFAST, GCS, pupils, vitals, RBS, cannula size, stroke alert, anticoagulants."
        },
        {
            "question": "Relevant history",
            "answer": "Previous stroke, cardiovascular disease, atrial fibrillation; anticoagulants and antiplatelets."
        },
        {
            "question": "Why not lower BP routinely?",
            "answer": "Autoregulation is impaired in ischemic stroke; lowering BP reduces cerebral perfusion."
        },
        {
            "question": "Hemiplegic migraine",
            "answer": "A stroke mimic."
        },
        {
            "question": "Hyponatremia",
            "answer": "An electrolyte stroke mimic."
        },
        {
            "question": "Conversion disorder",
            "answer": "A mimic linked to acute psychosocial stressors."
        },
        {
            "question": "Inclusion symptoms",
            "answer": "Sudden focal deficit, speech difficulty, vision change, loss of balance, unexplained severe headache."
        },
        {
            "question": "TIA",
            "answer": "Included when there is an acute deficit; excluded once resolved with no new symptoms."
        },
        {
            "question": "KPIs",
            "answer": "BEFAST documented; RBS performed; transport within 15 minutes if onset <4.5 hours."
        }
    ],
    "critical": [
        {
            "id": "crit_5_1_1",
            "scenario": "A 70-year-old man has sudden left-sided weakness and slurred speech that began 2 hours ago. Glucose is 110 mg/dL, SpO₂ 97%.",
            "question": "What is your plan?",
            "options": [
                {
                    "t": "BEFAST, confirm last known well, notify Dispatch 2, leave within 15 minutes for a stroke center; 12-lead and IV en route",
                    "f": "Correct."
                },
                {
                    "t": "Oxygen 15 L/min, 12-lead and IV before moving",
                    "f": "No routine oxygen; do not delay transport for the ECG or IV."
                },
                {
                    "t": "Lower his BP first",
                    "f": "Only above 220/120 with end-organ dysfunction."
                },
                {
                    "t": "Nearest hospital without pre-alert",
                    "f": "Under 4.5 hours: stroke center via Dispatch 2."
                }
            ],
            "correct": 0,
            "explanation": "Time is the treatment: BEFAST, RBS, LKW, and transport within 15 minutes of arrival.",
            "kpi": "Onset <4.5 hours: transport within 15 minutes of EMS arrival."
        },
        {
            "id": "crit_5_1_2",
            "scenario": "A 65-year-old woman has right-sided weakness and aphasia. She was last known well 6 hours ago. Glucose 95 mg/dL.",
            "question": "Where do you go?",
            "options": [
                {
                    "t": "The appropriate hospital as directed by dispatch (over 4.5 hours)",
                    "f": "Correct. Note the endovascular window reaches up to 24 hours."
                },
                {
                    "t": "Home: too late for treatment",
                    "f": "She needs hospital care."
                },
                {
                    "t": "Treat at scene",
                    "f": "Transport."
                },
                {
                    "t": "Any clinic",
                    "f": "Follow the destination decision via Dispatch 2."
                }
            ],
            "correct": 0,
            "explanation": "Last known well drives the destination; give Dispatch 2 the exact time.",
            "kpi": "BEFAST performed and documented."
        },
        {
            "id": "crit_5_1_3",
            "scenario": "A 55-year-old man has a sudden severe headache, vomiting and GCS 12. BP 210/118 mmHg; pupils unequal.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Treat as suspected hemorrhage with raised ICP: airway, head up, rapid transport; do not lower BP",
                    "f": "Correct. BP is below 220/120."
                },
                {
                    "t": "GTN to bring BP down",
                    "f": "Not indicated at this BP."
                },
                {
                    "t": "Lie him flat",
                    "f": "Head up 15–30° unless the airway requires supine."
                },
                {
                    "t": "Wait to see if the headache settles",
                    "f": "Red flags: transport rapidly."
                }
            ],
            "correct": 0,
            "explanation": "Sudden severe headache, vomiting, unequal pupils and a falling GCS are red flags. Contact Tele-EMS for exceptional hypertension.",
            "kpi": "Glucose (RBS) checked in every suspected stroke."
        },
        {
            "id": "crit_5_1_4",
            "scenario": "A 60-year-old woman has left-sided weakness and slurred speech. Glucose is 45 mg/dL.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Treat as per the Hypoglycemia CPG, reassess the deficit, and transport",
                    "f": "Correct. Hypoglycemia is a mimic."
                },
                {
                    "t": "Stroke alert without treating glucose",
                    "f": "Correct the glucose first."
                },
                {
                    "t": "Lower BP",
                    "f": "Not the problem."
                },
                {
                    "t": "Leave her if she improves",
                    "f": "She still needs medical evaluation."
                }
            ],
            "correct": 0,
            "explanation": "Glucose <70 mg/dL: Hypoglycemia CPG. If the deficit persists after correction, continue as stroke.",
            "kpi": "Glucose (RBS) checked in every suspected stroke."
        },
        {
            "id": "crit_5_1_5",
            "scenario": "A 75-year-old man on an anticoagulant for atrial fibrillation has right-sided weakness and aphasia; last known well 1 hour ago. BP 160/90, GCS 15. The rhythm is shown below.",
            "ecg": "afib",
            "question": "What is your priority?",
            "options": [
                {
                    "t": "Rapid transport to a stroke center; document the anticoagulant and AF",
                    "f": "Correct."
                },
                {
                    "t": "Stay to complete a 12-lead first",
                    "f": "Record it en route."
                },
                {
                    "t": "Lower BP to 120/80",
                    "f": "Do not lower BP."
                },
                {
                    "t": "Oxygen at high flow",
                    "f": "Only if hypoxic."
                }
            ],
            "correct": 0,
            "explanation": "Under 4.5 hours: stroke center. Anticoagulants and AF are key handover information.",
            "kpi": "Onset <4.5 hours: transport within 15 minutes of EMS arrival."
        }
    ]
};
