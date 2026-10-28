/* ========== CPG 8.4 – Calcium Channel Blocker Overdose ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c8-4",
    "title": "Calcium Channel Blocker Overdose",
    "shortTitle": "8.4 Calcium Channel Blocker Overdose",
    "guide": {
        "cpg": "8.4",
        "group": "environmental",
        "groupLabel": "Toxicology",
        "title": "Calcium Channel Blocker Overdose",
        "lead": "CCB overdose causes bradycardia, vasodilation and shock, often with hyperglycemia, and can deteriorate late. Support ABC with ECG monitoring and escalate step by step: fluid, atropine, adrenaline, glucagon, pacing. Transport symptomatic patients rapidly. A single tablet can be dangerous in a child.",
        "source": {
            "label": "CPG 8.4",
            "pages": "259–262",
            "pdf": "../pdf_sections/8_4_Calcium_Channel_Blocker_Overdose.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Ingestion of CCBs (verapamil, diltiazem, amlodipine, nifedipine) above therapeutic doses, intentional or accidental (e.g. children).",
                    "Bradycardia, hypotension, heart block or shock; altered mental status, hyperglycemia, seizures, nausea or vomiting, metabolic acidosis."
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
                            "Which CCB, immediate or sustained release, time and amount, co-ingestants (beta-blockers, digoxin)."
                        ]
                    },
                    {
                        "title": "Monitoring",
                        "items": [
                            "Continuous ECG and 12-lead for bradycardia and arrhythmias.",
                            "Blood glucose: hyperglycemia is common in CCB toxicity."
                        ]
                    },
                    {
                        "title": "Which CCB",
                        "items": [
                            "Verapamil and diltiazem: more cardiotoxic, bradycardia.",
                            "Dihydropyridines (amlodipine): vasodilation and reflex tachycardia at first."
                        ]
                    },
                    {
                        "title": "Triage",
                        "items": [
                            "Moderate bradycardia or arrhythmias after a CCB overdose: Red priority."
                        ]
                    }
                ]
            },
            {
                "type": "steps",
                "title": "Step-up management",
                "icon": "list",
                "steps": [
                    {
                        "title": "ABC and monitoring",
                        "text": "SpO<sub>2</sub> 94–98%, EtCO<sub>2</sub>, IV (IO if needed), 12-lead and continuous ECG. Consider ALS back-up."
                    },
                    {
                        "title": "Shock: fluid",
                        "level": "EMT",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "500 mL bolus, repeat, maximum 2000 mL",
                                "level": "EMT"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "20 mL/kg, repeat, maximum 80 mL/kg",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Symptomatic bradycardia: atropine",
                        "level": "EMT-A",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "0.5–1 mg IV/IO every 3–5 minutes (maximum 3 mg)",
                                "note": "Flowchart: 1 mg",
                                "level": "EMT-A"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "0.02 mg/kg (maximum 0.5 mg per dose) every 3–5 minutes (maximum 1 mg)",
                                "level": "EMT-A"
                            }
                        ]
                    },
                    {
                        "title": "Refractory: IV adrenaline",
                        "level": "AP",
                        "text": "Hypotension after adequate fluid (flowchart: also bradycardia refractory to atropine). Syringe driver preferred.",
                        "doses": [
                            {
                                "drug": "Push dose, adult",
                                "dose": "0.1 mg IV/IO",
                                "note": "The Adult Bradycardia CPG gives a ten-fold smaller push dose: confirm",
                                "level": "AP"
                            },
                            {
                                "drug": "Push dose, pediatric",
                                "dose": "0.01 mg/kg IV/IO",
                                "note": "Flowchart: 0.001 mg/kg, a ten-fold difference",
                                "level": "AP"
                            },
                            {
                                "drug": "Infusion",
                                "dose": "0.05–0.3 mcg/kg/min",
                                "level": "AP"
                            }
                        ]
                    },
                    {
                        "title": "Still hypotensive: glucagon",
                        "level": "EMT",
                        "text": "Doses as in the table; it may cause vomiting."
                    },
                    {
                        "title": "Ongoing symptomatic bradycardia: pacing",
                        "text": "Transcutaneous pacing if refractory to drugs."
                    },
                    {
                        "title": "Transport",
                        "text": "Rapid for symptomatic patients; sustained-release tablets can deteriorate late."
                    }
                ]
            },
            {
                "type": "table",
                "title": "Glucagon",
                "icon": "syringe",
                "columns": [
                    "",
                    "IV (if available)",
                    "IM"
                ],
                "rows": [
                    [
                        "Adult",
                        "5 mg IV push, then 1 mg every 5 minutes (5–15 mg may be needed)",
                        "1 mg; up to 5 mg at different sites if available; repeat every 10–15 minutes"
                    ],
                    [
                        "Child 25–40 kg",
                        "1 mg IV every 5 minutes as required",
                        "&gt;20 kg: 1 mg (flowchart &gt;25 kg)"
                    ],
                    [
                        "Child &lt;25 kg",
                        "0.5 mg IV every 5 minutes as required",
                        "&lt;20 kg: 0.5 mg (flowchart &lt;25 kg)"
                    ]
                ],
                "stack": true
            },
            {
                "type": "tools",
                "title": "Practise with the app",
                "icon": "monitor",
                "groups": [
                    {
                        "title": "Rhythms",
                        "items": [
                            {
                                "ecg": "chb",
                                "label": "Complete heart block",
                                "sub": "Verapamil or diltiazem toxicity"
                            },
                            {
                                "ecg": "stach",
                                "label": "Sinus tachycardia",
                                "sub": "Amlodipine: reflex tachycardia with hypotension"
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
                            },
                            {
                                "label": "Pediatric drug calculator: glucagon",
                                "sub": "0.5 or 1 mg",
                                "href": "../pages/drug-calculator.html?drug=Glucagon",
                                "icon": "pill"
                            },
                            {
                                "label": "Pacing practice",
                                "sub": "Defibrillator and pacing simulator",
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
                    "Substance, route, amount and time of ingestion investigated and documented."
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
                        "label": "8.3 Beta-Blocker Overdose",
                        "href": "c8-3.html"
                    },
                    {
                        "label": "3.2 Adult Bradycardia",
                        "href": "c3-2.html"
                    },
                    {
                        "label": "6.11 Non-Traumatic Shock",
                        "href": "c6-11.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "Which drug is used first for symptomatic bradycardia?",
            "options": [
                "Atropine",
                "Calcium",
                "Glucagon",
                "Insulin"
            ],
            "correct": 0,
            "explanation": "EMT-A level."
        },
        {
            "q": "What adult atropine dose does the text give?",
            "options": [
                "0.5–1 mg every 3–5 minutes, maximum 3 mg",
                "2 mg once",
                "0.1 mg",
                "5 mg"
            ],
            "correct": 0,
            "explanation": "The flowchart gives 1 mg."
        },
        {
            "q": "Hypotension persists after adequate fluid. What next?",
            "options": [
                "IV adrenaline (AP)",
                "Glucagon first",
                "Stop",
                "Oral fluids"
            ],
            "correct": 0,
            "explanation": "Then glucagon, then pacing."
        },
        {
            "q": "What is the adult IV glucagon regimen?",
            "options": [
                "5 mg IV push, then 1 mg every 5 minutes",
                "1 mg once",
                "50 mg",
                "0.1 mg/kg"
            ],
            "correct": 0,
            "explanation": "5–15 mg may be needed."
        },
        {
            "q": "What IM glucagon dose for a child under 20 kg (text)?",
            "options": [
                "0.5 mg",
                "5 mg",
                "0.05 mg",
                "2 mg"
            ],
            "correct": 0,
            "explanation": "The flowchart uses 25 kg."
        },
        {
            "q": "What ECG is expected with verapamil or diltiazem?",
            "options": [
                "Bradycardia and AV block",
                "Reflex tachycardia only",
                "Delta waves",
                "Peaked T waves"
            ],
            "correct": 0,
            "explanation": "They are the more cardiotoxic CCBs."
        },
        {
            "q": "Amlodipine overdose with hypotension and tachycardia. Why?",
            "options": [
                "Vasodilation with reflex tachycardia",
                "Opioid effect",
                "Sepsis",
                "Anxiety only"
            ],
            "correct": 0,
            "explanation": "Dihydropyridines cause vasodilation first."
        },
        {
            "q": "What is the adult atropine maximum?",
            "options": [
                "3 mg",
                "1 mg",
                "10 mg",
                "0.5 mg"
            ],
            "correct": 0,
            "explanation": "Every 3–5 minutes."
        },
        {
            "q": "What is the adult fluid bolus?",
            "options": [
                "500 mL, maximum 2000 mL",
                "100 mL",
                "5 L",
                "None"
            ],
            "correct": 0,
            "explanation": "For signs of shock."
        },
        {
            "q": "Which glucose finding is common?",
            "options": [
                "Hyperglycemia",
                "Hypoglycemia always",
                "Normal always",
                "Not checked"
            ],
            "correct": 0,
            "explanation": "Check blood glucose."
        },
        {
            "q": "What is the pediatric fluid bolus?",
            "options": [
                "20 mL/kg, maximum 80 mL/kg",
                "5 mL/kg",
                "40 mL/kg once",
                "None"
            ],
            "correct": 0,
            "explanation": "As per this CPG."
        },
        {
            "q": "Which CCBs are more cardiotoxic?",
            "options": [
                "Verapamil and diltiazem",
                "Amlodipine and nifedipine",
                "All equally",
                "None"
            ],
            "correct": 0,
            "explanation": "Clinical insight."
        },
        {
            "q": "HR 35, BP 70/40, atropine ineffective. Next?",
            "options": [
                "IV adrenaline, then glucagon, then pacing",
                "Discharge",
                "More atropine beyond 3 mg",
                "Wait"
            ],
            "correct": 0,
            "explanation": "Step up."
        },
        {
            "q": "What is the adrenaline infusion dose?",
            "options": [
                "0.05–0.3 mcg/kg/min",
                "2–10 mg/min",
                "5 mcg/kg/min fixed",
                "1 mg/hour"
            ],
            "correct": 0,
            "explanation": "Syringe driver preferred."
        },
        {
            "q": "What adult push dose does this CPG list?",
            "options": [
                "0.1 mg",
                "1 mg",
                "10 mg",
                "0.5 mg IM"
            ],
            "correct": 0,
            "explanation": "The Adult Bradycardia CPG gives a ten-fold smaller dose: confirm."
        },
        {
            "q": "A 30 kg child needs IM glucagon. Dose?",
            "options": [
                "1 mg",
                "0.5 mg",
                "5 mg",
                "0.1 mg"
            ],
            "correct": 0,
            "explanation": ">20 kg (text) or >25 kg (flowchart)."
        },
        {
            "q": "What is the adult fluid maximum?",
            "options": [
                "2000 mL",
                "500 mL",
                "1000 mL",
                "None"
            ],
            "correct": 0,
            "explanation": "Then adrenaline."
        },
        {
            "q": "When is pacing used?",
            "options": [
                "Ongoing symptomatic bradycardia despite drugs",
                "First line",
                "Never",
                "Only children"
            ],
            "correct": 0,
            "explanation": "Refractory to pharmacological treatment."
        },
        {
            "q": "What is the KPI?",
            "options": [
                "Substance, route, amount and time documented",
                "Calcium for all",
                "Pacing for all",
                "Insulin for all"
            ],
            "correct": 0,
            "explanation": "A single KPI."
        },
        {
            "q": "RBS 300 mg/dL in CCB overdose. What does it mean?",
            "options": [
                "Common in CCB toxicity: monitor and transport",
                "Give insulin",
                "Give dextrose",
                "Ignore all glucose"
            ],
            "correct": 0,
            "explanation": "Hyperglycemia is common."
        },
        {
            "q": "What signals severe toxicity?",
            "options": [
                "Hypotension and bradycardia",
                "Hypertension",
                "Fever",
                "Normal vitals"
            ],
            "correct": 0,
            "explanation": "Hemodynamic instability."
        },
        {
            "q": "Which glucagon effect needs airway care?",
            "options": [
                "Vomiting",
                "Bradycardia",
                "Hypertension",
                "Rash"
            ],
            "correct": 0,
            "explanation": "Protect the airway."
        },
        {
            "q": "What pediatric push-dose adrenaline does the text give?",
            "options": [
                "0.01 mg/kg",
                "0.1 mg/kg",
                "1 mg",
                "None"
            ],
            "correct": 0,
            "explanation": "The flowchart prints 0.001 mg/kg: a ten-fold discrepancy."
        },
        {
            "q": "What is the pediatric atropine dose?",
            "options": [
                "0.02 mg/kg",
                "0.2 mg/kg",
                "1 mg",
                "0.001 mg/kg"
            ],
            "correct": 0,
            "explanation": "Maximum 0.5 mg per dose, 1 mg total."
        },
        {
            "q": "Which co-ingestants matter?",
            "options": [
                "Beta-blockers, digoxin",
                "Water",
                "Vitamins",
                "None"
            ],
            "correct": 0,
            "explanation": "Obtain the history."
        },
        {
            "q": "What is the pediatric fluid maximum here?",
            "options": [
                "80 mL/kg",
                "20 mL/kg",
                "40 mL/kg",
                "No maximum"
            ],
            "correct": 0,
            "explanation": "As per this CPG."
        },
        {
            "q": "Why are sustained-release tablets a concern?",
            "options": [
                "Delayed deterioration",
                "They are inactive",
                "They act instantly",
                "No reason"
            ],
            "correct": 0,
            "explanation": "Monitor closely during transport."
        },
        {
            "q": "Which is Red priority?",
            "options": [
                "Moderate bradycardia or arrhythmias after overdose",
                "Asymptomatic",
                "Mild nausea",
                "Normal ECG"
            ],
            "correct": 0,
            "explanation": "Triage note."
        },
        {
            "q": "Which IM glucagon adult maximum is listed?",
            "options": [
                "Up to 5 mg at different sites",
                "50 mg",
                "1 mg only",
                "None"
            ],
            "correct": 0,
            "explanation": "If additional glucagon is available."
        },
        {
            "q": "How urgent is transport for symptomatic patients?",
            "options": [
                "Rapid",
                "Routine",
                "Next day",
                "Not needed"
            ],
            "correct": 0,
            "explanation": "Time-sensitive."
        }
    ],
    "flashcards": [
        {
            "question": "Features",
            "answer": "Bradycardia, hypotension, heart block, shock; AMS, hyperglycemia, seizures, vomiting, acidosis."
        },
        {
            "question": "Two types",
            "answer": "Verapamil/diltiazem: cardiotoxic, bradycardia. Dihydropyridines (amlodipine): vasodilation, reflex tachycardia."
        },
        {
            "question": "Glucose",
            "answer": "Hyperglycemia is common."
        },
        {
            "question": "Fluid",
            "answer": "Adult 500 mL (max 2000 mL); child 20 mL/kg (max 80 mL/kg) (EMT)."
        },
        {
            "question": "Adult atropine",
            "answer": "0.5–1 mg every 3–5 min, max 3 mg (EMT-A)."
        },
        {
            "question": "Pediatric atropine",
            "answer": "0.02 mg/kg, max 0.5 mg per dose, 1 mg total."
        },
        {
            "question": "Adrenaline indication",
            "answer": "Hypotension after adequate fluid (and bradycardia refractory to atropine)."
        },
        {
            "question": "Adrenaline doses",
            "answer": "Push: adult 0.1 mg; child 0.01 mg/kg (flowchart 0.001 mg/kg). Infusion 0.05–0.3 mcg/kg/min (AP)."
        },
        {
            "question": "Glucagon indication",
            "answer": "Still hypotensive after adrenaline (EMT)."
        },
        {
            "question": "Adult IV glucagon",
            "answer": "5 mg push, then 1 mg every 5 min."
        },
        {
            "question": "Adult IM glucagon",
            "answer": "1 mg; up to 5 mg at different sites; every 10–15 min."
        },
        {
            "question": "Pediatric glucagon",
            "answer": "IV: 0.5 mg (<25 kg), 1 mg (25–40 kg). IM: 0.5 mg (<20 kg), 1 mg (>20 kg)."
        },
        {
            "question": "Pacing",
            "answer": "If refractory to drugs."
        },
        {
            "question": "Monitoring",
            "answer": "12-lead and continuous ECG; SpO₂ 94–98%; EtCO₂; glucose."
        },
        {
            "question": "Red priority",
            "answer": "Moderate bradycardia or arrhythmias."
        },
        {
            "question": "History",
            "answer": "Drug, release type, time, amount, co-ingestants."
        },
        {
            "question": "Children",
            "answer": "Accidental ingestion is included: treat seriously."
        },
        {
            "question": "Transport",
            "answer": "Rapid for symptomatic patients."
        },
        {
            "question": "Exclusions",
            "answer": "None noted."
        },
        {
            "question": "KPI",
            "answer": "Substance, route, amount, time documented."
        }
    ],
    "critical": [
        {
            "id": "crit_8_4_1",
            "scenario": "A 50-year-old beside an empty verapamil bottle: HR 38, BP 70/40, RR 10. The monitor shows the rhythm below.",
            "ecg": "chb",
            "question": "What first?",
            "options": [
                {
                    "t": "ABC, ALS, IV, 500 mL bolus, atropine; escalate to adrenaline, glucagon, pacing",
                    "f": "Correct."
                },
                {
                    "t": "Glucagon first",
                    "f": "It comes after adrenaline."
                },
                {
                    "t": "Observe",
                    "f": "He is in shock."
                },
                {
                    "t": "Pacing before any drugs",
                    "f": "Pacing follows failed drug treatment."
                }
            ],
            "correct": 0,
            "explanation": "Verapamil is among the more cardiotoxic CCBs.",
            "kpi": "Substance, route, amount and time documented."
        },
        {
            "id": "crit_8_4_2",
            "scenario": "A diltiazem overdose: HR 48 after atropine 0.5 mg, BP 80/50 despite 2000 mL.",
            "question": "What next?",
            "options": [
                {
                    "t": "IV adrenaline (AP): push dose or infusion 0.05–0.3 mcg/kg/min",
                    "f": "Correct."
                },
                {
                    "t": "More fluid",
                    "f": "The maximum is reached."
                },
                {
                    "t": "Discharge",
                    "f": "No."
                },
                {
                    "t": "Stop atropine forever",
                    "f": "Escalate."
                }
            ],
            "correct": 0,
            "explanation": "Hypotension after adequate fluid.",
            "kpi": "Substance, route, amount and time documented."
        },
        {
            "id": "crit_8_4_3",
            "scenario": "A large amlodipine overdose: BP 85/50, HR 110, alert; RBS 260 mg/dL.",
            "ecg": "stach",
            "question": "What fits?",
            "options": [
                {
                    "t": "Dihydropyridine vasodilation with reflex tachycardia and hyperglycemia: fluid, monitor, transport",
                    "f": "Correct."
                },
                {
                    "t": "Atropine for tachycardia",
                    "f": "Atropine is for symptomatic bradycardia."
                },
                {
                    "t": "Insulin",
                    "f": "Not in this CPG."
                },
                {
                    "t": "Sepsis only",
                    "f": "The history fits a CCB."
                }
            ],
            "correct": 0,
            "explanation": "Expect deterioration; transport rapidly.",
            "kpi": "Substance, route, amount and time documented."
        },
        {
            "id": "crit_8_4_4",
            "scenario": "A 2-year-old (12 kg) swallowed several amlodipine tablets: drowsy, BP 70/40, pale.",
            "question": "What fluid?",
            "options": [
                {
                    "t": "20 mL/kg bolus, repeat (maximum 80 mL/kg); Red priority; rapid transport",
                    "f": "Correct."
                },
                {
                    "t": "Adult 500 mL",
                    "f": "Weight-based."
                },
                {
                    "t": "No fluid in children",
                    "f": "Shock needs fluid."
                },
                {
                    "t": "Wait for symptoms",
                    "f": "He is symptomatic."
                }
            ],
            "correct": 0,
            "explanation": "Small amounts of CCBs can be lethal in children.",
            "kpi": "Substance, route, amount and time documented."
        },
        {
            "id": "crit_8_4_5",
            "scenario": "After atropine 3 mg, 2000 mL, adrenaline and glucagon, a CCB overdose still has HR 30 and poor perfusion.",
            "question": "What next?",
            "options": [
                {
                    "t": "Transcutaneous pacing",
                    "f": "Correct."
                },
                {
                    "t": "More atropine",
                    "f": "Maximum reached."
                },
                {
                    "t": "More fluid",
                    "f": "Maximum reached."
                },
                {
                    "t": "Nothing",
                    "f": "Pace."
                }
            ],
            "correct": 0,
            "explanation": "Refractory to pharmacological interventions.",
            "kpi": "Substance, route, amount and time documented."
        }
    ]
};
