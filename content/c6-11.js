/* ========== CPG 6.11 – Non-Traumatic Shock ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c6-11",
    "title": "Non-Traumatic Shock",
    "shortTitle": "6.11 Non-Traumatic Shock",
    "guide": {
        "cpg": "6.11",
        "group": "medical",
        "groupLabel": "Medical",
        "title": "Non-Traumatic Shock",
        "lead": "Name the type of shock, because the fluid plan depends on it. Give small, fast boluses (250–500 mL adult) to a MAP of 65 in hypovolemic and distributive shock; in cardiogenic or obstructive shock listen to the lungs first. Fluid-refractory hypotension or hypotension with pulmonary edema: dopamine (AP).",
        "source": {
            "label": "CPG 6.11",
            "pages": "192–195",
            "pdf": "../pdf_sections/6_11_Non-Traumatic_Shock.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Shock not related to trauma: SBP &lt;90 mmHg or HR &gt;100 (adults; age-specific in children), poor perfusion (capillary refill &gt;2 seconds), altered mental status, weakness or respiratory distress.",
                    "Suspected sepsis, anaphylaxis, cardiogenic shock or internal bleeding (GI, ectopic pregnancy)."
                ],
                "exclude": [
                    "Shock clearly due to trauma."
                ]
            },
            {
                "type": "table",
                "title": "Types of shock",
                "icon": "search",
                "columns": [
                    "Type",
                    "Clues",
                    "Common causes"
                ],
                "rows": [
                    [
                        "Hypovolemic",
                        "Fluid loss: vomiting, diarrhea, occult bleeding",
                        "Dehydration, GI bleeding, ruptured ectopic pregnancy"
                    ],
                    [
                        "Distributive",
                        "Fever, infection; urticaria, wheeze",
                        "Sepsis, anaphylaxis, neurogenic shock"
                    ],
                    [
                        "Cardiogenic",
                        "Chest pain, dyspnea, heart disease",
                        "MI, heart failure, arrhythmias"
                    ],
                    [
                        "Obstructive",
                        "Distended neck veins, muffled heart sounds",
                        "Pulmonary embolism, tamponade, tension pneumothorax"
                    ]
                ],
                "stack": true,
                "notes": [
                    "Also consider adrenal insufficiency, hypoglycemia and drug overdose (e.g. antihypertensives)."
                ]
            },
            {
                "type": "steps",
                "title": "Management",
                "icon": "list",
                "steps": [
                    {
                        "title": "IV access",
                        "level": "EMT",
                        "text": "Two large-bore IVs for severe shock; IO if IV fails."
                    },
                    {
                        "title": "Oxygen",
                        "level": "EMR",
                        "text": "SpO<sub>2</sub> ≥94% if hypoxic or distressed (flowchart: &gt;94%)."
                    },
                    {
                        "title": "Septic or anaphylactic shock",
                        "text": "Also follow the Fever and Sepsis or Anaphylaxis CPG."
                    },
                    {
                        "title": "Fluid bolus",
                        "level": "EMT",
                        "text": "NS or RL over 5–10 minutes; repeat while SBP &lt;90 mmHg, MAP &lt;65 mmHg or the radial pulse is absent.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "250–500 mL IV",
                                "note": "Up to 2000 mL",
                                "level": "EMT"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "20 mL/kg IV",
                                "note": "Flowchart: 10–20 mL/kg; maximum 40 mL/kg",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Cardiogenic or obstructive",
                        "text": "Assess lung sounds first; give fluid only if clear, in smaller boluses. Watch for pulmonary edema (crackles, dyspnea)."
                    },
                    {
                        "title": "Dopamine",
                        "level": "AP",
                        "text": "Fluid-refractory hypotension once fluid maximums are reached, or hypotension with pulmonary edema.",
                        "doses": [
                            {
                                "drug": "Dopamine",
                                "dose": "5–20 mcg/kg/min IV infusion",
                                "note": "Adults and children; flowchart: 2–20",
                                "level": "AP"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Targets and red flags",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "Fluid targets",
                        "items": [
                            "Adults: MAP 65 mmHg.",
                            "Children: SBP at least the fifth percentile for age, strong distal pulses, warm skin, capillary refill &lt;2 seconds, improving mental status."
                        ]
                    },
                    {
                        "title": "Red flags",
                        "items": [
                            "Hypotension persisting despite fluid.",
                            "Severe altered mental status.",
                            "SpO<sub>2</sub> &lt;90% or respiratory failure.",
                            "Cardiogenic or obstructive shock."
                        ]
                    },
                    {
                        "title": "Elderly",
                        "items": [
                            "Atypical: confusion, little tachycardia on beta-blockers.",
                            "Heart failure: caution with fluid; consult Tele-EMS."
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
                        "title": "Rhythms behind cardiogenic and obstructive shock",
                        "items": [
                            {
                                "ecg": "chb",
                                "label": "Complete heart block",
                                "sub": "Arrhythmia: cardiogenic cause"
                            },
                            {
                                "ecg": "alternans",
                                "label": "Electrical alternans",
                                "sub": "Tamponade: obstructive cause"
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
                    "IV fluid given to hypotensive patients."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "6.7 Fever and Sepsis",
                        "href": "c6-7.html"
                    },
                    {
                        "label": "6.4 Anaphylaxis",
                        "href": "c6-4.html"
                    },
                    {
                        "label": "6.3 Adrenal Insufficiency",
                        "href": "c6-3.html"
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
            "q": "Which signs define shock here?",
            "options": [
                "SBP <90, HR >100, poor perfusion, altered mental status",
                "Fever alone",
                "Hypertension",
                "Bradypnea"
            ],
            "correct": 0,
            "explanation": "Age-specific values in children."
        },
        {
            "q": "What is the adult bolus?",
            "options": [
                "250–500 mL over 5–10 minutes",
                "1000 mL over an hour",
                "50 mL",
                "None"
            ],
            "correct": 0,
            "explanation": "Repeat up to 2000 mL."
        },
        {
            "q": "Cardiogenic shock with crackles. Fluid?",
            "options": [
                "No fluid; consider dopamine (AP)",
                "Large boluses",
                "Colloids",
                "Oral fluids"
            ],
            "correct": 0,
            "explanation": "Fluid only if the lung sounds are clear; dopamine for hypotension with pulmonary edema."
        },
        {
            "q": "What is the pediatric bolus in the text?",
            "options": [
                "20 mL/kg",
                "5 mL/kg",
                "60 mL/kg",
                "None"
            ],
            "correct": 0,
            "explanation": "Maximum 40 mL/kg."
        },
        {
            "q": "Which vasopressor does this CPG use?",
            "options": [
                "Dopamine",
                "Adrenaline push",
                "Atropine",
                "Amiodarone"
            ],
            "correct": 0,
            "explanation": "AP level."
        },
        {
            "q": "What dopamine dose does the text give?",
            "options": [
                "5–20 mcg/kg/min",
                "0.5–1 mcg/kg/min",
                "50 mcg/kg/min",
                "1 mg/min"
            ],
            "correct": 0,
            "explanation": "The flowchart prints 2–20."
        },
        {
            "q": "When is dopamine indicated?",
            "options": [
                "Fluid-refractory hypotension at the fluid maximum, or hypotension with pulmonary edema",
                "First line in every shock",
                "Never",
                "Only in children"
            ],
            "correct": 0,
            "explanation": "As listed."
        },
        {
            "q": "Anaphylactic shock is which type?",
            "options": [
                "Distributive",
                "Hypovolemic",
                "Cardiogenic",
                "Obstructive"
            ],
            "correct": 0,
            "explanation": "With sepsis and neurogenic shock."
        },
        {
            "q": "What MAP is the adult fluid target?",
            "options": [
                "65 mmHg",
                "40 mmHg",
                "100 mmHg",
                "120 mmHg"
            ],
            "correct": 0,
            "explanation": "Children: SBP at least the fifth percentile for age, plus perfusion signs."
        },
        {
            "q": "Shock in a patient with heart failure. Fluid?",
            "options": [
                "With caution; consult Tele-EMS",
                "Full boluses",
                "Never",
                "Only oral"
            ],
            "correct": 0,
            "explanation": "Elderly and heart failure considerations."
        },
        {
            "q": "Which is a cause of obstructive shock?",
            "options": [
                "Pulmonary embolism",
                "Myocardial infarction",
                "Sepsis",
                "Dehydration"
            ],
            "correct": 0,
            "explanation": "Also tamponade and tension pneumothorax."
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
            "explanation": "Then consider dopamine."
        },
        {
            "q": "What is the pediatric fluid maximum?",
            "options": [
                "40 mL/kg",
                "20 mL/kg",
                "60 mL/kg",
                "100 mL/kg"
            ],
            "correct": 0,
            "explanation": "Per this CPG."
        },
        {
            "q": "What oxygen target applies?",
            "options": [
                "SpO₂ ≥94% if hypoxic or distressed",
                "100% always",
                "88%",
                "None"
            ],
            "correct": 0,
            "explanation": "EMR level."
        },
        {
            "q": "Shock with RBS 45 mg/dL. What do you consider?",
            "options": [
                "Hypoglycemia as an alternative cause: Hypoglycemia CPG",
                "Ignore it",
                "Dopamine first",
                "Oral fluids"
            ],
            "correct": 0,
            "explanation": "Listed alternative cause."
        },
        {
            "q": "Which is a sign of poor perfusion?",
            "options": [
                "Capillary refill >2 seconds",
                "Warm, dry skin",
                "Normal mental status",
                "Strong radial pulse"
            ],
            "correct": 0,
            "explanation": "Also cool, pale, mottled skin."
        },
        {
            "q": "Which fluids are used?",
            "options": [
                "Normal saline or Ringer's lactate",
                "Dextrose 5%",
                "Colloids",
                "Oral water"
            ],
            "correct": 0,
            "explanation": "Isotonic crystalloids."
        },
        {
            "q": "Suspected cardiogenic shock with clear lungs. Fluid?",
            "options": [
                "A smaller bolus with close reassessment",
                "No fluid ever",
                "2000 mL at once",
                "Dopamine only"
            ],
            "correct": 0,
            "explanation": "Lung sounds clear: fluid is allowed, cautiously."
        },
        {
            "q": "How fast is each bolus given?",
            "options": [
                "Over 5–10 minutes",
                "Over 2 hours",
                "Over 30 seconds",
                "No limit"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "HR 40 and BP 80/50 with no trauma. Which type?",
            "options": [
                "Cardiogenic (arrhythmia)",
                "Anaphylactic",
                "Hypovolemic",
                "Septic"
            ],
            "correct": 0,
            "explanation": "Arrhythmias cause cardiogenic shock."
        },
        {
            "q": "Which is a red flag?",
            "options": [
                "Hypotension despite fluid",
                "HR 95",
                "SBP 110",
                "Warm skin"
            ],
            "correct": 0,
            "explanation": "Also severe AMS, hypoxia, cardiogenic or obstructive shock."
        },
        {
            "q": "When is the fluid bolus repeated?",
            "options": [
                "SBP <90, MAP <65 or no radial pulse",
                "Always",
                "Never",
                "Only if febrile"
            ],
            "correct": 0,
            "explanation": "Up to the maximum."
        },
        {
            "q": "Septic shock refractory to fluids. Which CPG adds vasopressor guidance?",
            "options": [
                "Fever and Sepsis",
                "Epistaxis",
                "Stroke",
                "Pain"
            ],
            "correct": 0,
            "explanation": "Refer to the condition-specific CPG."
        },
        {
            "q": "Which is a cause of hypovolemic shock?",
            "options": [
                "GI bleeding",
                "Pulmonary embolism",
                "Tamponade",
                "Anaphylaxis"
            ],
            "correct": 0,
            "explanation": "Also dehydration and ruptured ectopic pregnancy."
        },
        {
            "q": "What is the pediatric target?",
            "options": [
                "SBP at least the fifth percentile for age with good perfusion",
                "SBP 140",
                "MAP 100",
                "HR 200"
            ],
            "correct": 0,
            "explanation": "Strong pulses, warm skin, CRT <2 seconds, better mental status."
        },
        {
            "q": "How might shock look in the elderly?",
            "options": [
                "Confusion with little tachycardia (beta-blockers)",
                "Always obvious",
                "Always febrile",
                "Hypertensive"
            ],
            "correct": 0,
            "explanation": "Atypical presentation."
        },
        {
            "q": "Which IV access for severe shock?",
            "options": [
                "Two large-bore IVs",
                "One small cannula",
                "None",
                "Oral"
            ],
            "correct": 0,
            "explanation": "EMT level."
        },
        {
            "q": "Distended neck veins and muffled heart sounds suggest…",
            "options": [
                "Obstructive shock (tamponade)",
                "Hypovolemic shock",
                "Anaphylaxis",
                "Sepsis"
            ],
            "correct": 0,
            "explanation": "Assess lung sounds before fluid."
        },
        {
            "q": "What is the KPI?",
            "options": [
                "IV fluid for hypotensive patients",
                "Dopamine for all",
                "12-lead in all",
                "Transport within 10 minutes"
            ],
            "correct": 0,
            "explanation": "A single KPI."
        },
        {
            "q": "What is the main risk of over-resuscitation in cardiogenic shock?",
            "options": [
                "Pulmonary edema",
                "Hypoglycemia",
                "Hyperthermia",
                "Seizures"
            ],
            "correct": 0,
            "explanation": "Monitor for crackles and dyspnea."
        }
    ],
    "flashcards": [
        {
            "question": "Four types",
            "answer": "Hypovolemic, distributive, cardiogenic, obstructive."
        },
        {
            "question": "Hypovolemic causes",
            "answer": "Dehydration, GI bleeding, ruptured ectopic pregnancy."
        },
        {
            "question": "Distributive causes",
            "answer": "Sepsis, anaphylaxis, neurogenic shock."
        },
        {
            "question": "Cardiogenic causes",
            "answer": "MI, heart failure, arrhythmias."
        },
        {
            "question": "Obstructive causes",
            "answer": "Pulmonary embolism, tamponade, tension pneumothorax."
        },
        {
            "question": "Adult bolus",
            "answer": "250–500 mL NS or RL over 5–10 minutes, up to 2000 mL (EMT)."
        },
        {
            "question": "Pediatric bolus",
            "answer": "20 mL/kg (flowchart 10–20), maximum 40 mL/kg."
        },
        {
            "question": "Repeat trigger",
            "answer": "SBP <90, MAP <65 or absent radial pulse."
        },
        {
            "question": "Adult target",
            "answer": "MAP 65 mmHg."
        },
        {
            "question": "Pediatric target",
            "answer": "SBP ≥fifth percentile for age, strong pulses, warm skin, CRT <2 s, improving mental status."
        },
        {
            "question": "Cardiogenic/obstructive fluid",
            "answer": "Lung sounds first; fluid only if clear, in smaller boluses."
        },
        {
            "question": "Dopamine",
            "answer": "5–20 mcg/kg/min IV (AP); flowchart 2–20."
        },
        {
            "question": "Dopamine indications",
            "answer": "Fluid-refractory hypotension at the maximum, or hypotension with pulmonary edema."
        },
        {
            "question": "IV access",
            "answer": "Two large-bore for severe shock; IO if needed."
        },
        {
            "question": "Oxygen",
            "answer": "SpO₂ ≥94% if hypoxic or distressed (EMR)."
        },
        {
            "question": "Red flags",
            "answer": "Hypotension despite fluid; severe AMS; SpO₂ <90%; cardiogenic or obstructive shock."
        },
        {
            "question": "Elderly",
            "answer": "Atypical presentation; caution with fluid in heart failure; Tele-EMS."
        },
        {
            "question": "Alternative causes",
            "answer": "Trauma, adrenal insufficiency, hypoglycemia, drug overdose."
        },
        {
            "question": "Exclusion",
            "answer": "Shock clearly due to trauma."
        },
        {
            "question": "KPI",
            "answer": "IV fluid for hypotensive patients."
        }
    ],
    "critical": [
        {
            "id": "crit_6_11_1",
            "scenario": "A 50-year-old with chest pain is now hypotensive (80/50), HR 120, with crackles at both bases.",
            "question": "Which shock and what treatment?",
            "options": [
                {
                    "t": "Cardiogenic with pulmonary edema: no fluid bolus; dopamine (AP)",
                    "f": "Correct."
                },
                {
                    "t": "Hypovolemic: 2000 mL fast",
                    "f": "Crackles mean no fluid."
                },
                {
                    "t": "Anaphylaxis: adrenaline IM",
                    "f": "No allergic features."
                },
                {
                    "t": "Observe",
                    "f": "He is in shock."
                }
            ],
            "correct": 0,
            "explanation": "Assess lung sounds before fluid in cardiogenic or obstructive shock; hypotension with pulmonary edema is a dopamine indication.",
            "kpi": "IV fluid given to hypotensive patients (where appropriate)."
        },
        {
            "id": "crit_6_11_2",
            "scenario": "A 30-year-old woman with abdominal pain and a positive pregnancy test fainted. She is pale; BP 85/50, HR 110.",
            "question": "What do you suspect and do?",
            "options": [
                {
                    "t": "Hypovolemic shock from a ruptured ectopic pregnancy: two large-bore IVs, 250–500 mL boluses to MAP 65, urgent transport",
                    "f": "Correct."
                },
                {
                    "t": "Vasovagal faint: no treatment",
                    "f": "She is shocked."
                },
                {
                    "t": "Dopamine first",
                    "f": "Fluid first."
                },
                {
                    "t": "Oral fluids",
                    "f": "Not in shock."
                }
            ],
            "correct": 0,
            "explanation": "Ruptured ectopic pregnancy is a listed hypovolemic cause.",
            "kpi": "IV fluid given to hypotensive patients."
        },
        {
            "id": "crit_6_11_3",
            "scenario": "An adult in hypovolemic shock has had 2000 mL and is still hypotensive with no radial pulse.",
            "question": "What next?",
            "options": [
                {
                    "t": "Dopamine 5–20 mcg/kg/min (AP)",
                    "f": "Correct. The fluid maximum has been reached."
                },
                {
                    "t": "Another 2000 mL",
                    "f": "The maximum is 2000 mL."
                },
                {
                    "t": "Stop and wait",
                    "f": "Treat the refractory hypotension."
                },
                {
                    "t": "Oral fluids",
                    "f": "Not appropriate."
                }
            ],
            "correct": 0,
            "explanation": "Fluid-refractory hypotension after the maximum: dopamine.",
            "kpi": "IV fluid given to hypotensive patients."
        },
        {
            "id": "crit_6_11_4",
            "scenario": "A hypotensive man has distended neck veins and muffled heart sounds. The monitor shows the pattern below.",
            "ecg": "alternans",
            "question": "What type of shock?",
            "options": [
                {
                    "t": "Obstructive (tamponade): assess lungs; cautious small boluses only if clear; urgent transport",
                    "f": "Correct."
                },
                {
                    "t": "Hypovolemic: large boluses",
                    "f": "Neck veins are distended."
                },
                {
                    "t": "Distributive",
                    "f": "No sepsis or allergy features."
                },
                {
                    "t": "No shock",
                    "f": "He is hypotensive."
                }
            ],
            "correct": 0,
            "explanation": "Obstructive shock is a red flag; avoid over-resuscitation.",
            "kpi": "IV fluid given to hypotensive patients (where appropriate)."
        },
        {
            "id": "crit_6_11_5",
            "scenario": "A 4-year-old (16 kg) with severe gastroenteritis has cool mottled skin, weak pulses and capillary refill of 4 seconds.",
            "question": "What fluid plan?",
            "options": [
                {
                    "t": "20 mL/kg bolus, reassess, repeat to a maximum of 40 mL/kg",
                    "f": "Correct."
                },
                {
                    "t": "Adult 500 mL",
                    "f": "Use weight-based dosing."
                },
                {
                    "t": "60 mL/kg at once",
                    "f": "Above this CPG's maximum."
                },
                {
                    "t": "No fluid in children",
                    "f": "She needs fluid."
                }
            ],
            "correct": 0,
            "explanation": "Target SBP ≥fifth percentile, strong pulses, warm skin, CRT <2 s.",
            "kpi": "IV fluid given to hypotensive patients."
        }
    ]
};
