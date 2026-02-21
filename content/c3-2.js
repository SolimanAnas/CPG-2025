/* ========== Chapter 3.2 – Adult Bradycardia ========== */
window.CPG_DATA = {
    id: "c3-2",
    title: "Adult Bradycardia",
    shortTitle: "3.2 Adult Bradycardia",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">💓 Adult Bradycardia</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Maintain adequate perfusion and identify reversible causes.</li>
                <li>Appropriate management to improve end‑organ perfusion and prevent cardiac arrest.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <p>Adult patients (≥13 years) with heart rate &lt;60 bpm AND symptoms (altered mental status, chest pain, heart failure, syncope, hypotension, shock) or evidence of hemodynamic instability.</p>
            <p>Rhythms include: sinus bradycardia, second‑degree AV block (Mobitz I / II), third‑degree AV block, ventricular escape rhythms.</p>

            <h4>Exclusion Criteria</h4>
            <p>Paediatric patients (<13 years); bradycardia due to non‑cardiac causes already corrected (e.g., hypoxia, hypothermia).</p>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>12‑lead ECG</strong> – identify rhythm and underlying blocks.</li>
                <li><strong>Identify reversible causes</strong> – hypoxia, shock, toxins (beta‑blockers, CCB, organophosphates), electrolyte disorders, hypoglycaemia, increased ICP.</li>
                <li><strong>Signs of instability</strong> – hypotension, altered mental status, shock, ischaemic chest discomfort, acute heart failure.</li>
                <li><strong>Determine triage category</strong> – Red priority if unstable.</li>
            </ul>

            <h4>Management</h4>
            <ul>
                <li><strong>Primary survey</strong> – manage airway as needed (see Airway Management CPG).</li>
                <li><strong>Oxygen</strong> – target SpO₂ ≥94%.</li>
                <li><strong>ECG monitoring</strong> – 12‑lead and continuous.</li>
                <li><strong>Check blood glucose</strong> – treat hypoglycaemia (Hypoglycaemia CPG).</li>
                <li><strong>Atropine</strong> – 1 mg IV/IO every 3‑5 minutes (max 3 mg). Caution in myocardial infarction (may increase O₂ demand).</li>
                <li><strong>Transcutaneous pacing</strong> – if atropine ineffective; consider sedation (midazolam 0.5‑1 mg IV or ketamine 0.25‑1 mg/kg).</li>
                <li><strong>Vasopressors</strong> – if pacing fails or unavailable: dopamine 5‑20 mcg/kg/min IV or adrenaline push dose 0.01 mg every 2‑5 minutes / infusion 2‑10 mcg/min.</li>
            </ul>

            <h4>Key Points</h4>
            <ul>
                <li>Before atropine, rule out head injury, hypothermia, hypoxia – bradycardia may be compensatory.</li>
                <li>Atropine may worsen myocardial ischaemia.</li>
                <li>Sedation for pacing: midazolam or ketamine.</li>
                <li>Adrenaline infusion easier than dopamine without syringe driver.</li>
                <li>Transport unstable patients urgently; consider ALS back‑up.</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>12‑lead ECG obtained on all bradycardic patients.</li>
                <li>Atropine or transcutaneous pacing administered for all hemodynamically unstable patients (when appropriate).</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What heart rate defines bradycardia in an adult?",
            options: ["<50 bpm", "<60 bpm", "<70 bpm", "<80 bpm"],
            correct: 1,
            explanation: "Bradycardia is defined as a heart rate <60 bpm in adults."
        },
        {
            q: "Which of the following is NOT a common symptom of unstable bradycardia?",
            options: ["Altered mental status", "Chest pain", "Hypotension", "Fever"],
            correct: 3,
            explanation: "Fever is not a direct symptom of bradycardia; it may be a cause of sinus tachycardia. Unstable bradycardia presents with hypoperfusion symptoms."
        },
        {
            q: "A 65‑year‑old male presents with dizziness and a heart rate of 45 bpm. His ECG shows complete heart block. What is the first‑line medication?",
            options: ["Dopamine", "Atropine", "Adrenaline", "Amiodarone"],
            correct: 1,
            explanation: "Atropine 1 mg IV is the first‑line drug for symptomatic bradycardia, including high‑degree AV block."
        },
        {
            q: "What is the maximum total dose of atropine for bradycardia?",
            options: ["1 mg", "2 mg", "3 mg", "4 mg"],
            correct: 2,
            explanation: "Atropine may be repeated every 3‑5 minutes to a maximum total dose of 3 mg."
        },
        {
            q: "In which condition should atropine be used with caution?",
            options: ["Myocardial infarction", "Hypothermia", "Hyperkalemia", "Seizures"],
            correct: 0,
            explanation: "Atropine increases heart rate and myocardial oxygen demand, potentially worsening ischaemia in acute MI."
        },
        {
            q: "Which of the following rhythms is classified as a bradycardia?",
            options: ["Sinus tachycardia", "Mobitz type II", "Atrial fibrillation with rapid rate", "Ventricular tachycardia"],
            correct: 1,
            explanation: "Mobitz type II is a second‑degree AV block with a slow ventricular rate, thus a bradycardia."
        },
        {
            q: "A patient with bradycardia is unresponsive and apnoeic. What should you do first?",
            options: ["Give atropine", "Start CPR", "Apply transcutaneous pacing", "Establish IV access"],
            correct: 1,
            explanation: "Unresponsiveness and apnoea indicate cardiac arrest; start CPR immediately and follow cardiac arrest protocols."
        },
        {
            q: "What is the initial dose of atropine for adult bradycardia?",
            options: ["0.5 mg", "1 mg", "2 mg", "0.1 mg"],
            correct: 1,
            explanation: "The initial dose is 1 mg IV/IO, repeated every 3‑5 minutes if needed."
        },
        {
            q: "Which of the following is a reversible cause of bradycardia that should be corrected before giving atropine?",
            options: ["Hypoxia", "Hyperglycaemia", "Hypokalaemia", "Hypertension"],
            correct: 0,
            explanation: "Hypoxia can cause bradycardia; treat with oxygen and ventilation. Atropine may be harmful if bradycardia is compensatory."
        },
        {
            q: "If atropine is ineffective in unstable bradycardia, what is the next step?",
            options: ["Repeat atropine", "Transcutaneous pacing", "Adrenaline infusion", "Dopamine infusion"],
            correct: 1,
            explanation: "Transcutaneous pacing is indicated if atropine fails. Vasopressors (dopamine/adrenaline) are alternatives if pacing is not available or not tolerated."
        },
        {
            q: "What sedation agent can be used for transcutaneous pacing?",
            options: ["Morphine", "Midazolam", "Fentanyl", "Paracetamol"],
            correct: 1,
            explanation: "Midazolam 0.5‑1 mg IV or ketamine 0.25‑1 mg/kg can be used for sedation during pacing."
        },
        {
            q: "A patient with symptomatic bradycardia has a heart rate of 40 bpm and SBP 85 mmHg. After atropine, the rate is 45 bpm and SBP 90 mmHg. What should you do?",
            options: ["Give another atropine", "Start dopamine infusion", "Prepare for transcutaneous pacing", "Observe and reassess"],
            correct: 2,
            explanation: "Atropine may be repeated, but if the response is inadequate and the patient remains unstable, prepare for pacing."
        },
        {
            q: "What is the dose of dopamine for bradycardia?",
            options: ["2‑5 mcg/kg/min", "5‑20 mcg/kg/min", "20‑50 mcg/kg/min", "0.5‑1 mg IV"],
            correct: 1,
            explanation: "Dopamine 5‑20 mcg/kg/min IV infusion is used for haemodynamic support in bradycardia."
        },
        {
            q: "Which of the following ECG findings is characteristic of third‑degree AV block?",
            options: ["PR prolongation", "Dropped QRS complexes", "No relationship between P waves and QRS complexes", "Sawtooth pattern"],
            correct: 2,
            explanation: "Complete heart block shows atrioventricular dissociation – P waves and QRS complexes beat independently."
        },
        {
            q: "A patient with inferior STEMI develops bradycardia and hypotension. What should you suspect?",
            options: ["Right ventricular infarction", "Pulmonary embolism", "Pericarditis", "Ventricular septal rupture"],
            correct: 0,
            explanation: "Inferior MI often involves the right ventricle; bradycardia and hypotension may be due to increased vagal tone or RV infarction. Atropine may help, but fluids and pacing may be needed."
        },
        {
            q: "What is the adrenaline push dose for bradycardia?",
            options: ["0.1 mg", "0.5 mg", "1 mg", "0.01 mg"],
            correct: 0,
            explanation: "Adrenaline push dose is 0.01 mg (10 mcg) IV/IO every 2‑5 minutes as needed."
        },
        {
            q: "A 70‑year‑old on metoprolol presents with dizziness and HR 38 bpm. After atropine 1 mg, HR increases to 42 bpm with mild improvement. BP is 100/60. What is the most appropriate next action?",
            options: ["Give glucagon", "Start transcutaneous pacing", "Give another atropine", "Start dopamine infusion"],
            correct: 2,
            explanation: "Atropine can be repeated up to 3 mg. If still unstable after 3 mg, proceed to pacing. Beta‑blocker overdose may require glucagon, but atropine first."
        },
        {
            q: "What is an absolute contraindication to transcutaneous pacing?",
            options: ["Hypothermia", "Conscious patient", "Asystole", "No pulse"],
            correct: 1,
            explanation: "Pacing in a conscious patient is painful; sedation should be given, but it is not contraindicated. Asystole and no pulse are indications."
        },
        {
            q: "Which of the following is NOT a sign of instability in bradycardia?",
            options: ["SBP 85 mmHg", "Chest pain", "RR 10 breaths/min", "GCS 15"],
            correct: 3,
            explanation: "GCS 15 (alert) is normal; instability includes altered mental status, hypotension, shock, chest pain, or heart failure."
        },
        {
            q: "A patient with bradycardia and a pacemaker presents with syncope. ECG shows pacing spikes but no capture. What should you do?",
            options: ["Give atropine", "Apply external pacing", "Increase oxygen", "Call Tele‑EMS"],
            correct: 1,
            explanation: "Pacemaker malfunction with no capture requires immediate transcutaneous pacing."
        },
        {
            q: "What is the target rate for transcutaneous pacing in bradycardia?",
            options: ["30‑40 bpm", "60‑70 bpm", "80‑90 bpm", "100‑110 bpm"],
            correct: 1,
            explanation: "Pacing should aim for a rate that restores adequate perfusion, typically 60‑70 bpm."
        },
        {
            q: "A 55‑year‑old with bradycardia and hypotension receives atropine 1 mg x3 with no improvement. Pacing is unavailable. What medication should you consider?",
            options: ["Amiodarone", "Dopamine infusion", "Lidocaine", "Adenosine"],
            correct: 1,
            explanation: "Dopamine or adrenaline infusion can be used to support heart rate and blood pressure when pacing is unavailable."
        },
        {
            q: "Which of the following may cause bradycardia due to increased vagal tone?",
            options: ["Suctioning", "Pain", "Anxiety", "Fever"],
            correct: 0,
            explanation: "Vagal stimulation (e.g., suctioning, vomiting) can cause reflex bradycardia."
        },
        {
            q: "A patient with head trauma has bradycardia and hypertension. What is the likely cause?",
            options: ["Hypovolaemia", "Increased intracranial pressure (Cushing's triad)", "Myocardial infarction", "Sepsis"],
            correct: 1,
            explanation: "Cushing's triad (hypertension, bradycardia, irregular breathing) indicates increased ICP. Atropine is not indicated."
        },
        {
            q: "What is the correct dose of adrenaline infusion for bradycardia?",
            options: ["0.5‑1 mcg/min", "2‑10 mcg/min", "10‑20 mcg/min", "20‑50 mcg/min"],
            correct: 1,
            explanation: "Adrenaline infusion rate is 2‑10 mcg/min titrated to effect."
        },
        {
            q: "In a patient with bradycardia and suspected beta‑blocker overdose, which drug may be beneficial after atropine?",
            options: ["Glucagon", "Calcium chloride", "Sodium bicarbonate", "Naloxone"],
            correct: 0,
            explanation: "Glucagon 1‑5 mg IV can be used in beta‑blocker overdose to increase heart rate."
        },
        {
            q: "A patient with bradycardia and a wide QRS escape rhythm is unstable. What is the treatment?",
            options: ["Atropine", "Transcutaneous pacing", "Dopamine", "Adrenaline"],
            correct: 1,
            explanation: "Wide escape rhythms often do not respond well to atropine; pacing is the treatment of choice."
        },
        {
            q: "What is the main risk of using atropine in myocardial infarction?",
            options: ["Ventricular tachycardia", "Increased myocardial oxygen demand", "Hypotension", "Bradycardia"],
            correct: 1,
            explanation: "Atropine increases heart rate, which can increase myocardial oxygen demand and worsen ischaemia."
        },
        {
            q: "A patient with bradycardia is conscious but lethargic, with HR 40 and SBP 80. Atropine 1 mg is given. After 3 minutes, HR is 45 and SBP 85. What should you do?",
            options: ["Give second dose of atropine", "Start dopamine infusion", "Begin transcutaneous pacing", "Repeat atropine and prepare for pacing"],
            correct: 3,
            explanation: "Atropine can be repeated up to 3 mg; if inadequate response, prepare for pacing while giving further doses."
        },
        {
            q: "Which rhythm is most likely to be unresponsive to atropine?",
            options: ["Sinus bradycardia", "Mobitz I", "Mobitz II", "Third‑degree AV block with narrow escape"],
            correct: 2,
            explanation: "Mobitz II and third‑degree AV block are often infranodal and may not respond to atropine; pacing is usually required."
        }
    ],
    flashcards: [
        { category: "Definition", question: "What is bradycardia in an adult?", answer: "Heart rate <60 bpm." },
        { category: "Symptoms", question: "List three symptoms of unstable bradycardia.", answer: "Hypotension, altered mental status, chest pain, syncope, shock, acute heart failure." },
        { category: "Causes", question: "Name three reversible causes of bradycardia.", answer: "Hypoxia, hypothermia, toxins (beta‑blockers, CCB), increased ICP, hypoglycaemia." },
        { category: "ECG", question: "What rhythms are classified as bradycardia?", answer: "Sinus bradycardia, second‑degree AV block (Mobitz I/II), third‑degree AV block, ventricular escape." },
        { category: "Atropine", question: "What is the dose and max total of atropine for bradycardia?", answer: "1 mg IV/IO every 3‑5 minutes, max 3 mg." },
        { category: "Atropine", question: "When should atropine be used with caution?", answer: "Myocardial infarction – may increase oxygen demand." },
        { category: "Atropine", question: "Before giving atropine, what conditions must be ruled out?", answer: "Head injury, hypothermia, hypoxia – bradycardia may be compensatory." },
        { category: "Pacing", question: "When is transcutaneous pacing indicated?", answer: "If atropine is ineffective or patient is unstable with high‑degree block." },
        { category: "Pacing", question: "What sedation can be used for pacing?", answer: "Midazolam 0.5‑1 mg IV or ketamine 0.25‑1 mg/kg." },
        { category: "Vasopressors", question: "What vasopressors are used for bradycardia?", answer: "Dopamine 5‑20 mcg/kg/min or adrenaline push dose 0.01 mg / infusion 2‑10 mcg/min." },
        { category: "Dopamine", question: "What is the dose of dopamine for bradycardia?", answer: "5‑20 mcg/kg/min IV infusion." },
        { category: "Adrenaline", question: "What is the push dose of adrenaline for bradycardia?", answer: "0.01 mg (10 mcg) IV every 2‑5 minutes." },
        { category: "Adrenaline", question: "What is the infusion rate of adrenaline for bradycardia?", answer: "2‑10 mcg/min titrated." },
        { category: "Mobitz I", question: "What is Wenckebach (Mobitz I)?", answer: "Progressive PR prolongation until a QRS is dropped; usually at AV node, may respond to atropine." },
        { category: "Mobitz II", question: "What is Mobitz II?", answer: "Intermittent non‑conducted P waves without PR change; infranodal, often requires pacing." },
        { category: "3rd degree", question: "What is complete heart block?", answer: "No relationship between P waves and QRS; atria and ventricles beat independently." },
        { category: "Causes", question: "Name three toxins causing bradycardia.", answer: "Beta‑blockers, calcium channel blockers, digoxin, organophosphates." },
        { category: "Cushing's triad", question: "What is Cushing's triad?", answer: "Hypertension, bradycardia, irregular breathing – sign of increased ICP." },
        { category: "Management", question: "What is the first step in symptomatic bradycardia?", answer: "Maintain airway, oxygen, monitor, and assess for reversible causes." },
        { category: "Management", question: "If atropine fails, what are the next options?", answer: "Transcutaneous pacing, dopamine, or adrenaline infusion." },
        { category: "Beta‑blocker OD", question: "What drug can be used for bradycardia in beta‑blocker overdose?", answer: "Glucagon 1‑5 mg IV." },
        { category: "KPI", question: "What are two key performance indicators for bradycardia?", answer: "1. 12‑lead ECG on all bradycardic patients. 2. Atropine or pacing for unstable patients." },
        { category: "Pacing", question: "What is the target rate for transcutaneous pacing?", answer: "60‑70 bpm (adequate perfusion)." },
        { category: "Instability", question: "What defines unstable bradycardia?", answer: "Hypotension, altered mental status, shock, ischaemic chest pain, acute heart failure." },
        { category: "Hypothermia", question: "Is atropine effective in hypothermic bradycardia?", answer: "No – treat by rewarming; atropine is unlikely to work until core temp >30°C." },
        { category: "Pacing", question: "What are complications of transcutaneous pacing?", answer: "Pain, failure to capture, burns, arrhythmias." },
        { category: "Sedation", question: "What ketamine dose is used for sedation during pacing?", answer: "0.25‑1 mg/kg IV." },
        { category: "Escape rhythm", question: "What is an escape rhythm?", answer: "A backup rhythm from a lower pacemaker when the primary pacemaker fails; often slow." },
        { category: "ECG", question: "What is the ECG sign of Mobitz I?", answer: "Progressive PR prolongation until a dropped QRS." },
        { category: "ECG", question: "What is the ECG sign of Mobitz II?", answer: "Intermittent dropped QRS without PR change." }
    ],
    critical: [
        {
            id: "crit_3_2_1",
            scenario: "A 72‑year‑old male presents with profound weakness and near‑syncope. His BP is 80/50, HR 32 bpm, and ECG shows complete heart block with a wide QRS escape. He is drowsy. What is your immediate management?",
            question: "What is the priority intervention?",
            options: [
                { t: "Give atropine 1 mg IV", f: "Atropine may be tried, but wide escape often does not respond; pacing is the definitive treatment." },
                { t: "Start transcutaneous pacing immediately with sedation", f: "Correct. This patient is unstable with complete heart block and wide escape. Pacing is indicated; consider sedation." },
                { t: "Administer dopamine infusion", f: "Vasopressors may be used if pacing fails, but pacing is first‑line." },
                { t: "Give adrenaline 0.5 mg IV", f: "Adrenaline can be used temporarily, but pacing is definitive." }
            ],
            correct: 1,
            explanation: "Unstable bradycardia with complete heart block and wide QRS escape requires immediate transcutaneous pacing. Sedation (midazolam/ketamine) should be considered for comfort.",
            kpi: "Pacing initiated within 5 minutes."
        },
        {
            id: "crit_3_2_2",
            scenario: "A 55‑year‑old with inferior STEMI has HR 40 bpm and BP 85/60. He is cool and clammy. Atropine 1 mg increases HR to 52 bpm but BP remains 88/62. ECG shows ST elevation in II, III, aVF with no RV involvement. What is the next step?",
            question: "What should you do next?",
            options: [
                { t: "Give another atropine", f: "Atropine can be repeated, but the response is inadequate; consider pacing." },
                { t: "Start dopamine infusion", f: "Dopamine may help, but pacing is more definitive." },
                { t: "Prepare for transcutaneous pacing", f: "Correct. After atropine, the patient remains hypotensive; pacing is indicated." },
                { t: "Give a fluid bolus", f: "Fluids may help if RV infarct, but not mentioned; pacing is priority." }
            ],
            correct: 2,
            explanation: "Atropine may be repeated up to 3 mg, but persistent hypotension after initial dose warrants preparation for pacing. If fluids are indicated (RV infarct), they can be given concurrently.",
            kpi: "Pacing initiated within 10 minutes of failed atropine."
        },
        {
            id: "crit_3_2_3",
            scenario: "A 68‑year‑old female on metoprolol and diltiazem presents with dizziness and HR 38 bpm. BP is 90/60, lungs clear. Atropine 1 mg x2 has no effect. Pacing is not immediately available. What is the best pharmacological option?",
            question: "What drug should you consider next?",
            options: [
                { t: "Glucagon 1‑5 mg IV", f: "Correct. Glucagon can increase heart rate in beta‑blocker/CCB overdose." },
                { t: "Dopamine infusion", f: "Dopamine may be used, but glucagon addresses the overdose cause." },
                { t: "Calcium chloride", f: "Calcium is used in CCB overdose but not beta‑blockers; glucagon is preferred." },
                { t: "Adrenaline infusion", f: "Adrenaline may be used, but glucagon is more specific." }
            ],
            correct: 0,
            explanation: "In suspected beta‑blocker/CCB overdose, glucagon can increase heart rate and contractility. It should be given early if atropine fails.",
            kpi: "Glucagon considered within 10 minutes."
        },
        {
            id: "crit_3_2_4",
            scenario: "A 45‑year‑old male with head trauma from a fall has HR 45 bpm and BP 170/100. He has a GCS of 10. What is the likely cause and appropriate action?",
            question: "What should you do?",
            options: [
                { t: "Give atropine to increase heart rate", f: "Atropine may worsen hypertension; bradycardia here is likely compensatory for increased ICP." },
                { t: "Start dopamine to raise BP", f: "BP is already high; dopamine is not indicated." },
                { t: "Manage airway and treat for suspected increased ICP", f: "Correct. Cushing's triad suggests raised ICP; focus on airway, ventilation, and rapid transport." },
                { t: "Apply transcutaneous pacing", f: "Pacing is not indicated; the bradycardia is due to ICP, not a primary cardiac issue." }
            ],
            correct: 2,
            explanation: "Hypertension and bradycardia with head injury indicate Cushing's triad – raised ICP. Treat with airway management, oxygenation, and rapid transport to a trauma centre.",
            kpi: "Recognition of ICP and avoidance of inappropriate bradycardia treatment."
        },
        {
            id: "crit_3_2_5",
            scenario: "A 60‑year‑old with bradycardia and hypotension is being paced transcutaneously. The pacing spikes are seen, but there is no capture and the patient remains hypotensive. What should you do?",
            question: "What is the priority action?",
            options: [
                { t: "Increase the pacing output", f: "Correct. If there is no capture, increase current output until capture is achieved." },
                { t: "Switch to dopamine infusion", f: "Vasopressors may be considered, but first ensure capture." },
                { t: "Give another dose of atropine", f: "Atropine is unlikely to help if pacing already attempted." },
                { t: "Check limb leads", f: "Pacing pads may need repositioning, but increasing output is the immediate step." }
            ],
            correct: 0,
            explanation: "Loss of capture requires increasing output. If still no capture, reposition pads and check connections.",
            kpi: "Capture achieved within 2 minutes."
        }
    ]
};