/* ========== CPG 5.2 – Seizures ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c5-2",
    "title": "Seizures",
    "shortTitle": "5.2 Seizures",
    "guide": {
        "cpg": "5.2",
        "group": "neuro",
        "groupLabel": "Neurology",
        "title": "Seizures",
        "lead": "Protect the patient and the airway, give oxygen, check glucose before any benzodiazepine, and request ALS for every active seizure. A seizure over 5 minutes, or seizures without recovery, is status epilepticus: benzodiazepines are a KPI.",
        "source": {
            "label": "CPG 5.2",
            "pages": "143–146",
            "pdf": "../pdf_sections/5_2_Seizures.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Active generalized tonic-clonic or focal seizures.",
                    "Status epilepticus: seizure &gt;5 minutes, or recurrent seizures without recovery.",
                    "Post-ictal state: confusion, lethargy or weakness after a seizure.",
                    "Known epilepsy, recent seizures or precipitants (missed medication, fever, trauma)."
                ],
                "exclude": [
                    "No history or description of seizure activity."
                ]
            },
            {
                "type": "gate",
                "title": "Is the patient seizing now?",
                "icon": "circle-help",
                "question": "Active seizure?",
                "no": "Airway, breathing, circulation; recovery position if unresponsive; OPA/NPA if deeply unconscious; check glucose; IV access; look for the cause.",
                "yes": "Consider ALS back-up and follow the active seizure steps below."
            },
            {
                "type": "steps",
                "title": "Active seizure",
                "icon": "list",
                "steps": [
                    {
                        "title": "ALS back-up",
                        "text": "Request routinely for any active seizure; meet ALS en route if it is not immediately available. Early benzodiazepines improve outcomes."
                    },
                    {
                        "title": "Protect",
                        "text": "Remove hazards, pad the surroundings; do not restrain movements."
                    },
                    {
                        "title": "Airway",
                        "level": "EMR",
                        "text": "Suction secretions or vomit; consider an OPA or NPA."
                    },
                    {
                        "title": "Oxygen",
                        "level": "EMR",
                        "text": "Titrate to SpO<sub>2</sub> ≥94% during and after the seizure."
                    },
                    {
                        "title": "Glucose",
                        "text": "Check before giving a benzodiazepine. &lt;70 mg/dL: correct it (Hypoglycemia CPG)."
                    },
                    {
                        "title": "IV access",
                        "level": "EMT",
                        "text": "For active seizures, status epilepticus or expected medication; IO if IV fails."
                    },
                    {
                        "title": "Benzodiazepine",
                        "level": "EP",
                        "text": "See the dose table. If the seizure does not stop, repeat the dose once."
                    },
                    {
                        "title": "Continued seizure or deeply unconscious",
                        "text": "OPA/NPA, or an advanced airway."
                    }
                ]
            },
            {
                "type": "table",
                "title": "Benzodiazepines",
                "icon": "syringe",
                "columns": [
                    "",
                    "Adult",
                    "Pediatric"
                ],
                "rows": [
                    {
                        "group": "Midazolam"
                    },
                    [
                        "IM",
                        "10 mg, single dose, do not repeat",
                        "0.2 mg/kg (maximum 10 mg); repeat once after 10–20 minutes"
                    ],
                    [
                        "IV",
                        "5 mg; repeat once after 5–10 minutes (maximum 10 mg)",
                        "0.1 mg/kg (maximum 5 mg); repeat once after 10–20 minutes"
                    ],
                    {
                        "group": "Diazepam"
                    },
                    [
                        "IV",
                        "5 mg; repeat once after 5 minutes (maximum 10 mg)",
                        "0.1 mg/kg (maximum 5 mg); repeat once after 5 minutes"
                    ],
                    [
                        "PR",
                        "–",
                        "0.5 mg/kg (maximum 5 mg); repeat once after 5 minutes"
                    ]
                ],
                "stack": true,
                "notes": [
                    "Use IM midazolam, not IM diazepam: diazepam is slow by the IM route. If it must be given IM: adults 10 mg, children 0.2 mg/kg (maximum 10 mg).",
                    "The flowchart gives a pediatric IM midazolam maximum of 5 mg; the text gives 10 mg.",
                    "Benzodiazepines are marked EP on the flowchart; the text expects them from the ALS back-up."
                ]
            },
            {
                "type": "steps",
                "title": "After the seizure",
                "icon": "heart-pulse",
                "steps": [
                    {
                        "title": "Airway first",
                        "text": "Recovery position; oxygen to SpO<sub>2</sub> &gt;94%; OPA/NPA if needed. Advanced airways are rarely needed unless compromise persists."
                    },
                    {
                        "title": "Look for injury",
                        "text": "Tongue biting, head trauma, fractures; post-ictal confusion or focal deficits (Todd's paralysis)."
                    },
                    {
                        "title": "Monitor continuously",
                        "text": "Mandatory for reduced consciousness or after a benzodiazepine."
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Causes and red flags",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "Non-epileptic causes",
                        "items": [
                            "Meningitis, head injury, hypoglycemia, eclampsia, pyrexia, poisons, alcohol, drug withdrawal.",
                            "Precipitants: missed medication, sleep deprivation, fever, alcohol withdrawal, head trauma.",
                            "Children &lt;5 years: consider febrile seizures; look for fever and infection."
                        ]
                    },
                    {
                        "title": "Red flags",
                        "items": [
                            "Status epilepticus.",
                            "Respiratory depression or SpO<sub>2</sub> &lt;90%.",
                            "Head trauma or injury during the seizure.",
                            "First seizure, or no known epilepsy.",
                            "Seizures in pregnancy."
                        ]
                    },
                    {
                        "title": "Triage",
                        "items": [
                            "Red: ongoing seizures and status epilepticus."
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
                                "sub": "Weight-based diazepam",
                                "href": "../pages/drug-calculator.html?drug=Diazepam",
                                "icon": "pill"
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
                    "Seizure type, start and stop times, duration, frequency; witness account.",
                    "Medical alert tag, injuries, epilepsy history, home anti-epileptic drugs and last dose.",
                    "GCS or AVPU, post-ictal findings, pupils, SpO<sub>2</sub>, glucose.",
                    "Each benzodiazepine: drug, route, dose, time; airway interventions; oxygen."
                ]
            },
            {
                "type": "list",
                "title": "Key performance indicators",
                "icon": "chart-no-axes-column",
                "items": [
                    "Benzodiazepines given to every patient in status epilepticus.",
                    "ALS back-up requested for every active seizure.",
                    "RBS for every seizure patient."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "6.8 Hypoglycemia",
                        "href": "c6-8.html"
                    },
                    {
                        "label": "10.4 Eclampsia / Pre-eclampsia",
                        "href": "c10-4.html"
                    },
                    {
                        "label": "6.7 Fever and Sepsis",
                        "href": "c6-7.html"
                    },
                    {
                        "label": "5.1 Stroke",
                        "href": "c5-1.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "What defines status epilepticus?",
            "options": [
                "A seizure over 5 minutes, or recurrent seizures without recovery",
                "Any seizure over 1 minute",
                "Two seizures in a year",
                "Any seizure with incontinence"
            ],
            "correct": 0,
            "explanation": "Benzodiazepines for every patient in status epilepticus is a KPI."
        },
        {
            "q": "Which drug class terminates an active seizure in this CPG?",
            "options": [
                "Benzodiazepines",
                "Opioids",
                "Antihistamines",
                "Beta-blockers"
            ],
            "correct": 0,
            "explanation": "Midazolam or diazepam."
        },
        {
            "q": "What is the adult IM midazolam dose?",
            "options": [
                "10 mg, single dose, do not repeat",
                "5 mg, repeat every 5 minutes",
                "2 mg",
                "20 mg"
            ],
            "correct": 0,
            "explanation": "IM midazolam is a single 10 mg dose."
        },
        {
            "q": "What is the adult IV midazolam dose?",
            "options": [
                "5 mg, repeat once after 5–10 minutes (maximum 10 mg)",
                "10 mg, repeat twice",
                "1 mg every minute",
                "15 mg once"
            ],
            "correct": 0,
            "explanation": "Maximum 10 mg IV."
        },
        {
            "q": "What is the pediatric IM midazolam dose?",
            "options": [
                "0.2 mg/kg",
                "0.02 mg/kg",
                "1 mg/kg",
                "2 mg/kg"
            ],
            "correct": 0,
            "explanation": "Maximum 10 mg in the text (5 mg on the flowchart); repeat once after 10–20 minutes."
        },
        {
            "q": "What is the pediatric IV diazepam dose?",
            "options": [
                "0.1 mg/kg (maximum 5 mg)",
                "0.5 mg/kg",
                "1 mg/kg",
                "10 mg"
            ],
            "correct": 0,
            "explanation": "Repeat once after 5 minutes."
        },
        {
            "q": "When must glucose be checked?",
            "options": [
                "Before giving a benzodiazepine",
                "Only after transport",
                "Only in diabetics",
                "Never during seizures"
            ],
            "correct": 0,
            "explanation": "Hypoglycemia can cause or mimic seizures; RBS in every seizure patient is a KPI."
        },
        {
            "q": "Which benzodiazepine is preferred by the IM route?",
            "options": [
                "Midazolam",
                "Diazepam",
                "Both equally",
                "Neither"
            ],
            "correct": 0,
            "explanation": "IM diazepam acts slowly."
        },
        {
            "q": "A seizing patient has glucose 45 mg/dL. What do you do first?",
            "options": [
                "Correct the hypoglycemia (Hypoglycemia CPG)",
                "Benzodiazepine only",
                "Nothing until hospital",
                "Oxygen only"
            ],
            "correct": 0,
            "explanation": "Glucose <70 mg/dL: correct it."
        },
        {
            "q": "What is the adult maximum IV midazolam?",
            "options": [
                "10 mg",
                "5 mg",
                "20 mg",
                "No maximum"
            ],
            "correct": 0,
            "explanation": "5 mg, repeated once."
        },
        {
            "q": "How do you position the patient after the seizure?",
            "options": [
                "Recovery position",
                "Supine flat",
                "Sitting upright",
                "Prone"
            ],
            "correct": 0,
            "explanation": "Protects the airway."
        },
        {
            "q": "Which is a post-ictal finding?",
            "options": [
                "Confusion or focal weakness",
                "Rising GCS to 15 instantly",
                "Hypertension only",
                "Rash"
            ],
            "correct": 0,
            "explanation": "Confusion, lethargy or focal deficits (Todd's paralysis)."
        },
        {
            "q": "Which is a non-epileptic cause of seizures?",
            "options": [
                "Eclampsia",
                "Asthma",
                "Epistaxis",
                "Gout"
            ],
            "correct": 0,
            "explanation": "Also meningitis, head injury, hypoglycemia, pyrexia, poisons, alcohol, drug withdrawal."
        },
        {
            "q": "When is ALS back-up requested?",
            "options": [
                "For every active seizure",
                "Only for status epilepticus",
                "Only for first seizures",
                "Never"
            ],
            "correct": 0,
            "explanation": "A KPI; meet ALS en route if needed."
        },
        {
            "q": "What is the pediatric PR diazepam dose?",
            "options": [
                "0.5 mg/kg (maximum 5 mg)",
                "0.1 mg/kg",
                "5 mg/kg",
                "10 mg"
            ],
            "correct": 0,
            "explanation": "Repeat once after 5 minutes."
        },
        {
            "q": "A 3-year-old with fever had a seizure and is now alert. What should you consider?",
            "options": [
                "A febrile seizure: look for fever and infection",
                "No assessment needed",
                "Status epilepticus",
                "Stroke"
            ],
            "correct": 0,
            "explanation": "Consider febrile seizures in children under 5."
        },
        {
            "q": "What is Todd's paralysis?",
            "options": [
                "Post-ictal focal weakness",
                "A drug reaction",
                "A type of epilepsy",
                "Spinal injury"
            ],
            "correct": 0,
            "explanation": "It can mimic stroke."
        },
        {
            "q": "Which benzodiazepine route is listed for children only?",
            "options": [
                "Rectal diazepam",
                "IV midazolam",
                "IM midazolam",
                "IV diazepam"
            ],
            "correct": 0,
            "explanation": "PR diazepam 0.5 mg/kg."
        },
        {
            "q": "What is the pediatric maximum IV diazepam dose?",
            "options": [
                "5 mg",
                "2 mg",
                "10 mg",
                "20 mg"
            ],
            "correct": 0,
            "explanation": "0.1 mg/kg, maximum 5 mg."
        },
        {
            "q": "What should you do during the seizure?",
            "options": [
                "Remove hazards and pad surroundings; do not restrain",
                "Hold the limbs still",
                "Put something in the mouth",
                "Pour water on the face"
            ],
            "correct": 0,
            "explanation": "Protect the patient."
        },
        {
            "q": "What is the main danger of a generalized seizure?",
            "options": [
                "Hypoxia and injury",
                "Hyperglycemia",
                "Hypothermia",
                "Bradycardia only"
            ],
            "correct": 0,
            "explanation": "The aim is to protect the patient from injury and hypoxia."
        },
        {
            "q": "When is adult IV midazolam repeated?",
            "options": [
                "Once, after 5–10 minutes",
                "Every 2 minutes",
                "After 30 minutes",
                "Never"
            ],
            "correct": 0,
            "explanation": "Maximum 10 mg."
        },
        {
            "q": "Why is IM diazepam not recommended?",
            "options": [
                "Slow onset by the IM route",
                "It is too strong",
                "It causes hyperglycemia",
                "It is not a benzodiazepine"
            ],
            "correct": 0,
            "explanation": "Use IM midazolam."
        },
        {
            "q": "Which seizure patient is Red priority?",
            "options": [
                "Ongoing seizures or status epilepticus",
                "Fully recovered known epileptic",
                "Post-ictal with GCS 15",
                "None"
            ],
            "correct": 0,
            "explanation": "Triage as per the Patient Triage Categories CPG."
        },
        {
            "q": "A pregnant woman seizes. How is this classed?",
            "options": [
                "A red flag: consider eclampsia",
                "A routine epileptic seizure",
                "A stroke mimic only",
                "Not significant"
            ],
            "correct": 0,
            "explanation": "Seizures in pregnancy are a red flag; eclampsia is a non-epileptic cause."
        },
        {
            "q": "What oxygen target applies?",
            "options": [
                "SpO₂ ≥94% during and after the seizure",
                "100% at all times",
                "No oxygen",
                "SpO₂ 85%"
            ],
            "correct": 0,
            "explanation": "Titrate oxygen to prevent hypoxia."
        },
        {
            "q": "What is the adult maximum IV diazepam?",
            "options": [
                "10 mg",
                "5 mg",
                "20 mg",
                "30 mg"
            ],
            "correct": 0,
            "explanation": "5 mg, repeated once after 5 minutes."
        },
        {
            "q": "A seizure after stopping heavy drinking. Which cause is listed?",
            "options": [
                "Alcohol (withdrawal)",
                "Asthma",
                "Epistaxis",
                "Anaphylaxis only"
            ],
            "correct": 0,
            "explanation": "Alcohol and drug withdrawal are listed causes."
        },
        {
            "q": "A seizing adult has no IV. Which benzodiazepine route?",
            "options": [
                "IM midazolam 10 mg",
                "IM diazepam first",
                "Oral diazepam",
                "Wait for IV"
            ],
            "correct": 0,
            "explanation": "IM midazolam is the IM option of choice."
        },
        {
            "q": "How is the patient monitored after a benzodiazepine?",
            "options": [
                "Continuously",
                "Once at hospital",
                "Every 30 minutes",
                "Not needed"
            ],
            "correct": 0,
            "explanation": "Continuous monitoring is mandatory."
        }
    ],
    "flashcards": [
        {
            "question": "Status epilepticus",
            "answer": "Seizure >5 minutes, or recurrent seizures without recovery."
        },
        {
            "question": "Causes to consider",
            "answer": "Meningitis, head injury, hypoglycemia, eclampsia, pyrexia, poisons, alcohol, drug withdrawal."
        },
        {
            "question": "First actions in an active seizure",
            "answer": "ALS back-up, protect from injury, airway (EMR), oxygen to ≥94% (EMR), glucose, IV (EMT)."
        },
        {
            "question": "Glucose",
            "answer": "Check before any benzodiazepine; <70 mg/dL: Hypoglycemia CPG."
        },
        {
            "question": "Adult IM midazolam",
            "answer": "10 mg, single dose, do not repeat."
        },
        {
            "question": "Adult IV midazolam",
            "answer": "5 mg; repeat once after 5–10 minutes (maximum 10 mg)."
        },
        {
            "question": "Pediatric IM midazolam",
            "answer": "0.2 mg/kg (maximum 10 mg in the text; 5 mg on the flowchart); repeat once after 10–20 minutes."
        },
        {
            "question": "Pediatric IV midazolam",
            "answer": "0.1 mg/kg (maximum 5 mg); repeat once after 10–20 minutes."
        },
        {
            "question": "Adult IV diazepam",
            "answer": "5 mg; repeat once after 5 minutes (maximum 10 mg)."
        },
        {
            "question": "Pediatric IV diazepam",
            "answer": "0.1 mg/kg (maximum 5 mg); repeat once after 5 minutes."
        },
        {
            "question": "Pediatric PR diazepam",
            "answer": "0.5 mg/kg (maximum 5 mg); repeat once after 5 minutes."
        },
        {
            "question": "IM diazepam",
            "answer": "Not recommended (slow). If required: adults 10 mg, children 0.2 mg/kg (maximum 10 mg)."
        },
        {
            "question": "Seizure not stopping",
            "answer": "Repeat the benzodiazepine dose once; OPA/NPA or advanced airway if it continues."
        },
        {
            "question": "Protect the patient",
            "answer": "Remove hazards, pad surroundings, do not restrain."
        },
        {
            "question": "After the seizure",
            "answer": "Recovery position, oxygen to >94%, OPA/NPA if needed; continuous monitoring."
        },
        {
            "question": "Advanced airway after a seizure",
            "answer": "Rarely needed, unless airway compromise persists."
        },
        {
            "question": "Post-ictal state",
            "answer": "Confusion, lethargy, focal deficits (Todd's paralysis)."
        },
        {
            "question": "Injuries to look for",
            "answer": "Tongue biting, head trauma, fractures."
        },
        {
            "question": "Febrile seizures",
            "answer": "Consider in children <5 years; look for fever and infection."
        },
        {
            "question": "Red flags",
            "answer": "Status epilepticus; SpO₂ <90% or respiratory depression; head trauma; first seizure; pregnancy."
        },
        {
            "question": "ALS back-up",
            "answer": "Routinely for every active seizure; meet en route if not immediately available."
        },
        {
            "question": "Benzodiazepine level on the flowchart",
            "answer": "EP."
        },
        {
            "question": "Triage",
            "answer": "Red: ongoing seizures or status epilepticus."
        },
        {
            "question": "Precipitants",
            "answer": "Missed medication, sleep deprivation, fever, alcohol withdrawal, head trauma."
        },
        {
            "question": "Medical alert",
            "answer": "Check bracelets or documents for epilepsy."
        },
        {
            "question": "Monitoring",
            "answer": "Continuous, especially with reduced consciousness or after benzodiazepines."
        },
        {
            "question": "Documentation of drugs",
            "answer": "Type, route, dose and time of each benzodiazepine; home anti-epileptics and last dose."
        },
        {
            "question": "Exclusion",
            "answer": "No history or description of seizure activity."
        },
        {
            "question": "Hypoglycemia threshold",
            "answer": "<70 mg/dL."
        },
        {
            "question": "KPIs",
            "answer": "Benzodiazepines in status epilepticus; ALS for active seizures; RBS in all."
        }
    ],
    "critical": [
        {
            "id": "crit_5_2_1",
            "scenario": "A 30-year-old man has been in a generalized tonic-clonic seizure for 6 minutes. No IV access yet. Glucose is 110 mg/dL.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Treat as status epilepticus: protect, airway, oxygen, ALS back-up, and midazolam 10 mg IM (single dose)",
                    "f": "Correct."
                },
                {
                    "t": "Wait for the seizure to stop on its own",
                    "f": "Over 5 minutes: benzodiazepines are a KPI."
                },
                {
                    "t": "Diazepam IM",
                    "f": "Use IM midazolam."
                },
                {
                    "t": "Restrain his limbs",
                    "f": "Do not restrain."
                }
            ],
            "correct": 0,
            "explanation": "Status epilepticus needs a benzodiazepine. Without IV access, IM midazolam 10 mg is the adult option.",
            "kpi": "Benzodiazepines for every patient in status epilepticus."
        },
        {
            "id": "crit_5_2_2",
            "scenario": "A 5-year-old (about 20 kg) has been seizing for 7 minutes. There is no IV. Glucose is normal.",
            "question": "What do you give?",
            "options": [
                {
                    "t": "Midazolam 0.2 mg/kg IM, repeat once after 10–20 minutes if needed",
                    "f": "Correct."
                },
                {
                    "t": "Adult dose of 10 mg IM",
                    "f": "Use the weight-based dose."
                },
                {
                    "t": "Diazepam IM",
                    "f": "IM diazepam is slow."
                },
                {
                    "t": "Nothing until IV access",
                    "f": "IM or PR routes are available."
                }
            ],
            "correct": 0,
            "explanation": "Pediatric IM midazolam 0.2 mg/kg; alternatively diazepam PR 0.5 mg/kg (maximum 5 mg). Use the drug calculator.",
            "kpi": "Benzodiazepines for every patient in status epilepticus."
        },
        {
            "id": "crit_5_2_3",
            "scenario": "A 25-year-old woman with known epilepsy had a 2-minute seizure. She is post-ictal and confused. Glucose 45 mg/dL.",
            "question": "What is your management?",
            "options": [
                {
                    "t": "Correct the hypoglycemia (Hypoglycemia CPG), recovery position, oxygen, monitor",
                    "f": "Correct."
                },
                {
                    "t": "Benzodiazepine now",
                    "f": "She is no longer seizing; correct the glucose."
                },
                {
                    "t": "Ignore the glucose: she is epileptic",
                    "f": "Hypoglycemia can trigger seizures."
                },
                {
                    "t": "Sit her upright and leave",
                    "f": "Monitor and transport."
                }
            ],
            "correct": 0,
            "explanation": "Check glucose in every seizure patient; <70 mg/dL needs correcting.",
            "kpi": "RBS for every seizure patient."
        },
        {
            "id": "crit_5_2_4",
            "scenario": "A woman 32 weeks pregnant had a seizure. She is post-ictal; BP 160/110 mmHg.",
            "question": "What do you suspect and do?",
            "options": [
                {
                    "t": "Eclampsia: a red flag; airway, oxygen, ALS back-up and the Eclampsia CPG",
                    "f": "Correct."
                },
                {
                    "t": "A simple faint",
                    "f": "Seizures in pregnancy are a red flag."
                },
                {
                    "t": "Lie her flat on her back",
                    "f": "Recovery position protects the airway."
                },
                {
                    "t": "No transport needed",
                    "f": "She needs urgent transport."
                }
            ],
            "correct": 0,
            "explanation": "Eclampsia is a listed non-epileptic cause; follow the Eclampsia / Pre-eclampsia CPG.",
            "kpi": "ALS back-up requested for every active seizure."
        },
        {
            "id": "crit_5_2_5",
            "scenario": "An adult in status epilepticus received midazolam 5 mg IV. Ten minutes later he is still seizing.",
            "question": "What next?",
            "options": [
                {
                    "t": "Repeat midazolam 5 mg IV once (maximum 10 mg); support the airway",
                    "f": "Correct."
                },
                {
                    "t": "Give 10 mg IV now",
                    "f": "Repeat the 5 mg dose once."
                },
                {
                    "t": "Repeat every 2 minutes until it stops",
                    "f": "Only one repeat."
                },
                {
                    "t": "Switch to IM diazepam",
                    "f": "Not recommended."
                }
            ],
            "correct": 0,
            "explanation": "If the seizure does not stop, repeat the benzodiazepine once; consider OPA/NPA or an advanced airway.",
            "kpi": "Benzodiazepines for every patient in status epilepticus."
        }
    ]
};
