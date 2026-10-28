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
                type: "tools", title: "Practise with the app", icon: "monitor",
                groups: [
                    {
                        title: "The rhythms, as drawn by the ECG Simulator",
                        items: [
                            { ecg: "sbrady", label: "Sinus bradycardia", sub: "Slow rate, normal P–QRS relationship" },
                            { ecg: "wenckebach", label: "Mobitz I (Wenckebach)", sub: "Lengthening PR, then a dropped QRS" },
                            { ecg: "mobitz2", label: "Mobitz II", sub: "Dropped QRS with a constant PR" },
                            { ecg: "chb", label: "Third-degree AV block", sub: "P waves and QRS unrelated" },
                            { ecg: "ivr", label: "Ventricular escape rhythm", sub: "Slow, wide QRS from the ventricles" }
                        ]
                    },
                    {
                        title: "Run a case", icon: "siren",
                        items: [
                            { label: "Megacode: Heart Block on the Ward", sub: "Unstable bradycardia from complete heart block", href: "../pages/megacode.html?s=6" },
                            { label: "Megacode: Waiting-Room Collapse", sub: "Unstable bradycardia from Mobitz II", href: "../pages/megacode.html?s=12" }
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
    },

    // Study sets: every answer is taken from CPG 3.2.
    quiz: [
        {
            q: "Bradycardic patients who need intervention generally have a heart rate below:",
            options: ["50 bpm", "60 bpm", "70 bpm", "40 bpm"],
            correct: 1,
            explanation: "CPG 3.2 applies to adults with a heart rate less than 60 bpm and symptoms or hemodynamic instability."
        },
        {
            q: "Which finding on its own does NOT make bradycardia unstable?",
            options: ["Hypotension", "Acutely altered mental status", "A slow heart rate in an alert patient with normal blood pressure", "Ischemic chest discomfort"],
            correct: 2,
            explanation: "Instability means persistent bradycardia causing hypotension, acutely altered mental status, signs of shock, ischemic chest discomfort or acute heart failure. A slow rate without these is monitored, not treated."
        },
        {
            q: "A confused, hypotensive patient has complete heart block. Which drug does CPG 3.2 give first?",
            options: ["Dopamine infusion", "Atropine", "Adrenaline push dose", "Amiodarone"],
            correct: 1,
            explanation: "Atropine 1 mg IV/IO is the first treatment for unstable bradycardia. Transcutaneous pacing follows if atropine is ineffective."
        },
        {
            q: "What is the maximum total dose of atropine for adult bradycardia?",
            options: ["1 mg", "2 mg", "3 mg", "0.5 mg"],
            correct: 2,
            explanation: "Atropine 1 mg IV/IO every 3–5 minutes, to a maximum total dose of 3 mg."
        },
        {
            q: "In which condition should atropine be used with caution?",
            options: ["Myocardial infarction", "Hypoglycemia", "Seizures", "Asthma"],
            correct: 0,
            explanation: "A faster heart rate increases myocardial oxygen consumption and may worsen ischemia in myocardial infarction."
        },
        {
            q: "Which rhythm is listed in CPG 3.2 as a bradycardia?",
            options: ["Atrial flutter with 2:1 block", "Second-degree AV block, Mobitz II", "Sinus tachycardia", "Ventricular tachycardia"],
            correct: 1,
            explanation: "Listed rhythms: sinus bradycardia, second-degree AV block (Mobitz I and II), third-degree AV block and ventricular escape rhythms."
        },
        {
            q: "A bradycardic patient becomes unresponsive and stops breathing normally. What do you do first?",
            options: ["Give atropine", "Start CPR", "Start transcutaneous pacing", "Get IV access"],
            correct: 1,
            explanation: "Unresponsive with no normal breathing is cardiac arrest: start CPR and follow the Adult Cardiac Arrest CPG."
        },
        {
            q: "What is the single dose of atropine for adult bradycardia?",
            options: ["0.5 mg", "1 mg", "2 mg", "0.02 mg/kg"],
            correct: 1,
            explanation: "Atropine 1 mg IV/IO, repeated every 3–5 minutes."
        },
        {
            q: "Before giving atropine, which cause should you rule out because the bradycardia may be compensatory?",
            options: ["Hypoxia", "Fever", "Anxiety", "Dehydration"],
            correct: 0,
            explanation: "Rule out head injury, hypothermia and hypoxia. In these, bradycardia may be protective and atropine can worsen the patient's condition."
        },
        {
            q: "Atropine has not worked in an unstable patient. What is the next step?",
            options: ["Amiodarone", "Transcutaneous pacing", "Fluid bolus", "Observe for 15 minutes"],
            correct: 1,
            explanation: "Transcutaneous pacing is indicated if atropine is ineffective."
        },
        {
            q: "Which sedative does CPG 3.2 list for patients being paced?",
            options: ["Haloperidol", "Midazolam", "Diazepam", "Paracetamol"],
            correct: 1,
            explanation: "Midazolam 0.5–1 mg IV/IO increments every 5 minutes, or ketamine 0.25–1 mg/kg IV/IO increments every 3–5 minutes."
        },
        {
            q: "What is the lowest clinical level that can perform transcutaneous pacing under CPG 3.2?",
            options: ["EMT", "EMT-A", "AP", "EP"],
            correct: 2,
            explanation: "Transcutaneous pacing is an AP skill in the CPG 3.2 flowchart."
        },
        {
            q: "What is the dopamine infusion dose for bradycardia?",
            options: ["2–5 mcg/kg/min", "5–20 mcg/kg/min", "20–50 mcg/kg/min", "1 mg/min"],
            correct: 1,
            explanation: "Dopamine infusion 5–20 mcg/kg/min IV/IO."
        },
        {
            q: "Which ECG finding defines third-degree (complete) AV block?",
            options: ["A long but constant PR interval", "Progressive PR lengthening before a dropped QRS", "No relationship between P waves and QRS complexes", "A sawtooth baseline"],
            correct: 2,
            explanation: "In complete heart block the atria and ventricles beat independently: P waves and QRS complexes are unrelated."
        },
        {
            q: "What is the lowest clinical level that can give atropine for bradycardia?",
            options: ["EMT", "EMT-A", "P", "AP"],
            correct: 1,
            explanation: "Atropine is marked EMT-A in the CPG 3.2 flowchart."
        },
        {
            q: "What is the adrenaline push dose for bradycardia in CPG 3.2?",
            options: ["0.01 mg IV every 2–5 minutes", "1 mg IV every 3–5 minutes", "0.5 mg IM", "0.1 mg/kg IV"],
            correct: 0,
            explanation: "Adrenaline push dose 0.01 mg every 2–5 minutes. The Beta-Blocker and Calcium Channel Blocker Overdose CPGs use a different push dose, so check which CPG applies."
        },
        {
            q: "A patient on a beta-blocker is still hypotensive and confused 4 minutes after a first 1 mg dose of atropine. Pacing is being prepared. What do you give now?",
            options: ["A second 1 mg dose of atropine", "Amiodarone 150 mg", "Nothing until pacing is ready", "Adrenaline 1 mg IV push"],
            correct: 0,
            explanation: "Atropine can be repeated every 3–5 minutes up to 3 mg in total. For suspected overdose, also follow the Beta-Blocker Overdose CPG."
        },
        {
            q: "When may analgesia and sedation for pacing be delayed?",
            options: ["When the patient is alert and in pain", "When the patient is significantly compromised or has altered mental status", "Whenever atropine has been given", "Never"],
            correct: 1,
            explanation: "Analgesia and sedation for pacing may be delayed in significantly compromised patients or those with altered mental status."
        },
        {
            q: "Which finding makes a bradycardic patient 'unstable'?",
            options: ["Fatigue for three days", "Acute heart failure", "A heart rate of 55 bpm during sleep", "A known first-degree AV block"],
            correct: 1,
            explanation: "Acute heart failure is one of the five signs of instability, with hypotension, acutely altered mental status, signs of shock and ischemic chest discomfort."
        },
        {
            q: "A bradycardic patient has no signs of instability. What does the CPG advise?",
            options: ["Atropine 1 mg", "Transcutaneous pacing", "Consider Tele EMS; monitor and observe", "Dopamine infusion"],
            correct: 2,
            explanation: "Without instability: consider Tele EMS, monitor and observe."
        },
        {
            q: "During transcutaneous pacing, what must you specifically reassess?",
            options: ["Pupil size", "Electrical and mechanical capture", "Blood glucose every minute", "Capillary refill only"],
            correct: 1,
            explanation: "CPG 3.2 lists electrical and mechanical capture as the specific reassessment points when pacing."
        },
        {
            q: "Atropine has reached 3 mg with no effect and pacing is not available. What should you consider?",
            options: ["Amiodarone", "Dopamine or adrenaline", "Adenosine", "More atropine"],
            correct: 1,
            explanation: "If pacing is unavailable or not tolerated, consider dopamine infusion, adrenaline push dose or adrenaline infusion."
        },
        {
            q: "Which toxin does CPG 3.2 list as a possible cause of bradycardia?",
            options: ["Salbutamol", "Digoxin", "Caffeine", "Amphetamines"],
            correct: 1,
            explanation: "Listed toxins: beta-blocker, calcium channel blocker, organophosphates and digoxin."
        },
        {
            q: "A head-injured patient is bradycardic and hypertensive. Why should you not simply give atropine?",
            options: ["Atropine is contraindicated in all trauma", "The bradycardia may be compensatory for raised intracranial pressure", "Atropine causes hypoglycemia", "Atropine only works in children"],
            correct: 1,
            explanation: "Increased intracranial pressure is a listed cause, and head injury must be ruled out before atropine. Consider Telemedicine consultation."
        },
        {
            q: "What is the adrenaline infusion dose for bradycardia?",
            options: ["0.5–1 mcg/min", "2–10 mcg/min", "10–20 mcg/kg/min", "1 mg/hour"],
            correct: 1,
            explanation: "Adrenaline infusion 2–10 mcg/min IV/IO."
        },
        {
            q: "Why might adrenaline be preferred over dopamine for bradycardia?",
            options: ["It needs no monitoring", "It may be easier to give when no syringe driver is available", "It has no side effects", "It can be given orally"],
            correct: 1,
            explanation: "CPG 3.2: adrenaline may be easier to administer when a syringe driver is not available."
        },
        {
            q: "Pacing has good capture but the patient remains hypotensive. What can you add?",
            options: ["Dopamine or adrenaline", "Amiodarone", "Adenosine", "Stop pacing"],
            correct: 0,
            explanation: "Dopamine or adrenaline may be considered after successful pacing if the patient remains hypotensive."
        },
        {
            q: "Why can atropine harm a patient with myocardial infarction?",
            options: ["It causes bronchospasm", "It raises myocardial oxygen consumption", "It lowers blood glucose", "It prolongs the QT interval"],
            correct: 1,
            explanation: "Increasing heart rate may increase myocardial oxygen consumption, worsening ischemia."
        },
        {
            q: "What is the risk of giving morphine with midazolam during pacing?",
            options: ["Profound hypotension", "Hypertension", "Seizures", "Tachycardia"],
            correct: 0,
            explanation: "Morphine may act synergistically with midazolam and cause profound hypotension."
        },
        {
            q: "A patient needs larger doses of ketamine for pacing. How should it be given?",
            options: ["Rapid IV push", "As an infusion in 100 ml normal saline over 5–10 minutes", "Intramuscularly only", "It should not be repeated"],
            correct: 1,
            explanation: "Larger ketamine doses are infused in 100 ml normal saline over 5–10 minutes to reduce adverse effects."
        }
    ],

    flashcards: [
        { category: "Definition", question: "Heart rate that generally defines bradycardia needing intervention?", answer: "Less than 60 bpm, with symptoms or hemodynamic instability." },
        { category: "Instability", question: "The five signs that bradycardia is unstable?", answer: "Hypotension, acutely altered mental status, signs of shock, ischemic chest discomfort, acute heart failure." },
        { category: "Causes", question: "Non-cardiac causes to look for?", answer: "Hypoxia, shock, toxins, electrolyte disorder, hypoglycemia, increased intracranial pressure." },
        { category: "Rhythms", question: "Rhythms classified as bradycardia?", answer: "Sinus bradycardia, second-degree AV block (Mobitz I / Wenckebach, Mobitz II), third-degree AV block, ventricular escape rhythms." },
        { category: "Atropine", question: "Atropine dose and maximum?", answer: "1 mg IV/IO every 3–5 minutes; maximum total 3 mg." },
        { category: "Atropine", question: "When should atropine be used with caution?", answer: "Myocardial infarction: a faster rate raises myocardial oxygen consumption." },
        { category: "Atropine", question: "What must be ruled out before atropine?", answer: "Head injury, hypothermia and hypoxia: bradycardia may be compensatory. Consider Telemedicine consultation." },
        { category: "Pacing", question: "When is transcutaneous pacing indicated?", answer: "When atropine is ineffective." },
        { category: "Pacing", question: "Sedation options for pacing?", answer: "Midazolam 0.5–1 mg IV/IO increments every 5 minutes, or ketamine 0.25–1 mg/kg IV/IO increments every 3–5 minutes." },
        { category: "Vasopressors", question: "When are vasopressors used?", answer: "If heart rate does not improve, or pacing is unavailable or not tolerated (no sedation available)." },
        { category: "Dopamine", question: "Dopamine dose for bradycardia?", answer: "5–20 mcg/kg/min IV/IO infusion." },
        { category: "Adrenaline", question: "Adrenaline push dose for bradycardia?", answer: "0.01 mg IV every 2–5 minutes." },
        { category: "Adrenaline", question: "Adrenaline infusion dose for bradycardia?", answer: "2–10 mcg/min IV/IO." },
        { category: "ECG", question: "Mobitz I (Wenckebach)?", answer: "Progressive PR lengthening until a QRS is dropped." },
        { category: "ECG", question: "Mobitz II?", answer: "Intermittent non-conducted P waves with a constant PR interval." },
        { category: "ECG", question: "Third-degree (complete) AV block?", answer: "No relationship between P waves and QRS complexes." },
        { category: "Causes", question: "Toxins listed as causes of bradycardia?", answer: "Beta-blocker, calcium channel blocker, organophosphates, digoxin." },
        { category: "Scope", question: "Clinical level for atropine?", answer: "EMT-A and above." },
        { category: "Scope", question: "Clinical level for pacing and vasopressors?", answer: "AP and above." },
        { category: "Scope", question: "Clinical level for sedation during pacing?", answer: "EP." },
        { category: "Initial care", question: "First steps for any bradycardic patient?", answer: "Airway and breathing, oxygen to SpO2 >94%, monitoring and 12-lead ECG, blood glucose." },
        { category: "Stable patient", question: "Bradycardia without instability: what to do?", answer: "Consider Tele EMS; monitor and observe." },
        { category: "Unstable patient", question: "Order of treatment for unstable bradycardia?", answer: "Consider ALS back-up; atropine; then pacing; then dopamine or adrenaline." },
        { category: "Reassessment", question: "Specific reassessment during pacing?", answer: "Electrical and mechanical capture." },
        { category: "Sedation", question: "When may sedation for pacing be delayed?", answer: "In significantly compromised patients or those with altered mental status." },
        { category: "Analgesia", question: "Caution with morphine during pacing?", answer: "Higher doses are usually needed and may cause hypotension; with midazolam it can cause profound hypotension." },
        { category: "Ketamine", question: "How are larger ketamine doses given?", answer: "As an infusion in 100 ml normal saline over 5–10 minutes." },
        { category: "Vasopressors", question: "Vasopressors after successful pacing?", answer: "Dopamine or adrenaline if the patient remains hypotensive." },
        { category: "Adrenaline", question: "When may adrenaline be easier than dopamine?", answer: "When no syringe driver is available." },
        { category: "KPI", question: "Two KPIs for adult bradycardia?", answer: "12-lead ECG on all patients with bradycardia; atropine or pacing for all hemodynamically unstable patients (where appropriate)." }
    ],

    critical: [
        {
            id: "crit_3_2_1",
            ecg: "chb",
            scenario: "A 72-year-old man has profound weakness and near-syncope. BP 80/50, HR 32, drowsy. The ECG shows complete heart block with a wide QRS escape rhythm. You are an EMT-A crew and have called for ALS back-up.",
            question: "What is your first treatment?",
            options: [
                { t: "Atropine 1 mg IV/IO", f: "Correct. Atropine is the first treatment for unstable bradycardia and is within EMT-A scope. Repeat every 3–5 minutes up to 3 mg while back-up arrives." },
                { t: "Transcutaneous pacing", f: "Pacing is an AP skill and follows atropine when atropine is ineffective." },
                { t: "Dopamine infusion", f: "Vasopressors are for when atropine and pacing fail, or pacing is unavailable or not tolerated." },
                { t: "Observe and transport", f: "This patient is unstable (hypotension, altered mental status). Treat now." }
            ],
            correct: 0,
            explanation: "Persistent bradycardia with hypotension and altered mental status is unstable. Consider ALS back-up and give atropine 1 mg IV/IO first, then pacing if atropine is ineffective.",
            kpi: "Atropine or transcutaneous pacing for all hemodynamically unstable patients."
        },
        {
            id: "crit_3_2_2",
            scenario: "A 64-year-old woman with symptomatic bradycardia has received 3 mg of atropine with no response. The AP starts transcutaneous pacing. She is awake, distressed and in pain. BP 86/54.",
            question: "What should be considered now?",
            options: [
                { t: "Analgesia and sedation, e.g. midazolam or ketamine", f: "Correct. If pacing is performed, consider sedation and pain control. Midazolam or ketamine are EP medications in CPG 3.2." },
                { t: "A fourth dose of atropine", f: "The maximum total dose of atropine is 3 mg." },
                { t: "Stop pacing because she is awake", f: "Being awake is not a reason to stop. Treat the pain and distress." },
                { t: "High-dose morphine alone", f: "Morphine may be considered, but higher doses are usually needed and can cause hypotension, which she already has." }
            ],
            correct: 0,
            explanation: "Consider analgesia and sedation for pacing: midazolam 0.5–1 mg IV/IO increments, or ketamine 0.25–1 mg/kg IV/IO increments. Confirm electrical and mechanical capture.",
            kpi: "Atropine or transcutaneous pacing for all hemodynamically unstable patients."
        },
        {
            id: "crit_3_2_3",
            scenario: "A 68-year-old woman takes metoprolol and diltiazem and may have taken extra doses. She is dizzy, HR 38, BP 82/50. Two doses of atropine have had no effect and pacing is not available yet.",
            question: "What is the most appropriate next step?",
            options: [
                { t: "Treat as suspected overdose: follow the Beta-Blocker and Calcium Channel Blocker Overdose CPGs, which add fluids, IV adrenaline and glucagon", f: "Correct. A toxin is a listed cause of bradycardia, and the overdose CPGs give the specific treatment." },
                { t: "Amiodarone 300 mg", f: "Amiodarone is not a treatment for bradycardia." },
                { t: "Wait for pacing without further treatment", f: "She is unstable; do not delay treatment while waiting." },
                { t: "Stop atropine and only monitor", f: "She is hypotensive and symptomatic: she needs active treatment." }
            ],
            correct: 0,
            explanation: "CPG 3.2 asks you to look for toxic causes such as beta-blockers and calcium channel blockers. When one is suspected, the toxicology CPGs guide treatment, including fluids for shock, IV adrenaline and glucagon. Note that their adrenaline push dose differs from CPG 3.2.",
            kpi: "12-lead ECG on all patients with bradycardia."
        },
        {
            id: "crit_3_2_4",
            scenario: "A 45-year-old man fell from a ladder and hit his head. GCS 10, HR 45, BP 170/100, irregular breathing.",
            question: "What is the right approach to his bradycardia?",
            options: [
                { t: "Give atropine to raise the heart rate", f: "Head injury must be ruled out before atropine. Here the bradycardia may be compensatory and atropine could worsen his condition." },
                { t: "Manage airway and breathing, treat the head injury, and consider Telemedicine consultation", f: "Correct. Increased intracranial pressure is a listed cause of bradycardia; treat the cause rather than the rate." },
                { t: "Start a dopamine infusion", f: "He is hypertensive; vasopressors are not indicated." },
                { t: "Start transcutaneous pacing", f: "The bradycardia is a response to raised intracranial pressure, not a primary heart problem." }
            ],
            correct: 1,
            explanation: "Before atropine, rule out head injury, hypothermia and hypoxia: bradycardia may be compensatory. Consider Telemedicine consultation for such cases.",
            kpi: "12-lead ECG on all patients with bradycardia."
        },
        {
            id: "crit_3_2_5",
            scenario: "A fit 30-year-old runner is assessed after a minor fall. HR 48, BP 124/76, alert, no chest pain, no dizziness, SpO2 98%.",
            question: "How should you manage the slow heart rate?",
            options: [
                { t: "Atropine 1 mg IV", f: "No signs of instability: atropine is not indicated." },
                { t: "Transcutaneous pacing", f: "Pacing is for unstable bradycardia when atropine is ineffective." },
                { t: "12-lead ECG, consider Tele EMS, monitor and observe", f: "Correct. Without instability the CPG advises considering Tele EMS and monitoring." },
                { t: "Adrenaline push dose", f: "Vasopressors are only for unstable bradycardia." }
            ],
            correct: 2,
            explanation: "Treatment depends on instability (hypotension, acutely altered mental status, shock, ischemic chest discomfort, acute heart failure), not the rate alone. A 12-lead ECG is still a KPI for every bradycardic patient.",
            kpi: "12-lead ECG on all patients with bradycardia."
        }
    ]
};
