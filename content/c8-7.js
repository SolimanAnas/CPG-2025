/* ========== CPG 8.7 – Drowning ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c8-7",
    "title": "Drowning",
    "shortTitle": "8.7 Drowning",
    "guide": {
        "cpg": "8.7",
        "group": "environmental",
        "groupLabel": "Environmental",
        "title": "Drowning",
        "lead": "Drowning kills through hypoxia, so airway and oxygen come first, early and aggressively. In arrest, give 5 rescue breaths before compressions. Do not try to drain water from the lungs, and do not apply spinal motion restriction routinely. Watch for hypothermia, and transport symptomatic patients: lung injury can appear later.",
        "source": {
            "label": "CPG 8.7",
            "pages": "272–275",
            "pdf": "../pdf_sections/8_7_Drowning___Near_Drowning.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Water immersion or submersion, adult or pediatric: unconscious, apneic, hypoxic, in cardiac arrest, or symptomatic afterwards."
                ],
                "exclude": [
                    "Isolated trauma without immersion.",
                    "Medical cardiac arrest not related to drowning.",
                    "Confirmed &gt;20 min submersion with rigor mortis, dependent lividity or decomposition."
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
                            "Submersion time: the key prognostic factor; &gt;10 minutes carries worse outcomes.",
                            "Mechanism suggesting spinal injury (e.g. shallow diving)."
                        ]
                    },
                    {
                        "title": "Airway and breathing",
                        "items": [
                            "Obstruction by vomit, water, foam or secretions is common: gurgling, stridor; suction.",
                            "SpO<sub>2</sub> &lt;94% is abnormal even if the patient looks well; wheeze, crackles or reduced air entry suggest aspiration or edema."
                        ]
                    },
                    {
                        "title": "Circulation and neurology",
                        "items": [
                            "Bradycardia from hypoxia or hypothermia, especially in children.",
                            "AVPU or GCS; seizures in children or after resuscitation."
                        ]
                    },
                    {
                        "title": "Exposure",
                        "items": [
                            "Hypothermia: cold skin, shivering, reduced responsiveness; remove wet clothing.",
                            "Glucose with altered consciousness."
                        ]
                    }
                ]
            },
            {
                "type": "table",
                "title": "Triage",
                "icon": "clipboard-list",
                "columns": [
                    "Priority",
                    "Features"
                ],
                "rows": [
                    [
                        "Red",
                        "Unresponsive or GCS &lt;9; SpO<sub>2</sub> &lt;90% despite oxygen; ongoing distress or abnormal lung sounds; bradycardia, hypotension or shock; ROSC"
                    ],
                    [
                        "Yellow",
                        "Cough, vomiting or mild symptoms with normal vitals; alert with submersion history; minor wheeze or crackles with SpO<sub>2</sub> ≥94% on air"
                    ],
                    [
                        "Green",
                        "No symptoms, full recovery, normal examination"
                    ]
                ]
            },
            {
                "type": "pathways",
                "title": "After removal from the water",
                "icon": "list",
                "paths": [
                    {
                        "title": "Respiratory distress",
                        "tone": "noshock",
                        "steps": [
                            {
                                "text": "Oxygen 10–15 L/min via NRB, or BVM; titrate to SpO<sub>2</sub> &gt;94%.",
                                "level": "EMR"
                            },
                            {
                                "text": "Suction; airway adjuncts if unconscious."
                            },
                            {
                                "text": "Conscious with moderate to severe distress: Flowsafe CPAP 5–10 cmH<sub>2</sub>O.",
                                "level": "EMT-A"
                            },
                            {
                                "text": "Rales: nebulised salbutamol (adult 5 mg; child &lt;5 years 2.5 mg, &gt;5 years 5 mg), via the CPAP nebuliser where possible.",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Cardiac arrest",
                        "tone": "shock",
                        "steps": [
                            {
                                "text": "5 rescue breaths first, then CPR (30:2 adult)."
                            },
                            {
                                "text": "Follow the Adult or Pediatric Cardiac Arrest CPG; children do better even after long submersion: full resuscitation."
                            }
                        ]
                    }
                ],
                "after": "Do not use abdominal thrusts to expel water: ineffective, and it delays resuscitation."
            },
            {
                "type": "steps",
                "title": "Also",
                "icon": "heart-pulse",
                "steps": [
                    {
                        "title": "ALS back-up",
                        "text": "Routinely for altered consciousness, respiratory distress or advanced airway needs; arrest or ROSC; pulmonary edema or suspected aspiration pneumonia."
                    },
                    {
                        "title": "Spinal motion restriction",
                        "text": "Not routine: only with a traumatic mechanism (e.g. shallow diving). It can impede the airway and delay rescue breaths."
                    },
                    {
                        "title": "Hypothermia",
                        "text": "Rewarm; handle gently to avoid arrhythmias; Hypothermia CPG."
                    },
                    {
                        "title": "Glucose",
                        "text": "Early in unconscious or lethargic patients; Hypoglycemia CPG if low."
                    },
                    {
                        "title": "Transport",
                        "text": "All symptomatic patients, even if improved. Prioritise long submersion, persistent cough, altered consciousness, low SpO<sub>2</sub>, children. Asymptomatic after minor events: may be treated at scene with clear advice to call back; Tele-EMS for borderline cases."
                    },
                    {
                        "title": "Reassess",
                        "text": "Airway sounds, breathing effort, response to oxygen, fatigue; watch for recurrent hypoxia or pulmonary edema."
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
                                "label": "Pediatric drug calculator: salbutamol",
                                "sub": "2.5 or 5 mg",
                                "href": "../pages/drug-calculator.html?drug=Salbutamol",
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
                    "Submersion time investigated and documented.",
                    "ALS back-up for Red priority patients with transfer time over 10 minutes."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "8.9 Hypothermia",
                        "href": "c8-9.html"
                    },
                    {
                        "label": "4.3 Adult Cardiac Arrest",
                        "href": "c4-3.html"
                    },
                    {
                        "label": "4.4 Pediatric Cardiac Arrest",
                        "href": "c4-4.html"
                    },
                    {
                        "label": "4.8 Starting, Stopping and Transferring CPR",
                        "href": "c4-8.html"
                    },
                    {
                        "label": "7.5 Spinal Motion Restriction",
                        "href": "c7-5.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "What is the main cause of cardiac arrest in drowning?",
            "options": [
                "Hypoxia",
                "Hypothermia",
                "Electrolyte imbalance",
                "Hyperthermia"
            ],
            "correct": 0,
            "explanation": "Treat hypoxia aggressively."
        },
        {
            "q": "A drowned patient has no pulse. What first?",
            "options": [
                "5 rescue breaths, then CPR",
                "Compressions only",
                "Abdominal thrusts",
                "Wait for the AED"
            ],
            "correct": 0,
            "explanation": "Then follow the Cardiac Arrest CPG."
        },
        {
            "q": "Unresponsive with a pulse after rescue. Priority?",
            "options": [
                "Open the airway, suction, oxygenate/ventilate",
                "Spinal board first",
                "Abdominal thrusts",
                "Glucose before airway"
            ],
            "correct": 0,
            "explanation": "Airway and ventilation are early and aggressive."
        },
        {
            "q": "What SpO₂ is abnormal?",
            "options": [
                "<94%, even if the patient looks well",
                "<80% only",
                "<99%",
                "None"
            ],
            "correct": 0,
            "explanation": "Titrate to >94%."
        },
        {
            "q": "A child coughing and anxious after 3 minutes underwater. What do you do?",
            "options": [
                "Oxygen and transport: children can deteriorate",
                "Reassure and leave",
                "Abdominal thrusts",
                "Water to drink"
            ],
            "correct": 0,
            "explanation": "Transport all symptomatic children."
        },
        {
            "q": "Why not do abdominal thrusts?",
            "options": [
                "Ineffective and delays resuscitation",
                "They hurt",
                "They cause hypothermia",
                "They are fine"
            ],
            "correct": 0,
            "explanation": "Hypoxia is the problem, not the water."
        },
        {
            "q": "RR 30 and SpO₂ 88% on oxygen, conscious. What may help?",
            "options": [
                "Flowsafe CPAP 5–10 cmH₂O (EMT-A)",
                "Abdominal thrusts",
                "No oxygen",
                "Oral fluids"
            ],
            "correct": 0,
            "explanation": "Moderate to severe distress in a conscious patient."
        },
        {
            "q": "Is spinal motion restriction routine?",
            "options": [
                "No: only with a traumatic mechanism",
                "Yes, always",
                "Only in children",
                "Only in sea water"
            ],
            "correct": 0,
            "explanation": "It can delay rescue breaths."
        },
        {
            "q": "What adult salbutamol dose?",
            "options": [
                "5 mg nebulised",
                "0.5 mg",
                "20 mg",
                "1 mg IV"
            ],
            "correct": 0,
            "explanation": "For rales; same as asthma."
        },
        {
            "q": "Which CPR ratio follows the rescue breaths in adults?",
            "options": [
                "30:2",
                "15:2",
                "5:1",
                "3:1"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "What does the KPI require?",
            "options": [
                "Submersion time documented",
                "Salbutamol for all",
                "CPAP for all",
                "Spinal board"
            ],
            "correct": 0,
            "explanation": "And ALS for Red with transfer >10 minutes."
        },
        {
            "q": "A child is alert and playful after a brief submersion with no symptoms. Options?",
            "options": [
                "May be treated at scene with clear advice, or Tele-EMS for borderline cases",
                "Must be ventilated",
                "Abdominal thrusts",
                "Ignore"
            ],
            "correct": 0,
            "explanation": "Symptomatic patients are transported; delayed edema is possible, so advise caregivers."
        },
        {
            "q": "Which submersion time predicts worse outcomes?",
            "options": [
                ">10 minutes",
                ">30 seconds",
                ">2 hours only",
                "Any"
            ],
            "correct": 0,
            "explanation": "A critical prognostic indicator."
        },
        {
            "q": "Bradycardia in a drowned child may be from…",
            "options": [
                "Hypoxia or hypothermia",
                "Fear",
                "Exercise",
                "Dehydration"
            ],
            "correct": 0,
            "explanation": "Treat the hypoxia."
        },
        {
            "q": "What oxygen flow on the flowchart?",
            "options": [
                "10–15 L/min via NRB",
                "2 L/min",
                "Room air",
                "None"
            ],
            "correct": 0,
            "explanation": "Or BVM as required."
        },
        {
            "q": "Which level gives CPAP here?",
            "options": [
                "EMT-A",
                "EMR",
                "EP only",
                "ER"
            ],
            "correct": 0,
            "explanation": "Flowsafe CPAP."
        },
        {
            "q": "Who is excluded?",
            "options": [
                "Confirmed >20 min submersion with rigor mortis or decomposition",
                "Child after a pool incident",
                "Coughing swimmer",
                "Arrest after drowning"
            ],
            "correct": 0,
            "explanation": "Exclusion criterion."
        },
        {
            "q": "What pediatric salbutamol dose for a 6-year-old?",
            "options": [
                "5 mg",
                "2.5 mg",
                "10 mg",
                "0.5 mg"
            ],
            "correct": 0,
            "explanation": "<5 years 2.5 mg; >5 years 5 mg."
        },
        {
            "q": "Why handle a hypothermic patient gently?",
            "options": [
                "To avoid arrhythmias",
                "To avoid bruising only",
                "No reason",
                "To speed rewarming"
            ],
            "correct": 0,
            "explanation": "Safety consideration."
        },
        {
            "q": "Glucose in a lethargic drowned patient?",
            "options": [
                "Check early; treat per Hypoglycemia CPG",
                "Never",
                "Only diabetics",
                "Only after hospital"
            ],
            "correct": 0,
            "explanation": "Hypoglycemia may complicate presentation."
        },
        {
            "q": "Does a long submersion mean you stop for a child?",
            "options": [
                "No: children do better; full resuscitation",
                "Yes",
                "Only after 5 minutes",
                "Only in cold water"
            ],
            "correct": 0,
            "explanation": "Clinical insight."
        },
        {
            "q": "Why transport improved patients?",
            "options": [
                "Delayed pulmonary edema or ARDS",
                "To dry them",
                "Not needed",
                "For a meal"
            ],
            "correct": 0,
            "explanation": "Recommend hospital."
        },
        {
            "q": "Which is Red priority?",
            "options": [
                "SpO₂ <90% despite oxygen",
                "Cough with normal vitals",
                "No symptoms",
                "Alert, normal exam"
            ],
            "correct": 0,
            "explanation": "Per triage."
        },
        {
            "q": "When is ALS requested routinely?",
            "options": [
                "Altered LOC, distress, arrest/ROSC, edema or aspiration",
                "Never",
                "Only children",
                "Every patient"
            ],
            "correct": 0,
            "explanation": "As per the CPG."
        },
        {
            "q": "How is salbutamol best given with CPAP?",
            "options": [
                "Via the CPAP nebuliser",
                "Orally",
                "IM",
                "Not at all"
            ],
            "correct": 0,
            "explanation": "Where possible."
        },
        {
            "q": "What comes before rapid extrication?",
            "options": [
                "Oxygenation, unless the scene is unsafe",
                "Spinal board",
                "Paperwork",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "Safety consideration."
        },
        {
            "q": "Shallow-dive injury with neck pain. SMR?",
            "options": [
                "Yes: traumatic mechanism",
                "No",
                "Only if unconscious",
                "Never in water"
            ],
            "correct": 0,
            "explanation": "SMR when the mechanism suggests spinal injury."
        },
        {
            "q": "Which history item is documented?",
            "options": [
                "Submersion time, water type, time found, bystander CPR",
                "Swimsuit colour",
                "Only the address",
                "None"
            ],
            "correct": 0,
            "explanation": "Documentation."
        },
        {
            "q": "What is the next step after 5 rescue breaths?",
            "options": [
                "Chest compressions (30:2 adult)",
                "Abdominal thrusts",
                "Wait",
                "Salbutamol"
            ],
            "correct": 0,
            "explanation": "Then the Cardiac Arrest CPG."
        },
        {
            "q": "Minor wheeze with SpO₂ ≥94% on air. Triage?",
            "options": [
                "Yellow",
                "Red",
                "Green",
                "Black"
            ],
            "correct": 0,
            "explanation": "Per triage."
        }
    ],
    "flashcards": [
        {
            "question": "Main killer",
            "answer": "Hypoxia, not the volume of water."
        },
        {
            "question": "Arrest",
            "answer": "5 rescue breaths, then CPR 30:2 (adult); Cardiac Arrest CPG."
        },
        {
            "question": "Oxygen",
            "answer": "10–15 L/min NRB or BVM; SpO₂ >94% (EMR)."
        },
        {
            "question": "CPAP",
            "answer": "Flowsafe 5–10 cmH₂O for conscious patients in moderate–severe distress (EMT-A)."
        },
        {
            "question": "Salbutamol",
            "answer": "For rales: adult 5 mg; child <5 y 2.5 mg, >5 y 5 mg (EMT)."
        },
        {
            "question": "Abdominal thrusts",
            "answer": "Never: ineffective and delays resuscitation."
        },
        {
            "question": "Spinal motion restriction",
            "answer": "Not routine; only with a traumatic mechanism."
        },
        {
            "question": "Prognosis",
            "answer": "Submersion >10 minutes: worse outcomes. Children do better: resuscitate fully."
        },
        {
            "question": "Hypothermia",
            "answer": "Remove wet clothes, rewarm, handle gently; Hypothermia CPG."
        },
        {
            "question": "Glucose",
            "answer": "Check early with altered consciousness."
        },
        {
            "question": "Red priority",
            "answer": "GCS <9, SpO₂ <90% on O₂, ongoing distress/abnormal lung sounds, shock, ROSC."
        },
        {
            "question": "Yellow priority",
            "answer": "Mild symptoms, normal vitals; minor wheeze with SpO₂ ≥94%."
        },
        {
            "question": "Green priority",
            "answer": "No symptoms, full recovery, normal exam."
        },
        {
            "question": "Transport",
            "answer": "All symptomatic patients, even if improved; delayed edema or ARDS."
        },
        {
            "question": "Asymptomatic after a minor event",
            "answer": "May be treated at scene with advice; Tele-EMS for borderline cases."
        },
        {
            "question": "ALS triggers",
            "answer": "Altered LOC, distress, advanced airway, arrest/ROSC, edema or aspiration."
        },
        {
            "question": "Exclusion",
            "answer": "Submersion >20 min with rigor, lividity or decomposition."
        },
        {
            "question": "Airway",
            "answer": "Suction water, vomit, foam; adjuncts if unconscious."
        },
        {
            "question": "Children",
            "answer": "May look stable then deteriorate: transport symptomatic cases."
        },
        {
            "question": "KPIs",
            "answer": "Submersion time documented; ALS for Red with transfer >10 minutes."
        }
    ],
    "critical": [
        {
            "id": "crit_8_7_1",
            "scenario": "A man is pulled from a pool: unresponsive, not breathing, no pulse.",
            "ecg": "asystole",
            "question": "What first?",
            "options": [
                {
                    "t": "5 rescue breaths, then CPR 30:2 and the Cardiac Arrest CPG",
                    "f": "Correct."
                },
                {
                    "t": "Compressions only",
                    "f": "Drowning arrest is hypoxic: breaths first."
                },
                {
                    "t": "Abdominal thrusts to drain water",
                    "f": "Never."
                },
                {
                    "t": "Spinal board before CPR",
                    "f": "Don't delay resuscitation."
                }
            ],
            "correct": 0,
            "explanation": "Hypoxia is the primary cause of arrest in drowning.",
            "kpi": "Submersion time documented."
        },
        {
            "id": "crit_8_7_2",
            "scenario": "A swimmer is coughing with RR 30, crackles and SpO₂ 88% on 15 L/min. Alert.",
            "question": "What next?",
            "options": [
                {
                    "t": "Flowsafe CPAP 5–10 cmH₂O (EMT-A), salbutamol via the CPAP nebuliser, ALS, transport",
                    "f": "Correct."
                },
                {
                    "t": "Stop oxygen",
                    "f": "He is hypoxic."
                },
                {
                    "t": "Abdominal thrusts",
                    "f": "Never."
                },
                {
                    "t": "Discharge",
                    "f": "Red priority."
                }
            ],
            "correct": 0,
            "explanation": "Moderate to severe distress in a conscious patient.",
            "kpi": "ALS back-up for Red priority patients."
        },
        {
            "id": "crit_8_7_3",
            "scenario": "A 4-year-old was underwater for about a minute, coughed, and now seems fine but has occasional coughing.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Assess fully and transport: symptomatic children can deteriorate later",
                    "f": "Correct."
                },
                {
                    "t": "Leave: she's playing",
                    "f": "She still has symptoms."
                },
                {
                    "t": "Abdominal thrusts",
                    "f": "Never."
                },
                {
                    "t": "Spinal board",
                    "f": "No traumatic mechanism."
                }
            ],
            "correct": 0,
            "explanation": "Delayed pulmonary edema is possible.",
            "kpi": "Submersion time documented."
        },
        {
            "id": "crit_8_7_4",
            "scenario": "A teenager dived into shallow water, was pulled out, and complains of neck pain and tingling arms.",
            "question": "Spinal motion restriction?",
            "options": [
                {
                    "t": "Yes: a traumatic mechanism; but airway and breathing first",
                    "f": "Correct."
                },
                {
                    "t": "No: SMR is never used in drowning",
                    "f": "It is used with a traumatic mechanism."
                },
                {
                    "t": "Long board for transport",
                    "f": "Boards are for extrication."
                },
                {
                    "t": "Let him walk",
                    "f": "No."
                }
            ],
            "correct": 0,
            "explanation": "Do not delay resuscitation for spinal precautions unless trauma is suspected.",
            "kpi": "Submersion time documented."
        },
        {
            "id": "crit_8_7_5",
            "scenario": "A rescued man is cold, shivering and drowsy; HR 48.",
            "question": "What do you add?",
            "options": [
                {
                    "t": "Remove wet clothing, rewarm, handle gently, glucose, Hypothermia CPG",
                    "f": "Correct."
                },
                {
                    "t": "Vigorous rubbing and walking",
                    "f": "Handle gently."
                },
                {
                    "t": "Cold oxygen only",
                    "f": "Prevent heat loss."
                },
                {
                    "t": "Ignore the temperature",
                    "f": "Hypothermia worsens outcomes."
                }
            ],
            "correct": 0,
            "explanation": "Bradycardia may be from hypoxia or hypothermia.",
            "kpi": "Submersion time documented."
        }
    ]
};
