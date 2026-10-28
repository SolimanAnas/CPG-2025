/* ========== CPG 4.1 – Adult Basic Life Support ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c4-1",
    "title": "Adult Basic Life Support",
    "shortTitle": "4.1 Adult BLS",
    "guide": {
        "cpg": "4.1",
        "group": "resus",
        "groupLabel": "Resuscitation",
        "title": "Adult Basic Life Support",
        "lead": "Recognise arrest fast, call ALS back-up, start high-quality CPR and get the AED on. Compressions within 1 minute, AED within 3 minutes.",
        "source": {
            "label": "CPG 4.1",
            "pages": "93–96",
            "pdf": "../pdf_sections/4_1_Adult_Basic_Life_Support.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Adults (≥13 years) in cardiac arrest: unresponsive with no signs of life, or suspected PEA, VF, VT or asystole, needing compressions, ventilations and AED."
                ],
                "exclude": [
                    "Obvious irreversible death (rigor mortis, dependent lividity, decapitation): see Verification of Death CPG.",
                    "Pediatric patients (&lt;13 years)."
                ]
            },
            {
                "type": "steps",
                "title": "BLS sequence",
                "icon": "list",
                "steps": [
                    {
                        "title": "Scene safety",
                        "text": "No electrical or environmental hazards. Note whether bystander CPR was started and how good it was."
                    },
                    {
                        "title": "Check responsiveness",
                        "text": "No response to voice or pain (AVPU)."
                    },
                    {
                        "title": "Call for ALS back-up",
                        "text": "The first rescuer stays with the patient; the second brings the AED and emergency equipment."
                    },
                    {
                        "title": "Open the airway, check breathing and pulse together",
                        "text": "Head tilt/chin lift (jaw thrust if trauma is suspected). Look for no breathing or only gasping while feeling the carotid pulse, for 5–10 seconds."
                    },
                    {
                        "title": "No breathing (or only gasping) and no pulse: CPR",
                        "level": "EMR",
                        "text": "Cycles of 30 compressions and 2 breaths. Use the AED as soon as it is available."
                    },
                    {
                        "title": "AED",
                        "level": "EMR",
                        "text": "<b>Shock advised:</b> give 1 shock, then resume CPR immediately for 2 minutes until the AED prompts a rhythm check. <b>No shock advised:</b> resume CPR immediately for 2 minutes."
                    },
                    {
                        "title": "Continue until ALS arrives",
                        "text": "Check for signs of ROSC (spontaneous pulse, normal breathing) every 2 minutes."
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Other findings",
                "icon": "stethoscope",
                "groups": [
                    {
                        "title": "No normal breathing, pulse felt",
                        "items": [
                            "Rescue breathing: 1 breath every 6 seconds (10 breaths/min).",
                            "Check the pulse every 2 minutes; if there is no pulse, start CPR.",
                            "Possible opioid overdose: go to the Overdose/Poisoning CPG."
                        ]
                    },
                    {
                        "title": "Normal breathing, pulse felt",
                        "items": [
                            "Go to the Universal Care CPG."
                        ]
                    }
                ]
            },
            {
                "type": "groups",
                "title": "High-quality CPR",
                "icon": "activity",
                "groups": [
                    {
                        "title": "Compressions",
                        "items": [
                            "100–120/min, 5–6 cm deep, full recoil.",
                            "Rotate compressors every 2 minutes.",
                            "Interruptions under 10 seconds."
                        ]
                    },
                    {
                        "title": "Airway and breathing",
                        "items": [
                            "BVM at 10–12 breaths/min (1 every 5–6 seconds) with visible chest rise; two-person BVM if available.",
                            "OPA or NPA if needed; suction secretions or vomit.",
                            "100% oxygen via BVM."
                        ]
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Special circumstances",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "Maternal cardiac arrest",
                        "items": [
                            "High-quality CPR with good ventilation.",
                            "Left lateral uterine displacement to relieve pressure on the major abdominal vessels.",
                            "Transfer to an appropriate facility as soon as possible."
                        ]
                    },
                    {
                        "title": "Hypothermia",
                        "items": [
                            "Check the pulse for up to 60 seconds."
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
                        "title": "What the AED is deciding between",
                        "items": [
                            {
                                "ecg": "vfFine",
                                "label": "Ventricular fibrillation",
                                "sub": "Shock advised"
                            },
                            {
                                "ecg": "pulselessVt",
                                "label": "Pulseless VT",
                                "sub": "Shock advised"
                            },
                            {
                                "ecg": "asystole",
                                "label": "Asystole",
                                "sub": "No shock advised: resume CPR"
                            },
                            {
                                "ecg": "pea",
                                "label": "PEA",
                                "sub": "No shock advised: resume CPR"
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
                    "Compressions within 1 minute of recognising cardiac arrest.",
                    "AED applied within 3 minutes of recognising cardiac arrest."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "4.2 Pediatric BLS",
                        "href": "c4-2.html"
                    },
                    {
                        "label": "4.3 Adult Cardiac Arrest",
                        "href": "c4-3.html"
                    },
                    {
                        "label": "4.7 Post-ROSC Care",
                        "href": "c4-7.html"
                    },
                    {
                        "label": "4.9 Verification of Death",
                        "href": "c4-9.html"
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
            "q": "What age range does CPG 4.1 cover?",
            "options": [
                "All ages",
                "Adults ≥13 years",
                "Over 18 only",
                "Over 65"
            ],
            "correct": 1,
            "explanation": "Adult patients ≥13 years; children <13 are excluded."
        },
        {
            "q": "What is the first step on the BLS flowchart?",
            "options": [
                "Start compressions",
                "Verify scene safety",
                "Apply the AED",
                "Check glucose"
            ],
            "correct": 1,
            "explanation": "Verify scene safety first (e.g. no electrical or environmental hazards)."
        },
        {
            "q": "After confirming unresponsiveness, what is next?",
            "options": [
                "Wait and observe",
                "Call for ALS back-up; the second rescuer gets the AED",
                "Transport",
                "Give oxygen only"
            ],
            "correct": 1,
            "explanation": "Call ALS back-up. The first rescuer stays; the second retrieves the AED and equipment."
        },
        {
            "q": "How are breathing and pulse checked?",
            "options": [
                "Pulse first, then breathing after 30 seconds",
                "Simultaneously, within 10 seconds",
                "Breathing only",
                "Pulse only, for 30 seconds"
            ],
            "correct": 1,
            "explanation": "Look for no breathing or only gasping and check the pulse simultaneously; is a pulse felt within 10 seconds?"
        },
        {
            "q": "Which pulse is checked in adult BLS?",
            "options": [
                "Radial",
                "Carotid",
                "Brachial",
                "Pedal"
            ],
            "correct": 1,
            "explanation": "Check for absence of a carotid pulse for 5–10 seconds."
        },
        {
            "q": "How do you open the airway in suspected trauma?",
            "options": [
                "Head tilt/chin lift",
                "Jaw thrust",
                "Neck extension",
                "Sit the patient up"
            ],
            "correct": 1,
            "explanation": "Head tilt/chin lift; jaw thrust for suspected trauma."
        },
        {
            "q": "No breathing (or only gasping) and no pulse. What do you do?",
            "options": [
                "Rescue breaths only",
                "Start CPR, 30:2, and use the AED as soon as available",
                "Recovery position",
                "Wait for ALS"
            ],
            "correct": 1,
            "explanation": "Start CPR in cycles of 30 compressions and 2 breaths; AED as soon as it is available."
        },
        {
            "q": "What is the compression-to-breath ratio in adult BLS?",
            "options": [
                "15:2",
                "30:2",
                "5:1",
                "Continuous only"
            ],
            "correct": 1,
            "explanation": "Cycles of 30 compressions and 2 breaths."
        },
        {
            "q": "No normal breathing but a pulse is felt. What do you do?",
            "options": [
                "Start CPR",
                "Rescue breathing, 1 breath every 6 seconds, checking the pulse every 2 minutes",
                "Shock with the AED",
                "Nothing"
            ],
            "correct": 1,
            "explanation": "Rescue breathing at 1 breath every 6 seconds (10 breaths/min); if the pulse is lost, start CPR."
        },
        {
            "q": "During rescue breathing, how often is the pulse checked?",
            "options": [
                "Every 30 seconds",
                "Every 2 minutes",
                "Every 5 minutes",
                "Never"
            ],
            "correct": 1,
            "explanation": "Check the pulse every 2 minutes."
        },
        {
            "q": "A patient with a pulse but no normal breathing may have overdosed on opioids. Which CPG?",
            "options": [
                "Asthma",
                "Overdose/Poisoning",
                "Stroke",
                "Trauma"
            ],
            "correct": 1,
            "explanation": "If possible opioid overdose, go to the Overdose/Poisoning CPG."
        },
        {
            "q": "The AED advises a shock. What do you do after the shock?",
            "options": [
                "Check the pulse for 30 seconds",
                "Resume CPR immediately for 2 minutes",
                "Give a second shock",
                "Stop CPR"
            ],
            "correct": 1,
            "explanation": "Give 1 shock, then resume CPR immediately for 2 minutes until the AED prompts a rhythm check."
        },
        {
            "q": "The AED says no shock advised. What next?",
            "options": [
                "Stop CPR",
                "Resume CPR immediately for 2 minutes",
                "Shock anyway",
                "Turn the AED off"
            ],
            "correct": 1,
            "explanation": "Resume CPR immediately for 2 minutes until the next rhythm check."
        },
        {
            "q": "How often are signs of ROSC checked?",
            "options": [
                "Every 30 seconds",
                "Every 2 minutes",
                "Every 10 minutes",
                "Only at hospital"
            ],
            "correct": 1,
            "explanation": "Check for signs of ROSC (spontaneous pulse, normal breathing) every 2 minutes."
        },
        {
            "q": "What is the compression rate?",
            "options": [
                "80–100/min",
                "100–120/min",
                "120–140/min",
                "60–80/min"
            ],
            "correct": 1,
            "explanation": "100–120/min, 5–6 cm deep, full recoil."
        },
        {
            "q": "What compression depth does CPG 4.1 give?",
            "options": [
                "2–3 cm",
                "4–5 cm",
                "5–6 cm",
                "7–8 cm"
            ],
            "correct": 2,
            "explanation": "5–6 cm depth with full recoil."
        },
        {
            "q": "How often should compressors rotate?",
            "options": [
                "Every minute",
                "Every 2 minutes",
                "Every 5 minutes",
                "Only when tired"
            ],
            "correct": 1,
            "explanation": "Rotate every 2 minutes to prevent fatigue."
        },
        {
            "q": "What is the longest acceptable pause in compressions?",
            "options": [
                "Less than 10 seconds",
                "15 seconds",
                "20 seconds",
                "30 seconds"
            ],
            "correct": 0,
            "explanation": "Minimize interruptions to under 10 seconds."
        },
        {
            "q": "What BVM ventilation rate is given in the clinical insights?",
            "options": [
                "6–8 breaths/min",
                "10–12 breaths/min",
                "20–30 breaths/min",
                "30 breaths/min"
            ],
            "correct": 1,
            "explanation": "BVM at 10–12 breaths/min (1 every 5–6 seconds) with adequate chest rise."
        },
        {
            "q": "How can BVM seal and ventilation be improved?",
            "options": [
                "Higher oxygen flow",
                "Two-person BVM technique",
                "Faster rate",
                "Smaller mask"
            ],
            "correct": 1,
            "explanation": "Use the two-person BVM technique if available."
        },
        {
            "q": "What oxygen concentration is given during CPR?",
            "options": [
                "28%",
                "40%",
                "100% via BVM",
                "None"
            ],
            "correct": 2,
            "explanation": "Administer 100% oxygen via BVM."
        },
        {
            "q": "What is the lowest clinical level for CPR and AED use?",
            "options": [
                "EMR",
                "EMT",
                "EMT-A",
                "P"
            ],
            "correct": 0,
            "explanation": "CPR and AED are marked EMR on the flowchart."
        },
        {
            "q": "In maternal cardiac arrest, which is a priority?",
            "options": [
                "Stop CPR for delivery",
                "Left lateral uterine displacement",
                "Lie her flat on her right side",
                "No ventilation"
            ],
            "correct": 1,
            "explanation": "Priorities: high-quality CPR with good ventilation, left lateral uterine displacement, early transfer."
        },
        {
            "q": "Why is the uterus displaced to the left in maternal arrest?",
            "options": [
                "To help the baby breathe",
                "To relieve pressure on the major abdominal vessels",
                "To reduce bleeding",
                "For comfort"
            ],
            "correct": 1,
            "explanation": "Displacement relieves pressure on the major vessels in the abdomen to help blood flow."
        },
        {
            "q": "In hypothermia, how long may the pulse check take?",
            "options": [
                "10 seconds",
                "Up to 60 seconds",
                "5 seconds",
                "2 minutes"
            ],
            "correct": 1,
            "explanation": "Hypothermia: pulse check up to 60 seconds."
        },
        {
            "q": "Which patient is excluded from BLS?",
            "options": [
                "Unwitnessed arrest",
                "Obvious irreversible death such as decapitation",
                "Asystole",
                "Elderly"
            ],
            "correct": 1,
            "explanation": "Obvious signs of irreversible death (rigor mortis, dependent lividity, decapitation) – see Verification of Death."
        },
        {
            "q": "What triage category is every cardiac arrest?",
            "options": [
                "Yellow",
                "Red",
                "Green",
                "Black"
            ],
            "correct": 1,
            "explanation": "All unconscious patients and patients in cardiac arrest are Red Priority."
        },
        {
            "q": "How long do you continue CPR in BLS?",
            "options": [
                "10 minutes",
                "Until ALS back-up arrives",
                "Until the patient is cold",
                "Until tired"
            ],
            "correct": 1,
            "explanation": "Continue CPR until ALS back-up arrives."
        },
        {
            "q": "What is the KPI for starting compressions?",
            "options": [
                "Within 1 minute of recognising arrest",
                "Within 3 minutes",
                "Within 5 minutes",
                "On arrival at hospital"
            ],
            "correct": 0,
            "explanation": "Initiate compressions within 1 minute."
        },
        {
            "q": "What is the KPI for applying the AED?",
            "options": [
                "Within 1 minute",
                "Within 3 minutes of recognising arrest",
                "Within 10 minutes",
                "Before calling ALS"
            ],
            "correct": 1,
            "explanation": "Apply the AED within 3 minutes."
        }
    ],
    "flashcards": [
        {
            "category": "Sequence",
            "question": "First action?",
            "answer": "Verify scene safety."
        },
        {
            "category": "Sequence",
            "question": "After confirming unresponsiveness?",
            "answer": "Call ALS back-up; first rescuer stays, second gets the AED and equipment."
        },
        {
            "category": "Sequence",
            "question": "Breathing and pulse check?",
            "answer": "Simultaneously, carotid pulse, 5–10 seconds: is a pulse felt within 10 seconds?"
        },
        {
            "category": "Airway",
            "question": "Opening the airway?",
            "answer": "Head tilt/chin lift; jaw thrust if trauma suspected."
        },
        {
            "category": "CPR",
            "question": "No breathing (or gasping), no pulse?",
            "answer": "Start CPR 30:2; AED as soon as available (EMR)."
        },
        {
            "category": "Rescue breathing",
            "question": "No normal breathing, pulse felt?",
            "answer": "1 breath every 6 seconds (10 breaths/min); pulse check every 2 minutes; no pulse → CPR."
        },
        {
            "category": "Rescue breathing",
            "question": "Suspected opioid overdose with a pulse?",
            "answer": "Go to the Overdose/Poisoning CPG."
        },
        {
            "category": "AED",
            "question": "Shock advised?",
            "answer": "Give 1 shock, then CPR immediately for 2 minutes until the AED prompts a rhythm check."
        },
        {
            "category": "AED",
            "question": "No shock advised?",
            "answer": "Resume CPR immediately for 2 minutes."
        },
        {
            "category": "ROSC",
            "question": "ROSC checks?",
            "answer": "Spontaneous pulse, normal breathing; every 2 minutes."
        },
        {
            "category": "CPR quality",
            "question": "Compression rate and depth?",
            "answer": "100–120/min, 5–6 cm, full recoil."
        },
        {
            "category": "CPR quality",
            "question": "Compressor rotation?",
            "answer": "Every 2 minutes."
        },
        {
            "category": "CPR quality",
            "question": "Maximum pause?",
            "answer": "Under 10 seconds."
        },
        {
            "category": "Ventilation",
            "question": "BVM rate?",
            "answer": "10–12 breaths/min (1 every 5–6 seconds) with visible chest rise."
        },
        {
            "category": "Ventilation",
            "question": "Better BVM seal?",
            "answer": "Two-person BVM technique."
        },
        {
            "category": "Airway",
            "question": "Airway adjuncts in BLS?",
            "answer": "OPA or NPA if needed; suction secretions or vomit."
        },
        {
            "category": "Oxygen",
            "question": "Oxygen in CPR?",
            "answer": "100% via BVM."
        },
        {
            "category": "Maternal",
            "question": "Maternal cardiac arrest priorities?",
            "answer": "High-quality CPR with good ventilation; left lateral uterine displacement; early transfer."
        },
        {
            "category": "Hypothermia",
            "question": "Pulse check in hypothermia?",
            "answer": "Up to 60 seconds."
        },
        {
            "category": "Exclusions",
            "question": "Who is excluded from adult BLS?",
            "answer": "Obvious irreversible death; children <13."
        },
        {
            "category": "Inclusion",
            "question": "Who is included?",
            "answer": "Adults ≥13 in cardiac arrest: no signs of life, or suspected PEA, VF, VT, asystole."
        },
        {
            "category": "Triage",
            "question": "Triage in arrest?",
            "answer": "All unconscious and cardiac arrest patients are Red Priority."
        },
        {
            "category": "Scene",
            "question": "Bystander CPR?",
            "answer": "Note whether it was started and its quality (rate, depth)."
        },
        {
            "category": "Scope",
            "question": "Level for CPR and AED?",
            "answer": "EMR and above."
        },
        {
            "category": "Duration",
            "question": "How long to continue BLS?",
            "answer": "Until ALS back-up arrives."
        },
        {
            "category": "Normal breathing",
            "question": "Normal breathing with a pulse?",
            "answer": "Go to the Universal Care CPG."
        },
        {
            "category": "Documentation",
            "question": "Key timestamps?",
            "answer": "CPR start, AED applied, defibrillation, ROSC."
        },
        {
            "category": "Documentation",
            "question": "After ROSC?",
            "answer": "Two full sets of vital signs; GCS and interventions."
        },
        {
            "category": "KPI",
            "question": "Compressions KPI?",
            "answer": "Within 1 minute of recognising cardiac arrest."
        },
        {
            "category": "KPI",
            "question": "AED KPI?",
            "answer": "Applied within 3 minutes of recognising cardiac arrest."
        }
    ],
    "critical": [
        {
            "id": "crit_4_1_1",
            "scenario": "A 60-year-old man collapsed in a restaurant. Bystanders are doing CPR. He is unresponsive, not breathing and has no carotid pulse. Your partner has the AED.",
            "question": "What is the priority?",
            "options": [
                {
                    "t": "Continue 30:2 CPR and apply the AED immediately",
                    "f": "Correct. Use the AED as soon as it is available; KPI: AED within 3 minutes."
                },
                {
                    "t": "Check the pulse again for 30 seconds",
                    "f": "Pulse checks take no more than 10 seconds (60 seconds only in hypothermia)."
                },
                {
                    "t": "Give rescue breaths only",
                    "f": "No pulse: he needs CPR."
                },
                {
                    "t": "Move him to the ambulance before starting",
                    "f": "Start CPR and AED now."
                }
            ],
            "correct": 0,
            "explanation": "No breathing (or only gasping) and no pulse: CPR at 30:2 and AED as soon as available. Call ALS back-up.",
            "kpi": "AED applied within 3 minutes of recognising cardiac arrest."
        },
        {
            "id": "crit_4_1_2",
            "scenario": "A 35-year-old man found collapsed has a carotid pulse but is not breathing normally. Pinpoint pupils and a syringe nearby.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Rescue breathing 1 breath every 6 seconds, pulse check every 2 minutes, and follow the Overdose/Poisoning CPG",
                    "f": "Correct. Pulse present, no normal breathing: rescue breathing, and possible opioid overdose."
                },
                {
                    "t": "Full CPR 30:2",
                    "f": "He has a pulse; rescue breathing is indicated."
                },
                {
                    "t": "Attach the AED and shock",
                    "f": "He has a pulse."
                },
                {
                    "t": "Recovery position and observe",
                    "f": "He is not breathing normally: he needs ventilation."
                }
            ],
            "correct": 0,
            "explanation": "No normal breathing with a pulse: rescue breathing at 10 breaths/min, pulse check every 2 minutes, start CPR if the pulse is lost.",
            "kpi": "Compressions within 1 minute of recognising cardiac arrest."
        },
        {
            "id": "crit_4_1_3",
            "scenario": "During CPR the AED analyses and says 'no shock advised'.",
            "ecg": "asystole",
            "question": "What next?",
            "options": [
                {
                    "t": "Resume CPR immediately for 2 minutes until the next rhythm check",
                    "f": "Correct."
                },
                {
                    "t": "Stop CPR: nothing more can be done",
                    "f": "Continue CPR until ALS arrives."
                },
                {
                    "t": "Shock manually",
                    "f": "The AED found a non-shockable rhythm."
                },
                {
                    "t": "Check the pulse for 1 minute",
                    "f": "Pauses must be under 10 seconds."
                }
            ],
            "correct": 0,
            "explanation": "No shock advised: resume CPR immediately for 2 minutes (until the AED prompts a rhythm check), check for ROSC every 2 minutes and continue until ALS arrives.",
            "kpi": "Compressions within 1 minute of recognising cardiac arrest."
        },
        {
            "id": "crit_4_1_4",
            "scenario": "A woman who is 32 weeks pregnant collapses and is in cardiac arrest.",
            "question": "Which BLS priorities apply?",
            "options": [
                {
                    "t": "High-quality CPR with good ventilation, left lateral uterine displacement, and transfer as soon as possible",
                    "f": "Correct. These are the maternal cardiac arrest priorities in CPG 4.1."
                },
                {
                    "t": "Lie her flat and wait for ALS",
                    "f": "Displace the uterus to relieve pressure on the major vessels."
                },
                {
                    "t": "Compressions only, no ventilation",
                    "f": "Good ventilation is a stated priority."
                },
                {
                    "t": "Delay the AED until after delivery",
                    "f": "Use the AED as soon as available."
                }
            ],
            "correct": 0,
            "explanation": "Maternal cardiac arrest: continue high-quality CPR with attention to ventilation, left lateral uterine displacement, and early transfer to an appropriate facility.",
            "kpi": "AED applied within 3 minutes of recognising cardiac arrest."
        },
        {
            "id": "crit_4_1_5",
            "scenario": "A man pulled from cold water is unresponsive and not breathing. You cannot feel a carotid pulse after 10 seconds.",
            "question": "What does CPG 4.1 say about the pulse check?",
            "options": [
                {
                    "t": "In hypothermia, check for up to 60 seconds",
                    "f": "Correct. Then start CPR if there is still no pulse."
                },
                {
                    "t": "10 seconds is always enough",
                    "f": "Hypothermia allows up to 60 seconds."
                },
                {
                    "t": "Do not check the pulse",
                    "f": "A pulse check is still needed."
                },
                {
                    "t": "Check for 5 minutes",
                    "f": "Up to 60 seconds."
                }
            ],
            "correct": 0,
            "explanation": "Hypothermia: pulse check up to 60 seconds. Start CPR if absent and apply the AED.",
            "kpi": "AED applied within 3 minutes of recognising cardiac arrest."
        }
    ]
};
