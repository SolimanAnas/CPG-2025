/* ========== Chapter 6.2 – Abnormal Behavior ========== */
window.CPG_DATA = {
    id: "c6-2",
    title: "Abnormal Behavior",
    shortTitle: "6.2 Abnormal Behavior",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">🧠 Abnormal Behavior</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Adequate assessment and treatment of agitated, violent or uncooperative patients.</li>
                <li>Maximizing and maintaining safety for the patient, EMS personnel, and others.</li>
                <li>Ensure appropriate pharmacological management when indicated.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Patients presenting with abnormal or unusual behavior who are a danger to themselves or others.</li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>Patients with abnormal behavior secondary to medical conditions such as traumatic brain injury or hypoxia (address underlying cause first).</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Secondary survey:</strong> Once patient compliance is gained, obtain history and physical examination to exclude reversible causes as per Universal Care CPG (vital signs, blood glucose).</li>
                <li><strong>Investigation of alternative causes:</strong> Consider hypoglycemia, hypoxia, head injury, intoxication, withdrawal, infection, psychiatric illness.</li>
                <li><strong>Sedation Assessment Tool (SAT):</strong> Use to guide patient management and communication (see table). Scoring: +3 (combative, violent), +2 (very anxious/agitated, loud outbursts), +1 (anxious/restless), 0 (awake and calm), -1 (asleep but rouses), -2 (responds to physical stimulation), -3 (no response).</li>
                <li><strong>Determine triage category:</strong> Per Patient Triage Categories CPG.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Primary and secondary survey:</strong> As per Universal Care CPG. May need to delay until patient compliant.</li>
                <li><strong>Attempt verbal de‑escalation:</strong>
                    <ul>
                        <li>Allow sufficient time.</li>
                        <li>Have only one person speak with the patient.</li>
                        <li>Introduce yourself, state you are there to help.</li>
                        <li>Use short, simple messages; repetition is key.</li>
                        <li>Limit unnecessary noise (radios, lights, sirens).</li>
                        <li>Try to establish rapport.</li>
                    </ul>
                </li>
                <li><strong>Request police assistance:</strong> If risk of harm to patient, staff, or bystanders; if restraint anticipated.</li>
                <li><strong>Consider ALS back‑up:</strong> If sedation required. Contact Tele‑EMS if unsure.</li>
                <li><strong>Sedation/pharmacological management:</strong>
                    <ul>
                        <li>Goal: Achieve SAT score of 0 to -1 to gain compliance and facilitate safe transfer.</li>
                        <li>Medication selection based on SAT score (see table).</li>
                        <li><strong>For SAT +3:</strong>
                            <ul>
                                <li>Ketamine IM: 3‑4 mg/kg (max 400 mg). <60kg: 200 mg; 60‑90kg: 300 mg; >90kg: 400 mg. May repeat once after 10 min.</li>
                                <li>Ketamine IV: 1 mg/kg (50‑100 mg).</li>
                                <li>OR Midazolam IM/IV: 5 mg (repeat once after 10 min).</li>
                                <li>OR Diazepam IV: 5 mg.</li>
                            </ul>
                        </li>
                        <li><strong>For SAT +2:</strong>
                            <ul>
                                <li>Diazepam IV: 5 mg.</li>
                                <li>OR Midazolam IM/IV: 5 mg (repeat once after 10 min).</li>
                                <li>AND/OR Haloperidol IM: 10 mg (for suspected worsening mental health illness only).</li>
                            </ul>
                        </li>
                        <li><strong>For SAT +1:</strong>
                            <ul>
                                <li>Haloperidol 10 mg IM (for suspected worsening mental health illness only).</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><strong>Post‑sedation monitoring:</strong>
                    <ul>
                        <li>Once compliant, complete full assessment including vital signs.</li>
                        <li>Continuous pulse oximetry, EtCO₂ (via nasal cannula), 4‑lead ECG mandatory.</li>
                        <li>Consider oxygen (nasal cannula) for SAT -1 or less.</li>
                        <li>Establish IV access as soon as possible.</li>
                        <li>Position sedated patients with altered mental status in recovery position.</li>
                        <li>EMS physician or Advanced Paramedic must accompany the patient to hospital after sedation.</li>
                    </ul>
                </li>
                <li><strong>Patient positioning:</strong> Stretcher in sitting position reduces aspiration risk and patient's physical strength. Do not place prone.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>All sedatives carry risk of respiratory depression, apnea, hypotension.</li>
                <li>Patients receiving multiple doses or multiple medications have increased risk of adverse events; may require airway management.</li>
                <li>Work with police to reposition restrained patients to ensure airway, breathing, and circulation are not impaired.</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li>Verbal de‑escalation is under‑utilized; attempt before pharmacological intervention.</li>
                <li>All patients who have received sedation must be transported to hospital.</li>
                <li>Haloperidol may take up to 20 minutes to take effect; may not work in some patients.</li>
                <li>Benzodiazepines are preferred for alcohol withdrawal; haloperidol for psychiatric agitation.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Identification, mechanism/medical complaint, injuries/information (physical injuries, psychiatric history), signs (GCS, vital signs, blood glucose, SAT score).</li>
                <li>Treatment: verbal de‑escalation methods, sedation (drug, dose, route, response), physical restraint (indication, duration, staff).</li>
                <li>Allergies, medications, background (mental health history, recent events), other (police involvement, caregiver input).</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>When sedation is administered, ensure documentation of the medication name, dose, and effect.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What is the first step in managing a patient with abnormal behavior?",
            options: ["Pharmacological sedation", "Verbal de‑escalation", "Physical restraint", "Immediate transport"],
            correct: 1,
            explanation: "Attempt verbal de‑escalation before considering pharmacological or physical interventions."
        },
        {
            q: "What is the goal of sedation in an agitated patient?",
            options: ["Achieve SAT score of +1", "Achieve SAT score of 0 to -1", "Achieve SAT score of -3", "Achieve sleep"],
            correct: 1,
            explanation: "The goal is to gain patient compliance and facilitate safe transfer, typically SAT 0 to -1."
        },
        {
            q: "What is the dose of IM ketamine for a violent patient weighing 70 kg?",
            options: ["200 mg", "300 mg", "400 mg", "100 mg"],
            correct: 1,
            explanation: "Ketamine IM dose is 3‑4 mg/kg. For 70 kg, 210‑280 mg, so 300 mg is appropriate (rounded)."
        },
        {
            q: "A patient with SAT score +2 is agitated and suspected of worsening mental health illness. What medication combination may be used?",
            options: ["Ketamine alone", "Midazolam and haloperidol", "Diazepam alone", "Haloperidol alone"],
            correct: 1,
            explanation: "For SAT +2, midazolam or diazepam may be used, and haloperidol can be added for suspected psychiatric illness."
        },
        {
            q: "What is the dose of haloperidol IM for agitation in suspected mental health illness?",
            options: ["5 mg", "10 mg", "15 mg", "20 mg"],
            correct: 1,
            explanation: "Haloperidol dose is 10 mg IM."
        },
        {
            q: "A patient with SAT score +1 and suspected mental health illness should receive:",
            options: ["Midazolam", "Ketamine", "Haloperidol 10 mg IM", "No medication"],
            correct: 2,
            explanation: "Haloperidol may be used for mild agitation if psychiatric cause suspected."
        },
        {
            q: "Which of the following is a contraindication to haloperidol?",
            options: ["Prolonged QT", "Hypotension", "Seizure disorder", "All of the above"],
            correct: 3,
            explanation: "Haloperidol can prolong QT, cause hypotension, and lower seizure threshold; use with caution."
        },
        {
            q: "After administering sedation, what monitoring is mandatory?",
            options: ["Pulse oximetry", "EtCO₂", "4‑lead ECG", "All of the above"],
            correct: 3,
            explanation: "Continuous pulse oximetry, EtCO₂, and ECG monitoring are mandatory."
        },
        {
            q: "How should a sedated patient with altered mental status be positioned?",
            options: ["Supine", "Prone", "Recovery position", "Trendelenburg"],
            correct: 2,
            explanation: "Recovery position helps maintain airway and prevent aspiration."
        },
        {
            q: "What is the maximum repeat dose of IM ketamine for agitation?",
            options: ["Once after 5 minutes", "Once after 10 minutes", "Twice", "No repeat"],
            correct: 1,
            explanation: "IM ketamine may be repeated once after 10 minutes if needed."
        },
        {
            q: "A patient with alcohol withdrawal presents with agitation. Which medication is preferred?",
            options: ["Haloperidol", "Ketamine", "Benzodiazepines", "Antipsychotics"],
            correct: 2,
            explanation: "Benzodiazepines (e.g., midazolam, diazepam) are preferred for alcohol withdrawal."
        },
        {
            q: "What is the IV dose of ketamine for sedation?",
            options: ["0.5 mg/kg", "1 mg/kg", "2 mg/kg", "3 mg/kg"],
            correct: 1,
            explanation: "IV ketamine dose is 1 mg/kg (typical 50‑100 mg)."
        },
        {
            q: "A patient with SAT score +3 is violent. What is the preferred IM medication?",
            options: ["Midazolam", "Ketamine", "Haloperidol", "Diazepam"],
            correct: 1,
            explanation: "Ketamine is preferred for exceptionally violent patients due to rapid onset."
        },
        {
            q: "What is the onset time of IM haloperidol?",
            options: ["1‑2 minutes", "5‑10 minutes", "15‑20 minutes", "30‑60 minutes"],
            correct: 2,
            explanation: "Haloperidol may take up to 20 minutes to take effect."
        },
        {
            q: "Which of the following is NOT a component of the Sedation Assessment Tool?",
            options: ["Responsiveness", "Speech", "Motor activity", "Blood pressure"],
            correct: 3,
            explanation: "SAT assesses responsiveness and speech; vital signs are separate."
        },
        {
            q: "A patient with SAT score -2 (responds to physical stimulation) requires:",
            options: ["Immediate sedation", "Close monitoring and airway protection", "Haloperidol", "Ketamine"],
            correct: 1,
            explanation: "This patient is deeply sedated; monitor airway and vital signs."
        },
        {
            q: "What is the maximum single IM dose of ketamine for a patient >90 kg?",
            options: ["300 mg", "400 mg", "500 mg", "600 mg"],
            correct: 1,
            explanation: "For >90 kg, dose is 400 mg."
        },
        {
            q: "Why should police be involved in managing an agitated patient?",
            options: ["To restrain the patient", "For scene safety if risk of violence", "To administer medication", "All of the above"],
            correct: 1,
            explanation: "Police assist with scene safety if there is risk of harm; they do not administer meds."
        },
        {
            q: "After sedation, who must accompany the patient to hospital?",
            options: ["Any EMT", "EMS physician or Advanced Paramedic", "Police", "Family member"],
            correct: 1,
            explanation: "An EMS physician or Advanced Paramedic must accompany the patient after sedation."
        },
        {
            q: "What is the dose of midazolam for agitation in an adult?",
            options: ["2.5 mg", "5 mg", "10 mg", "15 mg"],
            correct: 1,
            explanation: "Midazolam dose is 5 mg IM/IV, may repeat once after 10 minutes."
        },
        {
            q: "A patient with suspected drug‑induced agitation may benefit from:",
            options: ["Benzodiazepines", "Haloperidol", "Ketamine", "All of the above"],
            correct: 3,
            explanation: "Choice depends on the drug; stimulant agitation may respond to benzodiazepines, while psychosis may need haloperidol."
        },
        {
            q: "What is the risk of using haloperidol in a patient with prolonged QT?",
            options: ["Torsades de pointes", "Bradycardia", "Hypertension", "Seizures"],
            correct: 0,
            explanation: "Haloperidol can prolong QT and increase risk of torsades."
        },
        {
            q: "How often should you reassess a sedated patient?",
            options: ["Every 5 minutes", "Every 10 minutes", "Continuously", "Every 15 minutes"],
            correct: 2,
            explanation: "Sedated patients require continuous monitoring."
        },
        {
            q: "A patient with SAT score +2 receives midazolam 5 mg IM. After 10 minutes, the score is still +2. What should you do?",
            options: ["Repeat midazolam 5 mg", "Give haloperidol", "Wait another 10 minutes", "Increase to ketamine"],
            correct: 0,
            explanation: "Midazolam may be repeated once after 10 minutes."
        },
        {
            q: "Which of the following is a sign of respiratory depression after sedation?",
            options: ["RR <12", "SpO₂ <94%", "EtCO₂ >50 mmHg", "All of the above"],
            correct: 3,
            explanation: "Monitor for hypoventilation."
        },
        {
            q: "What is the preferred position for the stretcher during transport of an agitated patient?",
            options: ["Flat supine", "Sitting position", "Trendelenburg", "Prone"],
            correct: 1,
            explanation: "Sitting position reduces aspiration risk and patient's physical strength."
        },
        {
            q: "A patient with abnormal behavior has a blood glucose of 45 mg/dL. What should you do first?",
            options: ["Give dextrose", "Sedate", "Transport", "Call police"],
            correct: 0,
            explanation: "Hypoglycemia can cause abnormal behavior; treat first."
        },
        {
            q: "What is the dose of diazepam IV for agitation?",
            options: ["2.5 mg", "5 mg", "10 mg", "15 mg"],
            correct: 1,
            explanation: "Diazepam IV dose is 5 mg."
        },
        {
            q: "A patient with SAT score +3 receives ketamine 300 mg IM. After 5 minutes, he remains agitated. What should you do?",
            options: ["Repeat ketamine", "Wait 5 more minutes", "Give midazolam", "Consider alternative causes"],
            correct: 1,
            explanation: "Ketamine may take 5‑10 minutes; wait before repeating."
        },
        {
            q: "Which medication should be avoided in a patient with suspected neuroleptic malignant syndrome?",
            options: ["Haloperidol", "Midazolam", "Ketamine", "Diazepam"],
            correct: 0,
            explanation: "Haloperidol can worsen NMS; supportive care and benzodiazepines are preferred."
        }
    ],
    flashcards: [
        { category: "Assessment", question: "What is the Sedation Assessment Tool (SAT) used for?", answer: "To guide patient management and communication; scores range from +3 (combative) to -3 (unresponsive)." },
        { category: "SAT +3", question: "Describe a patient with SAT +3.", answer: "Combative, violent, out of control, continual loud outbursts." },
        { category: "SAT +2", question: "Describe a patient with SAT +2.", answer: "Very anxious and agitated, loud outbursts." },
        { category: "SAT +1", question: "Describe a patient with SAT +1.", answer: "Anxious/restless, normal/talkative." },
        { category: "SAT 0", question: "Describe a patient with SAT 0.", answer: "Awake and calm/cooperative, speaks normally." },
        { category: "SAT -1", question: "Describe a patient with SAT -1.", answer: "Asleep but rouses if name is called, slurring or prominent slowing." },
        { category: "SAT -2", question: "Describe a patient with SAT -2.", answer: "Responds to physical stimulation, few recognizable words." },
        { category: "SAT -3", question: "Describe a patient with SAT -3.", answer: "No response to stimulation." },
        { category: "Verbal de‑escalation", question: "Name three verbal de‑escalation techniques.", answer: "One person speaking, short simple messages, limit noise, establish rapport." },
        { category: "Police involvement", question: "When should police be requested?", answer: "If risk of harm or restraint anticipated." },
        { category: "Ketamine IM dose", question: "What is the IM dose of ketamine for agitation?", answer: "3‑4 mg/kg (max 400 mg); may repeat once after 10 min." },
        { category: "Ketamine IV dose", question: "What is the IV dose of ketamine for agitation?", answer: "1 mg/kg (50‑100 mg)." },
        { category: "Midazolam dose", question: "What is the dose of midazolam for agitation?", answer: "5 mg IM/IV, may repeat once after 10 min." },
        { category: "Diazepam dose", question: "What is the dose of diazepam IV for agitation?", answer: "5 mg." },
        { category: "Haloperidol dose", question: "What is the dose of haloperidol IM for agitation?", answer: "10 mg." },
        { category: "Haloperidol onset", question: "What is the onset time of IM haloperidol?", answer: "Up to 20 minutes." },
        { category: "Sedation goal", question: "What is the goal of sedation in abnormal behavior?", answer: "SAT 0 to -1 to gain compliance and safe transfer." },
        { category: "Post‑sedation monitoring", question: "What monitoring is mandatory after sedation?", answer: "Pulse oximetry, EtCO₂, 4‑lead ECG." },
        { category: "Positioning", question: "How should a sedated patient be positioned?", answer: "Recovery position." },
        { category: "Stretcher position", question: "What stretcher position helps reduce agitation?", answer: "Sitting position." },
        { category: "Contraindication", question: "What position is contraindicated?", answer: "Prone." },
        { category: "Adverse effects", question: "What are risks of sedatives?", answer: "Respiratory depression, apnea, hypotension." },
        { category: "Alcohol withdrawal", question: "What medication is preferred for alcohol withdrawal agitation?", answer: "Benzodiazepines." },
        { category: "Psychiatric agitation", question: "What medication may be added for suspected psychiatric agitation?", answer: "Haloperidol." },
        { category: "Reversible causes", question: "Name three reversible causes of abnormal behavior.", answer: "Hypoglycemia, hypoxia, head injury, intoxication, withdrawal, infection." },
        { category: "Documentation", question: "What must be documented when sedation is used?", answer: "Medication name, dose, route, response." },
        { category: "KPI", question: "What is the KPI for abnormal behavior?", answer: "Document medication name, dose, and effect." },
        { category: "Transport", question: "Must sedated patients be transported?", answer: "Yes, all patients who have received sedation must be transported to hospital." },
        { category: "Staff requirement", question: "Who must accompany a sedated patient to hospital?", answer: "EMS physician or Advanced Paramedic." },
        { category: "Hypoglycemia", question: "What glucose level requires treatment in abnormal behavior?", answer: "<70 mg/dL." }
    ],
    critical: [
        {
            id: "crit_6_2_1",
            scenario: "You are called to a 30‑year‑old male who is extremely agitated, shouting, and throwing objects. He is a danger to himself and others. Police are on scene. SAT score is +3. What is your priority?",
            question: "What should you do first?",
            options: [
                { t: "Attempt verbal de‑escalation", f: "Safety first; may not be possible." },
                { t: "Administer ketamine 300 mg IM", f: "Correct. For SAT +3, rapid sedation with ketamine is indicated." },
                { t: "Restrain physically with police help", f: "May be necessary but sedation is preferred." },
                { t: "Wait for patient to tire", f: "Unsafe." }
            ],
            correct: 1,
            explanation: "For a violent patient (SAT +3), IM ketamine is the preferred agent. Ensure scene safety and administer.",
            kpi: "Ketamine administered and documented."
        },
        {
            id: "crit_6_2_2",
            scenario: "A 45‑year‑old male is agitated and confused. Family states he has a history of schizophrenia and stopped his medication. SAT score is +2. He is not violent but very anxious. What medication should you consider?",
            question: "What is the appropriate pharmacological intervention?",
            options: [
                { t: "Midazolam 5 mg IM", f: "Correct. Midazolam can be used, and haloperidol may be added if psychiatric cause." },
                { t: "Haloperidol 10 mg IM alone", f: "May be considered, but benzodiazepine first often." },
                { t: "Ketamine", f: "Too aggressive for SAT +2." },
                { t: "No medication", f: "Patient requires intervention." }
            ],
            correct: 0,
            explanation: "Midazolam 5 mg IM is appropriate for SAT +2. Haloperidol can be added if psychosis suspected.",
            kpi: "Medication administered and response monitored."
        },
        {
            id: "crit_6_2_3",
            scenario: "You administer midazolam 5 mg IM to an agitated patient. After 10 minutes, he is still agitated (SAT +2). What should you do?",
            question: "What is your next action?",
            options: [
                { t: "Repeat midazolam 5 mg", f: "Correct. Midazolam may be repeated once." },
                { t: "Switch to ketamine", f: "Can consider if no response." },
                { t: "Give haloperidol", f: "May be added." },
                { t: "Wait longer", f: "Action needed." }
            ],
            correct: 0,
            explanation: "Midazolam can be repeated once after 10 minutes. If still ineffective, consider haloperidol or ketamine.",
            kpi: "Repeat dose documented."
        },
        {
            id: "crit_6_2_4",
            scenario: "A patient with SAT +3 receives ketamine 300 mg IM. After 5 minutes, he is calmer (SAT 0). You start monitoring. What is essential now?",
            question: "What is the priority post‑sedation?",
            options: [
                { t: "Transport immediately", f: "Yes, but monitoring en route." },
                { t: "Continuous monitoring of SpO₂, EtCO₂, ECG", f: "Correct. Mandatory after sedation." },
                { t: "Obtain IV access", f: "Should be done as soon as possible." },
                { t: "Position in recovery position", f: "Important, but monitoring is ongoing." }
            ],
            correct: 1,
            explanation: "Continuous monitoring is mandatory. Also obtain IV access, position safely, and transport with Advanced Paramedic.",
            kpi: "Monitoring documented."
        },
        {
            id: "crit_6_2_5",
            scenario: "You sedate a patient with midazolam. En route, his respiratory rate drops to 8, SpO₂ 88%. What is your immediate action?",
            question: "What should you do?",
            options: [
                { t: "Give flumazenil", f: "Not routinely recommended." },
                { t: "Stimulate patient", f: "May help, but airway first." },
                { t: "Open airway, provide BVM ventilation", f: "Correct. Support ventilation." },
                { t: "Increase oxygen flow", f: "Not enough." }
            ],
            correct: 2,
            explanation: "Airway and ventilation support is priority. Consider reversal agent only if known benzodiazepine overdose.",
            kpi: "Airway management documented."
        }
    ]
};