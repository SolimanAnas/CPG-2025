/* ========== CPG 8.1 – General Toxicology Management ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c8-1",
    "title": "General Toxicology Management",
    "shortTitle": "8.1 General Toxicology",
    "guide": {
        "cpg": "8.1",
        "group": "environmental",
        "groupLabel": "Toxicology",
        "title": "General Toxicology Management",
        "lead": "Scene safety first, then ABC. Read the patient (GCS, pupils, skin, temperature, ECG) to recognise the toxidrome, check glucose, and go to the specific CPG when one fits. Many overdoses are mixed. Every symptomatic patient goes to hospital, with an early alert for cardiotoxic drugs and children.",
        "source": {
            "label": "CPG 8.1",
            "pages": "245–249",
            "pdf": "../pdf_sections/8_1_General_Toxicology_Management.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Suspected or confirmed ingestion, inhalation, injection or skin exposure to a toxin (medications, natural or manufactured substances), intentional or not.",
                    "Symptoms of toxic exposure: altered mental status, seizures, bradycardia, respiratory depression."
                ],
                "exclude": [
                    "Isolated opioid overdose: Opioid Overdose CPG.",
                    "Isolated alcohol intoxication: Suspected Alcohol Intoxication CPG.",
                    "Hazardous-material decontamination: Civil Defense team."
                ]
            },
            {
                "type": "groups",
                "title": "Assess",
                "icon": "stethoscope",
                "groups": [
                    {
                        "title": "Scene and impression",
                        "items": [
                            "Fumes, spills, paraphernalia, several patients affected.",
                            "Agitation, respiratory depression, altered mental status, seizures."
                        ]
                    },
                    {
                        "title": "Airway and breathing",
                        "items": [
                            "Patent and protected? Suction, aspiration risk.",
                            "Snoring or slow breathing: opioids or sedatives. Fast breathing: metabolic acidosis (salicylates, methanol)."
                        ]
                    },
                    {
                        "title": "Circulation",
                        "items": [
                            "Bradycardia: beta-blocker or CCB. Tachycardia: anticholinergic or sympathomimetic.",
                            "Arrhythmias, wide QRS, prolonged QT."
                        ]
                    },
                    {
                        "title": "Neurology",
                        "items": [
                            "GCS &lt;13: treat as high-risk.",
                            "Pinpoint pupils: opioids, organophosphates. Dilated: stimulants, withdrawal. Unequal: stroke or herniation.",
                            "Seizures or twitching: TCA, isoniazid, withdrawal. Hallucinations or bizarre behavior: anticholinergic or hallucinogen."
                        ]
                    },
                    {
                        "title": "Skin",
                        "items": [
                            "Track marks; rashes or blisters; sweating (cholinergic, sympathomimetic) vs dry skin (anticholinergic).",
                            "Hyperthermia: sympathomimetic or serotonin syndrome.",
                            "Remove contaminated clothing if a skin toxin is suspected."
                        ]
                    }
                ]
            },
            {
                "type": "table",
                "title": "Toxidromes",
                "icon": "search",
                "columns": [
                    "Toxidrome",
                    "Common signs",
                    "Examples"
                ],
                "rows": [
                    [
                        "Opioid",
                        "CNS depression, miosis, low RR, low HR",
                        "Heroin, morphine, fentanyl"
                    ],
                    [
                        "Anticholinergic",
                        "Dry skin, hyperthermia, delirium, tachycardia, dilated pupils",
                        "Antihistamines, TCAs, atropine"
                    ],
                    [
                        "Sympathomimetic",
                        "Agitation, tachycardia, hypertension, sweating, dilated pupils",
                        "Cocaine, amphetamines, MDMA"
                    ],
                    [
                        "Cholinergic",
                        "SLUDGE: salivation, lacrimation, urination, diarrhea, GI upset, emesis",
                        "Organophosphates, nerve agents"
                    ],
                    [
                        "Sedative-hypnotic",
                        "CNS depression, normal pupils, hypotension, bradycardia",
                        "Benzodiazepines, barbiturates"
                    ]
                ],
                "stack": true
            },
            {
                "type": "steps",
                "title": "Management",
                "icon": "list",
                "steps": [
                    {
                        "title": "ALS back-up",
                        "text": "Routinely for GCS &lt;13 or falling, seizures, dysrhythmias, or cardiovascular instability."
                    },
                    {
                        "title": "Decontamination",
                        "text": "Remove contaminated clothing; irrigate skin or eyes with water. Formal decontamination is by Civil Defense."
                    },
                    {
                        "title": "Primary survey and oxygen",
                        "text": "High-flow oxygen for reduced consciousness, respiratory distress or suspected CO; target SpO<sub>2</sub> ≥94%."
                    },
                    {
                        "title": "Glucose",
                        "text": "Mandatory with altered mental status: hypoglycemia mimics or complicates overdose."
                    },
                    {
                        "title": "Specific CPG",
                        "text": "Opioid, calcium channel blocker, beta-blocker or organophosphate: go to that CPG. Otherwise manage per Universal Care."
                    },
                    {
                        "title": "IV access and fluid",
                        "text": "IV if hypotensive, vomiting or unconscious. Shock: 10–20 mL/kg 0.9% NaCl bolus."
                    },
                    {
                        "title": "ECG monitoring",
                        "text": "Bradycardia, wide QRS, arrhythmias."
                    },
                    {
                        "title": "Reassess",
                        "text": "Pupils, seizures or twitching, response to treatment, deterioration, and crew safety (especially after reversal agents)."
                    },
                    {
                        "title": "Transport",
                        "text": "Every symptomatic patient. Notify the hospital for cardiotoxic drugs or a child with a possible toxic ingestion."
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
                        "GCS &lt;9, RR &lt;10, seizures, bradycardia or hypotension, pediatric ingestion"
                    ],
                    [
                        "Yellow",
                        "Mild symptoms, GCS 9–13, isolated vomiting"
                    ],
                    [
                        "Green",
                        "Alert, asymptomatic, known non-toxic ingestion"
                    ]
                ]
            },
            {
                "type": "groups",
                "title": "Safety and pearls",
                "icon": "triangle-alert",
                "groups": [
                    {
                        "title": "Safety",
                        "items": [
                            "Gloves and PPE for unknown substances.",
                            "Do not induce vomiting or give anything by mouth unless directed.",
                            "Expect airway compromise even if stable now.",
                            "Non-judgemental: this is a medical emergency."
                        ]
                    },
                    {
                        "title": "Pearls",
                        "items": [
                            "Many overdoses are mixed.",
                            "ECG changes may mean sodium- or potassium-channel toxicity (TCA, lithium).",
                            "In children, small amounts can kill (calcium channel blockers, opioids, hydrocarbons): act early.",
                            "Consult Tele-EMS early in unclear or critical cases."
                        ]
                    }
                ]
            },
            {
                "type": "list",
                "title": "SAMPLE for toxicology",
                "icon": "notebook-pen",
                "items": [
                    "Symptoms: onset, seizures, vomiting, hallucinations.",
                    "Allergies; Medications (prescription, OTC, supplements, recreational).",
                    "Past history: psychiatric illness, substance use, diabetes, renal or liver failure.",
                    "Last intake: what, how much, when; alcohol? Events: self-harm, peer pressure, unknown ingestion, several patients."
                ]
            },
            {
                "type": "tools",
                "title": "Practise with the app",
                "icon": "monitor",
                "groups": [
                    {
                        "title": "ECG clues",
                        "items": [
                            {
                                "ecg": "longQt",
                                "label": "Prolonged QT",
                                "sub": "Potassium-channel toxicity"
                            },
                            {
                                "ecg": "sbrady",
                                "label": "Sinus bradycardia",
                                "sub": "Beta-blocker or CCB"
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
                    "Substance, route, amount and time of exposure investigated and documented.",
                    "ALS back-up for unstable patients or GCS &lt;13."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "8.2 Opioid Overdose",
                        "href": "c8-2.html"
                    },
                    {
                        "label": "8.3 Beta-Blocker Overdose",
                        "href": "c8-3.html"
                    },
                    {
                        "label": "8.4 Calcium Channel Blocker Overdose",
                        "href": "c8-4.html"
                    },
                    {
                        "label": "8.5 Organophosphate Poisoning",
                        "href": "c8-5.html"
                    },
                    {
                        "label": "6.5 Altered Mental Status",
                        "href": "c6-5.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "What comes first in suspected poisoning?",
            "options": [
                "Scene safety, then airway, breathing, circulation",
                "Charcoal",
                "Identify the pill",
                "Induce vomiting"
            ],
            "correct": 0,
            "explanation": "Manage life threats as they are identified."
        },
        {
            "q": "Pinpoint pupils, slow breathing, CNS depression. Which toxidrome?",
            "options": [
                "Opioid",
                "Anticholinergic",
                "Sympathomimetic",
                "Cholinergic"
            ],
            "correct": 0,
            "explanation": "Go to the Opioid Overdose CPG."
        },
        {
            "q": "What fluid does this CPG give for shock?",
            "options": [
                "10–20 mL/kg 0.9% NaCl bolus",
                "2000 mL fixed",
                "Dextrose",
                "None"
            ],
            "correct": 0,
            "explanation": "As per the CPG."
        },
        {
            "q": "Dry skin, dilated pupils, tachycardia, delirium. Which toxidrome?",
            "options": [
                "Anticholinergic",
                "Opioid",
                "Cholinergic",
                "Sedative-hypnotic"
            ],
            "correct": 0,
            "explanation": "E.g. antihistamines, TCAs, atropine."
        },
        {
            "q": "Seizures or twitching suggest…",
            "options": [
                "TCA, isoniazid or withdrawal",
                "Opioids",
                "Benzodiazepines",
                "Alcohol only"
            ],
            "correct": 0,
            "explanation": "Per the neurological assessment."
        },
        {
            "q": "What SpO₂ target?",
            "options": [
                "≥94%",
                "88–92%",
                "100% always",
                "None"
            ],
            "correct": 0,
            "explanation": "High flow for reduced consciousness, distress or CO."
        },
        {
            "q": "Agitated, HR 140, BP 160/90, sweating, dilated pupils. Which toxidrome?",
            "options": [
                "Sympathomimetic",
                "Anticholinergic",
                "Opioid",
                "Sedative-hypnotic"
            ],
            "correct": 0,
            "explanation": "Sweating distinguishes it from anticholinergic."
        },
        {
            "q": "When is ALS routinely requested?",
            "options": [
                "GCS <13 or falling, seizures, dysrhythmias, CV instability",
                "Every patient",
                "Never",
                "Only children"
            ],
            "correct": 0,
            "explanation": "Also a KPI."
        },
        {
            "q": "What GCS marks a high-risk patient?",
            "options": [
                "<13",
                "<15",
                "<5",
                "<3"
            ],
            "correct": 0,
            "explanation": "Treat as high-risk."
        },
        {
            "q": "SLUDGE describes which toxidrome?",
            "options": [
                "Cholinergic",
                "Anticholinergic",
                "Opioid",
                "Sympathomimetic"
            ],
            "correct": 0,
            "explanation": "Organophosphates, nerve agents."
        },
        {
            "q": "Is glucose checked?",
            "options": [
                "Yes: mandatory with altered mental status",
                "Only in diabetics",
                "Never",
                "Only at hospital"
            ],
            "correct": 0,
            "explanation": "Hypoglycemia mimics or complicates overdose."
        },
        {
            "q": "GCS 8 after an overdose. What is the priority?",
            "options": [
                "Protect the airway and request ALS",
                "Charcoal",
                "Oral fluids",
                "Leave"
            ],
            "correct": 0,
            "explanation": "Expect airway compromise."
        },
        {
            "q": "Should you induce vomiting?",
            "options": [
                "No",
                "Yes, always",
                "Only in children",
                "Only for pills"
            ],
            "correct": 0,
            "explanation": "Avoid triggering vomiting or giving anything orally unless directed."
        },
        {
            "q": "Which pediatric ingestion is Red priority?",
            "options": [
                "Any pediatric ingestion",
                "None",
                "Only above 5 tablets",
                "Only liquids"
            ],
            "correct": 0,
            "explanation": "Red: pediatric ingestion."
        },
        {
            "q": "Bradycardia and hypotension after an overdose suggest…",
            "options": [
                "Beta-blocker or CCB",
                "Cocaine",
                "Antihistamine",
                "Amphetamine"
            ],
            "correct": 0,
            "explanation": "Go to the relevant CPG."
        },
        {
            "q": "How is a chemical on the skin managed?",
            "options": [
                "Remove clothing and irrigate with water",
                "Neutralise with vinegar",
                "Cream",
                "Ignore"
            ],
            "correct": 0,
            "explanation": "Formal decontamination by Civil Defense."
        },
        {
            "q": "CNS depression, normal pupils, hypotension, bradycardia. Which toxidrome?",
            "options": [
                "Sedative-hypnotic",
                "Opioid",
                "Anticholinergic",
                "Sympathomimetic"
            ],
            "correct": 0,
            "explanation": "Benzodiazepines, barbiturates."
        },
        {
            "q": "What may a wide QRS or long QT indicate?",
            "options": [
                "Sodium- or potassium-channel toxicity (TCA, lithium)",
                "Opioids only",
                "Alcohol",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "Monitor the ECG."
        },
        {
            "q": "Fast breathing after an ingestion may suggest…",
            "options": [
                "Metabolic acidosis (salicylates, methanol)",
                "Opioids",
                "Benzodiazepines",
                "Nothing"
            ],
            "correct": 0,
            "explanation": "Breathing assessment."
        },
        {
            "q": "Hyperthermia in a poisoned patient suggests…",
            "options": [
                "Sympathomimetic or serotonin syndrome",
                "Opioids",
                "Sedatives",
                "Hypoglycemia"
            ],
            "correct": 0,
            "explanation": "Check temperature."
        },
        {
            "q": "Who must be transported?",
            "options": [
                "Every symptomatic patient",
                "Nobody",
                "Only unconscious",
                "Only children"
            ],
            "correct": 0,
            "explanation": "Notify early for cardiotoxic drugs or children."
        },
        {
            "q": "Which is excluded from this CPG?",
            "options": [
                "Isolated opioid overdose",
                "Mixed overdose",
                "Unknown pills",
                "Chemical skin exposure"
            ],
            "correct": 0,
            "explanation": "Opioid Overdose CPG."
        },
        {
            "q": "Which KPI applies?",
            "options": [
                "Document substance, route, amount and time",
                "Charcoal for all",
                "Naloxone for all",
                "Transport in 10 minutes"
            ],
            "correct": 0,
            "explanation": "And ALS for GCS <13 or instability."
        },
        {
            "q": "A toddler swallowed one amlodipine tablet and looks well. What do you do?",
            "options": [
                "Transport and notify: small amounts can kill",
                "Reassure and leave",
                "Induce vomiting",
                "Charcoal"
            ],
            "correct": 0,
            "explanation": "Pediatric ingestion is Red priority."
        },
        {
            "q": "When is IV access obtained?",
            "options": [
                "Hypotensive, vomiting or unconscious",
                "Never",
                "Every patient",
                "Only children"
            ],
            "correct": 0,
            "explanation": "As per the CPG."
        },
        {
            "q": "What is reassessed after a reversal agent?",
            "options": [
                "Scene and crew safety",
                "Nothing",
                "Only BP",
                "Only glucose"
            ],
            "correct": 0,
            "explanation": "Patients may wake agitated."
        },
        {
            "q": "How many substances should you assume?",
            "options": [
                "Consider mixed overdose",
                "Always only one",
                "None",
                "Exactly two"
            ],
            "correct": 0,
            "explanation": "Many overdoses are mixed."
        },
        {
            "q": "Which Yellow-priority feature is listed?",
            "options": [
                "GCS 9–13",
                "GCS <9",
                "Seizures",
                "RR <10"
            ],
            "correct": 0,
            "explanation": "Also mild symptoms, isolated vomiting."
        },
        {
            "q": "When should Tele-EMS be consulted?",
            "options": [
                "Early in unclear or critical cases",
                "Never",
                "Only after arrival",
                "Only for children"
            ],
            "correct": 0,
            "explanation": "Clinical insight."
        },
        {
            "q": "What attitude is required?",
            "options": [
                "Non-judgemental: a medical emergency",
                "Judgemental questioning",
                "Indifference",
                "Police first"
            ],
            "correct": 0,
            "explanation": "Safety consideration."
        }
    ],
    "flashcards": [
        {
            "question": "Opioid toxidrome",
            "answer": "CNS depression, miosis, low RR, low HR."
        },
        {
            "question": "Anticholinergic toxidrome",
            "answer": "Dry skin, hyperthermia, delirium, tachycardia, dilated pupils."
        },
        {
            "question": "Sympathomimetic toxidrome",
            "answer": "Agitation, tachycardia, hypertension, sweating, dilated pupils."
        },
        {
            "question": "Cholinergic toxidrome",
            "answer": "SLUDGE: salivation, lacrimation, urination, diarrhea, GI upset, emesis."
        },
        {
            "question": "Sedative-hypnotic toxidrome",
            "answer": "CNS depression, normal pupils, hypotension, bradycardia."
        },
        {
            "question": "Pupils",
            "answer": "Pinpoint: opioids, organophosphates. Dilated: stimulants, withdrawal. Unequal: stroke or herniation."
        },
        {
            "question": "Seizures/twitching",
            "answer": "TCA, isoniazid, withdrawal."
        },
        {
            "question": "High-risk GCS",
            "answer": "<13."
        },
        {
            "question": "Glucose",
            "answer": "Mandatory in altered mental status."
        },
        {
            "question": "Oxygen",
            "answer": "High flow for reduced consciousness, distress or CO; SpO₂ ≥94%."
        },
        {
            "question": "Fluid for shock",
            "answer": "10–20 mL/kg 0.9% NaCl."
        },
        {
            "question": "ECG",
            "answer": "Watch for bradycardia, wide QRS, arrhythmias, long QT."
        },
        {
            "question": "ALS triggers",
            "answer": "GCS <13 or falling, seizures, dysrhythmias, CV instability."
        },
        {
            "question": "Decontamination",
            "answer": "Remove clothing, irrigate; formal decon by Civil Defense."
        },
        {
            "question": "Specific CPGs",
            "answer": "Opioid, beta-blocker, CCB, organophosphate."
        },
        {
            "question": "Red priority",
            "answer": "GCS <9, RR <10, seizures, bradycardia/hypotension, pediatric ingestion."
        },
        {
            "question": "Transport",
            "answer": "All symptomatic patients; notify for cardiotoxic drugs and children."
        },
        {
            "question": "Don'ts",
            "answer": "No induced vomiting or oral intake unless directed."
        },
        {
            "question": "Children",
            "answer": "Small amounts can kill (CCBs, opioids, hydrocarbons): act early."
        },
        {
            "question": "KPIs",
            "answer": "Substance, route, amount, time documented; ALS for GCS <13 or instability."
        }
    ],
    "critical": [
        {
            "id": "crit_8_1_1",
            "scenario": "A 20-year-old took unknown pills: agitated, HR 140, BP 160/90, dilated pupils, sweating, 39°C.",
            "question": "What is the toxidrome and your approach?",
            "options": [
                {
                    "t": "Sympathomimetic: ABC, ECG, glucose, ALS, cooling as needed, transport",
                    "f": "Correct."
                },
                {
                    "t": "Opioid: naloxone",
                    "f": "Pupils are dilated, not pinpoint."
                },
                {
                    "t": "Cholinergic",
                    "f": "No SLUDGE features."
                },
                {
                    "t": "Leave: she is awake",
                    "f": "Symptomatic patients go to hospital."
                }
            ],
            "correct": 0,
            "explanation": "Sweating with dilated pupils and hypertension fits sympathomimetic.",
            "kpi": "Substance, route, amount and time documented."
        },
        {
            "id": "crit_8_1_2",
            "scenario": "A depressed 45-year-old is drowsy beside an empty amitriptyline box; HR 110, BP 100/70. The ECG shows a broad, abnormal pattern.",
            "ecg": "longQt",
            "question": "What do you do?",
            "options": [
                {
                    "t": "ABC, continuous ECG, glucose, ALS (dysrhythmia risk), IV access, early notification",
                    "f": "Correct. TCAs cause sodium- and potassium-channel toxicity."
                },
                {
                    "t": "Induce vomiting",
                    "f": "Never."
                },
                {
                    "t": "Oral fluids",
                    "f": "Nothing by mouth."
                },
                {
                    "t": "Observe at home",
                    "f": "Symptomatic and cardiotoxic."
                }
            ],
            "correct": 0,
            "explanation": "Notify the hospital for cardiotoxic ingestions.",
            "kpi": "ALS back-up for unstable patients or GCS <13."
        },
        {
            "id": "crit_8_1_3",
            "scenario": "A 2-year-old was found with an open bottle of amlodipine; one tablet is missing. The child is well.",
            "question": "What is appropriate?",
            "options": [
                {
                    "t": "Transport (Red: pediatric ingestion) and notify the hospital",
                    "f": "Correct."
                },
                {
                    "t": "Reassure and leave",
                    "f": "One tablet can be lethal in a toddler."
                },
                {
                    "t": "Induce vomiting",
                    "f": "Never."
                },
                {
                    "t": "Wait for symptoms",
                    "f": "Act early."
                }
            ],
            "correct": 0,
            "explanation": "Calcium channel blockers can be lethal in small amounts.",
            "kpi": "Substance, route, amount and time documented."
        },
        {
            "id": "crit_8_1_4",
            "scenario": "A man with hypertension took many metoprolol tablets: HR 40, BP 80/50, lethargic.",
            "ecg": "sbrady",
            "question": "What next?",
            "options": [
                {
                    "t": "ABC, ALS, IV, 10–20 mL/kg NaCl, and the Beta-Blocker Overdose CPG",
                    "f": "Correct."
                },
                {
                    "t": "Treat as opioid",
                    "f": "Bradycardia and hypotension point to the beta-blocker."
                },
                {
                    "t": "Oral fluids",
                    "f": "Not with reduced consciousness."
                },
                {
                    "t": "Wait",
                    "f": "Unstable."
                }
            ],
            "correct": 0,
            "explanation": "Use the specific CPG when one fits.",
            "kpi": "ALS back-up for unstable patients or GCS <13."
        },
        {
            "id": "crit_8_1_5",
            "scenario": "Three people in one room have headache, vomiting and confusion; there is a gas heater.",
            "question": "What do you do first?",
            "options": [
                {
                    "t": "Scene safety: suspect a toxic gas (CO); remove people safely, high-flow oxygen",
                    "f": "Correct."
                },
                {
                    "t": "Enter and treat in the room",
                    "f": "Scene safety first."
                },
                {
                    "t": "Assume food poisoning",
                    "f": "Several patients in one place suggests a toxic exposure."
                },
                {
                    "t": "Glucose only",
                    "f": "Oxygen for suspected CO."
                }
            ],
            "correct": 0,
            "explanation": "Multiple patients are a scene-safety clue.",
            "kpi": "Substance, route, amount and time documented."
        }
    ]
};
