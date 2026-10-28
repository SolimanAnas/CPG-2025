/* ========== CPG 7.3 – Crush Injuries ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c7-3",
    "title": "Crush Injuries",
    "shortTitle": "7.3 Crush Injuries",
    "guide": {
        "cpg": "7.3",
        "group": "trauma",
        "groupLabel": "Trauma",
        "title": "Crush Injuries",
        "lead": "Release can kill: when a limb has been compressed for more than 30 minutes, potassium, acid and muscle breakdown products flood the circulation. Get IV access and fluids running before release, coordinate the timing with rescue, monitor the ECG for hyperkalemia, and be ready for sudden deterioration.",
        "source": {
            "label": "CPG 7.3",
            "pages": "224–227",
            "pdf": "../pdf_sections/7_3_Crush_Injuries.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Entrapped or compressed for &gt;30 minutes.",
                    "Clinical extremity or torso crush injury; muscle injury with systemic symptoms.",
                    "Scene or dispatch information suggesting prolonged compression."
                ],
                "exclude": [
                    "Minor contusions without systemic risk.",
                    "Isolated fractures without prolonged entrapment.",
                    "Injuries incompatible with life."
                ]
            },
            {
                "type": "groups",
                "title": "Assess",
                "icon": "stethoscope",
                "groups": [
                    {
                        "title": "Scene",
                        "items": [
                            "Safety, mechanism, time under compression, number of patients, heavy rescue needs."
                        ]
                    },
                    {
                        "title": "The limb",
                        "items": [
                            "Swelling, pallor, cyanosis, coolness; capillary refill, pulses, distal sensation."
                        ]
                    },
                    {
                        "title": "Crush syndrome warning signs",
                        "items": [
                            "Entrapment &gt;30 minutes.",
                            "Dark or reduced urine.",
                            "Swollen, firm limb.",
                            "Weakness, paresthesia or paralysis."
                        ]
                    },
                    {
                        "title": "Hyperkalemia",
                        "items": [
                            "Weakness or flaccid paralysis, nausea, vomiting, paresthesia; bradycardia, hypotension, irregular pulse.",
                            "ECG: peaked T waves, wide QRS, but it may look normal early. Treat on clinical suspicion."
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
                        "Entrapment &gt;30 minutes, systemic symptoms, hypotension, altered mental status"
                    ],
                    [
                        "Yellow",
                        "Shorter entrapment, isolated limb swelling, stable vital signs"
                    ],
                    [
                        "Green",
                        "No systemic signs, minor soft tissue crush"
                    ]
                ]
            },
            {
                "type": "steps",
                "title": "Management",
                "icon": "list",
                "steps": [
                    {
                        "title": "Control major bleeding"
                    },
                    {
                        "title": "ALS back-up",
                        "text": "Routinely for entrapment &gt;30 minutes, suspected crush syndrome, dysrhythmias, or ALS drugs such as analgesia."
                    },
                    {
                        "title": "Coordinate with rescue",
                        "text": "Agree the release timing."
                    },
                    {
                        "title": "Oxygen",
                        "level": "EMR",
                        "text": "High flow to SpO<sub>2</sub> ≥94% (flowchart &gt;94%), through extrication and transport."
                    },
                    {
                        "title": "Large-bore IV before release",
                        "level": "EMT",
                        "text": "If entrapment &gt;30 minutes. Do not wait until after release: pre-hydration improves outcomes."
                    },
                    {
                        "title": "Normal saline 0.9%",
                        "level": "EMT",
                        "text": "Start before release where possible; repeat to maintain perfusion.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "500 mL bolus",
                                "level": "EMT"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "20 mL/kg bolus",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Tourniquet",
                        "level": "EMT",
                        "text": "Consider before release if limb blood flow is impaired and release will flush toxins into the circulation; note the time on the tourniquet. Not for routine crush: only if the limb injury is severe (non-viable) and release is imminent."
                    },
                    {
                        "title": "Pain",
                        "text": "As per the Pain Management CPG; avoid opioid overuse that masks falling consciousness or breathing."
                    },
                    {
                        "title": "Monitor",
                        "text": "12-lead and continuous 4-lead ECG (peaked T waves, wide QRS); watch for compartment syndrome."
                    },
                    {
                        "title": "Transport",
                        "text": "Standard trauma care during and after extrication. Notify the hospital early; continue fluids, oxygen and monitoring."
                    }
                ]
            },
            {
                "type": "list",
                "title": "Safety",
                "icon": "triangle-alert",
                "items": [
                    "Expect sudden deterioration after release: arrhythmia, shock, acute kidney injury.",
                    "Broselow tape for children.",
                    "Electrical crush (pinned under live machinery): extra precautions.",
                    "If ALS is delayed, early BLS actions matter. In doubt, contact Tele-EMS."
                ]
            },
            {
                "type": "tools",
                "title": "Practise with the app",
                "icon": "monitor",
                "groups": [
                    {
                        "title": "Watch for after release",
                        "items": [
                            {
                                "ecg": "hyperK",
                                "label": "Hyperkalemia",
                                "sub": "Peaked T waves, widening QRS"
                            },
                            {
                                "ecg": "sbrady",
                                "label": "Sinus bradycardia",
                                "sub": "A clinical sign of hyperkalemia"
                            }
                        ]
                    },
                    {
                        "title": "Tools",
                        "items": [
                            {
                                "label": "Pediatric drug calculator: normal saline",
                                "sub": "20 mL/kg",
                                "href": "../pages/drug-calculator.html?drug=Normal%20Saline",
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
                    "Entrapment duration documented in the ePCR."
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
                        "label": "7.4 Limb Injuries",
                        "href": "c7-4.html"
                    },
                    {
                        "label": "6.12 Pain Management",
                        "href": "c6-12.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "What is the most critical prehospital intervention in prolonged entrapment?",
            "options": [
                "Fluid before release",
                "Immediate release",
                "Tourniquet for every crush",
                "Pain relief only"
            ],
            "correct": 0,
            "explanation": "Pre-hydration improves outcomes."
        },
        {
            "q": "What is the adult saline bolus?",
            "options": [
                "500 mL",
                "250 mL",
                "2000 mL",
                "None"
            ],
            "correct": 0,
            "explanation": "Repeat to maintain perfusion."
        },
        {
            "q": "What is the pediatric bolus?",
            "options": [
                "20 mL/kg",
                "5 mL/kg",
                "60 mL/kg",
                "None"
            ],
            "correct": 0,
            "explanation": "Use the Broselow tape."
        },
        {
            "q": "Which ECG changes suggest hyperkalemia?",
            "options": [
                "Peaked T waves and wide QRS",
                "ST depression only",
                "Delta waves",
                "Long QT only"
            ],
            "correct": 0,
            "explanation": "But the ECG may be normal early."
        },
        {
            "q": "What entrapment time defines inclusion and Red priority?",
            "options": [
                ">30 minutes",
                ">5 minutes",
                ">4 hours",
                "Any"
            ],
            "correct": 0,
            "explanation": "With systemic symptoms, hypotension or AMS."
        },
        {
            "q": "Trapped 45 minutes under a wall. Priority before release?",
            "options": [
                "IV access and fluid running",
                "Pull him out quickly",
                "Tourniquet routinely",
                "Wait for hospital"
            ],
            "correct": 0,
            "explanation": "Coordinate release timing with rescue."
        },
        {
            "q": "When are IV fluids started?",
            "options": [
                "Before release where possible",
                "Only after release",
                "Only if hypotensive",
                "Only in hospital"
            ],
            "correct": 0,
            "explanation": "Do not delay until after release."
        },
        {
            "q": "Which is a crush syndrome warning sign?",
            "options": [
                "Swollen, firm limb with weakness or paresthesia",
                "Bruise only",
                "Normal limb",
                "Fast capillary refill"
            ],
            "correct": 0,
            "explanation": "Also dark or reduced urine, entrapment >30 minutes."
        },
        {
            "q": "What oxygen target?",
            "options": [
                "SpO₂ ≥94%",
                "88–92%",
                "None",
                "100% only if unconscious"
            ],
            "correct": 0,
            "explanation": "High flow, through extrication and transport."
        },
        {
            "q": "Why consider a tourniquet before release?",
            "options": [
                "To stop toxins entering the circulation when flow is impaired",
                "For every bruise",
                "To reduce swelling",
                "To stop pain"
            ],
            "correct": 0,
            "explanation": "Only with a severe injury and imminent release."
        },
        {
            "q": "Which electrolyte is the main danger?",
            "options": [
                "Potassium (hyperkalemia)",
                "Sodium",
                "Calcium only",
                "Glucose"
            ],
            "correct": 0,
            "explanation": "With acidosis and rhabdomyolysis after release."
        },
        {
            "q": "When is ECG monitoring used?",
            "options": [
                "12-lead and continuous 4-lead",
                "Never",
                "Only at hospital",
                "Only if conscious"
            ],
            "correct": 0,
            "explanation": "Watch for peaked T waves and wide QRS."
        },
        {
            "q": "BP 80/50 after release. What do you do?",
            "options": [
                "Repeat the saline bolus and monitor the ECG",
                "Stop fluids",
                "Remove all monitoring",
                "Walk to the ambulance"
            ],
            "correct": 0,
            "explanation": "Repeat as needed to maintain perfusion."
        },
        {
            "q": "Which are clinical signs of hyperkalemia?",
            "options": [
                "Weakness, paresthesia, bradycardia, irregular pulse",
                "Fever",
                "Rash",
                "Hypertension only"
            ],
            "correct": 0,
            "explanation": "Treat on suspicion, not ECG alone."
        },
        {
            "q": "Why avoid overusing opioids?",
            "options": [
                "They may mask falling consciousness or breathing",
                "They raise potassium",
                "They are illegal",
                "No reason"
            ],
            "correct": 0,
            "explanation": "A safety consideration."
        },
        {
            "q": "When is ALS requested?",
            "options": [
                "Entrapment >30 min, suspected crush syndrome, dysrhythmia, ALS drugs",
                "Never",
                "Any bruise",
                "Only children"
            ],
            "correct": 0,
            "explanation": "Routinely for these."
        },
        {
            "q": "What must be noted when a tourniquet is applied?",
            "options": [
                "The time, on the tourniquet",
                "Nothing",
                "Brand",
                "Colour"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "Which is excluded?",
            "options": [
                "Isolated fracture without prolonged entrapment",
                "Torso crush after 40 minutes",
                "Limb trapped for an hour",
                "Crush with dark urine"
            ],
            "correct": 0,
            "explanation": "Also minor contusions and fatal injuries."
        },
        {
            "q": "What does the KPI require?",
            "options": [
                "Entrapment duration documented",
                "Tourniquet in all",
                "Fluids in all",
                "ECG in all"
            ],
            "correct": 0,
            "explanation": "In the ePCR."
        },
        {
            "q": "Extrication will take another 20 minutes. What now?",
            "options": [
                "Start IV fluids now",
                "Wait until free",
                "Tourniquet routinely",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "Fluid before release."
        },
        {
            "q": "Which fluid is named?",
            "options": [
                "Normal saline 0.9%",
                "Dextrose",
                "Colloid",
                "Oral water"
            ],
            "correct": 0,
            "explanation": "NaCl 0.9%."
        },
        {
            "q": "Which complication is monitored after release?",
            "options": [
                "Compartment syndrome",
                "Hypoglycemia only",
                "Sunburn",
                "None"
            ],
            "correct": 0,
            "explanation": "And deterioration."
        },
        {
            "q": "What does a normal early ECG mean?",
            "options": [
                "It does not exclude hyperkalemia",
                "No hyperkalemia",
                "No crush syndrome",
                "Stop fluids"
            ],
            "correct": 0,
            "explanation": "Treat on clinical suspicion."
        },
        {
            "q": "Which priority: shorter entrapment, swollen limb, stable vitals?",
            "options": [
                "Yellow",
                "Red",
                "Green",
                "Black"
            ],
            "correct": 0,
            "explanation": "Per the triage table."
        },
        {
            "q": "When should the hospital be notified?",
            "options": [
                "Early with prolonged entrapment or suspected crush syndrome",
                "Never",
                "On arrival only",
                "Next day"
            ],
            "correct": 0,
            "explanation": "Transport urgently."
        },
        {
            "q": "Pinned under live machinery. What applies?",
            "options": [
                "Extra electrical precautions",
                "Nothing different",
                "Touch immediately",
                "No ECG"
            ],
            "correct": 0,
            "explanation": "Electrical crush injuries."
        },
        {
            "q": "Who coordinates release timing?",
            "options": [
                "EMS with rescue personnel",
                "The patient",
                "Bystanders",
                "Nobody"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "Which level starts IV fluids?",
            "options": [
                "EMT",
                "EMR",
                "EP only",
                "AP only"
            ],
            "correct": 0,
            "explanation": "Oxygen is EMR."
        },
        {
            "q": "What are the fatal consequences of crush syndrome?",
            "options": [
                "Arrhythmias, acute kidney injury, shock",
                "Rash",
                "Fever",
                "None"
            ],
            "correct": 0,
            "explanation": "Prevention starts in the field."
        },
        {
            "q": "If in doubt?",
            "options": [
                "Contact Tele-EMS and notify the hospital early",
                "Leave",
                "Release immediately",
                "Ignore"
            ],
            "correct": 0,
            "explanation": "Clinical insight."
        }
    ],
    "flashcards": [
        {
            "question": "Crush risk threshold",
            "answer": "Entrapment or compression >30 minutes."
        },
        {
            "question": "Crush syndrome",
            "answer": "Hyperkalemia, acidosis, rhabdomyolysis after release; arrhythmia, AKI, shock."
        },
        {
            "question": "Warning signs",
            "answer": "Entrapment >30 min; dark or reduced urine; swollen firm limb; weakness, paresthesia, paralysis."
        },
        {
            "question": "Key intervention",
            "answer": "IV fluid before release."
        },
        {
            "question": "Adult fluid",
            "answer": "500 mL NS 0.9%, repeat to maintain perfusion (EMT)."
        },
        {
            "question": "Pediatric fluid",
            "answer": "20 mL/kg NS (EMT)."
        },
        {
            "question": "Oxygen",
            "answer": "High flow to SpO₂ ≥94% through extrication and transport (EMR)."
        },
        {
            "question": "Tourniquet",
            "answer": "Consider before release only with severe (non-viable) limb injury and imminent release; note the time."
        },
        {
            "question": "ECG",
            "answer": "12-lead and continuous 4-lead: peaked T waves, wide QRS."
        },
        {
            "question": "Hyperkalemia signs",
            "answer": "Weakness, flaccid paralysis, paresthesia, nausea, bradycardia, hypotension, irregular pulse."
        },
        {
            "question": "Early ECG",
            "answer": "May be normal: treat on clinical suspicion."
        },
        {
            "question": "ALS triggers",
            "answer": "Entrapment >30 min, suspected crush syndrome, dysrhythmia, ALS drugs."
        },
        {
            "question": "Pain",
            "answer": "Pain CPG; avoid opioid overuse that masks deterioration."
        },
        {
            "question": "Release",
            "answer": "Coordinate timing with rescue; expect sudden deterioration."
        },
        {
            "question": "Triage",
            "answer": "Red: >30 min, systemic signs, hypotension, AMS. Yellow: shorter, isolated swelling. Green: minor."
        },
        {
            "question": "Children",
            "answer": "Broselow tape for equipment and doses."
        },
        {
            "question": "Monitoring",
            "answer": "ECG and compartment syndrome."
        },
        {
            "question": "Notification",
            "answer": "Early, with prolonged entrapment or suspected crush syndrome."
        },
        {
            "question": "Exclusions",
            "answer": "Minor contusions; isolated fractures without entrapment; injuries incompatible with life."
        },
        {
            "question": "KPI",
            "answer": "Entrapment duration documented."
        }
    ],
    "critical": [
        {
            "id": "crit_7_3_1",
            "scenario": "A 40-year-old has been trapped under a collapsed wall for 45 minutes with a crushed lower leg. Rescue is ready to lift.",
            "question": "What do you do before release?",
            "options": [
                {
                    "t": "Large-bore IV, 500 mL NS running, oxygen, ECG monitoring, ALS; agree timing with rescue",
                    "f": "Correct."
                },
                {
                    "t": "Lift now and start fluids later",
                    "f": "Fluids before release."
                },
                {
                    "t": "Routine tourniquet",
                    "f": "Only for a severe, non-viable limb with imminent release."
                },
                {
                    "t": "Pain relief only",
                    "f": "Fluid is the critical step."
                }
            ],
            "correct": 0,
            "explanation": "Pre-hydration before release improves outcomes.",
            "kpi": "Entrapment duration documented."
        },
        {
            "id": "crit_7_3_2",
            "scenario": "A man pinned under a vehicle for 2 hours is freed. He becomes hypotensive and the monitor shows the pattern below.",
            "ecg": "hyperK",
            "question": "What is happening and what do you do?",
            "options": [
                {
                    "t": "Crush syndrome with hyperkalemia: repeat saline boluses, oxygen, continuous ECG, ALS, notify, rapid transport",
                    "f": "Correct."
                },
                {
                    "t": "Normal after release",
                    "f": "This is dangerous."
                },
                {
                    "t": "Stop fluids",
                    "f": "Continue fluids."
                },
                {
                    "t": "Tourniquet now",
                    "f": "Release has already happened."
                }
            ],
            "correct": 0,
            "explanation": "Peaked T waves and hypotension after prolonged compression.",
            "kpi": "Entrapment duration documented."
        },
        {
            "id": "crit_7_3_3",
            "scenario": "A 55-year-old with both legs crushed by a forklift scores her pain 9/10; BP 100/60.",
            "question": "What is appropriate?",
            "options": [
                {
                    "t": "Analgesia per the Pain CPG with ALS, avoiding opioid overuse; fluids and monitoring",
                    "f": "Correct."
                },
                {
                    "t": "No analgesia",
                    "f": "Treat the pain."
                },
                {
                    "t": "Large opioid doses to sedate",
                    "f": "May mask deterioration."
                },
                {
                    "t": "Ice packs",
                    "f": "Not part of this CPG."
                }
            ],
            "correct": 0,
            "explanation": "ALS for ALS medications such as pain relief.",
            "kpi": "Entrapment duration documented."
        },
        {
            "id": "crit_7_3_4",
            "scenario": "A 10-year-old's leg has been trapped under a tree for 40 minutes; the leg is swollen, pulses present.",
            "question": "What fluid?",
            "options": [
                {
                    "t": "20 mL/kg NS before release, repeat to maintain perfusion",
                    "f": "Correct."
                },
                {
                    "t": "Adult 500 mL",
                    "f": "Weight-based."
                },
                {
                    "t": "None for children",
                    "f": "Children get 20 mL/kg."
                },
                {
                    "t": "Wait until free",
                    "f": "Before release."
                }
            ],
            "correct": 0,
            "explanation": "Use the Broselow tape.",
            "kpi": "Entrapment duration documented."
        },
        {
            "id": "crit_7_3_5",
            "scenario": "After 90 minutes under a concrete slab, a man is freed: leg numb, BP 90/60, HR 110, ECG normal so far.",
            "question": "What do you assume?",
            "options": [
                {
                    "t": "Possible hyperkalemia despite a normal ECG: continue fluids, monitor, ALS, notify",
                    "f": "Correct."
                },
                {
                    "t": "Normal ECG excludes hyperkalemia",
                    "f": "It may look normal early."
                },
                {
                    "t": "Discharge",
                    "f": "Never."
                },
                {
                    "t": "Remove the monitor",
                    "f": "Continue monitoring."
                }
            ],
            "correct": 0,
            "explanation": "Treat on clinical suspicion, not ECG alone.",
            "kpi": "Entrapment duration documented."
        }
    ]
};
