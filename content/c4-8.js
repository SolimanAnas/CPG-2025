/* ========== CPG 4.8 – Starting, Stopping and Transferring CPR ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c4-8",
    "title": "Starting, Stopping and Transferring CPR",
    "shortTitle": "4.8 Starting/Stopping CPR",
    "guide": {
        "cpg": "4.8",
        "group": "resus",
        "groupLabel": "Resuscitation",
        "title": "Starting, Stopping and Transferring CPR",
        "lead": "If in doubt, start CPR. Once started, continue for at least 20 minutes. Five groups must always be transferred with CPR running. Only a Paramedic or higher may stop, and only when every termination criterion is met and the team agrees.",
        "source": {
            "label": "CPG 4.8",
            "pages": "125–131",
            "pdf": "../pdf_sections/4_8_Starting_Stopping_and_Transferring_CPR.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Cardiac arrest: unresponsive with no signs of life (no pulse, no breathing or agonal gasps), or suspected PEA, VF, VT or asystole.",
                    "Any decision to start, continue or stop CPR."
                ],
                "exclude": [
                    "None noted."
                ]
            },
            {
                "type": "list",
                "title": "Assess",
                "icon": "stethoscope",
                "items": [
                    "Unresponsive (AVPU: U); no carotid or femoral pulse for 5–10 seconds; no normal breathing or agonal gasps only.",
                    "Monitor the rhythm: VF, VT, PEA or asystole.",
                    "Bystander CPR: present or not, and its quality.",
                    "Time of arrest, or when last seen alive."
                ]
            },
            {
                "type": "steps",
                "title": "Starting CPR",
                "icon": "heart-pulse",
                "steps": [
                    {
                        "title": "Signs of irreversible death",
                        "level": "EMT",
                        "text": "Any one present: CPR not required. If unsure whether a sign is present, start CPR.",
                        "items": [
                            "Decomposition; obvious rigor mortis; obvious pooling (hypostasis).",
                            "Incineration; decapitation; injuries totally incompatible with life."
                        ]
                    },
                    {
                        "title": "Medical cause",
                        "text": "Start CPR."
                    },
                    {
                        "title": "Trauma, witnessed by EMS",
                        "text": "Start CPR."
                    },
                    {
                        "title": "Trauma, unwitnessed by EMS",
                        "level": "EMT",
                        "text": "CPR not required only if <b>all</b> are present: blunt or penetrating trauma; no spontaneous movement; no pupillary response; apneic and pulseless; ECG with no organized rhythm. Otherwise start CPR."
                    },
                    {
                        "title": "Once started",
                        "text": "Continue for at least 20 minutes. Request ALS back-up routinely for every patient receiving CPR."
                    }
                ]
            },
            {
                "type": "gate",
                "title": "Transferring CPR to hospital",
                "icon": "ambulance",
                "question": "Mandatory transfer criteria: is any present?",
                "items": [
                    "Age &lt;18 years.",
                    "Drowning.",
                    "Hypothermia.",
                    "Pregnancy.",
                    "A clearly identified reversible cause that cannot be corrected prehospital."
                ],
                "no": "Continue CPR for at least 20 minutes; then transfer, or a Paramedic may consider stopping.",
                "yes": "Transfer to hospital with CPR running, after initial resuscitation on scene."
            },
            {
                "type": "groups",
                "title": "Before and during transfer",
                "icon": "list",
                "groups": [
                    {
                        "title": "On scene first",
                        "items": [
                            "Airway, BVM ventilation, compressions, defibrillation if needed, IV/IO and drugs, reversal of identified causes.",
                            "If a procedure (e.g. IV access) is difficult, the crew balances its time against its benefit."
                        ]
                    },
                    {
                        "title": "Go early",
                        "items": [
                            "When fast arrival will clearly help, e.g. arrest from blood loss.",
                            "Trauma arrest with CPR started: transfer and keep scene time short."
                        ]
                    },
                    {
                        "title": "During transfer",
                        "items": [
                            "Keep resuscitation effective through extrication and transport: compressions, airway, ventilation, drugs.",
                            "If the family asks for transfer to hospital, transfer is appropriate."
                        ]
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Who may stop CPR",
                "icon": "ban",
                "groups": [
                    {
                        "title": "Paramedic, Advanced Paramedic or Emergency Physician",
                        "items": [
                            "Once CPR has started, only these clinicians may stop it."
                        ]
                    },
                    {
                        "title": "EMT",
                        "items": [
                            "Cannot stop resuscitation: transfer, or wait for ALS.",
                            "If ALS is far away and more hands are needed for effective CPR during extrication and transfer, request another BLS ambulance."
                        ]
                    }
                ]
            },
            {
                "type": "steps",
                "title": "Stopping CPR (P and above)",
                "icon": "clipboard-list",
                "steps": [
                    {
                        "title": "Medical arrest",
                        "level": "P",
                        "text": "May stop when <b>every</b> criterion below is met."
                    },
                    {
                        "title": "Trauma arrest",
                        "level": "P",
                        "text": "Normally transfer. Only in uncommon circumstances (e.g. difficult extrication) may a Paramedic stop, using the same criteria."
                    },
                    {
                        "title": "Termination criteria",
                        "items": [
                            "Not in a mandatory transfer group.",
                            "No pulse (carotid or femoral), no respirations, no heart sounds.",
                            "Appropriate ALS interventions given for the rhythm.",
                            "No ROSC after 20 minutes of resuscitation.",
                            "Rhythm is asystole, and EtCO<sub>2</sub> is less than 20 mmHg.",
                            "No neurological function: non-reactive pupils, no response to pain, no spontaneous movement.",
                            "All clinicians involved agree."
                        ]
                    },
                    {
                        "title": "Not terminated",
                        "text": "Transfer to hospital."
                    }
                ]
            },
            {
                "type": "tools",
                "title": "Practise with the app",
                "icon": "monitor",
                "groups": [
                    {
                        "title": "Only asystole meets the rhythm criterion",
                        "items": [
                            {
                                "ecg": "asystole",
                                "label": "Asystole",
                                "sub": "Can meet the termination criteria"
                            },
                            {
                                "ecg": "pea",
                                "label": "PEA",
                                "sub": "Organized rhythm: does not meet them"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "list",
                "title": "Documentation",
                "icon": "notebook-pen",
                "items": [
                    "Arrest type, cause if known, witnessed or not, bystander CPR, last seen alive.",
                    "Initial rhythm, EtCO<sub>2</sub> values, response to treatment, ROSC signs.",
                    "Time-stamped CPR start and stop, shocks, drugs, rhythm changes; airway and ventilation; mechanical CPR.",
                    "Rationale for transferring or stopping, the consensus to stop, and the irreversible-death signs or futility criteria met."
                ]
            },
            {
                "type": "list",
                "title": "Key performance indicator",
                "icon": "chart-no-axes-column",
                "items": [
                    "All information behind the decision to start, stop or transfer CPR is in the patient care report."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "4.3 Adult Cardiac Arrest",
                        "href": "c4-3.html"
                    },
                    {
                        "label": "4.5 Cardiac Arrest in Trauma",
                        "href": "c4-5.html"
                    },
                    {
                        "label": "4.9 Verification of Death",
                        "href": "c4-9.html"
                    },
                    {
                        "label": "8.7 Drowning",
                        "href": "c8-7.html"
                    },
                    {
                        "label": "8.9 Hypothermia",
                        "href": "c8-9.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "Which finding means CPR is not required?",
            "options": [
                "Obvious rigor mortis",
                "Hypothermia",
                "Agonal gasps",
                "PEA"
            ],
            "correct": 0,
            "explanation": "Any one sign of irreversible death: decomposition, obvious rigor mortis, obvious pooling, incineration, decapitation or injuries totally incompatible with life."
        },
        {
            "q": "In an unwitnessed trauma arrest, which finding means you must start CPR?",
            "options": [
                "Reactive pupils",
                "Blunt trauma",
                "No spontaneous movement",
                "No organized rhythm"
            ],
            "correct": 0,
            "explanation": "All five futility criteria must be met to withhold CPR."
        },
        {
            "q": "Once started, how long should CPR generally continue?",
            "options": [
                "At least 20 minutes",
                "5 minutes",
                "Until the first rhythm check",
                "As long as the family wants"
            ],
            "correct": 0,
            "explanation": "CPR should generally continue for at least 20 minutes."
        },
        {
            "q": "Which patient must be transferred with ongoing CPR?",
            "options": [
                "A drowning victim",
                "A 65-year-old in asystole",
                "A witnessed VF arrest",
                "Any patient over 80"
            ],
            "correct": 0,
            "explanation": "Mandatory: <18 years, drowning, hypothermia, pregnancy, or an uncorrectable reversible cause."
        },
        {
            "q": "Who may stop resuscitation once started?",
            "options": [
                "Paramedic, Advanced Paramedic or Emergency Physician",
                "EMT",
                "Any trained rescuer",
                "Police"
            ],
            "correct": 0,
            "explanation": "EMTs cannot stop resuscitation."
        },
        {
            "q": "What EtCO₂ is part of the termination criteria?",
            "options": [
                "Less than 20 mmHg",
                "Less than 40 mmHg",
                "More than 20 mmHg",
                "Not used"
            ],
            "correct": 0,
            "explanation": "EtCO₂ less than 20 mmHg, with asystole and the other criteria."
        },
        {
            "q": "After how long without ROSC may a Paramedic consider stopping?",
            "options": [
                "20 minutes",
                "5 minutes",
                "60 minutes",
                "Never"
            ],
            "correct": 0,
            "explanation": "No ROSC after 20 minutes of resuscitation, with all other criteria met."
        },
        {
            "q": "Which rhythm is required to stop CPR?",
            "options": [
                "Asystole",
                "PEA",
                "VF",
                "VT"
            ],
            "correct": 0,
            "explanation": "The rhythm must be asystole."
        },
        {
            "q": "Termination criteria are met but the family asks for transfer. What do you do?",
            "options": [
                "Transfer to hospital",
                "Stop CPR anyway",
                "Leave the scene",
                "Ask the police to decide"
            ],
            "correct": 0,
            "explanation": "If the family requests transfer, it is appropriate to transfer."
        },
        {
            "q": "Which is NOT a mandatory transfer criterion?",
            "options": [
                "Advanced age",
                "Age under 18",
                "Hypothermia",
                "Pregnancy"
            ],
            "correct": 0,
            "explanation": "Age is a criterion only below 18."
        },
        {
            "q": "Difficult extrication of a trauma arrest. Who may stop resuscitation?",
            "options": [
                "A Paramedic or higher, using the medical criteria",
                "An EMT",
                "Any crew member",
                "Nobody: always transfer"
            ],
            "correct": 0,
            "explanation": "In uncommon circumstances a Paramedic may stop, using the same criteria."
        },
        {
            "q": "Why document bystander CPR?",
            "options": [
                "Its presence and quality are part of the assessment",
                "It is optional",
                "It decides the hospital",
                "It replaces the rhythm"
            ],
            "correct": 0,
            "explanation": "Note the presence or absence of bystander CPR, and its quality."
        },
        {
            "q": "25-year-old, medical arrest, no reversible cause: asystole, EtCO₂ 15 mmHg, no heart sounds, no neurological function after 20 minutes of full ALS; the team agrees.",
            "options": [
                "A Paramedic may stop resuscitation",
                "Must transfer: under 30",
                "Give more adrenaline indefinitely",
                "An EMT may stop"
            ],
            "correct": 0,
            "explanation": "All termination criteria are met and the patient is not in a mandatory transfer group."
        },
        {
            "q": "A 3-year-old has no ROSC after 25 minutes. What do you do?",
            "options": [
                "Continue CPR and transfer",
                "Stop CPR",
                "Leave the child at home",
                "Wait for police"
            ],
            "correct": 0,
            "explanation": "Age <18 is a mandatory transfer criterion."
        },
        {
            "q": "You are an EMT crew and ALS is far away. What are your options?",
            "options": [
                "Transfer with CPR or wait for ALS; request another BLS ambulance if more staff are needed",
                "Stop CPR after 20 minutes",
                "Leave CPR to bystanders",
                "Stop if EtCO₂ is low"
            ],
            "correct": 0,
            "explanation": "EMTs cannot stop resuscitation."
        },
        {
            "q": "Which neurological finding is a termination criterion?",
            "options": [
                "No response to pain",
                "Reactive pupils",
                "Spontaneous movement",
                "Withdrawal to pain"
            ],
            "correct": 0,
            "explanation": "No neurological function: non-reactive pupils, no response to pain, no spontaneous movement."
        },
        {
            "q": "A hypothermic patient in arrest: no ROSC after 30 minutes. What do you do?",
            "options": [
                "Continue CPR and transfer",
                "Stop CPR",
                "Stop if asystole",
                "Wait for rewarming on scene"
            ],
            "correct": 0,
            "explanation": "Hypothermia is a mandatory transfer criterion."
        },
        {
            "q": "A trauma arrest with CPR started. What is the usual plan?",
            "options": [
                "Transfer to hospital with minimal scene time",
                "Twenty minutes on scene, then stop",
                "Wait for ALS on scene",
                "Stop CPR after 5 minutes"
            ],
            "correct": 0,
            "explanation": "Under normal circumstances transfer, keeping scene time short."
        },
        {
            "q": "ROSC occurs during transfer. What next?",
            "options": [
                "Continue to hospital with post-arrest care",
                "Return to scene",
                "Stop and wait for ALS",
                "Stop monitoring"
            ],
            "correct": 0,
            "explanation": "Continue with post-cardiac arrest care (Post Cardiac Arrest Care CPG)."
        },
        {
            "q": "Which is a requirement for stopping CPR?",
            "options": [
                "All clinicians involved agree",
                "Family consent in writing",
                "Patient age over 80",
                "Police present"
            ],
            "correct": 0,
            "explanation": "All clinicians must agree that stopping is appropriate."
        },
        {
            "q": "An EMS-witnessed trauma arrest. What do you do?",
            "options": [
                "Start CPR",
                "Assess futility criteria first",
                "Withhold CPR",
                "Wait for ALS"
            ],
            "correct": 0,
            "explanation": "Witnessed by EMS: start CPR."
        },
        {
            "q": "What must be documented if CPR is stopped?",
            "options": [
                "Rationale, consensus, times, and the signs or criteria met",
                "Only the time",
                "Only the rhythm",
                "Nothing extra"
            ],
            "correct": 0,
            "explanation": "Include the irreversible-death signs or all futility criteria met."
        },
        {
            "q": "Arrest from massive blood loss: what does the CPG advise?",
            "options": [
                "Prioritise fast transport to hospital",
                "Twenty minutes on scene first",
                "Stop CPR at once",
                "Wait for ALS on scene"
            ],
            "correct": 0,
            "explanation": "Prioritise transport when fast arrival clearly benefits the patient."
        },
        {
            "q": "Is an EMT ever allowed to stop CPR?",
            "options": [
                "No",
                "Yes, after 20 minutes",
                "Yes, in asystole",
                "Yes, with family consent"
            ],
            "correct": 0,
            "explanation": "EMTs must transfer or wait for ALS."
        },
        {
            "q": "What is EtCO₂'s role in stopping CPR?",
            "options": [
                "EtCO₂ below 20 mmHg is one of the criteria",
                "It is not used",
                "EtCO₂ above 40 mmHg supports stopping",
                "It replaces the 20-minute rule"
            ],
            "correct": 0,
            "explanation": "It is one criterion among all the others."
        },
        {
            "q": "A 20-year-old drowning victim: no ROSC after 25 minutes of ALS. What do you do?",
            "options": [
                "Continue CPR and transfer",
                "Stop CPR",
                "Stop if asystole",
                "Ask the family"
            ],
            "correct": 0,
            "explanation": "Drowning (and age under 18) are mandatory transfer criteria; drowning applies here."
        },
        {
            "q": "You are unsure whether a sign of irreversible death is present. What do you do?",
            "options": [
                "Start CPR",
                "Do not start CPR",
                "Wait for police",
                "Call the family doctor"
            ],
            "correct": 0,
            "explanation": "If in doubt, start CPR."
        },
        {
            "q": "Which is NOT a termination criterion?",
            "options": [
                "Advanced age",
                "No ROSC after 20 minutes",
                "Asystole",
                "EtCO₂ less than 20 mmHg"
            ],
            "correct": 0,
            "explanation": "Age is not a criterion."
        },
        {
            "q": "PEA persists after 20 minutes of ALS with EtCO₂ 15 mmHg. Can a Paramedic stop?",
            "options": [
                "No: the rhythm must be asystole",
                "Yes",
                "Yes, if the family agrees",
                "Only an EMT can decide"
            ],
            "correct": 0,
            "explanation": "Asystole is required; otherwise transfer."
        },
        {
            "q": "Which sign of irreversible death appears in this CPG but not in the trauma CPG?",
            "options": [
                "Obvious pooling (hypostasis)",
                "Decapitation",
                "Incineration",
                "Rigor mortis"
            ],
            "correct": 0,
            "explanation": "4.8 adds obvious pooling (hypostasis) and injuries totally incompatible with life."
        },
        {
            "q": "What does the KPI require?",
            "options": [
                "All information behind the start, stop or transfer decision in the patient care report",
                "Transport within 10 minutes",
                "Every arrest stopped at 20 minutes",
                "A physician on scene"
            ],
            "correct": 0,
            "explanation": "Capture the decision and its rationale."
        }
    ],
    "flashcards": [
        {
            "question": "When is CPR not required?",
            "answer": "Any sign of irreversible death; or an unwitnessed trauma arrest meeting all five futility criteria."
        },
        {
            "question": "Signs of irreversible death",
            "answer": "Decomposition, obvious rigor mortis, obvious pooling (hypostasis), incineration, decapitation, injuries totally incompatible with life."
        },
        {
            "question": "Trauma futility criteria",
            "answer": "Blunt or penetrating trauma; no spontaneous movement; no pupillary response; apneic and pulseless; no organized rhythm. All five."
        },
        {
            "question": "If in doubt",
            "answer": "Start CPR."
        },
        {
            "question": "Minimum duration once started",
            "answer": "Generally at least 20 minutes."
        },
        {
            "question": "Mandatory transfer criteria",
            "answer": "Age <18, drowning, hypothermia, pregnancy, a reversible cause that cannot be corrected prehospital."
        },
        {
            "question": "Who may stop CPR?",
            "answer": "Paramedic, Advanced Paramedic or Emergency Physician."
        },
        {
            "question": "Can an EMT stop CPR?",
            "answer": "No. Transfer, or wait for ALS."
        },
        {
            "question": "ALS far away, not enough hands",
            "answer": "Request another BLS ambulance."
        },
        {
            "question": "Termination: circulation",
            "answer": "No pulse (carotid or femoral), no respirations, no heart sounds."
        },
        {
            "question": "Termination: treatment and time",
            "answer": "Appropriate ALS for the rhythm, and no ROSC after 20 minutes."
        },
        {
            "question": "Termination: rhythm and EtCO₂",
            "answer": "Asystole, and EtCO₂ less than 20 mmHg."
        },
        {
            "question": "Termination: neurology",
            "answer": "Non-reactive pupils, no response to pain, no spontaneous movement."
        },
        {
            "question": "Termination: team",
            "answer": "All clinicians involved agree."
        },
        {
            "question": "Not terminated",
            "answer": "Transfer to hospital."
        },
        {
            "question": "Trauma arrest, CPR started",
            "answer": "Normally transfer with minimal scene time; a Paramedic may stop only in uncommon circumstances (e.g. difficult extrication)."
        },
        {
            "question": "Family asks for transfer",
            "answer": "Transfer is appropriate."
        },
        {
            "question": "Early transport",
            "answer": "When fast arrival clearly helps, e.g. arrest from blood loss."
        },
        {
            "question": "Before transfer",
            "answer": "Airway, BVM, compressions, defibrillation, IV/IO and drugs, reversal of identified causes."
        },
        {
            "question": "Difficult procedure before transfer",
            "answer": "The crew weighs the time it takes against its benefit."
        },
        {
            "question": "During transfer",
            "answer": "Keep compressions, airway, ventilation and drugs effective through extrication and transport."
        },
        {
            "question": "ALS back-up",
            "answer": "Request routinely for every patient receiving CPR."
        },
        {
            "question": "PEA after 20 minutes",
            "answer": "Does not meet the termination criteria (asystole required): transfer."
        },
        {
            "question": "Pulse and breathing check",
            "answer": "Carotid or femoral pulse for 5–10 seconds; no normal breathing or agonal gasps."
        },
        {
            "question": "History to note",
            "answer": "Bystander CPR and its quality; time of arrest or last seen alive."
        },
        {
            "question": "EMS-witnessed trauma arrest",
            "answer": "Start CPR."
        },
        {
            "question": "Documentation when stopping",
            "answer": "Time-stamped actions, consensus, rationale, and the signs or criteria met."
        },
        {
            "question": "Rhythms to identify",
            "answer": "VF, VT, PEA, asystole."
        },
        {
            "question": "Exclusion criteria",
            "answer": "None noted."
        },
        {
            "question": "KPI",
            "answer": "All information behind starting, stopping or transferring CPR is in the patient care report."
        }
    ],
    "critical": [
        {
            "id": "crit_4_8_1",
            "scenario": "A 75-year-old man collapsed at home, unwitnessed. A neighbour is doing CPR. No signs of irreversible death. The monitor shows asystole.",
            "ecg": "asystole",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Continue CPR and request ALS back-up",
                    "f": "Correct. A medical arrest without irreversible-death signs gets CPR."
                },
                {
                    "t": "Do not start: asystole and unwitnessed",
                    "f": "Futility criteria are for trauma; termination needs 20 minutes of ALS and a Paramedic."
                },
                {
                    "t": "Transfer immediately without CPR",
                    "f": "Resuscitate on scene."
                },
                {
                    "t": "Pronounce death",
                    "f": "No sign of irreversible death is present."
                }
            ],
            "correct": 0,
            "explanation": "Medical cause, no irreversible-death signs: start CPR, continue for at least 20 minutes, request ALS routinely.",
            "kpi": "All information behind the decision to start, stop or transfer CPR is in the patient care report."
        },
        {
            "id": "crit_4_8_2",
            "scenario": "A 45-year-old woman, medical arrest. After 20 minutes of full ALS: asystole, EtCO₂ 12 mmHg, no heart sounds, fixed pupils, no response to pain. Not pregnant, not hypothermic, not drowned, no uncorrectable reversible cause. Everyone agrees. You are a Paramedic.",
            "question": "What is appropriate?",
            "options": [
                {
                    "t": "Stop resuscitation and document the criteria and consensus",
                    "f": "Correct. Every criterion is met."
                },
                {
                    "t": "Must transfer: she is under 50",
                    "f": "Age matters only below 18."
                },
                {
                    "t": "Continue another 20 minutes routinely",
                    "f": "Termination is permitted when all criteria are met."
                },
                {
                    "t": "Ask the EMT to decide",
                    "f": "Only P, AP or an Emergency Physician may stop."
                }
            ],
            "correct": 0,
            "explanation": "All termination criteria are met. Document the time, rationale and consensus.",
            "kpi": "All information behind the decision to start, stop or transfer CPR is in the patient care report."
        },
        {
            "id": "crit_4_8_3",
            "scenario": "A 2-year-old in cardiac arrest: no ROSC after 25 minutes; asystole; EtCO₂ 10 mmHg.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Continue CPR and transfer to hospital",
                    "f": "Correct. Age <18 is a mandatory transfer criterion."
                },
                {
                    "t": "Stop: all other criteria are met",
                    "f": "Children are always transferred."
                },
                {
                    "t": "Stop if the parents agree",
                    "f": "Mandatory transfer applies."
                },
                {
                    "t": "Wait on scene for ALS",
                    "f": "Transfer, meeting ALS en route."
                }
            ],
            "correct": 0,
            "explanation": "Mandatory transfer: age <18, drowning, hypothermia, pregnancy, uncorrectable reversible cause.",
            "kpi": "All information behind the decision to start, stop or transfer CPR is in the patient care report."
        },
        {
            "id": "crit_4_8_4",
            "scenario": "You are an EMT crew. CPR has run for 20 minutes without ROSC. ALS is still far away and the patient is upstairs.",
            "question": "What is your plan?",
            "options": [
                {
                    "t": "Continue CPR; transfer or wait for ALS; request another BLS ambulance for extrication",
                    "f": "Correct."
                },
                {
                    "t": "Stop CPR at 20 minutes",
                    "f": "EMTs cannot stop resuscitation."
                },
                {
                    "t": "Stop if asystole and EtCO₂ is low",
                    "f": "Only P and above may apply the termination criteria."
                },
                {
                    "t": "Carry the patient down without CPR",
                    "f": "Maintain effective CPR during extrication."
                }
            ],
            "correct": 0,
            "explanation": "EMTs must transfer or wait for ALS; request extra staff to keep CPR effective during extrication.",
            "kpi": "All information behind the decision to start, stop or transfer CPR is in the patient care report."
        },
        {
            "id": "crit_4_8_5",
            "scenario": "A 30-year-old woman, 32 weeks pregnant, in cardiac arrest. After 20 minutes of ALS there is no ROSC; asystole; EtCO₂ 15 mmHg.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Continue CPR and transfer",
                    "f": "Correct. Pregnancy is a mandatory transfer criterion."
                },
                {
                    "t": "Stop resuscitation",
                    "f": "She is in a mandatory transfer group."
                },
                {
                    "t": "Stop if the husband agrees",
                    "f": "Transfer is mandatory."
                },
                {
                    "t": "Wait on scene for ALS",
                    "f": "Transfer with ongoing CPR."
                }
            ],
            "correct": 0,
            "explanation": "Pregnancy: transfer to hospital with effective CPR running.",
            "kpi": "All information behind the decision to start, stop or transfer CPR is in the patient care report."
        }
    ]
};
