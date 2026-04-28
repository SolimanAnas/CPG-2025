/* ========== Chapter 9.3 – Pediatric Tachycardia ========== */
window.CPG_DATA = {
    id: "c9-3",
    title: "Pediatric Tachycardia",
    shortTitle: "9.3 Pediatric Tachycardia",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">?? Pediatric Tachycardia</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Rapidly identify tachycardia in infants and children and determine whether it is compromising perfusion or mental status.</li>
                <li>Distinguish between physiologic sinus tachycardia (often a response to stress, pain, or fever) and dangerous tachyarrhythmias requiring intervention.</li>
                <li>Maintain adequate oxygenation, perfusion, and cerebral function.</li>
                <li>Systematically explore and correct potential underlying causes: excessive stimulants, illicit drug use, pre-existing cardiac conditions, cardiac failure, severe infections.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Infants and children =13 years presenting with a heart rate above normal for age, with or without signs of instability.</li>
                <li>Age-specific concerning heart rates: infant (<1 yr) >220 bpm; child (1–10 yrs) >180 bpm; adolescent (>10 yrs) >180 bpm.</li>
                <li>Signs of poor perfusion: altered mental status, weak pulses, hypotension, prolonged capillary refill (>3 seconds), pallor, cyanosis, respiratory distress.</li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>Age-appropriate sinus tachycardia (e.g., due to fever, pain, dehydration) without instability.</li>
                <li>Known chronic arrhythmias in stable condition.</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Primary Survey:</strong> Use the Pediatric Assessment Triangle (PAT) to assess appearance, work of breathing, circulation. Look for evidence of shock or impending cardiac/respiratory arrest.</li>
                <li><strong>Airway & Breathing:</strong> Check for signs of respiratory distress, hypoxia, or failure; auscultate for wheezing, stridor, or silent chest.</li>
                <li><strong>Circulation:</strong> Assess central and peripheral pulses for rate, regularity, strength; capillary refill, skin color, temperature; blood pressure if feasible.</li>
                <li><strong>Heart Rate & Rhythm Assessment:</strong> Count HR for a full minute. Apply ECG to differentiate:
                    <ul>
                        <li>Sinus tachycardia: gradual onset, HR appropriate for age & context, variable R-R interval.</li>
                        <li>Supraventricular tachycardia (SVT): abrupt onset, very high rate (>220 infant, >180 child), narrow QRS, poor perfusion.</li>
                        <li>Ventricular tachycardia (VT): widened QRS, monomorphic or polymorphic.</li>
                    </ul>
                </li>
                <li><strong>Reversible Causes:</strong> Fever, dehydration, pain, hypoxia, anxiety, toxins, metabolic disorders.</li>
                <li><strong>Determine Triage Category:</strong> Red priority for HR >220 in infants or >180 in children with signs of poor perfusion (altered mental status, hypotension, weak pulses, cyanosis, respiratory distress). Yellow priority for HR elevated but stable perfusion, normal mental status, responsive to initial vagal maneuvers.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Consider ALS back-up:</strong> Routinely for pediatric tachycardia with instability.</li>
                <li><strong>Calm and Systematic Approach:</strong> Keep child warm, minimize stress; allow caregiver presence if calming.</li>
                <li><strong>Oxygenation & Ventilation:</strong> Ensure patent airway; administer oxygen titrated to target SpO2 =94% and normocapnia (EtCO2 35-45 mmHg). If respiratory failure or apnea, start BVM ventilation.</li>
                <li><strong>12-Lead ECG:</strong> Perform if possible; continuously monitor rhythm.</li>
                <li><strong>Blood Glucose:</strong> Check and treat hypoglycemia or hyperglycemia as per appropriate CPG.</li>
                <li><strong>IV Access:</strong> Establish if at risk of deterioration or requiring fluid/medication; IO if IV fails.</li>
                <li><strong>Cardiopulmonary Compromise Assessment:</strong>
                    <ul>
                        <li><strong>Stable:</strong> Tachyarrhythmia with adequate perfusion (no significant hypotension, good mental status, warm extremities, normal capillary refill).</li>
                        <li><strong>Unstable:</strong> Tachyarrhythmia with signs of poor perfusion: altered mental status, hypotension, weak/absent peripheral pulses, cool/mottled skin, respiratory distress.</li>
                    </ul>
                </li>
                <li><strong>Stable Tachycardia:</strong>
                    <ul>
                        <li>Narrow-complex (likely sinus tachycardia or SVT):
                            <ul>
                                <li>Assess underlying causes (fever, pain, dehydration, anxiety).</li>
                                <li>If sinus tachycardia: treat underlying cause.</li>
                                <li>If SVT suspected: attempt vagal maneuvers (modified Valsalva, ice water to face).</li>
                                <li>If vagal maneuvers ineffective and IV/IO access available: administer Adenosine.
                                    <ul>
                                        <li>1st dose: 0.1 mg/kg IV/IO rapid push (max 6 mg).</li>
                                        <li>2nd dose: 0.2 mg/kg IV/IO rapid push (max 12 mg).</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>Wide-complex (likely VT):
                            <ul>
                                <li>If rhythm is regular and monomorphic: adenosine may be considered after Tele-EMS consultation (routine administration not recommended).</li>
                                <li>If irregular or polymorphic ? consult expert; avoid adenosine.</li>
                                <li>Prepare for possible deterioration; have cardioversion equipment ready.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><strong>Unstable Tachycardia (with a pulse):</strong>
                    <ul>
                        <li>Narrow-complex (likely SVT):
                            <ul>
                                <li>Consider vagal maneuvers if clinical condition sufficiently stable.</li>
                                <li>If ineffective or too unstable: consider Adenosine (same doses as above).</li>
                                <li>If adenosine fails or child deteriorates: synchronized cardioversion.
                                    <ul>
                                        <li>1st dose: 0.5–1 J/kg; if ineffective: 2 J/kg.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>Wide-complex (likely VT):
                            <ul>
                                <li>Proceed directly to synchronized cardioversion (same doses).</li>
                                <li>If rhythm is regular and monomorphic and child remains stable enough, consider adenosine (after Tele-EMS consultation).</li>
                                <li>Administer sedation if time and stability permit, but do not delay cardioversion.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><strong>Patient Reassessment:</strong> Frequently reassess vital signs, rhythm, response to interventions. Continuous ECG monitoring required.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Avoid delays in cardioversion if the patient is unstable.</li>
                <li>Ensure correct dosing of adenosine and monitor for transient asystole.</li>
                <li>Be prepared to escalate to CPR if interventions fail.</li>
                <li>Minimize patient agitation to reduce cardiac demand.</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li>Pediatric tachycardia is often secondary to hypoxia or shock — address underlying causes promptly.</li>
                <li>If rhythm is unclear, patient deteriorates, or advanced interventions (e.g., cardioversion, advanced airway) may be needed, consult Tele-EMS.</li>
                <li>Differentiate between sinus tachycardia (common with fever, pain, dehydration) and SVT (abrupt onset, often >220 in infants).</li>
                <li>Vagal maneuvers: modified Valsalva (blowing through a syringe) or ice water applied to face (diving reflex) may be effective in infants.</li>
                <li>Sedation for cardioversion: consider midazolam or ketamine if time permits.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Name, age, sex, weight.</li>
                <li>Pediatric tachycardia – specify if stable or unstable, suspected type (SVT, VT, sinus).</li>
                <li>Relevant history: congenital heart disease, recent infection, medications, previous episodes.</li>
                <li>Heart rate and rhythm (trends and response to treatment), blood pressure, SpO2, mental status, skin perfusion.</li>
                <li>Treatment: oxygen, airway support, vagal maneuvers, medications (adenosine – dose & response), cardioversion (energy level & response).</li>
                <li>Allergies, medications given at scene and home meds.</li>
                <li>Background medical history, family history if relevant.</li>
                <li>Time of onset, changes during care, ALS back-up requested, equipment used, Tele-EMS consultation.</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Perform an appropriate intervention (e.g., vagal maneuvers, adenosine, or cardioversion) for unstable tachycardia patients.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What is the concerning heart rate threshold for an infant (<1 year) with possible tachyarrhythmia?",
            options: [">180 bpm", ">200 bpm", ">220 bpm", ">240 bpm"],
            correct: 2,
            explanation: "SVT in infants is typically >220 bpm; sinus tachycardia is usually <220."
        },
        {
            q: "What is the first step in managing a child with tachycardia and signs of poor perfusion?",
            options: ["Adenosine", "Synchronized cardioversion", "Assess airway, breathing, and oxygenation", "Vagal maneuvers"],
            correct: 2,
            explanation: "The primary survey (ABCs) is the priority; treat hypoxia and shock before specific antiarrhythmics."
        },
        {
            q: "A 2-year-old child has a heart rate of 250, is pale, and has weak pulses. What is the most likely rhythm?",
            options: ["Sinus tachycardia", "Supraventricular tachycardia (SVT)", "Ventricular tachycardia", "Atrial fibrillation"],
            correct: 1,
            explanation: "SVT presents with abrupt onset, very high rate, and often narrow QRS."
        },
        {
            q: "What is the initial dose of adenosine for a 10 kg child with SVT?",
            options: ["0.1 mg/kg (1 mg) rapid IV push", "0.2 mg/kg (2 mg) rapid IV push", "0.5 mg/kg", "1 mg/kg"],
            correct: 0,
            explanation: "First dose is 0.1 mg/kg (max 6 mg); second dose 0.2 mg/kg (max 12 mg)."
        },
        {
            q: "A child with unstable tachycardia and poor perfusion has a wide QRS complex. What is the appropriate intervention?",
            options: ["Adenosine", "Synchronized cardioversion", "Amiodarone", "Vagal maneuvers"],
            correct: 1,
            explanation: "Unstable wide-complex tachycardia (presumed VT) should be treated with synchronized cardioversion."
        },
        {
            q: "What is the energy dose for synchronized cardioversion in a child?",
            options: ["0.5-1 J/kg", "2-4 J/kg", "5 J/kg", "10 J/kg"],
            correct: 0,
            explanation: "Initial dose is 0.5-1 J/kg; if ineffective, increase to 2 J/kg."
        },
        {
            q: "What is the target SpO2 for a child with tachycardia?",
            options: ["=90%", "=94%", "=88%", "100%"],
            correct: 1,
            explanation: "Maintain SpO2 =94% to prevent hypoxia."
        },
        {
            q: "A 5-year-old child has a heart rate of 200, is alert, and has warm extremities. The rhythm is narrow complex. What is the first step?",
            options: ["Synchronized cardioversion", "Adenosine", "Vagal maneuvers", "Assess for underlying causes (fever, pain, dehydration)"],
            correct: 3,
            explanation: "Stable narrow-complex tachycardia may be sinus tachycardia; treat underlying cause first."
        },
        {
            q: "What is the dose of adenosine for a second dose in a child?",
            options: ["0.1 mg/kg", "0.2 mg/kg", "0.3 mg/kg", "0.5 mg/kg"],
            correct: 1,
            explanation: "Second dose is 0.2 mg/kg (max 12 mg)."
        },
        {
            q: "Which of the following differentiates sinus tachycardia from SVT?",
            options: ["Abrupt onset/offset", "HR >220 in infant", "Narrow QRS", "All of the above"],
            correct: 3,
            explanation: "SVT often has abrupt onset/offset, very high rate, and narrow QRS."
        },
        {
            q: "A 6-month-old infant has a heart rate of 280 and is lethargic. After opening the airway and giving oxygen, the rhythm persists. What is the next step?",
            options: ["Synchronized cardioversion", "Adenosine", "Vagal maneuvers", "IV fluids"],
            correct: 1,
            explanation: "Stable but persistent SVT may be treated with adenosine; if unstable, cardioversion is indicated."
        },
        {
            q: "What is the maximum single dose of adenosine for a child?",
            options: ["6 mg", "12 mg", "18 mg", "24 mg"],
            correct: 1,
            explanation: "Maximum single dose is 12 mg (0.2 mg/kg up to 12 mg)."
        },
        {
            q: "A child with a wide complex tachycardia is stable. What should you do?",
            options: ["Synchronized cardioversion", "Adenosine (if regular and monomorphic, after consultation)", "Amiodarone", "Vagal maneuvers"],
            correct: 1,
            explanation: "For stable wide-complex tachycardia, adenosine may be considered if the rhythm is regular and monomorphic, but consultation is recommended."
        },
        {
            q: "What is the preferred vagal maneuver in an infant?",
            options: ["Carotid massage", "Modified Valsalva", "Ice water to face", "Coughing"],
            correct: 2,
            explanation: "Ice water applied to the face can elicit the diving reflex and is effective in infants."
        },
        {
            q: "What is the key performance indicator for pediatric tachycardia?",
            options: ["Administer adenosine", "Perform appropriate intervention for unstable tachycardia", "Obtain 12-lead ECG", "Check blood glucose"],
            correct: 1,
            explanation: "The KPI is to perform an appropriate intervention (vagal maneuvers, adenosine, or cardioversion) for unstable tachycardia."
        },
        {
            q: "A child with SVT receives adenosine and develops transient asystole lasting 4 seconds, then sinus rhythm. What should you do?",
            options: ["Start CPR", "Give atropine", "Observe and monitor", "Give another dose of adenosine"],
            correct: 2,
            explanation: "Transient asystole is expected with adenosine; monitor rhythm and support if prolonged."
        },
        {
            q: "What is the pediatric fluid bolus for a child with tachycardia and signs of shock?",
            options: ["5 mL/kg", "10 mL/kg", "20 mL/kg", "40 mL/kg"],
            correct: 2,
            explanation: "Initial fluid bolus is 20 mL/kg isotonic crystalloid."
        },
        {
            q: "A child with a heart rate of 200 and a fever of 39.5°C is alert and has good perfusion. What is the most likely rhythm?",
            options: ["SVT", "Sinus tachycardia", "VT", "Atrial flutter"],
            correct: 1,
            explanation: "Sinus tachycardia is common with fever; treat the underlying fever."
        },
        {
            q: "What is the maximum adenosine dose for an adolescent?",
            options: ["6 mg", "12 mg", "18 mg", "24 mg"],
            correct: 1,
            explanation: "Maximum single dose is 12 mg (same as adult)."
        },
        {
            q: "Why should you avoid excessive vagal maneuvers in a child with suspected SVT?",
            options: ["May cause bradycardia", "May cause hypotension", "May cause respiratory compromise", "No harm"],
            correct: 0,
            explanation: "Excessive vagal stimulation can cause profound bradycardia; use carefully."
        },
        {
            q: "A child with unstable tachycardia has a BP of 80/40 and is lethargic. The rhythm is narrow complex. What is the appropriate action?",
            options: ["Adenosine", "Synchronized cardioversion", "Vagal maneuvers", "IV fluids"],
            correct: 1,
            explanation: "Unstable tachycardia with poor perfusion requires immediate synchronized cardioversion."
        },
        {
            q: "What is the dose of synchronized cardioversion for a child if the initial shock fails?",
            options: ["0.5-1 J/kg", "2 J/kg", "4 J/kg", "5 J/kg"],
            correct: 1,
            explanation: "Second dose is 2 J/kg."
        },
        {
            q: "A child with a wide complex tachycardia is unstable. What is the priority?",
            options: ["Adenosine", "Amiodarone", "Synchronized cardioversion", "Magnesium"],
            correct: 2,
            explanation: "Unstable wide-complex tachycardia requires immediate synchronized cardioversion."
        },
        {
            q: "What is the role of sedation before cardioversion?",
            options: ["Always required", "If time permits and patient stable enough", "Never given", "Only for adults"],
            correct: 1,
            explanation: "Sedation should be given if possible, but do not delay cardioversion for unstable patients."
        },
        {
            q: "A 3-year-old child has a heart rate of 220 and is in SVT. After vagal maneuvers, the rhythm persists. The child is stable. What is the next step?",
            options: ["Repeat vagal maneuvers", "Adenosine 0.1 mg/kg IV", "Synchronized cardioversion", "Amiodarone"],
            correct: 1,
            explanation: "For stable SVT after failed vagal maneuvers, adenosine is indicated."
        },
        {
            q: "What is the target EtCO2 during bag-valve-mask ventilation in a child with tachycardia?",
            options: ["30-35 mmHg", "35-45 mmHg", "45-55 mmHg", ">50 mmHg"],
            correct: 1,
            explanation: "Maintain normocapnia (35-45 mmHg) to avoid cerebral vasoconstriction or vasodilation."
        },
        {
            q: "A child with a known history of Wolff-Parkinson-White syndrome presents with SVT. What medication should be avoided?",
            options: ["Adenosine", "Digoxin", "Verapamil", "Amiodarone"],
            correct: 2,
            explanation: "Verapamil is contraindicated in infants and children with WPW due to risk of ventricular fibrillation."
        },
        {
            q: "What is the maximum total fluid bolus for a child in shock?",
            options: ["20 mL/kg", "40 mL/kg", "60 mL/kg", "80 mL/kg"],
            correct: 2,
            explanation: "Maximum total crystalloid is 60 mL/kg (three 20 mL/kg boluses)."
        },
        {
            q: "A child with SVT receives adenosine and remains in SVT. What is the next step?",
            options: ["Repeat adenosine at 0.2 mg/kg", "Synchronized cardioversion", "Give amiodarone", "Repeat vagal maneuvers"],
            correct: 0,
            explanation: "If the first dose fails, repeat adenosine at 0.2 mg/kg (max 12 mg)."
        },
        {
            q: "What is the dose of epinephrine for a child with bradycardia during resuscitation?",
            options: ["0.01 mg/kg", "0.1 mg/kg", "0.001 mg/kg", "0.5 mg/kg"],
            correct: 0,
            explanation: "Epinephrine for bradycardia with poor perfusion is 0.01 mg/kg IV/IO."
        }
    ],
    flashcards: [
        { category: "Definition", question: "What is pediatric tachycardia?", answer: "Heart rate above normal for age; concerning thresholds: infant >220 bpm, child >180 bpm, adolescent >180 bpm." },
        { category: "Sinus tachycardia", question: "What are features of sinus tachycardia?", answer: "Gradual onset, HR appropriate for condition (fever, pain), variable R-R interval, usually <220 in infants." },
        { category: "SVT", question: "What are features of supraventricular tachycardia?", answer: "Abrupt onset, very high rate (>220 infant, >180 child), narrow QRS, poor perfusion often present." },
        { category: "VT", question: "What are features of ventricular tachycardia?", answer: "Wide QRS, monomorphic or polymorphic, may be stable or unstable." },
        { category: "Initial action", question: "What is the first step in pediatric tachycardia?", answer: "Assess airway, breathing, circulation; correct hypoxia and shock." },
        { category: "Stable SVT", question: "How is stable SVT managed?", answer: "Vagal maneuvers, then adenosine if unsuccessful." },
        { category: "Adenosine dose – child", question: "What is the first dose of adenosine for a child?", answer: "0.1 mg/kg IV/IO rapid push (max 6 mg)." },
        { category: "Adenosine second dose", question: "What is the second dose of adenosine?", answer: "0.2 mg/kg IV/IO (max 12 mg)." },
        { category: "Unstable tachycardia", question: "What is the treatment for unstable tachycardia?", answer: "Synchronized cardioversion (0.5-1 J/kg, then 2 J/kg)." },
        { category: "Cardioversion dose", question: "What is the initial synchronized cardioversion energy dose for a child?", answer: "0.5-1 J/kg." },
        { category: "Vagal maneuvers", question: "What vagal maneuvers can be used in children?", answer: "Modified Valsalva, ice water to face (diving reflex) in infants." },
        { category: "Wide complex stable", question: "How is stable wide-complex tachycardia managed?", answer: "If regular and monomorphic, may consider adenosine (with consultation); otherwise, consult expert." },
        { category: "Sedation", question: "When is sedation used for cardioversion?", answer: "If time and stability permit, to reduce pain and anxiety." },
        { category: "Reversible causes", question: "What are common reversible causes of tachycardia?", answer: "Fever, pain, dehydration, hypoxia, anxiety, toxins, anemia." },
        { category: "KPI", question: "What is the key performance indicator for pediatric tachycardia?", answer: "Perform appropriate intervention (vagal maneuvers, adenosine, cardioversion) for unstable tachycardia." },
        { category: "Fluid resuscitation", question: "What is the fluid bolus for pediatric shock?", answer: "20 mL/kg isotonic crystalloid." },
        { category: "Hypoglycemia", question: "Why check blood glucose in tachycardia?", answer: "Hypoglycemia can cause tachycardia and altered mental status." },
        { category: "WPW contraindication", question: "What medication is contraindicated in WPW with SVT?", answer: "Verapamil (risk of ventricular fibrillation)." },
        { category: "Adenosine side effects", question: "What are common side effects of adenosine?", answer: "Transient asystole, facial flushing, chest tightness, dyspnea." },
        { category: "Transport decision", question: "Should all children with tachycardia be transported?", answer: "Yes, especially if unstable or SVT/VT suspected." }
    ],
    critical: [
        {
            id: "crit_9_3_1",
            scenario: "A 3-year-old child presents with sudden onset of rapid heart rate, is pale, and has weak pulses. Heart rate 280, BP 70/40. What is the priority?",
            question: "What should you do?",
            options: [
                { t: "Vagal maneuvers", f: "May delay definitive treatment; patient is unstable." },
                { t: "Adenosine 0.1 mg/kg IV", f: "May be considered, but cardioversion is faster for unstable patient." },
                { t: "Synchronized cardioversion", f: "Correct. Unstable tachycardia requires immediate cardioversion." },
                { t: "IV fluids", f: "Not the priority." }
            ],
            correct: 2,
            explanation: "Unstable tachycardia with poor perfusion requires immediate synchronized cardioversion.",
            kpi: "Cardioversion performed."
        },
        {
            id: "crit_9_3_2",
            scenario: "A 6-month-old infant has a heart rate of 260, is irritable but has normal blood pressure and capillary refill. What is the appropriate next step after oxygen?",
            question: "What should you do?",
            options: [
                { t: "Synchronized cardioversion", f: "Patient is stable; cardioversion not first-line." },
                { t: "Adenosine 0.1 mg/kg IV", f: "Correct. Stable SVT after vagal maneuvers or as first-line if IV available." },
                { t: "Vagal maneuvers (ice water to face)", f: "Also appropriate; vagal maneuvers may be attempted first." },
                { t: "Amiodarone", f: "Not first-line." }
            ],
            correct: 2,
            explanation: "For stable SVT, vagal maneuvers are safe and often effective; if unsuccessful, adenosine is next.",
            kpi: "Vagal maneuvers attempted."
        },
        {
            id: "crit_9_3_3",
            scenario: "A 5-year-old child with SVT receives adenosine 0.1 mg/kg IV. There is transient asystole for 3 seconds, then the heart rate returns to 200 with narrow complex. What should you do?",
            question: "What is the next step?",
            options: [
                { t: "Give another dose of adenosine", f: "Not yet; assess if conversion occurred." },
                { t: "Repeat adenosine 0.2 mg/kg", f: "The rhythm is still SVT; repeat with higher dose." },
                { t: "Start CPR", f: "Not indicated; asystole was transient." },
                { t: "Observe and consider second dose", f: "Correct. If SVT persists, give second dose." }
            ],
            correct: 3,
            explanation: "Transient asystole is expected; if SVT persists, repeat adenosine at 0.2 mg/kg.",
            kpi: "Second dose of adenosine administered."
        },
        {
            id: "crit_9_3_4",
            scenario: "A 10-year-old child has a heart rate of 220, wide QRS, and is alert with good perfusion. What is the appropriate management?",
            question: "What should you do?",
            options: [
                { t: "Synchronized cardioversion", f: "Patient is stable; consider other options." },
                { t: "Adenosine after Tele-EMS consultation (if regular monomorphic)", f: "Correct. Stable wide-complex tachycardia may be VT or SVT with aberrancy; adenosine can be considered if regular and monomorphic." },
                { t: "Amiodarone", f: "Not first-line." },
                { t: "Lidocaine", f: "Not first-line." }
            ],
            correct: 1,
            explanation: "For stable wide-complex tachycardia, if regular and monomorphic, adenosine may be considered after consultation.",
            kpi: "Tele-EMS consulted and adenosine considered."
        },
        {
            id: "crit_9_3_5",
            scenario: "A 2-year-old child is in SVT with a heart rate of 250. You have attempted ice water to face and two doses of adenosine without success. The child is now becoming lethargic with a BP of 70/40. What should you do?",
            question: "What is the next step?",
            options: [
                { t: "Repeat adenosine", f: "Not after two doses; now unstable." },
                { t: "Synchronized cardioversion", f: "Correct. Unstable patient requires immediate cardioversion." },
                { t: "Amiodarone infusion", f: "Not first-line." },
                { t: "Vagal maneuvers again", f: "Ineffective and patient unstable." }
            ],
            correct: 1,
            explanation: "When stable becomes unstable or after failed adenosine, synchronized cardioversion is indicated.",
            kpi: "Cardioversion performed."
        }
    ]
};