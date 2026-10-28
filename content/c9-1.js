/* ========== CPG 9.1 – Croup ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c9-1",
    "title": "Croup",
    "shortTitle": "9.1 Croup",
    "guide": {
        "cpg": "9.1",
        "group": "pediatric",
        "groupLabel": "Pediatrics",
        "title": "Croup",
        "lead": "Croup is a viral upper airway illness of young children: barking cough, stridor and hoarseness. Keep the child calm with the caregiver, score severity from a distance, and give nebulised racemic epinephrine for moderate or severe croup. Anyone who receives nebulised epinephrine goes to hospital: symptoms can return as it wears off.",
        "source": {
            "label": "CPG 9.1",
            "pages": "291–295",
            "pdf": "../pdf_sections/9_1_Croup.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Croup symptoms, typically in children aged 6 months–6 years: barking “seal-like” cough, inspiratory stridor at rest or with agitation, hoarseness, respiratory distress, usually low-grade fever."
                ],
                "exclude": [
                    "Epiglottitis: drooling, dysphagia, sitting forward, very high fever.",
                    "Foreign body aspiration: sudden onset, asymmetry.",
                    "Anaphylaxis.",
                    "Severe bacterial tracheitis.",
                    "Asthma or other causes of bronchospasm."
                ]
            },
            {
                "type": "groups",
                "title": "Assess from a distance first",
                "icon": "stethoscope",
                "groups": [
                    {
                        "title": "Pediatric Assessment Triangle",
                        "items": [
                            "Appearance: alertness, tone, interaction; lethargy is more concerning than agitation.",
                            "Work of breathing: stridor, retractions, nasal flaring, tracheal tug, accessory muscles.",
                            "Circulation to skin: pallor, cyanosis, mottling."
                        ]
                    },
                    {
                        "title": "Red flags",
                        "items": [
                            "Stridor at rest or biphasic stridor; silent chest.",
                            "Fatigue, reduced consciousness, slowing respiratory rate.",
                            "Cyanosis (late, ominous); bradycardia from severe hypoxia.",
                            "Drooling, difficulty swallowing or fever of 39°C or more: think of another diagnosis."
                        ]
                    },
                    {
                        "title": "History",
                        "items": [
                            "Onset and progression; previous croup or airway abnormalities.",
                            "Steroids already given at home; last oral intake; immunisations."
                        ]
                    }
                ]
            },
            {
                "type": "table",
                "title": "Croup severity score",
                "icon": "clipboard-list",
                "columns": [
                    "",
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                "rows": [
                    [
                        "Inspiratory stridor",
                        "Not present",
                        "When agitated / active",
                        "At rest",
                        "",
                        "",
                        ""
                    ],
                    [
                        "Intercostal recession",
                        "None",
                        "Mild",
                        "Moderate",
                        "Severe",
                        "",
                        ""
                    ],
                    [
                        "Air entry",
                        "Normal",
                        "Mildly decreased",
                        "Severely decreased",
                        "",
                        "",
                        ""
                    ],
                    [
                        "Cyanosis",
                        "None",
                        "",
                        "",
                        "",
                        "With agitation / activity",
                        "At rest"
                    ],
                    [
                        "Level of consciousness",
                        "Normal",
                        "",
                        "",
                        "",
                        "",
                        "Altered"
                    ]
                ],
                "notes": [
                    "Mild 0–2 · Moderate 3–7 · Severe 8–11 · Impending respiratory failure ≥12."
                ]
            },
            {
                "type": "steps",
                "title": "Management",
                "icon": "list",
                "steps": [
                    {
                        "title": "Calm",
                        "text": "Quiet environment, child with the caregiver in a position of comfort. Avoid handling or procedures that cause agitation: it can worsen obstruction."
                    },
                    {
                        "title": "Rule out",
                        "text": "Foreign body obstruction, epiglottitis and the other exclusions."
                    },
                    {
                        "title": "Oxygen",
                        "level": "EMR",
                        "text": "If SpO<sub>2</sub> &lt;94%: target ≥94% and &lt;98%, by the least intrusive method tolerated. Below 92%, escalate and notify hospital early."
                    },
                    {
                        "title": "ALS back-up",
                        "text": "Routinely for resting or biphasic stridor; consider for moderate or severe croup."
                    },
                    {
                        "title": "Nebulised racemic epinephrine",
                        "level": "EMT",
                        "text": "Moderate or severe croup.",
                        "doses": [
                            {
                                "drug": "Racemic epinephrine 2.25%",
                                "dose": "0.5 mL in 2.5–3 mL normal saline",
                                "note": "Nebulised over ~15 minutes; repeat every 20–30 minutes as needed; max 3 doses without Tele-EMS"
                            },
                            {
                                "drug": "If racemic unavailable: L-epinephrine 1:1,000",
                                "dose": "0.5 mL/kg nebulised",
                                "note": "Max 5 mL"
                            }
                        ]
                    },
                    {
                        "title": "Severe",
                        "text": "Avoid airway stimulation: it may increase swelling and obstruction. Have airway equipment ready, but avoid invasive airway procedures unless absolutely necessary."
                    },
                    {
                        "title": "Transport",
                        "text": "Every child given nebulised epinephrine, and any child still in moderate or severe distress."
                    }
                ]
            },
            {
                "type": "table",
                "title": "Triage",
                "icon": "triangle-alert",
                "columns": [
                    "Priority",
                    "Features"
                ],
                "rows": [
                    [
                        "Red",
                        "Severe distress with hypoxia, lethargy, cyanosis or impending failure; persistent resting or biphasic stridor, silent chest, poor air entry despite treatment"
                    ],
                    [
                        "Yellow",
                        "Moderate distress with stridor at rest but stable oxygenation and mental status; responds to treatment but still symptomatic"
                    ],
                    [
                        "Green",
                        "Stridor only when agitated, no hypoxia or exhaustion, stable mental status and perfusion"
                    ]
                ]
            },
            {
                "type": "groups",
                "title": "Reassess and disposition",
                "icon": "heart-pulse",
                "groups": [
                    {
                        "title": "Watch for",
                        "items": [
                            "Change in stridor or loss of audible air movement: impending failure.",
                            "Downward SpO<sub>2</sub> trend, slowing or irregular breathing (fatigue).",
                            "Recurrence as epinephrine wears off: repeat dosing may be needed."
                        ]
                    },
                    {
                        "title": "Disposition",
                        "items": [
                            "Mild croup with good oxygenation and no stridor at rest: may be managed at home with caregiver education.",
                            "Explain that epinephrine's effect is temporary and when to call back.",
                            "Consult Tele-EMS when in doubt."
                        ]
                    },
                    {
                        "title": "Not recommended",
                        "items": [
                            "Humidified air: no proven benefit, and it may increase distress."
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
                                "label": "Drug calculator: racemic epinephrine",
                                "sub": "2.25%, 0.5 mL nebulised",
                                "href": "../pages/drug-calculator.html?drug=Racemic Epinephrine (Adrenaline)",
                                "icon": "wind"
                            },
                            {
                                "label": "Pediatric drug calculator: L-epinephrine",
                                "sub": "1:1,000 nebulised, max 5 mL",
                                "href": "../pages/drug-calculator.html?drug=Epinephrine (Adrenaline)",
                                "icon": "pill"
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
                    "Racemic epinephrine for moderate to severe croup.",
                    "Oxygen for SpO<sub>2</sub> &lt;94%."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "6.4 Anaphylaxis",
                        "href": "c6-4.html"
                    },
                    {
                        "label": "9.2 Pediatric Bradycardia",
                        "href": "c9-2.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "What is the classic croup cough?",
            "options": [
                "Barking, seal-like",
                "Productive",
                "Whooping",
                "Dry and hacking"
            ],
            "correct": 0,
            "explanation": "With stridor and hoarseness."
        },
        {
            "q": "First-line prehospital drug for moderate or severe croup?",
            "options": [
                "Nebulised racemic epinephrine",
                "Salbutamol",
                "Hydrocortisone",
                "Ipratropium"
            ],
            "correct": 0,
            "explanation": "EMT level."
        },
        {
            "q": "Racemic epinephrine 2.25% dose?",
            "options": [
                "0.5 mL in 2.5–3 mL normal saline",
                "0.25 mL",
                "1 mL neat",
                "2 mL"
            ],
            "correct": 0,
            "explanation": "Nebulised over ~15 minutes."
        },
        {
            "q": "Croup score 5. Severity?",
            "options": [
                "Moderate",
                "Mild",
                "Severe",
                "Impending failure"
            ],
            "correct": 0,
            "explanation": "Moderate is 3–7."
        },
        {
            "q": "When is oxygen given?",
            "options": [
                "SpO₂ <94%, targeting ≥94% and <98%",
                "Never: it upsets the child",
                "Only below 85%",
                "Always at 15 L/min by mask"
            ],
            "correct": 0,
            "explanation": "Least intrusive method tolerated."
        },
        {
            "q": "Which finding suggests epiglottitis rather than croup?",
            "options": [
                "Drooling and difficulty swallowing",
                "Barking cough",
                "Low-grade fever",
                "Hoarseness"
            ],
            "correct": 0,
            "explanation": "Epiglottitis is an exclusion."
        },
        {
            "q": "Stridor returns 30 minutes after racemic epinephrine. What do you do?",
            "options": [
                "Repeat racemic epinephrine (max 3 doses without Tele-EMS)",
                "Salbutamol",
                "Intubate",
                "Nothing more"
            ],
            "correct": 0,
            "explanation": "Repeat every 20–30 minutes as needed."
        },
        {
            "q": "Why avoid agitating the child?",
            "options": [
                "Agitation can worsen airway obstruction",
                "It delays paperwork",
                "It raises temperature",
                "No reason"
            ],
            "correct": 0,
            "explanation": "Keep calm, with the caregiver."
        },
        {
            "q": "Maximum racemic epinephrine doses without Tele-EMS?",
            "options": [
                "3",
                "1",
                "2",
                "No limit"
            ],
            "correct": 0,
            "explanation": "Consult beyond that."
        },
        {
            "q": "A child with croup is becoming lethargic with slowing breathing. What does it mean?",
            "options": [
                "Exhaustion and impending respiratory failure",
                "Improvement",
                "Sleepiness after treatment",
                "Normal for croup"
            ],
            "correct": 0,
            "explanation": "Lethargy is more concerning than agitation."
        },
        {
            "q": "What should you record about medications already given?",
            "options": [
                "Any steroids given at home",
                "Nothing",
                "Only antibiotics",
                "Only vitamins"
            ],
            "correct": 0,
            "explanation": "History taking."
        },
        {
            "q": "Typical age range?",
            "options": [
                "6 months–6 years",
                "0–3 months",
                "6–12 years",
                "Adolescents"
            ],
            "correct": 0,
            "explanation": "Inclusion criteria."
        },
        {
            "q": "Stridor only when crying, no other signs. Score and severity?",
            "options": [
                "1 point: mild",
                "2 points: moderate",
                "4 points: moderate",
                "8 points: severe"
            ],
            "correct": 0,
            "explanation": "Mild is 0–2."
        },
        {
            "q": "Racemic epinephrine unavailable. Alternative?",
            "options": [
                "L-epinephrine 1:1,000, 0.5 mL/kg nebulised (max 5 mL)",
                "IM epinephrine",
                "Salbutamol",
                "No alternative"
            ],
            "correct": 0,
            "explanation": "Per the CPG."
        },
        {
            "q": "Why avoid examining the throat or other airway stimulation in severe croup?",
            "options": [
                "It may increase swelling and obstruction",
                "It is slow",
                "It is painful only",
                "It is fine"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "Which is a KPI?",
            "options": [
                "Racemic epinephrine for moderate to severe croup",
                "Antibiotics",
                "Chest X-ray",
                "Glucose for all"
            ],
            "correct": 0,
            "explanation": "And oxygen for SpO₂ <94%."
        },
        {
            "q": "Which assessment should be done first, from a distance?",
            "options": [
                "Pediatric Assessment Triangle",
                "Throat examination",
                "Blood pressure",
                "Temperature"
            ],
            "correct": 0,
            "explanation": "Avoids agitating the child."
        },
        {
            "q": "Best position?",
            "options": [
                "Position of comfort with the caregiver",
                "Supine",
                "Prone",
                "Trendelenburg"
            ],
            "correct": 0,
            "explanation": "Avoid unnecessary distress."
        },
        {
            "q": "Croup score 10. Severity?",
            "options": [
                "Severe",
                "Moderate",
                "Mild",
                "Impending failure"
            ],
            "correct": 0,
            "explanation": "Severe is 8–11."
        },
        {
            "q": "Humidified air?",
            "options": [
                "Not recommended: no proven benefit, may increase distress",
                "First-line",
                "Equal to epinephrine",
                "Mandatory"
            ],
            "correct": 0,
            "explanation": "Clinical insight."
        },
        {
            "q": "No improvement after racemic epinephrine in severe croup. What do you consider?",
            "options": [
                "Repeat dose, alternative diagnosis, airway readiness and ALS",
                "Discharge",
                "Humidified air",
                "Stop oxygen"
            ],
            "correct": 0,
            "explanation": "Foreign body, epiglottitis and tracheitis can mimic croup."
        },
        {
            "q": "Score of 12 or more means…",
            "options": [
                "Impending respiratory failure",
                "Moderate croup",
                "Mild croup",
                "Normal"
            ],
            "correct": 0,
            "explanation": "Life-threatening."
        },
        {
            "q": "Which is a sign of impending respiratory failure?",
            "options": [
                "Reduced level of consciousness",
                "Barking cough",
                "Low-grade fever",
                "Hoarseness"
            ],
            "correct": 0,
            "explanation": "Also silent chest and cyanosis."
        },
        {
            "q": "SpO₂ falls below 92%. What do you do?",
            "options": [
                "Escalate and notify hospital urgently",
                "Wait",
                "Stop oxygen",
                "Humidified air"
            ],
            "correct": 0,
            "explanation": "Per the CPG."
        },
        {
            "q": "When is ALS back-up routinely requested?",
            "options": [
                "Resting or biphasic stridor",
                "Every barking cough",
                "Never",
                "Fever only"
            ],
            "correct": 0,
            "explanation": "Per Universal Care."
        },
        {
            "q": "Child with croup-like symptoms and fever of 39.5°C. What do you consider?",
            "options": [
                "An alternative diagnosis such as epiglottitis or bacterial tracheitis",
                "Typical croup",
                "Antipyretics only",
                "Discharge"
            ],
            "correct": 0,
            "explanation": "Croup fever is usually below 39°C."
        },
        {
            "q": "Must a child given nebulised epinephrine go to hospital?",
            "options": [
                "Yes, always",
                "Only if worse",
                "No",
                "Only at night"
            ],
            "correct": 0,
            "explanation": "Symptoms can recur as it wears off."
        },
        {
            "q": "SpO₂ 91% with moderate croup. What do you do?",
            "options": [
                "Oxygen and racemic epinephrine",
                "Oxygen only",
                "Racemic epinephrine only",
                "Transport only"
            ],
            "correct": 0,
            "explanation": "Hypoxia and moderate distress."
        },
        {
            "q": "Which mild croup child may stay at home?",
            "options": [
                "Good oxygenation and no stridor at rest, with caregiver education",
                "Any child after epinephrine",
                "Stridor at rest",
                "SpO₂ 90%"
            ],
            "correct": 0,
            "explanation": "Clinical insight."
        },
        {
            "q": "Stridor at rest with visible retractions, normal mental status. Severity?",
            "options": [
                "Moderate",
                "Mild",
                "Impending failure",
                "Normal"
            ],
            "correct": 0,
            "explanation": "Moderate distress."
        }
    ],
    "flashcards": [
        {
            "question": "Croup",
            "answer": "Viral upper airway illness: barking cough, stridor, hoarseness; typically 6 months–6 years."
        },
        {
            "question": "Classic features",
            "answer": "Barking cough, inspiratory stridor, hoarseness, respiratory distress, low-grade fever."
        },
        {
            "question": "Score components",
            "answer": "Inspiratory stridor, intercostal recession, air entry, cyanosis, level of consciousness."
        },
        {
            "question": "Score bands",
            "answer": "Mild 0–2; moderate 3–7; severe 8–11; impending failure ≥12."
        },
        {
            "question": "Stridor points",
            "answer": "None 0; when agitated 1; at rest 2."
        },
        {
            "question": "Cyanosis points",
            "answer": "With agitation 4; at rest 5."
        },
        {
            "question": "Consciousness points",
            "answer": "Altered: 5."
        },
        {
            "question": "Racemic epinephrine",
            "answer": "2.25%, 0.5 mL in 2.5–3 mL normal saline nebulised over ~15 minutes (EMT)."
        },
        {
            "question": "Repeat dosing",
            "answer": "Every 20–30 minutes as needed; max 3 doses without Tele-EMS."
        },
        {
            "question": "Alternative",
            "answer": "L-epinephrine 1:1,000, 0.5 mL/kg nebulised, max 5 mL."
        },
        {
            "question": "Oxygen",
            "answer": "If SpO₂ <94%: target ≥94% and <98%; below 92% escalate."
        },
        {
            "question": "Position",
            "answer": "Position of comfort with the caregiver; minimise distress."
        },
        {
            "question": "Mimics",
            "answer": "Epiglottitis, bacterial tracheitis, foreign body aspiration, anaphylaxis, asthma."
        },
        {
            "question": "Epiglottitis clues",
            "answer": "Drooling, dysphagia, sitting forward, very high fever."
        },
        {
            "question": "KPIs",
            "answer": "Racemic epinephrine for moderate to severe croup; oxygen for SpO₂ <94%."
        },
        {
            "question": "Transport",
            "answer": "Every child given nebulised epinephrine, and any in moderate or severe distress."
        },
        {
            "question": "Severe croup",
            "answer": "Avoid airway stimulation; airway equipment ready; invasive airway only if absolutely necessary."
        },
        {
            "question": "ALS back-up",
            "answer": "Routinely for resting or biphasic stridor."
        },
        {
            "question": "Humidified air",
            "answer": "Not recommended: no proven benefit."
        },
        {
            "question": "Recurrence",
            "answer": "Symptoms may return within hours, as epinephrine wears off; worse at night."
        }
    ],
    "critical": [
        {
            "id": "crit_9_1_1",
            "scenario": "A 2-year-old has a barking cough, stridor at rest and moderate intercostal recession. Air entry mildly decreased, SpO₂ 92%, alert.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Keep calm with the parent, oxygen, nebulised racemic epinephrine 0.5 mL, consider ALS, transport",
                    "f": "Correct: moderate croup (score 5) with hypoxia."
                },
                {
                    "t": "Examine the throat with a tongue depressor",
                    "f": "Avoid airway stimulation."
                },
                {
                    "t": "Humidified air and discharge",
                    "f": "Not recommended."
                },
                {
                    "t": "Lie her flat for assessment",
                    "f": "Position of comfort."
                }
            ],
            "correct": 0,
            "explanation": "Stridor at rest 2 + recession 2 + air entry 1 = 5: moderate.",
            "kpi": "Racemic epinephrine for moderate to severe croup."
        },
        {
            "id": "crit_9_1_2",
            "scenario": "A 4-year-old improved after one dose of racemic epinephrine, but 30 minutes later stridor at rest returns during transport.",
            "question": "Next step?",
            "options": [
                {
                    "t": "Repeat racemic epinephrine and continue transport (max 3 doses without Tele-EMS)",
                    "f": "Correct."
                },
                {
                    "t": "Salbutamol",
                    "f": "Croup is upper airway obstruction."
                },
                {
                    "t": "Return home: it was working",
                    "f": "All children given epinephrine are transported."
                },
                {
                    "t": "Intubate",
                    "f": "Invasive airway only if absolutely necessary."
                }
            ],
            "correct": 0,
            "explanation": "Repeat every 20–30 minutes as needed.",
            "kpi": "Racemic epinephrine for moderate to severe croup."
        },
        {
            "id": "crit_9_1_3",
            "scenario": "A 3-year-old has biphasic stridor, severe recession and is becoming drowsy, with cyanosis on crying.",
            "question": "What do you do?",
            "options": [
                {
                    "t": "Racemic epinephrine, oxygen, ALS, minimal stimulation, airway equipment ready, rapid transport",
                    "f": "Correct: severe croup, Red priority."
                },
                {
                    "t": "Look in the throat",
                    "f": "Avoid airway stimulation."
                },
                {
                    "t": "Wait for improvement on scene",
                    "f": "Be prepared for rapid deterioration."
                },
                {
                    "t": "Humidified air",
                    "f": "Not recommended."
                }
            ],
            "correct": 0,
            "explanation": "Altered consciousness and cyanosis push the score into the severe range.",
            "kpi": "Racemic epinephrine for moderate to severe croup."
        },
        {
            "id": "crit_9_1_4",
            "scenario": "A 5-year-old has fever of 39.5°C, drools, sits forward and has a muffled voice.",
            "question": "What is likely, and what do you do?",
            "options": [
                {
                    "t": "Epiglottitis: outside this CPG; do not agitate or examine the throat, oxygen as tolerated, ALS, prompt transport",
                    "f": "Correct."
                },
                {
                    "t": "Croup: racemic epinephrine and home",
                    "f": "Drooling and high fever suggest epiglottitis."
                },
                {
                    "t": "Lie the child flat to examine",
                    "f": "Let the child keep their position."
                },
                {
                    "t": "Tongue depressor to look",
                    "f": "Never stimulate the airway."
                }
            ],
            "correct": 0,
            "explanation": "Signs of epiglottitis are an exclusion criterion.",
            "kpi": "Oxygen for SpO₂ <94%."
        },
        {
            "id": "crit_9_1_5",
            "scenario": "A child with a barking cough has stridor only when crying, SpO₂ 98%, no distress at rest. The parents are anxious.",
            "question": "What is appropriate?",
            "options": [
                {
                    "t": "Mild croup: home care with caregiver education and clear return advice; Tele-EMS if in doubt",
                    "f": "Correct."
                },
                {
                    "t": "Racemic epinephrine",
                    "f": "Reserved for moderate or severe croup."
                },
                {
                    "t": "Oxygen by mask",
                    "f": "SpO₂ is normal."
                },
                {
                    "t": "Humidified air",
                    "f": "Not recommended."
                }
            ],
            "correct": 0,
            "explanation": "Mild cases with good oxygenation and no stridor at rest can often be managed at home.",
            "kpi": "Oxygen for SpO₂ <94%."
        }
    ]
};
