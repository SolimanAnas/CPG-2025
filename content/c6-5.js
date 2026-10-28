/* ========== CPG 6.5 – Altered Mental Status ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c6-5",
    "title": "Altered Mental Status",
    "shortTitle": "6.5 Altered Mental Status",
    "guide": {
        "cpg": "6.5",
        "group": "medical",
        "groupLabel": "Medical",
        "title": "Altered Mental Status",
        "lead": "Treat what kills first: airway, breathing, shock. Then work through the reversible causes in order (glucose, opioids, trauma, seizure, stroke) and hand over to the matching CPG. Every patient gets an RBS and a recorded AVPU or GCS, and every patient goes to hospital.",
        "source": {
            "label": "CPG 6.5",
            "pages": "168–171",
            "pdf": "../pdf_sections/6_5_Altered_Mental_Status.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Confusion, disorientation, lethargy, agitation or unresponsiveness; from mild confusion to coma.",
                    "Suspected hypoglycemia, hypoxia, stroke, overdose, infection or trauma."
                ],
                "exclude": [
                    "None noted."
                ]
            },
            {
                "type": "steps",
                "title": "Work through the causes",
                "icon": "list",
                "steps": [
                    {
                        "title": "Airway or respiratory compromise?",
                        "text": "Airway and Breathing CPG."
                    },
                    {
                        "title": "Signs of shock?",
                        "text": "SBP &lt;90 mmHg (adults) or age-specific, tachycardia, capillary refill &gt;2 seconds: Non-Traumatic Shock CPG; IV or IO access."
                    },
                    {
                        "title": "Glucose low?",
                        "text": "RBS &lt;70 mg/dL (flowchart: &lt;72 mg/dL): Hypoglycemia CPG. Severe hyperglycemia &gt;400 mg/dL: Hyperglycemia CPG."
                    },
                    {
                        "title": "Opioid overdose?",
                        "text": "Pinpoint pupils, respiratory depression: Opioid Overdose CPG."
                    },
                    {
                        "title": "Obvious trauma?",
                        "text": "Trauma management CPGs."
                    },
                    {
                        "title": "Recent or current seizure?",
                        "text": "Seizures CPG."
                    },
                    {
                        "title": "Signs of stroke?",
                        "text": "Focal deficit, sudden onset: Stroke CPG."
                    },
                    {
                        "title": "None of these",
                        "text": "Consider encephalopathy, dysrhythmia, hypoxia, hypercapnia, carbon monoxide poisoning, toxicology; consider Tele-EMS."
                    }
                ]
            },
            {
                "type": "table",
                "title": "AEIOU TIPS",
                "icon": "search",
                "columns": [
                    "",
                    "Causes"
                ],
                "rows": [
                    [
                        "A",
                        "Alcohol, abuse, atypical migraine"
                    ],
                    [
                        "E",
                        "Epilepsy, electrolytes"
                    ],
                    [
                        "I",
                        "Insulin (hypoglycemia)"
                    ],
                    [
                        "O",
                        "Oxygen, overdose"
                    ],
                    [
                        "U",
                        "Uremia (kidney failure)"
                    ],
                    [
                        "T",
                        "Trauma, tumour"
                    ],
                    [
                        "I",
                        "Infection"
                    ],
                    [
                        "P",
                        "Psych, poisoning"
                    ],
                    [
                        "S",
                        "Seizure, subarachnoid hemorrhage, sepsis"
                    ]
                ],
                "notes": [
                    "The PDF prints the mnemonic as \"AEIOD TIPS\"; the list spells AEIOU TIPS."
                ]
            },
            {
                "type": "groups",
                "title": "Assess",
                "icon": "stethoscope",
                "groups": [
                    {
                        "title": "Neurology",
                        "items": [
                            "AVPU or GCS; focal deficits (unequal pupils, weakness, speech); behavior change."
                        ]
                    },
                    {
                        "title": "History and scene",
                        "items": [
                            "SAMPLE: recent trauma, drugs, medication changes; diabetes, epilepsy, stroke, psychiatric history; insulin or sedatives.",
                            "Alert bracelets; pill bottles, paraphernalia; carbon monoxide or chemicals."
                        ]
                    },
                    {
                        "title": "Numbers",
                        "items": [
                            "Hypoglycemia &lt;70 mg/dL; hyperglycemia &gt;200 mg/dL.",
                            "Hypoxia: SpO<sub>2</sub> &lt;94%; red flag below 90%."
                        ]
                    },
                    {
                        "title": "Red priority",
                        "items": [
                            "GCS 9 or less, or a falling GCS.",
                            "Responds only to pain, or unresponsive."
                        ]
                    }
                ]
            },
            {
                "type": "list",
                "title": "Always",
                "icon": "ambulance",
                "items": [
                    "Consider ALS back-up; reassess AVPU or GCS frequently.",
                    "Transport every patient with altered mental status: it is hard to assess accurately on scene."
                ]
            },
            {
                "type": "tools",
                "title": "Practise with the app",
                "icon": "monitor",
                "groups": [
                    {
                        "title": "A dysrhythmia can cause AMS",
                        "items": [
                            {
                                "ecg": "chb",
                                "label": "Complete heart block",
                                "sub": "Bradycardia with poor perfusion"
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
                    "RBS performed and documented for every patient with altered mental status.",
                    "Initial AVPU or GCS documented."
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
                        "label": "8.2 Opioid Overdose",
                        "href": "c8-2.html"
                    },
                    {
                        "label": "5.2 Seizures",
                        "href": "c5-2.html"
                    },
                    {
                        "label": "5.1 Stroke",
                        "href": "c5-1.html"
                    },
                    {
                        "label": "6.11 Non-Traumatic Shock",
                        "href": "c6-11.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "What comes first in an altered patient?",
            "options": [
                "Primary survey: airway, breathing, shock",
                "SAMPLE history",
                "Glucose before anything",
                "Pupils"
            ],
            "correct": 0,
            "explanation": "Airway or respiratory compromise and shock come first on the flowchart."
        },
        {
            "q": "Which reversible cause is checked in every AMS patient?",
            "options": [
                "Blood glucose",
                "Cholesterol",
                "Hemoglobin",
                "Temperature only"
            ],
            "correct": 0,
            "explanation": "RBS in all AMS patients is a KPI."
        },
        {
            "q": "What SpO₂ defines hypoxia in the assessment?",
            "options": [
                "<94%",
                "<99%",
                "<80%",
                "<70%"
            ],
            "correct": 0,
            "explanation": "SpO₂ <90% is a red flag."
        },
        {
            "q": "Glucose 55 mg/dL. Where do you go?",
            "options": [
                "Hypoglycemia CPG",
                "Stroke CPG",
                "Seizures CPG",
                "Discharge"
            ],
            "correct": 0,
            "explanation": "RBS <70 mg/dL."
        },
        {
            "q": "Which is NOT in AEIOU TIPS?",
            "options": [
                "Hypertension",
                "Alcohol",
                "Insulin",
                "Trauma"
            ],
            "correct": 0,
            "explanation": "The letters cover alcohol, epilepsy, insulin, oxygen/overdose, uremia, trauma, infection, psych/poisoning, seizure/SAH/sepsis."
        },
        {
            "q": "Unresponsive with pinpoint pupils and RR 6. Most likely?",
            "options": [
                "Opioid overdose",
                "Hypoglycemia",
                "Stroke",
                "Seizure"
            ],
            "correct": 0,
            "explanation": "Go to the Opioid Overdose CPG."
        },
        {
            "q": "What does U stand for?",
            "options": [
                "Uremia (kidney failure)",
                "Ulcer",
                "Urine infection",
                "Unconsciousness"
            ],
            "correct": 0,
            "explanation": "Uremia."
        },
        {
            "q": "GCS 9. Triage?",
            "options": [
                "Red",
                "Green",
                "Yellow",
                "Black"
            ],
            "correct": 0,
            "explanation": "GCS 9 or less is Red."
        },
        {
            "q": "Which is a red flag?",
            "options": [
                "SpO₂ below 90%",
                "GCS 15",
                "Normal glucose",
                "Mild anxiety"
            ],
            "correct": 0,
            "explanation": "Also unresponsiveness, hypoglycemia, severe hyperglycemia, stroke and overdose signs."
        },
        {
            "q": "Which glucose level sends you to the Hyperglycemia CPG as a red flag?",
            "options": [
                ">400 mg/dL",
                ">100 mg/dL",
                ">150 mg/dL",
                "Any"
            ],
            "correct": 0,
            "explanation": "Hyperglycemia is >200 mg/dL; severe >400 mg/dL."
        },
        {
            "q": "Which patients with AMS are transported?",
            "options": [
                "All of them",
                "Only GCS below 8",
                "Only diabetics",
                "Only those who agree"
            ],
            "correct": 0,
            "explanation": "AMS is difficult to assess accurately."
        },
        {
            "q": "When is IV access indicated?",
            "options": [
                "Hypotension, suspected hypoglycemia, expected drugs",
                "Never",
                "Every patient over 80",
                "Only seizures"
            ],
            "correct": 0,
            "explanation": "IO if IV fails."
        },
        {
            "q": "A combative AMS patient. Which CPG covers safe management?",
            "options": [
                "Abnormal Behavior",
                "Epistaxis",
                "Burns",
                "Childbirth"
            ],
            "correct": 0,
            "explanation": "Police, de-escalation and score-based sedation."
        },
        {
            "q": "Which elderly finding fits the I in AEIOU TIPS?",
            "options": [
                "Infection",
                "Insomnia",
                "Itching",
                "Iron"
            ],
            "correct": 0,
            "explanation": "Infection, e.g. sepsis, is a cause."
        },
        {
            "q": "After all flowchart questions are negative, what do you consider?",
            "options": [
                "Encephalopathy, dysrhythmia, hypoxia, hypercapnia, CO poisoning, toxicology",
                "Nothing",
                "Discharge",
                "Psychiatric only"
            ],
            "correct": 0,
            "explanation": "And consider Tele-EMS."
        },
        {
            "q": "HR 40, BP 80/50 and confusion. Which cause and CPG fit?",
            "options": [
                "Dysrhythmia with shock: shock management",
                "Opioid overdose",
                "Hyperglycemia",
                "Alcohol"
            ],
            "correct": 0,
            "explanation": "Shock goes first on the flowchart; a dysrhythmia is a listed cause."
        },
        {
            "q": "Which history matters?",
            "options": [
                "Diabetes, epilepsy, stroke, psychiatric disorders, insulin, sedatives",
                "Shoe size",
                "Holiday plans",
                "None"
            ],
            "correct": 0,
            "explanation": "Through SAMPLE."
        },
        {
            "q": "Fever and confusion. Which letter applies?",
            "options": [
                "S: sepsis (and I: infection)",
                "U: uremia",
                "A: alcohol",
                "E: electrolytes"
            ],
            "correct": 0,
            "explanation": "Infection and sepsis are causes."
        },
        {
            "q": "Which is a Red-priority finding?",
            "options": [
                "Responds only to pain",
                "Alert and oriented",
                "GCS 15",
                "Mild confusion"
            ],
            "correct": 0,
            "explanation": "Unresponsive or responds only to pain."
        },
        {
            "q": "What is checked on the wrist?",
            "options": [
                "Medical alert bracelets",
                "A watch",
                "Tattoos",
                "Rings"
            ],
            "correct": 0,
            "explanation": "They may show diabetes or epilepsy."
        },
        {
            "q": "A diabetic improves after glucose, then becomes confused again. What do you do?",
            "options": [
                "Recheck glucose and treat per the Hypoglycemia CPG",
                "Leave",
                "Stop monitoring",
                "Stroke alert immediately"
            ],
            "correct": 0,
            "explanation": "Reassess frequently."
        },
        {
            "q": "What scene clues are sought?",
            "options": [
                "Pill bottles, paraphernalia, carbon monoxide or chemicals",
                "Furniture style",
                "Wall colour",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "Environmental and toxicological clues."
        },
        {
            "q": "RR 40 and SpO₂ 88%. Which step comes first?",
            "options": [
                "Airway and breathing (Airway CPG)",
                "Glucose",
                "12-lead",
                "History"
            ],
            "correct": 0,
            "explanation": "Respiratory compromise first."
        },
        {
            "q": "Which drug class does O stand for in part?",
            "options": [
                "Overdose",
                "Oral contraceptives",
                "Opium only",
                "Oxytocin"
            ],
            "correct": 0,
            "explanation": "Oxygen and overdose."
        },
        {
            "q": "What does T stand for?",
            "options": [
                "Trauma, tumour",
                "Temperature",
                "Thyroid",
                "Tachycardia"
            ],
            "correct": 0,
            "explanation": "Trauma and tumour."
        },
        {
            "q": "How often is the GCS reassessed?",
            "options": [
                "Frequently",
                "Once",
                "Only at hospital",
                "Never"
            ],
            "correct": 0,
            "explanation": "To detect deterioration or improvement."
        },
        {
            "q": "Which documentation is specific?",
            "options": [
                "Glucose given: route, dose and time; response",
                "Only the address",
                "Only the age",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "Also GCS, pupils, vital signs, RBS."
        },
        {
            "q": "Focal weakness and sudden onset. Where do you go?",
            "options": [
                "Stroke CPG",
                "Seizures CPG",
                "Burns CPG",
                "Hypoglycemia CPG only"
            ],
            "correct": 0,
            "explanation": "After excluding hypoglycemia."
        },
        {
            "q": "A known epileptic is drowsy after a witnessed fit. Where?",
            "options": [
                "Seizures CPG",
                "Stroke CPG",
                "Epistaxis CPG",
                "Discharge"
            ],
            "correct": 0,
            "explanation": "Recent or current seizure activity."
        },
        {
            "q": "What are the KPIs?",
            "options": [
                "RBS and initial AVPU/GCS documented",
                "Naloxone in all",
                "Transport in 10 minutes",
                "Oxygen in all"
            ],
            "correct": 0,
            "explanation": "Two KPIs."
        }
    ],
    "flashcards": [
        {
            "question": "Altered mental status",
            "answer": "Any change from mild confusion to coma: disorientation, lethargy, agitation, unresponsiveness."
        },
        {
            "question": "AVPU",
            "answer": "Alert, Voice, Pain, Unresponsive."
        },
        {
            "question": "AEIOU TIPS",
            "answer": "Alcohol/abuse/atypical migraine; Epilepsy/electrolytes; Insulin; Oxygen/overdose; Uremia; Trauma/tumour; Infection; Psych/poisoning; Seizure/SAH/sepsis."
        },
        {
            "question": "Flowchart order",
            "answer": "Airway → shock → glucose → opioids → trauma → seizure → stroke → other causes."
        },
        {
            "question": "Hypoglycemia threshold",
            "answer": "<70 mg/dL in the text; <72 mg/dL on the flowchart."
        },
        {
            "question": "Hyperglycemia",
            "answer": ">200 mg/dL; red flag >400 mg/dL (Hyperglycemia CPG)."
        },
        {
            "question": "Hypoxia",
            "answer": "SpO₂ <94%; red flag <90%."
        },
        {
            "question": "Opioid clues",
            "answer": "Pinpoint pupils, respiratory depression: Opioid Overdose CPG."
        },
        {
            "question": "Red priority",
            "answer": "GCS ≤9 or falling; responds only to pain or unresponsive."
        },
        {
            "question": "Shock signs",
            "answer": "SBP <90 (adult), tachycardia, capillary refill >2 seconds."
        },
        {
            "question": "Other causes",
            "answer": "Encephalopathy, dysrhythmia, hypoxia, hypercapnia, carbon monoxide, toxicology."
        },
        {
            "question": "Tele-EMS",
            "answer": "Consider when no cause is found."
        },
        {
            "question": "Transport",
            "answer": "All AMS patients."
        },
        {
            "question": "IV access",
            "answer": "Hypotension, suspected hypoglycemia, expected drugs; IO if needed."
        },
        {
            "question": "History",
            "answer": "SAMPLE: trauma, drugs, medication changes, diabetes, epilepsy, stroke, psychiatric history."
        },
        {
            "question": "Scene clues",
            "answer": "Pill bottles, paraphernalia, CO, chemicals."
        },
        {
            "question": "Neurological assessment",
            "answer": "AVPU/GCS, pupils, motor weakness, speech, behavior."
        },
        {
            "question": "Reassessment",
            "answer": "AVPU or GCS frequently."
        },
        {
            "question": "KPIs",
            "answer": "RBS documented; initial AVPU/GCS documented."
        },
        {
            "question": "Documentation",
            "answer": "Progression, suspected cause, clues, GCS, pupils, vitals, RBS, glucose given, response."
        }
    ],
    "critical": [
        {
            "id": "crit_6_5_1",
            "scenario": "A 45-year-old insulin-dependent diabetic is found unresponsive; glucose 35 mg/dL. After treatment he is alert and oriented.",
            "question": "What next?",
            "options": [
                {
                    "t": "Transport to hospital with reassessment",
                    "f": "Correct. All AMS patients are transported; see the Hypoglycemia CPG for its refusal rules."
                },
                {
                    "t": "Leave him at home",
                    "f": "Transport is the rule in AMS."
                },
                {
                    "t": "Stop monitoring",
                    "f": "Reassess frequently."
                },
                {
                    "t": "Give more glucose routinely",
                    "f": "Treat according to the recheck."
                }
            ],
            "correct": 0,
            "explanation": "RBS and GCS documented; Hypoglycemia CPG for treatment.",
            "kpi": "RBS documented for every AMS patient."
        },
        {
            "id": "crit_6_5_2",
            "scenario": "A 22-year-old is found in a park unresponsive with pinpoint pupils and RR 6.",
            "question": "What first?",
            "options": [
                {
                    "t": "Support the airway and ventilation, then the Opioid Overdose CPG",
                    "f": "Correct."
                },
                {
                    "t": "Stroke alert",
                    "f": "Pinpoint pupils and respiratory depression suggest opioids."
                },
                {
                    "t": "Glucose before breathing",
                    "f": "Airway and breathing first."
                },
                {
                    "t": "Wait for her to wake",
                    "f": "RR 6 needs ventilation."
                }
            ],
            "correct": 0,
            "explanation": "Airway or respiratory compromise first; then the reversible causes.",
            "kpi": "Initial AVPU or GCS documented."
        },
        {
            "id": "crit_6_5_3",
            "scenario": "An 80-year-old from a care home is newly confused; glucose 120 mg/dL, no focal deficits, SpO₂ 96%, temperature 38.6°C.",
            "question": "What fits best?",
            "options": [
                {
                    "t": "Infection or sepsis (I, S): assess for a source and transport",
                    "f": "Correct."
                },
                {
                    "t": "Normal ageing: leave",
                    "f": "Acute confusion needs transport."
                },
                {
                    "t": "Stroke alert",
                    "f": "No focal deficit."
                },
                {
                    "t": "Uremia only",
                    "f": "Fever points to infection."
                }
            ],
            "correct": 0,
            "explanation": "Work through AEIOU TIPS; see the Fever and Sepsis CPG.",
            "kpi": "RBS documented for every AMS patient."
        },
        {
            "id": "crit_6_5_4",
            "scenario": "A confused 70-year-old has the rhythm below; BP 80/50.",
            "ecg": "chb",
            "question": "Which path do you take?",
            "options": [
                {
                    "t": "Shock from a dysrhythmia: treat as per the shock and bradycardia CPGs",
                    "f": "Correct. Shock is assessed early on the flowchart."
                },
                {
                    "t": "Psychiatric cause",
                    "f": "There is a cardiac cause."
                },
                {
                    "t": "Stroke alert",
                    "f": "Treat the shock and rhythm."
                },
                {
                    "t": "Leave if glucose is normal",
                    "f": "All AMS patients are transported."
                }
            ],
            "correct": 0,
            "explanation": "Dysrhythmia is a listed cause of AMS; signs of shock go to the shock CPG.",
            "kpi": "Initial AVPU or GCS documented."
        },
        {
            "id": "crit_6_5_5",
            "scenario": "An AMS patient becomes combative and dangerous; de-escalation fails.",
            "question": "How do you proceed?",
            "options": [
                {
                    "t": "Police for safety, then the Abnormal Behavior CPG (score-based sedation, monitoring)",
                    "f": "Correct."
                },
                {
                    "t": "Physically restrain him yourselves",
                    "f": "Restraint is by police."
                },
                {
                    "t": "Leave the scene permanently",
                    "f": "Ensure safety, then treat."
                },
                {
                    "t": "Prone restraint",
                    "f": "Never prone."
                }
            ],
            "correct": 0,
            "explanation": "Look for reversible causes (e.g. hypoglycemia) once compliant.",
            "kpi": "RBS documented for every AMS patient."
        }
    ]
};
