/* ========== CPG 10.3 – PV Hemorrhage in Pregnancy ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c10-3",
    "title": "PV Hemorrhage in Pregnancy",
    "shortTitle": "10.3 PV Hemorrhage in Pregnancy",
    "guide": {
        "cpg": "10.3",
        "group": "obstetric",
        "groupLabel": "Obstetrics",
        "title": "PV Hemorrhage in Pregnancy",
        "lead": "Bleeding at any stage of pregnancy can hide serious causes such as ectopic pregnancy, placental abruption or placenta previa. Take a focused history, estimate the loss and avoid vaginal examination. If unstable (HR ≥100 or BP ≤90/60), use left lateral tilt, give oxygen, saline boluses and TXA, and transport rapidly.",
        "source": {
            "label": "CPG 10.3",
            "pages": "324–327",
            "pdf": "../pdf_sections/10_3_PV_Hemorrhage_in_Pregnancy.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Vaginal bleeding in any trimester.",
                    "Pelvic pain or possible ectopic pregnancy.",
                    "Consider pregnancy in any female aged 10–60 years."
                ],
                "exclude": [
                    "Childbirth and active labor: Childbirth CPG.",
                    "Post-partum hemorrhage: Post-Partum Hemorrhage CPG."
                ]
            },
            {
                "type": "table",
                "title": "Classification",
                "icon": "clipboard-list",
                "columns": [
                    "Type",
                    "Gestation"
                ],
                "rows": [
                    [
                        "Early pregnancy hemorrhage",
                        "&lt;20 weeks"
                    ],
                    [
                        "Antepartum hemorrhage",
                        "&gt;20 weeks"
                    ]
                ],
                "notes": [
                    "Possible causes include ectopic pregnancy, spontaneous abortion, placental abruption and placenta previa. Syncope may be the presenting sign of intra-abdominal bleeding from an ectopic pregnancy."
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
                            "Gestation, gravidity/parity, past obstetric history, LMP.",
                            "Previous PV bleeds, last fetal movements."
                        ]
                    },
                    {
                        "title": "Bleeding",
                        "items": [
                            "Amount, rate and nature: soaked pads, clots &gt;5 cm, estimated loss &gt;500 mL.",
                            "Absorbent pad to the perineum. Avoid PV examination."
                        ]
                    },
                    {
                        "title": "Shock",
                        "items": [
                            "Confusion, agitation or lethargy; pallor, sweating, clammy skin, dizziness, palpitations.",
                            "HR &gt;100 bpm or BP &lt;90/60 mmHg.",
                            "Postural drop &gt;20 mmHg or a rise in HR from lying to standing: significant hypovolemia."
                        ]
                    },
                    {
                        "title": "Red priority",
                        "items": [
                            "Estimated loss &gt;500 mL, or ongoing bleeding with shock."
                        ]
                    }
                ]
            },
            {
                "type": "gate",
                "title": "Hemodynamically stable?",
                "icon": "triangle-alert",
                "question": "Heart rate &lt;100 bpm and blood pressure &gt;90/60 mmHg?",
                "yes": "Absorbent pad, calm and reassure, position of comfort (left lateral tilt if possible), transport.",
                "no": "Unstable pathway below."
            },
            {
                "type": "steps",
                "title": "Unstable",
                "icon": "list",
                "steps": [
                    {
                        "title": "ALS back-up",
                        "text": "Consider."
                    },
                    {
                        "title": "Position",
                        "text": "Left lateral tilt, or manual displacement of the uterus to the left."
                    },
                    {
                        "title": "Oxygen",
                        "text": "High flow, 10–15 lpm via NRB (flowchart target SpO<sub>2</sub> 94–98%)."
                    },
                    {
                        "title": "IV/IO access",
                        "text": "Large bore; a second line if unstable."
                    },
                    {
                        "title": "Normal saline",
                        "text": "500 mL boluses, max 2000 mL."
                    },
                    {
                        "title": "Tranexamic acid",
                        "level": "P",
                        "text": "Profuse bleeding with shock, or significant shock.",
                        "doses": [
                            {
                                "drug": "TXA IV/IO",
                                "dose": "1 gram in 100 mL NaCl",
                                "note": "Over 10 minutes"
                            }
                        ]
                    },
                    {
                        "title": "Analgesia",
                        "text": "Consider, per the Pain Management CPG."
                    },
                    {
                        "title": "Metoclopramide",
                        "level": "P",
                        "text": "If significant nausea.",
                        "doses": [
                            {
                                "drug": "Metoclopramide IV/IO/IM",
                                "dose": "10 mg",
                                "note": "IV/IO as an infusion in 100 mL NaCl over 10 minutes"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "list",
                "title": "Safety",
                "icon": "shield",
                "items": [
                    "Never put a hand or fingers into the vagina to stop bleeding; avoid unnecessary vaginal manipulation.",
                    "Third trimester and hypotensive: transport on the left side or with the uterus displaced to the left."
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
                                "label": "Drug calculator: tranexamic acid",
                                "sub": "1 gram over 10 minutes",
                                "href": "../pages/drug-calculator.html?drug=Tranexamic Acid",
                                "icon": "syringe"
                            },
                            {
                                "label": "Drug calculator: normal saline",
                                "sub": "500 mL boluses",
                                "href": "../pages/drug-calculator.html?drug=Normal Saline",
                                "icon": "droplet"
                            },
                            {
                                "label": "Drug calculator: metoclopramide",
                                "sub": "10 mg",
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
                    "IV fluids for every hemodynamically unstable patient."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "10.1 Childbirth",
                        "href": "c10-1.html"
                    },
                    {
                        "label": "10.2 Post-Partum Hemorrhage",
                        "href": "c10-2.html"
                    },
                    {
                        "label": "6.12 Pain Management",
                        "href": "c6-12.html"
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
            "q": "At 8 weeks, abdominal pain and syncope with minimal bleeding. Which serious cause must you consider?",
            "options": [
                "Ectopic pregnancy with intra-abdominal bleeding",
                "Placenta previa",
                "Normal pregnancy",
                "Indigestion"
            ],
            "correct": 0,
            "explanation": "Syncope can be the presenting symptom."
        },
        {
            "q": "Fluid if hemodynamically unstable?",
            "options": [
                "Normal saline 500 mL boluses",
                "250 mL once",
                "2000 mL at once",
                "No fluids"
            ],
            "correct": 0,
            "explanation": "Max 2000 mL."
        },
        {
            "q": "TXA dose?",
            "options": [
                "1 gram IV in 100 mL NaCl over 10 minutes",
                "0.5 g",
                "2 g push",
                "5 g"
            ],
            "correct": 0,
            "explanation": "Paramedic level."
        },
        {
            "q": "Bleeding before 20 weeks is classified as…",
            "options": [
                "Early pregnancy hemorrhage",
                "Antepartum hemorrhage",
                "Post-partum hemorrhage",
                "Normal"
            ],
            "correct": 0,
            "explanation": "After 20 weeks: antepartum hemorrhage."
        },
        {
            "q": "Flowchart SpO₂ target?",
            "options": [
                "94–98%",
                "88–92%",
                "100%",
                "No oxygen"
            ],
            "correct": 0,
            "explanation": "High-flow oxygen 10–15 lpm via NRB in the text."
        },
        {
            "q": "Which examination should you avoid?",
            "options": [
                "PV (vaginal) examination",
                "Pulse",
                "BP",
                "Abdominal inspection"
            ],
            "correct": 0,
            "explanation": "Avoid vaginal manipulation."
        },
        {
            "q": "Maximum total saline?",
            "options": [
                "2000 mL",
                "500 mL",
                "1000 mL",
                "No maximum"
            ],
            "correct": 0,
            "explanation": "In 500 mL boluses."
        },
        {
            "q": "Why avoid vaginal manipulation?",
            "options": [
                "It may worsen hemorrhage",
                "It is too slow",
                "It is painful only",
                "No reason"
            ],
            "correct": 0,
            "explanation": "Clinical insight."
        },
        {
            "q": "Position for a hypotensive third-trimester patient?",
            "options": [
                "Left lateral, or uterus displaced to the left",
                "Supine",
                "Trendelenburg",
                "Prone"
            ],
            "correct": 0,
            "explanation": "Safety consideration."
        },
        {
            "q": "BP 95/65 after 1000 mL, HR 115, still bleeding. Next?",
            "options": [
                "Another 500 mL bolus (max 2000 mL) and consider TXA",
                "Vasopressors",
                "Stop",
                "Discharge"
            ],
            "correct": 0,
            "explanation": "Still unstable."
        },
        {
            "q": "What defines hemodynamically stable on the flowchart?",
            "options": [
                "HR <100 bpm and BP >90/60 mmHg",
                "HR <120 and BP >80/50",
                "Any BP",
                "SpO₂ >90%"
            ],
            "correct": 0,
            "explanation": "Otherwise unstable pathway."
        },
        {
            "q": "Oxygen?",
            "options": [
                "10–15 lpm via NRB",
                "2 L/min cannula",
                "None",
                "4 L/min mask"
            ],
            "correct": 0,
            "explanation": "High flow."
        },
        {
            "q": "What history items are key?",
            "options": [
                "Gestation, gravidity/parity, LMP, previous bleeds, last fetal movements",
                "Only age",
                "Diet",
                "Shoe size"
            ],
            "correct": 0,
            "explanation": "Focused history."
        },
        {
            "q": "KPI?",
            "options": [
                "IV fluids for every hemodynamically unstable patient",
                "TXA for all",
                "Ultrasound",
                "Glucose"
            ],
            "correct": 0,
            "explanation": "Single KPI."
        },
        {
            "q": "BP 80/50 after 1500 mL saline. Next?",
            "options": [
                "Final 500 mL bolus, TXA if not given, rapid transport",
                "Dopamine",
                "Stop all fluids",
                "Pelvic exam"
            ],
            "correct": 0,
            "explanation": "Max 2000 mL."
        },
        {
            "q": "TXA dose for a 100 kg patient?",
            "options": [
                "1 gram",
                "2 g",
                "1.5 g",
                "0.5 g"
            ],
            "correct": 0,
            "explanation": "Fixed dose."
        },
        {
            "q": "Syncope and mild pain with a positive pregnancy test. Priority?",
            "options": [
                "Assess for shock, IV access and transport",
                "Oral fluids and home",
                "Pelvic exam",
                "Wait"
            ],
            "correct": 0,
            "explanation": "Possible ectopic."
        },
        {
            "q": "Which TXA indication applies?",
            "options": [
                "Profuse bleeding with shock, or significant shock",
                "Any spotting",
                "Before every transport",
                "Only after 20 weeks"
            ],
            "correct": 0,
            "explanation": "Per the CPG."
        },
        {
            "q": "Postural BP finding of significant hypovolemia?",
            "options": [
                "Drop >20 mmHg or HR rise from lying to standing",
                "Any change",
                "Drop of 2 mmHg",
                "None"
            ],
            "correct": 0,
            "explanation": "Assessment point."
        },
        {
            "q": "Which clot size suggests significant bleeding?",
            "options": [
                ">5 cm",
                ">1 cm",
                "Any clot",
                ">20 cm"
            ],
            "correct": 0,
            "explanation": "Estimation of blood loss."
        },
        {
            "q": "What does TXA do?",
            "options": [
                "Reduces bleeding (antifibrinolytic)",
                "Treats infection",
                "Raises BP directly",
                "Relieves nausea"
            ],
            "correct": 0,
            "explanation": "Reduces clot breakdown."
        },
        {
            "q": "BP 100/70, HR 110. Stable by the flowchart?",
            "options": [
                "No: HR is not <100",
                "Yes: BP is normal",
                "Only if lying",
                "Only if pale"
            ],
            "correct": 0,
            "explanation": "Both criteria must be met."
        },
        {
            "q": "Significant nausea in an unstable patient. What can a paramedic give?",
            "options": [
                "Metoclopramide 10 mg",
                "Ondansetron 40 mg",
                "Nothing",
                "Haloperidol"
            ],
            "correct": 0,
            "explanation": "IV/IO as an infusion over 10 minutes."
        },
        {
            "q": "Which is Red priority?",
            "options": [
                "Estimated loss >500 mL or ongoing bleeding with shock",
                "Spotting only",
                "Stable, minimal loss",
                "Pain only"
            ],
            "correct": 0,
            "explanation": "Triage."
        },
        {
            "q": "Fluid of choice?",
            "options": [
                "Normal saline",
                "5% dextrose",
                "Colloid",
                "Water orally"
            ],
            "correct": 0,
            "explanation": "500 mL boluses."
        },
        {
            "q": "BP 110/70 supine; dizzy with BP 90/60 when sitting up. Meaning?",
            "options": [
                "Significant hypovolemia",
                "Normal pregnancy",
                "Anxiety",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "Postural drop >20 mmHg."
        },
        {
            "q": "Pain in PV hemorrhage?",
            "options": [
                "Consider analgesia per the Pain CPG",
                "Never treat",
                "Only after hospital",
                "Paracetamol PR"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "Who should be considered possibly pregnant?",
            "options": [
                "Any female aged 10–60 years",
                "Only married women",
                "Only over 18",
                "Only with a test"
            ],
            "correct": 0,
            "explanation": "Inclusion criteria."
        },
        {
            "q": "HR 130, BP 80/50; after 500 mL, HR 110 and BP 90/60. Next?",
            "options": [
                "Another 500 mL bolus and reassess",
                "Dopamine",
                "Stop",
                "Transport only without fluids"
            ],
            "correct": 0,
            "explanation": "Still unstable."
        },
        {
            "q": "Can you pack the vagina with your fingers to stop bleeding?",
            "options": [
                "No, never",
                "Yes",
                "Only for heavy bleeding",
                "Only after 20 weeks"
            ],
            "correct": 0,
            "explanation": "Safety consideration."
        }
    ],
    "flashcards": [
        {
            "question": "Early pregnancy hemorrhage",
            "answer": "<20 weeks' gestation."
        },
        {
            "question": "Antepartum hemorrhage",
            "answer": ">20 weeks' gestation."
        },
        {
            "question": "Serious causes",
            "answer": "Ectopic pregnancy, spontaneous abortion, placental abruption, placenta previa."
        },
        {
            "question": "Syncope",
            "answer": "May be the first sign of intra-abdominal bleeding (e.g. ectopic)."
        },
        {
            "question": "Stable",
            "answer": "HR <100 bpm and BP >90/60 mmHg."
        },
        {
            "question": "Unstable pathway",
            "answer": "Left lateral tilt, oxygen, saline boluses, TXA, analgesia, antiemetic, transport."
        },
        {
            "question": "Fluids",
            "answer": "Normal saline 500 mL boluses, max 2000 mL."
        },
        {
            "question": "TXA",
            "answer": "1 gram IV/IO in 100 mL NaCl over 10 minutes (P)."
        },
        {
            "question": "TXA indication",
            "answer": "Profuse bleeding with shock, or significant shock."
        },
        {
            "question": "Metoclopramide",
            "answer": "10 mg IV/IO/IM for significant nausea; IV/IO infused over 10 minutes (P)."
        },
        {
            "question": "Oxygen",
            "answer": "10–15 lpm via NRB; flowchart target 94–98%."
        },
        {
            "question": "Vaginal examination",
            "answer": "Avoid; never put fingers in to stop bleeding."
        },
        {
            "question": "Positioning",
            "answer": "Left lateral tilt or manual uterine displacement to the left."
        },
        {
            "question": "Postural BP",
            "answer": "Drop >20 mmHg or HR rise: significant hypovolemia."
        },
        {
            "question": "Blood loss estimate",
            "answer": "Soaked pads, clots >5 cm, loss >500 mL."
        },
        {
            "question": "KPI",
            "answer": "IV fluids for every hemodynamically unstable patient."
        },
        {
            "question": "Red priority",
            "answer": "Loss >500 mL, or ongoing bleeding with shock."
        },
        {
            "question": "History",
            "answer": "Gestation, gravidity/parity, LMP, previous bleeds, last fetal movements."
        },
        {
            "question": "Inclusion",
            "answer": "PV bleeding in any trimester; pelvic pain or possible ectopic; consider pregnancy aged 10–60."
        },
        {
            "question": "Exclusion",
            "answer": "Active labor and post-partum hemorrhage."
        }
    ],
    "critical": [
        {
            "id": "crit_10_3_1",
            "scenario": "A woman 10 weeks pregnant has sudden lower abdominal pain, fainted, and has minimal spotting. Pale, HR 130, BP 85/50.",
            "ecg": "stach",
            "question": "What do you suspect, and what do you do?",
            "options": [
                {
                    "t": "Possible ruptured ectopic: left lateral, oxygen, large-bore IV, 500 mL saline boluses, TXA, rapid transport",
                    "f": "Correct."
                },
                {
                    "t": "Minimal bleeding, so reassure and leave",
                    "f": "Bleeding may be intra-abdominal."
                },
                {
                    "t": "Vaginal examination",
                    "f": "Avoid."
                },
                {
                    "t": "Oral fluids",
                    "f": "She is in shock."
                }
            ],
            "correct": 0,
            "explanation": "Syncope can be the presenting sign.",
            "kpi": "IV fluids for every hemodynamically unstable patient."
        },
        {
            "id": "crit_10_3_2",
            "scenario": "At 34 weeks, painless vaginal bleeding. Alert, BP 110/70, HR 96.",
            "question": "Management?",
            "options": [
                {
                    "t": "Absorbent pad, no PV examination, reassure, left lateral tilt, monitor and transport",
                    "f": "Correct: stable pathway."
                },
                {
                    "t": "Vaginal examination",
                    "f": "Avoid."
                },
                {
                    "t": "TXA and 2 L saline",
                    "f": "She is stable."
                },
                {
                    "t": "Leave on scene",
                    "f": "Transport."
                }
            ],
            "correct": 0,
            "explanation": "HR <100 and BP >90/60: stable.",
            "kpi": "IV fluids for every hemodynamically unstable patient."
        },
        {
            "id": "crit_10_3_3",
            "scenario": "At 32 weeks, severe abdominal pain, vaginal bleeding, and a rigid tender uterus. BP 90/60, HR 120.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Unstable: left lateral tilt, oxygen, IV, 500 mL saline boluses, TXA (P), analgesia, rapid transport",
                    "f": "Correct."
                },
                {
                    "t": "Supine and observe",
                    "f": "She is unstable."
                },
                {
                    "t": "Vaginal examination",
                    "f": "Avoid."
                },
                {
                    "t": "Dopamine",
                    "f": "Not in this CPG."
                }
            ],
            "correct": 0,
            "explanation": "A serious cause such as abruption is likely.",
            "kpi": "IV fluids for every hemodynamically unstable patient."
        },
        {
            "id": "crit_10_3_4",
            "scenario": "At 16 weeks, bleeding for 2 hours with large clots. Dizzy, HR 110, BP 90/60.",
            "question": "First?",
            "options": [
                {
                    "t": "Large-bore IV and 500 mL normal saline boluses, oxygen, left lateral tilt",
                    "f": "Correct: unstable."
                },
                {
                    "t": "Oral fluids",
                    "f": "She is unstable."
                },
                {
                    "t": "PV examination",
                    "f": "Avoid."
                },
                {
                    "t": "2 L saline at once",
                    "f": "500 mL boluses."
                }
            ],
            "correct": 0,
            "explanation": "KPI: fluids for every unstable patient.",
            "kpi": "IV fluids for every hemodynamically unstable patient."
        },
        {
            "id": "crit_10_3_5",
            "scenario": "At 38 weeks, sudden painless bright red bleeding. No distress, BP 110/70, HR 90, lying flat.",
            "question": "Management?",
            "options": [
                {
                    "t": "Left lateral tilt, absorbent pad, no PV examination, monitor for deterioration and transport",
                    "f": "Correct."
                },
                {
                    "t": "Keep her supine",
                    "f": "Use left lateral tilt."
                },
                {
                    "t": "TXA immediately",
                    "f": "Indicated for shock."
                },
                {
                    "t": "Vaginal examination",
                    "f": "Avoid."
                }
            ],
            "correct": 0,
            "explanation": "Stable now, but watch closely.",
            "kpi": "IV fluids for every hemodynamically unstable patient."
        }
    ]
};
