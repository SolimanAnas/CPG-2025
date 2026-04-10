/* ========== Chapter 6.5 – Altered Mental Status ========== */
window.CPG_DATA = {
    id: "c6-5",
    title: "Altered Mental Status",
    shortTitle: "6.5 Altered Mental Status",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">?? Altered Mental Status</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Identify and manage life-threatening causes of altered mental status.</li>
                <li>Stabilize the patient’s condition through appropriate interventions to restore normal mental status or prevent further deterioration.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Patients presenting with altered mental status, including:
                    <ul>
                        <li>Confusion, disorientation, or impaired responsiveness.</li>
                        <li>Lethargy, agitation, or unresponsiveness.</li>
                        <li>Inability to follow commands or respond appropriately to stimuli.</li>
                        <li>Symptoms ranging from mild confusion to coma.</li>
                    </ul>
                </li>
                <li>Suspected underlying causes such as hypoglycemia, hypoxia, stroke, overdose, infection, or trauma.</li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>None noted.</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Neurological Status:</strong> Evaluate level of consciousness using AVPU (Alert, Verbal, Painful, Unresponsive) or Glasgow Coma Scale (GCS). Assess for focal neurological deficits (unequal pupils, motor weakness, speech impairment). Note behavioral changes (agitation, combativeness, lethargy).</li>
                <li><strong>History:</strong> Identify potential causes through SAMPLE history: recent events (trauma, drug use, medication changes), medical history (diabetes, epilepsy, stroke, psychiatric disorders), medication use (insulin, sedatives, missed doses). Check for medical alert bracelets.</li>
                <li><strong>Differential Diagnosis (AEIOU TIPS):</strong>
                    <ul>
                        <li>A – Alcohol, Abuse, Atypical migraine</li>
                        <li>E – Epilepsy, Electrolytes</li>
                        <li>I – Insulin (hypoglycemia)</li>
                        <li>O – Oxygen, Overdose</li>
                        <li>U – Uremia (kidney failure)</li>
                        <li>T – Trauma, Tumor</li>
                        <li>I – Infection</li>
                        <li>P – Psych, Poisoning</li>
                        <li>S – Seizure, Subarachnoid hemorrhage, Sepsis</li>
                    </ul>
                </li>
                <li><strong>Glucose and Oxygen Assessment:</strong> Check random blood sugar (RBS) to identify hypoglycemia (&lt;70 mg/dL) or hyperglycemia (&gt;200 mg/dL). Assess for hypoxia via pulse oximetry (SpO2 &lt;94%).</li>
                <li><strong>Environmental and Toxicological Clues:</strong> Look for evidence of drug or alcohol use (pill bottles, drug paraphernalia). Assess for environmental exposures (carbon monoxide, chemicals).</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Primary and Secondary Surveys:</strong> Perform as per Universal Care CPG.</li>
                <li><strong>Consider ALS back-up:</strong> For patients with GCS &lt;13, seizures, or significant cardiovascular compromise.</li>
                <li><strong>Red Flags:</strong>
                    <ul>
                        <li>Unresponsiveness or coma (AVPU).</li>
                        <li>Hypoglycemia (RBS &lt;70 mg/dL) ? go to Hypoglycemia CPG.</li>
                        <li>Severe hyperglycemia (RBS &gt;400 mg/dL) ? go to Hyperglycemia CPG.</li>
                        <li>Hypoxia (SpO2 &lt;90%) or respiratory distress.</li>
                        <li>Suspected stroke (focal neurological deficits, sudden onset) ? go to Stroke CPG.</li>
                        <li>Signs of overdose (pinpoint pupils, respiratory depression) ? go to Overdose CPG.</li>
                    </ul>
                </li>
                <li><strong>Evaluate for Signs of Shock or Instability:</strong> Hypotension (SBP &lt;90 mmHg in adults, or age-specific for pediatrics), tachycardia, or poor perfusion (cool, clammy skin, delayed capillary refill &gt;2 seconds). If shock present, initiate fluid resuscitation and address underlying causes. Manage shock as per appropriate Shock Guideline.</li>
                <li><strong>Establish IV Access:</strong> For hypotension, suspected hypoglycemia, or anticipated medication administration. Consider IO access if IV access cannot be obtained.</li>
                <li><strong>Oxygen Therapy:</strong> Administer oxygen to maintain SpO2 =94% if hypoxic.</li>
                <li><strong>Patient Reassessment:</strong> Frequently reassess neurological status (AVPU/GCS) every 5-15 minutes depending on triage category.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>It is difficult to accurately assess patients with an altered mental status. All patients with altered mental status should be transported to hospital.</li>
                <li>Protect the airway and be prepared for vomiting or aspiration.</li>
                <li>If patient is agitated, consider sedation only if necessary for safety (see Abnormal Behavior CPG).</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li>Hypoglycemia is a common and reversible cause; always check blood glucose.</li>
                <li>Consider naloxone for suspected opioid overdose (pinpoint pupils, respiratory depression).</li>
                <li>Elderly patients may present with subtle changes (e.g., lethargy, infection) without fever.</li>
                <li>Pediatric patients: consider fever, infection, ingestion, or trauma.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Neurological status (GCS/AVPU), pupil size/reactivity, vital signs, RBS.</li>
                <li>Possible underlying cause identified (e.g., hypoglycemia, overdose).</li>
                <li>Interventions performed (oxygen, IV fluids, glucose, naloxone, sedation).</li>
                <li>Response to treatment and changes in mental status.</li>
                <li>Hospital notification and transport details.</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Perform and document an RBS on all patients with altered mental status.</li>
                <li>Assess and document the initial AVPU or GCS score.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What is the first step in assessing a patient with altered mental status?",
            options: ["Check blood glucose", "Perform primary survey (ABC)", "Obtain SAMPLE history", "Administer oxygen"],
            correct: 1,
            explanation: "The primary survey (Airway, Breathing, Circulation) is the priority to identify life threats."
        },
        {
            q: "Which of the following is a reversible cause of altered mental status that should be checked immediately?",
            options: ["Hypoglycemia", "Hypoxia", "Opioid overdose", "All of the above"],
            correct: 3,
            explanation: "Hypoglycemia, hypoxia, and opioid overdose are common reversible causes and should be rapidly identified and treated."
        },
        {
            q: "What is the target SpO2 for a patient with altered mental status?",
            options: ["=90%", "=94%", "=88%", "100%"],
            correct: 1,
            explanation: "Maintain SpO2 =94% to prevent hypoxia, which can worsen cerebral function."
        },
        {
            q: "A patient with altered mental status has a blood glucose of 55 mg/dL. What should you do?",
            options: ["Give oral glucose", "Administer glucagon IM", "Give 50% dextrose 25 g IV", "Transport without intervention"],
            correct: 2,
            explanation: "Hypoglycemia (&lt;70 mg/dL) with altered mental status should be treated with IV dextrose if the patient cannot safely swallow."
        },
        {
            q: "Which of the following is NOT part of the AEIOU TIPS mnemonic for causes of altered mental status?",
            options: ["Alcohol", "Insulin (hypoglycemia)", "Hyperthermia", "Trauma"],
            correct: 2,
            explanation: "AEIOU TIPS includes A (Alcohol), E (Epilepsy/Electrolytes), I (Insulin), O (Oxygen/Overdose), U (Uremia), T (Trauma/Tumor), I (Infection), P (Psych/Poisoning), S (Seizure/Subarachnoid/Sepsis). Hyperthermia is not in the classic mnemonic."
        },
        {
            q: "A patient is found unresponsive with pinpoint pupils and respiratory rate of 8. What is the most likely cause?",
            options: ["Hypoglycemia", "Opioid overdose", "Stroke", "Seizure"],
            correct: 1,
            explanation: "Pinpoint pupils and respiratory depression are classic signs of opioid overdose."
        },
        {
            q: "What is the dose of naloxone for an adult with suspected opioid overdose?",
            options: ["0.4 mg IV/IM", "4 mg IN", "Both A and B are acceptable", "1 mg IV only"],
            correct: 2,
            explanation: "Naloxone can be given 0.4 mg IV/IM or 4 mg IN; both are acceptable initial doses."
        },
        {
            q: "A patient with altered mental status has a GCS of 9. What is the appropriate triage category?",
            options: ["Green", "Yellow", "Red", "Black"],
            correct: 2,
            explanation: "GCS =9 is considered a red priority (critical) due to severe neurological compromise."
        },
        {
            q: "Which of the following is a red flag in a patient with altered mental status?",
            options: ["Hypotension", "Hypoxia", "Seizures", "All of the above"],
            correct: 3,
            explanation: "Hypotension, hypoxia, and seizures are all red flags indicating life-threatening conditions."
        },
        {
            q: "What is the preferred position for an unconscious patient with altered mental status?",
            options: ["Supine", "Prone", "Recovery position", "Semi-Fowler's"],
            correct: 2,
            explanation: "The recovery position protects the airway and allows drainage of secretions to prevent aspiration."
        },
        {
            q: "A patient with altered mental status has a blood glucose of 300 mg/dL. What is the appropriate next step?",
            options: ["Give insulin", "Administer dextrose", "Assess for signs of DKA (e.g., Kussmaul respirations)", "Transport without intervention"],
            correct: 2,
            explanation: "Hyperglycemia may indicate diabetic ketoacidosis (DKA) or hyperosmolar hyperglycemic state (HHS); assess for other signs and manage accordingly."
        },
        {
            q: "What is the dose of midazolam for an actively seizing adult?",
            options: ["5 mg IV/IM", "10 mg IV", "2 mg IM", "1 mg IV"],
            correct: 0,
            explanation: "The adult dose for seizures is 5 mg IV/IM (may repeat once)."
        },
        {
            q: "A patient with altered mental status is agitated and combative. What is the priority?",
            options: ["Physical restraint", "Chemical sedation", "Ensure scene safety and request police if needed", "Transport immediately"],
            correct: 2,
            explanation: "Scene safety is paramount; involve police if there is risk of harm."
        },
        {
            q: "Which of the following is a potential cause of altered mental status in an elderly patient?",
            options: ["Urinary tract infection", "Dehydration", "Medication side effects", "All of the above"],
            correct: 3,
            explanation: "Elderly patients often have altered mental status from infections, dehydration, or polypharmacy."
        },
        {
            q: "What is the most common cause of altered mental status in children?",
            options: ["Hypoglycemia", "Febrile illness", "Trauma", "Poisoning"],
            correct: 1,
            explanation: "Fever and infections (e.g., meningitis, sepsis) are common causes of altered mental status in children."
        },
        {
            q: "A patient with altered mental status has a heart rate of 40 and BP 80/50. What should you suspect?",
            options: ["Sepsis", "Opioid overdose", "Cardiogenic shock or bradyarrhythmia", "Hyperglycemia"],
            correct: 2,
            explanation: "Bradycardia with hypotension suggests a cardiac cause such as heart block or medication toxicity (e.g., beta-blockers)."
        },
        {
            q: "What is the initial fluid bolus for an adult with altered mental status and hypotension?",
            options: ["250 mL", "500-1000 mL", "2000 mL", "No fluids"],
            correct: 1,
            explanation: "A 500-1000 mL bolus of crystalloid is recommended for hypotension in adults."
        },
        {
            q: "A patient with altered mental status has a fever of 39.5°C. What condition should you suspect?",
            options: ["Heat stroke", "Sepsis", "Meningitis", "All of the above"],
            correct: 3,
            explanation: "Fever with altered mental status can be due to sepsis, meningitis, or hyperthermia; treat accordingly."
        },
        {
            q: "What is the Glasgow Coma Scale score for a patient who opens eyes to pain, makes incomprehensible sounds, and withdraws to pain?",
            options: ["8", "9", "10", "11"],
            correct: 0,
            explanation: "Eye opening to pain = 2, incomprehensible sounds = 2, withdrawal to pain = 4; total 8."
        },
        {
            q: "Which of the following is a contraindication to oral glucose in an altered patient?",
            options: ["Hypoglycemia", "Inability to swallow", "GCS 15", "Patient refusal"],
            correct: 1,
            explanation: "Oral glucose should not be given if the patient cannot swallow safely due to risk of aspiration."
        },
        {
            q: "A patient with altered mental status has a history of diabetes and is found with a glucose of 45 mg/dL. After giving IV dextrose, the patient becomes alert but then becomes confused again 30 minutes later. What should you suspect?",
            options: ["Recurrent hypoglycemia", "Stroke", "Seizure", "Withdrawal"],
            correct: 0,
            explanation: "Patients with hypoglycemia may require ongoing glucose monitoring; dextrose can wear off, especially if the patient has taken long-acting insulin or oral agents."
        },
        {
            q: "What is the dose of 50% dextrose for an adult with hypoglycemia?",
            options: ["10 mL (5 g)", "25 mL (12.5 g)", "50 mL (25 g)", "100 mL (50 g)"],
            correct: 2,
            explanation: "Standard adult dose is 25 g (50 mL of 50% dextrose)."
        },
        {
            q: "A patient with altered mental status has a respiratory rate of 40 and SpO2 88% on room air. What is the priority?",
            options: ["Check blood glucose", "Administer oxygen", "Obtain IV access", "Perform 12-lead ECG"],
            correct: 1,
            explanation: "Hypoxia is a life threat; administer high-flow oxygen immediately."
        },
        {
            q: "Which of the following medications is used to reverse opioid overdose?",
            options: ["Naloxone", "Flumazenil", "Glucagon", "Atropine"],
            correct: 0,
            explanation: "Naloxone is an opioid antagonist that reverses respiratory depression and sedation."
        },
        {
            q: "A patient with altered mental status has a history of alcohol abuse and is found tremulous, agitated, and diaphoretic. What is the likely cause?",
            options: ["Hypoglycemia", "Alcohol withdrawal", "Hepatic encephalopathy", "Stroke"],
            correct: 1,
            explanation: "Tremor, agitation, and diaphoresis are signs of alcohol withdrawal, which can progress to seizures or delirium tremens."
        },
        {
            q: "What is the preferred route of naloxone administration in a patient with suspected opioid overdose?",
            options: ["IV", "IM", "IN", "All are acceptable; choose based on access"],
            correct: 3,
            explanation: "Naloxone can be given IV, IM, or IN; all routes are effective. IV has fastest onset."
        },
        {
            q: "A patient with altered mental status has a GCS of 14 and is combative. What is the appropriate triage category?",
            options: ["Red", "Yellow", "Green", "Black"],
            correct: 1,
            explanation: "GCS 14 with combative behavior is serious (yellow priority) but not immediately life-threatening unless deterioration occurs."
        },
        {
            q: "Which of the following is a sign of increased intracranial pressure?",
            options: ["Cushing's triad (hypertension, bradycardia, irregular breathing)", "Hypotension", "Tachycardia", "Hyperthermia"],
            correct: 0,
            explanation: "Cushing's triad is a late sign of increased ICP; it includes hypertension, bradycardia, and irregular respirations."
        },
        {
            q: "A patient with altered mental status has a blood glucose of 25 mg/dL and is unresponsive. What is the appropriate treatment?",
            options: ["Oral glucose paste", "Glucagon IM", "50% dextrose 25 g IV", "Normal saline bolus"],
            correct: 2,
            explanation: "Severe hypoglycemia with unresponsiveness requires IV dextrose immediately."
        },
        {
            q: "What is the key performance indicator for altered mental status?",
            options: ["Administer oxygen to all patients", "Check blood glucose", "Perform 12-lead ECG", "Transport within 10 minutes"],
            correct: 1,
            explanation: "Checking blood glucose in all patients with altered mental status is a key indicator to identify reversible hypoglycemia."
        }
    ],
    flashcards: [
        { category: "Definition", question: "What is altered mental status?", answer: "Any change in a patient's level of consciousness, cognition, or behavior, ranging from confusion to coma." },
        { category: "AVPU scale", question: "What does AVPU stand for?", answer: "Alert, responds to Voice, responds to Pain, Unresponsive." },
        { category: "Glasgow Coma Scale (GCS)", question: "What are the three components of GCS?", answer: "Eye opening, verbal response, motor response." },
        { category: "AEIOU TIPS mnemonic", question: "List the causes of altered mental status in AEIOU TIPS.", answer: "Alcohol, Epilepsy/Electrolytes, Insulin, Oxygen/Overdose, Uremia, Trauma/Tumor, Infection, Psych/Poisoning, Seizure/Subarachnoid/Sepsis." },
        { category: "Hypoglycemia treatment", question: "What is the treatment for hypoglycemia with altered mental status?", answer: "IV dextrose (25 g 50% dextrose) or IM glucagon if no IV access." },
        { category: "Naloxone dose", question: "What is the dose of naloxone for opioid overdose?", answer: "0.4-2 mg IV/IM or 4 mg IN; may repeat every 3-5 minutes." },
        { category: "Red flags", question: "Name three red flags in altered mental status.", answer: "Hypoxia (SpO2 <90%), hypotension (SBP <90 mmHg), GCS =9, seizures, hypoglycemia." },
        { category: "Hypoxia treatment", question: "What is the target SpO2 for a patient with altered mental status?", answer: "=94%." },
        { category: "Recovery position", question: "When should the recovery position be used?", answer: "For unconscious patients with spontaneous breathing to protect the airway." },
        { category: "Seizure treatment", question: "What medication is used for active seizures?", answer: "Midazolam (5 mg IV/IM for adults) or diazepam." },
        { category: "Stroke screening", question: "What is the BEFAST mnemonic for stroke?", answer: "Balance, Eyes, Face, Arms, Speech, Time." },
        { category: "Sepsis in elderly", question: "Why might elderly patients with sepsis not have fever?", answer: "Impaired immune response; may present with lethargy or confusion only." },
        { category: "Ketamine sedation", question: "When is ketamine used for agitated patients?", answer: "For severe agitation posing a safety risk; dose 0.5-1 mg/kg IV/IM." },
        { category: "Glucagon use", question: "When is glucagon used for hypoglycemia?", answer: "When IV access cannot be obtained and patient is unresponsive; dose 1 mg IM." },
        { category: "Cushing's triad", question: "What are the components of Cushing's triad?", answer: "Hypertension, bradycardia, irregular respirations (sign of increased ICP)." },
        { category: "Pediatric considerations", question: "What are common causes of altered mental status in children?", answer: "Febrile illness, seizures, ingestion, trauma, dehydration." },
        { category: "Elderly considerations", question: "What common conditions cause altered mental status in elderly?", answer: "UTI, pneumonia, dehydration, medication side effects, hypoglycemia." },
        { category: "Documentation", question: "What must be documented for altered mental status?", answer: "Initial AVPU/GCS, vital signs, blood glucose, interventions, response to treatment." },
        { category: "KPI", question: "What is the key performance indicator for altered mental status?", answer: "Perform and document an RBS on all patients with altered mental status." },
        { category: "Transport decision", question: "Should all patients with altered mental status be transported?", answer: "Yes, unless the cause is clearly benign and resolved (e.g., brief vasovagal episode with full recovery)." }
    ],
    critical: [
        {
            id: "crit_6_5_1",
            scenario: "You are called to a 45-year-old male found unresponsive by his wife. He has a history of diabetes and takes insulin. His blood glucose is 35 mg/dL. You administer 50% dextrose 25 g IV. He becomes alert and oriented. What is your next step?",
            question: "What should you do after the patient improves?",
            options: [
                { t: "Discharge him at scene with advice to eat", f: "Incorrect; patients with hypoglycemia requiring EMS intervention should be transported due to risk of recurrence." },
                { t: "Transport to hospital for further evaluation", f: "Correct. Hypoglycemia can recur; underlying cause must be assessed." },
                { t: "Administer another dose of dextrose", f: "Not needed as patient is alert." },
                { t: "Give oral glucose and leave", f: "Not safe; transport is required." }
            ],
            correct: 1,
            explanation: "Patients with hypoglycemia requiring EMS intervention should be transported to hospital for evaluation of the cause and monitoring for recurrence.",
            kpi: "Patient transported after treatment."
        },
        {
            id: "crit_6_5_2",
            scenario: "A 22-year-old female is found in a park, unresponsive, with pinpoint pupils and a respiratory rate of 6. She has track marks on her arms. What is the priority?",
            question: "What should you do first?",
            options: [
                { t: "Administer naloxone 0.4 mg IV", f: "Correct. Opioid overdose is likely; naloxone is first line." },
                { t: "Start CPR", f: "She has a pulse; CPR is not indicated." },
                { t: "Check blood glucose", f: "Important, but airway and breathing are priority." },
                { t: "Establish IV access", f: "Secondary to ventilation and naloxone." }
            ],
            correct: 0,
            explanation: "The presentation is classic for opioid overdose; naloxone should be given immediately while supporting ventilation.",
            kpi: "Naloxone administered."
        },
        {
            id: "crit_6_5_3",
            scenario: "A 70-year-old male is brought from a nursing home with confusion. He is afebrile, BP 110/70, HR 100, SpO2 96%. His glucose is 120 mg/dL. He has no focal deficits. What should you suspect?",
            question: "What is the most likely cause and next step?",
            options: [
                { t: "Stroke; perform BEFAST and transport", f: "No focal deficits; stroke less likely." },
                { t: "Sepsis; assess for source, transport", f: "Correct. Elderly patients often have infection without fever; altered mental status may be the only sign." },
                { t: "Hypoglycemia; give dextrose", f: "Glucose is normal." },
                { t: "Psychiatric; leave at facility", f: "Altered mental status warrants transport for medical evaluation." }
            ],
            correct: 1,
            explanation: "Altered mental status in elderly is often due to infection (e.g., UTI, pneumonia) even without fever; transport for evaluation.",
            kpi: "Patient transported."
        },
        {
            id: "crit_6_5_4",
            scenario: "A 35-year-old male with history of epilepsy is actively seizing. The seizure has lasted 4 minutes. What should you do?",
            question: "What is the appropriate management?",
            options: [
                { t: "Wait for seizure to stop spontaneously", f: "Status epilepticus is defined as seizure >5 minutes or recurrent without recovery; active seizure warrants treatment." },
                { t: "Administer midazolam 5 mg IV", f: "Correct. Benzodiazepines should be given for prolonged seizures." },
                { t: "Restrain the patient", f: "Restraint can cause injury; protect airway and administer medication." },
                { t: "Give oral glucose", f: "Not appropriate; patient cannot swallow." }
            ],
            correct: 1,
            explanation: "Seizures lasting >5 minutes constitute status epilepticus and require pharmacological intervention.",
            kpi: "Benzodiazepine administered."
        },
        {
            id: "crit_6_5_5",
            scenario: "A patient with altered mental status is combative and poses a safety risk. You have tried verbal de-escalation without success. What is the appropriate next step?",
            question: "How should you proceed?",
            options: [
                { t: "Physically restrain the patient", f: "Physical restraint should be a last resort and may require police assistance." },
                { t: "Request police assistance and consider chemical sedation", f: "Correct. Safety first; involve police and consider sedation per Abnormal Behavior CPG." },
                { t: "Leave the scene", f: "Not appropriate; patient requires care." },
                { t: "Transport without further intervention", f: "Unsafe." }
            ],
            correct: 1,
            explanation: "Scene safety is paramount. Request police and consider sedation (e.g., ketamine or midazolam) if indicated.",
            kpi: "Police requested and sedation administered if indicated."
        }
    ]
};