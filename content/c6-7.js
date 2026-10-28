/* ========== CPG 6.7 – Fever and Sepsis ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c6-7",
    "title": "Fever and Sepsis",
    "shortTitle": "6.7 Fever and Sepsis",
    "guide": {
        "cpg": "6.7",
        "group": "medical",
        "groupLabel": "Medical",
        "title": "Fever and Sepsis",
        "lead": "Screen every febrile or unwell patient with SIRS: two or more criteria means suspected sepsis, monitoring, and transfer. Treat poor perfusion with fluid boluses up to 2000 mL (child 60 mL/kg); if perfusion stays poor, adrenaline (AP). Tell Dispatch 2 that SIRS criteria are met.",
        "source": {
            "label": "CPG 6.7",
            "pages": "176–179",
            "pdf": "../pdf_sections/6_7_Fever_and_Sepsis.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Fever (&gt;38°C) or hypothermia (&lt;36°C), measured or reported.",
                    "Symptoms of infection: chills, rigors, malaise; cough, dysuria, wound infection.",
                    "Tachycardia, tachypnea, hypotension or altered mental status; suspected septic shock."
                ],
                "exclude": [
                    "Fever from a non-infectious cause (heat stroke, drug reaction)."
                ]
            },
            {
                "type": "table",
                "title": "SIRS: 2 or more = criteria met",
                "icon": "clipboard-list",
                "columns": [
                    "Criterion",
                    "Threshold"
                ],
                "rows": [
                    [
                        "Temperature",
                        "&gt;38°C or &lt;36°C (flowchart: &gt;38.3)"
                    ],
                    [
                        "Heart rate",
                        "&gt;90 beats/min (age-specific in children)"
                    ],
                    [
                        "Respiratory rate",
                        "&gt;20 breaths/min (age-specific in children)"
                    ],
                    [
                        "Mental status",
                        "Acutely altered or confused"
                    ]
                ],
                "notes": [
                    "SIRS met: add ECG, EtCO<sub>2</sub> and SpO<sub>2</sub> to routine vital signs; recommend transfer; tell Dispatch 2 the patient meets SIRS criteria.",
                    "Look for organ dysfunction: reduced urine output, mottled skin, hypoxia."
                ]
            },
            {
                "type": "list",
                "title": "Find the source",
                "icon": "search",
                "items": [
                    "Respiratory, urinary, skin or abdominal; erythema, pus, productive cough.",
                    "Catheters and central lines.",
                    "Recent illness, surgery or procedures; immunocompromise (diabetes, cancer, HIV).",
                    "Suspected meningitis: mask and goggles."
                ]
            },
            {
                "type": "steps",
                "title": "Management",
                "icon": "list",
                "steps": [
                    {
                        "title": "Oxygen",
                        "text": "If hypoxic or distressed: SpO<sub>2</sub> ≥94%."
                    },
                    {
                        "title": "Paracetamol for fever",
                        "level": "EMT",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "1 g IV/PO",
                                "level": "EMT"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "15 mg/kg IV/PO (maximum 1 g)",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Fluid for poor perfusion",
                        "level": "EMT",
                        "text": "Normal saline or Ringer's lactate, repeated as needed. Watch for overload in cardiac or renal disease. Septic shock: aggressive fluids and prioritise transport.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "500–1000 mL IV",
                                "note": "Maximum 2000 mL",
                                "level": "EMT"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "20 mL/kg IV",
                                "note": "Maximum 60 mL/kg",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Adrenaline for fluid-refractory hypotension",
                        "level": "AP",
                        "text": "When poor perfusion remains after 2000 mL (adult) or 40 mL/kg (child). Titrate to MAP &gt;65, better perfusion or returning urine output."
                    }
                ]
            },
            {
                "type": "table",
                "title": "Adrenaline (AP)",
                "icon": "syringe",
                "columns": [
                    "",
                    "Adult",
                    "Pediatric"
                ],
                "rows": [
                    [
                        "Push dose",
                        "0.01 mg IV/IO every 2–5 minutes",
                        "0.005 mg/kg IV/IO every 2–5 minutes"
                    ],
                    [
                        "Infusion",
                        "2–10 mcg/min IV",
                        "0.05–0.3 mcg/kg/min IV"
                    ]
                ],
                "notes": [
                    "Use a syringe driver where possible. Through a drip set: cross-check the rate calculation and guard it from accidental change.",
                    "Under 5 years without a syringe driver: push doses rather than a drip-set infusion.",
                    "Reduce adrenaline in underlying cardiac disease."
                ]
            },
            {
                "type": "groups",
                "title": "Red flags and the elderly",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "Red flags",
                        "items": [
                            "SBP &lt;90 mmHg (adult) despite fluids.",
                            "Altered mental status or unresponsiveness.",
                            "Severe respiratory distress or SpO<sub>2</sub> &lt;90%.",
                            "Septic shock: mottled skin, capillary refill &gt;2 seconds.",
                            "Immunocompromised with fever and systemic symptoms."
                        ]
                    },
                    {
                        "title": "Elderly: signs hide",
                        "items": [
                            "Fever and chills may show as lethargy or poor appetite; the fever response may be impaired.",
                            "Confusion masked by dementia; tachycardia by beta-blockers; tachypnea by lung disease; hypotension by usual hypertension."
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
                                "label": "Pediatric drug calculator: paracetamol",
                                "sub": "15 mg/kg, maximum 1 g",
                                "href": "../pages/drug-calculator.html?drug=Paracetamol",
                                "icon": "pill"
                            },
                            {
                                "label": "Pediatric drug calculator: adrenaline",
                                "sub": "Push dose 0.005 mg/kg",
                                "href": "../pages/drug-calculator.html?drug=Epinephrine%20(Adrenaline)",
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
                    "SIRS criteria assessed and documented in suspected sepsis.",
                    "Temperature measured and documented in suspected sepsis.",
                    "Fluid given for hypotension where appropriate."
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
                        "label": "6.5 Altered Mental Status",
                        "href": "c6-5.html"
                    },
                    {
                        "label": "6.12 Pain Management",
                        "href": "c6-12.html"
                    },
                    {
                        "label": "8.10 Hyperthermia",
                        "href": "c8-10.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "What are the SIRS criteria?",
            "options": [
                "Temperature >38 or <36°C, HR >90, RR >20, acute confusion",
                "SBP <90, HR >120, RR >30, fever",
                "Cough, fever, dyspnea",
                "Lactate, WBC, urine output"
            ],
            "correct": 0,
            "explanation": "Two or more are needed."
        },
        {
            "q": "BP 85/50 after 1000 mL in an adult with sepsis. What next?",
            "options": [
                "Another bolus (up to 2000 mL), reassess",
                "Adrenaline straight away",
                "Stop fluids",
                "Paracetamol only"
            ],
            "correct": 0,
            "explanation": "Adrenaline is for poor perfusion after 2000 mL in adults."
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
            "explanation": "Repeat as needed, maximum 2000 mL."
        },
        {
            "q": "Which is a red flag?",
            "options": [
                "SBP <90 despite fluids",
                "Temperature 38.2°C alone",
                "HR 92 alone",
                "RR 21 alone"
            ],
            "correct": 0,
            "explanation": "Hypotension despite fluid resuscitation."
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
            "explanation": "Titrate."
        },
        {
            "q": "BP 100/70, HR 110, RR 24, 38.5°C, confused. How many SIRS criteria?",
            "options": [
                "4",
                "1",
                "2",
                "3"
            ],
            "correct": 0,
            "explanation": "Temperature, HR, RR and confusion."
        },
        {
            "q": "What is the adult paracetamol dose?",
            "options": [
                "1 g IV/PO",
                "500 mg IM",
                "2 g IV",
                "100 mg"
            ],
            "correct": 0,
            "explanation": "Paracetamol is EMT."
        },
        {
            "q": "Which is a source of infection to look for?",
            "options": [
                "A urinary catheter",
                "A wristwatch",
                "A plaster cast without wound",
                "Glasses"
            ],
            "correct": 0,
            "explanation": "Medical devices are potential sources."
        },
        {
            "q": "What is the pediatric bolus?",
            "options": [
                "20 mL/kg",
                "5 mL/kg",
                "50 mL/kg",
                "None"
            ],
            "correct": 0,
            "explanation": "Repeat as needed, maximum 60 mL/kg."
        },
        {
            "q": "A septic patient on beta-blockers has HR 80 and low BP. What does it mean?",
            "options": [
                "Tachycardia may be masked: still treat as shock",
                "No shock",
                "Bradycardia protocol only",
                "Stop fluids"
            ],
            "correct": 0,
            "explanation": "Beta-blockers mask tachycardia."
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
            "explanation": "Then consider adrenaline (AP)."
        },
        {
            "q": "When is adrenaline considered in a child?",
            "options": [
                "Poor perfusion after 40 mL/kg of fluid",
                "Immediately",
                "After 100 mL/kg",
                "Never"
            ],
            "correct": 0,
            "explanation": "Per the flowchart."
        },
        {
            "q": "Which vasopressor does this CPG use?",
            "options": [
                "Adrenaline",
                "Dopamine",
                "Atropine",
                "Vasopressin"
            ],
            "correct": 0,
            "explanation": "AP level."
        },
        {
            "q": "What is the adult push-dose adrenaline?",
            "options": [
                "0.01 mg IV/IO every 2–5 minutes",
                "0.1 mg",
                "1 mg",
                "0.5 mg IM"
            ],
            "correct": 0,
            "explanation": "Titrate to MAP >65."
        },
        {
            "q": "What is the adult adrenaline infusion?",
            "options": [
                "2–10 mcg/min",
                "0.05–0.3 mcg/min",
                "20 mcg/kg/min",
                "1 mg/min"
            ],
            "correct": 0,
            "explanation": "Children: 0.05–0.3 mcg/kg/min."
        },
        {
            "q": "Which is a sign of organ dysfunction?",
            "options": [
                "Mottled skin or reduced urine output",
                "Warm pink skin",
                "Normal mental status",
                "Normal SpO₂"
            ],
            "correct": 0,
            "explanation": "Also hypoxia."
        },
        {
            "q": "What are the adrenaline titration targets?",
            "options": [
                "MAP >65, improving shock, returning urine output",
                "SBP 200",
                "HR 150",
                "Normal temperature"
            ],
            "correct": 0,
            "explanation": "As listed."
        },
        {
            "q": "Temperature 35.5°C: does it count?",
            "options": [
                "Yes: below 36°C",
                "No",
                "Only in children",
                "Only with fever"
            ],
            "correct": 0,
            "explanation": "Hypothermia is a SIRS criterion."
        },
        {
            "q": "Which fluids are used?",
            "options": [
                "Normal saline or Ringer's lactate",
                "Dextrose 5%",
                "Colloids",
                "Oral only"
            ],
            "correct": 0,
            "explanation": "Crystalloid boluses."
        },
        {
            "q": "A child under 5, no syringe driver, needs adrenaline. Which form?",
            "options": [
                "Push doses",
                "Drip-set infusion",
                "IM",
                "None"
            ],
            "correct": 0,
            "explanation": "Push dose preferred over a drip-set infusion."
        },
        {
            "q": "Which patient is at higher risk?",
            "options": [
                "Immunocompromised (diabetes, cancer, HIV)",
                "Healthy athlete",
                "Teenager after a cold",
                "None"
            ],
            "correct": 0,
            "explanation": "And recent surgery or procedures."
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
            "explanation": "Reassess after each 20 mL/kg."
        },
        {
            "q": "What PPE for suspected meningitis?",
            "options": [
                "Mask and goggles",
                "None",
                "Gloves only",
                "Full hazmat"
            ],
            "correct": 0,
            "explanation": "As on the flowchart."
        },
        {
            "q": "Which antipyretic is in this CPG?",
            "options": [
                "Paracetamol",
                "Aspirin",
                "Ibuprofen",
                "Diclofenac"
            ],
            "correct": 0,
            "explanation": "Adults 1 g; children 15 mg/kg."
        },
        {
            "q": "SIRS met. What extra monitoring?",
            "options": [
                "ECG, EtCO₂ and SpO₂",
                "None",
                "Temperature only",
                "Blood cultures"
            ],
            "correct": 0,
            "explanation": "Plus routine vital signs."
        },
        {
            "q": "What is the caution with fluids?",
            "options": [
                "Overload in cardiac or renal disease",
                "None",
                "Hyperglycemia",
                "Hyperthermia"
            ],
            "correct": 0,
            "explanation": "Monitor for fluid overload."
        },
        {
            "q": "What is the pediatric push-dose adrenaline?",
            "options": [
                "0.005 mg/kg every 2–5 minutes",
                "0.01 mg/kg every minute",
                "0.1 mg/kg",
                "1 mg"
            ],
            "correct": 0,
            "explanation": "AP level."
        },
        {
            "q": "What must Dispatch 2 be told?",
            "options": [
                "That the patient meets SIRS criteria",
                "Nothing",
                "Only the address",
                "The temperature only"
            ],
            "correct": 0,
            "explanation": "When coordinating ED admission."
        },
        {
            "q": "Which is a KPI?",
            "options": [
                "SIRS criteria documented",
                "Antibiotics given",
                "Lactate measured",
                "Chest X-ray"
            ],
            "correct": 0,
            "explanation": "Also temperature and fluids for hypotension."
        },
        {
            "q": "Is adrenaline adjusted in cardiac disease?",
            "options": [
                "Yes: reduce it",
                "No",
                "Double it",
                "Never give it"
            ],
            "correct": 0,
            "explanation": "Reduce adrenaline in underlying cardiac disease."
        }
    ],
    "flashcards": [
        {
            "question": "SIRS criteria",
            "answer": "Temperature >38 or <36°C; HR >90; RR >20; acute confusion. Two or more = met."
        },
        {
            "question": "SIRS met: monitoring",
            "answer": "Routine vitals plus ECG, EtCO₂ and SpO₂."
        },
        {
            "question": "SIRS met: transport",
            "answer": "Recommend transfer; tell Dispatch 2."
        },
        {
            "question": "Adult fluid",
            "answer": "500–1000 mL NS or RL, repeat, maximum 2000 mL (EMT)."
        },
        {
            "question": "Pediatric fluid",
            "answer": "20 mL/kg, repeat, maximum 60 mL/kg (EMT)."
        },
        {
            "question": "When adrenaline",
            "answer": "Poor perfusion after 2000 mL (adult) or 40 mL/kg (child): AP."
        },
        {
            "question": "Adult adrenaline",
            "answer": "Push 0.01 mg IV/IO every 2–5 minutes; infusion 2–10 mcg/min."
        },
        {
            "question": "Pediatric adrenaline",
            "answer": "Push 0.005 mg/kg every 2–5 minutes; infusion 0.05–0.3 mcg/kg/min."
        },
        {
            "question": "Titration targets",
            "answer": "MAP >65, improving shock, returning urine output."
        },
        {
            "question": "Infusion safety",
            "answer": "Syringe driver preferred; cross-check drip rates; under 5 years without a driver: push doses."
        },
        {
            "question": "Paracetamol",
            "answer": "Adult 1 g IV/PO; child 15 mg/kg (maximum 1 g) (EMT)."
        },
        {
            "question": "Oxygen",
            "answer": "SpO₂ ≥94% if hypoxic or distressed."
        },
        {
            "question": "Red flags",
            "answer": "SBP <90 despite fluid; AMS; SpO₂ <90%; mottling or CRT >2 s; immunocompromise with fever."
        },
        {
            "question": "Elderly pitfalls",
            "answer": "Impaired fever; confusion masked by dementia; HR by beta-blockers; RR by lung disease; BP by hypertension."
        },
        {
            "question": "Sources",
            "answer": "Respiratory, urinary, skin, abdominal; catheters and central lines."
        },
        {
            "question": "Meningitis PPE",
            "answer": "Mask and goggles."
        },
        {
            "question": "Exclusion",
            "answer": "Non-infectious fever: heat stroke, drug reaction."
        },
        {
            "question": "Organ dysfunction",
            "answer": "Reduced urine output, mottled skin, hypoxia."
        },
        {
            "question": "Cardiac disease",
            "answer": "Reduce adrenaline."
        },
        {
            "question": "KPIs",
            "answer": "SIRS documented; temperature documented; fluid for hypotension."
        }
    ],
    "critical": [
        {
            "id": "crit_6_7_1",
            "scenario": "A 55-year-old diabetic has fever, rigors and a productive cough. BP 85/50, HR 120, RR 28, SpO₂ 91%, 39°C, confused.",
            "question": "What first?",
            "options": [
                {
                    "t": "Oxygen to ≥94%, IV access, 500–1000 mL fluid bolus, monitoring, and early transport with a SIRS alert",
                    "f": "Correct."
                },
                {
                    "t": "Paracetamol only",
                    "f": "He is in shock."
                },
                {
                    "t": "Adrenaline before fluid",
                    "f": "Fluid first."
                },
                {
                    "t": "Wait on scene for ALS",
                    "f": "Prioritise transport."
                }
            ],
            "correct": 0,
            "explanation": "SIRS criteria met with septic shock: aggressive fluid and prioritised transport.",
            "kpi": "SIRS criteria and temperature documented; fluid for hypotension."
        },
        {
            "id": "crit_6_7_2",
            "scenario": "A 40-year-old with an infected injection site is hypotensive. After 1000 mL her BP is 85/55.",
            "question": "What next?",
            "options": [
                {
                    "t": "Another 500–1000 mL bolus (up to 2000 mL) and reassess",
                    "f": "Correct. Adrenaline comes after 2000 mL."
                },
                {
                    "t": "Adrenaline infusion now",
                    "f": "Too early on this CPG."
                },
                {
                    "t": "Stop fluids",
                    "f": "She is still hypotensive."
                },
                {
                    "t": "Paracetamol only",
                    "f": "Treat the shock."
                }
            ],
            "correct": 0,
            "explanation": "Poor perfusion after 2000 mL: consider adrenaline (AP).",
            "kpi": "Fluid for hypotension where appropriate."
        },
        {
            "id": "crit_6_7_3",
            "scenario": "A 75-year-old from a care home with a urinary catheter is lethargic and 'not herself'. Temperature 37.5°C, HR 110, RR 24.",
            "question": "What do you suspect?",
            "options": [
                {
                    "t": "Sepsis from the catheter: SIRS met (HR, RR, confusion); transport and alert",
                    "f": "Correct."
                },
                {
                    "t": "No sepsis: no fever",
                    "f": "The elderly may not mount a fever."
                },
                {
                    "t": "Dementia only",
                    "f": "Acute change needs assessment."
                },
                {
                    "t": "Dehydration only",
                    "f": "Look for the source."
                }
            ],
            "correct": 0,
            "explanation": "Fever response may be impaired in the elderly; devices are infection sources.",
            "kpi": "SIRS criteria documented."
        },
        {
            "id": "crit_6_7_4",
            "scenario": "A 2-year-old (12 kg) is febrile, lethargic, HR 170, capillary refill 4 seconds.",
            "question": "What do you give?",
            "options": [
                {
                    "t": "20 mL/kg fluid IV, reassess, repeat (maximum 60 mL/kg); paracetamol 15 mg/kg",
                    "f": "Correct."
                },
                {
                    "t": "Adult 1000 mL bolus",
                    "f": "Use 20 mL/kg."
                },
                {
                    "t": "Adrenaline first",
                    "f": "Fluid first; adrenaline after 40 mL/kg if still poorly perfused."
                },
                {
                    "t": "Nothing until hospital",
                    "f": "Treat poor perfusion."
                }
            ],
            "correct": 0,
            "explanation": "Use the drug calculator for weight-based doses.",
            "kpi": "Fluid for hypotension where appropriate."
        },
        {
            "id": "crit_6_7_5",
            "scenario": "After 2000 mL an adult is still hypotensive and mottled. An AP is with you.",
            "question": "What is given?",
            "options": [
                {
                    "t": "Adrenaline: push 0.01 mg IV/IO every 2–5 minutes or infusion 2–10 mcg/min, titrated to MAP >65",
                    "f": "Correct."
                },
                {
                    "t": "Push 0.1 mg",
                    "f": "Ten times the listed push dose."
                },
                {
                    "t": "More fluid beyond 2000 mL",
                    "f": "The maximum is reached."
                },
                {
                    "t": "Dopamine",
                    "f": "This CPG uses adrenaline."
                }
            ],
            "correct": 0,
            "explanation": "Use a syringe driver if possible; reduce adrenaline in cardiac disease.",
            "kpi": "Fluid for hypotension where appropriate."
        }
    ]
};
