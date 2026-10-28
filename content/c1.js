/* ========== Chapter 1 – Universal Care (CPG 1.1–1.6) ==========
 * Sections with a `guide` are written from the official DCAS CPG 2025 PDF
 * (data/cpg-source/) and rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c1",
    "title": "Universal Care",
    "shortTitle": "1.0 Universal Care",
    "sections": [
        {
            "id": "c1s1",
            "shortTitle": "1.1 Universal Care",
            "guide": {
                "cpg": "1.1",
                "group": "universal",
                "groupLabel": "Universal Care",
                "title": "Universal Care",
                "lead": "The standard, systematic approach to every patient: make the scene safe, find and treat life threats, then assess fully, reassess and hand over. It applies to all patients, whatever the complaint.",
                "source": {
                    "label": "CPG 1.1",
                    "pages": "16–26",
                    "pdf": "../pdf_sections/1_1_Universal_Care__Core_Assessment.pdf"
                },
                "sections": [
                    {
                        "type": "steps",
                        "title": "The approach, step by step",
                        "icon": "list",
                        "steps": [
                            {
                                "title": "Scene safety and resources",
                                "text": "Assess hazards (environmental, violence, chemical exposure) and use the right PPE. Count patients and request more resources if needed (e.g. ALS back-up, mass casualty declaration)."
                            },
                            {
                                "title": "General impression",
                                "text": "Appearance, breathing and activity, formed on arrival. In children this is the Pediatric Assessment Triangle."
                            },
                            {
                                "title": "Primary survey",
                                "text": "Find and manage life threats as you go.",
                                "items": [
                                    "<b>Medical:</b> A-B-C (Airway, Breathing, Circulation).",
                                    "<b>Trauma:</b> C-A-B-C (Catastrophic hemorrhage / C-spine, Airway, Breathing, Circulation).",
                                    "<b>Cardiac arrest:</b> C-A-B (Compressions, Airway, Breathing)."
                                ]
                            },
                            {
                                "title": "Consider ALS back-up",
                                "text": "If advanced life support skills are required."
                            },
                            {
                                "title": "Establish the triage category",
                                "text": "Life threatening: Red. Serious: Yellow. Minor: Green (Patient Triage Categories CPG)."
                            },
                            {
                                "title": "Baseline vital signs",
                                "text": "LOC (AVPU/GCS), respiratory rate, pulse, blood pressure, temperature. Add pulse oximetry and a 12-lead ECG for cardiac or respiratory compromise, and blood glucose for altered mental status."
                            },
                            {
                                "title": "Oxygen",
                                "text": "To maintain SpO<sub>2</sub> &gt;94%, choosing the method and rate that also treat hypercarbia from hypoventilation."
                            },
                            {
                                "title": "Secondary survey",
                                "text": "Medical: head-to-toe examination. Trauma: rapid trauma survey (DCAP BLS TIC). SAMPLE history and OPQRST."
                            },
                            {
                                "title": "IV access",
                                "text": "If needed for treatment or the patient is at risk of deterioration. Consider IO if IV access cannot be readily obtained."
                            },
                            {
                                "title": "Pain, condition-specific care and temperature",
                                "text": "Give appropriate analgesia, go to the relevant CPG, and prevent hypo- or hyperthermia (especially severe trauma, sepsis and environmental emergencies)."
                            },
                            {
                                "title": "Reassess",
                                "text": "Red every 5 minutes, Yellow every 10 minutes, Green every 15 minutes."
                            },
                            {
                                "title": "Receiving facility and handover",
                                "text": "Confirm the hospital with Dispatch 2 before departing, then hand over in IMIST-AMBO format."
                            }
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "Primary survey in detail (ABCDE)",
                        "icon": "stethoscope",
                        "groups": [
                            {
                                "title": "Airway",
                                "items": [
                                    "Open the airway (head tilt/chin lift, jaw thrust), suction, and insert adjuncts (OPA/NPA, supraglottic, ETT) as needed; see the Airway Management CPG.",
                                    "Laryngectomy or tracheostomy: remove anything covering the opening, keep prescribed oxygen flowing and reposition the head and neck."
                                ]
                            },
                            {
                                "title": "Breathing",
                                "items": [
                                    "Assess rate, breath sounds, accessory muscle use, retractions, position and SpO<sub>2</sub>.",
                                    "Give oxygen to achieve SpO<sub>2</sub> 94–98%: nasal cannula 2–6 L/min for mild hypoxia; non-rebreather mask 10–15 L/min for moderate to severe hypoxia; BVM for inadequate ventilation.",
                                    "Titrate to avoid hyperoxia, especially in COPD or suspected stroke.",
                                    "Apneic patient: go to the Airway Management CPG."
                                ]
                            },
                            {
                                "title": "Circulation",
                                "items": [
                                    "Control major external bleeding: direct pressure, tourniquets, hemostatic agents.",
                                    "No pulse: go to the appropriate Resuscitation CPG. Otherwise assess rate and quality of carotid and radial pulses.",
                                    "Assess perfusion: skin color and temperature, capillary refill."
                                ]
                            },
                            {
                                "title": "Disability",
                                "items": [
                                    "Manual cervical spine restriction in neutral alignment if trauma is suspected.",
                                    "Responsiveness (AVPU), and gross motor and sensory function in all limbs.",
                                    "Blood glucose for altered mental status or suspected stroke: below 70 mg/dl, go to the Hypoglycemia CPG.",
                                    "Suspected acute stroke: complete a BEFAST assessment and go to the Stroke CPG."
                                ]
                            },
                            {
                                "title": "Exposure",
                                "items": [
                                    "Expose as needed for the complaint, respecting modesty, and keep the patient warm or cool as required."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "ALS back-up",
                        "icon": "ambulance",
                        "groups": [
                            {
                                "title": "When and how",
                                "items": [
                                    "Request ALS back-up when advanced skills or interventions are needed, within 5 minutes of arrival at the patient.",
                                    "Do not assume no ALS unit is available. You may request and later cancel (e.g. the patient improves), or meet the ALS unit en route to hospital."
                                ]
                            },
                            {
                                "title": "Time to hospital",
                                "items": [
                                    "Request back-up only if the ALS unit will reach the patient significantly faster than you can reach hospital.",
                                    "Transfer time under 10 minutes and no ALS unit already dispatched: requesting back-up is usually not appropriate; go directly to hospital.",
                                    "Also weigh extrication time, your ability to perform the skills needed, and the risk of deterioration."
                                ]
                            },
                            {
                                "title": "Red-priority patients",
                                "items": [
                                    "<b>Unstable red:</b> generally all red-priority patients, because they may deteriorate. Request ALS back-up.",
                                    "<b>Stable red:</b> adequately managed with BLS, acceptable vital signs, not expected to deteriorate during transfer, and needing no urgent ALS intervention (e.g. controlled arterial limb bleeding, uncomplicated CVA). Not requesting back-up is appropriate.",
                                    "Use sound clinical judgement before calling a red patient stable."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Vital signs and monitoring",
                        "icon": "activity",
                        "items": [
                            "<b>Full baseline set:</b> pulse, blood pressure, respiratory rate, temperature, SpO<sub>2</sub>, blood glucose and EtCO<sub>2</sub> if indicated, and neurological status (AVPU and GCS).",
                            "<b>Cardiac or respiratory compromise:</b> pulse oximetry, prompt 12-lead ECG for cardiac or suspected cardiac complaints, continuous cardiac monitoring. Consider waveform capnography for respiratory complaints; it is essential for critical patients and invasive airway management.",
                            "<b>Altered mental status:</b> check blood glucose; below 70 mg/dl go to the Hypoglycemia CPG."
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "Secondary survey and history",
                        "icon": "clipboard-list",
                        "intro": "If the primary survey needs interventions, a full secondary survey may not be possible. Avoid delays in critical patients.",
                        "groups": [
                            {
                                "title": "Examination",
                                "items": [
                                    "<b>Trauma:</b> rapid trauma survey, DCAP BLS TIC: Deformities, Contusions, Abrasions, Punctures/Penetrations, Burns, Lacerations, Swelling, Tenderness, Instability, Crepitus.",
                                    "<b>Medical:</b> focus on the relevant systems (e.g. cardiovascular, neurological).",
                                    "Head to toe as relevant: head (pupils, ears, naso-oropharynx, skull and scalp), neck (JVD, tracheal position, spinal tenderness), chest, abdomen/back and pelvis, extremities, neurology.",
                                    "Look for medical devices: pacemaker/defibrillator, LVAD, insulin pump, dialysis fistula."
                                ]
                            },
                            {
                                "title": "History",
                                "items": [
                                    "<b>SAMPLE:</b> Symptoms, Allergies (medication, environment, food), Medications (bring containers if possible), Past history (alert tags, devices, possible pregnancy and last menstrual period in females of childbearing age), Last oral intake, Events.",
                                    "<b>OPQRST:</b> Onset, Provocation, Quality, Radiation, Severity, Time.",
                                    "Mechanism of injury or illness, and pre-arrival information from dispatch and bystanders."
                                ]
                            },
                            {
                                "title": "Pain",
                                "items": [
                                    "Assess with a 0–10 scale or non-verbal cues, as per the Pain Management CPG.",
                                    "Wong-Baker Faces scale for non-verbal patients; FLACC scale for children under 3 years."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Red flags",
                        "icon": "triangle-alert",
                        "tone": "alert",
                        "items": [
                            "Apnea, pulselessness or severe hemorrhage.",
                            "Altered mental status (AVPU: Voice, Pain, Unresponsive) or neurological deficit (e.g. stroke symptoms, seizures).",
                            "Hypoxia (SpO<sub>2</sub> &lt;94%), hypotension (SBP &lt;90 mmHg) or other unstable vital signs.",
                            "High-risk mechanism (e.g. fall &gt;10 feet, high-speed crash, electrocution)."
                        ]
                    },
                    {
                        "type": "table",
                        "title": "Reassessment",
                        "icon": "clock",
                        "columns": [
                            "Triage category",
                            "Reassess every"
                        ],
                        "rows": [
                            [
                                "Red (critical)",
                                "5 minutes"
                            ],
                            [
                                "Yellow (serious)",
                                "10 minutes"
                            ],
                            [
                                "Green (non-critical)",
                                "15 minutes"
                            ]
                        ],
                        "notes": [
                            "Include LOC, ABC, vital signs, condition-specific signs, interventions (e.g. IV patency), response to treatment (e.g. pain) and trends.",
                            "Routine glucose rechecks are not needed when glucose is acceptable and there is no suspicion of hypo- or hyperglycemia.",
                            "Consult Tele-EMS for complex or deteriorating conditions."
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "Transport and handover",
                        "icon": "hospital",
                        "groups": [
                            {
                                "title": "Receiving facility",
                                "items": [
                                    "Choose by condition (e.g. trauma center for severe injuries, stroke center for suspected stroke). Confirm with Dispatch 2 before departing.",
                                    "Consider Airwing for time-critical patients when ground transport exceeds 30 minutes. Airwing does not transport imminent births or violent patients."
                                ]
                            },
                            {
                                "title": "Handover (IMIST-AMBO)",
                                "items": [
                                    "Identification, Mechanism/Medical complaint, Injuries/Illness, Signs, Symptoms, Treatment, Allergies, Medications, Background, Other.",
                                    "Include name and age, chief complaint, history, medications, allergies, vital signs, interventions and response to treatment."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "Patient rights and special groups",
                        "icon": "user",
                        "groups": [
                            {
                                "title": "Rights and capacity",
                                "items": [
                                    "Patients above 18 years with full mental capacity may refuse treatment and transfer (Refusal of Transfer CPG).",
                                    "Full mental capacity: the patient can understand, retain and repeat the information you give.",
                                    "Advance care directives and living wills are not recognised in the prehospital environment in Dubai."
                                ]
                            },
                            {
                                "title": "Age groups and dosing",
                                "items": [
                                    "Pediatrics: 13 years or younger. Use a length-based tape (Broselow) to estimate weight and guide drugs and equipment.",
                                    "Geriatrics: 65 years or older.",
                                    "Reduced drug doses may apply in renal disease (dialysis, chronic renal insufficiency) or hepatic disease (severe cirrhosis, end-stage liver disease)."
                                ]
                            },
                            {
                                "title": "Critical patients and scene",
                                "items": [
                                    "Ideally assign one or two clinicians to focus on the patient.",
                                    "Apart from life-saving interventions, treatment must not slow extrication or delay transport.",
                                    "Use standard precautions (PPE, hand hygiene) and enhanced precautions for suspected infection (e.g. TB, MRSA). Coordinate with civil defense and police."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "table",
                        "title": "Normal vital signs by age",
                        "icon": "heart-pulse",
                        "columns": [
                            "Age",
                            "Pulse awake",
                            "Pulse asleep",
                            "Resp. rate",
                            "Systolic BP"
                        ],
                        "rows": [
                            [
                                "Preterm &lt;1 kg",
                                "120–160",
                                "–",
                                "30–60",
                                "39–59"
                            ],
                            [
                                "Preterm 1–3 kg",
                                "120–160",
                                "–",
                                "30–60",
                                "60–76"
                            ],
                            [
                                "Newborn",
                                "100–205",
                                "85–160",
                                "30–60",
                                "67–84"
                            ],
                            [
                                "Up to 1 year",
                                "100–190",
                                "90–160",
                                "30–60",
                                "72–104"
                            ],
                            [
                                "1–2 years",
                                "100–190",
                                "90–160",
                                "24–40",
                                "86–106"
                            ],
                            [
                                "2–3 years",
                                "98–140",
                                "60–120",
                                "24–40",
                                "86–106"
                            ],
                            [
                                "3–4 years",
                                "80–140",
                                "60–100",
                                "24–40",
                                "89–112"
                            ],
                            [
                                "4–5 years",
                                "80–140",
                                "60–100",
                                "22–34",
                                "89–112"
                            ],
                            [
                                "5–6 years",
                                "75–140",
                                "58–90",
                                "22–34",
                                "89–112"
                            ],
                            [
                                "6–10 years",
                                "75–140",
                                "58–90",
                                "18–30",
                                "97–115"
                            ],
                            [
                                "10–12 years",
                                "75–118",
                                "58–90",
                                "18–30",
                                "102–120"
                            ],
                            [
                                "12–13 years",
                                "60–100",
                                "58–90",
                                "15–20",
                                "110–131"
                            ],
                            [
                                "13–15 years",
                                "60–100",
                                "50–90",
                                "15–20",
                                "110–131"
                            ],
                            [
                                "15 years or older",
                                "60–100",
                                "50–90",
                                "15–20",
                                "110–131"
                            ]
                        ],
                        "notes": [
                            "Pulse in beats/min, respiratory rate in breaths/min, systolic BP in mmHg.",
                            "Below the lower limit: hypotension, bradycardia, bradypnea. Above the upper limit: hypertension, tachycardia, tachypnea.",
                            "Hypertension may be expected (e.g. anxiety, pain)."
                        ]
                    },
                    {
                        "type": "table",
                        "title": "Glasgow Coma Scale",
                        "icon": "brain",
                        "columns": [
                            "Score",
                            "Adults and children over 4",
                            "Children under 4"
                        ],
                        "rows": [
                            {
                                "group": "Eye opening"
                            },
                            [
                                "4",
                                "Spontaneously",
                                "Spontaneously"
                            ],
                            [
                                "3",
                                "To verbal stimuli",
                                "To verbal stimuli"
                            ],
                            [
                                "2",
                                "To pain",
                                "To pain"
                            ],
                            [
                                "1",
                                "No response to pain",
                                "No response to pain"
                            ],
                            {
                                "group": "Verbal response"
                            },
                            [
                                "5",
                                "Orientated and converses",
                                "Appropriate words or social smile, fixes, follows"
                            ],
                            [
                                "4",
                                "Confused and converses",
                                "Cries but consolable; fewer words than usual"
                            ],
                            [
                                "3",
                                "Inappropriate words",
                                "Persistently irritable"
                            ],
                            [
                                "2",
                                "Incomprehensible words",
                                "Moans to pain"
                            ],
                            [
                                "1",
                                "No response to pain",
                                "No response to pain"
                            ],
                            {
                                "group": "Motor response"
                            },
                            [
                                "6",
                                "Obeys verbal commands",
                                "Obeys verbal commands"
                            ],
                            [
                                "5",
                                "Localizes to stimuli",
                                "Localizes to stimuli"
                            ],
                            [
                                "4",
                                "Withdraws to stimuli",
                                "Withdraws to stimuli"
                            ],
                            [
                                "3",
                                "Abnormal flexion (decorticate)",
                                "Abnormal flexion (decorticate)"
                            ],
                            [
                                "2",
                                "Abnormal extension (decerebrate)",
                                "Abnormal extension (decerebrate)"
                            ],
                            [
                                "1",
                                "No response to pain",
                                "No response to pain"
                            ]
                        ],
                        "notes": [
                            "Total 3–15."
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Key performance indicators",
                        "icon": "chart-no-axes-column",
                        "items": [
                            "Apply a tourniquet for uncontrolled arterial limb bleeding.",
                            "Request ALS back-up within 1 minute of patient contact (when indicated)."
                        ]
                    },
                    {
                        "type": "related",
                        "title": "Related CPGs",
                        "icon": "link",
                        "items": [
                            {
                                "label": "1.3 Patient Triage Categories",
                                "href": "c1.html?section=c1s3"
                            },
                            {
                                "label": "1.6 Refusal of Transfer",
                                "href": "c1.html?section=c1s6"
                            },
                            {
                                "label": "2.1 Airway Management",
                                "href": "c2.html?section=c2s1"
                            },
                            {
                                "label": "5.1 Stroke",
                                "href": "c5-1.html"
                            },
                            {
                                "label": "6.8 Hypoglycemia",
                                "href": "c6-8.html"
                            },
                            {
                                "label": "6.12 Pain Management",
                                "href": "c6-12.html"
                            }
                        ]
                    }
                ]
            },
            "quiz": [
                {
                    "q": "What is the primary survey sequence for a medical patient?",
                    "options": [
                        "A-B-C",
                        "C-A-B-C",
                        "C-A-B",
                        "D-R-A-B-C"
                    ],
                    "correct": 0,
                    "explanation": "Medical: Airway, Breathing, Circulation."
                },
                {
                    "q": "What is the primary survey sequence for a trauma patient?",
                    "options": [
                        "A-B-C",
                        "C-A-B-C",
                        "C-A-B",
                        "A-B-C-D-E only"
                    ],
                    "correct": 1,
                    "explanation": "Trauma: C-A-B-C – Catastrophic hemorrhage / C-spine, then Airway, Breathing, Circulation."
                },
                {
                    "q": "What is the sequence in cardiac arrest?",
                    "options": [
                        "A-B-C",
                        "C-A-B-C",
                        "C-A-B",
                        "B-A-C"
                    ],
                    "correct": 2,
                    "explanation": "Cardiac arrest: Compressions, Airway, Breathing."
                },
                {
                    "q": "In trauma C-A-B-C, what does the first 'C' cover?",
                    "options": [
                        "Circulation",
                        "Catastrophic hemorrhage / C-spine",
                        "Chest compressions",
                        "Capillary refill"
                    ],
                    "correct": 1,
                    "explanation": "The first C is catastrophic hemorrhage control and C-spine."
                },
                {
                    "q": "Which three things form the general impression?",
                    "options": [
                        "Appearance, breathing, activity",
                        "Airway, breathing, circulation",
                        "Age, build, complaint",
                        "Alertness, bleeding, color"
                    ],
                    "correct": 0,
                    "explanation": "The general impression is formed on arrival from appearance, breathing and activity."
                },
                {
                    "q": "What is the general impression called in pediatric patients?",
                    "options": [
                        "APGAR",
                        "Pediatric Assessment Triangle",
                        "Broselow assessment",
                        "FLACC"
                    ],
                    "correct": 1,
                    "explanation": "In children, the general impression is the Pediatric Assessment Triangle."
                },
                {
                    "q": "What is the very first step on scene?",
                    "options": [
                        "Airway",
                        "Scene safety and PPE",
                        "Calling Dispatch 2",
                        "Vital signs"
                    ],
                    "correct": 1,
                    "explanation": "Assess hazards (environmental, violence, chemical) and use the right PPE first."
                },
                {
                    "q": "What SpO2 range should supplemental oxygen achieve?",
                    "options": [
                        "88–92%",
                        "94–98%",
                        "100%",
                        "90–94%"
                    ],
                    "correct": 1,
                    "explanation": "Give oxygen to achieve SpO2 94–98%, titrating to avoid hyperoxia."
                },
                {
                    "q": "Which oxygen device does CPG 1.1 suggest for mild hypoxia?",
                    "options": [
                        "Nasal cannula 2–6 L/min",
                        "Non-rebreather 10–15 L/min",
                        "BVM",
                        "Venturi mask 60%"
                    ],
                    "correct": 0,
                    "explanation": "Nasal cannula 2–6 L/min for mild hypoxia."
                },
                {
                    "q": "Which oxygen device is used for moderate to severe hypoxia?",
                    "options": [
                        "Nasal cannula 2–6 L/min",
                        "Non-rebreather mask 10–15 L/min",
                        "Simple face mask 4 L/min",
                        "No oxygen"
                    ],
                    "correct": 1,
                    "explanation": "Non-rebreather mask 10–15 L/min for moderate to severe hypoxia."
                },
                {
                    "q": "What do you use when ventilation is inadequate?",
                    "options": [
                        "Nasal cannula",
                        "Non-rebreather mask",
                        "BVM",
                        "Oxygen is not needed"
                    ],
                    "correct": 2,
                    "explanation": "BVM for inadequate ventilation."
                },
                {
                    "q": "In which patients should you take particular care to avoid hyperoxia?",
                    "options": [
                        "Asthma and anaphylaxis",
                        "COPD and suspected stroke",
                        "Fractures and burns",
                        "Hypoglycemia"
                    ],
                    "correct": 1,
                    "explanation": "Titrate oxygen to avoid hyperoxia, especially in COPD or suspected stroke."
                },
                {
                    "q": "Blood glucose is checked in which patients during the primary survey?",
                    "options": [
                        "Every patient",
                        "Altered mental status or suspected stroke",
                        "Only diabetics",
                        "Only children"
                    ],
                    "correct": 1,
                    "explanation": "Check glucose in altered mental status or suspected stroke."
                },
                {
                    "q": "Below what blood glucose do you go to the Hypoglycemia CPG?",
                    "options": [
                        "70 mg/dl",
                        "80 mg/dl",
                        "60 mg/dl",
                        "100 mg/dl"
                    ],
                    "correct": 0,
                    "explanation": "Blood glucose less than 70 mg/dl: go to the Hypoglycemia CPG."
                },
                {
                    "q": "A trauma patient may have a spinal injury. What do you do in the 'Disability' step?",
                    "options": [
                        "Sit them up",
                        "Manual cervical spine restriction in neutral alignment",
                        "Remove the collar",
                        "Nothing until hospital"
                    ],
                    "correct": 1,
                    "explanation": "Initiate manual cervical spine restriction, maintaining neutral alignment, if trauma is suspected."
                },
                {
                    "q": "Suspected acute stroke: which assessment does CPG 1.1 ask for?",
                    "options": [
                        "FAST",
                        "BEFAST",
                        "Cincinnati only",
                        "GCS only"
                    ],
                    "correct": 1,
                    "explanation": "Complete a BEFAST assessment and go to the Stroke CPG."
                },
                {
                    "q": "A patient has a tracheostomy. What does CPG 1.1 say first?",
                    "options": [
                        "Remove the tube",
                        "Remove anything obstructing the opening, keep prescribed oxygen flowing, reposition head and neck",
                        "Intubate orally",
                        "Cover the stoma"
                    ],
                    "correct": 1,
                    "explanation": "Remove objects or clothing obstructing the opening, maintain prescribed oxygen and reposition the head and/or neck."
                },
                {
                    "q": "Within how many minutes of arrival should ALS back-up be requested (management section)?",
                    "options": [
                        "1 minute",
                        "5 minutes",
                        "10 minutes",
                        "15 minutes"
                    ],
                    "correct": 1,
                    "explanation": "ALS back-up should be requested within 5 minutes of arrival at the patient. Note the KPI uses 1 minute of patient contact."
                },
                {
                    "q": "What is the KPI for requesting ALS back-up when indicated?",
                    "options": [
                        "Within 1 minute of patient contact",
                        "Within 10 minutes",
                        "Before leaving base",
                        "Only after reassessment"
                    ],
                    "correct": 0,
                    "explanation": "KPI: request ALS back-up within 1 minute of patient contact (when indicated)."
                },
                {
                    "q": "Transfer time is under 10 minutes and no ALS unit is dispatched yet. What is usually appropriate?",
                    "options": [
                        "Request ALS back-up and wait",
                        "Transfer directly to hospital",
                        "Wait for Tele-EMS",
                        "Call Airwing"
                    ],
                    "correct": 1,
                    "explanation": "With a transfer time under 10 minutes, requesting ALS back-up is usually not appropriate; go directly to hospital."
                },
                {
                    "q": "You requested ALS back-up but the patient improves. What may you do?",
                    "options": [
                        "You must wait",
                        "Cancel the request",
                        "Request a second unit",
                        "Leave without telling dispatch"
                    ],
                    "correct": 1,
                    "explanation": "It is appropriate to request back-up and later cancel it if it is not required."
                },
                {
                    "q": "Can you meet the ALS unit on the way to hospital?",
                    "options": [
                        "No, never",
                        "Yes, a rendezvous en route is appropriate",
                        "Only for children",
                        "Only by air"
                    ],
                    "correct": 1,
                    "explanation": "It is appropriate to request ALS back-up and rendezvous en route to hospital."
                },
                {
                    "q": "Which red-priority patient may be 'stable red'?",
                    "options": [
                        "Unconscious head injury",
                        "Controlled arterial limb bleeding with acceptable vital signs",
                        "Severe respiratory distress",
                        "Cardiac arrest"
                    ],
                    "correct": 1,
                    "explanation": "Stable red: managed with BLS, acceptable vitals, not expected to deteriorate, no urgent ALS need – e.g. controlled arterial limb bleeding or uncomplicated CVA."
                },
                {
                    "q": "Which is NOT a criterion for 'stable red priority'?",
                    "options": [
                        "Adequately managed with BLS",
                        "Acceptable vital signs",
                        "Needs urgent ALS intervention",
                        "Not expected to deteriorate during transfer"
                    ],
                    "correct": 2,
                    "explanation": "A stable red patient does not require any urgent advanced life support intervention."
                },
                {
                    "q": "Is it appropriate not to request ALS back-up for a stable red patient?",
                    "options": [
                        "Yes",
                        "No, always request",
                        "Only at night",
                        "Only with Tele-EMS approval"
                    ],
                    "correct": 0,
                    "explanation": "It is appropriate to not request ALS back-up for stable red-priority patients."
                },
                {
                    "q": "How often do you reassess a red (critical) patient?",
                    "options": [
                        "Every 5 minutes",
                        "Every 10 minutes",
                        "Every 15 minutes",
                        "Every 30 minutes"
                    ],
                    "correct": 0,
                    "explanation": "Red: every 5 minutes."
                },
                {
                    "q": "How often do you reassess a yellow (serious) patient?",
                    "options": [
                        "Every 5 minutes",
                        "Every 10 minutes",
                        "Every 20 minutes",
                        "Every 30 minutes"
                    ],
                    "correct": 1,
                    "explanation": "The management text says every 10 minutes for yellow. (The flowchart says 15; follow the text and check with your clinical lead.)"
                },
                {
                    "q": "How often do you reassess a green (non-critical) patient?",
                    "options": [
                        "Every 5 minutes",
                        "Every 10 minutes",
                        "Every 15 minutes",
                        "Only on arrival"
                    ],
                    "correct": 2,
                    "explanation": "Green: every 15 minutes."
                },
                {
                    "q": "When is a routine blood glucose recheck NOT required?",
                    "options": [
                        "Never",
                        "Glucose is acceptable and there is no suspicion of hypo- or hyperglycemia",
                        "In all children",
                        "When oxygen is running"
                    ],
                    "correct": 1,
                    "explanation": "No routine recheck when glucose is acceptable and there is no clinical suspicion requiring it."
                },
                {
                    "q": "Which is a red flag in CPG 1.1?",
                    "options": [
                        "SpO2 96%",
                        "SBP below 90 mmHg",
                        "Pain score 3",
                        "Heart rate 80"
                    ],
                    "correct": 1,
                    "explanation": "Red flags include hypoxia (SpO2 <94%) and hypotension (SBP <90 mmHg)."
                },
                {
                    "q": "Which mechanism is listed as high risk?",
                    "options": [
                        "Fall from standing",
                        "Fall greater than 10 feet",
                        "Minor bump",
                        "Low-speed parking collision"
                    ],
                    "correct": 1,
                    "explanation": "High-risk mechanisms include a fall >10 feet, high-speed crash and electrocution."
                },
                {
                    "q": "Which SpO2 is listed as hypoxia among the red flags?",
                    "options": [
                        "Below 90%",
                        "Below 94%",
                        "Below 98%",
                        "Below 85%"
                    ],
                    "correct": 1,
                    "explanation": "Hypoxia: SpO2 <94%."
                },
                {
                    "q": "In DCAP BLS TIC, what does 'I' stand for?",
                    "options": [
                        "Inflammation",
                        "Instability",
                        "Infection",
                        "Injury"
                    ],
                    "correct": 1,
                    "explanation": "DCAP BLS TIC: Deformities, Contusions, Abrasions, Punctures, Burns, Lacerations, Swelling, Tenderness, Instability, Crepitus."
                },
                {
                    "q": "In DCAP BLS TIC, what does the 'C' at the end stand for?",
                    "options": [
                        "Contusions",
                        "Crepitus",
                        "Circulation",
                        "Cyanosis"
                    ],
                    "correct": 1,
                    "explanation": "The final C is Crepitus (the first C is Contusions)."
                },
                {
                    "q": "In SAMPLE, what does 'L' stand for?",
                    "options": [
                        "Last oral intake",
                        "Level of consciousness",
                        "Location of pain",
                        "Last menstrual period"
                    ],
                    "correct": 0,
                    "explanation": "SAMPLE: Symptoms, Allergies, Medications, Past history, Last oral intake, Events."
                },
                {
                    "q": "In OPQRST, what does 'R' stand for?",
                    "options": [
                        "Rate",
                        "Radiation",
                        "Rhythm",
                        "Relief"
                    ],
                    "correct": 1,
                    "explanation": "OPQRST: Onset, Provocation, Quality, Radiation, Severity, Time."
                },
                {
                    "q": "What should you ask females of childbearing age in the past history?",
                    "options": [
                        "Nothing extra",
                        "Possible or recent pregnancy and the first day of the last menstrual period",
                        "Number of children only",
                        "Contraception brand"
                    ],
                    "correct": 1,
                    "explanation": "Inquire about potential or recent pregnancy and the date of the first day of the last menstrual cycle."
                },
                {
                    "q": "Which pain scale is used for children under 3 years?",
                    "options": [
                        "0–10 numeric",
                        "Wong-Baker Faces",
                        "FLACC",
                        "GCS"
                    ],
                    "correct": 2,
                    "explanation": "FLACC for pediatric patients under 3 years."
                },
                {
                    "q": "Which pain scale is used for non-verbal patients?",
                    "options": [
                        "Wong-Baker Faces",
                        "FLACC",
                        "AVPU",
                        "OPQRST"
                    ],
                    "correct": 0,
                    "explanation": "Wong-Baker Faces for non-verbal patients."
                },
                {
                    "q": "Which device should you look for during the secondary survey?",
                    "options": [
                        "Fitness tracker",
                        "LVAD, pacemaker/defibrillator, insulin pump, dialysis fistula",
                        "Hearing aid only",
                        "Glasses"
                    ],
                    "correct": 1,
                    "explanation": "Evaluate for medical equipment such as pacemaker/defibrillator, LVAD, insulin pump and dialysis fistula."
                },
                {
                    "q": "When should IV access be established?",
                    "options": [
                        "In every patient",
                        "If needed for treatment or the patient is at risk of deterioration",
                        "Only in cardiac arrest",
                        "Only after reaching hospital"
                    ],
                    "correct": 1,
                    "explanation": "Establish IV access if indicated, or in patients at risk of deterioration."
                },
                {
                    "q": "IV access fails. What is indicated?",
                    "options": [
                        "Give up",
                        "Intraosseous access",
                        "Intramuscular fluids",
                        "Subcutaneous line"
                    ],
                    "correct": 1,
                    "explanation": "IO access is indicated if IV access fails or is impractical."
                },
                {
                    "q": "In which patients is temperature management especially important?",
                    "options": [
                        "Minor injuries",
                        "Severe trauma, sepsis and environmental emergencies",
                        "Anxiety",
                        "Headache"
                    ],
                    "correct": 1,
                    "explanation": "Prevent hypo/hyperthermia especially in severe trauma, sepsis and environmental emergencies."
                },
                {
                    "q": "Who must you confirm the receiving facility with before departing?",
                    "options": [
                        "The patient's family",
                        "Dispatch 2",
                        "Tele-EMS",
                        "The police"
                    ],
                    "correct": 1,
                    "explanation": "Confirm the receiving facility with Dispatch 2 prior to departing."
                },
                {
                    "q": "When should Airwing be considered?",
                    "options": [
                        "Any patient over 65",
                        "Time-critical patients when ground transport exceeds 30 minutes",
                        "All trauma",
                        "Violent patients"
                    ],
                    "correct": 1,
                    "explanation": "Consider Airwing for time-critical conditions when ground transport time exceeds 30 minutes."
                },
                {
                    "q": "Which patients will Airwing NOT transport?",
                    "options": [
                        "Stroke",
                        "Imminent birth and violent patients",
                        "Children",
                        "Burns"
                    ],
                    "correct": 1,
                    "explanation": "Airwing will not provide transport for imminent birth or violent patients."
                },
                {
                    "q": "Which handover format does DCAS use?",
                    "options": [
                        "SBAR",
                        "IMIST-AMBO",
                        "MIST",
                        "SOAP"
                    ],
                    "correct": 1,
                    "explanation": "Hand over in the IMIST-AMBO format."
                },
                {
                    "q": "In IMIST-AMBO, what does the first 'M' stand for?",
                    "options": [
                        "Medications",
                        "Mechanism / medical complaint",
                        "Monitoring",
                        "Mental status"
                    ],
                    "correct": 1,
                    "explanation": "Identification, Mechanism/Medical complaint, Injuries/Illness, Signs, Symptoms, Treatment, Allergies, Medications, Background, Other."
                },
                {
                    "q": "From what age may a patient with full capacity refuse treatment and transfer?",
                    "options": [
                        "Above 13",
                        "Above 16",
                        "Above 18",
                        "Above 21"
                    ],
                    "correct": 2,
                    "explanation": "Patients above 18 years with full mental capacity have the right to refuse."
                },
                {
                    "q": "What defines full mental capacity in CPG 1.1?",
                    "options": [
                        "GCS 15 only",
                        "Able to understand, retain and repeat the information given",
                        "Able to walk",
                        "Accompanied by family"
                    ],
                    "correct": 1,
                    "explanation": "The patient must be able to understand, retain and repeat information told to them."
                },
                {
                    "q": "Are advance care directives recognised by DCAS crews in Dubai?",
                    "options": [
                        "Yes, always",
                        "No, not in the prehospital environment",
                        "Only if signed by two doctors",
                        "Only for children"
                    ],
                    "correct": 1,
                    "explanation": "Advance care directives / living wills are not recognised in the prehospital environment in Dubai at the time of publication."
                },
                {
                    "q": "What age defines a pediatric patient in Dubai under CPG 1.1?",
                    "options": [
                        "Under 12",
                        "13 years or younger",
                        "Under 16",
                        "Under 18"
                    ],
                    "correct": 1,
                    "explanation": "Pediatrics in Dubai are 13 years of age or younger."
                },
                {
                    "q": "What age defines a geriatric patient in Dubai?",
                    "options": [
                        "60 or older",
                        "65 or older",
                        "70 or older",
                        "75 or older"
                    ],
                    "correct": 1,
                    "explanation": "Geriatrics: 65 years or older."
                },
                {
                    "q": "What tool estimates a child's weight for drugs and equipment?",
                    "options": [
                        "Broselow length-based tape",
                        "APGAR",
                        "Rule of nines",
                        "FLACC"
                    ],
                    "correct": 0,
                    "explanation": "Use a length-based tape (Broselow) to estimate weight."
                },
                {
                    "q": "Which patients may need reduced drug doses?",
                    "options": [
                        "Athletes",
                        "Renal or hepatic disease",
                        "Smokers",
                        "Pregnant women only"
                    ],
                    "correct": 1,
                    "explanation": "Reduced doses may apply in renal disease (dialysis, chronic renal insufficiency) or hepatic disease (severe cirrhosis, end-stage liver disease)."
                },
                {
                    "q": "What is the normal systolic BP range for a newborn?",
                    "options": [
                        "60–76 mmHg",
                        "67–84 mmHg",
                        "72–104 mmHg",
                        "39–59 mmHg"
                    ],
                    "correct": 1,
                    "explanation": "Newborn: 67–84 mmHg. 60–76 is preterm 1–3 kg."
                },
                {
                    "q": "What is the normal respiratory rate for patients 15 years or older?",
                    "options": [
                        "12–20",
                        "15–20",
                        "18–30",
                        "22–34"
                    ],
                    "correct": 1,
                    "explanation": "15 years or older: 15–20 breaths/min."
                },
                {
                    "q": "What is the normal awake pulse for patients 15 years or older?",
                    "options": [
                        "50–90",
                        "60–100",
                        "75–118",
                        "80–140"
                    ],
                    "correct": 1,
                    "explanation": "15 years or older: 60–100 beats/min awake (50–90 asleep)."
                },
                {
                    "q": "What is the normal systolic BP range for a child of 6–10 years?",
                    "options": [
                        "89–112",
                        "97–115",
                        "102–120",
                        "110–131"
                    ],
                    "correct": 1,
                    "explanation": "6–10 years: 97–115 mmHg."
                },
                {
                    "q": "How does CPG 1.1 define hypotension in children and adults?",
                    "options": [
                        "SBP below 100 always",
                        "SBP below the lower limit for age in the table",
                        "Diastolic below 60",
                        "Any SBP below 120"
                    ],
                    "correct": 1,
                    "explanation": "Hypotension is a systolic BP below the lower limit of the chart for the age group."
                },
                {
                    "q": "In the adult GCS, 'Confused and converses' scores:",
                    "options": [
                        "5",
                        "4",
                        "3",
                        "2"
                    ],
                    "correct": 1,
                    "explanation": "Verbal: 5 orientated, 4 confused, 3 inappropriate words, 2 incomprehensible, 1 none."
                },
                {
                    "q": "A child under 4 who 'cries but is consolable' scores what verbal GCS?",
                    "options": [
                        "5",
                        "4",
                        "3",
                        "2"
                    ],
                    "correct": 1,
                    "explanation": "Pediatric verbal: 5 appropriate words/social smile, 4 cries but consolable, 3 persistently irritable, 2 moans to pain, 1 none."
                }
            ],
            "flashcards": [
                {
                    "category": "Approach",
                    "question": "Primary survey sequence: medical?",
                    "answer": "A-B-C: Airway, Breathing, Circulation."
                },
                {
                    "category": "Approach",
                    "question": "Primary survey sequence: trauma?",
                    "answer": "C-A-B-C: Catastrophic hemorrhage / C-spine, Airway, Breathing, Circulation."
                },
                {
                    "category": "Approach",
                    "question": "Sequence in cardiac arrest?",
                    "answer": "C-A-B: Compressions, Airway, Breathing."
                },
                {
                    "category": "Approach",
                    "question": "General impression?",
                    "answer": "Appearance, breathing and activity, formed on arrival. In children: the Pediatric Assessment Triangle."
                },
                {
                    "category": "Scene",
                    "question": "Scene safety covers?",
                    "answer": "Environmental, violence and chemical hazards; appropriate PPE; number of patients and extra resources."
                },
                {
                    "category": "Oxygen",
                    "question": "SpO2 target with supplemental oxygen?",
                    "answer": "94–98% (flowchart: maintain >94%)."
                },
                {
                    "category": "Oxygen",
                    "question": "Nasal cannula: flow and use?",
                    "answer": "2–6 L/min for mild hypoxia."
                },
                {
                    "category": "Oxygen",
                    "question": "Non-rebreather mask: flow and use?",
                    "answer": "10–15 L/min for moderate to severe hypoxia."
                },
                {
                    "category": "Oxygen",
                    "question": "Inadequate ventilation?",
                    "answer": "BVM."
                },
                {
                    "category": "Oxygen",
                    "question": "Where to avoid hyperoxia especially?",
                    "answer": "COPD and suspected stroke."
                },
                {
                    "category": "Airway",
                    "question": "Airway opening and adjuncts?",
                    "answer": "Head tilt/chin lift, jaw thrust, suction; OPA/NPA, supraglottic, ETT (Airway Management CPG)."
                },
                {
                    "category": "Airway",
                    "question": "Tracheostomy or laryngectomy?",
                    "answer": "Remove anything obstructing the opening, keep prescribed oxygen flowing, reposition head and neck."
                },
                {
                    "category": "Circulation",
                    "question": "Control of major external bleeding?",
                    "answer": "Direct pressure, tourniquets, hemostatic agents."
                },
                {
                    "category": "Circulation",
                    "question": "Perfusion assessment?",
                    "answer": "Carotid and radial pulse rate and quality, skin color and temperature, capillary refill."
                },
                {
                    "category": "Disability",
                    "question": "Disability step includes?",
                    "answer": "Manual C-spine restriction if trauma suspected, AVPU, motor and sensory function, glucose for altered mental status or stroke, BEFAST if stroke suspected."
                },
                {
                    "category": "Glucose",
                    "question": "Glucose threshold for the Hypoglycemia CPG?",
                    "answer": "Below 70 mg/dl."
                },
                {
                    "category": "ALS back-up",
                    "question": "When to request ALS back-up?",
                    "answer": "When advanced skills or interventions are needed, within 5 minutes of arrival (KPI: within 1 minute of patient contact)."
                },
                {
                    "category": "ALS back-up",
                    "question": "Transfer time under 10 minutes?",
                    "answer": "If ALS is not already dispatched, requesting back-up is usually not appropriate: go directly to hospital."
                },
                {
                    "category": "ALS back-up",
                    "question": "Can a back-up request be cancelled?",
                    "answer": "Yes, e.g. if the patient improves or the ambulance will reach hospital much sooner."
                },
                {
                    "category": "ALS back-up",
                    "question": "Stable red-priority criteria?",
                    "answer": "Managed with BLS, acceptable vital signs, not expected to deteriorate during transfer, no urgent ALS intervention needed."
                },
                {
                    "category": "ALS back-up",
                    "question": "Examples of stable red?",
                    "answer": "Controlled arterial limb bleeding; uncomplicated CVA."
                },
                {
                    "category": "Triage",
                    "question": "Triage colours?",
                    "answer": "Life threatening: Red. Serious: Yellow. Minor: Green."
                },
                {
                    "category": "Vitals",
                    "question": "Full baseline vital signs?",
                    "answer": "Pulse, BP, respiratory rate, temperature, SpO2, glucose and EtCO2 if indicated, AVPU and GCS."
                },
                {
                    "category": "Monitoring",
                    "question": "Cardiac or respiratory compromise?",
                    "answer": "Pulse oximetry, prompt 12-lead ECG, continuous cardiac monitoring; consider waveform capnography (essential for critical and invasive airway patients)."
                },
                {
                    "category": "Red flags",
                    "question": "CPG 1.1 red flags?",
                    "answer": "Apnea, pulselessness, severe hemorrhage; altered mental status or neuro deficit; SpO2 <94%, SBP <90 mmHg; high-risk mechanism."
                },
                {
                    "category": "Red flags",
                    "question": "High-risk mechanisms?",
                    "answer": "Fall >10 feet, high-speed crash, electrocution."
                },
                {
                    "category": "Secondary survey",
                    "question": "DCAP BLS TIC?",
                    "answer": "Deformities, Contusions, Abrasions, Punctures/Penetrations, Burns, Lacerations, Swelling, Tenderness, Instability, Crepitus."
                },
                {
                    "category": "Secondary survey",
                    "question": "Medical devices to look for?",
                    "answer": "Pacemaker/defibrillator, LVAD, insulin pump, dialysis fistula."
                },
                {
                    "category": "History",
                    "question": "SAMPLE?",
                    "answer": "Symptoms, Allergies, Medications, Past history, Last oral intake, Events."
                },
                {
                    "category": "History",
                    "question": "OPQRST?",
                    "answer": "Onset, Provocation, Quality, Radiation, Severity, Time."
                },
                {
                    "category": "History",
                    "question": "Extra question for females of childbearing age?",
                    "answer": "Possible or recent pregnancy and the first day of the last menstrual period."
                },
                {
                    "category": "Pain",
                    "question": "Pain scales?",
                    "answer": "0–10 scale; Wong-Baker Faces for non-verbal patients; FLACC for children under 3."
                },
                {
                    "category": "Access",
                    "question": "When to gain IV access?",
                    "answer": "If needed for treatment, or the patient is at risk of deterioration."
                },
                {
                    "category": "Access",
                    "question": "When is IO access indicated?",
                    "answer": "When IV access fails or is impractical."
                },
                {
                    "category": "Temperature",
                    "question": "Where is temperature management key?",
                    "answer": "Severe trauma, sepsis and environmental emergencies; use passive warming or cooling."
                },
                {
                    "category": "Reassessment",
                    "question": "Red-priority reassessment?",
                    "answer": "Every 5 minutes."
                },
                {
                    "category": "Reassessment",
                    "question": "Yellow-priority reassessment?",
                    "answer": "Every 10 minutes (management text)."
                },
                {
                    "category": "Reassessment",
                    "question": "Green-priority reassessment?",
                    "answer": "Every 15 minutes."
                },
                {
                    "category": "Reassessment",
                    "question": "What does reassessment include?",
                    "answer": "LOC, ABC, vital signs, condition-specific signs, interventions (e.g. IV patency), response to treatment, trends."
                },
                {
                    "category": "Reassessment",
                    "question": "When can routine glucose rechecks be skipped?",
                    "answer": "Acceptable glucose and no clinical suspicion of hypo- or hyperglycemia."
                },
                {
                    "category": "Tele-EMS",
                    "question": "When to consult Tele-EMS?",
                    "answer": "Complex or deteriorating conditions."
                },
                {
                    "category": "Transport",
                    "question": "Confirm receiving facility with?",
                    "answer": "Dispatch 2, before departing."
                },
                {
                    "category": "Transport",
                    "question": "Choosing a hospital?",
                    "answer": "By condition, e.g. trauma center for severe injuries, stroke center for suspected stroke."
                },
                {
                    "category": "Airwing",
                    "question": "When to consider Airwing?",
                    "answer": "Time-critical conditions when ground transport exceeds 30 minutes."
                },
                {
                    "category": "Airwing",
                    "question": "Airwing will not transport?",
                    "answer": "Imminent birth and violent patients."
                },
                {
                    "category": "Handover",
                    "question": "IMIST-AMBO?",
                    "answer": "Identification, Mechanism/Medical complaint, Injuries/Illness, Signs, Symptoms, Treatment, Allergies, Medications, Background, Other."
                },
                {
                    "category": "Rights",
                    "question": "Who may refuse treatment and transfer?",
                    "answer": "Patients above 18 years with full mental capacity (Refusal of Transfer CPG)."
                },
                {
                    "category": "Rights",
                    "question": "Full mental capacity means?",
                    "answer": "Able to understand, retain and repeat the information given."
                },
                {
                    "category": "Rights",
                    "question": "Advance care directives in Dubai?",
                    "answer": "Not recognised in the prehospital environment at the time of publication."
                },
                {
                    "category": "Ages",
                    "question": "Pediatric age in Dubai?",
                    "answer": "13 years or younger."
                },
                {
                    "category": "Ages",
                    "question": "Geriatric age in Dubai?",
                    "answer": "65 years or older."
                },
                {
                    "category": "Pediatrics",
                    "question": "Estimating a child's weight?",
                    "answer": "Length-based (Broselow) tape."
                },
                {
                    "category": "Dosing",
                    "question": "When may reduced drug doses apply?",
                    "answer": "Renal disease (dialysis, chronic renal insufficiency) or hepatic disease (severe cirrhosis, end-stage liver disease)."
                },
                {
                    "category": "Critical patients",
                    "question": "Staffing for critical patients?",
                    "answer": "Ideally one or two clinicians focused on the patient; treatment must not slow extrication or delay transport."
                },
                {
                    "category": "Infection control",
                    "question": "Infection control?",
                    "answer": "Standard precautions (PPE, hand hygiene); enhanced precautions for suspected TB, MRSA and similar."
                },
                {
                    "category": "Normal values",
                    "question": "Normal adult (15+) pulse, RR and SBP?",
                    "answer": "Pulse 60–100 awake (50–90 asleep), RR 15–20, SBP 110–131."
                },
                {
                    "category": "Normal values",
                    "question": "Newborn pulse, RR and SBP?",
                    "answer": "Pulse 100–205 awake (85–160 asleep), RR 30–60, SBP 67–84."
                },
                {
                    "category": "Normal values",
                    "question": "Up to 1 year: pulse, RR and SBP?",
                    "answer": "Pulse 100–190 awake (90–160 asleep), RR 30–60, SBP 72–104."
                },
                {
                    "category": "Normal values",
                    "question": "6–10 years: pulse, RR and SBP?",
                    "answer": "Pulse 75–140 awake (58–90 asleep), RR 18–30, SBP 97–115."
                },
                {
                    "category": "Normal values",
                    "question": "How are hypotension and tachycardia defined?",
                    "answer": "Against the age chart: hypotension below the lower SBP limit; tachycardia above the upper pulse limit."
                },
                {
                    "category": "GCS",
                    "question": "GCS eye opening scores?",
                    "answer": "4 spontaneous, 3 to voice, 2 to pain, 1 none."
                },
                {
                    "category": "GCS",
                    "question": "Adult GCS verbal scores?",
                    "answer": "5 orientated, 4 confused, 3 inappropriate words, 2 incomprehensible, 1 none."
                },
                {
                    "category": "GCS",
                    "question": "GCS motor scores?",
                    "answer": "6 obeys, 5 localises, 4 withdraws, 3 abnormal flexion, 2 abnormal extension, 1 none."
                },
                {
                    "category": "KPI",
                    "question": "CPG 1.1 KPIs?",
                    "answer": "Tourniquet for uncontrolled arterial limb bleeding; ALS back-up requested within 1 minute of patient contact (when indicated)."
                }
            ],
            "critical": [
                {
                    "id": "crit_1_1_1",
                    "scenario": "A 45-year-old man has a partial leg amputation after an industrial accident. Bright red blood is spurting from the thigh. He is conscious and talking.",
                    "question": "What is your first action?",
                    "options": [
                        {
                            "t": "Apply a tourniquet",
                            "f": "Correct. Trauma follows C-A-B-C: catastrophic hemorrhage first. A tourniquet for uncontrolled arterial limb bleeding is a KPI."
                        },
                        {
                            "t": "Assess the airway",
                            "f": "He is talking, so the airway is open. Catastrophic bleeding comes first in trauma."
                        },
                        {
                            "t": "Take a full set of vital signs",
                            "f": "Vital signs come after life threats are controlled."
                        },
                        {
                            "t": "Insert an IV line",
                            "f": "Control the bleeding first."
                        }
                    ],
                    "correct": 0,
                    "explanation": "In trauma the primary survey is C-A-B-C: catastrophic hemorrhage and C-spine first. Control major external bleeding with direct pressure, tourniquets or hemostatic agents.",
                    "kpi": "Apply a tourniquet for uncontrolled arterial limb bleeding."
                },
                {
                    "id": "crit_1_1_2",
                    "scenario": "You are a BLS crew with a 70-year-old man with sudden right-sided weakness and slurred speech that started 40 minutes ago. Airway clear, SpO2 96%, BP 150/90, glucose normal. The stroke center is 8 minutes away and no ALS unit has been dispatched.",
                    "question": "What is the best plan for ALS back-up?",
                    "options": [
                        {
                            "t": "Request ALS back-up and wait on scene",
                            "f": "With a transfer time under 10 minutes and no ALS unit dispatched, waiting is usually not appropriate."
                        },
                        {
                            "t": "Transfer directly to the stroke center, confirming it with Dispatch 2",
                            "f": "Correct. He is a stable red patient (uncomplicated CVA) and the hospital is under 10 minutes away."
                        },
                        {
                            "t": "Call Airwing",
                            "f": "Airwing is for time-critical patients when ground transport exceeds 30 minutes."
                        },
                        {
                            "t": "Wait for Tele-EMS advice before moving",
                            "f": "Tele-EMS is for complex or deteriorating conditions; do not delay transport."
                        }
                    ],
                    "correct": 1,
                    "explanation": "An uncomplicated CVA managed with BLS, with acceptable vital signs, can be stable red. With a transfer time under 10 minutes and no ALS unit dispatched, transfer directly. Complete BEFAST and confirm the stroke center with Dispatch 2.",
                    "kpi": "Request ALS back-up within 1 minute of patient contact (when indicated)."
                },
                {
                    "id": "crit_1_1_3",
                    "scenario": "A 58-year-old woman is drowsy and confused at home. She responds only to voice. SpO2 95%, pulse 92, BP 128/80.",
                    "question": "Which check must you do in the primary survey?",
                    "options": [
                        {
                            "t": "Blood glucose",
                            "f": "Correct. Check glucose in altered mental status; below 70 mg/dl go to the Hypoglycemia CPG."
                        },
                        {
                            "t": "Temperature only",
                            "f": "Temperature is part of the baseline vitals, but glucose is the priority check in altered mental status."
                        },
                        {
                            "t": "A pain score",
                            "f": "Not the priority in a confused patient."
                        },
                        {
                            "t": "Nothing until hospital",
                            "f": "Altered mental status needs a glucose check now."
                        }
                    ],
                    "correct": 0,
                    "explanation": "Altered mental status (responding to voice only) is a red flag. Check blood glucose; below 70 mg/dl go to the Hypoglycemia CPG. If stroke is suspected, complete BEFAST and go to the Stroke CPG.",
                    "kpi": "Request ALS back-up within 1 minute of patient contact (when indicated)."
                },
                {
                    "id": "crit_1_1_4",
                    "scenario": "A patient with time-critical injuries is at a remote desert site. Ground transport to the nearest trauma center would take 50 minutes. The patient is calm and cooperative.",
                    "question": "What should you consider?",
                    "options": [
                        {
                            "t": "Airwing transport",
                            "f": "Correct. Consider Airwing for time-critical conditions when ground transport exceeds 30 minutes."
                        },
                        {
                            "t": "Ground transport only",
                            "f": "Ground transport exceeds 30 minutes for a time-critical patient: Airwing should be considered."
                        },
                        {
                            "t": "Treat and leave on scene",
                            "f": "Time-critical injuries need definitive care."
                        },
                        {
                            "t": "Wait for the patient to improve",
                            "f": "Do not delay transport for a time-critical patient."
                        }
                    ],
                    "correct": 0,
                    "explanation": "Consider air medical transport (Airwing), if available, for time-critical conditions where ground transport exceeds 30 minutes. Airwing does not transport imminent births or violent patients.",
                    "kpi": "Request ALS back-up within 1 minute of patient contact (when indicated)."
                }
            ]
        },
        {
            "id": "c1s2",
            "shortTitle": "1.2 Documentation",
            "guide": {
                "cpg": "1.2",
                "group": "universal",
                "groupLabel": "Universal Care",
                "title": "Patient Care Documentation",
                "lead": "The approved abbreviations for the electronic Patient Care Record (ePCR). Use only these, so every record reads the same to the next clinician. CPG 1.2 refers to the DCAS Manual for Electronic Patient Care Reporting (DCAS/ADMIN/084).",
                "source": {
                    "label": "CPG 1.2",
                    "pages": "27–28",
                    "pdf": "../pdf_sections/1_2_Patient_Care_Documentation.pdf"
                },
                "sections": [
                    {
                        "type": "table",
                        "title": "Clinical abbreviations",
                        "icon": "clipboard-list",
                        "columns": [
                            "Abbreviation",
                            "Meaning"
                        ],
                        "rows": [
                            [
                                "ECG",
                                "Electrocardiogram"
                            ],
                            [
                                "ETA",
                                "Estimated Time of Arrival"
                            ],
                            [
                                "ETCO2",
                                "End Tidal Carbon Dioxide"
                            ],
                            [
                                "GCS",
                                "Glasgow Coma Scale"
                            ],
                            [
                                "HR",
                                "Heart Rate"
                            ],
                            [
                                "IO",
                                "Intraosseous"
                            ],
                            [
                                "IV",
                                "Intravenous"
                            ],
                            [
                                "LOC",
                                "Level of Consciousness or Loss of Consciousness"
                            ],
                            [
                                "MI",
                                "Myocardial Infarction (heart attack)"
                            ],
                            [
                                "NPA",
                                "Nasopharyngeal Airway"
                            ],
                            [
                                "O/A",
                                "On arrival"
                            ],
                            [
                                "O/E",
                                "On examination"
                            ],
                            [
                                "O2",
                                "Oxygen"
                            ],
                            [
                                "OPA",
                                "Oropharyngeal Airway"
                            ],
                            [
                                "PR",
                                "Pulse Rate"
                            ],
                            [
                                "Pt",
                                "Patient"
                            ],
                            [
                                "RR",
                                "Respiratory Rate"
                            ],
                            [
                                "SOB",
                                "Shortness of Breath"
                            ],
                            [
                                "SpO2",
                                "Oxygen Saturation"
                            ],
                            [
                                "Temp",
                                "Temperature"
                            ],
                            [
                                "TIA",
                                "Transient Ischemic Attack"
                            ],
                            [
                                "Tx",
                                "Treatment or Transport"
                            ],
                            [
                                "VS",
                                "Vital Signs"
                            ]
                        ]
                    },
                    {
                        "type": "table",
                        "title": "Drug dose and medication abbreviations",
                        "icon": "pill",
                        "columns": [
                            "Abbreviation",
                            "Meaning"
                        ],
                        "rows": [
                            [
                                "g",
                                "Gram"
                            ],
                            [
                                "mg",
                                "Milligram"
                            ],
                            [
                                "mcg or μg",
                                "Microgram"
                            ],
                            [
                                "mL",
                                "Milliliter"
                            ],
                            [
                                "L",
                                "Liter"
                            ],
                            [
                                "IU",
                                "International Unit"
                            ],
                            [
                                "mEq",
                                "Milliequivalent"
                            ],
                            [
                                "inj",
                                "Injection"
                            ]
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Watch for double meanings",
                        "icon": "triangle-alert",
                        "tone": "alert",
                        "items": [
                            "<b>LOC</b> means level of consciousness or loss of consciousness: write it so the meaning is clear.",
                            "<b>Tx</b> means treatment or transport.",
                            "<b>PR</b> is pulse rate in this list."
                        ]
                    },
                    {
                        "type": "related",
                        "title": "Related CPGs",
                        "icon": "link",
                        "items": [
                            {
                                "label": "1.1 Universal Care (documentation and handover)",
                                "href": "c1.html?section=c1s1"
                            }
                        ]
                    }
                ]
            },
            "quiz": [
                {
                    "q": "In the DCAS abbreviation list, what does 'Tx' mean?",
                    "options": [
                        "Treatment or Transport",
                        "Transfusion",
                        "Tachycardia",
                        "Trauma"
                    ],
                    "correct": 0,
                    "explanation": "Tx = Treatment or Transport, so write the context clearly."
                },
                {
                    "q": "What does 'LOC' stand for in CPG 1.2?",
                    "options": [
                        "Level of Consciousness or Loss of Consciousness",
                        "Loss of Circulation",
                        "Left Occipital Contusion",
                        "Line of Care"
                    ],
                    "correct": 0,
                    "explanation": "LOC has two meanings in the list: level of consciousness or loss of consciousness."
                },
                {
                    "q": "What does 'O/E' mean?",
                    "options": [
                        "On examination",
                        "On emergency",
                        "Oxygen equivalent",
                        "Out of event"
                    ],
                    "correct": 0,
                    "explanation": "O/E = On examination; O/A = On arrival."
                },
                {
                    "q": "What does 'O/A' mean?",
                    "options": [
                        "Oral airway",
                        "On arrival",
                        "Oxygen administered",
                        "Open airway"
                    ],
                    "correct": 1,
                    "explanation": "O/A = On arrival."
                },
                {
                    "q": "Which abbreviation means microgram?",
                    "options": [
                        "mg",
                        "mcg or μg",
                        "mL",
                        "mEq"
                    ],
                    "correct": 1,
                    "explanation": "mcg or μg = microgram; mg = milligram."
                },
                {
                    "q": "What does 'IU' stand for?",
                    "options": [
                        "Intravenous unit",
                        "International Unit",
                        "Insulin unit",
                        "Intramuscular use"
                    ],
                    "correct": 1,
                    "explanation": "IU = International Unit."
                },
                {
                    "q": "What does 'NPA' stand for?",
                    "options": [
                        "Nasopharyngeal Airway",
                        "No Pulse Activity",
                        "Non-Paramedic Assist",
                        "Nebulised Pediatric Albuterol"
                    ],
                    "correct": 0,
                    "explanation": "NPA = Nasopharyngeal Airway; OPA = Oropharyngeal Airway."
                },
                {
                    "q": "What does 'TIA' stand for?",
                    "options": [
                        "Trauma in Abdomen",
                        "Transient Ischemic Attack",
                        "Total IV Access",
                        "Time In Ambulance"
                    ],
                    "correct": 1,
                    "explanation": "TIA = Transient Ischemic Attack."
                }
            ],
            "flashcards": [
                {
                    "category": "Abbreviations",
                    "question": "Tx?",
                    "answer": "Treatment or Transport."
                },
                {
                    "category": "Abbreviations",
                    "question": "LOC?",
                    "answer": "Level of Consciousness or Loss of Consciousness."
                },
                {
                    "category": "Abbreviations",
                    "question": "O/A and O/E?",
                    "answer": "On arrival; On examination."
                },
                {
                    "category": "Abbreviations",
                    "question": "ETCO2?",
                    "answer": "End Tidal Carbon Dioxide."
                },
                {
                    "category": "Abbreviations",
                    "question": "SOB?",
                    "answer": "Shortness of Breath."
                },
                {
                    "category": "Abbreviations",
                    "question": "VS, HR, PR, RR?",
                    "answer": "Vital Signs, Heart Rate, Pulse Rate, Respiratory Rate."
                },
                {
                    "category": "Abbreviations",
                    "question": "MI?",
                    "answer": "Myocardial Infarction (heart attack)."
                },
                {
                    "category": "Drug abbreviations",
                    "question": "mcg or μg?",
                    "answer": "Microgram."
                },
                {
                    "category": "Drug abbreviations",
                    "question": "mEq?",
                    "answer": "Milliequivalent."
                },
                {
                    "category": "Drug abbreviations",
                    "question": "IU and inj?",
                    "answer": "International Unit; Injection."
                }
            ],
            "critical": [
                {
                    "id": "crit_1_2_1",
                    "scenario": "You are writing up a patient who collapsed briefly at work and is now alert. You want to record both that he lost consciousness and his current level of consciousness.",
                    "question": "How should you record this?",
                    "options": [
                        {
                            "t": "Write 'LOC' for both",
                            "f": "In CPG 1.2, LOC means both level of consciousness and loss of consciousness, so using it twice is ambiguous."
                        },
                        {
                            "t": "Write the meaning out where LOC could be misread, e.g. 'brief loss of consciousness; now alert'",
                            "f": "Correct. LOC has two meanings in the approved list; make the meaning unambiguous."
                        },
                        {
                            "t": "Use any abbreviation colleagues understand",
                            "f": "Use the approved DCAS abbreviations only."
                        },
                        {
                            "t": "Leave it out of the ePCR",
                            "f": "Loss of consciousness is a key finding and must be documented."
                        }
                    ],
                    "correct": 1,
                    "explanation": "CPG 1.2 lists the approved ePCR abbreviations. Some carry two meanings (LOC, Tx), so write them in a way the next clinician cannot misread."
                }
            ]
        },
        {
            "id": "c1s3",
            "shortTitle": "1.3 Triage",
            "guide": {
                "cpg": "1.3",
                "group": "universal",
                "groupLabel": "Universal Care",
                "title": "Patient Triage Categories",
                "lead": "Every patient gets a triage category: Red (immediate), Yellow (urgent) or Green (delayed). Decide from the full assessment, not from one vital sign, and update it whenever the patient changes.",
                "source": {
                    "label": "CPG 1.3",
                    "pages": "29–33",
                    "pdf": "../pdf_sections/1_3_Patient_Triage_Categories.pdf"
                },
                "sections": [
                    {
                        "type": "criteria",
                        "title": "Who this applies to",
                        "icon": "user",
                        "include": [
                            "All patients EMS assess or treat, whatever the complaint."
                        ],
                        "exclude": [
                            "Patients deceased on arrival (black priority).",
                            "Mass-casualty incidents: use the S.T.A.R.T. Triage (MCI Triage) CPG."
                        ]
                    },
                    {
                        "type": "steps",
                        "title": "How to triage",
                        "icon": "list",
                        "steps": [
                            {
                                "title": "Primary survey",
                                "text": "As per the Universal Care CPG. The category may already be clear (e.g. no breathing)."
                            },
                            {
                                "title": "Secondary survey",
                                "text": "If the primary survey does not settle it, triage after the secondary survey."
                            },
                            {
                                "title": "Use clinical judgement",
                                "text": "Vital signs alone are poor indicators, especially for yellow and green. For example, SpO<sub>2</sub> 89% may be normal for a COPD patient and need not make them Red on that parameter alone."
                            },
                            {
                                "title": "Reassess and update",
                                "text": "Red every 5 minutes, Yellow every 10, Green every 15. When the category changes, communicate it and document it on the patient care report."
                            }
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "Categories can change",
                        "icon": "refresh-ccw",
                        "groups": [
                            {
                                "title": "Examples from the CPG",
                                "items": [
                                    "Unresponsive with hypoglycemia is Red. After glucose, conscious with a normal level: Yellow, or possibly Green.",
                                    "Normotensive (Yellow) who becomes hypotensive: now Red."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "Red priority: immediate",
                        "icon": "siren",
                        "tone": "alert",
                        "intro": "An immediately life-threatening condition.",
                        "groups": [
                            {
                                "title": "Neurological",
                                "items": [
                                    "GCS 9 or less, or progressive deterioration in GCS.",
                                    "Unresponsive or responds only to pain.",
                                    "Signs of stroke.",
                                    "Status epilepticus."
                                ]
                            },
                            {
                                "title": "Airway and breathing",
                                "items": [
                                    "Obstructed airway, or one needing intervention to prevent obstruction; severe stridor; airway edema.",
                                    "Severe respiratory distress or failure, or moderate distress not responding to initial treatment.",
                                    "SpO<sub>2</sub> &lt;90% on room air."
                                ]
                            },
                            {
                                "title": "Cardiovascular",
                                "items": [
                                    "Cardiac arrest (CPR) or post-cardiac arrest (ROSC).",
                                    "Adult heart rate &lt;50 or &gt;150.",
                                    "Adult systolic BP &lt;80 mmHg.",
                                    "Systolic BP &gt;200 or diastolic &gt;130 with symptoms.",
                                    "Signs of severe shock; STEMI; chest pain, dysrhythmia or ECG changes with significant signs of shock."
                                ]
                            },
                            {
                                "title": "Obstetrics and other medical",
                                "items": [
                                    "Presenting fetal part or prolapsed cord; heavy PV bleeding; pregnancy with systolic BP &gt;160 or diastolic &gt;110.",
                                    "Hypoglycemia &lt;54 mg/dl with symptoms; hyperglycemia &gt;324 mg/dl with symptoms; severe hypothermia &lt;28°C."
                                ]
                            },
                            {
                                "title": "Trauma",
                                "items": [
                                    "Polytrauma with signs of shock; suspected fracture of 2 or more long bones; pelvic fracture.",
                                    "Penetrating injury to the head, neck, chest, torso, or limbs proximal to the knee or elbow.",
                                    "Fracture or dislocation with signs of limb ischemia (altered sensation alone is not enough).",
                                    "Airway burns; burns &gt;25% TBSA; skull deformity; chest wall instability or flail segment.",
                                    "Spinal cord injury with motor or sensory loss; crushed, degloved, mangled or pulseless limb; amputation.",
                                    "Bleeding needing a tourniquet or wound packing with continuous pressure."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "Yellow priority: urgent",
                        "icon": "triangle-alert",
                        "intro": "Serious, but not immediately life threatening.",
                        "groups": [
                            {
                                "title": "Neurological and respiratory",
                                "items": [
                                    "TIA; GCS 10–14; post-seizure.",
                                    "Mild or moderate stridor or respiratory distress; SpO<sub>2</sub> 91–94% on room air."
                                ]
                            },
                            {
                                "title": "Cardiovascular",
                                "items": [
                                    "Moderate shock: systolic BP 81–109 mmHg, cool clammy skin, capillary refill &gt;2s, mild confusion or restlessness, heart rate &gt;100 but &lt;150, <b>and</b> improving with an initial fluid bolus.",
                                    "Adult systolic BP 81–109 mmHg.",
                                    "ECG abnormalities without STEMI or severe shock (e.g. NSTEMI, new LBBB, rate-controlled AF).",
                                    "Chest pain without ST elevation and without shock."
                                ]
                            },
                            {
                                "title": "Obstetrics and trauma",
                                "items": [
                                    "Uncomplicated active labor, contractions &lt;2 minutes apart.",
                                    "Polytrauma with normal or near-normal vital signs.",
                                    "Isolated fracture of one long bone (including femoral shaft and compound fractures) with no distal ischemia, no shock and bleeding controlled.",
                                    "Dislocation without distal limb ischemia; suspected spinal cord injury or need for spinal motion restriction."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Green priority: delayed",
                        "icon": "circle-check-big",
                        "intro": "Minor illness or injury.",
                        "items": [
                            "Vital signs within normal limits.",
                            "Isolated minor fractures; strains and sprains; minor abrasions; first-degree burns.",
                            "Lacerations with bleeding controlled without a tourniquet.",
                            "Fever without signs of sepsis or shock; headache with normal neurological findings."
                        ]
                    },
                    {
                        "type": "table",
                        "title": "Vital signs guide: adults",
                        "icon": "activity",
                        "columns": [
                            "",
                            "Red",
                            "Yellow",
                            "Green",
                            "Yellow",
                            "Red"
                        ],
                        "rows": [
                            [
                                "AVPU",
                                "P / U",
                                "V",
                                "A",
                                "",
                                ""
                            ],
                            [
                                "GCS",
                                "&lt;9",
                                "10–14",
                                "15",
                                "",
                                ""
                            ],
                            [
                                "Resp. rate",
                                "&lt;10",
                                "",
                                "11–20",
                                "21–29",
                                "&gt;30"
                            ],
                            [
                                "Heart rate",
                                "&lt;50",
                                "51–60",
                                "61–100",
                                "101–149",
                                "&gt;150"
                            ],
                            [
                                "Systolic BP",
                                "&lt;80",
                                "80–100",
                                "101–179",
                                "180–200",
                                "&gt;200"
                            ],
                            [
                                "SpO<sub>2</sub> (no O<sub>2</sub>)",
                                "&lt;90",
                                "91–94",
                                "&gt;94",
                                "",
                                ""
                            ]
                        ],
                        "notes": [
                            "A guide only: vital signs in isolation are poor indicators of severity."
                        ]
                    },
                    {
                        "type": "table",
                        "title": "Vital signs guide: older child, 3–12 years (95–150 cm)",
                        "icon": "activity",
                        "columns": [
                            "",
                            "Red",
                            "Yellow",
                            "Green",
                            "Yellow",
                            "Red"
                        ],
                        "rows": [
                            [
                                "AVPU",
                                "P / U",
                                "V",
                                "A",
                                "",
                                ""
                            ],
                            [
                                "GCS",
                                "&lt;9",
                                "10–14",
                                "15",
                                "",
                                ""
                            ],
                            [
                                "Resp. rate",
                                "&lt;15",
                                "15–16",
                                "17–21",
                                "22–26",
                                "&gt;27"
                            ],
                            [
                                "Heart rate",
                                "&lt;60",
                                "60–79",
                                "80–99",
                                "100–129",
                                "&gt;130"
                            ],
                            [
                                "SpO<sub>2</sub> (no O<sub>2</sub>)",
                                "&lt;90",
                                "91–94",
                                "&gt;94",
                                "",
                                ""
                            ]
                        ]
                    },
                    {
                        "type": "table",
                        "title": "Vital signs guide: younger child, under 3 years (under 95 cm)",
                        "icon": "baby",
                        "columns": [
                            "",
                            "Red",
                            "Yellow",
                            "Green",
                            "Yellow",
                            "Red"
                        ],
                        "rows": [
                            [
                                "AVPU",
                                "P / U",
                                "V",
                                "A",
                                "",
                                ""
                            ],
                            [
                                "GCS",
                                "&lt;9",
                                "10–14",
                                "15",
                                "",
                                ""
                            ],
                            [
                                "Resp. rate",
                                "&lt;20",
                                "20–25",
                                "26–39",
                                "40–49",
                                "&gt;50"
                            ],
                            [
                                "Heart rate",
                                "&lt;70",
                                "70–79",
                                "80–130",
                                "130–159",
                                "&gt;160"
                            ],
                            [
                                "SpO<sub>2</sub> (no O<sub>2</sub>)",
                                "&lt;90",
                                "91–94",
                                "&gt;94",
                                "",
                                ""
                            ]
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "Significant mechanism of injury (MOI)",
                        "icon": "ambulance",
                        "intro": "MOI does not change the triage category, but say it: e.g. \"Yellow Priority with Significant MOI\". Every such patient must go to an appropriate trauma center, and should get a clear recommendation to be transferred.",
                        "groups": [
                            {
                                "title": "High-risk road traffic accident",
                                "items": [
                                    "Partial or complete ejection; death in the same vehicle; rollover.",
                                    "Cabin intrusion &gt;12 inches/30 cm on the occupant side, &gt;18 inches/50 cm on any side, or need for extrication.",
                                    "Unrestrained child or unsecured safety seat; the patient is a child.",
                                    "Rider separated from bicycle, motorcycle, ATV, horse, etc.; pedestrian or rider thrown, run over or significantly hit.",
                                    "Speed &gt;40 km/hr unrestrained or &gt;60 km/hr restrained; any accident type consistent with severe injury."
                                ]
                            },
                            {
                                "title": "Falls",
                                "items": [
                                    "From height &gt;10 feet (all ages).",
                                    "&gt;1 meter (5 stairs) with head trauma.",
                                    "Low-level falls with significant head impact in children &lt;5 years or adults &gt;65 years."
                                ]
                            },
                            {
                                "title": "Special populations",
                                "items": [
                                    "Anticoagulant use; suspected child abuse; pregnancy &gt;20 weeks; burns with trauma."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Key performance indicator",
                        "icon": "chart-no-axes-column",
                        "items": [
                            "Assign a triage category to each patient encountered. Document the category on arrival and any change."
                        ]
                    },
                    {
                        "type": "related",
                        "title": "Related CPGs",
                        "icon": "link",
                        "items": [
                            {
                                "label": "1.1 Universal Care",
                                "href": "c1.html?section=c1s1"
                            },
                            {
                                "label": "11.1 START Triage (MCI)",
                                "href": "c11-1.html"
                            }
                        ]
                    }
                ]
            },
            "quiz": [
                {
                    "q": "How often is a red-priority patient reassessed?",
                    "options": [
                        "Every 5 minutes",
                        "Every 10 minutes",
                        "Every 15 minutes",
                        "Every 30 minutes"
                    ],
                    "correct": 0,
                    "explanation": "Red every 5 minutes, Yellow every 10, Green every 15."
                },
                {
                    "q": "How often is a yellow-priority patient reassessed?",
                    "options": [
                        "Every 5 minutes",
                        "Every 10 minutes",
                        "Every 15 minutes",
                        "Every 20 minutes"
                    ],
                    "correct": 1,
                    "explanation": "Yellow (serious): every 10 minutes."
                },
                {
                    "q": "Which category means an immediately life-threatening condition?",
                    "options": [
                        "Green",
                        "Yellow",
                        "Red",
                        "Black"
                    ],
                    "correct": 2,
                    "explanation": "Red = immediate; Yellow = urgent; Green = delayed."
                },
                {
                    "q": "Which patients are excluded from CPG 1.3?",
                    "options": [
                        "Children",
                        "Deceased on arrival and mass-casualty incidents",
                        "Pregnant women",
                        "Trauma patients"
                    ],
                    "correct": 1,
                    "explanation": "Deceased on arrival (black) and MCIs (use START Triage) are excluded."
                },
                {
                    "q": "A COPD patient has SpO2 89% and is otherwise well. Must they be Red on that alone?",
                    "options": [
                        "Yes, always",
                        "No – use clinical judgement; it may be normal for them",
                        "Only if over 65",
                        "Only at night"
                    ],
                    "correct": 1,
                    "explanation": "CPG 1.3's own example: 89% may be normal in COPD; not Red on that parameter alone."
                },
                {
                    "q": "An unresponsive hypoglycemic patient becomes alert with normal glucose after treatment. What happens to the triage category?",
                    "options": [
                        "Stays Red",
                        "Changes to Yellow (or possibly Green), documented",
                        "Becomes Black",
                        "Triage is not changed after treatment"
                    ],
                    "correct": 1,
                    "explanation": "Categories change with the patient; communicate and document the change."
                },
                {
                    "q": "Does a significant mechanism of injury change the triage category?",
                    "options": [
                        "Yes, always to Red",
                        "No, but it must be stated, e.g. 'Yellow with Significant MOI'",
                        "Yes, to Yellow",
                        "Only for children"
                    ],
                    "correct": 1,
                    "explanation": "MOI does not impact triage status, but must be highlighted when communicating it."
                },
                {
                    "q": "Where must patients with a significant MOI be transferred?",
                    "options": [
                        "Nearest clinic",
                        "An appropriate trauma center",
                        "Home with advice",
                        "Any hospital of their choice"
                    ],
                    "correct": 1,
                    "explanation": "All patients meeting significant MOI criteria must go to an appropriate trauma center."
                },
                {
                    "q": "Which fall is a significant MOI for all ages?",
                    "options": [
                        "Fall from standing",
                        "Fall from height >10 feet",
                        "Fall of 2 stairs",
                        "Slip on a wet floor"
                    ],
                    "correct": 1,
                    "explanation": "Fall from height >10 feet (all ages); also >1 meter (5 stairs) with head trauma."
                },
                {
                    "q": "Which cabin intrusion meets significant MOI criteria?",
                    "options": [
                        ">5 cm anywhere",
                        ">12 inches/30 cm on the occupant side",
                        "Any scratch",
                        ">2 inches on the bumper"
                    ],
                    "correct": 1,
                    "explanation": ">12 inches/30 cm occupant side, >18 inches/50 cm any side, or need for extrication."
                },
                {
                    "q": "What speed makes an RTA high risk for a restrained patient?",
                    "options": [
                        ">20 km/hr",
                        ">40 km/hr",
                        ">60 km/hr",
                        ">100 km/hr"
                    ],
                    "correct": 2,
                    "explanation": ">60 km/hr restrained; >40 km/hr unrestrained."
                },
                {
                    "q": "Which special population counts as significant MOI?",
                    "options": [
                        "Diabetes",
                        "Anticoagulant use",
                        "Asthma",
                        "Hypertension"
                    ],
                    "correct": 1,
                    "explanation": "Special populations: anticoagulant use, suspected child abuse, pregnancy >20 weeks, burns with trauma."
                },
                {
                    "q": "An adult has a GCS of 12. Which category does the vital signs guide suggest?",
                    "options": [
                        "Red",
                        "Yellow",
                        "Green",
                        "Black"
                    ],
                    "correct": 1,
                    "explanation": "GCS 10–14 is Yellow; 9 or less is Red."
                },
                {
                    "q": "An adult's heart rate is 155. Which category does the guide suggest?",
                    "options": [
                        "Green",
                        "Yellow",
                        "Red",
                        "No category"
                    ],
                    "correct": 2,
                    "explanation": "Adult heart rate >150 (or <50) is Red."
                },
                {
                    "q": "An adult's systolic BP is 75 mmHg. Which category?",
                    "options": [
                        "Green",
                        "Yellow",
                        "Red",
                        "Depends on age only"
                    ],
                    "correct": 2,
                    "explanation": "Adult systolic BP <80 mmHg is Red."
                },
                {
                    "q": "SpO2 on room air of 92% in an adult suggests:",
                    "options": [
                        "Red",
                        "Yellow",
                        "Green",
                        "Normal"
                    ],
                    "correct": 1,
                    "explanation": "SpO2 91–94% without oxygen is Yellow; <90% is Red."
                },
                {
                    "q": "Which is a Red-priority trauma finding?",
                    "options": [
                        "Isolated wrist fracture",
                        "Suspected fracture of 2 or more long bones",
                        "Ankle sprain",
                        "Minor abrasion"
                    ],
                    "correct": 1,
                    "explanation": "Two or more long-bone fractures is Red; one isolated long bone without ischemia or shock is Yellow."
                },
                {
                    "q": "A patient has an isolated femoral shaft fracture, no shock, no distal ischemia, bleeding controlled. Category?",
                    "options": [
                        "Red",
                        "Yellow",
                        "Green",
                        "Black"
                    ],
                    "correct": 1,
                    "explanation": "Isolated fracture of one long bone, including the femoral shaft, without ischemia or shock is Yellow."
                },
                {
                    "q": "Which defines moderate shock (Yellow) in CPG 1.3?",
                    "options": [
                        "SBP <80 and unresponsive",
                        "SBP 81–109, cool clammy skin, CRT >2s, HR >100 but <150, improving with a fluid bolus",
                        "Any tachycardia",
                        "Normal vital signs with pain"
                    ],
                    "correct": 1,
                    "explanation": "Moderate shock must also improve with the initial fluid bolus; otherwise consider Red."
                },
                {
                    "q": "Which is a Green-priority presentation?",
                    "options": [
                        "Headache with normal neurological findings",
                        "Signs of stroke",
                        "Heavy PV bleeding",
                        "STEMI"
                    ],
                    "correct": 0,
                    "explanation": "Headache with normal neurology, fever without sepsis or shock, sprains and minor injuries are Green."
                },
                {
                    "q": "Which hypoglycemia level with symptoms is Red?",
                    "options": [
                        "<70 mg/dl",
                        "<54 mg/dl",
                        "<90 mg/dl",
                        "<100 mg/dl"
                    ],
                    "correct": 1,
                    "explanation": "Red: hypoglycemia <54 mg/dl with symptoms."
                },
                {
                    "q": "What is the KPI in CPG 1.3?",
                    "options": [
                        "Reassess every 5 minutes",
                        "Assign a triage category to each patient encountered",
                        "Transport all patients",
                        "Call ALS for every red"
                    ],
                    "correct": 1,
                    "explanation": "KPI: assign a triage category to each patient encountered."
                }
            ],
            "flashcards": [
                {
                    "category": "Categories",
                    "question": "The three categories and their urgency?",
                    "answer": "Red: immediate. Yellow: urgent. Green: delayed."
                },
                {
                    "category": "Reassessment",
                    "question": "Reassessment intervals?",
                    "answer": "Red every 5 minutes, Yellow every 10, Green every 15."
                },
                {
                    "category": "Exclusions",
                    "question": "Who is excluded from CPG 1.3?",
                    "answer": "Deceased on arrival (black) and mass-casualty incidents (START Triage CPG)."
                },
                {
                    "category": "Judgement",
                    "question": "SpO2 89% in COPD?",
                    "answer": "May be normal for the patient: not Red on that parameter alone."
                },
                {
                    "category": "Changes",
                    "question": "When the category changes?",
                    "answer": "Communicate it and document it on the patient care report."
                },
                {
                    "category": "MOI",
                    "question": "Does significant MOI change the category?",
                    "answer": "No. State it (e.g. 'Yellow with Significant MOI') and transfer to an appropriate trauma center."
                },
                {
                    "category": "MOI",
                    "question": "Significant cabin intrusion?",
                    "answer": ">12 inches/30 cm occupant side, >18 inches/50 cm any side, or need for extrication."
                },
                {
                    "category": "MOI",
                    "question": "Significant speed?",
                    "answer": ">40 km/hr unrestrained; >60 km/hr restrained."
                },
                {
                    "category": "MOI",
                    "question": "Significant falls?",
                    "answer": ">10 feet (all ages); >1 meter (5 stairs) with head trauma; low falls with significant head impact in children <5 or adults >65."
                },
                {
                    "category": "MOI",
                    "question": "Special populations?",
                    "answer": "Anticoagulant use, suspected child abuse, pregnancy >20 weeks, burns with trauma."
                },
                {
                    "category": "Red",
                    "question": "Red neurological criteria?",
                    "answer": "GCS 9 or less or falling; responds only to pain or unresponsive; signs of stroke; status epilepticus."
                },
                {
                    "category": "Red",
                    "question": "Red cardiovascular criteria (adult)?",
                    "answer": "Arrest or ROSC; HR <50 or >150; SBP <80; SBP >200 or DBP >130 with symptoms; severe shock; STEMI."
                },
                {
                    "category": "Red",
                    "question": "Red medical thresholds?",
                    "answer": "Hypoglycemia <54 mg/dl or hyperglycemia >324 mg/dl with symptoms; hypothermia <28°C; SpO2 <90% on air."
                },
                {
                    "category": "Red",
                    "question": "Red obstetric criteria?",
                    "answer": "Presenting fetal part or prolapsed cord; heavy PV bleeding; SBP >160 or DBP >110 in pregnancy."
                },
                {
                    "category": "Red",
                    "question": "Burns that make a patient Red?",
                    "answer": "Airway burns, or burns >25% TBSA."
                },
                {
                    "category": "Yellow",
                    "question": "Moderate shock (Yellow)?",
                    "answer": "SBP 81–109, cool clammy skin, CRT >2s, mild confusion, HR >100 but <150, and improving with an initial fluid bolus."
                },
                {
                    "category": "Yellow",
                    "question": "Yellow neuro and respiratory?",
                    "answer": "TIA, GCS 10–14, post-seizure; mild or moderate stridor or distress; SpO2 91–94% on air."
                },
                {
                    "category": "Yellow",
                    "question": "Long-bone fracture: Yellow when?",
                    "answer": "One isolated long bone (including femoral shaft and compound) with no distal ischemia, no shock and bleeding controlled."
                },
                {
                    "category": "Green",
                    "question": "Green examples?",
                    "answer": "Normal vital signs; minor fractures, sprains, abrasions, first-degree burns; controlled lacerations; fever without sepsis; headache with normal neurology."
                },
                {
                    "category": "Vital signs guide",
                    "question": "Adult heart rate bands?",
                    "answer": "Red <50; Yellow 51–60; Green 61–100; Yellow 101–149; Red >150."
                },
                {
                    "category": "Vital signs guide",
                    "question": "Adult systolic BP bands?",
                    "answer": "Red <80; Yellow 80–100; Green 101–179; Yellow 180–200; Red >200."
                },
                {
                    "category": "KPI",
                    "question": "CPG 1.3 KPI?",
                    "answer": "Assign a triage category to each patient encountered."
                }
            ],
            "critical": [
                {
                    "id": "crit_1_3_1",
                    "scenario": "A 40-year-old woman has severe abdominal pain. GCS 15, BP 112/70, HR 96, RR 18, SpO2 97%. No signs of shock.",
                    "question": "What triage category fits best?",
                    "options": [
                        {
                            "t": "Red",
                            "f": "No Red criteria are present: vital signs are in the green bands and there is no shock."
                        },
                        {
                            "t": "Yellow or Green, decided by the full assessment",
                            "f": "Correct. Her vital signs are in the green bands, but vital signs alone are poor indicators; the full assessment decides between Yellow and Green."
                        },
                        {
                            "t": "Black",
                            "f": "Black is for patients deceased on arrival."
                        },
                        {
                            "t": "No category needed",
                            "f": "KPI: every patient gets a triage category."
                        }
                    ],
                    "correct": 1,
                    "explanation": "CPG 1.3: vital signs in isolation are poor indicators of severity, especially for Yellow and Green. Use clinical judgement and reassess (Yellow every 10 minutes, Green every 15).",
                    "kpi": "Assign a triage category to each patient encountered."
                },
                {
                    "id": "crit_1_3_2",
                    "scenario": "A restrained driver in a rollover at 90 km/hr walks around at the scene. Vital signs are normal and he has only a sore neck.",
                    "question": "How do you triage and communicate this patient?",
                    "options": [
                        {
                            "t": "Green; he can go home",
                            "f": "A rollover is a significant MOI: he must be recommended transfer to a trauma center."
                        },
                        {
                            "t": "Category from his assessment, stated with 'Significant MOI', and transfer to a trauma center",
                            "f": "Correct. MOI does not change the category but must be highlighted, and these patients go to an appropriate trauma center."
                        },
                        {
                            "t": "Red because of the mechanism",
                            "f": "MOI does not by itself change the triage category."
                        },
                        {
                            "t": "Black",
                            "f": "Black is only for patients deceased on arrival."
                        }
                    ],
                    "correct": 1,
                    "explanation": "Rollover, and speed >60 km/hr while restrained, are significant MOI criteria. Communicate e.g. 'Yellow Priority with Significant MOI' (sore neck suggests possible spinal injury) and transfer to an appropriate trauma center.",
                    "kpi": "Assign a triage category to each patient encountered."
                },
                {
                    "id": "crit_1_3_3",
                    "scenario": "A 60-year-old man is yellow priority with chest pain and normal BP. On reassessment his systolic BP is 76 mmHg and he is pale and sweaty.",
                    "question": "What do you do with his triage category?",
                    "options": [
                        {
                            "t": "Keep it Yellow, as first assigned",
                            "f": "Triage changes with the patient's condition."
                        },
                        {
                            "t": "Change to Red, communicate it and document the change",
                            "f": "Correct. Systolic BP <80 mmHg with signs of shock is Red; changes must be communicated and documented."
                        },
                        {
                            "t": "Change to Green",
                            "f": "He has deteriorated."
                        },
                        {
                            "t": "Wait for hospital to decide",
                            "f": "Update triage now and reassess every 5 minutes."
                        }
                    ],
                    "correct": 1,
                    "explanation": "A patient who becomes hypotensive moves from Yellow to Red. Record the initial category and every change, and reassess red patients every 5 minutes.",
                    "kpi": "Assign a triage category to each patient encountered."
                },
                {
                    "id": "crit_1_3_4",
                    "scenario": "A 7-year-old (about 125 cm) with a fever is alert. RR 30, HR 140, SpO2 95% on room air.",
                    "question": "What does the older-child vital signs guide suggest?",
                    "options": [
                        {
                            "t": "Green: all within limits",
                            "f": "RR 30 and HR 140 are outside the green bands for 3–12 years."
                        },
                        {
                            "t": "Red: RR >27 and HR >130 fall in the red bands",
                            "f": "Correct. For 3–12 years, RR >27 and HR >130 are in the red bands. Confirm with the full assessment."
                        },
                        {
                            "t": "Use the adult table",
                            "f": "Use the older-child table for 3–12 years (95–150 cm)."
                        },
                        {
                            "t": "Yellow because SpO2 is 95%",
                            "f": "SpO2 >94% is green, but RR and HR are in the red bands."
                        }
                    ],
                    "correct": 1,
                    "explanation": "Choose the table by age and height: older child 3–12 years (95–150 cm). The tables guide, and the full assessment decides.",
                    "kpi": "Assign a triage category to each patient encountered."
                }
            ]
        },
        {
            "id": "c1s4",
            "shortTitle": "1.4 Functional Needs",
            "guide": {
                "cpg": "1.4",
                "group": "universal",
                "groupLabel": "Universal Care",
                "title": "Functional Needs",
                "lead": "Patients with physical, sensory, cognitive or mental health needs get the same standard of care, adapted so you can communicate, assess and move them safely and with dignity.",
                "source": {
                    "label": "CPG 1.4",
                    "pages": "35–37",
                    "pdf": "../pdf_sections/1_4_Functional_Needs.pdf"
                },
                "sections": [
                    {
                        "type": "criteria",
                        "title": "Who this applies to",
                        "icon": "user",
                        "include": [
                            "Physical disabilities (e.g. mobility impairment, limb amputation).",
                            "Sensory impairments (e.g. visual or hearing).",
                            "Cognitive or intellectual disabilities (e.g. developmental delay, dementia).",
                            "Mental health conditions (e.g. schizophrenia, severe anxiety).",
                            "Anyone needing a modified assessment or treatment because of these."
                        ],
                        "exclude": [
                            "No functional need affecting prehospital care.",
                            "A complaint unrelated to the functional need that needs only standard care."
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Assessment",
                        "icon": "stethoscope",
                        "items": [
                            "<b>Identify the need:</b> self-report, family or bystanders, medical alert bracelets, visible devices (e.g. wheelchair, hearing aids). Note the specific impairment.",
                            "<b>Communication barriers:</b> language, sensory or cognitive (e.g. non-verbal, deaf, expressive aphasia). Ask the preferred method: sign language, written notes, lip reading.",
                            "<b>Assistive devices:</b> check presence and function (e.g. prosthesis, white cane, tracheostomy speaking valve) and whether they must travel with the patient or need special handling."
                        ]
                    },
                    {
                        "type": "steps",
                        "title": "Management",
                        "icon": "activity",
                        "steps": [
                            {
                                "title": "Primary survey, adapted",
                                "text": "As per Universal Care: e.g. modified jaw thrust for mobility-impaired patients, accessible bleeding control for sensory impairment, AVPU adjusted for communication or cognitive impairment."
                            },
                            {
                                "title": "Secondary survey, adapted",
                                "text": "Focused examination with simplified questions; OPQRST and SAMPLE using written or visual aids if needed."
                            },
                            {
                                "title": "Reassess vital signs",
                                "text": "Red (unstable) every 5 minutes; Yellow or Green (stable) every 15 minutes, accommodating sensory or physical limitations."
                            },
                            {
                                "title": "Communication support",
                                "text": "Translation cards, sign language or telephone interpreters; simplify explanations for cognitive impairment and check understanding."
                            },
                            {
                                "title": "Assistive devices",
                                "text": "Make sure devices go with the patient or are safely stored, and record type and function for handover."
                            },
                            {
                                "title": "Caregivers",
                                "text": "Involve family or caregivers for history, communication and calming, and confirm their role in disposition (treat at scene or transport)."
                            }
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Red flags",
                        "icon": "triangle-alert",
                        "tone": "alert",
                        "items": [
                            "The patient cannot communicate critical symptoms: risk of under-triage.",
                            "Unstable conditions (e.g. hypoxia, hypotension) complicated by functional needs: urgent transport.",
                            "No caregiver or assistive device, making disposition unsafe.",
                            "Service animal distress or uncontrolled behavior: plan alternative transport.",
                            "Suspected abuse or neglect: report it."
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "Safety considerations",
                        "icon": "shield",
                        "groups": [
                            {
                                "title": "Elderly (>65 years)",
                                "items": [
                                    "Dementia or hearing loss can complicate assessment: involve caregivers and simplify communication.",
                                    "Ensure adequate support at home before any non-transport decision."
                                ]
                            },
                            {
                                "title": "Pediatric (<13 years)",
                                "items": [
                                    "Age-appropriate aids (visual cues, parent involvement).",
                                    "Involve a parent or guardian to confirm understanding and follow-up."
                                ]
                            },
                            {
                                "title": "Capacity and abuse",
                                "items": [
                                    "Use several communication methods to get an accurate history and consent.",
                                    "Never assume a lack of capacity because of disability: assess and document.",
                                    "Watch for abuse or neglect (e.g. unexplained injuries, caregiver coercion)."
                                ]
                            },
                            {
                                "title": "Possible alternative causes",
                                "items": [
                                    "A non-verbal patient may look unresponsive.",
                                    "Functional needs can mask emergencies such as hypoglycemia or stroke."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Key performance indicator",
                        "icon": "chart-no-axes-column",
                        "items": [
                            "Identify and document functional needs in the patient care report."
                        ]
                    },
                    {
                        "type": "related",
                        "title": "Related CPGs",
                        "icon": "link",
                        "items": [
                            {
                                "label": "1.1 Universal Care",
                                "href": "c1.html?section=c1s1"
                            },
                            {
                                "label": "1.5 Treated at Scene",
                                "href": "c1.html?section=c1s5"
                            },
                            {
                                "label": "6.2 Abnormal Behavior",
                                "href": "c6-2.html"
                            }
                        ]
                    }
                ]
            },
            "quiz": [
                {
                    "q": "Which of these is a functional need covered by CPG 1.4?",
                    "options": [
                        "Isolated ankle sprain in a fit adult",
                        "Dementia",
                        "Seasonal allergy",
                        "Mild headache"
                    ],
                    "correct": 1,
                    "explanation": "Cognitive conditions such as dementia are functional needs; the others need standard care only."
                },
                {
                    "q": "How can functional needs be identified?",
                    "options": [
                        "Only from the dispatch note",
                        "Self-report, family, medical alert bracelets, visible assistive devices",
                        "Only by a doctor",
                        "They cannot be identified prehospital"
                    ],
                    "correct": 1,
                    "explanation": "Use self-report, family or bystander input, alert bracelets and visible devices."
                },
                {
                    "q": "A deaf patient prefers written notes. What should you do?",
                    "options": [
                        "Speak louder",
                        "Use their preferred method: written notes",
                        "Rely only on the family",
                        "Skip the history"
                    ],
                    "correct": 1,
                    "explanation": "Identify and use the preferred communication method (sign language, written notes, lip reading)."
                },
                {
                    "q": "How often does CPG 1.4 say to reassess a stable (yellow or green) patient with functional needs?",
                    "options": [
                        "Every 5 minutes",
                        "Every 10 minutes",
                        "Every 15 minutes",
                        "Every 30 minutes"
                    ],
                    "correct": 2,
                    "explanation": "CPG 1.4: Red every 5 minutes; Yellow/Green every 15 minutes. (The Universal Care CPG gives a shorter interval for Yellow.)"
                },
                {
                    "q": "What should happen to a patient's wheelchair or hearing aids?",
                    "options": [
                        "Leave them at home",
                        "They go with the patient or are safely stored, with details documented",
                        "Give them to a neighbour",
                        "Ignore them"
                    ],
                    "correct": 1,
                    "explanation": "Ensure assistive devices accompany the patient or are safely stored, and document type and function."
                },
                {
                    "q": "Which is a red flag in CPG 1.4?",
                    "options": [
                        "Patient prefers sign language",
                        "Patient cannot communicate critical symptoms",
                        "Patient uses a white cane",
                        "Caregiver present"
                    ],
                    "correct": 1,
                    "explanation": "Inability to communicate critical symptoms risks under-triage."
                },
                {
                    "q": "What should you do if you suspect abuse or neglect?",
                    "options": [
                        "Ignore it",
                        "Report it",
                        "Ask the caregiver to explain later",
                        "Only note it verbally"
                    ],
                    "correct": 1,
                    "explanation": "Suspected abuse or neglect in vulnerable patients requires reporting."
                },
                {
                    "q": "Can you assume a patient lacks capacity because of a disability?",
                    "options": [
                        "Yes",
                        "No – assess thoroughly and document",
                        "Only for intellectual disability",
                        "Only if non-verbal"
                    ],
                    "correct": 1,
                    "explanation": "Avoid assumptions about capacity based on disability."
                },
                {
                    "q": "A non-verbal patient appears unresponsive. What should you consider?",
                    "options": [
                        "They are definitely unconscious",
                        "Misinterpretation due to communication barriers, and masked emergencies like hypoglycemia or stroke",
                        "They are faking",
                        "No assessment is possible"
                    ],
                    "correct": 1,
                    "explanation": "Possible alternative causes: misinterpretation, or emergencies masked by functional needs."
                },
                {
                    "q": "What is the KPI of CPG 1.4?",
                    "options": [
                        "Transport all patients",
                        "Identify and document functional needs in the patient care report",
                        "Use sign language every time",
                        "Bring every device"
                    ],
                    "correct": 1,
                    "explanation": "KPI: identify and document functional needs in the patient care report."
                }
            ],
            "flashcards": [
                {
                    "category": "Scope",
                    "question": "Types of functional need?",
                    "answer": "Physical (mobility, amputation), sensory (vision, hearing), cognitive/intellectual (developmental delay, dementia), mental health (schizophrenia, severe anxiety)."
                },
                {
                    "category": "Assessment",
                    "question": "How to identify functional needs?",
                    "answer": "Self-report, family or bystanders, medical alert bracelets, visible assistive devices."
                },
                {
                    "category": "Assessment",
                    "question": "Communication methods to ask about?",
                    "answer": "Sign language, written notes, lip reading."
                },
                {
                    "category": "Assessment",
                    "question": "Assistive device checks?",
                    "answer": "Presence and function; whether it travels with the patient or needs special handling."
                },
                {
                    "category": "Management",
                    "question": "Primary survey adaptations?",
                    "answer": "e.g. modified jaw thrust for mobility impairment; accessible bleeding control; AVPU adjusted for communication or cognition."
                },
                {
                    "category": "Reassessment",
                    "question": "Reassessment in CPG 1.4?",
                    "answer": "Red every 5 minutes; Yellow/Green every 15 minutes."
                },
                {
                    "category": "Communication",
                    "question": "Communication support tools?",
                    "answer": "Translation cards, sign language, telephone interpreters; simplified explanations."
                },
                {
                    "category": "Red flags",
                    "question": "CPG 1.4 red flags?",
                    "answer": "Can't communicate symptoms; unstable condition; no caregiver or device; service animal distress; suspected abuse or neglect."
                },
                {
                    "category": "Safety",
                    "question": "Capacity and disability?",
                    "answer": "Never assume a lack of capacity from disability: assess and document."
                },
                {
                    "category": "KPI",
                    "question": "CPG 1.4 KPI?",
                    "answer": "Identify and document functional needs in the patient care report."
                }
            ],
            "critical": [
                {
                    "id": "crit_1_4_1",
                    "scenario": "A 12-year-old with autism is in a minor road traffic accident. He is screaming, rocking and covering his ears. His mother is with him. No obvious injuries.",
                    "question": "What is the most appropriate first approach?",
                    "options": [
                        {
                            "t": "Restrain him to examine quickly",
                            "f": "Restraint will escalate distress; adapt your approach first."
                        },
                        {
                            "t": "Involve his mother, simplify communication and use visual cues",
                            "f": "Correct. For children, use age-appropriate aids and involve a parent; engage caregivers to help with communication and calming."
                        },
                        {
                            "t": "Assume he cannot be assessed and leave",
                            "f": "Every patient must be assessed; adapt the approach."
                        },
                        {
                            "t": "Shout instructions so he can hear",
                            "f": "He is covering his ears; louder speech will not help."
                        }
                    ],
                    "correct": 1,
                    "explanation": "CPG 1.4: engage family or caregivers to help with history, communication and calming, and use age-appropriate communication aids for children with developmental or sensory needs.",
                    "kpi": "Identify and document functional needs in the patient care report."
                },
                {
                    "id": "crit_1_4_2",
                    "scenario": "A 40-year-old woman with cerebral palsy is non-verbal but alert. She may have a fractured wrist. Her carer says she communicates with a picture board.",
                    "question": "How should you take her history and assess pain?",
                    "options": [
                        {
                            "t": "Ask only the carer and skip the patient",
                            "f": "Involve the carer, but communicate with the patient using her own method."
                        },
                        {
                            "t": "Use her picture board and visual aids, with the carer's help",
                            "f": "Correct. Use the patient's preferred communication method and written or visual aids for OPQRST and SAMPLE."
                        },
                        {
                            "t": "Assume she has no pain because she is quiet",
                            "f": "Communication barriers can hide symptoms: a red flag for under-triage."
                        },
                        {
                            "t": "Decide she lacks capacity",
                            "f": "Never assume a lack of capacity because of disability."
                        }
                    ],
                    "correct": 1,
                    "explanation": "Identify and use the preferred communication method, obtain OPQRST and SAMPLE with visual aids if needed, involve the caregiver, and document her functional needs.",
                    "kpi": "Identify and document functional needs in the patient care report."
                }
            ]
        },
        {
            "id": "c1s5",
            "shortTitle": "1.5 Treat at Scene",
            "guide": {
                "cpg": "1.5",
                "group": "universal",
                "groupLabel": "Universal Care",
                "title": "Treated at Scene",
                "lead": "When a patient with a minor or stable condition can safely be treated and left at home instead of being transferred by ambulance, and how to make and record that decision.",
                "source": {
                    "label": "CPG 1.5",
                    "pages": "38–41",
                    "pdf": "../pdf_sections/1_5_Treated_at_Scene.pdf"
                },
                "sections": [
                    {
                        "type": "criteria",
                        "title": "Who this applies to",
                        "icon": "user",
                        "include": [
                            "Minor or stable conditions that can be managed at scene: mild allergic reaction resolved with antihistamines; minor injuries; minor musculoskeletal pain without deformity or loss of function; mild hypoglycemia corrected with oral glucose; resolved nausea; mild resolved asthma (no wheeze, normal SpO<sub>2</sub>); isolated low-grade fever in adults with normal vitals.",
                            "No red flags, stable vital signs, and capacity to decide.",
                            "Access to follow-up care and/or a responsible caregiver."
                        ],
                        "exclude": [
                            "Unstable conditions, red flags or life-threatening symptoms (e.g. chest pain, severe dyspnea, altered mental status).",
                            "Lacks capacity; no follow-up or safe disposition.",
                            "Age &lt;18 or &gt;60 years; pregnancy.",
                            "Unreliable history; self-inflicted (suicidal) injury; significant relevant comorbidities.",
                            "Called an ambulance for the same condition in the last 30 days.",
                            "Not registered with, or no ready access to, a GP or primary health care facility."
                        ]
                    },
                    {
                        "type": "steps",
                        "title": "Decision pathway",
                        "icon": "list",
                        "steps": [
                            {
                                "title": "Primary survey",
                                "text": "Treat any life threat first. A serious life threat means transfer."
                            },
                            {
                                "title": "Treat and allow time to respond",
                                "text": "If the patient does not respond to treatment, transfer."
                            },
                            {
                                "title": "Verify clinical stability",
                                "text": "Complete assessment, focused history and systematic examination; confirm symptoms have resolved (e.g. normal glucose) and there are no red flags."
                            },
                            {
                                "title": "Check exclusion criteria",
                                "text": "Any exclusion: recommend ambulance transfer."
                            },
                            {
                                "title": "Assess mental capacity",
                                "text": "Can the patient understand their condition, the treatment and the risks of staying? Look for intoxication, confusion or language barriers."
                            },
                            {
                                "title": "Explain plan and risks",
                                "text": "Explain the treatment plan and the risks and benefits to the patient and carer. If the patient wants hospital, transport to the nearest hospital."
                            },
                            {
                                "title": "Reassess vital signs",
                                "text": "After any medication or intervention, reassess and document all vital signs."
                            },
                            {
                                "title": "Confirm support",
                                "text": "The patient and carer must be satisfied with the decision, and an adult carer must be capable and willing to accept responsibility. If an Emergency Physician is present, follow their transport decision."
                            }
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Red flags",
                        "icon": "triangle-alert",
                        "tone": "alert",
                        "items": [
                            "Symptoms persisting or worsening despite treatment (e.g. unresolved hypoglycemia, ongoing allergic reaction).",
                            "Abnormal vital signs.",
                            "Altered mental status, intoxication or inability to decide.",
                            "No follow-up or unsafe environment (e.g. no caregiver, homelessness).",
                            "Suspected underlying condition needing hospital evaluation (e.g. infection, occult injury)."
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Clinical insights",
                        "icon": "lightbulb",
                        "items": [
                            "Non-transport must be clinically justified: no threat to life and no need for further diagnostics.",
                            "Give clear safety-netting advice: red flags, expected symptoms, when to seek care.",
                            "Called EMS more than once for the same complaint within 24 hours: strongly consider transport.",
                            "Look for neglect, abuse or poor living conditions that may need transport or escalation.",
                            "For minors or vulnerable patients, involve a guardian."
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Key performance indicators",
                        "icon": "chart-no-axes-column",
                        "items": [
                            "Stable vital signs documented for every patient treated at scene.",
                            "A mental capacity assessment documented on the patient care report."
                        ]
                    },
                    {
                        "type": "related",
                        "title": "Related CPGs",
                        "icon": "link",
                        "items": [
                            {
                                "label": "1.1 Universal Care",
                                "href": "c1.html?section=c1s1"
                            },
                            {
                                "label": "1.6 Refusal of Transfer",
                                "href": "c1.html?section=c1s6"
                            }
                        ]
                    }
                ]
            },
            "quiz": [
                {
                    "q": "Which patient may be treated at scene under CPG 1.5?",
                    "options": [
                        "Chest pain now resolved",
                        "Mild hypoglycemia corrected with oral glucose in a young adult with a carer",
                        "A 70-year-old after a fall",
                        "A pregnant woman with nausea"
                    ],
                    "correct": 1,
                    "explanation": "Mild hypoglycemia corrected with oral glucose is listed; chest pain, age >60 and pregnancy are exclusions."
                },
                {
                    "q": "What age range is excluded from treatment at scene?",
                    "options": [
                        "<16 or >70",
                        "<18 or >60",
                        "<13 or >65",
                        "Only >80"
                    ],
                    "correct": 1,
                    "explanation": "Patients <18 or >60 years old should be recommended transfer."
                },
                {
                    "q": "A patient called an ambulance for the same condition 2 weeks ago. Can they be treated at scene?",
                    "options": [
                        "Yes",
                        "No – same condition within the last 30 days is an exclusion",
                        "Only with a carer",
                        "Only at night"
                    ],
                    "correct": 1,
                    "explanation": "Patients who called for the same condition within the last 30 days are excluded."
                },
                {
                    "q": "What does CPG 1.5 advise if a patient calls more than once in 24 hours for the same complaint?",
                    "options": [
                        "Refuse to attend",
                        "Strongly consider transport",
                        "Treat at scene again",
                        "Call the police"
                    ],
                    "correct": 1,
                    "explanation": "Repeat access within 24 hours: transport should strongly be considered."
                },
                {
                    "q": "The patient wants to go to hospital after you suggest treatment at scene. What do you do?",
                    "options": [
                        "Persuade them to stay",
                        "Transport to the nearest hospital",
                        "Ask them to take a taxi",
                        "Consult the family"
                    ],
                    "correct": 1,
                    "explanation": "If the patient insists on going to hospital, transport them."
                },
                {
                    "q": "What must happen after a medication or intervention before leaving the patient?",
                    "options": [
                        "Nothing",
                        "Reassess and document all vital signs",
                        "Give a second dose",
                        "Phone the GP"
                    ],
                    "correct": 1,
                    "explanation": "Reassess and document all vital signs post-medication or intervention to confirm stability."
                },
                {
                    "q": "Who must be available before you exit the scene?",
                    "options": [
                        "A police officer",
                        "An adult carer capable and willing to accept responsibility",
                        "A second ambulance",
                        "Nobody"
                    ],
                    "correct": 1,
                    "explanation": "An adult carer both capable and willing to accept responsibility must be available."
                },
                {
                    "q": "An Emergency Physician is on scene. Whose transport decision do you follow?",
                    "options": [
                        "Yours",
                        "The Emergency Physician's",
                        "The family's",
                        "Dispatch's"
                    ],
                    "correct": 1,
                    "explanation": "If an Emergency Physician is present, follow their direction on the transport decision."
                },
                {
                    "q": "Which is a red flag against treatment at scene?",
                    "options": [
                        "Resolved nausea",
                        "Ongoing allergic reaction despite treatment",
                        "Small controlled laceration",
                        "Normal vital signs"
                    ],
                    "correct": 1,
                    "explanation": "Persistent or worsening symptoms despite intervention are red flags."
                },
                {
                    "q": "Is a patient with self-inflicted (suicidal) injuries eligible for treatment at scene?",
                    "options": [
                        "Yes if minor",
                        "No – excluded",
                        "Only with family",
                        "Only if over 18"
                    ],
                    "correct": 1,
                    "explanation": "Self-inflicted (suicidal) injuries are an exclusion."
                },
                {
                    "q": "Which mild asthma presentation may be treated at scene?",
                    "options": [
                        "Ongoing wheeze",
                        "Resolved symptoms: no wheeze and normal SpO2",
                        "Any asthma",
                        "Asthma in pregnancy"
                    ],
                    "correct": 1,
                    "explanation": "Mild resolved asthma symptoms (no wheeze, normal SpO2) are included."
                },
                {
                    "q": "What are the two KPIs of CPG 1.5?",
                    "options": [
                        "Transport time and pain score",
                        "Stable vital signs documented and a mental capacity assessment documented",
                        "Glucose and ECG",
                        "Carer signature and photo"
                    ],
                    "correct": 1,
                    "explanation": "KPIs: stable vital signs documented; mental capacity assessment documented."
                }
            ],
            "flashcards": [
                {
                    "category": "Inclusion",
                    "question": "Conditions that may be treated at scene?",
                    "answer": "Mild allergic reaction resolved; minor injuries; minor musculoskeletal pain; mild hypoglycemia corrected with oral glucose; resolved nausea; mild resolved asthma; isolated low-grade fever in adults with normal vitals."
                },
                {
                    "category": "Exclusion",
                    "question": "Age and pregnancy exclusions?",
                    "answer": "Age <18 or >60 years; pregnancy."
                },
                {
                    "category": "Exclusion",
                    "question": "Other exclusions?",
                    "answer": "No capacity; no follow-up or safe disposition; unreliable history; suicidal self-injury; significant comorbidities; same condition in last 30 days; no GP/primary care access."
                },
                {
                    "category": "Pathway",
                    "question": "Patient does not respond to treatment?",
                    "answer": "Transfer to hospital."
                },
                {
                    "category": "Pathway",
                    "question": "Patient insists on hospital?",
                    "answer": "Transport to the nearest hospital."
                },
                {
                    "category": "Pathway",
                    "question": "Who must be present to exit the scene?",
                    "answer": "An adult carer capable and willing to accept responsibility."
                },
                {
                    "category": "Pathway",
                    "question": "Emergency Physician on scene?",
                    "answer": "Follow their direction on the transport decision."
                },
                {
                    "category": "Reassessment",
                    "question": "After medication or intervention?",
                    "answer": "Reassess and document all vital signs."
                },
                {
                    "category": "Repeat calls",
                    "question": "More than one call in 24 hours for the same complaint?",
                    "answer": "Strongly consider transport."
                },
                {
                    "category": "Safety netting",
                    "question": "Safety-netting advice?",
                    "answer": "Red flags, expected symptoms, and when to seek further care."
                },
                {
                    "category": "Capacity",
                    "question": "Capacity assessment for treat at scene?",
                    "answer": "Can they understand their condition, treatment and risks of staying? Consider intoxication, confusion, language barriers."
                },
                {
                    "category": "KPI",
                    "question": "CPG 1.5 KPIs?",
                    "answer": "Stable vital signs documented; mental capacity assessment documented."
                }
            ],
            "critical": [
                {
                    "id": "crit_1_5_1",
                    "scenario": "A 35-year-old known diabetic had mild hypoglycemia, corrected with oral glucose. He is now alert and orientated with normal vital signs and glucose. His wife is with him, he has a GP, and he wants to stay home.",
                    "question": "Can he be treated at scene?",
                    "options": [
                        {
                            "t": "Yes, once capacity is confirmed, risks explained, vital signs rechecked and his wife accepts responsibility",
                            "f": "Correct. Mild hypoglycemia corrected with oral glucose is an included condition, and he meets the other conditions."
                        },
                        {
                            "t": "No, all diabetics must be transported",
                            "f": "CPG 1.5 lists mild hypoglycemia corrected with oral glucose as suitable."
                        },
                        {
                            "t": "Yes, and no documentation is needed",
                            "f": "Document stable vital signs and the capacity assessment (KPIs)."
                        },
                        {
                            "t": "Only if he signs a refusal form",
                            "f": "This is treatment at scene, not a refusal."
                        }
                    ],
                    "correct": 0,
                    "explanation": "Confirm no exclusions, assess capacity, explain the plan and risks, reassess and document vital signs, and make sure an adult carer accepts responsibility. Give safety-netting advice.",
                    "kpi": "Stable vital signs documented; capacity assessment documented."
                },
                {
                    "id": "crit_1_5_2",
                    "scenario": "A 75-year-old woman tripped at home and has a small skin tear. She feels fine, her vital signs are normal, and she would like to stay home.",
                    "question": "Does she meet the criteria for treatment at scene?",
                    "options": [
                        {
                            "t": "Yes, the injury is minor",
                            "f": "Age >60 is an exclusion: she should be recommended transfer."
                        },
                        {
                            "t": "No: age >60 is an exclusion, so recommend transfer",
                            "f": "Correct. If she still declines, follow the Refusal of Transfer CPG."
                        },
                        {
                            "t": "Yes, if a neighbour checks on her",
                            "f": "Age >60 excludes treatment at scene regardless of support."
                        },
                        {
                            "t": "Only after Tele-EMS approval",
                            "f": "The exclusion stands: recommend transfer."
                        }
                    ],
                    "correct": 1,
                    "explanation": "Patients >60 years old are excluded from treatment at scene and should be recommended transfer. If a patient with capacity refuses, the Refusal of Transfer CPG applies.",
                    "kpi": "Conduct a mental capacity assessment and document it."
                },
                {
                    "id": "crit_1_5_3",
                    "scenario": "A 28-year-old with a mild allergic rash improved after an antihistamine. 30 minutes later the hives are spreading and she feels her lips tingling.",
                    "question": "What now?",
                    "options": [
                        {
                            "t": "Leave her at home with advice",
                            "f": "Worsening symptoms despite treatment are a red flag."
                        },
                        {
                            "t": "Recommend transfer: symptoms are worsening despite treatment",
                            "f": "Correct. A persistent or worsening allergic reaction is a red flag that excludes treatment at scene."
                        },
                        {
                            "t": "Give a second antihistamine and leave",
                            "f": "Red flags mean she is no longer suitable for treatment at scene."
                        },
                        {
                            "t": "Ask her to call again if it gets worse",
                            "f": "She is already getting worse."
                        }
                    ],
                    "correct": 1,
                    "explanation": "Persistent or worsening symptoms despite intervention, such as an ongoing allergic reaction, are red flags. Manage as per the relevant CPG and recommend transfer.",
                    "kpi": "Stable vital signs documented for every patient treated at scene."
                }
            ]
        },
        {
            "id": "c1s6",
            "shortTitle": "1.6 Refusal of Transfer",
            "guide": {
                "cpg": "1.6",
                "group": "universal",
                "groupLabel": "Universal Care",
                "title": "Refusal of Transfer",
                "lead": "A patient who has been recommended ambulance transfer may refuse it only if they have the capacity to decide. Assess capacity in four steps, explain the risks, and document everything on the refusal form.",
                "source": {
                    "label": "CPG 1.6",
                    "pages": "42–46",
                    "pdf": "../pdf_sections/1_6_Patient_Refusal_of_Transfer.pdf"
                },
                "sections": [
                    {
                        "type": "criteria",
                        "title": "Who this applies to",
                        "icon": "user",
                        "include": [
                            "Patients declining a recommended transfer after EMS evaluation or treatment: both minor, stable conditions and serious ones refusing against medical advice."
                        ],
                        "exclude": [
                            "No EMS contact or evaluation.",
                            "Patients lacking capacity (e.g. severe intoxication, unresponsive, minors without guardian consent): mandatory transport.",
                            "Patients not recommended transfer (see Treated at Scene CPG)."
                        ]
                    },
                    {
                        "type": "steps",
                        "title": "Refusal pathway",
                        "icon": "list",
                        "steps": [
                            {
                                "title": "Primary and secondary survey",
                                "text": "Treat life threats before discussing refusal."
                            },
                            {
                                "title": "Vital signs",
                                "text": "At least 2 sets, at least 5 minutes apart: heart rate, respiratory rate, blood pressure, blood glucose, temperature, and a 12-lead ECG if clinically relevant."
                            },
                            {
                                "title": "Explain the risks",
                                "text": "Make sure the patient fully understands the risks of not going to hospital by ambulance."
                            },
                            {
                                "title": "Capacity assessment",
                                "text": "All four steps below must be met."
                            },
                            {
                                "title": "Passed and still refusing",
                                "text": "The patient may refuse. Complete the ePCR refusal form with the patient's signature and all refusal details."
                            },
                            {
                                "title": "Failed and still refusing",
                                "text": "Not competent to refuse: must be transferred. Inform Tele-EMS (who may instruct sedation) and the Dispatch Duty Officer; consider police assistance (required if restraint is needed)."
                            }
                        ]
                    },
                    {
                        "type": "table",
                        "title": "Four-step capacity assessment",
                        "icon": "brain",
                        "columns": [
                            "Step",
                            "How"
                        ],
                        "rows": [
                            [
                                "Understanding",
                                "Explain the situation and risks simply, then ask them to repeat it back."
                            ],
                            [
                                "Appreciation",
                                "Ask if they see their own risk, e.g. \"Why do you think you are okay now?\""
                            ],
                            [
                                "Reasoning",
                                "Ask them to weigh options, e.g. \"What happens if you stay? What's your plan?\""
                            ],
                            [
                                "Confirmed expression",
                                "Ask for their decision and check it is clear and consistent when asked again after a minute."
                            ]
                        ],
                        "notes": [
                            "Look for anything that impairs capacity: intoxication, altered mental status, language barriers, psychiatric conditions."
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "High-risk refusals",
                        "icon": "triangle-alert",
                        "tone": "alert",
                        "groups": [
                            {
                                "title": "Serious conditions or Red priority",
                                "items": [
                                    "e.g. chest pain or neurological deficits.",
                                    "Involve Tele-EMS, document extensive efforts to persuade transport, and inform the Dispatch Duty Officer."
                                ]
                            },
                            {
                                "title": "Refusal by a third party (e.g. police)",
                                "items": [
                                    "Escalate to Tele-EMS, the shift in-charge and the duty officer, and document fully, including EMS efforts."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "Special groups",
                        "icon": "user",
                        "groups": [
                            {
                                "title": "Elderly (>65 years)",
                                "items": [
                                    "Atypical presentations and comorbidities raise risk: strongly encourage transport for serious complaints and check social support."
                                ]
                            },
                            {
                                "title": "Pediatric (<13 years)",
                                "items": [
                                    "Refusal needs guardian consent; if no guardian is present, transport."
                                ]
                            },
                            {
                                "title": "Impaired capacity",
                                "items": [
                                    "Intoxication or psychiatric crisis: transport unless capacity is restored.",
                                    "Use interpreters or translation tools for language barriers."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Key performance indicator",
                        "icon": "chart-no-axes-column",
                        "items": [
                            "Every refusal has a complete refusal documentation form."
                        ]
                    },
                    {
                        "type": "related",
                        "title": "Related CPGs",
                        "icon": "link",
                        "items": [
                            {
                                "label": "1.1 Universal Care",
                                "href": "c1.html?section=c1s1"
                            },
                            {
                                "label": "1.5 Treated at Scene",
                                "href": "c1.html?section=c1s5"
                            }
                        ]
                    }
                ]
            },
            "quiz": [
                {
                    "q": "Who must consent before a child under 13 can refuse transport?",
                    "options": [
                        "The child",
                        "A parent or guardian",
                        "Any adult on scene",
                        "The police"
                    ],
                    "correct": 1,
                    "explanation": "Pediatric refusal requires guardian consent; if no guardian is present, transport."
                },
                {
                    "q": "How many sets of vital signs does the refusal flowchart require before a refusal?",
                    "options": [
                        "1",
                        "At least 2, at least 5 minutes apart",
                        "Only a blood pressure",
                        "None"
                    ],
                    "correct": 1,
                    "explanation": "The flowchart requires 2 sets, at least 5 minutes apart. Clinical Insights mentions three; take three where you can."
                },
                {
                    "q": "Which are the four steps of the capacity assessment?",
                    "options": [
                        "Alert, Verbal, Pain, Unresponsive",
                        "Understanding, Appreciation, Reasoning, Confirmed expression",
                        "Sign, Witness, Date, Photograph",
                        "Ask, Advise, Assist, Arrange"
                    ],
                    "correct": 1,
                    "explanation": "All four must be met: understanding, appreciation, reasoning, confirmed expression."
                },
                {
                    "q": "How do you check 'Understanding'?",
                    "options": [
                        "Ask them to sign",
                        "Explain simply and ask them to repeat it back",
                        "Check GCS only",
                        "Ask the family"
                    ],
                    "correct": 1,
                    "explanation": "Explain the situation and risks simply, then ask them to repeat it back."
                },
                {
                    "q": "How do you confirm 'Expression'?",
                    "options": [
                        "Ask once",
                        "Ask for their decision and check it is clear and consistent when re-asked after a minute",
                        "Accept a nod",
                        "Write it for them"
                    ],
                    "correct": 1,
                    "explanation": "The decision must be clear and consistent when re-asked after a minute."
                },
                {
                    "q": "A patient fails the capacity assessment and still refuses. What is true?",
                    "options": [
                        "They may refuse",
                        "They are not competent to refuse and must be transferred",
                        "Leave them with family",
                        "Call back tomorrow"
                    ],
                    "correct": 1,
                    "explanation": "A failed capacity assessment means the patient must be transferred."
                },
                {
                    "q": "Who may instruct sedation for a patient without capacity who refuses?",
                    "options": [
                        "The crew",
                        "Tele-EMS",
                        "The family",
                        "The police"
                    ],
                    "correct": 1,
                    "explanation": "Inform Tele-EMS; Tele-EMS may instruct the administration of sedation."
                },
                {
                    "q": "When is police assistance required?",
                    "options": [
                        "Every refusal",
                        "If patient restraint is needed",
                        "Never",
                        "Only for children"
                    ],
                    "correct": 1,
                    "explanation": "Police may help persuade, and their assistance is required if restraint is needed."
                },
                {
                    "q": "A STEMI patient with capacity refuses transport. This is a high-risk refusal. What must you do?",
                    "options": [
                        "Leave immediately",
                        "Involve Tele-EMS, document extensive persuasion efforts, inform the Dispatch Duty Officer",
                        "Sedate him",
                        "Nothing different"
                    ],
                    "correct": 1,
                    "explanation": "High-risk refusals: Tele-EMS, extensive documentation, Dispatch Duty Officer."
                },
                {
                    "q": "A 10-year-old's guardian is not present and the child refuses transport. What do you do?",
                    "options": [
                        "Accept the refusal",
                        "Transport – a guardian's consent is required",
                        "Leave a note",
                        "Ask a neighbour to sign"
                    ],
                    "correct": 1,
                    "explanation": "Pediatric refusal requires guardian consent; transport if the guardian is absent."
                },
                {
                    "q": "A police officer at the scene refuses to let you transport the patient. What do you do?",
                    "options": [
                        "Comply and leave",
                        "Escalate to Tele-EMS, shift in-charge and duty officer, and document fully",
                        "Argue with the officer",
                        "Ignore it"
                    ],
                    "correct": 1,
                    "explanation": "Third-party refusals must be escalated and fully documented, including EMS efforts."
                },
                {
                    "q": "What is the KPI of CPG 1.6?",
                    "options": [
                        "Two sets of vital signs",
                        "Every refusal has a complete refusal documentation form",
                        "Tele-EMS for every refusal",
                        "Police at every refusal"
                    ],
                    "correct": 1,
                    "explanation": "KPI: all refusal cases have a complete refusal documentation form."
                }
            ],
            "flashcards": [
                {
                    "category": "Capacity",
                    "question": "Four-step capacity assessment?",
                    "answer": "Understanding, Appreciation, Reasoning, Confirmed expression. All four must be met."
                },
                {
                    "category": "Capacity",
                    "question": "Factors that impair capacity?",
                    "answer": "Intoxication, altered mental status, language barriers, psychiatric conditions."
                },
                {
                    "category": "Vital signs",
                    "question": "Vital signs before a refusal?",
                    "answer": "At least 2 sets, at least 5 minutes apart: HR, RR, BP, glucose, temperature, 12-lead ECG if relevant."
                },
                {
                    "category": "Vital signs",
                    "question": "When is a 12-lead ECG needed?",
                    "answer": "If a cardiac issue may be related, or ECG changes may identify other pathology (e.g. electrolyte imbalance)."
                },
                {
                    "category": "Passed",
                    "question": "Passed capacity and still refusing?",
                    "answer": "Complete the ePCR refusal form: patient signature and all refusal details."
                },
                {
                    "category": "Failed",
                    "question": "Failed capacity and still refusing?",
                    "answer": "Must be transferred. Inform Tele-EMS (may instruct sedation) and the Dispatch Duty Officer; police if restraint is needed."
                },
                {
                    "category": "High risk",
                    "question": "High-risk refusal actions?",
                    "answer": "Involve Tele-EMS, document extensive persuasion efforts, inform the Dispatch Duty Officer."
                },
                {
                    "category": "Third party",
                    "question": "Refusal by police or another third party?",
                    "answer": "Escalate to Tele-EMS, shift in-charge and duty officer, and document fully."
                },
                {
                    "category": "Pediatrics",
                    "question": "Child (<13) refusing?",
                    "answer": "Needs guardian consent; transport if no guardian is present."
                },
                {
                    "category": "Elderly",
                    "question": "Elderly (>65) refusing?",
                    "answer": "Strongly encourage transport for serious complaints; check social support."
                },
                {
                    "category": "Exclusions",
                    "question": "Who cannot use the refusal process?",
                    "answer": "Patients lacking capacity (mandatory transport), and patients not recommended transfer (Treated at Scene CPG)."
                },
                {
                    "category": "KPI",
                    "question": "CPG 1.6 KPI?",
                    "answer": "Every refusal has a complete refusal documentation form."
                }
            ],
            "critical": [
                {
                    "id": "crit_1_6_1",
                    "scenario": "A 55-year-old man with crushing chest pain has ST elevation on his ECG. He is alert, passes all four capacity steps, and says he will see his own doctor tomorrow.",
                    "question": "What must you do?",
                    "options": [
                        {
                            "t": "Accept the refusal and leave",
                            "f": "This is a high-risk refusal: there are mandatory steps."
                        },
                        {
                            "t": "Treat it as a high-risk refusal: involve Tele-EMS, make and document extensive efforts to persuade, inform the Dispatch Duty Officer, and complete the refusal form",
                            "f": "Correct. He has capacity, so he may refuse, but a serious condition makes this high risk."
                        },
                        {
                            "t": "Sedate and transport him",
                            "f": "He has capacity; sedation is only for patients who fail the capacity assessment, on Tele-EMS instruction."
                        },
                        {
                            "t": "Call the police to restrain him",
                            "f": "Restraint is not appropriate for a patient with capacity."
                        }
                    ],
                    "correct": 1,
                    "explanation": "Serious conditions such as chest pain, or red-priority patients, are high-risk refusals: Tele-EMS, extensive documentation of persuasion, and the Dispatch Duty Officer.",
                    "kpi": "Every refusal has a complete refusal documentation form."
                },
                {
                    "id": "crit_1_6_2",
                    "scenario": "A 22-year-old man has a head wound after a fight. He smells of alcohol, keeps asking the same questions, and wants to walk away. GCS 14.",
                    "question": "Can he refuse transport?",
                    "options": [
                        {
                            "t": "Yes, he is over 18",
                            "f": "Age is not enough: he must also have capacity."
                        },
                        {
                            "t": "No: he fails understanding (cannot retain information) and is intoxicated, so he must be transferred",
                            "f": "Correct. Failed capacity means he is not competent to refuse."
                        },
                        {
                            "t": "Yes, if he signs the form",
                            "f": "A signature does not create capacity."
                        },
                        {
                            "t": "Only if a friend takes him home",
                            "f": "Without capacity he must be transferred."
                        }
                    ],
                    "correct": 1,
                    "explanation": "Repetitive questioning means he cannot repeat back the explanation, and intoxication impairs capacity. If he still refuses: inform Tele-EMS (who may instruct sedation) and the Dispatch Duty Officer, and request police if restraint is needed.",
                    "kpi": "Every refusal has a complete refusal documentation form."
                },
                {
                    "id": "crit_1_6_3",
                    "scenario": "A 9-year-old fell from a bicycle and has a possible wrist fracture. Her parents cannot be reached; a 15-year-old cousin says she does not need hospital.",
                    "question": "What do you do?",
                    "options": [
                        {
                            "t": "Accept the cousin's refusal",
                            "f": "A child's refusal requires a guardian's consent."
                        },
                        {
                            "t": "Transport her, since no guardian is present to consent to a refusal",
                            "f": "Correct. Pediatric refusal requires guardian consent; transport if the guardian is absent."
                        },
                        {
                            "t": "Leave her with the cousin",
                            "f": "Without a guardian, she must be transported."
                        },
                        {
                            "t": "Wait on scene until the parents call",
                            "f": "Do not delay care: transport."
                        }
                    ],
                    "correct": 1,
                    "explanation": "Patients under 13 need guardian consent to refuse; if the guardian is absent, transport and keep trying to contact the parents.",
                    "kpi": "Every refusal has a complete refusal documentation form."
                }
            ]
        }
    ]
};
