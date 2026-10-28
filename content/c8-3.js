/* ========== CPG 8.3 – Beta-Blocker Overdose ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c8-3",
    "title": "Beta-Blocker Overdose",
    "shortTitle": "8.3 Beta-Blocker Overdose",
    "guide": {
        "cpg": "8.3",
        "group": "environmental",
        "groupLabel": "Toxicology",
        "title": "Beta-Blocker Overdose",
        "lead": "Beta-blocker overdose kills through bradycardia and shock. Support ABC with ECG monitoring, then escalate step by step: fluid for shock, atropine for symptomatic bradycardia, then adrenaline, then glucagon, then pacing. Sustained-release tablets can deteriorate late, so transport symptomatic patients rapidly.",
        "source": {
            "label": "CPG 8.3",
            "pages": "255–258",
            "pdf": "../pdf_sections/8_3_Beta-Blocker_Overdose.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Beta-blocker ingestion, intentional or accidental (e.g. children).",
                    "Bradycardia, hypotension, heart block or shock; altered mental status, seizures, weakness, breathlessness, hypoglycemia or collapse."
                ],
                "exclude": [
                    "Symptoms clearly due to something else (CCB alone, sepsis, trauma) without beta-blocker ingestion.",
                    "Asymptomatic minimal exposure with no progression after observation."
                ]
            },
            {
                "type": "list",
                "title": "Assess",
                "icon": "stethoscope",
                "items": [
                    "Drug, immediate or sustained release, time and amount, co-ingestants (e.g. CCBs, digoxin).",
                    "Continuous monitoring and a 12-lead ECG for bradycardia and arrhythmias; blood glucose.",
                    "Moderate bradycardia or arrhythmias after a beta-blocker overdose: Red priority."
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
                        "text": "Often ineffective in beta-blocker overdose.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "1 mg IV/IO every 3–5 minutes (maximum 3 mg)",
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
                        "text": "Still hypotensive or symptomatic bradycardia after fluid and atropine. Syringe driver preferred.",
                        "doses": [
                            {
                                "drug": "Push dose",
                                "dose": "Adult 0.1 mg IV/IO; child 0.001 mg/kg IV/IO",
                                "note": "The Adult Bradycardia CPG gives a ten-fold smaller push dose: confirm",
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
                        "title": "Still refractory: glucagon",
                        "level": "EMT",
                        "text": "May cause vomiting: protect the airway."
                    },
                    {
                        "title": "Ongoing symptomatic bradycardia: pacing",
                        "level": "AP",
                        "text": "Transcutaneous pacing if pharmacological treatment fails."
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
                "type": "groups",
                "title": "Pearls",
                "icon": "lightbulb",
                "groups": [
                    {
                        "title": "Refractory cases",
                        "items": [
                            "Glucagon may cause vomiting; atropine is often ineffective; high-dose insulin (hospital) needs glucose monitoring."
                        ]
                    },
                    {
                        "title": "Delayed toxicity",
                        "items": [
                            "Sustained-release tablets: monitor closely throughout transport.",
                            "Symptomatic patients need rapid transport."
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
                        "title": "Rhythms",
                        "items": [
                            {
                                "ecg": "sbrady",
                                "label": "Sinus bradycardia",
                                "sub": "Atropine, then adrenaline, glucagon, pacing"
                            },
                            {
                                "ecg": "chb",
                                "label": "Complete heart block",
                                "sub": "Pacing if drugs fail"
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
                        "label": "8.4 Calcium Channel Blocker Overdose",
                        "href": "c8-4.html"
                    },
                    {
                        "label": "3.2 Adult Bradycardia",
                        "href": "c3-2.html"
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
            "q": "Which drug is used first for symptomatic bradycardia?",
            "options": [
                "Atropine",
                "Glucagon",
                "Adrenaline infusion",
                "Calcium"
            ],
            "correct": 0,
            "explanation": "EMT-A level; often ineffective in this overdose."
        },
        {
            "q": "What is the adult atropine dose?",
            "options": [
                "1 mg IV/IO every 3–5 minutes, maximum 3 mg",
                "0.5 mg once",
                "2 mg every minute",
                "0.1 mg"
            ],
            "correct": 0,
            "explanation": "As per the CPG."
        },
        {
            "q": "Shock persists after fluids and atropine. What next?",
            "options": [
                "IV adrenaline (AP)",
                "Glucagon first",
                "Stop treatment",
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
            "q": "What is the IM glucagon dose for a child under 20 kg (text)?",
            "options": [
                "0.5 mg",
                "5 mg",
                "0.05 mg",
                "2 mg"
            ],
            "correct": 0,
            "explanation": "The flowchart uses 25 kg as the cut-off."
        },
        {
            "q": "What does the ECG usually show?",
            "options": [
                "Bradycardia and heart block",
                "Sinus tachycardia",
                "Delta waves",
                "ST elevation only"
            ],
            "correct": 0,
            "explanation": "Continuous monitoring and 12-lead."
        },
        {
            "q": "HR 45 and BP 85/55 after atropine 1 mg and fluid. What next?",
            "options": [
                "Adrenaline (push dose or infusion)",
                "Discharge",
                "More fluid beyond the maximum",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "Refractory to atropine and fluid."
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
                "500 mL, repeat, maximum 2000 mL",
                "100 mL",
                "5000 mL",
                "None"
            ],
            "correct": 0,
            "explanation": "For signs of shock."
        },
        {
            "q": "What is a side effect of glucagon?",
            "options": [
                "Vomiting",
                "Tachypnea",
                "Rash only",
                "None"
            ],
            "correct": 0,
            "explanation": "Protect the airway."
        },
        {
            "q": "What is the pediatric fluid bolus?",
            "options": [
                "20 mL/kg, maximum 80 mL/kg",
                "5 mL/kg",
                "60 mL/kg at once",
                "None"
            ],
            "correct": 0,
            "explanation": "As per this CPG."
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
            "q": "What push-dose adrenaline does this CPG list for adults?",
            "options": [
                "0.1 mg IV/IO",
                "1 mg",
                "0.5 mg IM",
                "10 mg"
            ],
            "correct": 0,
            "explanation": "The Adult Bradycardia CPG gives a ten-fold smaller push dose."
        },
        {
            "q": "What is the pediatric push-dose adrenaline?",
            "options": [
                "0.001 mg/kg",
                "0.01 mg/kg",
                "0.1 mg/kg",
                "1 mg"
            ],
            "correct": 0,
            "explanation": "AP level."
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
            "explanation": "Above 20 kg (text) or 25 kg (flowchart): 1 mg."
        },
        {
            "q": "When is pacing used?",
            "options": [
                "Ongoing symptomatic bradycardia despite drugs",
                "First line",
                "Never",
                "Only in children"
            ],
            "correct": 0,
            "explanation": "AP level."
        },
        {
            "q": "What is the KPI?",
            "options": [
                "Substance, route, amount and time documented",
                "Atropine for all",
                "Pacing for all",
                "Glucagon for all"
            ],
            "correct": 0,
            "explanation": "A single KPI."
        },
        {
            "q": "Why monitor sustained-release ingestions closely?",
            "options": [
                "Delayed toxicity",
                "They are harmless",
                "They act faster",
                "No reason"
            ],
            "correct": 0,
            "explanation": "Monitor throughout transport."
        },
        {
            "q": "Which features make a patient Red?",
            "options": [
                "Moderate bradycardia or arrhythmias after overdose",
                "Normal HR",
                "No symptoms",
                "Mild nausea only"
            ],
            "correct": 0,
            "explanation": "Per the triage note."
        },
        {
            "q": "What level gives atropine?",
            "options": [
                "EMT-A",
                "EMR",
                "EP only",
                "ER"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "What level gives glucagon?",
            "options": [
                "EMT",
                "AP only",
                "EP only",
                "ER"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "What is the IM glucagon repeat interval?",
            "options": [
                "Every 10–15 minutes",
                "Every minute",
                "Every hour",
                "Never"
            ],
            "correct": 0,
            "explanation": "IV is every 5 minutes."
        },
        {
            "q": "What is the pediatric atropine maximum single dose?",
            "options": [
                "0.5 mg",
                "1 mg",
                "3 mg",
                "0.1 mg"
            ],
            "correct": 0,
            "explanation": "Total maximum 1 mg."
        },
        {
            "q": "Which co-ingestant matters?",
            "options": [
                "Calcium channel blockers or digoxin",
                "Vitamin C",
                "Water",
                "None"
            ],
            "correct": 0,
            "explanation": "Obtain co-ingestant history."
        },
        {
            "q": "Which is excluded?",
            "options": [
                "Bradycardia clearly from sepsis without beta-blocker ingestion",
                "Metoprolol overdose",
                "Child who swallowed propranolol",
                "Atenolol with hypotension"
            ],
            "correct": 0,
            "explanation": "Exclusion criterion."
        },
        {
            "q": "What is the pediatric fluid maximum here?",
            "options": [
                "80 mL/kg",
                "40 mL/kg",
                "20 mL/kg",
                "No maximum"
            ],
            "correct": 0,
            "explanation": "Higher than in other CPGs."
        },
        {
            "q": "Why is a glucose check included?",
            "options": [
                "Hypoglycemia can occur",
                "To guide insulin",
                "Not needed",
                "Only in diabetics"
            ],
            "correct": 0,
            "explanation": "Hypoglycemia is listed in the inclusion criteria."
        },
        {
            "q": "Is atropine reliable here?",
            "options": [
                "Often ineffective",
                "Always effective",
                "Contraindicated",
                "Only for children"
            ],
            "correct": 0,
            "explanation": "Clinical insight."
        },
        {
            "q": "What is the SpO₂ target?",
            "options": [
                "94–98%",
                "88%",
                "100%",
                "None"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
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
            "answer": "Bradycardia, hypotension, heart block, shock; AMS, seizures, hypoglycemia."
        },
        {
            "question": "Step 1: shock",
            "answer": "Fluid: adult 500 mL (max 2000 mL); child 20 mL/kg (max 80 mL/kg) (EMT)."
        },
        {
            "question": "Step 2: symptomatic bradycardia",
            "answer": "Atropine (EMT-A): adult 1 mg every 3–5 min, max 3 mg; child 0.02 mg/kg, max 0.5 mg/dose, 1 mg total."
        },
        {
            "question": "Step 3: refractory",
            "answer": "IV adrenaline (AP): push adult 0.1 mg, child 0.001 mg/kg; infusion 0.05–0.3 mcg/kg/min."
        },
        {
            "question": "Step 4: still refractory",
            "answer": "Glucagon (EMT)."
        },
        {
            "question": "Step 5",
            "answer": "Transcutaneous pacing (AP)."
        },
        {
            "question": "Adult IV glucagon",
            "answer": "5 mg push, then 1 mg every 5 min (5–15 mg may be needed)."
        },
        {
            "question": "Adult IM glucagon",
            "answer": "1 mg; up to 5 mg at different sites; repeat every 10–15 min."
        },
        {
            "question": "Pediatric IV glucagon",
            "answer": "25–40 kg: 1 mg; <25 kg: 0.5 mg; every 5 min."
        },
        {
            "question": "Pediatric IM glucagon",
            "answer": "<20 kg 0.5 mg; >20 kg 1 mg (flowchart cut-off 25 kg)."
        },
        {
            "question": "Glucagon caution",
            "answer": "May cause vomiting."
        },
        {
            "question": "Monitoring",
            "answer": "12-lead and continuous ECG; glucose; SpO₂ 94–98%; EtCO₂."
        },
        {
            "question": "Red priority",
            "answer": "Moderate bradycardia or arrhythmias."
        },
        {
            "question": "Sustained release",
            "answer": "Delayed toxicity: monitor closely."
        },
        {
            "question": "Atropine",
            "answer": "Often ineffective in beta-blocker overdose."
        },
        {
            "question": "Adrenaline route",
            "answer": "Syringe driver preferred."
        },
        {
            "question": "History",
            "answer": "Drug, release type, time, amount, co-ingestants."
        },
        {
            "question": "Push-dose discrepancy",
            "answer": "This CPG gives a push dose ten times that of the Adult Bradycardia CPG: confirm."
        },
        {
            "question": "Transport",
            "answer": "Rapid for symptomatic patients."
        },
        {
            "question": "KPI",
            "answer": "Substance, route, amount, time documented."
        }
    ],
    "critical": [
        {
            "id": "crit_8_3_1",
            "scenario": "A 55-year-old beside an empty metoprolol bottle: HR 35, BP 70/40, drowsy. The monitor shows the rhythm below.",
            "ecg": "sbrady",
            "question": "What first?",
            "options": [
                {
                    "t": "ABC, ALS, IV, 500 mL bolus, atropine 1 mg; escalate to adrenaline if refractory",
                    "f": "Correct."
                },
                {
                    "t": "Glucagon before everything",
                    "f": "Glucagon comes after adrenaline in the sequence."
                },
                {
                    "t": "Pacing first",
                    "f": "Pacing is for ongoing bradycardia after drugs."
                },
                {
                    "t": "Observe",
                    "f": "He is in shock."
                }
            ],
            "correct": 0,
            "explanation": "Follow the step-up sequence.",
            "kpi": "Substance, route, amount and time documented."
        },
        {
            "id": "crit_8_3_2",
            "scenario": "After atropine 1 mg and 1000 mL, an atenolol overdose has HR 45, BP 85/55.",
            "question": "What next?",
            "options": [
                {
                    "t": "IV adrenaline: push dose or infusion 0.05–0.3 mcg/kg/min (AP)",
                    "f": "Correct."
                },
                {
                    "t": "Stop: she improved",
                    "f": "Still hypotensive and bradycardic."
                },
                {
                    "t": "Oral fluids",
                    "f": "No."
                },
                {
                    "t": "Discharge",
                    "f": "Never."
                }
            ],
            "correct": 0,
            "explanation": "Refractory to atropine and fluid.",
            "kpi": "Substance, route, amount and time documented."
        },
        {
            "id": "crit_8_3_3",
            "scenario": "Despite adrenaline, a beta-blocker overdose remains hypotensive and bradycardic. No IV glucagon is carried; IM is available.",
            "question": "Which dose?",
            "options": [
                {
                    "t": "Glucagon 1 mg IM, up to 5 mg at different sites, repeat every 10–15 minutes",
                    "f": "Correct."
                },
                {
                    "t": "Glucagon 50 mg IM",
                    "f": "Too much."
                },
                {
                    "t": "No glucagon IM",
                    "f": "IM is the alternative."
                },
                {
                    "t": "Calcium",
                    "f": "Not in this CPG."
                }
            ],
            "correct": 0,
            "explanation": "Watch for vomiting.",
            "kpi": "Substance, route, amount and time documented."
        },
        {
            "id": "crit_8_3_4",
            "scenario": "A 2-year-old (12 kg) swallowed several metoprolol tablets: drowsy, HR 60, pale.",
            "question": "What fluid and atropine?",
            "options": [
                {
                    "t": "20 mL/kg bolus; atropine 0.02 mg/kg for symptomatic bradycardia; Red priority",
                    "f": "Correct."
                },
                {
                    "t": "Adult doses",
                    "f": "Weight-based."
                },
                {
                    "t": "Nothing: HR is 60",
                    "f": "Bradycardic and unwell for age."
                },
                {
                    "t": "Glucagon first",
                    "f": "Follow the sequence."
                }
            ],
            "correct": 0,
            "explanation": "Check glucose too.",
            "kpi": "Substance, route, amount and time documented."
        },
        {
            "id": "crit_8_3_5",
            "scenario": "After atropine 3 mg, 2000 mL, adrenaline infusion and glucagon, HR stays 30 with poor perfusion.",
            "ecg": "chb",
            "question": "What next?",
            "options": [
                {
                    "t": "Transcutaneous pacing (AP)",
                    "f": "Correct. Refractory to pharmacological treatment."
                },
                {
                    "t": "More atropine",
                    "f": "The maximum is reached."
                },
                {
                    "t": "More fluid",
                    "f": "The maximum is reached."
                },
                {
                    "t": "Stop",
                    "f": "Pace."
                }
            ],
            "correct": 0,
            "explanation": "Rapid transport throughout.",
            "kpi": "Substance, route, amount and time documented."
        }
    ]
};
