/* ========== CPG 6.9 – Hyperglycemia ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c6-9",
    "title": "Hyperglycemia",
    "shortTitle": "6.9 Hyperglycemia",
    "guide": {
        "cpg": "6.9",
        "group": "medical",
        "groupLabel": "Medical",
        "title": "Hyperglycemia",
        "lead": "RBS above 250 mg/dL with ketoacidosis, dehydration or shock needs fluid: normal saline boluses up to 2000 mL (child 60 mL/kg). Record a 12-lead for hyperkalemia, escalate early in DKA or HHS, and do not delay transport to finish fluids.",
        "source": {
            "label": "CPG 6.9",
            "pages": "185–187",
            "pdf": "../pdf_sections/6_9_Hyperglycemia.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "RBS &gt;250 mg/dL.",
                    "Polyuria, polydipsia, vomiting, weakness or altered mental status."
                ],
                "exclude": [
                    "Hypoglycemia (RBS &lt;70 mg/dL)."
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
                            "Diabetes type, insulin or oral agents, missed doses.",
                            "Precipitants: infection, comorbidities, stress, diet change."
                        ]
                    },
                    {
                        "title": "Dehydration",
                        "items": [
                            "Dry mucous membranes, thirst, sunken eyes, hypotension."
                        ]
                    },
                    {
                        "title": "Signs of DKA",
                        "items": [
                            "Fruity breath, Kussmaul respirations, confusion, dehydration, tachycardia or shock; abdominal pain or vomiting.",
                            "HHS: severe lethargy with dehydration."
                        ]
                    },
                    {
                        "title": "Red priority",
                        "items": [
                            "Hyperglycemia &gt;324 mg/dL with DKA/HHS symptoms, or signs of shock."
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
                        "title": "Airway",
                        "text": "Unresponsive: airway management; recovery position at least."
                    },
                    {
                        "title": "Focused assessment",
                        "text": "Full vital signs, RBS, GCS or AVPU."
                    },
                    {
                        "title": "12-lead ECG",
                        "text": "Look for hyperkalemia (peaked T waves, widened QRS), arrhythmias, or ACS, especially in the elderly or high-risk."
                    },
                    {
                        "title": "IV access",
                        "text": "Hypotension, persistent altered mental status or severe hyperglycemia; IO if IV fails."
                    },
                    {
                        "title": "Fluid for dehydration, shock or DKA",
                        "level": "EMT",
                        "text": "Normal saline or Ringer's lactate; reassess and repeat. Avoid aggressive fluid in renal or cardiac disease.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "500–1000 mL IV bolus",
                                "note": "Up to 2000 mL",
                                "level": "EMT"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "10–20 mL/kg IV bolus",
                                "note": "Up to 1000 mL per bolus; maximum 60 mL/kg",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Reassess",
                        "text": "RBS every 15 minutes after treatment or fluid. Consider Tele-EMS."
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Red flags and safety",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "Red flags",
                        "items": [
                            "RBS &gt;400 mg/dL with signs of DKA or HHS.",
                            "SBP &lt;90 mmHg or shock: delayed capillary refill, cold extremities.",
                            "Fever or infection: sepsis as the trigger.",
                            "Persistent symptoms; recurrent vomiting or reduced urine output."
                        ]
                    },
                    {
                        "title": "Safety",
                        "items": [
                            "Do not delay transport to complete fluid replacement.",
                            "Escalate early with altered mental status or suspected DKA/HHS; tell the receiving facility.",
                            "Treated before EMS arrival: watch for hypoglycemia.",
                            "No oral fluids with altered mental status."
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
                                "ecg": "hyperK",
                                "label": "Hyperkalemia",
                                "sub": "Peaked T waves, widening QRS"
                            }
                        ]
                    },
                    {
                        "title": "Tools",
                        "items": [
                            {
                                "label": "Pediatric drug calculator: normal saline",
                                "sub": "10–20 mL/kg",
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
                    "IV fluid given to patients with dehydration or signs of shock."
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
                        "label": "6.7 Fever and Sepsis",
                        "href": "c6-7.html"
                    },
                    {
                        "label": "6.11 Non-Traumatic Shock",
                        "href": "c6-11.html"
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
            "q": "What RBS defines hyperglycemia here?",
            "options": [
                ">250 mg/dL",
                ">150 mg/dL",
                ">120 mg/dL",
                ">600 mg/dL"
            ],
            "correct": 0,
            "explanation": "Inclusion threshold."
        },
        {
            "q": "Which is a sign of DKA?",
            "options": [
                "Fruity breath and Kussmaul respirations",
                "Pinpoint pupils",
                "Bradycardia only",
                "Hypothermia only"
            ],
            "correct": 0,
            "explanation": "Also confusion, dehydration, tachycardia or shock."
        },
        {
            "q": "What is the adult bolus?",
            "options": [
                "500–1000 mL",
                "100 mL",
                "3000 mL",
                "None"
            ],
            "correct": 0,
            "explanation": "Repeat up to 2000 mL."
        },
        {
            "q": "RBS 450 mg/dL, confused, Kussmaul breathing. Most likely?",
            "options": [
                "DKA",
                "Hypoglycemia",
                "Opioid overdose",
                "Stroke"
            ],
            "correct": 0,
            "explanation": "Classic signs of DKA."
        },
        {
            "q": "What is the pediatric bolus?",
            "options": [
                "10–20 mL/kg",
                "5 mL/kg",
                "40 mL/kg",
                "None"
            ],
            "correct": 0,
            "explanation": "Maximum 60 mL/kg."
        },
        {
            "q": "Which is a red flag?",
            "options": [
                "SBP <90 mmHg or shock",
                "Mild thirst only",
                "RBS 260 with no symptoms",
                "Polyuria alone"
            ],
            "correct": 0,
            "explanation": "Hypotension or clinical shock."
        },
        {
            "q": "Which ECG change suggests hyperkalemia?",
            "options": [
                "Peaked T waves, widened QRS",
                "ST elevation in II, III, aVF only",
                "Delta waves",
                "U waves"
            ],
            "correct": 0,
            "explanation": "Record a 12-lead."
        },
        {
            "q": "What is the adult maximum fluid?",
            "options": [
                "2000 mL",
                "500 mL",
                "1000 mL",
                "No maximum"
            ],
            "correct": 0,
            "explanation": "Reassess after each bolus."
        },
        {
            "q": "Which is a precipitant?",
            "options": [
                "Infection or missed insulin",
                "Excess food only",
                "Too much exercise only",
                "None"
            ],
            "correct": 0,
            "explanation": "Also stress and comorbidities."
        },
        {
            "q": "What is the pediatric maximum fluid?",
            "options": [
                "60 mL/kg",
                "20 mL/kg",
                "100 mL/kg",
                "No maximum"
            ],
            "correct": 0,
            "explanation": "Each bolus up to 1000 mL."
        },
        {
            "q": "BP stays low after 1 L in DKA. What next?",
            "options": [
                "Another bolus, reassess (up to 2000 mL)",
                "Insulin",
                "Stop fluids",
                "Oral fluids"
            ],
            "correct": 0,
            "explanation": "Repeat as needed."
        },
        {
            "q": "How often is RBS rechecked?",
            "options": [
                "Every 15 minutes after treatment or fluid",
                "Once only",
                "Hourly",
                "Never"
            ],
            "correct": 0,
            "explanation": "Specific reassessment point."
        },
        {
            "q": "Which RBS is Red priority with DKA/HHS symptoms?",
            "options": [
                ">324 mg/dL",
                ">200 mg/dL",
                ">1000 mg/dL",
                "Any"
            ],
            "correct": 0,
            "explanation": "Or signs of shock."
        },
        {
            "q": "What causes Kussmaul breathing?",
            "options": [
                "Compensation for ketoacidosis",
                "Hypoxia",
                "Pain",
                "Anxiety only"
            ],
            "correct": 0,
            "explanation": "A sign of DKA."
        },
        {
            "q": "Profound dehydration, severe lethargy, RBS very high. Which state?",
            "options": [
                "HHS",
                "Hypoglycemia",
                "Anaphylaxis",
                "Asthma"
            ],
            "correct": 0,
            "explanation": "Hyperosmolar hyperglycemic state."
        },
        {
            "q": "Which fluids are used?",
            "options": [
                "Normal saline or Ringer's lactate",
                "Dextrose",
                "Colloids",
                "Oral water"
            ],
            "correct": 0,
            "explanation": "Crystalloid boluses."
        },
        {
            "q": "Which is a sign of dehydration?",
            "options": [
                "Dry mucous membranes and sunken eyes",
                "Moist tongue",
                "Bounding pulses",
                "Edema"
            ],
            "correct": 0,
            "explanation": "Also thirst and hypotension."
        },
        {
            "q": "A hyperglycemic patient has heart failure. How do you give fluid?",
            "options": [
                "Avoid aggressive fluid; reassess for overload",
                "Full boluses regardless",
                "No fluid ever",
                "Colloids"
            ],
            "correct": 0,
            "explanation": "Avoid aggressive resuscitation with cardiac or renal disease."
        },
        {
            "q": "Is transport delayed to finish fluids?",
            "options": [
                "No",
                "Yes",
                "Only in children",
                "Only for HHS"
            ],
            "correct": 0,
            "explanation": "Do not delay transport."
        },
        {
            "q": "DKA with abdominal pain. What do you do?",
            "options": [
                "Recognise it as a DKA feature and transport",
                "Treat as appendicitis only",
                "Ignore it",
                "Give food"
            ],
            "correct": 0,
            "explanation": "Assess for abdominal pain or vomiting in DKA."
        },
        {
            "q": "Who is told about DKA/HHS?",
            "options": [
                "The receiving facility",
                "Nobody",
                "Only the family",
                "Police"
            ],
            "correct": 0,
            "explanation": "For early preparation."
        },
        {
            "q": "When are oral fluids avoided?",
            "options": [
                "With altered mental status",
                "Never",
                "Always",
                "Only in children"
            ],
            "correct": 0,
            "explanation": "Aspiration risk."
        },
        {
            "q": "Which level gives the fluid bolus?",
            "options": [
                "EMT",
                "EMR",
                "AP only",
                "EP only"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "When is IV access indicated?",
            "options": [
                "Hypotension, persistent AMS or severe hyperglycemia",
                "Every patient",
                "Never",
                "Only children"
            ],
            "correct": 0,
            "explanation": "IO if IV fails."
        },
        {
            "q": "The patient had insulin before you arrived. What do you watch for?",
            "options": [
                "Hypoglycemia",
                "Hyperthermia",
                "Bradycardia only",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "A safety consideration."
        },
        {
            "q": "Which red flag suggests sepsis?",
            "options": [
                "Fever or signs of infection",
                "Thirst",
                "Polyuria",
                "RBS 260"
            ],
            "correct": 0,
            "explanation": "Infection is a common precipitant."
        },
        {
            "q": "Unresponsive hyperglycemic patient. First?",
            "options": [
                "Airway and recovery position",
                "Oral fluids",
                "Insulin",
                "Leave"
            ],
            "correct": 0,
            "explanation": "Primary survey first."
        },
        {
            "q": "Which RBS is excluded?",
            "options": [
                "<70 mg/dL",
                "300 mg/dL",
                "400 mg/dL",
                "600 mg/dL"
            ],
            "correct": 0,
            "explanation": "Hypoglycemia CPG."
        },
        {
            "q": "What does the 12-lead also look for?",
            "options": [
                "Acute coronary syndrome",
                "Asthma",
                "Fracture",
                "Nothing else"
            ],
            "correct": 0,
            "explanation": "Especially in the elderly or high-risk."
        },
        {
            "q": "What is the KPI?",
            "options": [
                "IV fluid for dehydration or shock",
                "Insulin given",
                "Ketones measured",
                "Transport in 10 minutes"
            ],
            "correct": 0,
            "explanation": "A single KPI."
        }
    ],
    "flashcards": [
        {
            "question": "Hyperglycemia",
            "answer": "RBS >250 mg/dL."
        },
        {
            "question": "Signs of DKA",
            "answer": "Fruity breath, Kussmaul respirations, confusion, dehydration, tachycardia or shock."
        },
        {
            "question": "HHS",
            "answer": "Severe hyperglycemia with dehydration and severe lethargy."
        },
        {
            "question": "Adult fluid",
            "answer": "NS or RL 500–1000 mL, repeat up to 2000 mL (EMT)."
        },
        {
            "question": "Pediatric fluid",
            "answer": "10–20 mL/kg (up to 1000 mL per bolus), maximum 60 mL/kg."
        },
        {
            "question": "12-lead",
            "answer": "Hyperkalemia (peaked T, wide QRS), arrhythmias, ACS."
        },
        {
            "question": "RBS recheck",
            "answer": "Every 15 minutes after treatment or fluid."
        },
        {
            "question": "Red priority",
            "answer": ">324 mg/dL with DKA/HHS symptoms, or shock."
        },
        {
            "question": "Red flags",
            "answer": ">400 mg/dL with DKA/HHS signs; SBP <90 or shock; infection; persistent symptoms; recurrent vomiting or low urine output."
        },
        {
            "question": "Fluid caution",
            "answer": "Avoid aggressive fluid in renal or cardiac disease."
        },
        {
            "question": "Transport",
            "answer": "Do not delay it to complete fluids."
        },
        {
            "question": "Escalation",
            "answer": "Early with AMS or suspected DKA/HHS; notify the receiving facility."
        },
        {
            "question": "Pre-arrival insulin",
            "answer": "Watch for hypoglycemia."
        },
        {
            "question": "Oral fluids",
            "answer": "Not with altered mental status."
        },
        {
            "question": "Precipitants",
            "answer": "Infection, missed insulin, comorbidities, stress, diet."
        },
        {
            "question": "Dehydration signs",
            "answer": "Dry mucosa, thirst, sunken eyes, hypotension."
        },
        {
            "question": "IV access",
            "answer": "Hypotension, persistent AMS, severe hyperglycemia; IO if needed."
        },
        {
            "question": "Exclusion",
            "answer": "Hypoglycemia (RBS <70 mg/dL)."
        },
        {
            "question": "Tele-EMS",
            "answer": "Consider after reassessment."
        },
        {
            "question": "KPI",
            "answer": "IV fluid for dehydration or shock."
        }
    ],
    "critical": [
        {
            "id": "crit_6_9_1",
            "scenario": "A 25-year-old type 1 diabetic is drowsy with deep rapid breathing and a fruity smell. RBS 450 mg/dL, BP 100/60, HR 110.",
            "question": "What first?",
            "options": [
                {
                    "t": "IV access and normal saline 500–1000 mL, 12-lead, early transport with a DKA alert",
                    "f": "Correct."
                },
                {
                    "t": "Insulin",
                    "f": "Not part of this CPG."
                },
                {
                    "t": "Oral fluids",
                    "f": "Not with altered mental status."
                },
                {
                    "t": "Wait to complete 2000 mL on scene",
                    "f": "Do not delay transport."
                }
            ],
            "correct": 0,
            "explanation": "DKA: fluid, ECG for hyperkalemia, escalate early, RBS every 15 minutes.",
            "kpi": "IV fluid for dehydration or shock."
        },
        {
            "id": "crit_6_9_2",
            "scenario": "A 60-year-old type 2 diabetic has vomited for 2 days, is confused and very dry. RBS 800 mg/dL, BP 90/60, no fruity breath.",
            "question": "What fits and what do you do?",
            "options": [
                {
                    "t": "HHS: fluid boluses, reassess, early escalation and transport",
                    "f": "Correct."
                },
                {
                    "t": "Hypoglycemia",
                    "f": "The RBS is high."
                },
                {
                    "t": "Gastroenteritis only: oral fluids",
                    "f": "Confused: no oral fluids."
                },
                {
                    "t": "No treatment",
                    "f": "He is dehydrated and hypotensive."
                }
            ],
            "correct": 0,
            "explanation": "Severe lethargy and dehydration with very high glucose suggests HHS.",
            "kpi": "IV fluid for dehydration or shock."
        },
        {
            "id": "crit_6_9_3",
            "scenario": "After 1000 mL a DKA patient is more alert; BP 100/70, HR 100; RBS 400 mg/dL.",
            "question": "What next?",
            "options": [
                {
                    "t": "Reassess, give a further bolus if still dehydrated (up to 2000 mL), recheck RBS every 15 minutes, transport",
                    "f": "Correct."
                },
                {
                    "t": "Stop all monitoring",
                    "f": "Reassess frequently."
                },
                {
                    "t": "Insulin",
                    "f": "Not in this CPG."
                },
                {
                    "t": "Discharge",
                    "f": "DKA needs hospital care."
                }
            ],
            "correct": 0,
            "explanation": "Repeat fluid as needed while transporting.",
            "kpi": "IV fluid for dehydration or shock."
        },
        {
            "id": "crit_6_9_4",
            "scenario": "A drowsy DKA patient is vomiting. Two IV attempts have failed.",
            "question": "What is appropriate?",
            "options": [
                {
                    "t": "Protect the airway (recovery position) and consider IO access for fluid",
                    "f": "Correct."
                },
                {
                    "t": "Oral fluids",
                    "f": "Altered mental status: no oral fluids."
                },
                {
                    "t": "Abandon fluids",
                    "f": "IO is an option."
                },
                {
                    "t": "Lie flat on the back",
                    "f": "Recovery position protects the airway."
                }
            ],
            "correct": 0,
            "explanation": "IO if peripheral IV access is not obtainable.",
            "kpi": "IV fluid for dehydration or shock."
        },
        {
            "id": "crit_6_9_5",
            "scenario": "A DKA patient's monitor shows the pattern below.",
            "ecg": "hyperK",
            "question": "What do you suspect?",
            "options": [
                {
                    "t": "Hyperkalemia: continue fluids, monitor closely, transport and notify",
                    "f": "Correct."
                },
                {
                    "t": "Normal ECG",
                    "f": "Peaked T waves suggest hyperkalemia."
                },
                {
                    "t": "STEMI only",
                    "f": "Look at the T waves and QRS."
                },
                {
                    "t": "Hypokalemia",
                    "f": "Peaked T waves point to hyperkalemia."
                }
            ],
            "correct": 0,
            "explanation": "The CPG asks for a 12-lead to watch for hyperkalemia and arrhythmias.",
            "kpi": "IV fluid for dehydration or shock."
        }
    ]
};
