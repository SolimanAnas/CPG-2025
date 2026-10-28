/* ========== CPG 6.6 – Epistaxis ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c6-6",
    "title": "Epistaxis",
    "shortTitle": "6.6 Epistaxis",
    "guide": {
        "cpg": "6.6",
        "group": "medical",
        "groupLabel": "Medical",
        "title": "Epistaxis",
        "lead": "Sit the medical patient forward and pinch the soft nose firmly and continuously. Watch the throat: blood running backwards means posterior bleeding and a threatened airway. Uncontrolled bleeding or shock means move: give fluids by numbers and meet ALS en route.",
        "source": {
            "label": "CPG 6.6",
            "pages": "172–175",
            "pdf": "../pdf_sections/6_6_Epistaxis.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Active nasal bleeding, one or both sides, from mild to severe; dizziness, weakness or pallor from blood loss.",
                    "Suspected causes: hypertension, trauma, coagulopathy, anticoagulants."
                ],
                "exclude": [
                    "No active bleeding, or bleeding resolved before arrival."
                ]
            },
            {
                "type": "list",
                "title": "Assess",
                "icon": "stethoscope",
                "items": [
                    "Onset, duration, first or recurrent; triggers (irritation, trauma, recent surgery, dry air).",
                    "Anticoagulants, antiplatelets, nasal sprays; bleeding disorders, hypertension, nasal procedures.",
                    "Severity (dripping, streaming) and site: anterior or posterior, one or both sides.",
                    "Blood pooling in the oropharynx or difficulty swallowing suggests posterior bleeding; check for airway compromise."
                ]
            },
            {
                "type": "steps",
                "title": "Bleeding control",
                "icon": "list",
                "steps": [
                    {
                        "title": "Position (medical cause)",
                        "text": "Sit upright, head tilted forward. No swallowing of blood, no blowing the nose."
                    },
                    {
                        "title": "Nasal compression",
                        "level": "EMR",
                        "text": "Firm, continuous pressure on the soft part of the nose (alae nasi) for 10–15 minutes (flowchart: 5–20 minutes), with gauze to absorb blood."
                    },
                    {
                        "title": "Not controlled",
                        "text": "Continue direct pressure. Consider packing with hemostatic agents or gauze for persistent anterior bleeding. Suspected posterior bleeding needs hospital packing: prioritise transport."
                    },
                    {
                        "title": "Reassess every 5–10 minutes",
                        "text": "Bleeding, airway and signs of blood loss."
                    }
                ]
            },
            {
                "type": "table",
                "title": "Fluid for shock (EMT)",
                "icon": "droplet",
                "columns": [
                    "",
                    "Adult",
                    "Pediatric"
                ],
                "rows": [
                    [
                        "Give when",
                        "SBP &lt;90 mmHg or HR &gt;120 bpm",
                        "Tachycardic for age AND poor perfusion"
                    ],
                    [
                        "Bolus",
                        "500 mL NS or RL IV/IO",
                        "20 mL/kg IV/IO, reassess"
                    ],
                    [
                        "Repeat",
                        "To keep SBP 90 mmHg",
                        "While signs of shock remain"
                    ],
                    [
                        "Maximum",
                        "2000 mL",
                        "60 mL/kg"
                    ]
                ],
                "stack": true,
                "notes": [
                    "Adults with SBP &gt;90 mmHg and HR &lt;120 bpm need no IV fluid.",
                    "Pediatric poor perfusion: hypotension for age, capillary refill &gt;2 seconds, altered mental status, hypoxia, weak pulses, pallor, mottled or cool skin. Target: normal BP for age."
                ]
            },
            {
                "type": "groups",
                "title": "Red flags",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "Move without delay",
                        "items": [
                            "Persistent or profuse bleeding despite treatment.",
                            "Hypovolemic shock: SBP &lt;90 mmHg, tachycardia, pallor.",
                            "Airway compromise from posterior bleeding or clot aspiration.",
                            "Coagulopathy or anticoagulants with uncontrolled bleeding.",
                            "Recurrent bleeding after nasal surgery or with malignancy."
                        ]
                    },
                    {
                        "title": "ALS",
                        "items": [
                            "Prioritise transport for uncontrolled bleeding; do not wait on scene, meet ALS en route."
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
                        "title": "Tools",
                        "items": [
                            {
                                "label": "Pediatric drug calculator: normal saline",
                                "sub": "20 mL/kg bolus, maximum 60 mL/kg",
                                "href": "../pages/drug-calculator.html?drug=Normal%20Saline",
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
                    "Every bleeding control measure documented."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "6.11 Non-Traumatic Shock",
                        "href": "c6-11.html"
                    },
                    {
                        "label": "2.1 Airway and Breathing",
                        "href": "c2.html?section=c2s1"
                    },
                    {
                        "label": "7.1 General Trauma Management",
                        "href": "c7-1.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "What is the first step for a medical nosebleed?",
            "options": [
                "Sit upright, head forward, and pinch the soft nose",
                "Lie flat",
                "Ice and observe",
                "Head tilted back"
            ],
            "correct": 0,
            "explanation": "Prevents blood pooling in the oropharynx."
        },
        {
            "q": "A patient on warfarin has a nosebleed. Why does it matter?",
            "options": [
                "Anticoagulants with uncontrolled bleeding are a red flag",
                "Warfarin stops bleeding",
                "It does not matter",
                "It causes hypertension"
            ],
            "correct": 0,
            "explanation": "Coagulopathy or anticoagulant use with uncontrolled bleeding."
        },
        {
            "q": "What is the adult maximum total fluid?",
            "options": [
                "2000 mL",
                "500 mL",
                "1000 mL",
                "No limit"
            ],
            "correct": 0,
            "explanation": "500 mL boluses to keep SBP 90 mmHg."
        },
        {
            "q": "Blood in the oropharynx and difficulty swallowing suggests…",
            "options": [
                "Posterior bleeding",
                "Anterior bleeding",
                "Sinusitis",
                "Allergy"
            ],
            "correct": 0,
            "explanation": "A threat to the airway."
        },
        {
            "q": "How long is the nose compressed in the text?",
            "options": [
                "10–15 minutes",
                "1 minute",
                "1 hour",
                "Until arrival only"
            ],
            "correct": 0,
            "explanation": "The flowchart gives 5–20 minutes."
        },
        {
            "q": "Which is a red flag?",
            "options": [
                "Hypotension and tachycardia",
                "Bleeding that stops with pressure",
                "One-sided anterior bleed, stable",
                "Seasonal allergies"
            ],
            "correct": 0,
            "explanation": "Signs of hypovolemic shock."
        },
        {
            "q": "When does an adult need IV fluid?",
            "options": [
                "SBP <90 mmHg or HR >120 bpm",
                "Any nosebleed",
                "SBP 140",
                "Never"
            ],
            "correct": 0,
            "explanation": "Otherwise no IV fluid."
        },
        {
            "q": "What is the adult bolus volume?",
            "options": [
                "500 mL",
                "100 mL",
                "2000 mL at once",
                "50 mL"
            ],
            "correct": 0,
            "explanation": "Repeat as needed, maximum 2000 mL."
        },
        {
            "q": "Why does clopidogrel matter?",
            "options": [
                "Antiplatelets increase bleeding risk",
                "It raises BP",
                "It is an antibiotic",
                "No reason"
            ],
            "correct": 0,
            "explanation": "Document anticoagulants and antiplatelets."
        },
        {
            "q": "When is anterior packing considered?",
            "options": [
                "Persistent anterior bleeding despite pressure",
                "Every nosebleed",
                "Posterior bleeding",
                "Never"
            ],
            "correct": 0,
            "explanation": "With hemostatic agents or gauze."
        },
        {
            "q": "What is the danger of posterior epistaxis?",
            "options": [
                "Airway compromise",
                "Seizures",
                "Stroke",
                "Rash"
            ],
            "correct": 0,
            "explanation": "Blood aspiration or clot obstruction."
        },
        {
            "q": "Who packs a posterior bleed?",
            "options": [
                "The hospital: prioritise transport",
                "EMR on scene",
                "The patient",
                "Nobody"
            ],
            "correct": 0,
            "explanation": "Posterior packing requires hospital management."
        },
        {
            "q": "What should the patient avoid?",
            "options": [
                "Swallowing blood and blowing the nose",
                "Sitting up",
                "Breathing through the mouth",
                "Talking"
            ],
            "correct": 0,
            "explanation": "As instructed."
        },
        {
            "q": "What is the pediatric bolus?",
            "options": [
                "20 mL/kg IV/IO",
                "5 mL/kg",
                "50 mL/kg",
                "None"
            ],
            "correct": 0,
            "explanation": "Reassess after each bolus."
        },
        {
            "q": "What is the pediatric maximum total fluid?",
            "options": [
                "60 mL/kg",
                "20 mL/kg",
                "100 mL/kg",
                "No maximum"
            ],
            "correct": 0,
            "explanation": "Target normal BP for age."
        },
        {
            "q": "When is a child given fluid?",
            "options": [
                "Tachycardic for age AND signs of poor perfusion",
                "Any nosebleed",
                "Only if crying",
                "Never"
            ],
            "correct": 0,
            "explanation": "Both conditions."
        },
        {
            "q": "Where is pressure applied?",
            "options": [
                "Soft part of the nose (alae nasi)",
                "Bony bridge",
                "Forehead",
                "Upper lip"
            ],
            "correct": 0,
            "explanation": "Firm and continuous."
        },
        {
            "q": "Bleeding continues after compression. What do you do?",
            "options": [
                "Continue direct pressure; consider packing; transport",
                "Stop pressure",
                "Tilt the head back",
                "Give aspirin"
            ],
            "correct": 0,
            "explanation": "Maintain pressure."
        },
        {
            "q": "How often is bleeding reassessed?",
            "options": [
                "Every 5–10 minutes during interventions",
                "Once",
                "Every hour",
                "Never"
            ],
            "correct": 0,
            "explanation": "Plus airway and blood loss."
        },
        {
            "q": "SBP 80 after 500 mL. What next?",
            "options": [
                "Repeat 500 mL, up to 2000 mL total",
                "Stop fluids",
                "Give 2000 mL at once",
                "Dopamine"
            ],
            "correct": 0,
            "explanation": "Repeat boluses to keep SBP 90 mmHg."
        },
        {
            "q": "Bleeding is uncontrolled and ALS is 20 minutes away. What do you do?",
            "options": [
                "Transport and meet ALS en route",
                "Wait on scene",
                "Stop treatment",
                "Send the patient by taxi"
            ],
            "correct": 0,
            "explanation": "Do not wait on scene."
        },
        {
            "q": "Which level applies direct pressure?",
            "options": [
                "EMR",
                "P only",
                "AP only",
                "EP only"
            ],
            "correct": 0,
            "explanation": "Fluids are EMT."
        },
        {
            "q": "What does the flowchart do differently for trauma?",
            "options": [
                "No sit-forward step: direct pressure",
                "No pressure",
                "Ice only",
                "Packing first"
            ],
            "correct": 0,
            "explanation": "Positioning upright and forward is for non-traumatic causes."
        },
        {
            "q": "Which sign indicates severe blood loss?",
            "options": [
                "Altered mental status",
                "Capillary refill under 2 seconds",
                "HR 70",
                "SBP 120"
            ],
            "correct": 0,
            "explanation": "With pallor, tachycardia, hypotension."
        },
        {
            "q": "Bleeding has stopped before arrival. Is the patient in this CPG?",
            "options": [
                "No: excluded",
                "Yes",
                "Only if on warfarin",
                "Only children"
            ],
            "correct": 0,
            "explanation": "No active bleeding or resolved epistaxis is excluded."
        },
        {
            "q": "Recurrent bleeding after nasal surgery is…",
            "options": [
                "A red flag",
                "Normal",
                "Excluded",
                "Minor"
            ],
            "correct": 0,
            "explanation": "So is malignancy."
        },
        {
            "q": "SBP 100, HR 100 with a controlled bleed. IV fluid?",
            "options": [
                "No",
                "Yes, 500 mL",
                "Yes, 2000 mL",
                "Yes, 20 mL/kg"
            ],
            "correct": 0,
            "explanation": "SBP >90 and HR <120: no IV fluid."
        },
        {
            "q": "Which secondary survey is done?",
            "options": [
                "Focused head and neck, nasal cavity and oropharynx",
                "Full neuro only",
                "Abdomen only",
                "None"
            ],
            "correct": 0,
            "explanation": "As per the CPG."
        },
        {
            "q": "Which allergies are documented?",
            "options": [
                "Hemostatic agents or packing materials",
                "Pollen only",
                "None",
                "Food only"
            ],
            "correct": 0,
            "explanation": "Especially those."
        },
        {
            "q": "What is the KPI?",
            "options": [
                "Document all bleeding control measures",
                "Scene time",
                "Fluid in all",
                "BP lowering"
            ],
            "correct": 0,
            "explanation": "A single KPI."
        }
    ],
    "flashcards": [
        {
            "question": "Position",
            "answer": "Medical cause: upright, head forward; no swallowing blood or blowing the nose."
        },
        {
            "question": "Compression",
            "answer": "Firm continuous pressure on the soft nose for 10–15 minutes (flowchart 5–20); EMR."
        },
        {
            "question": "Packing",
            "answer": "Hemostatic agent or gauze for persistent anterior bleeding; posterior packing is for hospital."
        },
        {
            "question": "Posterior bleed clues",
            "answer": "Blood in the oropharynx, difficulty swallowing."
        },
        {
            "question": "Adult fluid trigger",
            "answer": "SBP <90 mmHg or HR >120 bpm."
        },
        {
            "question": "Adult fluid",
            "answer": "500 mL NS or RL; repeat to keep SBP 90; maximum 2000 mL (EMT)."
        },
        {
            "question": "Pediatric fluid trigger",
            "answer": "Tachycardic for age AND poor perfusion."
        },
        {
            "question": "Pediatric fluid",
            "answer": "20 mL/kg; repeat while shocked; maximum 60 mL/kg; target normal BP for age."
        },
        {
            "question": "Red flags",
            "answer": "Persistent bleeding, shock, airway compromise, anticoagulants with uncontrolled bleeding, surgery or malignancy."
        },
        {
            "question": "ALS",
            "answer": "Do not wait on scene: meet ALS en route."
        },
        {
            "question": "Reassessment",
            "answer": "Bleeding every 5–10 minutes; airway and blood loss."
        },
        {
            "question": "History",
            "answer": "Onset, recurrence, triggers, anticoagulants/antiplatelets, nasal sprays, bleeding disorders, hypertension, surgery."
        },
        {
            "question": "Exclusion",
            "answer": "No active bleeding or resolved before arrival."
        },
        {
            "question": "Trauma",
            "answer": "Direct pressure; the sit-forward step is for medical causes."
        },
        {
            "question": "Poor perfusion in children",
            "answer": "Hypotension for age, CRT >2 s, AMS, hypoxia, weak pulses, pallor, mottled or cool skin."
        },
        {
            "question": "No IV fluid needed",
            "answer": "Adult SBP >90 mmHg and HR <120 bpm."
        },
        {
            "question": "Documentation",
            "answer": "Positioning, compression, packing, fluids, estimated blood loss, airway status."
        },
        {
            "question": "KPI",
            "answer": "All bleeding control measures documented."
        },
        {
            "question": "Uncontrolled bleeding",
            "answer": "Can cause severe hypovolemic shock: prioritise rapid transfer."
        },
        {
            "question": "Secondary survey",
            "answer": "Focused head and neck: nasal cavity and oropharynx."
        }
    ],
    "critical": [
        {
            "id": "crit_6_6_1",
            "scenario": "A 65-year-old on warfarin has had profuse bleeding from the right nostril for 30 minutes despite pressure. He is pale and sweaty; BP 88/60, HR 125.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Keep pressure, 500 mL fluid bolus IV/IO, transport now and meet ALS en route",
                    "f": "Correct."
                },
                {
                    "t": "Wait on scene for ALS",
                    "f": "Do not wait: move."
                },
                {
                    "t": "Stop pressure and tilt the head back",
                    "f": "Keep pressure; head forward."
                },
                {
                    "t": "No fluids: BP will recover",
                    "f": "SBP <90 and HR >120: fluid."
                }
            ],
            "correct": 0,
            "explanation": "Anticoagulants with uncontrolled bleeding and shock are red flags.",
            "kpi": "All bleeding control measures documented."
        },
        {
            "id": "crit_6_6_2",
            "scenario": "A 45-year-old's anterior nosebleed continues after 15 minutes of correct compression. She has no signs of shock.",
            "question": "What next?",
            "options": [
                {
                    "t": "Continue pressure, consider anterior packing with hemostatic gauze, and transport",
                    "f": "Correct."
                },
                {
                    "t": "Fluid bolus",
                    "f": "No shock: no IV fluid."
                },
                {
                    "t": "Posterior packing on scene",
                    "f": "A hospital procedure."
                },
                {
                    "t": "Leave her: it will stop",
                    "f": "Persistent bleeding needs further care."
                }
            ],
            "correct": 0,
            "explanation": "Packing is considered for persistent anterior bleeding.",
            "kpi": "All bleeding control measures documented."
        },
        {
            "id": "crit_6_6_3",
            "scenario": "A 70-year-old is swallowing repeatedly; blood runs down her throat while the nostrils barely drip.",
            "question": "What is your concern?",
            "options": [
                {
                    "t": "Posterior bleeding with a threatened airway: protect the airway and transport promptly",
                    "f": "Correct."
                },
                {
                    "t": "Minor anterior bleed",
                    "f": "Blood in the throat points posterior."
                },
                {
                    "t": "Packing will fix it on scene",
                    "f": "Posterior packing is hospital care."
                },
                {
                    "t": "Lie her flat",
                    "f": "Keep her upright and forward."
                }
            ],
            "correct": 0,
            "explanation": "Posterior epistaxis is a red flag; avoid delays.",
            "kpi": "All bleeding control measures documented."
        },
        {
            "id": "crit_6_6_4",
            "scenario": "A 6-year-old (20 kg) has a heavy nosebleed: HR 150, capillary refill 4 seconds, pale and cool.",
            "question": "What fluid?",
            "options": [
                {
                    "t": "20 mL/kg IV/IO, reassess, repeat while shocked (maximum 60 mL/kg)",
                    "f": "Correct."
                },
                {
                    "t": "500 mL adult bolus",
                    "f": "Use weight-based dosing."
                },
                {
                    "t": "No fluid in children",
                    "f": "Tachycardia with poor perfusion needs fluid."
                },
                {
                    "t": "100 mL/kg",
                    "f": "Maximum is 60 mL/kg."
                }
            ],
            "correct": 0,
            "explanation": "Tachycardic for age and poorly perfused: 20 mL/kg, target normal BP for age.",
            "kpi": "All bleeding control measures documented."
        },
        {
            "id": "crit_6_6_5",
            "scenario": "A child's nose bleeds into the back of the throat; the parent is very anxious.",
            "question": "What first?",
            "options": [
                {
                    "t": "Calm them, sit the child forward and pinch the soft nose",
                    "f": "Correct."
                },
                {
                    "t": "Tilt the head back",
                    "f": "Blood would pool in the throat."
                },
                {
                    "t": "Lie flat",
                    "f": "Upright and forward."
                },
                {
                    "t": "Ice only",
                    "f": "Compression is the treatment."
                }
            ],
            "correct": 0,
            "explanation": "Position and compression; watch the airway.",
            "kpi": "All bleeding control measures documented."
        }
    ]
};
