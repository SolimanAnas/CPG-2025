/* ========== CPG 6.1 – Abdominal Pain ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c6-1",
    "title": "Abdominal Pain",
    "shortTitle": "6.1 Abdominal Pain",
    "guide": {
        "cpg": "6.1",
        "group": "medical",
        "groupLabel": "Medical",
        "title": "Abdominal Pain",
        "lead": "Abdominal pain hides emergencies that are hard to detect in an ambulance. Look for red flags and shock, think beyond the abdomen (MI, aortic disease, ectopic pregnancy), treat pain and fluid loss, and transport whenever a serious cause cannot be ruled out.",
        "source": {
            "label": "CPG 6.1",
            "pages": "149–151",
            "pdf": "../pdf_sections/6_1_Abdominal_Pain.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Non-traumatic abdominal pain or discomfort."
                ],
                "exclude": [
                    "Abdominal pain due to trauma.",
                    "Abdominal pain related to pregnancy."
                ]
            },
            {
                "type": "list",
                "title": "Assess",
                "icon": "stethoscope",
                "items": [
                    "Inspect: distension, bruising, visible abnormalities.",
                    "Palpate: tenderness, rigidity, masses; rebound tenderness or guarding.",
                    "OPQRST and SAMPLE history; establish whether pregnancy is possible."
                ]
            },
            {
                "type": "groups",
                "title": "Red flags and shock",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "Red flags",
                        "items": [
                            "Severe, unrelenting pain.",
                            "Fever (&gt;38°C).",
                            "Persistent vomiting or hematemesis.",
                            "Suspected pregnancy complications (ectopic pregnancy, miscarriage)."
                        ]
                    },
                    {
                        "title": "Shock or instability",
                        "items": [
                            "SBP &lt;90 mmHg (adults) or age-specific hypotension.",
                            "HR &gt;100 (adults) or age-specific tachycardia.",
                            "Altered mental status.",
                            "Poor perfusion: cool, clammy skin, delayed capillary refill."
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
                        "title": "Surveys and back-up",
                        "text": "Primary and secondary survey (Universal Care CPG); consider ALS back-up."
                    },
                    {
                        "title": "12-lead ECG",
                        "text": "Age &gt;40 and 3 or more cardiac risk factors: smoking (current or stopped within 3 months), obesity, diabetes, hypertension, high cholesterol, cardiovascular disease, family history."
                    },
                    {
                        "title": "IV access",
                        "text": "For dehydration, hypotension or expected medication."
                    },
                    {
                        "title": "Fluid for shock or dehydration",
                        "level": "EMT",
                        "text": "Normal saline or Ringer's lactate; reassess after each bolus and repeat as needed.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "500–1000 mL bolus",
                                "level": "EMT"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "20 mL/kg bolus",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Pain",
                        "text": "Assess and treat as per the Pain Management CPG; record the score before and after."
                    },
                    {
                        "title": "Hyoscine butylbromide",
                        "level": "P",
                        "text": "Abdominal or menstrual cramping (flowchart).",
                        "doses": [
                            {
                                "drug": "Hyoscine butylbromide",
                                "dose": "20 mg IV/IM",
                                "note": "Adults only",
                                "level": "P"
                            }
                        ]
                    },
                    {
                        "title": "Nausea and vomiting",
                        "text": "As per the Nausea and Vomiting CPG."
                    },
                    {
                        "title": "Reassess frequently",
                        "text": "As per the Universal Care CPG."
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Causes to keep in mind",
                "icon": "search",
                "groups": [
                    {
                        "title": "Common",
                        "items": [
                            "Gastroenteritis, appendicitis, bowel obstruction, pancreatitis, kidney stones, ectopic pregnancy, DKA, mesenteric ischemia."
                        ]
                    },
                    {
                        "title": "Outside the gut",
                        "items": [
                            "Myocardial infarction, pneumonia or pulmonary embolus, CHF.",
                            "Aortic dissection or aneurysm.",
                            "Pregnancy, including ectopic."
                        ]
                    },
                    {
                        "title": "Other abdominal",
                        "items": [
                            "Peptic ulcer, gallbladder disease, GI bleeding."
                        ]
                    }
                ]
            },
            {
                "type": "list",
                "title": "Transport",
                "icon": "ambulance",
                "items": [
                    "Transport routinely with early shock, unstable vital signs, a suspected serious cause (e.g. appendicitis), or when a serious cause cannot be ruled out.",
                    "Non-specific pain or persistent vomiting with refusal: advise seeing a doctor as soon as possible."
                ]
            },
            {
                "type": "tools",
                "title": "Practise with the app",
                "icon": "monitor",
                "groups": [
                    {
                        "title": "Why the 12-lead matters",
                        "items": [
                            {
                                "ecg": "stemiInf",
                                "lead": "III",
                                "label": "Inferior STEMI (lead III)",
                                "sub": "Can present as epigastric pain"
                            }
                        ]
                    },
                    {
                        "title": "Tools",
                        "items": [
                            {
                                "label": "Pediatric drug calculator",
                                "sub": "Weight-based fluid bolus",
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
                    "Initial and post-treatment pain scores assessed and documented."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "6.12 Pain Management",
                        "href": "c6-12.html"
                    },
                    {
                        "label": "6.10 Nausea and Vomiting",
                        "href": "c6-10.html"
                    },
                    {
                        "label": "6.11 Non-Traumatic Shock",
                        "href": "c6-11.html"
                    },
                    {
                        "label": "3.1 Chest Pain / ACS",
                        "href": "c3-1.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "Which is a red flag in abdominal pain?",
            "options": [
                "Fever above 38°C",
                "Mild tenderness",
                "Intermittent mild pain",
                "Flatulence"
            ],
            "correct": 0,
            "explanation": "Also severe unrelenting pain, persistent vomiting or hematemesis, suspected pregnancy complications."
        },
        {
            "q": "A 55-year-old smoker with hypertension and diabetes has epigastric pain and sweating. What must you do?",
            "options": [
                "Record a 12-lead ECG: MI can present as abdominal pain",
                "Treat as gastritis",
                "Give an antiemetic only",
                "Ignore cardiac causes"
            ],
            "correct": 0,
            "explanation": "Over 40 with 3 or more cardiac risk factors: 12-lead ECG."
        },
        {
            "q": "What is the adult fluid bolus for shock or dehydration?",
            "options": [
                "500–1000 mL, reassess, repeat as needed",
                "100 mL",
                "Two litres rapidly",
                "None"
            ],
            "correct": 0,
            "explanation": "Normal saline or Ringer's lactate (EMT)."
        },
        {
            "q": "What is the pediatric fluid bolus?",
            "options": [
                "20 mL/kg, reassess, repeat as needed",
                "5 mL/kg",
                "50 mL/kg",
                "None"
            ],
            "correct": 0,
            "explanation": "Reassess after each bolus."
        },
        {
            "q": "How is pain managed?",
            "options": [
                "As per the Pain Management CPG, with scores before and after",
                "Withheld until diagnosis",
                "Only at hospital",
                "Only with oral drugs"
            ],
            "correct": 0,
            "explanation": "Pain scoring before and after treatment is the KPI."
        },
        {
            "q": "Abdominal pain with SBP 80 and HR 125. What is the priority?",
            "options": [
                "Treat shock: IV access and fluid bolus, and transport",
                "Pain relief first",
                "12-lead first",
                "Advice and discharge"
            ],
            "correct": 0,
            "explanation": "Signs of shock: fluid resuscitation; transport routinely."
        },
        {
            "q": "Which drug relieves abdominal or menstrual cramping on the flowchart?",
            "options": [
                "Hyoscine butylbromide 20 mg IV/IM (adults, P)",
                "Morphine 20 mg",
                "Diclofenac for children",
                "Metoclopramide"
            ],
            "correct": 0,
            "explanation": "Adults only; Paramedic level."
        },
        {
            "q": "A 70-year-old hypertensive with sudden tearing pain radiating to the back. What do you suspect?",
            "options": [
                "Aortic dissection or aneurysm",
                "Appendicitis",
                "Gastroenteritis",
                "Constipation"
            ],
            "correct": 0,
            "explanation": "Aortic disease is a listed cause of abdominal pain."
        },
        {
            "q": "Who needs a 12-lead ECG?",
            "options": [
                "Over 40 with 3 or more cardiac risk factors",
                "Every patient",
                "Nobody with abdominal pain",
                "Only those with chest pain"
            ],
            "correct": 0,
            "explanation": "As per the assessment criteria."
        },
        {
            "q": "Is pain related to pregnancy covered by this CPG?",
            "options": [
                "No: it is excluded",
                "Yes, always",
                "Only in the third trimester",
                "Only with bleeding"
            ],
            "correct": 0,
            "explanation": "Pregnancy-related and traumatic abdominal pain are excluded."
        },
        {
            "q": "Which smoking history counts as a cardiac risk factor?",
            "options": [
                "Current, or stopped within the last 3 months",
                "Stopped 10 years ago",
                "Passive only",
                "Never smoked"
            ],
            "correct": 0,
            "explanation": "As defined in the ECG criteria."
        },
        {
            "q": "Which examination findings suggest peritoneal irritation?",
            "options": [
                "Rebound tenderness, guarding, rigidity",
                "Soft, non-tender abdomen",
                "Normal bowel sounds only",
                "A healed scar"
            ],
            "correct": 0,
            "explanation": "Note rebound and guarding on palpation."
        },
        {
            "q": "Abdominal pain with glucose 450 mg/dL. Which common cause fits?",
            "options": [
                "DKA",
                "Appendicitis",
                "Gastroenteritis only",
                "Kidney stone"
            ],
            "correct": 0,
            "explanation": "DKA is a listed common cause."
        },
        {
            "q": "What is the HR threshold for adult tachycardia here?",
            "options": [
                ">100",
                ">140",
                ">60",
                ">180"
            ],
            "correct": 0,
            "explanation": "HR >100 in adults, age-specific in children."
        },
        {
            "q": "The patient is vomiting persistently. Which CPG applies?",
            "options": [
                "Nausea and Vomiting",
                "Seizures",
                "Stroke",
                "Epistaxis"
            ],
            "correct": 0,
            "explanation": "Manage as per the Nausea and Vomiting CPG."
        },
        {
            "q": "When is IV access indicated?",
            "options": [
                "Dehydration, hypotension or expected medication",
                "Every patient routinely",
                "Never",
                "Only children"
            ],
            "correct": 0,
            "explanation": "As per the CPG."
        },
        {
            "q": "A patient with non-specific pain refuses transport. What do you advise?",
            "options": [
                "See a doctor as soon as possible",
                "Nothing",
                "Wait a week",
                "Take antibiotics"
            ],
            "correct": 0,
            "explanation": "Abdominal emergencies are poorly detected in the ambulance."
        },
        {
            "q": "Which is NOT one of the cardiac risk factors listed?",
            "options": [
                "Asthma",
                "Smoking",
                "Obesity",
                "Diabetes"
            ],
            "correct": 0,
            "explanation": "Also hypertension, high cholesterol, cardiovascular disease, family history."
        },
        {
            "q": "Which patients should be transported routinely?",
            "options": [
                "Early shock, unstable vitals, or a serious cause suspected or not ruled out",
                "Only those who ask",
                "None",
                "Only children"
            ],
            "correct": 0,
            "explanation": "When a serious cause cannot be ruled out, transport."
        },
        {
            "q": "What SBP defines adult hypotension here?",
            "options": [
                "<90 mmHg",
                "<120 mmHg",
                "<70 mmHg",
                "<50 mmHg"
            ],
            "correct": 0,
            "explanation": "Age-specific values for children."
        },
        {
            "q": "Which is a non-abdominal cause of abdominal pain?",
            "options": [
                "Pneumonia or pulmonary embolus",
                "Appendicitis",
                "Gallbladder disease",
                "Peptic ulcer"
            ],
            "correct": 0,
            "explanation": "Also MI, CHF and aortic disease."
        },
        {
            "q": "A woman of child-bearing age has lower abdominal pain. What must the history establish?",
            "options": [
                "Whether pregnancy is possible",
                "Her favourite food",
                "Her blood group",
                "Nothing extra"
            ],
            "correct": 0,
            "explanation": "Exclude pregnancy; suspected pregnancy complications are a red flag."
        },
        {
            "q": "A suspected ectopic pregnancy with shock. What do you do?",
            "options": [
                "Treat shock and transport urgently",
                "Advise rest at home",
                "Hyoscine and discharge",
                "Wait for pain to settle"
            ],
            "correct": 0,
            "explanation": "A red flag with shock: fluids and transport."
        },
        {
            "q": "Which history items are documented?",
            "options": [
                "Food intake, medications, bowel habits, associated symptoms",
                "Only the pain score",
                "Only allergies",
                "Only vital signs"
            ],
            "correct": 0,
            "explanation": "Plus fever, diarrhea, hematemesis."
        },
        {
            "q": "Which is a sign of poor perfusion?",
            "options": [
                "Cool, clammy skin and delayed capillary refill",
                "Warm pink skin",
                "Normal BP",
                "Bradycardia"
            ],
            "correct": 0,
            "explanation": "A sign of shock or instability."
        },
        {
            "q": "Who may give hyoscine butylbromide for cramping?",
            "options": [
                "Paramedic, adults only",
                "EMR",
                "EMT for children",
                "Any responder"
            ],
            "correct": 0,
            "explanation": "20 mg IV/IM, adults only."
        },
        {
            "q": "Abdominal pain with an irregular rhythm (AF) and severe diffuse pain. Which listed cause fits?",
            "options": [
                "Mesenteric ischemia",
                "Gastroenteritis",
                "Constipation",
                "Menstrual cramps"
            ],
            "correct": 0,
            "explanation": "Mesenteric ischemia is a listed common cause."
        },
        {
            "q": "Hematemesis with abdominal pain is…",
            "options": [
                "A red flag",
                "Normal",
                "A sign of constipation",
                "Not relevant"
            ],
            "correct": 0,
            "explanation": "Persistent vomiting or hematemesis."
        },
        {
            "q": "What does the KPI measure?",
            "options": [
                "Pain scores before and after treatment",
                "Scene time",
                "ECG within 5 minutes",
                "Fluid volume"
            ],
            "correct": 0,
            "explanation": "Assess and document both scores."
        },
        {
            "q": "Which survey is done first?",
            "options": [
                "Primary and secondary survey per Universal Care",
                "Pain score only",
                "Pelvic exam",
                "None"
            ],
            "correct": 0,
            "explanation": "Then consider ALS back-up and red flags."
        }
    ],
    "flashcards": [
        {
            "question": "Red flags",
            "answer": "Severe unrelenting pain; fever >38°C; persistent vomiting or hematemesis; suspected pregnancy complications."
        },
        {
            "question": "Signs of shock",
            "answer": "SBP <90 (adult), HR >100 (adult), altered mental status, poor perfusion; age-specific in children."
        },
        {
            "question": "12-lead ECG criteria",
            "answer": "Age >40 with 3 or more cardiac risk factors."
        },
        {
            "question": "Cardiac risk factors",
            "answer": "Smoking (current or stopped within 3 months), obesity, diabetes, hypertension, high cholesterol, cardiovascular disease, family history."
        },
        {
            "question": "Adult fluid bolus",
            "answer": "500–1000 mL NS or RL (EMT), reassess, repeat as needed."
        },
        {
            "question": "Pediatric fluid bolus",
            "answer": "20 mL/kg (EMT), reassess, repeat as needed."
        },
        {
            "question": "Hyoscine butylbromide",
            "answer": "20 mg IV/IM, adults only (P), for abdominal or menstrual cramping."
        },
        {
            "question": "Pain",
            "answer": "Pain Management CPG; scores before and after (KPI)."
        },
        {
            "question": "Nausea and vomiting",
            "answer": "Nausea and Vomiting CPG."
        },
        {
            "question": "IV access indications",
            "answer": "Dehydration, hypotension, expected medication."
        },
        {
            "question": "Examination",
            "answer": "Inspect (distension, bruising); palpate (tenderness, rigidity, masses); rebound or guarding."
        },
        {
            "question": "History",
            "answer": "OPQRST and SAMPLE; establish whether pregnancy is possible."
        },
        {
            "question": "Exclusions",
            "answer": "Traumatic abdominal pain; pregnancy-related pain."
        },
        {
            "question": "Common causes",
            "answer": "Gastroenteritis, appendicitis, obstruction, pancreatitis, kidney stones, ectopic pregnancy, DKA, mesenteric ischemia."
        },
        {
            "question": "Non-abdominal causes",
            "answer": "MI, pneumonia or PE, CHF, aortic dissection or aneurysm."
        },
        {
            "question": "Transport routinely when…",
            "answer": "Early shock, unstable vitals, a serious cause suspected or not ruled out."
        },
        {
            "question": "Refusal advice",
            "answer": "See a doctor as soon as possible."
        },
        {
            "question": "Why caution?",
            "answer": "Abdominal emergencies are poorly detected in the ambulance."
        },
        {
            "question": "Peritoneal signs",
            "answer": "Rebound tenderness, guarding, rigidity."
        },
        {
            "question": "Documentation",
            "answer": "Duration, severity, modifying factors, intake, medications, bowel habits, exam, pain scores, ECG, pregnancy status, transport rationale."
        },
        {
            "question": "Fever threshold",
            "answer": ">38°C."
        },
        {
            "question": "Gallbladder or pancreatic disease",
            "answer": "Listed abdominal causes."
        },
        {
            "question": "GI bleeding",
            "answer": "A listed cause; hematemesis is a red flag."
        },
        {
            "question": "Kidney stones",
            "answer": "A listed common cause."
        },
        {
            "question": "Mesenteric ischemia",
            "answer": "A listed common cause of abdominal pain."
        },
        {
            "question": "DKA",
            "answer": "A listed common cause; check glucose."
        },
        {
            "question": "Aortic disease",
            "answer": "Dissection and aneurysm can present as abdominal pain."
        },
        {
            "question": "ALS back-up",
            "answer": "Consider per the Universal Care CPG."
        },
        {
            "question": "Reassessment",
            "answer": "Frequently, as per the Universal Care CPG."
        },
        {
            "question": "KPI",
            "answer": "Pain scores before and after treatment documented."
        }
    ],
    "critical": [
        {
            "id": "crit_6_1_1",
            "scenario": "A 65-year-old man has sudden severe epigastric pain radiating to the back. He is sweaty; BP 85/50, HR 120; a pulsatile abdominal mass is felt.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Treat shock (IV, fluid bolus) and transport urgently: suspected aortic aneurysm",
                    "f": "Correct."
                },
                {
                    "t": "Hyoscine for cramping and observe",
                    "f": "Shock with suspected aortic disease needs urgent transport."
                },
                {
                    "t": "Advice and discharge",
                    "f": "Never with shock."
                },
                {
                    "t": "Lengthy scene workup",
                    "f": "Move."
                }
            ],
            "correct": 0,
            "explanation": "Aortic aneurysm and dissection are listed causes; signs of shock mean fluid and routine transport.",
            "kpi": "Pain scores before and after treatment documented."
        },
        {
            "id": "crit_6_1_2",
            "scenario": "A 28-year-old woman, 8 weeks pregnant, has lower abdominal pain and light vaginal bleeding. BP 100/60, HR 110.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Treat as a suspected ectopic pregnancy: red flag, IV access, fluid if shocked, urgent transport",
                    "f": "Correct."
                },
                {
                    "t": "Hyoscine and home",
                    "f": "Pregnancy complications are red flags."
                },
                {
                    "t": "Treat as gastroenteritis",
                    "f": "Consider ectopic pregnancy."
                },
                {
                    "t": "Wait for the bleeding to stop",
                    "f": "Transport."
                }
            ],
            "correct": 0,
            "explanation": "Pregnancy-related pain is excluded from this CPG; follow the obstetric guidance and transport.",
            "kpi": "Pain scores before and after treatment documented."
        },
        {
            "id": "crit_6_1_3",
            "scenario": "A 55-year-old smoker with hypertension and diabetes has epigastric pain, nausea and sweating. Lead III of his 12-lead is shown.",
            "ecg": "stemiInf",
            "ecgLead": "III",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Treat as STEMI as per the Chest Pain / ACS CPG",
                    "f": "Correct. Inferior MI can present as abdominal pain."
                },
                {
                    "t": "Antiemetic and home",
                    "f": "The ECG shows STEMI."
                },
                {
                    "t": "Hyoscine for cramping",
                    "f": "This is cardiac."
                },
                {
                    "t": "No ECG needed for abdominal pain",
                    "f": "He meets the ECG criteria."
                }
            ],
            "correct": 0,
            "explanation": "Over 40 with 3 or more risk factors: record a 12-lead. MI is a listed alternative cause.",
            "kpi": "Pain scores before and after treatment documented."
        },
        {
            "id": "crit_6_1_4",
            "scenario": "A 40-year-old woman has right lower quadrant pain, fever 38.5°C and vomiting, with guarding. Vital signs are stable.",
            "question": "What is appropriate?",
            "options": [
                {
                    "t": "Analgesia per the Pain CPG, antiemetic per the N&V CPG, and transport: suspected appendicitis",
                    "f": "Correct."
                },
                {
                    "t": "Advice only: vital signs are stable",
                    "f": "A serious cause is suspected: transport."
                },
                {
                    "t": "Hyoscine and discharge",
                    "f": "Not with red flags."
                },
                {
                    "t": "No analgesia until diagnosis",
                    "f": "Treat pain and record the scores."
                }
            ],
            "correct": 0,
            "explanation": "Fever and persistent vomiting are red flags; suspected appendicitis is transported routinely.",
            "kpi": "Pain scores before and after treatment documented."
        },
        {
            "id": "crit_6_1_5",
            "scenario": "A 70-year-old man has sudden diffuse abdominal pain and distension. The monitor shows the rhythm below; BP 100/70, HR 130.",
            "ecg": "afib",
            "question": "Which cause should you consider?",
            "options": [
                {
                    "t": "Mesenteric ischemia: transport urgently",
                    "f": "Correct. AF predisposes to it."
                },
                {
                    "t": "Simple constipation",
                    "f": "Severe diffuse pain with AF is a warning sign."
                },
                {
                    "t": "Menstrual cramps",
                    "f": "Not applicable."
                },
                {
                    "t": "No concern",
                    "f": "He is tachycardic and in pain."
                }
            ],
            "correct": 0,
            "explanation": "Mesenteric ischemia is a listed cause. Treat pain and any shock, and transport.",
            "kpi": "Pain scores before and after treatment documented."
        }
    ]
};
