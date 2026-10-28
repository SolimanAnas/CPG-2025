/* ========== CPG 6.8 – Hypoglycemia ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c6-8",
    "title": "Hypoglycemia",
    "shortTitle": "6.8 Hypoglycemia",
    "guide": {
        "cpg": "6.8",
        "group": "medical",
        "groupLabel": "Medical",
        "title": "Hypoglycemia",
        "lead": "RBS below 70 mg/dL with symptoms: give glucose by the safest route the patient allows (oral if they can swallow, IV 10% dextrose, or IM glucagon if there is no IV and they are unresponsive). Recheck the RBS after every treatment.",
        "source": {
            "label": "CPG 6.8",
            "pages": "181–184",
            "pdf": "../pdf_sections/6_8_Hypoglycemia.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Confusion, irritability, sweating, shakiness, seizures or unresponsiveness with RBS &lt;70 mg/dL."
                ],
                "exclude": [
                    "Hyperglycemia without hypoglycemic symptoms.",
                    "Symptoms clearly due to another cause (stroke, trauma, overdose) without a glucose abnormality.",
                    "Normal glucose and no suspicion of a glycemic disturbance."
                ]
            },
            {
                "type": "list",
                "title": "Assess",
                "icon": "stethoscope",
                "items": [
                    "RBS: hypoglycemia is &lt;70 mg/dL; repeat after each intervention.",
                    "Diabetes type, insulin or oral agents, excess dosing; infection, stress, diet changes.",
                    "Autonomic: sweating, tremor, anxiety, palpitations. Neurological: confusion, irritability, seizures, coma.",
                    "If family gave treatment before arrival, confirm what and how much."
                ]
            },
            {
                "type": "steps",
                "title": "Management",
                "icon": "list",
                "steps": [
                    {
                        "title": "Airway first",
                        "text": "Unresponsive: airway management; recovery position at least while treating. Oxygen to SpO<sub>2</sub> ≥94% if hypoxic or distressed. Never give oral glucose unless the airway is secure."
                    },
                    {
                        "title": "Oral glucose 40% paste: conscious and able to swallow",
                        "level": "EMR",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "15–20 g orally",
                                "note": "Flowchart: 15 g (1 tube)",
                                "level": "EMR"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "0.5–1 g/kg orally (maximum 15 g)",
                                "note": "Flowchart: ½ tube, adjusted to weight",
                                "level": "EMR"
                            }
                        ]
                    },
                    {
                        "title": "Or dextrose 10% IV/IO",
                        "level": "EMT",
                        "text": "Repeat if RBS stays &lt;70 mg/dL. IO only if IV fails and the patient is critical.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "100–200 mL (10–20 g)",
                                "note": "Flowchart: 125 mL–250 mL",
                                "level": "EMT"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "2–4 mL/kg (0.2–0.4 g/kg, maximum 25 g)",
                                "note": "Flowchart: 10 mL/kg",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Or glucagon IM: no IV access and unresponsive",
                        "level": "EMT",
                        "text": "Once only.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "1 mg IM",
                                "level": "EMT"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "0.5 mg (&lt;20 kg) or 1 mg (≥20 kg) IM",
                                "note": "Flowchart: &lt;6 years 0.5 mg, &gt;6 years 1 mg",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Reassess",
                        "text": "Recheck RBS after every intervention. Still altered: repeat RBS and treat. No improvement despite maximal dextrose: look for other causes (stroke, head injury, overdose) and consider Tele-EMS."
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Red flags and fluids",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "Red flags",
                        "items": [
                            "Severe hypoglycemia: RBS &lt;70 mg/dL with seizures, unresponsiveness or coma.",
                            "SBP &lt;90 mmHg (adults), age-specific hypotension, or shock; bradycardia.",
                            "Symptoms or altered mental status persisting after treatment."
                        ]
                    },
                    {
                        "title": "Fluids",
                        "items": [
                            "Avoid fluid in uncomplicated hypoglycemia unless hypotensive.",
                            "Watch for overload in cardiac or renal disease."
                        ]
                    },
                    {
                        "title": "Safety",
                        "items": [
                            "Watch for seizures and vomiting.",
                            "Consider hypoglycemia as a complication in seizure patients.",
                            "Repeated episodes: advise follow-up with the diabetes care provider."
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
                                "label": "Pediatric drug calculator: dextrose 10%",
                                "sub": "2–4 mL/kg",
                                "href": "../pages/drug-calculator.html?drug=Dextrose%2010%25",
                                "icon": "pill"
                            },
                            {
                                "label": "Pediatric drug calculator: glucagon",
                                "sub": "0.5 or 1 mg IM",
                                "href": "../pages/drug-calculator.html?drug=Glucagon",
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
                    "RBS performed and documented before and after treatment.",
                    "Glucose given (as appropriate) to every patient with RBS &lt;70 mg/dL."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "6.9 Hyperglycemia",
                        "href": "c6-9.html"
                    },
                    {
                        "label": "6.5 Altered Mental Status",
                        "href": "c6-5.html"
                    },
                    {
                        "label": "5.2 Seizures",
                        "href": "c5-2.html"
                    },
                    {
                        "label": "5.1 Stroke",
                        "href": "c5-1.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "What RBS defines hypoglycemia?",
            "options": [
                "<70 mg/dL",
                "<100 mg/dL",
                "<40 mg/dL",
                "<120 mg/dL"
            ],
            "correct": 0,
            "explanation": "With symptoms such as confusion, sweating or seizures."
        },
        {
            "q": "An unresponsive hypoglycemic patient. What comes first?",
            "options": [
                "Airway and recovery position, then IV dextrose or IM glucagon",
                "Oral glucose",
                "Fluids",
                "Transport without treatment"
            ],
            "correct": 0,
            "explanation": "Never oral glucose without a secure airway."
        },
        {
            "q": "What concentration of IV dextrose does this CPG use?",
            "options": [
                "10%",
                "50%",
                "5%",
                "25%"
            ],
            "correct": 0,
            "explanation": "Dextrose 10%."
        },
        {
            "q": "A conscious patient who can swallow, RBS 55 mg/dL. What do you give?",
            "options": [
                "Oral glucose 40% paste",
                "Glucagon IM",
                "IV dextrose only",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "Oral glucose (EMR)."
        },
        {
            "q": "What is the adult glucagon dose?",
            "options": [
                "1 mg IM, once only",
                "0.5 mg IV",
                "2 mg IM repeated",
                "0.1 mg"
            ],
            "correct": 0,
            "explanation": "When IV access is unavailable and the patient is unresponsive."
        },
        {
            "q": "A 15 kg child, unresponsive, no IV. Glucagon dose?",
            "options": [
                "0.5 mg IM",
                "1 mg IM",
                "2 mg IM",
                "0.1 mg IM"
            ],
            "correct": 0,
            "explanation": "<20 kg: 0.5 mg."
        },
        {
            "q": "What is the adult D10 dose in the text?",
            "options": [
                "100–200 mL (10–20 g)",
                "500 mL",
                "20 mL",
                "1000 mL"
            ],
            "correct": 0,
            "explanation": "The flowchart gives 125 mL–250 mL."
        },
        {
            "q": "Which is an autonomic symptom?",
            "options": [
                "Sweating and tremor",
                "Polyuria",
                "Fruity breath",
                "Kussmaul breathing"
            ],
            "correct": 0,
            "explanation": "Also anxiety and palpitations."
        },
        {
            "q": "What is the oxygen target if hypoxic?",
            "options": [
                "SpO₂ ≥94%",
                "100%",
                "88%",
                "None"
            ],
            "correct": 0,
            "explanation": "Titrate."
        },
        {
            "q": "What is the pediatric D10 dose in the text?",
            "options": [
                "2–4 mL/kg (maximum 25 g)",
                "20 mL/kg",
                "50 mL/kg",
                "0.5 mL/kg"
            ],
            "correct": 0,
            "explanation": "The flowchart gives 10 mL/kg."
        },
        {
            "q": "Why no oral glucose in an unconscious patient?",
            "options": [
                "Aspiration risk: the airway must be secure",
                "It is too slow",
                "It raises BP",
                "It is too expensive"
            ],
            "correct": 0,
            "explanation": "Ensure the airway is secure first."
        },
        {
            "q": "How often is glucagon given?",
            "options": [
                "Once only",
                "Every 5 minutes",
                "Every 15 minutes",
                "Hourly"
            ],
            "correct": 0,
            "explanation": "Adults and children."
        },
        {
            "q": "RBS is still 45 after D10. What do you do?",
            "options": [
                "Repeat D10 and recheck",
                "Glucagon IV",
                "Stop treatment",
                "Fluids only"
            ],
            "correct": 0,
            "explanation": "Repeat if RBS remains <70 mg/dL."
        },
        {
            "q": "When is glucagon indicated?",
            "options": [
                "No IV access and unresponsive",
                "Every patient",
                "Conscious patients",
                "Hyperglycemia"
            ],
            "correct": 0,
            "explanation": "Otherwise use oral glucose or IV dextrose."
        },
        {
            "q": "Which is a red flag?",
            "options": [
                "Hypoglycemia with seizures or coma",
                "RBS 75 with no symptoms",
                "Mild hunger",
                "Normal vitals"
            ],
            "correct": 0,
            "explanation": "Severe hypoglycemia."
        },
        {
            "q": "When are IV fluids given?",
            "options": [
                "Only if hypotensive",
                "Always",
                "Never",
                "In every child"
            ],
            "correct": 0,
            "explanation": "Avoid fluids in uncomplicated hypoglycemia."
        },
        {
            "q": "What is the adult oral glucose dose in the text?",
            "options": [
                "15–20 g",
                "50 g",
                "5 g",
                "100 g"
            ],
            "correct": 0,
            "explanation": "Flowchart: 15 g (1 tube)."
        },
        {
            "q": "What is the pediatric oral glucose dose?",
            "options": [
                "0.5–1 g/kg (maximum 15 g)",
                "5 g/kg",
                "Adult dose",
                "None"
            ],
            "correct": 0,
            "explanation": "Flowchart: ½ tube adjusted to weight."
        },
        {
            "q": "Altered mental status persists despite maximal dextrose. What next?",
            "options": [
                "Look for other causes and consider Tele-EMS",
                "More glucagon",
                "Stop",
                "Discharge"
            ],
            "correct": 0,
            "explanation": "Stroke, head trauma, overdose."
        },
        {
            "q": "Which is a neurological symptom?",
            "options": [
                "Confusion or seizures",
                "Palpitations",
                "Sweating",
                "Tremor"
            ],
            "correct": 0,
            "explanation": "Also irritability and coma."
        },
        {
            "q": "Which level may give oral glucose?",
            "options": [
                "EMR",
                "P only",
                "AP only",
                "EP only"
            ],
            "correct": 0,
            "explanation": "D10 and glucagon are EMT."
        },
        {
            "q": "What do you recheck after each treatment?",
            "options": [
                "RBS",
                "Temperature",
                "Lactate",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "A KPI: RBS before and after."
        },
        {
            "q": "A hypoglycemic patient is hypotensive. What do you consider?",
            "options": [
                "Glucose plus fluids (red flag)",
                "Glucose only",
                "No treatment",
                "Oral glucose while unresponsive"
            ],
            "correct": 0,
            "explanation": "Hypotension is a red flag; fluids are indicated."
        },
        {
            "q": "Family gave glucose before arrival. What do you do?",
            "options": [
                "Confirm what and how much",
                "Ignore it",
                "Repeat it blindly",
                "Give glucagon"
            ],
            "correct": 0,
            "explanation": "As per the guidance."
        },
        {
            "q": "Which IO rule applies?",
            "options": [
                "IO if IV fails and the patient is critical",
                "IO first always",
                "Never IO",
                "IO for oral glucose"
            ],
            "correct": 0,
            "explanation": "Consider IO when critical."
        },
        {
            "q": "A seizure patient has low glucose. Why?",
            "options": [
                "Hypoglycemia can be a complication of seizures",
                "Seizures raise glucose only",
                "Unrelated",
                "Lab error"
            ],
            "correct": 0,
            "explanation": "Consider it as a secondary complication."
        },
        {
            "q": "What is the pediatric glucagon dose at 20 kg or more?",
            "options": [
                "1 mg IM",
                "0.5 mg IM",
                "2 mg IM",
                "0.1 mg"
            ],
            "correct": 0,
            "explanation": "Text: by weight; flowchart: by age."
        },
        {
            "q": "What advice for repeated hypoglycemia?",
            "options": [
                "Follow up with the diabetes care provider",
                "None",
                "Stop insulin",
                "Double the dose"
            ],
            "correct": 0,
            "explanation": "As per the clinical guidance."
        },
        {
            "q": "Which is excluded?",
            "options": [
                "Hyperglycemia without hypoglycemic symptoms",
                "Confused diabetic with RBS 50",
                "Seizure with RBS 40",
                "Sweaty, shaky, RBS 60"
            ],
            "correct": 0,
            "explanation": "See the Hyperglycemia CPG."
        },
        {
            "q": "What are the KPIs?",
            "options": [
                "RBS before and after; glucose for RBS <70",
                "Transport all",
                "Glucagon in all",
                "Oxygen in all"
            ],
            "correct": 0,
            "explanation": "Two KPIs."
        }
    ],
    "flashcards": [
        {
            "question": "Hypoglycemia",
            "answer": "RBS <70 mg/dL with symptoms."
        },
        {
            "question": "Autonomic symptoms",
            "answer": "Sweating, tremor, anxiety, palpitations."
        },
        {
            "question": "Neurological symptoms",
            "answer": "Confusion, irritability, seizures, coma."
        },
        {
            "question": "Oral glucose 40% paste",
            "answer": "Adult 15–20 g; child 0.5–1 g/kg (max 15 g); only if conscious and able to swallow (EMR)."
        },
        {
            "question": "Dextrose 10% adult",
            "answer": "100–200 mL (10–20 g) IV, repeat if RBS <70 (EMT). Flowchart: 125 mL–250 mL."
        },
        {
            "question": "Dextrose 10% child",
            "answer": "2–4 mL/kg (0.2–0.4 g/kg, max 25 g). Flowchart: 10 mL/kg."
        },
        {
            "question": "Glucagon indication",
            "answer": "No IV access and unresponsive."
        },
        {
            "question": "Glucagon dose",
            "answer": "Adult 1 mg IM; child 0.5 mg (<20 kg) or 1 mg (≥20 kg); once only (EMT)."
        },
        {
            "question": "Airway",
            "answer": "Recovery position at least; never oral glucose without a secure airway."
        },
        {
            "question": "Reassessment",
            "answer": "Recheck RBS after each intervention."
        },
        {
            "question": "Persistent AMS after maximal dextrose",
            "answer": "Look for other causes; consider Tele-EMS."
        },
        {
            "question": "Fluids",
            "answer": "Only if hypotensive; watch for overload."
        },
        {
            "question": "Red flags",
            "answer": "Seizures, unresponsiveness or coma; hypotension or shock; bradycardia; persistent symptoms."
        },
        {
            "question": "History",
            "answer": "Diabetes type, insulin or oral agents, excess dosing, infection, stress, diet."
        },
        {
            "question": "Pre-arrival treatment",
            "answer": "Confirm the substance and dose."
        },
        {
            "question": "Seizures",
            "answer": "Hypoglycemia may be a secondary complication."
        },
        {
            "question": "Repeated episodes",
            "answer": "Advise follow-up with the diabetes care provider."
        },
        {
            "question": "Exclusions",
            "answer": "Hyperglycemia without symptoms; another clear cause; normal glucose without suspicion."
        },
        {
            "question": "KPIs",
            "answer": "RBS before and after; glucose for every RBS <70 mg/dL."
        },
        {
            "question": "IO",
            "answer": "If IV fails and the patient is critical."
        }
    ],
    "critical": [
        {
            "id": "crit_6_8_1",
            "scenario": "A 60-year-old diabetic is unresponsive and sweaty; RBS 32 mg/dL. You obtain IV access.",
            "question": "What do you give?",
            "options": [
                {
                    "t": "Dextrose 10% 100–200 mL IV, then recheck RBS",
                    "f": "Correct."
                },
                {
                    "t": "Oral glucose paste",
                    "f": "Not with an unprotected airway."
                },
                {
                    "t": "Glucagon first despite IV access",
                    "f": "Glucagon is for when IV access is unavailable."
                },
                {
                    "t": "Dextrose 50%",
                    "f": "This CPG uses dextrose 10%."
                }
            ],
            "correct": 0,
            "explanation": "Airway and recovery position, D10, recheck RBS; repeat if still <70 mg/dL.",
            "kpi": "RBS before and after treatment."
        },
        {
            "id": "crit_6_8_2",
            "scenario": "A 25-year-old diabetic is confused and sweaty but can swallow; RBS 55 mg/dL.",
            "question": "What is appropriate?",
            "options": [
                {
                    "t": "Oral glucose 40% paste 15–20 g, then recheck RBS",
                    "f": "Correct."
                },
                {
                    "t": "Glucagon IM",
                    "f": "He can swallow."
                },
                {
                    "t": "No treatment",
                    "f": "RBS <70 with symptoms needs glucose."
                },
                {
                    "t": "IV fluids",
                    "f": "Not indicated without hypotension."
                }
            ],
            "correct": 0,
            "explanation": "Oral glucose is an EMR treatment for patients able to swallow.",
            "kpi": "Glucose for RBS <70 mg/dL."
        },
        {
            "id": "crit_6_8_3",
            "scenario": "After D10 a patient wakes, but 15 minutes later he is confused again with RBS 45 mg/dL.",
            "question": "What next?",
            "options": [
                {
                    "t": "Repeat D10 and recheck RBS",
                    "f": "Correct."
                },
                {
                    "t": "Oral glucose while confused",
                    "f": "Only if he can swallow safely."
                },
                {
                    "t": "Stop treatment",
                    "f": "He is hypoglycemic."
                },
                {
                    "t": "Look for other causes only",
                    "f": "Treat the hypoglycemia first."
                }
            ],
            "correct": 0,
            "explanation": "Repeat dextrose while RBS remains <70 mg/dL; recheck after each dose.",
            "kpi": "RBS before and after treatment."
        },
        {
            "id": "crit_6_8_4",
            "scenario": "A 45-year-old diabetic is unresponsive; RBS 28 mg/dL; two IV attempts have failed.",
            "question": "What next?",
            "options": [
                {
                    "t": "Glucagon 1 mg IM (once only)",
                    "f": "Correct."
                },
                {
                    "t": "Oral glucose",
                    "f": "He is unresponsive."
                },
                {
                    "t": "Keep trying IV indefinitely",
                    "f": "Use glucagon; IO is for the critical patient."
                },
                {
                    "t": "Repeat glucagon every 5 minutes",
                    "f": "Once only."
                }
            ],
            "correct": 0,
            "explanation": "No IV access and unresponsive: IM glucagon.",
            "kpi": "Glucose for RBS <70 mg/dL."
        },
        {
            "id": "crit_6_8_5",
            "scenario": "A 4-year-old (16 kg) is unresponsive with RBS 40 mg/dL and an IV in place.",
            "question": "Which D10 dose does the text give?",
            "options": [
                {
                    "t": "2–4 mL/kg IV (maximum 25 g)",
                    "f": "Correct. The flowchart prints 10 mL/kg: a discrepancy to report."
                },
                {
                    "t": "Adult 100–200 mL",
                    "f": "Use the weight-based dose."
                },
                {
                    "t": "50 mL/kg",
                    "f": "Far too much."
                },
                {
                    "t": "Oral paste",
                    "f": "Unresponsive."
                }
            ],
            "correct": 0,
            "explanation": "Use the drug calculator and recheck RBS after the dose.",
            "kpi": "RBS before and after treatment."
        }
    ]
};
