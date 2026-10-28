/* ========== CPG 3.3 – Adult Tachycardia with a Pulse ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c3-3",
    "title": "Adult Tachycardia with a Pulse",
    "shortTitle": "3.3 Adult Tachycardia",
    "guide": {
        "cpg": "3.3",
        "group": "cardio",
        "groupLabel": "Cardiovascular",
        "title": "Adult Tachycardia with a Pulse",
        "lead": "Tachycardias needing intervention are typically above 150 bpm. Look for a cause first, then decide: unstable patients get adenosine or synchronized cardioversion; stable patients are treated by QRS width.",
        "source": {
            "label": "CPG 3.3",
            "pages": "83–87",
            "pdf": "../pdf_sections/3_3_Adult_Tachycardia_with_a_Pulse.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Adults, conscious or unconscious, with tachycardia and a palpable pulse (typically &gt;150 bpm)."
                ],
                "exclude": [
                    "Tachycardia with a likely non-cardiac cause needing other treatment (e.g. sepsis).",
                    "Pediatric patients &lt;13 years."
                ]
            },
            {
                "type": "list",
                "title": "Assessment",
                "icon": "stethoscope",
                "items": [
                    "<b>Monitor and 12-lead ECG</b> (not an immediate priority if unconscious, with major primary-survey problems, or in a life-threatening arrhythmia). Identify the rhythm: VT, SVT, sinus tachycardia, other.",
                    "<b>Look for causes:</b> toxins or drugs; sepsis, pain or anxiety, hypovolemia, anemia, street drugs, hyperthyroidism.",
                    "<b>Signs of instability:</b> hypotension, acutely altered mental state, signs of shock, ischemic chest discomfort, acute heart failure.",
                    "<b>Red priority:</b> VT, SVT, or any dysrhythmia with severe shock or hypotension."
                ]
            },
            {
                "type": "steps",
                "title": "Initial care",
                "icon": "activity",
                "steps": [
                    {
                        "title": "Primary survey",
                        "text": "Airway and breathing; oxygen to SpO<sub>2</sub> &gt;94%; routine vital signs."
                    },
                    {
                        "title": "Consider ALS back-up",
                        "text": "Request it if the patient is unstable."
                    },
                    {
                        "title": "Treat the underlying cause",
                        "text": "Consider tachycardia due to shock (e.g. sepsis)."
                    },
                    {
                        "title": "IV access",
                        "text": "Consider IO if IV access would be delayed or is not feasible."
                    }
                ]
            },
            {
                "type": "steps",
                "title": "Unstable",
                "icon": "siren",
                "tone": "alert",
                "steps": [
                    {
                        "title": "Adenosine",
                        "level": "P",
                        "text": "For regular tachycardias, patients not significantly compromised, or where cardioversion without sedation would be inappropriate.",
                        "doses": [
                            {
                                "drug": "Adenosine 1st dose",
                                "dose": "6 mg IV/IO",
                                "note": "Rapid, with 20 ml saline flush",
                                "level": "P"
                            },
                            {
                                "drug": "Adenosine 2nd dose",
                                "dose": "12 mg IV/IO",
                                "note": "Rapid, with 20 ml saline flush",
                                "level": "P"
                            }
                        ]
                    },
                    {
                        "title": "Synchronized cardioversion",
                        "level": "AP",
                        "text": "Generally first line for compromised patients. Consider sedation. Choose joules for the rhythm (table below) and step up if it does not revert. Have cardiac arrest equipment ready. Arrest: go to the Cardiac Arrest CPG."
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Stable",
                "icon": "heart-pulse",
                "groups": [
                    {
                        "title": "Narrow complex (QRS &lt;0.12 s)",
                        "items": [
                            "<b>Vagal manoeuvres, if regular</b> (EMT): modified Valsalva preferred; alternatives are Valsalva, ice water to the face, coughing, breath-holding.",
                            "<b>Fluid bolus</b> (EMT): 250 ml IV/IO crystalloid; stop if fluid overload appears.",
                            "<b>Adenosine, if regular</b> (P): 6 mg, then 12 mg, rapid IV/IO with 20 ml flush."
                        ]
                    },
                    {
                        "title": "Wide complex (QRS &gt;0.12 s)",
                        "items": [
                            "<b>Adenosine, if regular</b> (P): 6 mg, then 12 mg.",
                            "<b>Fluid bolus</b> (EMT): 250 ml IV/IO.",
                            "<b>Amiodarone</b> (AP): 150 mg in 100 ml D5W over 10 minutes (15 mg/min); repeat 150 mg if it does not revert; follow with 1 mg/min infusion."
                        ]
                    },
                    {
                        "title": "Torsades de pointes",
                        "items": [
                            "Consider asynchronous defibrillation.",
                            "Magnesium 2 g IV over 10 minutes."
                        ]
                    },
                    {
                        "title": "Refractory",
                        "items": [
                            "Consider underlying causes and Tele-EMS consultation."
                        ]
                    }
                ]
            },
            {
                "type": "table",
                "title": "Synchronized cardioversion energies",
                "icon": "zap",
                "stack": true,
                "columns": [
                    "Device and rhythm",
                    "Initial",
                    "Then"
                ],
                "rows": [
                    {
                        "group": "LIFEPAK 15"
                    },
                    [
                        "Wide complex tachycardia",
                        "100 J",
                        "200 J, 300 J, 360 J"
                    ],
                    [
                        "SVT",
                        "50 J",
                        "100 J, 200 J, 300 J, 360 J"
                    ],
                    [
                        "Atrial fibrillation",
                        "120 J",
                        "200 J, 300 J, 360 J"
                    ],
                    {
                        "group": "ZOLL X-Series"
                    },
                    [
                        "Wide complex tachycardia",
                        "100 J",
                        "120 J, 150 J, 200 J"
                    ],
                    [
                        "SVT",
                        "50 J",
                        "120 J, 150 J, 200 J"
                    ],
                    [
                        "Atrial fibrillation",
                        "120 J",
                        "150 J, 180 J, 200 J"
                    ]
                ]
            },
            {
                "type": "list",
                "title": "Safety",
                "icon": "triangle-alert",
                "items": [
                    "Electrical and chemical cardioversion can cause cardiac arrest: have arrest equipment ready.",
                    "Watch for fluid overload with IV fluids.",
                    "No vagal manoeuvres if R-R intervals vary or the rhythm is atrial fibrillation."
                ]
            },
            {
                "type": "tools",
                "title": "Practise with the app",
                "icon": "monitor",
                "groups": [
                    {
                        "title": "The rhythms, as drawn by the ECG Simulator",
                        "items": [
                            {
                                "ecg": "svt",
                                "label": "SVT",
                                "sub": "Regular, narrow: vagal manoeuvres, adenosine"
                            },
                            {
                                "ecg": "afib",
                                "label": "Atrial fibrillation",
                                "sub": "Irregular: no vagal manoeuvres"
                            },
                            {
                                "ecg": "vt",
                                "label": "Monomorphic VT (with pulse)",
                                "sub": "Regular, wide: adenosine, amiodarone"
                            },
                            {
                                "ecg": "torsades",
                                "label": "Torsades de pointes",
                                "sub": "Magnesium; consider asynchronous defibrillation"
                            },
                            {
                                "ecg": "stach",
                                "label": "Sinus tachycardia",
                                "sub": "Look for the cause"
                            }
                        ]
                    },
                    {
                        "title": "Tools",
                        "items": [
                            {
                                "label": "Defibrillation Doses",
                                "sub": "Energies for LIFEPAK 15 and ZOLL X-Series",
                                "href": "../pages/defib.html",
                                "icon": "zap"
                            },
                            {
                                "label": "Megacode: SVT in an Asthmatic",
                                "sub": "A tachycardia case on the live monitor",
                                "href": "../pages/megacode.html?s=9",
                                "icon": "siren"
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
                    "Synchronized cardioversion for all hemodynamically compromised patients."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs and drug sheets",
                "icon": "link",
                "items": [
                    {
                        "label": "3.2 Adult Bradycardia",
                        "href": "c3-2.html"
                    },
                    {
                        "label": "4.3 Adult Cardiac Arrest",
                        "href": "c4-3.html"
                    },
                    {
                        "label": "M2 Adenosine",
                        "href": "m2.html"
                    },
                    {
                        "label": "M3 Amiodarone",
                        "href": "m3.html"
                    },
                    {
                        "label": "M24 Magnesium Sulphate",
                        "href": "m24.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "Tachycardias that need intervention are typically:",
            "options": [
                ">100 bpm",
                ">120 bpm",
                ">150 bpm",
                ">180 bpm"
            ],
            "correct": 2,
            "explanation": "Tachycardias requiring intervention are typically >150 bpm."
        },
        {
            "q": "Which is a sign of instability in tachycardia?",
            "options": [
                "Heart rate 155",
                "Acutely altered mental state",
                "Systolic BP 120",
                "Palpitations alone"
            ],
            "correct": 1,
            "explanation": "Instability: hypotension, acutely altered mental state, shock, ischemic chest discomfort, acute heart failure."
        },
        {
            "q": "What is generally first line for a compromised (unstable) patient?",
            "options": [
                "Vagal manoeuvres",
                "Synchronized cardioversion",
                "Fluid bolus",
                "Amiodarone"
            ],
            "correct": 1,
            "explanation": "Synchronized cardioversion is generally first-line for compromised/unstable patients."
        },
        {
            "q": "When can adenosine be considered in an unstable patient?",
            "options": [
                "Never",
                "Regular tachycardia, not significantly compromised, or when cardioversion without sedation would be inappropriate",
                "Only irregular rhythms",
                "Only in torsades"
            ],
            "correct": 1,
            "explanation": "Adenosine in unstable patients: regular tachycardias, not significantly compromised, or no sedation available."
        },
        {
            "q": "What is the first adenosine dose?",
            "options": [
                "3 mg",
                "6 mg",
                "12 mg",
                "18 mg"
            ],
            "correct": 1,
            "explanation": "1st dose 6 mg, 2nd dose 12 mg, rapid IV/IO with 20 ml saline flush."
        },
        {
            "q": "What is the second adenosine dose?",
            "options": [
                "6 mg",
                "12 mg",
                "18 mg",
                "24 mg"
            ],
            "correct": 1,
            "explanation": "2nd dose: 12 mg."
        },
        {
            "q": "How is adenosine given?",
            "options": [
                "Slow IV over 5 minutes",
                "Rapid IV/IO injection with a 20 ml saline flush",
                "IM",
                "Infusion over 10 minutes"
            ],
            "correct": 1,
            "explanation": "Rapid injection with 20 ml normal saline flush."
        },
        {
            "q": "What is the lowest clinical level for adenosine?",
            "options": [
                "EMT",
                "EMT-A",
                "P",
                "AP"
            ],
            "correct": 2,
            "explanation": "Adenosine is P on the flowchart."
        },
        {
            "q": "What is the lowest clinical level for synchronized cardioversion?",
            "options": [
                "P",
                "AP",
                "EP",
                "EMT-A"
            ],
            "correct": 1,
            "explanation": "Synchronized cardioversion is AP."
        },
        {
            "q": "Which is first for a stable, regular narrow complex tachycardia?",
            "options": [
                "Amiodarone",
                "Vagal manoeuvres",
                "Cardioversion",
                "Magnesium"
            ],
            "correct": 1,
            "explanation": "Narrow complex: vagal manoeuvres if regular, fluid bolus, then adenosine if regular."
        },
        {
            "q": "Which vagal manoeuvre is preferred?",
            "options": [
                "Carotid massage",
                "Modified Valsalva",
                "Eyeball pressure",
                "Breath-holding"
            ],
            "correct": 1,
            "explanation": "Modified Valsalva is preferred; alternatives are Valsalva, ice water, coughing, breath-holding."
        },
        {
            "q": "When must vagal manoeuvres be avoided?",
            "options": [
                "Regular SVT",
                "Varying R-R intervals or atrial fibrillation",
                "Heart rate above 150",
                "Young patients"
            ],
            "correct": 1,
            "explanation": "Avoid vagal stimulation if R-R intervals vary or AF is present."
        },
        {
            "q": "What fluid bolus is used in stable tachycardia?",
            "options": [
                "1 litre",
                "250 ml IV/IO crystalloid",
                "500 ml colloid",
                "None"
            ],
            "correct": 1,
            "explanation": "250 ml IV/IO crystalloid; reassess for fluid overload."
        },
        {
            "q": "What QRS width defines a wide complex tachycardia?",
            "options": [
                ">0.08 s",
                ">0.10 s",
                ">0.12 s",
                ">0.20 s"
            ],
            "correct": 2,
            "explanation": "Wide complex: QRS >0.12 s; narrow: <0.12 s."
        },
        {
            "q": "What is the amiodarone dose for stable wide complex tachycardia?",
            "options": [
                "300 mg push",
                "150 mg over 10 minutes IV/IO",
                "5 mg/kg",
                "1 g over 1 hour"
            ],
            "correct": 1,
            "explanation": "150 mg infused over 10 minutes (15 mg/min) in 100 ml D5W."
        },
        {
            "q": "In what is amiodarone diluted?",
            "options": [
                "Normal saline",
                "100 ml D5W",
                "Ringer's lactate",
                "Water for injection 10 ml"
            ],
            "correct": 1,
            "explanation": "Diluted in 100 ml 5% dextrose (D5W)."
        },
        {
            "q": "The rhythm does not revert after amiodarone 150 mg. Next?",
            "options": [
                "Stop",
                "Repeat 150 mg, then follow with 1 mg/min infusion",
                "Give 300 mg push",
                "Adenosine 18 mg"
            ],
            "correct": 1,
            "explanation": "Repeat dose (150 mg) if it fails to revert; follow with a 1 mg/min infusion."
        },
        {
            "q": "What is given for torsades de pointes?",
            "options": [
                "Adenosine",
                "Magnesium 2 g IV over 10 minutes; consider asynchronous defibrillation",
                "Vagal manoeuvres",
                "Amiodarone 300 mg push"
            ],
            "correct": 1,
            "explanation": "Torsades: consider asynchronous defibrillation; magnesium 2 g IV over 10 minutes."
        },
        {
            "q": "What is the first cardioversion energy for SVT on a LIFEPAK 15?",
            "options": [
                "50 J",
                "100 J",
                "120 J",
                "200 J"
            ],
            "correct": 0,
            "explanation": "SVT: 50 J, then 100, 200, 300, 360 J (LIFEPAK 15)."
        },
        {
            "q": "What is the first cardioversion energy for wide complex tachycardia?",
            "options": [
                "50 J",
                "100 J",
                "120 J",
                "360 J"
            ],
            "correct": 1,
            "explanation": "Wide complex tachycardia: 100 J on both devices."
        },
        {
            "q": "What is the first cardioversion energy for atrial fibrillation?",
            "options": [
                "50 J",
                "100 J",
                "120 J",
                "200 J"
            ],
            "correct": 2,
            "explanation": "AF: 120 J on both devices."
        },
        {
            "q": "On a ZOLL X-Series, what follows 120 J for AF?",
            "options": [
                "200 J, 300 J, 360 J",
                "150 J, 180 J, 200 J",
                "120 J again",
                "360 J"
            ],
            "correct": 1,
            "explanation": "ZOLL AF: 120 J, then 150, 180, 200 J."
        },
        {
            "q": "On a LIFEPAK 15, what follows 100 J for wide complex tachycardia?",
            "options": [
                "120 J, 150 J, 200 J",
                "200 J, 300 J, 360 J",
                "50 J",
                "100 J repeated"
            ],
            "correct": 1,
            "explanation": "LIFEPAK 15 wide complex: 100 J, then 200, 300, 360 J."
        },
        {
            "q": "Cardioversion fails to revert the rhythm. What do you do?",
            "options": [
                "Stop",
                "Increase the joule setting and repeat synchronized cardioversion",
                "Switch to unsynchronized at once",
                "Give adenosine 24 mg"
            ],
            "correct": 1,
            "explanation": "If the rhythm does not revert, increase the joules and cardiovert again."
        },
        {
            "q": "What must be ready whenever you cardiovert (electrically or with drugs)?",
            "options": [
                "A second ambulance",
                "Cardiac arrest equipment",
                "Police",
                "Nothing extra"
            ],
            "correct": 1,
            "explanation": "Cardioversion risks deterioration into cardiac arrest."
        },
        {
            "q": "IV access will be delayed in an unstable patient. What does CPG 3.3 suggest?",
            "options": [
                "Wait",
                "Consider IO access",
                "IM adenosine",
                "Transport without access"
            ],
            "correct": 1,
            "explanation": "Consider IO access if IV access may be delayed or is not feasible."
        },
        {
            "q": "Which rhythm is Red priority under CPG 3.3?",
            "options": [
                "Sinus tachycardia 110 with pain",
                "SVT",
                "Sinus rhythm",
                "Anxiety"
            ],
            "correct": 1,
            "explanation": "Red: VT, SVT, dysrhythmia with severe shock or hypotension."
        },
        {
            "q": "When might a 12-lead not be the immediate priority?",
            "options": [
                "Stable SVT",
                "Unconscious patient, major primary-survey problems, or life-threatening arrhythmia",
                "Never",
                "Any patient over 65"
            ],
            "correct": 1,
            "explanation": "A 12-lead may not be an immediate priority in these situations."
        },
        {
            "q": "Which is listed as a physiological cause of tachycardia?",
            "options": [
                "Hypothyroidism",
                "Anemia",
                "Hypothermia",
                "Bradycardia"
            ],
            "correct": 1,
            "explanation": "Sepsis, pain/anxiety, hypovolemia, anemia, street drugs, hyperthyroidism."
        },
        {
            "q": "The tachycardia is refractory to treatment. What next?",
            "options": [
                "Repeat everything",
                "Consider underlying causes and Tele-EMS",
                "Stop all treatment",
                "Discharge"
            ],
            "correct": 1,
            "explanation": "Refractory: consider underlying causes; consider Tele-EMS consultation."
        },
        {
            "q": "What is the KPI of CPG 3.3?",
            "options": [
                "Adenosine for all SVT",
                "Synchronized cardioversion for all hemodynamically compromised patients",
                "12-lead within 1 minute",
                "Amiodarone for all VT"
            ],
            "correct": 1,
            "explanation": "KPI: perform synchronized cardioversion on all hemodynamically compromised patients."
        }
    ],
    "flashcards": [
        {
            "category": "Definition",
            "question": "Tachycardia needing intervention?",
            "answer": "Typically >150 bpm, with a palpable pulse."
        },
        {
            "category": "Instability",
            "question": "Signs of instability?",
            "answer": "Hypotension, acutely altered mental state, signs of shock, ischemic chest discomfort, acute heart failure."
        },
        {
            "category": "Unstable",
            "question": "First line for compromised patients?",
            "answer": "Synchronized cardioversion (AP), considering sedation."
        },
        {
            "category": "Unstable",
            "question": "Adenosine in an unstable patient?",
            "answer": "Regular rhythm, not significantly compromised, or cardioversion without sedation inappropriate."
        },
        {
            "category": "Adenosine",
            "question": "Adenosine doses?",
            "answer": "6 mg then 12 mg, rapid IV/IO with 20 ml saline flush (P)."
        },
        {
            "category": "Narrow",
            "question": "Stable narrow complex sequence?",
            "answer": "Vagal manoeuvres if regular → 250 ml fluid → adenosine if regular."
        },
        {
            "category": "Vagal",
            "question": "Vagal manoeuvres?",
            "answer": "Modified Valsalva preferred; Valsalva, ice water to face, coughing, breath-holding (EMT)."
        },
        {
            "category": "Vagal",
            "question": "When to avoid vagal manoeuvres?",
            "answer": "Varying R-R intervals or atrial fibrillation."
        },
        {
            "category": "Wide",
            "question": "Stable wide complex sequence?",
            "answer": "Adenosine if regular → 250 ml fluid → amiodarone."
        },
        {
            "category": "Amiodarone",
            "question": "Amiodarone for wide complex tachycardia?",
            "answer": "150 mg in 100 ml D5W over 10 minutes (15 mg/min); repeat once if needed; then 1 mg/min infusion (AP)."
        },
        {
            "category": "QRS",
            "question": "Narrow vs wide QRS?",
            "answer": "Narrow <0.12 s; wide >0.12 s."
        },
        {
            "category": "Torsades",
            "question": "Torsades de pointes?",
            "answer": "Consider asynchronous defibrillation; magnesium 2 g IV over 10 minutes."
        },
        {
            "category": "Fluids",
            "question": "Fluid bolus?",
            "answer": "250 ml IV/IO crystalloid; stop if fluid overload (EMT)."
        },
        {
            "category": "Energies",
            "question": "LIFEPAK 15: wide complex?",
            "answer": "100 J, then 200, 300, 360 J."
        },
        {
            "category": "Energies",
            "question": "LIFEPAK 15: SVT?",
            "answer": "50 J, then 100, 200, 300, 360 J."
        },
        {
            "category": "Energies",
            "question": "LIFEPAK 15: AF?",
            "answer": "120 J, then 200, 300, 360 J."
        },
        {
            "category": "Energies",
            "question": "ZOLL X-Series: wide complex?",
            "answer": "100 J, then 120, 150, 200 J."
        },
        {
            "category": "Energies",
            "question": "ZOLL X-Series: SVT?",
            "answer": "50 J, then 120, 150, 200 J."
        },
        {
            "category": "Energies",
            "question": "ZOLL X-Series: AF?",
            "answer": "120 J, then 150, 180, 200 J."
        },
        {
            "category": "Cardioversion",
            "question": "Rhythm does not revert?",
            "answer": "Increase joules and repeat synchronized cardioversion."
        },
        {
            "category": "Safety",
            "question": "Before any cardioversion?",
            "answer": "Cardiac arrest equipment ready: electrical or chemical cardioversion can cause arrest."
        },
        {
            "category": "Causes",
            "question": "Physiological causes to treat?",
            "answer": "Sepsis, pain/anxiety, hypovolemia, anemia, street drugs, hyperthyroidism; also toxins/drugs."
        },
        {
            "category": "Exclusions",
            "question": "Who is excluded?",
            "answer": "Likely non-cardiac cause needing other treatment (e.g. sepsis); children <13."
        },
        {
            "category": "Access",
            "question": "IV access delayed?",
            "answer": "Consider IO access."
        },
        {
            "category": "Triage",
            "question": "Red priority in tachycardia?",
            "answer": "VT, SVT, dysrhythmia with severe shock or hypotension."
        },
        {
            "category": "Oxygen",
            "question": "Oxygen target in tachycardia?",
            "answer": "SpO2 >94%."
        },
        {
            "category": "Refractory",
            "question": "Refractory tachycardia?",
            "answer": "Consider underlying causes; Tele-EMS consultation."
        },
        {
            "category": "Scope",
            "question": "Levels in CPG 3.3?",
            "answer": "Vagal manoeuvres and fluids EMT; adenosine P; cardioversion and amiodarone AP."
        },
        {
            "category": "Arrest",
            "question": "Patient arrests?",
            "answer": "Go to the Cardiac Arrest CPG."
        },
        {
            "category": "KPI",
            "question": "CPG 3.3 KPI?",
            "answer": "Synchronized cardioversion for all hemodynamically compromised patients."
        }
    ],
    "critical": [
        {
            "id": "crit_3_3_1",
            "scenario": "A 60-year-old man has palpitations and light-headedness. HR 190, BP 85/50, pale and sweaty. The monitor shows a regular wide complex tachycardia. An AP is on scene.",
            "ecg": "vt",
            "question": "What is the priority?",
            "options": [
                {
                    "t": "Synchronized cardioversion at 100 J (with sedation if possible), cardiac arrest equipment ready",
                    "f": "Correct. He is unstable (hypotension, shock); cardioversion is first-line, starting at 100 J for wide complex tachycardia."
                },
                {
                    "t": "Vagal manoeuvres",
                    "f": "Vagal manoeuvres are for stable narrow complex tachycardia."
                },
                {
                    "t": "Amiodarone 150 mg over 10 minutes first",
                    "f": "Amiodarone is for stable wide complex tachycardia."
                },
                {
                    "t": "Fluid bolus and observe",
                    "f": "He is unstable: treat the rhythm."
                }
            ],
            "correct": 0,
            "explanation": "Unstable tachycardia: request ALS back-up and perform synchronized cardioversion (AP), stepping up energy if it does not revert. Wide complex: 100 J then 200, 300, 360 J (LIFEPAK 15).",
            "kpi": "Synchronized cardioversion for all hemodynamically compromised patients."
        },
        {
            "id": "crit_3_3_2",
            "scenario": "A 45-year-old woman with known SVT has palpitations. HR 210, BP 115/70, regular narrow complex, otherwise well. Modified Valsalva has not worked; IV access is in.",
            "ecg": "svt",
            "question": "What next?",
            "options": [
                {
                    "t": "Adenosine 6 mg rapid IV with a 20 ml flush, then 12 mg if needed",
                    "f": "Correct. Stable regular narrow complex: vagal manoeuvres, fluid, then adenosine."
                },
                {
                    "t": "Synchronized cardioversion now",
                    "f": "She is stable; cardioversion is for compromised patients."
                },
                {
                    "t": "Amiodarone",
                    "f": "Amiodarone is used for wide complex tachycardia in CPG 3.3."
                },
                {
                    "t": "Repeat Valsalva for 20 minutes",
                    "f": "Move on to adenosine (P level)."
                }
            ],
            "correct": 0,
            "explanation": "Stable narrow complex (QRS <0.12 s) and regular: vagal manoeuvres, 250 ml fluid bolus, then adenosine 6 mg then 12 mg.",
            "kpi": "Synchronized cardioversion for all hemodynamically compromised patients."
        },
        {
            "id": "crit_3_3_3",
            "scenario": "A 70-year-old has an irregular narrow complex tachycardia at 160. BP 128/80, alert, no chest pain.",
            "ecg": "afib",
            "question": "Which is NOT appropriate?",
            "options": [
                {
                    "t": "Vagal manoeuvres",
                    "f": "Correct. Avoid vagal stimulation with varying R-R intervals or atrial fibrillation."
                },
                {
                    "t": "A 12-lead ECG and monitoring",
                    "f": "Appropriate."
                },
                {
                    "t": "Looking for underlying causes",
                    "f": "Appropriate."
                },
                {
                    "t": "Considering Tele-EMS if refractory",
                    "f": "Appropriate."
                }
            ],
            "correct": 0,
            "explanation": "Vagal manoeuvres are only for regular narrow complex tachycardia, and adenosine is also for regular rhythms. In AF, look for causes and consider Tele-EMS if refractory.",
            "kpi": "Synchronized cardioversion for all hemodynamically compromised patients."
        },
        {
            "id": "crit_3_3_4",
            "scenario": "A stable patient with a regular wide complex tachycardia at 160 has had adenosine 6 mg and 12 mg and a 250 ml bolus. Amiodarone 150 mg over 10 minutes has just finished; the rhythm continues.",
            "ecg": "vt",
            "question": "What next (AP on scene)?",
            "options": [
                {
                    "t": "Repeat amiodarone 150 mg over 10 minutes",
                    "f": "Correct. Repeat the dose if the rhythm fails to revert, then follow with 1 mg/min if it reverts."
                },
                {
                    "t": "Amiodarone 300 mg push",
                    "f": "That is the cardiac arrest dose, not for a perfusing rhythm."
                },
                {
                    "t": "A third adenosine dose of 18 mg",
                    "f": "CPG 3.3 gives two doses: 6 mg and 12 mg."
                },
                {
                    "t": "Vagal manoeuvres",
                    "f": "These are for narrow complex tachycardia."
                }
            ],
            "correct": 0,
            "explanation": "Stable wide complex: adenosine if regular, fluid bolus, amiodarone 150 mg over 10 minutes, repeat once if needed, then 1 mg/min infusion. If it becomes unstable, cardiovert.",
            "kpi": "Synchronized cardioversion for all hemodynamically compromised patients."
        },
        {
            "id": "crit_3_3_5",
            "scenario": "A 50-year-old woman has recurrent runs of polymorphic VT that twist around the baseline. She is conscious but dizzy, BP 90/60.",
            "ecg": "torsades",
            "question": "What does CPG 3.3 give for torsades de pointes?",
            "options": [
                {
                    "t": "Magnesium 2 g IV over 10 minutes, and consider asynchronous defibrillation",
                    "f": "Correct."
                },
                {
                    "t": "Adenosine 6 mg",
                    "f": "Adenosine is for regular tachycardias, not torsades."
                },
                {
                    "t": "Vagal manoeuvres",
                    "f": "Not for torsades."
                },
                {
                    "t": "Amiodarone 300 mg",
                    "f": "CPG 3.3 gives magnesium for torsades."
                }
            ],
            "correct": 0,
            "explanation": "Torsades de pointes: consider asynchronous defibrillation and give magnesium 2 g IV over 10 minutes. Have arrest equipment ready.",
            "kpi": "Synchronized cardioversion for all hemodynamically compromised patients."
        }
    ]
};
