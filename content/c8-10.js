/* ========== CPG 8.10 – Hyperthermia ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c8-10",
    "title": "Hyperthermia",
    "shortTitle": "8.10 Hyperthermia",
    "guide": {
        "cpg": "8.10",
        "group": "environmental",
        "groupLabel": "Environmental",
        "title": "Hyperthermia",
        "lead": "Remove from the heat and cool: strip, spray, fan, ice. Heat stroke (CNS dysfunction, usually above 40°C) is life-threatening: cool first, transport second, aiming for at least 0.15°C/min and stopping at 38.6–39.4°C. Give crystalloid for dehydration or shock, treat seizures with benzodiazepines, and do not give antipyretics.",
        "source": {
            "label": "CPG 8.10",
            "pages": "286–289",
            "pdf": "../pdf_sections/8_10_Hyperthermia___Heat_Exposure.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Heat exposure: high ambient temperature, exertion in heat, prolonged exposure or inadequate hydration.",
                    "Raised temperature, headache, nausea or vomiting, syncope, heat cramps, CNS involvement, hot dry skin or hypotension.",
                    "Core temperature above 37°C, often &gt;40°C in heat stroke, measured or estimated."
                ],
                "exclude": [
                    "Hyperthermia or fever from an intrinsic cause such as sepsis."
                ]
            },
            {
                "type": "table",
                "title": "Heat exhaustion or heat stroke",
                "icon": "stethoscope",
                "columns": [
                    "",
                    "Heat exhaustion (mild)",
                    "Heat stroke (severe)"
                ],
                "rows": [
                    [
                        "Temperature",
                        "Typically 37–40°C",
                        "Usually &gt;40°C"
                    ],
                    [
                        "Features",
                        "Headache, nausea or vomiting, syncope, heat cramps, poor circulation, dehydration",
                        "CNS dysfunction (ataxia, confusion, delirium, irritability, seizures, coma), hot dry skin, hypotension"
                    ],
                    [
                        "CNS involvement",
                        "No",
                        "Yes: the key difference"
                    ],
                    [
                        "Cooling",
                        "Passive: remove from heat, fan, remove clothing",
                        "Aggressive active cooling: cool first, transport second"
                    ]
                ],
                "notes": [
                    "Heat stroke may be exertional (athletes) or non-exertional (elderly and other vulnerable people).",
                    "Consider non-environmental causes: infection, medications, drug toxicity, malignant hyperthermia."
                ]
            },
            {
                "type": "groups",
                "title": "Cool: strip, spray, fan, ice",
                "icon": "wind",
                "groups": [
                    {
                        "title": "All patients",
                        "items": [
                            "Strip: remove clothing and loosen restrictive garments.",
                            "Spray: mist the skin with tepid water.",
                            "Fan: a cool, well-ventilated area; fan to promote evaporation.",
                            "Ice: cold packs to the axilla, groin and posterior neck."
                        ]
                    },
                    {
                        "title": "Heat stroke",
                        "items": [
                            "Cooling rate 0.15°C/min or more.",
                            "Cold water immersion is the gold standard if available; otherwise ice packs and fans during transport.",
                            "Stop at 38.6–39.4°C to avoid overcooling."
                        ]
                    }
                ]
            },
            {
                "type": "steps",
                "title": "Fluids and drugs",
                "icon": "droplet",
                "steps": [
                    {
                        "title": "Oral fluids",
                        "text": "Heat exhaustion: PO fluids with electrolytes if alert and able to swallow."
                    },
                    {
                        "title": "IV crystalloid",
                        "level": "EMT",
                        "text": "Normal saline or Lactated Ringer's for heat exhaustion with dehydration or shock, or for heat stroke.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "500 mL IV/IO bolus",
                                "note": "Repeat as required"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "10 mL/kg bolus",
                                "note": "Repeat as required, max 40 mL/kg"
                            }
                        ]
                    },
                    {
                        "title": "Seizures or agitation",
                        "text": "Benzodiazepines as per the Seizures CPG."
                    },
                    {
                        "title": "Antipyretics",
                        "text": "Avoid (e.g. paracetamol): ineffective. Rely on external cooling."
                    },
                    {
                        "title": "ALS back-up",
                        "text": "Consider for heat stroke."
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Monitor",
                "icon": "monitor",
                "groups": [
                    {
                        "title": "Reassess",
                        "items": [
                            "Dehydration, electrolyte imbalance and mental status.",
                            "ECG for arrhythmias from electrolyte imbalance.",
                            "Altered mental status not improving: consider other causes."
                        ]
                    },
                    {
                        "title": "Higher risk",
                        "items": [
                            "Elderly, children and people with comorbidities.",
                            "Heat exhaustion can progress rapidly to heat stroke if untreated."
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
                                "ecg": "stach",
                                "label": "Sinus tachycardia",
                                "sub": "Dehydration, heat stress"
                            },
                            {
                                "ecg": "hyperK",
                                "label": "Hyperkalemia",
                                "sub": "Electrolyte arrhythmia risk"
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
                            },
                            {
                                "label": "Drug calculator: diazepam",
                                "sub": "Seizures CPG",
                                "href": "../pages/drug-calculator.html?drug=Diazepam",
                                "icon": "pill"
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
                    "Body temperature assessed and documented."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "8.9 Hypothermia",
                        "href": "c8-9.html"
                    },
                    {
                        "label": "5.2 Seizures",
                        "href": "c5-2.html"
                    },
                    {
                        "label": "6.7 Fever and Sepsis",
                        "href": "c6-7.html"
                    },
                    {
                        "label": "8.1 General Toxicology",
                        "href": "c8-1.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "What distinguishes heat stroke from heat exhaustion?",
            "options": [
                "CNS dysfunction",
                "Sweating",
                "Headache",
                "Heat cramps"
            ],
            "correct": 0,
            "explanation": "Heat stroke: delirium, confusion, seizures or loss of consciousness."
        },
        {
            "q": "First cooling step for any heat-exposed patient?",
            "options": [
                "Remove from the heat; strip, spray, fan, ice",
                "Paracetamol",
                "Cold IV fluid only",
                "Wait for hospital"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "Heat exhaustion, alert and able to swallow. Fluids?",
            "options": [
                "PO fluids with electrolytes",
                "IV saline for all",
                "No fluids",
                "Plain water only, forced"
            ],
            "correct": 0,
            "explanation": "IV only if dehydrated or shocked."
        },
        {
            "q": "What cooling rate is the aim in heat stroke?",
            "options": [
                "0.15°C/min or more",
                "0.05°C/min",
                "1°C/hour",
                "As slow as possible"
            ],
            "correct": 0,
            "explanation": "Aggressive cooling is the priority."
        },
        {
            "q": "Adult IV crystalloid bolus?",
            "options": [
                "500 mL, repeat as required",
                "250 mL once",
                "2 L stat",
                "100 mL"
            ],
            "correct": 0,
            "explanation": "IV/IO, EMT level."
        },
        {
            "q": "Gold-standard cooling for heat stroke if available?",
            "options": [
                "Cold water immersion",
                "Paracetamol",
                "A cool drink",
                "A blanket"
            ],
            "correct": 0,
            "explanation": "Otherwise ice packs and fans during transport."
        },
        {
            "q": "Heat exhaustion with BP 85/50. What do you do?",
            "options": [
                "IV crystalloid bolus",
                "Oral fluids only",
                "Vasopressors",
                "Transport with no treatment"
            ],
            "correct": 0,
            "explanation": "IV fluid for dehydration or shock."
        },
        {
            "q": "Pediatric IV bolus?",
            "options": [
                "10 mL/kg",
                "5 mL/kg",
                "20 mL/kg",
                "40 mL/kg"
            ],
            "correct": 0,
            "explanation": "Repeat as required, max 40 mL/kg."
        },
        {
            "q": "Why not give paracetamol for heat stroke?",
            "options": [
                "It is ineffective; cool externally",
                "It damages the liver immediately",
                "It interferes with ice packs",
                "It is not stocked"
            ],
            "correct": 0,
            "explanation": "Clinical insight: avoid antipyretics."
        },
        {
            "q": "At what temperature do you stop active cooling?",
            "options": [
                "38.6–39.4°C",
                "Below 37°C",
                "36°C",
                "40°C"
            ],
            "correct": 0,
            "explanation": "To avoid overcooling."
        },
        {
            "q": "Heat stroke patient seizing. Management?",
            "options": [
                "Continue cooling; benzodiazepines per the Seizures CPG; protect the airway",
                "Stop cooling",
                "Paracetamol",
                "Fluids only"
            ],
            "correct": 0,
            "explanation": "Seizure management is in the CPG."
        },
        {
            "q": "How is the adult bolus repeated?",
            "options": [
                "As required, reassessing after each bolus",
                "Never",
                "Every minute regardless",
                "Only in hospital"
            ],
            "correct": 0,
            "explanation": "500 mL boluses, repeat as required."
        },
        {
            "q": "Where are cold packs placed?",
            "options": [
                "Axilla, groin and posterior neck",
                "Forehead only",
                "Hands and feet",
                "Chest only"
            ],
            "correct": 0,
            "explanation": "Large vessels close to the skin."
        },
        {
            "q": "Why stop cooling at 38.6–39.4°C?",
            "options": [
                "To avoid overcooling",
                "Because ice runs out",
                "Because cooling is harmful at any temperature",
                "No reason"
            ],
            "correct": 0,
            "explanation": "Target reduction range."
        },
        {
            "q": "Which fluids are used IV?",
            "options": [
                "Normal saline or Lactated Ringer's",
                "5% dextrose",
                "Hypotonic saline",
                "Colloid only"
            ],
            "correct": 0,
            "explanation": "Crystalloid."
        },
        {
            "q": "What does 'cool first, transport second' mean?",
            "options": [
                "Start aggressive cooling before and during transport",
                "Transport first",
                "Cool only in hospital",
                "Cool only mild cases"
            ],
            "correct": 0,
            "explanation": "Heat stroke priority."
        },
        {
            "q": "What is the KPI?",
            "options": [
                "Body temperature assessed and documented",
                "Antibiotics given",
                "12-lead ECG for all",
                "Glucose for all"
            ],
            "correct": 0,
            "explanation": "Single KPI."
        },
        {
            "q": "Which patient is excluded?",
            "options": [
                "Fever from sepsis",
                "Labourer collapsing in the sun",
                "Marathon runner confused at the finish",
                "Elderly person in a hot flat"
            ],
            "correct": 0,
            "explanation": "Intrinsic causes are excluded."
        },
        {
            "q": "Pediatric maximum IV bolus total?",
            "options": [
                "40 mL/kg",
                "20 mL/kg",
                "60 mL/kg",
                "80 mL/kg"
            ],
            "correct": 0,
            "explanation": "10 mL/kg boluses."
        },
        {
            "q": "Who is at higher risk of heat illness?",
            "options": [
                "Elderly, children and people with comorbidities",
                "Only athletes",
                "Only the elderly",
                "Nobody in particular"
            ],
            "correct": 0,
            "explanation": "Exertional heat stroke is common in athletes."
        },
        {
            "q": "Heat stroke patient is agitated and combative. Management?",
            "options": [
                "Benzodiazepines per the Seizures CPG, with continued cooling",
                "Restraint and no cooling",
                "Paracetamol",
                "Leave on scene"
            ],
            "correct": 0,
            "explanation": "Manage seizures or agitation with benzodiazepines."
        },
        {
            "q": "Which is a heat stroke feature on the flowchart?",
            "options": [
                "CNS involvement, temperature >40°C, hot dry skin or hypotension",
                "Heat cramps alone",
                "Headache alone",
                "Sweating alone"
            ],
            "correct": 0,
            "explanation": "Any of these."
        },
        {
            "q": "Which level gives IV crystalloid?",
            "options": [
                "EMT",
                "ER",
                "EMR",
                "EP only"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "Heat exhaustion, vomiting, can't take oral fluids. What do you do?",
            "options": [
                "IV crystalloid",
                "Force oral fluids",
                "Transport only",
                "Paracetamol"
            ],
            "correct": 0,
            "explanation": "PO only if able to swallow."
        },
        {
            "q": "What should you think about if mental status does not improve with cooling?",
            "options": [
                "Alternative causes",
                "More paracetamol",
                "Nothing",
                "Stop all treatment"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "Why monitor the ECG?",
            "options": [
                "Arrhythmias from electrolyte imbalance",
                "To measure temperature",
                "To guide fan speed",
                "It is not needed"
            ],
            "correct": 0,
            "explanation": "Assessment point."
        },
        {
            "q": "Heat stroke: what else to consider early?",
            "options": [
                "ALS back-up",
                "Discharge",
                "Antipyretics",
                "Hot drinks"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "Heat exhaustion untreated may…",
            "options": [
                "Progress rapidly to heat stroke",
                "Always resolve",
                "Cause hypothermia",
                "Never change"
            ],
            "correct": 0,
            "explanation": "Clinical insight."
        },
        {
            "q": "No immersion available. How do you cool en route?",
            "options": [
                "Ice packs and fans, misting with tepid water",
                "Blankets",
                "Nothing",
                "Hot packs"
            ],
            "correct": 0,
            "explanation": "Evaporative cooling."
        },
        {
            "q": "Core 41°C, now 39.5°C after cooling. What next?",
            "options": [
                "Continue cooling to 38.6–39.4°C",
                "Cool until below 37°C",
                "Stop now",
                "Give paracetamol"
            ],
            "correct": 0,
            "explanation": "Target range not yet reached."
        }
    ],
    "flashcards": [
        {
            "question": "Heat stroke",
            "answer": "CNS dysfunction, usually >40°C, hot dry skin, hypotension; life-threatening."
        },
        {
            "question": "Heat exhaustion",
            "answer": "Typically 37–40°C: headache, nausea, syncope, cramps, dehydration; no CNS involvement."
        },
        {
            "question": "Cooling rate",
            "answer": "0.15°C/min or more in heat stroke."
        },
        {
            "question": "Cooling target",
            "answer": "38.6–39.4°C, to avoid overcooling."
        },
        {
            "question": "Strip, spray, fan, ice",
            "answer": "Remove clothing; tepid water mist; fan in a cool ventilated area; cold packs to axilla, groin and posterior neck."
        },
        {
            "question": "Adult IV fluid",
            "answer": "500 mL NS or LR bolus, repeat as required (EMT)."
        },
        {
            "question": "Pediatric IV fluid",
            "answer": "10 mL/kg bolus, repeat as required, max 40 mL/kg (EMT)."
        },
        {
            "question": "Antipyretics",
            "answer": "Avoid: ineffective. Focus on external cooling."
        },
        {
            "question": "Seizures or agitation",
            "answer": "Benzodiazepines as per the Seizures CPG."
        },
        {
            "question": "Higher-risk groups",
            "answer": "Elderly, children, people with comorbidities; exertional heat stroke in athletes."
        },
        {
            "question": "Exertional vs non-exertional",
            "answer": "Exertional: from activity. Non-exertional: vulnerable people such as the elderly."
        },
        {
            "question": "Cool first, transport second",
            "answer": "Start aggressive cooling immediately and continue it en route."
        },
        {
            "question": "KPI",
            "answer": "Assess and document body temperature."
        },
        {
            "question": "Gold-standard cooling",
            "answer": "Cold water immersion, if available."
        },
        {
            "question": "Oral fluids",
            "answer": "Heat exhaustion: PO fluids with electrolytes if alert and able to swallow."
        },
        {
            "question": "IV fluid indications",
            "answer": "Heat exhaustion with dehydration or shock; heat stroke."
        },
        {
            "question": "Exclusion",
            "answer": "Hyperthermia or fever from an intrinsic cause such as sepsis."
        },
        {
            "question": "Non-environmental causes",
            "answer": "Infection, medications, drug toxicity, malignant hyperthermia."
        },
        {
            "question": "ECG",
            "answer": "Monitor for arrhythmias from electrolyte imbalance."
        },
        {
            "question": "Progression",
            "answer": "Heat exhaustion can deteriorate rapidly to heat stroke if untreated."
        }
    ],
    "critical": [
        {
            "id": "crit_8_10_1",
            "scenario": "A runner collapses at the end of a marathon: unresponsive, hot dry skin, core 41°C.",
            "question": "What first?",
            "options": [
                {
                    "t": "Aggressive cooling now (cold water immersion if available, otherwise strip, spray, fan, ice), then transport",
                    "f": "Correct: cool first, transport second."
                },
                {
                    "t": "Paracetamol",
                    "f": "Antipyretics are ineffective."
                },
                {
                    "t": "Load and go without cooling",
                    "f": "Cooling is the priority."
                },
                {
                    "t": "Oral fluids",
                    "f": "He is unresponsive."
                }
            ],
            "correct": 0,
            "explanation": "Heat stroke: aim for 0.15°C/min or more.",
            "kpi": "Body temperature assessed and documented."
        },
        {
            "id": "crit_8_10_2",
            "scenario": "An elderly man is found in a flat without air conditioning in a heat wave: confused, core 40.5°C, BP 90/60, HR 120.",
            "ecg": "stach",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Strip, spray, fan, ice; IV crystalloid 500 mL bolus; consider ALS; continuous cooling en route",
                    "f": "Correct: non-exertional heat stroke."
                },
                {
                    "t": "Blankets",
                    "f": "He needs cooling."
                },
                {
                    "t": "Paracetamol",
                    "f": "Ineffective."
                },
                {
                    "t": "PO fluids only",
                    "f": "He is confused and hypotensive."
                }
            ],
            "correct": 0,
            "explanation": "CNS dysfunction and hypotension: heat stroke.",
            "kpi": "Body temperature assessed and documented."
        },
        {
            "id": "crit_8_10_3",
            "scenario": "During cooling, a heat stroke patient has a generalised seizure.",
            "question": "What is the management?",
            "options": [
                {
                    "t": "Protect the airway, benzodiazepines per the Seizures CPG, continue cooling",
                    "f": "Correct."
                },
                {
                    "t": "Stop cooling",
                    "f": "Cooling continues."
                },
                {
                    "t": "Paracetamol",
                    "f": "Ineffective."
                },
                {
                    "t": "Restrain only",
                    "f": "Treat with benzodiazepines."
                }
            ],
            "correct": 0,
            "explanation": "Manage seizures or agitation with benzodiazepines.",
            "kpi": "Body temperature assessed and documented."
        },
        {
            "id": "crit_8_10_4",
            "scenario": "A labourer with heat exhaustion is alert but still hypotensive after a 500 mL crystalloid bolus.",
            "question": "Next step?",
            "options": [
                {
                    "t": "Repeat the 500 mL bolus and reassess, with continued cooling",
                    "f": "Correct: repeat as required."
                },
                {
                    "t": "Vasopressors",
                    "f": "Not in this CPG."
                },
                {
                    "t": "Stop fluids",
                    "f": "Boluses repeat as required."
                },
                {
                    "t": "Paracetamol",
                    "f": "Ineffective."
                }
            ],
            "correct": 0,
            "explanation": "Adult 500 mL boluses, repeated as required.",
            "kpi": "Body temperature assessed and documented."
        },
        {
            "id": "crit_8_10_5",
            "scenario": "A heat stroke patient has been cooled to 38.8°C.",
            "question": "What now?",
            "options": [
                {
                    "t": "Stop active cooling: target 38.6–39.4°C reached; keep monitoring",
                    "f": "Correct: avoid overcooling."
                },
                {
                    "t": "Continue cooling to below 37°C",
                    "f": "Risk of overcooling."
                },
                {
                    "t": "Restart with cold water immersion",
                    "f": "Target reached."
                },
                {
                    "t": "Give paracetamol",
                    "f": "Ineffective."
                }
            ],
            "correct": 0,
            "explanation": "Stop at 38.6–39.4°C to avoid overcooling.",
            "kpi": "Body temperature assessed and documented."
        }
    ]
};
