/* ========== CPG 7.1 – General Trauma Management ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c7-1",
    "title": "General Trauma Management",
    "shortTitle": "7.1 General Trauma Management",
    "guide": {
        "cpg": "7.1",
        "group": "trauma",
        "groupLabel": "Trauma",
        "title": "General Trauma Management",
        "lead": "Work C-ABC and fix life threats as you find them: catastrophic bleeding, airway, tension pneumothorax, open chest wounds, unstable pelvis. Give fluid only to the shocked, TXA early for uncontrolled bleeding, prevent hypothermia, and keep red-priority scene time under 10 minutes.",
        "source": {
            "label": "CPG 7.1",
            "pages": "212–217",
            "pdf": "../pdf_sections/7_1_General_Trauma_Management.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Any traumatic mechanism: blunt, penetrating or blast.",
                    "External or internal hemorrhage; airway or breathing compromise; neurological deficit or altered mental status; fractures, dislocations or soft tissue injury."
                ],
                "exclude": [
                    "No evidence of trauma."
                ]
            },
            {
                "type": "steps",
                "title": "Primary survey: C-ABC",
                "icon": "list",
                "steps": [
                    {
                        "title": "Scene",
                        "text": "Safety, PPE, high-visibility clothing. General impression: appearance, breathing, activity."
                    },
                    {
                        "title": "Catastrophic hemorrhage / C-spine",
                        "text": "Tourniquet, pressure or hemostatic dressing for life-threatening external bleeding. Manual c-spine stabilisation if the mechanism suggests injury."
                    },
                    {
                        "title": "Airway",
                        "text": "Jaw thrust if c-spine injury is suspected; Airway Management CPG for obstruction or inability to maintain the airway."
                    },
                    {
                        "title": "Breathing",
                        "text": "Oxygen to SpO<sub>2</sub> &gt;94%; BVM for inadequate ventilation. Open or sucking chest wound: chest seal."
                    },
                    {
                        "title": "Tension pneumothorax",
                        "level": "P",
                        "text": "Chest needle decompression for chest trauma with tracheal deviation, reduced breath sounds on that side, and hypotension."
                    },
                    {
                        "title": "Circulation",
                        "text": "Unstable pelvis: pelvic binder. Large-bore IV, or IO if IV is delayed or not feasible."
                    },
                    {
                        "title": "ALS back-up",
                        "text": "When ALS skills or narcotic analgesia are needed."
                    },
                    {
                        "title": "Triage and rapid trauma survey",
                        "text": "Red (life-threatening), Yellow (serious), Green (minor). Rapid head-to-toe for major injuries: abdominal rigidity, chest crepitus, pelvic instability."
                    }
                ]
            },
            {
                "type": "table",
                "title": "Fluid resuscitation",
                "icon": "droplet",
                "columns": [
                    "",
                    "Adult",
                    "Pediatric"
                ],
                "rows": [
                    [
                        "Give when",
                        "SBP &lt;90 mmHg or HR &gt;120 bpm",
                        "Tachycardic for age AND poor perfusion"
                    ],
                    [
                        "Bolus",
                        "500 mL NS or RL IV/IO",
                        "20 mL/kg IV/IO, reassess"
                    ],
                    [
                        "Target",
                        "SBP 90 mmHg",
                        "Normal SBP for age"
                    ],
                    [
                        "Maximum",
                        "2000 mL",
                        "60 mL/kg"
                    ],
                    [
                        "With TBI",
                        "Target SBP 120 mmHg",
                        "Normal SBP for age"
                    ]
                ],
                "stack": true,
                "notes": [
                    "Adults with SBP &gt;90 mmHg and HR &lt;120 bpm need no IV fluid: monitor closely.",
                    "Pediatric poor perfusion: hypotension for age, capillary refill &gt;2 seconds, altered mental status, hypoxia, weak pulses, pallor, mottled or cool skin."
                ]
            },
            {
                "type": "steps",
                "title": "Tranexamic acid and the rest of care",
                "icon": "syringe",
                "steps": [
                    {
                        "title": "TXA for uncontrolled bleeding",
                        "level": "P",
                        "text": "Within 3 hours of injury; as early as possible, ideally within 1 hour. Reduce the dose in known renal impairment.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "1000 mg IV/IO in 100 mL NS over 10 minutes",
                                "level": "P"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "15 mg/kg IV/IO (maximum 1000 mg) in NS to 20 mL, over 10 minutes",
                                "level": "P"
                            }
                        ]
                    },
                    {
                        "title": "Prevent hypothermia",
                        "text": "Remove wet clothing, cover with a thermal (foil) blanket, limit time uncovered."
                    },
                    {
                        "title": "Secondary survey",
                        "text": "Detailed head-to-toe; OPQRST and SAMPLE."
                    },
                    {
                        "title": "Spinal motion restriction",
                        "text": "If criteria are met: Spinal Motion Restriction CPG."
                    },
                    {
                        "title": "Pain",
                        "text": "As per the Pain Management CPG."
                    },
                    {
                        "title": "Minor injuries",
                        "text": "Splint fractures and dislocations; sterile dressings on open wounds."
                    },
                    {
                        "title": "Reassess",
                        "text": "Vital signs, AVPU/GCS, interventions: Red every 5 minutes, Yellow every 10, Green every 15."
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Red flags and transport",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "Red flags",
                        "items": [
                            "Uncontrolled hemorrhage or shock: SBP &lt;90 mmHg, tachycardia, capillary refill &gt;2 seconds.",
                            "GCS ≤8, unequal pupils or posturing.",
                            "Respiratory distress or SpO<sub>2</sub> &lt;90%.",
                            "Spinal cord injury with neurological deficit.",
                            "High-risk mechanism: ejection, blast."
                        ]
                    },
                    {
                        "title": "Transport",
                        "items": [
                            "Major hemorrhage, instability or penetrating torso trauma need rapid surgery: scene time under 10 minutes.",
                            "Critical patients (polytrauma, TBI, hemorrhagic shock): level 1 trauma center. Stable isolated injuries may go to a general hospital.",
                            "Consider Airwing when ground transport would exceed 30 minutes. Drive safely."
                        ]
                    },
                    {
                        "title": "Special groups",
                        "items": [
                            "Elderly (&gt;65): serious injury from low-energy falls; anticoagulants; cautious fluids.",
                            "Children (&lt;13): Broselow tape, involve a parent, size SMR devices and splints."
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
                                "label": "Pediatric drug calculator: tranexamic acid",
                                "sub": "15 mg/kg, maximum 1000 mg",
                                "href": "../pages/drug-calculator.html?drug=Tranexamic%20Acid",
                                "icon": "pill"
                            },
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
                "title": "Key performance indicators",
                "icon": "chart-no-axes-column",
                "items": [
                    "Tourniquet for uncontrolled limb bleeding.",
                    "Pelvic binder for an unstable pelvis.",
                    "Chest seal for open or sucking chest wounds.",
                    "ALS back-up for GCS &lt;8 or SBP &lt;90 with transfer time over 10 minutes.",
                    "Scene time under 10 minutes for Red priority patients."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "7.5 Spinal Motion Restriction",
                        "href": "c7-5.html"
                    },
                    {
                        "label": "7.6 Traumatic Brain Injuries",
                        "href": "c7-6.html"
                    },
                    {
                        "label": "7.4 Limb Injuries",
                        "href": "c7-4.html"
                    },
                    {
                        "label": "4.5 Cardiac Arrest in Trauma",
                        "href": "c4-5.html"
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
            "q": "What comes first in the trauma primary survey?",
            "options": [
                "Catastrophic hemorrhage",
                "Airway",
                "Breathing",
                "Disability"
            ],
            "correct": 0,
            "explanation": "C-ABC: catastrophic hemorrhage/c-spine, airway, breathing, circulation."
        },
        {
            "q": "What is the adult fluid bolus for SBP <90?",
            "options": [
                "500 mL",
                "250 mL",
                "1000 mL",
                "2000 mL at once"
            ],
            "correct": 0,
            "explanation": "Repeat to SBP 90, maximum 2000 mL."
        },
        {
            "q": "What is the adult TXA dose?",
            "options": [
                "1000 mg IV/IO in 100 mL NS over 10 minutes",
                "500 mg IM",
                "2000 mg push",
                "100 mg"
            ],
            "correct": 0,
            "explanation": "Paramedic level."
        },
        {
            "q": "When is needle decompression performed?",
            "options": [
                "Tension pneumothorax: tracheal deviation, reduced breath sounds, hypotension",
                "Any rib fracture",
                "Every chest wound",
                "Never prehospital"
            ],
            "correct": 0,
            "explanation": "P level."
        },
        {
            "q": "What SBP is targeted with TBI in adults?",
            "options": [
                "120 mmHg",
                "90 mmHg",
                "80 mmHg",
                "150 mmHg"
            ],
            "correct": 0,
            "explanation": "Children: normal SBP for age."
        },
        {
            "q": "What is the adult maximum fluid?",
            "options": [
                "2000 mL",
                "500 mL",
                "1000 mL",
                "No limit"
            ],
            "correct": 0,
            "explanation": "In 500 mL boluses."
        },
        {
            "q": "Unstable pelvis. Which intervention?",
            "options": [
                "Pelvic binder",
                "Traction splint",
                "Log roll repeatedly",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "A KPI."
        },
        {
            "q": "What is the pediatric bolus?",
            "options": [
                "20 mL/kg",
                "5 mL/kg",
                "50 mL/kg",
                "None"
            ],
            "correct": 0,
            "explanation": "Maximum 60 mL/kg."
        },
        {
            "q": "Which is a red flag?",
            "options": [
                "Uncontrolled hemorrhage",
                "GCS 15",
                "SBP 120",
                "Minor abrasion"
            ],
            "correct": 0,
            "explanation": "Plus GCS ≤8, hypoxia, cord injury, high-risk mechanisms."
        },
        {
            "q": "What SpO₂ target applies?",
            "options": [
                ">94%",
                "88–92%",
                "100% always",
                "None"
            ],
            "correct": 0,
            "explanation": "Titrate oxygen."
        },
        {
            "q": "What is the Red-priority scene time target?",
            "options": [
                "Under 10 minutes",
                "Under 30 minutes",
                "Under 60 minutes",
                "No target"
            ],
            "correct": 0,
            "explanation": "A KPI."
        },
        {
            "q": "Sucking chest wound. What do you apply?",
            "options": [
                "Chest seal",
                "Pressure bandage only",
                "Needle decompression first",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "A KPI."
        },
        {
            "q": "What is the pediatric TXA dose?",
            "options": [
                "15 mg/kg (maximum 1000 mg) over 10 minutes",
                "1000 mg for all",
                "5 mg/kg",
                "50 mg/kg"
            ],
            "correct": 0,
            "explanation": "Diluted in NS to 20 mL."
        },
        {
            "q": "Which adult needs no IV fluid?",
            "options": [
                "SBP >90 and HR <120",
                "SBP 80",
                "HR 130",
                "Any trauma patient"
            ],
            "correct": 0,
            "explanation": "Monitor closely."
        },
        {
            "q": "What is the TXA time window?",
            "options": [
                "Within 3 hours, ideally within 1 hour",
                "Within 12 hours",
                "Any time",
                "Only after hospital"
            ],
            "correct": 0,
            "explanation": "As early as possible."
        },
        {
            "q": "How is the airway opened with suspected c-spine injury?",
            "options": [
                "Jaw thrust",
                "Head tilt–chin lift",
                "Neck extension",
                "Prone position"
            ],
            "correct": 0,
            "explanation": "As per the CPG."
        },
        {
            "q": "What is the adult fluid target without TBI?",
            "options": [
                "SBP 90 mmHg",
                "SBP 140 mmHg",
                "SBP 60 mmHg",
                "Normal BP for age"
            ],
            "correct": 0,
            "explanation": "With TBI: 120 mmHg."
        },
        {
            "q": "How is hypothermia prevented?",
            "options": [
                "Remove wet clothing, foil blanket, limit exposure",
                "Cold packs",
                "Leave uncovered",
                "Fan"
            ],
            "correct": 0,
            "explanation": "As per the CPG."
        },
        {
            "q": "What is the pediatric fluid maximum?",
            "options": [
                "60 mL/kg",
                "20 mL/kg",
                "40 mL/kg",
                "None"
            ],
            "correct": 0,
            "explanation": "Target normal SBP for age."
        },
        {
            "q": "How often is a Red patient reassessed?",
            "options": [
                "Every 5 minutes",
                "Every 15 minutes",
                "Every 30 minutes",
                "Once"
            ],
            "correct": 0,
            "explanation": "Yellow 10, Green 15."
        },
        {
            "q": "When is TXA dose reduced?",
            "options": [
                "Known renal impairment",
                "Children",
                "Elderly always",
                "Never"
            ],
            "correct": 0,
            "explanation": "As per the CPG."
        },
        {
            "q": "Which signs suggest internal injury on the rapid survey?",
            "options": [
                "Abdominal rigidity, chest crepitus, pelvic instability",
                "Normal skin",
                "Strong radial pulse",
                "Clear speech"
            ],
            "correct": 0,
            "explanation": "Rapid head-to-toe."
        },
        {
            "q": "Which elderly trauma risk is listed?",
            "options": [
                "Serious injury from low-energy falls; anticoagulants",
                "None",
                "Faster healing",
                "Higher BP tolerance only"
            ],
            "correct": 0,
            "explanation": "Use cautious fluids."
        },
        {
            "q": "When is Airwing considered?",
            "options": [
                "Time-critical cases with ground transport over 30 minutes",
                "Every trauma",
                "Minor injuries",
                "Never"
            ],
            "correct": 0,
            "explanation": "Clinical insight."
        },
        {
            "q": "Which pediatric tool is used for weight and doses?",
            "options": [
                "Broselow tape",
                "GCS chart",
                "BEFAST",
                "APGAR"
            ],
            "correct": 0,
            "explanation": "For children under 13."
        },
        {
            "q": "How is life-threatening limb bleeding controlled?",
            "options": [
                "Tourniquet, pressure or hemostatic dressing",
                "Elevation alone",
                "Ice",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "A tourniquet for uncontrolled limb bleeding is a KPI."
        },
        {
            "q": "Where do critical polytrauma patients go?",
            "options": [
                "Level 1 trauma center",
                "Nearest clinic",
                "Home",
                "Any hospital"
            ],
            "correct": 0,
            "explanation": "Stable isolated injuries may go to a general hospital."
        },
        {
            "q": "Who may give TXA?",
            "options": [
                "P and above",
                "EMR",
                "ER",
                "Any bystander"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "Which ALS KPI applies?",
            "options": [
                "GCS <8 or SBP <90 with transfer over 10 minutes",
                "All trauma",
                "Only children",
                "None"
            ],
            "correct": 0,
            "explanation": "KPI 4."
        },
        {
            "q": "What does the secondary survey include?",
            "options": [
                "Detailed head-to-toe and OPQRST/SAMPLE",
                "Only vitals",
                "Only pain",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "To find non-life-threatening injuries."
        }
    ],
    "flashcards": [
        {
            "question": "C-ABC",
            "answer": "Catastrophic hemorrhage/C-spine, Airway, Breathing, Circulation."
        },
        {
            "question": "Catastrophic bleeding",
            "answer": "Tourniquet, pressure or hemostatic dressing."
        },
        {
            "question": "Airway with suspected c-spine injury",
            "answer": "Jaw thrust."
        },
        {
            "question": "Oxygen target",
            "answer": "SpO₂ >94%."
        },
        {
            "question": "Tension pneumothorax",
            "answer": "Tracheal deviation, reduced breath sounds, hypotension: needle decompression (P)."
        },
        {
            "question": "Open chest wound",
            "answer": "Chest seal."
        },
        {
            "question": "Unstable pelvis",
            "answer": "Pelvic binder."
        },
        {
            "question": "Adult fluid",
            "answer": "SBP <90 or HR >120: 500 mL, repeat to SBP 90, maximum 2000 mL."
        },
        {
            "question": "Pediatric fluid",
            "answer": "Tachycardia plus poor perfusion: 20 mL/kg, repeat, maximum 60 mL/kg."
        },
        {
            "question": "TBI fluid target",
            "answer": "Adults SBP 120 mmHg; children normal SBP for age."
        },
        {
            "question": "Adult TXA",
            "answer": "1000 mg IV/IO in 100 mL NS over 10 minutes (P)."
        },
        {
            "question": "Pediatric TXA",
            "answer": "15 mg/kg (max 1000 mg) in NS to 20 mL over 10 minutes."
        },
        {
            "question": "TXA timing",
            "answer": "Within 3 hours; ideally within 1 hour. Reduce in renal impairment."
        },
        {
            "question": "Hypothermia",
            "answer": "Remove wet clothing, foil blanket, limit exposure."
        },
        {
            "question": "Reassessment intervals",
            "answer": "Red 5, Yellow 10, Green 15 minutes."
        },
        {
            "question": "Scene time",
            "answer": "Under 10 minutes for Red priority."
        },
        {
            "question": "Destination",
            "answer": "Level 1 trauma center for critical patients; Airwing if ground >30 minutes."
        },
        {
            "question": "Red flags",
            "answer": "Uncontrolled bleeding or shock; GCS ≤8, unequal pupils, posturing; SpO₂ <90%; cord injury; high-risk mechanism."
        },
        {
            "question": "Children",
            "answer": "Broselow tape; involve a parent; adjust SMR devices and splints."
        },
        {
            "question": "KPIs",
            "answer": "Tourniquet, pelvic binder, chest seal; ALS for GCS <8 or SBP <90 with transfer >10 min; scene <10 min for Red."
        }
    ],
    "critical": [
        {
            "id": "crit_7_1_1",
            "scenario": "After a high-speed collision a man has GCS 6, a large scalp wound and blood pooling in his mouth. No limb bleeding.",
            "question": "What first?",
            "options": [
                {
                    "t": "Manual c-spine control, suction and jaw thrust, oxygen; ALS back-up; rapid transport",
                    "f": "Correct."
                },
                {
                    "t": "Head tilt–chin lift",
                    "f": "Use jaw thrust with suspected c-spine injury."
                },
                {
                    "t": "Scalp dressing before the airway",
                    "f": "The airway threat comes first here."
                },
                {
                    "t": "Long scene workup",
                    "f": "Scene time under 10 minutes."
                }
            ],
            "correct": 0,
            "explanation": "GCS ≤8 is a red flag; request ALS and move.",
            "kpi": "ALS back-up for GCS <8 or SBP <90 with transfer >10 minutes."
        },
        {
            "id": "crit_7_1_2",
            "scenario": "A gunshot wound to the right chest: breathing fast, absent breath sounds on the right, trachea deviated left, BP 80/50.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Chest seal on the wound and needle decompression (P) for tension pneumothorax",
                    "f": "Correct."
                },
                {
                    "t": "Fluids only",
                    "f": "Treat the tension first."
                },
                {
                    "t": "Wait for hospital",
                    "f": "A reversible life threat."
                },
                {
                    "t": "BVM only",
                    "f": "Decompress."
                }
            ],
            "correct": 0,
            "explanation": "Tracheal deviation, reduced breath sounds and hypotension indicate decompression.",
            "kpi": "Chest seal for open or sucking chest wounds."
        },
        {
            "id": "crit_7_1_3",
            "scenario": "A motorcyclist has severe pelvic pain and an unstable pelvis; BP 100/70, HR 110.",
            "question": "What next?",
            "options": [
                {
                    "t": "Pelvic binder, IV access, TXA if bleeding is uncontrolled, rapid transport",
                    "f": "Correct."
                },
                {
                    "t": "Repeatedly spring the pelvis",
                    "f": "Do not keep testing an unstable pelvis."
                },
                {
                    "t": "500 mL fluid now",
                    "f": "SBP >90 and HR <120: no fluid yet; monitor."
                },
                {
                    "t": "Walk him to the ambulance",
                    "f": "No."
                }
            ],
            "correct": 0,
            "explanation": "Pelvic binder for an unstable pelvis is a KPI.",
            "kpi": "Pelvic binder for an unstable pelvis."
        },
        {
            "id": "crit_7_1_4",
            "scenario": "An adult in hemorrhagic shock: BP 80/50, HR 130, bleeding controlled with a tourniquet 40 minutes after injury.",
            "question": "Which treatment?",
            "options": [
                {
                    "t": "500 mL bolus, repeat to SBP 90 (max 2000 mL); TXA 1000 mg over 10 minutes (P)",
                    "f": "Correct."
                },
                {
                    "t": "2000 mL at once",
                    "f": "Give 500 mL boluses."
                },
                {
                    "t": "TXA is too late",
                    "f": "Within 3 hours, ideally 1 hour."
                },
                {
                    "t": "No fluids",
                    "f": "SBP <90: fluid."
                }
            ],
            "correct": 0,
            "explanation": "Fluid by numbers and early TXA.",
            "kpi": "Tourniquet for uncontrolled limb bleeding."
        },
        {
            "id": "crit_7_1_5",
            "scenario": "A man with a head injury (GCS 10) is hypotensive at 95/60.",
            "question": "What fluid target applies?",
            "options": [
                {
                    "t": "Boluses to SBP 120 mmHg",
                    "f": "Correct. TBI has a higher target."
                },
                {
                    "t": "No fluid: SBP is over 90",
                    "f": "With TBI the adult target is 120."
                },
                {
                    "t": "SBP 90 only",
                    "f": "That is the non-TBI target."
                },
                {
                    "t": "Fluid restriction",
                    "f": "Hypotension worsens brain injury."
                }
            ],
            "correct": 0,
            "explanation": "Traumatic Brain Injury fluid target: adults SBP 120 mmHg.",
            "kpi": "Scene time under 10 minutes for Red priority."
        }
    ]
};
