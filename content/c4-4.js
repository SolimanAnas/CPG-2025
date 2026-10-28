/* ========== CPG 4.4 – Pediatric Cardiac Arrest ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c4-4",
    "title": "Pediatric Cardiac Arrest",
    "shortTitle": "4.4 Pediatric Cardiac Arrest",
    "guide": {
        "cpg": "4.4",
        "group": "resus",
        "groupLabel": "Resuscitation",
        "title": "Pediatric Cardiac Arrest",
        "lead": "Children ≤13 years in cardiac arrest: high-quality CPR, early oxygenation and ventilation (arrest is usually hypoxic), weight-based shocks and drugs, and always transfer to hospital.",
        "source": {
            "label": "CPG 4.4",
            "pages": "106–110",
            "pdf": "../pdf_sections/4_4_Pediatric_Cardiac_Arrest.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Infants and children ≤13 years, unresponsive, not breathing normally and pulseless (the flowchart title says &lt;13 years)."
                ],
                "exclude": [
                    "Adults (&gt;13 years)."
                ]
            },
            {
                "type": "list",
                "title": "Recognise and start",
                "icon": "siren",
                "tone": "alert",
                "items": [
                    "<b>Scene safe; general impression (PAT):</b> limp and unresponsive, apneic or gasping, pale, mottled or cyanosed.",
                    "<b>Breathing and pulse within 10 seconds:</b> carotid over 1 year, brachial under 1 year. No pulse, or HR &lt;60 with poor perfusion despite oxygenation and ventilation: start CPR.",
                    "<b>Request ALS back-up</b> if not already dispatched: say \"pediatric cardiac arrest\" and confirm the ETA.",
                    "<b>Start CPR</b>, give oxygen via BVM and attach the defibrillator. 1 rescuer 30:2; 2 rescuers 15:2."
                ]
            },
            {
                "type": "pathways",
                "title": "Rhythm-based treatment",
                "icon": "heart-pulse",
                "intro": "Check the rhythm every 2 minutes.",
                "paths": [
                    {
                        "title": "Shockable – VF / pulseless VT",
                        "tone": "shock",
                        "steps": [
                            {
                                "text": "Shock 2 J/kg, then CPR 2 min; IV/IO access; apply LUCAS."
                            },
                            {
                                "text": "Still shockable: shock 4 J/kg, then CPR 2 min with adrenaline 0.01 mg/kg IV/IO every 3–5 minutes.",
                                "level": "EMT"
                            },
                            {
                                "text": "Consider a supraglottic airway; capnography.",
                                "level": "EMT"
                            },
                            {
                                "text": "Consider intubation.",
                                "level": "P"
                            },
                            {
                                "text": "Still shockable: shock ≥4 J/kg (maximum 10 J/kg), then CPR with amiodarone 5 mg/kg IV/IO."
                            }
                        ]
                    },
                    {
                        "title": "Non-shockable – asystole / PEA",
                        "tone": "noshock",
                        "steps": [
                            {
                                "text": "Adrenaline as soon as possible, then 0.01 mg/kg IV/IO every 3–5 minutes.",
                                "level": "EMT"
                            },
                            {
                                "text": "CPR 2 min; IV access; apply LUCAS; consider a supraglottic airway; capnography.",
                                "level": "EMT"
                            },
                            {
                                "text": "Consider IO access.",
                                "level": "EMT-A"
                            },
                            {
                                "text": "Consider intubation.",
                                "level": "P"
                            },
                            {
                                "text": "CPR 2 min treating reversible causes. If shockable, go to the shockable pathway."
                            }
                        ]
                    }
                ],
                "after": "<b>ROSC:</b> go to the Post Cardiac Arrest Care (ROSC) CPG. <b>No ROSC:</b> continue, or see the Starting, Stopping or Transferring CPR CPG. Every pediatric cardiac arrest is transferred to hospital."
            },
            {
                "type": "doses",
                "title": "Drugs and shocks",
                "icon": "syringe",
                "rows": [
                    {
                        "drug": "Shock 1",
                        "dose": "2 J/kg",
                        "note": "",
                        "level": ""
                    },
                    {
                        "drug": "Shock 2",
                        "dose": "4 J/kg",
                        "note": "",
                        "level": ""
                    },
                    {
                        "drug": "Later shocks",
                        "dose": "≥4 J/kg",
                        "note": "Maximum 10 J/kg or the adult dose",
                        "level": ""
                    },
                    {
                        "drug": "Adrenaline",
                        "dose": "0.01 mg/kg IV/IO",
                        "note": "Every 3–5 minutes. No IV/IO: consider ETT 0.03 mg/kg",
                        "level": "EMT"
                    },
                    {
                        "drug": "Amiodarone",
                        "dose": "5 mg/kg IV/IO bolus",
                        "note": "After the 3rd shock, and again after the 5th shock",
                        "level": ""
                    }
                ]
            },
            {
                "type": "groups",
                "title": "CPR, airway and defibrillation",
                "icon": "activity",
                "groups": [
                    {
                        "title": "Compressions",
                        "items": [
                            "100–120/min; at least 1/3 chest depth (~4 cm infants, ~5 cm children); full recoil; pauses &lt;10 seconds; rotate every 2 minutes."
                        ]
                    },
                    {
                        "title": "Airway and ventilation",
                        "items": [
                            "Head-tilt/chin-lift, or jaw thrust if trauma suspected; OPA/NPA when available.",
                            "Supraglottic airways (laryngeal tubes) should be placed routinely and are generally preferred over OPAs.",
                            "2 breaths after each set of compressions; BVM with 100% oxygen as soon as available. Target SpO<sub>2</sub> ≥94% and EtCO<sub>2</sub> ~35–45 mmHg; avoid hyperoxia and over-ventilation.",
                            "Intubation if the supraglottic airway is not ventilating adequately, or with excessive secretions or vomit. Confirm with waveform capnography. First-pass success in children is lower than in adults: plan carefully."
                        ]
                    },
                    {
                        "title": "Defibrillation",
                        "items": [
                            "AED or manual defibrillator as soon as available; adult pads if pediatric pads are not available.",
                            "<b>LIFEPAK 15:</b> pediatric pads in AED mode do not adjust the joules for children. Use manual mode and select the weight-based joules.",
                            "Resume CPR immediately after each shock."
                        ]
                    },
                    {
                        "title": "Also",
                        "items": [
                            "IO if IV access is not readily available.",
                            "Check blood glucose; treat hypoglycemia as per the Hypoglycemia CPG.",
                            "4 H's and 4 T's: hypoxia, hypovolemia, hypothermia, hypo/hyperkalemia; tension pneumothorax, tamponade, toxins, thrombosis.",
                            "Broselow tape for weight, equipment and doses. Prevent hyperthermia and hypoglycemia.",
                            "If ALS is delayed and hospital is closer, consider transporting with ongoing CPR if safe."
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
                        "title": "The arrest rhythms, as drawn by the ECG Simulator",
                        "items": [
                            {
                                "ecg": "vfFine",
                                "label": "Ventricular fibrillation",
                                "sub": "Shockable: 2 J/kg, then 4 J/kg"
                            },
                            {
                                "ecg": "pulselessVt",
                                "label": "Pulseless VT",
                                "sub": "Shockable"
                            },
                            {
                                "ecg": "asystole",
                                "label": "Asystole",
                                "sub": "Non-shockable: adrenaline as soon as possible"
                            },
                            {
                                "ecg": "pea",
                                "label": "PEA",
                                "sub": "Non-shockable"
                            }
                        ]
                    },
                    {
                        "title": "Tools",
                        "items": [
                            {
                                "label": "Pediatric drug calculator",
                                "sub": "Weight-based doses, including adrenaline and amiodarone",
                                "href": "../pages/drug-calculator.html?drug=Epinephrine%20(Adrenaline)",
                                "icon": "pill"
                            },
                            {
                                "label": "Defibrillation Doses",
                                "sub": "Pediatric pad placement and energies",
                                "href": "../pages/defib.html",
                                "icon": "zap"
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
                    "CPR within 1 minute of recognising cardiac arrest."
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
                        "label": "4.8 Starting, Stopping and Transferring CPR",
                        "href": "c4-8.html"
                    },
                    {
                        "label": "2.1 Airway Management",
                        "href": "c2.html?section=c2s1"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "What is the first shock energy for a child in VF/pVT?",
            "options": [
                "1 J/kg",
                "2 J/kg",
                "4 J/kg",
                "10 J/kg"
            ],
            "correct": 1,
            "explanation": "First shock 2 J/kg, then 4 J/kg, then ≥4 J/kg up to 10 J/kg."
        },
        {
            "q": "What is the second shock energy?",
            "options": [
                "2 J/kg",
                "4 J/kg",
                "6 J/kg",
                "10 J/kg"
            ],
            "correct": 1,
            "explanation": "Subsequent shocks 4 J/kg."
        },
        {
            "q": "What is the maximum shock energy?",
            "options": [
                "4 J/kg",
                "6 J/kg",
                "10 J/kg or the adult dose",
                "No maximum"
            ],
            "correct": 2,
            "explanation": "Joules should not exceed 10 J/kg or the adult dose."
        },
        {
            "q": "What is the IV/IO adrenaline dose?",
            "options": [
                "0.1 mg/kg",
                "0.01 mg/kg every 3–5 minutes",
                "1 mg",
                "0.03 mg/kg"
            ],
            "correct": 1,
            "explanation": "Adrenaline 0.01 mg/kg (1:10,000) IV/IO every 3–5 minutes."
        },
        {
            "q": "No IV or IO access. What does CPG 4.4 allow for adrenaline?",
            "options": [
                "IM 0.01 mg/kg",
                "ETT 0.03 mg/kg",
                "Nothing",
                "Intranasal"
            ],
            "correct": 1,
            "explanation": "Consider ETT administration at 0.03 mg/kg if no IV/IO access."
        },
        {
            "q": "When is adrenaline given in asystole/PEA?",
            "options": [
                "After the 3rd shock",
                "As soon as possible",
                "After 10 minutes",
                "Never"
            ],
            "correct": 1,
            "explanation": "Non-shockable: adrenaline ASAP."
        },
        {
            "q": "When is adrenaline first given in VF/pVT?",
            "options": [
                "Before the first shock",
                "In the CPR cycle after the 4 J/kg shock",
                "After the 5th shock",
                "Never"
            ],
            "correct": 1,
            "explanation": "The flowchart gives adrenaline in the CPR cycle after the 4 J/kg shock."
        },
        {
            "q": "What is the amiodarone dose for refractory VF/pVT?",
            "options": [
                "1 mg/kg",
                "5 mg/kg IV/IO bolus",
                "10 mg/kg",
                "300 mg"
            ],
            "correct": 1,
            "explanation": "5 mg/kg IV/IO bolus after the 3rd shock, and again after the 5th."
        },
        {
            "q": "When is amiodarone given?",
            "options": [
                "After the 1st shock",
                "After the 3rd and 5th shocks",
                "Before shocking",
                "Only after ROSC"
            ],
            "correct": 1,
            "explanation": "After 3rd shock: 5 mg/kg; after 5th shock: 5 mg/kg."
        },
        {
            "q": "Which airway does CPG 4.4 prefer over OPAs in pediatric arrest?",
            "options": [
                "Nasal cannula",
                "Supraglottic (LT/laryngeal tube) airway",
                "Face mask only",
                "Cricothyroidotomy"
            ],
            "correct": 1,
            "explanation": "Supraglottic (LT) airways should be routinely used and are generally preferred over OPAs."
        },
        {
            "q": "When is intubation indicated in pediatric arrest?",
            "options": [
                "Always first",
                "If the supraglottic airway is not ventilating adequately, or with excessive secretions or vomit",
                "Never",
                "Only in infants"
            ],
            "correct": 1,
            "explanation": "Intubation indications: inadequate SGA ventilation, or excessive secretions/vomit."
        },
        {
            "q": "How is ETT placement confirmed?",
            "options": [
                "Chest rise only",
                "Waveform capnography",
                "Pupil size",
                "Patient colour"
            ],
            "correct": 1,
            "explanation": "ETT placement should always be confirmed with waveform capnography."
        },
        {
            "q": "What is the lowest level for pediatric intubation?",
            "options": [
                "EMT",
                "EMT-A",
                "P",
                "AP"
            ],
            "correct": 2,
            "explanation": "Intubation is P on the flowchart."
        },
        {
            "q": "What is the lowest level for IO access?",
            "options": [
                "EMR",
                "EMT",
                "EMT-A",
                "P"
            ],
            "correct": 2,
            "explanation": "IO access is EMT-A."
        },
        {
            "q": "With a LIFEPAK 15 and pediatric pads, which mode must be used?",
            "options": [
                "AED mode",
                "Manual mode, with weight-based joules selected",
                "Either",
                "Pacing mode"
            ],
            "correct": 1,
            "explanation": "AED mode does not adjust joules for pediatric pads; use manual mode."
        },
        {
            "q": "No pediatric pads are available. What do you do?",
            "options": [
                "Do not defibrillate",
                "Use adult pads",
                "Wait for ALS",
                "Use the ECG electrodes"
            ],
            "correct": 1,
            "explanation": "If pediatric pads are not available, use adult pads."
        },
        {
            "q": "What compression-ventilation ratio do two rescuers use?",
            "options": [
                "30:2",
                "15:2",
                "3:1",
                "5:1"
            ],
            "correct": 1,
            "explanation": "Single rescuer 30:2; two or more 15:2."
        },
        {
            "q": "What is the usual cause of pediatric cardiac arrest?",
            "options": [
                "Primary arrhythmia",
                "Hypoxia",
                "Hyperthermia",
                "Stroke"
            ],
            "correct": 1,
            "explanation": "Often secondary to hypoxia: prioritize ventilation and oxygenation."
        },
        {
            "q": "What SpO2 does CPG 4.4 target, avoiding hyperoxia?",
            "options": [
                "≥94%",
                "100%",
                "88–92%",
                "≥85%"
            ],
            "correct": 0,
            "explanation": "Target SpO2 ≥94%, avoid hyperoxia."
        },
        {
            "q": "What EtCO2 should be maintained if monitored?",
            "options": [
                "~35–45 mmHg",
                "<10 mmHg",
                ">60 mmHg",
                "~20 mmHg"
            ],
            "correct": 0,
            "explanation": "Maintain EtCO2 ~35–45 mmHg if monitored."
        },
        {
            "q": "Must a child in cardiac arrest be transferred to hospital?",
            "options": [
                "No, can be left on scene",
                "Yes, pediatric arrests must be transferred",
                "Only after ROSC",
                "Only if over 5"
            ],
            "correct": 1,
            "explanation": "Pediatric patients in cardiac arrest must be transferred to hospital."
        },
        {
            "q": "What should you say when requesting ALS?",
            "options": [
                "Nothing extra",
                "'Pediatric cardiac arrest', and confirm the ETA",
                "The child's weight only",
                "Only the address"
            ],
            "correct": 1,
            "explanation": "Specify 'pediatric cardiac arrest' and confirm the ALS ETA."
        },
        {
            "q": "Which tool estimates weight and equipment size?",
            "options": [
                "Rule of nines",
                "Broselow tape",
                "GCS",
                "APGAR"
            ],
            "correct": 1,
            "explanation": "The Broselow tape is recommended for weight, equipment and doses."
        },
        {
            "q": "Which complications does CPG 4.4 aim to prevent because they worsen neurological outcomes?",
            "options": [
                "Hypertension and tachycardia",
                "Hyperthermia and hypoglycemia",
                "Hypocalcemia",
                "Anemia"
            ],
            "correct": 1,
            "explanation": "Goal: prevent hyperthermia and hypoglycemia."
        },
        {
            "q": "What is checked and treated among reversible causes?",
            "options": [
                "Cholesterol",
                "Blood glucose",
                "Hemoglobin",
                "Lactate"
            ],
            "correct": 1,
            "explanation": "Check blood sugar; treat hypoglycemia per the Hypoglycemia CPG."
        },
        {
            "q": "How often is the pulse (ROSC) checked?",
            "options": [
                "Every 2 minutes",
                "Every 30 seconds",
                "Every 5 minutes",
                "Only at hospital"
            ],
            "correct": 0,
            "explanation": "Check for pulse (ROSC) every 2 minutes."
        },
        {
            "q": "Why is pediatric intubation approached carefully?",
            "options": [
                "It is never done",
                "First-attempt success is likely lower than in adults; interruptions must be minimal",
                "It requires no capnography",
                "It needs no team"
            ],
            "correct": 1,
            "explanation": "Careful assessment and team coordination are needed."
        },
        {
            "q": "Which PAT finding fits cardiac arrest?",
            "options": [
                "Interactive, pink",
                "Limp, apneic or gasping, mottled",
                "Crying, flushed",
                "Talking normally"
            ],
            "correct": 1,
            "explanation": "Appearance unresponsive/limp; breathing apneic or agonal; skin pale, mottled or cyanotic."
        },
        {
            "q": "ALS is delayed and the hospital is closer. What does CPG 4.4 suggest?",
            "options": [
                "Wait for ALS",
                "Consider transporting with ongoing CPR if safe",
                "Stop CPR",
                "Call family"
            ],
            "correct": 1,
            "explanation": "If ALS is delayed but hospital is closer, consider transport with ongoing CPR if safe."
        },
        {
            "q": "What is the KPI of CPG 4.4?",
            "options": [
                "First shock within 2 minutes",
                "CPR within 1 minute of arrest recognition",
                "Adrenaline within 5 minutes",
                "Intubation first pass"
            ],
            "correct": 1,
            "explanation": "KPI: initiate CPR within 1 minute of arrest recognition."
        }
    ],
    "flashcards": [
        {
            "category": "Shocks",
            "question": "Pediatric shock energies?",
            "answer": "2 J/kg, then 4 J/kg, then ≥4 J/kg; maximum 10 J/kg or the adult dose."
        },
        {
            "category": "Adrenaline",
            "question": "Adrenaline IV/IO?",
            "answer": "0.01 mg/kg every 3–5 minutes (EMT)."
        },
        {
            "category": "Adrenaline",
            "question": "Adrenaline with no IV/IO?",
            "answer": "Consider ETT 0.03 mg/kg."
        },
        {
            "category": "Adrenaline",
            "question": "Adrenaline timing?",
            "answer": "Non-shockable: as soon as possible. Shockable: CPR cycle after the 4 J/kg shock."
        },
        {
            "category": "Amiodarone",
            "question": "Amiodarone?",
            "answer": "5 mg/kg IV/IO bolus after the 3rd shock and again after the 5th."
        },
        {
            "category": "Ratios",
            "question": "Compression-ventilation ratios?",
            "answer": "1 rescuer 30:2; 2 or more 15:2."
        },
        {
            "category": "Compressions",
            "question": "Compression rate and depth?",
            "answer": "100–120/min; at least 1/3 chest depth (~4 cm infant, ~5 cm child)."
        },
        {
            "category": "Pulse",
            "question": "Pulse check?",
            "answer": "Carotid >1 year, brachial <1 year; no more than 10 seconds."
        },
        {
            "category": "Start",
            "question": "When to start CPR with a pulse?",
            "answer": "HR <60 with poor perfusion despite oxygenation and ventilation."
        },
        {
            "category": "Airway",
            "question": "Preferred pediatric airway in arrest?",
            "answer": "Supraglottic (LT) airway, routinely, preferred over OPA."
        },
        {
            "category": "Airway",
            "question": "Pediatric intubation indications?",
            "answer": "SGA not ventilating adequately, or excessive secretions/vomit. Confirm with waveform capnography. P level."
        },
        {
            "category": "Ventilation",
            "question": "Oxygenation targets?",
            "answer": "SpO2 ≥94%, avoid hyperoxia; EtCO2 ~35–45 mmHg."
        },
        {
            "category": "Ventilation",
            "question": "Breaths during CPR?",
            "answer": "2 breaths after each set of compressions; BVM with 100% oxygen ASAP."
        },
        {
            "category": "Defibrillator",
            "question": "LIFEPAK 15 with pediatric pads?",
            "answer": "AED mode does not adjust joules: use manual mode and select weight-based joules."
        },
        {
            "category": "Defibrillator",
            "question": "No pediatric pads?",
            "answer": "Use adult pads."
        },
        {
            "category": "Access",
            "question": "IV access delayed?",
            "answer": "Consider IO (EMT-A)."
        },
        {
            "category": "Causes",
            "question": "4 H's and 4 T's?",
            "answer": "Hypoxia, hypovolemia, hypothermia, hypo/hyperkalemia; tension pneumothorax, tamponade, toxins, thrombosis."
        },
        {
            "category": "Causes",
            "question": "Usual cause of pediatric arrest?",
            "answer": "Hypoxia: prioritize ventilation and oxygenation."
        },
        {
            "category": "Glucose",
            "question": "Glucose in pediatric arrest?",
            "answer": "Check; treat hypoglycemia per the Hypoglycemia CPG."
        },
        {
            "category": "Goals",
            "question": "What to prevent for the brain?",
            "answer": "Hyperthermia and hypoglycemia."
        },
        {
            "category": "Transfer",
            "question": "Transfer rule?",
            "answer": "Every pediatric cardiac arrest must be transferred to hospital."
        },
        {
            "category": "ALS",
            "question": "ALS request?",
            "answer": "Say 'pediatric cardiac arrest' and confirm the ETA."
        },
        {
            "category": "ALS",
            "question": "ALS delayed, hospital closer?",
            "answer": "Consider transporting with ongoing CPR if safe."
        },
        {
            "category": "Assessment",
            "question": "PAT in arrest?",
            "answer": "Limp/unresponsive; apneic or gasping; pale, mottled or cyanotic."
        },
        {
            "category": "Assessment",
            "question": "History to gather?",
            "answer": "Events (choking, drowning, trauma, collapse), conditions (congenital heart disease, asthma), medications, toxins, recent illness."
        },
        {
            "category": "Equipment",
            "question": "Weight and equipment estimate?",
            "answer": "Broselow tape."
        },
        {
            "category": "ROSC",
            "question": "ROSC checks?",
            "answer": "Pulse check every 2 minutes; ROSC → Post-ROSC Care CPG."
        },
        {
            "category": "Scope",
            "question": "Levels in CPG 4.4?",
            "answer": "Adrenaline, SGA, capnography EMT; IO EMT-A; intubation P."
        },
        {
            "category": "Inclusion",
            "question": "Who is included?",
            "answer": "Children ≤13 years, unresponsive, not breathing normally, pulseless."
        },
        {
            "category": "KPI",
            "question": "CPG 4.4 KPI?",
            "answer": "CPR within 1 minute of arrest recognition."
        }
    ],
    "critical": [
        {
            "id": "crit_4_4_1",
            "scenario": "A 6-year-old (about 20 kg) is in VF. You give a 40 J shock (2 J/kg) and do 2 minutes of CPR. The rhythm is still VF.",
            "ecg": "vfFine",
            "question": "What next?",
            "options": [
                {
                    "t": "Shock at 4 J/kg, then CPR with adrenaline 0.01 mg/kg IV/IO",
                    "f": "Correct. Second shock 4 J/kg; adrenaline in the following CPR cycle."
                },
                {
                    "t": "Shock at 2 J/kg again",
                    "f": "Subsequent shocks are 4 J/kg."
                },
                {
                    "t": "Amiodarone now",
                    "f": "Amiodarone comes after the 3rd shock."
                },
                {
                    "t": "Shock at 10 J/kg",
                    "f": "Escalate stepwise: 2, then 4, then ≥4 J/kg."
                }
            ],
            "correct": 0,
            "explanation": "VF/pVT: 2 J/kg, then 4 J/kg (with adrenaline 0.01 mg/kg every 3–5 minutes), then ≥4 J/kg up to 10 J/kg; amiodarone 5 mg/kg after the 3rd and 5th shocks.",
            "kpi": "CPR within 1 minute of recognising cardiac arrest."
        },
        {
            "id": "crit_4_4_2",
            "scenario": "A 3-year-old in asystole. CPR is in progress; IV and IO attempts have failed. An ETT has been placed by a paramedic and confirmed with waveform capnography.",
            "ecg": "asystole",
            "question": "How can adrenaline be given?",
            "options": [
                {
                    "t": "Via the ETT at 0.03 mg/kg",
                    "f": "Correct. CPG 4.4 allows ETT adrenaline at 0.03 mg/kg if there is no IV/IO access."
                },
                {
                    "t": "ETT at 0.01 mg/kg",
                    "f": "The ETT dose in CPG 4.4 is 0.03 mg/kg."
                },
                {
                    "t": "Withhold all adrenaline",
                    "f": "Asystole needs adrenaline as soon as possible."
                },
                {
                    "t": "1 mg adult dose IV",
                    "f": "Pediatric doses are weight-based."
                }
            ],
            "correct": 0,
            "explanation": "Adrenaline 0.01 mg/kg IV/IO every 3–5 minutes; if no IV/IO, consider ETT at 0.03 mg/kg. Keep trying for IO (EMT-A) and treat reversible causes.",
            "kpi": "CPR within 1 minute of recognising cardiac arrest."
        },
        {
            "id": "crit_4_4_3",
            "scenario": "You attach pediatric pads to a LIFEPAK 15 for a 4-year-old in cardiac arrest and plan to use AED mode.",
            "question": "What does CPG 4.4 warn about?",
            "options": [
                {
                    "t": "AED mode does not adjust the joules for pediatric pads; use manual mode and select weight-based joules",
                    "f": "Correct."
                },
                {
                    "t": "Nothing: AED mode is always right",
                    "f": "With the LIFEPAK 15, AED mode does not adjust joules for children."
                },
                {
                    "t": "Never defibrillate children",
                    "f": "Defibrillate promptly when shockable."
                },
                {
                    "t": "Use 360 J",
                    "f": "Weight-based joules, never more than 10 J/kg or the adult dose."
                }
            ],
            "correct": 0,
            "explanation": "LIFEPAK 15: pediatric pads in AED mode do not adjust the joules; manual mode must be used: 2 J/kg, then 4 J/kg, then ≥4 J/kg.",
            "kpi": "CPR within 1 minute of recognising cardiac arrest."
        },
        {
            "id": "crit_4_4_4",
            "scenario": "A 2-year-old pulled from a swimming pool is in cardiac arrest. ALS is 15 minutes away; the hospital is 6 minutes away.",
            "question": "Which plan best fits CPG 4.4?",
            "options": [
                {
                    "t": "Effective CPR with oxygenation and ventilation (SGA when available), defibrillator on, and consider transporting with ongoing CPR if safe",
                    "f": "Correct. Arrest is likely hypoxic; if ALS is delayed and hospital is closer, consider transport with CPR."
                },
                {
                    "t": "Compressions only and wait for ALS",
                    "f": "Ventilation is a priority in pediatric (hypoxic) arrest."
                },
                {
                    "t": "Stop resuscitation",
                    "f": "Pediatric arrests must be transferred to hospital."
                },
                {
                    "t": "Hyperventilate at 40 breaths/min",
                    "f": "Avoid over-ventilation; target EtCO2 ~35–45."
                }
            ],
            "correct": 0,
            "explanation": "Pediatric arrest is often secondary to hypoxia: prioritize ventilation and oxygenation. All pediatric arrests are transferred; if ALS is delayed and the hospital is closer, consider transporting with ongoing CPR.",
            "kpi": "CPR within 1 minute of recognising cardiac arrest."
        },
        {
            "id": "crit_4_4_5",
            "scenario": "A 5-year-old has had 3 shocks for VF and adrenaline is running every 3–5 minutes. The rhythm is still VF.",
            "ecg": "vfFine",
            "question": "Which drug now?",
            "options": [
                {
                    "t": "Amiodarone 5 mg/kg IV/IO bolus",
                    "f": "Correct. Refractory VF/pVT: 5 mg/kg after the 3rd shock, repeated after the 5th."
                },
                {
                    "t": "Amiodarone 300 mg",
                    "f": "Pediatric dosing is 5 mg/kg."
                },
                {
                    "t": "Atropine",
                    "f": "Not part of the CPG 4.4 algorithm."
                },
                {
                    "t": "No drug; shock only",
                    "f": "Amiodarone is indicated after the 3rd shock."
                }
            ],
            "correct": 0,
            "explanation": "Amiodarone 5 mg/kg IV/IO bolus after the 3rd shock and after the 5th; continue adrenaline 0.01 mg/kg every 3–5 minutes and shocks ≥4 J/kg (maximum 10 J/kg).",
            "kpi": "CPR within 1 minute of recognising cardiac arrest."
        }
    ]
};
