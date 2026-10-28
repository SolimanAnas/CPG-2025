/* ========== CPG 3.1 – Chest Pain / Acute Coronary Syndrome ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c3-1",
    "title": "Chest Pain / Acute Coronary Syndrome",
    "shortTitle": "3.1 Chest Pain / ACS",
    "guide": {
        "cpg": "3.1",
        "group": "cardio",
        "groupLabel": "Cardiovascular",
        "title": "Chest Pain / Acute Coronary Syndrome",
        "lead": "Get a full set of vital signs and a 12-lead ECG early, find the time of onset, treat ischemic pain, and move STEMI patients quickly to an appropriate cardiac hospital with pads on.",
        "source": {
            "label": "CPG 3.1",
            "pages": "73–78",
            "pdf": "../pdf_sections/3_1_Chest_Pain___Acute_Coronary_Syndrome.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Ischemic-type symptoms, with or without ECG changes: chest pain, pressure or discomfort; radiation to arms, jaw, back or shoulders; dyspnea; diaphoresis; nausea or vomiting; dizziness, syncope, palpitations.",
                    "ACS on the 12-lead: STEMI, or NSTEMI / ischemic changes (T-wave inversion, ST depression, new LBBB).",
                    "Atypical or non-specific pain when a cardiac cause cannot be excluded; epigastric discomfort, syncope or palpitations with no clear non-cardiac cause.",
                    "Hemodynamic compromise or arrhythmia without chest pain when an acute cardiac cause is likely."
                ],
                "exclude": [
                    "A clear non-cardiac cause of chest pain."
                ]
            },
            {
                "type": "list",
                "title": "Assessment",
                "icon": "stethoscope",
                "items": [
                    "<b>Full vital signs and a 12-lead ECG.</b> Consider right-sided and posterior ECGs.",
                    "<b>Time of symptom onset:</b> it changes management.",
                    "<b>OPQRST</b> and associated symptoms: is the pain ischemic, non-ischemic or non-cardiac?",
                    "<b>Red priority:</b> signs of severe shock; STEMI; chest pain, dysrhythmia or ECG changes with significant cardiovascular compromise."
                ]
            },
            {
                "type": "steps",
                "title": "Management",
                "icon": "heart-pulse",
                "steps": [
                    {
                        "title": "Oxygen",
                        "level": "EMR",
                        "text": "Target SpO<sub>2</sub> 90%, with an appropriate mask."
                    },
                    {
                        "title": "Aspirin",
                        "level": "EMR",
                        "text": "Standard dose 324 mg (4 tablets). If aspirin was taken in the last 60 minutes, confirm the dose and top up to a maximum total of 324 mg.",
                        "doses": [
                            {
                                "drug": "Aspirin",
                                "dose": "162–324 mg PO",
                                "note": "Maximum total 324 mg",
                                "level": "EMR"
                            }
                        ]
                    },
                    {
                        "title": "GTN for ischemic pain",
                        "level": "EMT",
                        "text": "Only while systolic BP stays at or above 100 mmHg. Reassess vital signs before each repeat.",
                        "doses": [
                            {
                                "drug": "GTN",
                                "dose": "0.4 mg SL",
                                "note": "Every 3–5 minutes while symptoms persist; maximum 1.2 mg",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Morphine for severe pain only",
                        "level": "EP",
                        "doses": [
                            {
                                "drug": "Morphine",
                                "dose": "1–2 mg IV/IO increments",
                                "note": "Every 5–10 minutes; maximum 10 mg",
                                "level": "EP"
                            }
                        ]
                    },
                    {
                        "title": "Hypotension (systolic BP &lt;90 mmHg)",
                        "text": "Consider normal saline 250 ml IV/IO, repeat as required. Watch for fluid overload; stop if pulmonary edema develops."
                    },
                    {
                        "title": "Reassess",
                        "text": "Frequently, as per Universal Care; continuous ECG monitoring for all cardiac chest pain."
                    }
                ]
            },
            {
                "type": "list",
                "title": "GTN contraindications",
                "icon": "ban",
                "tone": "alert",
                "items": [
                    "Phosphodiesterase inhibitor use (typically for erectile dysfunction; also used for other conditions, so check the medication list).",
                    "Inferior STEMI with suspected right ventricular involvement.",
                    "Avoid in tachy- and bradyarrhythmias: treat the rate first."
                ]
            },
            {
                "type": "groups",
                "title": "By ECG finding",
                "icon": "activity",
                "groups": [
                    {
                        "title": "STEMI",
                        "items": [
                            "Apply pads (AED) in preparation for cardiac arrest, and use 4-lead monitoring too, so pacing and cardioversion are ready.",
                            "Expedite transport, without neglecting assessment and treatment. Coordinate with Dispatch 2 for an appropriate cardiac hospital."
                        ]
                    },
                    {
                        "title": "Non-STEMI",
                        "items": [
                            "Serial 12-leads, one with each set of vital signs, to watch for progression.",
                            "Look for occlusion MI (OMI) without classic STEMI criteria: hyperacute T waves, reciprocal changes, ST depression in multiple leads. Contact Telemedicine to confirm and escalate."
                        ]
                    },
                    {
                        "title": "Unclear ECG",
                        "items": [
                            "Consult Telemedicine for a second opinion when the ECG is non-specific or you are unsure.",
                            "EMTs should use Telemedicine routinely when the ECG is not a clear STEMI."
                        ]
                    }
                ]
            },
            {
                "type": "list",
                "title": "When to call ALS back-up",
                "icon": "ambulance",
                "items": [
                    "Hemodynamically unstable.",
                    "VT, or runs of VT.",
                    "Severe difficulty breathing.",
                    "Agitation that prevents care.",
                    "You suspect the patient will deteriorate into cardiac arrest."
                ]
            },
            {
                "type": "table",
                "title": "Telling chest pain apart",
                "icon": "search",
                "stack": true,
                "columns": [
                    "",
                    "Ischemic (angina, ACS)",
                    "Non-ischemic (pericarditis, dissection, PE)",
                    "Non-cardiac (GI, musculoskeletal, respiratory)"
                ],
                "rows": [
                    [
                        "Location",
                        "Substernal; may radiate to arms, neck, jaw, shoulders, back",
                        "Retrosternal (pericarditis); chest/back (dissection); lateral (PE)",
                        "Retrosternal (GERD); localized (MSK); lateral (respiratory)"
                    ],
                    [
                        "Quality",
                        "Pressure, squeezing, heaviness, tightness, burning",
                        "Sharp, pleuritic (pericarditis, PE); tearing (dissection)",
                        "Burning (GERD); sharp, aching (MSK); pleuritic (respiratory)"
                    ],
                    [
                        "Duration",
                        "2–30 minutes",
                        "Hours to days (pericarditis); sudden, persistent (dissection, PE)",
                        "Minutes to hours (GERD); variable (MSK)"
                    ],
                    [
                        "Worse with",
                        "Exertion, emotional stress",
                        "Inspiration, lying flat (pericarditis); deep breath (PE)",
                        "Meals, lying down (GERD); movement, palpation (MSK)"
                    ],
                    [
                        "Relieved by",
                        "Rest, nitroglycerin",
                        "Leaning forward (pericarditis)",
                        "Antacids (GERD); NSAIDs (MSK)"
                    ],
                    [
                        "Associated",
                        "Dyspnea, nausea, vomiting, diaphoresis, palpitations",
                        "Fever, rub (pericarditis); neuro signs, unequal BP/pulses (dissection); dyspnea, hemoptysis, tachycardia (PE)",
                        "Regurgitation (GERD); tenderness (MSK); cough, fever (respiratory)"
                    ]
                ]
            },
            {
                "type": "tools",
                "title": "Practise with the app",
                "icon": "monitor",
                "groups": [
                    {
                        "title": "ECG patterns, as drawn by the ECG Simulator",
                        "items": [
                            {
                                "ecg": "stemiInf",
                                "label": "Inferior STEMI",
                                "sub": "ST elevation in II, III, aVF"
                            },
                            {
                                "ecg": "stemiInfRv",
                                "lead": "V4R",
                                "label": "Inferior STEMI with RV involvement",
                                "sub": "Right-sided lead V4R: GTN is contraindicated"
                            },
                            {
                                "ecg": "stemiAnt",
                                "lead": "V3",
                                "label": "Anterior STEMI",
                                "sub": "Lead V3"
                            },
                            {
                                "ecg": "stemiPost",
                                "lead": "V2",
                                "label": "Posterior STEMI",
                                "sub": "ST depression in V1–V3: take a posterior ECG"
                            },
                            {
                                "ecg": "lbbb",
                                "lead": "V1",
                                "label": "Left bundle branch block",
                                "sub": "A new LBBB is an ischemic change"
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
                    "A 12-lead ECG for every patient with cardiac chest pain.",
                    "Aspirin for every ACS patient (where appropriate)."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs and drug sheets",
                "icon": "link",
                "items": [
                    {
                        "label": "1.1 Universal Care",
                        "href": "c1.html?section=c1s1"
                    },
                    {
                        "label": "3.2 Adult Bradycardia",
                        "href": "c3-2.html"
                    },
                    {
                        "label": "3.3 Adult Tachycardia",
                        "href": "c3-3.html"
                    },
                    {
                        "label": "3.4 Acute Pulmonary Edema",
                        "href": "c3-4.html"
                    },
                    {
                        "label": "M4 Aspirin",
                        "href": "m4.html"
                    },
                    {
                        "label": "M18 GTN",
                        "href": "m18.html"
                    },
                    {
                        "label": "M28 Morphine",
                        "href": "m28.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "What SpO2 does CPG 3.1 target with oxygen in suspected ACS?",
            "options": [
                "90%",
                "94–98%",
                "100%",
                "88–92%"
            ],
            "correct": 0,
            "explanation": "Consider oxygen therapy to a target SpO2 of 90%."
        },
        {
            "q": "What is the aspirin dose range in ACS?",
            "options": [
                "81 mg",
                "162–324 mg PO",
                "500 mg",
                "1000 mg"
            ],
            "correct": 1,
            "explanation": "Aspirin 162–324 mg PO; the standard dose is 324 mg (4 tablets)."
        },
        {
            "q": "What is the standard aspirin dose?",
            "options": [
                "162 mg (2 tablets)",
                "324 mg (4 tablets)",
                "300 mg",
                "81 mg"
            ],
            "correct": 1,
            "explanation": "Standard dose 324 mg (4 tablets)."
        },
        {
            "q": "A patient took 162 mg of aspirin 30 minutes ago. What do you give?",
            "options": [
                "Nothing",
                "Top up to a maximum total of 324 mg",
                "A full 324 mg",
                "81 mg"
            ],
            "correct": 1,
            "explanation": "Aspirin taken within the last 60 minutes: confirm the dose and top up to a maximum total of 324 mg."
        },
        {
            "q": "What is the GTN dose?",
            "options": [
                "0.4 mg SL every 3–5 minutes, maximum 1.2 mg",
                "0.8 mg SL once",
                "0.4 mg IV",
                "1 mg SL every minute"
            ],
            "correct": 0,
            "explanation": "GTN 0.4 mg SL every 3–5 minutes while symptoms persist, maximum 1.2 mg."
        },
        {
            "q": "GTN may be repeated only while systolic BP is at least:",
            "options": [
                "80 mmHg",
                "90 mmHg",
                "100 mmHg",
                "120 mmHg"
            ],
            "correct": 2,
            "explanation": "Repeat while systolic BP remains ≥100 mmHg; reassess vital signs before each dose."
        },
        {
            "q": "Which is a contraindication to GTN in CPG 3.1?",
            "options": [
                "Heart rate of 80",
                "Phosphodiesterase inhibitor use",
                "Age over 65",
                "Aspirin given"
            ],
            "correct": 1,
            "explanation": "Contraindications: phosphodiesterase inhibitor use; inferior STEMI with suspected RV involvement."
        },
        {
            "q": "Which STEMI makes GTN contraindicated?",
            "options": [
                "Anterior",
                "Lateral",
                "Inferior with suspected right ventricular involvement",
                "Septal"
            ],
            "correct": 2,
            "explanation": "Inferior STEMI with suspected RV involvement is a contraindication."
        },
        {
            "q": "Why might a patient take a phosphodiesterase inhibitor besides erectile dysfunction?",
            "options": [
                "They never do",
                "They may be used for other conditions: check the medication list closely",
                "Only for headaches",
                "Only women take them"
            ],
            "correct": 1,
            "explanation": "Phosphodiesterase inhibitors may be used for other conditions; investigate medications closely."
        },
        {
            "q": "Should GTN be given in tachy- or bradyarrhythmias?",
            "options": [
                "Yes, always",
                "No – avoid it and prioritize rate management",
                "Only IV",
                "Only with morphine"
            ],
            "correct": 1,
            "explanation": "Avoid GTN in tachy and brady arrhythmias; manage the rate first."
        },
        {
            "q": "When is morphine indicated in CPG 3.1?",
            "options": [
                "Any chest pain",
                "Severe pain only",
                "Before aspirin",
                "Never"
            ],
            "correct": 1,
            "explanation": "Morphine is indicated for severe pain only."
        },
        {
            "q": "What is the morphine regimen?",
            "options": [
                "5 mg IM",
                "1–2 mg IV/IO increments every 5–10 minutes, maximum 10 mg",
                "10 mg IV bolus",
                "0.1 mg/kg"
            ],
            "correct": 1,
            "explanation": "Morphine 1–2 mg IV/IO increments, repeat every 5–10 minutes, maximum 10 mg."
        },
        {
            "q": "What is the lowest clinical level that can give morphine for chest pain?",
            "options": [
                "EMT",
                "EMT-A",
                "AP",
                "EP"
            ],
            "correct": 3,
            "explanation": "Morphine is marked EP on the CPG 3.1 flowchart."
        },
        {
            "q": "What is the lowest level that can give GTN?",
            "options": [
                "EMR",
                "EMT",
                "AP",
                "EP"
            ],
            "correct": 1,
            "explanation": "GTN is EMT; aspirin and oxygen are EMR."
        },
        {
            "q": "A patient with suspected ACS has systolic BP 85 mmHg and clear lungs. What fluid?",
            "options": [
                "1 litre rapidly",
                "Normal saline 250 ml IV/IO, watching for pulmonary edema",
                "No fluid ever",
                "500 ml Ringer's"
            ],
            "correct": 1,
            "explanation": "If systolic BP <90 mmHg, consider normal saline 250 ml; stop if pulmonary edema develops; repeat as required."
        },
        {
            "q": "What should you do if pulmonary edema develops during a fluid bolus?",
            "options": [
                "Speed up",
                "Stop the bolus",
                "Add GTN",
                "Give furosemide"
            ],
            "correct": 1,
            "explanation": "Stop the fluid bolus if pulmonary edema develops."
        },
        {
            "q": "What must be done for every STEMI on the 12-lead?",
            "options": [
                "Wait for symptoms to resolve",
                "Apply pads, monitor continuously and expedite transport",
                "Give morphine first",
                "Repeat the ECG in 30 minutes"
            ],
            "correct": 1,
            "explanation": "STEMI: apply AED pads, continuous ECG monitoring, expedite transport."
        },
        {
            "q": "Why are pads applied in STEMI?",
            "options": [
                "To record a better ECG",
                "In preparation for cardiac arrest, and ready for pacing or cardioversion",
                "To relieve pain",
                "To measure BP"
            ],
            "correct": 1,
            "explanation": "STEMI patients are at high risk of arrest and arrhythmias."
        },
        {
            "q": "Who do you coordinate with to reach an appropriate cardiac hospital?",
            "options": [
                "Family",
                "Dispatch 2",
                "Police",
                "Any hospital directly"
            ],
            "correct": 1,
            "explanation": "Coordinate with Dispatch 2 for an appropriate cardiac hospital."
        },
        {
            "q": "What is done for Non-STEMI changes?",
            "options": [
                "Nothing extra",
                "Serial 12-leads with each set of vital signs",
                "One ECG only",
                "Defibrillate"
            ],
            "correct": 1,
            "explanation": "Perform serial 12-leads to watch for progression."
        },
        {
            "q": "Which subtle sign may indicate occlusion MI (OMI) without STEMI criteria?",
            "options": [
                "Normal T waves",
                "Hyperacute T waves",
                "Sinus rhythm",
                "Normal axis"
            ],
            "correct": 1,
            "explanation": "Look for hyperacute T waves, reciprocal changes or ST depression in multiple leads."
        },
        {
            "q": "Who confirms a suspected OMI?",
            "options": [
                "The patient",
                "Telemedicine",
                "Dispatch",
                "Nobody"
            ],
            "correct": 1,
            "explanation": "Contact Telemedicine for OMI confirmation and escalation."
        },
        {
            "q": "When should EMTs routinely use Telemedicine in chest pain?",
            "options": [
                "Never",
                "When the ECG is not a clear STEMI",
                "Only for children",
                "Only at night"
            ],
            "correct": 1,
            "explanation": "Telemedicine should be used routinely by EMTs when the diagnosis is not clear STEMI."
        },
        {
            "q": "Which extra ECGs should be considered?",
            "options": [
                "None",
                "Right-sided and posterior",
                "Only lead II",
                "Only V1"
            ],
            "correct": 1,
            "explanation": "Consider right-sided and posterior ECGs."
        },
        {
            "q": "Why is the time of symptom onset important?",
            "options": [
                "For billing",
                "It influences patient management",
                "It is not important",
                "Only for documentation"
            ],
            "correct": 1,
            "explanation": "Determine the time of onset as it will influence management."
        },
        {
            "q": "Which is a reason to call ALS back-up in ACS?",
            "options": [
                "Stable pain resolved with GTN",
                "Runs of VT",
                "Mild nausea",
                "Normal ECG"
            ],
            "correct": 1,
            "explanation": "ALS if unstable, VT or runs of VT, severe breathing difficulty, agitation preventing care, or expected arrest."
        },
        {
            "q": "What is the typical duration of ischemic chest pain in the CPG table?",
            "options": [
                "Seconds",
                "2–30 minutes",
                "Days",
                "Weeks"
            ],
            "correct": 1,
            "explanation": "Ischemic pain typically lasts 2–30 minutes; pericarditis hours to days."
        },
        {
            "q": "Pain relieved by leaning forward suggests:",
            "options": [
                "Ischemic pain",
                "Pericarditis",
                "GERD",
                "Musculoskeletal pain"
            ],
            "correct": 1,
            "explanation": "Leaning forward relieves pericarditis pain."
        },
        {
            "q": "Tearing pain with unequal pulses suggests:",
            "options": [
                "Angina",
                "Aortic dissection",
                "GERD",
                "Pneumonia"
            ],
            "correct": 1,
            "explanation": "Tearing/ripping quality and unequal BP or pulses suggest aortic dissection."
        },
        {
            "q": "What are the two KPIs of CPG 3.1?",
            "options": [
                "Morphine for all and fluids for all",
                "12-lead ECG for cardiac chest pain, and aspirin for ACS patients (where appropriate)",
                "Oxygen for all and GTN for all",
                "Transport within 10 minutes and pads for all"
            ],
            "correct": 1,
            "explanation": "KPIs: 12-lead ECG for all cardiac chest pain; aspirin for all ACS patients where appropriate."
        }
    ],
    "flashcards": [
        {
            "category": "Oxygen",
            "question": "SpO2 target in ACS?",
            "answer": "90%, using an appropriate oxygen mask."
        },
        {
            "category": "Aspirin",
            "question": "Aspirin dose?",
            "answer": "162–324 mg PO; standard 324 mg (4 tablets)."
        },
        {
            "category": "Aspirin",
            "question": "Aspirin already taken?",
            "answer": "Within the last 60 minutes: confirm the dose and top up to a maximum total of 324 mg."
        },
        {
            "category": "GTN",
            "question": "GTN dose?",
            "answer": "0.4 mg SL every 3–5 minutes while symptoms persist and SBP ≥100 mmHg; maximum 1.2 mg."
        },
        {
            "category": "GTN",
            "question": "Before each repeat GTN?",
            "answer": "Reassess vital signs."
        },
        {
            "category": "GTN",
            "question": "GTN contraindications?",
            "answer": "Phosphodiesterase inhibitor use; inferior STEMI with suspected RV involvement."
        },
        {
            "category": "GTN",
            "question": "GTN and arrhythmias?",
            "answer": "Avoid in tachy- and bradyarrhythmias; manage the rate first."
        },
        {
            "category": "Morphine",
            "question": "Morphine in ACS?",
            "answer": "Severe pain only: 1–2 mg IV/IO increments every 5–10 minutes, maximum 10 mg (EP)."
        },
        {
            "category": "Fluids",
            "question": "Hypotension in ACS?",
            "answer": "SBP <90 mmHg: consider NS 250 ml IV/IO, repeat as required; stop if pulmonary edema develops."
        },
        {
            "category": "Scope",
            "question": "Levels in CPG 3.1?",
            "answer": "Oxygen and aspirin EMR; GTN EMT; morphine EP."
        },
        {
            "category": "STEMI",
            "question": "STEMI on the 12-lead?",
            "answer": "Apply pads, 4-lead monitoring, expedite transport via Dispatch 2 to an appropriate cardiac hospital."
        },
        {
            "category": "STEMI",
            "question": "Why pads in STEMI?",
            "answer": "High risk of arrest and arrhythmia: ready for defibrillation, pacing or cardioversion."
        },
        {
            "category": "NSTEMI",
            "question": "Non-STEMI on the 12-lead?",
            "answer": "Serial 12-leads with each set of vital signs; look for OMI; Telemedicine."
        },
        {
            "category": "OMI",
            "question": "Subtle signs of OMI?",
            "answer": "Hyperacute T waves, reciprocal changes, ST depression in multiple leads."
        },
        {
            "category": "Telemedicine",
            "question": "When consult Telemedicine?",
            "answer": "Non-specific or unclear ECG, or uncertainty; routinely by EMTs when not a clear STEMI; to confirm OMI."
        },
        {
            "category": "ECG",
            "question": "Extra ECG views to consider?",
            "answer": "Right-sided and posterior ECGs."
        },
        {
            "category": "Assessment",
            "question": "Why record the time of onset?",
            "answer": "It influences patient management."
        },
        {
            "category": "Assessment",
            "question": "Ischemic-type symptoms?",
            "answer": "Chest pain/pressure; radiation to arms, jaw, back, shoulders; dyspnea; diaphoresis; nausea/vomiting; dizziness, syncope, palpitations."
        },
        {
            "category": "ECG",
            "question": "ECG changes counted as ACS?",
            "answer": "STEMI; NSTEMI or ischemic changes: T-wave inversion, ST depression, new LBBB."
        },
        {
            "category": "Triage",
            "question": "Red priority in chest pain?",
            "answer": "Severe shock; STEMI; chest pain, dysrhythmia or ECG changes with significant cardiovascular compromise."
        },
        {
            "category": "ALS",
            "question": "ALS back-up triggers?",
            "answer": "Unstable; VT or runs of VT; severe breathing difficulty; agitation preventing care; expected arrest."
        },
        {
            "category": "Pain types",
            "question": "Ischemic pain features?",
            "answer": "Substernal pressure or tightness radiating to arms/neck/jaw/back; 2–30 minutes; with exertion or stress; relieved by rest and nitroglycerin."
        },
        {
            "category": "Pain types",
            "question": "Pericarditis features?",
            "answer": "Sharp pleuritic pain; hours to days; worse lying flat or on inspiration; better leaning forward; fever, pericardial rub."
        },
        {
            "category": "Pain types",
            "question": "Aortic dissection features?",
            "answer": "Sudden tearing pain to the chest/back; neurologic symptoms; unequal BP or pulses."
        },
        {
            "category": "Pain types",
            "question": "PE features?",
            "answer": "Lateral pleuritic pain, sudden; worse on deep breath; dyspnea, hemoptysis, tachycardia."
        },
        {
            "category": "Pain types",
            "question": "Non-cardiac pain clues?",
            "answer": "Burning after meals/lying down (GERD); localized, worse on movement or palpation (MSK); cough, fever (respiratory)."
        },
        {
            "category": "Monitoring",
            "question": "Monitoring for cardiac chest pain?",
            "answer": "Continuous ECG monitoring for all; frequent reassessment."
        },
        {
            "category": "Fluids",
            "question": "Fluid caution in cardiac patients?",
            "answer": "Small volumes can cause fluid overload in cardiac failure."
        },
        {
            "category": "Transport",
            "question": "Destination?",
            "answer": "The closest most appropriate cardiac hospital, with SpO2 and ECG monitoring."
        },
        {
            "category": "KPI",
            "question": "CPG 3.1 KPIs?",
            "answer": "12-lead ECG for all cardiac chest pain; aspirin for all ACS patients (where appropriate)."
        }
    ],
    "critical": [
        {
            "id": "crit_3_1_1",
            "scenario": "A 58-year-old man has crushing central chest pain radiating to his left arm, with sweating. BP 130/85, SpO2 94% on air. The 12-lead shows ST elevation in II, III and aVF; right-sided leads show ST elevation in V4R.",
            "ecg": "stemiInfRv",
            "ecgLead": "V4R",
            "question": "Which treatment is right?",
            "options": [
                {
                    "t": "Aspirin 324 mg, pads on, expedite transport to a cardiac hospital; withhold GTN",
                    "f": "Correct. Inferior STEMI with RV involvement is a GTN contraindication."
                },
                {
                    "t": "GTN 0.4 mg SL, repeated to 1.2 mg",
                    "f": "GTN is contraindicated in inferior STEMI with suspected RV involvement."
                },
                {
                    "t": "High-flow oxygen to SpO2 100%",
                    "f": "CPG 3.1 targets SpO2 90%; his SpO2 is already above that."
                },
                {
                    "t": "Morphine 10 mg IV now",
                    "f": "Morphine is for severe pain only, in 1–2 mg increments, by an EP."
                }
            ],
            "correct": 0,
            "explanation": "STEMI: aspirin, pads, continuous monitoring and expedited transport via Dispatch 2. Right-sided leads showing RV involvement in an inferior STEMI make GTN contraindicated.",
            "kpi": "Aspirin for every ACS patient (where appropriate)."
        },
        {
            "id": "crit_3_1_2",
            "scenario": "A 62-year-old woman has sudden severe tearing chest pain going through to her back. BP 150/95 in the right arm and 110/70 in the left.",
            "question": "What does the CPG's chest pain table suggest?",
            "options": [
                {
                    "t": "Aortic dissection: a non-ischemic cause; treat carefully and transport",
                    "f": "Correct. Sudden tearing pain to the back with unequal BP fits aortic dissection."
                },
                {
                    "t": "Typical ischemic pain: give GTN and aspirin as standard",
                    "f": "Tearing pain with unequal BP points to dissection, a non-ischemic cause."
                },
                {
                    "t": "GERD",
                    "f": "Burning pain related to meals suggests GERD, not this picture."
                },
                {
                    "t": "Musculoskeletal pain",
                    "f": "Musculoskeletal pain is localized and worse on movement or palpation."
                }
            ],
            "correct": 0,
            "explanation": "The CPG table lists aortic dissection as non-ischemic: tearing/ripping, sudden and persistent, chest or back, with neurologic symptoms or unequal BP or pulses.",
            "kpi": "A 12-lead ECG for every patient with cardiac chest pain."
        },
        {
            "id": "crit_3_1_3",
            "scenario": "A 55-year-old man had 30 minutes of chest pain 2 hours ago and is now pain-free and stable. His 12-lead has no STEMI but shows hyperacute T waves with reciprocal changes. You are an EMT crew.",
            "question": "What should you do?",
            "options": [
                {
                    "t": "Contact Telemedicine about possible OMI, give aspirin, and repeat 12-leads with each set of vital signs",
                    "f": "Correct. OMI can need urgent intervention without classic STEMI criteria."
                },
                {
                    "t": "Reassure and leave: no STEMI",
                    "f": "Possible OMI and ischemic symptoms need treatment and transport."
                },
                {
                    "t": "GTN despite no pain",
                    "f": "GTN is for ischemic pain while symptoms persist."
                },
                {
                    "t": "Wait for symptoms to return before acting",
                    "f": "Act now: confirm OMI with Telemedicine."
                }
            ],
            "correct": 0,
            "explanation": "Look for subtle OMI signs (hyperacute T waves, reciprocal changes, ST depression in several leads), contact Telemedicine, and do serial 12-leads. EMTs should routinely use Telemedicine when the ECG is not a clear STEMI.",
            "kpi": "Aspirin for every ACS patient (where appropriate)."
        },
        {
            "id": "crit_3_1_4",
            "scenario": "A 68-year-old woman has epigastric discomfort, nausea and sweating. HR 115, BP 85/60, clear lungs. Her ECG shows ischemic changes.",
            "question": "Which is correct?",
            "options": [
                {
                    "t": "Aspirin; consider normal saline 250 ml, watching for pulmonary edema; no GTN while SBP is below 100",
                    "f": "Correct. GTN needs systolic BP ≥100 mmHg; hypotension (<90) is treated with a cautious fluid bolus."
                },
                {
                    "t": "GTN 0.4 mg for the pain",
                    "f": "Her systolic BP is below 100 mmHg."
                },
                {
                    "t": "A 1-litre fluid bolus",
                    "f": "CPG 3.1 uses 250 ml, repeated as required, watching for overload."
                },
                {
                    "t": "Treat as GI upset and leave",
                    "f": "Epigastric pain with a possible cardiac cause meets ACS inclusion."
                }
            ],
            "correct": 0,
            "explanation": "Epigastric discomfort can be ACS when a cardiac cause is possible. She is hypotensive: consider 250 ml normal saline, monitor for pulmonary edema, and call ALS back-up because she is hemodynamically unstable.",
            "kpi": "A 12-lead ECG for every patient with cardiac chest pain."
        },
        {
            "id": "crit_3_1_5",
            "scenario": "A 45-year-old man with an anterior STEMI is on the stretcher with pads applied. He suddenly becomes unresponsive and pulseless. The monitor shows VF.",
            "ecg": "vfFine",
            "question": "What now?",
            "options": [
                {
                    "t": "Shock immediately and follow the Adult Cardiac Arrest CPG",
                    "f": "Correct. This is why pads go on every STEMI patient."
                },
                {
                    "t": "Give GTN",
                    "f": "He is in cardiac arrest."
                },
                {
                    "t": "Take another 12-lead",
                    "f": "Defibrillate first."
                },
                {
                    "t": "Morphine for pain",
                    "f": "He is in cardiac arrest."
                }
            ],
            "correct": 0,
            "explanation": "STEMI patients are at high risk of cardiac arrest and arrhythmias; pads are applied so defibrillation (and pacing or cardioversion) can happen at once.",
            "kpi": "A 12-lead ECG for every patient with cardiac chest pain."
        }
    ]
};
