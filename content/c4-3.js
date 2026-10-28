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
    }
};
