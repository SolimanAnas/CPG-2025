/* ========== CPG 8.6 – Diving (SCUBA) Emergencies ==========
 * Written from the official DCAS CPG 2025 PDF (data/cpg-source/) and
 * rendered by cpg-guide.js.
 */
window.CPG_DATA = {
    "id": "c8-6",
    "title": "Diving (SCUBA) Emergencies",
    "shortTitle": "8.6 Diving Emergencies",
    "guide": {
        "cpg": "8.6",
        "group": "environmental",
        "groupLabel": "Environmental",
        "title": "Diving (SCUBA) Emergencies",
        "lead": "Any new symptom after a dive is decompression illness until proven otherwise. Give 100% oxygen by non-rebreather regardless of SpO<sub>2</sub>, within 5 minutes. Keep the diver supine and still, and transport urgently to a hospital with a hyperbaric chamber, bringing the dive computer.",
        "source": {
            "label": "CPG 8.6",
            "pages": "268–271",
            "pdf": "../pdf_sections/8_6_Diving_SCUBA_Emergencies.pdf"
        },
        "sections": [
            {
                "type": "criteria",
                "title": "Who this applies to",
                "icon": "user",
                "include": [
                    "Recent diving with shortness of breath, chest pain, cough; dizziness, confusion, numbness, weakness; joint or muscle pain; visual changes, tinnitus, fatigue or collapse.",
                    "Symptoms developing within 24 hours of a dive."
                ],
                "exclude": [
                    "No SCUBA diving within the last 48 hours."
                ]
            },
            {
                "type": "groups",
                "title": "Assess",
                "icon": "stethoscope",
                "groups": [
                    {
                        "title": "Dive history",
                        "items": [
                            "Time and number of dives, depth and duration, compressed gas.",
                            "Rapid ascent or missed safety stops; flying or altitude after diving."
                        ]
                    },
                    {
                        "title": "ABC",
                        "items": [
                            "Airway: gurgling, vomiting. Breathing: dyspnea, cough, chest tightness, wheeze, crackles, reduced breath sounds; SpO<sub>2</sub> aim ≥94%.",
                            "Circulation: arrhythmias, bradycardia, hypotension; cyanosis may mean serious gas embolism."
                        ]
                    },
                    {
                        "title": "Neurology",
                        "items": [
                            "GCS or AVPU; confusion, headache, dizziness, slurred speech; paralysis, numbness, seizures; visual or hearing disturbance; ataxia."
                        ]
                    },
                    {
                        "title": "Exposure",
                        "items": [
                            "Skin mottling (cutis marmorata); joint or back pain: decompression sickness.",
                            "Barotrauma: facial bruising, ear bleeding."
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
                        "Neurological symptoms; chest pain, dyspnea, cyanosis; SpO<sub>2</sub> &lt;90% or GCS &lt;13; suspected AGE; collapse after surfacing"
                    ],
                    [
                        "Yellow",
                        "Joint or muscle pain or mild dizziness; alert with stable vitals; improving but not resolved on oxygen"
                    ]
                ]
            },
            {
                "type": "steps",
                "title": "Management",
                "icon": "list",
                "steps": [
                    {
                        "title": "Oxygen",
                        "level": "EMR",
                        "text": "100% via NRB (10–15 L/min) regardless of SpO<sub>2</sub>, even if the patient looks stable; continue throughout transport. The most important prehospital treatment."
                    },
                    {
                        "title": "Position",
                        "text": "Supine (flowchart: supine or left lateral); recovery position if unconscious or vomiting. No leg raising or head-down position."
                    },
                    {
                        "title": "ALS back-up",
                        "text": "Early for Red priority, neurological or respiratory cases."
                    },
                    {
                        "title": "Fluid",
                        "level": "EMT",
                        "text": "For hypotension or dehydration; avoid excess unless guided by ALS or Tele-EMS.",
                        "doses": [
                            {
                                "drug": "Adult",
                                "dose": "500 mL IV",
                                "level": "EMT"
                            },
                            {
                                "drug": "Pediatric",
                                "dose": "10 mL/kg IV",
                                "level": "EMT"
                            }
                        ]
                    },
                    {
                        "title": "Pain",
                        "text": "As per the Pain Management CPG."
                    },
                    {
                        "title": "Avoid triggers",
                        "text": "No exertion, standing or walking. Keep warm and calm. Avoid helicopter evacuation unless unavoidable."
                    },
                    {
                        "title": "Reassess",
                        "text": "GCS; limb strength, movement and sensation every 5–10 minutes; speech, facial droop, coordination; pain; response to oxygen."
                    },
                    {
                        "title": "Transport",
                        "text": "Urgent for all symptomatic patients. Dispatch 2 confirms a hyperbaric chamber (consider Al Zahra hospital); if none is free, an emergency department first. Bring the dive computer and equipment."
                    }
                ]
            },
            {
                "type": "groups",
                "title": "Understand it",
                "icon": "lightbulb",
                "groups": [
                    {
                        "title": "Decompression sickness",
                        "items": [
                            "Nitrogen bubbles forming in tissues after a dive."
                        ]
                    },
                    {
                        "title": "Arterial gas embolism",
                        "items": [
                            "Air entering the bloodstream, often from lung over-expansion."
                        ]
                    },
                    {
                        "title": "Remember",
                        "items": [
                            "Symptoms can appear minutes to hours after surfacing; mild symptoms can worsen.",
                            "Definitive treatment is hyperbaric oxygen: never delay transport.",
                            "Children and first-time divers are at risk.",
                            "Consider spinal injury in unconscious divers."
                        ]
                    }
                ]
            },
            {
                "type": "list",
                "title": "Key performance indicators",
                "icon": "chart-no-axes-column",
                "items": [
                    "Oxygen within 5 minutes of arrival at the patient.",
                    "Dive time and depth documented in the ePCR."
                ]
            },
            {
                "type": "related",
                "title": "Related CPGs",
                "icon": "link",
                "items": [
                    {
                        "label": "8.7 Drowning",
                        "href": "c8-7.html"
                    },
                    {
                        "label": "5.1 Stroke",
                        "href": "c5-1.html"
                    },
                    {
                        "label": "6.12 Pain Management",
                        "href": "c6-12.html"
                    },
                    {
                        "label": "7.5 Spinal Motion Restriction",
                        "href": "c7-5.html"
                    }
                ]
            }
        ]
    },
    "quiz": [
        {
            "q": "What is the most important prehospital treatment?",
            "options": [
                "100% oxygen",
                "IV fluids",
                "Pain relief",
                "Walking to the ambulance"
            ],
            "correct": 0,
            "explanation": "Via NRB, regardless of SpO₂."
        },
        {
            "q": "Joint pain, dizziness and numbness after a deep dive suggest…",
            "options": [
                "Decompression sickness",
                "Food poisoning",
                "Migraine",
                "Sunburn"
            ],
            "correct": 0,
            "explanation": "Joint or back pain suggests DCS."
        },
        {
            "q": "How is the diver positioned?",
            "options": [
                "Supine; recovery position if vomiting or unconscious",
                "Head-down",
                "Legs raised",
                "Sitting and walking"
            ],
            "correct": 0,
            "explanation": "No Trendelenburg."
        },
        {
            "q": "Sudden collapse and focal deficits right after surfacing suggest…",
            "options": [
                "Arterial gas embolism",
                "Decompression sickness of a joint",
                "Hypoglycemia only",
                "Ear barotrauma only"
            ],
            "correct": 0,
            "explanation": "AGE: Red priority."
        },
        {
            "q": "Is oxygen titrated to SpO₂?",
            "options": [
                "No: 100% regardless of SpO₂",
                "Yes, to 92%",
                "Only if SpO₂ <90%",
                "Never given"
            ],
            "correct": 0,
            "explanation": "Even if the patient appears stable."
        },
        {
            "q": "Why no walking or exertion?",
            "options": [
                "It increases gas migration",
                "It is tiring",
                "It raises glucose",
                "No reason"
            ],
            "correct": 0,
            "explanation": "Avoid exertion."
        },
        {
            "q": "What is the definitive treatment?",
            "options": [
                "Hyperbaric oxygen therapy",
                "Antibiotics",
                "Thrombolysis",
                "Steroids"
            ],
            "correct": 0,
            "explanation": "Never delay transport."
        },
        {
            "q": "What adult fluid is on the flowchart?",
            "options": [
                "500 mL IV",
                "2000 mL",
                "None",
                "50 mL"
            ],
            "correct": 0,
            "explanation": "For hypotension or dehydration."
        },
        {
            "q": "Which is Red priority?",
            "options": [
                "Confusion after a dive",
                "Mild joint pain, stable",
                "Improving dizziness on oxygen",
                "Asymptomatic"
            ],
            "correct": 0,
            "explanation": "Neurological symptoms are Red."
        },
        {
            "q": "What oxygen flow is given?",
            "options": [
                "10–15 L/min via NRB",
                "2 L/min nasal cannula",
                "Room air",
                "Only if cyanosed"
            ],
            "correct": 0,
            "explanation": "100% oxygen."
        },
        {
            "q": "GCS 12 after a dive. Triage?",
            "options": [
                "Red",
                "Green",
                "Yellow",
                "Black"
            ],
            "correct": 0,
            "explanation": "GCS <13 is Red."
        },
        {
            "q": "Why does a rapid ascent matter?",
            "options": [
                "It raises the risk of DCS and AGE",
                "It doesn't",
                "It prevents bubbles",
                "It cools the diver"
            ],
            "correct": 0,
            "explanation": "Ask about missed safety stops."
        },
        {
            "q": "Ear bleeding and facial bruising after a dive suggest…",
            "options": [
                "Barotrauma",
                "Stroke",
                "Sepsis",
                "Allergy"
            ],
            "correct": 0,
            "explanation": "Check during exposure assessment."
        },
        {
            "q": "Why avoid head-down positioning?",
            "options": [
                "It may worsen embolism or cerebral edema",
                "It improves bubbles",
                "It is comfortable",
                "No reason"
            ],
            "correct": 0,
            "explanation": "As per the CPG."
        },
        {
            "q": "Which time window defines inclusion?",
            "options": [
                "Symptoms within 24 hours of a dive",
                "Within 1 hour only",
                "Within 2 weeks",
                "Any time"
            ],
            "correct": 0,
            "explanation": "Exclusion: no dive within 48 hours."
        },
        {
            "q": "Respiratory distress in a diver. Priority?",
            "options": [
                "100% oxygen and airway support",
                "Fluids",
                "Pain relief",
                "Walk"
            ],
            "correct": 0,
            "explanation": "Oxygen first."
        },
        {
            "q": "What are the KPIs?",
            "options": [
                "Oxygen within 5 minutes; dive time and depth documented",
                "Fluids for all",
                "12-lead in all",
                "Hyperbaric on scene"
            ],
            "correct": 0,
            "explanation": "Two KPIs."
        },
        {
            "q": "An unconscious diver. What else do you consider?",
            "options": [
                "Spinal involvement",
                "Nothing",
                "Food poisoning",
                "Sunstroke"
            ],
            "correct": 0,
            "explanation": "Clinical insight."
        },
        {
            "q": "Why notify the hospital early?",
            "options": [
                "To arrange hyperbaric treatment",
                "To book a bed for tomorrow",
                "Not needed",
                "To call the family"
            ],
            "correct": 0,
            "explanation": "Dispatch 2 confirms the chamber."
        },
        {
            "q": "What should travel with the patient?",
            "options": [
                "Dive computer and equipment",
                "Nothing",
                "Only the wetsuit",
                "Only ID"
            ],
            "correct": 0,
            "explanation": "On the flowchart."
        },
        {
            "q": "Mottled skin after a dive is called…",
            "options": [
                "Cutis marmorata",
                "Urticaria",
                "Petechiae",
                "Jaundice"
            ],
            "correct": 0,
            "explanation": "Suggests DCS."
        },
        {
            "q": "What pediatric fluid is on the flowchart?",
            "options": [
                "10 mL/kg",
                "40 mL/kg",
                "1 mL/kg",
                "None"
            ],
            "correct": 0,
            "explanation": "For hypotension or dehydration."
        },
        {
            "q": "How is pain treated?",
            "options": [
                "As per the Pain Management CPG",
                "Never",
                "Only with aspirin",
                "Walking it off"
            ],
            "correct": 0,
            "explanation": "Provide pain relief."
        },
        {
            "q": "How often is neurology rechecked?",
            "options": [
                "Every 5–10 minutes",
                "Once",
                "Hourly",
                "Never"
            ],
            "correct": 0,
            "explanation": "Strength, movement, sensation."
        },
        {
            "q": "What is avoided for evacuation?",
            "options": [
                "Helicopter, unless unavoidable",
                "Ground ambulance",
                "Stretcher",
                "Oxygen"
            ],
            "correct": 0,
            "explanation": "Altitude can worsen bubbles."
        },
        {
            "q": "Vomiting diver. Position?",
            "options": [
                "Recovery (lateral) position",
                "Supine flat",
                "Head-down",
                "Sitting"
            ],
            "correct": 0,
            "explanation": "Protects the airway."
        },
        {
            "q": "No chamber free immediately. What then?",
            "options": [
                "Emergency department first while waiting",
                "Wait on scene",
                "Send home",
                "Cancel transport"
            ],
            "correct": 0,
            "explanation": "Per safety considerations."
        },
        {
            "q": "Which hospital is suggested?",
            "options": [
                "Al Zahra hospital (confirm via Dispatch 2)",
                "Any clinic",
                "None",
                "The nearest pharmacy"
            ],
            "correct": 0,
            "explanation": "Confirm hyperbaric availability."
        },
        {
            "q": "What does lack of response to oxygen suggest?",
            "options": [
                "Severe embolism: continue oxygen and expedite",
                "Stop oxygen",
                "Recovery",
                "Hyperventilation"
            ],
            "correct": 0,
            "explanation": "Reassessment point."
        },
        {
            "q": "Mild symptoms after a dive. Transport?",
            "options": [
                "Yes: they may worsen",
                "No",
                "Only if they get worse",
                "Only children"
            ],
            "correct": 0,
            "explanation": "Transport all symptomatic patients."
        }
    ],
    "flashcards": [
        {
            "question": "DCS",
            "answer": "Nitrogen bubbles in tissues after a dive: joint/back pain, mottling, neuro signs."
        },
        {
            "question": "AGE",
            "answer": "Air in the arteries from lung over-expansion: sudden collapse, neuro deficits after surfacing."
        },
        {
            "question": "Oxygen",
            "answer": "100% via NRB 10–15 L/min regardless of SpO₂, within 5 minutes (EMR)."
        },
        {
            "question": "Position",
            "answer": "Supine; recovery position if vomiting or unconscious; never head-down."
        },
        {
            "question": "Fluid",
            "answer": "Adult 500 mL, child 10 mL/kg for hypotension or dehydration (EMT)."
        },
        {
            "question": "Avoid",
            "answer": "Exertion, walking, standing, cold, helicopter (unless unavoidable)."
        },
        {
            "question": "Definitive care",
            "answer": "Hyperbaric oxygen: Dispatch 2 confirms a chamber; consider Al Zahra hospital."
        },
        {
            "question": "Bring",
            "answer": "Dive computer and diving equipment."
        },
        {
            "question": "Dive history",
            "answer": "Time, number, depth, duration, gas, rapid ascent, missed stops, flying after diving."
        },
        {
            "question": "Red priority",
            "answer": "Neuro signs, chest pain/dyspnea/cyanosis, SpO₂ <90% or GCS <13, AGE, collapse."
        },
        {
            "question": "Yellow priority",
            "answer": "Joint pain or mild dizziness, stable, improving on oxygen."
        },
        {
            "question": "Barotrauma",
            "answer": "Facial bruising, ear bleeding."
        },
        {
            "question": "Cutis marmorata",
            "answer": "Mottled skin: suggests DCS."
        },
        {
            "question": "Reassessment",
            "answer": "Neuro every 5–10 min; pain; response to oxygen."
        },
        {
            "question": "Timing",
            "answer": "Symptoms minutes to hours after surfacing; inclusion within 24 hours."
        },
        {
            "question": "Unconscious diver",
            "answer": "Consider spinal involvement."
        },
        {
            "question": "At-risk groups",
            "answer": "Children and first-time divers."
        },
        {
            "question": "Pain",
            "answer": "Pain Management CPG."
        },
        {
            "question": "ALS",
            "answer": "Early for Red, neurological or respiratory cases."
        },
        {
            "question": "KPIs",
            "answer": "Oxygen within 5 minutes; dive time and depth documented."
        }
    ],
    "critical": [
        {
            "id": "crit_8_6_1",
            "scenario": "Twenty minutes after a deep dive with a rapid ascent, a diver has joint pain, dizziness and arm numbness. SpO₂ 98%.",
            "question": "What first?",
            "options": [
                {
                    "t": "100% oxygen via NRB regardless of SpO₂, lie him supine, no walking, ALS, chamber via Dispatch 2",
                    "f": "Correct."
                },
                {
                    "t": "No oxygen: SpO₂ is normal",
                    "f": "Oxygen regardless of SpO₂."
                },
                {
                    "t": "Let him walk to the ambulance",
                    "f": "No exertion."
                },
                {
                    "t": "Head-down position",
                    "f": "Never."
                }
            ],
            "correct": 0,
            "explanation": "Neurological symptoms are Red priority.",
            "kpi": "Oxygen within 5 minutes."
        },
        {
            "id": "crit_8_6_2",
            "scenario": "A diver collapses on surfacing with confusion and right-sided weakness.",
            "question": "What is likely and what do you do?",
            "options": [
                {
                    "t": "Arterial gas embolism: 100% oxygen, supine, urgent transport to hyperbaric care",
                    "f": "Correct."
                },
                {
                    "t": "Stroke: stroke center only",
                    "f": "After a dive, think AGE."
                },
                {
                    "t": "Observe for an hour",
                    "f": "Never delay."
                },
                {
                    "t": "Helicopter routinely",
                    "f": "Avoid unless unavoidable."
                }
            ],
            "correct": 0,
            "explanation": "AGE: air in the arteries after lung over-expansion.",
            "kpi": "Oxygen within 5 minutes."
        },
        {
            "id": "crit_8_6_3",
            "scenario": "A diver with suspected DCS is hypotensive at 85/50.",
            "question": "What fluid?",
            "options": [
                {
                    "t": "500 mL IV (adult), avoid excess unless guided by ALS/Tele-EMS",
                    "f": "Correct."
                },
                {
                    "t": "No fluid",
                    "f": "Hypotension is an indication."
                },
                {
                    "t": "3 L",
                    "f": "Avoid excess."
                },
                {
                    "t": "Oral fluids while lying flat",
                    "f": "IV."
                }
            ],
            "correct": 0,
            "explanation": "Continue oxygen throughout.",
            "kpi": "Oxygen within 5 minutes."
        },
        {
            "id": "crit_8_6_4",
            "scenario": "Your diver's symptoms improve on oxygen. He wants to go home.",
            "question": "What do you advise?",
            "options": [
                {
                    "t": "Transport: mild symptoms can worsen; definitive treatment is hyperbaric",
                    "f": "Correct."
                },
                {
                    "t": "Go home: he's better",
                    "f": "Symptoms can return or worsen."
                },
                {
                    "t": "Stop oxygen",
                    "f": "Continue throughout transport."
                },
                {
                    "t": "Fly home",
                    "f": "Altitude worsens DCS."
                }
            ],
            "correct": 0,
            "explanation": "Improving but not resolved is still Yellow at least.",
            "kpi": "Dive time and depth documented."
        },
        {
            "id": "crit_8_6_5",
            "scenario": "An unconscious diver is pulled from the water and is vomiting.",
            "question": "How do you manage the position and airway?",
            "options": [
                {
                    "t": "Recovery position with spinal awareness, suction, 100% oxygen",
                    "f": "Correct."
                },
                {
                    "t": "Head-down to drain the lungs",
                    "f": "Never head-down."
                },
                {
                    "t": "Sit him up",
                    "f": "Unconscious: recovery position."
                },
                {
                    "t": "Supine without airway care",
                    "f": "Protect the airway."
                }
            ],
            "correct": 0,
            "explanation": "Consider spinal involvement in unconscious divers.",
            "kpi": "Oxygen within 5 minutes."
        }
    ]
};
