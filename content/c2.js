/* ========== Chapter 2 – Airway and Breathing (CPG 2.1–2.5) ==========
 * Sections with a `guide` are written from the official DCAS CPG 2025 PDF
 * (data/cpg-source/) and rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c2",
    "title": "Airway Management",
    "shortTitle": "2.0 Airway & Breathing",
    "sections": [
        {
            "id": "c2s1",
            "shortTitle": "2.1 Airway Management",
            "guide": {
                "cpg": "2.1",
                "group": "airway",
                "groupLabel": "Airway and Breathing",
                "title": "Airway Management",
                "lead": "Keep the airway open and the patient oxygenated and ventilated, using the simplest method that works and monitoring with SpO<sub>2</sub> and EtCO<sub>2</sub>. Move to advanced airways only in cardiac arrest or deep unconsciousness.",
                "source": {
                    "label": "CPG 2.1",
                    "pages": "47–52",
                    "pdf": "../pdf_sections/2_1_Airway_and_Breathing.pdf"
                },
                "sections": [
                    {
                        "type": "criteria",
                        "title": "Who this applies to",
                        "icon": "user",
                        "include": [
                            "Airway compromise on primary assessment: significantly altered mental status (GCS &lt;8 or unresponsive on AVPU), noisy breathing, stridor, ineffective ventilation, foreign body airway obstruction."
                        ],
                        "exclude": [
                            "No airway compromise."
                        ]
                    },
                    {
                        "type": "steps",
                        "title": "Step by step",
                        "icon": "list",
                        "steps": [
                            {
                                "title": "Primary survey and triage",
                                "text": "As per Universal Care and Patient Triage Categories. Consider ALS back-up."
                            },
                            {
                                "title": "Basic airway management",
                                "text": "Clear the airway (suction, Magill's forceps; see FBAO CPG). Head-tilt/chin-lift or jaw thrust, avoiding neck movement if cervical injury is suspected. Attach SpO<sub>2</sub>, EtCO<sub>2</sub> and ECG monitoring."
                            },
                            {
                                "title": "Airway adjuncts: OPA or NPA",
                                "level": "EMR",
                                "text": "Correct size; watch for gagging and bleeding."
                            },
                            {
                                "title": "Oxygen and ventilation",
                                "text": "15 L/min via non-rebreather mask, or BVM with 100% oxygen if breathing is inadequate. Keep SpO<sub>2</sub> &gt;94%; NC-EtCO<sub>2</sub> 35–45 mmHg.",
                                "items": [
                                    "BVM / supported ventilation: adult 10–12, child 20–30, infant 20–30 breaths/min.",
                                    "Monitor EtCO<sub>2</sub> continuously for tidal volume and minute ventilation."
                                ]
                            },
                            {
                                "title": "Consider CPAP",
                                "level": "EMT-A",
                                "text": "For acute pulmonary edema, or moderate to severe COPD not responding to initial nebulizers (see below)."
                            },
                            {
                                "title": "Reassess the airway",
                                "text": "Pooling secretions, blood or vomit? Unable to swallow? Consider impending airway failure: FBAO, inhalation burns, anaphylaxis or life-threatening asthma, TBI, multiple trauma, altered mental status unable to maintain the airway."
                            },
                            {
                                "title": "Supraglottic airway (LT)",
                                "level": "EMT",
                                "text": "Only in cardiac arrest or deep unconsciousness (no gag reflex anticipated) when OPA/NPA fail. EMTs may insert an LT only in cardiac arrest."
                            },
                            {
                                "title": "Endotracheal intubation",
                                "level": "P",
                                "text": "Same indications. Prepare equipment and team first."
                            },
                            {
                                "title": "Confirm or fall back",
                                "text": "Confirm placement with waveform EtCO<sub>2</sub>, chest rise and lung sounds, and SpO<sub>2</sub>. If unsuccessful: consider a second attempt, or revert to OPA and basic airway management."
                            }
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "Assessment",
                        "icon": "stethoscope",
                        "groups": [
                            {
                                "title": "Airway",
                                "items": [
                                    "Mental status; obstruction by a foreign body or swelling (e.g. angioedema, pharyngeal or laryngeal infection).",
                                    "<b>Difficult airway signs:</b> short jaw or limited jaw thrust or mobility, small thyromental space, upper airway obstruction, large tongue, obesity, large tonsils, large neck, craniofacial abnormality, excessive facial hair, tracheostomy scar or other neck/facial surgery, trismus."
                                ]
                            },
                            {
                                "title": "Breathing",
                                "items": [
                                    "Pattern, rate and effort; accessory muscles; ability to speak; depth and equality of breath sounds; abnormal sounds (wheeze, rhonchi, rales, stridor); cough.",
                                    "Cyanosis or pallor, diaphoresis, anxiety, signs of fluid overload.",
                                    "Injuries affecting breathing: facial, high spinal (phrenic nerve, intercostals), neck (expanding hematoma, tracheal injury), chest wall (rib or sternal fracture, paradoxical movement, subcutaneous air, sucking chest wound)."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "Advanced airways",
                        "icon": "stethoscope",
                        "groups": [
                            {
                                "title": "Supraglottic airway (LT)",
                                "items": [
                                    "Indications: cardiac arrest; or profoundly unconscious and OPA/NPA fail to maintain the airway.",
                                    "EMTs may insert an LT only in cardiac arrest.",
                                    "Choose size and cuff volume from the colour-coded labels on the syringe.",
                                    "Confirm placement with waveform capnography."
                                ]
                            },
                            {
                                "title": "Endotracheal intubation",
                                "items": [
                                    "Indications: cardiac arrest; or profoundly unconscious and OPA/NPA fail.",
                                    "Success: confirm with waveform EtCO<sub>2</sub>; ventilate at 1 breath every 6 seconds or as indicated; connect a ventilator where available (Invasive Ventilation CPG).",
                                    "First attempt fails: consider a second attempt with ETT or supraglottic device, with minimal delay, after optimising position and cord view.",
                                    "Second attempt fails: revert to an LT airway or OPA/NPA; consider Tele-EMS for other strategies."
                                ]
                            },
                            {
                                "title": "After placement",
                                "items": [
                                    "Reassess LT and ETT placement after every patient movement (e.g. ground to stretcher, stretcher to hospital bed).",
                                    "Monitor SpO<sub>2</sub>, ECG and EtCO<sub>2</sub> continuously; waveform capnography detects deterioration."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "CPAP / BiPAP",
                        "icon": "wind",
                        "groups": [
                            {
                                "title": "Indications",
                                "items": [
                                    "Acute pulmonary edema.",
                                    "Moderate to severe COPD not responding to initial nebulizer treatment."
                                ]
                            },
                            {
                                "title": "Cautions",
                                "items": [
                                    "Severe pneumonia / ARDS (pneumothorax more likely).",
                                    "Emphysema (pressure may rupture bullae).",
                                    "Asthma (may worsen dynamic hyperinflation)."
                                ]
                            },
                            {
                                "title": "Absolute contraindications",
                                "items": [
                                    "Unconscious or altered mental status; apnea.",
                                    "Facial trauma or deformity (no mask seal).",
                                    "Untreated pneumothorax.",
                                    "Hypotension."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "list",
                        "title": "When to request ALS back-up",
                        "icon": "ambulance",
                        "tone": "alert",
                        "items": [
                            "Cardiac arrest, or deeply unconscious (no gag reflex anticipated).",
                            "Severe respiratory distress or impending respiratory failure.",
                            "A foreign body seen in the airway that cannot be removed.",
                            "If basic measures fail and ALS is unavailable, consult Tele-EMS."
                        ]
                    },
                    {
                        "type": "table",
                        "title": "Signs of ineffective ventilation",
                        "icon": "triangle-alert",
                        "columns": [
                            "Sign",
                            "Adults",
                            "Children"
                        ],
                        "rows": [
                            [
                                "Chest movement",
                                "Inadequate rise or minimal movement",
                                "Same, adjusted for size"
                            ],
                            [
                                "Breath sounds",
                                "Absent or diminished",
                                "Same, allowing for smaller airways and faster rates"
                            ],
                            [
                                "Oxygenation",
                                "SpO<sub>2</sub> &lt;92% despite oxygen",
                                "Same, adjusted for pediatric norms"
                            ],
                            [
                                "Effort",
                                "Retractions, flaring, accessory muscles without air movement",
                                "Same"
                            ],
                            [
                                "Mental status",
                                "Altered or unresponsive from hypoxia or hypercapnia",
                                "Same; children change quickly"
                            ],
                            [
                                "EtCO<sub>2</sub>",
                                "&gt;43 mmHg, or no waveform",
                                "&gt;43 school age, &gt;42 infants/toddlers, &gt;40 neonates, or no waveform"
                            ]
                        ]
                    },
                    {
                        "type": "table",
                        "title": "Normal pediatric EtCO2",
                        "icon": "baby",
                        "columns": [
                            "Age group",
                            "EtCO<sub>2</sub> (mmHg)"
                        ],
                        "rows": [
                            [
                                "Neonates (0–1 month)",
                                "30–40"
                            ],
                            [
                                "Infants (1 month–1 year)",
                                "32–42"
                            ],
                            [
                                "Toddlers/preschool (1–5 years)",
                                "33–43"
                            ],
                            [
                                "School age (6–12 years)",
                                "35–43"
                            ]
                        ],
                        "notes": [
                            "Healthy children generally 30–43 mmHg at sea level. Use age- and size-appropriate equipment and pediatric norms."
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Key performance indicators",
                        "icon": "chart-no-axes-column",
                        "items": [
                            "Document initial airway findings for all patients with airway compromise.",
                            "Give oxygen to all patients with SpO<sub>2</sub> &lt;92% (when appropriate).",
                            "Intubation successful on the first attempt."
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
                                "label": "2.2 FBAO",
                                "href": "c2.html?section=c2s2"
                            },
                            {
                                "label": "2.5 Invasive Ventilation",
                                "href": "c2.html?section=c2s5"
                            },
                            {
                                "label": "3.4 Acute Pulmonary Edema",
                                "href": "c3-4.html"
                            },
                            {
                                "label": "4.3 Adult Cardiac Arrest",
                                "href": "c4-3.html"
                            }
                        ]
                    }
                ]
            },
            "quiz": [
                {
                    "q": "Which finding brings a patient into CPG 2.1?",
                    "options": [
                        "SpO2 97% and talking",
                        "GCS <8 or unresponsive on AVPU",
                        "Mild cough",
                        "Normal speech with a sore throat"
                    ],
                    "correct": 1,
                    "explanation": "Inclusion: significantly altered mental status (GCS <8 or unresponsive), noisy breathing, stridor, ineffective ventilation, FBAO."
                },
                {
                    "q": "Which is listed as airway compromise in CPG 2.1?",
                    "options": [
                        "Stridor",
                        "Headache",
                        "Nausea",
                        "Fever"
                    ],
                    "correct": 0,
                    "explanation": "Noisy breathing, stridor, ineffective ventilation and FBAO are listed."
                },
                {
                    "q": "In suspected cervical injury, how should you open the airway?",
                    "options": [
                        "Head-tilt/chin-lift with full extension",
                        "Jaw thrust, avoiding neck manipulation",
                        "Turn the head to the side",
                        "Sit the patient up"
                    ],
                    "correct": 1,
                    "explanation": "Use head-tilt/chin-lift or jaw thrust as appropriate, avoiding neck manipulation if cervical injury is suspected."
                },
                {
                    "q": "What may be used to remove a visible foreign body or debris?",
                    "options": [
                        "Fingers only",
                        "Suction or Magill's forceps",
                        "Abdominal thrusts only",
                        "Nothing until hospital"
                    ],
                    "correct": 1,
                    "explanation": "Remove obstructions using suction or Magill's forceps where indicated (FBAO CPG)."
                },
                {
                    "q": "What is the lowest clinical level for OPA/NPA insertion?",
                    "options": [
                        "EMR",
                        "EMT",
                        "EMT-A",
                        "P"
                    ],
                    "correct": 0,
                    "explanation": "OPA/NPA is marked EMR in the CPG 2.1 flowchart."
                },
                {
                    "q": "What is the lowest clinical level for CPAP?",
                    "options": [
                        "EMR",
                        "EMT",
                        "EMT-A",
                        "AP"
                    ],
                    "correct": 2,
                    "explanation": "CPAP is marked EMT-A."
                },
                {
                    "q": "What is the lowest clinical level for a supraglottic airway (LT)?",
                    "options": [
                        "EMR",
                        "EMT",
                        "P",
                        "AP"
                    ],
                    "correct": 1,
                    "explanation": "Supraglottic airway (LT) is marked EMT – but EMTs may only insert it in cardiac arrest."
                },
                {
                    "q": "What is the lowest clinical level for endotracheal intubation?",
                    "options": [
                        "EMT",
                        "EMT-A",
                        "P",
                        "EP"
                    ],
                    "correct": 2,
                    "explanation": "Endotracheal intubation is marked P."
                },
                {
                    "q": "When may an EMT insert an LT airway?",
                    "options": [
                        "Any unconscious patient",
                        "Only in cardiac arrest",
                        "Severe asthma",
                        "Any trauma"
                    ],
                    "correct": 1,
                    "explanation": "EMTs may only insert supraglottic airways (LT) in cardiac arrest."
                },
                {
                    "q": "Which supraglottic airway does DCAS use?",
                    "options": [
                        "LMA",
                        "i-gel",
                        "LT (laryngeal tube) airway",
                        "Combitube"
                    ],
                    "correct": 2,
                    "explanation": "CPG 2.1 names the supraglottic airway as the LT airway."
                },
                {
                    "q": "When should advanced airway management be considered?",
                    "options": [
                        "Any patient with low SpO2",
                        "Only in cardiac arrest or deep unconsciousness (no gag reflex anticipated)",
                        "Every trauma patient",
                        "Whenever ALS arrives"
                    ],
                    "correct": 1,
                    "explanation": "Consider advanced airways only if the patient is in cardiac arrest or deeply unconscious."
                },
                {
                    "q": "A profoundly unconscious patient (not in arrest) cannot be kept open with OPA/NPA. Which device is indicated?",
                    "options": [
                        "Nothing more",
                        "Supraglottic airway (LT)",
                        "CPAP",
                        "Nasal cannula"
                    ],
                    "correct": 1,
                    "explanation": "LT indications: cardiac arrest, or profoundly unconscious AND OPA/NPA fail."
                },
                {
                    "q": "How do you choose LT size and cuff volume?",
                    "options": [
                        "Patient's age",
                        "Colour-coded labels on the syringe",
                        "Guess and adjust",
                        "Patient's weight only"
                    ],
                    "correct": 1,
                    "explanation": "Select LT size and cuff inflation volume according to the colour-coded labels on the syringe."
                },
                {
                    "q": "How is LT placement confirmed?",
                    "options": [
                        "Patient's colour",
                        "Waveform capnography (EtCO2)",
                        "Pupil size",
                        "Blood pressure"
                    ],
                    "correct": 1,
                    "explanation": "Confirm successful LT placement with waveform capnography."
                },
                {
                    "q": "How is ETT placement confirmed?",
                    "options": [
                        "Mist in the tube only",
                        "EtCO2 waveform capnography",
                        "Patient coughing",
                        "Heart rate"
                    ],
                    "correct": 1,
                    "explanation": "Confirm ET tube placement with EtCO2 waveform capnography."
                },
                {
                    "q": "After a successful intubation, what ventilation rate does CPG 2.1 give?",
                    "options": [
                        "1 breath every 3 seconds",
                        "1 breath every 6 seconds or as clinically indicated",
                        "30:2",
                        "20 breaths/min"
                    ],
                    "correct": 1,
                    "explanation": "Provide ventilations at 1 breath every 6 seconds, or as clinically indicated."
                },
                {
                    "q": "The first intubation attempt fails. What next?",
                    "options": [
                        "Stop all airway management",
                        "Consider a second attempt with ETT or supraglottic device, with minimal delay",
                        "Keep trying until success",
                        "Wait for hospital"
                    ],
                    "correct": 1,
                    "explanation": "Consider a second attempt with ET or a supraglottic device, after optimising position and cord view."
                },
                {
                    "q": "The second intubation attempt fails. What now?",
                    "options": [
                        "A third attempt",
                        "Revert to an LT airway or OPA/NPA; consider Tele-EMS",
                        "Remove all airways",
                        "Sedate the patient"
                    ],
                    "correct": 1,
                    "explanation": "Revert to a supraglottic device (LT) or OPA/NPA, and consider Tele-EMS for alternative strategies."
                },
                {
                    "q": "When must LT or ETT placement be reassessed?",
                    "options": [
                        "Only at hospital",
                        "After every patient movement",
                        "Every 30 minutes",
                        "Never once confirmed"
                    ],
                    "correct": 1,
                    "explanation": "Reassess placement after each patient movement, e.g. ground to stretcher and stretcher to hospital bed."
                },
                {
                    "q": "What oxygen flow does the flowchart give for supporting ventilation?",
                    "options": [
                        "2 L/min",
                        "6 L/min",
                        "15 L/min via NRB or BVM",
                        "Oxygen not needed"
                    ],
                    "correct": 2,
                    "explanation": "Administer 15 L/min oxygen via NRB mask or BVM as required."
                },
                {
                    "q": "What SpO2 does the management section aim for?",
                    "options": [
                        ">88%",
                        ">94%",
                        "100%",
                        ">90%"
                    ],
                    "correct": 1,
                    "explanation": "Administer oxygen to maintain SpO2 >94% (the goals also mention 92–98%)."
                },
                {
                    "q": "What is the target nasal-cannula EtCO2 (NC-EtCO2) range on the flowchart?",
                    "options": [
                        "10–20 mmHg",
                        "35–45 mmHg",
                        "45–55 mmHg",
                        "20–30 mmHg"
                    ],
                    "correct": 1,
                    "explanation": "Respiratory monitoring: SpO2 >94%, NC-EtCO2 35–45 mmHg."
                },
                {
                    "q": "What BVM ventilation rate is given for an adult?",
                    "options": [
                        "6–8 breaths/min",
                        "10–12 breaths/min",
                        "20–30 breaths/min",
                        "30–40 breaths/min"
                    ],
                    "correct": 1,
                    "explanation": "Adult 10–12, child 20–30, infant 20–30 breaths/min."
                },
                {
                    "q": "What BVM ventilation rate is given for an infant?",
                    "options": [
                        "10–12 breaths/min",
                        "12–20 breaths/min",
                        "20–30 breaths/min",
                        "40–60 breaths/min"
                    ],
                    "correct": 2,
                    "explanation": "Infant (and child) 20–30 breaths/min."
                },
                {
                    "q": "During supported ventilation, what monitors tidal volume and minute ventilation?",
                    "options": [
                        "Pulse oximetry",
                        "Continuous EtCO2",
                        "Blood pressure",
                        "Temperature"
                    ],
                    "correct": 1,
                    "explanation": "Continuously monitor EtCO2 for tidal volume and minute ventilation."
                },
                {
                    "q": "When is BVM ventilation with 100% oxygen indicated?",
                    "options": [
                        "In all patients",
                        "When spontaneous breathing is inadequate or ineffective",
                        "Only in children",
                        "Only after intubation"
                    ],
                    "correct": 1,
                    "explanation": "Provide BVM ventilation with 100% oxygen if spontaneous breathing is inadequate or ineffective."
                },
                {
                    "q": "Which is an indication for CPAP?",
                    "options": [
                        "Acute pulmonary edema",
                        "Untreated pneumothorax",
                        "Hypotension",
                        "Apnea"
                    ],
                    "correct": 0,
                    "explanation": "Indications: acute pulmonary edema; moderate to severe COPD unresponsive to initial nebulizers."
                },
                {
                    "q": "When is CPAP indicated in COPD?",
                    "options": [
                        "Mild COPD at rest",
                        "Moderate to severe COPD unresponsive to initial nebulizers",
                        "Any COPD",
                        "Never"
                    ],
                    "correct": 1,
                    "explanation": "Moderate to severe COPD unresponsive to initial nebulizer treatments."
                },
                {
                    "q": "Which is an absolute contraindication to CPAP?",
                    "options": [
                        "Hypertension",
                        "Hypotension",
                        "Tachycardia",
                        "Wheeze"
                    ],
                    "correct": 1,
                    "explanation": "Absolute contraindications: unconscious/altered mental status, apnea, facial trauma, untreated pneumothorax, hypotension."
                },
                {
                    "q": "Why is facial trauma an absolute contraindication to CPAP?",
                    "options": [
                        "It causes bleeding",
                        "A mask seal cannot be achieved",
                        "It raises ICP",
                        "It is painful"
                    ],
                    "correct": 1,
                    "explanation": "Facial trauma or deformities prevent an adequate mask seal."
                },
                {
                    "q": "Why is CPAP a caution in emphysema?",
                    "options": [
                        "It lowers oxygen",
                        "Increased pressure may rupture lung bullae",
                        "It causes bradycardia",
                        "It worsens fever"
                    ],
                    "correct": 1,
                    "explanation": "Emphysema: increased pressure may rupture lung bullae."
                },
                {
                    "q": "Why is CPAP a caution in asthma?",
                    "options": [
                        "It may worsen dynamic hyperinflation",
                        "It causes hypoglycemia",
                        "It is ineffective",
                        "It raises blood pressure"
                    ],
                    "correct": 0,
                    "explanation": "Asthma: CPAP may further increase dynamic hyperinflation."
                },
                {
                    "q": "Why is CPAP a caution in severe pneumonia/ARDS?",
                    "options": [
                        "Increased likelihood of pneumothorax",
                        "It causes sepsis",
                        "It worsens fever",
                        "No reason"
                    ],
                    "correct": 0,
                    "explanation": "Severe pneumonia/ARDS: increased likelihood of pneumothorax."
                },
                {
                    "q": "Which is NOT an absolute contraindication to CPAP?",
                    "options": [
                        "Apnea",
                        "Altered mental status",
                        "Acute pulmonary edema",
                        "Untreated pneumothorax"
                    ],
                    "correct": 2,
                    "explanation": "Acute pulmonary edema is an indication."
                },
                {
                    "q": "Which is a sign of a difficult airway in CPG 2.1?",
                    "options": [
                        "Long thin neck",
                        "Small thyromental space",
                        "Normal jaw movement",
                        "Clear voice"
                    ],
                    "correct": 1,
                    "explanation": "Difficult airway signs include short jaw, small thyromental space, large tongue, obesity, large neck, trismus and more."
                },
                {
                    "q": "Which is listed as a difficult-airway sign?",
                    "options": [
                        "Trismus",
                        "Normal dentition",
                        "Wide mouth opening",
                        "Short hair"
                    ],
                    "correct": 0,
                    "explanation": "Trismus, excessive facial hair, tracheostomy scar or neck surgery, and craniofacial abnormalities are listed."
                },
                {
                    "q": "During airway reassessment, which finding means the airway is not being maintained?",
                    "options": [
                        "Patient talking normally",
                        "Pooling of secretions, blood or vomit in the mouth",
                        "SpO2 98%",
                        "Normal swallow"
                    ],
                    "correct": 1,
                    "explanation": "Pooling of secretions, blood or vomit, or inability to swallow."
                },
                {
                    "q": "Which condition suggests impending airway failure?",
                    "options": [
                        "Ankle fracture",
                        "Inhalation burns",
                        "Mild headache",
                        "Controlled nosebleed"
                    ],
                    "correct": 1,
                    "explanation": "Impending airway failure: FBAO, inhalation burns, anaphylaxis or life-threatening asthma, TBI, multiple trauma, altered mental status."
                },
                {
                    "q": "Which injury can impair breathing by affecting the phrenic nerve?",
                    "options": [
                        "Wrist fracture",
                        "High spine injury",
                        "Knee injury",
                        "Scalp laceration"
                    ],
                    "correct": 1,
                    "explanation": "High spine injury affects the phrenic nerve and intercostals."
                },
                {
                    "q": "Which neck finding is listed as a traumatic threat to the airway?",
                    "options": [
                        "Expanding hematoma",
                        "Neck pain on turning",
                        "Stiff neck from sleeping",
                        "Old scar"
                    ],
                    "correct": 0,
                    "explanation": "Neck injury: expanding hematoma, tracheal injury."
                },
                {
                    "q": "Which chest wall finding is listed in the breathing assessment?",
                    "options": [
                        "Paradoxical chest motion",
                        "Normal symmetrical rise",
                        "Clear sounds",
                        "Normal rate"
                    ],
                    "correct": 0,
                    "explanation": "Chest wall injury: rib or sternal fracture, paradoxical motion, subcutaneous air, sucking chest wound."
                },
                {
                    "q": "When should ALS back-up be requested for advanced airway management?",
                    "options": [
                        "Mild asthma",
                        "A foreign body seen in the airway that cannot be removed",
                        "A cough",
                        "Any patient on oxygen"
                    ],
                    "correct": 1,
                    "explanation": "Also: cardiac arrest or deeply unconscious, severe respiratory distress or impending failure."
                },
                {
                    "q": "Basic airway measures fail and ALS is unavailable. What should you do?",
                    "options": [
                        "Wait",
                        "Consult Tele-EMS for guidance",
                        "Leave the scene",
                        "Stop ventilating"
                    ],
                    "correct": 1,
                    "explanation": "Request ALS back-up, or if unavailable consult Tele-EMS for guidance."
                },
                {
                    "q": "Which monitors should be attached during basic airway management?",
                    "options": [
                        "Temperature only",
                        "SpO2, EtCO2 and ECG",
                        "Blood glucose only",
                        "None"
                    ],
                    "correct": 1,
                    "explanation": "Attach SpO2, EtCO2 and ECG and monitor continuously."
                },
                {
                    "q": "Which SpO2 despite oxygen is a sign of ineffective ventilation?",
                    "options": [
                        "<98%",
                        "<92%",
                        "<95%",
                        "<99%"
                    ],
                    "correct": 1,
                    "explanation": "Persistent hypoxemia: SpO2 <92% despite oxygen therapy."
                },
                {
                    "q": "Which adult EtCO2 suggests poor ventilation?",
                    "options": [
                        ">43 mmHg",
                        "35–40 mmHg",
                        "38 mmHg",
                        "40 mmHg"
                    ],
                    "correct": 0,
                    "explanation": "Elevated EtCO2 >43 mmHg (or no waveform) indicates poor ventilation in adults."
                },
                {
                    "q": "Which EtCO2 suggests poor ventilation in a neonate?",
                    "options": [
                        ">40 mmHg",
                        ">50 mmHg",
                        ">35 mmHg",
                        ">60 mmHg"
                    ],
                    "correct": 0,
                    "explanation": "Pediatric thresholds: >43 school age, >42 infants/toddlers, >40 neonates."
                },
                {
                    "q": "What is the normal EtCO2 range for infants (1 month to 1 year)?",
                    "options": [
                        "30–40",
                        "32–42",
                        "35–45",
                        "25–35"
                    ],
                    "correct": 1,
                    "explanation": "Neonates 30–40, infants 32–42, toddlers 33–43, school age 35–43 mmHg."
                },
                {
                    "q": "What is the normal EtCO2 range for school-age children (6–12 years)?",
                    "options": [
                        "30–40",
                        "32–42",
                        "35–43",
                        "40–50"
                    ],
                    "correct": 2,
                    "explanation": "School-age children: 35–43 mmHg."
                },
                {
                    "q": "What does absence of an EtCO2 waveform indicate?",
                    "options": [
                        "Normal ventilation",
                        "Poor ventilation (or a misplaced airway)",
                        "Hyperventilation",
                        "ROSC"
                    ],
                    "correct": 1,
                    "explanation": "Absence of the EtCO2 waveform indicates poor ventilation."
                },
                {
                    "q": "What is the first KPI of CPG 2.1?",
                    "options": [
                        "Intubate every unconscious patient",
                        "Document initial airway findings for all patients with airway compromise",
                        "Use CPAP for all",
                        "Transport within 5 minutes"
                    ],
                    "correct": 1,
                    "explanation": "KPIs: document initial airway findings; oxygen for SpO2 <92%; first-pass intubation."
                },
                {
                    "q": "Below what SpO2 should all patients receive oxygen (KPI, when appropriate)?",
                    "options": [
                        "98%",
                        "94%",
                        "92%",
                        "88%"
                    ],
                    "correct": 2,
                    "explanation": "KPI: administer oxygen to all patients with SpO2 <92% (when appropriate)."
                },
                {
                    "q": "What is the intubation KPI?",
                    "options": [
                        "Within 3 attempts",
                        "Successful on the first attempt",
                        "Within 10 minutes",
                        "By an EP only"
                    ],
                    "correct": 1,
                    "explanation": "Intubation should be successful on the first intubation attempt."
                },
                {
                    "q": "What must be documented if an advanced airway was withheld?",
                    "options": [
                        "Nothing",
                        "The justification",
                        "Only the time",
                        "The patient's consent"
                    ],
                    "correct": 1,
                    "explanation": "Documentation includes justification if an advanced airway was withheld."
                },
                {
                    "q": "An intubated patient needs a ventilator. Which CPG applies?",
                    "options": [
                        "COPD",
                        "Invasive Mechanical Ventilation",
                        "Asthma",
                        "FBAO"
                    ],
                    "correct": 1,
                    "explanation": "Connect to a ventilator where available – refer to the Invasive Ventilation CPG."
                },
                {
                    "q": "Before intubating, what must be ensured?",
                    "options": [
                        "Family consent",
                        "Equipment and team readiness",
                        "Hospital pre-alert only",
                        "IV fluids running"
                    ],
                    "correct": 1,
                    "explanation": "Ensure equipment and team readiness prior to performing the procedure."
                },
                {
                    "q": "Which conditions are indications for both LT and ETT in CPG 2.1?",
                    "options": [
                        "Asthma and COPD",
                        "Cardiac arrest; or profound unconsciousness with OPA/NPA failing",
                        "Any hypoxia",
                        "Any trauma"
                    ],
                    "correct": 1,
                    "explanation": "Both share these indications (EMTs only in arrest for LT)."
                },
                {
                    "q": "What should be adjusted in children to avoid under- or over-treatment?",
                    "options": [
                        "Nothing",
                        "Age- and size-appropriate equipment and pediatric vital sign norms",
                        "Adult doses",
                        "Adult ventilation rates"
                    ],
                    "correct": 1,
                    "explanation": "Use age- and size-appropriate equipment and adjust vital sign norms."
                },
                {
                    "q": "What SpO2 range is listed among CPG 2.1's goals?",
                    "options": [
                        "88–92%",
                        "92–98%",
                        "94–100%",
                        "90–95%"
                    ],
                    "correct": 1,
                    "explanation": "Goal: target oxygen saturation of 92–98%. The management section keeps SpO2 >94%."
                },
                {
                    "q": "What does waveform capnography help detect during monitoring?",
                    "options": [
                        "Deterioration",
                        "Blood glucose",
                        "Temperature",
                        "Pain"
                    ],
                    "correct": 0,
                    "explanation": "Detect deterioration using waveform capnography."
                }
            ],
            "flashcards": [
                {
                    "category": "Inclusion",
                    "question": "Airway compromise in CPG 2.1?",
                    "answer": "GCS <8 or unresponsive; noisy breathing; stridor; ineffective ventilation; FBAO."
                },
                {
                    "category": "Basic",
                    "question": "Basic airway management?",
                    "answer": "Clear the airway (suction, Magill's forceps), head-tilt/chin-lift or jaw thrust, OPA/NPA, oxygen or BVM, monitoring."
                },
                {
                    "category": "Basic",
                    "question": "Suspected cervical injury?",
                    "answer": "Open the airway avoiding neck manipulation (jaw thrust)."
                },
                {
                    "category": "Scope",
                    "question": "Level for OPA/NPA?",
                    "answer": "EMR and above."
                },
                {
                    "category": "Scope",
                    "question": "Level for CPAP?",
                    "answer": "EMT-A and above."
                },
                {
                    "category": "Scope",
                    "question": "Level for LT airway?",
                    "answer": "EMT and above; EMTs only in cardiac arrest."
                },
                {
                    "category": "Scope",
                    "question": "Level for intubation?",
                    "answer": "P and above."
                },
                {
                    "category": "Oxygen",
                    "question": "Oxygen for supported ventilation?",
                    "answer": "15 L/min via NRB mask or BVM."
                },
                {
                    "category": "Monitoring",
                    "question": "Respiratory monitoring targets?",
                    "answer": "SpO2 >94%; NC-EtCO2 35–45 mmHg."
                },
                {
                    "category": "Ventilation",
                    "question": "BVM rates?",
                    "answer": "Adult 10–12; child 20–30; infant 20–30 breaths/min."
                },
                {
                    "category": "Ventilation",
                    "question": "What monitors tidal volume and minute ventilation?",
                    "answer": "Continuous EtCO2."
                },
                {
                    "category": "Ventilation",
                    "question": "When BVM with 100% oxygen?",
                    "answer": "When spontaneous breathing is inadequate or ineffective."
                },
                {
                    "category": "Advanced",
                    "question": "When consider an advanced airway?",
                    "answer": "Only in cardiac arrest or deep unconsciousness (no gag reflex anticipated)."
                },
                {
                    "category": "LT",
                    "question": "LT indications?",
                    "answer": "Cardiac arrest; or profoundly unconscious and OPA/NPA fail."
                },
                {
                    "category": "LT",
                    "question": "LT size and cuff volume?",
                    "answer": "From the colour-coded labels on the syringe."
                },
                {
                    "category": "LT",
                    "question": "Confirming LT placement?",
                    "answer": "Waveform capnography."
                },
                {
                    "category": "ETT",
                    "question": "ETT indications?",
                    "answer": "Cardiac arrest; or profoundly unconscious and OPA/NPA fail."
                },
                {
                    "category": "ETT",
                    "question": "Confirming ETT placement?",
                    "answer": "EtCO2 waveform capnography; also chest rise, lung sounds, SpO2."
                },
                {
                    "category": "ETT",
                    "question": "Ventilation after intubation?",
                    "answer": "1 breath every 6 seconds or as indicated; ventilator where available."
                },
                {
                    "category": "ETT",
                    "question": "Failed first attempt?",
                    "answer": "Consider a second attempt (ETT or supraglottic) with minimal delay, after optimising position and view."
                },
                {
                    "category": "ETT",
                    "question": "Failed second attempt?",
                    "answer": "Revert to LT or OPA/NPA; consider Tele-EMS."
                },
                {
                    "category": "Reassessment",
                    "question": "When to recheck LT/ETT placement?",
                    "answer": "After every patient movement."
                },
                {
                    "category": "CPAP",
                    "question": "CPAP indications?",
                    "answer": "Acute pulmonary edema; moderate to severe COPD unresponsive to initial nebulizers."
                },
                {
                    "category": "CPAP",
                    "question": "CPAP cautions?",
                    "answer": "Severe pneumonia/ARDS (pneumothorax), emphysema (bullae rupture), asthma (dynamic hyperinflation)."
                },
                {
                    "category": "CPAP",
                    "question": "CPAP absolute contraindications?",
                    "answer": "Unconscious or altered mental status, apnea, facial trauma or deformity, untreated pneumothorax, hypotension."
                },
                {
                    "category": "Assessment",
                    "question": "Difficult airway signs?",
                    "answer": "Short jaw/limited jaw thrust, small thyromental space, upper airway obstruction, large tongue, obesity, large tonsils, large neck, craniofacial abnormality, facial hair, neck surgery or tracheostomy scar, trismus."
                },
                {
                    "category": "Assessment",
                    "question": "Breathing assessment items?",
                    "answer": "Pattern, rate, effort, accessory muscles, speech, air entry, abnormal sounds, cough, color, diaphoresis, anxiety, fluid overload, injuries."
                },
                {
                    "category": "Assessment",
                    "question": "Injuries that impair breathing?",
                    "answer": "Facial; high spinal (phrenic nerve); neck (expanding hematoma, tracheal); chest wall (fractures, paradoxical motion, subcutaneous air, sucking wound)."
                },
                {
                    "category": "Reassessment",
                    "question": "Airway not maintained?",
                    "answer": "Pooling secretions, blood or vomit; unable to swallow."
                },
                {
                    "category": "Reassessment",
                    "question": "Impending airway failure causes?",
                    "answer": "FBAO, inhalation burns, anaphylaxis or life-threatening asthma, TBI, multiple trauma, altered mental status."
                },
                {
                    "category": "ALS back-up",
                    "question": "When to request ALS for the airway?",
                    "answer": "Cardiac arrest or deep unconsciousness; severe distress or impending failure; foreign body that can't be removed."
                },
                {
                    "category": "ALS back-up",
                    "question": "Basic measures fail, ALS unavailable?",
                    "answer": "Consult Tele-EMS."
                },
                {
                    "category": "Ineffective ventilation",
                    "question": "Signs of ineffective ventilation?",
                    "answer": "Poor chest rise, absent/diminished breath sounds, SpO2 <92% despite oxygen, high effort without air movement, altered mental status, EtCO2 high or absent."
                },
                {
                    "category": "Ineffective ventilation",
                    "question": "Adult EtCO2 suggesting poor ventilation?",
                    "answer": ">43 mmHg, or no waveform."
                },
                {
                    "category": "Ineffective ventilation",
                    "question": "Pediatric EtCO2 thresholds?",
                    "answer": ">43 school age; >42 infants/toddlers; >40 neonates."
                },
                {
                    "category": "Pediatric EtCO2",
                    "question": "Neonates?",
                    "answer": "30–40 mmHg."
                },
                {
                    "category": "Pediatric EtCO2",
                    "question": "Infants (1 month–1 year)?",
                    "answer": "32–42 mmHg."
                },
                {
                    "category": "Pediatric EtCO2",
                    "question": "Toddlers/preschool (1–5 years)?",
                    "answer": "33–43 mmHg."
                },
                {
                    "category": "Pediatric EtCO2",
                    "question": "School age (6–12 years)?",
                    "answer": "35–43 mmHg."
                },
                {
                    "category": "Pediatric EtCO2",
                    "question": "Healthy children overall?",
                    "answer": "Generally 30–43 mmHg at sea level."
                },
                {
                    "category": "Monitoring",
                    "question": "Monitors during airway management?",
                    "answer": "SpO2, EtCO2 and ECG, continuously."
                },
                {
                    "category": "Goals",
                    "question": "SpO2 range in CPG 2.1 goals?",
                    "answer": "92–98% (management keeps SpO2 >94%)."
                },
                {
                    "category": "KPI",
                    "question": "CPG 2.1 KPIs?",
                    "answer": "Document initial airway findings; oxygen for SpO2 <92% (when appropriate); first-pass intubation."
                },
                {
                    "category": "Documentation",
                    "question": "Treatment documentation for airway?",
                    "answer": "Airway steps and oxygen; OPA/NPA, BVM, advanced airway attempts and response; justification if advanced airway withheld."
                },
                {
                    "category": "Documentation",
                    "question": "Signs documentation?",
                    "answer": "Full vital signs including SpO2 and EtCO2; two sets unless critical; airway findings."
                },
                {
                    "category": "Pediatrics",
                    "question": "Pediatric airway considerations?",
                    "answer": "Age- and size-appropriate equipment; pediatric vital sign norms; Tele-EMS or ALS for complex cases."
                },
                {
                    "category": "Obstruction",
                    "question": "Causes of swelling obstruction?",
                    "answer": "e.g. angioedema, posterior pharyngeal and laryngeal infections."
                },
                {
                    "category": "Obstruction",
                    "question": "Foreign body or debris removal?",
                    "answer": "Suction or Magill's forceps (FBAO CPG)."
                },
                {
                    "category": "Adjuncts",
                    "question": "OPA/NPA complications to avoid?",
                    "answer": "Gagging and bleeding: use the proper size."
                },
                {
                    "category": "Intubation",
                    "question": "Before intubating?",
                    "answer": "Ensure equipment and team readiness."
                },
                {
                    "category": "Intubation",
                    "question": "Before a second attempt?",
                    "answer": "Optimise airway position and vocal cord view."
                },
                {
                    "category": "Ventilator",
                    "question": "Intubated patient and ventilator?",
                    "answer": "Connect where available: Invasive Ventilation CPG."
                },
                {
                    "category": "Advanced",
                    "question": "Advanced airway confirmed by?",
                    "answer": "EtCO2, chest rise/lung sounds, SpO2."
                },
                {
                    "category": "Advanced",
                    "question": "Advanced airway unsuccessful?",
                    "answer": "Second attempt, or revert to OPA / basic airway management."
                },
                {
                    "category": "Monitoring",
                    "question": "How is deterioration detected?",
                    "answer": "Waveform capnography."
                },
                {
                    "category": "Triage",
                    "question": "Triage in airway compromise?",
                    "answer": "As per the Patient Triage Categories CPG."
                },
                {
                    "category": "Reassessment",
                    "question": "What to reassess continuously?",
                    "answer": "Airway, breathing and response to treatment using SpO2, ECG and EtCO2."
                },
                {
                    "category": "Oxygen",
                    "question": "Oxygen in airway management?",
                    "answer": "As needed to keep SpO2 >94%."
                },
                {
                    "category": "LT",
                    "question": "Who may place an LT in a deeply unconscious patient not in arrest?",
                    "answer": "Not EMTs (arrest only); higher levels when OPA/NPA fail."
                },
                {
                    "category": "CPAP",
                    "question": "Is a hypotensive pulmonary edema patient a CPAP candidate?",
                    "answer": "No: hypotension is an absolute contraindication."
                },
                {
                    "category": "Pediatrics",
                    "question": "Pediatric BVM rate?",
                    "answer": "20–30 breaths/min for children and infants."
                }
            ],
            "critical": [
                {
                    "id": "crit_2_1_1",
                    "scenario": "A 60-year-old man is found unresponsive at home after a suspected overdose. He is not in cardiac arrest. Snoring respirations at 8/min, SpO2 86%. No trauma.",
                    "question": "What are your first airway actions?",
                    "options": [
                        {
                            "t": "Head-tilt/chin-lift, suction if needed, OPA or NPA, BVM with 100% oxygen, monitoring, and consider ALS back-up",
                            "f": "Correct. Basic airway management first, supporting inadequate breathing with BVM."
                        },
                        {
                            "t": "Insert an LT airway straight away as an EMT",
                            "f": "EMTs may only insert an LT in cardiac arrest, and basic measures come first."
                        },
                        {
                            "t": "Start CPAP",
                            "f": "Altered mental status is an absolute contraindication to CPAP."
                        },
                        {
                            "t": "Nasal cannula at 2 L/min and observe",
                            "f": "Breathing is inadequate: he needs BVM ventilation."
                        }
                    ],
                    "correct": 0,
                    "explanation": "Clear and open the airway, place an adjunct (EMR level), ventilate with BVM and 100% oxygen if breathing is inadequate, attach SpO2/EtCO2/ECG, and consider ALS back-up for a deeply unconscious patient.",
                    "kpi": "Document initial airway findings for all patients with airway compromise."
                },
                {
                    "id": "crit_2_1_2",
                    "scenario": "An EMT crew is ventilating a deeply unconscious (not arrested) patient with an OPA and BVM, but the airway keeps obstructing.",
                    "question": "What should the EMT crew do?",
                    "options": [
                        {
                            "t": "Insert an LT airway",
                            "f": "EMTs may only insert an LT in cardiac arrest."
                        },
                        {
                            "t": "Continue basic airway management, request ALS back-up for advanced airway management, and consult Tele-EMS if ALS is unavailable",
                            "f": "Correct. A deeply unconscious patient whose basic airway is failing needs ALS for an advanced airway."
                        },
                        {
                            "t": "Stop ventilating and transport",
                            "f": "Keep ventilating: the patient needs support."
                        },
                        {
                            "t": "Start CPAP",
                            "f": "Unconsciousness is an absolute contraindication to CPAP."
                        }
                    ],
                    "correct": 1,
                    "explanation": "Request ALS back-up for advanced airway management when the patient is deeply unconscious or basic measures fail. If ALS is unavailable, consult Tele-EMS.",
                    "kpi": "Document initial airway findings for all patients with airway compromise."
                },
                {
                    "id": "crit_2_1_3",
                    "scenario": "During cardiac arrest you insert an LT airway. When you ventilate, there is no EtCO2 waveform and little chest rise.",
                    "question": "What does this mean and what do you do?",
                    "options": [
                        {
                            "t": "Placement is not confirmed: reassess, and if it cannot be confirmed, re-attempt or revert to OPA and BVM",
                            "f": "Correct. Waveform capnography confirms LT placement; without it, the airway is not working."
                        },
                        {
                            "t": "Ignore it and continue",
                            "f": "No waveform means poor ventilation: act on it."
                        },
                        {
                            "t": "Increase oxygen flow only",
                            "f": "The problem is the airway, not the oxygen flow."
                        },
                        {
                            "t": "Stop CPR to check",
                            "f": "Keep pauses minimal; fix the airway with compressions continuing."
                        }
                    ],
                    "correct": 0,
                    "explanation": "Confirm LT placement with waveform capnography; absence of the waveform indicates poor ventilation. If an advanced airway is unsuccessful, consider a second attempt or revert to OPA and basic airway management.",
                    "kpi": "Document initial airway findings for all patients with airway compromise."
                },
                {
                    "id": "crit_2_1_4",
                    "scenario": "A 70-year-old woman with acute pulmonary edema is breathless and alert. SpO2 84%, BP 82/50. You are an EMT-A crew.",
                    "question": "Is CPAP appropriate?",
                    "options": [
                        {
                            "t": "Yes, pulmonary edema is an indication",
                            "f": "It is an indication, but hypotension is an absolute contraindication."
                        },
                        {
                            "t": "No: hypotension is an absolute contraindication; give high-flow oxygen, support ventilation and request ALS back-up",
                            "f": "Correct. Check contraindications before CPAP."
                        },
                        {
                            "t": "Yes, at a higher pressure",
                            "f": "Hypotension rules CPAP out."
                        },
                        {
                            "t": "Intubate as an EMT-A",
                            "f": "Intubation is a P skill and is reserved for arrest or deep unconsciousness."
                        }
                    ],
                    "correct": 1,
                    "explanation": "CPAP absolute contraindications: unconscious or altered mental status, apnea, facial trauma, untreated pneumothorax, hypotension. See also the Acute Pulmonary Edema CPG.",
                    "kpi": "Give oxygen to all patients with SpO2 <92% (when appropriate)."
                },
                {
                    "id": "crit_2_1_5",
                    "scenario": "You intubated a patient on the ground. After moving him onto the stretcher, the EtCO2 waveform disappears.",
                    "question": "What is the priority?",
                    "options": [
                        {
                            "t": "Reassess tube placement immediately",
                            "f": "Correct. Placement must be reassessed after every movement; a lost waveform suggests displacement."
                        },
                        {
                            "t": "Assume the monitor is faulty",
                            "f": "Treat a lost waveform as a displaced tube until proven otherwise."
                        },
                        {
                            "t": "Continue to hospital without checking",
                            "f": "Placement must be reassessed after each patient movement."
                        },
                        {
                            "t": "Remove the tube without checking",
                            "f": "Reassess first; if it is displaced, re-attempt or revert to an LT or OPA/NPA."
                        }
                    ],
                    "correct": 0,
                    "explanation": "Reassess LT and ETT placement after every patient movement (ground to stretcher, stretcher to bed). Absence of the EtCO2 waveform indicates poor ventilation.",
                    "kpi": "Intubation successful on the first attempt."
                }
            ]
        },
        {
            "id": "c2s2",
            "shortTitle": "2.2 FBAO",
            "guide": {
                "cpg": "2.2",
                "group": "airway",
                "groupLabel": "Airway and Breathing",
                "title": "Foreign Body Airway Obstruction",
                "lead": "Remove the foreign body by the most appropriate means and activate ALS back-up early. A patient who can still cough is helped by coughing; a patient who cannot gets back blows and chest thrusts, and CPR once unresponsive.",
                "source": {
                    "label": "CPG 2.2",
                    "pages": "54–57",
                    "pdf": "../pdf_sections/2_2_Foreign_Body_Airway_Obstruction_FBAO.pdf"
                },
                "sections": [
                    {
                        "type": "criteria",
                        "title": "Who this applies to",
                        "icon": "user",
                        "include": [
                            "Mild choking: can breathe, cough or speak effectively, with mild distress.",
                            "Severe obstruction: stridor, ineffective cough, severe respiratory distress.",
                            "Unresponsive patient with suspected foreign body obstruction."
                        ],
                        "exclude": [
                            "No history of foreign body ingestion."
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Assessment and triage",
                        "icon": "stethoscope",
                        "tone": "alert",
                        "items": [
                            "Look for choking, noisy breathing, stridor, inability to speak, ineffective ventilation.",
                            "Can the patient breathe, cough or speak effectively?",
                            "<b>All moderate and severe FBAO are Red Priority.</b>"
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "Mild choking (partial obstruction)",
                        "icon": "wind",
                        "groups": [
                            {
                                "title": "Management",
                                "items": [
                                    "Reassure, keep the patient in a position of comfort, and encourage coughing. Do not interfere with effective coughing.",
                                    "Avoid interventions unless symptoms worsen; monitor SpO<sub>2</sub> and ECG for deterioration (e.g. SpO<sub>2</sub> &lt;92%, increasing effort).",
                                    "Request ALS back-up if symptoms worsen, and reassess frequently."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "steps",
                        "title": "Severe choking: conscious",
                        "icon": "triangle-alert",
                        "steps": [
                            {
                                "title": "Request ALS back-up",
                                "text": "It can be cancelled if not needed."
                            },
                            {
                                "title": "Position",
                                "text": "Bent over, head lower than shoulders, so gravity helps (if safe and feasible)."
                            },
                            {
                                "title": "Up to 5 back blows",
                                "level": "EMT",
                                "text": "Between the shoulder blades."
                            },
                            {
                                "title": "Then up to 5 chest thrusts",
                                "level": "EMT",
                                "text": "Avoid abdominal thrusts: the Heimlich maneuver is no longer recommended (risk of abdominal injury)."
                            },
                            {
                                "title": "Repeat",
                                "text": "Reassess after each cycle; repeat until the object clears or the patient becomes unconscious. Monitor SpO<sub>2</sub> and ECG."
                            }
                        ]
                    },
                    {
                        "type": "steps",
                        "title": "Severe choking: unresponsive",
                        "icon": "siren",
                        "steps": [
                            {
                                "title": "Start CPR with compressions",
                                "text": "Adults 30:2. Consider ALS back-up."
                            },
                            {
                                "title": "Look before each ventilation",
                                "text": "Remove the object with a finger sweep <b>only if visible</b>. Suction as required."
                            },
                            {
                                "title": "Direct laryngoscopy and Magill's forceps",
                                "level": "AP",
                                "text": "As soon as possible after the patient becomes unresponsive. Maximum 2 attempts."
                            },
                            {
                                "title": "If below the cords or retrieval fails",
                                "level": "AP",
                                "text": "Consider intubation, placing the tube deep then pulling back slightly, to push the object into the right main bronchus and ventilate the other lung."
                            },
                            {
                                "title": "Oxygen",
                                "text": "15 L/min via non-rebreather or BVM."
                            }
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "Special situations",
                        "icon": "lightbulb",
                        "groups": [
                            {
                                "title": "Who is at risk",
                                "items": [
                                    "Young children, older adults and people with intellectual disabilities: adapt assessment and expect communication or compliance challenges."
                                ]
                            },
                            {
                                "title": "Esophageal obstruction",
                                "items": [
                                    "Discomfort or difficulty swallowing saliva: offer small amounts of liquid; if unsuccessful, transport to the closest appropriate hospital. Avoid airway interventions unless the airway is compromised."
                                ]
                            },
                            {
                                "title": "Ingested objects in children",
                                "items": [
                                    "Look for excess saliva, difficulty swallowing, abdominal pain.",
                                    "Hazardous objects (batteries, magnets, sharp items, especially button batteries): urgent transport to the closest appropriate surgical-capable hospital."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Key performance indicators",
                        "icon": "chart-no-axes-column",
                        "items": [
                            "Document the initial airway assessment for all patients with FBAO.",
                            "First intervention (e.g. back blows or chest thrusts) within 1 minute of identification."
                        ]
                    },
                    {
                        "type": "related",
                        "title": "Related CPGs",
                        "icon": "link",
                        "items": [
                            {
                                "label": "2.1 Airway Management",
                                "href": "c2.html?section=c2s1"
                            },
                            {
                                "label": "4.1 Adult BLS",
                                "href": "c4-1.html"
                            },
                            {
                                "label": "4.2 Pediatric BLS",
                                "href": "c4-2.html"
                            }
                        ]
                    }
                ]
            },
            "quiz": [
                {
                    "q": "A conscious choking patient can cough and speak effectively. What do you do?",
                    "options": [
                        "Five back blows immediately",
                        "Encourage coughing, keep them comfortable, and monitor",
                        "Abdominal thrusts",
                        "Insert an OPA"
                    ],
                    "correct": 1,
                    "explanation": "Mild choking: encourage coughing and do not interfere; avoid interventions unless symptoms worsen."
                },
                {
                    "q": "What is the sequence for a conscious patient with severe obstruction?",
                    "options": [
                        "5 abdominal thrusts then 5 back blows",
                        "Up to 5 back blows then up to 5 chest thrusts",
                        "CPR immediately",
                        "5 chest thrusts then 5 back blows"
                    ],
                    "correct": 1,
                    "explanation": "Up to 5 back blows between the shoulder blades, then up to 5 chest thrusts; repeat."
                },
                {
                    "q": "Why does CPG 2.2 avoid abdominal thrusts?",
                    "options": [
                        "They are too slow",
                        "To prevent abdominal injury; the Heimlich maneuver is no longer recommended",
                        "They only work in children",
                        "They need two rescuers"
                    ],
                    "correct": 1,
                    "explanation": "Avoid abdominal thrusts to prevent abdominal injury."
                },
                {
                    "q": "How should a conscious, severely choking patient be positioned (if safe)?",
                    "options": [
                        "Supine",
                        "Bent over with head lower than shoulders",
                        "Sitting upright",
                        "Recovery position"
                    ],
                    "correct": 1,
                    "explanation": "Bent over with the head lower than the shoulders so gravity assists."
                },
                {
                    "q": "What triage category is moderate or severe FBAO?",
                    "options": [
                        "Green",
                        "Yellow",
                        "Red",
                        "Depends on age"
                    ],
                    "correct": 2,
                    "explanation": "All moderate and severe FBAO should be considered Red Priority."
                },
                {
                    "q": "The choking patient becomes unresponsive. What first?",
                    "options": [
                        "Two rescue breaths",
                        "Start CPR, beginning with compressions",
                        "Blind finger sweep",
                        "Check pulse for 30 seconds"
                    ],
                    "correct": 1,
                    "explanation": "Begin CPR starting with compressions."
                },
                {
                    "q": "When may you perform a finger sweep?",
                    "options": [
                        "Always",
                        "Only if the object is visible",
                        "Never",
                        "Only in children"
                    ],
                    "correct": 1,
                    "explanation": "Look in the mouth before each ventilation and remove the object with a finger sweep only if visible."
                },
                {
                    "q": "How many attempts at removal under direct laryngoscopy are permitted?",
                    "options": [
                        "1",
                        "2",
                        "3",
                        "Unlimited"
                    ],
                    "correct": 1,
                    "explanation": "A maximum of 2 attempts with Magill's forceps."
                },
                {
                    "q": "What is the lowest clinical level for removal under direct laryngoscopy?",
                    "options": [
                        "EMT",
                        "EMT-A",
                        "P",
                        "AP"
                    ],
                    "correct": 3,
                    "explanation": "Direct laryngoscopy removal is marked AP in the flowchart."
                },
                {
                    "q": "The object is below the vocal cords and cannot be retrieved. What may be considered?",
                    "options": [
                        "Leave it and transport",
                        "Intubate deep then pull back to push the object into the right main bronchus",
                        "Abdominal thrusts",
                        "Blind finger sweeps"
                    ],
                    "correct": 1,
                    "explanation": "Consider intentionally pushing the object into the right main bronchus to ventilate the other lung."
                },
                {
                    "q": "Within what time should the first intervention be given (KPI)?",
                    "options": [
                        "1 minute of identification",
                        "5 minutes",
                        "10 minutes",
                        "On arrival at hospital"
                    ],
                    "correct": 0,
                    "explanation": "KPI: provide an initial intervention within 1 minute of identification."
                },
                {
                    "q": "A child has swallowed a button battery but is breathing normally. What do you do?",
                    "options": [
                        "Observe at home",
                        "Urgent transport to the closest appropriate surgical-capable hospital",
                        "Give liquids and leave",
                        "Induce vomiting"
                    ],
                    "correct": 1,
                    "explanation": "Hazardous objects, especially button batteries, need urgent transport to a surgical-capable hospital."
                }
            ],
            "flashcards": [
                {
                    "category": "Mild FBAO",
                    "question": "Mild choking criteria?",
                    "answer": "Can breathe, cough or speak effectively, with mild distress."
                },
                {
                    "category": "Mild FBAO",
                    "question": "Mild choking management?",
                    "answer": "Reassure, position of comfort, encourage coughing, don't interfere; monitor SpO2 and ECG; ALS if worsening."
                },
                {
                    "category": "Severe FBAO",
                    "question": "Severe obstruction signs?",
                    "answer": "Stridor, ineffective cough, severe respiratory distress; inability to speak, breathe or cough; silent chest, cyanosis, unconsciousness."
                },
                {
                    "category": "Severe FBAO",
                    "question": "Conscious severe FBAO sequence?",
                    "answer": "Bent over, head below shoulders; up to 5 back blows then up to 5 chest thrusts; repeat until clear or unconscious."
                },
                {
                    "category": "Severe FBAO",
                    "question": "Abdominal thrusts?",
                    "answer": "Avoid: risk of abdominal injury; the Heimlich maneuver is no longer recommended."
                },
                {
                    "category": "Unresponsive",
                    "question": "FBAO patient becomes unresponsive?",
                    "answer": "Start CPR with compressions; look in the mouth before each ventilation; finger sweep only if visible."
                },
                {
                    "category": "Unresponsive",
                    "question": "Direct laryngoscopy removal?",
                    "answer": "AP level; Magill's forceps; maximum 2 attempts."
                },
                {
                    "category": "Unresponsive",
                    "question": "Object below the cords?",
                    "answer": "Consider pushing it into the right main bronchus with a deep ETT, then pulling back to ventilate."
                },
                {
                    "category": "Triage",
                    "question": "Triage for moderate/severe FBAO?",
                    "answer": "Red Priority."
                },
                {
                    "category": "At-risk groups",
                    "question": "Who is at higher risk of FBAO?",
                    "answer": "Young children, older adults, people with intellectual disabilities."
                },
                {
                    "category": "Esophageal",
                    "question": "Suspected esophageal foreign body?",
                    "answer": "Small amounts of liquid; transport if unsuccessful; avoid airway interventions unless compromised."
                },
                {
                    "category": "KPI",
                    "question": "CPG 2.2 KPIs?",
                    "answer": "Document initial airway findings; first intervention within 1 minute of identification."
                }
            ],
            "critical": [
                {
                    "id": "crit_2_2_1",
                    "scenario": "A 50-year-old man is choking in a restaurant. He is conscious but cannot speak or cough. You have given 5 back blows without success.",
                    "question": "What is your next intervention?",
                    "options": [
                        {
                            "t": "Up to 5 chest thrusts",
                            "f": "Correct. Alternate up to 5 back blows and up to 5 chest thrusts until the object clears or he becomes unconscious."
                        },
                        {
                            "t": "Abdominal thrusts",
                            "f": "Avoid abdominal thrusts: the Heimlich maneuver is no longer recommended."
                        },
                        {
                            "t": "A blind finger sweep",
                            "f": "Finger sweeps are only for visible objects in an unresponsive patient."
                        },
                        {
                            "t": "Start CPR",
                            "f": "He is still conscious."
                        }
                    ],
                    "correct": 0,
                    "explanation": "Severe FBAO, conscious: request ALS back-up, position bent over, then cycles of up to 5 back blows and up to 5 chest thrusts, reassessing after each.",
                    "kpi": "First intervention within 1 minute of identification."
                },
                {
                    "id": "crit_2_2_2",
                    "scenario": "During chest thrusts the patient becomes limp and unresponsive.",
                    "question": "What now?",
                    "options": [
                        {
                            "t": "Lower him to the floor and start CPR with compressions; look in the mouth before each ventilation",
                            "f": "Correct. Unresponsive FBAO is managed with CPR, removing a visible object only."
                        },
                        {
                            "t": "Keep giving back blows",
                            "f": "Once unresponsive, start CPR."
                        },
                        {
                            "t": "Do blind finger sweeps until something is found",
                            "f": "Finger sweep only if the object is visible."
                        },
                        {
                            "t": "Wait for ALS before doing anything",
                            "f": "Start CPR now; ALS can perform laryngoscopy when they arrive."
                        }
                    ],
                    "correct": 0,
                    "explanation": "Begin CPR starting with compressions (30:2 adult), look for the object before each ventilation, give oxygen 15 L/min, and an AP can attempt removal under direct laryngoscopy (maximum 2 attempts).",
                    "kpi": "Document the initial airway assessment for all patients with FBAO."
                },
                {
                    "id": "crit_2_2_3",
                    "scenario": "A 3-year-old swallowed a coin-sized round battery 20 minutes ago. She is breathing comfortably but drooling slightly.",
                    "question": "What is the right plan?",
                    "options": [
                        {
                            "t": "Reassure the parents and leave",
                            "f": "Button batteries are hazardous and need urgent hospital care."
                        },
                        {
                            "t": "Urgent transport to the closest appropriate surgical-capable hospital",
                            "f": "Correct. Batteries, magnets and sharp objects, especially button batteries, need urgent transport."
                        },
                        {
                            "t": "Back blows and chest thrusts",
                            "f": "She is not obstructed: these are for severe airway obstruction."
                        },
                        {
                            "t": "Give lots of water and observe at home",
                            "f": "Liquids are for suspected esophageal obstruction; a button battery still needs urgent transport."
                        }
                    ],
                    "correct": 1,
                    "explanation": "For ingested objects in children, assess for saliva, difficulty swallowing and abdominal pain, and transport urgently to a surgical-capable hospital if the object is hazardous.",
                    "kpi": "Document the initial airway assessment for all patients with FBAO."
                }
            ]
        },
        {
            "id": "c2s3",
            "shortTitle": "2.3 Asthma",
            "guide": {
                "cpg": "2.3",
                "group": "airway",
                "groupLabel": "Airway and Breathing",
                "title": "Asthma",
                "lead": "Grade the attack (mild, moderate, severe, life-threatening) and treat in steps: each level adds to the treatment of the one before. Severe and life-threatening asthma can arrest: call for back-up early.",
                "source": {
                    "label": "CPG 2.3",
                    "pages": "58–62",
                    "pdf": "../pdf_sections/2_3_Asthma.pdf"
                },
                "sections": [
                    {
                        "type": "criteria",
                        "title": "Who this applies to",
                        "icon": "user",
                        "include": [
                            "Mild, moderate, severe or life-threatening asthma on respiratory assessment."
                        ],
                        "exclude": [
                            "Breathing difficulty from another cause (e.g. COPD, bronchiolitis, pulmonary edema)."
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Assessment and monitoring",
                        "icon": "stethoscope",
                        "items": [
                            "SpO<sub>2</sub> and ECG on every patient; add nasal-cannula EtCO<sub>2</sub> for moderate, severe and life-threatening cases.",
                            "Listen (wheeze, silent chest, diminished sounds), look (rate, effort, accessory muscles) and feel (chest deformity or tenderness).",
                            "<b>Severe or life-threatening signs:</b> silent chest, GCS &lt;14, BP &lt;90/60 mmHg, very slow or gasping breathing."
                        ]
                    },
                    {
                        "type": "table",
                        "title": "Severity",
                        "icon": "activity",
                        "stack": true,
                        "columns": [
                            "",
                            "Mild",
                            "Moderate",
                            "Severe",
                            "Life-threatening"
                        ],
                        "rows": [
                            [
                                "Talks in",
                                "Sentences",
                                "Phrases",
                                "Words",
                                "Unable to speak"
                            ],
                            [
                                "Consciousness",
                                "Conscious",
                                "Conscious",
                                "Agitated, distressed",
                                "Drowsy, collapsed"
                            ],
                            [
                                "Exhaustion",
                                "No",
                                "No",
                                "Visibly breathless",
                                "Exhausted"
                            ],
                            [
                                "Accessory muscles",
                                "Nil",
                                "Mild",
                                "Moderate",
                                "Severe, or minimal from tiring"
                            ],
                            [
                                "Pulse",
                                "Normal",
                                "Tachycardia",
                                "Tachycardia",
                                "Tachycardia or pre-arrest bradycardia"
                            ],
                            [
                                "Resp. rate",
                                "Normal or raised",
                                "Tachypnea",
                                "May have tachypnea",
                                "Poor effort; may be apneic"
                            ],
                            [
                                "SpO<sub>2</sub> in air",
                                "Usually &gt;95%",
                                "Usually 92–95%",
                                "90–94%",
                                "&lt;90%"
                            ],
                            [
                                "Cyanosis",
                                "No",
                                "No",
                                "May be present",
                                "Present"
                            ]
                        ],
                        "notes": [
                            "<b>Severe</b> needs only one of: speaking words only, or visibly breathless.",
                            "<b>Life-threatening</b> needs only one of: drowsy, collapsed, exhausted, cyanosed, poor respiratory effort, or SpO<sub>2</sub> &lt;90%.",
                            "Wheeze volume is a poor predictor of severity: little air movement makes it quiet."
                        ]
                    },
                    {
                        "type": "steps",
                        "title": "Treatment by severity",
                        "icon": "pill",
                        "steps": [
                            {
                                "title": "Oxygen",
                                "level": "EMR",
                                "text": "If no nebulizer is available and SpO<sub>2</sub> &lt;94%: non-rebreather mask, aiming for SpO<sub>2</sub> 94–98%. Consider ALS back-up."
                            },
                            {
                                "title": "Mild: nebulized salbutamol",
                                "level": "EMT",
                                "text": "Repeat after 15 minutes if required. Dilute with normal saline or sterile water to a maximum of 5 ml.",
                                "doses": [
                                    {
                                        "drug": "Salbutamol (adult)",
                                        "dose": "5 mg neb",
                                        "note": "",
                                        "level": "EMT"
                                    },
                                    {
                                        "drug": "Salbutamol (&lt;5 years)",
                                        "dose": "2.5 mg neb",
                                        "note": "",
                                        "level": "EMT"
                                    },
                                    {
                                        "drug": "Salbutamol (&gt;5 years)",
                                        "dose": "5 mg neb",
                                        "note": "",
                                        "level": "EMT"
                                    }
                                ]
                            },
                            {
                                "title": "Moderate: add Combivent and hydrocortisone",
                                "level": "EMT",
                                "doses": [
                                    {
                                        "drug": "Combivent (adults only)",
                                        "dose": "Ipratropium 0.5 mg + salbutamol 2.5 mg neb",
                                        "note": "Repeat after 20 minutes if required; maximum 3 doses",
                                        "level": "EMT"
                                    },
                                    {
                                        "drug": "Hydrocortisone IM",
                                        "dose": "Adult 100 mg",
                                        "note": "&lt;1 year 25 mg; 1–5 years 50 mg; &gt;5 years 100 mg",
                                        "level": "EMT"
                                    },
                                    {
                                        "drug": "Hydrocortisone IV",
                                        "dose": "Adult 100 mg",
                                        "note": "Same pediatric doses",
                                        "level": "EMT-A"
                                    }
                                ]
                            },
                            {
                                "title": "Severe: add magnesium sulphate",
                                "level": "AP",
                                "text": "Request ALS back-up.",
                                "doses": [
                                    {
                                        "drug": "Magnesium sulphate",
                                        "dose": "Adult 2 g IV/IM",
                                        "note": "Pediatric 40 mg/kg (maximum 2 g). IV infusion over 20 minutes",
                                        "level": "AP"
                                    }
                                ]
                            },
                            {
                                "title": "Life-threatening: add adrenaline",
                                "level": "AP",
                                "doses": [
                                    {
                                        "drug": "Adrenaline IM",
                                        "dose": "Adult 0.3–0.5 mg",
                                        "note": "Pediatric 0.15–0.3 mg",
                                        "level": "AP"
                                    },
                                    {
                                        "drug": "Adrenaline IV infusion",
                                        "dose": "Adult 2–10 mcg/min",
                                        "note": "Pediatric 0.1–1 mcg/kg/min. Use a syringe driver",
                                        "level": "AP"
                                    }
                                ]
                            },
                            {
                                "title": "Reassess",
                                "text": "Frequently, as per the Universal Care CPG."
                            }
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "Clinical notes",
                        "icon": "lightbulb",
                        "groups": [
                            {
                                "title": "Hydrocortisone",
                                "items": [
                                    "IV is preferred in adults with severe asthma.",
                                    "In severe asthma the dose can be increased to 200 mg (adults) or 4 mg/kg (children).",
                                    "If the patient deteriorates after hydrocortisone has been given, a top-up dose is not a priority."
                                ]
                            },
                            {
                                "title": "IV adrenaline",
                                "items": [
                                    "Give via a syringe driver; IV infusions without one are not recommended in adults or children.",
                                    "Before increasing the rate, assess carefully: is it worsening asthma or the effect of adrenaline? Monitor children especially closely."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Key performance indicators",
                        "icon": "chart-no-axes-column",
                        "items": [
                            "Document the respiratory assessment.",
                            "Treatment (e.g. salbutamol) for moderate to life-threatening asthma within 10 minutes of EMS arrival."
                        ]
                    },
                    {
                        "type": "related",
                        "title": "Related CPGs and drug sheets",
                        "icon": "link",
                        "items": [
                            {
                                "label": "2.1 Airway Management",
                                "href": "c2.html?section=c2s1"
                            },
                            {
                                "label": "2.4 COPD",
                                "href": "c2.html?section=c2s4"
                            },
                            {
                                "label": "M36 Salbutamol",
                                "href": "m36.html"
                            },
                            {
                                "label": "M6 Combivent",
                                "href": "m6.html"
                            },
                            {
                                "label": "M20 Hydrocortisone",
                                "href": "m20.html"
                            },
                            {
                                "label": "M24 Magnesium Sulphate",
                                "href": "m24.html"
                            },
                            {
                                "label": "M13 Adrenaline",
                                "href": "m13.html"
                            }
                        ]
                    }
                ]
            },
            "quiz": [
                {
                    "q": "A 30-year-old asthmatic can speak only single words. What is the severity?",
                    "options": [
                        "Mild",
                        "Moderate",
                        "Severe",
                        "Cannot tell"
                    ],
                    "correct": 2,
                    "explanation": "Severe needs only one of: speaking words only, or visibly breathless."
                },
                {
                    "q": "Which single finding makes asthma life-threatening?",
                    "options": [
                        "Speaking in phrases",
                        "SpO2 <90% in air",
                        "Mild accessory muscle use",
                        "Tachycardia alone"
                    ],
                    "correct": 1,
                    "explanation": "Life-threatening: drowsy, collapsed, exhausted, cyanosed, poor effort, or SpO2 <90%."
                },
                {
                    "q": "What does a quiet wheeze in a very breathless asthmatic suggest?",
                    "options": [
                        "Improvement",
                        "Poor air movement; wheeze is a poor guide to severity",
                        "Mild asthma",
                        "Wrong diagnosis"
                    ],
                    "correct": 1,
                    "explanation": "With poor air movement, wheeze may be low volume; it is a poor predictor of severity."
                },
                {
                    "q": "What is the adult dose of nebulized salbutamol?",
                    "options": [
                        "2.5 mg",
                        "5 mg",
                        "7.5 mg",
                        "10 mg"
                    ],
                    "correct": 1,
                    "explanation": "Adult 5 mg; under 5 years 2.5 mg; over 5 years 5 mg. Repeat after 15 minutes if required."
                },
                {
                    "q": "What is the nebulized salbutamol dose for a 3-year-old?",
                    "options": [
                        "1.25 mg",
                        "2.5 mg",
                        "5 mg",
                        "Not given under 5"
                    ],
                    "correct": 1,
                    "explanation": "Pediatric under 5 years: 2.5 mg."
                },
                {
                    "q": "What is the maximum nebulizer volume after dilution?",
                    "options": [
                        "3 ml",
                        "5 ml",
                        "10 ml",
                        "No limit"
                    ],
                    "correct": 1,
                    "explanation": "Dilute with normal saline or sterile water to a maximum of 5 ml."
                },
                {
                    "q": "What is added for moderate asthma in adults?",
                    "options": [
                        "Magnesium",
                        "Combivent and hydrocortisone",
                        "IV adrenaline",
                        "Nothing"
                    ],
                    "correct": 1,
                    "explanation": "Moderate: treatment as for mild, plus nebulized Combivent (adults) and hydrocortisone."
                },
                {
                    "q": "Is Combivent given to children under CPG 2.3?",
                    "options": [
                        "Yes, half dose",
                        "No, adults only",
                        "Only over 5",
                        "Only IV"
                    ],
                    "correct": 1,
                    "explanation": "Combivent is not recommended for pediatric administration."
                },
                {
                    "q": "How often can Combivent be repeated, and to what maximum?",
                    "options": [
                        "Every 5 minutes, unlimited",
                        "After 20 minutes if required, maximum 3 doses",
                        "Once only",
                        "Every 15 minutes, maximum 2"
                    ],
                    "correct": 1,
                    "explanation": "May be repeated after 20 minutes if required; maximum 3 doses."
                },
                {
                    "q": "What is the hydrocortisone dose for a child aged 1–5 years?",
                    "options": [
                        "25 mg",
                        "50 mg",
                        "100 mg",
                        "4 mg/kg always"
                    ],
                    "correct": 1,
                    "explanation": "<1 year 25 mg; 1–5 years 50 mg; >5 years 100 mg; adult 100 mg IV/IM."
                },
                {
                    "q": "Which level can give hydrocortisone IV?",
                    "options": [
                        "EMR",
                        "EMT",
                        "EMT-A",
                        "AP only"
                    ],
                    "correct": 2,
                    "explanation": "Hydrocortisone IM is EMT; hydrocortisone IV is EMT-A."
                },
                {
                    "q": "What is the adult magnesium sulphate dose in severe asthma?",
                    "options": [
                        "1 g bolus",
                        "2 g IV/IM, as an infusion over 20 minutes",
                        "4 g over 10 minutes",
                        "40 mg/kg bolus"
                    ],
                    "correct": 1,
                    "explanation": "Adults 2 g; pediatric 40 mg/kg (maximum 2 g); infuse over 20 minutes."
                },
                {
                    "q": "What is the adult IM adrenaline dose in life-threatening asthma?",
                    "options": [
                        "0.01 mg",
                        "0.15–0.3 mg",
                        "0.3–0.5 mg",
                        "1 mg"
                    ],
                    "correct": 2,
                    "explanation": "Adults 0.3–0.5 mg IM; pediatric 0.15–0.3 mg IM."
                },
                {
                    "q": "How should an IV adrenaline infusion be given?",
                    "options": [
                        "Free-flowing",
                        "Via a syringe driver",
                        "As a bolus",
                        "Through the nebulizer"
                    ],
                    "correct": 1,
                    "explanation": "Use a syringe driver; infusions without one are not recommended."
                },
                {
                    "q": "What is the KPI time for treating moderate to life-threatening asthma?",
                    "options": [
                        "Within 5 minutes",
                        "Within 10 minutes of EMS arrival",
                        "Within 30 minutes",
                        "On arrival at hospital"
                    ],
                    "correct": 1,
                    "explanation": "KPI: treatment within 10 minutes of EMS arrival."
                },
                {
                    "q": "A patient deteriorates to severe after hydrocortisone was given. Is a top-up dose a priority?",
                    "options": [
                        "Yes, immediately",
                        "No, it is not a priority",
                        "Only IM",
                        "Only in children"
                    ],
                    "correct": 1,
                    "explanation": "A top-up dose is not a priority once hydrocortisone has been given."
                }
            ],
            "flashcards": [
                {
                    "category": "Severity",
                    "question": "Severe asthma criteria (any one)?",
                    "answer": "Speaking words only, or visibly breathless."
                },
                {
                    "category": "Severity",
                    "question": "Life-threatening asthma criteria (any one)?",
                    "answer": "Drowsy, collapsed, exhausted, cyanosed, poor respiratory effort, or SpO2 <90%."
                },
                {
                    "category": "Severity",
                    "question": "SpO2 in air by severity?",
                    "answer": "Mild usually >95%; moderate usually 92–95%; severe 90–94%; life-threatening <90%."
                },
                {
                    "category": "Monitoring",
                    "question": "Monitoring in asthma?",
                    "answer": "SpO2 and ECG for all; nasal-cannula EtCO2 for moderate, severe and life-threatening."
                },
                {
                    "category": "Salbutamol",
                    "question": "Salbutamol doses?",
                    "answer": "Adult 5 mg; <5 years 2.5 mg; >5 years 5 mg; repeat after 15 minutes if required."
                },
                {
                    "category": "Combivent",
                    "question": "Combivent dose?",
                    "answer": "Adults only: ipratropium 0.5 mg + salbutamol 2.5 mg; repeat after 20 minutes, maximum 3 doses."
                },
                {
                    "category": "Hydrocortisone",
                    "question": "Hydrocortisone doses?",
                    "answer": "Adult 100 mg IV/IM; <1 year 25 mg; 1–5 years 50 mg; >5 years 100 mg."
                },
                {
                    "category": "Hydrocortisone",
                    "question": "Hydrocortisone in severe asthma?",
                    "answer": "IV preferred in adults; can increase to 200 mg (adult) or 4 mg/kg (child)."
                },
                {
                    "category": "Magnesium",
                    "question": "Magnesium sulphate?",
                    "answer": "Adult 2 g; pediatric 40 mg/kg (max 2 g); IV infusion over 20 minutes. AP level."
                },
                {
                    "category": "Adrenaline",
                    "question": "Adrenaline IM?",
                    "answer": "Adult 0.3–0.5 mg; pediatric 0.15–0.3 mg. AP level."
                },
                {
                    "category": "Adrenaline",
                    "question": "Adrenaline IV infusion?",
                    "answer": "Adult 2–10 mcg/min; pediatric 0.1–1 mcg/kg/min; via syringe driver. AP level."
                },
                {
                    "category": "Scope",
                    "question": "Levels in asthma?",
                    "answer": "Oxygen EMR; salbutamol, Combivent, hydrocortisone IM EMT; hydrocortisone IV EMT-A; magnesium and adrenaline AP."
                },
                {
                    "category": "Oxygen",
                    "question": "Oxygen without a nebulizer?",
                    "answer": "If SpO2 <94%: non-rebreather to SpO2 94–98%."
                },
                {
                    "category": "KPI",
                    "question": "CPG 2.3 KPIs?",
                    "answer": "Document respiratory assessment; treat moderate to life-threatening asthma within 10 minutes of arrival."
                }
            ],
            "critical": [
                {
                    "id": "crit_2_3_1",
                    "scenario": "A 22-year-old asthmatic is drowsy, with a silent chest and SpO2 85%. He has had salbutamol, Combivent and hydrocortisone, and an AP is on scene. Magnesium is running.",
                    "question": "What is the next drug?",
                    "options": [
                        {
                            "t": "IM adrenaline 0.3–0.5 mg, then consider an IV adrenaline infusion",
                            "f": "Correct. Life-threatening asthma: treatment as for severe, plus adrenaline."
                        },
                        {
                            "t": "A second hydrocortisone dose",
                            "f": "A top-up dose is not a priority."
                        },
                        {
                            "t": "More salbutamol only",
                            "f": "He is life-threatening: escalate to adrenaline."
                        },
                        {
                            "t": "CPAP",
                            "f": "He is drowsy: altered mental status is an absolute contraindication to CPAP (CPG 2.1), and CPAP is a caution in asthma."
                        }
                    ],
                    "correct": 0,
                    "explanation": "Drowsiness, silent chest and SpO2 <90% are life-threatening features. Add adrenaline IM 0.3–0.5 mg and an IV infusion of 2–10 mcg/min via syringe driver.",
                    "kpi": "Treatment for moderate to life-threatening asthma within 10 minutes of EMS arrival."
                },
                {
                    "id": "crit_2_3_2",
                    "scenario": "A 3-year-old with known asthma speaks in phrases, uses mild accessory muscles, SpO2 93% in air. You are an EMT crew.",
                    "question": "How do you treat?",
                    "options": [
                        {
                            "t": "Salbutamol 2.5 mg neb plus hydrocortisone 50 mg IM",
                            "f": "Correct. Moderate asthma in a 1–5-year-old: salbutamol 2.5 mg and hydrocortisone 50 mg (IM is within EMT scope). Combivent is adults only."
                        },
                        {
                            "t": "Combivent neb",
                            "f": "Combivent is not recommended for children."
                        },
                        {
                            "t": "Magnesium 40 mg/kg",
                            "f": "Magnesium is for severe asthma and is an AP drug."
                        },
                        {
                            "t": "Salbutamol 5 mg only",
                            "f": "Under 5 years the dose is 2.5 mg, and moderate asthma adds hydrocortisone."
                        }
                    ],
                    "correct": 0,
                    "explanation": "Phrases and mild accessory muscle use with SpO2 92–95% is moderate. Treat as mild (salbutamol) plus hydrocortisone; Combivent is adults only.",
                    "kpi": "Treatment for moderate to life-threatening asthma within 10 minutes of EMS arrival."
                },
                {
                    "id": "crit_2_3_3",
                    "scenario": "An adult asthmatic is visibly breathless and speaking in words. SpO2 92% in air. Salbutamol and Combivent have had little effect.",
                    "question": "What is the severity and the next step?",
                    "options": [
                        {
                            "t": "Severe: request ALS back-up; hydrocortisone, and magnesium sulphate 2 g as an infusion over 20 minutes (AP)",
                            "f": "Correct. Severe asthma: moderate treatment plus magnesium, with ALS back-up."
                        },
                        {
                            "t": "Mild: repeat salbutamol only",
                            "f": "Speaking words and visibly breathless is severe."
                        },
                        {
                            "t": "Life-threatening: IM adrenaline now",
                            "f": "No life-threatening features yet (not drowsy, SpO2 not <90%)."
                        },
                        {
                            "t": "Moderate: no escalation needed",
                            "f": "Words only means severe."
                        }
                    ],
                    "correct": 0,
                    "explanation": "Severe asthma (words only, visibly breathless) adds magnesium sulphate to moderate treatment and needs ALS back-up early: severe asthmatics are at high risk of respiratory arrest.",
                    "kpi": "Document the respiratory assessment."
                }
            ]
        },
        {
            "id": "c2s4",
            "shortTitle": "2.4 COPD",
            "guide": {
                "cpg": "2.4",
                "group": "airway",
                "groupLabel": "Airway and Breathing",
                "title": "COPD Exacerbation",
                "lead": "Give controlled oxygen to SpO<sub>2</sub> 88–92%, bronchodilators, then hydrocortisone, and CPAP or BiPAP if nebulizers fail. Too much oxygen risks hypercapnic respiratory failure.",
                "source": {
                    "label": "CPG 2.4",
                    "pages": "63–66",
                    "pdf": "../pdf_sections/2_4_COPD.pdf"
                },
                "sections": [
                    {
                        "type": "criteria",
                        "title": "Who this applies to",
                        "icon": "user",
                        "include": [
                            "Known COPD with features of exacerbation: more cough, sputum or dyspnea than usual; worsening hypoxemia; tachycardia; hypertension; cyanosis; altered mental status; hypercapnia; accessory muscle use; pursed-lip exhalation."
                        ],
                        "exclude": [
                            "Breathing difficulty from another cause (e.g. asthma)."
                        ]
                    },
                    {
                        "type": "list",
                        "title": "History to take",
                        "icon": "clipboard-list",
                        "items": [
                            "Onset, and concurrent symptoms (fever, cough, rhinorrhea, tongue or lip swelling, rash, foreign body).",
                            "Usual triggers (cigarette smoke, weather change, respiratory infection, exercise).",
                            "Treatment before EMS arrival: oxygen, inhalers, nebulizers, chronic or recent steroids.",
                            "Past year: ED visits and admissions; ever in ICU; ever intubated."
                        ]
                    },
                    {
                        "type": "steps",
                        "title": "Treatment",
                        "icon": "pill",
                        "steps": [
                            {
                                "title": "Controlled oxygen",
                                "level": "EMR",
                                "text": "Nasal cannula from 2 L/min, up to 6 L/min. If no improvement, non-rebreather 10–15 L/min. Target SpO<sub>2</sub> 88–92% to avoid hyperoxia. Consider ALS back-up."
                            },
                            {
                                "title": "Nebulized salbutamol (first choice)",
                                "level": "EMT",
                                "doses": [
                                    {
                                        "drug": "Salbutamol",
                                        "dose": "5 mg neb",
                                        "note": "Repeat every 5 minutes as required",
                                        "level": "EMT"
                                    }
                                ]
                            },
                            {
                                "title": "If not resolving or severe distress: Combivent and hydrocortisone",
                                "level": "EMT",
                                "doses": [
                                    {
                                        "drug": "Combivent",
                                        "dose": "Ipratropium 0.5 mg + salbutamol 3 mg neb",
                                        "note": "Single dose",
                                        "level": "EMT"
                                    },
                                    {
                                        "drug": "Hydrocortisone IV",
                                        "dose": "100–200 mg",
                                        "note": "Slow IV over 2 minutes, or in 100 ml saline over 2–5 minutes. IV preferred",
                                        "level": "EMT-A"
                                    },
                                    {
                                        "drug": "Hydrocortisone IM",
                                        "dose": "100 mg",
                                        "note": "",
                                        "level": "EMT-A"
                                    }
                                ]
                            },
                            {
                                "title": "Reassess",
                                "text": "Severe distress or worsening symptoms? If not, continue care and transport."
                            },
                            {
                                "title": "CPAP if nebulizers are ineffective",
                                "level": "EMT-A",
                                "text": "Consider Tele-EMS for complicated cases or for CPAP/BiPAP settings."
                            },
                            {
                                "title": "BiPAP if inspiratory support is needed",
                                "level": "AP"
                            }
                        ]
                    },
                    {
                        "type": "list",
                        "title": "CPAP / BiPAP contraindications",
                        "icon": "ban",
                        "tone": "alert",
                        "items": [
                            "Altered mental status.",
                            "Apnea.",
                            "Facial trauma or deformity.",
                            "Untreated pneumothorax.",
                            "Hypotension."
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Safety considerations",
                        "icon": "triangle-alert",
                        "items": [
                            "Moderate to severe COPD risks hypercapnic respiratory failure: keep SpO<sub>2</sub> 88–92% to prevent respiratory acidosis, organ dysfunction or coma.",
                            "If adequate oxygenation needs more than low FiO<sub>2</sub>, consider other causes (pulmonary embolism, pneumonia, ARDS, pulmonary edema).",
                            "Consider triggers (infection, pollution), even in patients without a known COPD diagnosis.",
                            "Dilute nebulized salbutamol and Combivent with saline or sterile water to a maximum of 5 ml."
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Key performance indicator",
                        "icon": "chart-no-axes-column",
                        "items": [
                            "Bronchodilators for moderate to severe cases within 10 minutes of EMS arrival."
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
                                "label": "2.3 Asthma",
                                "href": "c2.html?section=c2s3"
                            },
                            {
                                "label": "M36 Salbutamol",
                                "href": "m36.html"
                            },
                            {
                                "label": "M6 Combivent",
                                "href": "m6.html"
                            },
                            {
                                "label": "M20 Hydrocortisone",
                                "href": "m20.html"
                            }
                        ]
                    }
                ]
            },
            "quiz": [
                {
                    "q": "What SpO2 does CPG 2.4 target in a COPD exacerbation?",
                    "options": [
                        "94–98%",
                        "88–92%",
                        "100%",
                        "85–88%"
                    ],
                    "correct": 1,
                    "explanation": "Titrate to SpO2 88–92% to avoid hyperoxia and hypercapnic respiratory failure."
                },
                {
                    "q": "How does oxygen start in COPD?",
                    "options": [
                        "Non-rebreather 15 L/min",
                        "Nasal cannula 2 L/min, up to 6 L/min",
                        "BVM",
                        "No oxygen at all"
                    ],
                    "correct": 1,
                    "explanation": "Start with nasal oxygen at 2 L/min and increase as needed up to 6 L/min."
                },
                {
                    "q": "Nasal cannula at 6 L/min is not enough. What next?",
                    "options": [
                        "Stop oxygen",
                        "Non-rebreather at 10–15 L/min, still targeting 88–92%",
                        "CPAP straight away",
                        "BVM"
                    ],
                    "correct": 1,
                    "explanation": "Change to a non-rebreather at 10–15 L/min to maintain SpO2 88–92%."
                },
                {
                    "q": "What is the first-choice bronchodilator?",
                    "options": [
                        "Combivent",
                        "Nebulized salbutamol 5 mg",
                        "Adrenaline",
                        "Magnesium"
                    ],
                    "correct": 1,
                    "explanation": "Salbutamol 5 mg nebulized is first choice, repeatable every 5 minutes as required."
                },
                {
                    "q": "How often can salbutamol be repeated in COPD?",
                    "options": [
                        "Every 5 minutes as required",
                        "Every 15 minutes",
                        "Every 20 minutes",
                        "Once only"
                    ],
                    "correct": 0,
                    "explanation": "CPG 2.4: repeatable as required every 5 minutes."
                },
                {
                    "q": "What is the Combivent dose in COPD?",
                    "options": [
                        "Ipratropium 0.5 mg + salbutamol 2.5 mg, up to 3 doses",
                        "Ipratropium 0.5 mg + salbutamol 3 mg, single dose",
                        "Ipratropium 1 mg alone",
                        "Salbutamol 10 mg"
                    ],
                    "correct": 1,
                    "explanation": "COPD: 0.5 mg ipratropium + 3 mg salbutamol, single dose. (The Asthma CPG uses a smaller salbutamol dose and allows repeats.)"
                },
                {
                    "q": "What is the IV hydrocortisone dose in COPD?",
                    "options": [
                        "25 mg",
                        "50 mg",
                        "100–200 mg",
                        "4 mg/kg"
                    ],
                    "correct": 2,
                    "explanation": "100–200 mg IV, slow over 2 minutes or in 100 ml saline over 2–5 minutes; or 100 mg IM."
                },
                {
                    "q": "Which hydrocortisone route is preferred in COPD?",
                    "options": [
                        "IM",
                        "IV",
                        "Oral",
                        "Nebulized"
                    ],
                    "correct": 1,
                    "explanation": "Hydrocortisone is preferred via the IV route when possible."
                },
                {
                    "q": "When should CPAP be considered?",
                    "options": [
                        "First line for everyone",
                        "If nebulizer treatments are ineffective",
                        "Only with altered mental status",
                        "Never in COPD"
                    ],
                    "correct": 1,
                    "explanation": "Consider CPAP if nebulizer treatments are ineffective; BiPAP if inspiratory support is required."
                },
                {
                    "q": "Which level can apply BiPAP?",
                    "options": [
                        "EMT",
                        "EMT-A",
                        "AP",
                        "EMR"
                    ],
                    "correct": 2,
                    "explanation": "CPAP is EMT-A; BiPAP is AP."
                },
                {
                    "q": "A COPD patient on CPAP becomes drowsy. What does CPG 2.4 say?",
                    "options": [
                        "Increase pressure",
                        "Altered mental status is a contraindication to CPAP/BiPAP",
                        "Add salbutamol",
                        "Nothing"
                    ],
                    "correct": 1,
                    "explanation": "CPAP/BiPAP contraindications: altered mental status, apnea, facial trauma, untreated pneumothorax, hypotension."
                },
                {
                    "q": "Oxygenation is poor despite low FiO2 treatment. What should you consider?",
                    "options": [
                        "Only COPD",
                        "Other causes: PE, pneumonia, ARDS, pulmonary edema",
                        "Faulty oximeter only",
                        "Give more salbutamol"
                    ],
                    "correct": 1,
                    "explanation": "Consider other causes if adequate oxygenation cannot be achieved with low FiO2."
                },
                {
                    "q": "What is the KPI in CPG 2.4?",
                    "options": [
                        "CPAP within 5 minutes",
                        "Bronchodilators for moderate to severe cases within 10 minutes of arrival",
                        "Hydrocortisone for all",
                        "Transport within 30 minutes"
                    ],
                    "correct": 1,
                    "explanation": "KPI: bronchodilators within 10 minutes of EMS arrival for moderate to severe cases."
                }
            ],
            "flashcards": [
                {
                    "category": "Oxygen",
                    "question": "SpO2 target in COPD?",
                    "answer": "88–92%."
                },
                {
                    "category": "Oxygen",
                    "question": "Oxygen escalation in COPD?",
                    "answer": "Nasal cannula 2 L/min up to 6 L/min; then non-rebreather 10–15 L/min, keeping 88–92%."
                },
                {
                    "category": "Risk",
                    "question": "Why avoid hyperoxia in COPD?",
                    "answer": "Risk of hypercapnic respiratory failure: respiratory acidosis, organ dysfunction, coma."
                },
                {
                    "category": "Salbutamol",
                    "question": "Salbutamol in COPD?",
                    "answer": "5 mg neb, first choice, repeat every 5 minutes as required."
                },
                {
                    "category": "Combivent",
                    "question": "Combivent in COPD?",
                    "answer": "Ipratropium 0.5 mg + salbutamol 3 mg neb, single dose (second choice)."
                },
                {
                    "category": "Hydrocortisone",
                    "question": "Hydrocortisone in COPD?",
                    "answer": "100–200 mg IV (slow over 2 minutes or in 100 ml saline over 2–5 minutes) or 100 mg IM; IV preferred. EMT-A."
                },
                {
                    "category": "Ventilation",
                    "question": "CPAP vs BiPAP in COPD?",
                    "answer": "CPAP (EMT-A) if nebulizers fail; BiPAP (AP) if inspiratory support is needed. Tele-EMS for settings."
                },
                {
                    "category": "Ventilation",
                    "question": "CPAP/BiPAP contraindications?",
                    "answer": "Altered mental status, apnea, facial trauma, untreated pneumothorax, hypotension."
                },
                {
                    "category": "Features",
                    "question": "Features of a COPD exacerbation?",
                    "answer": "More cough, sputum or dyspnea; worsening hypoxemia; tachycardia; hypertension; cyanosis; altered mental status; hypercapnia; accessory muscles; pursed-lip exhalation."
                },
                {
                    "category": "History",
                    "question": "Severity history to ask?",
                    "answer": "ED visits and admissions in the past year; ICU admission or intubation ever."
                },
                {
                    "category": "Differentials",
                    "question": "Poor oxygenation on low FiO2?",
                    "answer": "Consider PE, pneumonia, ARDS, pulmonary edema."
                },
                {
                    "category": "KPI",
                    "question": "CPG 2.4 KPI?",
                    "answer": "Bronchodilators for moderate to severe cases within 10 minutes of EMS arrival."
                }
            ],
            "critical": [
                {
                    "id": "crit_2_4_1",
                    "scenario": "A 70-year-old man with COPD is very short of breath. RR 32, SpO2 82% on room air, alert but tiring. Salbutamol and Combivent have been given with little effect.",
                    "question": "What is the next step?",
                    "options": [
                        {
                            "t": "Hydrocortisone, reassess, and consider CPAP (EMT-A) with Tele-EMS advice on settings",
                            "f": "Correct. Nebulizers have failed and he is alert, with no CPAP contraindication."
                        },
                        {
                            "t": "Oxygen to SpO2 100%",
                            "f": "Target 88–92% to avoid hypercapnic respiratory failure."
                        },
                        {
                            "t": "Magnesium sulphate",
                            "f": "That is asthma treatment, not in CPG 2.4."
                        },
                        {
                            "t": "Intubate now",
                            "f": "Intubation is for arrest or deep unconsciousness (CPG 2.1)."
                        }
                    ],
                    "correct": 0,
                    "explanation": "If nebulizers are ineffective, consider CPAP; if inspiratory support is needed, BiPAP (AP). Keep SpO2 88–92%.",
                    "kpi": "Bronchodilators for moderate to severe cases within 10 minutes of EMS arrival."
                },
                {
                    "id": "crit_2_4_2",
                    "scenario": "A COPD patient on high-flow oxygen from a bystander has SpO2 99% and is becoming drowsy.",
                    "question": "What should you do with the oxygen?",
                    "options": [
                        {
                            "t": "Keep high-flow oxygen: SpO2 is excellent",
                            "f": "Hyperoxia risks hypercapnic respiratory failure in COPD."
                        },
                        {
                            "t": "Titrate oxygen down to SpO2 88–92% and reassess closely",
                            "f": "Correct. Drowsiness on high oxygen suggests hypercapnia."
                        },
                        {
                            "t": "Remove all oxygen",
                            "f": "Titrate rather than stop: aim for 88–92%."
                        },
                        {
                            "t": "Start CPAP",
                            "f": "Altered mental status is a contraindication to CPAP."
                        }
                    ],
                    "correct": 1,
                    "explanation": "Patients with moderate to severe COPD risk hypercapnic respiratory failure: titrate to SpO2 88–92% to prevent respiratory acidosis, organ dysfunction or coma.",
                    "kpi": "Bronchodilators for moderate to severe cases within 10 minutes of EMS arrival."
                },
                {
                    "id": "crit_2_4_3",
                    "scenario": "A COPD patient needs 15 L/min via non-rebreather and still has SpO2 84%. She has a fever and focal crackles.",
                    "question": "What does CPG 2.4 tell you to consider?",
                    "options": [
                        {
                            "t": "Another cause, such as pneumonia, PE, ARDS or pulmonary edema",
                            "f": "Correct. Failure to oxygenate on low FiO2 suggests a different or additional cause."
                        },
                        {
                            "t": "That her oximeter is broken",
                            "f": "Treat the patient, and consider other causes."
                        },
                        {
                            "t": "Lowering oxygen to 2 L/min",
                            "f": "She is hypoxic: titrate to 88–92%, not below."
                        },
                        {
                            "t": "Only giving more salbutamol",
                            "f": "Look for a different cause."
                        }
                    ],
                    "correct": 0,
                    "explanation": "Consider other causes (pulmonary embolism, pneumonia, ARDS, pulmonary edema) if adequate oxygenation cannot be achieved with low FiO2.",
                    "kpi": "Bronchodilators for moderate to severe cases within 10 minutes of EMS arrival."
                }
            ]
        },
        {
            "id": "c2s5",
            "shortTitle": "2.5 Invasive Vent",
            "guide": {
                "cpg": "2.5",
                "group": "airway",
                "groupLabel": "Airway and Breathing",
                "title": "Invasive Ventilation",
                "lead": "Listen to the lungs, decide whether they are normal, obstructive or restrictive (or the patient is in cardiac arrest), and start from that column of settings. Then titrate to SpO<sub>2</sub> &gt;94% and EtCO<sub>2</sub> 35–45 mmHg.",
                "source": {
                    "label": "CPG 2.5",
                    "pages": "67–71",
                    "pdf": "../pdf_sections/2_5_Invasive_Mechanical_Ventilation.pdf"
                },
                "sections": [
                    {
                        "type": "criteria",
                        "title": "Who this applies to",
                        "icon": "user",
                        "include": [
                            "Patients needing invasive ventilation: cardiac arrest (during CPR), obstructive lung disease (asthma, COPD, anaphylaxis), restrictive lung disease (pulmonary edema, ARDS, sepsis, pneumonia), or normal lungs."
                        ],
                        "exclude": [
                            "No ventilator needed.",
                            "Ventilator used for non-invasive ventilation (CPAP/BiPAP)."
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "Auscultate: which lungs?",
                        "icon": "stethoscope",
                        "groups": [
                            {
                                "title": "Normal lungs",
                                "items": [
                                    "Clear lung sounds, no chest trauma, equal air entry."
                                ]
                            },
                            {
                                "title": "Obstructive",
                                "items": [
                                    "Wheezing, asthma or COPD, silent chest, anaphylaxis."
                                ]
                            },
                            {
                                "title": "Restrictive",
                                "items": [
                                    "Crackles, pulmonary edema, pulmonary contusion (chest trauma), ARDS (e.g. sepsis), pneumonia."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "table",
                        "title": "Initial ventilator settings",
                        "icon": "sliders-horizontal",
                        "stack": true,
                        "columns": [
                            "Setting",
                            "Normal",
                            "Obstructive",
                            "Restrictive",
                            "During CPR"
                        ],
                        "rows": [
                            [
                                "Mode",
                                "IPPV/SIMV",
                                "IPPV/SIMV",
                                "IPPV/SIMV",
                                "IPPV/Manual"
                            ],
                            [
                                "Rate",
                                "12–15",
                                "8–10",
                                "15–25",
                                "10"
                            ],
                            [
                                "Tidal volume (mL/kg IBW)",
                                "6–8",
                                "6–8",
                                "4–6",
                                "6–8"
                            ],
                            [
                                "Pmax",
                                "25–30",
                                "35–50",
                                "30–40",
                                "30–35"
                            ],
                            [
                                "PEEP",
                                "5",
                                "5",
                                "5–15",
                                "5"
                            ],
                            [
                                "I:E",
                                "1:2",
                                "1:3–1:4",
                                "1:2",
                                "1:2"
                            ],
                            [
                                "FiO<sub>2</sub>",
                                "1.0",
                                "1.0",
                                "1.0",
                                "1.0"
                            ]
                        ],
                        "notes": [
                            "PEEP as in the management text. The flowchart shows 3–5 for obstructive lungs and 3 during CPR.",
                            "If a setting is not available on the ventilator, consider a bag-valve-mask instead."
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "Adjusting for the lungs",
                        "icon": "wind",
                        "groups": [
                            {
                                "title": "Obstructive",
                                "items": [
                                    "Lower rates, lower PEEP and longer I:E to allow exhalation.",
                                    "Watch for auto-PEEP and air trapping.",
                                    "Do not try to lower hypercapnia by raising the rate."
                                ]
                            },
                            {
                                "title": "Restrictive",
                                "items": [
                                    "Higher rates, more PEEP and shorter I:E for poor compliance."
                                ]
                            },
                            {
                                "title": "Cardiac arrest",
                                "items": [
                                    "Ventilate via an ET tube. A supraglottic airway is acceptable if it works well with no gastric inflation; take great care with it when the ambulance moves.",
                                    "No EtCO<sub>2</sub> reading or low minute volumes: change to a bag-valve-mask.",
                                    "After ROSC, switch to the settings for the patient's lung type."
                                ]
                            },
                            {
                                "title": "Children",
                                "items": [
                                    "Adjust rate and tidal volume for weight and age, using IBW; other settings unchanged."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "list",
                        "title": "After starting",
                        "icon": "activity",
                        "items": [
                            "Once stable, adjust FiO<sub>2</sub> to keep SpO<sub>2</sub> &gt;94%.",
                            "Raise the head 30° unless hypotensive or contraindicated (reduces aspiration).",
                            "Monitor SpO<sub>2</sub>, ECG and EtCO<sub>2</sub> continuously; target EtCO<sub>2</sub> 35–45 mmHg.",
                            "Use a cuff pressure manometer when available to protect the trachea."
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Risks to prevent",
                        "icon": "triangle-alert",
                        "tone": "alert",
                        "items": [
                            "<b>Barotrauma or pneumothorax:</b> correct tidal volume for lung type; watch Pmax.",
                            "<b>Over-ventilation and auto-PEEP:</b> avoid excessive rate or volume, especially in obstructive lungs.",
                            "<b>Hypoxemia or hypercapnia:</b> titrate FiO<sub>2</sub> and confirm ventilation with EtCO<sub>2</sub>.",
                            "<b>Aspiration:</b> head up 30°. <b>Infection:</b> sterile technique."
                        ]
                    },
                    {
                        "type": "groups",
                        "title": "Reference",
                        "icon": "book",
                        "groups": [
                            {
                                "title": "Ideal body weight (IBW)",
                                "items": [
                                    "Males: 50 + 0.91 × (height in cm − 152.4).",
                                    "Females: 45.5 + 0.91 × (height in cm − 152.4).",
                                    "Always use IBW for tidal volume."
                                ]
                            },
                            {
                                "title": "Modes",
                                "items": [
                                    "<b>IPPV:</b> a set tidal volume with each breath, controlled by the ventilator.",
                                    "<b>SIMV:</b> mandatory breaths plus patient-triggered breaths; useful when weaning."
                                ]
                            }
                        ]
                    },
                    {
                        "type": "list",
                        "title": "Key performance indicator",
                        "icon": "chart-no-axes-column",
                        "items": [
                            "Document initial ventilator settings for every patient on a ventilator."
                        ]
                    },
                    {
                        "type": "related",
                        "title": "Related CPGs",
                        "icon": "link",
                        "items": [
                            {
                                "label": "2.1 Airway Management",
                                "href": "c2.html?section=c2s1"
                            },
                            {
                                "label": "4.3 Adult Cardiac Arrest",
                                "href": "c4-3.html"
                            },
                            {
                                "label": "4.7 Post-ROSC Care",
                                "href": "c4-7.html"
                            }
                        ]
                    }
                ]
            },
            "quiz": [
                {
                    "q": "What tidal volume is used for normal lungs?",
                    "options": [
                        "4–6 mL/kg IBW",
                        "6–8 mL/kg IBW",
                        "10–12 mL/kg actual weight",
                        "500 mL for all adults"
                    ],
                    "correct": 1,
                    "explanation": "Normal and obstructive lungs: 6–8 mL/kg IBW; restrictive: 4–6 mL/kg IBW."
                },
                {
                    "q": "What tidal volume is used for restrictive lungs?",
                    "options": [
                        "4–6 mL/kg IBW",
                        "6–8 mL/kg IBW",
                        "8–10 mL/kg IBW",
                        "10–12 mL/kg IBW"
                    ],
                    "correct": 0,
                    "explanation": "Restrictive lungs: 4–6 mL/kg IBW."
                },
                {
                    "q": "What respiratory rate is set for obstructive lungs?",
                    "options": [
                        "8–10",
                        "12–15",
                        "15–25",
                        "20–30"
                    ],
                    "correct": 0,
                    "explanation": "Obstructive: 8–10; normal: 12–15; restrictive: 15–25; CPR: 10."
                },
                {
                    "q": "What I:E ratio is used for obstructive lungs?",
                    "options": [
                        "1:1",
                        "1:2",
                        "1:3–1:4",
                        "2:1"
                    ],
                    "correct": 2,
                    "explanation": "Longer I:E (1:3–1:4) gives time to exhale and limits air trapping."
                },
                {
                    "q": "An asthmatic on the ventilator has a high EtCO2. Should you raise the rate?",
                    "options": [
                        "Yes",
                        "No – do not try to lower hypercapnia by raising the rate in obstructive lungs",
                        "Only double it",
                        "Only in children"
                    ],
                    "correct": 1,
                    "explanation": "Raising the rate risks auto-PEEP and air trapping."
                },
                {
                    "q": "What PEEP range is used for restrictive lungs?",
                    "options": [
                        "0",
                        "3",
                        "5",
                        "5–15"
                    ],
                    "correct": 3,
                    "explanation": "Restrictive lungs need more PEEP: 5–15."
                },
                {
                    "q": "What ventilator rate is set during CPR?",
                    "options": [
                        "6",
                        "10",
                        "15",
                        "20"
                    ],
                    "correct": 1,
                    "explanation": "CPR: IPPV/Manual, rate 10."
                },
                {
                    "q": "During CPR, the EtCO2 reading is lost and minute volumes are low on the ventilator. What do you do?",
                    "options": [
                        "Increase Pmax",
                        "Change to a bag-valve-mask",
                        "Stop ventilating",
                        "Raise the rate to 30"
                    ],
                    "correct": 1,
                    "explanation": "If EtCO2 cannot be obtained or minute volumes are low, consider changing to a BVM."
                },
                {
                    "q": "Can a ventilator be used through a supraglottic airway during CPR?",
                    "options": [
                        "Never",
                        "Yes, if it is working correctly with no gastric inflation, with care during movement",
                        "Only in children",
                        "Only with Pmax 50"
                    ],
                    "correct": 1,
                    "explanation": "Acceptable if functioning correctly and no gastric inflation; significant care during ambulance movement."
                },
                {
                    "q": "Once stable on the ventilator, what is FiO2 titrated to?",
                    "options": [
                        "SpO2 88–92%",
                        "SpO2 >94%",
                        "SpO2 100%",
                        "EtCO2 only"
                    ],
                    "correct": 1,
                    "explanation": "Adjust FiO2 to maintain SpO2 >94%."
                },
                {
                    "q": "What EtCO2 target is given in CPG 2.5?",
                    "options": [
                        "20–30 mmHg",
                        "35–45 mmHg",
                        "45–55 mmHg",
                        ">10 mmHg"
                    ],
                    "correct": 1,
                    "explanation": "Ensure capnography targets (e.g. EtCO2 35–45 mmHg) are met."
                },
                {
                    "q": "How high should the head of the bed be raised, unless contraindicated?",
                    "options": [
                        "Flat",
                        "15°",
                        "30°",
                        "60°"
                    ],
                    "correct": 2,
                    "explanation": "Raise the head 30° unless hypotensive or otherwise contraindicated, to reduce aspiration."
                },
                {
                    "q": "Which formula gives ideal body weight for a male?",
                    "options": [
                        "50 + 0.91 × (height in cm − 152.4)",
                        "45.5 + 0.91 × (height in cm − 152.4)",
                        "Height in cm − 100",
                        "Actual weight × 0.8"
                    ],
                    "correct": 0,
                    "explanation": "Males: 50 + 0.91 × (height − 152.4); females: 45.5 + 0.91 × (height − 152.4). Use IBW for tidal volume."
                },
                {
                    "q": "What is the KPI in CPG 2.5?",
                    "options": [
                        "Intubate within 5 minutes",
                        "Document initial ventilator settings for every patient on a ventilator",
                        "Use SIMV for all",
                        "Keep Pmax under 20"
                    ],
                    "correct": 1,
                    "explanation": "KPI: document initial ventilator settings for all patients on a ventilator."
                }
            ],
            "flashcards": [
                {
                    "category": "Settings",
                    "question": "Normal lungs settings?",
                    "answer": "IPPV/SIMV; rate 12–15; Vt 6–8 mL/kg IBW; Pmax 25–30; PEEP 5; I:E 1:2; FiO2 1.0."
                },
                {
                    "category": "Settings",
                    "question": "Obstructive lungs settings?",
                    "answer": "IPPV/SIMV; rate 8–10; Vt 6–8 mL/kg IBW; Pmax 35–50; PEEP 5 (flowchart 3–5); I:E 1:3–1:4; FiO2 1.0."
                },
                {
                    "category": "Settings",
                    "question": "Restrictive lungs settings?",
                    "answer": "IPPV/SIMV; rate 15–25; Vt 4–6 mL/kg IBW; Pmax 30–40; PEEP 5–15; I:E 1:2; FiO2 1.0."
                },
                {
                    "category": "Settings",
                    "question": "CPR settings?",
                    "answer": "IPPV/Manual; rate 10; Vt 6–8 mL/kg IBW; Pmax 30–35; PEEP 5 (flowchart 3); I:E 1:2; FiO2 1.0."
                },
                {
                    "category": "Lung type",
                    "question": "Signs of obstructive lungs?",
                    "answer": "Wheezing, asthma/COPD, silent chest, anaphylaxis."
                },
                {
                    "category": "Lung type",
                    "question": "Signs of restrictive lungs?",
                    "answer": "Crackles, pulmonary edema, pulmonary contusion, ARDS, pneumonia."
                },
                {
                    "category": "Obstructive",
                    "question": "Ventilating obstructive lungs?",
                    "answer": "Lower rate, lower PEEP, longer I:E; watch for auto-PEEP; don't raise the rate to treat hypercapnia."
                },
                {
                    "category": "Cardiac arrest",
                    "question": "Ventilator problems during CPR?",
                    "answer": "No EtCO2 or low minute volume: change to a BVM. After ROSC: settings for the lung type."
                },
                {
                    "category": "Targets",
                    "question": "Targets on the ventilator?",
                    "answer": "SpO2 >94% (titrate FiO2); EtCO2 35–45 mmHg."
                },
                {
                    "category": "Safety",
                    "question": "Aspiration prevention?",
                    "answer": "Head of bed 30° unless hypotensive or contraindicated."
                },
                {
                    "category": "IBW",
                    "question": "IBW formulas?",
                    "answer": "Male 50 + 0.91 × (cm − 152.4); female 45.5 + 0.91 × (cm − 152.4)."
                },
                {
                    "category": "KPI",
                    "question": "CPG 2.5 KPI?",
                    "answer": "Document initial ventilator settings for every patient on a ventilator."
                }
            ],
            "critical": [
                {
                    "id": "crit_2_5_1",
                    "scenario": "An intubated patient with life-threatening asthma has a silent chest. You are setting up the ventilator.",
                    "question": "Which starting settings fit?",
                    "options": [
                        {
                            "t": "Rate 8–10, Vt 6–8 mL/kg IBW, I:E 1:3–1:4, Pmax 35–50",
                            "f": "Correct. Obstructive lungs need a low rate and long expiration."
                        },
                        {
                            "t": "Rate 15–25, Vt 4–6 mL/kg IBW, PEEP 5–15",
                            "f": "These are restrictive-lung settings."
                        },
                        {
                            "t": "Rate 20 to blow off CO2",
                            "f": "Do not raise the rate to treat hypercapnia in obstructive lungs."
                        },
                        {
                            "t": "Rate 12–15, I:E 1:2",
                            "f": "These are normal-lung settings; asthma needs longer expiration."
                        }
                    ],
                    "correct": 0,
                    "explanation": "Obstructive pathology: lower respiratory rate, lower PEEP and longer I:E ratio to permit exhalation, and monitor closely for auto-PEEP.",
                    "kpi": "Document initial ventilator settings for every patient on a ventilator."
                },
                {
                    "id": "crit_2_5_2",
                    "scenario": "A patient with acute pulmonary edema has been intubated. Crackles throughout, SpO2 88% on the ventilator.",
                    "question": "Which settings fit best?",
                    "options": [
                        {
                            "t": "Rate 15–25, Vt 4–6 mL/kg IBW, PEEP 5–15, I:E 1:2",
                            "f": "Correct. Restrictive lungs need higher rates and PEEP, with small tidal volumes."
                        },
                        {
                            "t": "Rate 8–10, I:E 1:4",
                            "f": "These are obstructive settings."
                        },
                        {
                            "t": "Vt 10 mL/kg actual body weight",
                            "f": "Use IBW; restrictive lungs take 4–6 mL/kg."
                        },
                        {
                            "t": "PEEP 0",
                            "f": "Restrictive lungs need more PEEP, not less."
                        }
                    ],
                    "correct": 0,
                    "explanation": "Restrictive lung pathology requires higher rates and PEEP for poor compliance, with tidal volume 4–6 mL/kg IBW. Titrate FiO2 to SpO2 >94%.",
                    "kpi": "Document initial ventilator settings for every patient on a ventilator."
                },
                {
                    "id": "crit_2_5_3",
                    "scenario": "During CPR you are using the ventilator through an LT airway. The EtCO2 reading disappears and the displayed minute volume is very low.",
                    "question": "What should you do?",
                    "options": [
                        {
                            "t": "Change to bag-valve-mask ventilation and check the airway",
                            "f": "Correct. No EtCO2 or low minute volumes on the ventilator means switch to a BVM."
                        },
                        {
                            "t": "Raise Pmax to 60",
                            "f": "That risks barotrauma and does not fix a failing airway."
                        },
                        {
                            "t": "Continue unchanged",
                            "f": "Act on the loss of EtCO2."
                        },
                        {
                            "t": "Pause CPR to troubleshoot",
                            "f": "Keep compressions going."
                        }
                    ],
                    "correct": 0,
                    "explanation": "During cardiac arrest, ensure the ET or supraglottic airway is functioning; if EtCO2 cannot be obtained or minute volumes are low, consider a BVM.",
                    "kpi": "Document initial ventilator settings for every patient on a ventilator."
                }
            ]
        }
    ]
};
