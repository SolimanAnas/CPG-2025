/* ========== CPG 8.5 – Organophosphate Poisoning ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c8-5",
    "title": "Organophosphate Poisoning",
    "shortTitle": "8.5 Organophosphate Poisoning",
    "guide": {
        "cpg": "8.5",
        "group": "environmental",
        "groupLabel": "Toxicology",
        "title": "Organophosphate Poisoning",
        "lead": "Protect yourself first: PPE, and decontaminate before contact. Organophosphates kill by drowning the lungs in secretions and causing respiratory failure, so suction, oxygenate, and give atropine early, doubling the dose until the chest is dry (not until the heart rate is normal). Request ALS within 5 minutes, and prioritise transport.",
        "source": {
            "label": "CPG 8.5",
            "pages": "263–267",
            "pdf": "../pdf_sections/8_5_Organophosphate_Poisoning.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Organophosphate exposure by inhalation (spraying, fumigation, enclosed space), ingestion, or skin contact.",
                    "Cholinergic signs; occupational or environmental exposure; patient found in a contaminated area with foam, bradycardia or secretions."
                ],
                "exclude": [
                    "Non-organophosphate toxin without cholinergic signs.",
                    "Isolated skin or eye irritation without systemic symptoms.",
                    "HazMat-level decontamination or chemical warfare agents beyond EMS capability.",
                    "A clear alternative diagnosis with no suspected exposure."
                ]
            },
            {
                "type": "groups",
                "title": "Recognise it",
                "icon": "search",
                "groups": [
                    {
                        "title": "Scene clues",
                        "items": [
                            "Pesticide containers, sprayers, farm equipment.",
                            "Garlic- or petroleum-like smell.",
                            "Several patients at once; agricultural, pest-control or industrial setting."
                        ]
                    },
                    {
                        "title": "History",
                        "items": [
                            "Recent insecticide, rodenticide or nerve agent use; intentional ingestion."
                        ]
                    },
                    {
                        "title": "Cholinergic signs",
                        "items": [
                            "SLUDGE: salivation, lacrimation, urination, defecation, GI distress, emesis; profuse sweating.",
                            "Pinpoint pupils (hallmark); muscle twitching, fasciculations, seizures.",
                            "Cough, wheeze, bronchorrhea (wet lungs), silent chest; RR fast early, then slow with fatigue.",
                            "Bradycardia, often severe; hypotension late."
                        ]
                    }
                ]
            },
            {
                "type": "steps",
                "title": "Management",
                "icon": "list",
                "steps": [
                    {
                        "title": "Scene safety and PPE",
                        "text": "Gloves, mask, eye protection, gown or coverall. Consider withdrawing and requesting Civil Defense for decontamination."
                    },
                    {
                        "title": "Decontaminate",
                        "text": "Move the patient from the source; remove clothing carefully and seal it in a plastic bag; irrigate skin and eyes with water or saline. Don't contaminate the ambulance or crew."
                    },
                    {
                        "title": "ALS back-up",
                        "text": "Within 5 minutes for respiratory distress, bradycardia, secretions, altered consciousness or seizures. Consider a second ALS unit for the large atropine doses; Tele-EMS if ALS unavailable."
                    },
                    {
                        "title": "Airway and breathing",
                        "text": "Suction bronchorrhea; high-flow oxygen by NRB or BVM; ventilate if inadequate; recovery position if unresponsive or vomiting. Expect rapid respiratory failure."
                    },
                    {
                        "title": "Monitor",
                        "text": "Heart rate and rhythm (bradycardia, blocks); serial ECGs if compliant; glucose with altered mental status."
                    },
                    {
                        "title": "IV access and fluid for hypotension",
                        "level": "EMT",
                        "text": "Reassess after each bolus; avoid overload if pulmonary edema.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "250–500 mL NS",
                                "level": "EMT"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "10–20 mL/kg NS",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Atropine",
                        "level": "EMT-A",
                        "text": "For symptomatic bradycardia, bronchial secretions or respiratory distress. Do not delay. Titrate to a dry chest and better ventilation, not to heart rate."
                    }
                ]
            },
            {
                "type": "table",
                "title": "Atropine (EMT-A)",
                "icon": "syringe",
                "columns": [
                    "",
                    "Dose",
                    "Repeat"
                ],
                "rows": [
                    [
                        "Adult",
                        "2 mg IV/IO/IM first dose",
                        "Then 4 mg, 8 mg, 16 mg: every 5 minutes until improvement (flowchart: 4/6/8 mg every 3–5 minutes)"
                    ],
                    [
                        "Pediatric",
                        "0.02 mg/kg IV/IO/IM (minimum 0.1 mg; maximum single dose 0.5 mg)",
                        "Every 5 minutes (flowchart: 0.02–0.05 mg/kg every 3–5 minutes)"
                    ]
                ],
                "notes": [
                    "Doses will likely exceed the ambulance's supply: prioritise transport.",
                    "Atropine does not reverse muscle weakness or paralysis (nicotinic effects)."
                ]
            },
            {
                "type": "groups",
                "title": "Safety and pearls",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "Safety",
                        "items": [
                            "No skin contact with clothing or vomit.",
                            "Seal and label contaminated material for handover.",
                            "Suction and BVM ready.",
                            "Symptoms may recur if exposure persists.",
                            "Broselow tape for all pediatric doses."
                        ]
                    },
                    {
                        "title": "Pearls",
                        "items": [
                            "Respiratory failure is the main cause of death: act early.",
                            "Children can be exposed by crawling on treated surfaces.",
                            "Never withhold transport from a symptomatic patient.",
                            "Several cases: suspect mass exposure and notify authorities."
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
                        "title": "Rhythm",
                        "items": [
                            {
                                "ecg": "sbrady",
                                "label": "Sinus bradycardia",
                                "sub": "Common, but treat the secretions, not the rate"
                            }
                        ]
                    },
                    {
                        "title": "Tools",
                        "items": [
                            {
                                "label": "Pediatric drug calculator: atropine",
                                "sub": "0.02 mg/kg",
                                "href": "../pages/drug-calculator.html?drug=Atropine",
                                "icon": "pill"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "list",
                "title": "Key performance indicators",
                "icon": "chart-no-axes-column",
                "items": [
                    "ALS back-up requested within 5 minutes for symptomatic patients.",
                    "Atropine for bronchial secretions or bradycardia."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "8.1 General Toxicology",
                        "href": "c8-1.html"
                    },
                    {
                        "label": "2.1 Airway and Breathing",
                        "href": "c2.html?section=c2s1"
                    },
                    {
                        "label": "5.2 Seizures",
                        "href": "c5-2.html"
                    },
                    {
                        "label": "11.1 START Triage",
                        "href": "c11-1.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "Which drug treats symptomatic organophosphate poisoning?",
            "options": [
                "Atropine",
                "Naloxone",
                "Glucagon",
                "Adrenaline"
            ],
            "correct": 0,
            "explanation": "EMT-A level."
        },
        {
            "q": "What is the first adult atropine dose?",
            "options": [
                "2 mg",
                "0.5 mg",
                "1 mg",
                "10 mg"
            ],
            "correct": 0,
            "explanation": "Then double: 4, 8, 16 mg."
        },
        {
            "q": "What is the atropine endpoint?",
            "options": [
                "A dry chest and better ventilation",
                "HR above 100",
                "Dilated pupils",
                "BP 120"
            ],
            "correct": 0,
            "explanation": "Not heart rate."
        },
        {
            "q": "What is the pediatric atropine dose in the text?",
            "options": [
                "0.02 mg/kg (min 0.1 mg, max 0.5 mg per dose)",
                "1 mg",
                "0.5 mg/kg",
                "2 mg"
            ],
            "correct": 0,
            "explanation": "Flowchart: 0.02–0.05 mg/kg."
        },
        {
            "q": "What PPE is needed?",
            "options": [
                "Gloves, mask, eye protection, gown or coverall",
                "Gloves only",
                "None",
                "Mask only"
            ],
            "correct": 0,
            "explanation": "Before patient contact."
        },
        {
            "q": "Which signs are cholinergic?",
            "options": [
                "Salivation, lacrimation, urination, defecation",
                "Dry skin",
                "Dilated pupils",
                "Constipation"
            ],
            "correct": 0,
            "explanation": "SLUDGE."
        },
        {
            "q": "After 2 mg, HR is 60 but the chest is still wet. What next?",
            "options": [
                "4 mg atropine",
                "Stop: HR is fine",
                "Naloxone",
                "Fluids only"
            ],
            "correct": 0,
            "explanation": "Titrate to secretions."
        },
        {
            "q": "What is the adult dose sequence in the text?",
            "options": [
                "2, 4, 8, 16 mg",
                "1, 1, 1 mg",
                "2 mg once",
                "0.5 mg increments"
            ],
            "correct": 0,
            "explanation": "The flowchart prints 4/6/8 mg."
        },
        {
            "q": "What is the main cause of death?",
            "options": [
                "Respiratory failure",
                "Hypertension",
                "Hyperthermia",
                "Bleeding"
            ],
            "correct": 0,
            "explanation": "Act early."
        },
        {
            "q": "How is contaminated clothing handled?",
            "options": [
                "Removed carefully and sealed in a plastic bag",
                "Left on",
                "Burnt on scene",
                "Washed in the ambulance"
            ],
            "correct": 0,
            "explanation": "Avoid contaminating the ambulance."
        },
        {
            "q": "What is the pediatric maximum single dose?",
            "options": [
                "0.5 mg",
                "2 mg",
                "0.1 mg",
                "No maximum"
            ],
            "correct": 0,
            "explanation": "Minimum 0.1 mg."
        },
        {
            "q": "RR 8 and cyanosis. What first?",
            "options": [
                "Suction and BVM ventilation with oxygen",
                "Atropine only",
                "Fluids",
                "Decontaminate first and delay ventilation"
            ],
            "correct": 0,
            "explanation": "Prepare for respiratory failure."
        },
        {
            "q": "What does atropine NOT reverse?",
            "options": [
                "Muscle weakness and paralysis",
                "Secretions",
                "Bradycardia",
                "Bronchospasm"
            ],
            "correct": 0,
            "explanation": "Nicotinic effects persist."
        },
        {
            "q": "What is the ALS KPI?",
            "options": [
                "Request within 5 minutes for symptomatic patients",
                "Within 1 hour",
                "Only if unconscious",
                "Never"
            ],
            "correct": 0,
            "explanation": "Consider a second ALS unit."
        },
        {
            "q": "Profuse salivation and vomiting. What is the risk?",
            "options": [
                "Aspiration and airway compromise",
                "Hypertension",
                "Hyperglycemia",
                "Fever"
            ],
            "correct": 0,
            "explanation": "Suction; recovery position."
        },
        {
            "q": "What adult fluid for hypotension?",
            "options": [
                "250–500 mL NS",
                "2000 mL",
                "None",
                "50 mL"
            ],
            "correct": 0,
            "explanation": "Reassess after each bolus."
        },
        {
            "q": "Why might a second ALS unit be needed?",
            "options": [
                "Large atropine doses",
                "For paperwork",
                "To drive",
                "Not needed"
            ],
            "correct": 0,
            "explanation": "Doses will likely exceed supply."
        },
        {
            "q": "A 15 kg child has wet lungs and HR 50. Atropine?",
            "options": [
                "0.02 mg/kg (minimum 0.1 mg, maximum 0.5 mg)",
                "2 mg",
                "None",
                "0.5 mg/kg"
            ],
            "correct": 0,
            "explanation": "Use the Broselow tape or drug calculator."
        },
        {
            "q": "Several farm workers sick at once. What do you suspect?",
            "options": [
                "Mass exposure: notify authorities",
                "Food poisoning only",
                "Coincidence",
                "Heat"
            ],
            "correct": 0,
            "explanation": "Clinical insight."
        },
        {
            "q": "Which pupil finding is the hallmark?",
            "options": [
                "Pinpoint (miosis)",
                "Dilated",
                "Unequal",
                "Normal"
            ],
            "correct": 0,
            "explanation": "With profuse sweating."
        },
        {
            "q": "Muscle fasciculations are a…",
            "options": [
                "Nicotinic effect",
                "Sign of recovery",
                "Atropine side effect",
                "Normal finding"
            ],
            "correct": 0,
            "explanation": "Not reversed by atropine."
        },
        {
            "q": "How often is atropine repeated in the text?",
            "options": [
                "Every 5 minutes until improvement",
                "Every hour",
                "Once only",
                "Every 30 seconds"
            ],
            "correct": 0,
            "explanation": "Flowchart: every 3–5 minutes."
        },
        {
            "q": "What smell may be noticed?",
            "options": [
                "Garlic or petroleum",
                "Bitter almonds only",
                "Roses",
                "None ever"
            ],
            "correct": 0,
            "explanation": "A scene clue."
        },
        {
            "q": "Is there a fixed adult atropine maximum?",
            "options": [
                "No: titrate to a dry chest",
                "3 mg",
                "10 mg",
                "2 mg"
            ],
            "correct": 0,
            "explanation": "Keep doubling until improvement."
        },
        {
            "q": "Why not rely on heart rate?",
            "options": [
                "Bradycardia isn't the best indicator; secretions are",
                "HR is always normal",
                "HR is irrelevant to shock",
                "It is too slow to measure"
            ],
            "correct": 0,
            "explanation": "Focus on secretions and ventilation."
        },
        {
            "q": "How is the unresponsive vomiting patient positioned?",
            "options": [
                "Lateral recovery position",
                "Supine",
                "Prone",
                "Sitting"
            ],
            "correct": 0,
            "explanation": "Protect the airway."
        },
        {
            "q": "Which is excluded?",
            "options": [
                "Skin irritation without systemic symptoms",
                "Farmer with wet lungs",
                "Child after crawling on sprayed grass with drooling",
                "Ingestion with bradycardia"
            ],
            "correct": 0,
            "explanation": "Exclusion criterion."
        },
        {
            "q": "What is the pediatric fluid bolus?",
            "options": [
                "10–20 mL/kg",
                "60 mL/kg",
                "1 mL/kg",
                "None"
            ],
            "correct": 0,
            "explanation": "For hypotension."
        },
        {
            "q": "What do you do if supply runs low?",
            "options": [
                "Prioritise transport",
                "Stop treatment",
                "Use naloxone",
                "Wait on scene"
            ],
            "correct": 0,
            "explanation": "As per the CPG."
        },
        {
            "q": "Are mildly symptomatic patients transported?",
            "options": [
                "Yes: symptoms can worsen rapidly",
                "No",
                "Only children",
                "Only if they ask"
            ],
            "correct": 0,
            "explanation": "Never withhold transport."
        }
    ],
    "flashcards": [
        {
            "question": "Scene clues",
            "answer": "Pesticide containers, sprayers, garlic/petroleum smell, several patients, agricultural setting."
        },
        {
            "question": "Cholinergic signs",
            "answer": "SLUDGE, sweating, pinpoint pupils, fasciculations, bronchorrhea, wheeze, bradycardia."
        },
        {
            "question": "PPE",
            "answer": "Gloves, mask, eye protection, gown or coverall."
        },
        {
            "question": "Decontamination",
            "answer": "Remove from source; bag clothing; irrigate skin and eyes; Civil Defense for formal decon."
        },
        {
            "question": "ALS",
            "answer": "Within 5 minutes for symptomatic patients; consider a second unit."
        },
        {
            "question": "Airway",
            "answer": "Suction, high-flow O₂, BVM if inadequate, recovery position."
        },
        {
            "question": "Adult atropine",
            "answer": "2 mg, then 4, 8, 16 mg every 5 minutes (EMT-A)."
        },
        {
            "question": "Pediatric atropine",
            "answer": "0.02 mg/kg, min 0.1 mg, max 0.5 mg per dose, every 5 minutes."
        },
        {
            "question": "Atropine endpoint",
            "answer": "Dry chest and better ventilation, not heart rate."
        },
        {
            "question": "Atropine indications",
            "answer": "Symptomatic bradycardia, bronchial secretions, respiratory distress."
        },
        {
            "question": "Fluid",
            "answer": "Adult 250–500 mL; child 10–20 mL/kg; for hypotension."
        },
        {
            "question": "Main cause of death",
            "answer": "Respiratory failure."
        },
        {
            "question": "Nicotinic effects",
            "answer": "Fasciculations, weakness, paralysis: not reversed by atropine."
        },
        {
            "question": "Supply",
            "answer": "Doses exceed ambulance stock: prioritise transport."
        },
        {
            "question": "Children",
            "answer": "Exposure from crawling on treated surfaces; Broselow tape."
        },
        {
            "question": "Recurrence",
            "answer": "Symptoms may return if exposure persists."
        },
        {
            "question": "Mass exposure",
            "answer": "Several cases: notify authorities early."
        },
        {
            "question": "Glucose",
            "answer": "Check with altered mental status."
        },
        {
            "question": "Transport",
            "answer": "Never withhold from a symptomatic patient."
        },
        {
            "question": "KPIs",
            "answer": "ALS within 5 minutes; atropine for secretions or bradycardia."
        }
    ],
    "critical": [
        {
            "id": "crit_8_5_1",
            "scenario": "A farmer who sprayed pesticide in a closed barn is drooling and wheezing with pinpoint pupils.",
            "question": "What first?",
            "options": [
                {
                    "t": "PPE, remove him from the source, decontaminate, ALS, suction, oxygen, atropine 2 mg",
                    "f": "Correct."
                },
                {
                    "t": "Treat without PPE to save time",
                    "f": "Protect the crew first."
                },
                {
                    "t": "Naloxone",
                    "f": "This is cholinergic, not opioid."
                },
                {
                    "t": "Wait for HazMat before any care",
                    "f": "Withdraw if needed, but treat once safe."
                }
            ],
            "correct": 0,
            "explanation": "Scene safety, then airway and atropine.",
            "kpi": "ALS within 5 minutes; atropine for secretions."
        },
        {
            "id": "crit_8_5_2",
            "scenario": "After atropine 2 mg, a patient's HR is 70 but his lungs are still wet and SpO₂ 86%.",
            "question": "What next?",
            "options": [
                {
                    "t": "Double the dose to 4 mg and keep titrating to a dry chest; suction; oxygen",
                    "f": "Correct."
                },
                {
                    "t": "Stop: the heart rate is normal",
                    "f": "Titrate to secretions, not HR."
                },
                {
                    "t": "2 mg again and wait 30 minutes",
                    "f": "Repeat every 5 minutes, doubling."
                },
                {
                    "t": "Fluids only",
                    "f": "Atropine."
                }
            ],
            "correct": 0,
            "explanation": "Atropine should be titrated until the lungs are dry.",
            "kpi": "Atropine for bronchial secretions or bradycardia."
        },
        {
            "id": "crit_8_5_3",
            "scenario": "A toddler was crawling on a freshly sprayed lawn: drooling, sweating, HR 70, wheezing.",
            "question": "What do you give?",
            "options": [
                {
                    "t": "PPE, decontaminate, oxygen, atropine 0.02 mg/kg (min 0.1, max 0.5 mg), transport",
                    "f": "Correct."
                },
                {
                    "t": "Adult 2 mg",
                    "f": "Weight-based."
                },
                {
                    "t": "No atropine in children",
                    "f": "Pediatric dosing exists."
                },
                {
                    "t": "Observe at home",
                    "f": "Symptomatic: transport."
                }
            ],
            "correct": 0,
            "explanation": "Use the Broselow tape.",
            "kpi": "Atropine for bronchial secretions or bradycardia."
        },
        {
            "id": "crit_8_5_4",
            "scenario": "A man found near a sprayer is unconscious with profuse secretions, HR 40, BP 70/50, RR 8.",
            "ecg": "sbrady",
            "question": "What is the priority?",
            "options": [
                {
                    "t": "Suction and BVM with oxygen, atropine 2 mg and escalate, fluid bolus, ALS, rapid transport",
                    "f": "Correct."
                },
                {
                    "t": "Fluids only",
                    "f": "Airway and atropine first."
                },
                {
                    "t": "Pacing",
                    "f": "Treat the cholinergic toxicity."
                },
                {
                    "t": "Wait for a second unit before acting",
                    "f": "Act now."
                }
            ],
            "correct": 0,
            "explanation": "Respiratory failure is the main killer.",
            "kpi": "ALS within 5 minutes."
        },
        {
            "id": "crit_8_5_5",
            "scenario": "Secretions have dried after atropine, but the patient is now very weak and breathing shallowly.",
            "question": "What does this mean?",
            "options": [
                {
                    "t": "Nicotinic weakness not reversed by atropine: support ventilation",
                    "f": "Correct."
                },
                {
                    "t": "Give more atropine for weakness",
                    "f": "Atropine doesn't reverse nicotinic effects."
                },
                {
                    "t": "He is recovering",
                    "f": "Respiratory fatigue is dangerous."
                },
                {
                    "t": "Stop monitoring",
                    "f": "Continue."
                }
            ],
            "correct": 0,
            "explanation": "Be ready for ventilatory failure.",
            "kpi": "ALS within 5 minutes."
        }
    ]
};
