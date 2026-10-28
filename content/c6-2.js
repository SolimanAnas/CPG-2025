/* ========== CPG 6.2 – Abnormal Behavior ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c6-2",
    "title": "Abnormal Behavior",
    "shortTitle": "6.2 Abnormal Behavior",
    "guide": {
        "cpg": "6.2",
        "group": "medical",
        "groupLabel": "Medical",
        "title": "Abnormal Behavior",
        "lead": "Safety first: police for risk or restraint, then genuine verbal de-escalation. Sedate only when safety requires it, choosing the drug by the Sedation Assessment Tool score and aiming for a score of 0 to −1. Every sedated patient is monitored with SpO<sub>2</sub>, EtCO<sub>2</sub> and ECG and taken to hospital.",
        "source": {
            "label": "CPG 6.2",
            "pages": "153–157",
            "pdf": "../pdf_sections/6_2_Abnormal_Behavior.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Abnormal or unusual behavior with danger to self or others."
                ],
                "exclude": [
                    "Abnormal behavior from a medical condition such as traumatic brain injury or hypoxia."
                ]
            },
            {
                "type": "gate",
                "title": "Is there a safety risk?",
                "icon": "circle-help",
                "question": "Aggressive or violent, and/or a risk to self or others and uncooperative?",
                "no": "Assess to exclude other causes and transport.",
                "yes": "Request police and attempt verbal de-escalation. If it fails: physical restraint by police, consider ALS back-up and sedation by score."
            },
            {
                "type": "list",
                "title": "Verbal de-escalation",
                "icon": "message-circle-question",
                "items": [
                    "Under-used: allow it enough time.",
                    "One person speaks. Introduce yourself, say you are here to help, reassure.",
                    "Short, simple sentences, repeated: attention spans are short.",
                    "Cut noise and disturbance: radios, lights, sirens, harsh vehicle movement. Build rapport."
                ]
            },
            {
                "type": "table",
                "title": "Sedation Assessment Tool",
                "icon": "clipboard-list",
                "columns": [
                    "Score",
                    "Responsiveness",
                    "Speech"
                ],
                "rows": [
                    [
                        "+3",
                        "Combative, violent, out of control",
                        "Continual loud outbursts"
                    ],
                    [
                        "+2",
                        "Very anxious and agitated",
                        "Loud outbursts"
                    ],
                    [
                        "+1",
                        "Anxious, restless",
                        "Normal, talkative"
                    ],
                    [
                        "0",
                        "Awake and calm, cooperative",
                        "Speaks normally"
                    ],
                    [
                        "−1",
                        "Asleep but rouses to name",
                        "Slurring or prominent slowing"
                    ],
                    [
                        "−2",
                        "Responds to physical stimulation",
                        "Few recognizable words"
                    ],
                    [
                        "−3",
                        "No response to stimulation",
                        "Nil"
                    ]
                ],
                "notes": [
                    "Observational: needs no cooperation. Use it to guide treatment and to talk to Tele-EMS and other clinicians.",
                    "Target for most patients: 0 to −1."
                ]
            },
            {
                "type": "table",
                "title": "Medication by score (EP on the flowchart)",
                "icon": "syringe",
                "columns": [
                    "Score",
                    "Options"
                ],
                "rows": [
                    [
                        "+3",
                        "<b>Ketamine IM</b> 3–4 mg/kg (&lt;60 kg 200 mg; 60–90 kg 300 mg; 90 kg+ 400 mg), repeat once after 10 minutes; or <b>ketamine IV</b> 1 mg/kg (50–100 mg); or <b>midazolam IM/IV</b> 5 mg, repeat once after 10 minutes; or <b>diazepam IV</b> 5 mg"
                    ],
                    [
                        "+2",
                        "<b>Diazepam IV</b> 5 mg or <b>midazolam IM/IV</b> 5 mg (repeat once after 10 minutes), and/or <b>haloperidol IM</b> 10 mg for suspected worsening mental illness only"
                    ],
                    [
                        "+1",
                        "<b>Haloperidol IM</b> 10 mg, for suspected worsening mental illness only"
                    ]
                ]
            },
            {
                "type": "groups",
                "title": "Choosing the drug",
                "icon": "pill",
                "groups": [
                    {
                        "title": "Principle",
                        "items": [
                            "No sedation for a compliant patient who poses no safety risk.",
                            "The first drug should aim to gain compliance with a single intervention: violent patients risk staff injury and needle-stick."
                        ]
                    },
                    {
                        "title": "Ketamine",
                        "items": [
                            "Preferred for exceptionally violent patients."
                        ]
                    },
                    {
                        "title": "Benzodiazepines",
                        "items": [
                            "+3: if one dose is likely to gain compliance. IM route: midazolam (faster onset).",
                            "+2: first-line agent."
                        ]
                    },
                    {
                        "title": "Haloperidol",
                        "items": [
                            "Only for agitation believed due to worsening mental illness.",
                            "First line if there is no immediate safety risk and one injection should suffice; otherwise a second agent after benzodiazepines.",
                            "May take up to 20 minutes, and may not work in some patients."
                        ]
                    }
                ]
            },
            {
                "type": "steps",
                "title": "After sedation",
                "icon": "heart-pulse",
                "steps": [
                    {
                        "title": "Monitor (mandatory)",
                        "text": "Continuous SpO<sub>2</sub>, nasal-cannula EtCO<sub>2</sub> and 4-lead ECG. The clinician who sedated stays at the patient's side."
                    },
                    {
                        "title": "Oxygen",
                        "text": "At least nasal cannula for a score of −1 or less."
                    },
                    {
                        "title": "Position",
                        "text": "Recovery position if mental status is altered. Agitated patients: stretcher sitting up (prevents aspiration, reduces strength). Never prone."
                    },
                    {
                        "title": "Assess the cause",
                        "text": "Full vital signs once compliant; exclude reversible causes such as hypoglycemia. IV access as soon as possible."
                    },
                    {
                        "title": "Transport",
                        "text": "Every sedated patient goes to hospital, accompanied by an EMS physician or Advanced Paramedic."
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Safety",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "Sedative risks",
                        "items": [
                            "Respiratory depression, apnea, hypotension, airway compromise.",
                            "Higher risk with repeated doses or several drugs: be ready to manage the airway."
                        ]
                    },
                    {
                        "title": "Restraint",
                        "items": [
                            "Work with police to reposition restrained patients so airway, breathing and circulation are not impaired."
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
                                "label": "Drug calculator: haloperidol",
                                "sub": "Dose check",
                                "href": "../pages/drug-calculator.html?drug=Haloperidol",
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
                    "When sedation is given: drug name, dose and effect documented."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "6.5 Altered Mental Status",
                        "href": "c6-5.html"
                    },
                    {
                        "label": "6.8 Hypoglycemia",
                        "href": "c6-8.html"
                    },
                    {
                        "label": "6.14 Suspected Alcohol Intoxication",
                        "href": "c6-14.html"
                    },
                    {
                        "label": "1.6 Patient Refusal of Transfer",
                        "href": "c1.html?section=c1s6"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "What comes before any sedation in an agitated patient?",
            "options": [
                "Police for safety and verbal de-escalation",
                "Ketamine",
                "Physical restraint by EMS",
                "Immediate transport"
            ],
            "correct": 0,
            "explanation": "Sedation follows failed de-escalation and police restraint."
        },
        {
            "q": "What score is the sedation target for most patients?",
            "options": [
                "0 to −1",
                "+1",
                "−3",
                "+2"
            ],
            "correct": 0,
            "explanation": "Enough to gain compliance and transfer safely."
        },
        {
            "q": "What IM ketamine dose does a 70 kg patient at +3 receive?",
            "options": [
                "300 mg",
                "200 mg",
                "400 mg",
                "100 mg"
            ],
            "correct": 0,
            "explanation": "60–90 kg: 300 mg (3–4 mg/kg)."
        },
        {
            "q": "Score +2 with suspected worsening mental illness. Which options are listed?",
            "options": [
                "Diazepam IV or midazolam, and/or haloperidol 10 mg IM",
                "Ketamine only",
                "Nothing",
                "Haloperidol IV"
            ],
            "correct": 0,
            "explanation": "Haloperidol is reserved for suspected worsening mental illness."
        },
        {
            "q": "What is the haloperidol dose?",
            "options": [
                "10 mg IM",
                "1 mg IV",
                "20 mg IV",
                "50 mg IM"
            ],
            "correct": 0,
            "explanation": "For suspected worsening mental illness only."
        },
        {
            "q": "Score +1, suspected worsening mental illness. What is listed?",
            "options": [
                "Haloperidol 10 mg IM",
                "Ketamine",
                "Midazolam IV",
                "Nothing ever"
            ],
            "correct": 0,
            "explanation": "Haloperidol is the only +1 option."
        },
        {
            "q": "How long can haloperidol take to work?",
            "options": [
                "Up to 20 minutes",
                "Seconds",
                "Two hours",
                "It works instantly"
            ],
            "correct": 0,
            "explanation": "It may also not work in some patients."
        },
        {
            "q": "Which monitoring is mandatory after sedation?",
            "options": [
                "SpO₂, nasal-cannula EtCO₂ and 4-lead ECG",
                "BP only",
                "Temperature only",
                "None"
            ],
            "correct": 0,
            "explanation": "Continuous, for all sedated patients."
        },
        {
            "q": "How is a sedated patient with altered mental status positioned?",
            "options": [
                "Recovery position",
                "Prone",
                "Supine flat",
                "Trendelenburg"
            ],
            "correct": 0,
            "explanation": "Never prone."
        },
        {
            "q": "How often may IM ketamine be repeated?",
            "options": [
                "Once, after 10 minutes",
                "Every 2 minutes",
                "Never",
                "Three times"
            ],
            "correct": 0,
            "explanation": "Repeat after 10 minutes, once only."
        },
        {
            "q": "Which drug is preferred for an exceptionally violent patient?",
            "options": [
                "Ketamine",
                "Haloperidol",
                "Paracetamol",
                "Diazepam PR"
            ],
            "correct": 0,
            "explanation": "Ketamine is preferred for exceptional violence."
        },
        {
            "q": "What is the IV ketamine dose?",
            "options": [
                "1 mg/kg (50–100 mg)",
                "3–4 mg/kg",
                "10 mg/kg",
                "0.1 mg/kg"
            ],
            "correct": 0,
            "explanation": "IV ketamine 1 mg/kg."
        },
        {
            "q": "Which benzodiazepine is preferred IM?",
            "options": [
                "Midazolam",
                "Diazepam",
                "Either equally",
                "Neither"
            ],
            "correct": 0,
            "explanation": "Faster onset by the IM route."
        },
        {
            "q": "Which is NOT part of the Sedation Assessment Tool?",
            "options": [
                "Blood pressure",
                "Responsiveness",
                "Speech",
                "The score"
            ],
            "correct": 0,
            "explanation": "It scores responsiveness and speech."
        },
        {
            "q": "Score −2 after sedation. What is needed?",
            "options": [
                "Close monitoring, oxygen and airway protection",
                "More sedation",
                "Haloperidol",
                "Restraint"
            ],
            "correct": 0,
            "explanation": "Oxygen for −1 or less; watch the airway."
        },
        {
            "q": "What is the IM ketamine dose above 90 kg?",
            "options": [
                "400 mg",
                "300 mg",
                "200 mg",
                "600 mg"
            ],
            "correct": 0,
            "explanation": "90 kg+: 400 mg."
        },
        {
            "q": "When is police assistance requested?",
            "options": [
                "Risk of harm, or restraint expected",
                "Always, for every patient",
                "Only after sedation",
                "Never"
            ],
            "correct": 0,
            "explanation": "Police perform any physical restraint."
        },
        {
            "q": "Who accompanies a sedated patient to hospital?",
            "options": [
                "An EMS physician or Advanced Paramedic",
                "Any EMT",
                "The police only",
                "Nobody"
            ],
            "correct": 0,
            "explanation": "And all sedated patients must go to hospital."
        },
        {
            "q": "What is the midazolam dose for agitation?",
            "options": [
                "5 mg IM/IV, repeat once after 10 minutes",
                "15 mg IV",
                "0.5 mg",
                "10 mg every 2 minutes"
            ],
            "correct": 0,
            "explanation": "+3 or +2."
        },
        {
            "q": "Which glucose finding changes management?",
            "options": [
                "Hypoglycemia: a reversible cause",
                "Normal glucose",
                "Glucose is never checked",
                "Mild hyperglycemia only"
            ],
            "correct": 0,
            "explanation": "Assess alternative causes such as hypoglycemia."
        },
        {
            "q": "Is sedation needed for a compliant patient with no safety risk?",
            "options": [
                "No",
                "Yes, always",
                "Only haloperidol",
                "Only ketamine"
            ],
            "correct": 0,
            "explanation": "Avoid drugs unless safety requires them."
        },
        {
            "q": "Which oxygen rule applies after sedation?",
            "options": [
                "At least nasal cannula for a score of −1 or less",
                "No oxygen",
                "Only if SpO₂ <80%",
                "Only with a mask at +3"
            ],
            "correct": 0,
            "explanation": "Consider oxygen for all sedated patients at −1 or less."
        },
        {
            "q": "How is an agitated patient positioned on the stretcher?",
            "options": [
                "Sitting up",
                "Prone",
                "Flat",
                "Head down"
            ],
            "correct": 0,
            "explanation": "Prevents aspiration and reduces physical strength."
        },
        {
            "q": "What are the main sedative risks?",
            "options": [
                "Respiratory depression, apnea, hypotension, airway compromise",
                "Hyperglycemia",
                "Hypertension only",
                "None"
            ],
            "correct": 0,
            "explanation": "Greater with multiple doses or drugs."
        },
        {
            "q": "What is the IV diazepam dose here?",
            "options": [
                "5 mg",
                "20 mg",
                "0.5 mg",
                "50 mg"
            ],
            "correct": 0,
            "explanation": "+3 or +2."
        },
        {
            "q": "When is haloperidol first line?",
            "options": [
                "Worsening mental illness, no immediate safety risk, one injection likely enough",
                "Every +3 patient",
                "Alcohol intoxication",
                "Children"
            ],
            "correct": 0,
            "explanation": "Otherwise use it as a second agent after benzodiazepines."
        },
        {
            "q": "Who scores the Sedation Assessment Tool?",
            "options": [
                "The clinician, by observation",
                "The patient, by questionnaire",
                "Police",
                "Family"
            ],
            "correct": 0,
            "explanation": "It needs no cooperation."
        },
        {
            "q": "Restrained patients: what is your role?",
            "options": [
                "Work with police so airway, breathing and circulation are not impaired",
                "Leave restraint to police entirely",
                "Tighten restraints",
                "Place prone"
            ],
            "correct": 0,
            "explanation": "Reposition as needed."
        },
        {
            "q": "What must the KPI documentation include?",
            "options": [
                "Drug name, dose and effect",
                "Only the time",
                "Only the police number",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "For every sedation."
        },
        {
            "q": "Which patient is excluded from this CPG?",
            "options": [
                "Abnormal behavior from TBI or hypoxia",
                "A violent patient",
                "A patient at risk to self",
                "An uncooperative patient"
            ],
            "correct": 0,
            "explanation": "Treat the medical cause."
        }
    ],
    "flashcards": [
        {
            "question": "Sedation Assessment Tool range",
            "answer": "+3 (combative) to −3 (no response); observational."
        },
        {
            "question": "SAT +3",
            "answer": "Combative, violent, out of control; continual loud outbursts."
        },
        {
            "question": "SAT +2",
            "answer": "Very anxious and agitated; loud outbursts."
        },
        {
            "question": "SAT +1",
            "answer": "Anxious, restless; normal or talkative speech."
        },
        {
            "question": "SAT 0",
            "answer": "Awake, calm, cooperative; speaks normally."
        },
        {
            "question": "SAT −1",
            "answer": "Asleep, rouses to name; slurring or slowing."
        },
        {
            "question": "SAT −2",
            "answer": "Responds to physical stimulation; few recognizable words."
        },
        {
            "question": "SAT −3",
            "answer": "No response to stimulation; no speech."
        },
        {
            "question": "Sedation target",
            "answer": "0 to −1 for most patients."
        },
        {
            "question": "Verbal de-escalation",
            "answer": "Time; one speaker; introduce and reassure; short repeated sentences; reduce noise; build rapport."
        },
        {
            "question": "Police",
            "answer": "For risk of harm or expected restraint; restraint is by police."
        },
        {
            "question": "Ketamine IM (+3)",
            "answer": "3–4 mg/kg: <60 kg 200 mg; 60–90 kg 300 mg; 90 kg+ 400 mg; repeat once after 10 minutes."
        },
        {
            "question": "Ketamine IV (+3)",
            "answer": "1 mg/kg (50–100 mg)."
        },
        {
            "question": "Midazolam",
            "answer": "5 mg IM/IV; repeat once after 10 minutes (+3 or +2)."
        },
        {
            "question": "Diazepam",
            "answer": "5 mg IV (+3 or +2)."
        },
        {
            "question": "Haloperidol",
            "answer": "10 mg IM, only for suspected worsening mental illness (+2 or +1); up to 20 minutes to act."
        },
        {
            "question": "Preferred drug for extreme violence",
            "answer": "Ketamine."
        },
        {
            "question": "First-line at +2",
            "answer": "Benzodiazepines."
        },
        {
            "question": "IM benzodiazepine of choice",
            "answer": "Midazolam (faster onset)."
        },
        {
            "question": "Level for sedation on the flowchart",
            "answer": "EP."
        },
        {
            "question": "Mandatory monitoring",
            "answer": "Continuous SpO₂, nasal-cannula EtCO₂, 4-lead ECG."
        },
        {
            "question": "Oxygen after sedation",
            "answer": "At least nasal cannula when the score is −1 or less."
        },
        {
            "question": "Position after sedation",
            "answer": "Recovery position if mental status is altered; never prone."
        },
        {
            "question": "Stretcher position when agitated",
            "answer": "Sitting up."
        },
        {
            "question": "Transport after sedation",
            "answer": "Always, with an EMS physician or Advanced Paramedic."
        },
        {
            "question": "Sedative risks",
            "answer": "Respiratory depression, apnea, hypotension, airway compromise; worse with repeat or combined drugs."
        },
        {
            "question": "Reversible causes",
            "answer": "Assess alternatives such as hypoglycemia once compliant; full vital signs."
        },
        {
            "question": "IV access",
            "answer": "As soon as possible after the patient becomes compliant."
        },
        {
            "question": "Exclusion",
            "answer": "Behavior due to a medical condition such as TBI or hypoxia."
        },
        {
            "question": "KPI",
            "answer": "Drug name, dose and effect documented for every sedation."
        }
    ],
    "critical": [
        {
            "id": "crit_6_2_1",
            "scenario": "A 30-year-old man (about 75 kg) is shouting and throwing objects; de-escalation has failed and police have restrained him. Score +3.",
            "question": "Which sedation is listed?",
            "options": [
                {
                    "t": "Ketamine 300 mg IM (60–90 kg), repeat once after 10 minutes if needed",
                    "f": "Correct."
                },
                {
                    "t": "Haloperidol 10 mg IM alone",
                    "f": "Haloperidol is not a +3 option."
                },
                {
                    "t": "Ketamine 400 mg IM",
                    "f": "400 mg is for 90 kg and above."
                },
                {
                    "t": "No sedation",
                    "f": "Safety requires it here."
                }
            ],
            "correct": 0,
            "explanation": "Ketamine is preferred for exceptional violence; then monitor SpO₂, EtCO₂ and ECG continuously.",
            "kpi": "Drug name, dose and effect documented."
        },
        {
            "id": "crit_6_2_2",
            "scenario": "A 45-year-old man with schizophrenia stopped his medication. He is very anxious and agitated (+2) but not violent, and you expect one injection to be enough.",
            "question": "What is appropriate?",
            "options": [
                {
                    "t": "Haloperidol 10 mg IM as first line",
                    "f": "Correct. Worsening mental illness, no immediate safety risk, single injection."
                },
                {
                    "t": "Ketamine 400 mg IM",
                    "f": "Not a +2 option."
                },
                {
                    "t": "Prone restraint",
                    "f": "Never prone."
                },
                {
                    "t": "Haloperidol IV",
                    "f": "IM only."
                }
            ],
            "correct": 0,
            "explanation": "Haloperidol may take up to 20 minutes. Benzodiazepines remain first line at +2 otherwise.",
            "kpi": "Drug name, dose and effect documented."
        },
        {
            "id": "crit_6_2_3",
            "scenario": "You gave midazolam 5 mg IM. Ten minutes later the score is still +2.",
            "question": "What next?",
            "options": [
                {
                    "t": "Repeat midazolam 5 mg once",
                    "f": "Correct."
                },
                {
                    "t": "Repeat every 2 minutes until calm",
                    "f": "Once only, after 10 minutes."
                },
                {
                    "t": "Add ketamine IV 3–4 mg/kg",
                    "f": "That is the IM ketamine dose."
                },
                {
                    "t": "Stop monitoring",
                    "f": "Monitoring is mandatory."
                }
            ],
            "correct": 0,
            "explanation": "Haloperidol may be added as a second agent if worsening mental illness is suspected.",
            "kpi": "Drug name, dose and effect documented."
        },
        {
            "id": "crit_6_2_4",
            "scenario": "After ketamine the patient is calm (score 0).",
            "question": "What is essential now?",
            "options": [
                {
                    "t": "Continuous SpO₂, EtCO₂ and ECG; full vital signs; look for a cause; IV access; transport with EP or AP",
                    "f": "Correct."
                },
                {
                    "t": "Leave him at home with police",
                    "f": "All sedated patients go to hospital."
                },
                {
                    "t": "Remove monitoring for comfort",
                    "f": "Monitoring is mandatory."
                },
                {
                    "t": "Prone position for transport",
                    "f": "Never prone."
                }
            ],
            "correct": 0,
            "explanation": "The sedating clinician stays at the patient's side throughout.",
            "kpi": "Drug name, dose and effect documented."
        },
        {
            "id": "crit_6_2_5",
            "scenario": "En route after midazolam the patient's respiratory rate falls to 8 and SpO₂ to 88%; the score is −2.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Open the airway, give oxygen and support ventilation (BVM)",
                    "f": "Correct. Respiratory depression is a known sedative risk."
                },
                {
                    "t": "More sedation",
                    "f": "He is over-sedated."
                },
                {
                    "t": "Sit him upright and ignore it",
                    "f": "Manage the airway."
                },
                {
                    "t": "Remove the oximeter",
                    "f": "Monitoring must continue."
                }
            ],
            "correct": 0,
            "explanation": "All sedatives risk respiratory depression and apnea, especially with repeated doses; be ready to manage the airway.",
            "kpi": "Drug name, dose and effect documented."
        }
    ]
};
