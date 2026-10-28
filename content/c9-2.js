/* ========== CPG 9.2 – Pediatric Bradycardia ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c9-2",
    "title": "Pediatric Bradycardia",
    "shortTitle": "9.2 Pediatric Bradycardia",
    "guide": {
        "cpg": "9.2",
        "group": "pediatric",
        "groupLabel": "Pediatrics",
        "title": "Pediatric Bradycardia",
        "lead": "In children, bradycardia is usually caused by hypoxia and often comes before cardiac arrest. Oxygenate and ventilate first. If HR stays below 60 bpm with poor perfusion despite good ventilation, start CPR, then give adrenaline. Atropine is for vagal causes or primary AV block.",
        "source": {
            "label": "CPG 9.2",
            "pages": "296–300",
            "pdf": "../pdf_sections/9_2_Pediatric_Bradycardia.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Infants and children ≤13 years with a heart rate below normal for age and poor perfusion: altered mental status, pallor, cyanosis, weak pulses, prolonged capillary refill, hypotension or respiratory failure.",
                    "Bradycardia from reversible causes: hypoxia, vagal stimulation, hypothermia, toxins, heart block."
                ],
                "exclude": [
                    "Heart rate appropriate for age without hypoperfusion.",
                    "Known congenital heart disease with stable baseline bradycardia, not deteriorating."
                ]
            },
            {
                "type": "table",
                "title": "Normal heart rate and hypotension by age",
                "icon": "stethoscope",
                "stack": true,
                "columns": [
                    "Age",
                    "Normal HR (bpm)",
                    "Hypotension (systolic)"
                ],
                "rows": [
                    [
                        "&lt;1 month",
                        "100–205",
                        "&lt;60"
                    ],
                    [
                        "1–12 months",
                        "100–180",
                        "&lt;70"
                    ],
                    [
                        "1–3 years",
                        "100–140",
                        "&lt;70 + (age × 2)"
                    ],
                    [
                        "3–5 years",
                        "80–120",
                        "&lt;70 + (age × 2)"
                    ],
                    [
                        "5–11 years",
                        "75–120",
                        "&lt;70 + (age × 2) to 10 years; then &lt;90"
                    ],
                    [
                        "&gt;11 years",
                        "60–100",
                        "&lt;90"
                    ]
                ],
                "notes": [
                    "Count HR over a full minute. Capillary refill &gt;3 seconds suggests poor perfusion.",
                    "Normal respiratory rate: 30–53 (1–12 months), 22–37 (1–3 years), 20–28 (3–5 years), 18–25 (5–11 years), 12–20 (&gt;11 years)."
                ]
            },
            {
                "type": "gate",
                "title": "Cardiopulmonary compromise?",
                "icon": "triangle-alert",
                "question": "Any sign of cardiopulmonary compromise?",
                "items": [
                    "Acutely altered mental status",
                    "Signs of shock",
                    "Hypotension"
                ],
                "yes": "Support airway and breathing with oxygen and positive-pressure ventilation; cardiac monitor. Then reassess heart rate.",
                "no": "Support ABCs: consider oxygen, 12-lead ECG, identify and treat underlying causes, monitor closely."
            },
            {
                "type": "steps",
                "title": "Compromised child",
                "icon": "list",
                "steps": [
                    {
                        "title": "ALS back-up",
                        "text": "Routinely for pediatric bradycardia."
                    },
                    {
                        "title": "Airway",
                        "level": "EMT",
                        "text": "Patent airway; OPA, NPA or LT airway if required."
                    },
                    {
                        "title": "Oxygen and ventilation",
                        "text": "High-flow oxygen to SpO<sub>2</sub> &gt;94%. Inadequate effort or apnea: BVM with 100% oxygen. Avoid over-ventilation: EtCO<sub>2</sub> 35–45 mmHg (4.6–6 kPa)."
                    },
                    {
                        "title": "Monitor",
                        "text": "Cardiac monitor for rhythm (sinus bradycardia, heart block), pulse, BP and SpO<sub>2</sub>."
                    },
                    {
                        "title": "HR &lt;60 bpm despite oxygenation and ventilation",
                        "text": "Start CPR: 15:2 with two rescuers, 30:2 alone. Continue while HR &lt;60. Pulseless: Pediatric Cardiac Arrest CPG."
                    },
                    {
                        "title": "IV/IO access",
                        "level": "EMT",
                        "text": "As soon as possible."
                    },
                    {
                        "title": "Adrenaline",
                        "level": "EMT",
                        "text": "Bradycardia persists despite oxygenation and ventilation.",
                        "doses": [
                            {
                                "drug": "Adrenaline IV/IO",
                                "dose": "0.01 mg/kg of 1:10,000 (0.1 mL/kg)",
                                "note": "Every 3–5 minutes"
                            },
                            {
                                "drug": "Adrenaline via ETT (no IV/IO)",
                                "dose": "0.1 mg/kg of 1:1,000",
                                "note": "Diluted in 3–5 mL saline"
                            }
                        ]
                    },
                    {
                        "title": "Atropine",
                        "level": "EMT-A",
                        "text": "Increased vagal tone or primary AV block.",
                        "doses": [
                            {
                                "drug": "Atropine IV/IO",
                                "dose": "0.02 mg/kg",
                                "note": "Min 0.1 mg, max single dose 0.5 mg; may repeat once after 3–5 minutes; max total 1 mg (child), 3 mg (adolescent)"
                            }
                        ]
                    },
                    {
                        "title": "Refractory",
                        "text": "Prepare for intubation if respiratory failure persists. Transcutaneous pacing only if equipment and a physician or advanced paramedic are available. Consult Tele-EMS."
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Reversible causes",
                "icon": "search",
                "groups": [
                    {
                        "title": "Find and treat",
                        "items": [
                            "Hypoxia: oxygen and ventilation (the most common cause).",
                            "Hypothermia: rewarm.",
                            "Toxins: antidotes where appropriate.",
                            "Vagal stimulation: remove the stimulus.",
                            "Also hypovolemia and raised intracranial pressure."
                        ]
                    },
                    {
                        "title": "History",
                        "items": [
                            "Recent choking, respiratory infection, toxin or medication ingestion, congenital heart disease, prior episodes."
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
                        "Poor perfusion, altered mental status, hypotension or impending arrest"
                    ],
                    [
                        "Yellow",
                        "Stable perfusion, normal mental status, no shock: monitor closely"
                    ]
                ]
            },
            {
                "type": "tools",
                "title": "Tools",
                "icon": "monitor",
                "groups": [
                    {
                        "title": "Rhythms",
                        "items": [
                            {
                                "ecg": "sbrady",
                                "label": "Sinus bradycardia",
                                "sub": "Usually hypoxic: ventilate first"
                            },
                            {
                                "ecg": "chb",
                                "label": "Complete heart block",
                                "sub": "Atropine; pacing if refractory"
                            }
                        ]
                    },
                    {
                        "title": "Tools",
                        "items": [
                            {
                                "label": "Pediatric drug calculator: adrenaline",
                                "sub": "0.01 mg/kg IV/IO",
                                "href": "../pages/drug-calculator.html?drug=Epinephrine (Adrenaline)",
                                "icon": "syringe"
                            },
                            {
                                "label": "Pediatric drug calculator: atropine",
                                "sub": "0.02 mg/kg",
                                "href": "../pages/drug-calculator.html?drug=Atropine",
                                "icon": "syringe"
                            },
                            {
                                "label": "Defibrillator and pacing",
                                "sub": "Transcutaneous pacing",
                                "href": "../pages/defib.html",
                                "icon": "zap"
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
                    "CPR for unconscious patients with HR &lt;60 bpm.",
                    "Oxygen for SpO<sub>2</sub> &lt;94%."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "4.4 Pediatric Cardiac Arrest",
                        "href": "c4-4.html"
                    },
                    {
                        "label": "9.3 Pediatric Tachycardia",
                        "href": "c9-3.html"
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
            "q": "Most common cause of symptomatic bradycardia in children?",
            "options": [
                "Hypoxia",
                "Hypothermia",
                "Heart block",
                "Vagal stimulation"
            ],
            "correct": 0,
            "explanation": "Oxygenate and ventilate first."
        },
        {
            "q": "A 3-year-old: HR 50, poor perfusion. First step?",
            "options": [
                "Support the airway with oxygen and ventilation",
                "Atropine",
                "Adrenaline",
                "Pacing"
            ],
            "correct": 0,
            "explanation": "Correct hypoxia promptly."
        },
        {
            "q": "Oxygen target?",
            "options": [
                "SpO₂ >94%",
                "SpO₂ >88%",
                "SpO₂ >90%",
                "No oxygen"
            ],
            "correct": 0,
            "explanation": "High-flow oxygen."
        },
        {
            "q": "HR 45 with poor perfusion despite good oxygenation and ventilation. Next?",
            "options": [
                "Start chest compressions",
                "Atropine",
                "Wait",
                "Pacing"
            ],
            "correct": 0,
            "explanation": "HR <60 despite ventilation: CPR."
        },
        {
            "q": "Adrenaline IV/IO dose?",
            "options": [
                "0.01 mg/kg of 1:10,000 (0.1 mL/kg)",
                "0.001 mg/kg",
                "0.1 mg/kg of 1:10,000",
                "0.5 mg/kg"
            ],
            "correct": 0,
            "explanation": "Every 3–5 minutes."
        },
        {
            "q": "Atropine for a 30 kg child?",
            "options": [
                "0.5 mg (the maximum single dose)",
                "0.6 mg",
                "1 mg",
                "0.1 mg"
            ],
            "correct": 0,
            "explanation": "0.02 mg/kg, max single dose 0.5 mg."
        },
        {
            "q": "Maximum total atropine in a child?",
            "options": [
                "1 mg",
                "0.5 mg",
                "2 mg",
                "3 mg"
            ],
            "correct": 0,
            "explanation": "3 mg in adolescents."
        },
        {
            "q": "A bradycardic child becomes pulseless. What now?",
            "options": [
                "Pediatric Cardiac Arrest CPG",
                "Atropine",
                "Pacing",
                "Observe"
            ],
            "correct": 0,
            "explanation": "Step 10."
        },
        {
            "q": "Compression-to-ventilation ratio with a single rescuer?",
            "options": [
                "30:2",
                "15:2",
                "5:1",
                "Continuous"
            ],
            "correct": 0,
            "explanation": "15:2 with two rescuers."
        },
        {
            "q": "A 5-year-old: HR 55, lethargic, slow capillary refill, SpO₂ 88%. Priority?",
            "options": [
                "Oxygen and assisted ventilation",
                "Atropine",
                "Adrenaline",
                "Pacing"
            ],
            "correct": 0,
            "explanation": "Hypoxia first; CPR if HR stays <60."
        },
        {
            "q": "Adrenaline via ETT when there's no IV/IO?",
            "options": [
                "0.1 mg/kg of 1:1,000, diluted in 3–5 mL saline",
                "0.01 mg/kg of 1:10,000",
                "0.5 mg/kg",
                "Not possible"
            ],
            "correct": 0,
            "explanation": "Ten times the IV/IO dose."
        },
        {
            "q": "What does the cardiac monitor help identify?",
            "options": [
                "Rhythm such as sinus bradycardia or heart block",
                "Temperature",
                "Glucose",
                "Weight"
            ],
            "correct": 0,
            "explanation": "ECG monitoring."
        },
        {
            "q": "A bradycardic child recently choked. What do you suspect?",
            "options": [
                "Airway obstruction causing hypoxia",
                "Anaphylaxis",
                "Asthma",
                "Seizure"
            ],
            "correct": 0,
            "explanation": "History guides treatment."
        },
        {
            "q": "Vascular access in a critically ill child?",
            "options": [
                "IV or IO, as soon as possible",
                "Central line",
                "Femoral artery",
                "None"
            ],
            "correct": 0,
            "explanation": "IV/IO access, EMT level."
        },
        {
            "q": "Minimum atropine dose for a 4 kg infant?",
            "options": [
                "0.1 mg",
                "0.08 mg",
                "0.05 mg",
                "0.5 mg"
            ],
            "correct": 0,
            "explanation": "Minimum 0.1 mg."
        },
        {
            "q": "EtCO₂ target during ventilation?",
            "options": [
                "35–45 mmHg",
                "20–25 mmHg",
                "45–55 mmHg",
                ">60 mmHg"
            ],
            "correct": 0,
            "explanation": "Normocapnia: avoid over-ventilation."
        },
        {
            "q": "Which is a reversible cause?",
            "options": [
                "Hypothermia",
                "Fever",
                "Teething",
                "Crying"
            ],
            "correct": 0,
            "explanation": "Also hypoxia, toxins, vagal stimulation, raised ICP."
        },
        {
            "q": "Which is a KPI?",
            "options": [
                "CPR for unconscious patients with HR <60",
                "Atropine for all",
                "12-lead ECG for all",
                "Glucose for all"
            ],
            "correct": 0,
            "explanation": "And oxygen for SpO₂ <94%."
        },
        {
            "q": "HR 50 with shock after 2 minutes of CPR. Next?",
            "options": [
                "Adrenaline 0.01 mg/kg IV/IO",
                "Atropine first",
                "Stop CPR",
                "Defibrillate"
            ],
            "correct": 0,
            "explanation": "Persistent bradycardia despite ventilation."
        },
        {
            "q": "Maximum single atropine dose?",
            "options": [
                "0.5 mg",
                "1 mg",
                "2 mg",
                "3 mg"
            ],
            "correct": 0,
            "explanation": "Even in adolescents."
        },
        {
            "q": "Unresponsive, HR 40, airway patent and oxygenated. Next?",
            "options": [
                "Start CPR",
                "Atropine",
                "Observe",
                "Pacing"
            ],
            "correct": 0,
            "explanation": "HR <60 with poor perfusion."
        },
        {
            "q": "Atropine for a 25 kg child?",
            "options": [
                "0.5 mg",
                "0.2 mg",
                "0.75 mg",
                "1 mg"
            ],
            "correct": 0,
            "explanation": "0.02 mg/kg."
        },
        {
            "q": "Why avoid excessive ventilation?",
            "options": [
                "Keep normocapnia",
                "It wastes oxygen",
                "It is too slow",
                "No reason"
            ],
            "correct": 0,
            "explanation": "EtCO₂ 35–45 mmHg."
        },
        {
            "q": "Bradycardic child with core temperature 32°C. Priority alongside ABCs?",
            "options": [
                "Rewarming",
                "Atropine",
                "Pacing",
                "Adrenaline before oxygen"
            ],
            "correct": 0,
            "explanation": "Reversible cause."
        },
        {
            "q": "When is atropine indicated?",
            "options": [
                "Increased vagal tone or primary AV block",
                "Every bradycardia",
                "Before oxygen",
                "Never"
            ],
            "correct": 0,
            "explanation": "EMT-A."
        },
        {
            "q": "HR 55, awake but pale and weak, no shock or altered mental status. Action?",
            "options": [
                "Oxygen, monitor, find causes, be ready to escalate",
                "Atropine",
                "CPR",
                "No treatment"
            ],
            "correct": 0,
            "explanation": "No cardiopulmonary compromise branch."
        },
        {
            "q": "When can transcutaneous pacing be considered?",
            "options": [
                "Refractory to oxygenation, ventilation, CPR, adrenaline and atropine, with a physician or advanced paramedic",
                "First line",
                "Every bradycardia",
                "Never"
            ],
            "correct": 0,
            "explanation": "Consult Tele-EMS."
        },
        {
            "q": "10-year-old: HR 35 with poor perfusion despite good ventilation. What sequence?",
            "options": [
                "CPR, IV/IO access, adrenaline; atropine if vagal or AV block",
                "Atropine only",
                "Pacing first",
                "Observe"
            ],
            "correct": 0,
            "explanation": "Per the flowchart."
        },
        {
            "q": "Two rescuers. Ratio?",
            "options": [
                "15:2",
                "30:2",
                "5:1",
                "3:1"
            ],
            "correct": 0,
            "explanation": "30:2 if alone."
        },
        {
            "q": "HR 40 after 2 minutes of CPR and one dose of adrenaline. What next?",
            "options": [
                "Continue CPR and repeat adrenaline every 3–5 minutes",
                "Stop CPR",
                "Defibrillate",
                "Wait 10 minutes"
            ],
            "correct": 0,
            "explanation": "Continue CPR while HR <60."
        }
    ],
    "flashcards": [
        {
            "question": "Definition",
            "answer": "HR below normal for age with poor perfusion; children ≤13 years."
        },
        {
            "question": "Normal HR <1 month",
            "answer": "100–205 bpm."
        },
        {
            "question": "Normal HR 1–3 years",
            "answer": "100–140 bpm."
        },
        {
            "question": "Normal HR 3–5 years",
            "answer": "80–120 bpm."
        },
        {
            "question": "Normal HR 5–11 years",
            "answer": "75–120 bpm."
        },
        {
            "question": "Normal HR >11 years",
            "answer": "60–100 bpm."
        },
        {
            "question": "Commonest cause",
            "answer": "Hypoxia."
        },
        {
            "question": "First step",
            "answer": "Airway, high-flow oxygen, ventilation (BVM with 100% oxygen if needed)."
        },
        {
            "question": "When to start CPR",
            "answer": "HR <60 bpm with poor perfusion despite oxygenation and ventilation."
        },
        {
            "question": "Adrenaline IV/IO",
            "answer": "0.01 mg/kg of 1:10,000 (0.1 mL/kg) every 3–5 minutes (EMT)."
        },
        {
            "question": "Atropine",
            "answer": "0.02 mg/kg; min 0.1 mg, max single 0.5 mg; repeat once after 3–5 minutes (EMT-A)."
        },
        {
            "question": "Atropine total maximum",
            "answer": "1 mg child; 3 mg adolescent."
        },
        {
            "question": "Adrenaline via ETT",
            "answer": "0.1 mg/kg of 1:1,000 diluted in 3–5 mL saline."
        },
        {
            "question": "Compromise criteria",
            "answer": "Acutely altered mental status, signs of shock, hypotension."
        },
        {
            "question": "Reversible causes",
            "answer": "Hypoxia, hypovolemia, hypothermia, toxins, vagal tone, raised ICP."
        },
        {
            "question": "Hypotension",
            "answer": "<60 (<1 month), <70 (1–12 months), <70 + (age × 2) (1–10 years), <90 (>10 years)."
        },
        {
            "question": "Pacing",
            "answer": "Refractory cases, only with a physician or advanced paramedic; consult Tele-EMS."
        },
        {
            "question": "KPIs",
            "answer": "CPR for unconscious patients with HR <60; oxygen for SpO₂ <94%."
        },
        {
            "question": "Weight-based dosing",
            "answer": "Use a length-based tape (Broselow) to estimate weight."
        },
        {
            "question": "EtCO₂",
            "answer": "35–45 mmHg (4.6–6 kPa): avoid over-ventilation."
        }
    ],
    "critical": [
        {
            "id": "crit_9_2_1",
            "scenario": "A 6-month-old is lethargic: HR 45, weak pulses, capillary refill 4 seconds, SpO₂ 88%.",
            "ecg": "sbrady",
            "question": "What first?",
            "options": [
                {
                    "t": "Open the airway and ventilate with BVM and 100% oxygen; request ALS",
                    "f": "Correct: hypoxia is the usual cause."
                },
                {
                    "t": "Atropine",
                    "f": "Oxygenate first; atropine is for vagal causes or AV block."
                },
                {
                    "t": "Adrenaline before oxygen",
                    "f": "Ventilation comes first."
                },
                {
                    "t": "Pacing",
                    "f": "Refractory cases only."
                }
            ],
            "correct": 0,
            "explanation": "Then reassess: CPR if HR stays <60 bpm with poor perfusion.",
            "kpi": "Oxygen for SpO₂ <94%."
        },
        {
            "id": "crit_9_2_2",
            "scenario": "A 4-year-old with HR 40 is ventilated with BVM and 100% oxygen. After 30 seconds, HR is still 40 with poor perfusion.",
            "question": "Next?",
            "options": [
                {
                    "t": "Start chest compressions (15:2 with two rescuers)",
                    "f": "Correct."
                },
                {
                    "t": "Keep ventilating and wait",
                    "f": "HR <60 with poor perfusion despite ventilation needs CPR."
                },
                {
                    "t": "Atropine only",
                    "f": "Not first line."
                },
                {
                    "t": "Transport without CPR",
                    "f": "Start CPR."
                }
            ],
            "correct": 0,
            "explanation": "Then IV/IO access and adrenaline.",
            "kpi": "CPR for unconscious patients with HR <60 bpm."
        },
        {
            "id": "crit_9_2_3",
            "scenario": "A 10-year-old (30 kg) with complete heart block: HR 35 despite ventilation. CPR is running and adrenaline 0.01 mg/kg has been given.",
            "ecg": "chb",
            "question": "What next?",
            "options": [
                {
                    "t": "Atropine 0.5 mg IV/IO (primary AV block), continue CPR while HR <60, repeat adrenaline every 3–5 minutes, Tele-EMS about pacing",
                    "f": "Correct."
                },
                {
                    "t": "Atropine 0.6 mg",
                    "f": "Max single dose 0.5 mg."
                },
                {
                    "t": "Stop CPR: there is a pulse",
                    "f": "Continue while HR <60 with poor perfusion."
                },
                {
                    "t": "Pace now without a physician or advanced paramedic",
                    "f": "Pacing needs one of them present."
                }
            ],
            "correct": 0,
            "explanation": "Atropine is indicated for primary AV block.",
            "kpi": "CPR for unconscious patients with HR <60 bpm."
        },
        {
            "id": "crit_9_2_4",
            "scenario": "A child with a permanent pacemaker has a paced rhythm at 30, is pale and lethargic, and doesn't improve with oxygen and ventilation.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "CPR, IV/IO and adrenaline as per the CPG; ALS and Tele-EMS for possible transcutaneous pacing",
                    "f": "Correct."
                },
                {
                    "t": "Observe",
                    "f": "She is compromised."
                },
                {
                    "t": "Atropine only",
                    "f": "Follow the full sequence."
                },
                {
                    "t": "Transport without treatment",
                    "f": "HR <60 with poor perfusion needs CPR."
                }
            ],
            "correct": 0,
            "explanation": "Pacing needs equipment and a physician or advanced paramedic.",
            "kpi": "CPR for unconscious patients with HR <60 bpm."
        },
        {
            "id": "crit_9_2_5",
            "scenario": "A 2-year-old with HR 50 and poor perfusion is ventilated, and CPR is running. After 2 minutes, HR is 45 in sinus rhythm.",
            "question": "Next?",
            "options": [
                {
                    "t": "IV/IO access and adrenaline 0.01 mg/kg; continue CPR",
                    "f": "Correct."
                },
                {
                    "t": "Stop CPR",
                    "f": "HR still <60."
                },
                {
                    "t": "Atropine first",
                    "f": "No vagal cause or AV block identified."
                },
                {
                    "t": "Defibrillate",
                    "f": "Not a shockable rhythm."
                }
            ],
            "correct": 0,
            "explanation": "Repeat adrenaline every 3–5 minutes.",
            "kpi": "CPR for unconscious patients with HR <60 bpm."
        }
    ]
};
