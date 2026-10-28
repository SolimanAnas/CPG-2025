/* ========== CPG 4.6 – Newborn and Preterm Infant Resuscitation ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c4-6",
    "title": "Newborn and Preterm Infant Resuscitation",
    "shortTitle": "4.6 Newborn Resuscitation",
    "guide": {
        "cpg": "4.6",
        "group": "resus",
        "groupLabel": "Resuscitation",
        "title": "Newborn and Preterm Infant Resuscitation",
        "lead": "Most newborns need only drying, warming and stimulation. Ventilation is the key intervention: start with room air, and judge every step by the heart rate. Compress at 3:1 only when the heart rate is below 60.",
        "source": {
            "label": "CPG 4.6",
            "pages": "115–119",
            "pdf": "../pdf_sections/4_6_Newborn_4_weeks_and_Pre-term_Infant_Resuscitation.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "baby",
                "include": [
                    "Newborns (&lt;4 weeks) and preterm infants needing resuscitation for apnea or gasping, heart rate &lt;100 bpm at 1 minute, cyanosis or pallor, poor tone or no cry."
                ],
                "exclude": [
                    "Infants &gt;4 weeks: Pediatric Cardiac Arrest CPG."
                ]
            },
            {
                "type": "gate",
                "title": "At birth",
                "icon": "circle-help",
                "question": "Term gestation, good tone, breathing or crying?",
                "yes": "Routine care: Childbirth CPG.",
                "no": "Consider ALS back-up and start the first steps below."
            },
            {
                "type": "steps",
                "title": "Resuscitation sequence",
                "icon": "list",
                "steps": [
                    {
                        "title": "First steps (within the first minute)",
                        "text": "Warm and keep normothermic; position the airway (sniffing position); dry and stimulate. Wrap in a dry towel, thermal blanket or clean plastic bag up to the neck; cover the head. Suction mouth then nose only for respiratory distress with obstruction: routine suctioning is not recommended."
                    },
                    {
                        "title": "Labored breathing or persistent cyanosis",
                        "text": "Position the airway, SpO<sub>2</sub> monitor, supplemental oxygen as needed (start with low FiO<sub>2</sub>); consider CPAP."
                    },
                    {
                        "title": "Apnea, gasping or HR &lt;100/min: ventilate",
                        "text": "PPV by BVM at 40–60 breaths per minute with room air for 90 seconds; do not add oxygen initially. SpO<sub>2</sub> and ECG monitor. Consider OPA, NPA or intubation."
                    },
                    {
                        "title": "Reassess the heart rate every 30 seconds",
                        "text": "A rising heart rate is the main sign of effective ventilation. Use only the rate and volume needed for chest rise and a change in heart rate.",
                        "items": [
                            "HR still &lt;100/min: check chest movement, take corrective ventilation steps, ETT or supraglottic airway if needed.",
                            "No improvement after 90 seconds: change to 100% FiO<sub>2</sub> until the heart rate normalises."
                        ]
                    },
                    {
                        "title": "HR &lt;60/min: compressions",
                        "text": "Two-thumb-encircling-hands technique at 3:1 compressions to ventilations, with 100% oxygen via BVM. Consider intubation or a supraglottic airway; connect the ventilator with PEEP; IV or IO access."
                    },
                    {
                        "title": "HR persistently &lt;60/min: adrenaline",
                        "doses": [
                            {
                                "drug": "Adrenaline",
                                "dose": "0.01 mg/kg IV/IO",
                                "note": "Every 3–5 minutes while the HR stays below 60 bpm"
                            },
                            {
                                "drug": "Normal saline",
                                "dose": "20 mL/kg IV/IO",
                                "note": "Signs of shock, or post-resuscitation care"
                            }
                        ]
                    },
                    {
                        "title": "Blood glucose",
                        "text": "Check it."
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Cord and placenta",
                "icon": "bandage",
                "groups": [
                    {
                        "title": "Cutting the cord",
                        "items": [
                            "If the baby does not improve rapidly, or needs immediate resuscitation: clamp in three places (10 cm, 15 cm, 20 cm) and cut between the two clamps furthest from the newborn."
                        ]
                    },
                    {
                        "title": "Placenta",
                        "items": [
                            "If delivered, place it in a biohazard bag and transport it with the patient."
                        ]
                    }
                ]
            },
            {
                "type": "table",
                "title": "APGAR score (1 and 5 minutes)",
                "icon": "clipboard-list",
                "stack": true,
                "columns": [
                    "Sign",
                    "2 points",
                    "1 point",
                    "0 points"
                ],
                "rows": [
                    [
                        "Appearance (skin colour)",
                        "Normal over entire body",
                        "Normal except extremities",
                        "Cyanotic or pale all over"
                    ],
                    [
                        "Pulse",
                        "&gt;100 bpm",
                        "&lt;100 bpm",
                        "Absent"
                    ],
                    [
                        "Grimace (reflex irritability)",
                        "Sneezes, coughs or vigorous cry",
                        "Grimaces",
                        "No response"
                    ],
                    [
                        "Activity (muscle tone)",
                        "Active",
                        "Arms and legs flexed",
                        "Absent"
                    ],
                    [
                        "Respirations",
                        "Good, crying",
                        "Gasping, irregular",
                        "Absent"
                    ]
                ]
            },
            {
                "type": "table",
                "title": "Expected SpO₂ after birth (right hand)",
                "icon": "activity",
                "columns": [
                    "Time since birth",
                    "SpO<sub>2</sub>"
                ],
                "rows": [
                    [
                        "1 minute",
                        "60–65%"
                    ],
                    [
                        "2 minutes",
                        "65–70%"
                    ],
                    [
                        "3 minutes",
                        "70–75%"
                    ],
                    [
                        "4 minutes",
                        "75–80%"
                    ],
                    [
                        "5 minutes",
                        "80–85%"
                    ],
                    [
                        "10 minutes",
                        "85–90%"
                    ]
                ],
                "notes": [
                    "The right hand gives the most accurate reading during the transition from fetal circulation.",
                    "Both hypoxia and excess oxygen harm. If prolonged oxygen is needed, titrate to SpO<sub>2</sub> 85%–95%."
                ]
            },
            {
                "type": "groups",
                "title": "Assessment and safety",
                "icon": "stethoscope",
                "groups": [
                    {
                        "title": "Heart rate",
                        "items": [
                            "Precordium, umbilical stump or brachial pulse. Auscultation is preferred: palpating the stump is less accurate."
                        ]
                    },
                    {
                        "title": "Colour",
                        "items": [
                            "Acrocyanosis (blue hands and feet) is common in transition; distinguish it from central cyanosis."
                        ]
                    },
                    {
                        "title": "Hypothermia",
                        "items": [
                            "Common, and worsens nearly every complication; can cause hypoglycemia, hypoxia and lethargy.",
                            "Dry thoroughly, cover the head, swaddle. Skin-to-skin (kangaroo) care when no resuscitation is needed."
                        ]
                    },
                    {
                        "title": "Prematurity",
                        "items": [
                            "Any doubt about gestational age: start resuscitation.",
                            "&lt;23 weeks: comfort care may be given according to parental wishes.",
                            "Avoid routine resuscitation &lt;22 weeks unless parental wishes and clinical judgement indicate otherwise."
                        ]
                    },
                    {
                        "title": "Triage",
                        "items": [
                            "Any baby who needed ventilation or compressions after delivery is Red priority, even if improved."
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
                                "label": "Pediatric drug calculator",
                                "sub": "Adrenaline and fluid by weight",
                                "href": "../pages/drug-calculator.html?drug=Epinephrine%20(Adrenaline)",
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
                    "Compressions and ventilation within 30 seconds of the heart rate falling below 60 bpm."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "10.1 Childbirth",
                        "href": "c10-1.html"
                    },
                    {
                        "label": "4.2 Pediatric BLS",
                        "href": "c4-2.html"
                    },
                    {
                        "label": "4.4 Pediatric Cardiac Arrest",
                        "href": "c4-4.html"
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
            "q": "What compression to ventilation ratio is used in newborn CPR?",
            "options": [
                "3:1",
                "15:2",
                "30:2",
                "5:1"
            ],
            "correct": 0,
            "explanation": "Newborns: 3:1 with the two-thumb-encircling-hands technique."
        },
        {
            "q": "Which compression technique is preferred in a newborn?",
            "options": [
                "Two-thumb-encircling-hands",
                "Two-finger",
                "Heel of one hand",
                "Two hands, adult style"
            ],
            "correct": 0,
            "explanation": "The two-thumb-encircling-hands technique is preferred."
        },
        {
            "q": "At what heart rate do you start PPV?",
            "options": [
                "<100/min, or apnea or gasping",
                "<60/min only",
                "<160/min",
                "Only when pulseless"
            ],
            "correct": 0,
            "explanation": "Apnea, gasping or HR <100/min: assist ventilation."
        },
        {
            "q": "At what heart rate do you start compressions?",
            "options": [
                "<60/min despite ventilation",
                "<100/min",
                "<80/min",
                "Only at zero"
            ],
            "correct": 0,
            "explanation": "HR <60/min: start CPR at 3:1 with 100% oxygen."
        },
        {
            "q": "What gas do you ventilate with first?",
            "options": [
                "Room air",
                "100% oxygen",
                "Oxygen via CPAP only",
                "Nitrous oxide"
            ],
            "correct": 0,
            "explanation": "Start PPV with room air for 90 seconds; do not add oxygen initially."
        },
        {
            "q": "What SpO₂ is expected at 1 minute?",
            "options": [
                "60–65%",
                "85–90%",
                "95–100%",
                "40–45%"
            ],
            "correct": 0,
            "explanation": "60–65% at 1 minute, rising to 80–85% at 5 minutes and 85–90% at 10 minutes."
        },
        {
            "q": "What is the IV/IO adrenaline dose?",
            "options": [
                "0.01 mg/kg",
                "0.1 mg/kg",
                "1 mg",
                "0.5 mg"
            ],
            "correct": 0,
            "explanation": "Adrenaline 0.01 mg/kg IV/IO every 3–5 minutes while the HR stays below 60."
        },
        {
            "q": "When is adrenaline given?",
            "options": [
                "When the HR stays <60/min despite ventilation and compressions",
                "At HR <100/min",
                "Before ventilation",
                "Only after ROSC"
            ],
            "correct": 0,
            "explanation": "Ventilation first, then compressions; adrenaline if the HR stays below 60."
        },
        {
            "q": "What does APGAR score?",
            "options": [
                "Appearance, pulse, grimace, activity, respirations",
                "Airway, pulse, glucose, alertness, rhythm",
                "Age, pressure, gestation, apnea, reflexes",
                "Only colour and pulse"
            ],
            "correct": 0,
            "explanation": "Five signs each scored 2, 1 or 0, at 1 and 5 minutes after delivery."
        },
        {
            "q": "A baby's pulse is below 100 bpm. What APGAR score does pulse get?",
            "options": [
                "1",
                "2",
                "0",
                "3"
            ],
            "correct": 0,
            "explanation": ">100 bpm scores 2, <100 bpm scores 1, absent scores 0."
        },
        {
            "q": "A floppy, apneic newborn. What comes first?",
            "options": [
                "Warm, position the airway, dry and stimulate",
                "Compressions",
                "Adrenaline",
                "Intubation"
            ],
            "correct": 0,
            "explanation": "First steps, then ventilate if still apneic or HR <100."
        },
        {
            "q": "How often is the heart rate re-evaluated during ventilation?",
            "options": [
                "Every 30 seconds",
                "Every 5 minutes",
                "Only at the end",
                "Every 2 minutes"
            ],
            "correct": 0,
            "explanation": "Evaluate the heart rate every 30 seconds."
        },
        {
            "q": "Where should the SpO₂ probe go?",
            "options": [
                "Right hand",
                "Left foot",
                "Earlobe",
                "Left hand"
            ],
            "correct": 0,
            "explanation": "The right hand is most accurate during transition from fetal circulation."
        },
        {
            "q": "What is the best sign that resuscitation is working?",
            "options": [
                "Rising heart rate",
                "Pink hands and feet",
                "Crying mother",
                "Falling SpO₂"
            ],
            "correct": 0,
            "explanation": "An increase in heart rate is the most reliable indicator."
        },
        {
            "q": "Below what gestation is routine resuscitation avoided?",
            "options": [
                "22 weeks",
                "28 weeks",
                "32 weeks",
                "36 weeks"
            ],
            "correct": 0,
            "explanation": "Avoid routine resuscitation <22 weeks unless parental wishes and clinical judgement indicate otherwise."
        },
        {
            "q": "What fluid bolus is given for shock?",
            "options": [
                "20 mL/kg normal saline IV/IO",
                "5 mL/kg dextrose",
                "Fluids are never given",
                "A fixed 500 mL"
            ],
            "correct": 0,
            "explanation": "20 mL/kg normal saline for signs of shock or post-resuscitation care."
        },
        {
            "q": "The HR is still below 100 after starting PPV. What do you check first?",
            "options": [
                "Chest movement, then corrective ventilation steps",
                "Give adrenaline",
                "Start compressions",
                "Stop ventilating"
            ],
            "correct": 0,
            "explanation": "Check chest movement, correct ventilation, and use an ETT or supraglottic airway if needed."
        },
        {
            "q": "What PPV rate is used?",
            "options": [
                "40–60 breaths per minute",
                "10 breaths per minute",
                "80–100 breaths per minute",
                "As fast as possible"
            ],
            "correct": 0,
            "explanation": "BVM ventilation at 40–60 breaths per minute."
        },
        {
            "q": "No improvement after 90 seconds of room-air PPV. What changes?",
            "options": [
                "Oxygen to 100% FiO₂ until the HR normalises",
                "Stop ventilation",
                "Give adrenaline at once",
                "Reduce the rate"
            ],
            "correct": 0,
            "explanation": "After 90 seconds without improvement, change to 100% FiO₂."
        },
        {
            "q": "How is the umbilical cord cut when resuscitation is needed?",
            "options": [
                "Clamp at 10, 15 and 20 cm; cut between the two clamps furthest from the baby",
                "Cut flush with the abdomen",
                "Never cut it before hospital",
                "One clamp at 5 cm"
            ],
            "correct": 0,
            "explanation": "Three clamps; cut between the two furthest from the newborn."
        },
        {
            "q": "When is suctioning indicated?",
            "options": [
                "Respiratory distress with airway obstruction: mouth then nose",
                "Routinely in every baby",
                "Nose then mouth in every baby",
                "Only with meconium, always"
            ],
            "correct": 0,
            "explanation": "Routine suctioning is not recommended."
        },
        {
            "q": "A newborn needed PPV and is now pink and crying. What triage category?",
            "options": [
                "Red",
                "Green",
                "Yellow",
                "No triage needed"
            ],
            "correct": 0,
            "explanation": "Any newborn who needed ventilation or compressions is Red, even if improved."
        },
        {
            "q": "Which is a sign of respiratory distress in a newborn?",
            "options": [
                "Grunting, nasal flaring or retractions",
                "Acrocyanosis alone",
                "Strong cry",
                "Flexed limbs"
            ],
            "correct": 0,
            "explanation": "Also gasping and apnea."
        },
        {
            "q": "A newborn has a HR of 50 despite 30 seconds of effective ventilation. What next?",
            "options": [
                "Compressions at 3:1 with 100% oxygen",
                "Keep ventilating and recheck in 5 minutes",
                "Adrenaline before compressions",
                "Reduce oxygen"
            ],
            "correct": 0,
            "explanation": "HR <60: start CPR at 3:1."
        },
        {
            "q": "Which warming method suits a well baby who needs no resuscitation?",
            "options": [
                "Kangaroo care (skin-to-skin with the mother)",
                "Leave uncovered to cool",
                "Cold towel",
                "A fan"
            ],
            "correct": 0,
            "explanation": "Skin-to-skin care is an effective warming technique when no resuscitation is needed."
        },
        {
            "q": "How should a premature newborn be wrapped?",
            "options": [
                "Dry towel, thermal blanket or clean plastic bag up to the neck, head covered",
                "Leave the head uncovered",
                "Wet towel",
                "No wrapping until hospital"
            ],
            "correct": 0,
            "explanation": "Keep the infant as warm as possible; hypothermia worsens outcomes."
        },
        {
            "q": "What target SpO₂ range applies if oxygen is needed for a long time?",
            "options": [
                "85%–95%",
                "100%",
                "70%–75%",
                "Above 98%"
            ],
            "correct": 0,
            "explanation": "Titrate to SpO₂ 85%–95%: both hypoxia and excess oxygen harm."
        },
        {
            "q": "How often is adrenaline repeated?",
            "options": [
                "Every 3–5 minutes while HR <60",
                "Every minute",
                "Once only",
                "Every 15 minutes"
            ],
            "correct": 0,
            "explanation": "Adrenaline 0.01 mg/kg IV/IO every 3–5 minutes."
        },
        {
            "q": "What SpO₂ is expected at 10 minutes?",
            "options": [
                "85–90%",
                "60–65%",
                "75–80%",
                "100%"
            ],
            "correct": 0,
            "explanation": "See the projected SpO₂ table."
        },
        {
            "q": "Gestational age is uncertain in the field. What do you do?",
            "options": [
                "Start resuscitation",
                "Withhold resuscitation",
                "Wait for parental consent",
                "Call the hospital first"
            ],
            "correct": 0,
            "explanation": "If there is any doubt about gestational age, start resuscitation."
        }
    ],
    "flashcards": [
        {
            "question": "First steps for a newborn who is not vigorous",
            "answer": "Warm, position the airway, gentle suction if needed (mouth then nose), dry, stimulate; consider ALS back-up."
        },
        {
            "question": "Indications for PPV",
            "answer": "Apnea, gasping or HR <100/min."
        },
        {
            "question": "PPV rate",
            "answer": "40–60 breaths per minute."
        },
        {
            "question": "Compression trigger",
            "answer": "HR <60/min despite ventilation."
        },
        {
            "question": "Compression ratio",
            "answer": "3:1 compressions to ventilations."
        },
        {
            "question": "Compression technique",
            "answer": "Two-thumb-encircling-hands."
        },
        {
            "question": "Starting gas for PPV",
            "answer": "Room air for 90 seconds; do not add oxygen initially."
        },
        {
            "question": "No improvement after 90 seconds",
            "answer": "Change to 100% FiO₂ until the heart rate normalises."
        },
        {
            "question": "Adrenaline dose",
            "answer": "0.01 mg/kg IV/IO every 3–5 minutes while HR <60 bpm."
        },
        {
            "question": "Heart rate re-evaluation",
            "answer": "Every 30 seconds."
        },
        {
            "question": "Fluid bolus",
            "answer": "20 mL/kg normal saline IV/IO for shock or post-resuscitation care."
        },
        {
            "question": "APGAR",
            "answer": "Appearance, pulse, grimace, activity, respirations; each scored 2, 1 or 0; at 1 and 5 minutes."
        },
        {
            "question": "APGAR pulse scores",
            "answer": ">100 bpm = 2; <100 bpm = 1; absent = 0."
        },
        {
            "question": "Cord cutting in resuscitation",
            "answer": "Clamp at 10 cm, 15 cm and 20 cm; cut between the two clamps furthest from the baby."
        },
        {
            "question": "Preventing hypothermia",
            "answer": "Dry thoroughly, cover the head, wrap in a dry towel, thermal blanket or plastic bag up to the neck."
        },
        {
            "question": "Kangaroo care",
            "answer": "Skin-to-skin with the mother, wrapped together; for babies who need no resuscitation."
        },
        {
            "question": "Suctioning",
            "answer": "Only for respiratory distress with airway obstruction: mouth then nose. Not routine."
        },
        {
            "question": "SpO₂ at 1 minute",
            "answer": "60–65%."
        },
        {
            "question": "SpO₂ at 5 minutes",
            "answer": "80–85%."
        },
        {
            "question": "SpO₂ probe site",
            "answer": "Right hand."
        },
        {
            "question": "Most reliable sign of effective resuscitation",
            "answer": "Rising heart rate."
        },
        {
            "question": "Limits of viability in this CPG",
            "answer": "<23 weeks: comfort care may follow parental wishes. <22 weeks: avoid routine resuscitation unless wishes and judgement indicate otherwise."
        },
        {
            "question": "Airway adjuncts",
            "answer": "OPA, NPA, endotracheal tube or supraglottic airway."
        },
        {
            "question": "Resuscitation sequence",
            "answer": "Dry, warm and stimulate – ventilate – evaluate – resuscitate."
        },
        {
            "question": "Acrocyanosis",
            "answer": "Blue hands and feet: common in transition. Distinguish from central cyanosis."
        },
        {
            "question": "Heart rate measurement",
            "answer": "Auscultate the precordium (preferred), or umbilical stump or brachial pulse."
        },
        {
            "question": "Oxygen target for prolonged use",
            "answer": "SpO₂ 85%–95%."
        },
        {
            "question": "Placenta",
            "answer": "Biohazard bag, transported with the patient."
        },
        {
            "question": "Triage after resuscitation",
            "answer": "Red, even if the baby improved."
        },
        {
            "question": "KPI",
            "answer": "Compressions and ventilation within 30 seconds of HR falling below 60 bpm."
        }
    ],
    "critical": [
        {
            "id": "crit_4_6_1",
            "scenario": "At a home birth the baby is limp, apneic and blue. After drying, warming and stimulating there is still no breathing and the heart rate is 80/min.",
            "question": "What do you start?",
            "options": [
                {
                    "t": "PPV with room air at 40–60 breaths per minute, SpO₂ on the right hand, ECG",
                    "f": "Correct. Apnea with HR <100: ventilate with room air."
                },
                {
                    "t": "Compressions at 3:1",
                    "f": "Compressions start only when HR is <60."
                },
                {
                    "t": "100% oxygen by facemask, no ventilation",
                    "f": "An apneic baby needs PPV; start with room air."
                },
                {
                    "t": "Adrenaline",
                    "f": "Ventilation is the key intervention."
                }
            ],
            "correct": 0,
            "explanation": "Apnea, gasping or HR <100/min: PPV with room air for 90 seconds, re-evaluating the HR every 30 seconds.",
            "kpi": "Compressions and ventilation within 30 seconds of HR falling below 60 bpm."
        },
        {
            "id": "crit_4_6_2",
            "scenario": "After 30 seconds of good-quality ventilation with visible chest rise, the newborn's heart rate is 50/min.",
            "question": "What now?",
            "options": [
                {
                    "t": "Compressions at 3:1 (two-thumb technique) with 100% oxygen",
                    "f": "Correct. HR <60: start CPR."
                },
                {
                    "t": "Keep ventilating and recheck in 5 minutes",
                    "f": "HR <60 needs compressions within 30 seconds."
                },
                {
                    "t": "Adrenaline before compressions",
                    "f": "Compressions first; adrenaline if HR stays <60."
                },
                {
                    "t": "15:2 compressions",
                    "f": "Newborns use 3:1."
                }
            ],
            "correct": 0,
            "explanation": "HR <60/min: CPR at 3:1, 100% oxygen, consider intubation or a supraglottic airway, IV/IO access.",
            "kpi": "Compressions and ventilation within 30 seconds of HR falling below 60 bpm."
        },
        {
            "id": "crit_4_6_3",
            "scenario": "Compressions and ventilation with 100% oxygen continue and an IO is in. The heart rate remains 40/min.",
            "question": "Which drug and dose?",
            "options": [
                {
                    "t": "Adrenaline 0.01 mg/kg IV/IO, repeat every 3–5 minutes while HR <60",
                    "f": "Correct."
                },
                {
                    "t": "Adrenaline 0.1 mg/kg IV/IO",
                    "f": "Ten times the newborn dose."
                },
                {
                    "t": "Atropine",
                    "f": "Not in this CPG."
                },
                {
                    "t": "No drugs in newborns",
                    "f": "Adrenaline is given for persistent HR <60."
                }
            ],
            "correct": 0,
            "explanation": "Adrenaline 0.01 mg/kg IV/IO every 3–5 minutes; 20 mL/kg normal saline for signs of shock; check glucose.",
            "kpi": "Compressions and ventilation within 30 seconds of HR falling below 60 bpm."
        },
        {
            "id": "crit_4_6_4",
            "scenario": "A preterm baby is born limp with weak breathing. The parents are unsure of the dates.",
            "question": "What is your approach?",
            "options": [
                {
                    "t": "Start resuscitation; wrap in a plastic bag up to the neck, cover the head, keep warm",
                    "f": "Correct. Doubt about gestational age means resuscitate, and preterm babies lose heat fast."
                },
                {
                    "t": "Withhold resuscitation until gestation is known",
                    "f": "Any doubt: start resuscitation."
                },
                {
                    "t": "Leave uncovered for assessment",
                    "f": "Hypothermia worsens outcomes."
                },
                {
                    "t": "Start with 100% oxygen by facemask",
                    "f": "Ventilate with room air first if apneic or HR <100."
                }
            ],
            "correct": 0,
            "explanation": "If gestational age is in doubt, resuscitate. Routine resuscitation is avoided only below 22 weeks, guided by parental wishes and judgement.",
            "kpi": "Compressions and ventilation within 30 seconds of HR falling below 60 bpm."
        },
        {
            "id": "crit_4_6_5",
            "scenario": "A term baby is born through meconium-stained fluid. She cries vigorously, has good tone and a heart rate over 100.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Routine care as per the Childbirth CPG; no suctioning",
                    "f": "Correct. Term, good tone, breathing or crying: no resuscitation needed."
                },
                {
                    "t": "Suction mouth and nose routinely",
                    "f": "Routine suctioning is not recommended."
                },
                {
                    "t": "Intubate and suction the trachea",
                    "f": "Not indicated in a vigorous baby."
                },
                {
                    "t": "Start PPV",
                    "f": "She is breathing well."
                }
            ],
            "correct": 0,
            "explanation": "Suction only for respiratory distress with airway obstruction. Keep her warm; skin-to-skin care is ideal.",
            "kpi": "Compressions and ventilation within 30 seconds of HR falling below 60 bpm."
        }
    ]
};
