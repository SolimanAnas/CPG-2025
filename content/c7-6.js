/* ========== CPG 7.6 – Traumatic Brain Injuries ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c7-6",
    "title": "Traumatic Brain Injuries",
    "shortTitle": "7.6 Traumatic Brain Injuries",
    "guide": {
        "cpg": "7.6",
        "group": "trauma",
        "groupLabel": "Trauma",
        "title": "Traumatic Brain Injuries",
        "lead": "Prevent the second injury: no hypoxia (SpO<sub>2</sub> ≥94%), no hypotension (SBP ≥120 mmHg), normal EtCO<sub>2</sub>. No collar: support the head with blocks instead. Sedate agitation, ketamine first, and hyperventilate only for signs of herniation.",
        "source": {
            "label": "CPG 7.6",
            "pages": "239–243",
            "pdf": "../pdf_sections/7_6_Traumatic_Brain_Injuries.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Blunt or penetrating head trauma (MVC, falls, assaults, gunshot wounds).",
                    "Altered mental status, loss of consciousness, headache, vomiting or neurological deficit after trauma; unequal pupils, posturing or seizures."
                ],
                "exclude": [
                    "No head trauma or TBI findings.",
                    "Non-traumatic mimics (stroke, hypoglycemia)."
                ]
            },
            {
                "type": "groups",
                "title": "Assess",
                "icon": "brain",
                "groups": [
                    {
                        "title": "Neurology",
                        "items": [
                            "AVPU or GCS; focal deficits; pupil size and reactivity."
                        ]
                    },
                    {
                        "title": "Severe TBI and herniation",
                        "items": [
                            "Cushing's triad: hypertension, bradycardia, irregular respirations.",
                            "Decorticate or decerebrate posturing, seizures, CSF from ears or nose."
                        ]
                    },
                    {
                        "title": "Basilar skull fracture",
                        "items": [
                            "Battle's sign, raccoon eyes, CSF otorrhea or rhinorrhea."
                        ]
                    },
                    {
                        "title": "Red priority",
                        "items": [
                            "GCS ≤9, or a falling GCS."
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
                        "title": "ALS back-up",
                        "text": "Routinely for patients responding only to pain or unresponsive (flowchart: V, P or U, or agitated); as soon as possible if agitated."
                    },
                    {
                        "title": "Bleeding and c-spine",
                        "text": "Control catastrophic bleeding. No c-collar: it impedes cerebral venous drainage and raises ICP. In-line stabilisation with head plate and blocks (no forehead or chin straps); secure to the stretcher."
                    },
                    {
                        "title": "Oxygen",
                        "level": "EMR",
                        "text": "SpO<sub>2</sub> ≥94% (flowchart &gt;94%). Avoid hyperventilation: EtCO<sub>2</sub> 35–45 mmHg."
                    },
                    {
                        "title": "Airway if GCS &lt;8",
                        "level": "EMR",
                        "text": "Jaw thrust; OPA or NPA if the airway cannot otherwise be maintained."
                    },
                    {
                        "title": "Advanced airway",
                        "level": "P",
                        "text": "Avoid unless medication-facilitated intubation is available. Consider only if GCS 3 and the airway cannot be kept with basic adjuncts."
                    },
                    {
                        "title": "Fluid for hypotension",
                        "text": "NS or RL; target SBP ≥120 mmHg (or MAP ≥90 mmHg); avoid over-resuscitation.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "500–1000 mL IV/IO, reassess",
                                "note": "Flowchart: 250–500 mL"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "10–20 mL/kg IV/IO",
                                "note": "Flowchart"
                            }
                        ]
                    },
                    {
                        "title": "Impending herniation",
                        "text": "Head up 30 degrees if no spinal precautions are needed; neutral alignment. Consider hyperventilation (below)."
                    },
                    {
                        "title": "Reassess GCS",
                        "text": "Red every 5 minutes, Yellow every 10, Green every 15."
                    }
                ]
            },
            {
                "type": "table",
                "title": "Sedation for agitation (EP)",
                "icon": "syringe",
                "columns": [
                    "",
                    "Adult",
                    "Pediatric"
                ],
                "rows": [
                    [
                        "Ketamine (preferred)",
                        "0.5–1 mg/kg (max 100 mg)",
                        "0.5–1 mg/kg (max 100 mg)"
                    ],
                    [
                        "Midazolam",
                        "0.5 mg–5 mg, repeat after 5–10 minutes",
                        "0.05 mg/kg (max 5 mg)"
                    ],
                    [
                        "Morphine",
                        "2–5 mg",
                        "0.1 mg/kg (max 5 mg)"
                    ]
                ],
                "stack": true,
                "notes": [
                    "IV/IO/IM; IV preferred. If given IM, get IV/IO access once sedated. Ketamine and pediatric doses repeat after 10 minutes if required.",
                    "Reduced benzodiazepine or morphine doses if ketamine is unavailable or contraindicated."
                ]
            },
            {
                "type": "table",
                "title": "Hyperventilation for herniation",
                "icon": "wind",
                "columns": [
                    "Age",
                    "Normal (EtCO₂ 35–45)",
                    "Hyperventilation (EtCO₂ 30–35)"
                ],
                "rows": [
                    [
                        "Adults",
                        "12 breaths/min",
                        "20 breaths/min"
                    ],
                    [
                        "Children",
                        "15 breaths/min",
                        "25 breaths/min"
                    ],
                    [
                        "Infants",
                        "20 breaths/min",
                        "30 breaths/min"
                    ]
                ],
                "notes": [
                    "Only once hypoxemia and hypotension are corrected, and with: GCS &lt;9 with extensor (decerebrate) posturing; GCS &lt;9 with asymmetric, dilated or non-reactive pupils; or initial GCS &lt;9 falling by more than 2 points.",
                    "Very difficult in a spontaneously breathing, non-intubated patient."
                ]
            },
            {
                "type": "groups",
                "title": "Red flags and special groups",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "Red flags",
                        "items": [
                            "GCS ≤8 or deteriorating.",
                            "Unequal pupils, posturing or seizures.",
                            "SBP &lt;90 mmHg or SpO<sub>2</sub> &lt;90%.",
                            "Basilar skull fracture signs.",
                            "Associated polytrauma."
                        ]
                    },
                    {
                        "title": "Elderly (&gt;65)",
                        "items": [
                            "TBI from low-energy falls (atrophy, anticoagulants); watch for delayed deterioration (subdural hematoma)."
                        ]
                    },
                    {
                        "title": "Children (&lt;13)",
                        "items": [
                            "Subtle signs: prioritise transport for any neurological change."
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
                        "title": "Cushing's triad on the monitor",
                        "items": [
                            {
                                "ecg": "sbrady",
                                "label": "Sinus bradycardia",
                                "sub": "With hypertension and irregular breathing: herniation"
                            }
                        ]
                    },
                    {
                        "title": "Tools",
                        "items": [
                            {
                                "label": "Pediatric drug calculator: morphine",
                                "sub": "0.1 mg/kg, maximum 5 mg",
                                "href": "../pages/drug-calculator.html?drug=Morphine",
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
                    "IV fluid for SBP &lt;120 mmHg or MAP &lt;90 mmHg."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "7.1 General Trauma Management",
                        "href": "c7-1.html"
                    },
                    {
                        "label": "7.5 Spinal Motion Restriction",
                        "href": "c7-5.html"
                    },
                    {
                        "label": "5.2 Seizures",
                        "href": "c5-2.html"
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
            "q": "What prevents secondary brain injury?",
            "options": [
                "Avoiding hypoxia, hypotension and hyperventilation",
                "Routine hyperventilation",
                "Fluid restriction",
                "Lying flat"
            ],
            "correct": 0,
            "explanation": "ICP management."
        },
        {
            "q": "What SBP is targeted in adult TBI?",
            "options": [
                "≥120 mmHg (or MAP ≥90)",
                "≥90 mmHg",
                "≥160 mmHg",
                "≥70 mmHg"
            ],
            "correct": 0,
            "explanation": "A KPI."
        },
        {
            "q": "What SpO₂ is targeted?",
            "options": [
                "≥94%",
                "≥88%",
                "100% only",
                "None"
            ],
            "correct": 0,
            "explanation": "Titrate oxygen."
        },
        {
            "q": "Which is Cushing's triad?",
            "options": [
                "Hypertension, bradycardia, irregular respirations",
                "Hypotension, tachycardia, fever",
                "Hypoxia, cough, rash",
                "Tachycardia, hypertension, sweating"
            ],
            "correct": 0,
            "explanation": "A sign of herniation."
        },
        {
            "q": "Which sedative is preferred?",
            "options": [
                "Ketamine",
                "Midazolam",
                "Morphine",
                "Haloperidol"
            ],
            "correct": 0,
            "explanation": "Benzodiazepines or morphine at reduced doses if ketamine is unavailable."
        },
        {
            "q": "GCS 7, airway maintainable with jaw thrust and OPA. Advanced airway?",
            "options": [
                "Avoid unless medication-facilitated intubation is available",
                "Always intubate",
                "Supraglottic for everyone",
                "No airway care"
            ],
            "correct": 0,
            "explanation": "Consider only if GCS 3 and basic adjuncts fail."
        },
        {
            "q": "What EtCO₂ is normal ventilation?",
            "options": [
                "35–45 mmHg",
                "20–25 mmHg",
                "50–60 mmHg",
                "Not measured"
            ],
            "correct": 0,
            "explanation": "Hyperventilation targets 30–35."
        },
        {
            "q": "When is hyperventilation used?",
            "options": [
                "Signs of herniation after correcting hypoxemia and hypotension",
                "All TBI",
                "Whenever SpO₂ <90%",
                "Never"
            ],
            "correct": 0,
            "explanation": "GCS <9 with posturing, pupil changes or a fall of more than 2 points."
        },
        {
            "q": "Why no c-collar in TBI?",
            "options": [
                "It impedes cerebral venous drainage and raises ICP",
                "It is uncomfortable",
                "It is too expensive",
                "It is fine"
            ],
            "correct": 0,
            "explanation": "Use head blocks instead."
        },
        {
            "q": "What adult bolus does the text give?",
            "options": [
                "500–1000 mL",
                "50 mL",
                "3000 mL",
                "None"
            ],
            "correct": 0,
            "explanation": "The flowchart gives 250–500 mL."
        },
        {
            "q": "A combative patient with TBI. What do you do?",
            "options": [
                "Request ALS early; ketamine 0.5–1 mg/kg (EP)",
                "Restrain prone",
                "No sedation",
                "Midazolam 15 mg"
            ],
            "correct": 0,
            "explanation": "Sedation is given for agitation."
        },
        {
            "q": "What is the ketamine dose?",
            "options": [
                "0.5–1 mg/kg (max 100 mg)",
                "3–4 mg/kg",
                "10 mg/kg",
                "0.05 mg/kg"
            ],
            "correct": 0,
            "explanation": "Adults and children."
        },
        {
            "q": "Which pupil finding suggests herniation?",
            "options": [
                "Asymmetric, dilated or non-reactive",
                "Equal and reactive",
                "Pinpoint both",
                "Normal"
            ],
            "correct": 0,
            "explanation": "A hyperventilation criterion with GCS <9."
        },
        {
            "q": "How is the head positioned with impending herniation?",
            "options": [
                "30 degrees head up if no spinal precautions are needed",
                "Flat",
                "Head down",
                "Prone"
            ],
            "correct": 0,
            "explanation": "Neutral alignment."
        },
        {
            "q": "What is the pediatric midazolam dose?",
            "options": [
                "0.05 mg/kg (max 5 mg)",
                "0.5 mg/kg",
                "5 mg/kg",
                "1 mg/kg"
            ],
            "correct": 0,
            "explanation": "Repeat after 10 minutes if required."
        },
        {
            "q": "Adult hyperventilation rate?",
            "options": [
                "20 breaths/min",
                "12",
                "40",
                "8"
            ],
            "correct": 0,
            "explanation": "Normal 12 breaths/min."
        },
        {
            "q": "What EtCO₂ during hyperventilation?",
            "options": [
                "30–35 mmHg",
                "20–25 mmHg",
                "35–45 mmHg",
                "50 mmHg"
            ],
            "correct": 0,
            "explanation": "Per the table."
        },
        {
            "q": "Which route is preferred for sedation?",
            "options": [
                "IV",
                "IM",
                "Oral",
                "Rectal"
            ],
            "correct": 0,
            "explanation": "Avoid IM whenever possible."
        },
        {
            "q": "What is the Red-priority threshold?",
            "options": [
                "GCS ≤9 or a falling GCS",
                "GCS 15",
                "Any headache",
                "GCS 14"
            ],
            "correct": 0,
            "explanation": "Per the triage criteria."
        },
        {
            "q": "Which is a sign of basilar skull fracture?",
            "options": [
                "Battle's sign",
                "Unilateral wheeze",
                "Pinpoint pupils",
                "Bradycardia alone"
            ],
            "correct": 0,
            "explanation": "Also raccoon eyes and CSF leak."
        },
        {
            "q": "Why avoid hyperventilation otherwise?",
            "options": [
                "It causes cerebral vasoconstriction",
                "It raises BP",
                "It causes fever",
                "No reason"
            ],
            "correct": 0,
            "explanation": "Maintain normocapnia."
        },
        {
            "q": "What is the adult midazolam dose?",
            "options": [
                "0.5 mg–5 mg, repeat after 5–10 minutes",
                "10–15 mg",
                "0.05 mg/kg",
                "None"
            ],
            "correct": 0,
            "explanation": "Reduced if ketamine is unavailable."
        },
        {
            "q": "What is the adult morphine dose here?",
            "options": [
                "2–5 mg",
                "20 mg",
                "0.5 mg",
                "50 mg"
            ],
            "correct": 0,
            "explanation": "Repeat after 10 minutes if required."
        },
        {
            "q": "An elderly patient on anticoagulants falls from standing. What do you watch for?",
            "options": [
                "Delayed deterioration (subdural hematoma)",
                "Nothing",
                "Hyperglycemia",
                "Sunburn"
            ],
            "correct": 0,
            "explanation": "Low-energy mechanisms can cause TBI."
        },
        {
            "q": "What is the pediatric bolus on the flowchart?",
            "options": [
                "10–20 mL/kg",
                "60 mL/kg",
                "1 mL/kg",
                "None"
            ],
            "correct": 0,
            "explanation": "Target normal SBP for age."
        },
        {
            "q": "When does GCS get reassessed for Red priority?",
            "options": [
                "Every 5 minutes",
                "Every 30 minutes",
                "Once",
                "Hourly"
            ],
            "correct": 0,
            "explanation": "Yellow 10, Green 15."
        },
        {
            "q": "What does the KPI require?",
            "options": [
                "IV fluid for SBP <120 or MAP <90",
                "Collar on all",
                "Hyperventilation for all",
                "CT scan"
            ],
            "correct": 0,
            "explanation": "A single KPI."
        },
        {
            "q": "GCS 3, airway cannot be kept with OPA and jaw thrust. What may be considered?",
            "options": [
                "Advanced airway (P)",
                "Nothing",
                "Sedation",
                "Sit up"
            ],
            "correct": 0,
            "explanation": "Both conditions are met."
        },
        {
            "q": "Why avoid over-resuscitation?",
            "options": [
                "It can worsen cerebral edema",
                "It causes hypothermia only",
                "It raises glucose",
                "No reason"
            ],
            "correct": 0,
            "explanation": "Titrate fluids."
        },
        {
            "q": "Which level gives sedation on the flowchart?",
            "options": [
                "EP",
                "EMR",
                "EMT",
                "ER"
            ],
            "correct": 0,
            "explanation": "Request ALS early for agitated patients."
        }
    ],
    "flashcards": [
        {
            "question": "Secondary injury",
            "answer": "Avoid hypoxia, hypotension and hyperventilation."
        },
        {
            "question": "Oxygen",
            "answer": "SpO₂ ≥94% (EMR)."
        },
        {
            "question": "BP target",
            "answer": "Adult SBP ≥120 mmHg or MAP ≥90 mmHg."
        },
        {
            "question": "EtCO₂",
            "answer": "Normal 35–45 mmHg; hyperventilation 30–35 mmHg."
        },
        {
            "question": "C-collar",
            "answer": "Contraindicated: raises ICP. Head plate and blocks; no straps."
        },
        {
            "question": "Airway if GCS <8",
            "answer": "Jaw thrust; OPA/NPA if needed (EMR)."
        },
        {
            "question": "Advanced airway",
            "answer": "Avoid unless MFI is available; consider only GCS 3 with failed basic airway (P)."
        },
        {
            "question": "Adult fluid",
            "answer": "500–1000 mL (text) or 250–500 mL (flowchart); avoid over-resuscitation."
        },
        {
            "question": "Pediatric fluid",
            "answer": "10–20 mL/kg (flowchart)."
        },
        {
            "question": "Ketamine",
            "answer": "0.5–1 mg/kg IV/IO/IM, max 100 mg (preferred)."
        },
        {
            "question": "Midazolam",
            "answer": "Adult 0.5 mg–5 mg; child 0.05 mg/kg (max 5 mg)."
        },
        {
            "question": "Morphine",
            "answer": "Adult 2–5 mg; child 0.1 mg/kg (max 5 mg)."
        },
        {
            "question": "Sedation route",
            "answer": "IV preferred; if IM, gain IV/IO once sedated."
        },
        {
            "question": "Hyperventilation criteria",
            "answer": "Hypoxia and hypotension corrected plus GCS <9 with decerebrate posturing, pupil changes, or a fall >2 points."
        },
        {
            "question": "Hyperventilation rates",
            "answer": "Adults 20, children 25, infants 30 breaths/min."
        },
        {
            "question": "Herniation signs",
            "answer": "Cushing's triad, posturing, unilateral or fixed dilated pupils."
        },
        {
            "question": "Basilar skull fracture",
            "answer": "Battle's sign, raccoon eyes, CSF otorrhea or rhinorrhea."
        },
        {
            "question": "Head position",
            "answer": "30° head up for impending herniation if no spinal precautions are needed."
        },
        {
            "question": "Reassessment",
            "answer": "GCS: Red 5, Yellow 10, Green 15 minutes."
        },
        {
            "question": "KPI",
            "answer": "IV fluid for SBP <120 mmHg or MAP <90 mmHg."
        }
    ],
    "critical": [
        {
            "id": "crit_7_6_1",
            "scenario": "A man thrown from a vehicle has GCS 6, BP 100/60, SpO₂ 92%.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Jaw thrust and OPA/NPA, oxygen to ≥94%, head blocks (no collar), fluid to SBP ≥120, ALS",
                    "f": "Correct."
                },
                {
                    "t": "C-collar and long board",
                    "f": "Collars raise ICP in TBI."
                },
                {
                    "t": "Hyperventilate at once",
                    "f": "Only for herniation signs after correcting hypoxia and hypotension."
                },
                {
                    "t": "Intubate without drugs",
                    "f": "Avoid unless MFI available or GCS 3 with failed basic airway."
                }
            ],
            "correct": 0,
            "explanation": "Prevent hypoxia and hypotension.",
            "kpi": "IV fluid for SBP <120 mmHg."
        },
        {
            "id": "crit_7_6_2",
            "scenario": "A 70-year-old on warfarin fell from standing; now severe headache and vomiting, GCS 14.",
            "question": "What is your concern?",
            "options": [
                {
                    "t": "Intracranial bleeding with risk of delayed deterioration: monitor GCS closely and transport",
                    "f": "Correct."
                },
                {
                    "t": "Minor fall: no transport",
                    "f": "Elderly and anticoagulated patients deteriorate late."
                },
                {
                    "t": "Hyperventilate",
                    "f": "No herniation signs."
                },
                {
                    "t": "Collar",
                    "f": "Contraindicated in TBI."
                }
            ],
            "correct": 0,
            "explanation": "Watch for subdural hematoma.",
            "kpi": "IV fluid for SBP <120 mmHg."
        },
        {
            "id": "crit_7_6_3",
            "scenario": "A head-injured man is intubated (GCS 6). The right pupil is now dilated and non-reactive; BP 150/90, HR 50. SpO₂ 98%.",
            "question": "What now?",
            "options": [
                {
                    "t": "Head up 30°, hyperventilate at 20 breaths/min to EtCO₂ 30–35 mmHg",
                    "f": "Correct. GCS <9 with a dilated non-reactive pupil."
                },
                {
                    "t": "Normal ventilation only",
                    "f": "Herniation signs justify hyperventilation."
                },
                {
                    "t": "Lie him flat",
                    "f": "Head up."
                },
                {
                    "t": "Give a large fluid bolus",
                    "f": "BP is above target."
                }
            ],
            "correct": 0,
            "explanation": "Hypoxemia and hypotension are already corrected.",
            "kpi": "IV fluid for SBP <120 mmHg."
        },
        {
            "id": "crit_7_6_4",
            "scenario": "A 25-year-old with TBI is combative and tearing off her oxygen mask.",
            "question": "What is appropriate?",
            "options": [
                {
                    "t": "Request ALS; ketamine 0.5–1 mg/kg IV preferred (EP)",
                    "f": "Correct."
                },
                {
                    "t": "Prone restraint",
                    "f": "Never."
                },
                {
                    "t": "High-dose midazolam",
                    "f": "Ketamine first; reduced benzodiazepine doses."
                },
                {
                    "t": "Ignore it",
                    "f": "Agitation should be sedated."
                }
            ],
            "correct": 0,
            "explanation": "If IM is needed, get IV/IO access once sedated.",
            "kpi": "IV fluid for SBP <120 mmHg."
        },
        {
            "id": "crit_7_6_5",
            "scenario": "A man with isolated TBI has BP 110/70 after a first bolus; GCS 10.",
            "question": "Fluid?",
            "options": [
                {
                    "t": "Further bolus and reassess, aiming for SBP ≥120 without over-resuscitating",
                    "f": "Correct."
                },
                {
                    "t": "Stop: SBP is over 90",
                    "f": "The TBI target is 120."
                },
                {
                    "t": "Two litres fast",
                    "f": "Avoid over-resuscitation."
                },
                {
                    "t": "Vasopressor first",
                    "f": "Fluid first in this CPG."
                }
            ],
            "correct": 0,
            "explanation": "KPI: fluid for SBP <120 or MAP <90.",
            "kpi": "IV fluid for SBP <120 mmHg."
        }
    ]
};
