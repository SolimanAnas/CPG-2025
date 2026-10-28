/* ========== CPG 4.9 – Verification of Death ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c4-9",
    "title": "Verification of Death",
    "shortTitle": "4.9 Verification of Death",
    "guide": {
        "cpg": "4.9",
        "group": "resus",
        "groupLabel": "Resuscitation",
        "title": "Verification of Death",
        "lead": "Verify death against circulatory, respiratory and neurological criteria, each confirmed for at least 60 seconds where timed, with a printed asystole strip. Record the time, inform dispatch, support the family and protect any scene that may be suspicious.",
        "source": {
            "label": "CPG 4.9",
            "pages": "134–137",
            "pdf": "../pdf_sections/4_9_Verification_of_Death.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Signs of irreversible death: decomposition, obvious rigor mortis, obvious pooling (hypostasis), incineration, decapitation, injuries totally incompatible with life.",
                    "Resuscitation stopped and death declared (Starting, Stopping and Transferring CPR CPG).",
                    "An expected or unexpected death, or an obviously deceased body."
                ],
                "exclude": [
                    "Unconscious patients who do not meet these criteria."
                ]
            },
            {
                "type": "table",
                "title": "Verification criteria",
                "icon": "clipboard-list",
                "columns": [
                    "System",
                    "Confirm"
                ],
                "rows": [
                    [
                        "Circulatory",
                        "No carotid or femoral pulse for at least 60 seconds; no heart sounds for at least 60 seconds; asystole on a 4-lead ECG for at least 60 seconds"
                    ],
                    [
                        "Respiratory",
                        "No spontaneous breathing (or agonal gasps only) for at least 60 seconds; no chest sounds"
                    ],
                    [
                        "Neurological",
                        "Unresponsive to voice and pain (AVPU: U); pupils non-reactive to light"
                    ]
                ],
                "notes": [
                    "Note the time death is declared.",
                    "Agonal complexes on the ECG: wait for a flat line, then print the strip.",
                    "Occasional gasps or intermittent heart sounds soon after an expected death are not uncommon: leave the patient for 15 minutes and repeat the full procedure."
                ]
            },
            {
                "type": "list",
                "title": "Definitive signs and the scene",
                "icon": "search",
                "items": [
                    "Rigor mortis: stiffening of the muscles, typically from 2–6 hours after death.",
                    "Dependent lividity: purplish pooling of blood in dependent areas.",
                    "Catastrophic injury: decapitation, incineration, decomposition, massive crush injury.",
                    "Scene: body position, evidence of prolonged downtime; suspicious signs such as trauma or ligature marks need police."
                ]
            },
            {
                "type": "steps",
                "title": "After verification",
                "icon": "list",
                "steps": [
                    {
                        "title": "Inform dispatch",
                        "text": "Report the death declaration and request a black ambulance (deceased person ambulance); request police."
                    },
                    {
                        "title": "Document",
                        "text": "Record the death in the PCR and complete the Verification of Death Record form."
                    },
                    {
                        "title": "Family",
                        "text": "Compassionate support: explain the verification process and the next steps."
                    },
                    {
                        "title": "Police",
                        "text": "Wait for police and follow their direction regarding the remains. In suspicious circumstances preserve the scene; do not disturb the body or surroundings unless needed for safety or verification."
                    }
                ]
            },
            {
                "type": "gate",
                "title": "A life-threatening call is waiting",
                "icon": "siren",
                "question": "Do the police require you to stay on scene?",
                "items": [
                    "First tell dispatch about a suspicious death, a body in a public place, or a body unaccompanied by a responsible adult, and whether police are on scene yet."
                ],
                "no": "Respond to the life-threatening call immediately.",
                "yes": "Inform dispatch and follow dispatch instructions."
            },
            {
                "type": "list",
                "title": "Transporting a body",
                "icon": "ambulance",
                "items": [
                    "Not routine. Only when the body is recently deceased in a public place where leaving it may cause public concern; or the family is in severe distress; or as instructed by higher management.",
                    "In every case the destination must have agreed to accept the body: coordinate and confirm with dispatch before loading."
                ]
            },
            {
                "type": "tools",
                "title": "Practise with the app",
                "icon": "monitor",
                "groups": [
                    {
                        "title": "The strip you print",
                        "items": [
                            {
                                "ecg": "asystole",
                                "label": "Asystole",
                                "sub": "On the 4-lead ECG for at least 60 seconds"
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
                    "Signs of irreversible death, suspicious marks, last known alive.",
                    "Absent breathing, pulse, heart sounds and neurological response; the asystole strip.",
                    "Times: arrest (if known), CPR stopped, death declared, and each assessment point.",
                    "Scene, bystanders, police involvement, dispatch communication; reason and receiving facility if transported."
                ]
            },
            {
                "type": "list",
                "title": "Key performance indicator",
                "icon": "chart-no-axes-column",
                "items": [
                    "Documentation includes every absent vital sign, the ECG and the time of death declaration."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "4.8 Starting, Stopping and Transferring CPR",
                        "href": "c4-8.html"
                    },
                    {
                        "label": "4.5 Cardiac Arrest in Trauma",
                        "href": "c4-5.html"
                    },
                    {
                        "label": "1.2 Patient Care Documentation",
                        "href": "c1.html?section=c1s2"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "Which is a definitive sign of irreversible death?",
            "options": [
                "Rigor mortis",
                "Apnea",
                "Pulselessness",
                "Fixed pupils"
            ],
            "correct": 0,
            "explanation": "Apnea, pulselessness and fixed pupils are verification criteria, not definitive signs."
        },
        {
            "q": "How long must the pulse be absent?",
            "options": [
                "At least 60 seconds",
                "10 seconds",
                "15 minutes",
                "5 seconds"
            ],
            "correct": 0,
            "explanation": "Carotid or femoral, at least 60 seconds."
        },
        {
            "q": "Which ECG finding is required?",
            "options": [
                "Asystole on a 4-lead ECG for at least 60 seconds",
                "PEA",
                "VF",
                "Sinus bradycardia"
            ],
            "correct": 0,
            "explanation": "Print the strip."
        },
        {
            "q": "What is dependent lividity?",
            "options": [
                "Purplish pooling of blood in dependent areas",
                "Muscle stiffening",
                "Bruising from trauma",
                "Pallor of the face"
            ],
            "correct": 0,
            "explanation": "Also called hypostasis or pooling."
        },
        {
            "q": "When does rigor mortis typically begin?",
            "options": [
                "2–6 hours after death",
                "Immediately",
                "After a week",
                "After 15 minutes"
            ],
            "correct": 0,
            "explanation": "Typical onset 2–6 hours post-death."
        },
        {
            "q": "Which is NOT a definitive sign of irreversible death?",
            "options": [
                "Fixed and dilated pupils",
                "Decomposition",
                "Decapitation",
                "Incineration"
            ],
            "correct": 0,
            "explanation": "Pupils are part of verification; they are not definitive alone."
        },
        {
            "q": "You are unsure whether a sign of irreversible death is present. What do you do?",
            "options": [
                "Start CPR",
                "Declare death",
                "Wait for police",
                "Leave"
            ],
            "correct": 0,
            "explanation": "If in doubt, start CPR (Starting, Stopping and Transferring CPR CPG)."
        },
        {
            "q": "The circumstances look suspicious. What do you do?",
            "options": [
                "Preserve the scene, disturb nothing unnecessary, request police",
                "Move the body somewhere safe",
                "Clean the area for the family",
                "Transport the body"
            ],
            "correct": 0,
            "explanation": "Preserve the scene for police or coroner investigation."
        },
        {
            "q": "When may a body be transported in an ambulance?",
            "options": [
                "Recently deceased in a public place causing concern, with acceptance confirmed via dispatch",
                "Always",
                "Whenever the family asks",
                "Never in any case"
            ],
            "correct": 0,
            "explanation": "Also severe family distress or management instruction, always with an arranged destination."
        },
        {
            "q": "Which must be documented?",
            "options": [
                "Absent vital signs, the ECG strip and the time of death declaration",
                "Only the time",
                "Only the address",
                "Only the family's names"
            ],
            "correct": 0,
            "explanation": "This is the KPI."
        },
        {
            "q": "Which pupil finding is required?",
            "options": [
                "Non-reactive to light",
                "Sluggish",
                "Equal and reactive",
                "Constricted"
            ],
            "correct": 0,
            "explanation": "Absence of neurological function: pupils non-reactive, no response to pain."
        },
        {
            "q": "How long must breathing be absent?",
            "options": [
                "At least 60 seconds",
                "10 seconds",
                "5 minutes",
                "15 minutes"
            ],
            "correct": 0,
            "explanation": "No spontaneous breathing, or agonal gasps only, for at least 60 seconds."
        },
        {
            "q": "How long must heart sounds be absent?",
            "options": [
                "At least 60 seconds",
                "Not required",
                "10 seconds",
                "Only if no ECG"
            ],
            "correct": 0,
            "explanation": "Auscultate for at least 60 seconds."
        },
        {
            "q": "Gasps and faint heart sounds appear soon after an expected death. What do you do?",
            "options": [
                "Leave the patient 15 minutes and repeat the full procedure",
                "Start CPR",
                "Declare death anyway",
                "Leave the scene"
            ],
            "correct": 0,
            "explanation": "This is not uncommon after an expected death."
        },
        {
            "q": "Dispatch has a life-threatening call waiting. Police do not need you. What do you do?",
            "options": [
                "Respond to the call immediately",
                "Stay until the funeral service arrives",
                "Wait for the family",
                "Transport the body first"
            ],
            "correct": 0,
            "explanation": "Tell dispatch about special circumstances, then go."
        },
        {
            "q": "Police require you to stay. What do you do?",
            "options": [
                "Inform dispatch and follow dispatch instructions",
                "Leave anyway",
                "Transport the body",
                "Ignore the police"
            ],
            "correct": 0,
            "explanation": "Inform dispatch if directed by police to remain on scene."
        },
        {
            "q": "A body with rigor mortis and lividity. What next?",
            "options": [
                "Verify death, document and inform dispatch",
                "Start CPR",
                "Transport immediately",
                "Leave without documenting"
            ],
            "correct": 0,
            "explanation": "Definitive signs present: CPR is not required; verify and document."
        },
        {
            "q": "The ECG shows agonal complexes. What do you do?",
            "options": [
                "Wait until a flat line, then print the strip",
                "Declare death now",
                "Shock",
                "Give atropine"
            ],
            "correct": 0,
            "explanation": "The documented strip must show asystole."
        },
        {
            "q": "Which is an injury totally incompatible with life?",
            "options": [
                "Decapitation",
                "Open femur fracture",
                "Tension pneumothorax",
                "Cardiac tamponade"
            ],
            "correct": 0,
            "explanation": "The others are potentially reversible."
        },
        {
            "q": "Which must you report to dispatch?",
            "options": [
                "Suspicious death, body in a public place, or body unaccompanied by a responsible adult",
                "Only deaths over 80",
                "Only hospital deaths",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "These special circumstances must be reported."
        },
        {
            "q": "Which vehicle do you request after declaring death?",
            "options": [
                "A black ambulance (deceased person ambulance)",
                "Another emergency ambulance",
                "A helicopter",
                "None"
            ],
            "correct": 0,
            "explanation": "Inform dispatch and request the black ambulance."
        },
        {
            "q": "The family is very distressed and asks for the body to go to hospital. What do you do?",
            "options": [
                "Consider it, but only once dispatch confirms a destination will accept the body",
                "Load the body at once",
                "Refuse and leave",
                "Tell the family to call a taxi"
            ],
            "correct": 0,
            "explanation": "Severe distress can justify transport, with an arranged destination."
        },
        {
            "q": "What is the significance of definitive signs of death?",
            "options": [
                "Resuscitation is not required",
                "They give the exact time of death",
                "They show the cause",
                "None"
            ],
            "correct": 0,
            "explanation": "They confirm irreversible death."
        },
        {
            "q": "How do you document the ECG?",
            "options": [
                "Print the strip showing asystole for at least 60 seconds",
                "Describe it from memory",
                "Not needed",
                "Photograph the monitor"
            ],
            "correct": 0,
            "explanation": "Take a copy of the strip."
        },
        {
            "q": "Which form is completed in addition to the PCR?",
            "options": [
                "Verification of Death Record form",
                "Refusal form",
                "Triage tag",
                "Drug register"
            ],
            "correct": 0,
            "explanation": "Record the death in the PCR and complete the Verification of Death Record form."
        },
        {
            "q": "Which scene finding suggests a suspicious death?",
            "options": [
                "Ligature marks",
                "Medications on the bedside table",
                "A cold room",
                "Family present"
            ],
            "correct": 0,
            "explanation": "Trauma or ligature marks need police involvement."
        },
        {
            "q": "Which exclusion applies?",
            "options": [
                "Unconscious patients not meeting the inclusion criteria",
                "All elderly patients",
                "Expected deaths",
                "Bodies in public places"
            ],
            "correct": 0,
            "explanation": "They are patients, not deaths to verify."
        },
        {
            "q": "What should be avoided in suspicious circumstances?",
            "options": [
                "Disturbing the body or surroundings unless needed for safety or verification",
                "Calling the police",
                "Documenting",
                "Recording times"
            ],
            "correct": 0,
            "explanation": "Preserve the scene."
        },
        {
            "q": "A hypothermic patient is pulseless with no definitive signs of death. What applies?",
            "options": [
                "Start CPR; hypothermia is a mandatory transfer criterion",
                "Verify death",
                "Leave for 15 minutes",
                "Request a black ambulance"
            ],
            "correct": 0,
            "explanation": "Without irreversible-death signs, start CPR; hypothermia must be transferred with CPR."
        },
        {
            "q": "What is the KPI?",
            "options": [
                "Documentation of every absent vital sign, the ECG and the time of death",
                "Scene time under 10 minutes",
                "Police on scene",
                "Family informed by phone"
            ],
            "correct": 0,
            "explanation": "Complete documentation is the measure."
        }
    ],
    "flashcards": [
        {
            "question": "Definitive signs of irreversible death",
            "answer": "Decomposition, obvious rigor mortis, obvious pooling (hypostasis), incineration, decapitation, injuries totally incompatible with life."
        },
        {
            "question": "Rigor mortis",
            "answer": "Muscle stiffening, typically from 2–6 hours after death."
        },
        {
            "question": "Dependent lividity",
            "answer": "Purplish pooling of blood in dependent areas."
        },
        {
            "question": "Circulatory criteria",
            "answer": "No pulse and no heart sounds for at least 60 seconds; asystole on a 4-lead ECG for at least 60 seconds."
        },
        {
            "question": "Respiratory criteria",
            "answer": "No spontaneous breathing (or agonal gasps only) for at least 60 seconds; no chest sounds."
        },
        {
            "question": "Neurological criteria",
            "answer": "AVPU: U; pupils non-reactive to light; no reaction to pain."
        },
        {
            "question": "Pulse sites",
            "answer": "Carotid or femoral."
        },
        {
            "question": "Time to record",
            "answer": "Time of death declaration (plus arrest and CPR-stopped times if known)."
        },
        {
            "question": "Agonal ECG complexes",
            "answer": "Wait for a flat line, then print the strip."
        },
        {
            "question": "Gasps or heart sounds after an expected death",
            "answer": "Leave for 15 minutes and repeat the full procedure."
        },
        {
            "question": "After verification",
            "answer": "Inform dispatch, request a black ambulance and police, PCR and Verification of Death Record form, support the family."
        },
        {
            "question": "Report to dispatch",
            "answer": "Suspicious death, body in a public place, body unaccompanied by a responsible adult."
        },
        {
            "question": "Suspicious circumstances",
            "answer": "Preserve the scene; disturb the body only for safety or verification; police involvement."
        },
        {
            "question": "Suspicious signs",
            "answer": "Trauma, ligature marks."
        },
        {
            "question": "Life-threatening call waiting",
            "answer": "Tell dispatch the special circumstances; if police do not need you, respond immediately."
        },
        {
            "question": "Police want you to stay",
            "answer": "Inform dispatch and follow dispatch instructions."
        },
        {
            "question": "When can a body be transported?",
            "answer": "Recently deceased in a public place causing concern, severe family distress, or management instruction."
        },
        {
            "question": "Condition for any body transport",
            "answer": "An agreed receiving destination, confirmed with dispatch before loading."
        },
        {
            "question": "If in doubt about irreversible death",
            "answer": "Start CPR."
        },
        {
            "question": "Is decomposition a definitive sign?",
            "answer": "Yes."
        },
        {
            "question": "Is incineration a definitive sign?",
            "answer": "Yes."
        },
        {
            "question": "Are fixed pupils a definitive sign?",
            "answer": "No: they are a verification criterion."
        },
        {
            "question": "Catastrophic injuries incompatible with life",
            "answer": "Decapitation, incineration, decomposition, massive crush injury."
        },
        {
            "question": "Scene assessment",
            "answer": "Body position, evidence of prolonged downtime, suspicious circumstances."
        },
        {
            "question": "Family",
            "answer": "Compassionate explanation of the verification process and next steps."
        },
        {
            "question": "Exclusion",
            "answer": "Unconscious patients who do not meet the inclusion criteria."
        },
        {
            "question": "Documentation of medications",
            "answer": "Any found medications that may indicate cause of death or chronic illness."
        },
        {
            "question": "Timestamps",
            "answer": "Each assessment point, e.g. start of asystole and time of declaration."
        },
        {
            "question": "Inclusion after resuscitation",
            "answer": "Death declared after resuscitation was stopped (Starting, Stopping and Transferring CPR CPG)."
        },
        {
            "question": "KPI",
            "answer": "Every absent vital sign, the ECG and the time of death declaration documented."
        }
    ],
    "critical": [
        {
            "id": "crit_4_9_1",
            "scenario": "An elderly man is found at home, cold, with stiff limbs and purple discolouration over the dependent parts. No signs of trauma.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Verify death against the criteria, print the asystole strip, record the time and inform dispatch",
                    "f": "Correct. Definitive signs are present."
                },
                {
                    "t": "Start CPR",
                    "f": "Rigor mortis and lividity are definitive signs."
                },
                {
                    "t": "Transport to hospital",
                    "f": "Bodies are not transported routinely."
                },
                {
                    "t": "Leave without documentation",
                    "f": "Document all criteria and the time."
                }
            ],
            "correct": 0,
            "explanation": "Confirm the circulatory, respiratory and neurological criteria, complete the PCR and Verification of Death Record form, request the black ambulance and police, and support the family.",
            "kpi": "Document every absent vital sign, the ECG and the time of death declaration."
        },
        {
            "id": "crit_4_9_2",
            "scenario": "A woman was last seen alive an hour ago. No rigor, no lividity. The monitor shows the strip below.",
            "ecg": "asystole",
            "question": "What is appropriate?",
            "options": [
                {
                    "t": "Start CPR and follow the cardiac arrest guidelines",
                    "f": "Correct. No sign of irreversible death: resuscitate."
                },
                {
                    "t": "Verify death now",
                    "f": "Asystole alone is not a sign of irreversible death."
                },
                {
                    "t": "Wait for police",
                    "f": "Start CPR."
                },
                {
                    "t": "Leave for 15 minutes",
                    "f": "That applies to expected deaths after verification has started."
                }
            ],
            "correct": 0,
            "explanation": "Without definitive signs, start CPR (Starting, Stopping and Transferring CPR CPG).",
            "kpi": "Document every absent vital sign, the ECG and the time of death declaration."
        },
        {
            "id": "crit_4_9_3",
            "scenario": "You have verified an expected death at home; the family is present and police are not needed. Dispatch reports a life-threatening call nearby.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Tell dispatch the circumstances, then respond to the call",
                    "f": "Correct."
                },
                {
                    "t": "Stay until the black ambulance arrives",
                    "f": "A life-threatening call takes priority if police do not need you."
                },
                {
                    "t": "Take the body with you",
                    "f": "Transport is not routine."
                },
                {
                    "t": "Ignore dispatch",
                    "f": "Communicate with dispatch."
                }
            ],
            "correct": 0,
            "explanation": "Make sure dispatch knows any special circumstances; respond immediately if police do not require you on scene.",
            "kpi": "Document every absent vital sign, the ECG and the time of death declaration."
        },
        {
            "id": "crit_4_9_4",
            "scenario": "A body is found with a ligature around the neck.",
            "question": "What is your priority after confirming death?",
            "options": [
                {
                    "t": "Preserve the scene, request police, disturb nothing unnecessarily, and document",
                    "f": "Correct."
                },
                {
                    "t": "Remove the ligature and tidy the room",
                    "f": "Do not disturb the scene unless needed for safety or verification."
                },
                {
                    "t": "Transport the body",
                    "f": "Wait for police."
                },
                {
                    "t": "Leave before police arrive",
                    "f": "Inform dispatch; follow police direction."
                }
            ],
            "correct": 0,
            "explanation": "Suspicious circumstances need police; preserve the scene for police or coroner investigation and record your rationale.",
            "kpi": "Document every absent vital sign, the ECG and the time of death declaration."
        },
        {
            "id": "crit_4_9_5",
            "scenario": "After an expected death, the family is in severe distress and insists the body go to hospital. Nothing is suspicious.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Explain; transport only once dispatch confirms a destination will accept the body",
                    "f": "Correct."
                },
                {
                    "t": "Load the body immediately",
                    "f": "A receiving arrangement must be in place first."
                },
                {
                    "t": "Refuse and leave",
                    "f": "Severe distress can justify transport."
                },
                {
                    "t": "Tell them to take the body themselves",
                    "f": "Coordinate through dispatch."
                }
            ],
            "correct": 0,
            "explanation": "Severe family distress is one of the circumstances that allow transport, with acceptance confirmed via dispatch before loading.",
            "kpi": "Document every absent vital sign, the ECG and the time of death declaration."
        }
    ]
};
