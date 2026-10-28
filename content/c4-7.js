/* ========== CPG 4.7 – Post Cardiac Arrest Care (ROSC) ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c4-7",
    "title": "Post Cardiac Arrest Care (ROSC)",
    "shortTitle": "4.7 Post‑ROSC",
    "guide": {
        "cpg": "4.7",
        "group": "resus",
        "groupLabel": "Resuscitation",
        "title": "Post Cardiac Arrest Care (ROSC)",
        "lead": "After ROSC, prevent re-arrest: secure the airway, ventilate to normal EtCO<sub>2</sub>, avoid hyperoxia, correct hypotension, record a 12-lead and look for the cause. Move gently, and be ready to restart CPR.",
        "source": {
            "label": "CPG 4.7",
            "pages": "120–124",
            "pdf": "../pdf_sections/4_7_Post_Cardiac_Arrest_Care_ROSC.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Adults and children with ROSC after cardiac arrest: palpable pulse."
                ],
                "exclude": [
                    "No ROSC: ongoing CPR."
                ]
            },
            {
                "type": "list",
                "title": "Confirm ROSC",
                "icon": "heart-pulse",
                "items": [
                    "Organized rhythm, and a palpable carotid or femoral pulse for at least 10 seconds.",
                    "EtCO<sub>2</sub> &gt;40 mmHg supports sustained circulation.",
                    "All ROSC patients are Red priority. Consider ALS back-up if not already activated; meeting ALS en route is appropriate."
                ]
            },
            {
                "type": "steps",
                "title": "Initial stabilisation",
                "icon": "list",
                "steps": [
                    {
                        "title": "Airway",
                        "level": "P",
                        "text": "Consider an endotracheal tube. An unresponsive patient being transported should have a supraglottic airway at least."
                    },
                    {
                        "title": "Breathing",
                        "text": "Adults: start at 10 breaths/min. Titrate oxygen to SpO<sub>2</sub> 94–98% (flowchart: 92–98%) and EtCO<sub>2</sub> 35–45 mmHg. Use a ventilator if available; avoid hyper- and hypoventilation."
                    },
                    {
                        "title": "Vital signs",
                        "text": "RR, HR, BP, SpO<sub>2</sub>, EtCO<sub>2</sub>, AVPU or GCS, pupils and focal deficits."
                    },
                    {
                        "title": "12-lead ECG",
                        "level": "EMT",
                        "text": "All medical arrests (look for STEMI). After traumatic arrest, only if cardiac involvement is suspected."
                    },
                    {
                        "title": "Circulation",
                        "text": "Targets: adults SBP ≥90 mmHg or MAP &gt;65 mmHg; children SBP above the 5th percentile for age. IV access, a second line if vasopressors are likely; IO if IV fails."
                    },
                    {
                        "title": "Fluid bolus for hypotension",
                        "level": "EMT",
                        "text": "Normal saline or Ringer's lactate. Reassess after each bolus; avoid fluid overload in cardiogenic shock (pulmonary edema, distended neck veins).",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "250–500 mL IV/IO",
                                "note": "Flowchart: 250 mL",
                                "level": "EMT"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "10–20 mL/kg IV/IO",
                                "note": "Flowchart: 10 mL/kg",
                                "level": "EMT"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "table",
                "title": "Vasopressors (AP)",
                "icon": "syringe",
                "columns": [
                    "",
                    "Adult",
                    "Pediatric"
                ],
                "rows": [
                    {
                        "group": "Adrenaline: hypotensive shock"
                    },
                    [
                        "Push dose",
                        "0.01 mg IV/IO every 2–5 minutes",
                        "0.005 mg/kg IV/IO every 2–5 minutes"
                    ],
                    [
                        "Infusion",
                        "0.05–0.3 mcg/kg/min IV/IO",
                        "0.05–0.3 mcg/kg/min IV/IO"
                    ],
                    {
                        "group": "Dopamine: normotensive shock"
                    },
                    [
                        "Infusion",
                        "5–20 mcg/kg/min IV/IO",
                        "5–20 mcg/kg/min IV/IO"
                    ]
                ],
                "notes": [
                    "For shock that does not respond to fluid, or when there is volume overload. Titrate to the BP targets.",
                    "Adrenaline is preferred for hypotensive shock: dopamine carries a higher risk of arrhythmia at vasopressor doses.",
                    "The adult push dose is 0.01 mg on the flowchart but printed as 0.01 mg/kg in the text; the flowchart dose matches the push-dose regimen elsewhere in the CPG."
                ]
            },
            {
                "type": "steps",
                "title": "Continued management",
                "icon": "activity",
                "steps": [
                    {
                        "title": "Reversible causes",
                        "text": "Hypovolemia, hypoxia, hydrogen ion (acidosis), hypo/hyperkalemia, hypothermia; tension pneumothorax, tamponade, toxins, pulmonary or coronary thrombosis."
                    },
                    {
                        "title": "Arrhythmias",
                        "text": "Watch for recurrent VF/VT or bradycardia; be ready to defibrillate, pace or restart CPR."
                    },
                    {
                        "title": "Targeted temperature management",
                        "text": "For unresponsive patients, as soon as possible; target 32–36°C. Remove clothing and run the air conditioning as cold as possible. Ice packs are not routine: core temperature cannot be monitored."
                    },
                    {
                        "title": "Seizures",
                        "text": "Benzodiazepines as per the Seizures CPG."
                    },
                    {
                        "title": "Before moving",
                        "text": "Full reassessment of airway, breathing, circulation and vital signs. Avoid rapid or rough movement for up to 10 minutes after ROSC: it may cause re-arrest."
                    }
                ]
            },
            {
                "type": "doses",
                "title": "Sedation",
                "icon": "pill",
                "rows": [
                    {
                        "drug": "Midazolam",
                        "dose": "Adult 1–5 mg IV; child 0.1 mg/kg IV",
                        "note": "Repeat as required after 10 minutes"
                    },
                    {
                        "drug": "Diazepam",
                        "dose": "Adult 1–5 mg IV; child 0.1 mg/kg IV (maximum 5 mg)",
                        "note": "Repeat as required after 10 minutes"
                    },
                    {
                        "drug": "Ketamine",
                        "dose": "Adult 0.25–1 mg/kg IV/IO; child 0.5–1 mg/kg IV/IO",
                        "note": "Repeat as required after 10 minutes"
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Sedation rules",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "Give for",
                        "items": [
                            "Agitation that hinders care or safety.",
                            "An ETT already in place: ketamine or a benzodiazepine to keep the tube and ventilator synchrony."
                        ]
                    },
                    {
                        "title": "Do not",
                        "items": [
                            "Give narcotic analgesia to facilitate ETT placement.",
                            "Sedate to keep a supraglottic airway in: if an SGA or OPA causes significant agitation, remove it."
                        ]
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Special situations",
                "icon": "stethoscope",
                "groups": [
                    {
                        "title": "Children",
                        "items": [
                            "Arrest is usually hypoxic: focus on effective ventilation.",
                            "Intubation is harder; an effective supraglottic airway may be enough."
                        ]
                    },
                    {
                        "title": "Traumatic brain injury",
                        "items": [
                            "Adults: SBP &gt;90 mmHg / MAP &gt;65 mmHg, or MAP 70–80 for isolated TBI.",
                            "Children: age-appropriate SBP, (age × 2) + 70."
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
                        "title": "Look for the cause, and watch for re-arrest",
                        "items": [
                            {
                                "ecg": "stemiInf",
                                "lead": "III",
                                "label": "Inferior STEMI (lead III)",
                                "sub": "12-lead within 5 minutes of ROSC"
                            },
                            {
                                "ecg": "vfFine",
                                "label": "Ventricular fibrillation",
                                "sub": "Re-arrest: defibrillate and restart CPR"
                            }
                        ]
                    },
                    {
                        "title": "Tools",
                        "items": [
                            {
                                "label": "Pediatric drug calculator",
                                "sub": "Weight-based fluids, vasopressors and sedation",
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
                    "Vital signs including EtCO<sub>2</sub> recorded within 5 minutes of ROSC.",
                    "12-lead ECG within 5 minutes of ROSC for all non-traumatic arrests."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "4.3 Adult Cardiac Arrest",
                        "href": "c4-3.html"
                    },
                    {
                        "label": "4.4 Pediatric Cardiac Arrest",
                        "href": "c4-4.html"
                    },
                    {
                        "label": "3.1 Chest Pain / ACS",
                        "href": "c3-1.html"
                    },
                    {
                        "label": "2.5 Invasive Mechanical Ventilation",
                        "href": "c2.html?section=c2s5"
                    },
                    {
                        "label": "5.2 Seizures",
                        "href": "c5-2.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "What SpO₂ range does the text set after ROSC?",
            "options": [
                "94–98%",
                "88–92%",
                "100%",
                "As high as possible"
            ],
            "correct": 0,
            "explanation": "Titrate oxygen to SpO₂ 94–98% to avoid hyperoxia (the flowchart prints 92–98%)."
        },
        {
            "q": "Which EtCO₂ value indicates ROSC?",
            "options": [
                ">40 mmHg",
                "<10 mmHg",
                "10–20 mmHg",
                "Any value"
            ],
            "correct": 0,
            "explanation": "EtCO₂ >40 mmHg indicates sustained circulation."
        },
        {
            "q": "What EtCO₂ do you target after ROSC?",
            "options": [
                "35–45 mmHg",
                "25–30 mmHg",
                "50–60 mmHg",
                "As low as possible"
            ],
            "correct": 0,
            "explanation": "35–45 mmHg avoids hypo- and hypercapnia."
        },
        {
            "q": "Adult ROSC, SBP 85 mmHg, clear chest. What fluid?",
            "options": [
                "250–500 mL normal saline or Ringer's lactate IV/IO",
                "100 mL",
                "Two litres rapidly",
                "No fluid after ROSC"
            ],
            "correct": 0,
            "explanation": "Reassess after each bolus; the flowchart starts with 250 mL."
        },
        {
            "q": "Which vasopressor is preferred for hypotensive shock after ROSC?",
            "options": [
                "Adrenaline",
                "Dopamine",
                "Atropine",
                "Amiodarone"
            ],
            "correct": 0,
            "explanation": "Dopamine carries a higher arrhythmia risk at vasopressor doses; it is preferred for normotensive shock."
        },
        {
            "q": "What is the adult push-dose adrenaline on the flowchart?",
            "options": [
                "0.01 mg IV/IO every 2–5 minutes",
                "1 mg IV every 3–5 minutes",
                "0.5 mg IM",
                "0.1 mg/kg IV"
            ],
            "correct": 0,
            "explanation": "0.01 mg every 2–5 minutes (AP). The text prints 0.01 mg/kg, which conflicts with the flowchart."
        },
        {
            "q": "Pediatric ROSC with hypotension: what fluid bolus?",
            "options": [
                "10–20 mL/kg IV/IO",
                "5 mL/kg",
                "40 mL/kg",
                "None"
            ],
            "correct": 0,
            "explanation": "The flowchart starts with 10 mL/kg; reassess after each bolus."
        },
        {
            "q": "What is the TTM target temperature?",
            "options": [
                "32–36°C",
                "30–32°C",
                "37–38°C",
                "Below 30°C"
            ],
            "correct": 0,
            "explanation": "Start TTM as soon as possible for unresponsive patients."
        },
        {
            "q": "An intubated ROSC patient is fighting the ventilator. Which drugs are allowed?",
            "options": [
                "Ketamine or a benzodiazepine",
                "Morphine to keep the tube in",
                "Nothing",
                "Adrenaline"
            ],
            "correct": 0,
            "explanation": "Ketamine or a benzodiazepine keeps an ETT in place and ensures ventilator synchrony. Narcotics are not given to facilitate ETT placement."
        },
        {
            "q": "What is the adult midazolam dose?",
            "options": [
                "1–5 mg IV, repeat after 10 minutes as required",
                "10 mg IM",
                "0.5 mg/kg",
                "15 mg IV"
            ],
            "correct": 0,
            "explanation": "Diazepam uses the same adult dose."
        },
        {
            "q": "What is the pediatric ketamine dose?",
            "options": [
                "0.5–1 mg/kg IV/IO",
                "0.25 mg/kg only",
                "2 mg/kg",
                "5 mg/kg"
            ],
            "correct": 0,
            "explanation": "Adults 0.25–1 mg/kg; children 0.5–1 mg/kg; repeat after 10 minutes as required."
        },
        {
            "q": "Hypotension with pulmonary edema after ROSC. What changes?",
            "options": [
                "Avoid aggressive fluids; use a vasopressor",
                "Give large fluid boluses",
                "Sit up and give nitrates",
                "No treatment"
            ],
            "correct": 0,
            "explanation": "Suspected cardiogenic shock: avoid fluid overload; vasopressors are indicated with volume overload."
        },
        {
            "q": "When is a 12-lead ECG done after ROSC?",
            "options": [
                "All medical arrests, within 5 minutes",
                "Only if the patient wakes",
                "Only at hospital",
                "Only after trauma"
            ],
            "correct": 0,
            "explanation": "KPI: within 5 minutes for all non-traumatic ROSC."
        },
        {
            "q": "ROSC after traumatic arrest. Is a 12-lead required?",
            "options": [
                "Only if cardiac involvement is suspected",
                "Always",
                "Never",
                "Only in children"
            ],
            "correct": 0,
            "explanation": "After trauma, a 12-lead is needed only if cardiac involvement is suspected."
        },
        {
            "q": "The ROSC patient's 12-lead shows STEMI. Where do you go?",
            "options": [
                "A facility capable of advanced post-arrest care for STEMI",
                "The nearest clinic",
                "Treat at scene",
                "Wherever the family asks"
            ],
            "correct": 0,
            "explanation": "Rapid transport to a facility appropriate to the condition (e.g. STEMI)."
        },
        {
            "q": "A supraglottic airway is agitating a waking patient. What do you do?",
            "options": [
                "Remove it",
                "Sedate to keep it in",
                "Paralyse",
                "Tape it more firmly"
            ],
            "correct": 0,
            "explanation": "Do not sedate to keep an SGA; remove it if it causes significant agitation."
        },
        {
            "q": "BP target after ROSC in an adult with isolated TBI?",
            "options": [
                "MAP 70–80 mmHg",
                "SBP ≥120 mmHg",
                "SBP 80 mmHg",
                "No target"
            ],
            "correct": 0,
            "explanation": "SBP >90 / MAP >65 mmHg, or MAP 70–80 for isolated TBI."
        },
        {
            "q": "Pediatric SBP formula used after TBI?",
            "options": [
                "(age × 2) + 70",
                "age × 10",
                "90 + age",
                "(age × 4) + 50"
            ],
            "correct": 0,
            "explanation": "Age-appropriate SBP using (age × 2) + 70."
        },
        {
            "q": "The patient re-arrests in VF. What do you do?",
            "options": [
                "Defibrillate and restart CPR as per the Cardiac Arrest CPG",
                "Give dopamine",
                "Start TTM",
                "Wait for a pulse"
            ],
            "correct": 0,
            "explanation": "Monitor for recurrent VF/VT and be ready to defibrillate."
        },
        {
            "q": "What is the adrenaline infusion rate?",
            "options": [
                "0.05–0.3 mcg/kg/min",
                "2–10 mg/min",
                "5–20 mcg/kg/min",
                "1 mg/hour"
            ],
            "correct": 0,
            "explanation": "The same for adults and children; 5–20 mcg/kg/min is dopamine."
        },
        {
            "q": "What is the dopamine dose?",
            "options": [
                "5–20 mcg/kg/min IV/IO",
                "0.05–0.3 mcg/kg/min",
                "1 mg push",
                "50 mcg/kg/min"
            ],
            "correct": 0,
            "explanation": "Adults and children; preferred for normotensive shock."
        },
        {
            "q": "Which level gives vasopressors on the flowchart?",
            "options": [
                "AP",
                "EMT",
                "EMR",
                "P"
            ],
            "correct": 0,
            "explanation": "Vasopressors are AP; the fluid bolus and 12-lead are EMT; ETT is P."
        },
        {
            "q": "Why are ice packs not routine for TTM?",
            "options": [
                "Core temperature cannot be adequately monitored",
                "They are too expensive",
                "They cause hypoglycemia",
                "They raise BP"
            ],
            "correct": 0,
            "explanation": "Remove clothing and cool the vehicle instead."
        },
        {
            "q": "How long should rough movement be avoided after ROSC?",
            "options": [
                "Up to 10 minutes",
                "1 minute",
                "1 hour",
                "No limit"
            ],
            "correct": 0,
            "explanation": "Rapid or rough movement may cause re-arrest."
        },
        {
            "q": "What ventilation rate does the flowchart start adults at?",
            "options": [
                "10 breaths/min",
                "30 breaths/min",
                "4 breaths/min",
                "20 breaths/min"
            ],
            "correct": 0,
            "explanation": "Start at 10 breaths/min, then titrate to EtCO₂ 35–45 mmHg."
        },
        {
            "q": "What triage category is a ROSC patient?",
            "options": [
                "Red",
                "Yellow",
                "Green",
                "Depends on GCS"
            ],
            "correct": 0,
            "explanation": "All ROSC patients are Red priority."
        },
        {
            "q": "How long should the pulse be felt to confirm ROSC?",
            "options": [
                "At least 10 seconds",
                "2 seconds",
                "1 minute",
                "No need to feel it"
            ],
            "correct": 0,
            "explanation": "Carotid or femoral pulse for at least 10 seconds, with an organized rhythm."
        },
        {
            "q": "An unresponsive ROSC patient is about to be moved. Which airway?",
            "options": [
                "At least a supraglottic airway",
                "No airway needed",
                "Nasal cannula only",
                "OPA alone"
            ],
            "correct": 0,
            "explanation": "An SGA should be placed for unresponsive patients being transported; consider ETT (P)."
        },
        {
            "q": "Why is a second IV line considered?",
            "options": [
                "Vasopressors are anticipated",
                "To give two litres of fluid",
                "For blood tests only",
                "Routine for all"
            ],
            "correct": 0,
            "explanation": "Place a second line if vasopressors are likely; IO if IV fails."
        },
        {
            "q": "When is TTM started?",
            "options": [
                "As soon as possible, for unresponsive patients",
                "After 6 hours",
                "Only in hospital",
                "Only if temperature is high"
            ],
            "correct": 0,
            "explanation": "Initiate as soon as possible."
        },
        {
            "q": "What is the pediatric diazepam maximum?",
            "options": [
                "5 mg",
                "1 mg",
                "10 mg",
                "20 mg"
            ],
            "correct": 0,
            "explanation": "Diazepam 0.1 mg/kg IV, maximum 5 mg, repeat after 10 minutes as required."
        }
    ],
    "flashcards": [
        {
            "question": "Signs of ROSC",
            "answer": "Organized rhythm with a palpable carotid or femoral pulse for at least 10 seconds; EtCO₂ >40 mmHg."
        },
        {
            "question": "SpO₂ target",
            "answer": "94–98% in the text (92–98% on the flowchart): avoid hyperoxia."
        },
        {
            "question": "EtCO₂ target",
            "answer": "35–45 mmHg."
        },
        {
            "question": "Starting ventilation rate (adult)",
            "answer": "10 breaths/min."
        },
        {
            "question": "Adult BP target",
            "answer": "SBP ≥90 mmHg or MAP >65 mmHg."
        },
        {
            "question": "Pediatric BP target",
            "answer": "SBP above the 5th percentile for age."
        },
        {
            "question": "Adult fluid bolus",
            "answer": "250–500 mL NS or RL IV/IO (EMT); reassess after each."
        },
        {
            "question": "Pediatric fluid bolus",
            "answer": "10–20 mL/kg IV/IO (EMT); reassess after each."
        },
        {
            "question": "When to avoid fluids",
            "answer": "Suspected cardiogenic shock: pulmonary edema, distended neck veins."
        },
        {
            "question": "Vasopressor level",
            "answer": "AP."
        },
        {
            "question": "Preferred vasopressor: hypotensive shock",
            "answer": "Adrenaline."
        },
        {
            "question": "Preferred vasopressor: normotensive shock",
            "answer": "Dopamine 5–20 mcg/kg/min IV/IO."
        },
        {
            "question": "Adult push-dose adrenaline",
            "answer": "0.01 mg IV/IO every 2–5 minutes (flowchart)."
        },
        {
            "question": "Pediatric push-dose adrenaline",
            "answer": "0.005 mg/kg IV/IO every 2–5 minutes."
        },
        {
            "question": "Adrenaline infusion",
            "answer": "0.05–0.3 mcg/kg/min, adults and children."
        },
        {
            "question": "12-lead after ROSC",
            "answer": "All medical arrests (EMT), within 5 minutes; after trauma only if cardiac involvement is suspected."
        },
        {
            "question": "TTM",
            "answer": "Unresponsive patients, as soon as possible, 32–36°C: undress, cold air conditioning, no routine ice packs."
        },
        {
            "question": "Sedation agents",
            "answer": "Midazolam, diazepam, ketamine."
        },
        {
            "question": "Midazolam doses",
            "answer": "Adult 1–5 mg IV; child 0.1 mg/kg IV; repeat after 10 minutes as required."
        },
        {
            "question": "Diazepam doses",
            "answer": "Adult 1–5 mg IV; child 0.1 mg/kg IV, maximum 5 mg."
        },
        {
            "question": "Ketamine doses",
            "answer": "Adult 0.25–1 mg/kg IV/IO; child 0.5–1 mg/kg IV/IO."
        },
        {
            "question": "Sedation don'ts",
            "answer": "No narcotics to facilitate ETT placement; no sedation to keep an SGA in."
        },
        {
            "question": "Re-arrest",
            "answer": "Watch for VF/VT or bradycardia; be ready to defibrillate, pace or restart CPR."
        },
        {
            "question": "Moving the patient",
            "answer": "Full reassessment first; avoid rough movement for up to 10 minutes after ROSC."
        },
        {
            "question": "Airway for transport",
            "answer": "Unresponsive patients: supraglottic airway at least; consider ETT (P)."
        },
        {
            "question": "Isolated TBI BP target (adult)",
            "answer": "MAP 70–80 mmHg (otherwise SBP >90 / MAP >65)."
        },
        {
            "question": "Pediatric SBP formula",
            "answer": "(age × 2) + 70."
        },
        {
            "question": "Pediatric emphasis",
            "answer": "Arrest is usually hypoxic: effective ventilation; an effective SGA may make intubation unnecessary."
        },
        {
            "question": "Triage",
            "answer": "Red."
        },
        {
            "question": "KPIs",
            "answer": "Vital signs with EtCO₂ within 5 minutes of ROSC; 12-lead within 5 minutes for non-traumatic ROSC."
        }
    ],
    "critical": [
        {
            "id": "crit_4_7_1",
            "scenario": "A 65-year-old man has ROSC after VF arrest. He is unresponsive, BP 85/50, HR 110, chest clear, SpO₂ 93%.",
            "question": "What do you do for the blood pressure?",
            "options": [
                {
                    "t": "250–500 mL normal saline IV/IO and reassess; adrenaline (AP) if it does not respond",
                    "f": "Correct. Target SBP ≥90 or MAP >65 mmHg."
                },
                {
                    "t": "Dopamine first",
                    "f": "Fluid first; adrenaline is preferred for hypotensive shock."
                },
                {
                    "t": "Nothing: BP will recover",
                    "f": "Hypotension increases the risk of re-arrest."
                },
                {
                    "t": "Two litres rapidly",
                    "f": "Give boluses and reassess after each."
                }
            ],
            "correct": 0,
            "explanation": "Fluid bolus (EMT), reassess, then vasopressors (AP) for shock unresponsive to fluid. Also titrate oxygen, aim for EtCO₂ 35–45 mmHg and record a 12-lead within 5 minutes.",
            "kpi": "Vital signs including EtCO₂ within 5 minutes of ROSC."
        },
        {
            "id": "crit_4_7_2",
            "scenario": "After ROSC a woman is on 15 L/min oxygen with SpO₂ 100%.",
            "question": "What do you do with the oxygen?",
            "options": [
                {
                    "t": "Titrate down to SpO₂ 94–98%",
                    "f": "Correct. Avoid hyperoxia."
                },
                {
                    "t": "Keep 15 L/min",
                    "f": "Hyperoxia is harmful after ROSC."
                },
                {
                    "t": "Remove oxygen completely",
                    "f": "Titrate, do not stop."
                },
                {
                    "t": "Hyperventilate to raise SpO₂",
                    "f": "Target EtCO₂ 35–45 mmHg."
                }
            ],
            "correct": 0,
            "explanation": "Titrate oxygen to SpO₂ 94–98% (flowchart 92–98%) and ventilation to EtCO₂ 35–45 mmHg.",
            "kpi": "Vital signs including EtCO₂ within 5 minutes of ROSC."
        },
        {
            "id": "crit_4_7_3",
            "scenario": "Three minutes after ROSC you record a 12-lead. Lead III is shown below; II and aVF look the same.",
            "ecg": "stemiInf",
            "ecgLead": "III",
            "question": "What does this change?",
            "options": [
                {
                    "t": "Inferior STEMI: transport rapidly to a facility for post-arrest STEMI care",
                    "f": "Correct."
                },
                {
                    "t": "Nothing; post-arrest ST changes are always ignored",
                    "f": "STEMI as the cause changes the destination."
                },
                {
                    "t": "Repeat the 12-lead in an hour",
                    "f": "Act now."
                },
                {
                    "t": "Start fibrinolysis on scene",
                    "f": "Not in this CPG."
                }
            ],
            "correct": 0,
            "explanation": "Perform a 12-lead in all medical arrests within 5 minutes of ROSC and look for a cardiac cause such as STEMI.",
            "kpi": "12-lead ECG within 5 minutes of ROSC for non-traumatic arrests."
        },
        {
            "id": "crit_4_7_4",
            "scenario": "A 70-year-old remains unresponsive after ROSC with stable vital signs. You are about to move him to the ambulance.",
            "question": "What do you do first?",
            "options": [
                {
                    "t": "Full reassessment, a supraglottic airway (ETT if P), then move gently",
                    "f": "Correct."
                },
                {
                    "t": "Move quickly to save time",
                    "f": "Rough movement in the first 10 minutes may cause re-arrest."
                },
                {
                    "t": "Remove all monitoring for the move",
                    "f": "Keep monitoring; be ready to restart CPR."
                },
                {
                    "t": "Give ketamine to every ROSC patient",
                    "f": "Sedation has specific indications."
                }
            ],
            "correct": 0,
            "explanation": "Reassess airway, breathing, circulation and vital signs before moving; unresponsive patients need an SGA for transport. Start TTM (undress, cold air conditioning).",
            "kpi": "Vital signs including EtCO₂ within 5 minutes of ROSC."
        },
        {
            "id": "crit_4_7_5",
            "scenario": "A 5-year-old has ROSC after drowning. A supraglottic airway is in and ventilation is effective. BP is low for age.",
            "question": "What do you give?",
            "options": [
                {
                    "t": "10–20 mL/kg fluid IV/IO and reassess; adrenaline 0.005 mg/kg push (AP) if still hypotensive",
                    "f": "Correct."
                },
                {
                    "t": "Adult push dose 0.01 mg/kg",
                    "f": "Use the pediatric dose."
                },
                {
                    "t": "Intubate before anything else",
                    "f": "An effective SGA may be enough in children."
                },
                {
                    "t": "No fluid in children",
                    "f": "Fluid comes first for hypotension."
                }
            ],
            "correct": 0,
            "explanation": "Target SBP above the 5th percentile for age. Pediatric arrest is usually hypoxic: keep ventilation effective.",
            "kpi": "Vital signs including EtCO₂ within 5 minutes of ROSC."
        }
    ]
};
