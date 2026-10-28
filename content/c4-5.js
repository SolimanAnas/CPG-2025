/* ========== CPG 4.5 – Cardiac Arrest in Trauma ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c4-5",
    "title": "Cardiac Arrest in Trauma",
    "shortTitle": "4.5 Trauma Cardiac Arrest",
    "guide": {
        "cpg": "4.5",
        "group": "resus",
        "groupLabel": "Resuscitation",
        "title": "Cardiac Arrest in Trauma",
        "lead": "Start CPR at once in any arrest EMS witnesses. In an unwitnessed arrest, withhold CPR only for injuries incompatible with life or when all five futility signs are present. Otherwise treat the reversible causes (bleeding, pelvis, chest) and move: meet ALS en route.",
        "source": {
            "label": "CPG 4.5",
            "pages": "111–114",
            "pdf": "../pdf_sections/4_5_Cardiac_Arrest_in_Trauma.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Adults and children in traumatic cardiac arrest: unresponsive with no signs of life (no pulse, no breathing or agonal gasps) after significant trauma."
                ],
                "exclude": [
                    "Non-traumatic cardiac arrest."
                ]
            },
            {
                "type": "steps",
                "title": "Confirm the arrest",
                "icon": "stethoscope",
                "steps": [
                    {
                        "title": "Primary survey",
                        "text": "As per the Universal Care CPG. Unresponsive to voice and pain (AVPU: U)."
                    },
                    {
                        "title": "Pulse and breathing",
                        "text": "No carotid or femoral pulse for 5–10 seconds; no normal breathing, or agonal gasps only, for 5–10 seconds."
                    },
                    {
                        "title": "Mechanism",
                        "text": "Blunt or penetrating; chest, abdomen or head. Look for injuries likely to have caused the arrest: tension pneumothorax, massive hemothorax, cardiac tamponade."
                    },
                    {
                        "title": "Triage",
                        "text": "Every cardiac arrest is Red priority (Patient Triage Categories CPG)."
                    }
                ]
            },
            {
                "type": "pathways",
                "title": "Start CPR or not",
                "icon": "circle-help",
                "paths": [
                    {
                        "title": "EMS-witnessed arrest",
                        "tone": "shock",
                        "steps": [
                            {
                                "text": "Start CPR immediately."
                            }
                        ]
                    },
                    {
                        "title": "Unwitnessed arrest",
                        "tone": "noshock",
                        "steps": [
                            {
                                "text": "Any injury incompatible with life (decapitation, incineration, body decomposition, rigor mortis): CPR not required.",
                                "level": "EMT"
                            },
                            {
                                "text": "Otherwise, if <b>all</b> five futility signs are present: CPR not required.",
                                "level": "EMT"
                            },
                            {
                                "text": "Any futility sign absent: start CPR."
                            }
                        ]
                    }
                ],
                "after": "Start CPR when the mechanism of injury does not match the clinical picture: the arrest may be medical."
            },
            {
                "type": "gate",
                "title": "Futility signs (unwitnessed arrest)",
                "icon": "clipboard-list",
                "question": "Are all five present?",
                "items": [
                    "Victim of blunt or penetrating trauma.",
                    "No spontaneous movement (unresponsive on AVPU).",
                    "No pupillary response (pupils non-reactive to light).",
                    "Apneic and pulseless.",
                    "ECG shows no organized rhythm (asystole)."
                ],
                "no": "Start CPR.",
                "yes": "CPR not required."
            },
            {
                "type": "steps",
                "title": "Resuscitation",
                "icon": "heart-pulse",
                "steps": [
                    {
                        "title": "Control external bleeding",
                        "text": "Direct pressure, wound packing or tourniquets. Uncontrolled hemorrhage is a common reversible cause and must be addressed rapidly."
                    },
                    {
                        "title": "ALS back-up",
                        "text": "Consider whenever resuscitation is started. Prioritise transfer: do not wait on scene; meet the ALS unit en route."
                    },
                    {
                        "title": "Pelvic binder",
                        "level": "EMT",
                        "text": "Place before compressions start, within 30 seconds of finding no pulse."
                    },
                    {
                        "title": "Bilateral needle chest decompression",
                        "level": "P"
                    },
                    {
                        "title": "CPR",
                        "text": "As per the Adult or Pediatric Cardiac Arrest CPG."
                    },
                    {
                        "title": "Tranexamic acid",
                        "level": "P",
                        "text": "Witnessed arrest with signs of massive hemorrhage.",
                        "doses": [
                            {
                                "drug": "Tranexamic acid",
                                "dose": "1 g IV/IO",
                                "note": "Adults only (flowchart). As early as possible, ideally within 3 hours of injury.",
                                "level": "P"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Pelvic binder and decompression",
                "icon": "shield",
                "groups": [
                    {
                        "title": "Indication",
                        "items": [
                            "The cause of arrest is not clear, e.g. polytrauma in a road traffic collision: consider both the binder and bilateral decompression."
                        ]
                    },
                    {
                        "title": "Contraindication",
                        "items": [
                            "A clear injury that will not cause a pelvic fracture or pneumothorax, e.g. arterial limb bleeding or isolated traumatic brain injury."
                        ]
                    }
                ]
            },
            {
                "type": "groups",
                "title": "TXA in traumatic arrest",
                "icon": "pill",
                "groups": [
                    {
                        "title": "Give when",
                        "items": [
                            "Not routine in arrest: only with high suspicion of massive hemorrhage and achievable ROSC.",
                            "Witnessed arrest, and signs of massive hemorrhage (penetrating trauma, major limb injury, severe pelvic fracture)."
                        ]
                    },
                    {
                        "title": "Do not give when",
                        "items": [
                            "Unwitnessed arrest with prolonged downtime.",
                            "Clearly non-survivable injury (massive head injury, decapitation, hemicorporectomy).",
                            "Hemorrhage is not the suspected cause (e.g. isolated TBI)."
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
                        "title": "Futility sign: no organized rhythm",
                        "items": [
                            {
                                "ecg": "asystole",
                                "label": "Asystole",
                                "sub": "One of the five signs; all five are needed to withhold CPR"
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
                    "Mechanism (blunt, penetrating), injury pattern, signs of irreversible death, futility criteria met or unmet.",
                    "Initial rhythm, responsiveness, pulse, breathing, pupils; GCS if regained.",
                    "Pelvic binder, bilateral decompression, bleeding control, IV/IO, airway and drugs.",
                    "ECG strips, times CPR started and stopped, transfer or termination rationale."
                ]
            },
            {
                "type": "list",
                "title": "Key performance indicators",
                "icon": "chart-no-axes-column",
                "items": [
                    "CPR started immediately for traumatic arrests witnessed by EMS.",
                    "Back-up requested (where appropriate) for all traumatic cardiac arrests."
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
                        "label": "4.4 Pediatric Cardiac Arrest",
                        "href": "c4-4.html"
                    },
                    {
                        "label": "4.8 Starting, Stopping and Transferring CPR",
                        "href": "c4-8.html"
                    },
                    {
                        "label": "7.1 General Trauma Management",
                        "href": "c7-1.html"
                    },
                    {
                        "label": "1.3 Patient Triage Categories",
                        "href": "c1.html?section=c1s3"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "EMS witnesses a trauma patient go into cardiac arrest. What do you do?",
            "options": [
                "Start CPR immediately",
                "Check the futility signs first",
                "Apply a pelvic binder, then decide",
                "Wait for ALS"
            ],
            "correct": 0,
            "explanation": "Any arrest witnessed by ambulance staff gets CPR at once; the futility assessment applies only to unwitnessed arrests."
        },
        {
            "q": "Which is an injury incompatible with life in this CPG?",
            "options": [
                "Decapitation",
                "Fixed dilated pupils",
                "Open femur fracture",
                "Agonal gasps"
            ],
            "correct": 0,
            "explanation": "Decapitation, incineration, body decomposition and rigor mortis: any one means CPR is not required in an unwitnessed arrest."
        },
        {
            "q": "In an unwitnessed traumatic arrest, which finding means you must start CPR?",
            "options": [
                "Pupils react to light",
                "Blunt trauma",
                "No spontaneous movement",
                "Asystole on the ECG"
            ],
            "correct": 0,
            "explanation": "All five futility signs are needed to withhold CPR; a pupillary response means one is missing."
        },
        {
            "q": "How many of the five futility signs must be present to withhold CPR?",
            "options": [
                "Any one",
                "Any three",
                "All five",
                "Two plus asystole"
            ],
            "correct": 2,
            "explanation": "All signs must be present to not start resuscitation."
        },
        {
            "q": "How long may you take to place a pelvic binder after finding no pulse?",
            "options": [
                "30 seconds",
                "2 minutes",
                "Until the first rhythm check",
                "No limit"
            ],
            "correct": 0,
            "explanation": "The binder goes on before compressions start, within 30 seconds of no pulse being felt."
        },
        {
            "q": "When should a pelvic binder and bilateral decompression both be considered?",
            "options": [
                "When the cause of arrest is not clear, e.g. polytrauma in an RTC",
                "Only with an obvious open-book pelvis",
                "Only after ROSC",
                "In every medical arrest"
            ],
            "correct": 0,
            "explanation": "Where the cause is unclear, apply both."
        },
        {
            "q": "Which TXA dose is listed for an adult in traumatic arrest?",
            "options": [
                "1 g IV/IO",
                "2 g IV/IO",
                "500 mg IM",
                "1 g orally"
            ],
            "correct": 0,
            "explanation": "TXA 1 g IV/IO, as early as possible, ideally within 3 hours of injury."
        },
        {
            "q": "When is TXA contraindicated in traumatic arrest?",
            "options": [
                "Unwitnessed arrest with prolonged downtime",
                "Witnessed arrest with a major limb injury",
                "Penetrating trauma with massive hemorrhage",
                "Severe pelvic fracture"
            ],
            "correct": 0,
            "explanation": "Also with clearly non-survivable injury or when hemorrhage is not the suspected cause."
        },
        {
            "q": "A trauma arrest has torrential bleeding from a leg. What comes first?",
            "options": [
                "Control the bleeding (tourniquet, packing, pressure)",
                "TXA",
                "Advanced airway",
                "12-lead ECG"
            ],
            "correct": 0,
            "explanation": "Uncontrolled hemorrhage is a common reversible cause and must be addressed immediately."
        },
        {
            "q": "How should ALS back-up and transport be handled?",
            "options": [
                "Prioritise transfer and meet ALS en route",
                "Wait on scene for ALS",
                "Do not request ALS for trauma",
                "Request ALS only after ROSC"
            ],
            "correct": 0,
            "explanation": "Consider ALS back-up whenever resuscitation starts; do not wait on scene."
        },
        {
            "q": "Which is NOT one of the high-risk injuries this CPG names as a likely cause of arrest?",
            "options": [
                "Ventricular fibrillation",
                "Tension pneumothorax",
                "Massive hemothorax",
                "Cardiac tamponade"
            ],
            "correct": 0,
            "explanation": "VF is a rhythm, not an injury. The CPG names tension pneumothorax, massive hemothorax and cardiac tamponade."
        },
        {
            "q": "TXA in a child in traumatic arrest: what does the flowchart say?",
            "options": [
                "TXA is listed for adults only",
                "Give 1 g regardless of age",
                "Give it IM",
                "Double the adult dose"
            ],
            "correct": 0,
            "explanation": "The flowchart restricts TXA in traumatic arrest to adults: 1 g IV/IO."
        },
        {
            "q": "What does a pelvic binder do in traumatic arrest?",
            "options": [
                "Reduces pelvic volume and bleeding from a pelvic fracture",
                "Splints femur fractures",
                "Immobilises the spine",
                "Makes compressions easier"
            ],
            "correct": 0,
            "explanation": "It treats a pelvic fracture as a cause of hemorrhagic arrest, so it goes on before compressions."
        },
        {
            "q": "Unwitnessed arrest: blunt trauma, no movement, non-reactive pupils, apneic, pulseless, asystole. What do you do?",
            "options": [
                "CPR is not required",
                "Start CPR",
                "Pelvic binder, then CPR",
                "TXA, then CPR"
            ],
            "correct": 0,
            "explanation": "All five futility signs are present."
        },
        {
            "q": "Who may perform bilateral needle chest decompression?",
            "options": [
                "P and above",
                "EMR",
                "EMT",
                "Any bystander"
            ],
            "correct": 0,
            "explanation": "Decompression is a Paramedic intervention; the pelvic binder is EMT."
        },
        {
            "q": "Who may apply the pelvic binder?",
            "options": [
                "EMT and above",
                "P only",
                "AP only",
                "Hospital staff only"
            ],
            "correct": 0,
            "explanation": "The binder is an EMT-level intervention."
        },
        {
            "q": "When is bilateral decompression contraindicated?",
            "options": [
                "A clear injury that cannot cause pneumothorax, e.g. isolated TBI",
                "Polytrauma",
                "Unknown mechanism",
                "Penetrating chest trauma"
            ],
            "correct": 0,
            "explanation": "Also arterial limb bleeding: an injury that will not cause a pelvic fracture or pneumothorax."
        },
        {
            "q": "When should ALS back-up be considered?",
            "options": [
                "Whenever resuscitation is started",
                "After 20 minutes of CPR",
                "Only with ROSC",
                "Never in trauma"
            ],
            "correct": 0,
            "explanation": "If resuscitation is started, ALS back-up should be considered."
        },
        {
            "q": "Which CPG guides the CPR itself?",
            "options": [
                "Adult or Pediatric Cardiac Arrest CPG",
                "Universal Care CPG",
                "Burns CPG",
                "Treated at Scene CPG"
            ],
            "correct": 0,
            "explanation": "Perform resuscitation as per the Adult or Pediatric Cardiac Arrest CPG."
        },
        {
            "q": "How long is the pulse checked?",
            "options": [
                "5–10 seconds",
                "1 minute",
                "30 seconds",
                "Until ALS arrives"
            ],
            "correct": 0,
            "explanation": "Carotid or femoral pulse for 5–10 seconds; breathing for 5–10 seconds."
        },
        {
            "q": "Which pulse sites are used?",
            "options": [
                "Carotid or femoral",
                "Radial or pedal",
                "Brachial only",
                "Temporal"
            ],
            "correct": 0,
            "explanation": "Check carotid or femoral."
        },
        {
            "q": "The injuries look minor but the patient is in arrest. What do you do?",
            "options": [
                "Start CPR: the arrest may be medical",
                "Withhold CPR",
                "Apply a pelvic binder only",
                "Give TXA"
            ],
            "correct": 0,
            "explanation": "When the mechanism does not match the clinical condition, start CPR."
        },
        {
            "q": "What triage category is any cardiac arrest?",
            "options": [
                "Red",
                "Yellow",
                "Green",
                "Black"
            ],
            "correct": 0,
            "explanation": "All cardiac arrest patients are Red priority."
        },
        {
            "q": "Which TXA indication applies in traumatic arrest?",
            "options": [
                "Witnessed arrest with signs of massive hemorrhage",
                "Any unwitnessed arrest",
                "Isolated head injury",
                "All trauma arrests routinely"
            ],
            "correct": 0,
            "explanation": "TXA is not routine; it needs a witnessed arrest and suspected massive hemorrhage with achievable ROSC."
        },
        {
            "q": "What is the time window for TXA?",
            "options": [
                "As early as possible, ideally within 3 hours of injury",
                "Only after ROSC",
                "Any time within 24 hours",
                "Only in hospital"
            ],
            "correct": 0,
            "explanation": "Give it as early as possible, ideally within the first 3 hours."
        },
        {
            "q": "How is massive external bleeding controlled?",
            "options": [
                "Direct pressure, wound packing or tourniquets",
                "Elevation only",
                "TXA alone",
                "Ice packs"
            ],
            "correct": 0,
            "explanation": "As appropriate to the wound."
        },
        {
            "q": "Which ECG finding is a futility sign?",
            "options": [
                "No organized rhythm (asystole)",
                "VF",
                "Sinus tachycardia",
                "PEA at a normal rate"
            ],
            "correct": 0,
            "explanation": "The ECG must show no organized rhythm (asystole)."
        },
        {
            "q": "Which documentation item is specific to this CPG?",
            "options": [
                "Signs of irreversible death and whether resuscitation criteria were met",
                "Home address only",
                "Shoe size",
                "Insurance number"
            ],
            "correct": 0,
            "explanation": "Also injury pattern, binder, decompression and bleeding control."
        },
        {
            "q": "TXA in an isolated traumatic brain injury arrest?",
            "options": [
                "No: hemorrhage is not the suspected cause",
                "Yes, 1 g",
                "Yes, double dose",
                "Only IM"
            ],
            "correct": 0,
            "explanation": "TXA is contraindicated when hemorrhage is not the suspected cause."
        },
        {
            "q": "What are the two KPIs?",
            "options": [
                "Immediate CPR for EMS-witnessed arrests, and back-up requested",
                "TXA within 3 hours and pelvic binder in all",
                "Scene time and hospital choice",
                "Intubation rate and IV access"
            ],
            "correct": 0,
            "explanation": "Immediate CPR when EMS witnesses the arrest; request back-up (where appropriate) for all traumatic arrests."
        },
        {
            "q": "Which CPG covers stopping or transferring CPR in trauma?",
            "options": [
                "Starting, Stopping and Transferring CPR",
                "Verification of Death",
                "Treated at Scene",
                "Patient Refusal"
            ],
            "correct": 0,
            "explanation": "See the Starting, Stopping and Transferring CPR CPG."
        }
    ],
    "flashcards": [
        {
            "question": "When must CPR start in traumatic arrest?",
            "answer": "Immediately in any EMS-witnessed arrest; in an unwitnessed arrest unless there is an injury incompatible with life or all five futility signs are present."
        },
        {
            "question": "Injuries incompatible with life",
            "answer": "Decapitation, incineration, body decomposition, rigor mortis."
        },
        {
            "question": "The five futility signs",
            "answer": "Blunt or penetrating trauma; no spontaneous movement; no pupillary response; apneic and pulseless; ECG with no organized rhythm (asystole). All five must be present."
        },
        {
            "question": "Which rescuer level may decide CPR is not required?",
            "answer": "EMT."
        },
        {
            "question": "Pelvic binder timing",
            "answer": "Before compressions start, within 30 seconds of finding no pulse."
        },
        {
            "question": "Pelvic binder level",
            "answer": "EMT."
        },
        {
            "question": "Needle decompression level",
            "answer": "P (bilateral)."
        },
        {
            "question": "When to use both binder and decompression",
            "answer": "When the cause of arrest is unclear, e.g. polytrauma in a road traffic collision."
        },
        {
            "question": "When not to use binder or decompression",
            "answer": "A clear injury that will not cause a pelvic fracture or pneumothorax: arterial limb bleeding, isolated TBI."
        },
        {
            "question": "External bleeding in traumatic arrest",
            "answer": "Identify and control immediately: direct pressure, wound packing, tourniquets."
        },
        {
            "question": "Adult TXA dose in traumatic arrest",
            "answer": "1 g IV/IO (P), adults only."
        },
        {
            "question": "TXA timing",
            "answer": "As early as possible, ideally within 3 hours of injury."
        },
        {
            "question": "TXA indications in arrest",
            "answer": "Witnessed arrest plus signs of massive hemorrhage (penetrating trauma, major limb injury, severe pelvic fracture)."
        },
        {
            "question": "TXA contraindications in arrest",
            "answer": "Unwitnessed arrest with prolonged downtime; non-survivable injury; hemorrhage not the suspected cause (isolated TBI)."
        },
        {
            "question": "Is TXA routine in traumatic arrest?",
            "answer": "No. Only with high suspicion of massive hemorrhage and achievable ROSC."
        },
        {
            "question": "High-risk injuries causing arrest",
            "answer": "Tension pneumothorax, massive hemothorax, cardiac tamponade."
        },
        {
            "question": "Common reversible cause of traumatic arrest",
            "answer": "Uncontrolled hemorrhage."
        },
        {
            "question": "ALS back-up",
            "answer": "Consider whenever resuscitation starts; do not wait on scene, meet ALS en route."
        },
        {
            "question": "Pulse check",
            "answer": "Carotid or femoral, 5–10 seconds."
        },
        {
            "question": "Breathing check",
            "answer": "Absent normal breathing or agonal gasps, 5–10 seconds."
        },
        {
            "question": "Responsiveness",
            "answer": "No response to voice or pain (AVPU: U)."
        },
        {
            "question": "Mechanism does not fit the findings",
            "answer": "Start CPR: the arrest may be non-traumatic."
        },
        {
            "question": "How is CPR performed?",
            "answer": "As per the Adult or Pediatric Cardiac Arrest CPG."
        },
        {
            "question": "Triage category",
            "answer": "Red."
        },
        {
            "question": "Futility pupil finding",
            "answer": "No pupillary response (non-reactive to light)."
        },
        {
            "question": "Futility ECG finding",
            "answer": "No organized rhythm (asystole)."
        },
        {
            "question": "Futility movement finding",
            "answer": "No spontaneous movement: unresponsive on AVPU."
        },
        {
            "question": "Documentation essentials",
            "answer": "Mechanism, injury pattern, irreversible-death signs, criteria met or unmet, interventions, ECG strips, CPR times, transfer or termination rationale."
        },
        {
            "question": "KPIs",
            "answer": "Immediate CPR for EMS-witnessed traumatic arrest; back-up requested where appropriate for all."
        },
        {
            "question": "Exclusion criterion",
            "answer": "Non-traumatic cardiac arrest."
        }
    ],
    "critical": [
        {
            "id": "crit_4_5_1",
            "scenario": "A young man is pulled from a high-speed collision by bystanders and arrests in front of you. The pelvis is deformed and a thigh wound is bleeding heavily.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Start CPR; control the thigh bleeding; pelvic binder before compressions (within 30 seconds); ALS back-up and early transfer",
                    "f": "Correct. Witnessed by EMS: resuscitate, and fix the reversible causes."
                },
                {
                    "t": "Assess the five futility signs first",
                    "f": "Futility assessment is only for unwitnessed arrests."
                },
                {
                    "t": "Give TXA before anything else",
                    "f": "Bleeding control and CPR come first; TXA is a P consideration."
                },
                {
                    "t": "Wait on scene for ALS",
                    "f": "Do not wait; meet ALS en route."
                }
            ],
            "correct": 0,
            "explanation": "EMS-witnessed traumatic arrest: start CPR immediately, control external bleeding, place the pelvic binder before compressions, consider decompression (P) and TXA 1 g IV/IO (P, adult).",
            "kpi": "Immediately initiate CPR for traumatic cardiac arrests witnessed by EMS."
        },
        {
            "id": "crit_4_5_2",
            "scenario": "An unwitnessed fall from height. The man is apneic and pulseless with no movement and fixed, non-reactive pupils. The monitor shows the strip below.",
            "ecg": "asystole",
            "question": "What do you decide?",
            "options": [
                {
                    "t": "All five futility signs are present: CPR is not required",
                    "f": "Correct. Blunt trauma, no movement, no pupillary response, apneic and pulseless, asystole."
                },
                {
                    "t": "Start CPR because there is no decapitation",
                    "f": "No irreversible-death sign, but all five futility signs are present."
                },
                {
                    "t": "Shock",
                    "f": "Asystole is not shockable."
                },
                {
                    "t": "Pelvic binder, then reassess",
                    "f": "Resuscitation is not indicated."
                }
            ],
            "correct": 0,
            "explanation": "In an unwitnessed traumatic arrest, CPR is not required when all five futility signs are present. Document the criteria met.",
            "kpi": "Document resuscitation criteria met or unmet."
        },
        {
            "id": "crit_4_5_3",
            "scenario": "A motorcyclist is found in arrest after an unwitnessed crash. Pupils react sluggishly; the monitor shows a slow organized rhythm with no pulse.",
            "ecg": "pea",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Start CPR: not all futility signs are present",
                    "f": "Correct. A pupillary response and an organized rhythm both mean resuscitate."
                },
                {
                    "t": "CPR is not required",
                    "f": "All five signs must be present to withhold CPR."
                },
                {
                    "t": "Shock the organized rhythm",
                    "f": "PEA is not shockable."
                },
                {
                    "t": "Wait for ALS before starting",
                    "f": "Start CPR and meet ALS en route."
                }
            ],
            "correct": 0,
            "explanation": "Pupils react and the ECG shows an organized rhythm: two futility signs are missing, so start CPR and treat the reversible causes.",
            "kpi": "Request back-up (where appropriate) for all traumatic cardiac arrests."
        },
        {
            "id": "crit_4_5_4",
            "scenario": "A 25-year-old with a stab wound to the chest arrests as you arrive. Bleeding is controlled and CPR has started. You are a Paramedic.",
            "question": "Which trauma-specific intervention do you add?",
            "options": [
                {
                    "t": "Bilateral needle chest decompression",
                    "f": "Correct. Tension pneumothorax is a reversible cause; decompression is a P skill."
                },
                {
                    "t": "Stop CPR: penetrating chest trauma is futile",
                    "f": "The arrest was witnessed: resuscitate."
                },
                {
                    "t": "Tourniquet to the arm",
                    "f": "No limb bleeding to control."
                },
                {
                    "t": "Nothing until hospital",
                    "f": "Treat reversible causes on the way."
                }
            ],
            "correct": 0,
            "explanation": "Consider bilateral needle decompression (P). With massive hemorrhage in a witnessed adult arrest, consider TXA 1 g IV/IO.",
            "kpi": "Immediately initiate CPR for traumatic cardiac arrests witnessed by EMS."
        },
        {
            "id": "crit_4_5_5",
            "scenario": "A pedestrian is found pulseless after an unwitnessed collision with an isolated severe head injury. Downtime is unknown but long.",
            "question": "A colleague wants to give TXA. What do you say?",
            "options": [
                {
                    "t": "No: unwitnessed with prolonged downtime, and bleeding is not the suspected cause",
                    "f": "Correct. Both are TXA contraindications in traumatic arrest."
                },
                {
                    "t": "Yes, 1 g IV/IO",
                    "f": "TXA is contraindicated here."
                },
                {
                    "t": "Yes, but IM",
                    "f": "TXA is not indicated."
                },
                {
                    "t": "Only after ROSC",
                    "f": "The contraindications still apply."
                }
            ],
            "correct": 0,
            "explanation": "TXA is for witnessed arrests with signs of massive hemorrhage. Decide on CPR using the irreversible-death and futility criteria.",
            "kpi": "Document resuscitation criteria met or unmet."
        }
    ]
};
