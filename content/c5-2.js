/* ========== Chapter 5.2 – Seizures ========== */
window.CPG_DATA = {
    id: "c5-2",
    title: "Seizures",
    shortTitle: "5.2 Seizures",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">⚡ Seizures</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Terminate active seizures or prevent recurrence in the prehospital setting to protect the patient from injury and hypoxia.</li>
                <li>Ensure safe transport to an appropriate medical facility for further evaluation and management of underlying causes.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Patients presenting with seizures or post‑ictal states, including:
                    <ul>
                        <li>Active generalized tonic‑clonic seizures (e.g., convulsions, rhythmic jerking).</li>
                        <li>Focal seizures (e.g., localized twitching, sensory disturbances).</li>
                        <li>Status epilepticus (seizures lasting >5 minutes or recurrent without recovery).</li>
                        <li>Post‑ictal state (e.g., confusion, lethargy, or weakness following a seizure).</li>
                        <li>History of epilepsy, recent seizure activity, or precipitating factors (e.g., medication non‑compliance, fever, or trauma).</li>
                    </ul>
                </li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>Patients without history or description of seizure activity.</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Seizure characteristics:</strong> Confirm active seizure activity (tonic‑clonic, focal), duration, frequency, pattern (single, recurrent, status epilepticus).</li>
                <li><strong>Seizure history:</strong> History of epilepsy, anticonvulsant use, precipitating factors (missed meds, sleep deprivation, fever, alcohol withdrawal, head trauma). Check for medical alert bracelets.</li>
                <li><strong>Post‑ictal assessment:</strong> Evaluate for confusion, lethargy, focal deficits, injuries sustained during seizure (tongue biting, head trauma, fractures).</li>
                <li><strong>Glucose assessment:</strong> Check random blood sugar (RBS) to rule out hypoglycemia (<70 mg/dL), which can trigger seizures or mimic seizure activity.</li>
                <li><strong>Non‑epileptic causes:</strong> Consider meningitis, head injury, hypoglycemia, eclampsia, pyrexia, poisons, alcohol, drug withdrawal.</li>
                <li><strong>Triage category:</strong> Red priority: ongoing active seizures, status epilepticus.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Primary survey:</strong> As per Universal Care CPG. Administer oxygen to maintain SpO₂ ≥94%.</li>
                <li><strong>Consider red flags:</strong> Status epilepticus (>5 min or recurrent without recovery), respiratory depression/hypoxia, suspected head trauma, first‑time seizure, pregnancy with seizures.</li>
                <li><strong>Consider ALS back‑up:</strong> Routinely for active seizures; early benzodiazepines improve outcomes; meet ALS en route.</li>
                <li><strong>Active seizure management:</strong>
                    <ul>
                        <li>Protect patient: remove hazards, pad surroundings, avoid restraining movements.</li>
                        <li>Position in recovery position post‑seizure to protect airway.</li>
                        <li>Suction oral secretions/vomit to maintain airway patency.</li>
                        <li>Use nasopharyngeal or oropharyngeal airway if needed in unresponsive patients.</li>
                        <li>Establish IV access for active seizures, status epilepticus, or anticipated medication.</li>
                    </ul>
                </li>
                <li><strong>Medication administration:</strong>
                    <ul>
                        <li><strong>Midazolam:</strong> Adults: IM 10 mg (single dose, do not repeat), IV 5 mg (repeat once after 5‑10 min, max 10 mg). Pediatrics: IM 0.2 mg/kg (max 10 mg), repeat once after 10‑20 min; IV 0.1 mg/kg (max 5 mg), repeat once after 10‑20 min.</li>
                        <li><strong>Diazepam:</strong> Adults: IV 5 mg (repeat once after 5 min, max 10 mg). Pediatrics: IV 0.1 mg/kg (max 5 mg), repeat once after 5 min; PR 0.5 mg/kg (max 5 mg), repeat once after 5 min.</li>
                    </ul>
                </li>
                <li><strong>Post‑seizure/post‑ictal management:</strong> Recovery position, oxygen, basic airway adjuncts if needed. Advanced airways rarely required unless airway compromise persists.</li>
                <li><strong>Patient reassessment:</strong> Continuous monitoring of vital signs, level of consciousness, and for recurrence.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>ALS back‑up routinely requested for active seizures; meet en route.</li>
                <li>Check blood glucose prior to benzodiazepine administration.</li>
                <li>Diazepam IM not recommended (slow onset); use IM midazolam.</li>
                <li>Pediatric febrile seizures: consider in children <5 years; assess for fever and infection.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Identification, mechanism/medical complaint (seizure characteristics, duration), injuries/information (trauma, medication history).</li>
                <li>Signs: GCS/AVPU, post‑ictal findings, vital signs, pupil response, glucose level.</li>
                <li>Treatment: time seizure started/stopped, benzodiazepines (type, route, dose, time), airway interventions, oxygen.</li>
                <li>Allergies, medications (home AEDs, last dose), background (epilepsy history, comorbidities), other (scene safety, witness account, ALS coordination).</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Administer benzodiazepines for all patients in status epilepticus.</li>
                <li>Request ALS back‑up for all patients with active seizures.</li>
                <li>Perform an RBS for all seizure patients.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What is the definition of status epilepticus?",
            options: ["Seizure lasting >2 minutes", "Seizure lasting >5 minutes or recurrent without recovery", "Two seizures in 24 hours", "Any seizure with loss of consciousness"],
            correct: 1,
            explanation: "Status epilepticus is defined as a seizure lasting longer than 5 minutes or recurrent seizures without return to baseline."
        },
        {
            q: "What is the first‑line medication for active seizures?",
            options: ["Phenytoin", "Benzodiazepines", "Levetiracetam", "Magnesium"],
            correct: 1,
            explanation: "Benzodiazepines (midazolam, diazepam) are first‑line for terminating active seizures."
        },
        {
            q: "What is the initial dose of IM midazolam for an adult with active seizures?",
            options: ["5 mg", "10 mg", "15 mg", "20 mg"],
            correct: 1,
            explanation: "The initial IM dose of midazolam for adults is 10 mg, single dose (do not repeat)."
        },
        {
            q: "What is the initial IV dose of midazolam for an adult with active seizures?",
            options: ["2 mg", "5 mg", "10 mg", "15 mg"],
            correct: 1,
            explanation: "Initial IV dose is 5 mg, may repeat once after 5‑10 minutes (max 10 mg)."
        },
        {
            q: "What is the pediatric IM dose of midazolam for seizures?",
            options: ["0.1 mg/kg", "0.2 mg/kg", "0.5 mg/kg", "1 mg/kg"],
            correct: 1,
            explanation: "Pediatric IM dose is 0.2 mg/kg (maximum 10 mg)."
        },
        {
            q: "What is the pediatric IV dose of diazepam for seizures?",
            options: ["0.05 mg/kg", "0.1 mg/kg", "0.2 mg/kg", "0.5 mg/kg"],
            correct: 1,
            explanation: "Pediatric IV diazepam dose is 0.1 mg/kg (maximum 5 mg)."
        },
        {
            q: "Why should blood glucose be checked in a seizing patient?",
            options: ["To rule out hyperglycemia", "To rule out hypoglycemia as a cause", "To guide fluid therapy", "Not necessary"],
            correct: 1,
            explanation: "Hypoglycemia can cause seizures and must be treated; check RBS before benzodiazepines if possible."
        },
        {
            q: "What is the preferred IM benzodiazepine for seizures?",
            options: ["Diazepam", "Midazolam", "Lorazepam", "Clonazepam"],
            correct: 1,
            explanation: "IM midazolam is preferred over diazepam due to faster and more reliable absorption."
        },
        {
            q: "A patient with active seizures has a blood glucose of 45 mg/dL. What should you do?",
            options: ["Give benzodiazepines first", "Give dextrose and then benzodiazepines if seizing continues", "Only give dextrose", "Transport immediately"],
            correct: 1,
            explanation: "Treat hypoglycemia with dextrose; if seizing continues, administer benzodiazepines."
        },
        {
            q: "What is the maximum total dose of IV midazolam for an adult with seizures?",
            options: ["5 mg", "10 mg", "15 mg", "20 mg"],
            correct: 1,
            explanation: "Maximum total dose of IV midazolam is 10 mg (5 mg initial, 5 mg repeat)."
        },
        {
            q: "How should you position a patient after a seizure?",
            options: ["Supine", "Recovery position", "Trendelenburg", "Prone"],
            correct: 1,
            explanation: "Recovery position helps maintain airway and prevent aspiration."
        },
        {
            q: "What is a common post‑ictal finding?",
            options: ["Confusion", "Focal weakness (Todd's paralysis)", "Headache", "All of the above"],
            correct: 3,
            explanation: "Post‑ictal state may include confusion, drowsiness, headache, and temporary focal deficits."
        },
        {
            q: "Which of the following is a potential cause of seizures?",
            options: ["Hypoglycemia", "Fever", "Head trauma", "All of the above"],
            correct: 3,
            explanation: "Seizures can be provoked by hypoglycemia, fever (febrile seizures), head injury, toxins, and many other causes."
        },
        {
            q: "When should ALS back‑up be requested for a seizure patient?",
            options: ["Only if status epilepticus", "For all active seizures", "Only if first seizure", "Not necessary"],
            correct: 1,
            explanation: "ALS back‑up should be routinely requested for any patient with active seizures."
        },
        {
            q: "What is the pediatric PR dose of diazepam?",
            options: ["0.1 mg/kg", "0.2 mg/kg", "0.5 mg/kg", "1 mg/kg"],
            correct: 2,
            explanation: "Pediatric PR diazepam dose is 0.5 mg/kg (maximum 5 mg)."
        },
        {
            q: "A child with a febrile seizure has stopped seizing and is now alert. What should you do?",
            options: ["Transport for evaluation", "Discharge with fever advice", "Give antibiotics", "No action needed"],
            correct: 0,
            explanation: "All children with a first febrile seizure should be transported for evaluation; even recurrent ones may need assessment."
        },
        {
            q: "What is Todd's paralysis?",
            options: ["Post‑ictal paralysis", "Seizure type", "Anticonvulsant", "EEG finding"],
            correct: 0,
            explanation: "Todd's paralysis is temporary focal weakness after a seizure, which can mimic stroke."
        },
        {
            q: "Which benzodiazepine can be administered rectally?",
            options: ["Midazolam", "Diazepam", "Lorazepam", "Clonazepam"],
            correct: 1,
            explanation: "Diazepam can be given rectally (PR) when IV/IO access is not available."
        },
        {
            q: "What is the maximum single dose of IV diazepam for a child?",
            options: ["2 mg", "5 mg", "10 mg", "15 mg"],
            correct: 1,
            explanation: "Maximum single dose of IV diazepam for pediatrics is 5 mg."
        },
        {
            q: "A patient with a known seizure disorder has a brief seizure and is now alert. Should you transport?",
            options: ["Yes, if first seizure", "Yes, if prolonged", "Yes, if requested", "Transport is not always required, but recommend evaluation"],
            correct: 3,
            explanation: "Patients with known epilepsy may not require transport after a brief, self‑limited seizure if they return to baseline, but evaluation is often recommended. Follow local protocol."
        },
        {
            q: "What is the primary risk during a generalized tonic‑clonic seizure?",
            options: ["Hypoxia", "Hypotension", "Hyperglycemia", "Bradycardia"],
            correct: 0,
            explanation: "Hypoxia from apnea or airway obstruction is the main risk during a seizure."
        },
        {
            q: "How long should you wait before repeating a dose of IV midazolam?",
            options: ["1‑2 minutes", "5‑10 minutes", "15‑20 minutes", "30 minutes"],
            correct: 1,
            explanation: "Repeat IV midazolam after 5‑10 minutes if seizure persists."
        },
        {
            q: "Which of the following is a contraindication to IM diazepam?",
            options: ["Hypotension", "Bradycardia", "Not recommended due to slow absorption", "Hypoglycemia"],
            correct: 2,
            explanation: "IM diazepam has slow and erratic absorption; IM midazolam is preferred."
        },
        {
            q: "What is the most common cause of status epilepticus in children?",
            options: ["Febrile seizures", "Epilepsy", "Infection", "Trauma"],
            correct: 0,
            explanation: "Febrile seizures are common in young children, but prolonged febrile seizures can lead to status epilepticus."
        },
        {
            q: "A pregnant patient has a seizure. What condition must be considered?",
            options: ["Eclampsia", "Epilepsy", "Hypoglycemia", "All of the above"],
            correct: 3,
            explanation: "Eclampsia is a possibility in pregnancy; also consider epilepsy and other causes."
        },
        {
            q: "What is the role of oxygen in a seizing patient?",
            options: ["Routine", "Only if hypoxic", "To prevent brain damage", "Not needed"],
            correct: 1,
            explanation: "Administer oxygen to maintain SpO₂ ≥94% if hypoxic; avoid hyperoxia."
        },
        {
            q: "What is the maximum total dose of diazepam for an adult?",
            options: ["5 mg", "10 mg", "20 mg", "30 mg"],
            correct: 1,
            explanation: "Maximum total dose of IV diazepam is 10 mg (5 mg initial, 5 mg repeat)."
        },
        {
            q: "A patient with alcohol withdrawal presents with a seizure. What is the likely cause?",
            options: ["Hypoglycemia", "Electrolyte imbalance", "Alcohol withdrawal", "All of the above"],
            correct: 2,
            explanation: "Alcohol withdrawal can cause seizures; also consider associated hypoglycemia and electrolyte imbalances."
        },
        {
            q: "What is the initial management for a seizing patient with no IV access?",
            options: ["Attempt IO", "Give IM midazolam", "Wait for IV access", "Give rectal diazepam"],
            correct: 1,
            explanation: "IM midazolam is effective and can be given rapidly without IV access."
        },
        {
            q: "How often should you reassess a patient after a seizure?",
            options: ["Every 5 minutes", "Every 10 minutes", "Every 15 minutes", "Continuously"],
            correct: 3,
            explanation: "Continuous monitoring is required, with frequent reassessments of airway, breathing, and level of consciousness."
        }
    ],
    flashcards: [
        { category: "Definition", question: "What is status epilepticus?", answer: "Seizure lasting >5 minutes or recurrent seizures without return to baseline." },
        { category: "Causes", question: "Name five causes of seizures.", answer: "Epilepsy, hypoglycemia, fever, head trauma, toxins, alcohol withdrawal, electrolyte imbalance." },
        { category: "Assessment", question: "What is the first step in assessing a seizing patient?", answer: "Protect airway, ensure safety, note time seizure started." },
        { category: "Glucose", question: "Why check blood glucose in a seizing patient?", answer: "To rule out hypoglycemia as a cause." },
        { category: "Benzodiazepines", question: "What are first‑line drugs for active seizures?", answer: "Benzodiazepines (midazolam, diazepam)." },
        { category: "Midazolam IM adult", question: "What is the adult IM dose of midazolam for seizures?", answer: "10 mg, single dose (do not repeat)." },
        { category: "Midazolam IV adult", question: "What is the adult IV dose of midazolam?", answer: "5 mg, may repeat once after 5‑10 min (max 10 mg)." },
        { category: "Midazolam IM pediatric", question: "What is the pediatric IM dose of midazolam?", answer: "0.2 mg/kg (max 10 mg), repeat once after 10‑20 min." },
        { category: "Midazolam IV pediatric", question: "What is the pediatric IV dose of midazolam?", answer: "0.1 mg/kg (max 5 mg), repeat once after 10‑20 min." },
        { category: "Diazepam IV adult", question: "What is the adult IV dose of diazepam?", answer: "5 mg, repeat once after 5 min (max 10 mg)." },
        { category: "Diazepam IV pediatric", question: "What is the pediatric IV dose of diazepam?", answer: "0.1 mg/kg (max 5 mg), repeat once after 5 min." },
        { category: "Diazepam PR pediatric", question: "What is the pediatric PR dose of diazepam?", answer: "0.5 mg/kg (max 5 mg), repeat once after 5 min." },
        { category: "IM diazepam", question: "Why is IM diazepam not recommended?", answer: "Slow and erratic absorption; IM midazolam preferred." },
        { category: "Post‑ictal state", question: "What is the post‑ictal state?", answer: "Period of confusion, drowsiness, headache, or focal deficits after a seizure." },
        { category: "Todd's paralysis", question: "What is Todd's paralysis?", answer: "Temporary focal weakness after a seizure, mimicking stroke." },
        { category: "Recovery position", question: "Why place a patient in recovery position after a seizure?", answer: "To maintain airway and prevent aspiration." },
        { category: "Airway adjuncts", question: "When are airway adjuncts used after a seizure?", answer: "If patient remains unresponsive and cannot maintain airway." },
        { category: "Oxygen", question: "What is the oxygen target in a seizing patient?", answer: "Maintain SpO₂ ≥94% if hypoxic." },
        { category: "ALS backup", question: "When should ALS back‑up be requested for seizures?", answer: "For all active seizures." },
        { category: "Febrile seizure", question: "What is a febrile seizure?", answer: "Seizure associated with fever in children aged 6 months to 5 years." },
        { category: "Eclampsia", question: "What is eclampsia?", answer: "Seizures in a pregnant patient with pre‑eclampsia." },
        { category: "Alcohol withdrawal", question: "When do alcohol withdrawal seizures typically occur?", answer: "6‑48 hours after last drink." },
        { category: "Hypoglycemia", question: "What glucose level defines hypoglycemia?", answer: "<70 mg/dL." },
        { category: "Dextrose", question: "What is the initial dextrose dose for hypoglycemia?", answer: "D10 100‑200 mL (adults) or 2‑4 mL/kg (pediatrics)." },
        { category: "Seizure duration", question: "When is a seizure considered prolonged?", answer: ">5 minutes." },
        { category: "Status epilepticus treatment", question: "What is the first step in status epilepticus?", answer: "Benzodiazepines (midazolam or diazepam)." },
        { category: "KPI", question: "What are the KPIs for seizure management?", answer: "Benzodiazepines for status epilepticus, ALS back‑up for active seizures, RBS checked." },
        { category: "Safety", question: "What safety measures during a seizure?", answer: "Remove hazards, pad surroundings, do not restrain." },
        { category: "Suction", question: "When is suctioning needed during a seizure?", answer: "If patient has excessive secretions or vomit." },
        { category: "Documentation", question: "What seizure details must be documented?", answer: "Time onset/duration, type, medications given, post‑ictal status." }
    ],
    critical: [
        {
            id: "crit_5_2_1",
            scenario: "You are called to a 30‑year‑old male having a generalized tonic‑clonic seizure. Bystanders state the seizure has been ongoing for 4 minutes. What is your priority?",
            question: "What should you do first?",
            options: [
                { t: "Administer midazolam 10 mg IM", f: "Correct. Seizure >5 minutes is status epilepticus; give benzodiazepine." },
                { t: "Wait for seizure to stop", f: "Active seizure requires intervention." },
                { t: "Check blood glucose", f: "Important but not first priority." },
                { t: "Start oxygen", f: "Oxygen can be given while preparing medication." }
            ],
            correct: 0,
            explanation: "With seizure duration approaching 5 minutes, administer a benzodiazepine immediately. Midazolam 10 mg IM is appropriate.",
            kpi: "Benzodiazepine given within 5 minutes of EMS arrival."
        },
        {
            id: "crit_5_2_2",
            scenario: "A 5‑year‑old child presents with a generalized seizure that has been ongoing for 3 minutes. Weight approximately 20 kg. IV access is not yet obtained. What is your next action?",
            question: "What should you do?",
            options: [
                { t: "Attempt IO access", f: "IM route is faster." },
                { t: "Give midazolam 4 mg IM", f: "Correct. 0.2 mg/kg = 4 mg IM." },
                { t: "Give diazepam 5 mg PR", f: "PR is an option but IM midazolam is preferred." },
                { t: "Wait for seizure to stop", f: "Active seizure requires intervention." }
            ],
            correct: 1,
            explanation: "IM midazolam is the preferred route without IV access. Dose 0.2 mg/kg = 4 mg.",
            kpi: "Benzodiazepine given within 5 minutes."
        },
        {
            id: "crit_5_2_3",
            scenario: "A 25‑year‑old female with a known seizure disorder had a 2‑minute seizure and is now post‑ictal, confused, with a blood glucose of 45 mg/dL. What should you do?",
            question: "What is the appropriate management?",
            options: [
                { t: "Give midazolam for potential further seizures", f: "Seizure stopped; treat hypoglycemia first." },
                { t: "Give dextrose IV", f: "Correct. Hypoglycemia is a reversible cause." },
                { t: "Transport only", f: "Hypoglycemia needs treatment." },
                { t: "Give oral glucose", f: "Patient is confused; IV dextrose safer." }
            ],
            correct: 1,
            explanation: "Treat hypoglycemia with IV dextrose. Reassess mental status; if seizing recurs, then benzodiazepines.",
            kpi: "RBS checked and hypoglycemia treated."
        },
        {
            id: "crit_5_2_4",
            scenario: "A 32‑week pregnant patient presents with a seizure. She is post‑ictal, BP 160/110, and has proteinuria. What is the likely diagnosis and priority?",
            question: "What should you suspect and do?",
            options: [
                { t: "Epilepsy – give midazolam", f: "Eclampsia is more likely." },
                { t: "Eclampsia – treat with magnesium and transport urgently", f: "Correct. Eclampsia requires magnesium and rapid transport." },
                { t: "Hypoglycemia – give dextrose", f: "Check glucose but likely eclampsia." },
                { t: "Transport without treatment", f: "Magnesium should be given if available." }
            ],
            correct: 1,
            explanation: "Eclampsia is suspected in a pregnant patient with hypertension and proteinuria. Administer magnesium sulfate (if available per protocol) and transport urgently.",
            kpi: "Magnesium considered; hospital notified."
        },
        {
            id: "crit_5_2_5",
            scenario: "You give midazolam 10 mg IM to a seizing adult. After 3 minutes, the seizure has not stopped. What is your next action?",
            question: "What should you do?",
            options: [
                { t: "Give another 10 mg IM", f: "IM midazolam should not be repeated." },
                { t: "Establish IV and give 5 mg IV midazolam", f: "Correct. IV access and repeat dose." },
                { t: "Wait another 2 minutes", f: "Seizure ongoing; intervene." },
                { t: "Start CPR", f: "Not indicated." }
            ],
            correct: 1,
            explanation: "If IM midazolam is ineffective, obtain IV access and give 5 mg IV midazolam. Prepare for further doses and ALS back‑up.",
            kpi: "Repeat dose administered appropriately."
        }
    ]
};