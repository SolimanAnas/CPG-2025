/* ========== CPG 6.4 – Anaphylaxis / Allergic Reaction ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c6-4",
    "title": "Anaphylaxis / Allergic Reaction",
    "shortTitle": "6.4 Anaphylaxis / Allergic Reaction",
    "guide": {
        "cpg": "6.4",
        "group": "medical",
        "groupLabel": "Medical",
        "title": "Anaphylaxis / Allergic Reaction",
        "lead": "Grade the reaction. Anaphylaxis (two or more systems, or hypotension) needs IM adrenaline in the thigh within 5 minutes, repeated every 5–15 minutes as needed, with fluid for shock. Antihistamine, steroid and bronchodilator are additions, never substitutes.",
        "source": {
            "label": "CPG 6.4",
            "pages": "163–166",
            "pdf": "../pdf_sections/6_4_Anaphylaxis___Allergic_Reaction.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Mild to moderate reaction: localized hives, itching or mild swelling without systemic symptoms.",
                    "Anaphylaxis: two or more systems (skin/mucosa, respiratory, cardiovascular, gastrointestinal), e.g. wheeze or stridor, hypotension, angioedema, vomiting or abdominal pain.",
                    "Known or suspected allergen exposure; previous reactions."
                ],
                "exclude": [
                    "None noted."
                ]
            },
            {
                "type": "groups",
                "title": "Assess",
                "icon": "stethoscope",
                "groups": [
                    {
                        "title": "History",
                        "items": [
                            "Exposure: food, medication, sting, latex, environment.",
                            "Known allergies, previous anaphylaxis, alert bracelet."
                        ]
                    },
                    {
                        "title": "Red flags",
                        "items": [
                            "Rapidly progressing respiratory distress or airway obstruction (stridor, wheeze, cyanosis).",
                            "SBP &lt;90 mmHg (adults) or age-specific hypotension; capillary refill &gt;2 seconds.",
                            "Altered mental status.",
                            "Persistent or worsening angioedema, especially of the airway.",
                            "Known history of severe anaphylaxis."
                        ]
                    },
                    {
                        "title": "Elderly",
                        "items": [
                            "May present atypically: hypotension without skin signs."
                        ]
                    }
                ]
            },
            {
                "type": "steps",
                "title": "Mild and moderate reactions",
                "icon": "list",
                "steps": [
                    {
                        "title": "Mild",
                        "text": "No routine treatment. Recommend transport and reassess en route."
                    },
                    {
                        "title": "Oxygen",
                        "text": "If hypoxic or in respiratory distress: SpO<sub>2</sub> ≥94% (flowchart: &gt;94%)."
                    },
                    {
                        "title": "Diphenhydramine",
                        "level": "EMT",
                        "text": "Urticaria, itching, mild symptoms.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "25–50 mg IV/IM/PO",
                                "note": "Flowchart: 1 mg/kg IM/IV, maximum 50 mg",
                                "level": "EMT"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "1 mg/kg IV/IM/PO (maximum 50 mg)",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Hydrocortisone",
                        "level": "EMT",
                        "text": "IM: EMT; IV: EMT-A. In anaphylaxis, give it after adrenaline.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "100–200 mg IV/IM",
                                "note": "Flowchart: 100 mg",
                                "level": "EMT"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "2 mg/kg IV/IM (maximum 200 mg)",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Bronchospasm",
                        "level": "EMT",
                        "text": "Dilute each nebule to a maximum of 5 mL with saline or sterile water.",
                        "doses": [
                            {
                                "drug": "Salbutamol, adult",
                                "dose": "2.5–5 mg nebulized",
                                "note": "Flowchart: 5 mg",
                                "level": "EMT"
                            },
                            {
                                "drug": "Salbutamol, pediatric",
                                "dose": "2.5 mg (&lt;20 kg) or 5 mg (≥20 kg)",
                                "note": "Flowchart: by age, &lt;5 years 2.5 mg, &gt;5 years 5 mg",
                                "level": "EMT"
                            },
                            {
                                "drug": "Combivent (adults only)",
                                "dose": "0.5 mg ipratropium + 3 mg salbutamol (1 nebule)",
                                "note": "Flowchart: EMT (moderate), P (severe)",
                                "level": "EMT"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "steps",
                "title": "Severe reaction: anaphylaxis",
                "icon": "siren",
                "steps": [
                    {
                        "title": "Adrenaline IM (1:1000), anterolateral thigh",
                        "level": "EMT",
                        "text": "First, and within 5 minutes. Repeat every 5–15 minutes for persistent symptoms or deterioration. The EpiPen is preferred for speed.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "0.3–0.5 mg IM",
                                "note": "Adult EpiPen 0.3 mg",
                                "level": "EMT"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "0.01 mg/kg IM (maximum 0.3 mg)",
                                "note": "Pediatric EpiPen 0.15 mg",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "IV access",
                        "text": "For hypotension, moderate to severe symptoms or expected drugs; IO if IV fails."
                    },
                    {
                        "title": "Fluid for shock",
                        "level": "EMT",
                        "text": "Normal saline or Ringer's lactate; reassess, repeat as needed; watch for overload.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "500–1000 mL IV",
                                "level": "EMT"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "20 mL/kg IV",
                                "note": "Flowchart: 5–20 mL/kg",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Then",
                        "text": "Diphenhydramine (P on the severe side of the flowchart), hydrocortisone and bronchodilators as for moderate reactions. Continuous ECG and SpO<sub>2</sub>."
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Airway edema and cardiac disease",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "Airway edema",
                        "items": [
                            "Low threshold for IM adrenaline: a small increase in swelling can block the airway.",
                            "No improvement: invasive airway management may be needed; transfer rapidly and inform Dispatch 2."
                        ]
                    },
                    {
                        "title": "Cardiovascular disease",
                        "items": [
                            "Use adrenaline with caution; consult Telemedicine if needed."
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
                                "label": "Pediatric drug calculator: adrenaline",
                                "sub": "0.01 mg/kg IM, maximum 0.3 mg",
                                "href": "../pages/drug-calculator.html?drug=Epinephrine%20(Adrenaline)",
                                "icon": "pill"
                            },
                            {
                                "label": "Pediatric drug calculator: diphenhydramine",
                                "sub": "1 mg/kg, maximum 50 mg",
                                "href": "../pages/drug-calculator.html?drug=Diphenhydramine",
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
                    "Adrenaline for anaphylaxis within 5 minutes of recognition."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "2.3 Asthma",
                        "href": "c2.html?section=c2s3"
                    },
                    {
                        "label": "6.11 Non-Traumatic Shock",
                        "href": "c6-11.html"
                    },
                    {
                        "label": "2.1 Airway and Breathing",
                        "href": "c2.html?section=c2s1"
                    },
                    {
                        "label": "8.8 Envenomation",
                        "href": "c8-8.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "What is the first-line drug for anaphylaxis?",
            "options": [
                "Adrenaline IM",
                "Diphenhydramine",
                "Hydrocortisone",
                "Salbutamol"
            ],
            "correct": 0,
            "explanation": "Within 5 minutes of recognition (KPI)."
        },
        {
            "q": "What is the adult IM adrenaline dose?",
            "options": [
                "0.3–0.5 mg (1:1000)",
                "1 mg IV",
                "0.05 mg",
                "5 mg"
            ],
            "correct": 0,
            "explanation": "The adult EpiPen (0.3 mg) is preferred for speed."
        },
        {
            "q": "What is the pediatric IM adrenaline dose?",
            "options": [
                "0.01 mg/kg (maximum 0.3 mg)",
                "0.1 mg/kg",
                "0.5 mg for all",
                "1 mg/kg"
            ],
            "correct": 0,
            "explanation": "Or the pediatric EpiPen 0.15 mg."
        },
        {
            "q": "Where is IM adrenaline given?",
            "options": [
                "Anterolateral thigh",
                "Deltoid",
                "Buttock",
                "Abdomen"
            ],
            "correct": 0,
            "explanation": "As per the CPG."
        },
        {
            "q": "Hypotension persists after adrenaline and a fluid bolus. What next?",
            "options": [
                "Repeat adrenaline (every 5–15 minutes) and continue fluids",
                "Diphenhydramine only",
                "Wait 30 minutes",
                "Stop treatment"
            ],
            "correct": 0,
            "explanation": "Repeat for persistent symptoms."
        },
        {
            "q": "What defines anaphylaxis here?",
            "options": [
                "Two or more organ systems involved, or hypotension",
                "Any hives",
                "Itching alone",
                "Fever"
            ],
            "correct": 0,
            "explanation": "Skin, respiratory, cardiovascular, gastrointestinal."
        },
        {
            "q": "What is the adult diphenhydramine dose in the text?",
            "options": [
                "25–50 mg IV/IM/PO",
                "200 mg",
                "5 mg",
                "1 g"
            ],
            "correct": 0,
            "explanation": "The flowchart gives 1 mg/kg, maximum 50 mg."
        },
        {
            "q": "What is the adult hydrocortisone dose in the text?",
            "options": [
                "100–200 mg IV/IM",
                "10 mg",
                "1 g",
                "500 mg"
            ],
            "correct": 0,
            "explanation": "The flowchart gives 100 mg."
        },
        {
            "q": "In anaphylaxis, when is hydrocortisone given?",
            "options": [
                "After adrenaline",
                "Before adrenaline",
                "Instead of adrenaline",
                "Never"
            ],
            "correct": 0,
            "explanation": "Adrenaline comes first."
        },
        {
            "q": "How often may adrenaline be repeated?",
            "options": [
                "Every 5–15 minutes as needed",
                "Once only",
                "Every hour",
                "Every minute"
            ],
            "correct": 0,
            "explanation": "For persistent symptoms."
        },
        {
            "q": "Stridor and a swollen tongue after peanuts. What first?",
            "options": [
                "IM adrenaline",
                "Diphenhydramine",
                "IV fluid",
                "Hydrocortisone"
            ],
            "correct": 0,
            "explanation": "Low threshold for adrenaline with airway edema."
        },
        {
            "q": "What is the oxygen target?",
            "options": [
                "SpO₂ ≥94% if hypoxic or distressed",
                "100% always",
                "88–92%",
                "None"
            ],
            "correct": 0,
            "explanation": "Titrate oxygen."
        },
        {
            "q": "How is adrenaline used in known cardiovascular disease?",
            "options": [
                "With caution; consult Telemedicine if needed",
                "Never",
                "Only IV",
                "At double dose"
            ],
            "correct": 0,
            "explanation": "As per the safety considerations."
        },
        {
            "q": "Localized hives only, no systemic symptoms. Management?",
            "options": [
                "No routine treatment; recommend transport and reassess",
                "IM adrenaline",
                "IV fluids",
                "Intubation"
            ],
            "correct": 0,
            "explanation": "A mild reaction."
        },
        {
            "q": "What is the adult salbutamol dose in the text?",
            "options": [
                "2.5–5 mg nebulized",
                "20 mg",
                "0.5 mg",
                "100 mg"
            ],
            "correct": 0,
            "explanation": "The flowchart gives 5 mg."
        },
        {
            "q": "When are IV fluids given?",
            "options": [
                "Shock or dehydration",
                "Hives only",
                "Itching only",
                "Never"
            ],
            "correct": 0,
            "explanation": "Prioritise adrenaline and fluid in anaphylactic shock."
        },
        {
            "q": "What is the pediatric fluid bolus in the text?",
            "options": [
                "20 mL/kg",
                "5 mL/kg only",
                "40 mL/kg",
                "None"
            ],
            "correct": 0,
            "explanation": "The flowchart gives 5–20 mL/kg."
        },
        {
            "q": "What is the pediatric diphenhydramine maximum?",
            "options": [
                "50 mg",
                "5 mg",
                "100 mg",
                "200 mg"
            ],
            "correct": 0,
            "explanation": "1 mg/kg, maximum 50 mg."
        },
        {
            "q": "Respiratory distress persists after adrenaline. What applies?",
            "options": [
                "Repeat adrenaline, bronchodilators, and prepare for airway management",
                "Nothing",
                "Antihistamine only",
                "Sit and wait"
            ],
            "correct": 0,
            "explanation": "Invasive airway may be needed; transfer rapidly."
        },
        {
            "q": "What is the Combivent dose?",
            "options": [
                "0.5 mg ipratropium + 3 mg salbutamol, adults only",
                "Same in children",
                "1 mg ipratropium",
                "Not used"
            ],
            "correct": 0,
            "explanation": "Not recommended for children."
        },
        {
            "q": "Which is NOT a feature of anaphylaxis listed here?",
            "options": [
                "Fever",
                "Wheeze",
                "Hypotension",
                "Angioedema"
            ],
            "correct": 0,
            "explanation": "Fever is not listed."
        },
        {
            "q": "The adult EpiPen dose is…",
            "options": [
                "0.3 mg",
                "0.15 mg",
                "1 mg",
                "0.05 mg"
            ],
            "correct": 0,
            "explanation": "The pediatric EpiPen is 0.15 mg."
        },
        {
            "q": "Who must be told about significant airway edema not improving?",
            "options": [
                "Dispatch 2",
                "Nobody",
                "The police",
                "The family only"
            ],
            "correct": 0,
            "explanation": "Inform Dispatch 2."
        },
        {
            "q": "Hives, abdominal pain and wheeze after peanuts. What is it and what first?",
            "options": [
                "Anaphylaxis: IM adrenaline",
                "Mild reaction: observe",
                "Gastroenteritis",
                "Asthma only"
            ],
            "correct": 0,
            "explanation": "Two or more systems involved."
        },
        {
            "q": "What level gives IM adrenaline?",
            "options": [
                "EMT",
                "P only",
                "AP only",
                "EP only"
            ],
            "correct": 0,
            "explanation": "IM adrenaline and fluids are EMT."
        },
        {
            "q": "What level gives IV hydrocortisone?",
            "options": [
                "EMT-A",
                "EMR",
                "ER",
                "Bystander"
            ],
            "correct": 0,
            "explanation": "IM hydrocortisone is EMT; IV is EMT-A."
        },
        {
            "q": "What is the pediatric salbutamol dose in the text?",
            "options": [
                "2.5 mg under 20 kg, 5 mg at 20 kg or more",
                "10 mg for all",
                "0.5 mg",
                "Not given"
            ],
            "correct": 0,
            "explanation": "The flowchart uses age (<5 or >5 years)."
        },
        {
            "q": "How might anaphylaxis present in the elderly?",
            "options": [
                "Hypotension without skin signs",
                "Always with hives",
                "Only with fever",
                "Never"
            ],
            "correct": 0,
            "explanation": "Atypical presentation."
        },
        {
            "q": "What is the pediatric hydrocortisone dose?",
            "options": [
                "2 mg/kg IV/IM (maximum 200 mg)",
                "20 mg/kg",
                "0.2 mg/kg",
                "500 mg"
            ],
            "correct": 0,
            "explanation": "The flowchart does not state a maximum."
        },
        {
            "q": "What is the KPI?",
            "options": [
                "Adrenaline within 5 minutes of recognising anaphylaxis",
                "Hydrocortisone within 30 minutes",
                "Fluids in all",
                "Transport within 1 hour"
            ],
            "correct": 0,
            "explanation": "A single KPI."
        }
    ],
    "flashcards": [
        {
            "question": "Anaphylaxis",
            "answer": "Systemic reaction involving two or more organ systems, or hypotension."
        },
        {
            "question": "First-line treatment",
            "answer": "IM adrenaline (EMT), within 5 minutes."
        },
        {
            "question": "Adult adrenaline",
            "answer": "0.3–0.5 mg IM (1:1000), anterolateral thigh; adult EpiPen 0.3 mg; repeat every 5–15 minutes."
        },
        {
            "question": "Pediatric adrenaline",
            "answer": "0.01 mg/kg IM (maximum 0.3 mg); pediatric EpiPen 0.15 mg; repeat every 5–15 minutes."
        },
        {
            "question": "Diphenhydramine",
            "answer": "Adult 25–50 mg IV/IM/PO; child 1 mg/kg (maximum 50 mg)."
        },
        {
            "question": "Hydrocortisone",
            "answer": "Adult 100–200 mg IV/IM; child 2 mg/kg (maximum 200 mg); after adrenaline in anaphylaxis."
        },
        {
            "question": "Hydrocortisone levels",
            "answer": "IM: EMT; IV: EMT-A."
        },
        {
            "question": "Salbutamol",
            "answer": "Adult 2.5–5 mg; child 2.5 mg (<20 kg) or 5 mg (≥20 kg); dilute to 5 mL maximum."
        },
        {
            "question": "Combivent",
            "answer": "Adults only: 0.5 mg ipratropium + 3 mg salbutamol."
        },
        {
            "question": "Fluid bolus",
            "answer": "Adult 500–1000 mL; child 20 mL/kg; NS or RL; reassess."
        },
        {
            "question": "Mild reaction",
            "answer": "No routine treatment; recommend transport; reassess en route."
        },
        {
            "question": "Oxygen",
            "answer": "If hypoxic or distressed: SpO₂ ≥94%."
        },
        {
            "question": "Red flags",
            "answer": "Progressing respiratory distress or obstruction; SBP <90; altered mental status; worsening angioedema; history of severe anaphylaxis."
        },
        {
            "question": "Airway edema",
            "answer": "Low threshold for IM adrenaline; rapid transfer; inform Dispatch 2."
        },
        {
            "question": "Cardiovascular disease",
            "answer": "Adrenaline with caution; consult Telemedicine if needed."
        },
        {
            "question": "Elderly",
            "answer": "May present with hypotension without skin signs."
        },
        {
            "question": "Monitoring",
            "answer": "Continuous ECG and SpO₂."
        },
        {
            "question": "IV access",
            "answer": "Hypotension, moderate-severe symptoms, expected drugs; IO if needed."
        },
        {
            "question": "Documentation of adrenaline",
            "answer": "Dose, route, time and number of doses."
        },
        {
            "question": "KPI",
            "answer": "Adrenaline within 5 minutes of recognition."
        },
        {
            "question": "Antihistamines and steroids",
            "answer": "Additions after adrenaline, not substitutes."
        },
        {
            "question": "Exposure history",
            "answer": "Foods, medications, stings, latex, environment; alert bracelets."
        },
        {
            "question": "Poor perfusion",
            "answer": "Cool clammy skin, capillary refill >2 seconds."
        },
        {
            "question": "Severe reaction drugs after adrenaline",
            "answer": "Fluids, diphenhydramine, hydrocortisone, bronchodilators."
        },
        {
            "question": "Nebule dilution",
            "answer": "Up to a maximum volume of 5 mL."
        }
    ],
    "critical": [
        {
            "id": "crit_6_4_1",
            "scenario": "A 35-year-old man ate peanuts and now has hives, a swollen tongue and difficulty breathing. BP 100/70, SpO₂ 91%.",
            "question": "What first?",
            "options": [
                {
                    "t": "Adrenaline 0.3–0.5 mg IM (adult EpiPen) in the thigh, oxygen",
                    "f": "Correct."
                },
                {
                    "t": "Diphenhydramine first",
                    "f": "Adrenaline comes first in anaphylaxis."
                },
                {
                    "t": "Hydrocortisone first",
                    "f": "Give it after adrenaline."
                },
                {
                    "t": "Observe",
                    "f": "Airway edema: low threshold for adrenaline."
                }
            ],
            "correct": 0,
            "explanation": "Two systems involved with airway edema: anaphylaxis. Adrenaline within 5 minutes.",
            "kpi": "Adrenaline within 5 minutes of recognition."
        },
        {
            "id": "crit_6_4_2",
            "scenario": "A woman stung by a wasp received adrenaline 0.3 mg IM. Five minutes later BP is 85/55 and the wheeze persists.",
            "question": "What next?",
            "options": [
                {
                    "t": "Repeat adrenaline IM, fluid bolus 500–1000 mL, salbutamol",
                    "f": "Correct."
                },
                {
                    "t": "Wait 30 minutes",
                    "f": "Repeat every 5–15 minutes as needed."
                },
                {
                    "t": "Antihistamine only",
                    "f": "Not enough for persistent shock."
                },
                {
                    "t": "Stop: adrenaline failed",
                    "f": "Repeat it."
                }
            ],
            "correct": 0,
            "explanation": "Persistent symptoms: repeat adrenaline, treat shock with fluids, treat bronchospasm.",
            "kpi": "Adrenaline within 5 minutes of recognition."
        },
        {
            "id": "crit_6_4_3",
            "scenario": "A 6-year-old (22 kg) with peanut allergy has lip swelling, hives and stridor.",
            "question": "Which adrenaline dose?",
            "options": [
                {
                    "t": "Pediatric EpiPen 0.15 mg, or 0.01 mg/kg IM (maximum 0.3 mg)",
                    "f": "Correct."
                },
                {
                    "t": "0.5 mg IM",
                    "f": "Above the pediatric maximum."
                },
                {
                    "t": "0.1 mg/kg IM",
                    "f": "Ten times the dose."
                },
                {
                    "t": "Diphenhydramine only",
                    "f": "Stridor means anaphylaxis."
                }
            ],
            "correct": 0,
            "explanation": "Use the drug calculator for weight-based dosing; repeat every 5–15 minutes as needed.",
            "kpi": "Adrenaline within 5 minutes of recognition."
        },
        {
            "id": "crit_6_4_4",
            "scenario": "After adrenaline a patient improved, but 10 minutes later en route he is wheezy again with BP 80/50.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Repeat adrenaline IM, fluids and bronchodilator; continuous monitoring",
                    "f": "Correct. Deterioration: repeat adrenaline."
                },
                {
                    "t": "Hydrocortisone instead of adrenaline",
                    "f": "Adrenaline first."
                },
                {
                    "t": "Nothing: it will settle",
                    "f": "He is deteriorating."
                },
                {
                    "t": "IV adrenaline 1 mg",
                    "f": "This is IM 1:1000 dosing."
                }
            ],
            "correct": 0,
            "explanation": "If deterioration: repeat adrenaline (flowchart).",
            "kpi": "Adrenaline within 5 minutes of recognition."
        },
        {
            "id": "crit_6_4_5",
            "scenario": "A 70-year-old man with coronary artery disease has hives, stridor and BP 85/55 after a bee sting.",
            "question": "Do you withhold adrenaline?",
            "options": [
                {
                    "t": "No: give IM adrenaline with caution and consult Telemedicine if needed",
                    "f": "Correct. This is life-threatening anaphylaxis."
                },
                {
                    "t": "Yes: cardiac disease is a contraindication",
                    "f": "It calls for caution, not withholding."
                },
                {
                    "t": "Give IV adrenaline 1 mg",
                    "f": "Not the anaphylaxis dose."
                },
                {
                    "t": "Antihistamine only",
                    "f": "Insufficient."
                }
            ],
            "correct": 0,
            "explanation": "Use caution with adrenaline in known cardiovascular disease, but treat anaphylaxis.",
            "kpi": "Adrenaline within 5 minutes of recognition."
        }
    ]
};
