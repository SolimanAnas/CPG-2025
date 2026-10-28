/* ========== CPG 11.1 – START Triage (MCI) ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c11-1",
    "title": "START Triage (MCI)",
    "shortTitle": "11.1 S.T.A.R.T Triage",
    "guide": {
        "cpg": "11.1",
        "group": "mci",
        "groupLabel": "Mass Casualty",
        "title": "START Triage (MCI)",
        "lead": "In a mass casualty incident, sort first and treat later. Clear the walking wounded with a global command. Then check each remaining casualty in order: breathing, respiratory rate, perfusion, mental status. The only treatments during triage are airway positioning and control of massive hemorrhage. Aim for 30 seconds per patient, tag everyone, and report the numbers to incident command.",
        "source": {
            "label": "CPG 11.1",
            "pages": "334–336",
            "pdf": "../pdf_sections/11_1_START_Triage_MCI_Triage.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Everyone at a mass casualty incident (e.g. multi-vehicle collisions, explosions, natural disasters), of any age, injured or exposed, with or without symptoms."
                ],
                "exclude": [
                    "Patients not part of an MCI."
                ]
            },
            {
                "type": "steps",
                "title": "Start",
                "icon": "siren",
                "steps": [
                    {
                        "title": "Scene safety",
                        "text": "PPE first; do not enter unsafe areas during initial triage."
                    },
                    {
                        "title": "Global command",
                        "text": "“If you can hear me and are able to walk, come to my voice.” Everyone who walks is Green (Minor): direct them to a designated area."
                    },
                    {
                        "title": "Non-ambulatory",
                        "text": "Go through the sequence below. During triage, only position the airway for apnea and control massive hemorrhage."
                    }
                ]
            },
            {
                "type": "table",
                "title": "START sequence",
                "icon": "list",
                "columns": [
                    "Check",
                    "Finding",
                    "Category"
                ],
                "rows": [
                    {
                        "group": "Breathing"
                    },
                    [
                        "Spontaneous breathing?",
                        "No: position the airway. Still apneic",
                        "Expectant (Black)"
                    ],
                    [
                        "",
                        "Breathes after airway positioning",
                        "Immediate (Red) on the flowchart"
                    ],
                    {
                        "group": "R: Respiratory rate"
                    },
                    [
                        "Rate",
                        "&gt;30",
                        "Immediate (Red)"
                    ],
                    [
                        "",
                        "&lt;30",
                        "Check perfusion"
                    ],
                    {
                        "group": "P: Perfusion"
                    },
                    [
                        "Radial pulse / capillary refill",
                        "Pulse absent or refill &gt;2 seconds",
                        "Immediate (Red)"
                    ],
                    [
                        "",
                        "Pulse present or refill &lt;2 seconds",
                        "Check mental status"
                    ],
                    {
                        "group": "M: Mental status"
                    },
                    [
                        "Commands",
                        "Does not obey",
                        "Immediate (Red)"
                    ],
                    [
                        "",
                        "Obeys",
                        "Delayed (Yellow)"
                    ]
                ]
            },
            {
                "type": "table",
                "title": "Categories",
                "icon": "clipboard-list",
                "columns": [
                    "Category",
                    "Meaning"
                ],
                "rows": [
                    [
                        "Immediate (Red)",
                        "Needs urgent intervention"
                    ],
                    [
                        "Delayed (Yellow)",
                        "Serious, not immediately life-threatening"
                    ],
                    [
                        "Minor (Green)",
                        "Walking wounded, minimal injuries"
                    ],
                    [
                        "Expectant (Black)",
                        "Unlikely to survive given the resources"
                    ]
                ]
            },
            {
                "type": "list",
                "title": "After triage",
                "icon": "clipboard-list",
                "items": [
                    "Tag every patient: it keeps treatment in order of priority and supports scene management.",
                    "Report triage numbers to the incident commander; adjust to available resources.",
                    "The transferring team documents the tag category."
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
                                "label": "MCI course",
                                "sub": "Triage practice",
                                "href": "../pages/mci.html",
                                "icon": "siren"
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
                    "Triage assessment completed within 30 seconds per patient.",
                    "A triage tag on every patient triaged."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "1 Universal Care",
                        "href": "c1.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "First step in START triage?",
            "options": [
                "Global command for the walking wounded",
                "Check respiratory rate",
                "Check capillary refill",
                "Assess mental status"
            ],
            "correct": 0,
            "explanation": "Walkers are Green."
        },
        {
            "q": "Non-ambulatory, still apneic after airway positioning. Category?",
            "options": [
                "Expectant (Black)",
                "Immediate (Red)",
                "Delayed (Yellow)",
                "Minor (Green)"
            ],
            "correct": 0,
            "explanation": "Per the sequence."
        },
        {
            "q": "Non-ambulatory, breathing at 32/min. Category?",
            "options": [
                "Immediate (Red)",
                "Delayed (Yellow)",
                "Minor (Green)",
                "Expectant (Black)"
            ],
            "correct": 0,
            "explanation": "RR >30."
        },
        {
            "q": "RR 24, radial pulse present, obeys commands. Category?",
            "options": [
                "Delayed (Yellow)",
                "Immediate (Red)",
                "Minor (Green)",
                "Expectant (Black)"
            ],
            "correct": 0,
            "explanation": "Passes R, P and M."
        },
        {
            "q": "Which finding makes a patient Immediate?",
            "options": [
                "Absent radial pulse",
                "RR 28",
                "Walks to the designated area",
                "Obeys commands"
            ],
            "correct": 0,
            "explanation": "Perfusion failure."
        },
        {
            "q": "Target triage time per patient?",
            "options": [
                "30 seconds",
                "15 seconds",
                "60 seconds",
                "90 seconds"
            ],
            "correct": 0,
            "explanation": "KPI."
        },
        {
            "q": "Bleeding amputation, can't walk; RR 24, radial pulse present, doesn't follow commands. Category?",
            "options": [
                "Immediate (Red)",
                "Delayed (Yellow)",
                "Minor (Green)",
                "Expectant (Black)"
            ],
            "correct": 0,
            "explanation": "Fails mental status; control the hemorrhage during triage."
        },
        {
            "q": "Who is tagged Green?",
            "options": [
                "Patients who walk to the designated area",
                "Everyone with normal vital signs",
                "Only uninjured people",
                "Children"
            ],
            "correct": 0,
            "explanation": "Walking wounded."
        },
        {
            "q": "Why tag every patient?",
            "options": [
                "Treatment in order of priority and effective scene management",
                "Billing",
                "Only identity",
                "Not needed"
            ],
            "correct": 0,
            "explanation": "Clinical insight."
        },
        {
            "q": "RR 28, absent radial pulse, obeys commands. Category?",
            "options": [
                "Immediate (Red)",
                "Delayed (Yellow)",
                "Minor (Green)",
                "Expectant (Black)"
            ],
            "correct": 0,
            "explanation": "Fails perfusion."
        },
        {
            "q": "Order for non-ambulatory patients?",
            "options": [
                "Respirations, Perfusion, Mental status",
                "Perfusion, Respirations, Mental status",
                "Mental status, Respirations, Perfusion",
                "Respirations, Mental status, Perfusion"
            ],
            "correct": 0,
            "explanation": "RPM."
        },
        {
            "q": "Apneic patient starts breathing after airway positioning. Flowchart category?",
            "options": [
                "Immediate (Red)",
                "Delayed (Yellow)",
                "Minor (Green)",
                "Expectant (Black)"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "What does Expectant mean?",
            "options": [
                "Unlikely to survive given the resources",
                "Walking wounded",
                "Delayed treatment",
                "Needs urgent intervention"
            ],
            "correct": 0,
            "explanation": "Black."
        },
        {
            "q": "Capillary refill 3 seconds. Category?",
            "options": [
                "Immediate (Red)",
                "Delayed (Yellow)",
                "Minor (Green)",
                "Reassess later"
            ],
            "correct": 0,
            "explanation": "Refill >2 seconds."
        },
        {
            "q": "Head injury, lying down; RR 26, radial pulse present, follows commands. Category?",
            "options": [
                "Delayed (Yellow)",
                "Immediate (Red)",
                "Minor (Green)",
                "Expectant (Black)"
            ],
            "correct": 0,
            "explanation": "Passes RPM but cannot walk."
        },
        {
            "q": "Which interventions are allowed during triage?",
            "options": [
                "Airway positioning and control of massive hemorrhage",
                "IV fluids",
                "Splinting",
                "Full assessment"
            ],
            "correct": 0,
            "explanation": "Basic interventions only."
        },
        {
            "q": "Respiratory rate cut-off for Immediate?",
            "options": [
                ">30",
                ">20",
                ">25",
                ">35"
            ],
            "correct": 0,
            "explanation": "R in RPM."
        },
        {
            "q": "Can't walk; RR 22, radial pulse present, confused and not obeying. Category?",
            "options": [
                "Immediate (Red)",
                "Delayed (Yellow)",
                "Minor (Green)",
                "Expectant (Black)"
            ],
            "correct": 0,
            "explanation": "Fails mental status."
        },
        {
            "q": "What does R stand for?",
            "options": [
                "Respirations",
                "Rescue",
                "Resuscitation",
                "Reassessment"
            ],
            "correct": 0,
            "explanation": "RPM."
        },
        {
            "q": "Bleeding leg amputation; RR 28, no radial pulse, obeys commands. Category and action?",
            "options": [
                "Immediate (Red); control the massive hemorrhage",
                "Delayed (Yellow)",
                "Minor (Green)",
                "Finish triaging everyone before touching the bleeding"
            ],
            "correct": 0,
            "explanation": "Fails perfusion; massive hemorrhage control is allowed during triage."
        },
        {
            "q": "How is perfusion checked?",
            "options": [
                "Radial pulse or capillary refill",
                "Carotid pulse",
                "Blood pressure",
                "Skin colour"
            ],
            "correct": 0,
            "explanation": "P in RPM."
        },
        {
            "q": "Unresponsive, breathing at 8/min. Category?",
            "options": [
                "Immediate (Red)",
                "Delayed (Yellow)",
                "Minor (Green)",
                "Expectant (Black)"
            ],
            "correct": 0,
            "explanation": "RR <30 and pulse present, but does not obey commands."
        },
        {
            "q": "What is reported to the incident commander?",
            "options": [
                "Triage numbers",
                "Every patient's history",
                "Nothing",
                "Only deaths"
            ],
            "correct": 0,
            "explanation": "Adjust to resources."
        },
        {
            "q": "Which is not a START category?",
            "options": [
                "Urgent",
                "Immediate",
                "Delayed",
                "Expectant"
            ],
            "correct": 0,
            "explanation": "The four are Immediate, Delayed, Minor, Expectant."
        },
        {
            "q": "Lying down, no obvious injury, RR 18, radial pulse present, obeys commands but cannot walk. Category?",
            "options": [
                "Delayed (Yellow)",
                "Immediate (Red)",
                "Minor (Green)",
                "Expectant (Black)"
            ],
            "correct": 0,
            "explanation": "Non-ambulatory, passes RPM."
        },
        {
            "q": "What are the KPIs?",
            "options": [
                "Triage within 30 seconds per patient and tag every patient",
                "Transport all within 10 minutes",
                "Oxygen for all",
                "CPR for all apneic patients"
            ],
            "correct": 0,
            "explanation": "Two KPIs."
        },
        {
            "q": "A burned patient walks to your voice. Initial category?",
            "options": [
                "Minor (Green)",
                "Immediate (Red)",
                "Delayed (Yellow)",
                "Expectant (Black)"
            ],
            "correct": 0,
            "explanation": "All ambulatory patients are Green at first."
        },
        {
            "q": "Who is treated and transported first?",
            "options": [
                "Immediate (Red)",
                "Delayed (Yellow)",
                "Minor (Green)",
                "Expectant (Black)"
            ],
            "correct": 0,
            "explanation": "Urgent intervention."
        },
        {
            "q": "Purpose of the global command?",
            "options": [
                "Identify and move Green patients",
                "Test hearing",
                "Calm the scene",
                "Find the dead"
            ],
            "correct": 0,
            "explanation": "Clears the scene for non-ambulatory triage."
        },
        {
            "q": "What comes before triage at an unsafe scene?",
            "options": [
                "PPE and scene safety: don't enter unsafe areas",
                "Tagging",
                "Treatment",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "Safety consideration."
        }
    ],
    "flashcards": [
        {
            "question": "START",
            "answer": "Simple Triage and Rapid Treatment."
        },
        {
            "question": "Categories",
            "answer": "Immediate (Red), Delayed (Yellow), Minor (Green), Expectant (Black)."
        },
        {
            "question": "Global command",
            "answer": "“If you can hear me and are able to walk, come to my voice.”"
        },
        {
            "question": "Green",
            "answer": "Everyone who can walk; send them to a designated area."
        },
        {
            "question": "Breathing",
            "answer": "Not breathing: position the airway. Still apneic: Black. Breathes: Red (flowchart)."
        },
        {
            "question": "R",
            "answer": "Respiratory rate >30: Red; <30: check perfusion."
        },
        {
            "question": "P",
            "answer": "Radial pulse absent or capillary refill >2 seconds: Red."
        },
        {
            "question": "M",
            "answer": "Does not obey commands: Red; obeys: Yellow."
        },
        {
            "question": "Yellow",
            "answer": "Non-ambulatory, RR <30, perfusion adequate, obeys commands."
        },
        {
            "question": "Black",
            "answer": "Apneic after airway positioning; unlikely to survive given resources."
        },
        {
            "question": "Triage interventions",
            "answer": "Airway positioning for apnea; control massive hemorrhage."
        },
        {
            "question": "RPM",
            "answer": "Respirations, Perfusion, Mental status."
        },
        {
            "question": "Time per patient",
            "answer": "30 seconds (KPI)."
        },
        {
            "question": "Tags",
            "answer": "Every patient; the transferring team documents the category."
        },
        {
            "question": "Incident command",
            "answer": "Report triage numbers; adjust to resources."
        },
        {
            "question": "Mental status test",
            "answer": "A simple command, e.g. “Squeeze my hand.”"
        },
        {
            "question": "Immediate meaning",
            "answer": "Needs urgent intervention."
        },
        {
            "question": "Delayed meaning",
            "answer": "Serious but not immediately life-threatening."
        },
        {
            "question": "Scene safety",
            "answer": "PPE first; don't enter unsafe areas during initial triage."
        },
        {
            "question": "Inclusion",
            "answer": "Everyone at an MCI, any age, symptomatic or not."
        }
    ],
    "critical": [
        {
            "id": "crit_11_1_1",
            "scenario": "First on scene at a bus rollover, you give the global command. Fifteen people walk to you.",
            "question": "What next?",
            "options": [
                {
                    "t": "Tag them Green, direct them to a designated area, then triage the non-ambulatory",
                    "f": "Correct."
                },
                {
                    "t": "Fully assess each walker first",
                    "f": "They are Green; move on."
                },
                {
                    "t": "Transport the walkers first",
                    "f": "Red goes first."
                },
                {
                    "t": "Ignore them",
                    "f": "They still need tags and a designated area."
                }
            ],
            "correct": 0,
            "explanation": "Global command clears the walking wounded.",
            "kpi": "A triage tag on every patient triaged."
        },
        {
            "id": "crit_11_1_2",
            "scenario": "A non-ambulatory woman isn't breathing. You position her airway and she starts to breathe.",
            "question": "Which tag?",
            "options": [
                {
                    "t": "Immediate (Red)",
                    "f": "Correct, per the flowchart."
                },
                {
                    "t": "Expectant (Black)",
                    "f": "Only if she stays apneic."
                },
                {
                    "t": "Delayed (Yellow)",
                    "f": "Airway-dependent patients are Red."
                },
                {
                    "t": "Minor (Green)",
                    "f": "She can't walk."
                }
            ],
            "correct": 0,
            "explanation": "Then move on.",
            "kpi": "Triage assessment completed within 30 seconds per patient."
        },
        {
            "id": "crit_11_1_3",
            "scenario": "A non-ambulatory man: RR 24, radial pulse present, follows commands.",
            "question": "Tag colour?",
            "options": [
                {
                    "t": "Delayed (Yellow)",
                    "f": "Correct."
                },
                {
                    "t": "Immediate (Red)",
                    "f": "He passes RPM."
                },
                {
                    "t": "Minor (Green)",
                    "f": "He can't walk."
                },
                {
                    "t": "Expectant (Black)",
                    "f": "He's breathing."
                }
            ],
            "correct": 0,
            "explanation": "Serious but not immediately life-threatening.",
            "kpi": "A triage tag on every patient triaged."
        },
        {
            "id": "crit_11_1_4",
            "scenario": "A non-ambulatory man with a large scalp wound: RR 32, weak radial pulse, confused.",
            "question": "Tag colour?",
            "options": [
                {
                    "t": "Immediate (Red): RR >30",
                    "f": "Correct: stop at the first failed check."
                },
                {
                    "t": "Delayed (Yellow)",
                    "f": "RR >30."
                },
                {
                    "t": "Minor (Green)",
                    "f": "He can't walk."
                },
                {
                    "t": "Expectant (Black)",
                    "f": "He's breathing."
                }
            ],
            "correct": 0,
            "explanation": "Once a check fails, tag and move on.",
            "kpi": "Triage assessment completed within 30 seconds per patient."
        },
        {
            "id": "crit_11_1_5",
            "scenario": "After an explosion, a casualty is apneic and stays apneic after airway positioning.",
            "question": "Which tag?",
            "options": [
                {
                    "t": "Expectant (Black)",
                    "f": "Correct."
                },
                {
                    "t": "Immediate (Red)",
                    "f": "Red only if breathing starts."
                },
                {
                    "t": "Start CPR",
                    "f": "Not during MCI triage."
                },
                {
                    "t": "Delayed (Yellow)",
                    "f": "Apneic."
                }
            ],
            "correct": 0,
            "explanation": "Unlikely to survive given the resources.",
            "kpi": "A triage tag on every patient triaged."
        }
    ]
};
