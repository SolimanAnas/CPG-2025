/* ========== CPG 6.13 – Sickle Cell Crisis ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c6-13",
    "title": "Sickle Cell Crisis",
    "shortTitle": "6.13 Sickle Cell Crisis",
    "guide": {
        "cpg": "6.13",
        "group": "medical",
        "groupLabel": "Medical",
        "title": "Sickle Cell Crisis",
        "lead": "A sickle cell crisis is a painful, time-sensitive emergency: give analgesia within 15 minutes, usually IV, and take every reported pain seriously. Watch for the complications that kill: acute chest syndrome, stroke and sepsis. Give fluid carefully and avoid cold and stress.",
        "source": {
            "label": "CPG 6.13",
            "pages": "202–205",
            "pdf": "../pdf_sections/6_13_Sickle_Cell_Crisis.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Known sickle cell disease with a suspected vaso-occlusive crisis: sudden severe bone or joint pain; chest pain or breathlessness; abdominal pain; headache or neurological symptoms; fever."
                ],
                "exclude": [
                    "Pain from unrelated causes (e.g. trauma) without SCD.",
                    "A bleeding disorder unrelated to SCD.",
                    "No signs of crisis or acute complications."
                ]
            },
            {
                "type": "list",
                "title": "Assess",
                "icon": "stethoscope",
                "items": [
                    "General impression with the Pediatric or Adult Assessment Triangle: distress, pallor, breathing difficulty, altered mental status.",
                    "Breathing: tachypnea, hypoxia, reduced breath sounds or crackles (acute chest syndrome).",
                    "Circulation: capillary refill, HR, BP, dehydration, pallor or cyanosis.",
                    "Neurology: headache, confusion, focal deficits, seizures (possible stroke).",
                    "History: previous episodes and baseline, hydroxyurea and home analgesia, last crisis or transfusion, recent illness, infection risk; individual care plans; involve caregivers."
                ]
            },
            {
                "type": "steps",
                "title": "Management",
                "icon": "list",
                "steps": [
                    {
                        "title": "ALS back-up",
                        "text": "Request for altered mental status, respiratory distress, stroke signs, or when IV opioids are needed."
                    },
                    {
                        "title": "Pain first",
                        "text": "Reassure, position for comfort, analgesia early as per the Pain Management CPG; IV analgesics (morphine, paracetamol) are usually needed. Escalate to ALS for opioids rather than delay."
                    },
                    {
                        "title": "Oxygen",
                        "level": "EMR",
                        "text": "For SpO<sub>2</sub> &lt;94% or respiratory compromise; target ≥94% and avoid hyperoxia; continuous oximetry. (The flowchart shows 15 lpm via NRB for all.)"
                    },
                    {
                        "title": "Fever",
                        "text": "Always a red flag for sepsis: Fever and Sepsis CPG."
                    },
                    {
                        "title": "IV access and fluid",
                        "level": "EMT",
                        "text": "For dehydration, fever, vomiting or hypotension. Titrate to perfusion, not to a normal BP; avoid large volumes unless hypotensive.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "250 mL NaCl IV, repeat if required",
                                "note": "Flowchart: 250–500 mL",
                                "level": "EMT"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "10–20 mL/kg IV, repeat if required",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Complications",
                        "text": "Consider ACS, stroke and sepsis and treat per those CPGs. Suspected acute chest syndrome: minimise fluid and monitor closely."
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Safety",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "Do",
                        "items": [
                            "Treat pain early: it improves outcomes.",
                            "Monitor for deterioration: rising respiratory rate, falling GCS.",
                            "Weight-based dosing; Broselow tape for children.",
                            "Consult Tele-EMS or request ALS if in doubt."
                        ]
                    },
                    {
                        "title": "Avoid",
                        "items": [
                            "Aggressive fluid with chest pain.",
                            "Stress and cold exposure: they can precipitate crisis.",
                            "Assuming drug-seeking: recurrent pain is real."
                        ]
                    },
                    {
                        "title": "Acute chest syndrome",
                        "items": [
                            "The most life-threatening complication: recognise and report early."
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
                                "label": "Pediatric drug calculator: morphine",
                                "sub": "Weight-based analgesia",
                                "href": "../pages/drug-calculator.html?drug=Morphine",
                                "icon": "pill"
                            },
                            {
                                "label": "Pediatric drug calculator: normal saline",
                                "sub": "10–20 mL/kg",
                                "href": "../pages/drug-calculator.html?drug=Normal%20Saline",
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
                    "Pain assessed and documented with an appropriate scale.",
                    "Appropriate analgesia within 15 minutes of arrival."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "6.12 Pain Management",
                        "href": "c6-12.html"
                    },
                    {
                        "label": "6.7 Fever and Sepsis",
                        "href": "c6-7.html"
                    },
                    {
                        "label": "5.1 Stroke",
                        "href": "c5-1.html"
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
            "q": "What is the most life-threatening complication?",
            "options": [
                "Acute chest syndrome",
                "Joint pain",
                "Mild dehydration",
                "Fatigue"
            ],
            "correct": 0,
            "explanation": "Recognise and report early."
        },
        {
            "q": "What SpO₂ target applies in the text?",
            "options": [
                "≥94%, avoiding hyperoxia",
                "100% always",
                "88–92%",
                "No target"
            ],
            "correct": 0,
            "explanation": "The flowchart shows 15 lpm via NRB for all."
        },
        {
            "q": "Chest pain, cough and fever in SCD. What do you suspect?",
            "options": [
                "Acute chest syndrome",
                "Simple bone pain",
                "Migraine",
                "Nothing serious"
            ],
            "correct": 0,
            "explanation": "Minimise fluid and monitor closely."
        },
        {
            "q": "What adult bolus does the text give?",
            "options": [
                "250 mL NaCl, repeat if required",
                "1000 mL",
                "2000 mL",
                "None"
            ],
            "correct": 0,
            "explanation": "The flowchart gives 250–500 mL."
        },
        {
            "q": "A child with SCD has a fever of 39°C. What does it mean?",
            "options": [
                "A red flag for sepsis: Fever CPG and transport",
                "Normal in crisis",
                "Ignore it",
                "Oral fluids and home"
            ],
            "correct": 0,
            "explanation": "Fever in SCD is always a red flag."
        },
        {
            "q": "Severe pain in SCD. Which route is usually needed?",
            "options": [
                "IV analgesia (e.g. morphine, paracetamol)",
                "Oral only",
                "None",
                "Topical"
            ],
            "correct": 0,
            "explanation": "Escalate to ALS for opioids."
        },
        {
            "q": "What is the pediatric bolus?",
            "options": [
                "10–20 mL/kg",
                "5 mL/kg",
                "40 mL/kg",
                "None"
            ],
            "correct": 0,
            "explanation": "Repeat if required."
        },
        {
            "q": "Sudden severe headache and weakness in SCD. What do you suspect?",
            "options": [
                "Stroke",
                "Vaso-occlusive bone pain",
                "Acute chest syndrome",
                "Migraine only"
            ],
            "correct": 0,
            "explanation": "Request ALS; Stroke CPG."
        },
        {
            "q": "Why minimise fluid in acute chest syndrome?",
            "options": [
                "To avoid worsening the chest",
                "It causes hyperglycemia",
                "It increases pain",
                "No reason"
            ],
            "correct": 0,
            "explanation": "Fluid should be minimised and monitored."
        },
        {
            "q": "What is the analgesia KPI?",
            "options": [
                "Appropriate analgesia within 15 minutes of arrival",
                "Within 1 hour",
                "No target",
                "Only at hospital"
            ],
            "correct": 0,
            "explanation": "And pain scored with an appropriate scale."
        },
        {
            "q": "When is ALS requested?",
            "options": [
                "AMS, respiratory distress, stroke signs, or IV opioids needed",
                "Never",
                "For every patient",
                "Only children"
            ],
            "correct": 0,
            "explanation": "As listed."
        },
        {
            "q": "What should be avoided as triggers?",
            "options": [
                "Stress and cold exposure",
                "Warmth",
                "Reassurance",
                "Oxygen"
            ],
            "correct": 0,
            "explanation": "They may precipitate crisis."
        },
        {
            "q": "RR 30 and SpO₂ 88% in SCD. What do you do?",
            "options": [
                "Oxygen to ≥94%, request ALS, transport urgently",
                "Pain relief only",
                "Wait",
                "Oral fluids"
            ],
            "correct": 0,
            "explanation": "Respiratory compromise is a red flag."
        },
        {
            "q": "How are fluids titrated?",
            "options": [
                "To improve perfusion, not to a normal BP",
                "To SBP 140",
                "Always 2000 mL",
                "Never given"
            ],
            "correct": 0,
            "explanation": "Avoid large volumes unless hypotensive."
        },
        {
            "q": "How should recurrent pain be viewed?",
            "options": [
                "Take it seriously; it is not drug-seeking",
                "As drug-seeking",
                "Ignore it",
                "Treat only if visible injury"
            ],
            "correct": 0,
            "explanation": "Treat all reported pain seriously."
        },
        {
            "q": "Which fluid is named?",
            "options": [
                "NaCl",
                "Dextrose",
                "Colloid",
                "Oral water"
            ],
            "correct": 0,
            "explanation": "Normal saline."
        },
        {
            "q": "Which pediatric dosing aid is named?",
            "options": [
                "Broselow tape",
                "GCS chart",
                "APGAR",
                "BEFAST"
            ],
            "correct": 0,
            "explanation": "Weight-based dosing."
        },
        {
            "q": "Which signs suggest deterioration?",
            "options": [
                "Rising respiratory rate, falling GCS",
                "Falling pain score",
                "Warm hands",
                "Normal SpO₂"
            ],
            "correct": 0,
            "explanation": "Monitor closely."
        },
        {
            "q": "Which is excluded?",
            "options": [
                "Trauma pain in someone without SCD",
                "SCD with bone pain",
                "SCD with fever",
                "SCD with chest pain"
            ],
            "correct": 0,
            "explanation": "Unrelated causes without SCD history."
        },
        {
            "q": "What does the history include?",
            "options": [
                "Previous crises, transfusions, hydroxyurea, home analgesia",
                "Only allergies",
                "Only name",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "Plus recent illness and infection risk."
        },
        {
            "q": "Who else may hold a treatment plan?",
            "options": [
                "The patient and caregivers: involve them",
                "Nobody",
                "Police",
                "Only hospital"
            ],
            "correct": 0,
            "explanation": "Many patients have individualized plans."
        },
        {
            "q": "SCD with abdominal pain. What do you consider?",
            "options": [
                "A crisis, but also other causes per their CPGs",
                "Only constipation",
                "Nothing",
                "Ignore"
            ],
            "correct": 0,
            "explanation": "Consider alternative causes."
        },
        {
            "q": "Which tool gives the general impression?",
            "options": [
                "Pediatric or Adult Assessment Triangle",
                "BEFAST",
                "FLACC only",
                "APGAR"
            ],
            "correct": 0,
            "explanation": "Depending on age."
        },
        {
            "q": "Pain 8/10, BP 100/70. Which approach?",
            "options": [
                "Early IV analgesia per the Pain CPG, ALS for opioids",
                "Oral paracetamol only",
                "No analgesia",
                "Wait 30 minutes"
            ],
            "correct": 0,
            "explanation": "Severe pain: escalate."
        },
        {
            "q": "Is hypoxia relevant?",
            "options": [
                "Yes: treat SpO₂ <94%",
                "No",
                "Only above 3000 m",
                "Only in children"
            ],
            "correct": 0,
            "explanation": "Maintain adequate oxygenation."
        },
        {
            "q": "Vomiting child with SCD and fever. What first?",
            "options": [
                "IV access, fluid 10–20 mL/kg, Fever CPG, transport",
                "Oral fluids",
                "Antiemetic only",
                "Home"
            ],
            "correct": 0,
            "explanation": "Fever and vomiting are fluid indications."
        },
        {
            "q": "What does the documentation KPI require?",
            "options": [
                "Pain assessed with an appropriate scale",
                "Blood count",
                "Spleen size",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "And analgesia within 15 minutes."
        },
        {
            "q": "What is the level for the fluid bolus?",
            "options": [
                "EMT",
                "EMR",
                "EP",
                "AP"
            ],
            "correct": 0,
            "explanation": "Oxygen is EMR."
        },
        {
            "q": "What if in doubt?",
            "options": [
                "Consult Tele-EMS or request ALS",
                "Leave",
                "Give nothing",
                "Call police"
            ],
            "correct": 0,
            "explanation": "For escalation."
        },
        {
            "q": "Why is early pain relief critical?",
            "options": [
                "Crises are painful, time-sensitive emergencies; early treatment improves outcomes",
                "It isn't",
                "Only for comfort",
                "To speed discharge"
            ],
            "correct": 0,
            "explanation": "Do not delay pain relief."
        }
    ],
    "flashcards": [
        {
            "question": "Vaso-occlusive crisis features",
            "answer": "Sudden severe bone or joint pain, chest pain or breathlessness, abdominal pain, headache or neurological symptoms, fever."
        },
        {
            "question": "Most dangerous complication",
            "answer": "Acute chest syndrome."
        },
        {
            "question": "Other complications",
            "answer": "Stroke, sepsis (and consider ACS)."
        },
        {
            "question": "Pain",
            "answer": "Early, usually IV (morphine, paracetamol), per the Pain CPG; ALS for opioids."
        },
        {
            "question": "Analgesia KPI",
            "answer": "Within 15 minutes of arrival."
        },
        {
            "question": "Oxygen",
            "answer": "If SpO₂ <94% or respiratory compromise; target ≥94%; avoid hyperoxia."
        },
        {
            "question": "Fever",
            "answer": "Always a red flag for sepsis."
        },
        {
            "question": "Adult fluid",
            "answer": "250 mL NaCl, repeat if needed (flowchart 250–500 mL)."
        },
        {
            "question": "Pediatric fluid",
            "answer": "10–20 mL/kg, repeat if needed."
        },
        {
            "question": "Fluid principle",
            "answer": "Titrate to perfusion; avoid large volumes unless hypotensive."
        },
        {
            "question": "Acute chest syndrome and fluid",
            "answer": "Minimise and monitor closely."
        },
        {
            "question": "ALS triggers",
            "answer": "AMS, respiratory distress, stroke signs, IV opioids needed."
        },
        {
            "question": "Avoid",
            "answer": "Cold exposure, stress, aggressive fluid with chest pain."
        },
        {
            "question": "Deterioration signs",
            "answer": "Rising RR, falling GCS."
        },
        {
            "question": "Pediatric dosing",
            "answer": "Weight-based; Broselow tape."
        },
        {
            "question": "Drug-seeking?",
            "answer": "No: treat all reported pain seriously."
        },
        {
            "question": "History",
            "answer": "Previous crises, baseline, hydroxyurea, analgesics, last crisis or transfusion, recent illness."
        },
        {
            "question": "Exclusions",
            "answer": "Unrelated pain without SCD; unrelated bleeding disorder; no crisis signs."
        },
        {
            "question": "Care plans",
            "answer": "Many patients have one; involve caregivers."
        },
        {
            "question": "KPIs",
            "answer": "Pain scored with an appropriate scale; analgesia within 15 minutes."
        }
    ],
    "critical": [
        {
            "id": "crit_6_13_1",
            "scenario": "A 25-year-old with SCD has severe bilateral leg pain (9/10). Afebrile, BP 120/70, HR 100, SpO₂ 98%.",
            "question": "What first?",
            "options": [
                {
                    "t": "Early analgesia (IV, per the Pain CPG), ALS for opioids, reassure and keep warm",
                    "f": "Correct. Analgesia within 15 minutes."
                },
                {
                    "t": "High-flow oxygen and wait",
                    "f": "SpO₂ is 98%; pain relief is the priority."
                },
                {
                    "t": "2000 mL fluid",
                    "f": "No hypotension: avoid large volumes."
                },
                {
                    "t": "Assume drug-seeking",
                    "f": "Treat all reported pain seriously."
                }
            ],
            "correct": 0,
            "explanation": "Do not delay pain relief.",
            "kpi": "Analgesia within 15 minutes of arrival."
        },
        {
            "id": "crit_6_13_2",
            "scenario": "A 10-year-old with SCD has fever 39°C, cough and chest pain; RR 34, SpO₂ 91%.",
            "question": "What do you suspect and do?",
            "options": [
                {
                    "t": "Acute chest syndrome (and possible sepsis): oxygen to ≥94%, ALS, analgesia, cautious fluid, urgent transport",
                    "f": "Correct."
                },
                {
                    "t": "Simple cold: home",
                    "f": "Fever in SCD is a red flag."
                },
                {
                    "t": "Large fluid boluses",
                    "f": "Minimise fluid in acute chest syndrome."
                },
                {
                    "t": "Oxygen only",
                    "f": "Also analgesia and sepsis care."
                }
            ],
            "correct": 0,
            "explanation": "Recognise and report acute chest syndrome early.",
            "kpi": "Pain scored with an appropriate scale."
        },
        {
            "id": "crit_6_13_3",
            "scenario": "A 30-year-old with SCD has severe abdominal pain and vomiting; BP 85/50, HR 120.",
            "question": "What is appropriate?",
            "options": [
                {
                    "t": "IV access, 250 mL NaCl boluses titrated to perfusion, analgesia, consider other causes, transport",
                    "f": "Correct."
                },
                {
                    "t": "Oral fluids",
                    "f": "Vomiting and hypotensive."
                },
                {
                    "t": "No fluid in SCD",
                    "f": "Hypotension is an indication."
                },
                {
                    "t": "Analgesia only",
                    "f": "Treat the hypotension too."
                }
            ],
            "correct": 0,
            "explanation": "Fluid for hypotension or vomiting; consider alternative causes.",
            "kpi": "Analgesia within 15 minutes of arrival."
        },
        {
            "id": "crit_6_13_4",
            "scenario": "A 40-year-old with SCD has slurred speech and right-sided weakness.",
            "question": "What is the priority?",
            "options": [
                {
                    "t": "Suspect stroke: BEFAST, glucose, ALS, Stroke CPG and rapid transport",
                    "f": "Correct."
                },
                {
                    "t": "Treat as bone pain",
                    "f": "Neurological signs suggest stroke."
                },
                {
                    "t": "Wait for improvement",
                    "f": "Time-critical."
                },
                {
                    "t": "Large fluid bolus",
                    "f": "Not the priority."
                }
            ],
            "correct": 0,
            "explanation": "Stroke is a listed complication; request ALS.",
            "kpi": "Pain scored with an appropriate scale."
        },
        {
            "id": "crit_6_13_5",
            "scenario": "A 15-year-old in crisis received IV morphine and is now drowsy with RR 8, SpO₂ 88%.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Support airway and ventilation, oxygen; reverse per the Opioid Overdose CPG",
                    "f": "Correct."
                },
                {
                    "t": "More morphine",
                    "f": "Respiratory depression: stop opioids."
                },
                {
                    "t": "Ignore",
                    "f": "This is deterioration."
                },
                {
                    "t": "Cold packs",
                    "f": "Avoid cold in SCD."
                }
            ],
            "correct": 0,
            "explanation": "Monitor closely for deterioration after analgesia.",
            "kpi": "Analgesia within 15 minutes of arrival."
        }
    ]
};
