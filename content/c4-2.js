/* ========== CPG 4.2 – Pediatric Basic Life Support ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c4-2",
    "title": "Pediatric Basic Life Support",
    "shortTitle": "4.2 Pediatric BLS",
    "guide": {
        "cpg": "4.2",
        "group": "resus",
        "groupLabel": "Resuscitation",
        "title": "Pediatric Basic Life Support",
        "lead": "Children usually arrest from respiratory failure or shock, so oxygenation and ventilation come first. Compress one third of the chest depth at 100–120/min, use 15:2 with two rescuers, and get the AED on early.",
        "source": {
            "label": "CPG 4.2",
            "pages": "97–100",
            "pdf": "../pdf_sections/4_2_Pediatric_Basic_Life_Support.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Infants and children ≤13 years who are unresponsive, not breathing normally and/or pulseless (the flowchart title says &lt;13 years).",
                    "Infants and children with inadequate circulation needing BLS."
                ],
                "exclude": [
                    "Obvious irreversible death (rigor mortis, dependent lividity, decapitation)."
                ]
            },
            {
                "type": "steps",
                "title": "BLS sequence",
                "icon": "list",
                "steps": [
                    {
                        "title": "Scene safety and responsiveness",
                        "text": "Tactile and verbal stimuli (AVPU)."
                    },
                    {
                        "title": "Request ALS back-up",
                        "text": "Within 5 minutes of arrival if not already activated. Say \"pediatric cardiac arrest\" and confirm the ALS ETA. The second rescuer brings the defibrillator and equipment."
                    },
                    {
                        "title": "Airway, breathing and pulse together",
                        "text": "Head-tilt/chin-lift, or jaw thrust if trauma is suspected. Check breathing (gasping is not normal) and a central pulse within 10 seconds: carotid over 1 year, brachial under 1 year."
                    },
                    {
                        "title": "No breathing or only gasping, no pulse: CPR",
                        "level": "EMR",
                        "text": "1 rescuer 30:2; 2 or more rescuers 15:2. Also start compressions if the heart rate is &lt;60 bpm with poor perfusion despite oxygenation and ventilation."
                    },
                    {
                        "title": "Defibrillator",
                        "level": "EMR",
                        "text": "As soon as available; follow the AED. Shock advised: 1 shock, then CPR for 2 minutes. Not shockable: CPR immediately for 2 minutes."
                    },
                    {
                        "title": "Blood glucose",
                        "text": "Check during resuscitation; treat hypoglycemia as per the Hypoglycemia CPG."
                    },
                    {
                        "title": "Continue until ALS arrives",
                        "text": "Check for ROSC (spontaneous pulse, normal breathing) every 2 minutes. If ALS is delayed and hospital is near, consider transport with effective CPR."
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
                            "Rescue breathing: 1 breath every 2–3 seconds (20–30 breaths/min).",
                            "Check the pulse every 2 minutes. No pulse, or HR &lt;60 with poor perfusion despite ventilation: start CPR.",
                            "Possible opioid overdose: Overdose/Poisoning CPG."
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
                "type": "table",
                "title": "High-quality pediatric CPR",
                "icon": "activity",
                "columns": [
                    "",
                    "Infant (&lt;1 year)",
                    "Child"
                ],
                "rows": [
                    [
                        "Pulse check",
                        "Brachial",
                        "Carotid"
                    ],
                    [
                        "Depth",
                        "At least 1/3 chest depth (~4 cm)",
                        "At least 1/3 chest depth (~5 cm)"
                    ],
                    [
                        "Rate",
                        "100–120/min",
                        "100–120/min"
                    ],
                    [
                        "Ratio",
                        "30:2 (1 rescuer); 15:2 (2+)",
                        "30:2 (1 rescuer); 15:2 (2+)"
                    ],
                    [
                        "Rescue breathing (pulse present)",
                        "1 breath every 2–3 seconds",
                        "1 breath every 2–3 seconds"
                    ]
                ],
                "notes": [
                    "Full recoil, no leaning on the chest; interruptions under 10 seconds.",
                    "Two effective breaths after each set of compressions; BVM with 100% oxygen as soon as available.",
                    "Avoid hyperventilation: aim for SpO<sub>2</sub> ≥94% and EtCO<sub>2</sub> 35–45 mmHg."
                ]
            },
            {
                "type": "groups",
                "title": "Pads and safety",
                "icon": "zap",
                "groups": [
                    {
                        "title": "Pads",
                        "items": [
                            "Use adult pads if the child is &gt;13 years or &gt;55 kg.",
                            "No pediatric pads available: use adult pads."
                        ]
                    },
                    {
                        "title": "Safety",
                        "items": [
                            "Correct depth and rate; minimal interruptions.",
                            "Size-appropriate equipment.",
                            "Protect the airway and cervical spine if trauma is suspected.",
                            "Defibrillate as soon as possible for a shockable rhythm."
                        ]
                    },
                    {
                        "title": "Reversible causes (4 H's and 4 T's)",
                        "items": [
                            "Hypoxia, hypovolemia, hypothermia, hypo/hyperkalemia.",
                            "Toxins, tamponade, tension pneumothorax, thrombosis."
                        ]
                    }
                ]
            },
            {
                "type": "list",
                "title": "Key performance indicator",
                "icon": "chart-no-axes-column",
                "items": [
                    "CPR within 1 minute of recognising cardiac arrest."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "4.1 Adult BLS",
                        "href": "c4-1.html"
                    },
                    {
                        "label": "4.4 Pediatric Cardiac Arrest",
                        "href": "c4-4.html"
                    },
                    {
                        "label": "4.6 Newborn Resuscitation",
                        "href": "c4-6.html"
                    },
                    {
                        "label": "6.8 Hypoglycemia",
                        "href": "c6-8.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "What is the compression-ventilation ratio for one rescuer in pediatric BLS?",
            "options": [
                "15:2",
                "30:2",
                "3:1",
                "5:1"
            ],
            "correct": 1,
            "explanation": "Single rescuer 30:2; two or more rescuers 15:2."
        },
        {
            "q": "What is the ratio with two or more rescuers?",
            "options": [
                "30:2",
                "15:2",
                "3:1",
                "10:1"
            ],
            "correct": 1,
            "explanation": "Two or more rescuers: 15:2."
        },
        {
            "q": "What compression depth is used in infants?",
            "options": [
                "~2 cm",
                "At least 1/3 of the chest depth (~4 cm)",
                "~6 cm",
                "Half the chest depth"
            ],
            "correct": 1,
            "explanation": "At least 1/3 the anterior-posterior diameter: ~4 cm in infants, ~5 cm in children."
        },
        {
            "q": "What compression depth is used in children?",
            "options": [
                "~3 cm",
                "At least 1/3 of the chest depth (~5 cm)",
                "~7 cm",
                "As deep as possible"
            ],
            "correct": 1,
            "explanation": "~5 cm in children (at least one third of the chest depth)."
        },
        {
            "q": "What compression rate is used?",
            "options": [
                "80–100/min",
                "100–120/min",
                "120–140/min",
                "60/min"
            ],
            "correct": 1,
            "explanation": "100–120 per minute with full recoil."
        },
        {
            "q": "Where is the pulse checked in an infant under 1 year?",
            "options": [
                "Carotid",
                "Brachial",
                "Radial",
                "Femoral"
            ],
            "correct": 1,
            "explanation": "Brachial in infants <1 year; carotid in children >1 year."
        },
        {
            "q": "Where is the pulse checked in a child over 1 year?",
            "options": [
                "Brachial",
                "Carotid",
                "Pedal",
                "Temporal"
            ],
            "correct": 1,
            "explanation": "Carotid in children >1 year."
        },
        {
            "q": "How long may the breathing and pulse check take?",
            "options": [
                "No more than 10 seconds",
                "30 seconds",
                "1 minute",
                "As long as needed"
            ],
            "correct": 0,
            "explanation": "Check breathing and pulse within 10 seconds."
        },
        {
            "q": "Is gasping normal breathing?",
            "options": [
                "Yes",
                "No",
                "Only in infants",
                "Only after a shock"
            ],
            "correct": 1,
            "explanation": "Gasping is not normal breathing."
        },
        {
            "q": "A child has a pulse of 50 with poor perfusion despite good ventilation. What do you do?",
            "options": [
                "Continue rescue breathing only",
                "Start chest compressions",
                "Shock with the AED",
                "Wait for ALS"
            ],
            "correct": 1,
            "explanation": "No pulse, or HR <60 with poor perfusion despite oxygenation and ventilation: begin compressions."
        },
        {
            "q": "What is the rescue breathing rate for a child with a pulse?",
            "options": [
                "1 breath every 6 seconds",
                "1 breath every 2–3 seconds (20–30 breaths/min)",
                "1 breath every 10 seconds",
                "40 breaths/min"
            ],
            "correct": 1,
            "explanation": "Pediatric rescue breathing: 1 breath every 2–3 seconds (20–30 breaths/min)."
        },
        {
            "q": "Within what time should ALS back-up be requested?",
            "options": [
                "Within 5 minutes of arrival if not already activated",
                "Within 30 minutes",
                "Only after ROSC",
                "Never for children"
            ],
            "correct": 0,
            "explanation": "Request ALS within 5 minutes of arrival, specifying 'pediatric cardiac arrest' and confirming the ETA."
        },
        {
            "q": "What should you tell dispatch when requesting ALS?",
            "options": [
                "Nothing extra",
                "'Pediatric cardiac arrest', and confirm the ALS ETA",
                "The child's school",
                "Only the address"
            ],
            "correct": 1,
            "explanation": "Specify 'pediatric cardiac arrest' and confirm the ETA."
        },
        {
            "q": "No pediatric pads are available. What do you do?",
            "options": [
                "Do not use the AED",
                "Use adult pads",
                "Cut the adult pads",
                "Wait for ALS"
            ],
            "correct": 1,
            "explanation": "If no pediatric pads are available, use adult pads."
        },
        {
            "q": "When are adult pads used anyway?",
            "options": [
                "Over 5 years",
                "Over 13 years or over 55 kg",
                "Over 20 kg",
                "Never in children"
            ],
            "correct": 1,
            "explanation": "Use adult pads if the patient is >13 years old or >55 kg."
        },
        {
            "q": "The AED advises a shock. What after the shock?",
            "options": [
                "Pulse check for 30 seconds",
                "Resume CPR immediately for 2 minutes",
                "Second shock immediately",
                "Stop CPR"
            ],
            "correct": 1,
            "explanation": "Give 1 shock, then CPR immediately for 2 minutes until the AED prompts."
        },
        {
            "q": "What should be checked during pediatric resuscitation besides rhythm?",
            "options": [
                "Temperature only",
                "Blood glucose",
                "Pupils only",
                "Nothing"
            ],
            "correct": 1,
            "explanation": "Check blood glucose during resuscitation; treat hypoglycemia per the Hypoglycemia CPG."
        },
        {
            "q": "What is the most common cause of pediatric cardiac arrest according to the CPG?",
            "options": [
                "Primary heart disease",
                "Respiratory failure or shock",
                "Trauma only",
                "Hyperthermia"
            ],
            "correct": 1,
            "explanation": "Often secondary to respiratory failure or shock; prioritize oxygenation and ventilation."
        },
        {
            "q": "What SpO2 do the goals aim for, avoiding hyperoxia?",
            "options": [
                "≥94%",
                "100%",
                "88–92%",
                "≥85%"
            ],
            "correct": 0,
            "explanation": "Provide just enough oxygen for SpO2 ≥94%."
        },
        {
            "q": "What EtCO2 range do the goals aim for to avoid hyperventilation?",
            "options": [
                "10–20 mmHg",
                "35–45 mmHg",
                ">50 mmHg",
                "20–30 mmHg"
            ],
            "correct": 1,
            "explanation": "Maintain EtCO2 in the normal range (35–45 mmHg)."
        },
        {
            "q": "How should the airway be opened if trauma is suspected?",
            "options": [
                "Head-tilt/chin-lift",
                "Jaw thrust",
                "Neck extension",
                "Prone position"
            ],
            "correct": 1,
            "explanation": "Jaw thrust if trauma suspected; head-tilt/chin-lift if not."
        },
        {
            "q": "ALS is delayed and the hospital is close. What does CPG 4.2 suggest?",
            "options": [
                "Wait on scene regardless",
                "Consider transport while maintaining effective CPR",
                "Stop CPR",
                "Call the family"
            ],
            "correct": 1,
            "explanation": "If ALS is delayed and hospital is nearby, consider transport while maintaining effective CPR."
        },
        {
            "q": "Which is one of the 4 H's in CPG 4.2?",
            "options": [
                "Hyperthermia",
                "Hypovolemia",
                "Hypertension",
                "Hyperglycemia"
            ],
            "correct": 1,
            "explanation": "4 H's: hypoxia, hypovolemia, hypothermia, hypo/hyperkalemia."
        },
        {
            "q": "Which is one of the 4 T's in CPG 4.2?",
            "options": [
                "Trauma",
                "Tamponade",
                "Tachycardia",
                "Temperature"
            ],
            "correct": 1,
            "explanation": "4 T's: toxins, tamponade, tension pneumothorax, thrombosis."
        },
        {
            "q": "How often are signs of ROSC checked?",
            "options": [
                "Every 30 seconds",
                "Every 2 minutes",
                "Every 10 minutes",
                "Never"
            ],
            "correct": 1,
            "explanation": "Every 2 minutes."
        },
        {
            "q": "What is the lowest clinical level for pediatric CPR and AED?",
            "options": [
                "EMR",
                "EMT",
                "P",
                "AP"
            ],
            "correct": 0,
            "explanation": "CPR and defibrillator use are marked EMR."
        },
        {
            "q": "What is the maximum interruption in compressions?",
            "options": [
                "Under 10 seconds",
                "20 seconds",
                "30 seconds",
                "1 minute"
            ],
            "correct": 0,
            "explanation": "Minimize interruptions to under 10 seconds."
        },
        {
            "q": "When should BVM with 100% oxygen be used?",
            "options": [
                "Only after ROSC",
                "As soon as available",
                "Never in infants",
                "Only by ALS"
            ],
            "correct": 1,
            "explanation": "Use BVM with 100% oxygen as soon as available."
        },
        {
            "q": "What triage category is an unconscious child?",
            "options": [
                "Yellow",
                "Red",
                "Green",
                "Depends on age"
            ],
            "correct": 1,
            "explanation": "All unconscious and cardiac arrest patients are Red Priority."
        },
        {
            "q": "What is the KPI of CPG 4.2?",
            "options": [
                "AED within 1 minute",
                "CPR within 1 minute of recognition",
                "ALS within 1 minute",
                "Transport within 10 minutes"
            ],
            "correct": 1,
            "explanation": "KPI: initiate CPR within 1 minute of recognising cardiac arrest."
        }
    ],
    "flashcards": [
        {
            "category": "Ratio",
            "question": "Pediatric compression-ventilation ratio?",
            "answer": "1 rescuer 30:2; 2 or more rescuers 15:2."
        },
        {
            "category": "Depth",
            "question": "Compression depth?",
            "answer": "At least 1/3 of chest depth: ~4 cm infant, ~5 cm child."
        },
        {
            "category": "Rate",
            "question": "Compression rate?",
            "answer": "100–120/min, full recoil, no leaning."
        },
        {
            "category": "Pulse",
            "question": "Pulse check site?",
            "answer": "Brachial under 1 year; carotid over 1 year; within 10 seconds."
        },
        {
            "category": "Breathing",
            "question": "Is gasping breathing?",
            "answer": "No: gasping is not normal breathing."
        },
        {
            "category": "Bradycardia",
            "question": "When to compress a child with a pulse?",
            "answer": "HR <60 with poor perfusion despite oxygenation and ventilation."
        },
        {
            "category": "Rescue breathing",
            "question": "Pediatric rescue breathing rate?",
            "answer": "1 breath every 2–3 seconds (20–30 breaths/min); pulse check every 2 minutes."
        },
        {
            "category": "ALS",
            "question": "ALS request in pediatric arrest?",
            "answer": "Within 5 minutes of arrival; say 'pediatric cardiac arrest'; confirm ETA."
        },
        {
            "category": "Pads",
            "question": "No pediatric pads?",
            "answer": "Use adult pads."
        },
        {
            "category": "Pads",
            "question": "When adult pads anyway?",
            "answer": ">13 years or >55 kg."
        },
        {
            "category": "AED",
            "question": "Shock advised?",
            "answer": "1 shock, then CPR immediately for 2 minutes until the AED prompts."
        },
        {
            "category": "AED",
            "question": "Not shockable?",
            "answer": "Resume CPR immediately for 2 minutes."
        },
        {
            "category": "Glucose",
            "question": "Glucose in pediatric arrest?",
            "answer": "Check during resuscitation; treat hypoglycemia per the Hypoglycemia CPG."
        },
        {
            "category": "Causes",
            "question": "Usual cause of pediatric arrest?",
            "answer": "Respiratory failure or shock: prioritize oxygenation and ventilation."
        },
        {
            "category": "Causes",
            "question": "4 H's?",
            "answer": "Hypoxia, hypovolemia, hypothermia, hypo/hyperkalemia."
        },
        {
            "category": "Causes",
            "question": "4 T's?",
            "answer": "Toxins, tamponade, tension pneumothorax, thrombosis."
        },
        {
            "category": "Ventilation",
            "question": "Ventilation targets?",
            "answer": "Avoid hyperventilation; SpO2 ≥94%; EtCO2 35–45 mmHg."
        },
        {
            "category": "Ventilation",
            "question": "Breaths during CPR?",
            "answer": "2 effective breaths after each set of compressions; BVM with 100% oxygen as soon as available."
        },
        {
            "category": "Airway",
            "question": "Opening the airway?",
            "answer": "Head-tilt/chin-lift; jaw thrust if trauma suspected."
        },
        {
            "category": "ROSC",
            "question": "ROSC checks?",
            "answer": "Spontaneous pulse, normal breathing; every 2 minutes."
        },
        {
            "category": "Transport",
            "question": "ALS delayed, hospital near?",
            "answer": "Consider transport while maintaining effective CPR."
        },
        {
            "category": "Scope",
            "question": "Level for pediatric CPR and AED?",
            "answer": "EMR and above."
        },
        {
            "category": "Inclusion",
            "question": "Who is included in CPG 4.2?",
            "answer": "Infants and children ≤13 (title: <13) who are unresponsive, not breathing normally and/or pulseless, or with inadequate circulation."
        },
        {
            "category": "Exclusion",
            "question": "Who is excluded?",
            "answer": "Obvious irreversible death."
        },
        {
            "category": "Safety",
            "question": "Safety points?",
            "answer": "Avoid over-ventilation; correct depth and rate; minimal pauses; right-sized equipment; protect airway and C-spine in trauma."
        },
        {
            "category": "Interruptions",
            "question": "Maximum pause in compressions?",
            "answer": "Under 10 seconds."
        },
        {
            "category": "Opioids",
            "question": "Possible opioid overdose with a pulse?",
            "answer": "Overdose/Poisoning CPG."
        },
        {
            "category": "Triage",
            "question": "Triage?",
            "answer": "Unconscious and cardiac arrest patients are Red Priority."
        },
        {
            "category": "Teamwork",
            "question": "Team point in the clinical insights?",
            "answer": "Clear communication and delegation of tasks."
        },
        {
            "category": "KPI",
            "question": "CPG 4.2 KPI?",
            "answer": "CPR within 1 minute of recognising cardiac arrest."
        }
    ],
    "critical": [
        {
            "id": "crit_4_2_1",
            "scenario": "A 2-year-old is found unresponsive and not breathing. You cannot feel a carotid pulse within 10 seconds. You are alone; your partner is fetching the bag.",
            "question": "What do you start?",
            "options": [
                {
                    "t": "CPR at 30:2, compressions at least 1/3 chest depth (~5 cm), 100–120/min",
                    "f": "Correct. A single rescuer uses 30:2."
                },
                {
                    "t": "CPR at 15:2",
                    "f": "15:2 is for two or more rescuers."
                },
                {
                    "t": "Rescue breathing only",
                    "f": "There is no pulse: start CPR."
                },
                {
                    "t": "Wait for your partner before doing anything",
                    "f": "Start CPR now; KPI is within 1 minute."
                }
            ],
            "correct": 0,
            "explanation": "No breathing (or gasping) and no pulse: start CPR. Single rescuer 30:2, switching to 15:2 when your partner joins. Defibrillator as soon as available.",
            "kpi": "CPR within 1 minute of recognising cardiac arrest."
        },
        {
            "id": "crit_4_2_2",
            "scenario": "A 6-month-old is not breathing normally. A brachial pulse is present at 50 bpm and the baby is mottled and floppy despite good BVM ventilation with oxygen.",
            "question": "What now?",
            "options": [
                {
                    "t": "Start chest compressions (15:2 with two rescuers)",
                    "f": "Correct. HR <60 with poor perfusion despite oxygenation and ventilation means compressions."
                },
                {
                    "t": "Rescue breathing only and recheck in 10 minutes",
                    "f": "Recheck every 2 minutes; with HR <60 and poor perfusion, compress now."
                },
                {
                    "t": "Shock with the AED",
                    "f": "Follow the AED; first start CPR."
                },
                {
                    "t": "Transport without CPR",
                    "f": "Start compressions."
                }
            ],
            "correct": 0,
            "explanation": "If no pulse, or HR <60 bpm with poor perfusion despite oxygenation and ventilation, begin chest compressions.",
            "kpi": "CPR within 1 minute of recognising cardiac arrest."
        },
        {
            "id": "crit_4_2_3",
            "scenario": "A 4-year-old is in cardiac arrest. The defibrillator arrives but there are no pediatric pads.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Use adult pads and follow the AED",
                    "f": "Correct. If no pediatric pads are available, use adult pads."
                },
                {
                    "t": "Do not defibrillate",
                    "f": "Defibrillate as soon as possible when shockable."
                },
                {
                    "t": "Wait for ALS to bring pediatric pads",
                    "f": "Use adult pads now."
                },
                {
                    "t": "Cut the adult pads smaller",
                    "f": "Use adult pads as they are."
                }
            ],
            "correct": 0,
            "explanation": "Apply the AED as soon as available; use adult pads if pediatric pads are not available (and routinely for >13 years or >55 kg).",
            "kpi": "CPR within 1 minute of recognising cardiac arrest."
        },
        {
            "id": "crit_4_2_4",
            "scenario": "A 5-year-old is in cardiac arrest after a drowning. The AED says no shock advised.",
            "ecg": "asystole",
            "question": "What should you prioritise?",
            "options": [
                {
                    "t": "Resume CPR at once, with effective ventilation and oxygen; check glucose; consider transport if ALS is delayed and hospital is near",
                    "f": "Correct. Pediatric arrest is often respiratory: prioritize oxygenation and ventilation."
                },
                {
                    "t": "Compressions only, no breaths",
                    "f": "Children need effective ventilations."
                },
                {
                    "t": "Stop: no shock means no hope",
                    "f": "Continue CPR until ALS arrives."
                },
                {
                    "t": "Hyperventilate to clear CO2",
                    "f": "Avoid hyperventilation; target EtCO2 35–45 mmHg."
                }
            ],
            "correct": 0,
            "explanation": "Pediatric arrest is often secondary to respiratory failure; give 2 effective breaths per cycle with BVM and 100% oxygen, check glucose and consider early transport if ALS is delayed.",
            "kpi": "CPR within 1 minute of recognising cardiac arrest."
        },
        {
            "id": "crit_4_2_5",
            "scenario": "A 13-year-old weighing 60 kg collapses during football and is in cardiac arrest.",
            "question": "Which pads do you use?",
            "options": [
                {
                    "t": "Adult pads (over 55 kg)",
                    "f": "Correct. Use adult pads if the patient is >13 years or >55 kg."
                },
                {
                    "t": "Pediatric pads because he is 13",
                    "f": "At 60 kg, use adult pads."
                },
                {
                    "t": "No pads",
                    "f": "Defibrillate as soon as possible."
                },
                {
                    "t": "Whatever is on top of the bag",
                    "f": "Choose by age and weight."
                }
            ],
            "correct": 0,
            "explanation": "Adult pads for patients >13 years or >55 kg. Start CPR within 1 minute and apply the AED as soon as available.",
            "kpi": "CPR within 1 minute of recognising cardiac arrest."
        }
    ]
};
