/* ========== CPG 3.4 – Acute Pulmonary Edema ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c3-4",
    "title": "Acute Pulmonary Edema",
    "shortTitle": "3.4 Acute Pulmonary Edema",
    "guide": {
        "cpg": "3.4",
        "group": "cardio",
        "groupLabel": "Cardiovascular",
        "title": "Acute Pulmonary Edema",
        "lead": "Sit the patient up with legs down, give oxygen and GTN if the blood pressure allows, and start CPAP early in moderate and severe cases. Furosemide only for clear fluid overload.",
        "source": {
            "label": "CPG 3.4",
            "pages": "88–91",
            "pdf": "../pdf_sections/3_4_Acute_Pulmonary_Edema.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Provisional diagnosis of pulmonary edema."
                ],
                "exclude": [
                    "Breathing difficulty from another cause (e.g. asthma, COPD)."
                ]
            },
            {
                "type": "list",
                "title": "Assessment",
                "icon": "stethoscope",
                "items": [
                    "<b>Signs:</b> breathlessness on exertion or lying down; wheeze and cough; pink sputum or hemoptysis; chest pain; cyanosis, pallor, anxiety; tachycardia; hypotension; crackles.",
                    "<b>Severity</b> (mild, moderate, severe): appearance, rate, work of breathing, words per breath, air movement, SpO<sub>2</sub>.",
                    "<b>Other causes:</b> pneumonia, ARDS.",
                    "<b>12-lead ECG</b> to include or exclude STEMI or arrhythmia; cardiac chest pain or STEMI: also follow the Chest Pain CPG."
                ]
            },
            {
                "type": "steps",
                "title": "Management",
                "icon": "wind",
                "steps": [
                    {
                        "title": "Consider ALS back-up",
                        "text": "Request it for severe cases, or moderate cases where CPAP is not available."
                    },
                    {
                        "title": "Position",
                        "text": "Seated, head and torso as upright as possible, feet and legs dependent."
                    },
                    {
                        "title": "Oxygen",
                        "level": "EMR",
                        "text": "Keep SpO<sub>2</sub> ≥92% (flowchart: &gt;94%)."
                    },
                    {
                        "title": "GTN if systolic BP &gt;100",
                        "level": "EMT",
                        "doses": [
                            {
                                "drug": "GTN",
                                "dose": "0.4 mg SL",
                                "note": "Every 5 minutes; maximum 3 doses",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "CPAP",
                        "level": "EMT-A",
                        "text": "Start when SpO<sub>2</sub> &lt;90% on room air or the patient is in obvious respiratory distress. Flowsafe CPAP. Begin at 5 cmH<sub>2</sub>O and increase as tolerated. Coach and reassure; mask fit is key. With a good seal, do not remove the mask for GTN or other oral medicines. Consider Tele-EMS to confirm settings."
                    },
                    {
                        "title": "BiPAP if inspiratory support is needed",
                        "level": "P",
                        "text": "Initial IPAP 10 cmH<sub>2</sub>O, EPAP 5–10 cmH<sub>2</sub>O."
                    },
                    {
                        "title": "Furosemide only for signs of fluid overload",
                        "level": "P",
                        "text": "Routine furosemide is not recommended.",
                        "doses": [
                            {
                                "drug": "Furosemide",
                                "dose": "40 mg IV/IO",
                                "note": "",
                                "level": "P"
                            }
                        ]
                    },
                    {
                        "title": "Salbutamol",
                        "level": "EMT",
                        "text": "With CPAP: nebulize through the CPAP mask. Without CPAP: one dose; repeat after 10–15 minutes only if breathing improved. No improvement: no further doses.",
                        "doses": [
                            {
                                "drug": "Salbutamol",
                                "dose": "5 mg neb",
                                "note": "",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Reassess",
                        "text": "Frequently, as per Universal Care."
                    }
                ]
            },
            {
                "type": "list",
                "title": "Safety",
                "icon": "triangle-alert",
                "tone": "alert",
                "items": [
                    "Check for fluid overload before furosemide.",
                    "Request ALS back-up for moderate, severe or deteriorating patients.",
                    "CPAP contraindications (Airway Management CPG): unconscious or altered mental status, apnea, facial trauma, untreated pneumothorax, hypotension."
                ]
            },
            {
                "type": "list",
                "title": "Key performance indicator",
                "icon": "chart-no-axes-column",
                "items": [
                    "CPAP or BiPAP for every severe pulmonary edema patient."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs and drug sheets",
                "icon": "link",
                "items": [
                    {
                        "label": "2.1 Airway Management (CPAP)",
                        "href": "c2.html?section=c2s1"
                    },
                    {
                        "label": "3.1 Chest Pain / ACS",
                        "href": "c3-1.html"
                    },
                    {
                        "label": "M18 GTN",
                        "href": "m18.html"
                    },
                    {
                        "label": "M15 Furosemide",
                        "href": "m15.html"
                    },
                    {
                        "label": "M36 Salbutamol",
                        "href": "m36.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "Which sign is listed for pulmonary edema in CPG 3.4?",
            "options": [
                "Pink sputum or hemoptysis",
                "Green sputum",
                "Stridor",
                "Unilateral leg swelling"
            ],
            "correct": 0,
            "explanation": "Signs include pink sputum/hemoptysis, orthopnea, wheeze, cough, crackles, tachycardia."
        },
        {
            "q": "How should the patient be positioned?",
            "options": [
                "Supine",
                "Seated, head and torso up, legs dependent",
                "Recovery position",
                "Legs raised"
            ],
            "correct": 1,
            "explanation": "Seated position with head and torso elevated, feet and legs dependent."
        },
        {
            "q": "What SpO2 does the CPG 3.4 text target?",
            "options": [
                "≥92%",
                "88–92%",
                "100%",
                "≥98%"
            ],
            "correct": 0,
            "explanation": "Text: maintain SpO2 ≥92% (the flowchart says >94%)."
        },
        {
            "q": "When is GTN given in pulmonary edema?",
            "options": [
                "Systolic BP >100",
                "Any blood pressure",
                "Systolic BP <90",
                "Only with chest pain"
            ],
            "correct": 0,
            "explanation": "GTN is indicated for systolic BP >100."
        },
        {
            "q": "What is the GTN regimen in CPG 3.4?",
            "options": [
                "0.4 mg SL every 5 minutes, maximum 3 doses",
                "0.4 mg every 3–5 minutes, maximum 1.2 mg IV",
                "0.8 mg once",
                "5 mg neb"
            ],
            "correct": 0,
            "explanation": "0.4 mg SL every 5 minutes, maximum 3 doses."
        },
        {
            "q": "When should CPAP be started?",
            "options": [
                "Only when unconscious",
                "SpO2 <90% on room air, or obvious respiratory distress",
                "Only after furosemide",
                "Never prehospital"
            ],
            "correct": 1,
            "explanation": "CPAP when SpO2 <90% on room air or the patient is in obvious respiratory distress."
        },
        {
            "q": "What CPAP pressure should you start with?",
            "options": [
                "5 cmH2O, increasing as tolerated",
                "15 cmH2O",
                "20 cmH2O",
                "0 cmH2O"
            ],
            "correct": 0,
            "explanation": "Consider starting at 5 cmH2O and increase as the patient becomes comfortable."
        },
        {
            "q": "The patient on CPAP needs another GTN dose and the mask seal is good. What do you do?",
            "options": [
                "Remove the mask for the tablet",
                "Do not remove the mask for GTN or other oral medicines",
                "Increase CPAP to 20",
                "Stop CPAP"
            ],
            "correct": 1,
            "explanation": "With a good seal, do not remove the CPAP mask to give GTN or other oral medications."
        },
        {
            "q": "Which CPAP device does the 3.4 flowchart name?",
            "options": [
                "BVM with PEEP valve",
                "Flowsafe CPAP",
                "Ventilator only",
                "Nasal cannula"
            ],
            "correct": 1,
            "explanation": "Flowsafe CPAP (EMT-A); CPAP/BiPAP on the ventilator is P."
        },
        {
            "q": "What are the initial BiPAP settings?",
            "options": [
                "IPAP 10, EPAP 5–10 cmH2O",
                "IPAP 5, EPAP 5",
                "IPAP 20, EPAP 10",
                "IPAP 15, EPAP 0"
            ],
            "correct": 0,
            "explanation": "IPAP 10 cmH2O; EPAP 5–10 cmH2O."
        },
        {
            "q": "When is furosemide given?",
            "options": [
                "Routinely",
                "Only with signs of fluid overload",
                "Only if SBP <90",
                "Never"
            ],
            "correct": 1,
            "explanation": "Only for signs of fluid overload; routine furosemide is not recommended."
        },
        {
            "q": "What is the furosemide dose?",
            "options": [
                "20 mg IV",
                "40 mg IV/IO",
                "80 mg IV",
                "100 mg PO"
            ],
            "correct": 1,
            "explanation": "Furosemide 40 mg IV/IO."
        },
        {
            "q": "What is the lowest level for furosemide in CPG 3.4?",
            "options": [
                "EMT",
                "EMT-A",
                "P",
                "AP"
            ],
            "correct": 2,
            "explanation": "Furosemide is P on the flowchart."
        },
        {
            "q": "With CPAP available, how is salbutamol given?",
            "options": [
                "Not at all",
                "Nebulized through the CPAP mask",
                "IV",
                "Mask off, then neb"
            ],
            "correct": 1,
            "explanation": "Administer CPAP and nebulize salbutamol via the CPAP mask."
        },
        {
            "q": "Without CPAP, when may a second salbutamol dose be given?",
            "options": [
                "Always after 5 minutes",
                "After 10–15 minutes, only if breathing improved",
                "Never",
                "Every 5 minutes until better"
            ],
            "correct": 1,
            "explanation": "Repeat after 10–15 minutes only if improvement was noted; no improvement means no further doses."
        },
        {
            "q": "What is the salbutamol dose?",
            "options": [
                "2.5 mg",
                "5 mg neb",
                "10 mg",
                "0.5 mg"
            ],
            "correct": 1,
            "explanation": "5 mg nebulized."
        },
        {
            "q": "When should ALS back-up be requested?",
            "options": [
                "Mild cases only",
                "Severe cases, or moderate cases where CPAP is not available",
                "Never",
                "Only on scene arrival"
            ],
            "correct": 1,
            "explanation": "Request ALS for severe cases, or moderate where CPAP isn't available (and for deteriorating patients)."
        },
        {
            "q": "When should Tele-EMS be consulted?",
            "options": [
                "To confirm CPAP settings, or if the diagnosis is unclear",
                "Never",
                "Before oxygen",
                "For every patient"
            ],
            "correct": 0,
            "explanation": "Consult Tele-EMS for CPAP settings or an unclear diagnosis."
        },
        {
            "q": "Which alternative causes does CPG 3.4 name?",
            "options": [
                "Asthma and COPD",
                "Pneumonia and ARDS",
                "Anxiety",
                "Anemia"
            ],
            "correct": 1,
            "explanation": "Consider other causes such as pneumonia and ARDS."
        },
        {
            "q": "The 12-lead shows a STEMI. What applies?",
            "options": [
                "Ignore it until edema resolves",
                "Also treat as per the Chest Pain / ACS CPG",
                "Give furosemide first",
                "Stop GTN"
            ],
            "correct": 1,
            "explanation": "Cardiac chest pain or STEMI: treat as per the Cardiac Chest Pain CPG."
        },
        {
            "q": "Which is used to judge severity?",
            "options": [
                "Age",
                "Words per breath, work of breathing, rate, air movement, SpO2",
                "Temperature only",
                "Blood glucose"
            ],
            "correct": 1,
            "explanation": "Assess appearance, rate, work of breathing, words per breath, air movement and SpO2."
        },
        {
            "q": "What is the lowest level for CPAP (Flowsafe)?",
            "options": [
                "EMR",
                "EMT",
                "EMT-A",
                "P"
            ],
            "correct": 2,
            "explanation": "Flowsafe CPAP is EMT-A."
        },
        {
            "q": "What is the lowest level for GTN in CPG 3.4?",
            "options": [
                "EMR",
                "EMT",
                "P",
                "AP"
            ],
            "correct": 1,
            "explanation": "GTN is EMT."
        },
        {
            "q": "The patient finds the CPAP mask claustrophobic. What helps?",
            "options": [
                "Remove it",
                "Reassurance and coaching, starting at a lower pressure",
                "Sedate immediately",
                "Higher pressure"
            ],
            "correct": 1,
            "explanation": "Provide reassurance and coaching; start at a lower pressure and increase as tolerated."
        },
        {
            "q": "What is key to effective CPAP pressure delivery?",
            "options": [
                "A good mask fit",
                "A high oxygen flow only",
                "The patient lying flat",
                "Furosemide first"
            ],
            "correct": 0,
            "explanation": "Attaining a proper mask fit is key to effective pressure delivery."
        },
        {
            "q": "What must you check before giving furosemide?",
            "options": [
                "Glucose",
                "Signs of fluid overload",
                "Temperature",
                "Pupils"
            ],
            "correct": 1,
            "explanation": "Monitor for signs of fluid overload before administering furosemide."
        },
        {
            "q": "Pulmonary edema with BP 82/50. Is CPAP appropriate?",
            "options": [
                "Yes",
                "No – hypotension is a CPAP contraindication (Airway Management CPG)",
                "Yes, at high pressure",
                "Only BiPAP"
            ],
            "correct": 1,
            "explanation": "Hypotension is an absolute contraindication to CPAP."
        },
        {
            "q": "Which CPG 3.4 goal concerns CPAP?",
            "options": [
                "CPAP for every patient",
                "Provide CPAP to moderate and severe cases",
                "Avoid CPAP",
                "CPAP only after furosemide"
            ],
            "correct": 1,
            "explanation": "Goal: provide CPAP to moderate and severe cases."
        },
        {
            "q": "Can a single salbutamol dose be given without CPAP?",
            "options": [
                "Yes, one dose may be given",
                "No",
                "Only IV",
                "Only to children"
            ],
            "correct": 0,
            "explanation": "If no CPAP is available, a single dose of nebulized salbutamol may be given."
        },
        {
            "q": "What is the KPI of CPG 3.4?",
            "options": [
                "Furosemide for all",
                "CPAP/BiPAP for all severe pulmonary edema",
                "GTN for all",
                "Transport in 10 minutes"
            ],
            "correct": 1,
            "explanation": "KPI: apply CPAP/BiPAP for all severe pulmonary edema patients."
        }
    ],
    "flashcards": [
        {
            "category": "Signs",
            "question": "Signs of pulmonary edema?",
            "answer": "Breathless on exertion or lying flat; wheeze, cough; pink sputum; chest pain; cyanosis, pallor, anxiety; tachycardia; hypotension; crackles."
        },
        {
            "category": "Severity",
            "question": "Severity assessment?",
            "answer": "Appearance, rate, work of breathing, words per breath, air movement, SpO2: mild, moderate or severe."
        },
        {
            "category": "Differentials",
            "question": "Alternative causes?",
            "answer": "Pneumonia, ARDS."
        },
        {
            "category": "Position",
            "question": "Positioning?",
            "answer": "Seated, head and torso up, legs dependent."
        },
        {
            "category": "Oxygen",
            "question": "Oxygen target?",
            "answer": "SpO2 ≥92% (flowchart >94%)."
        },
        {
            "category": "GTN",
            "question": "GTN in pulmonary edema?",
            "answer": "If SBP >100: 0.4 mg SL every 5 minutes, maximum 3 doses (EMT)."
        },
        {
            "category": "CPAP",
            "question": "When to start CPAP?",
            "answer": "SpO2 <90% on room air, or obvious respiratory distress."
        },
        {
            "category": "CPAP",
            "question": "CPAP technique?",
            "answer": "Flowsafe CPAP (EMT-A); start at 5 cmH2O and increase as tolerated; good mask fit; coach and reassure."
        },
        {
            "category": "CPAP",
            "question": "Oral medicines on CPAP?",
            "answer": "With a good seal, do not remove the mask for GTN or other oral medicines."
        },
        {
            "category": "BiPAP",
            "question": "BiPAP settings?",
            "answer": "IPAP 10 cmH2O; EPAP 5–10 cmH2O (P), when inspiratory support is needed."
        },
        {
            "category": "Furosemide",
            "question": "Furosemide?",
            "answer": "Only with signs of fluid overload: 40 mg IV/IO (P). Not routine."
        },
        {
            "category": "Salbutamol",
            "question": "Salbutamol with CPAP?",
            "answer": "Nebulize 5 mg through the CPAP mask."
        },
        {
            "category": "Salbutamol",
            "question": "Salbutamol without CPAP?",
            "answer": "Single 5 mg neb; repeat after 10–15 minutes only if improved; no improvement, no more."
        },
        {
            "category": "ALS",
            "question": "When ALS back-up?",
            "answer": "Severe; moderate without CPAP; deteriorating patients."
        },
        {
            "category": "Tele-EMS",
            "question": "When Tele-EMS?",
            "answer": "To confirm CPAP settings, or if the diagnosis is unclear."
        },
        {
            "category": "ECG",
            "question": "Why a 12-lead?",
            "answer": "To include or exclude STEMI or arrhythmia; STEMI or cardiac pain → Chest Pain CPG."
        },
        {
            "category": "Safety",
            "question": "Before furosemide?",
            "answer": "Look for signs of fluid overload."
        },
        {
            "category": "Safety",
            "question": "CPAP contraindications?",
            "answer": "Unconscious/altered mental status, apnea, facial trauma, untreated pneumothorax, hypotension (Airway Management CPG)."
        },
        {
            "category": "Scope",
            "question": "Levels in CPG 3.4?",
            "answer": "Oxygen EMR; GTN and salbutamol EMT; Flowsafe CPAP EMT-A; CPAP/BiPAP and furosemide P."
        },
        {
            "category": "Goals",
            "question": "CPG 3.4 goals?",
            "answer": "Stabilize; improve oxygenation and ventilation; CPAP for moderate and severe; address underlying causes."
        },
        {
            "category": "Exclusions",
            "question": "Who is excluded?",
            "answer": "Breathing difficulty from another cause, e.g. asthma or COPD."
        },
        {
            "category": "CPAP",
            "question": "Patient claustrophobic on CPAP?",
            "answer": "Reassure, coach, start at a lower pressure and increase gradually."
        },
        {
            "category": "GTN",
            "question": "Systolic BP 95 and pulmonary edema: GTN?",
            "answer": "No: GTN needs systolic BP >100."
        },
        {
            "category": "Furosemide",
            "question": "Is routine furosemide recommended?",
            "answer": "No."
        },
        {
            "category": "Salbutamol",
            "question": "No response to the first salbutamol dose?",
            "answer": "Give no further doses."
        },
        {
            "category": "Reassessment",
            "question": "Reassessment?",
            "answer": "Frequently, as per Universal Care."
        },
        {
            "category": "Triage",
            "question": "Triage?",
            "answer": "As per the Patient Triage Categories CPG."
        },
        {
            "category": "Documentation",
            "question": "Treatment documentation?",
            "answer": "Oxygen, GTN doses, CPAP/BiPAP use, furosemide or salbutamol given."
        },
        {
            "category": "Documentation",
            "question": "Other documentation?",
            "answer": "ALS back-up request and telemedicine call."
        },
        {
            "category": "KPI",
            "question": "CPG 3.4 KPI?",
            "answer": "CPAP/BiPAP for all severe pulmonary edema patients."
        }
    ],
    "critical": [
        {
            "id": "crit_3_4_1",
            "scenario": "A 70-year-old man has sudden severe breathlessness, pink frothy sputum and crackles to the apices. Sitting upright, anxious, sweaty. SpO2 84% on air, BP 170/100, alert. EMT-A crew.",
            "question": "What is your treatment plan?",
            "options": [
                {
                    "t": "Sit him up with legs down, oxygen, GTN 0.4 mg SL, and Flowsafe CPAP from 5 cmH2O; request ALS back-up",
                    "f": "Correct. Severe pulmonary edema with good blood pressure."
                },
                {
                    "t": "Lay him flat and give furosemide",
                    "f": "Position him upright; furosemide is a P drug and only for clear fluid overload."
                },
                {
                    "t": "Oxygen only and transport",
                    "f": "SpO2 <90% and obvious distress: start CPAP."
                },
                {
                    "t": "Salbutamol repeated every 5 minutes",
                    "f": "Salbutamol is not the main treatment; repeats only if it helped."
                }
            ],
            "correct": 0,
            "explanation": "Position, oxygen, GTN if SBP >100 (every 5 minutes, maximum 3), and CPAP when SpO2 <90% or in obvious distress. Severe cases need ALS back-up.",
            "kpi": "CPAP or BiPAP for every severe pulmonary edema patient."
        },
        {
            "id": "crit_3_4_2",
            "scenario": "Your patient is on CPAP with a good seal and has had one GTN dose. Systolic BP is still 160 and he is still distressed.",
            "question": "How do you give the next GTN dose?",
            "options": [
                {
                    "t": "Do not remove the CPAP mask for oral medicines; keep CPAP running and reassess",
                    "f": "Correct. With a good seal, the CPAP mask should not be removed for GTN or other oral medications."
                },
                {
                    "t": "Take the mask off to give GTN",
                    "f": "CPG 3.4 says not to remove a well-sealed CPAP mask for oral medicines."
                },
                {
                    "t": "Give GTN IV",
                    "f": "GTN in CPG 3.4 is sublingual."
                },
                {
                    "t": "Stop CPAP",
                    "f": "He still needs CPAP."
                }
            ],
            "correct": 0,
            "explanation": "CPAP is the key treatment in severe cases. Keep a good seal, coach the patient, titrate pressure as tolerated, and consult Tele-EMS on settings if needed.",
            "kpi": "CPAP or BiPAP for every severe pulmonary edema patient."
        },
        {
            "id": "crit_3_4_3",
            "scenario": "A 60-year-old with crackles and wheeze, SpO2 89%, speaks in short sentences. No CPAP is available on this unit.",
            "question": "How do you use salbutamol?",
            "options": [
                {
                    "t": "One 5 mg neb; repeat after 10–15 minutes only if breathing improved; request ALS back-up",
                    "f": "Correct. Without CPAP: a single dose, repeated only if it helped, and ALS for moderate cases without CPAP."
                },
                {
                    "t": "Back-to-back salbutamol every 5 minutes",
                    "f": "Repeat only after 10–15 minutes and only if there was improvement."
                },
                {
                    "t": "No oxygen, salbutamol only",
                    "f": "Give oxygen to SpO2 ≥92%."
                },
                {
                    "t": "Furosemide 40 mg as an EMT",
                    "f": "Furosemide is P level and only for fluid overload."
                }
            ],
            "correct": 0,
            "explanation": "If no CPAP is available, a single dose of nebulized salbutamol may be given and repeated after 10–15 minutes only if respiratory function improves. Request ALS back-up for moderate cases where CPAP is not available.",
            "kpi": "CPAP or BiPAP for every severe pulmonary edema patient."
        },
        {
            "id": "crit_3_4_4",
            "scenario": "A patient with pulmonary edema has BP 84/50, cold clammy skin and confusion.",
            "question": "What is correct?",
            "options": [
                {
                    "t": "No GTN and no CPAP (hypotension, altered mental status); oxygen, upright position, urgent ALS back-up",
                    "f": "Correct. GTN needs SBP >100; hypotension and altered mental status are CPAP contraindications."
                },
                {
                    "t": "GTN 0.4 mg",
                    "f": "Systolic BP must be above 100."
                },
                {
                    "t": "CPAP at 10 cmH2O",
                    "f": "Hypotension and altered mental status contraindicate CPAP."
                },
                {
                    "t": "Furosemide routinely",
                    "f": "Routine furosemide is not recommended."
                }
            ],
            "correct": 0,
            "explanation": "Check contraindications before each treatment. Hypotension excludes GTN (needs SBP >100) and CPAP; request ALS back-up for severe or deteriorating patients and do a 12-lead for STEMI.",
            "kpi": "CPAP or BiPAP for every severe pulmonary edema patient."
        },
        {
            "id": "crit_3_4_5",
            "scenario": "A breathless 75-year-old has crackles, swollen legs and raised neck veins. A paramedic is on scene, CPAP is running and he has had 3 GTN doses.",
            "question": "Is furosemide appropriate?",
            "options": [
                {
                    "t": "Yes: signs of fluid overload are present; furosemide 40 mg IV/IO (P)",
                    "f": "Correct. Furosemide is for patients with signs of fluid overload."
                },
                {
                    "t": "No, it is never given",
                    "f": "It is given when there are signs of fluid overload."
                },
                {
                    "t": "Yes, 80 mg",
                    "f": "The CPG 3.4 dose is 40 mg IV/IO."
                },
                {
                    "t": "Yes, a fourth GTN instead",
                    "f": "GTN is limited to 3 doses."
                }
            ],
            "correct": 0,
            "explanation": "Furosemide only for signs of fluid overload, 40 mg IV/IO; routine administration is not recommended. GTN maximum is 3 doses.",
            "kpi": "CPAP or BiPAP for every severe pulmonary edema patient."
        }
    ]
};
