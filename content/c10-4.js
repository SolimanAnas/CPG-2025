/* ========== CPG 10.4 – Pre-eclampsia and Eclampsia ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c10-4",
    "title": "Pre-eclampsia and Eclampsia",
    "shortTitle": "10.4 Eclampsia / Pre-eclampsia",
    "guide": {
        "cpg": "10.4",
        "group": "obstetric",
        "groupLabel": "Obstetrics",
        "title": "Pre-eclampsia and Eclampsia",
        "lead": "Pre-eclampsia is hypertension with end-organ involvement after 20 weeks of pregnancy, or up to 6 weeks postpartum. Treat severe hypertension (SBP >160 or DBP >110) with labetalol, aiming for about 140/90. Assume any seizing pregnant patient has eclampsia: magnesium sulphate is first line, with a benzodiazepine for refractory seizures. Use left lateral tilt throughout.",
        "source": {
            "label": "CPG 10.4",
            "pages": "328–332",
            "pdf": "../pdf_sections/10_4_Eclampsia___Pre-eclampsia.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "More than 20 weeks' gestation (or up to 6 weeks postpartum, rare after 48 hours) with hypertension and end-organ involvement: renal, liver, neurological or hematological.",
                    "Severe features: SBP &gt;160 or DBP &gt;110, headache, confusion, visual changes (often precede seizures), RUQ or epigastric pain, shortness of breath or pulmonary edema, bruising or petechiae, vaginal bleeding (abruption), focal deficits (stroke).",
                    "Any seizing pregnant or postpartum patient: assume eclampsia."
                ],
                "exclude": [
                    "Non-pregnant patients with hypertension or seizures."
                ]
            },
            {
                "type": "table",
                "title": "Categories",
                "icon": "clipboard-list",
                "columns": [
                    "",
                    "Blood pressure",
                    "Management"
                ],
                "rows": [
                    [
                        "Pre-eclampsia without severe hypertension",
                        "SBP 140–170, DBP 90–110 mmHg",
                        "Quiet environment, minimal movement, semi-recumbent or left lateral"
                    ],
                    [
                        "Pre-eclampsia with severe hypertension",
                        "SBP &gt;160 or DBP &gt;110 for more than 15 min, with symptoms",
                        "Labetalol; target about 140/90; Red priority"
                    ],
                    [
                        "Eclampsia",
                        "Seizures after 20 weeks or postpartum",
                        "Magnesium sulphate first line; Red priority"
                    ]
                ]
            },
            {
                "type": "steps",
                "title": "All patients",
                "icon": "list",
                "steps": [
                    {
                        "title": "History",
                        "text": "Gestation or recent delivery, headache, visual change, epigastric or RUQ pain, nausea, shortness of breath, stroke symptoms, seizure onset and duration, previous hypertension or pre-eclampsia."
                    },
                    {
                        "title": "ALS back-up",
                        "text": "Routinely for eclampsia and for pre-eclampsia with severe hypertension."
                    },
                    {
                        "title": "Position",
                        "text": "Left lateral tilt, or the uterus displaced manually to the left."
                    },
                    {
                        "title": "Oxygen",
                        "text": "10–15 lpm via NRB; titrate to SpO<sub>2</sub> &gt;94%. Airway management and suction if needed."
                    },
                    {
                        "title": "Access",
                        "text": "Large-bore IV above the diaphragm (bilateral, 16–18 gauge, in eclampsia); IO if IV is difficult."
                    },
                    {
                        "title": "Reassess",
                        "text": "Vital signs every 10 minutes during transport; deep tendon reflexes after magnesium."
                    }
                ]
            },
            {
                "type": "steps",
                "title": "Severe hypertension",
                "icon": "heart-pulse",
                "steps": [
                    {
                        "title": "Labetalol",
                        "level": "AP",
                        "text": "Only if HR &gt;60 bpm. Lower MAP by 20–25% initially; target about 140/90 to cut stroke risk while keeping uterine perfusion.",
                        "doses": [
                            {
                                "drug": "Labetalol IV/IO",
                                "dose": "20 mg over 2 minutes",
                                "note": "Repeat every 10 minutes as required; max 80 mg"
                            }
                        ]
                    },
                    {
                        "title": "Magnesium",
                        "text": "Not routine for pre-eclampsia, but encouraged for seizure prevention when severe features are present: 4 g IV over 5–10 min, then 2 g/hr."
                    }
                ]
            },
            {
                "type": "steps",
                "title": "Eclampsia (seizures)",
                "icon": "zap",
                "steps": [
                    {
                        "title": "Magnesium sulphate, first line",
                        "level": "AP",
                        "text": "IV preferred if access is available.",
                        "doses": [
                            {
                                "drug": "Magnesium sulphate IV/IO",
                                "dose": "6 g over 5–10 minutes",
                                "note": "Syringe driver, or diluted in 100 mL normal saline"
                            },
                            {
                                "drug": "Magnesium sulphate IM",
                                "dose": "8 g",
                                "note": "4 g in each gluteal area"
                            }
                        ]
                    },
                    {
                        "title": "Refractory seizures or no magnesium",
                        "level": "EP",
                        "text": "Benzodiazepine.",
                        "doses": [
                            {
                                "drug": "Diazepam (or midazolam) IV/IO",
                                "dose": "5 mg slow push over 2 minutes",
                                "note": "Repeat once if still seizing after 5 minutes"
                            },
                            {
                                "drug": "Diazepam (or midazolam) IM",
                                "dose": "10 mg",
                                "note": "Repeat once if still seizing after 5 minutes"
                            }
                        ]
                    },
                    {
                        "title": "After the seizure",
                        "level": "EP",
                        "text": "SBP &gt;160 or DBP &gt;110: labetalol 20 mg IV/IO over 2 minutes, every 10 minutes, max 80 mg total."
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Magnesium toxicity",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "Progression",
                        "items": [
                            "Hypotension",
                            "Loss of deep tendon reflexes",
                            "Somnolence, slurred speech",
                            "Respiratory paralysis",
                            "Cardiac arrest"
                        ]
                    },
                    {
                        "title": "Treatment",
                        "items": [
                            "Stop the magnesium.",
                            "Support breathing.",
                            "Impending respiratory arrest: calcium gluconate 3 g IV or calcium chloride 1 g IV, if available."
                        ]
                    }
                ]
            },
            {
                "type": "list",
                "title": "Clinical notes",
                "icon": "lightbulb",
                "items": [
                    "Delivery of the placenta is the only definitive treatment.",
                    "Chronic hypertension can have pre-eclampsia superimposed.",
                    "Eclampsia can occur postpartum."
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
                                "label": "Drug calculator: labetalol",
                                "sub": "20 mg, max 80 mg",
                                "href": "../pages/drug-calculator.html?drug=Labetalol",
                                "icon": "syringe"
                            },
                            {
                                "label": "Drug calculator: magnesium sulphate",
                                "sub": "6 g IV or 8 g IM",
                                "href": "../pages/drug-calculator.html?drug=Magnesium Sulphate",
                                "icon": "syringe"
                            },
                            {
                                "label": "Drug calculator: diazepam",
                                "sub": "Refractory seizures",
                                "href": "../pages/drug-calculator.html?drug=Diazepam",
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
                    "Antihypertensive (e.g. labetalol) for severe hypertension: SBP &gt;160 or DBP &gt;110.",
                    "Second and third trimester patients in left lateral tilt or with manual uterine displacement."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "5.2 Seizures",
                        "href": "c5-2.html"
                    },
                    {
                        "label": "10.1 Childbirth",
                        "href": "c10-1.html"
                    },
                    {
                        "label": "10.3 PV Hemorrhage in Pregnancy",
                        "href": "c10-3.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "Severe hypertension in pregnancy?",
            "options": [
                "SBP >160 or DBP >110",
                "SBP >140 or DBP >90",
                "SBP >150 or DBP >100",
                "SBP >180 only"
            ],
            "correct": 0,
            "explanation": "Red priority."
        },
        {
            "q": "34 weeks, BP 170/110, headache, visual disturbance, HR 88. What do you do?",
            "options": [
                "Left lateral, oxygen, IV, labetalol 20 mg (AP), ALS, transport",
                "Supine and observe",
                "Diazepam",
                "Fluids 2 L"
            ],
            "correct": 0,
            "explanation": "Severe hypertension with symptoms."
        },
        {
            "q": "First-line treatment for eclamptic seizures?",
            "options": [
                "Magnesium sulphate",
                "Diazepam",
                "Labetalol",
                "Phenytoin"
            ],
            "correct": 0,
            "explanation": "Benzodiazepines for refractory seizures."
        },
        {
            "q": "Labetalol dose?",
            "options": [
                "20 mg IV over 2 minutes",
                "10 mg",
                "50 mg",
                "100 mg"
            ],
            "correct": 0,
            "explanation": "Every 10 minutes, max 80 mg."
        },
        {
            "q": "Position for a third-trimester patient?",
            "options": [
                "Left lateral tilt",
                "Supine",
                "Trendelenburg",
                "Prone"
            ],
            "correct": 0,
            "explanation": "KPI."
        },
        {
            "q": "IV magnesium dose for eclampsia?",
            "options": [
                "6 g over 5–10 minutes",
                "2 g",
                "4 g",
                "8 g IV push"
            ],
            "correct": 0,
            "explanation": "Or 8 g IM."
        },
        {
            "q": "Early sign of magnesium toxicity?",
            "options": [
                "Loss of deep tendon reflexes (after hypotension)",
                "Tachycardia",
                "Hypertension",
                "Agitation"
            ],
            "correct": 0,
            "explanation": "Then somnolence and respiratory paralysis."
        },
        {
            "q": "Magnesium toxicity treatment?",
            "options": [
                "Stop magnesium, support breathing, calcium if available for impending arrest",
                "More magnesium",
                "Potassium",
                "Naloxone"
            ],
            "correct": 0,
            "explanation": "Calcium gluconate 3 g or calcium chloride 1 g IV."
        },
        {
            "q": "Oxygen target?",
            "options": [
                "SpO₂ >94%",
                ">88%",
                ">90%",
                "No oxygen"
            ],
            "correct": 0,
            "explanation": "10–15 lpm via NRB."
        },
        {
            "q": "BP 150/95, no symptoms, 30 weeks. Management?",
            "options": [
                "Quiet environment, left lateral or semi-recumbent, monitor, transport",
                "Labetalol",
                "Magnesium",
                "Diazepam"
            ],
            "correct": 0,
            "explanation": "Pre-eclampsia without severe hypertension."
        },
        {
            "q": "IM magnesium?",
            "options": [
                "8 g: 4 g in each gluteal area",
                "4 g in one buttock",
                "8 g in one site",
                "2 g each side"
            ],
            "correct": 0,
            "explanation": "When IV isn't available."
        },
        {
            "q": "Which is a severe feature?",
            "options": [
                "RUQ or epigastric pain",
                "Ankle swelling alone",
                "Back ache",
                "Heartburn after a meal"
            ],
            "correct": 0,
            "explanation": "Also headache, visual change, confusion."
        },
        {
            "q": "After a 2-minute seizure, GCS 10. First priority?",
            "options": [
                "Airway, suction and oxygen in left lateral",
                "Labetalol first",
                "Glucose first",
                "Leave her supine"
            ],
            "correct": 0,
            "explanation": "Then magnesium."
        },
        {
            "q": "Maximum labetalol?",
            "options": [
                "80 mg",
                "40 mg",
                "60 mg",
                "100 mg"
            ],
            "correct": 0,
            "explanation": "In 20 mg doses."
        },
        {
            "q": "Minimum HR for labetalol?",
            "options": [
                ">60 bpm",
                ">40 bpm",
                ">100 bpm",
                "Any"
            ],
            "correct": 0,
            "explanation": "Ensure HR >60 before giving."
        },
        {
            "q": "What do you monitor after magnesium?",
            "options": [
                "Deep tendon reflexes, breathing and BP",
                "Only temperature",
                "Glucose only",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "Toxicity progression."
        },
        {
            "q": "Initial goal of labetalol?",
            "options": [
                "Lower MAP by 20–25%",
                "Normal BP within minutes",
                "Lower SBP below 100",
                "Raise HR"
            ],
            "correct": 0,
            "explanation": "Then about 140/90."
        },
        {
            "q": "Target BP?",
            "options": [
                "About 140/90",
                "120/80",
                "100/60",
                "160/110"
            ],
            "correct": 0,
            "explanation": "Protects uterine perfusion."
        },
        {
            "q": "Who gives benzodiazepines for refractory eclampsia?",
            "options": [
                "EP",
                "EMT",
                "EMR",
                "AP"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "Which KPI applies?",
            "options": [
                "Antihypertensive for severe hypertension",
                "Magnesium for every pregnant patient",
                "12-lead ECG",
                "Glucose"
            ],
            "correct": 0,
            "explanation": "And left lateral positioning."
        },
        {
            "q": "BP 180/110, severe headache and confusion at 36 weeks, HR 90. Management?",
            "options": [
                "Oxygen, left lateral, IV, labetalol, consider magnesium, ALS",
                "Observe",
                "Fluids",
                "Diazepam only"
            ],
            "correct": 0,
            "explanation": "Severe pre-eclampsia."
        },
        {
            "q": "Benzodiazepine IV dose for eclampsia?",
            "options": [
                "5 mg IV/IO over 2 minutes",
                "2 mg",
                "10 mg IV push",
                "20 mg"
            ],
            "correct": 0,
            "explanation": "IM 10 mg."
        },
        {
            "q": "Seizure continues after magnesium. Next?",
            "options": [
                "Benzodiazepine (EP)",
                "More labetalol",
                "Wait",
                "Fluids"
            ],
            "correct": 0,
            "explanation": "Repeat once after 5 minutes if needed."
        },
        {
            "q": "Why avoid the supine position?",
            "options": [
                "Uterine compression of vessels lowers BP and uterine perfusion",
                "It causes seizures",
                "It is uncomfortable only",
                "No reason"
            ],
            "correct": 0,
            "explanation": "Left lateral or manual displacement."
        },
        {
            "q": "Benzodiazepine IM dose?",
            "options": [
                "10 mg IM",
                "5 mg IM",
                "2 mg IM",
                "20 mg IM"
            ],
            "correct": 0,
            "explanation": "Repeat once after 5 minutes."
        },
        {
            "q": "How long postpartum can eclampsia occur?",
            "options": [
                "Up to 6 weeks (rare after 48 hours)",
                "Never",
                "Only 1 hour",
                "1 year"
            ],
            "correct": 0,
            "explanation": "Inclusion criteria."
        },
        {
            "q": "Definitive treatment?",
            "options": [
                "Delivery of the placenta",
                "Labetalol",
                "Magnesium",
                "Oxygen"
            ],
            "correct": 0,
            "explanation": "Clinical insight."
        },
        {
            "q": "What does magnesium do in pre-eclampsia?",
            "options": [
                "Seizure prophylaxis",
                "Lowers BP as first-line",
                "Diuresis",
                "Pain relief"
            ],
            "correct": 0,
            "explanation": "Encouraged with severe features."
        },
        {
            "q": "RR 8, drowsy and areflexic after magnesium. Likely cause and action?",
            "options": [
                "Magnesium toxicity: stop it, support breathing, calcium if available",
                "Seizure: diazepam",
                "Edema: furosemide",
                "Stroke: no action"
            ],
            "correct": 0,
            "explanation": "Toxicity progression."
        },
        {
            "q": "Pre-eclampsia magnesium regimen in the text?",
            "options": [
                "4 g IV over 5–10 min, then 2 g/hr",
                "6 g IM",
                "1 g push",
                "8 g IV push"
            ],
            "correct": 0,
            "explanation": "Eclampsia uses 6 g IV or 8 g IM."
        }
    ],
    "flashcards": [
        {
            "question": "Pre-eclampsia",
            "answer": "Hypertension with end-organ involvement after 20 weeks, or up to 6 weeks postpartum."
        },
        {
            "question": "Severe hypertension",
            "answer": "SBP >160 or DBP >110 (for more than 15 min with symptoms)."
        },
        {
            "question": "Eclampsia",
            "answer": "Seizures with pregnancy >20 weeks or postpartum: assume it in any seizing pregnant patient."
        },
        {
            "question": "Severe features",
            "answer": "Headache, confusion, visual change, RUQ/epigastric pain, pulmonary edema, bruising, vaginal bleeding, focal deficit."
        },
        {
            "question": "Labetalol",
            "answer": "20 mg IV over 2 minutes, every 10 minutes, max 80 mg; HR must be >60 (AP)."
        },
        {
            "question": "BP goal",
            "answer": "Lower MAP 20–25% initially; target about 140/90."
        },
        {
            "question": "Magnesium IV (eclampsia)",
            "answer": "6 g over 5–10 minutes via syringe driver or in 100 mL NS (AP)."
        },
        {
            "question": "Magnesium IM (eclampsia)",
            "answer": "8 g: 4 g in each gluteal area."
        },
        {
            "question": "Magnesium toxicity",
            "answer": "Hypotension → loss of reflexes → somnolence, slurred speech → respiratory paralysis → arrest."
        },
        {
            "question": "Toxicity treatment",
            "answer": "Stop magnesium; support breathing; calcium gluconate 3 g or calcium chloride 1 g IV if available."
        },
        {
            "question": "Refractory seizures",
            "answer": "Diazepam (or midazolam) 5 mg IV over 2 min or 10 mg IM; repeat once after 5 minutes (EP)."
        },
        {
            "question": "Position",
            "answer": "Left lateral tilt or manual uterine displacement."
        },
        {
            "question": "Oxygen",
            "answer": "10–15 lpm via NRB; SpO₂ >94%."
        },
        {
            "question": "Target BP reasoning",
            "answer": "Reduce stroke risk while keeping uterine perfusion."
        },
        {
            "question": "Postpartum timing",
            "answer": "Up to 6 weeks; rare after 48 hours."
        },
        {
            "question": "KPIs",
            "answer": "Antihypertensive for severe hypertension; left lateral tilt in the second and third trimester."
        },
        {
            "question": "IV route",
            "answer": "Preferred for magnesium when access is available; IO if IV is difficult."
        },
        {
            "question": "Mild pre-eclampsia",
            "answer": "SBP 140–170, DBP 90–110: quiet, minimal movement, semi-recumbent or left lateral."
        },
        {
            "question": "Magnesium for pre-eclampsia",
            "answer": "Not routine; encouraged with severe features: 4 g IV then 2 g/hr."
        },
        {
            "question": "Definitive treatment",
            "answer": "Delivery of the placenta."
        }
    ],
    "critical": [
        {
            "id": "crit_10_4_1",
            "scenario": "At 38 weeks: BP 180/110 sustained for 20 minutes, severe headache, visual spots, HR 88, alert.",
            "question": "What do you do first?",
            "options": [
                {
                    "t": "Left lateral, oxygen, IV, ALS; labetalol 20 mg IV over 2 minutes, repeat every 10 minutes to max 80 mg",
                    "f": "Correct."
                },
                {
                    "t": "Lower BP to normal fast",
                    "f": "Lower MAP by 20–25% initially."
                },
                {
                    "t": "Diazepam",
                    "f": "She is not seizing."
                },
                {
                    "t": "Supine and transport only",
                    "f": "Treat severe hypertension."
                }
            ],
            "correct": 0,
            "explanation": "KPI: antihypertensive for severe hypertension.",
            "kpi": "Antihypertensive for severe hypertension."
        },
        {
            "id": "crit_10_4_2",
            "scenario": "At 36 weeks, found after a 90-second seizure that stopped by itself. GCS 12, BP 170/100.",
            "question": "What now?",
            "options": [
                {
                    "t": "Airway and oxygen in left lateral, IV, magnesium sulphate 6 g IV over 5–10 minutes (or 8 g IM), ALS",
                    "f": "Correct: eclampsia."
                },
                {
                    "t": "No treatment: the seizure stopped",
                    "f": "Magnesium prevents recurrence."
                },
                {
                    "t": "Diazepam first",
                    "f": "Magnesium is first line."
                },
                {
                    "t": "Supine",
                    "f": "Left lateral."
                }
            ],
            "correct": 0,
            "explanation": "Any seizing pregnant patient: assume eclampsia.",
            "kpi": "Second and third trimester patients in left lateral tilt."
        },
        {
            "id": "crit_10_4_3",
            "scenario": "Thirty minutes after magnesium sulphate, the patient is drowsy, RR 10, with absent reflexes.",
            "question": "What is happening, and what do you do?",
            "options": [
                {
                    "t": "Magnesium toxicity: stop it, support breathing, calcium gluconate 3 g IV if available",
                    "f": "Correct."
                },
                {
                    "t": "More magnesium",
                    "f": "Toxicity."
                },
                {
                    "t": "Diazepam",
                    "f": "Would worsen breathing."
                },
                {
                    "t": "Labetalol",
                    "f": "Not the problem."
                }
            ],
            "correct": 0,
            "explanation": "Loss of reflexes then respiratory depression.",
            "kpi": "Antihypertensive for severe hypertension."
        },
        {
            "id": "crit_10_4_4",
            "scenario": "Severe pre-eclampsia: BP 170/110 for 20 minutes, HR 55.",
            "ecg": "sbrady",
            "question": "What about labetalol?",
            "options": [
                {
                    "t": "Withhold labetalol (HR must be >60); left lateral, oxygen, consider magnesium, ALS and Tele-EMS",
                    "f": "Correct."
                },
                {
                    "t": "Give labetalol 20 mg anyway",
                    "f": "HR must be >60."
                },
                {
                    "t": "Give 80 mg at once",
                    "f": "Never."
                },
                {
                    "t": "Atropine then labetalol",
                    "f": "Not in this CPG."
                }
            ],
            "correct": 0,
            "explanation": "Ensure HR >60 before labetalol.",
            "kpi": "Antihypertensive for severe hypertension."
        },
        {
            "id": "crit_10_4_5",
            "scenario": "In active labor at 40 weeks with pre-eclampsia, she has a generalised tonic-clonic seizure. Magnesium 6 g IV has been given; she is still seizing 5 minutes later.",
            "question": "Next?",
            "options": [
                {
                    "t": "Protect the airway, oxygen, left lateral; EP gives diazepam 5 mg IV over 2 minutes",
                    "f": "Correct: refractory seizure."
                },
                {
                    "t": "Another 6 g magnesium push",
                    "f": "Benzodiazepine for refractory seizures."
                },
                {
                    "t": "Labetalol to stop the seizure",
                    "f": "Doesn't treat seizures."
                },
                {
                    "t": "Wait",
                    "f": "Treat."
                }
            ],
            "correct": 0,
            "explanation": "Repeat once if still seizing after 5 minutes.",
            "kpi": "Second and third trimester patients in left lateral tilt."
        }
    ]
};
