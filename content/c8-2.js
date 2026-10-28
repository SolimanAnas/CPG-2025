/* ========== CPG 8.2 – Opioid Overdose ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c8-2",
    "title": "Opioid Overdose",
    "shortTitle": "8.2 Opioid Overdose",
    "guide": {
        "cpg": "8.2",
        "group": "environmental",
        "groupLabel": "Toxicology",
        "title": "Opioid Overdose",
        "lead": "Breathing first: ventilate with a BVM and oxygenate before naloxone. Then give naloxone (EMT), titrated to respiratory effort rather than full wakefulness, and be ready for withdrawal and agitation. Everyone is transported, because naloxone wears off before many opioids.",
        "source": {
            "label": "CPG 8.2",
            "pages": "250–253",
            "pdf": "../pdf_sections/8_2_Opioid_Overdose.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Suspected or confirmed opioid overdose, intentional or not: altered mental status, respiratory depression, cardiovascular instability, seizure or coma, or evidence of opioid use."
                ],
                "exclude": [
                    "Industrial or environmental toxins: General Toxicology CPG.",
                    "Non-toxic ingestion without symptoms.",
                    "Isolated alcohol intoxication."
                ]
            },
            {
                "type": "groups",
                "title": "Assess",
                "icon": "stethoscope",
                "groups": [
                    {
                        "title": "Opioid toxicity",
                        "items": [
                            "RR &lt;12 with pinpoint pupils; depressed consciousness; opioid use or paraphernalia (pill bottles, syringes, patches, blister packs)."
                        ]
                    },
                    {
                        "title": "High risk",
                        "items": [
                            "GCS &lt;8; RR &lt;10 or apnea; SpO<sub>2</sub> &lt;94% despite oxygen.",
                            "Co-ingestants (alcohol, benzodiazepines, stimulants).",
                            "Loss of tolerance (recent release from incarceration); chronic use.",
                            "Pediatric ingestion: even a small dose can kill.",
                            "Long-acting opioids: re-narcotization. Suspected self-harm."
                        ]
                    },
                    {
                        "title": "Triage",
                        "items": [
                            "Red: respiratory depression, GCS &lt;8.",
                            "Yellow: stable, moderate symptoms (drowsy, hypotensive).",
                            "Green: alert, no symptoms, accidental ingestion."
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
                        "title": "Airway and breathing",
                        "text": "BVM if RR &lt;10 or SpO<sub>2</sub> &lt;94%; suction vomit. High-flow oxygen for hypoxia or respiratory depression: SpO<sub>2</sub> 94–98%. EtCO<sub>2</sub> monitoring; IV access."
                    },
                    {
                        "title": "ALS back-up",
                        "text": "Routinely for GCS &lt;8, respiratory compromise, seizures or significant cardiovascular effects, suspected poly-drug ingestion."
                    },
                    {
                        "title": "Police",
                        "text": "Consider requesting police assistance; notify dispatch and police of a suspected drug overdose before transport."
                    },
                    {
                        "title": "Pre-oxygenate, then naloxone",
                        "level": "EMT",
                        "text": "For opioid features with altered mental status, respiratory depression or cardiovascular compromise. Titrate to respiratory effort."
                    },
                    {
                        "title": "No response after 10 mg",
                        "text": "Suspect another diagnosis. Keep supporting ventilation."
                    },
                    {
                        "title": "Reassess",
                        "text": "RR and effort, SpO<sub>2</sub>, GCS and pupils, HR and BP."
                    },
                    {
                        "title": "Transport",
                        "text": "All opioid overdoses, even if they respond. Notify early if airway or cardiovascular support is needed."
                    }
                ]
            },
            {
                "type": "table",
                "title": "Naloxone (EMT)",
                "icon": "syringe",
                "columns": [
                    "Route",
                    "Dose",
                    "Repeat and maximum"
                ],
                "rows": [
                    [
                        "IN (adult)",
                        "4 mg (one puff in a nostril)",
                        "Every 2–3 minutes if needed; maximum 8 mg (flowchart: every 3 minutes, maximum 20 mg)"
                    ],
                    [
                        "IV/IO/IM (adult)",
                        "0.4 mg",
                        "Every 2–3 minutes; maximum 10 mg"
                    ],
                    [
                        "IV/IO/IM (pediatric)",
                        "0.01 mg/kg",
                        "Repeat after 3 minutes if required"
                    ]
                ],
                "stack": true,
                "notes": [
                    "Naloxone is shorter-acting than some opioids: watch for re-narcotization.",
                    "It can precipitate withdrawal, especially in opioid-dependent patients."
                ]
            },
            {
                "type": "groups",
                "title": "Safety",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "After reversal",
                        "items": [
                            "Expect agitation or withdrawal: protect the crew and request support.",
                            "Do not rely on a naloxone response to exclude other causes."
                        ]
                    },
                    {
                        "title": "Always",
                        "items": [
                            "Protect the airway.",
                            "Poly-substance overdose is common.",
                            "Broselow tape for children; escalate pediatric ingestions early.",
                            "Non-judgemental care; Tele-EMS for complex or recurrent cases."
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
                                "label": "Pediatric drug calculator: naloxone",
                                "sub": "0.01 mg/kg",
                                "href": "../pages/drug-calculator.html?drug=Naloxone",
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
                    "Naloxone given for suspected opioid toxicity."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "8.1 General Toxicology",
                        "href": "c8-1.html"
                    },
                    {
                        "label": "2.1 Airway and Breathing",
                        "href": "c2.html?section=c2s1"
                    },
                    {
                        "label": "6.14 Suspected Alcohol Intoxication",
                        "href": "c6-14.html"
                    },
                    {
                        "label": "6.2 Abnormal Behavior",
                        "href": "c6-2.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "Which antidote is used for opioid overdose?",
            "options": [
                "Naloxone",
                "Flumazenil",
                "Glucagon",
                "Atropine"
            ],
            "correct": 0,
            "explanation": "EMT level."
        },
        {
            "q": "What is the adult intranasal dose?",
            "options": [
                "4 mg",
                "0.4 mg",
                "40 mg",
                "1 mg"
            ],
            "correct": 0,
            "explanation": "One puff in a nostril."
        },
        {
            "q": "RR 6 in a suspected overdose. What first?",
            "options": [
                "BVM ventilation with oxygen",
                "Naloxone before any breathing support",
                "Glucose",
                "Leave"
            ],
            "correct": 0,
            "explanation": "Pre-oxygenate before naloxone."
        },
        {
            "q": "Which signs suggest opioid toxicity?",
            "options": [
                "RR <12 with pinpoint pupils and depressed consciousness",
                "Dilated pupils and agitation",
                "Dry hot skin",
                "Sweating and tachycardia"
            ],
            "correct": 0,
            "explanation": "Plus evidence of opioid use."
        },
        {
            "q": "After how much naloxone without response should another diagnosis be suspected?",
            "options": [
                "10 mg",
                "0.4 mg",
                "1 mg",
                "50 mg"
            ],
            "correct": 0,
            "explanation": "Keep ventilating."
        },
        {
            "q": "A patient becomes combative after naloxone. Most likely?",
            "options": [
                "Withdrawal",
                "More opioid",
                "Hypoglycemia",
                "Stroke"
            ],
            "correct": 0,
            "explanation": "Ensure crew safety."
        },
        {
            "q": "What SpO₂ is targeted on the flowchart?",
            "options": [
                "94–98%",
                "88–92%",
                "100%",
                "None"
            ],
            "correct": 0,
            "explanation": "≥94% in the text."
        },
        {
            "q": "A child chewed a fentanyl patch but looks well. What do you do?",
            "options": [
                "Transport and escalate early",
                "Observe at home",
                "Leave",
                "Give food"
            ],
            "correct": 0,
            "explanation": "Even small amounts can kill children."
        },
        {
            "q": "What is the adult IV/IM dose?",
            "options": [
                "0.4 mg",
                "4 mg",
                "0.04 mg",
                "2 mg"
            ],
            "correct": 0,
            "explanation": "Repeat every 2–3 minutes, maximum 10 mg."
        },
        {
            "q": "Why transport patients who wake after naloxone?",
            "options": [
                "Re-narcotization: naloxone is shorter-acting",
                "They always need surgery",
                "Not needed",
                "To arrest them"
            ],
            "correct": 0,
            "explanation": "Transport all opioid overdoses."
        },
        {
            "q": "What is the pediatric dose?",
            "options": [
                "0.01 mg/kg IV/IO/IM",
                "0.1 mg/kg",
                "4 mg",
                "1 mg/kg"
            ],
            "correct": 0,
            "explanation": "Repeat after 3 minutes if required."
        },
        {
            "q": "When is BVM used?",
            "options": [
                "RR <10 or SpO₂ <94%",
                "Every patient",
                "Never",
                "Only in arrest"
            ],
            "correct": 0,
            "explanation": "With suction as needed."
        },
        {
            "q": "Which is a sign of opioid overdose?",
            "options": [
                "Pinpoint pupils",
                "Tachycardia with sweating",
                "Hyperthermia",
                "Mydriasis"
            ],
            "correct": 0,
            "explanation": "Miosis."
        },
        {
            "q": "What intranasal maximum does the text give?",
            "options": [
                "8 mg",
                "20 mg",
                "2 mg",
                "No maximum"
            ],
            "correct": 0,
            "explanation": "The flowchart says 20 mg."
        },
        {
            "q": "What should naloxone be titrated to?",
            "options": [
                "Respiratory effort",
                "Full alertness",
                "Heart rate",
                "Pupil size"
            ],
            "correct": 0,
            "explanation": "Avoid precipitating severe withdrawal."
        },
        {
            "q": "Why pre-oxygenate before naloxone?",
            "options": [
                "To correct hypoxia before reversal",
                "To speed absorption",
                "No reason",
                "To prevent hypoglycemia"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "Which history raises risk?",
            "options": [
                "Recent release from incarceration",
                "A healthy athlete",
                "No drug use",
                "Normal tolerance"
            ],
            "correct": 0,
            "explanation": "Loss of tolerance."
        },
        {
            "q": "Which patient is Red priority?",
            "options": [
                "Respiratory depression or GCS <8",
                "Alert, no symptoms",
                "Drowsy with stable vitals",
                "Accidental ingestion, well"
            ],
            "correct": 0,
            "explanation": "Per the triage criteria."
        },
        {
            "q": "Which co-ingestants matter?",
            "options": [
                "Alcohol, benzodiazepines, stimulants",
                "Water",
                "Vitamins",
                "None"
            ],
            "correct": 0,
            "explanation": "Poly-substance overdose is common."
        },
        {
            "q": "What is the KPI?",
            "options": [
                "Naloxone for suspected opioid toxicity",
                "Charcoal",
                "Police for all",
                "Intubation"
            ],
            "correct": 0,
            "explanation": "A single KPI."
        },
        {
            "q": "Who should be told about a suspected drug overdose before transport?",
            "options": [
                "Dispatch and police",
                "Nobody",
                "Employer",
                "School"
            ],
            "correct": 0,
            "explanation": "Per transport considerations."
        },
        {
            "q": "RR rose from 8 to 14 after naloxone. What next?",
            "options": [
                "Transport with monitoring for re-narcotization",
                "Leave the patient",
                "Give 10 mg more",
                "Stop oxygen"
            ],
            "correct": 0,
            "explanation": "Transport all patients."
        },
        {
            "q": "Why are long-acting opioids high risk?",
            "options": [
                "Re-narcotization",
                "They are harmless",
                "They cause hyperthermia",
                "They speed recovery"
            ],
            "correct": 0,
            "explanation": "Naloxone may wear off first."
        },
        {
            "q": "Which level gives naloxone?",
            "options": [
                "EMT",
                "EP only",
                "AP only",
                "ER"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "Low glucose in an overdose. What do you do?",
            "options": [
                "Treat it too (Hypoglycemia CPG); it may coexist",
                "Ignore it",
                "Only naloxone",
                "Glucose by mouth while unconscious"
            ],
            "correct": 0,
            "explanation": "Don't rely on naloxone response to exclude other causes."
        },
        {
            "q": "What is the IV/IM maximum?",
            "options": [
                "10 mg",
                "1 mg",
                "4 mg",
                "No limit"
            ],
            "correct": 0,
            "explanation": "Then suspect an alternative diagnosis."
        },
        {
            "q": "4 mg IN, no response after 3 minutes, still apneic. What do you do?",
            "options": [
                "Keep ventilating and repeat naloxone",
                "Stop ventilating",
                "Leave",
                "Give flumazenil"
            ],
            "correct": 0,
            "explanation": "Repeat every 2–3 minutes if needed."
        },
        {
            "q": "Why consider police?",
            "options": [
                "Scene and crew safety",
                "To arrest the patient",
                "To give naloxone",
                "Not needed"
            ],
            "correct": 0,
            "explanation": "Withdrawal can cause aggression."
        },
        {
            "q": "Why caution in opioid-dependent patients?",
            "options": [
                "Naloxone can precipitate withdrawal",
                "It doesn't work",
                "It causes hypertension only",
                "No reason"
            ],
            "correct": 0,
            "explanation": "Titrate to breathing."
        },
        {
            "q": "What is monitored on reassessment?",
            "options": [
                "RR, SpO₂, GCS, pupils, HR, BP",
                "Only BP",
                "Only glucose",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "Specific reassessment points."
        }
    ],
    "flashcards": [
        {
            "question": "Opioid toxicity",
            "answer": "RR <12, pinpoint pupils, depressed consciousness, evidence of use."
        },
        {
            "question": "First action",
            "answer": "Airway and BVM ventilation with oxygen; pre-oxygenate before naloxone."
        },
        {
            "question": "BVM trigger",
            "answer": "RR <10 or SpO₂ <94%."
        },
        {
            "question": "Adult IN naloxone",
            "answer": "4 mg; repeat every 2–3 min; max 8 mg (flowchart 20 mg)."
        },
        {
            "question": "Adult IV/IO/IM naloxone",
            "answer": "0.4 mg; repeat every 2–3 min; max 10 mg."
        },
        {
            "question": "Pediatric naloxone",
            "answer": "0.01 mg/kg IV/IO/IM; repeat after 3 minutes."
        },
        {
            "question": "Titration target",
            "answer": "Respiratory effort, not full wakefulness."
        },
        {
            "question": "No response at 10 mg",
            "answer": "Suspect an alternative diagnosis."
        },
        {
            "question": "Re-narcotization",
            "answer": "Naloxone is shorter-acting than some opioids: transport everyone."
        },
        {
            "question": "Withdrawal",
            "answer": "Agitation after reversal: crew safety, request support."
        },
        {
            "question": "High-risk features",
            "answer": "GCS <8, RR <10/apnea, SpO₂ <94% on O₂, co-ingestants, lost tolerance, children, long-acting opioids, self-harm."
        },
        {
            "question": "ALS triggers",
            "answer": "GCS <8, respiratory compromise, seizures, CV effects, poly-drug."
        },
        {
            "question": "Oxygen target",
            "answer": "SpO₂ 94–98%."
        },
        {
            "question": "Police",
            "answer": "Consider for safety; notify dispatch and police before transport."
        },
        {
            "question": "Triage",
            "answer": "Red: respiratory depression or GCS <8."
        },
        {
            "question": "Children",
            "answer": "Small doses can be fatal: escalate early; Broselow tape."
        },
        {
            "question": "Scene clues",
            "answer": "Pill bottles, syringes, patches, blister packs, notes."
        },
        {
            "question": "Exclusions",
            "answer": "Industrial toxins, asymptomatic non-toxic ingestion, isolated alcohol."
        },
        {
            "question": "Naloxone level",
            "answer": "EMT."
        },
        {
            "question": "KPI",
            "answer": "Naloxone for suspected opioid toxicity."
        }
    ],
    "critical": [
        {
            "id": "crit_8_2_1",
            "scenario": "A 30-year-old is unresponsive with RR 6, pinpoint pupils and track marks; SpO₂ 82%.",
            "question": "What first?",
            "options": [
                {
                    "t": "Open the airway and ventilate with BVM and oxygen, then naloxone",
                    "f": "Correct."
                },
                {
                    "t": "Naloxone and wait without ventilating",
                    "f": "Oxygenate first."
                },
                {
                    "t": "Glucose before breathing",
                    "f": "Breathing first."
                },
                {
                    "t": "Recovery position and leave",
                    "f": "He needs ventilation and transport."
                }
            ],
            "correct": 0,
            "explanation": "BVM if RR <10 or SpO₂ <94%; pre-oxygenate before naloxone.",
            "kpi": "Naloxone for suspected opioid toxicity."
        },
        {
            "id": "crit_8_2_2",
            "scenario": "After naloxone 4 mg IN, a woman's RR rises from 8 to 14 and she rouses. She wants to go home.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Transport with monitoring: risk of re-narcotization",
                    "f": "Correct."
                },
                {
                    "t": "Leave her: she responded",
                    "f": "Transport all opioid overdoses."
                },
                {
                    "t": "Give more naloxone to wake her fully",
                    "f": "Titrate to breathing."
                },
                {
                    "t": "Stop monitoring",
                    "f": "Continue."
                }
            ],
            "correct": 0,
            "explanation": "Naloxone is shorter-acting than some opioids.",
            "kpi": "Naloxone for suspected opioid toxicity."
        },
        {
            "id": "crit_8_2_3",
            "scenario": "A man beside an empty oxycodone bottle has had 10 mg of naloxone with no response; you keep ventilating.",
            "question": "What now?",
            "options": [
                {
                    "t": "Suspect an alternative diagnosis or co-ingestant; keep ventilating; check glucose; transport",
                    "f": "Correct."
                },
                {
                    "t": "Keep giving naloxone indefinitely",
                    "f": "10 mg without response: think again."
                },
                {
                    "t": "Stop ventilating",
                    "f": "He still needs support."
                },
                {
                    "t": "Leave",
                    "f": "No."
                }
            ],
            "correct": 0,
            "explanation": "Poly-substance overdose is common.",
            "kpi": "Naloxone for suspected opioid toxicity."
        },
        {
            "id": "crit_8_2_4",
            "scenario": "A 2-year-old was playing with a torn fentanyl patch. The child is crying and breathing normally.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Remove the patch, transport, escalate early; naloxone 0.01 mg/kg if breathing slows",
                    "f": "Correct."
                },
                {
                    "t": "Reassure and leave",
                    "f": "Even small doses can be fatal."
                },
                {
                    "t": "Adult 4 mg IN now",
                    "f": "Weight-based, and only if toxicity develops."
                },
                {
                    "t": "Wait for symptoms at home",
                    "f": "Transport."
                }
            ],
            "correct": 0,
            "explanation": "Use the drug calculator for weight-based dosing.",
            "kpi": "Naloxone for suspected opioid toxicity."
        },
        {
            "id": "crit_8_2_5",
            "scenario": "A known heroin user wakes after naloxone, is in withdrawal, and becomes aggressive.",
            "question": "What is the priority?",
            "options": [
                {
                    "t": "Crew safety: step back, request police support, keep monitoring",
                    "f": "Correct."
                },
                {
                    "t": "More naloxone",
                    "f": "That worsens withdrawal."
                },
                {
                    "t": "Restrain him yourselves prone",
                    "f": "Never prone; police assist."
                },
                {
                    "t": "Leave immediately",
                    "f": "Ensure safety, then continue care."
                }
            ],
            "correct": 0,
            "explanation": "Anticipate withdrawal-related agitation.",
            "kpi": "Naloxone for suspected opioid toxicity."
        }
    ]
};
