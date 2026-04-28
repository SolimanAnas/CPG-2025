/* ========== Chapter 5.1 – Stroke ========== */
window.CPG_DATA = {
    id: "c5-1",
    title: "Stroke",
    shortTitle: "5.1 Stroke",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">🧠 Stroke</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Rapidly identify suspected acute stroke or transient ischemic attack (TIA) to facilitate time‑sensitive transfer.</li>
                <li>Minimize secondary brain injury through supportive care.</li>
                <li>Ensure rapid transport to a stroke‑capable medical facility for definitive evaluation and treatment within the therapeutic window.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Patients presenting with signs and symptoms suggestive of acute stroke or TIA, including sudden onset of focal neurological deficits (e.g., weakness, numbness, or paralysis of face, arm, or leg).</li>
                <li>Speech difficulties (e.g., slurred speech, aphasia, or inability to speak).</li>
                <li>Vision changes (e.g., sudden loss of vision, double vision).</li>
                <li>Dizziness, loss of balance, or coordination problems.</li>
                <li>Severe headache with no known cause (e.g., suggestive of hemorrhagic stroke).</li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>Symptoms clearly attributable to another cause (e.g., hypoglycemia, seizure, or trauma) without stroke‑like features.</li>
                <li>Patients with resolved symptoms and no ongoing neurological deficits (e.g., prior TIA with no new symptoms).</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Stroke screening:</strong> Perform a 'BEFAST' assessment: Balance (sudden loss), Eyes (vision loss), Face (droop), Arms (drift), Speech (slurred), Time (last known well).</li>
                <li><strong>Neurological deficit assessment:</strong> Identify focal neurological signs, gaze deviation, pupil asymmetry, facial paralysis. Use AVPU or GCS to quantify level of consciousness.</li>
                <li><strong>Time of onset:</strong> Confirm the precise time symptoms began or when the patient was last known well (critical for thrombolytic or endovascular therapy eligibility).</li>
                <li><strong>Glucose assessment:</strong> Check random blood sugar (RBS) to rule out hypoglycemia (<70 mg/dL) or hyperglycemia (>400 mg/dL), which can mimic stroke symptoms.</li>
                <li><strong>Stroke mimics:</strong> Consider intracerebral lesions (tumor, abscess), seizures/post‑ictal states (Todd's paralysis), hemiplegic migraine, electrolyte abnormalities, conversion disorder.</li>
                <li><strong>Triage category:</strong> All patients with signs of acute stroke are Red Priority.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Primary & secondary survey:</strong> As per Universal Care CPG.</li>
                <li><strong>Consider ALS back‑up:</strong> As per Universal Care CPG.</li>
                <li><strong>Patient positioning:</strong> Semi‑recumbent or with head elevated 15‑30° if alert.</li>
                <li><strong>Oxygen:</strong> Administer to maintain SpO₂ ≥94% if hypoxia present; avoid routine oxygen in normoxic patients.</li>
                <li><strong>Consider red flags:</strong> Onset within 4.5 hours (thrombolytic window) or up to 24 hours (endovascular window), rapidly deteriorating GCS, signs of increased ICP (unequal pupils, severe headache, vomiting), respiratory distress, suspected hemorrhagic stroke.</li>
                <li><strong>12‑lead ECG:</strong> Perform, but do not delay transfer; can be done en route.</li>
                <li><strong>IV access:</strong> Establish if needed; large bore (18g or larger) preferred for contrast CT, but do not delay scene time.</li>
                <li><strong>Blood pressure management:</strong> Do not lower BP unless >220/120 mmHg with signs of end‑organ dysfunction (consult Tele‑EMS).</li>
                <li><strong>Patient reassessment:</strong> Frequently reassess per Universal Care CPG (neurological status, GCS).</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Time‑sensitive transport: Patients with stroke symptoms and onset <4.5 hours should be rapidly transported to a stroke centre. Communicate clearly with Dispatch.</li>
                <li>Accurate last known well (LKW) time is essential.</li>
                <li>Do not lower blood pressure unless extreme; maintain cerebral perfusion.</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li>BEFAST is more sensitive than FAST alone.</li>
                <li>Patients with resolving symptoms may still be candidates for treatment; transport.</li>
                <li>If patient is on anticoagulants, note for hospital.</li>
                <li>Consider seizure as a stroke mimic; if post‑ictal, still transport.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Identification, mechanism/medical complaint (sudden onset, BEFAST findings), injuries/information (stroke mimics ruled out).</li>
                <li>Signs: neurological exam, GCS, pupils, vital signs, RBS.</li>
                <li>Treatment: time of onset/LKW, oxygen, IV access, ECG, stroke alert activation.</li>
                <li>Allergies, medications (especially anticoagulants), background, other (scene findings, witness statements).</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Perform and document a BEFAST assessment for all suspected stroke cases.</li>
                <li>Perform an RBS for all patients with suspected stroke.</li>
                <li>Initiate transport for all patients with stroke symptoms <4.5 hours from onset within 15 minutes of EMS arrival.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What does the 'B' in BEFAST stand for?",
            options: ["Blood pressure", "Balance", "Breathing", "Bradycardia"],
            correct: 1,
            explanation: "BEFAST: Balance (sudden loss of balance/coordination), Eyes (vision loss), Face (droop), Arms (drift), Speech (slurred), Time."
        },
        {
            q: "A patient presents with sudden onset of right arm weakness and slurred speech. What is the priority assessment?",
            options: ["Check blood glucose", "Perform 12‑lead ECG", "Obtain IV access", "Administer aspirin"],
            correct: 0,
            explanation: "Blood glucose should be checked immediately to rule out hypoglycemia, which can mimic stroke."
        },
        {
            q: "What is the time window for thrombolytic therapy in acute ischemic stroke?",
            options: ["Within 3 hours", "Within 4.5 hours", "Within 6 hours", "Within 12 hours"],
            correct: 1,
            explanation: "Thrombolytics are typically administered within 4.5 hours of symptom onset."
        },
        {
            q: "A patient with suspected stroke has a blood glucose of 50 mg/dL. What should you do?",
            options: ["Administer dextrose and reassess", "Transport as stroke alert", "Give aspirin", "Perform CT scan"],
            correct: 0,
            explanation: "Hypoglycemia can mimic stroke; treat and reassess neurological deficits."
        },
        {
            q: "What is the target SpO₂ for a patient with suspected stroke?",
            options: ["88‑92%", "94‑98%", "97‑100%", "As high as possible"],
            correct: 1,
            explanation: "Maintain SpO₂ ≥94% to avoid hypoxia; avoid hyperoxia unless necessary."
        },
        {
            q: "Which of the following is a stroke mimic?",
            options: ["Hypoglycemia", "Migraine", "Seizure", "All of the above"],
            correct: 3,
            explanation: "Hypoglycemia, hemiplegic migraine, and post‑ictal (Todd's) paralysis can all mimic stroke."
        },
        {
            q: "In a patient with suspected stroke, when should a 12‑lead ECG be obtained?",
            options: ["Before transport", "En route, not delaying transport", "Only if chest pain present", "After hospital arrival"],
            correct: 1,
            explanation: "ECG can be performed en route; do not delay transport for it."
        },
        {
            q: "What is the recommended position for a stroke patient with an intact airway?",
            options: ["Supine flat", "Head elevated 15‑30°", "Trendelenburg", "Left lateral"],
            correct: 1,
            explanation: "Elevating the head 15‑30° may help reduce intracranial pressure."
        },
        {
            q: "A patient with suspected stroke has a BP of 210/120 mmHg. What is the appropriate prehospital action?",
            options: ["Give GTN to lower BP", "Administer labetalol", "Do not lower BP unless signs of end‑organ damage, consult Tele‑EMS", "Transport urgently"],
            correct: 2,
            explanation: "BP should generally not be lowered prehospital unless extreme (>220/120) with end‑organ dysfunction; consult Tele‑EMS."
        },
        {
            q: "Which of the following is a sign of hemorrhagic stroke?",
            options: ["Sudden severe headache", "Gradual weakness", "Slurred speech", "Facial droop"],
            correct: 0,
            explanation: "Sudden severe headache is classic for hemorrhagic stroke."
        },
        {
            q: "What is the most critical piece of information to obtain for a suspected stroke patient?",
            options: ["Past medical history", "Time of onset or last known well", "Medication list", "Family history"],
            correct: 1,
            explanation: "Time of onset determines eligibility for time‑sensitive treatments."
        },
        {
            q: "A patient with suspected stroke has a GCS of 8 and is unable to protect their airway. What should you do?",
            options: ["Position supine", "Insert an advanced airway", "Give oxygen only", "Transport immediately"],
            correct: 1,
            explanation: "If GCS ≤8 and unable to protect airway, secure airway with supraglottic device or intubation."
        },
        {
            q: "Which of the following is part of the BEFAST assessment?",
            options: ["Eyes (vision loss)", "Electrocardiogram", "Blood glucose", "Blood pressure"],
            correct: 0,
            explanation: "Eyes assess sudden vision loss or double vision."
        },
        {
            q: "A patient with sudden onset of left-sided weakness and slurred speech has a blood glucose of 120 mg/dL. What is your next action?",
            options: ["Treat as stroke and transport", "Give glucose", "Administer aspirin", "Perform 12‑lead ECG"],
            correct: 0,
            explanation: "Glucose is normal; proceed with stroke care and transport."
        },
        {
            q: "What is the 'golden hour' for stroke care?",
            options: ["Time from onset to thrombolysis", "Time from EMS arrival to hospital arrival", "Time to CT scan", "Time to symptom recognition"],
            correct: 0,
            explanation: "Earlier treatment improves outcomes; aim for thrombolysis within 60 minutes of hospital arrival."
        },
        {
            q: "A patient with stroke symptoms has a history of atrial fibrillation. What is the significance?",
            options: ["Increased risk of hemorrhagic stroke", "Increased risk of embolic stroke", "Contraindication to thrombolysis", "None"],
            correct: 1,
            explanation: "Atrial fibrillation increases risk of cardioembolic stroke."
        },
        {
            q: "Which of the following is a contraindication to thrombolysis that you can identify prehospital?",
            options: ["Recent surgery", "Active bleeding", "Stroke symptoms >4.5 hours", "All of the above"],
            correct: 3,
            explanation: "Many contraindications exist; note any history of bleeding, recent surgery, trauma, or anticoagulant use."
        },
        {
            q: "A patient with stroke symptoms has a witnessed seizure at onset. What should you consider?",
            options: ["Stroke mimic (Todd's paralysis)", "Hemorrhagic stroke", "Embolic stroke", "None"],
            correct: 0,
            explanation: "Seizure at onset may indicate a stroke mimic; still transport for evaluation."
        },
        {
            q: "What is the recommended fluid for a stroke patient who is hypotensive?",
            options: ["D5W", "Normal saline bolus", "Ringers lactate", "No fluids"],
            correct: 1,
            explanation: "If hypotensive, give normal saline bolus; avoid over‑resuscitation."
        },
        {
            q: "A patient with stroke symptoms has a BP of 180/100 and is otherwise stable. Should you lower BP?",
            options: ["Yes, give GTN", "Yes, give labetalol", "No, unless >220/120", "No, never"],
            correct: 2,
            explanation: "BP is below threshold for prehospital intervention; maintain cerebral perfusion."
        },
        {
            q: "What is the role of supplemental oxygen in a normoxic stroke patient?",
            options: ["Routine", "Not recommended", "Only if SpO₂ <94%", "Only if chest pain"],
            correct: 2,
            explanation: "Oxygen should only be given if SpO₂ <94%; hyperoxia may be harmful."
        },
        {
            q: "Which of the following is a stroke mimic that may resolve with treatment?",
            options: ["Hypoglycemia", "Migraine", "Seizure", "All of the above"],
            correct: 3,
            explanation: "Hypoglycemia, migraine, and post‑ictal states can resolve with appropriate treatment."
        },
        {
            q: "A patient with suspected stroke has a GCS of 15 and no deficits now, but family reports weakness 1 hour ago. What should you do?",
            options: ["Discharge with advice", "Transport for evaluation", "Observe for 30 minutes", "Call Tele‑EMS"],
            correct: 1,
            explanation: "Transient ischemic attack (TIA) requires evaluation; transport."
        },
        {
            q: "What is the most common cause of ischemic stroke?",
            options: ["Hemorrhage", "Embolism", "Thrombosis", "Vasospasm"],
            correct: 2,
            explanation: "Thrombosis (often from atherosclerosis) is common, but embolism (from heart) is also frequent."
        },
        {
            q: "A patient with stroke symptoms has a GCS of 6. What is the priority?",
            options: ["Airway management", "12‑lead ECG", "IV access", "Blood glucose"],
            correct: 0,
            explanation: "Airway protection is priority in unconscious patient."
        },
        {
            q: "What is the target systolic blood pressure for a stroke patient with intracranial hemorrhage?",
            options: ["<140 mmHg", "<160 mmHg", "<180 mmHg", "<200 mmHg"],
            correct: 2,
            explanation: "Guidelines vary; prehospital, avoid extremes and consult Tele‑EMS."
        },
        {
            q: "A patient with suspected stroke is on warfarin. What should you document?",
            options: ["INR if known", "Last dose", "Reason for anticoagulation", "All of the above"],
            correct: 3,
            explanation: "Anticoagulation status is critical for treatment decisions."
        },
        {
            q: "Which of the following is a sign of increased intracranial pressure?",
            options: ["Cushing's triad", "Decerebrate posturing", "Unequal pupils", "All of the above"],
            correct: 3,
            explanation: "Cushing's triad (hypertension, bradycardia, irregular breathing), posturing, and pupil changes indicate increased ICP."
        },
        {
            q: "A patient with stroke symptoms has a rapid improvement in the ambulance. What should you do?",
            options: ["Continue transport", "Return to scene", "Discharge", "Stop monitoring"],
            correct: 0,
            explanation: "Symptoms may recur; continue transport for evaluation."
        },
        {
            q: "What is the maximum scene time goal for a suspected stroke patient?",
            options: ["<10 minutes", "<15 minutes", "<20 minutes", "<30 minutes"],
            correct: 1,
            explanation: "Scene time should be minimised; goal <15 minutes for stroke patients."
        }
    ],
    flashcards: [
        { category: "Assessment", question: "What does BEFAST stand for?", answer: "Balance, Eyes, Face, Arms, Speech, Time." },
        { category: "Assessment", question: "What are common stroke mimics?", answer: "Hypoglycemia, seizure/post‑ictal (Todd's), migraine, electrolyte imbalance, conversion disorder." },
        { category: "Time", question: "Why is time of onset important in stroke?", answer: "Determines eligibility for thrombolysis (within 4.5 hours) and endovascular therapy." },
        { category: "Glucose", question: "Why check blood glucose in suspected stroke?", answer: "To rule out hypoglycemia, which can mimic stroke." },
        { category: "Oxygen", question: "What is the oxygen target in stroke?", answer: "SpO₂ ≥94% if hypoxic; avoid routine oxygen." },
        { category: "Positioning", question: "How should a stroke patient be positioned?", answer: "Semi‑recumbent with head elevated 15‑30° if alert." },
        { category: "BP management", question: "When should BP be lowered in stroke?", answer: "Only if extreme (>220/120) with end‑organ damage, consult Tele‑EMS." },
        { category: "ECG", question: "When should a 12‑lead ECG be performed?", answer: "En route, do not delay transport." },
        { category: "IV access", question: "What size IV is preferred for stroke patients?", answer: "18g or larger for contrast CT, but do not delay scene time." },
        { category: "Transport", question: "What is the scene time goal for stroke?", answer: "<15 minutes." },
        { category: "Thrombolysis window", question: "What is the time window for thrombolysis?", answer: "Within 4.5 hours of symptom onset." },
        { category: "Endovascular window", question: "What is the time window for endovascular therapy?", answer: "Up to 24 hours in select patients." },
        { category: "Hemorrhagic stroke", question: "What is a classic symptom of hemorrhagic stroke?", answer: "Sudden severe headache." },
        { category: "Ischemic stroke", question: "What is a common cause of ischemic stroke?", answer: "Thrombosis or embolism." },
        { category: "Seizure mimic", question: "What is Todd's paralysis?", answer: "Post‑ictal focal weakness mimicking stroke." },
        { category: "AVPU", question: "What is the AVPU scale used for?", answer: "Assess level of consciousness." },
        { category: "GCS", question: "What is the Glasgow Coma Scale range?", answer: "3‑15." },
        { category: "Airway", question: "When is advanced airway needed in stroke?", answer: "If GCS ≤8 or unable to protect airway." },
        { category: "Cushing's triad", question: "What is Cushing's triad?", answer: "Hypertension, bradycardia, irregular breathing – sign of increased ICP." },
        { category: "Anticoagulants", question: "Why is anticoagulant use important in stroke?", answer: "Contraindication or caution for thrombolysis." },
        { category: "KPI", question: "What are the KPIs for stroke?", answer: "BEFAST documented, RBS checked, transport <15 minutes if within window." },
        { category: "Stroke centre", question: "What type of hospital is preferred for stroke?", answer: "Comprehensive stroke centre with thrombolysis and endovascular capability." },
        { category: "Dispatch", question: "What information should be given to Dispatch?", answer: "Stroke alert, time of onset, symptoms, patient age." },
        { category: "Handover", question: "What is critical in stroke handover?", answer: "Last known well time, symptoms, BEFAST findings, glucose, anticoagulants." },
        { category: "TIA", question: "What is a transient ischemic attack?", answer: "Temporary neurological deficit without infarction; still requires evaluation." },
        { category: "Post‑ictal", question: "Can post‑ictal state mimic stroke?", answer: "Yes (Todd's paralysis)." },
        { category: "Migraine", question: "Can migraine mimic stroke?", answer: "Yes (hemiplegic migraine)." },
        { category: "Conversion disorder", question: "What is conversion disorder?", answer: "Psychological condition mimicking neurological deficit." },
        { category: "Reassessment", question: "How often should stroke patient be reassessed?", answer: "Every 5‑10 minutes (neurological status)." },
        { category: "Red flags", question: "What are red flags in stroke?", answer: "Rapid deterioration, GCS drop, seizures, severe headache." }
    ],
    critical: [
        {
            id: "crit_5_1_1",
            scenario: "You are called to a 70‑year‑old male with sudden onset of left-sided weakness and slurred speech. Symptoms started 2 hours ago. Blood glucose is 110 mg/dL. What is your priority?",
            question: "What should you do first?",
            options: [
                { t: "Perform BEFAST assessment", f: "Correct. Assess and document findings." },
                { t: "Administer aspirin", f: "Not indicated without confirming ischemic stroke." },
                { t: "Start oxygen", f: "Only if hypoxic." },
                { t: "Give GTN", f: "Not indicated." }
            ],
            correct: 0,
            explanation: "Perform and document BEFAST to confirm stroke symptoms. Then initiate rapid transport and stroke alert.",
            kpi: "BEFAST documented."
        },
        {
            id: "crit_5_1_2",
            scenario: "A 65‑year‑old female with sudden onset of right arm and leg weakness, facial droop, and aphasia. Last known well was 6 hours ago. Blood glucose 95 mg/dL. What is the appropriate action?",
            question: "What should you do?",
            options: [
                { t: "Transport to nearest stroke centre with endovascular capability", f: "Correct. Outside thrombolysis window but may be candidate for thrombectomy up to 24 hours." },
                { t: "Administer aspirin", f: "Not prehospital." },
                { t: "Do not transport – window missed", f: "Incorrect; thrombectomy possible." },
                { t: "Give oxygen 15 L/min", f: "Not indicated." }
            ],
            correct: 0,
            explanation: "Even beyond 4.5 hours, patients may be candidates for endovascular therapy up to 24 hours. Transport to a comprehensive stroke centre.",
            kpi: "Transport initiated; hospital notified of late window."
        },
        {
            id: "crit_5_1_3",
            scenario: "A 55‑year‑old male with sudden severe headache, vomiting, and GCS 12. BP 210/118. Pupils are unequal. What is your priority?",
            question: "What is the most likely diagnosis and action?",
            options: [
                { t: "Ischemic stroke – give aspirin", f: "Signs suggest hemorrhagic stroke." },
                { t: "Hemorrhagic stroke – rapid transport, elevate head, manage airway", f: "Correct. Suspect intracranial hemorrhage." },
                { t: "Hypertensive emergency – give GTN", f: "GTN may worsen ICP." },
                { t: "Migraine – treat with oxygen", f: "Incorrect." }
            ],
            correct: 1,
            explanation: "Sudden severe headache, vomiting, and unequal pupils suggest hemorrhagic stroke. Rapid transport, elevate head, and protect airway.",
            kpi: "Transport initiated; hospital notified."
        },
        {
            id: "crit_5_1_4",
            scenario: "A 60‑year‑old female with acute onset of left-sided weakness and slurred speech. Blood glucose is 45 mg/dL. After IV dextrose, symptoms resolve completely. What should you do?",
            question: "What is your next action?",
            options: [
                { t: "Discharge with advice", f: "Hypoglycemia treated, but still recommend evaluation." },
                { t: "Transport for medical evaluation", f: "Correct. Hypoglycemia may have underlying cause; patient should be assessed." },
                { t: "Repeat blood glucose in 15 minutes", f: "Can do en route." },
                { t: "Give oral glucose and observe", f: "Transport still needed." }
            ],
            correct: 1,
            explanation: "Even though symptoms resolved, the patient should be transported for evaluation of the cause of hypoglycemia and to rule out other issues.",
            kpi: "Transport recommended."
        },
        {
            id: "crit_5_1_5",
            scenario: "A 75‑year‑old male with sudden onset of right-sided weakness and aphasia. Last known well 1 hour ago. He is on warfarin for atrial fibrillation. BP 160/90, GCS 15. What is your priority?",
            question: "What should you do?",
            options: [
                { t: "Administer aspirin", f: "Contraindicated if on warfarin and possible hemorrhage." },
                { t: "Rapid transport to stroke centre, note anticoagulation", f: "Correct. Thrombolysis may be contraindicated, but thrombectomy may be possible." },
                { t: "Give vitamin K", f: "Not prehospital." },
                { t: "Lower BP with labetalol", f: "BP not extreme." }
            ],
            correct: 1,
            explanation: "Anticoagulation is critical information for hospital. Rapid transport for evaluation and possible thrombectomy.",
            kpi: "Transport initiated; anticoagulation documented."
        }
    ]
};