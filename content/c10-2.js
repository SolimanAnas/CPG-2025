/* ========== CPG 10.2 – Post-Partum Hemorrhage ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c10-2",
    "title": "Post-Partum Hemorrhage",
    "shortTitle": "10.2 Post Partum Hemorrhage",
    "guide": {
        "cpg": "10.2",
        "group": "obstetric",
        "groupLabel": "Obstetrics",
        "title": "Post-Partum Hemorrhage",
        "lead": "Treat any loss over 500 mL, or ongoing bleeding, as Red priority. Give oxygen, large-bore IV access and saline boluses if unstable. Control perineal trauma with pressure. Once the placenta is out, massage the fundus and have the mother empty her bladder. Then work through the T's: tone, trauma, tissue, thrombin. If bleeding continues, consider TXA and external aortic compression. Every PPH patient goes to hospital.",
        "source": {
            "label": "CPG 10.2",
            "pages": "319–322",
            "pdf": "../pdf_sections/10_2_Post_Partum_Hemorrhage.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Primary PPH: &gt;500 mL per vagina within 24 hours of birth.",
                    "Secondary PPH: acute excessive bleeding from 24 hours to 12 weeks after birth.",
                    "Worsening hypovolemia after delivery (altered consciousness, cold clammy skin)."
                ],
                "exclude": [
                    "Childbirth and active labor: Childbirth CPG.",
                    "Antepartum hemorrhage: PV Hemorrhage in Pregnancy CPG."
                ]
            },
            {
                "type": "groups",
                "title": "Assess",
                "icon": "stethoscope",
                "groups": [
                    {
                        "title": "Uterus",
                        "items": [
                            "Atonic (soft, boggy) or contracted? Atony is the leading cause.",
                            "Fundus above the umbilicus may mean retained products or clots."
                        ]
                    },
                    {
                        "title": "Perineum and vagina",
                        "items": [
                            "Lacerations, hematomas, ongoing bleeding; especially after instrumental delivery."
                        ]
                    },
                    {
                        "title": "Blood loss",
                        "items": [
                            "Soaked pads, clots &gt;5 cm, estimated loss &gt;500 mL; rate of bleeding."
                        ]
                    },
                    {
                        "title": "Shock",
                        "items": [
                            "Confusion, agitation or lethargy; pallor, sweating, clammy skin, dizziness.",
                            "HR &gt;100 bpm or BP &lt;90/60 mmHg; postural drop &gt;20 mmHg."
                        ]
                    },
                    {
                        "title": "History",
                        "items": [
                            "Gravida/para, labor duration, placenta delivered?, multiple gestation, previous PPH, coagulopathy, anticoagulants."
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
                        "title": "General",
                        "text": "Red priority; consider ALS. Absorbent pad, reassurance, position of comfort (left lateral tilt if possible)."
                    },
                    {
                        "title": "Oxygen",
                        "text": "High flow, 10–15 lpm via NRB."
                    },
                    {
                        "title": "IV access",
                        "text": "Large-bore IV above the diaphragm; two if hemodynamically unstable."
                    },
                    {
                        "title": "Fluids",
                        "text": "If unstable: normal saline 500 mL boluses, max 2000 mL, watching perfusion and mental status."
                    },
                    {
                        "title": "Perineal trauma",
                        "text": "Direct pressure on tears."
                    },
                    {
                        "title": "Placenta not delivered",
                        "text": "Await the third stage. Do not pull the cord."
                    },
                    {
                        "title": "Placenta delivered",
                        "text": "Fundal massage; encourage the mother to empty her bladder."
                    }
                ]
            },
            {
                "type": "table",
                "title": "Still bleeding: manage the T's",
                "icon": "search",
                "columns": [
                    "T",
                    "Check",
                    "Action"
                ],
                "rows": [
                    [
                        "Tone",
                        "Fundus firm and central?",
                        "Continue fundal massage"
                    ],
                    [
                        "Trauma",
                        "Perineal or vaginal wall lacerations?",
                        "Control hemorrhage"
                    ],
                    [
                        "Tissue",
                        "Placenta and membranes intact? Clots? (visual check only)",
                        "Massage to expel clots"
                    ],
                    [
                        "Thrombin",
                        "Clotting disorder or anticoagulants?",
                        "Continue massage; consider TXA"
                    ]
                ]
            },
            {
                "type": "steps",
                "title": "Still uncontrolled",
                "icon": "droplet",
                "steps": [
                    {
                        "title": "Tranexamic acid",
                        "text": "Profuse bleeding with shock, or significant shock.",
                        "doses": [
                            {
                                "drug": "TXA IV",
                                "dose": "1 gram in 100 mL NaCl",
                                "note": "Over 10 minutes"
                            }
                        ]
                    },
                    {
                        "title": "Saline",
                        "text": "500 mL boluses, max 2000 mL in total."
                    },
                    {
                        "title": "External aortic compression",
                        "text": "Supine on a firm surface. Fist or both hands just above the umbilicus, slightly left of midline; press the aorta firmly onto the spine. Effective: bleeding slows within seconds and the femoral pulse weakens. Hold until the hospital takes over; beyond 10 minutes, release for about 30 seconds every 10 minutes to check bleeding and limb perfusion."
                    }
                ]
            },
            {
                "type": "list",
                "title": "Transport",
                "icon": "ambulance",
                "items": [
                    "Never leave a PPH patient on scene: all need hospital evaluation.",
                    "Bring blood-soaked items in a biohazard bag.",
                    "Notify the hospital of PPH and shock status."
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
                                "sub": "1 gram IV over 10 minutes",
                                "href": "../pages/drug-calculator.html?drug=Tranexamic Acid",
                                "icon": "syringe"
                            },
                            {
                                "label": "Drug calculator: normal saline",
                                "sub": "500 mL boluses",
                                "href": "../pages/drug-calculator.html?drug=Normal Saline",
                                "icon": "droplet"
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
                    "Fundal massage for every patient with an atonic uterus."
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
                        "label": "10.3 PV Hemorrhage in Pregnancy",
                        "href": "c10-3.html"
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
            "q": "Most common cause of primary PPH?",
            "options": [
                "Uterine atony",
                "Genital tract trauma",
                "Retained tissue",
                "Coagulopathy"
            ],
            "correct": 0,
            "explanation": "Tone is the first T."
        },
        {
            "q": "Fluid bolus if hemodynamically unstable?",
            "options": [
                "Normal saline 500 mL",
                "250 mL",
                "1000 mL",
                "2000 mL at once"
            ],
            "correct": 0,
            "explanation": "Repeat as needed."
        },
        {
            "q": "TXA dose?",
            "options": [
                "1 gram IV in 100 mL NaCl over 10 minutes",
                "0.5 g IV",
                "2 g IV push",
                "5 g IV"
            ],
            "correct": 0,
            "explanation": "For profuse bleeding with shock."
        },
        {
            "q": "Boggy uterus after the placenta delivers. Priority?",
            "options": [
                "Fundal massage",
                "TXA first",
                "Aortic compression first",
                "Observe"
            ],
            "correct": 0,
            "explanation": "KPI."
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
            "q": "Which signs suggest significant blood loss?",
            "options": [
                "HR >100 and BP <90/60",
                "Bradycardia",
                "Hypertension",
                "Warm dry skin"
            ],
            "correct": 0,
            "explanation": "Also postural drop >20 mmHg."
        },
        {
            "q": "Primary PPH definition?",
            "options": [
                ">500 mL per vagina within 24 hours of birth",
                ">100 mL in 1 hour",
                ">1000 mL at 2 weeks",
                "Any bleeding"
            ],
            "correct": 0,
            "explanation": "Inclusion criteria."
        },
        {
            "q": "Where is external aortic compression applied?",
            "options": [
                "Just above the umbilicus, slightly left of midline",
                "Over the femoral artery",
                "Below the pubis",
                "Right upper quadrant"
            ],
            "correct": 0,
            "explanation": "Compress against the spine."
        },
        {
            "q": "Compression needed beyond 10 minutes. What do you do?",
            "options": [
                "Release for about 30 seconds every 10 minutes, then reapply",
                "Never release",
                "Release every minute",
                "Stop after 10 minutes"
            ],
            "correct": 0,
            "explanation": "To check bleeding and prevent limb ischemia."
        },
        {
            "q": "What does fundal massage do?",
            "options": [
                "Promotes uterine contraction and expels clots",
                "Delivers the baby",
                "Measures blood loss",
                "Relieves pain"
            ],
            "correct": 0,
            "explanation": "Continue it while bleeding."
        },
        {
            "q": "BP 90/60 after 1000 mL saline, still bleeding. Next?",
            "options": [
                "Another 500 mL bolus (max 2000 mL) and consider TXA",
                "Vasopressors",
                "Stop fluids",
                "Discharge"
            ],
            "correct": 0,
            "explanation": "Per the flowchart."
        },
        {
            "q": "Which is a listed risk factor?",
            "options": [
                "Previous PPH",
                "Short labor",
                "First trimester nausea",
                "Low maternal age"
            ],
            "correct": 0,
            "explanation": "Also multiple gestation and coagulopathies."
        },
        {
            "q": "Oxygen?",
            "options": [
                "10–15 lpm via NRB",
                "2–4 L/min nasal cannula",
                "None",
                "6 L/min mask"
            ],
            "correct": 0,
            "explanation": "High flow."
        },
        {
            "q": "Fundus firm and central but bleeding continues. Suspect?",
            "options": [
                "Trauma: lacerations",
                "Atony",
                "Normal",
                "Placenta not yet delivered"
            ],
            "correct": 0,
            "explanation": "Check the perineum and vaginal walls."
        },
        {
            "q": "Secondary PPH window?",
            "options": [
                "24 hours to 12 weeks after birth",
                "First hour only",
                "After 6 months",
                "Before delivery"
            ],
            "correct": 0,
            "explanation": "Inclusion criteria."
        },
        {
            "q": "Position?",
            "options": [
                "Comfort, left lateral tilt if possible",
                "Prone",
                "Sitting upright",
                "Standing"
            ],
            "correct": 0,
            "explanation": "Supine on a firm surface for aortic compression."
        },
        {
            "q": "KPI?",
            "options": [
                "Fundal massage for every atonic uterus",
                "Oxygen for all",
                "Glucose for all",
                "12-lead ECG"
            ],
            "correct": 0,
            "explanation": "Single KPI."
        },
        {
            "q": "BP 80/50 after 2000 mL saline and TXA; fundus firm; still bleeding. Next?",
            "options": [
                "External aortic compression and rapid transport",
                "Dopamine",
                "More saline beyond 2000 mL",
                "Wait on scene"
            ],
            "correct": 0,
            "explanation": "Fluid maximum reached."
        },
        {
            "q": "Purpose of external aortic compression?",
            "options": [
                "Reduce blood flow to the pelvis",
                "Raise heart rate",
                "Deliver the placenta",
                "Relieve pain"
            ],
            "correct": 0,
            "explanation": "The femoral pulse should weaken."
        },
        {
            "q": "HR 140, pale, bleeding briskly, placenta out, boggy uterus. What comes first?",
            "options": [
                "Oxygen, IV access, fluids and fundal massage together",
                "Fluids only",
                "Wait for ALS",
                "Postural BP"
            ],
            "correct": 0,
            "explanation": "Red priority."
        },
        {
            "q": "What clot size counts towards significant loss?",
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
            "q": "Known clotting disorder or anticoagulant. Which T?",
            "options": [
                "Thrombin",
                "Tone",
                "Trauma",
                "Tissue"
            ],
            "correct": 0,
            "explanation": "Consider TXA if uncontrolled."
        },
        {
            "q": "TXA indication?",
            "options": [
                "Profuse bleeding with shock, or significant shock",
                "Any blood loss",
                "Before delivery",
                "Only after arrival"
            ],
            "correct": 0,
            "explanation": "Per the CPG."
        },
        {
            "q": "Placenta not delivered and bleeding. What do you avoid?",
            "options": [
                "Pulling on the cord",
                "Direct pressure on tears",
                "Oxygen",
                "IV access"
            ],
            "correct": 0,
            "explanation": "Await the third stage."
        },
        {
            "q": "How is tissue assessed prehospital?",
            "options": [
                "Visual observation only",
                "Manual exploration",
                "Ultrasound",
                "Not at all"
            ],
            "correct": 0,
            "explanation": "No manual removal prehospital."
        },
        {
            "q": "Where should IV access be placed?",
            "options": [
                "Large bore, above the diaphragm",
                "Feet",
                "Any small vein",
                "None"
            ],
            "correct": 0,
            "explanation": "Two if unstable."
        },
        {
            "q": "Can a PPH patient be left at home after bleeding settles?",
            "options": [
                "No: all need hospital evaluation",
                "Yes",
                "Only if stable",
                "Only if day 2"
            ],
            "correct": 0,
            "explanation": "Clinical insight."
        },
        {
            "q": "BP 100/70, HR 110, anxious, bleeding. Management?",
            "options": [
                "Oxygen, IV access, fundal massage, find the T, transport",
                "Observe only",
                "TXA and leave",
                "Fluids only"
            ],
            "correct": 0,
            "explanation": "Red priority with ongoing bleeding."
        },
        {
            "q": "What happens to blood-soaked items?",
            "options": [
                "Bagged and taken to hospital",
                "Discarded on scene",
                "Left with family",
                "Burned"
            ],
            "correct": 0,
            "explanation": "To estimate loss."
        },
        {
            "q": "Uterus still boggy after massage. What do you do?",
            "options": [
                "Continue massage; empty bladder; then TXA and aortic compression if uncontrolled",
                "Stop massage",
                "Leave on scene",
                "Pull the cord"
            ],
            "correct": 0,
            "explanation": "Manage the T's."
        }
    ],
    "flashcards": [
        {
            "question": "Primary PPH",
            "answer": ">500 mL per vagina within 24 hours of birth."
        },
        {
            "question": "Secondary PPH",
            "answer": "Acute excessive bleeding from 24 hours to 12 weeks after birth."
        },
        {
            "question": "4 T's",
            "answer": "Tone, Trauma, Tissue, Thrombin."
        },
        {
            "question": "Tone",
            "answer": "Fundus firm and central? Continue fundal massage."
        },
        {
            "question": "Trauma",
            "answer": "Perineal or vaginal lacerations: direct pressure."
        },
        {
            "question": "Tissue",
            "answer": "Placenta and membranes intact? Visual check only; massage to expel clots."
        },
        {
            "question": "Thrombin",
            "answer": "Clotting disorder or anticoagulants: consider TXA."
        },
        {
            "question": "TXA",
            "answer": "1 gram IV in 100 mL NaCl over 10 minutes."
        },
        {
            "question": "Fluids",
            "answer": "Normal saline 500 mL boluses if unstable, max 2000 mL."
        },
        {
            "question": "Aortic compression site",
            "answer": "Just above the umbilicus, slightly left of midline."
        },
        {
            "question": "Aortic compression duration",
            "answer": "Hold until handover; beyond 10 minutes, release about 30 seconds every 10 minutes."
        },
        {
            "question": "Aortic compression effect",
            "answer": "Bleeding slows within seconds; femoral pulse weakens or disappears."
        },
        {
            "question": "Shock signs",
            "answer": "HR >100, BP <90/60, postural drop >20 mmHg, pallor, confusion."
        },
        {
            "question": "KPI",
            "answer": "Fundal massage for every atonic uterus."
        },
        {
            "question": "Oxygen",
            "answer": "10–15 lpm via NRB."
        },
        {
            "question": "Placenta not out",
            "answer": "Await the third stage; never pull the cord."
        },
        {
            "question": "Placenta out",
            "answer": "Fundal massage and empty the bladder."
        },
        {
            "question": "Transport",
            "answer": "Every PPH patient; blood-soaked items in a biohazard bag."
        },
        {
            "question": "Risk factors",
            "answer": "Multiple gestation, previous PPH, coagulopathy."
        },
        {
            "question": "Triage",
            "answer": "Red: ongoing PV bleeding or estimated loss >500 mL."
        }
    ],
    "critical": [
        {
            "id": "crit_10_2_1",
            "scenario": "Fifteen minutes after a term delivery, with the placenta out, a mother bleeds heavily with clots. Uterus boggy, BP 90/60, HR 120.",
            "question": "What do you do first?",
            "options": [
                {
                    "t": "Fundal massage, empty bladder, oxygen 10–15 lpm, large-bore IV and 500 mL saline, transport",
                    "f": "Correct."
                },
                {
                    "t": "Fluids only",
                    "f": "Massage treats the cause."
                },
                {
                    "t": "Pull more on the cord",
                    "f": "The placenta is already out."
                },
                {
                    "t": "Observe for 30 minutes",
                    "f": "Red priority."
                }
            ],
            "correct": 0,
            "explanation": "Atony: the leading cause.",
            "kpi": "Fundal massage for every atonic uterus."
        },
        {
            "id": "crit_10_2_2",
            "scenario": "After massage, 1500 mL saline and TXA, the uterus is firm but bleeding continues. BP 85/50, HR 130.",
            "question": "Next?",
            "options": [
                {
                    "t": "Check for lacerations and press on them; final 500 mL bolus; external aortic compression if still bleeding",
                    "f": "Correct."
                },
                {
                    "t": "Dopamine",
                    "f": "Not in this CPG."
                },
                {
                    "t": "Third litre of saline",
                    "f": "Maximum 2000 mL."
                },
                {
                    "t": "Stop massage",
                    "f": "Manage all the T's."
                }
            ],
            "correct": 0,
            "explanation": "Firm uterus: think trauma, tissue, thrombin.",
            "kpi": "Fundal massage for every atonic uterus."
        },
        {
            "id": "crit_10_2_3",
            "scenario": "The uterus is firm, but a deep perineal laceration is bleeding actively.",
            "question": "Priority?",
            "options": [
                {
                    "t": "Direct pressure on the laceration",
                    "f": "Correct: trauma."
                },
                {
                    "t": "TXA only",
                    "f": "Control the source first."
                },
                {
                    "t": "Fundal massage only",
                    "f": "The uterus is already firm."
                },
                {
                    "t": "Aortic compression first",
                    "f": "Try direct pressure first."
                }
            ],
            "correct": 0,
            "explanation": "Control trauma or tears with direct pressure.",
            "kpi": "Fundal massage for every atonic uterus."
        },
        {
            "id": "crit_10_2_4",
            "scenario": "The baby was born 20 minutes ago; the placenta has not delivered and there is moderate bleeding.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Don't pull the cord; direct pressure on any tears; oxygen, IV, fluids if unstable; await the third stage and transport",
                    "f": "Correct."
                },
                {
                    "t": "Pull the cord firmly",
                    "f": "Never."
                },
                {
                    "t": "Manual removal",
                    "f": "Not prehospital."
                },
                {
                    "t": "Leave on scene",
                    "f": "Transport all PPH."
                }
            ],
            "correct": 0,
            "explanation": "Placenta-not-delivered branch.",
            "kpi": "Fundal massage for every atonic uterus."
        },
        {
            "id": "crit_10_2_5",
            "scenario": "BP 80/40, HR 140 after 2 L saline and TXA. Uterus firm, bleeding still heavy.",
            "question": "Next?",
            "options": [
                {
                    "t": "External aortic compression and rapid transport, keeping pressure until the hospital takes over",
                    "f": "Correct."
                },
                {
                    "t": "Dopamine infusion",
                    "f": "Not in this CPG."
                },
                {
                    "t": "More saline",
                    "f": "Maximum 2000 mL reached."
                },
                {
                    "t": "Wait for ALS on scene",
                    "f": "Transport."
                }
            ],
            "correct": 0,
            "explanation": "Compress just above the umbilicus, slightly left of midline.",
            "kpi": "Fundal massage for every atonic uterus."
        }
    ]
};
