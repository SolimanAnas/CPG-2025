/* ========== CPG 8.9 – Hypothermia ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c8-9",
    "title": "Hypothermia",
    "shortTitle": "8.9 Hypothermia",
    "guide": {
        "cpg": "8.9",
        "group": "environmental",
        "groupLabel": "Environmental",
        "title": "Hypothermia",
        "lead": "Stop further heat loss: move out of the cold, remove wet clothing, dry and cover. Grade severity by temperature and clinical features. Moderate and severe hypothermia need active rewarming, ECG monitoring and rapid transport. In arrest, confirm carefully, limit shocks and withhold drugs until the core is above 30°C, and transport under CPR.",
        "source": {
            "label": "CPG 8.9",
            "pages": "282–285",
            "pdf": "../pdf_sections/8_9_Hypothermia___Cold_Exposure.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Cold exposure: wet clothing, prolonged outdoor exposure, immersion, inadequate clothing or exhaustion in the cold.",
                    "Apathy, ataxia, shivering, confusion, bradycardia, or diminished or absent vital signs.",
                    "Core temperature below 35°C."
                ],
                "exclude": [
                    "Hypothermia from intrinsic causes such as severe sepsis or decompensated shock."
                ]
            },
            {
                "type": "table",
                "title": "Severity",
                "icon": "stethoscope",
                "columns": [
                    "Grade",
                    "Core temperature",
                    "Features"
                ],
                "rows": [
                    [
                        "Mild",
                        "32–35°C",
                        "Apathy or lethargy, ataxia, vasoconstriction, tachypnea, confusion"
                    ],
                    [
                        "Moderate",
                        "28–32°C",
                        "Loss of consciousness, bradycardia, muscle rigidity, stupor or coma"
                    ],
                    [
                        "Severe",
                        "&lt;28°C",
                        "Diminished or absent signs of life, apnea, dilated pupils, reduced or absent reflexes, dysrhythmias"
                    ]
                ],
                "notes": [
                    "Tympanic thermometers are unreliable in severe cases: recognition relies heavily on clinical features."
                ]
            },
            {
                "type": "steps",
                "title": "All patients",
                "icon": "list",
                "steps": [
                    {
                        "title": "Pulse check",
                        "text": "No pulse: start CPR and follow the Cardiac Arrest CPG (see below)."
                    },
                    {
                        "title": "Spinal motion restriction",
                        "text": "Consider if trauma is present."
                    },
                    {
                        "title": "Stop heat loss",
                        "text": "Remove from the cold environment; remove wet clothing and dry the patient."
                    },
                    {
                        "title": "Grade severity",
                        "text": "From core temperature and clinical features."
                    }
                ]
            },
            {
                "type": "pathways",
                "title": "Rewarming by severity",
                "icon": "heart-pulse",
                "paths": [
                    {
                        "title": "Mild (32–35°C)",
                        "tone": "noshock",
                        "steps": [
                            {
                                "text": "Cover with blankets (foil blanket if available)."
                            }
                        ]
                    },
                    {
                        "title": "Moderate and severe (&lt;32°C)",
                        "tone": "shock",
                        "steps": [
                            {
                                "text": "Consider ALS back-up."
                            },
                            {
                                "text": "Cover with blankets (foil blanket if available)."
                            },
                            {
                                "text": "Heat packs to groin and axilla (if available)."
                            },
                            {
                                "text": "Consider warmed IV fluid: adult 250–500 mL (max 1000 mL); pediatric 10 mL/kg (max 20 mL/kg).",
                                "level": "EMT"
                            },
                            {
                                "text": "Continuous ECG monitoring for arrhythmias."
                            }
                        ]
                    }
                ],
                "after": "Target a rise of 1–2°C/hour. Watch for afterdrop: core temperature can fall during rewarming as cold blood returns from the extremities."
            },
            {
                "type": "steps",
                "title": "Cardiac arrest",
                "icon": "zap",
                "steps": [
                    {
                        "title": "Confirm carefully",
                        "text": "Profound hypothermia mimics death (stiffness, fixed pupils, absent reflexes). Check pulse and breathing for at least 60 seconds."
                    },
                    {
                        "title": "CPR and rewarming",
                        "text": "Standard CPR with active rewarming as above."
                    },
                    {
                        "title": "Defibrillation",
                        "text": "Up to 3 shocks until the core is ≥30°C, then standard intervals. Energy is unchanged."
                    },
                    {
                        "title": "Drugs",
                        "text": "Withhold adrenaline and amiodarone until the core is &gt;30°C. Between 30–35°C, double the interval between doses (e.g. every 6–10 minutes) at standard doses."
                    },
                    {
                        "title": "Transport",
                        "text": "Every hypothermic arrest goes to hospital under CPR."
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Safety",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "Avoid",
                        "items": [
                            "Aggressive external rewarming (e.g. hot baths): vasodilation can worsen the core temperature drop.",
                            "Massaging the extremities in severe cases: it may dislodge clots."
                        ]
                    },
                    {
                        "title": "Transport",
                        "items": [
                            "Moderate or severe (&lt;32°C) or arrest: rapid transport to a facility with warming capability.",
                            "Tell Dispatch the severity and the estimated exposure time."
                        ]
                    },
                    {
                        "title": "Fluids and drugs",
                        "items": [
                            "Warm fluids to 40°C and give in 250 mL boluses (10 mL/kg pediatric); without accurate temperature monitoring, use room-temperature fluids.",
                            "Analgesia: consider lower doses and longer intervals, as metabolism is altered."
                        ]
                    }
                ]
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
                                "ecg": "hypothermia",
                                "lead": "V5",
                                "label": "Hypothermia",
                                "sub": "Bradycardia, Osborn (J) waves, shivering artefact"
                            },
                            {
                                "ecg": "vfFine",
                                "label": "Ventricular fibrillation",
                                "sub": "Up to 3 shocks while cold"
                            },
                            {
                                "ecg": "asystole",
                                "label": "Asystole",
                                "sub": "Confirm carefully; CPR and transport"
                            }
                        ]
                    },
                    {
                        "title": "Tools",
                        "items": [
                            {
                                "label": "Drug calculator: normal saline",
                                "sub": "Pediatric 10 mL/kg",
                                "href": "../pages/drug-calculator.html?drug=Normal Saline",
                                "icon": "droplet"
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
                    "Hypothermia severity assessed and documented."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "4.3 Adult Cardiac Arrest",
                        "href": "c4-3.html"
                    },
                    {
                        "label": "4.4 Pediatric Cardiac Arrest",
                        "href": "c4-4.html"
                    },
                    {
                        "label": "4.8 Starting, Stopping and Transferring CPR",
                        "href": "c4-8.html"
                    },
                    {
                        "label": "8.7 Drowning",
                        "href": "c8-7.html"
                    },
                    {
                        "label": "8.10 Hyperthermia",
                        "href": "c8-10.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "Below what core temperature is a patient hypothermic?",
            "options": [
                "35°C",
                "36°C",
                "37°C",
                "34°C"
            ],
            "correct": 0,
            "explanation": "Core temperature below 35°C is an inclusion criterion."
        },
        {
            "q": "Core temperature 30°C. Severity?",
            "options": [
                "Moderate",
                "Mild",
                "Severe",
                "Normal"
            ],
            "correct": 0,
            "explanation": "Moderate is 28–32°C."
        },
        {
            "q": "What comes first for a hypothermic patient with a pulse?",
            "options": [
                "Remove from the cold, remove wet clothing and dry",
                "Start CPR",
                "Heat packs to the hands and feet",
                "Warm oral drinks"
            ],
            "correct": 0,
            "explanation": "Prevent further heat loss."
        },
        {
            "q": "VF in hypothermic arrest. How is defibrillation managed?",
            "options": [
                "Up to 3 shocks until the core is ≥30°C, then standard intervals",
                "No shocks until the core is >30°C",
                "Shock every minute",
                "AED only, no manual defibrillation"
            ],
            "correct": 0,
            "explanation": "Energy is unchanged."
        },
        {
            "q": "When is adrenaline given in hypothermic arrest?",
            "options": [
                "Only once the core is >30°C",
                "Immediately, as usual",
                "Every 10 minutes regardless",
                "Never"
            ],
            "correct": 0,
            "explanation": "Withhold adrenaline and amiodarone until >30°C."
        },
        {
            "q": "What rewarming rate is the target?",
            "options": [
                "1–2°C/hour",
                "0.5°C/hour",
                "3–4°C/hour",
                "5°C/hour"
            ],
            "correct": 0,
            "explanation": "Target temperature increase in the CPG."
        },
        {
            "q": "Which is active rewarming in moderate or severe hypothermia?",
            "options": [
                "Heat packs to groin and axilla, and warmed IV fluid",
                "Hot bath",
                "Rubbing the limbs",
                "Hot drinks only"
            ],
            "correct": 0,
            "explanation": "Heat packs if available; warmed IV fluid at EMT level."
        },
        {
            "q": "A moderately hypothermic adult has BP 80/50. Which fluid?",
            "options": [
                "Warmed IV fluid 250–500 mL",
                "1 L cold saline",
                "No fluid",
                "Oral fluids"
            ],
            "correct": 0,
            "explanation": "Maximum 1000 mL."
        },
        {
            "q": "What is the maximum warmed IV fluid for an adult?",
            "options": [
                "1000 mL",
                "250 mL",
                "500 mL",
                "2000 mL"
            ],
            "correct": 0,
            "explanation": "Given as 250–500 mL boluses."
        },
        {
            "q": "Why not massage the extremities in severe hypothermia?",
            "options": [
                "It may dislodge clots",
                "It is painful",
                "It wastes time only",
                "It causes burns"
            ],
            "correct": 0,
            "explanation": "Patient safety consideration."
        },
        {
            "q": "Pediatric warmed fluid bolus?",
            "options": [
                "10 mL/kg",
                "5 mL/kg",
                "20 mL/kg",
                "40 mL/kg"
            ],
            "correct": 0,
            "explanation": "Maximum 20 mL/kg."
        },
        {
            "q": "Shivering, ataxia and apathy suggest which grade?",
            "options": [
                "Mild",
                "Moderate",
                "Severe",
                "None"
            ],
            "correct": 0,
            "explanation": "Mild is 32–35°C."
        },
        {
            "q": "What is afterdrop?",
            "options": [
                "Core temperature falls during rewarming as cold blood returns from the extremities",
                "Temperature rises too fast",
                "Blood pressure falls after fluids",
                "Shivering stops after rewarming"
            ],
            "correct": 0,
            "explanation": "Monitor for it during rewarming."
        },
        {
            "q": "How long do you check pulse and breathing before declaring arrest?",
            "options": [
                "At least 60 seconds",
                "10 seconds",
                "30 seconds",
                "5 minutes"
            ],
            "correct": 0,
            "explanation": "Profound hypothermia can mimic death."
        },
        {
            "q": "Why continuous ECG monitoring in moderate or severe hypothermia?",
            "options": [
                "To detect arrhythmias",
                "To measure temperature",
                "To guide fluid volume",
                "It is not needed"
            ],
            "correct": 0,
            "explanation": "Required for moderate and severe hypothermia."
        },
        {
            "q": "What should Dispatch be told?",
            "options": [
                "Severity and estimated time of exposure",
                "Only the address",
                "Nothing",
                "The patient's clothing"
            ],
            "correct": 0,
            "explanation": "Time-sensitive transport."
        },
        {
            "q": "What is the maximum warmed fluid for a child?",
            "options": [
                "20 mL/kg",
                "40 mL/kg",
                "60 mL/kg",
                "80 mL/kg"
            ],
            "correct": 0,
            "explanation": "Given as 10 mL/kg."
        },
        {
            "q": "Why avoid aggressive external rewarming (e.g. hot baths) in the field?",
            "options": [
                "Vasodilation can worsen the core temperature drop",
                "It causes hyperthermia",
                "It is ineffective",
                "It is too slow"
            ],
            "correct": 0,
            "explanation": "Avoid harmful interventions."
        },
        {
            "q": "What is the KPI for hypothermia?",
            "options": [
                "Assess and document severity",
                "Antibiotics given",
                "12-lead ECG for all",
                "Glucose for all"
            ],
            "correct": 0,
            "explanation": "Single KPI."
        },
        {
            "q": "Which patient is excluded from this CPG?",
            "options": [
                "Low temperature from severe sepsis",
                "Hiker found wet and confused",
                "Immersion in cold water",
                "Elderly person in an unheated home"
            ],
            "correct": 0,
            "explanation": "Intrinsic causes are excluded."
        },
        {
            "q": "How should analgesia be adjusted in hypothermia?",
            "options": [
                "Consider lower doses and longer intervals",
                "Double the dose",
                "Give more often",
                "Never give analgesia"
            ],
            "correct": 0,
            "explanation": "Metabolism is altered."
        },
        {
            "q": "HR 40 in moderate hypothermia with a pulse. Main treatment?",
            "options": [
                "Rewarming and ECG monitoring",
                "Atropine",
                "Pacing",
                "Adrenaline"
            ],
            "correct": 0,
            "explanation": "Bradycardia is a feature of moderate hypothermia."
        },
        {
            "q": "What temperature should IV fluid be warmed to?",
            "options": [
                "40°C",
                "30°C",
                "50°C",
                "35°C"
            ],
            "correct": 0,
            "explanation": "If accurate monitoring is available."
        },
        {
            "q": "No way to monitor fluid-warming temperature. What fluid?",
            "options": [
                "Room-temperature fluid",
                "No fluid",
                "Microwave the bag",
                "Cold fluid"
            ],
            "correct": 0,
            "explanation": "Clinical insight."
        },
        {
            "q": "VF persists after 3 shocks with core 28°C. What now?",
            "options": [
                "CPR, rewarming and transport; further shocks once ≥30°C",
                "Keep shocking every 2 minutes",
                "Stop CPR",
                "Give adrenaline"
            ],
            "correct": 0,
            "explanation": "Up to 3 shocks until ≥30°C."
        },
        {
            "q": "Trauma with hypothermia. What do you consider?",
            "options": [
                "Spinal motion restriction",
                "Hot bath",
                "Massage",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "After 500 mL warmed fluid an adult is still hypotensive. Can you give more?",
            "options": [
                "Yes, up to 1000 mL in total",
                "No: 500 mL is the maximum",
                "Yes, 2000 mL",
                "Only cold fluid"
            ],
            "correct": 0,
            "explanation": "Adult maximum 1000 mL."
        },
        {
            "q": "Core 32°C, in arrest, receiving drugs. How often?",
            "options": [
                "Standard doses at double the interval",
                "Standard interval",
                "Withhold completely",
                "Double the dose"
            ],
            "correct": 0,
            "explanation": "Between 30–35°C, double the interval."
        },
        {
            "q": "Hypothermic arrest, 20 minutes of CPR, core 28°C. What do you do?",
            "options": [
                "Continue CPR and transport under CPR",
                "Terminate resuscitation",
                "Give adrenaline now",
                "Wait on scene for ROSC"
            ],
            "correct": 0,
            "explanation": "All hypothermic arrests go to hospital under CPR."
        },
        {
            "q": "Why are tympanic thermometers limited?",
            "options": [
                "Unreliable in severe cases",
                "They are too slow",
                "They overheat",
                "They are always accurate"
            ],
            "correct": 0,
            "explanation": "Recognition relies on clinical features."
        }
    ],
    "flashcards": [
        {
            "question": "Definition",
            "answer": "Core temperature below 35°C."
        },
        {
            "question": "Mild",
            "answer": "32–35°C: apathy, ataxia, shivering, tachypnea, confusion."
        },
        {
            "question": "Moderate",
            "answer": "28–32°C: loss of consciousness, bradycardia, muscle rigidity, stupor or coma."
        },
        {
            "question": "Severe",
            "answer": "<28°C: absent signs of life, apnea, dilated pupils, absent reflexes, dysrhythmias."
        },
        {
            "question": "First steps",
            "answer": "Pulse check; remove from cold; remove wet clothing and dry; consider SMR if trauma."
        },
        {
            "question": "Mild treatment",
            "answer": "Cover with blankets (foil blanket)."
        },
        {
            "question": "Moderate and severe treatment",
            "answer": "Consider ALS; blankets; heat packs to groin and axilla; warmed IV fluid; continuous ECG."
        },
        {
            "question": "Adult warmed fluid",
            "answer": "250–500 mL, max 1000 mL (EMT)."
        },
        {
            "question": "Pediatric warmed fluid",
            "answer": "10 mL/kg, max 20 mL/kg (EMT)."
        },
        {
            "question": "Fluid temperature",
            "answer": "Warm to 40°C; room temperature if warming can't be monitored."
        },
        {
            "question": "Afterdrop",
            "answer": "Core temperature falls during rewarming as cold blood returns from the extremities."
        },
        {
            "question": "Confirming arrest",
            "answer": "At least 60 seconds for pulse and breathing: hypothermia mimics death."
        },
        {
            "question": "Shocks in arrest",
            "answer": "Up to 3 until the core is ≥30°C; energy unchanged."
        },
        {
            "question": "Drugs in arrest",
            "answer": "Withhold adrenaline and amiodarone until >30°C; double the interval between 30–35°C."
        },
        {
            "question": "Rewarming target",
            "answer": "1–2°C/hour."
        },
        {
            "question": "Transport in arrest",
            "answer": "Always to hospital under CPR."
        },
        {
            "question": "Avoid",
            "answer": "Hot baths (vasodilation worsens the core drop) and massaging limbs in severe cases (clots)."
        },
        {
            "question": "Time-sensitive transport",
            "answer": "Moderate or severe (<32°C) or arrest: rapid transport to a facility that can warm."
        },
        {
            "question": "Thermometers",
            "answer": "Tympanic is unreliable in severe cases; rely on clinical features."
        },
        {
            "question": "KPI",
            "answer": "Assess and document hypothermia severity."
        }
    ],
    "critical": [
        {
            "id": "crit_8_9_1",
            "scenario": "A homeless man is found in a park on a cold night: confused, shivering, wet clothes, core 33°C, pulse present.",
            "question": "What first?",
            "options": [
                {
                    "t": "Move him out of the cold, remove wet clothing, dry and cover with blankets",
                    "f": "Correct: mild hypothermia."
                },
                {
                    "t": "Hot bath",
                    "f": "Aggressive rewarming can worsen the core drop."
                },
                {
                    "t": "Rub his arms and legs",
                    "f": "Avoid massaging the extremities."
                },
                {
                    "t": "Start CPR",
                    "f": "He has a pulse."
                }
            ],
            "correct": 0,
            "explanation": "Mild hypothermia (32–35°C): stop heat loss and cover.",
            "kpi": "Hypothermia severity assessed and documented."
        },
        {
            "id": "crit_8_9_2",
            "scenario": "A man is rescued from cold water: unresponsive, core 29°C, slow pulse.",
            "ecg": "hypothermia",
            "ecgLead": "V5",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Airway, dry and cover, heat packs to groin and axilla, warmed IV fluid, continuous ECG, ALS and rapid transport",
                    "f": "Correct: moderate hypothermia."
                },
                {
                    "t": "Atropine for the bradycardia",
                    "f": "Rewarm: bradycardia is from the cold."
                },
                {
                    "t": "Hot bath",
                    "f": "Avoid aggressive external rewarming."
                },
                {
                    "t": "Treat on scene and leave",
                    "f": "Below 32°C needs rapid transport."
                }
            ],
            "correct": 0,
            "explanation": "Moderate (28–32°C): active rewarming and monitoring.",
            "kpi": "Hypothermia severity assessed and documented."
        },
        {
            "id": "crit_8_9_3",
            "scenario": "A woman is found in a cold room, stiff, with fixed pupils. No pulse is felt in a quick check. Core 27°C.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Check pulse and breathing for at least 60 seconds; if absent, start CPR with rewarming and transport under CPR",
                    "f": "Correct."
                },
                {
                    "t": "Declare death: she is stiff",
                    "f": "Profound hypothermia mimics death."
                },
                {
                    "t": "Give adrenaline now",
                    "f": "Withhold until the core is >30°C."
                },
                {
                    "t": "Shock repeatedly until ROSC",
                    "f": "Up to 3 shocks until ≥30°C."
                }
            ],
            "correct": 0,
            "explanation": "Confirm arrest carefully in hypothermia.",
            "kpi": "Hypothermia severity assessed and documented."
        },
        {
            "id": "crit_8_9_4",
            "scenario": "An elderly man with moderate hypothermia has BP 85/50 after 500 mL warmed fluid.",
            "question": "Next step?",
            "options": [
                {
                    "t": "Give further warmed fluid, up to 1000 mL in total, with continuous ECG",
                    "f": "Correct."
                },
                {
                    "t": "2 L of cold saline",
                    "f": "Use warmed fluid; adult max 1000 mL."
                },
                {
                    "t": "No more fluid: 500 mL is the limit",
                    "f": "The adult maximum is 1000 mL."
                },
                {
                    "t": "Hot bath",
                    "f": "Avoid aggressive external rewarming."
                }
            ],
            "correct": 0,
            "explanation": "Adult warmed fluid 250–500 mL, max 1000 mL.",
            "kpi": "Hypothermia severity assessed and documented."
        },
        {
            "id": "crit_8_9_5",
            "scenario": "Hypothermic arrest: VF, 3 shocks given, core 32°C after 20 minutes of CPR and rewarming.",
            "ecg": "vfFine",
            "question": "What now?",
            "options": [
                {
                    "t": "Continue CPR and rewarming; shocks at standard intervals; drugs at double the interval; transport under CPR",
                    "f": "Correct: core is now ≥30°C."
                },
                {
                    "t": "Terminate resuscitation",
                    "f": "Hypothermic arrests go to hospital under CPR."
                },
                {
                    "t": "Withhold all shocks",
                    "f": "Above 30°C, standard shock intervals resume."
                },
                {
                    "t": "Drugs at the standard interval",
                    "f": "Between 30–35°C, double the interval."
                }
            ],
            "correct": 0,
            "explanation": "Above 30°C, resume standard defibrillation; double drug intervals until 35°C.",
            "kpi": "Hypothermia severity assessed and documented."
        }
    ]
};
