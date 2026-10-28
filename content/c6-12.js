/* ========== CPG 6.12 – Pain Management ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c6-12",
    "title": "Pain Management",
    "shortTitle": "6.12 Pain Management",
    "guide": {
        "cpg": "6.12",
        "group": "medical",
        "groupLabel": "Medical",
        "title": "Pain Management",
        "lead": "Score the pain with the right scale, treat by step on the ladder (mild, moderate, severe), combine drugs and non-drug measures, and rescore every 5–15 minutes. Severe pain (7–10) calls for ALS; anyone given a narcotic is transported.",
        "source": {
            "label": "CPG 6.12",
            "pages": "196–201",
            "pdf": "../pdf_sections/6_12_Pain_Management.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Acute pain of any origin, scored mild 1–3, moderate 4–6, severe 7–10; verbal or non-verbal signs (grimacing, guarding, crying).",
                    "Pain needing relief to allow transport."
                ],
                "exclude": [
                    "No reported or observed pain.",
                    "Chronic pain needing specific non-prehospital care, without acute exacerbation."
                ]
            },
            {
                "type": "table",
                "title": "Which pain scale",
                "icon": "clipboard-list",
                "columns": [
                    "Patient",
                    "Scale"
                ],
                "rows": [
                    [
                        "Adults and children &gt;3 years who can verbalise",
                        "0–10 numeric scale"
                    ],
                    [
                        "Adults and children &gt;3 years who cannot verbalise",
                        "Wong-Baker FACES"
                    ],
                    [
                        "Children &lt;3 years",
                        "FLACC"
                    ]
                ],
                "notes": [
                    "Use OPQRST; rescore after every intervention. Pain severity does not change the triage category, but severe pain points to a significant problem."
                ]
            },
            {
                "type": "steps",
                "title": "Before drugs",
                "icon": "list",
                "steps": [
                    {
                        "title": "Red flags",
                        "text": "Pain from a life threat (MI, abdominal pain with shock); SBP &lt;90 mmHg (adults) or age-specific hypotension; respiratory depression. In shock, treat the cause and be cautious with opioids."
                    },
                    {
                        "title": "Check contraindications",
                        "text": "Analgesic allergies; hypotension for opioids; liver disease for paracetamol."
                    },
                    {
                        "title": "Non-drug measures",
                        "text": "Positioning (semi-Fowler's for chest pain, splint fractures), reassurance, cold packs for acute injury or heat for spasm."
                    },
                    {
                        "title": "ALS and IV access",
                        "text": "Request ALS for severe pain (7–10). IV for moderate to severe pain or risk of deterioration; IO if needed."
                    }
                ]
            },
            {
                "type": "steps",
                "title": "Adult analgesic ladder",
                "icon": "pill",
                "steps": [
                    {
                        "title": "Mild (1–3)",
                        "level": "EMR",
                        "doses": [
                            {
                                "drug": "Paracetamol",
                                "dose": "1 g PO",
                                "level": "EMR"
                            }
                        ]
                    },
                    {
                        "title": "Moderate (4–6)",
                        "text": "One or more of:",
                        "doses": [
                            {
                                "drug": "Paracetamol",
                                "dose": "1 g IV",
                                "level": "EMT"
                            },
                            {
                                "drug": "Diclofenac",
                                "dose": "50–75 mg IM",
                                "note": "Flowchart prints \"75g\"",
                                "level": "EMT-A"
                            },
                            {
                                "drug": "Nefopam",
                                "dose": "20 mg IV in 100 mL NaCl over 10 minutes",
                                "level": "EMT"
                            },
                            {
                                "drug": "Methoxyflurane (Penthrox)",
                                "dose": "3 mL inhaled",
                                "note": "Procedural pain; short-acting: add another analgesic",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Severe (7–10)",
                        "text": "Moderate-pain drugs and methoxyflurane, plus:",
                        "doses": [
                            {
                                "drug": "Morphine",
                                "dose": "IV 2.5 mg increments every 5–10 minutes (maximum 20 mg); IM 5–10 mg",
                                "level": "EP"
                            },
                            {
                                "drug": "Pethidine",
                                "dose": "IV 25–50 mg or IM 50–100 mg, single dose only",
                                "level": "EP"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "steps",
                "title": "Pediatric analgesic ladder",
                "icon": "baby",
                "steps": [
                    {
                        "title": "Mild (1–3)",
                        "level": "EMT",
                        "doses": [
                            {
                                "drug": "Paracetamol PR",
                                "dose": "&lt;5 years 125 mg; &gt;5 years 250 mg",
                                "level": "EMT"
                            },
                            {
                                "drug": "Paracetamol PO",
                                "dose": "15 mg/kg (maximum 1 g), if available",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Moderate (4–6)",
                        "doses": [
                            {
                                "drug": "Paracetamol IV",
                                "dose": "15 mg/kg",
                                "note": "Only with a micro-drip set; not recommended under 33 kg",
                                "level": "EMT"
                            },
                            {
                                "drug": "Methoxyflurane (Penthrox)",
                                "dose": "3 mL inhaled",
                                "note": "Procedural pain; flowchart: &gt;5 years",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Severe (7–10)",
                        "doses": [
                            {
                                "drug": "Morphine",
                                "dose": "IV 0.1 mg/kg (maximum 5 mg), titrated every 5–10 minutes; IM 0.1 mg/kg (maximum 10 mg)",
                                "level": "EP"
                            },
                            {
                                "drug": "Pethidine",
                                "dose": "1 mg/kg IV/IM",
                                "note": "Text only",
                                "level": "EP"
                            }
                        ]
                    },
                    {
                        "title": "Not for children",
                        "text": "Diclofenac and nefopam."
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Strategy and safety",
                "icon": "lightbulb",
                "groups": [
                    {
                        "title": "Strategy",
                        "items": [
                            "Aim for relief the patient finds satisfactory, or the best achievable.",
                            "Multimodal: combine drugs with non-drug measures to limit any single drug's side effects; climb the ladder if relief is inadequate.",
                            "Judgement over the number: you may start higher on the ladder, considering age, weight, development, allergies and interactions."
                        ]
                    },
                    {
                        "title": "Procedural pain",
                        "items": [
                            "Splinting or rough-terrain movement: brief severe pain on moderate background pain. Penthrox is encouraged, with coaching."
                        ]
                    },
                    {
                        "title": "Safety",
                        "items": [
                            "Rescore every 5–15 minutes; watch for respiratory depression and hypotension.",
                            "Every patient given a narcotic is transported, even if improved.",
                            "No routine prophylactic metoclopramide with morphine."
                        ]
                    }
                ]
            },
            {
                "type": "table",
                "title": "FLACC (children &lt;3 years)",
                "icon": "baby",
                "columns": [
                    "Category",
                    "0",
                    "1",
                    "2"
                ],
                "rows": [
                    [
                        "Face",
                        "No particular expression or smile",
                        "Occasional grimace or frown; withdrawn, uninterested",
                        "Frequent to constant quivering chin, clenched jaw"
                    ],
                    [
                        "Legs",
                        "Normal position or relaxed",
                        "Uneasy, restless, tense",
                        "Kicking or legs drawn up"
                    ],
                    [
                        "Activity",
                        "Lying quietly, moves easily",
                        "Squirming, shifting, tense",
                        "Arched, rigid or jerking"
                    ],
                    [
                        "Cry",
                        "No cry",
                        "Moans or whimpers; occasional complaint",
                        "Crying steadily, screams or sobs"
                    ],
                    [
                        "Controllability",
                        "Content, relaxed",
                        "Reassured by touch or talk; distractible",
                        "Difficult to console or comfort"
                    ]
                ],
                "stack": true,
                "notes": [
                    "Five categories scored 0–2; total 0–10."
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
                                "sub": "15 mg/kg",
                                "href": "../pages/drug-calculator.html?drug=Paracetamol",
                                "icon": "pill"
                            },
                            {
                                "label": "Pediatric drug calculator: morphine",
                                "sub": "0.1 mg/kg",
                                "href": "../pages/drug-calculator.html?drug=Morphine",
                                "icon": "pill"
                            },
                            {
                                "label": "Drug calculator: methoxyflurane",
                                "sub": "3 mL inhaled",
                                "href": "../pages/drug-calculator.html?drug=Methoxyflurane%20(Penthrox)",
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
                    "Pain score documented before and after analgesia for every patient.",
                    "Pain score &gt;7: appropriate analgesia reducing the score by at least 3 points."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "6.13 Sickle Cell Crisis",
                        "href": "c6-13.html"
                    },
                    {
                        "label": "6.1 Abdominal Pain",
                        "href": "c6-1.html"
                    },
                    {
                        "label": "6.10 Nausea and Vomiting",
                        "href": "c6-10.html"
                    },
                    {
                        "label": "8.2 Opioid Overdose",
                        "href": "c8-2.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "What treats mild pain (1–3) in adults?",
            "options": [
                "Paracetamol 1 g PO",
                "Morphine",
                "Pethidine",
                "Diclofenac IV"
            ],
            "correct": 0,
            "explanation": "EMR level."
        },
        {
            "q": "What is the adult IV paracetamol dose?",
            "options": [
                "1 g",
                "500 mg",
                "2 g",
                "100 mg"
            ],
            "correct": 0,
            "explanation": "For moderate pain (EMT)."
        },
        {
            "q": "Which analgesic is inhaled?",
            "options": [
                "Methoxyflurane (Penthrox)",
                "Morphine",
                "Diclofenac",
                "Nefopam"
            ],
            "correct": 0,
            "explanation": "3 mL inhaled."
        },
        {
            "q": "What is the adult IV morphine regimen?",
            "options": [
                "2.5 mg increments every 5–10 minutes, maximum 20 mg",
                "10 mg once",
                "1 mg/kg",
                "20 mg bolus"
            ],
            "correct": 0,
            "explanation": "IM 5–10 mg."
        },
        {
            "q": "What is the pediatric morphine dose?",
            "options": [
                "0.1 mg/kg",
                "1 mg/kg",
                "0.01 mg/kg",
                "5 mg/kg"
            ],
            "correct": 0,
            "explanation": "IV maximum 5 mg per dose; IM maximum 10 mg."
        },
        {
            "q": "Which scale is used under 3 years?",
            "options": [
                "FLACC",
                "Wong-Baker FACES",
                "0–10 numeric",
                "GCS"
            ],
            "correct": 0,
            "explanation": "Five categories, 0–2 each."
        },
        {
            "q": "What is the methoxyflurane dose?",
            "options": [
                "3 mL inhaled",
                "10 mL",
                "1 mL",
                "3 mL IV"
            ],
            "correct": 0,
            "explanation": "Adults and children."
        },
        {
            "q": "Which condition calls for caution with opioids?",
            "options": [
                "Hypotension",
                "Tachycardia alone",
                "Anxiety",
                "Fever"
            ],
            "correct": 0,
            "explanation": "Hypotension and respiratory depression."
        },
        {
            "q": "What is the adult diclofenac dose in the text?",
            "options": [
                "50–75 mg IM",
                "75 g IM",
                "10 mg IV",
                "200 mg PO"
            ],
            "correct": 0,
            "explanation": "The flowchart misprints \"75g\"."
        },
        {
            "q": "Which drug is not recommended in children?",
            "options": [
                "Diclofenac",
                "Paracetamol",
                "Morphine",
                "Methoxyflurane"
            ],
            "correct": 0,
            "explanation": "Nefopam is also adults only."
        },
        {
            "q": "How is nefopam given?",
            "options": [
                "20 mg IV in 100 mL NaCl over 10 minutes",
                "20 mg IV push",
                "IM 50 mg",
                "Orally"
            ],
            "correct": 0,
            "explanation": "Adults only."
        },
        {
            "q": "How often is pain rescored?",
            "options": [
                "Every 5–15 minutes after intervention",
                "Once",
                "Hourly",
                "Never"
            ],
            "correct": 0,
            "explanation": "And watch for adverse effects."
        },
        {
            "q": "What is the KPI target for pain >7?",
            "options": [
                "Reduce the score by at least 3 points",
                "Reduce to zero",
                "Any reduction",
                "No target"
            ],
            "correct": 0,
            "explanation": "With appropriate analgesia."
        },
        {
            "q": "Which drug suits procedural pain?",
            "options": [
                "Methoxyflurane",
                "Pethidine",
                "Nefopam only",
                "None"
            ],
            "correct": 0,
            "explanation": "Encouraged for splinting or rough movement."
        },
        {
            "q": "What is the adult IV morphine maximum?",
            "options": [
                "20 mg",
                "5 mg",
                "10 mg",
                "50 mg"
            ],
            "correct": 0,
            "explanation": "In 2.5 mg increments."
        },
        {
            "q": "What is the pediatric PR paracetamol dose at 6 years?",
            "options": [
                "250 mg",
                "125 mg",
                "500 mg",
                "1 g"
            ],
            "correct": 0,
            "explanation": "<5 years: 125 mg; >5 years: 250 mg."
        },
        {
            "q": "Which scale for a non-verbal adult?",
            "options": [
                "Wong-Baker FACES",
                "FLACC",
                "0–10 numeric",
                "APGAR"
            ],
            "correct": 0,
            "explanation": "And non-verbal children over 3 years."
        },
        {
            "q": "What is the adult pethidine dose?",
            "options": [
                "IV 25–50 mg or IM 50–100 mg, single dose",
                "IV 100 mg repeated",
                "IM 10 mg",
                "1 g"
            ],
            "correct": 0,
            "explanation": "EP level."
        },
        {
            "q": "Prophylactic metoclopramide with morphine?",
            "options": [
                "Not recommended",
                "Always",
                "Only IV",
                "Only in children"
            ],
            "correct": 0,
            "explanation": "Treat nausea if it occurs."
        },
        {
            "q": "Penthrox is short-acting. What else do you give?",
            "options": [
                "Another analgesic such as IV paracetamol",
                "Nothing",
                "More Penthrox continuously",
                "Naloxone"
            ],
            "correct": 0,
            "explanation": "Additional analgesia with Penthrox."
        },
        {
            "q": "Which is a non-drug intervention?",
            "options": [
                "Splinting a fracture",
                "Morphine",
                "Nefopam",
                "Diclofenac"
            ],
            "correct": 0,
            "explanation": "Also positioning, reassurance, cold or heat."
        },
        {
            "q": "What is the pediatric IV paracetamol condition?",
            "options": [
                "Only with a micro-drip set; not under 33 kg",
                "Any child",
                "Only under 1 year",
                "Never"
            ],
            "correct": 0,
            "explanation": "15 mg/kg."
        },
        {
            "q": "Femur fracture, pain 9/10, normal BP. What applies?",
            "options": [
                "Severe pain: ALS, multimodal analgesia including opioid (EP)",
                "Paracetamol PO only",
                "No analgesia until hospital",
                "Diclofenac only"
            ],
            "correct": 0,
            "explanation": "Plus splinting."
        },
        {
            "q": "Who must be transported?",
            "options": [
                "Everyone given a narcotic",
                "Nobody",
                "Only children",
                "Only if pain persists"
            ],
            "correct": 0,
            "explanation": "Regardless of improvement."
        },
        {
            "q": "Which drug is cautioned in liver disease?",
            "options": [
                "Paracetamol",
                "Morphine",
                "Methoxyflurane",
                "Nefopam"
            ],
            "correct": 0,
            "explanation": "A listed contraindication check."
        },
        {
            "q": "Can you start higher on the ladder?",
            "options": [
                "Yes, by clinical judgement",
                "Never",
                "Only with Tele-EMS",
                "Only for children"
            ],
            "correct": 0,
            "explanation": "Decisions are not based solely on the number."
        },
        {
            "q": "How is Wong-Baker FACES used?",
            "options": [
                "The patient picks the face matching the pain",
                "The clinician scores behaviour",
                "The parent scores",
                "By heart rate"
            ],
            "correct": 0,
            "explanation": "For non-verbal patients over 3 years."
        },
        {
            "q": "When is ALS requested?",
            "options": [
                "Severe pain (7–10)",
                "Any pain",
                "Mild pain",
                "Never"
            ],
            "correct": 0,
            "explanation": "As per the CPG."
        },
        {
            "q": "Does pain severity change the triage category?",
            "options": [
                "No, but severe pain suggests a significant problem",
                "Yes, always Red",
                "Yes, always Green",
                "Only in children"
            ],
            "correct": 0,
            "explanation": "As per the assessment points."
        },
        {
            "q": "What is the documentation KPI?",
            "options": [
                "Pain score before and after analgesia",
                "Drug batch",
                "Scene time",
                "Pupil size"
            ],
            "correct": 0,
            "explanation": "For every patient."
        }
    ],
    "flashcards": [
        {
            "question": "Pain bands",
            "answer": "Mild 1–3, moderate 4–6, severe 7–10."
        },
        {
            "question": "Scales",
            "answer": "0–10 (verbal, >3 years); Wong-Baker FACES (non-verbal, >3 years); FLACC (<3 years)."
        },
        {
            "question": "FLACC",
            "answer": "Face, Legs, Activity, Cry, Controllability; each 0–2; total 0–10."
        },
        {
            "question": "Adult mild",
            "answer": "Paracetamol 1 g PO (EMR)."
        },
        {
            "question": "Adult moderate",
            "answer": "Paracetamol 1 g IV; diclofenac 50–75 mg IM (EMT-A); nefopam 20 mg IV over 10 min; Penthrox 3 mL for procedures."
        },
        {
            "question": "Adult severe",
            "answer": "Morphine IV 2.5 mg every 5–10 min (max 20 mg) or IM 5–10 mg; or pethidine IV 25–50 / IM 50–100 mg once (EP)."
        },
        {
            "question": "Pediatric mild",
            "answer": "Paracetamol PR 125 mg (<5 y) or 250 mg (>5 y); PO 15 mg/kg."
        },
        {
            "question": "Pediatric moderate",
            "answer": "Paracetamol IV 15 mg/kg (micro-drip, not <33 kg); Penthrox 3 mL."
        },
        {
            "question": "Pediatric severe",
            "answer": "Morphine 0.1 mg/kg IV (max 5 mg) or IM (max 10 mg); pethidine 1 mg/kg."
        },
        {
            "question": "Not for children",
            "answer": "Diclofenac, nefopam."
        },
        {
            "question": "Penthrox",
            "answer": "3 mL inhaled; coach the patient; short-acting, so add another analgesic."
        },
        {
            "question": "Rescoring",
            "answer": "Every 5–15 minutes; watch for respiratory depression and hypotension."
        },
        {
            "question": "ALS",
            "answer": "Request for severe pain (7–10)."
        },
        {
            "question": "Narcotics and transport",
            "answer": "Every patient given a narcotic is transported."
        },
        {
            "question": "Multimodal approach",
            "answer": "Combine drugs and non-drug measures; climb the ladder if needed."
        },
        {
            "question": "Non-drug measures",
            "answer": "Positioning, splinting, reassurance, cold or heat."
        },
        {
            "question": "Opioid caution",
            "answer": "Hypotension or shock: treat the cause; be cautious with opioids."
        },
        {
            "question": "Antiemetic with morphine",
            "answer": "No routine prophylaxis."
        },
        {
            "question": "KPIs",
            "answer": "Scores before and after; pain >7 reduced by at least 3 points."
        },
        {
            "question": "Procedural pain",
            "answer": "Brief severe pain on moderate background (splinting, rough terrain): Penthrox encouraged."
        }
    ],
    "critical": [
        {
            "id": "crit_6_12_1",
            "scenario": "A 50-year-old with a femur fracture scores his pain 9/10. BP 110/70, HR 100.",
            "question": "What is your plan?",
            "options": [
                {
                    "t": "Splint, request ALS, Penthrox and IV paracetamol; morphine 2.5 mg IV increments (EP)",
                    "f": "Correct. Multimodal analgesia for severe pain."
                },
                {
                    "t": "Paracetamol PO only",
                    "f": "Undertreats severe pain."
                },
                {
                    "t": "No analgesia until hospital",
                    "f": "Pain must be treated and scored."
                },
                {
                    "t": "Morphine 20 mg bolus",
                    "f": "Titrate in 2.5 mg increments."
                }
            ],
            "correct": 0,
            "explanation": "Rescore every 5–15 minutes; aim to reduce the score by at least 3 points.",
            "kpi": "Pain >7 reduced by at least 3 points."
        },
        {
            "id": "crit_6_12_2",
            "scenario": "A 6-year-old needs a forearm fracture splinted; pain 5/10 at rest, worse with movement.",
            "question": "What fits best?",
            "options": [
                {
                    "t": "Penthrox 3 mL inhaled with coaching, plus paracetamol",
                    "f": "Correct. Procedural pain on a moderate background."
                },
                {
                    "t": "Diclofenac IM",
                    "f": "Not recommended for children."
                },
                {
                    "t": "Nefopam IV",
                    "f": "Adults only."
                },
                {
                    "t": "Nothing",
                    "f": "Treat the pain."
                }
            ],
            "correct": 0,
            "explanation": "Penthrox is short-acting: add another analgesic.",
            "kpi": "Pain score before and after analgesia."
        },
        {
            "id": "crit_6_12_3",
            "scenario": "A 70-year-old with a hip fracture has severe pain; BP 85/50, HR 110.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Treat the shock and use non-opioid options (Penthrox, paracetamol) first; be cautious with opioids",
                    "f": "Correct."
                },
                {
                    "t": "Morphine 10 mg IM straight away",
                    "f": "Hypotension calls for caution with opioids."
                },
                {
                    "t": "No analgesia",
                    "f": "Pain still needs treatment."
                },
                {
                    "t": "Pethidine 100 mg IV",
                    "f": "Not the listed IV dose, and caution in shock."
                }
            ],
            "correct": 0,
            "explanation": "In shock, prioritise the underlying cause and be cautious with analgesics such as opioids.",
            "kpi": "Pain score before and after analgesia."
        },
        {
            "id": "crit_6_12_4",
            "scenario": "After morphine 2.5 mg IV, a patient's abdominal pain falls from 9/10 to 6/10 after 5 minutes. Vital signs are stable.",
            "question": "What next?",
            "options": [
                {
                    "t": "Titrate another 2.5 mg increment and rescore",
                    "f": "Correct. Titrate every 5–10 minutes (maximum 20 mg)."
                },
                {
                    "t": "Stop: 3 points achieved, no further relief",
                    "f": "Aim for satisfactory relief."
                },
                {
                    "t": "Give 20 mg at once",
                    "f": "Titrate in increments."
                },
                {
                    "t": "Switch to oral paracetamol only",
                    "f": "Severe pain persists."
                }
            ],
            "correct": 0,
            "explanation": "Watch for respiratory depression and hypotension.",
            "kpi": "Pain >7 reduced by at least 3 points."
        },
        {
            "id": "crit_6_12_5",
            "scenario": "After morphine, a patient's respiratory rate falls to 8 and SpO₂ to 88%.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Support airway and ventilation; reverse per the Opioid Overdose CPG",
                    "f": "Correct. Respiratory depression is a known adverse effect."
                },
                {
                    "t": "More morphine",
                    "f": "Stop opioids."
                },
                {
                    "t": "Ignore it",
                    "f": "Act now."
                },
                {
                    "t": "Sit the patient up and leave",
                    "f": "Support ventilation."
                }
            ],
            "correct": 0,
            "explanation": "Monitor for adverse effects after every dose.",
            "kpi": "Pain score before and after analgesia."
        }
    ]
};
