/* ========== Chapter 8.2 – Opioid Overdose ========== */
window.CPG_DATA = {
    id: "c8-2",
    title: "Opioid Overdose",
    shortTitle: "8.2 Opioid Overdose",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">?? Opioid Overdose</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Rapidly recognize and manage life-threatening effects of opioid overdose.</li>
                <li>Support airway, breathing, and circulation while minimizing aspiration risk.</li>
                <li>Identify opioid toxicity and administer naloxone (Narcan).</li>
                <li>Transport to definitive care for monitoring and antidotal therapy.</li>
                <li>Prevent complications through appropriate monitoring and communication.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Suspected or confirmed intentional or unintentional opioid overdose symptoms including:
                    <ul>
                        <li>Altered mental status.</li>
                        <li>Respiratory depression.</li>
                        <li>Cardiovascular instability.</li>
                        <li>Seizure or coma.</li>
                        <li>History or evidence of opioid ingestion.</li>
                    </ul>
                </li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>Poisoning from industrial/environmental toxins (see General Toxicology Management CPG).</li>
                <li>Ingestion of non-toxic substances with no clinical symptoms.</li>
                <li>Isolated alcohol intoxication (addressed in separate guideline).</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Scene Clues:</strong> Pill bottles, syringes, patches, empty blister packs; bystander report, suicide note, known substance use disorder.</li>
                <li><strong>Airway & Breathing:</strong> Snoring respirations, cyanosis, shallow breathing. Suspect opioid toxicity if RR <12 with pinpoint pupils.</li>
                <li><strong>Circulation:</strong> Bradycardia or hypotension (opioids, beta-blockers); tachycardia and hypertension (amphetamines, cocaine).</li>
                <li><strong>Neurological Status:</strong> GCS <15, agitation, confusion, seizures, or unresponsiveness. Pupils: miosis (opioids), mydriasis (sympathomimetics or withdrawal).</li>
                <li><strong>Clinical Indicators of Opioid Toxicity:</strong> Respiratory rate <12, pinpoint pupils, depressed LOC, evidence of opioid use or paraphernalia.</li>
                <li><strong>High-Risk Indicator Assessment:</strong> GCS <8, respiratory rate <10 or apnea, SpO2 <94% despite oxygen, pinpoint pupils with poor respiratory effort, suspected co-ingestants, history of chronic opioid use or recent release from incarceration, pediatric ingestion, extended-release or long-acting opioid ingestion, suspected intentional overdose or suicide attempt.</li>
                <li><strong>SAMPLE History:</strong> Symptoms, Allergies, Medications, Past medical history (substance use disorder, mental health), Last oral intake, Events (timeline, bystander CPR, naloxone given before EMS).</li>
                <li><strong>Determine Triage Category:</strong> Red priority for respiratory depression, GCS <8; Yellow for stable vitals, moderate symptoms; Green for alert, no current symptoms, accidental ingestion.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Consider ALS back-up:</strong> For GCS <8, respiratory compromise, seizures, significant cardiovascular effects, or suspected poly-drug ingestion.</li>
                <li><strong>Primary Survey:</strong> Perform as per Universal Care CPG. Provide BVM ventilation if RR <10 or SpO2 <94%. Suction as needed to clear airway from vomitus.</li>
                <li><strong>Oxygen Therapy:</strong> Administer high-flow O2 for all patients with hypoxia or respiratory depression; target SpO2 =94%.</li>
                <li><strong>Naloxone Administration:</strong>
                    <ul>
                        <li><strong>IN (Intranasal):</strong> 4 mg (single puff per nostril). Repeat every 2–3 min if needed, max 8 mg.</li>
                        <li><strong>IM or IV:</strong> 0.4 mg; titrate to respiratory effort, may repeat every 2–3 min, max 10 mg.</li>
                        <li>If no response after 10 mg total ? suspect alternative diagnosis.</li>
                        <li>Maintain ventilation support – naloxone has shorter half-life than some opioids.</li>
                        <li>Be prepared for agitation or withdrawal after reversal.</li>
                    </ul>
                </li>
                <li><strong>Patient Reassessment:</strong> Frequently reassess respiratory rate and effort, SpO2, GCS, pupil size, heart rate, and blood pressure.</li>
                <li><strong>Transport Considerations:</strong> Transport all opioid overdose patients, even if they initially respond to naloxone. Provide early notification to receiving facility if airway or cardiovascular support is required. Notify dispatch and police if drug overdose suspected before transport.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Maintain airway protection at all times.</li>
                <li>Do not rely on response to naloxone alone to rule out other causes.</li>
                <li>Monitor for re-narcotization after naloxone wears off.</li>
                <li>Anticipate withdrawal-related agitation and ensure scene safety.</li>
                <li>Avoid judgmental behavior; overdose is a medical emergency.</li>
                <li>Use Broselow tape for pediatric dosing and airway sizing.</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li>Poly-substance overdose is common; always consider co-ingestants.</li>
                <li>Naloxone can precipitate withdrawal, especially in opioid-dependent patients.</li>
                <li>Pediatric opioid ingestion can be lethal even in small amounts; escalate early.</li>
                <li>If patient becomes aggressive after naloxone, ensure crew safety and request support.</li>
                <li>Tele-EMS consultation recommended for complex cases or recurrent overdoses.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Name, age, gender, known substance use history.</li>
                <li>Suspected overdose, opioid exposure, scene findings, time of ingestion.</li>
                <li>Signs: GCS, RR, HR, BP, SpO2, pupil size.</li>
                <li>Treatment: oxygen, BVM, naloxone route/dose/time.</li>
                <li>Allergies, medications, background (psychiatric history, substance use disorder).</li>
                <li>Family presence, police on scene, suicidal intent.</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Administer naloxone for suspected opioid toxicity.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What is the first-line medication for suspected opioid overdose?",
            options: ["Flumazenil", "Naloxone", "Glucagon", "Atropine"],
            correct: 1,
            explanation: "Naloxone is an opioid antagonist that reverses respiratory depression and sedation."
        },
        {
            q: "What is the dose of intranasal naloxone for an adult?",
            options: ["2 mg", "4 mg", "8 mg", "0.4 mg"],
            correct: 1,
            explanation: "Intranasal naloxone dose is 4 mg (one spray per nostril)."
        },
        {
            q: "A patient with suspected opioid overdose has a respiratory rate of 6. What is the priority?",
            options: ["Administer naloxone", "Assist ventilations with BVM", "Check blood glucose", "Obtain IV access"],
            correct: 1,
            explanation: "Ventilatory support is the priority; naloxone can be given after or simultaneously."
        },
        {
            q: "What are the classic signs of opioid overdose?",
            options: ["Mydriasis, tachycardia, agitation", "Miosis, respiratory depression, CNS depression", "Dry skin, hyperthermia, delirium", "SLUDGE syndrome"],
            correct: 1,
            explanation: "Opioid overdose presents with pinpoint pupils (miosis), respiratory depression, and decreased level of consciousness."
        },
        {
            q: "What is the maximum total dose of naloxone recommended before considering alternative diagnoses?",
            options: ["2 mg", "4 mg", "10 mg", "20 mg"],
            correct: 2,
            explanation: "If no response after 10 mg of naloxone, consider alternative causes of altered mental status."
        },
        {
            q: "After administering naloxone, a patient becomes agitated and combative. What is the most likely cause?",
            options: ["Opioid toxicity", "Withdrawal reaction", "Cerebral hypoxia", "Hypoglycemia"],
            correct: 1,
            explanation: "Rapid reversal of opioids can precipitate withdrawal symptoms including agitation."
        },
        {
            q: "What is the target SpO2 for a patient with opioid overdose?",
            options: ["=90%", "=94%", "=88%", "100%"],
            correct: 1,
            explanation: "Maintain SpO2 =94% to prevent hypoxia."
        },
        {
            q: "A child is found with an empty bottle of methadone. The child is asymptomatic. What should you do?",
            options: ["Observe at home", "Transport to hospital", "Give naloxone prophylactically", "Induce vomiting"],
            correct: 1,
            explanation: "Even small amounts of opioid can be lethal in children; all require hospital evaluation."
        },
        {
            q: "What is the dose of naloxone for an adult via IV/IM route?",
            options: ["0.1 mg", "0.4 mg", "2 mg", "4 mg"],
            correct: 1,
            explanation: "Initial IV/IM naloxone dose is 0.4 mg; may repeat every 2-3 minutes."
        },
        {
            q: "Why should patients who respond to naloxone still be transported to hospital?",
            options: ["Risk of re-narcotization", "Withdrawal symptoms require monitoring", "Underlying cause needs evaluation", "All of the above"],
            correct: 3,
            explanation: "Naloxone has a shorter half-life than many opioids, so symptoms may recur; patients also need evaluation for co-ingestants and underlying cause."
        },
        {
            q: "What is the pediatric dose of naloxone IV/IM?",
            options: ["0.01 mg/kg", "0.1 mg/kg", "1 mg/kg", "0.001 mg/kg"],
            correct: 0,
            explanation: "Pediatric naloxone dose is 0.01 mg/kg IV/IM (max 0.4 mg)."
        },
        {
            q: "A patient with suspected opioid overdose has a heart rate of 40 and BP 80/50. What is the next step?",
            options: ["Give naloxone", "Start atropine", "Give fluid bolus", "All of the above"],
            correct: 3,
            explanation: "Bradycardia and hypotension may be due to opioid overdose; naloxone is indicated. If no response, consider other causes."
        },
        {
            q: "Which of the following is a sign of opioid overdose?",
            options: ["Pinpoint pupils", "Tachycardia", "Hyperthermia", "Agitation"],
            correct: 0,
            explanation: "Miosis (pinpoint pupils) is a classic sign of opioid toxicity."
        },
        {
            q: "What is the maximum total dose of intranasal naloxone recommended?",
            options: ["4 mg", "8 mg", "12 mg", "No maximum"],
            correct: 1,
            explanation: "Maximum IN naloxone is 8 mg (two doses of 4 mg)."
        },
        {
            q: "A patient with known opioid addiction receives naloxone and becomes aggressive. What should you do?",
            options: ["Restrain the patient", "Call for police assistance", "Administer sedation", "Both B and C"],
            correct: 3,
            explanation: "Ensure scene safety; police may be needed and sedation may be considered if the patient is a danger to self or others."
        },
        {
            q: "What is the preferred route for naloxone administration if IV access is not available?",
            options: ["IM", "IN", "ETT", "SC"],
            correct: 1,
            explanation: "Intranasal naloxone is effective and does not require needle access."
        },
        {
            q: "A patient with opioid overdose has a seizure. What is the priority?",
            options: ["Give naloxone", "Protect airway and give benzodiazepine if prolonged", "Check blood glucose", "Transport immediately"],
            correct: 1,
            explanation: "Seizure management includes airway protection and benzodiazepines if prolonged; naloxone may also be given."
        },
        {
            q: "What is the mechanism of action of naloxone?",
            options: ["Competitive opioid receptor antagonist", "GABA agonist", "Dopamine antagonist", "Serotonin agonist"],
            correct: 0,
            explanation: "Naloxone competitively binds to opioid receptors, reversing the effects of opioids."
        },
        {
            q: "A patient with opioid overdose has a GCS of 8. What is the priority?",
            options: ["Administer naloxone", "Protect airway and consider advanced airway", "Check blood glucose", "Start IV fluids"],
            correct: 1,
            explanation: "GCS =8 indicates severe CNS depression; airway protection is the priority."
        },
        {
            q: "What is the key performance indicator for opioid overdose?",
            options: ["Administer oxygen", "Administer naloxone for suspected opioid toxicity", "Transport all patients", "Perform 12-lead ECG"],
            correct: 1,
            explanation: "Administering naloxone when opioid overdose is suspected is the key KPI."
        },
        {
            q: "Why should you pre-oxygenate before administering naloxone?",
            options: ["To prevent hypoxia during reversal", "To prevent withdrawal", "To improve drug absorption", "No reason"],
            correct: 0,
            explanation: "Pre-oxygenation reduces the risk of hypoxia if the patient becomes agitated or apneic after naloxone."
        },
        {
            q: "A patient with suspected opioid overdose has a respiratory rate of 8. After administering naloxone, the RR increases to 14. What should you do?",
            options: ["Administer another dose", "Transport with monitoring", "Give oxygen only", "Discharge home"],
            correct: 1,
            explanation: "If the patient responds, continue monitoring and transport for further evaluation."
        },
        {
            q: "What is the dose of naloxone for a 10 kg child with suspected opioid overdose?",
            options: ["0.1 mg", "0.4 mg", "1 mg", "4 mg"],
            correct: 0,
            explanation: "0.01 mg/kg = 0.1 mg for a 10 kg child."
        },
        {
            q: "Which of the following is a risk factor for opioid overdose?",
            options: ["Recent release from incarceration", "History of substance use disorder", "Use of extended-release opioids", "All of the above"],
            correct: 3,
            explanation: "Loss of tolerance, chronic use, and long-acting formulations increase overdose risk."
        },
        {
            q: "A patient with opioid overdose has a blood glucose of 45 mg/dL. What should you do?",
            options: ["Give naloxone first", "Treat hypoglycemia first", "Give both simultaneously", "Transport without treatment"],
            correct: 1,
            explanation: "Hypoglycemia is a reversible cause of altered mental status; treat it immediately."
        },
        {
            q: "What is the maximum total dose of naloxone that can be given prehospital?",
            options: ["2 mg", "10 mg", "20 mg", "No maximum"],
            correct: 1,
            explanation: "The CPG recommends maximum 10 mg total for IV/IM and 8 mg for IN before considering alternative diagnoses."
        },
        {
            q: "A patient is found unresponsive with track marks. You give naloxone 4 mg IN with no response after 3 minutes. What should you do?",
            options: ["Give another 4 mg IN", "Give 0.4 mg IV", "Consider alternative causes", "All of the above"],
            correct: 3,
            explanation: "Repeat naloxone up to maximum, but if no response, consider other causes of unresponsiveness."
        },
        {
            q: "What is the role of police in opioid overdose cases?",
            options: ["To arrest the patient", "To assist with scene safety", "To administer naloxone", "To transport the patient"],
            correct: 1,
            explanation: "Police may be needed for scene safety, especially if there is violence or illegal substances present."
        },
        {
            q: "Why should you avoid large doses of naloxone in chronic opioid users?",
            options: ["It may cause severe withdrawal", "It may cause arrhythmias", "It is ineffective", "It causes seizures"],
            correct: 0,
            explanation: "Rapid and high-dose naloxone can precipitate severe withdrawal symptoms including agitation and vomiting."
        },
        {
            q: "What is the maximum 24-hour dose of naloxone?",
            options: ["Not applicable; repeated doses as needed", "10 mg", "20 mg", "No maximum"],
            correct: 0,
            explanation: "There is no maximum 24-hour limit; doses are repeated based on clinical response."
        }
    ],
    flashcards: [
        { category: "Opioid toxidrome", question: "What are the signs of opioid overdose?", answer: "Miosis (pinpoint pupils), respiratory depression, CNS depression, bradycardia." },
        { category: "Naloxone dose – adult IV/IM", question: "What is the adult IV/IM naloxone dose?", answer: "0.4 mg; repeat every 2-3 minutes as needed, max 10 mg." },
        { category: "Naloxone dose – adult IN", question: "What is the adult intranasal naloxone dose?", answer: "4 mg (one spray per nostril); repeat once if needed, max 8 mg." },
        { category: "Naloxone dose – pediatric", question: "What is the pediatric IV/IM naloxone dose?", answer: "0.01 mg/kg (max 0.4 mg)." },
        { category: "Mechanism of naloxone", question: "How does naloxone work?", answer: "Competitive opioid receptor antagonist." },
        { category: "Withdrawal symptoms", question: "What are signs of opioid withdrawal?", answer: "Agitation, nausea, vomiting, diarrhea, tachycardia, hypertension, yawning." },
        { category: "Re-narcotization", question: "Why monitor after naloxone?", answer: "Naloxone half-life is shorter than many opioids; symptoms may recur." },
        { category: "Airway management", question: "What is the priority in opioid overdose?", answer: "Support airway, breathing, and circulation (ventilation before naloxone)." },
        { category: "Pre-oxygenation", question: "Why pre-oxygenate before naloxone?", answer: "To prevent hypoxia if agitation or apnea occurs after reversal." },
        { category: "Co-ingestion", question: "What should you suspect if naloxone is ineffective?", answer: "Co-ingestion of other CNS depressants (alcohol, benzodiazepines) or alternative diagnosis." },
        { category: "Pediatric opioid ingestion", question: "What is the danger of pediatric opioid ingestion?", answer: "Even small amounts can cause fatal respiratory depression." },
        { category: "Risk factors", question: "What increases risk of opioid overdose?", answer: "Loss of tolerance (recent release), long-acting opioids, poly-drug use, history of overdose." },
        { category: "Scene safety", question: "What should you look for on scene?", answer: "Pill bottles, syringes, drug paraphernalia, suicide note, multiple patients." },
        { category: "BVM ventilation", question: "When should BVM be used?", answer: "If respiratory rate <10 or SpO2 <94% despite oxygen." },
        { category: "Naloxone half-life", question: "How long does naloxone last?", answer: "30-60 minutes; shorter than many opioids." },
        { category: "KPI", question: "What is the key performance indicator for opioid overdose?", answer: "Administer naloxone for suspected opioid toxicity." },
        { category: "Transport decision", question: "Should opioid overdose patients be transported?", answer: "Yes, all patients who receive naloxone or have suspected overdose require hospital evaluation." },
        { category: "Agitation after naloxone", question: "What to do if patient becomes agitated after naloxone?", answer: "Ensure scene safety, consider police assistance, and monitor; sedation may be considered if dangerous." },
        { category: "Hypoglycemia", question: "Why check glucose in all overdose patients?", answer: "Hypoglycemia can mimic opioid overdose and is rapidly reversible." },
        { category: "Tele-EMS consultation", question: "When to consult Tele-EMS?", answer: "For complex cases, recurrent overdoses, or if patient refuses transport despite potential risks." }
    ],
    critical: [
        {
            id: "crit_8_2_1",
            scenario: "A 30-year-old male is found unresponsive with a respiratory rate of 6, pinpoint pupils, and track marks on his arms. What is your priority?",
            question: "What should you do first?",
            options: [
                { t: "Administer naloxone 0.4 mg IV", f: "Correct. Opioid overdose is likely; naloxone should be given while supporting ventilation." },
                { t: "Start CPR", f: "Patient has a pulse; CPR is not indicated." },
                { t: "Check blood glucose", f: "Important, but airway and breathing are priority." },
                { t: "Establish IV access", f: "Secondary to ventilation and naloxone." }
            ],
            correct: 0,
            explanation: "Pinpoint pupils and respiratory depression are classic for opioid overdose; naloxone should be given immediately while supporting ventilation.",
            kpi: "Naloxone administered within 1 minute."
        },
        {
            id: "crit_8_2_2",
            scenario: "A 45-year-old female is found unresponsive. She has a respiratory rate of 8 and pinpoint pupils. You administer naloxone 4 mg IN. After 2 minutes, her respiratory rate improves to 14, but she becomes agitated and attempts to pull out her IV. What is the next step?",
            question: "What should you do?",
            options: [
                { t: "Administer another dose of naloxone", f: "Naloxone has already worked; more may worsen agitation." },
                { t: "Calm the patient and ensure scene safety; consider sedation if she is a danger to herself or others", f: "Correct. Agitation is likely withdrawal; ensure safety and consider sedation if needed." },
                { t: "Restrain the patient", f: "Restraint should be a last resort; police may assist." },
                { t: "Transport without further intervention", f: "Agitation requires management." }
            ],
            correct: 1,
            explanation: "Agitation after naloxone is often withdrawal; ensure scene safety, calm the patient, and consider sedation if dangerous.",
            kpi: "Patient managed safely and transported."
        },
        {
            id: "crit_8_2_3",
            scenario: "A 20-year-old male is found unresponsive with a respiratory rate of 4. He has no track marks, but there is an empty bottle of oxycodone beside him. You give naloxone 0.4 mg IV. After 3 minutes, there is no response. What should you do?",
            question: "What is the next step?",
            options: [
                { t: "Give another dose of naloxone", f: "Correct. Repeat naloxone every 2-3 minutes up to 10 mg." },
                { t: "Stop naloxone and consider other causes", f: "Not yet; further doses are warranted." },
                { t: "Perform laryngoscopy", f: "Not indicated." },
                { t: "Transport immediately", f: "Continue resuscitation en route." }
            ],
            correct: 0,
            explanation: "Repeat naloxone every 2-3 minutes; if no response after 10 mg, consider alternative causes.",
            kpi: "Repeat naloxone administered."
        },
        {
            id: "crit_8_2_4",
            scenario: "A 2-year-old child is found playing with a fentanyl patch. The patch is partially torn and appears to have lost some gel. The child is asymptomatic but crying. What should you do?",
            question: "What is the appropriate action?",
            options: [
                { t: "Observe at home", f: "Even asymptomatic exposure can cause delayed respiratory depression." },
                { t: "Transport to hospital urgently", f: "Correct. Opioid patches can cause toxicity even from transdermal exposure; child requires evaluation." },
                { t: "Administer naloxone prophylactically", f: "Not indicated without symptoms; monitor closely en route." },
                { t: "Wash the area and discharge", f: "Unsafe." }
            ],
            correct: 1,
            explanation: "Even small amounts of opioid can be fatal in children; transport for evaluation and monitoring.",
            kpi: "Patient transported."
        },
        {
            id: "crit_8_2_5",
            scenario: "A 35-year-old male with a history of heroin use is found unresponsive. His friend reports he used heroin 30 minutes ago. He is apneic with a pulse. What is the priority?",
            question: "What should you do first?",
            options: [
                { t: "Administer naloxone", f: "Naloxone is indicated, but ventilation is more urgent." },
                { t: "Start BVM ventilation with 100% oxygen", f: "Correct. Apnea requires immediate ventilatory support." },
                { t: "Check blood glucose", f: "Not the priority." },
                { t: "Obtain IV access", f: "Secondary to ventilation." }
            ],
            correct: 1,
            explanation: "Apneic patient requires immediate ventilatory support; naloxone can be given after or simultaneously.",
            kpi: "Ventilation initiated."
        }
    ]
};