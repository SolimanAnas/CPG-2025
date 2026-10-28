/* ========== CPG 6.10 – Nausea and Vomiting ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c6-10",
    "title": "Nausea and Vomiting",
    "shortTitle": "6.10 Nausea and Vomiting",
    "guide": {
        "cpg": "6.10",
        "group": "medical",
        "groupLabel": "Medical",
        "title": "Nausea and Vomiting",
        "lead": "Vomiting is a symptom with a cause: find it (OPQRST, SAMPLE, focused exam) and look for red flags and shock. Treat dehydration with fluid, and give metoclopramide (P, adults only) for moderate to severe symptoms.",
        "source": {
            "label": "CPG 6.10",
            "pages": "189–191",
            "pdf": "../pdf_sections/6_10_Nausea_and_Vomiting.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Nausea and/or vomiting, traumatic or non-traumatic."
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
                        "title": "Find the cause",
                        "items": [
                            "Focused examination; OPQRST and SAMPLE history to uncover serious causes.",
                            "Pregnancy status where relevant."
                        ]
                    },
                    {
                        "title": "Red flags",
                        "items": [
                            "Persistent vomiting or hematemesis.",
                            "Suspected pregnancy complications (ectopic pregnancy, miscarriage)."
                        ]
                    },
                    {
                        "title": "Shock or instability",
                        "items": [
                            "SBP &lt;90 mmHg (adults) or age-specific; HR &gt;100 (adults) or age-specific.",
                            "Altered mental status; poor perfusion (cool, clammy skin, delayed capillary refill)."
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
                        "title": "Surveys",
                        "text": "Primary and secondary survey as per the Universal Care CPG."
                    },
                    {
                        "title": "ALS back-up",
                        "text": "As per Universal Care; generally not appropriate just to give an antiemetic."
                    },
                    {
                        "title": "IV access",
                        "text": "For dehydration, hypotension or expected medication."
                    },
                    {
                        "title": "Fluid for shock or dehydration",
                        "level": "EMT",
                        "text": "Normal saline or Ringer's lactate; reassess and repeat as needed.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "500–1000 mL bolus",
                                "note": "Flowchart: 250–500 mL",
                                "level": "EMT"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "20 mL/kg bolus",
                                "note": "Flowchart: 5–10 mL/kg",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Pain",
                        "text": "As per the Pain Management CPG."
                    },
                    {
                        "title": "Metoclopramide",
                        "level": "P",
                        "doses": [
                            {
                                "drug": "Metoclopramide",
                                "dose": "10 mg IV/IM",
                                "note": "Adults only: not recommended for children",
                                "level": "P"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "list",
                "title": "Good practice",
                "icon": "lightbulb",
                "items": [
                    "Nausea and vomiting usually have an underlying cause: treat that too.",
                    "No prophylactic antiemetic with opioids such as morphine."
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
                                "label": "Drug calculator: metoclopramide",
                                "sub": "Adults 10 mg IV/IM",
                                "href": "../pages/drug-calculator.html?drug=Metoclopramide",
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
                    "Antiemetic for every patient with moderate to severe nausea or vomiting, unless contraindicated or inappropriate."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "6.1 Abdominal Pain",
                        "href": "c6-1.html"
                    },
                    {
                        "label": "6.12 Pain Management",
                        "href": "c6-12.html"
                    },
                    {
                        "label": "6.9 Hyperglycemia",
                        "href": "c6-9.html"
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
            "q": "What comes first in a vomiting patient?",
            "options": [
                "Primary survey",
                "Antiemetic",
                "Oral fluids",
                "Transport without assessment"
            ],
            "correct": 0,
            "explanation": "Then the secondary survey."
        },
        {
            "q": "Which is a red flag?",
            "options": [
                "Hematemesis",
                "One episode after a large meal",
                "Nausea without vomiting",
                "Mild motion sickness"
            ],
            "correct": 0,
            "explanation": "Also persistent vomiting and suspected pregnancy complications."
        },
        {
            "q": "What is the metoclopramide dose?",
            "options": [
                "10 mg IV/IM, adults only",
                "1 mg/kg in children",
                "50 mg IV",
                "2 mg orally"
            ],
            "correct": 0,
            "explanation": "Paramedic level."
        },
        {
            "q": "BP 90/60 and HR 110 in a vomiting adult. What do you do?",
            "options": [
                "IV access and fluid bolus",
                "Antiemetic only",
                "Oral fluids",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "Signs of shock or dehydration."
        },
        {
            "q": "What adult bolus does the text give?",
            "options": [
                "500–1000 mL",
                "100 mL",
                "3 L",
                "None"
            ],
            "correct": 0,
            "explanation": "The flowchart gives 250–500 mL."
        },
        {
            "q": "Is metoclopramide used in children?",
            "options": [
                "No: not recommended for pediatrics",
                "Yes, 10 mg",
                "Yes, 1 mg/kg",
                "Only IM"
            ],
            "correct": 0,
            "explanation": "Adults only."
        },
        {
            "q": "Vomiting after a head injury. Is it covered?",
            "options": [
                "Yes: traumatic causes are included",
                "No",
                "Only children",
                "Only with fever"
            ],
            "correct": 0,
            "explanation": "Traumatic and non-traumatic causes are included."
        },
        {
            "q": "What is the pediatric bolus in the text?",
            "options": [
                "20 mL/kg",
                "50 mL/kg",
                "1 mL/kg",
                "None"
            ],
            "correct": 0,
            "explanation": "The flowchart gives 5–10 mL/kg."
        },
        {
            "q": "Vomiting with RBS 450 mg/dL and deep breathing. Which CPG?",
            "options": [
                "Hyperglycemia (DKA)",
                "Stroke",
                "Epistaxis",
                "Seizures"
            ],
            "correct": 0,
            "explanation": "Look for the underlying cause."
        },
        {
            "q": "Should ALS be requested just to give an antiemetic?",
            "options": [
                "Generally not",
                "Always",
                "Only at night",
                "Only for children"
            ],
            "correct": 0,
            "explanation": "Consider ALS per Universal Care."
        },
        {
            "q": "Is a prophylactic antiemetic given with morphine?",
            "options": [
                "No",
                "Always",
                "Only IM",
                "Only in children"
            ],
            "correct": 0,
            "explanation": "Not recommended."
        },
        {
            "q": "Which shock sign is listed?",
            "options": [
                "HR >100 in adults",
                "HR 70",
                "SBP 130",
                "Warm pink skin"
            ],
            "correct": 0,
            "explanation": "Also SBP <90, AMS, poor perfusion."
        },
        {
            "q": "Vomiting in early pregnancy with pain and pallor. What is it?",
            "options": [
                "A red flag: suspected pregnancy complication",
                "Normal morning sickness",
                "No concern",
                "Food poisoning only"
            ],
            "correct": 0,
            "explanation": "Ectopic pregnancy or miscarriage."
        },
        {
            "q": "Which history tool is used?",
            "options": [
                "OPQRST and SAMPLE",
                "APGAR",
                "BEFAST only",
                "GCS only"
            ],
            "correct": 0,
            "explanation": "To identify serious causes."
        },
        {
            "q": "Which level gives fluid boluses?",
            "options": [
                "EMT",
                "P only",
                "EMR",
                "EP only"
            ],
            "correct": 0,
            "explanation": "Metoclopramide is P."
        },
        {
            "q": "BP 80/50 after 1000 mL. What next?",
            "options": [
                "Reassess and repeat the bolus",
                "Metoclopramide only",
                "Stop fluids",
                "Oral fluids"
            ],
            "correct": 0,
            "explanation": "Repeat as needed."
        },
        {
            "q": "When is IV access indicated?",
            "options": [
                "Dehydration, hypotension or expected drugs",
                "Never",
                "Every patient",
                "Only children"
            ],
            "correct": 0,
            "explanation": "As per the CPG."
        },
        {
            "q": "Vomiting with pain. What else is managed?",
            "options": [
                "Pain, per the Pain Management CPG",
                "Nothing",
                "Only nausea",
                "Only fluids"
            ],
            "correct": 0,
            "explanation": "Assess and manage pain."
        },
        {
            "q": "Vomiting and RBS 45 mg/dL. What first?",
            "options": [
                "Treat hypoglycemia (Hypoglycemia CPG)",
                "Metoclopramide",
                "Oral fluids",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "Treat the cause."
        },
        {
            "q": "Vomiting with chest pain and sweating. What do you consider?",
            "options": [
                "A cardiac cause: Chest Pain CPG",
                "Gastritis only",
                "Motion sickness",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "Look for serious underlying causes."
        },
        {
            "q": "Who is the antiemetic KPI for?",
            "options": [
                "Moderate to severe nausea or vomiting",
                "Every patient",
                "Only children",
                "Only after opioids"
            ],
            "correct": 0,
            "explanation": "Unless contraindicated or inappropriate."
        },
        {
            "q": "Which fluids?",
            "options": [
                "Normal saline or Ringer's lactate",
                "Dextrose",
                "Colloids",
                "Oral rehydration only"
            ],
            "correct": 0,
            "explanation": "Crystalloid boluses."
        },
        {
            "q": "What does the CPG say about the cause?",
            "options": [
                "It usually has an underlying cause",
                "It is always benign",
                "It is always viral",
                "It never needs treatment"
            ],
            "correct": 0,
            "explanation": "A patient safety point."
        },
        {
            "q": "Which route for metoclopramide?",
            "options": [
                "IV or IM",
                "Oral only",
                "Inhaled",
                "Rectal"
            ],
            "correct": 0,
            "explanation": "10 mg IV/IM."
        },
        {
            "q": "A child vomiting, lethargic, HR 160, dry. What do you give?",
            "options": [
                "20 mL/kg fluid bolus and reassess",
                "Metoclopramide",
                "Adult bolus",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "Metoclopramide is not recommended for children."
        },
        {
            "q": "Which documentation item is listed?",
            "options": [
                "Pain scale before and after",
                "Shoe size",
                "Home address only",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "Plus medications, fluids, exam findings."
        },
        {
            "q": "Is anyone excluded?",
            "options": [
                "No: none noted",
                "Children",
                "Trauma",
                "Pregnancy"
            ],
            "correct": 0,
            "explanation": "No exclusions."
        },
        {
            "q": "Which exam findings are documented?",
            "options": [
                "Tenderness, guarding, rebound; head injury findings if relevant",
                "Only pupils",
                "Only skin",
                "None"
            ],
            "correct": 0,
            "explanation": "Abdominal and head findings."
        },
        {
            "q": "Which allergy is especially recorded?",
            "options": [
                "Antiemetic or analgesic allergies",
                "Pollen",
                "None",
                "Latex only"
            ],
            "correct": 0,
            "explanation": "Medication-related allergies."
        },
        {
            "q": "What is the KPI?",
            "options": [
                "Antiemetic for moderate to severe symptoms",
                "Fluids for all",
                "Transport within 10 minutes",
                "12-lead in all"
            ],
            "correct": 0,
            "explanation": "A single KPI."
        }
    ],
    "flashcards": [
        {
            "question": "Scope",
            "answer": "Nausea and/or vomiting from any cause, traumatic or not."
        },
        {
            "question": "Red flags",
            "answer": "Persistent vomiting or hematemesis; suspected pregnancy complications."
        },
        {
            "question": "Shock signs",
            "answer": "SBP <90, HR >100 (adult), AMS, poor perfusion."
        },
        {
            "question": "Adult fluid",
            "answer": "500–1000 mL NS or RL (text); 250–500 mL (flowchart); EMT."
        },
        {
            "question": "Pediatric fluid",
            "answer": "20 mL/kg (text); 5–10 mL/kg (flowchart)."
        },
        {
            "question": "Metoclopramide",
            "answer": "10 mg IV/IM, adults only (P)."
        },
        {
            "question": "Children and metoclopramide",
            "answer": "Not recommended."
        },
        {
            "question": "ALS for antiemetics",
            "answer": "Generally not appropriate."
        },
        {
            "question": "Opioids and antiemetics",
            "answer": "No prophylactic antiemetic."
        },
        {
            "question": "History",
            "answer": "OPQRST and SAMPLE."
        },
        {
            "question": "IV access",
            "answer": "Dehydration, hypotension, expected medication."
        },
        {
            "question": "Pain",
            "answer": "Pain Management CPG."
        },
        {
            "question": "Underlying cause",
            "answer": "Nausea and vomiting usually have one: find and treat it."
        },
        {
            "question": "Fluid repeat",
            "answer": "Reassess and repeat as needed."
        },
        {
            "question": "Exclusions",
            "answer": "None noted."
        },
        {
            "question": "Documentation",
            "answer": "Duration, severity, intake, medications, vitals, exam, drugs and fluids, pain scores, pregnancy status, transport rationale."
        },
        {
            "question": "KPI",
            "answer": "Antiemetic for moderate to severe symptoms unless contraindicated."
        },
        {
            "question": "Fluid level",
            "answer": "EMT."
        },
        {
            "question": "Metoclopramide level",
            "answer": "P."
        },
        {
            "question": "Fluid types",
            "answer": "Normal saline or Ringer's lactate."
        }
    ],
    "critical": [
        {
            "id": "crit_6_10_1",
            "scenario": "A 30-year-old woman, 8 weeks pregnant, has severe vomiting and abdominal pain; BP 90/60, HR 110, pale.",
            "question": "What first?",
            "options": [
                {
                    "t": "Treat as a red flag: IV access, fluid bolus, urgent transport",
                    "f": "Correct. Suspected pregnancy complication with shock."
                },
                {
                    "t": "Metoclopramide and leave",
                    "f": "Red flags and shock need transport."
                },
                {
                    "t": "Oral fluids",
                    "f": "She is shocked."
                },
                {
                    "t": "Reassure: morning sickness",
                    "f": "Consider ectopic pregnancy."
                }
            ],
            "correct": 0,
            "explanation": "Shock signs and a suspected pregnancy complication.",
            "kpi": "Antiemetic for moderate to severe symptoms."
        },
        {
            "id": "crit_6_10_2",
            "scenario": "A 60-year-old insulin-treated diabetic has vomited for 12 hours. RBS 450 mg/dL, dry, HR 110.",
            "question": "What do you treat?",
            "options": [
                {
                    "t": "The cause: Hyperglycemia CPG fluids; antiemetic as needed",
                    "f": "Correct."
                },
                {
                    "t": "Antiemetic only",
                    "f": "Treat the underlying cause."
                },
                {
                    "t": "Insulin",
                    "f": "Not in these CPGs."
                },
                {
                    "t": "Nothing",
                    "f": "He is dehydrated."
                }
            ],
            "correct": 0,
            "explanation": "Nausea and vomiting usually have an underlying cause.",
            "kpi": "Antiemetic for moderate to severe symptoms."
        },
        {
            "id": "crit_6_10_3",
            "scenario": "A 5-year-old with vomiting and diarrhea is lethargic and dry; HR 140, cool peripheries.",
            "question": "What is the priority?",
            "options": [
                {
                    "t": "IV access and 20 mL/kg fluid bolus, reassess",
                    "f": "Correct."
                },
                {
                    "t": "Metoclopramide",
                    "f": "Not recommended for children."
                },
                {
                    "t": "Adult 1000 mL bolus",
                    "f": "Use weight-based dosing."
                },
                {
                    "t": "Oral fluids while lethargic",
                    "f": "He needs IV fluid."
                }
            ],
            "correct": 0,
            "explanation": "Signs of shock or dehydration: fluid resuscitation.",
            "kpi": "Antiemetic for moderate to severe symptoms."
        },
        {
            "id": "crit_6_10_4",
            "scenario": "A 45-year-old adult with gastroenteritis is vomiting repeatedly and miserable; vital signs are normal. You are a Paramedic.",
            "question": "What do you give?",
            "options": [
                {
                    "t": "Metoclopramide 10 mg IV/IM",
                    "f": "Correct: moderate to severe symptoms (KPI)."
                },
                {
                    "t": "Nothing",
                    "f": "The KPI expects an antiemetic."
                },
                {
                    "t": "Request ALS for the antiemetic",
                    "f": "Generally not appropriate; you can give it."
                },
                {
                    "t": "A 2000 mL bolus",
                    "f": "No shock or dehydration signs."
                }
            ],
            "correct": 0,
            "explanation": "Antiemetic for moderate to severe nausea or vomiting unless contraindicated.",
            "kpi": "Antiemetic for moderate to severe symptoms."
        },
        {
            "id": "crit_6_10_5",
            "scenario": "Your patient received morphine for a fracture and has no nausea.",
            "question": "Do you give a prophylactic antiemetic?",
            "options": [
                {
                    "t": "No",
                    "f": "Correct. Prophylactic antiemetics for opiates are not recommended."
                },
                {
                    "t": "Yes, always with morphine",
                    "f": "Not recommended."
                },
                {
                    "t": "Yes, double dose",
                    "f": "Not indicated."
                },
                {
                    "t": "Yes, in children",
                    "f": "Metoclopramide is adults only anyway."
                }
            ],
            "correct": 0,
            "explanation": "Give an antiemetic if nausea or vomiting develops.",
            "kpi": "Antiemetic for moderate to severe symptoms."
        }
    ]
};
