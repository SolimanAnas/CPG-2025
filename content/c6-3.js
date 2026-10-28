/* ========== CPG 6.3 – Adrenal Insufficiency ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c6-3",
    "title": "Adrenal Insufficiency",
    "shortTitle": "6.3 Adrenal Insufficiency",
    "guide": {
        "cpg": "6.3",
        "group": "medical",
        "groupLabel": "Medical",
        "title": "Adrenal Insufficiency",
        "lead": "Adrenal (Addisonian) crisis is rare and hard to spot: most patients will tell you, or wear an alert bracelet. Check glucose, treat hypotension with fluid, and give hydrocortisone (EMT) early in suspected crisis.",
        "source": {
            "label": "CPG 6.3",
            "pages": "159–161",
            "pdf": "../pdf_sections/6_3_Adrenal_Insufficiency.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Suspected adrenal insufficiency or crisis: severe fatigue or weakness; nausea, vomiting or abdominal pain; hypotension; confusion.",
                    "Known adrenal insufficiency, chronic steroid use or recent steroid withdrawal; precipitants such as infection, trauma, stress or missed medication."
                ],
                "exclude": [
                    "Symptoms clearly due to another cause (traumatic shock, anaphylaxis, cardiac arrest).",
                    "No history or clinical suspicion of adrenal insufficiency."
                ]
            },
            {
                "type": "list",
                "title": "Assess",
                "icon": "stethoscope",
                "items": [
                    "History: Addison's disease, chronic steroids or recent stopping; precipitating illness, fever, trauma, surgery or stress; alert bracelet.",
                    "Severe weakness, fatigue or collapse; nausea, vomiting, diffuse abdominal pain without rigidity or rebound.",
                    "Hyperpigmentation (darkened skin creases, buccal mucosa) in primary adrenal insufficiency.",
                    "Glucose: hypoglycemia is &lt;70 mg/dL."
                ]
            },
            {
                "type": "groups",
                "title": "Red flags",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "Red flags",
                        "items": [
                            "SBP &lt;90 mmHg (adults) or age-specific hypotension.",
                            "Persistent vomiting or unable to take oral intake.",
                            "Altered mental status or unresponsiveness.",
                            "Suspected infection: fever &gt;38°C, tachycardia.",
                            "Known adrenal insufficiency with acute deterioration."
                        ]
                    },
                    {
                        "title": "Shock",
                        "items": [
                            "Hypotension, tachycardia, altered mental status, poor perfusion (capillary refill &gt;2 seconds): start fluid and hydrocortisone promptly."
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
                        "text": "Primary and secondary survey; consider ALS back-up."
                    },
                    {
                        "title": "Glucose",
                        "text": "Hypoglycemia: Hypoglycemia CPG."
                    },
                    {
                        "title": "IV access"
                    },
                    {
                        "title": "Fluid for shock or dehydration",
                        "level": "EMT",
                        "text": "Normal saline or Ringer's lactate; reassess and repeat as needed; watch for fluid overload in patients with comorbidities.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "500–1000 mL IV",
                                "note": "Flowchart: 250–500 mL",
                                "level": "EMT"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "20 mL/kg IV",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Hydrocortisone",
                        "level": "EMT",
                        "text": "Suspected adrenal crisis.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "100 mg IV/IM",
                                "level": "EMT"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "2 mg/kg IV/IM (maximum 100 mg)",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Tele-EMS",
                        "text": "If the diagnosis is unclear or advice is needed."
                    },
                    {
                        "title": "Reassess",
                        "text": "SBP still &lt;90 mmHg: repeat the fluid bolus. Reassess frequently."
                    }
                ]
            },
            {
                "type": "list",
                "title": "Background",
                "icon": "lightbulb",
                "items": [
                    "A sudden, severe deficiency of cortisol and often aldosterone; life-threatening.",
                    "Most common cause: medication non-compliance. Others: infection, trauma, surgery, dehydration."
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
                                "label": "Pediatric drug calculator: hydrocortisone",
                                "sub": "2 mg/kg, maximum 100 mg",
                                "href": "../pages/drug-calculator.html?drug=Hydrocortisone",
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
                    "Hydrocortisone given in suspected adrenal crisis.",
                    "RBS performed and documented in suspected adrenal crisis."
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
                        "label": "6.8 Hypoglycemia",
                        "href": "c6-8.html"
                    },
                    {
                        "label": "6.7 Fever and Sepsis",
                        "href": "c6-7.html"
                    },
                    {
                        "label": "6.10 Nausea and Vomiting",
                        "href": "c6-10.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "What adult fluid bolus does the text give for shock or dehydration?",
            "options": [
                "500–1000 mL IV, reassess, repeat",
                "100 mL",
                "Two litres of colloid",
                "No fluid"
            ],
            "correct": 0,
            "explanation": "The flowchart gives 250–500 mL."
        },
        {
            "q": "What is the adult hydrocortisone dose?",
            "options": [
                "100 mg IV/IM",
                "10 mg IV",
                "500 mg IV",
                "25 mg orally"
            ],
            "correct": 0,
            "explanation": "For suspected adrenal crisis (EMT)."
        },
        {
            "q": "Known Addison's disease with hypotension, vomiting and confusion. What do you do?",
            "options": [
                "Glucose, fluid bolus and hydrocortisone",
                "Fluids only",
                "Antiemetic only",
                "Advise rest"
            ],
            "correct": 0,
            "explanation": "Shock in suspected crisis: fluid and hydrocortisone promptly."
        },
        {
            "q": "What is the most common cause of adrenal crisis?",
            "options": [
                "Medication non-compliance",
                "Overdose of steroids",
                "Hypertension",
                "Asthma"
            ],
            "correct": 0,
            "explanation": "Others: infection, trauma, surgery, dehydration."
        },
        {
            "q": "Glucose 55 mg/dL in suspected crisis. What do you do?",
            "options": [
                "Treat as per the Hypoglycemia CPG",
                "Ignore it",
                "Hydrocortisone only",
                "Wait for hospital"
            ],
            "correct": 0,
            "explanation": "Hypoglycemia is <70 mg/dL."
        },
        {
            "q": "Which sign suggests primary adrenal insufficiency?",
            "options": [
                "Hyperpigmentation of skin creases and buccal mucosa",
                "Pallor of the nails",
                "Jaundice",
                "Cyanosis"
            ],
            "correct": 0,
            "explanation": "Darkened skin creases and buccal mucosa."
        },
        {
            "q": "What is the pediatric hydrocortisone dose?",
            "options": [
                "2 mg/kg IV/IM (maximum 100 mg)",
                "10 mg/kg",
                "0.2 mg/kg",
                "100 mg for all ages"
            ],
            "correct": 0,
            "explanation": "Maximum 100 mg."
        },
        {
            "q": "Which level may give hydrocortisone?",
            "options": [
                "EMT",
                "P only",
                "AP only",
                "EP only"
            ],
            "correct": 0,
            "explanation": "Fluid and hydrocortisone are EMT on the flowchart."
        },
        {
            "q": "A patient on long-term steroids is febrile and hypotensive. Is this in scope?",
            "options": [
                "Yes: chronic steroid use with a precipitant",
                "No",
                "Only with Addison's",
                "Only children"
            ],
            "correct": 0,
            "explanation": "Chronic steroid use and infection are inclusion features."
        },
        {
            "q": "What does the abdominal examination usually show?",
            "options": [
                "Diffuse pain without rigidity or rebound",
                "Board-like rigidity",
                "A pulsatile mass",
                "Rebound tenderness always"
            ],
            "correct": 0,
            "explanation": "Rigidity or rebound points elsewhere."
        },
        {
            "q": "When should Tele-EMS be called?",
            "options": [
                "If the diagnosis is unclear or advice is needed",
                "Before every fluid bolus",
                "Never",
                "Only after arrival"
            ],
            "correct": 0,
            "explanation": "Consider Tele-EMS consultation."
        },
        {
            "q": "Why is crisis life-threatening?",
            "options": [
                "Sudden severe cortisol (and often aldosterone) deficiency",
                "Excess cortisol",
                "Excess insulin",
                "Allergy"
            ],
            "correct": 0,
            "explanation": "As described in the CPG."
        },
        {
            "q": "SBP stays below 90 mmHg after hydrocortisone and a bolus. What next?",
            "options": [
                "Repeat the fluid bolus and reassess",
                "Stop all fluids",
                "Second hydrocortisone dose at once",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "The flowchart repeats the bolus after reassessment."
        },
        {
            "q": "What should you look for on the wrist?",
            "options": [
                "A medical alert bracelet",
                "A watch",
                "Tattoos",
                "Pulse only"
            ],
            "correct": 0,
            "explanation": "Most patients will tell you, or wear a bracelet."
        },
        {
            "q": "What must be watched during fluid therapy?",
            "options": [
                "Fluid overload, especially with comorbidities",
                "Hyperthermia",
                "Hypertension only",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "Reassess after each bolus."
        },
        {
            "q": "Which red flag suggests infection?",
            "options": [
                "Fever >38°C with tachycardia",
                "Normal temperature",
                "Bradycardia",
                "Hyperpigmentation"
            ],
            "correct": 0,
            "explanation": "A listed red flag."
        },
        {
            "q": "Which is excluded?",
            "options": [
                "Shock clearly due to trauma or anaphylaxis",
                "Known Addison's with vomiting",
                "Chronic steroids with fever",
                "Recent steroid withdrawal"
            ],
            "correct": 0,
            "explanation": "Symptoms clearly attributable to another cause."
        },
        {
            "q": "What is the capillary refill threshold for poor perfusion?",
            "options": [
                ">2 seconds",
                ">10 seconds",
                ">30 seconds",
                "Any value"
            ],
            "correct": 0,
            "explanation": "Delayed capillary refill >2 seconds."
        },
        {
            "q": "A known Addisonian has been vomiting all day and cannot keep tablets down. What fits?",
            "options": [
                "Red flag: suspected adrenal crisis",
                "Simple gastroenteritis, no action",
                "Food poisoning only",
                "Appendicitis"
            ],
            "correct": 0,
            "explanation": "Persistent vomiting is a red flag."
        },
        {
            "q": "Which fluids are used?",
            "options": [
                "Normal saline or Ringer's lactate",
                "Dextrose 5% only",
                "Colloids",
                "Oral water"
            ],
            "correct": 0,
            "explanation": "Crystalloid boluses."
        },
        {
            "q": "What is the pediatric fluid bolus?",
            "options": [
                "20 mL/kg IV",
                "5 mL/kg",
                "40 mL/kg at once",
                "None"
            ],
            "correct": 0,
            "explanation": "Reassess and repeat as needed."
        },
        {
            "q": "How common is Addisonian crisis in Dubai's ambulance setting?",
            "options": [
                "Relatively rare",
                "The commonest call",
                "Never seen",
                "Daily"
            ],
            "correct": 0,
            "explanation": "Rare, and difficult to diagnose."
        },
        {
            "q": "What are the KPIs?",
            "options": [
                "Hydrocortisone in suspected crisis; RBS documented",
                "Scene time under 5 minutes",
                "Antibiotics given",
                "CT ordered"
            ],
            "correct": 0,
            "explanation": "Two KPIs."
        },
        {
            "q": "Which history finding supports the diagnosis?",
            "options": [
                "Recent steroid discontinuation",
                "Recent travel",
                "A peanut allergy",
                "Asthma"
            ],
            "correct": 0,
            "explanation": "Chronic use or recent discontinuation of steroids."
        },
        {
            "q": "Which is NOT a feature of adrenal crisis listed here?",
            "options": [
                "Hypertension",
                "Hypotension",
                "Vomiting",
                "Confusion"
            ],
            "correct": 0,
            "explanation": "Hypotension, not hypertension."
        },
        {
            "q": "What must be documented about hydrocortisone?",
            "options": [
                "Dose, route and time",
                "Only the brand",
                "Nothing",
                "Only the batch"
            ],
            "correct": 0,
            "explanation": "Plus fluid type, volume and response."
        },
        {
            "q": "What is the hydrocortisone route?",
            "options": [
                "IV or IM",
                "Oral only",
                "Inhaled",
                "Rectal"
            ],
            "correct": 0,
            "explanation": "IV/IM."
        },
        {
            "q": "When is shock treated with hydrocortisone and fluids?",
            "options": [
                "Promptly, as soon as shock is recognised in suspected crisis",
                "Only after hospital tests",
                "After 2 hours",
                "Never together"
            ],
            "correct": 0,
            "explanation": "Initiate fluid and corticosteroid promptly."
        },
        {
            "q": "Which allergies are specifically documented?",
            "options": [
                "Corticosteroid allergies",
                "Pollen",
                "Latex only",
                "None"
            ],
            "correct": 0,
            "explanation": "Known allergies, especially corticosteroids."
        },
        {
            "q": "Where does the flowchart send a patient without recent illness or injury?",
            "options": [
                "Non-Traumatic Shock CPG",
                "Discharge",
                "Stroke CPG",
                "Burns CPG"
            ],
            "correct": 0,
            "explanation": "Treat as per the Non-Traumatic Shock CPG."
        }
    ],
    "flashcards": [
        {
            "question": "Adrenal crisis",
            "answer": "Sudden severe cortisol (and often aldosterone) deficiency; life-threatening."
        },
        {
            "question": "Most common cause",
            "answer": "Medication non-compliance."
        },
        {
            "question": "Other causes",
            "answer": "Infection, trauma, surgery, dehydration."
        },
        {
            "question": "Typical features",
            "answer": "Severe weakness or collapse, nausea, vomiting, abdominal pain, hypotension, confusion."
        },
        {
            "question": "Hyperpigmentation",
            "answer": "Darkened skin creases and buccal mucosa in primary adrenal insufficiency."
        },
        {
            "question": "Adult hydrocortisone",
            "answer": "100 mg IV/IM (EMT)."
        },
        {
            "question": "Pediatric hydrocortisone",
            "answer": "2 mg/kg IV/IM, maximum 100 mg (EMT)."
        },
        {
            "question": "Adult fluid bolus",
            "answer": "500–1000 mL NS or RL (text); 250–500 mL on the flowchart."
        },
        {
            "question": "Pediatric fluid bolus",
            "answer": "20 mL/kg IV."
        },
        {
            "question": "Glucose",
            "answer": "Check in all; <70 mg/dL: Hypoglycemia CPG."
        },
        {
            "question": "Red flags",
            "answer": "SBP <90; persistent vomiting; altered mental status; fever >38°C with tachycardia; known AI deteriorating."
        },
        {
            "question": "Shock in suspected crisis",
            "answer": "Fluid and hydrocortisone promptly."
        },
        {
            "question": "Tele-EMS",
            "answer": "When the diagnosis is unclear or advice is needed."
        },
        {
            "question": "Persistent hypotension",
            "answer": "Reassess and repeat the fluid bolus."
        },
        {
            "question": "Fluid caution",
            "answer": "Watch for overload in patients with comorbidities."
        },
        {
            "question": "Diagnosis in the field",
            "answer": "Difficult; patients usually tell you; check for alert bracelets."
        },
        {
            "question": "Exclusions",
            "answer": "Another clear cause (traumatic shock, anaphylaxis, cardiac arrest); no suspicion of AI."
        },
        {
            "question": "Abdominal findings",
            "answer": "Diffuse pain without rigidity or rebound."
        },
        {
            "question": "KPIs",
            "answer": "Hydrocortisone in suspected crisis; RBS documented."
        },
        {
            "question": "Documentation",
            "answer": "History, precipitant, alert bracelet, vitals, cap refill, temperature, RBS, fluids and response, hydrocortisone dose/route/time."
        },
        {
            "question": "Inclusion history",
            "answer": "Adrenal insufficiency, chronic steroid use or recent withdrawal."
        },
        {
            "question": "Level for fluids",
            "answer": "EMT."
        },
        {
            "question": "Poor perfusion",
            "answer": "Cool clammy skin, capillary refill >2 seconds."
        },
        {
            "question": "Flowchart branch without recent illness/injury",
            "answer": "Non-Traumatic Shock CPG."
        },
        {
            "question": "Frequency",
            "answer": "Relatively rare in the Dubai ambulance setting."
        }
    ],
    "critical": [
        {
            "id": "crit_6_3_1",
            "scenario": "A 55-year-old man with Addison's disease is found collapsed and confused. BP 80/50, HR 120, glucose 45 mg/dL.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Treat hypoglycemia, fluid bolus, and hydrocortisone 100 mg IV/IM",
                    "f": "Correct."
                },
                {
                    "t": "Fluids only",
                    "f": "Hydrocortisone is the KPI in suspected crisis."
                },
                {
                    "t": "Hydrocortisone only, ignore glucose",
                    "f": "Correct the hypoglycemia too."
                },
                {
                    "t": "Wait for hospital tests",
                    "f": "Treat promptly."
                }
            ],
            "correct": 0,
            "explanation": "Check RBS, treat per the Hypoglycemia CPG, give fluid for shock, and hydrocortisone.",
            "kpi": "Hydrocortisone given; RBS documented."
        },
        {
            "id": "crit_6_3_2",
            "scenario": "A 28-year-old with Addison's disease has vomited all day and cannot keep her tablets down. BP 88/60, HR 110.",
            "question": "What is the best next step?",
            "options": [
                {
                    "t": "Hydrocortisone 100 mg IV/IM with a fluid bolus",
                    "f": "Correct. Persistent vomiting and hypotension are red flags."
                },
                {
                    "t": "Oral tablets again",
                    "f": "She cannot tolerate oral intake."
                },
                {
                    "t": "Antiemetic and leave",
                    "f": "This is suspected crisis."
                },
                {
                    "t": "No action: she took a morning dose",
                    "f": "She has vomited it."
                }
            ],
            "correct": 0,
            "explanation": "Known adrenal insufficiency with acute deterioration: hydrocortisone and fluids.",
            "kpi": "Hydrocortisone given; RBS documented."
        },
        {
            "id": "crit_6_3_3",
            "scenario": "A 6-year-old (20 kg) on long-term steroids for a chronic condition is febrile, lethargic and hypotensive for age.",
            "question": "Which hydrocortisone dose?",
            "options": [
                {
                    "t": "2 mg/kg IV/IM, by weight",
                    "f": "Correct; maximum 100 mg."
                },
                {
                    "t": "100 mg regardless of weight",
                    "f": "Use the weight-based dose."
                },
                {
                    "t": "None in children",
                    "f": "Pediatric dosing is listed."
                },
                {
                    "t": "0.2 mg/kg",
                    "f": "Ten times too low."
                }
            ],
            "correct": 0,
            "explanation": "Plus 20 mL/kg fluid bolus and a glucose check.",
            "kpi": "Hydrocortisone given; RBS documented."
        },
        {
            "id": "crit_6_3_4",
            "scenario": "After hydrocortisone and a fluid bolus, the BP of a patient in adrenal crisis is still 85/55.",
            "question": "What next?",
            "options": [
                {
                    "t": "Reassess and repeat the fluid bolus, watching for overload",
                    "f": "Correct."
                },
                {
                    "t": "Stop treatment",
                    "f": "Hypotension persists."
                },
                {
                    "t": "Give a second hydrocortisone dose immediately",
                    "f": "The flowchart repeats the fluid, not the steroid."
                },
                {
                    "t": "Lie the patient flat and wait",
                    "f": "Treat the hypotension."
                }
            ],
            "correct": 0,
            "explanation": "Reassess; SBP <90 mmHg: crystalloid bolus. Consider Tele-EMS.",
            "kpi": "Hydrocortisone given; RBS documented."
        },
        {
            "id": "crit_6_3_5",
            "scenario": "A man in shock has no history of adrenal disease, no steroid use and no recent illness.",
            "question": "Which guideline applies?",
            "options": [
                {
                    "t": "Non-Traumatic Shock CPG",
                    "f": "Correct. No suspicion of adrenal insufficiency excludes this CPG."
                },
                {
                    "t": "Give hydrocortisone routinely",
                    "f": "Only in suspected adrenal crisis."
                },
                {
                    "t": "Adrenal crisis protocol anyway",
                    "f": "He is excluded."
                },
                {
                    "t": "No treatment",
                    "f": "Treat the shock."
                }
            ],
            "correct": 0,
            "explanation": "Patients with no history or suspicion of adrenal insufficiency are excluded.",
            "kpi": "RBS documented."
        }
    ]
};
