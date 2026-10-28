/* ========== CPG 4.3 – Adult Cardiac Arrest ==========
 * Source: DCAS CPG 2025, CPG 4.3 (pp. 101–105) – data/cpg-source/4_3_Adult_Cardiac_Arrest.txt
 */
window.CPG_DATA = {
    id: "c4-3",
    title: "Adult Cardiac Arrest",
    shortTitle: "4.3 Adult Cardiac Arrest",
    guide: {
        cpg: "4.3",
        group: "resus",
        groupLabel: "Resuscitation",
        title: "Adult Cardiac Arrest",
        lead: "Adults (≥13 years) in cardiac arrest: high-quality CPR, early defibrillation and ALS to restore spontaneous circulation, while finding and treating reversible causes. All cardiac arrest patients are Red Priority.",
        source: { label: "CPG 4.3", pages: "101–105", pdf: "../pdf_sections/4_3_Adult_Cardiac_Arrest.pdf" },
        sections: [
            {
                type: "list", title: "Recognise and start", icon: "siren", tone: "alert",
                items: [
                    "<b>Confirm arrest:</b> no response to voice or pain (AVPU); no carotid or femoral pulse and no normal breathing (or agonal gasps), checked together for 5–10 seconds.",
                    "<b>Follow CAB</b> (Circulation, Airway, Breathing). Assign team roles: compressor, ventilator, defibrillator operator, medication administrator.",
                    "<b>Call for ALS back-up.</b>",
                    "<b>Start CPR</b>, give oxygen 15 L/min via BVM and attach the defibrillator."
                ]
            },
            {
                type: "pathways", title: "Rhythm-based treatment", icon: "heart-pulse",
                intro: "Check the rhythm every 2 minutes.",
                paths: [
                    {
                        title: "Shockable – VF / pulseless VT", tone: "shock",
                        steps: [
                            { text: "Shock as soon as the defibrillator is ready, then CPR 2 min." },
                            { text: "IV/IO access; apply LUCAS." },
                            { text: "Still shockable: shock, then CPR 2 min with adrenaline 1 mg every 3–5 minutes.", level: "EMT" },
                            { text: "Consider a supraglottic airway; capnography.", level: "EMT" },
                            { text: "Consider intubation.", level: "P" },
                            { text: "Amiodarone 300 mg after the 3rd shock; 150 mg after the 5th shock.", level: "EMT" }
                        ]
                    },
                    {
                        title: "Non-shockable – asystole / PEA", tone: "noshock",
                        steps: [
                            { text: "Adrenaline as soon as possible, then 1 mg every 3–5 minutes.", level: "EMT" },
                            { text: "CPR 2 min; IV access; apply LUCAS." },
                            { text: "Consider a supraglottic airway; capnography.", level: "EMT" },
                            { text: "Consider IO access.", level: "EMT-A" },
                            { text: "Consider intubation.", level: "P" },
                            { text: "CPR 2 min, treating reversible causes. If the rhythm becomes shockable, move to the shockable pathway." }
                        ]
                    }
                ],
                after: "<b>ROSC:</b> go to the Post Cardiac Arrest Care (ROSC) CPG. <b>No ROSC:</b> continue, or see the Starting, Stopping or Transferring CPR CPG."
            },
            {
                type: "doses", title: "Drugs", icon: "syringe",
                rows: [
                    { drug: "Adrenaline", dose: "1 mg IV/IO", note: "Every 3–5 minutes", level: "EMT" },
                    { drug: "Amiodarone", dose: "300 mg IV/IO", note: "1st dose, after the 3rd shock", level: "EMT" },
                    { drug: "Amiodarone", dose: "150 mg IV/IO", note: "2nd dose, after the 5th shock", level: "EMT" }
                ]
            },
            {
                type: "groups", title: "High-quality CPR", icon: "activity",
                groups: [
                    {
                        title: "Compressions",
                        items: [
                            "Rate 100–120/min, depth 5–6 cm, full recoil.",
                            "Rotate compressors every 2 minutes.",
                            "Keep interruptions &lt;10 seconds for rhythm checks, shocks or ventilations.",
                            "A mechanical compression device may be used; never delay defibrillation to apply it."
                        ]
                    },
                    {
                        title: "Airway and ventilation",
                        items: [
                            "OPA/NPA with BVM: 30 compressions to 2 ventilations.",
                            "A supraglottic airway is preferred over OPA/NPA when available, and should be in place for transfer under CPR wherever possible.",
                            "Supraglottic airway or ETT: continuous ventilations at 10–12 breaths/min (1 every 5–6 seconds) with EtCO<sub>2</sub> monitoring.",
                            "100% oxygen. Avoid hyperventilation.",
                            "Intubation: only with the team briefed to minimise interruptions and a predicted first-attempt success. In a predicted difficult airway, only if the supraglottic airway is not working well, other adjuncts are failing, or there is vomit, blood or excessive secretions."
                        ]
                    },
                    {
                        title: "Capnography",
                        items: [
                            "Use EtCO<sub>2</sub> to monitor CPR quality: target &gt;10 mmHg.",
                            "Signs of ROSC: a spontaneous pulse, normal breathing, or EtCO<sub>2</sub> rising to &gt;40 mmHg."
                        ]
                    }
                ]
            },
            {
                type: "groups", title: "Defibrillation", icon: "zap",
                groups: [
                    {
                        title: "Timing and safety",
                        items: [
                            "First shock for VF/VT as soon as the defibrillator is ready; further shocks every 2 minutes.",
                            "Resume CPR immediately after each shock.",
                            "No one touches the patient during a shock. Move the patient off wet or conductive surfaces."
                        ]
                    },
                    {
                        title: "Manual mode (AP and EP)",
                        items: [
                            "Lifepak 15: 200 J, 300 J, 360 J; further shocks 360 J.",
                            "Zoll X-Series: 120 J, 150 J, 200 J; further shocks 200 J.",
                            "Use after airway and IV access are done and enough staff are present. Assign one person to time rhythm checks, which are easily missed in manual mode."
                        ]
                    }
                ]
            },
            {
                type: "list", title: "Reversible causes", icon: "list",
                intro: "Look for these during every CPR cycle and ask bystanders about collapse time, history and events.",
                items: [
                    "<b>H's:</b> hypovolemia, hypoxia, hydrogen ion (acidosis), hypo-/hyperkalemia, hypothermia.",
                    "<b>T's:</b> tension pneumothorax, cardiac tamponade, toxins, thrombosis (pulmonary or coronary)."
                ]
            },
            {
                type: "groups", title: "Special circumstances", icon: "triangle-alert",
                groups: [
                    {
                        title: "Pregnancy",
                        items: [
                            "Standard resuscitation, plus left lateral position or manual uterine displacement, and compressions higher on the sternum.",
                            "Over 20 weeks' gestation: rapid transport to a hospital capable of peri-mortem Cesarean delivery (coordinate with Dispatch 2)."
                        ]
                    },
                    {
                        title: "Hypothermia",
                        items: [
                            "Withhold adrenaline until core temperature is &gt;30°C.",
                            "In prolonged arrest with partial rewarming, give standard drug doses at longer intervals (e.g. every 6–10 minutes).",
                            "Defibrillation energy is unchanged.",
                            "Always transfer to hospital under CPR."
                        ]
                    },
                    {
                        title: "Red flags",
                        items: [
                            "VF/VT persisting after multiple shocks and antiarrhythmics.",
                            "Suspected irreversible cause (e.g. massive myocardial infarction, end-stage disease).",
                            "Unsafe scene preventing effective resuscitation.",
                            "Need for advanced procedures (e.g. ECMO, cath lab)."
                        ]
                    }
                ]
            },
            {
                type: "criteria", title: "Who this applies to", icon: "user",
                include: [
                    "Adults (≥13 years) in cardiac arrest: unresponsive with no signs of life, or VF, VT, PEA or asystole on the monitor or AED."
                ],
                exclude: [
                    "Obvious signs of irreversible death (e.g. rigor mortis, dependent lividity, decapitation).",
                    "Pediatric patients (&lt;13 years): see the Pediatric Cardiac Arrest CPG."
                ]
            },
            {
                type: "tools", title: "Practise with the app", icon: "monitor",
                groups: [
                    {
                        title: "The arrest rhythms, as drawn by the ECG Simulator",
                        items: [
                            { ecg: "vfFine", label: "Ventricular fibrillation", sub: "Shockable" },
                            { ecg: "pulselessVt", label: "Pulseless VT", sub: "Shockable" },
                            { ecg: "asystole", label: "Asystole", sub: "Non-shockable" },
                            { ecg: "pea", label: "PEA", sub: "Non-shockable: organised rhythm, no pulse" }
                        ]
                    },
                    {
                        title: "Tools", icon: "zap",
                        items: [
                            { label: "Defibrillation Doses", sub: "Energies for LIFEPAK 15 and ZOLL X-Series", href: "../pages/defib.html", icon: "zap" },
                            { label: "ACLS Megacode", sub: "Run a full resuscitation on the live monitor", href: "../pages/megacode.html", icon: "siren" }
                        ]
                    }
                ]
            },
            {
                type: "list", title: "Key performance indicators", icon: "chart-no-axes-column",
                items: [
                    "Chest compressions started within 1 minute of recognising cardiac arrest.",
                    "First shock delivered within 1 minute of recognising VT/VF."
                ]
            },
            {
                type: "related", title: "Related CPGs", icon: "link",
                items: [
                    { label: "1.1 Universal Care", href: "c1.html?section=c1s1" },
                    { label: "4.4 Pediatric Cardiac Arrest", href: "c4-4.html" },
                    { label: "4.7 Post Cardiac Arrest Care (ROSC)", href: "c4-7.html" },
                    { label: "4.8 Starting, Stopping and Transferring CPR", href: "c4-8.html" },
                    { label: "M3 Amiodarone", href: "m3.html" },
                    { label: "M13 Adrenaline", href: "m13.html" }
                ]
            }
        ]
    },

    // Study sets: every answer is taken from CPG 4.3.
    quiz: [
        {
            q: "What compression rate does CPG 4.3 require?",
            options: ["80–100/min", "100–120/min", "120–140/min", "60–80/min"],
            correct: 1,
            explanation: "High-quality compressions at 100–120/min, 5–6 cm deep, with full recoil."
        },
        {
            q: "What compression depth does CPG 4.3 require in adults?",
            options: ["2–3 cm", "4–5 cm", "5–6 cm", "7–8 cm"],
            correct: 2,
            explanation: "Compression depth 5–6 cm, with full recoil."
        },
        {
            q: "How often should compressors rotate?",
            options: ["Every minute", "Every 2 minutes", "Every 5 minutes", "Only when tired"],
            correct: 1,
            explanation: "Rotate compressors every 2 minutes to prevent fatigue."
        },
        {
            q: "What is the longest acceptable pause in compressions for a rhythm check or shock?",
            options: ["5 seconds", "Less than 10 seconds", "15 seconds", "20 seconds"],
            correct: 1,
            explanation: "Keep interruptions under 10 seconds for rhythm checks, shocks or ventilations."
        },
        {
            q: "With a supraglottic airway or ETT in place, how do you ventilate?",
            options: ["30:2 with pauses", "Continuous ventilations at 10–12 breaths/min", "20 breaths/min", "2 breaths every minute"],
            correct: 1,
            explanation: "Provide uninterrupted ventilations at 10–12 breaths/min (1 breath every 5–6 seconds) and attach EtCO2."
        },
        {
            q: "Which antiarrhythmic does CPG 4.3 use for VF/VT?",
            options: ["Lidocaine", "Amiodarone", "Magnesium", "Atropine"],
            correct: 1,
            explanation: "Amiodarone 300 mg IV/IO after the 3rd shock, then 150 mg IV/IO after the 5th shock."
        },
        {
            q: "What is the adrenaline dose in adult cardiac arrest?",
            options: ["0.5 mg", "1 mg IV/IO every 3–5 minutes", "2 mg", "0.01 mg/kg"],
            correct: 1,
            explanation: "Adrenaline 1 mg IV/IO every 3–5 minutes."
        },
        {
            q: "When is the first dose of amiodarone given in VF/VT?",
            options: ["After the 1st shock", "After the 3rd shock", "Immediately", "After the 5th shock"],
            correct: 1,
            explanation: "First dose 300 mg after the 3rd shock; second dose 150 mg after the 5th shock."
        },
        {
            q: "What EtCO2 should you aim for during CPR?",
            options: ["More than 10 mmHg", "Less than 10 mmHg", "Exactly 35 mmHg", "More than 60 mmHg"],
            correct: 0,
            explanation: "Use EtCO2 to monitor CPR quality, with a target above 10 mmHg."
        },
        {
            q: "EtCO2 suddenly rises above 40 mmHg during CPR. What does this suggest?",
            options: ["ROSC", "Tension pneumothorax", "Hyperventilation", "Airway obstruction"],
            correct: 0,
            explanation: "EtCO2 rising above 40 mmHg is a sign of ROSC, together with a spontaneous pulse and normal breathing."
        },
        {
            q: "Which rhythms are shockable?",
            options: ["Asystole and PEA", "VF and pulseless VT", "SVT and AF", "Sinus bradycardia"],
            correct: 1,
            explanation: "VF and VT are shockable; asystole and PEA are not."
        },
        {
            q: "In manual mode on a Lifepak 15, what is the first shock energy?",
            options: ["120 J", "200 J", "360 J", "150 J"],
            correct: 1,
            explanation: "Lifepak 15: 200 J, 300 J, 360 J, then 360 J for all further shocks."
        },
        {
            q: "In hypothermic cardiac arrest, when may adrenaline be given?",
            options: ["Immediately", "Once core temperature is above 30°C", "Only after ROSC", "Never"],
            correct: 1,
            explanation: "Withhold adrenaline until core temperature is above 30°C."
        },
        {
            q: "What adaptation does CPG 4.3 make for cardiac arrest in pregnancy?",
            options: ["Elevate the legs", "Left lateral position or manual uterine displacement", "No compressions until delivery", "Lower hand position on the sternum"],
            correct: 1,
            explanation: "Position left lateral or manually displace the uterus to relieve aortocaval compression, and compress higher on the sternum."
        },
        {
            q: "Which is one of the reversible causes (H's and T's) in CPG 4.3?",
            options: ["Hyperthermia", "Hypovolemia", "Trauma", "Hypertension"],
            correct: 1,
            explanation: "H's: hypovolemia, hypoxia, hydrogen ion, hypo-/hyperkalemia, hypothermia. T's: tension pneumothorax, tamponade, toxins, thrombosis."
        },
        {
            q: "When a supraglottic airway is available, how does it compare with an OPA/NPA?",
            options: ["OPA/NPA is always preferred", "The supraglottic airway is preferred", "Both are avoided in cardiac arrest", "Only intubation is allowed"],
            correct: 1,
            explanation: "Placing a supraglottic airway is preferred over OPA/NPA if one is available."
        },
        {
            q: "How often is the rhythm checked during CPR?",
            options: ["Every minute", "Every 2 minutes", "Every 5 minutes", "After each drug"],
            correct: 1,
            explanation: "Reassess rhythm, pulse and EtCO2 every 2 minutes."
        },
        {
            q: "May a mechanical chest compression device delay the first shock?",
            options: ["Yes, always apply it first", "No, never delay defibrillation to apply it", "Only in VF", "Only if the patient is large"],
            correct: 1,
            explanation: "Mechanical devices may be used, but defibrillation must not be delayed to apply one."
        },
        {
            q: "What do you do immediately after a shock?",
            options: ["Check the pulse", "Re-analyse the rhythm", "Resume CPR", "Give adrenaline"],
            correct: 2,
            explanation: "Resume CPR immediately after the shock (less than 10 seconds interruption)."
        },
        {
            q: "With only an OPA/NPA and BVM, what is the compression-ventilation ratio?",
            options: ["15:2", "30:2", "20:2", "5:1"],
            correct: 1,
            explanation: "30 compressions to 2 ventilations via BVM."
        },
        {
            q: "Patients transferred under CPR should have which airway wherever possible?",
            options: ["OPA only", "A supraglottic airway", "Nasal cannula", "No airway adjunct"],
            correct: 1,
            explanation: "Patients transferred under CPR should have a supraglottic airway in place wherever possible."
        },
        {
            q: "Which clinicians may use the defibrillator in manual mode during cardiac arrest?",
            options: ["Any EMT", "Advanced Paramedics and Emergency Physicians", "Only Emergency Physicians", "Nobody"],
            correct: 1,
            explanation: "Advanced Paramedics and Emergency Physicians may use manual mode to minimise interruptions."
        },
        {
            q: "How long do you check for a pulse and breathing to confirm cardiac arrest?",
            options: ["2–3 seconds", "5–10 seconds", "15–20 seconds", "30 seconds"],
            correct: 1,
            explanation: "Check carotid or femoral pulse and breathing together for 5–10 seconds."
        },
        {
            q: "When is intubation in cardiac arrest appropriate under CPG 4.3?",
            options: ["Always first", "When the team is briefed to minimise interruptions and first-attempt success is predicted", "Only before CPR starts", "Never"],
            correct: 1,
            explanation: "Intubation may be done if the team is briefed to minimise interruptions and pre-intubation assessment predicts first-attempt success."
        },
        {
            q: "What is the main risk of manual mode during cardiac arrest?",
            options: ["Higher energy burns", "Missing rhythm checks", "Battery drain", "Pads falling off"],
            correct: 1,
            explanation: "Rhythm checks are easily missed in manual mode: assign someone to keep track of rhythm-check timing."
        },
        {
            q: "In which patient should resuscitation not be started?",
            options: ["Unwitnessed arrest", "Hypothermic arrest", "Rigor mortis", "Asystole"],
            correct: 2,
            explanation: "Obvious signs of irreversible death (rigor mortis, dependent lividity, decapitation) exclude the patient from this CPG."
        },
        {
            q: "When is adrenaline given in asystole or PEA?",
            options: ["After the 3rd shock", "As soon as possible", "Only after 10 minutes", "Never"],
            correct: 1,
            explanation: "Non-shockable rhythms: adrenaline as soon as possible, then 1 mg every 3–5 minutes."
        },
        {
            q: "A pregnant patient in cardiac arrest is over 20 weeks' gestation. Where should she be taken?",
            options: ["The nearest clinic", "A hospital capable of peri-mortem Cesarean delivery", "Home for family", "Any hospital"],
            correct: 1,
            explanation: "Rapidly transport to a hospital capable of peri-mortem Cesarean delivery, coordinating with Dispatch 2."
        },
        {
            q: "Hypothermic arrest is prolonged and the patient is partly rewarmed. How are drugs given?",
            options: ["Double doses", "Standard doses at longer intervals", "No drugs at all", "Half doses every minute"],
            correct: 1,
            explanation: "Use standard doses but extend intervals (e.g. every 6–10 minutes) to avoid accumulation."
        },
        {
            q: "What are the two KPIs for adult cardiac arrest?",
            options: ["Intubation within 5 minutes; IV within 2 minutes", "Compressions within 1 minute of recognition; first shock within 1 minute of VF/VT recognition", "Adrenaline within 1 minute; amiodarone within 3 minutes", "Transport within 10 minutes; ROSC within 20 minutes"],
            correct: 1,
            explanation: "Initiate compressions within 1 minute of recognising cardiac arrest, and deliver the first shock within 1 minute of recognising VT/VF."
        }
    ],

    flashcards: [
        { category: "CPR", question: "Compression rate and depth?", answer: "100–120/min, 5–6 cm, full recoil." },
        { category: "CPR", question: "Compression-ventilation ratio with OPA/NPA and BVM?", answer: "30:2." },
        { category: "CPR", question: "How often do compressors rotate?", answer: "Every 2 minutes." },
        { category: "CPR", question: "Maximum pause in compressions?", answer: "Less than 10 seconds." },
        { category: "Airway", question: "Preferred airway when available?", answer: "Supraglottic airway, over OPA/NPA." },
        { category: "Airway", question: "Airway for transfer under CPR?", answer: "A supraglottic airway wherever possible." },
        { category: "Ventilation", question: "Ventilation with a supraglottic airway or ETT?", answer: "Continuous, 10–12 breaths/min (1 every 5–6 seconds), with EtCO2." },
        { category: "Defibrillation", question: "Shockable rhythms?", answer: "VF and pulseless VT." },
        { category: "Defibrillation", question: "Lifepak 15 manual energies?", answer: "200 J, 300 J, 360 J; then 360 J." },
        { category: "Defibrillation", question: "Zoll X-Series manual energies?", answer: "120 J, 150 J, 200 J; then 200 J." },
        { category: "Defibrillation", question: "After a shock?", answer: "Resume CPR immediately." },
        { category: "Drugs", question: "Adrenaline dose?", answer: "1 mg IV/IO every 3–5 minutes." },
        { category: "Drugs", question: "Amiodarone first dose and timing?", answer: "300 mg IV/IO after the 3rd shock." },
        { category: "Drugs", question: "Amiodarone second dose and timing?", answer: "150 mg IV/IO after the 5th shock." },
        { category: "Capnography", question: "EtCO2 target during CPR?", answer: "More than 10 mmHg." },
        { category: "ROSC", question: "Signs of ROSC?", answer: "Spontaneous pulse, normal breathing, EtCO2 rising to more than 40 mmHg." },
        { category: "Reversible causes", question: "The H's?", answer: "Hypovolemia, hypoxia, hydrogen ion (acidosis), hypo-/hyperkalemia, hypothermia." },
        { category: "Reversible causes", question: "The T's?", answer: "Tension pneumothorax, cardiac tamponade, toxins, thrombosis (pulmonary or coronary)." },
        { category: "Pregnancy", question: "Adaptations in pregnancy?", answer: "Left lateral position or manual uterine displacement; compressions higher on the sternum." },
        { category: "Pregnancy", question: "Over 20 weeks' gestation?", answer: "Rapid transport to a hospital capable of peri-mortem Cesarean delivery (coordinate with Dispatch 2)." },
        { category: "Hypothermia", question: "Adrenaline in hypothermic arrest?", answer: "Withhold until core temperature is above 30°C." },
        { category: "Hypothermia", question: "Transport in hypothermic arrest?", answer: "Always transfer to hospital under CPR." },
        { category: "Recognition", question: "How is cardiac arrest confirmed?", answer: "No response (AVPU); no carotid or femoral pulse and no normal breathing, checked together for 5–10 seconds." },
        { category: "Recognition", question: "Triage priority in cardiac arrest?", answer: "Red Priority for all cardiac arrest patients." },
        { category: "Exclusion", question: "When is this CPG not used?", answer: "Obvious irreversible death (rigor mortis, dependent lividity, decapitation) and patients under 13 years." },
        { category: "Manual mode", question: "Who may use manual mode, and when?", answer: "Advanced Paramedics and Emergency Physicians, after airway and IV access, with enough staff to time rhythm checks." },
        { category: "Safety", question: "Before a shock?", answer: "No one touches the patient; move the patient off wet or conductive surfaces." },
        { category: "Scope", question: "Clinical level for adrenaline, amiodarone and supraglottic airway?", answer: "EMT and above." },
        { category: "Scope", question: "Clinical level for IO access and for intubation?", answer: "IO: EMT-A and above. Intubation: P and above." },
        { category: "KPI", question: "Two KPIs for adult cardiac arrest?", answer: "Compressions within 1 minute of recognition; first shock within 1 minute of VT/VF recognition." }
    ],

    critical: [
        {
            id: "crit_4_3_1",
            ecg: "vfFine",
            scenario: "A 65-year-old man collapsed at home. Bystander CPR is in progress. He is unresponsive, not breathing and pulseless. You attach the defibrillator: the rhythm is VF.",
            question: "What is your priority?",
            options: [
                { t: "Continue CPR and give adrenaline first", f: "In VF, the first shock comes first. Adrenaline follows in the CPR cycle after the 2nd shock." },
                { t: "Shock as soon as the defibrillator is ready, then resume CPR immediately", f: "Correct. Deliver the first shock for VF/VT as soon as the defibrillator is ready." },
                { t: "Insert a supraglottic airway before shocking", f: "Airway management must not delay the first shock." },
                { t: "Check the pulse again for 10 seconds", f: "Arrest is confirmed; every delay to the shock matters." }
            ],
            correct: 1,
            explanation: "Shock as soon as the defibrillator is ready, then 2 minutes of CPR, IV/IO access and LUCAS. Keep pauses under 10 seconds.",
            kpi: "First shock within 1 minute of VT/VF rhythm recognition."
        },
        {
            id: "crit_4_3_2",
            ecg: "asystole",
            scenario: "A 70-year-old woman is in cardiac arrest. The rhythm is asystole. CPR is in progress.",
            question: "Which drug, and when?",
            options: [
                { t: "Adrenaline 1 mg IV/IO as soon as possible, then every 3–5 minutes", f: "Correct. Non-shockable rhythms get adrenaline as soon as possible." },
                { t: "Atropine 1 mg IV", f: "Atropine is not part of the CPG 4.3 cardiac arrest algorithm." },
                { t: "Amiodarone 300 mg IV", f: "Amiodarone is for VF/VT after the 3rd shock." },
                { t: "No drugs until the rhythm becomes shockable", f: "Adrenaline is given as soon as possible in asystole/PEA." }
            ],
            correct: 0,
            explanation: "Asystole/PEA: adrenaline as soon as possible, then 1 mg every 3–5 minutes; CPR 2 minutes; IV access; consider a supraglottic airway and capnography; treat reversible causes.",
            kpi: "Compressions within 1 minute of recognition of cardiac arrest."
        },
        {
            id: "crit_4_3_3",
            ecg: "vfFine",
            scenario: "A 55-year-old man remains in VF. He has had three shocks and one dose of adrenaline.",
            question: "What do you give now?",
            options: [
                { t: "Amiodarone 300 mg IV/IO", f: "Correct. The first dose of amiodarone is given after the 3rd shock." },
                { t: "Another adrenaline 1 mg straight away", f: "Adrenaline is repeated every 3–5 minutes, not immediately." },
                { t: "Amiodarone 150 mg IV/IO", f: "150 mg is the second dose, after the 5th shock." },
                { t: "No drug; keep shocking only", f: "Amiodarone is indicated after the 3rd shock." }
            ],
            correct: 0,
            explanation: "Amiodarone 300 mg IV/IO after the 3rd shock, then 150 mg IV/IO after the 5th shock. Keep adrenaline 1 mg every 3–5 minutes.",
            kpi: "First shock within 1 minute of VT/VF rhythm recognition."
        },
        {
            id: "crit_4_3_4",
            scenario: "A woman who is 30 weeks pregnant is in cardiac arrest. CPR is in progress.",
            question: "What adaptations does CPG 4.3 require?",
            options: [
                { t: "Left lateral position or manual uterine displacement, compressions higher on the sternum, and rapid transport to a hospital capable of peri-mortem Cesarean delivery", f: "Correct. These are the CPG 4.3 adaptations for resuscitation in pregnancy." },
                { t: "Standard CPR only; pregnancy changes nothing", f: "Pregnancy needs specific adaptations to relieve aortocaval compression." },
                { t: "Withhold defibrillation to protect the fetus", f: "Resuscitation follows the normal adult pattern, including defibrillation." },
                { t: "Lower hand position on the sternum and stay on scene", f: "Compressions go higher, not lower, and patients over 20 weeks need rapid transport." }
            ],
            correct: 0,
            explanation: "Resuscitation in pregnancy follows the adult pattern with uterine displacement and higher hand position. Over 20 weeks' gestation, transport rapidly to a hospital capable of peri-mortem Cesarean delivery, coordinating with Dispatch 2.",
            kpi: "Compressions within 1 minute of recognition of cardiac arrest."
        },
        {
            id: "crit_4_3_5",
            ecg: "vfFine",
            scenario: "A man pulled from cold water is in cardiac arrest. His core temperature is 28°C. CPR is in progress and the rhythm is VF.",
            question: "Which approach is correct?",
            options: [
                { t: "Give adrenaline 1 mg every 3–5 minutes as normal", f: "Withhold adrenaline until core temperature is above 30°C." },
                { t: "Withhold adrenaline until above 30°C; defibrillate at the usual energy; transfer under CPR", f: "Correct. Defibrillation doses are unchanged, and hypothermic arrests are always transferred under CPR." },
                { t: "Stop resuscitation because he is cold", f: "All hypothermic arrests must be transferred to hospital under CPR." },
                { t: "Double the adrenaline dose to overcome the cold", f: "Standard doses only, at longer intervals once partly rewarmed." }
            ],
            correct: 1,
            explanation: "Hypothermia: withhold adrenaline until core temperature is above 30°C; in prolonged arrest with partial rewarming use standard doses at longer intervals (e.g. every 6–10 minutes); defibrillation doses are unchanged; always transfer under CPR.",
            kpi: "First shock within 1 minute of VT/VF rhythm recognition."
        }
    ]
};
