/* ========== CPG 3.2 – Adult Bradycardia ==========
 * Source: DCAS CPG 2025, CPG 3.2 (pp. 79–82) – data/cpg-source/3_2_Adult_Bradycardia.txt
 */
window.CPG_DATA = {
    id: "c3-2",
    title: "Adult Bradycardia",
    shortTitle: "3.2 Adult Bradycardia",
    guide: {
        cpg: "3.2",
        group: "cardio",
        groupLabel: "Cardiovascular",
        title: "Adult Bradycardia",
        lead: "Bradycardic patients requiring intervention generally have a heart rate less than 60 bpm. Identify and treat the underlying cause; treat the rate itself when persistent bradycardia causes instability.",
        source: { label: "CPG 3.2", pages: "79–82", pdf: "../pdf_sections/3_2_Adult_Bradycardia.pdf" },
        sections: [
            {
                type: "list", title: "Goals", icon: "target",
                items: [
                    "Maintain adequate perfusion.",
                    "Identify and treat any underlying cause.",
                    "Improve end-organ perfusion."
                ]
            },
            {
                type: "criteria", title: "Who this applies to", icon: "user",
                include: [
                    "Adults with a heart rate &lt;60 bpm <b>and</b> symptoms (altered mental status, chest pain, congestive heart failure, seizure, syncope, shock, pallor, diaphoresis) or hemodynamic instability.",
                    "Rhythms: sinus bradycardia; second-degree AV block (Mobitz I / Wenckebach, Mobitz II); third-degree (complete) AV block; ventricular escape rhythms."
                ],
                exclude: [
                    "Heart rate within normal range.",
                    "Pediatric patients &lt;13 years."
                ]
            },
            {
                type: "list", title: "Assessment", icon: "stethoscope",
                items: [
                    "<b>12-lead ECG</b> – do not delay treatment in severe cases.",
                    "<b>Look for a non-cardiac cause:</b> hypoxia, shock, toxins (beta-blocker, calcium channel blocker, organophosphates, digoxin), electrolyte disorder, hypoglycemia, increased intracranial pressure.",
                    "<b>Signs of instability:</b> hypotension, acutely altered mental status, signs of shock, ischemic chest discomfort, acute heart failure.",
                    "<b>Triage category</b> as per the Patient Triage Categories CPG."
                ]
            },
            {
                type: "steps", title: "Initial management", icon: "activity",
                steps: [
                    { title: "Primary survey", text: "Maintain the airway and assist breathing as necessary (Airway Management CPG)." },
                    { title: "Oxygen", text: "Titrate to SpO<sub>2</sub> &gt;94%." },
                    { title: "Monitor and 12-lead ECG", text: "Routine vital signs; continuous monitoring." },
                    { title: "Blood glucose", text: "Treat hypoglycemia as per the Hypoglycemia CPG." }
                ]
            },
            {
                type: "gate", title: "Is the bradycardia causing instability?", icon: "triangle-alert", tone: "alert",
                question: "Persistent bradycardia causing any of:",
                items: ["Hypotension", "Acutely altered mental status", "Signs of shock", "Ischemic chest discomfort", "Acute heart failure"],
                no: "Consider Tele EMS. Monitor and observe.",
                yes: "Consider ALS back-up and treat in this order."
            },
            {
                type: "steps", title: "Treating unstable bradycardia", icon: "heart-pulse", start: 5,
                steps: [
                    {
                        title: "Atropine", level: "EMT-A",
                        doses: [{ drug: "Atropine", dose: "1 mg IV/IO", note: "Every 3–5 minutes; maximum total 3 mg", level: "EMT-A" }]
                    },
                    {
                        title: "Transcutaneous pacing", level: "AP",
                        text: "If atropine is ineffective. Confirm electrical and mechanical capture. Consider analgesia and sedation:",
                        doses: [
                            { drug: "Midazolam", dose: "0.5–1 mg IV/IO", note: "Increments every 5 minutes", level: "EP" },
                            { drug: "Ketamine", dose: "0.25–1 mg/kg IV/IO", note: "Increments every 3–5 minutes. Larger doses: infuse in 100 ml normal saline over 5–10 minutes", level: "EP" }
                        ]
                    },
                    {
                        title: "Vasopressors", level: "AP",
                        text: "If heart rate does not improve, or pacing is unavailable or not tolerated (no sedation available):",
                        doses: [
                            { drug: "Dopamine infusion", dose: "5–20 mcg/kg/min IV/IO", note: "", level: "AP" },
                            { drug: "Adrenaline push dose", dose: "0.01 mg IV", note: "Every 2–5 minutes", level: "AP" },
                            { drug: "Adrenaline infusion", dose: "2–10 mcg/min IV/IO", note: "", level: "AP" }
                        ]
                    },
                    { title: "Reassess", text: "Frequently, as per the Universal Care CPG." }
                ]
            },
            {
                type: "groups", title: "Clinical notes", icon: "lightbulb",
                groups: [
                    {
                        title: "Atropine",
                        items: [
                            "Before giving atropine, rule out head injury, hypothermia and hypoxia. In these, bradycardia may be compensatory and atropine can worsen the patient's condition. Consider Telemedicine consultation.",
                            "Use with caution in myocardial infarction: a faster heart rate raises myocardial oxygen consumption and may worsen ischemia."
                        ]
                    },
                    {
                        title: "Pacing, analgesia and sedation",
                        items: [
                            "If pacing is performed, consider sedation and pain control.",
                            "Analgesia and sedation may be delayed in significantly compromised patients or those with altered mental status.",
                            "Morphine may be used for analgesia, but higher doses are usually needed and may cause hypotension. With midazolam it can act synergistically and cause profound hypotension."
                        ]
                    },
                    {
                        title: "Dopamine and adrenaline",
                        items: [
                            "May also be given after successful pacing if the patient remains hypotensive.",
                            "Adrenaline may be easier to give when no syringe driver is available."
                        ]
                    }
                ]
            },
            {
                type: "list", title: "Key performance indicators", icon: "chart-no-axes-column",
                items: [
                    "12-lead ECG on all patients with bradycardia.",
                    "Atropine or transcutaneous pacing for all hemodynamically unstable patients (where appropriate)."
                ]
            },
            {
                type: "related", title: "Related CPGs", icon: "link",
                items: [
                    { label: "1.1 Universal Care", href: "c1.html?section=c1s1" },
                    { label: "1.3 Patient Triage Categories", href: "c1.html?section=c1s3" },
                    { label: "2.1 Airway Management", href: "c2.html?section=c2s1" },
                    { label: "6.8 Hypoglycemia", href: "c6-8.html" },
                    { label: "M5 Atropine", href: "m5.html" }
                ]
            }
        ]
    }
};
