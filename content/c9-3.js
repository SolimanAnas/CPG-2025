/* ========== CPG 9.3 – Pediatric Tachycardia ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c9-3",
    "title": "Pediatric Tachycardia",
    "shortTitle": "9.3 Pediatric Tachycardia",
    "guide": {
        "cpg": "9.3",
        "group": "pediatric",
        "groupLabel": "Pediatrics",
        "title": "Pediatric Tachycardia",
        "lead": "First separate sinus tachycardia, which needs its cause treated, from SVT or VT. Then decide whether the child is compromised, and read the QRS. Narrow-complex SVT: vagal manoeuvres, then adenosine, with synchronized cardioversion if the child is unstable and adenosine fails. Unstable wide-complex: cardiovert. Do not delay cardioversion in an unstable child.",
        "source": {
            "label": "CPG 9.3",
            "pages": "301–307",
            "pdf": "../pdf_sections/9_3_Pediatric_Tachycardia.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Infants and children ≤13 years with a heart rate above normal for age, with or without poor perfusion (altered mental status, weak pulses, hypotension, capillary refill &gt;3 seconds, pallor, cyanosis, respiratory distress)."
                ],
                "exclude": [
                    "Age-appropriate sinus tachycardia (fever, pain, dehydration) without instability.",
                    "Known chronic arrhythmia in a stable condition."
                ]
            },
            {
                "type": "table",
                "title": "Heart rate by age",
                "icon": "stethoscope",
                "columns": [
                    "Age",
                    "Normal (awake)",
                    "Concerning"
                ],
                "rows": [
                    [
                        "Infant (&lt;1 year)",
                        "100–160 bpm",
                        "&gt;220 bpm"
                    ],
                    [
                        "Child (1–10 years)",
                        "70–150 bpm",
                        "&gt;180 bpm"
                    ],
                    [
                        "Adolescent (&gt;10 years)",
                        "60–100 bpm",
                        "&gt;180 bpm"
                    ]
                ],
                "notes": [
                    "Count HR over a full minute."
                ]
            },
            {
                "type": "table",
                "title": "Sinus tachycardia or SVT?",
                "icon": "heart-pulse",
                "columns": [
                    "",
                    "Probable sinus tachycardia",
                    "Probable SVT"
                ],
                "rows": [
                    [
                        "P waves",
                        "Present and normal",
                        "Absent"
                    ],
                    [
                        "R-R interval",
                        "Variable",
                        "Not variable"
                    ],
                    [
                        "Rate",
                        "Infant &lt;220/min; child usually &lt;180 bpm",
                        "Infant usually &gt;220; child usually &gt;180"
                    ],
                    [
                        "Onset",
                        "Gradual, fits the context (fever, pain, dehydration)",
                        "Abrupt rate change"
                    ],
                    [
                        "Action",
                        "Identify and treat the cause",
                        "Treat the rhythm"
                    ]
                ],
                "notes": [
                    "QRS ≤0.09 sec is narrow; wider suggests possible VT."
                ]
            },
            {
                "type": "steps",
                "title": "All patients",
                "icon": "list",
                "steps": [
                    {
                        "title": "ALS back-up",
                        "text": "Routinely requested."
                    },
                    {
                        "title": "Calm",
                        "text": "Keep the child warm, minimise stress, caregiver present if it helps."
                    },
                    {
                        "title": "Airway and breathing",
                        "text": "Oxygen to SpO<sub>2</sub> ≥94% and EtCO<sub>2</sub> 35–45 mmHg; BVM for respiratory failure or apnea."
                    },
                    {
                        "title": "ECG",
                        "text": "12-lead, then continuous monitoring."
                    },
                    {
                        "title": "Glucose",
                        "text": "Treat hypo- or hyperglycemia per the relevant CPG."
                    },
                    {
                        "title": "Access",
                        "text": "IV if at risk of deterioration or needing fluid or drugs; IO if IV fails or is impractical."
                    },
                    {
                        "title": "Causes",
                        "text": "Fever, dehydration, pain, hypoxia, shock, anxiety, toxins (stimulants, amphetamines, cocaine), metabolic disorders, heart disease, sepsis."
                    }
                ]
            },
            {
                "type": "gate",
                "title": "Cardiopulmonary compromise?",
                "icon": "triangle-alert",
                "question": "Any sign of compromise?",
                "items": [
                    "Acutely altered mental status",
                    "Signs of shock: weak pulses, cool mottled skin, slow capillary refill",
                    "Hypotension",
                    "Respiratory distress or failure"
                ],
                "yes": "Unstable: immediate adenosine or synchronized cardioversion.",
                "no": "Stable: monitor, investigate and treat the cause; treat SVT with vagal manoeuvres and adenosine."
            },
            {
                "type": "pathways",
                "title": "Unstable (compromised)",
                "icon": "zap",
                "paths": [
                    {
                        "title": "Narrow QRS: probable SVT",
                        "tone": "noshock",
                        "steps": [
                            {
                                "text": "Vagal manoeuvres only if stable enough."
                            },
                            {
                                "text": "Adenosine IV/IO rapid push: 0.1 mg/kg (max 6 mg), then 0.2 mg/kg (max 12 mg).",
                                "level": "P"
                            },
                            {
                                "text": "Adenosine fails or the child deteriorates: synchronized cardioversion 0.5–1 J/kg, then 2 J/kg.",
                                "level": "AP"
                            }
                        ]
                    },
                    {
                        "title": "Wide QRS: possible VT",
                        "tone": "shock",
                        "steps": [
                            {
                                "text": "Synchronized cardioversion straight away: 0.5–1 J/kg, then 2 J/kg.",
                                "level": "AP"
                            },
                            {
                                "text": "Sedate if time and stability permit, but never delay cardioversion."
                            },
                            {
                                "text": "Regular, monomorphic and still stable enough: adenosine may be considered."
                            }
                        ]
                    }
                ]
            },
            {
                "type": "pathways",
                "title": "Stable (no compromise)",
                "icon": "list",
                "paths": [
                    {
                        "title": "Narrow QRS",
                        "tone": "noshock",
                        "steps": [
                            {
                                "text": "Sinus tachycardia: treat the cause."
                            },
                            {
                                "text": "SVT: vagal manoeuvres."
                            },
                            {
                                "text": "Ineffective, with IV/IO access: adenosine 0.1 mg/kg (max 6 mg), then 0.2 mg/kg (max 12 mg).",
                                "level": "P"
                            }
                        ]
                    },
                    {
                        "title": "Wide QRS",
                        "tone": "shock",
                        "steps": [
                            {
                                "text": "Consult Tele-EMS."
                            },
                            {
                                "text": "Regular and monomorphic: adenosine after consultation (not routine).",
                                "level": "AP"
                            },
                            {
                                "text": "Irregular or polymorphic: avoid adenosine; seek expert advice."
                            }
                        ]
                    }
                ],
                "after": "Have cardioversion and resuscitation equipment ready. Watch for transient asystole after adenosine; be ready to start CPR."
            },
            {
                "type": "tools",
                "title": "Tools",
                "icon": "monitor",
                "groups": [
                    {
                        "title": "Rhythms",
                        "items": [
                            {
                                "ecg": "stach",
                                "label": "Sinus tachycardia",
                                "sub": "Treat the cause"
                            },
                            {
                                "ecg": "svt",
                                "label": "SVT",
                                "sub": "Vagal, adenosine, cardioversion"
                            },
                            {
                                "ecg": "vt",
                                "label": "Ventricular tachycardia",
                                "sub": "Unstable: cardiovert"
                            }
                        ]
                    },
                    {
                        "title": "Tools",
                        "items": [
                            {
                                "label": "Pediatric drug calculator: adenosine",
                                "sub": "0.1 then 0.2 mg/kg",
                                "href": "../pages/drug-calculator.html?drug=Adenosine",
                                "icon": "syringe"
                            },
                            {
                                "label": "Defibrillator",
                                "sub": "Synchronized cardioversion energies",
                                "href": "../pages/defib.html",
                                "icon": "zap"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "list",
                "title": "Key performance indicator",
                "icon": "chart-no-axes-column",
                "items": [
                    "An appropriate intervention (vagal manoeuvres, adenosine or cardioversion) for unstable tachycardia."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "9.2 Pediatric Bradycardia",
                        "href": "c9-2.html"
                    },
                    {
                        "label": "4.4 Pediatric Cardiac Arrest",
                        "href": "c4-4.html"
                    },
                    {
                        "label": "6.8 Hypoglycemia",
                        "href": "c6-8.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "Concerning heart rate in an infant?",
            "options": [
                ">220 bpm",
                ">180 bpm",
                ">200 bpm",
                ">240 bpm"
            ],
            "correct": 0,
            "explanation": "Child and adolescent: >180 bpm."
        },
        {
            "q": "First step for a tachycardic child with poor perfusion?",
            "options": [
                "Airway, breathing and oxygen, with cardiac monitoring",
                "Adenosine before anything else",
                "Fluids only",
                "Leave on scene"
            ],
            "correct": 0,
            "explanation": "Initial assessment and support."
        },
        {
            "q": "A 2-year-old: HR 250, pale, weak pulses, no P waves, fixed R-R. Rhythm?",
            "options": [
                "SVT",
                "Sinus tachycardia",
                "VT",
                "Atrial fibrillation"
            ],
            "correct": 0,
            "explanation": "Child usually >180, abrupt onset."
        },
        {
            "q": "First adenosine dose?",
            "options": [
                "0.1 mg/kg rapid IV/IO push, max 6 mg",
                "0.2 mg/kg, max 12 mg",
                "0.5 mg/kg",
                "1 mg/kg"
            ],
            "correct": 0,
            "explanation": "Second dose 0.2 mg/kg, max 12 mg."
        },
        {
            "q": "Unstable child with wide-complex tachycardia. Intervention?",
            "options": [
                "Synchronized cardioversion",
                "Vagal manoeuvres",
                "Wait for Tele-EMS",
                "Oral fluids"
            ],
            "correct": 0,
            "explanation": "Proceed directly to cardioversion."
        },
        {
            "q": "First synchronized cardioversion energy?",
            "options": [
                "0.5–1 J/kg",
                "2–4 J/kg",
                "5 J/kg",
                "10 J/kg"
            ],
            "correct": 0,
            "explanation": "Then 2 J/kg."
        },
        {
            "q": "Oxygen target?",
            "options": [
                "SpO₂ ≥94%",
                "≥88%",
                "≥90%",
                "No oxygen"
            ],
            "correct": 0,
            "explanation": "With EtCO₂ 35–45 mmHg."
        },
        {
            "q": "A 5-year-old: HR 170, alert, warm, febrile, P waves present. First step?",
            "options": [
                "Treat the cause (fever, pain, dehydration)",
                "Cardioversion",
                "Adenosine",
                "Vagal manoeuvres"
            ],
            "correct": 0,
            "explanation": "Probable sinus tachycardia."
        },
        {
            "q": "Second adenosine dose?",
            "options": [
                "0.2 mg/kg, max 12 mg",
                "0.1 mg/kg",
                "0.3 mg/kg",
                "0.5 mg/kg"
            ],
            "correct": 0,
            "explanation": "Rapid IV/IO push."
        },
        {
            "q": "Which favours SVT over sinus tachycardia?",
            "options": [
                "Absent P waves and a fixed R-R interval",
                "Gradual onset with fever",
                "Variable R-R",
                "Rate <180 in a child"
            ],
            "correct": 0,
            "explanation": "Plus abrupt onset and very high rate."
        },
        {
            "q": "A lethargic 6-month-old with narrow-complex HR 280 and IO access. Next?",
            "options": [
                "Adenosine 0.1 mg/kg",
                "Wait and observe",
                "IV fluids only",
                "Defibrillate unsynchronized"
            ],
            "correct": 0,
            "explanation": "Cardioversion if adenosine fails or the child deteriorates."
        },
        {
            "q": "Maximum single adenosine dose?",
            "options": [
                "12 mg (second dose)",
                "6 mg",
                "18 mg",
                "24 mg"
            ],
            "correct": 0,
            "explanation": "First dose max 6 mg."
        },
        {
            "q": "Stable child with regular monomorphic wide-complex tachycardia. Management?",
            "options": [
                "Tele-EMS; adenosine only after consultation",
                "Immediate cardioversion",
                "Vagal manoeuvres only",
                "Discharge"
            ],
            "correct": 0,
            "explanation": "Routine adenosine is not recommended."
        },
        {
            "q": "Stable SVT. What comes first?",
            "options": [
                "Vagal manoeuvres",
                "Cardioversion",
                "Adenosine 0.2 mg/kg",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "Then adenosine if ineffective."
        },
        {
            "q": "KPI?",
            "options": [
                "Appropriate intervention for unstable tachycardia",
                "Adenosine for all",
                "Glucose for all",
                "Fluids for all"
            ],
            "correct": 0,
            "explanation": "Vagal manoeuvres, adenosine or cardioversion."
        },
        {
            "q": "After adenosine, the monitor shows a few seconds of asystole, then sinus rhythm. What do you do?",
            "options": [
                "Monitor: transient asystole is expected",
                "Start CPR immediately",
                "Atropine",
                "Another adenosine dose"
            ],
            "correct": 0,
            "explanation": "Monitor for transient asystole; be ready to escalate."
        },
        {
            "q": "Which level gives adenosine for narrow-complex SVT?",
            "options": [
                "P",
                "EMT",
                "EMR",
                "ER"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "HR 200 with fever of 39.5°C, alert, good perfusion, P waves visible. Rhythm?",
            "options": [
                "Sinus tachycardia",
                "SVT",
                "VT",
                "Atrial flutter"
            ],
            "correct": 0,
            "explanation": "Treat the fever and cause."
        },
        {
            "q": "Which level gives synchronized cardioversion?",
            "options": [
                "AP",
                "P",
                "EMT",
                "EMR"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "Irregular or polymorphic wide-complex tachycardia. Adenosine?",
            "options": [
                "Avoid; consult an expert",
                "Give 0.1 mg/kg",
                "Give 0.2 mg/kg",
                "Give 12 mg"
            ],
            "correct": 0,
            "explanation": "Per the CPG."
        },
        {
            "q": "Lethargic child with narrow-complex SVT; two adenosine doses have failed. Next?",
            "options": [
                "Synchronized cardioversion 0.5–1 J/kg",
                "A third adenosine dose",
                "Vagal manoeuvres",
                "Wait"
            ],
            "correct": 0,
            "explanation": "Then 2 J/kg."
        },
        {
            "q": "Second cardioversion energy if the first fails?",
            "options": [
                "2 J/kg",
                "0.5–1 J/kg",
                "4 J/kg",
                "5 J/kg"
            ],
            "correct": 0,
            "explanation": "Per the flowchart."
        },
        {
            "q": "Unstable wide-complex tachycardia. Priority?",
            "options": [
                "Synchronized cardioversion",
                "Adenosine first",
                "Magnesium",
                "Vagal manoeuvres"
            ],
            "correct": 0,
            "explanation": "Don't delay."
        },
        {
            "q": "Sedation before cardioversion?",
            "options": [
                "If time and stability permit, without delaying cardioversion",
                "Always required first",
                "Never",
                "Only for adults"
            ],
            "correct": 0,
            "explanation": "Per the CPG."
        },
        {
            "q": "A stable 3-year-old in SVT after failed vagal manoeuvres, IV in place. Next?",
            "options": [
                "Adenosine 0.1 mg/kg IV",
                "Repeat vagal manoeuvres indefinitely",
                "Cardioversion",
                "Discharge"
            ],
            "correct": 0,
            "explanation": "Stable narrow-complex pathway."
        },
        {
            "q": "EtCO₂ target if ventilating?",
            "options": [
                "35–45 mmHg",
                "20–25 mmHg",
                "45–55 mmHg",
                ">60 mmHg"
            ],
            "correct": 0,
            "explanation": "Normocapnia."
        },
        {
            "q": "Why check blood glucose?",
            "options": [
                "Treat hypo- or hyperglycemia per their CPGs",
                "To dose adenosine",
                "To choose the energy",
                "Not needed"
            ],
            "correct": 0,
            "explanation": "Management step 4."
        },
        {
            "q": "Which QRS duration is narrow?",
            "options": [
                "≤0.09 sec",
                "≥0.12 seconds only",
                "Any",
                "≤0.2 seconds"
            ],
            "correct": 0,
            "explanation": "Wider suggests possible VT."
        },
        {
            "q": "SVT persists after the first adenosine dose. Next?",
            "options": [
                "Second dose 0.2 mg/kg (max 12 mg)",
                "Repeat 0.1 mg/kg",
                "Amiodarone",
                "Stop treatment"
            ],
            "correct": 0,
            "explanation": "Then cardioversion if unstable."
        },
        {
            "q": "Which drug toxicity can cause tachycardia?",
            "options": [
                "Amphetamines or cocaine",
                "Paracetamol",
                "Insulin",
                "Antacids"
            ],
            "correct": 0,
            "explanation": "Also caffeine, decongestants, thyroid preparations."
        }
    ],
    "flashcards": [
        {
            "question": "Concerning HR",
            "answer": "Infant >220 bpm; child and adolescent >180 bpm."
        },
        {
            "question": "Normal awake HR",
            "answer": "Infant 100–160; child 70–150; adolescent 60–100 bpm."
        },
        {
            "question": "Sinus tachycardia",
            "answer": "P waves present, variable R-R, gradual onset; infant <220, child usually <180."
        },
        {
            "question": "SVT",
            "answer": "No P waves, fixed R-R, abrupt onset; infant usually >220, child >180; narrow QRS."
        },
        {
            "question": "VT",
            "answer": "Wide QRS: possible VT."
        },
        {
            "question": "Compromise",
            "answer": "Acutely altered mental status, signs of shock, hypotension."
        },
        {
            "question": "Stable SVT",
            "answer": "Vagal manoeuvres, then adenosine (P)."
        },
        {
            "question": "Adenosine 1st dose",
            "answer": "0.1 mg/kg rapid IV/IO push, max 6 mg."
        },
        {
            "question": "Adenosine 2nd dose",
            "answer": "0.2 mg/kg rapid IV/IO push, max 12 mg."
        },
        {
            "question": "Unstable narrow",
            "answer": "Vagal if stable enough, adenosine, then synchronized cardioversion if it fails."
        },
        {
            "question": "Unstable wide",
            "answer": "Synchronized cardioversion directly (AP)."
        },
        {
            "question": "Cardioversion energy",
            "answer": "0.5–1 J/kg, then 2 J/kg."
        },
        {
            "question": "Stable wide",
            "answer": "Tele-EMS; adenosine only if regular and monomorphic, after consultation."
        },
        {
            "question": "Polymorphic or irregular wide",
            "answer": "Avoid adenosine; seek expert advice."
        },
        {
            "question": "Sedation",
            "answer": "If time and stability permit; never delay cardioversion."
        },
        {
            "question": "Adenosine safety",
            "answer": "Correct dosing; monitor for transient asystole."
        },
        {
            "question": "Causes to look for",
            "answer": "Fever, dehydration, pain, hypoxia, anxiety, toxins, metabolic disorders, sepsis, heart disease."
        },
        {
            "question": "Glucose",
            "answer": "Check; treat per the Hypoglycemia or Hyperglycemia CPG."
        },
        {
            "question": "KPI",
            "answer": "Appropriate intervention for unstable tachycardia."
        },
        {
            "question": "ALS back-up",
            "answer": "Routinely requested."
        }
    ],
    "critical": [
        {
            "id": "crit_9_3_1",
            "scenario": "A 3-year-old is pale and drowsy with weak pulses and BP 70/40. The monitor shows a regular wide-complex tachycardia at 240.",
            "ecg": "vt",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Synchronized cardioversion 0.5–1 J/kg, then 2 J/kg; sedate only if it causes no delay",
                    "f": "Correct: unstable wide-complex."
                },
                {
                    "t": "Vagal manoeuvres",
                    "f": "Unstable: don't delay cardioversion."
                },
                {
                    "t": "Wait for Tele-EMS",
                    "f": "Tele-EMS is for the stable wide-complex child."
                },
                {
                    "t": "Unsynchronized defibrillation",
                    "f": "She has a pulse: synchronize."
                }
            ],
            "correct": 0,
            "explanation": "Wide QRS with compromise: proceed directly to synchronized cardioversion (AP).",
            "kpi": "Appropriate intervention for unstable tachycardia."
        },
        {
            "id": "crit_9_3_2",
            "scenario": "A 6-month-old has HR 260, narrow QRS, no P waves. Irritable but pink, normal capillary refill.",
            "ecg": "svt",
            "question": "What next, after oxygen and monitoring?",
            "options": [
                {
                    "t": "Vagal manoeuvres; if ineffective, adenosine 0.1 mg/kg via IV/IO",
                    "f": "Correct: stable SVT."
                },
                {
                    "t": "Immediate cardioversion",
                    "f": "The infant is stable."
                },
                {
                    "t": "Treat as sinus tachycardia",
                    "f": "No P waves and rate >220: SVT."
                },
                {
                    "t": "Adenosine 0.2 mg/kg first",
                    "f": "Start at 0.1 mg/kg."
                }
            ],
            "correct": 0,
            "explanation": "Stable narrow-complex pathway.",
            "kpi": "Appropriate intervention for unstable tachycardia."
        },
        {
            "id": "crit_9_3_3",
            "scenario": "A 5-year-old in SVT receives adenosine 0.1 mg/kg. A brief asystole follows, then narrow-complex tachycardia at 200 returns.",
            "question": "Next step?",
            "options": [
                {
                    "t": "Second dose 0.2 mg/kg (max 12 mg) rapid push",
                    "f": "Correct."
                },
                {
                    "t": "CPR for the asystole",
                    "f": "Transient asystole is expected after adenosine."
                },
                {
                    "t": "Repeat 0.1 mg/kg",
                    "f": "The second dose is 0.2 mg/kg."
                },
                {
                    "t": "Stop: it didn't work",
                    "f": "Give the second dose."
                }
            ],
            "correct": 0,
            "explanation": "Monitor for transient asystole after adenosine.",
            "kpi": "Appropriate intervention for unstable tachycardia."
        },
        {
            "id": "crit_9_3_4",
            "scenario": "A 10-year-old has a regular, monomorphic wide-complex tachycardia at 220. Alert, warm, normal BP.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Monitor, prepare for deterioration, consult Tele-EMS; adenosine only after consultation",
                    "f": "Correct: stable wide-complex."
                },
                {
                    "t": "Immediate cardioversion",
                    "f": "The child is stable."
                },
                {
                    "t": "Routine adenosine without consultation",
                    "f": "Not recommended."
                },
                {
                    "t": "Vagal manoeuvres and discharge",
                    "f": "Possible VT: transport."
                }
            ],
            "correct": 0,
            "explanation": "Have cardioversion equipment ready.",
            "kpi": "Appropriate intervention for unstable tachycardia."
        },
        {
            "id": "crit_9_3_5",
            "scenario": "A 2-year-old in SVT at 250 has had vagal manoeuvres and two adenosine doses without success, and is now lethargic with BP 70/40.",
            "ecg": "svt",
            "question": "Next step?",
            "options": [
                {
                    "t": "Synchronized cardioversion 0.5–1 J/kg, then 2 J/kg",
                    "f": "Correct: adenosine failed and the child deteriorated."
                },
                {
                    "t": "A third adenosine dose",
                    "f": "Two doses only."
                },
                {
                    "t": "More vagal manoeuvres",
                    "f": "Too unstable."
                },
                {
                    "t": "Wait for hospital",
                    "f": "Avoid delays in cardioversion."
                }
            ],
            "correct": 0,
            "explanation": "Unstable narrow-complex pathway.",
            "kpi": "Appropriate intervention for unstable tachycardia."
        }
    ]
};
