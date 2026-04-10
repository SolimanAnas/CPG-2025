/* ========== Chapter 6.11 – Non-Traumatic Shock ========== */
window.CPG_DATA = {
    id: "c6-11",
    title: "Non-Traumatic Shock",
    shortTitle: "6.11 Non-Traumatic Shock",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">?? Non-Traumatic Shock</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Identification and management of life-threatening non-traumatic shock (e.g., hypovolemic, cardiogenic, distributive, or obstructive).</li>
                <li>Improve the patient's hemodynamic status through administration of fluids, vasopressors, and supportive care.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Patients presenting with signs and symptoms of shock which is not related to trauma, including:
                    <ul>
                        <li>Hypotension (SBP &lt;90 mmHg in adults, or age-specific for pediatrics).</li>
                        <li>Tachycardia (HR &gt;100 in adults, or age-specific for pediatrics).</li>
                        <li>Poor perfusion (e.g., cool, clammy skin, delayed capillary refill &gt;2 seconds).</li>
                        <li>Altered mental status, weakness, or respiratory distress.</li>
                    </ul>
                </li>
                <li>Suspected underlying causes such as sepsis, anaphylaxis, cardiogenic shock, or internal bleeding (e.g., gastrointestinal or ectopic pregnancy).</li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>Shock clearly attributable to trauma.</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Shock Type Identification:</strong>
                    <ul>
                        <li>Hypovolemic: History of fluid loss (vomiting, diarrhea, occult bleeding).</li>
                        <li>Cardiogenic: Chest pain, dyspnea, history of heart disease.</li>
                        <li>Distributive: Signs of sepsis (fever, infection) or anaphylaxis (urticaria, wheezing).</li>
                        <li>Obstructive: Symptoms suggestive of pulmonary embolism or pericardial tamponade (e.g., jugular vein distension, muffled heart sounds).</li>
                    </ul>
                </li>
                <li><strong>Perfusion Status:</strong> Skin temperature, color, moisture; capillary refill; mental status; urine output if known.</li>
                <li><strong>Determine Triage Category:</strong> Red priority for any patient with shock.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Primary and Secondary Surveys:</strong> Perform as per Universal Care CPG. Titrate oxygen to maintain SpO2 =94% if hypoxia or respiratory distress.</li>
                <li><strong>Consider ALS back-up:</strong> For all shock patients, especially those requiring vasopressors.</li>
                <li><strong>Establish IV Access:</strong> Indicated for hypotension, suspected shock, or anticipated medication/fluid administration. Consider IO access if IV access cannot be obtained.</li>
                <li><strong>Condition-Specific Treatment:</strong> For septic and anaphylactic shock, refer to appropriate CPG for additional treatment considerations.</li>
                <li><strong>Fluid Resuscitation:</strong>
                    <ul>
                        <li>Fluid administration targets:
                            <ul>
                                <li>Adults: MAP (mean arterial pressure) =65 mmHg.</li>
                                <li>Pediatrics: SBP =5th percentile for age, strong distal pulses, warm skin, capillary refill &lt;2 seconds, improving mental status.</li>
                            </ul>
                        </li>
                        <li>Administer Normal Saline or Ringer's Lactate:
                            <ul>
                                <li>Adults: 250-500 mL bolus IV, repeat as needed (up to 2000 mL).</li>
                                <li>Pediatrics: 20 mL/kg bolus IV, repeat as needed (max 40 mL/kg).</li>
                            </ul>
                        </li>
                        <li>Use caution in obstructive/cardiogenic shock; administer smaller boluses.</li>
                    </ul>
                </li>
                <li><strong>Consider Vasopressors (Dopamine):</strong>
                    <ul>
                        <li>Indications: Fluid-refractory hypotension after fluid resuscitation (once fluid maximums have been reached); hypotension with pulmonary edema (e.g., obstructive/cardiogenic shock).</li>
                        <li>Dopamine: Adults and pediatrics: 5-20 mcg/kg/min IV infusion.</li>
                        <li>Use syringe driver wherever possible.</li>
                    </ul>
                </li>
                <li><strong>Patient Reassessment:</strong> Frequently reassess vital signs, mental status, and perfusion every 5-15 minutes.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li><strong>Elderly Patients:</strong> Shock may present atypically (e.g., confusion, minimal tachycardia due to beta-blocker use). Use caution with fluid boluses in patients with heart failure; consult Tele-EMS for guidance.</li>
                <li><strong>Fluid Resuscitation:</strong> Avoid over-resuscitation in cardiogenic or obstructive shock; monitor for signs of pulmonary edema (e.g., crackles, dyspnea).</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li><strong>Common Causes:</strong>
                    <ul>
                        <li>Hypovolemic: Dehydration, gastrointestinal bleeding, ruptured ectopic pregnancy.</li>
                        <li>Cardiogenic: Myocardial infarction, heart failure, arrhythmias.</li>
                        <li>Distributive: Sepsis, anaphylaxis, neurogenic shock (e.g., spinal cord injury).</li>
                        <li>Obstructive: Pulmonary embolism, pericardial tamponade, tension pneumothorax.</li>
                    </ul>
                </li>
                <li><strong>Possible Alternative Causes:</strong> Traumatic shock, adrenal insufficiency, hypoglycemia, drug overdose (e.g., antihypertensives).</li>
                <li>If the patient is in septic or anaphylactic shock, follow the respective CPG for specific management.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Suspected type of shock, underlying cause, vital signs, mental status, skin perfusion.</li>
                <li>IV access, fluid type and volume administered, response.</li>
                <li>Vasopressor used (dopamine) – dose, rate, response.</li>
                <li>Hospital notification and transport details.</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Administer IV fluid to hypotensive patients.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "Which of the following is a sign of non-traumatic shock?",
            options: ["Hypotension", "Tachycardia", "Altered mental status", "All of the above"],
            correct: 3,
            explanation: "All are signs of shock due to inadequate tissue perfusion."
        },
        {
            q: "What is the initial fluid bolus for an adult with non-traumatic shock?",
            options: ["250 mL", "500-1000 mL", "2000 mL", "No fluids"],
            correct: 1,
            explanation: "Adults should receive 250-500 mL crystalloid bolus (or 500-1000 mL per the CPG), repeated as needed."
        },
        {
            q: "A patient with cardiogenic shock and pulmonary edema should receive:",
            options: ["Aggressive fluid boluses", "Small fluid boluses with caution and consider vasopressors", "No fluids", "Colloids only"],
            correct: 1,
            explanation: "In cardiogenic shock with pulmonary edema, fluids are given cautiously to avoid worsening overload; vasopressors may be needed."
        },
        {
            q: "What is the pediatric fluid bolus for shock?",
            options: ["10 mL/kg", "20 mL/kg", "40 mL/kg", "5 mL/kg"],
            correct: 1,
            explanation: "The initial bolus is 20 mL/kg crystalloid, repeated as needed up to 40 mL/kg total."
        },
        {
            q: "Which vasopressor is used in the DCAS formulary for shock?",
            options: ["Norepinephrine", "Dopamine", "Adrenaline", "Phenylephrine"],
            correct: 1,
            explanation: "Dopamine is the vasopressor listed in the DCAS formulary for shock management."
        },
        {
            q: "What is the dose of dopamine infusion for an adult with shock?",
            options: ["2-5 mcg/kg/min", "5-20 mcg/kg/min", "20-50 mcg/kg/min", "0.5-2 mcg/kg/min"],
            correct: 1,
            explanation: "Dopamine is typically infused at 5-20 mcg/kg/min for its inotropic and vasopressor effects."
        },
        {
            q: "A patient with septic shock has received 2 L normal saline but remains hypotensive. What is the next step?",
            options: ["Give another fluid bolus", "Start dopamine infusion", "Administer adrenaline push", "Transport immediately"],
            correct: 1,
            explanation: "Fluid-refractory septic shock requires vasopressor support; dopamine is indicated."
        },
        {
            q: "Which type of shock is caused by an allergic reaction?",
            options: ["Hypovolemic", "Cardiogenic", "Distributive", "Obstructive"],
            correct: 2,
            explanation: "Anaphylactic shock is a distributive shock due to widespread vasodilation and increased capillary permeability."
        },
        {
            q: "What is the target MAP for an adult in shock?",
            options: [">50 mmHg", ">65 mmHg", ">80 mmHg", ">90 mmHg"],
            correct: 1,
            explanation: "Target MAP is =65 mmHg to maintain organ perfusion."
        },
        {
            q: "A patient with suspected shock has a history of heart failure. How should fluid resuscitation be approached?",
            options: ["Give full boluses as usual", "Give smaller boluses and monitor for signs of overload", "Avoid fluids entirely", "Use only colloids"],
            correct: 1,
            explanation: "Patients with heart failure are at risk for fluid overload; smaller boluses and close monitoring are prudent."
        },
        {
            q: "Which of the following is a cause of obstructive shock?",
            options: ["Myocardial infarction", "Pulmonary embolism", "Sepsis", "Dehydration"],
            correct: 1,
            explanation: "Pulmonary embolism can cause obstructive shock by blocking blood flow out of the right ventricle."
        },
        {
            q: "What is the maximum total fluid bolus for an adult with shock?",
            options: ["500 mL", "1000 mL", "2000 mL", "No maximum"],
            correct: 2,
            explanation: "Up to 2000 mL crystalloid may be given, with reassessment after each bolus."
        },
        {
            q: "A patient with neurogenic shock from spinal cord injury presents with:",
            options: ["Hypotension and bradycardia", "Hypertension and tachycardia", "Hypotension and tachycardia", "Hypertension and bradycardia"],
            correct: 0,
            explanation: "Neurogenic shock causes hypotension and bradycardia due to loss of sympathetic tone."
        },
        {
            q: "What is the target SpO2 for a patient in shock?",
            options: ["=90%", "=94%", "=88%", "100%"],
            correct: 1,
            explanation: "Maintain SpO2 =94% to ensure adequate oxygenation."
        },
        {
            q: "A patient with shock has a blood glucose of 45 mg/dL. What should you do?",
            options: ["Give 50% dextrose", "Give glucagon", "Treat hypoglycemia then reassess", "All of the above"],
            correct: 3,
            explanation: "Hypoglycemia can cause or contribute to shock; treat immediately."
        },
        {
            q: "Which of the following is a sign of poor perfusion?",
            options: ["Capillary refill <2 seconds", "Warm, dry skin", "Delayed capillary refill >2 seconds", "Normal mental status"],
            correct: 2,
            explanation: "Delayed capillary refill (>2 seconds) indicates poor peripheral perfusion."
        },
        {
            q: "What is the preferred fluid for initial resuscitation in shock?",
            options: ["Dextrose 5%", "Normal saline", "Ringer's lactate", "Both B and C"],
            correct: 3,
            explanation: "Isotonic crystalloids (normal saline or Ringer's lactate) are preferred for initial resuscitation."
        },
        {
            q: "A patient with suspected cardiogenic shock has crackles on auscultation. What is the priority?",
            options: ["Give a 500 mL fluid bolus", "Give furosemide", "Consider dopamine and cautious fluids", "Transport without intervention"],
            correct: 2,
            explanation: "In cardiogenic shock with pulmonary edema, fluids are given cautiously and vasopressors may be needed."
        },
        {
            q: "What is the maximum total fluid bolus for a pediatric patient in shock?",
            options: ["20 mL/kg", "40 mL/kg", "60 mL/kg", "80 mL/kg"],
            correct: 1,
            explanation: "The maximum total crystalloid in the prehospital setting is 40 mL/kg (two 20 mL/kg boluses)."
        },
        {
            q: "A patient with shock has a heart rate of 40 and BP 80/50. What type of shock is most likely?",
            options: ["Septic shock", "Cardiogenic shock with bradycardia", "Anaphylactic shock", "Hypovolemic shock"],
            correct: 1,
            explanation: "Bradycardia with hypotension suggests a primary cardiac issue or beta-blocker toxicity, not distributive shock."
        },
        {
            q: "Which of the following is a red flag in a patient with shock?",
            options: ["Altered mental status", "Respiratory distress", "Persistent hypotension despite fluids", "All of the above"],
            correct: 3,
            explanation: "All indicate severe shock requiring immediate intervention."
        },
        {
            q: "What is the role of dopamine in shock?",
            options: ["Vasodilation", "Inotropic and vasopressor effects", "Diuretic effect", "Antiemetic effect"],
            correct: 1,
            explanation: "Dopamine has dose-dependent inotropic (increased contractility) and vasopressor (vasoconstriction) effects."
        },
        {
            q: "A patient with anaphylactic shock has received epinephrine. What is the next step?",
            options: ["Give dopamine", "Give fluid bolus", "Give diphenhydramine", "Transport"],
            correct: 1,
            explanation: "Fluid resuscitation is critical in anaphylactic shock to restore intravascular volume."
        },
        {
            q: "Which of the following is a cause of hypovolemic shock?",
            options: ["Gastrointestinal bleeding", "Diabetic ketoacidosis", "Severe vomiting", "All of the above"],
            correct: 3,
            explanation: "All can lead to significant fluid loss and hypovolemia."
        },
        {
            q: "What is the target SBP for a pediatric patient in shock?",
            options: [">70 mmHg", "=5th percentile for age", ">90 mmHg", ">100 mmHg"],
            correct: 1,
            explanation: "Target is age-appropriate systolic blood pressure (=5th percentile)."
        },
        {
            q: "A patient with shock has a history of renal failure. What is a concern with fluid resuscitation?",
            options: ["Fluid overload", "Electrolyte imbalance", "Pulmonary edema", "All of the above"],
            correct: 3,
            explanation: "Renal impairment increases risk of fluid overload and electrolyte disturbances; monitor closely."
        },
        {
            q: "What is the dose of dopamine infusion for a child with shock?",
            options: ["2-5 mcg/kg/min", "5-20 mcg/kg/min", "0.5-2 mcg/kg/min", "20-40 mcg/kg/min"],
            correct: 1,
            explanation: "Pediatric dopamine dose is the same as adults: 5-20 mcg/kg/min."
        },
        {
            q: "A patient with suspected shock has jugular vein distension and muffled heart sounds. What type of shock is suspected?",
            options: ["Hypovolemic", "Cardiogenic", "Obstructive (cardiac tamponade)", "Distributive"],
            correct: 2,
            explanation: "Beck's triad (hypotension, JVD, muffled heart sounds) is classic for cardiac tamponade, an obstructive shock."
        },
        {
            q: "What is the key performance indicator for non-traumatic shock?",
            options: ["Administer vasopressors", "Administer IV fluid to hypotensive patients", "Perform 12-lead ECG", "Check blood glucose"],
            correct: 1,
            explanation: "Administering IV fluid to hypotensive patients is a key KPI."
        },
        {
            q: "A patient with shock after a myocardial infarction is found to have a BP of 80/50, HR 110, and crackles. What is the appropriate management?",
            options: ["Aggressive fluid bolus", "Cautious fluid and consider inotropes", "Furosemide", "Nitroglycerin"],
            correct: 1,
            explanation: "Cardiogenic shock with pulmonary edema requires careful fluid management and inotropic support (e.g., dopamine)."
        }
    ],
    flashcards: [
        { category: "Definition", question: "What is shock?", answer: "A state of inadequate tissue perfusion leading to cellular dysfunction and organ failure." },
        { category: "Types of shock", question: "What are the four main types of non-traumatic shock?", answer: "Hypovolemic, cardiogenic, distributive, and obstructive." },
        { category: "Hypovolemic shock", question: "What causes hypovolemic shock?", answer: "Loss of intravascular volume from hemorrhage, vomiting, diarrhea, or third-spacing." },
        { category: "Cardiogenic shock", question: "What causes cardiogenic shock?", answer: "Pump failure due to myocardial infarction, heart failure, or arrhythmias." },
        { category: "Distributive shock", question: "What causes distributive shock?", answer: "Widespread vasodilation from sepsis, anaphylaxis, or neurogenic injury." },
        { category: "Obstructive shock", question: "What causes obstructive shock?", answer: "Mechanical obstruction of blood flow (e.g., pulmonary embolism, tamponade, tension pneumothorax)." },
        { category: "Signs of shock", question: "What are common signs of shock?", answer: "Hypotension, tachycardia, altered mental status, cool/clammy skin, delayed capillary refill." },
        { category: "Fluid resuscitation", question: "What is the initial fluid bolus for an adult in shock?", answer: "250-500 mL (or 500-1000 mL) crystalloid, repeated as needed." },
        { category: "Pediatric fluid bolus", question: "What is the pediatric fluid bolus for shock?", answer: "20 mL/kg crystalloid, repeated as needed up to 40 mL/kg total." },
        { category: "Vasopressors", question: "When are vasopressors indicated in shock?", answer: "When hypotension persists despite adequate fluid resuscitation." },
        { category: "Dopamine dose", question: "What is the dose of dopamine infusion?", answer: "5-20 mcg/kg/min IV." },
        { category: "Target MAP", question: "What is the target mean arterial pressure (MAP) in shock?", answer: "=65 mmHg in adults." },
        { category: "Neurogenic shock", question: "What are features of neurogenic shock?", answer: "Hypotension and bradycardia due to loss of sympathetic tone." },
        { category: "Cardiogenic shock with pulmonary edema", question: "How should fluids be given in cardiogenic shock with pulmonary edema?", answer: "Cautiously, with smaller boluses and consideration of vasopressors." },
        { category: "Septic shock", question: "What is the first-line treatment for septic shock?", answer: "Fluid resuscitation and antibiotics (in hospital); vasopressors if fluid-refractory." },
        { category: "Anaphylactic shock", question: "What is the first-line treatment for anaphylactic shock?", answer: "Epinephrine IM, then fluids." },
        { category: "Capillary refill", question: "What is a normal capillary refill time?", answer: "<2 seconds." },
        { category: "Cool, clammy skin", question: "What does cool, clammy skin indicate in shock?", answer: "Sympathetic activation and peripheral vasoconstriction." },
        { category: "KPI", question: "What is the key performance indicator for non-traumatic shock?", answer: "Administer IV fluid to hypotensive patients." },
        { category: "Transport decision", question: "Should all shock patients be transported?", answer: "Yes, all patients with signs of shock require urgent transport to hospital." }
    ],
    critical: [
        {
            id: "crit_6_11_1",
            scenario: "A 50-year-old male with chest pain and diaphoresis is now hypotensive (BP 80/50) with crackles on auscultation. Heart rate 120. What type of shock is most likely?",
            question: "What is the most likely type of shock and appropriate management?",
            options: [
                { t: "Hypovolemic shock; give 1 L fluid bolus", f: "Crackles suggest pulmonary edema, not hypovolemia." },
                { t: "Cardiogenic shock; give cautious fluids and consider dopamine", f: "Correct. This is likely cardiogenic shock from myocardial infarction." },
                { t: "Septic shock; give fluids and dopamine", f: "No signs of infection." },
                { t: "Anaphylactic shock; give epinephrine", f: "No allergen exposure or wheezing." }
            ],
            correct: 1,
            explanation: "Chest pain, hypotension, and pulmonary edema suggest cardiogenic shock; fluids are given cautiously and inotropes may be needed.",
            kpi: "Fluids given cautiously and dopamine considered."
        },
        {
            id: "crit_6_11_2",
            scenario: "A 30-year-old female with abdominal pain and syncope. She is pale, BP 85/50, HR 110. She has a positive pregnancy test. What is the most likely diagnosis?",
            question: "What should you suspect and do?",
            options: [
                { t: "Gastroenteritis; give fluids", f: "Abdominal pain and shock in early pregnancy suggest ectopic pregnancy." },
                { t: "Ectopic pregnancy; give fluids and transport urgently", f: "Correct. Shock in early pregnancy is ectopic until proven otherwise." },
                { t: "Appendicitis; give fluids and transport", f: "Less likely with pregnancy and syncope." },
                { t: "Pyelonephritis; give antibiotics", f: "No fever or dysuria." }
            ],
            correct: 1,
            explanation: "Ectopic pregnancy can cause intra-abdominal hemorrhage and shock; fluid resuscitation and urgent transport are critical.",
            kpi: "IV fluids administered and patient transported."
        },
        {
            id: "crit_6_11_3",
            scenario: "A 65-year-old male with fever, cough, and confusion. BP 80/50, HR 110, RR 28, temperature 39°C. He has received 1 L normal saline with no improvement. What is the next step?",
            question: "What should you do next?",
            options: [
                { t: "Give another 500 mL fluid bolus", f: "Fluid-refractory septic shock requires vasopressors." },
                { t: "Start dopamine infusion", f: "Correct. Vasopressors are indicated after adequate fluids." },
                { t: "Give adrenaline push dose", f: "Adrenaline is an alternative, but dopamine is the vasopressor in the formulary." },
                { t: "Transport without further intervention", f: "Vasopressors should be initiated en route." }
            ],
            correct: 1,
            explanation: "Septic shock with hypotension after 1-2 L fluids requires vasopressor support (dopamine).",
            kpi: "Vasopressor initiated."
        },
        {
            id: "crit_6_11_4",
            scenario: "A 45-year-old male with a history of aortic stenosis presents with syncope and hypotension. He has no chest pain, but has JVD and muffled heart sounds. What is the likely cause?",
            question: "What type of shock is this and what is the priority?",
            options: [
                { t: "Cardiogenic shock; give fluids and dopamine", f: "JVD and muffled sounds suggest tamponade, not pump failure." },
                { t: "Obstructive shock from cardiac tamponade; give fluids and transport urgently", f: "Correct. Beck's triad suggests tamponade; fluids may help temporarily." },
                { t: "Hypovolemic shock; give fluids", f: "No history of fluid loss." },
                { t: "Septic shock; give antibiotics", f: "No signs of infection." }
            ],
            correct: 1,
            explanation: "Beck's triad (hypotension, JVD, muffled heart sounds) is classic for cardiac tamponade, an obstructive shock.",
            kpi: "IV fluids given and transport expedited."
        },
        {
            id: "crit_6_11_5",
            scenario: "A 25-year-old male with a history of spinal cord injury at C5 presents with hypotension (BP 80/50) and bradycardia (HR 50). He is warm and dry. What is the likely diagnosis?",
            question: "What is the appropriate management?",
            options: [
                { t: "Hypovolemic shock; give fluids", f: "No evidence of volume loss; bradycardia is not typical." },
                { t: "Neurogenic shock; give fluids and consider vasopressors", f: "Correct. Loss of sympathetic tone causes hypotension and bradycardia." },
                { t: "Cardiogenic shock; give dopamine", f: "No cardiac history." },
                { t: "Anaphylactic shock; give epinephrine", f: "No allergen exposure." }
            ],
            correct: 1,
            explanation: "Neurogenic shock after spinal injury presents with hypotension and bradycardia; fluid resuscitation and vasopressors may be needed.",
            kpi: "IV fluids administered and patient transported."
        }
    ]
};
};