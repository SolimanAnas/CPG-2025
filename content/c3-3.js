/* ========== Chapter 3.3 – Adult Tachycardia with a Pulse ========== */
window.CPG_DATA = {
    id: "c3-3",
    title: "Adult Tachycardia with a Pulse",
    shortTitle: "3.3 Adult Tachycardia",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">⚡ Adult Tachycardia with a Pulse</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Identify patients with tachycardia requiring intervention.</li>
                <li>Identify and treat underlying causes (e.g., shock, sepsis, toxins).</li>
                <li>Restore normal rhythm and hemodynamic stability.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <p>Adult patients (≥13 years) presenting with tachycardia (typically HR >150 bpm) and a palpable pulse, conscious or unconscious.</p>

            <h4>Exclusion Criteria</h4>
            <p>Tachycardia due to a non‑cardiac cause that requires other treatment (e.g., sepsis, pain, hypovolaemia) before rhythm management; paediatric patients (<13 years).</p>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>12‑lead ECG</strong> – identify rhythm: VT, SVT, sinus tachycardia, atrial fibrillation, etc.</li>
                <li><strong>Identify and treat reversible causes</strong> – toxins, sepsis, pain, hypovolaemia, anaemia, hyperthyroidism.</li>
                <li><strong>Signs of instability</strong> – hypotension, acutely altered mental status, chest pain, shock.</li>
                <li><strong>Determine triage category</strong> – Red priority if VT, SVT, or dysrhythmia with severe shock/hypotension.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Primary survey</strong> – manage ABC as per Universal Care CPG.</li>
                <li><strong>Attach cardiac monitor</strong> – assess rhythm and vital signs; obtain 12‑lead ECG (may be deferred in unstable patient).</li>
                <li><strong>Consider ALS back‑up</strong> – as per Universal Care CPG.</li>
                <li><strong>Identify and treat underlying causes</strong> – e.g., pain, fever, hypovolaemia.</li>
                <li><strong>Establish IV access</strong> – consider IO if delayed.</li>
                <li><strong>Assess for signs of instability</strong> – hypotension, altered mental status.</li>
            </ul>

            <h5>Unstable Patient (with tachycardia and hypotension/shock)</h5>
            <ul>
                <li>Request ALS back‑up.</li>
                <li><strong>Synchronized cardioversion</strong> – with sedation if time permits (see Joule settings table).</li>
                <li>If rhythm does not revert, increase energy and repeat.</li>
                <li>If patient deteriorates into cardiac arrest, go to Adult Cardiac Arrest CPG.</li>
                <li><strong>Adenosine</strong> – may be considered if regular tachycardia and not severely compromised, or if sedation unavailable.</li>
            </ul>

            <h5>Stable Patient</h5>
            <ul>
                <li><strong>Narrow complex tachycardia (QRS <0.12 sec, HR >150)</strong>:
                    <ul>
                        <li>Vagal manoeuvres (modified Valsalva) – if regular.</li>
                        <li>IV fluid bolus 250 mL (cautiously, avoid overload).</li>
                        <li>Adenosine 6 mg rapid IV, then 12 mg if no effect (if regular).</li>
                    </ul>
                </li>
                <li><strong>Wide complex tachycardia (QRS >0.12 sec, HR >150)</strong>:
                    <ul>
                        <li>If regular and monomorphic, consider adenosine 6 mg then 12 mg.</li>
                        <li>IV fluid bolus 250 mL.</li>
                        <li>Amiodarone 150 mg IV/IO over 10 minutes (diluted in D5W 100 mL). May repeat once.</li>
                    </ul>
                </li>
                <li><strong>Torsades de pointes</strong>:
                    <ul>
                        <li>Consider asynchronous defibrillation.</li>
                        <li>Magnesium sulfate 2 g IV over 10 minutes.</li>
                    </ul>
                </li>
                <li><strong>Refractory rhythms</strong> – consider underlying causes and Tele‑EMS consultation.</li>
            </ul>

            <h5>Joule Settings for Synchronized Cardioversion</h5>
            <table style="width:100%; border-collapse:collapse; margin:10px 0;">
                <tr style="background:var(--glass-bg);"><th>Device</th><th>Rhythm</th><th>Initial Dose</th><th>Subsequent Dose</th></tr>
                <tr><td rowspan="3">LIFEPAK 15</td><td>Wide complex tachycardia</td><td>100 J</td><td>200 J, 300 J, 360 J</td></tr>
                <tr><td>SVT</td><td>50 J</td><td>100 J, 200 J, 300 J, 360 J</td></tr>
                <tr><td>Atrial fibrillation</td><td>120 J</td><td>200 J, 300 J, 360 J</td></tr>
                <tr><td rowspan="3">ZOLL X‑SERIES</td><td>Wide complex tachycardia</td><td>100 J</td><td>120 J, 150 J, 200 J</td></tr>
                <tr><td>SVT</td><td>50 J</td><td>120 J, 150 J, 200 J</td></tr>
                <tr><td>Atrial fibrillation</td><td>120 J</td><td>150 J, 180 J, 200 J</td></tr>
            </table>

            <h5>Patient Safety Considerations</h5>
            <ul>
                <li>Have equipment for cardiac arrest management immediately available during cardioversion.</li>
                <li>Monitor for fluid overload with IV fluid administration.</li>
                <li>Avoid vagal stimulation if R‑R interval varies or atrial fibrillation present.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Identification, mechanism, injuries/illness, signs (rhythm, vitals), treatment (medications, cardioversion), allergies, medications, background, other (ALS back‑up, Tele‑EMS).</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Perform synchronized cardioversion on all hemodynamically compromised patients with tachycardia.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What heart rate typically defines tachycardia requiring intervention?",
            options: [">100 bpm", ">120 bpm", ">150 bpm", ">180 bpm"],
            correct: 2,
            explanation: "Symptomatic tachycardia usually occurs at rates >150 bpm, though lower rates may cause symptoms in some patients."
        },
        {
            q: "Which of the following is a sign of instability in a tachycardic patient?",
            options: ["Heart rate 155 bpm", "SBP 110 mmHg", "Altered mental status", "Respiratory rate 18"],
            correct: 2,
            explanation: "Hypotension, altered mental status, shock, chest pain, or heart failure indicate instability."
        },
        {
            q: "What is the first‑line treatment for unstable tachycardia with a pulse?",
            options: ["Adenosine", "Amiodarone", "Synchronized cardioversion", "Vagal manoeuvres"],
            correct: 2,
            explanation: "Synchronized cardioversion is the treatment of choice for unstable tachycardia with a pulse."
        },
        {
            q: "A 65‑year‑old male presents with narrow complex tachycardia at 180 bpm, regular rhythm, and SBP 95 mmHg. He is alert but anxious. What is the most appropriate next step?",
            options: ["Synchronized cardioversion", "Adenosine 6 mg IV", "Vagal manoeuvres", "Amiodarone 150 mg IV"],
            correct: 2,
            explanation: "For stable narrow complex tachycardia, vagal manoeuvres (modified Valsalva) should be attempted first. If ineffective, proceed to adenosine."
        },
        {
            q: "What is the correct initial dose of adenosine for stable narrow complex tachycardia?",
            options: ["3 mg", "6 mg", "12 mg", "18 mg"],
            correct: 1,
            explanation: "Adenosine initial dose is 6 mg rapid IV push, followed by a 20 mL saline flush. If no effect, give 12 mg."
        },
        {
            q: "A patient with stable wide complex tachycardia (monomorphic) does not respond to adenosine. What is the next recommended medication?",
            options: ["Lidocaine", "Amiodarone 150 mg IV over 10 minutes", "Magnesium sulfate", "Diltiazem"],
            correct: 1,
            explanation: "Amiodarone 150 mg IV/IO over 10 minutes (diluted in D5W) is indicated for stable monomorphic VT after adenosine."
        },
        {
            q: "What is the recommended energy for the first synchronized cardioversion of unstable SVT using a LIFEPAK 15?",
            options: ["50 J", "100 J", "120 J", "200 J"],
            correct: 0,
            explanation: "For SVT, initial dose is 50 J (biphasic). Subsequent doses may be increased."
        },
        {
            q: "A patient with torsades de pointes requires immediate treatment. Which medication should be given?",
            options: ["Amiodarone", "Lidocaine", "Magnesium sulfate 2 g IV", "Potassium chloride"],
            correct: 2,
            explanation: "Magnesium sulfate 2 g IV over 10 minutes is the drug of choice for torsades de pointes."
        },
        {
            q: "What is the correct dose of amiodarone for stable wide complex tachycardia?",
            options: ["300 mg IV push", "150 mg IV over 10 minutes", "1 mg/kg", "5 mg/kg"],
            correct: 1,
            explanation: "Amiodarone 150 mg diluted in 100 mL D5W given over 10 minutes. Repeat once if needed."
        },
        {
            q: "Which of the following rhythms is NOT an indication for synchronized cardioversion?",
            options: ["Unstable VT", "Unstable SVT", "Atrial fibrillation with rapid rate and instability", "Sinus tachycardia at 150 bpm with fever"],
            correct: 3,
            explanation: "Sinus tachycardia is a physiologic response; treat the underlying cause (e.g., fever)."
        },
        {
            q: "What is the maximum total dose of adenosine that can be given for stable tachycardia?",
            options: ["6 mg", "12 mg", "18 mg", "24 mg"],
            correct: 1,
            explanation: "After 6 mg and 12 mg, if no effect, consider alternative diagnosis; do not exceed 12 mg."
        },
        {
            q: "A 70‑year‑old with wide complex tachycardia at 170 bpm becomes unresponsive and pulseless. What should you do?",
            options: ["Give amiodarone", "Perform synchronized cardioversion", "Start CPR and defibrillate as per cardiac arrest protocol", "Give adenosine"],
            correct: 2,
            explanation: "This is now cardiac arrest. Follow Adult Cardiac Arrest CPG: start CPR and defibrillate if VF/VT."
        },
        {
            q: "What is the initial joule setting for unstable atrial fibrillation using a ZOLL X‑SERIES?",
            options: ["50 J", "100 J", "120 J", "150 J"],
            correct: 2,
            explanation: "For AF, initial dose is 120 J (biphasic) on ZOLL X‑SERIES."
        },
        {
            q: "Which of the following is a contraindication to vagal manoeuvres?",
            options: ["Irregular narrow complex tachycardia", "Regular narrow complex tachycardia", "Hypotension", "History of myocardial infarction"],
            correct: 0,
            explanation: "Vagal manoeuvres are effective only for regular SVT; they are not indicated for atrial fibrillation or flutter."
        },
        {
            q: "A patient with stable regular wide complex tachycardia receives adenosine 6 mg with no effect. What is the next appropriate dose?",
            options: ["12 mg", "18 mg", "Amiodarone", "Repeat 6 mg"],
            correct: 0,
            explanation: "If no response, give adenosine 12 mg. If still no response, consider amiodarone."
        },
        {
            q: "What is the primary purpose of a fluid bolus in stable tachycardia?",
            options: ["Increase heart rate", "Treat possible hypovolaemia", "Decrease afterload", "Prevent adenosine side effects"],
            correct: 1,
            explanation: "Hypovolaemia may contribute to tachycardia; a fluid bolus (250 mL) can help identify and treat this cause."
        },
        {
            q: "A patient with unstable wide complex tachycardia has received sedation and is being cardioverted. What energy should be used for the first shock with a LIFEPAK 15?",
            options: ["50 J", "100 J", "120 J", "200 J"],
            correct: 1,
            explanation: "Initial dose for wide complex tachycardia (VT) is 100 J (biphasic)."
        },
        {
            q: "Which of the following is a potential cause of sinus tachycardia?",
            options: ["Sepsis", "Myocardial infarction", "Pain", "All of the above"],
            correct: 3,
            explanation: "Sinus tachycardia can result from fever, pain, hypovolaemia, anaemia, hyperthyroidism, etc."
        },
        {
            q: "A patient with stable narrow complex tachycardia and a history of asthma presents. Which medication should be used with caution?",
            options: ["Adenosine", "Amiodarone", "Verapamil", "Magnesium"],
            correct: 0,
            explanation: "Adenosine can cause bronchospasm; use with caution in asthmatics. Have bronchodilators ready."
        },
        {
            q: "What is the correct dose of magnesium sulfate for torsades de pointes?",
            options: ["1 g IV over 1 minute", "2 g IV over 10 minutes", "4 g IV bolus", "500 mg IV"],
            correct: 1,
            explanation: "Give 2 g diluted in D5W or NS over 10 minutes for torsades."
        },
        {
            q: "A patient with stable wide complex tachycardia has an irregular rhythm. What should you do?",
            options: ["Give adenosine", "Give amiodarone", "Consider Tele‑EMS and possible cardioversion", "Start vagal manoeuvres"],
            correct: 2,
            explanation: "Irregular wide complex tachycardia may be atrial fibrillation with aberrancy or polymorphic VT. Consult Tele‑EMS and prepare for cardioversion."
        },
        {
            q: "What is the maximum number of adenosine doses recommended before considering alternative therapy?",
            options: ["1", "2", "3", "4"],
            correct: 1,
            explanation: "Adenosine can be given as 6 mg then 12 mg. If no response, consider other causes (e.g., atrial flutter, VT) and alternative treatment."
        },
        {
            q: "A patient with unstable tachycardia is too unstable to wait for sedation. What should you do?",
            options: ["Delay cardioversion until sedation available", "Proceed with cardioversion without sedation", "Give opioids only", "Start CPR"],
            correct: 1,
            explanation: "If the patient is critically unstable, cardioversion should not be delayed for sedation."
        },
        {
            q: "Which of the following is a sign of adequate perfusion in a tachycardic patient?",
            options: ["Delayed capillary refill", "Cool extremities", "Normal mental status", "SBP 80 mmHg"],
            correct: 2,
            explanation: "Normal mental status indicates adequate cerebral perfusion. Hypotension and poor perfusion suggest instability."
        },
        {
            q: "What is the dose of amiodarone for refractory VF/VT during cardiac arrest?",
            options: ["150 mg", "300 mg", "450 mg", "5 mg/kg"],
            correct: 1,
            explanation: "In cardiac arrest, the first dose of amiodarone is 300 mg IV/IO; second dose is 150 mg."
        },
        {
            q: "A patient with stable SVT at 190 bpm fails vagal manoeuvres and has no IV access. What should you do?",
            options: ["Attempt IO access", "Transport without medication", "Give adenosine IM", "Perform cardioversion"],
            correct: 1,
            explanation: "If IV access is not available and the patient is stable, transport while attempting access en route. Adenosine must be given IV."
        },
        {
            q: "What is the main risk of using adenosine in a patient with atrial fibrillation?",
            options: ["Accelerated ventricular rate", "Hypotension", "Bronchospasm", "Ventricular fibrillation"],
            correct: 0,
            explanation: "Adenosine may increase AV conduction in AF, leading to a rapid ventricular response."
        },
        {
            q: "A 55‑year‑old with narrow complex tachycardia at 160 bpm and SBP 100 mmHg is alert. After vagal manoeuvres fail, what is the next step?",
            options: ["Synchronized cardioversion", "Adenosine 6 mg", "Amiodarone", "Fluid bolus"],
            correct: 1,
            explanation: "He remains stable; adenosine is appropriate after vagal manoeuvres."
        },
        {
            q: "What is the purpose of using a 20 mL saline flush after adenosine?",
            options: ["Prevent phlebitis", "Rapidly deliver drug to central circulation", "Dilute the drug", "Prevent bradycardia"],
            correct: 1,
            explanation: "Adenosine has an extremely short half‑life; a rapid flush ensures it reaches the heart quickly."
        },
        {
            q: "A patient with stable wide complex tachycardia has a history of heart failure. Which medication should be avoided?",
            options: ["Amiodarone", "Lidocaine", "Verapamil", "Magnesium"],
            correct: 2,
            explanation: "Verapamil can worsen heart failure and should be avoided in wide complex tachycardia of uncertain origin."
        },
        {
            q: "After successful cardioversion of unstable SVT, what is the priority?",
            options: ["Repeat cardioversion", "Administer amiodarone", "Reassess patient and vital signs", "Start a lidocaine infusion"],
            correct: 2,
            explanation: "Reassess the patient for stability and signs of ROSC or deterioration."
        }
    ],
    flashcards: [
        { category: "Definition", question: "What heart rate typically defines symptomatic tachycardia?", answer: ">150 bpm (though lower rates may cause symptoms)." },
        { category: "Rhythms", question: "Name three types of narrow complex tachycardia.", answer: "SVT, atrial fibrillation, atrial flutter, junctional tachycardia." },
        { category: "Rhythms", question: "Name three types of wide complex tachycardia.", answer: "VT, SVT with aberrancy, pre‑excited AF (WPW)." },
        { category: "Instability", question: "What are the signs of unstable tachycardia?", answer: "Hypotension, altered mental status, chest pain, shock, acute heart failure." },
        { category: "Management", question: "What is the first step in unstable tachycardia?", answer: "Synchronized cardioversion with sedation if time permits." },
        { category: "Cardioversion", question: "What energy is used for unstable VT (LIFEPAK 15)?", answer: "100 J initially, then 200 J, 300 J, 360 J." },
        { category: "Cardioversion", question: "What energy is used for unstable SVT (LIFEPAK 15)?", answer: "50 J initially, then 100 J, 200 J, 300 J, 360 J." },
        { category: "Cardioversion", question: "What energy is used for unstable AF (ZOLL X‑SERIES)?", answer: "120 J initially, then 150 J, 180 J, 200 J." },
        { category: "Adenosine", question: "What is the dose of adenosine for stable SVT?", answer: "6 mg rapid IV, then 12 mg if no effect." },
        { category: "Adenosine", question: "How should adenosine be administered?", answer: "Rapid IV push over 1‑2 seconds, followed by 20 mL saline flush." },
        { category: "Adenosine", question: "What are common side effects of adenosine?", answer: "Facial flushing, chest tightness, dyspnoea, transient asystole." },
        { category: "Vagal manoeuvres", question: "Name two vagal manoeuvres.", answer: "Modified Valsalva, ice water to face, coughing, breath‑holding." },
        { category: "Amiodarone", question: "What is the dose of amiodarone for stable VT?", answer: "150 mg IV/IO over 10 minutes (diluted in D5W)." },
        { category: "Amiodarone", question: "How is amiodarone diluted for infusion?", answer: "150 mg in 100 mL D5W given over 10 minutes." },
        { category: "Magnesium", question: "What is the dose of magnesium for torsades?", answer: "2 g IV over 10 minutes." },
        { category: "Torsades", question: "What rhythm is torsades de pointes?", answer: "Polymorphic VT associated with prolonged QT." },
        { category: "Causes", question: "Name four causes of sinus tachycardia.", answer: "Pain, fever, hypovolaemia, anxiety, anaemia, hyperthyroidism." },
        { category: "Causes", question: "Name three toxins that can cause tachycardia.", answer: "Cocaine, amphetamines, theophylline, caffeine, atropine." },
        { category: "Precautions", question: "Why is adenosine contraindicated in asthma?", answer: "Can cause bronchospasm." },
        { category: "Precautions", question: "What should be available when giving adenosine?", answer: "Defibrillator and resuscitation equipment." },
        { category: "Fluid", question: "What is the initial fluid bolus for stable tachycardia?", answer: "250 mL IV crystalloid (cautiously)." },
        { category: "Wide complex", question: "What is the first medication for stable monomorphic VT after adenosine?", answer: "Amiodarone 150 mg IV." },
        { category: "Narrow complex", question: "What is the sequence for stable narrow complex tachycardia?", answer: "Vagal manoeuvres → adenosine 6 mg → 12 mg → consider alternative." },
        { category: "Refractory", question: "What should you do if tachycardia is refractory to initial treatment?", answer: "Consider underlying causes, consult Tele‑EMS." },
        { category: "KPI", question: "What is the key performance indicator for unstable tachycardia?", answer: "Perform synchronized cardioversion on all hemodynamically compromised patients." },
        { category: "Safety", question: "Why must resuscitation equipment be ready during cardioversion?", answer: "Risk of inducing VF or asystole." },
        { category: "Atrial fib", question: "What is the initial cardioversion energy for AF (LIFEPAK 15)?", answer: "120 J." },
        { category: "WPW", question: "What drug should be avoided in AF with WPW?", answer: "AV nodal blockers (adenosine, verapamil, diltiazem) – may accelerate conduction." },
        { category: "Sedation", question: "What sedation can be used for cardioversion?", answer: "Midazolam, ketamine, or opioids." },
        { category: "Documentation", question: "What must be documented after cardioversion?", answer: "Energy used, number of shocks, rhythm before/after, sedation given." }
    ],
    critical: [
        {
            id: "crit_3_3_1",
            scenario: "A 60‑year‑old male presents with palpitations and lightheadedness. HR 190 bpm, BP 85/50, RR 22, SpO₂ 96%. ECG shows a regular wide complex tachycardia at 190 bpm. He is pale and diaphoretic. What is your immediate action?",
            question: "What is the priority intervention?",
            options: [
                { t: "Give adenosine 6 mg IV", f: "Patient is unstable; cardioversion is first‑line." },
                { t: "Start amiodarone infusion", f: "Amiodarone is for stable VT; this patient is unstable." },
                { t: "Perform synchronized cardioversion", f: "Correct. Unstable wide complex tachycardia requires immediate cardioversion." },
                { t: "Administer fluid bolus", f: "Fluids may help but will not terminate the rhythm." }
            ],
            correct: 2,
            explanation: "This patient has unstable tachycardia (hypotension, diaphoresis). Synchronized cardioversion should be performed immediately; sedation can be given if time permits.",
            kpi: "Cardioversion performed within 2 minutes."
        },
        {
            id: "crit_3_3_2",
            scenario: "A 45‑year‑old female with a history of SVT presents with sudden palpitations. HR 210 bpm, BP 115/70, regular narrow complex. She is anxious but otherwise well. Vagal manoeuvres fail. IV access is obtained. What is the next step?",
            question: "What is the appropriate treatment?",
            options: [
                { t: "Synchronized cardioversion 50 J", f: "Patient is stable; cardioversion is not first‑line." },
                { t: "Adenosine 6 mg rapid IV", f: "Correct. Stable narrow complex tachycardia after failed vagal manoeuvres should receive adenosine." },
                { t: "Amiodarone 150 mg IV", f: "Not indicated for stable SVT." },
                { t: "Metoprolol 5 mg IV", f: "Not first‑line; adenosine is preferred." }
            ],
            correct: 1,
            explanation: "This is stable SVT. After vagal manoeuvres, adenosine 6 mg is the drug of choice. Monitor for transient asystole.",
            kpi: "Adenosine administered within 5 minutes."
        },
        {
            id: "crit_3_3_3",
            scenario: "You are called to a 55‑year‑old male with chest pain and palpitations. ECG shows atrial fibrillation at 150 bpm, BP 100/70, alert. He has a history of Wolff‑Parkinson‑White syndrome. What medication should be avoided?",
            question: "Which drug is contraindicated?",
            options: [
                { t: "Amiodarone", f: "Amiodarone is safe in WPW." },
                { t: "Adenosine", f: "Correct. Adenosine can accelerate conduction via accessory pathway, causing VF." },
                { t: "Magnesium", f: "Magnesium is safe." },
                { t: "Lidocaine", f: "Lidocaine is not first‑line but not contraindicated." }
            ],
            correct: 1,
            explanation: "In AF with WPW, AV nodal blockers (adenosine, verapamil, diltiazem) can increase ventricular rate and precipitate VF. Use amiodarone or cardioversion if unstable.",
            kpi: "Recognition of WPW and avoidance of inappropriate drugs."
        },
        {
            id: "crit_3_3_4",
            scenario: "A 70‑year‑old with stable monomorphic VT at 160 bpm receives amiodarone 150 mg IV over 10 minutes. After the infusion, the rate is still 155 bpm. What should you do next?",
            question: "What is the most appropriate action?",
            options: [
                { t: "Give a second dose of amiodarone 150 mg", f: "Correct. A repeat dose can be given if no effect." },
                { t: "Perform synchronized cardioversion", f: "Patient is stable; can repeat amiodarone before cardioversion." },
                { t: "Give adenosine", f: "Adenosine is not indicated for VT." },
                { t: "Start dopamine", f: "Dopamine may increase rate." }
            ],
            correct: 0,
            explanation: "If amiodarone is ineffective, a repeat dose (150 mg) can be given. If still no response, consider cardioversion or Tele‑EMS consultation.",
            kpi: "Repeat amiodarone considered."
        },
        {
            id: "crit_3_3_5",
            scenario: "A 50‑year‑old female with a history of long QT presents with recurrent episodes of polymorphic VT (torsades). She is conscious but dizzy. BP 90/60. What is the priority treatment?",
            question: "What should you administer immediately?",
            options: [
                { t: "Amiodarone 150 mg IV", f: "Amiodarone may prolong QT and worsen torsades." },
                { t: "Magnesium sulfate 2 g IV over 10 minutes", f: "Correct. Magnesium is first‑line for torsades." },
                { t: "Synchronized cardioversion", f: "If unstable, cardioversion may be needed, but magnesium should be given first if patient is conscious." },
                { t: "Lidocaine 100 mg IV", f: "Lidocaine is not first‑line for torsades." }
            ],
            correct: 1,
            explanation: "For torsades de pointes, magnesium sulfate 2 g IV is the drug of choice. If the patient becomes unstable, proceed to cardioversion.",
            kpi: "Magnesium given within 5 minutes."
        }
    ]
};