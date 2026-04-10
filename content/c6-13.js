/* ========== Chapter 6.13 – Sickle Cell Crisis ========== */
window.CPG_DATA = {
    id: "c6-13",
    title: "Sickle Cell Crisis",
    shortTitle: "6.13 Sickle Cell Crisis",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">?? Sickle Cell Crisis</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Rapidly identify and assess patients presenting with a sickle cell crisis.</li>
                <li>Manage pain effectively and prevent further sickling events.</li>
                <li>Maintain adequate oxygenation, hydration, and perfusion.</li>
                <li>Identify complications requiring urgent hospital intervention (e.g., acute chest syndrome, stroke).</li>
                <li>Ensure safe and timely transport with appropriate prehospital interventions.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Known diagnosis of Sickle Cell Disease (SCD).</li>
                <li>Presenting with symptoms suggestive of acute vaso-occlusive crisis (VOC), including:
                    <ul>
                        <li>Sudden, severe bone or joint pain.</li>
                        <li>Chest pain or shortness of breath.</li>
                        <li>Abdominal pain.</li>
                        <li>Headache or neurological symptoms (suggestive of stroke).</li>
                        <li>Fever.</li>
                    </ul>
                </li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>Pain from unrelated causes (e.g., trauma) without SCD history.</li>
                <li>Known bleeding disorder unrelated to SCD.</li>
                <li>No signs of crisis or acute complications.</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>General Impression:</strong> Use the Pediatric or Adult Assessment Triangle; look for distress, pallor, respiratory difficulty, or altered mental status.</li>
                <li><strong>Airway & Breathing:</strong> Assess for tachypnea, hypoxia, or signs of acute chest syndrome (cough, chest pain, crackles).</li>
                <li><strong>Circulation:</strong> Check capillary refill, heart rate, blood pressure, and perfusion; look for signs of dehydration or hypotension.</li>
                <li><strong>Pain Assessment:</strong> Assess pain as per Pain Management CPG (0-10 scale, Wong-Baker, FLACC).</li>
                <li><strong>Neurological Assessment:</strong> Evaluate for headache, confusion, focal deficits, or seizure activity (possible stroke).</li>
                <li><strong>History (SAMPLE/OPQRST):</strong> Past similar episodes, baseline functional level; medications (e.g., hydroxyurea, analgesics); last crisis or transfusion; any recent illness or dehydration; fever or infection risk.</li>
                <li><strong>Determine Triage Category:</strong> Red priority for chest pain, respiratory distress, altered mental status, stroke symptoms, or severe pain.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Consider ALS back-up:</strong> For patients with altered mental status, respiratory distress, signs of stroke, or requiring IV opioid management.</li>
                <li><strong>Pain Management:</strong>
                    <ul>
                        <li>Reassure and position for comfort.</li>
                        <li>Administer appropriate analgesia early as per Pain Management CPG.</li>
                        <li>IV analgesics are likely to be required (e.g., IV morphine, IV paracetamol).</li>
                        <li>Avoid delays in pain relief – consider escalation to ALS for opioid administration.</li>
                    </ul>
                </li>
                <li><strong>Oxygen Therapy:</strong> Administer oxygen if SpO2 <94% or signs of respiratory compromise; target SpO2 =94%; avoid hyperoxia.</li>
                <li><strong>IV Access & Fluids:</strong>
                    <ul>
                        <li>Establish IV access.</li>
                        <li>Fluid resuscitation: Indications – signs of dehydration, fever, vomiting, or hypotension.</li>
                        <li>Adults: 250 mL IV bolus, may be repeated if required.</li>
                        <li>Pediatrics: 10-20 mL/kg IV bolus, may be repeated if required.</li>
                        <li>Avoid large-volume fluid boluses unless the patient is hypotensive.</li>
                        <li>If acute chest syndrome is suspected, fluid administration should be minimized and closely monitored.</li>
                        <li>Titrate fluids to improve perfusion rather than normalize blood pressure.</li>
                    </ul>
                </li>
                <li><strong>Monitor for Complications:</strong> Consider alternative causes of pain and symptoms (e.g., acute chest syndrome, stroke, sepsis). Provide additional treatment as per relevant CPG.</li>
                <li><strong>Patient Reassessment:</strong> Frequently reassess vital signs, pain level, and neurological status.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Do not delay pain relief – early treatment improves patient outcomes.</li>
                <li>Avoid aggressive fluid administration in patients with chest pain symptoms (may worsen acute chest syndrome).</li>
                <li>Monitor closely for deterioration (e.g., increasing respiratory rate, reduced GCS).</li>
                <li>Use weight-based dosing; refer to Broselow tape for pediatric patients.</li>
                <li>Avoid causing stress or cold exposure, which may precipitate crisis.</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li>Sickle cell crises are painful and time-sensitive emergencies; early pain relief is critical.</li>
                <li>Many patients have individualized treatment plans; involve caregivers when appropriate.</li>
                <li>Recurrent pain does not mean drug-seeking; treat all reported pain seriously.</li>
                <li>Acute chest syndrome is the most life-threatening complication; recognize and report early (chest pain, cough, hypoxia, fever).</li>
                <li>Fever in a sickle cell patient is always a red flag for possible sepsis.</li>
                <li>If in doubt, consult Tele-EMS or request ALS backup for escalation.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Known diagnosis of SCD, onset of crisis, prior episodes, current medications.</li>
                <li>Pain location, severity (pre- and post-treatment), vital signs, SpO2.</li>
                <li>Fluids administered (type, volume), oxygen, analgesia given (dose, route, time).</li>
                <li>Any complications (acute chest syndrome, stroke signs).</li>
                <li>Response to treatment, hospital notification.</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Assess and document pain using an appropriate pain scale.</li>
                <li>Administer appropriate analgesia within 15 minutes of arrival.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What is the most life-threatening complication of sickle cell crisis?",
            options: ["Vaso-occlusive crisis", "Acute chest syndrome", "Aplastic crisis", "Splenic sequestration"],
            correct: 1,
            explanation: "Acute chest syndrome is a leading cause of death in sickle cell disease and requires immediate recognition and treatment."
        },
        {
            q: "What is the target SpO2 for a patient with sickle cell crisis?",
            options: ["=88%", "=90%", "=94%", "100%"],
            correct: 2,
            explanation: "Maintain SpO2 =94% to prevent hypoxia, which can worsen sickling."
        },
        {
            q: "A patient with sickle cell crisis has chest pain, cough, and fever. What should you suspect?",
            options: ["Vaso-occlusive crisis", "Acute chest syndrome", "Stroke", "Sepsis"],
            correct: 1,
            explanation: "Acute chest syndrome presents with chest pain, fever, cough, and hypoxia; it is a medical emergency."
        },
        {
            q: "What is the initial fluid bolus for an adult with sickle cell crisis and signs of dehydration?",
            options: ["250 mL", "500 mL", "1000 mL", "No fluids"],
            correct: 0,
            explanation: "Adults should receive a 250 mL bolus of normal saline; avoid large volumes unless hypotensive."
        },
        {
            q: "A child with sickle cell crisis has a fever of 39°C. What should you consider?",
            options: ["Normal for crisis", "Possible infection or sepsis; transport urgently", "Give paracetamol and monitor", "No action needed"],
            correct: 1,
            explanation: "Fever in sickle cell patients is a red flag for sepsis; they are functionally asplenic and at high risk for serious bacterial infection."
        },
        {
            q: "Which analgesic is appropriate for severe pain in sickle cell crisis?",
            options: ["Paracetamol", "Ibuprofen", "Morphine IV", "Aspirin"],
            correct: 2,
            explanation: "Severe pain requires strong opioids; IV morphine is indicated."
        },
        {
            q: "What is the pediatric fluid bolus for a child with sickle cell crisis and signs of dehydration?",
            options: ["5 mL/kg", "10-20 mL/kg", "30 mL/kg", "40 mL/kg"],
            correct: 1,
            explanation: "Pediatric bolus is 10-20 mL/kg, repeated if needed, but avoid aggressive fluids if chest symptoms present."
        },
        {
            q: "A patient with sickle cell crisis presents with sudden severe headache and left-sided weakness. What should you suspect?",
            options: ["Vaso-occlusive crisis", "Acute chest syndrome", "Stroke", "Migraine"],
            correct: 2,
            explanation: "Stroke is a complication of sickle cell disease; any focal neurological deficit requires urgent evaluation."
        },
        {
            q: "Why should aggressive fluid resuscitation be avoided in a patient with suspected acute chest syndrome?",
            options: ["It may worsen pulmonary edema", "It causes hyponatremia", "It precipitates more sickling", "It delays pain relief"],
            correct: 0,
            explanation: "Excessive fluids can exacerbate pulmonary edema in acute chest syndrome; titrate carefully."
        },
        {
            q: "What is the mechanism of pain in vaso-occlusive crisis?",
            options: ["Inflammation of joints", "Ischemia due to sickled cells blocking blood vessels", "Bone infarction", "Muscle spasm"],
            correct: 1,
            explanation: "Sickled red blood cells obstruct microvasculature, causing ischemia and severe pain."
        },
        {
            q: "A patient with sickle cell crisis is on hydroxyurea. What does this indicate?",
            options: ["They have mild disease", "They are at risk for infection", "They are on disease-modifying therapy to reduce crises", "They need immediate transfusion"],
            correct: 2,
            explanation: "Hydroxyurea reduces the frequency of vaso-occlusive crises and acute chest syndrome."
        },
        {
            q: "What is the first-line pain medication for moderate pain in sickle cell crisis?",
            options: ["Morphine", "Paracetamol IV", "Diclofenac", "Pethidine"],
            correct: 1,
            explanation: "IV paracetamol is an option for moderate pain; severe pain requires opioids."
        },
        {
            q: "A patient with sickle cell crisis has a respiratory rate of 30 and SpO2 88%. What should you do?",
            options: ["Administer oxygen and transport urgently", "Give morphine for pain", "Apply CPAP", "Reassess in 5 minutes"],
            correct: 0,
            explanation: "Hypoxia and tachypnea suggest acute chest syndrome; oxygen and urgent transport are needed."
        },
        {
            q: "Which of the following is a red flag in sickle cell crisis?",
            options: ["Bone pain", "Joint swelling", "Fever >38.5°C", "Mild dehydration"],
            correct: 2,
            explanation: "Fever indicates possible infection; sickle cell patients are at high risk for sepsis."
        },
        {
            q: "What is the maximum total fluid bolus for an adult with sickle cell crisis?",
            options: ["250 mL", "500 mL", "1000 mL", "2000 mL"],
            correct: 1,
            explanation: "Unless hypotensive, avoid large volumes; 500 mL total is generally sufficient in the prehospital setting."
        },
        {
            q: "A child with sickle cell crisis is lethargic and has a fever. What is the priority?",
            options: ["Give oral fluids", "Administer paracetamol", "Rapid transport for possible sepsis", "Start IV fluids"],
            correct: 2,
            explanation: "Lethargy with fever suggests possible sepsis; transport immediately."
        },
        {
            q: "Which complication of sickle cell disease may present with sudden pallor, tachycardia, and splenomegaly?",
            options: ["Acute chest syndrome", "Splenic sequestration", "Aplastic crisis", "Stroke"],
            correct: 1,
            explanation: "Splenic sequestration is pooling of blood in the spleen, causing acute anemia and shock."
        },
        {
            q: "What is the dose of morphine for an adult with severe pain from sickle cell crisis?",
            options: ["2.5 mg IV increments", "10 mg IV push", "5 mg IM", "0.1 mg/kg"],
            correct: 0,
            explanation: "Morphine should be titrated in 2.5 mg IV increments every 5-10 minutes."
        },
        {
            q: "Why should you avoid cold exposure in a patient with sickle cell crisis?",
            options: ["It causes shivering", "It can precipitate sickling", "It increases pain", "All of the above"],
            correct: 3,
            explanation: "Cold causes vasoconstriction and can trigger sickling, worsening pain and ischemia."
        },
        {
            q: "A patient with sickle cell crisis has a history of previous acute chest syndrome. What should you monitor closely?",
            options: ["Respiratory status and SpO2", "Blood pressure", "Urine output", "Pain level"],
            correct: 0,
            explanation: "Patients with prior acute chest syndrome are at risk for recurrence; monitor oxygenation and breathing."
        },
        {
            q: "What is the role of incentive spirometry in sickle cell crisis?",
            options: ["Not applicable prehospital", "Hospital intervention to prevent atelectasis", "Used for pain management", "Given by EMS"],
            correct: 0,
            explanation: "Incentive spirometry is a hospital intervention; not part of prehospital care."
        },
        {
            q: "A patient with sickle cell crisis and abdominal pain. What differential should you consider?",
            options: ["Vaso-occlusion", "Acute chest syndrome", "Cholecystitis (gallstones)", "All of the above"],
            correct: 3,
            explanation: "Abdominal pain can be due to vaso-occlusion, gallstones (common in SCD), or acute chest syndrome with referred pain."
        },
        {
            q: "What is the preferred IV fluid for a patient with sickle cell crisis?",
            options: ["Dextrose 5%", "Normal saline", "Ringer's lactate", "Colloids"],
            correct: 1,
            explanation: "Isotonic crystalloid (normal saline) is preferred; avoid hypotonic fluids."
        },
        {
            q: "A patient with sickle cell crisis has a pain score of 8/10 and BP 100/70. What is the appropriate analgesic?",
            options: ["Paracetamol IV", "Morphine IV", "Diclofenac IM", "Methoxyflurane"],
            correct: 1,
            explanation: "Severe pain requires strong opioids; morphine is indicated."
        },
        {
            q: "Which of the following is NOT a common trigger for sickle cell crisis?",
            options: ["Dehydration", "Infection", "Hypoxia", "Hyperglycemia"],
            correct: 3,
            explanation: "Hyperglycemia is not a typical trigger; triggers include dehydration, infection, hypoxia, stress, cold, and acidosis."
        },
        {
            q: "A child with sickle cell crisis has a fever of 38.5°C and is vomiting. What is the priority?",
            options: ["Give oral fluids", "Administer paracetamol", "Start IV fluids and transport", "Give antiemetic"],
            correct: 2,
            explanation: "Fever plus vomiting increases dehydration risk; IV fluids and urgent transport are needed."
        },
        {
            q: "What is the key performance indicator for sickle cell crisis?",
            options: ["Administer oxygen to all patients", "Assess and document pain using an appropriate scale", "Give IV fluids", "Perform 12-lead ECG"],
            correct: 1,
            explanation: "Pain assessment and documentation is a key KPI; timely analgesia is also critical."
        },
        {
            q: "A patient with sickle cell crisis develops priapism. What should you do?",
            options: ["Apply ice", "Administer pain relief and transport", "Give fluids", "All of the above"],
            correct: 3,
            explanation: "Priapism is a painful complication; supportive care and prompt transport are needed to prevent long-term damage."
        },
        {
            q: "What is the maximum 24-hour dose of hydroxyurea?",
            options: ["Not relevant prehospital", "35 mg/kg", "1000 mg", "2000 mg"],
            correct: 0,
            explanation: "Hydroxyurea dosing is not relevant to prehospital care; focus on acute management."
        },
        {
            q: "Why is early pain relief critical in sickle cell crisis?",
            options: ["Prevents psychological trauma", "Reduces risk of acute chest syndrome", "Prevents chronic pain syndrome", "All of the above"],
            correct: 3,
            explanation: "Early, aggressive pain management improves outcomes and reduces complications."
        }
    ],
    flashcards: [
        { category: "Definition", question: "What is sickle cell disease?", answer: "Genetic disorder causing abnormal hemoglobin S, leading to sickling of red blood cells, hemolysis, and vaso-occlusion." },
        { category: "Vaso-occlusive crisis", question: "What is a vaso-occlusive crisis?", answer: "Painful episode caused by sickled cells blocking blood vessels, leading to tissue ischemia." },
        { category: "Acute chest syndrome", question: "What is acute chest syndrome?", answer: "Life-threatening complication with chest pain, fever, cough, hypoxia, and new pulmonary infiltrates." },
        { category: "Stroke in SCD", question: "How common is stroke in sickle cell disease?", answer: "Stroke occurs in about 10% of children with SCD; risk is highest in early childhood." },
        { category: "Splenic sequestration", question: "What is splenic sequestration?", answer: "Rapid enlargement of the spleen due to pooling of blood, causing acute anemia and shock." },
        { category: "Triggers", question: "What are common triggers of sickle cell crisis?", answer: "Dehydration, infection, hypoxia, cold, stress, acidosis, strenuous exercise." },
        { category: "Pain management", question: "What is the first-line treatment for severe pain in sickle cell crisis?", answer: "IV opioids (morphine) titrated to effect." },
        { category: "Oxygen target", question: "What is the target SpO2 in sickle cell crisis?", answer: "=94% to prevent hypoxia-induced sickling." },
        { category: "Fluid resuscitation", question: "What is the fluid of choice for sickle cell crisis?", answer: "Normal saline (0.9% sodium chloride) – isotonic." },
        { category: "Fluid volume", question: "What is the initial fluid bolus for an adult with sickle cell crisis?", answer: "250 mL normal saline; repeat if needed but avoid overload, especially if chest symptoms." },
        { category: "Pediatric fluid", question: "What is the initial fluid bolus for a child with sickle cell crisis?", answer: "10-20 mL/kg normal saline." },
        { category: "Fever in SCD", question: "Why is fever a red flag in sickle cell disease?", answer: "Functional asplenia increases risk of overwhelming sepsis; fever requires urgent evaluation." },
        { category: "Acute chest syndrome signs", question: "What are signs of acute chest syndrome?", answer: "Chest pain, fever, cough, tachypnea, hypoxia, crackles on auscultation." },
        { category: "Stroke signs", question: "What are signs of stroke in sickle cell disease?", answer: "Sudden headache, facial droop, unilateral weakness, speech difficulty, altered mental status." },
        { category: "Priapism", question: "What is priapism in sickle cell disease?", answer: "Painful, prolonged erection due to vaso-occlusion; requires prompt management." },
        { category: "Hydroxyurea", question: "What is hydroxyurea used for in SCD?", answer: "Disease-modifying therapy that reduces frequency of crises and acute chest syndrome." },
        { category: "KPI", question: "What are key performance indicators for sickle cell crisis?", answer: "Assess and document pain using appropriate scale; administer appropriate analgesia within 15 minutes." },
        { category: "Pediatric considerations", question: "What is unique about pediatric sickle cell crisis?", answer: "Higher risk of stroke, splenic sequestration, and serious infections; use Broselow tape for weight-based dosing." },
        { category: "Elderly considerations", question: "Can elderly patients have sickle cell crisis?", answer: "Sickle cell disease is lifelong; older adults may have chronic complications like pulmonary hypertension, renal failure, and avascular necrosis." },
        { category: "Transport decision", question: "Should all sickle cell crisis patients be transported?", answer: "Yes, unless it is a mild, self-limited pain episode in a patient with a known plan and no red flags; typically transport for evaluation." }
    ],
    critical: [
        {
            id: "crit_6_13_1",
            scenario: "A 25-year-old with known sickle cell disease presents with severe bilateral leg pain (9/10). He is afebrile, BP 120/70, HR 100, SpO2 98%. What is your priority?",
            question: "What should you do first?",
            options: [
                { t: "Administer paracetamol 1 g PO", f: "Inadequate for severe pain." },
                { t: "Administer morphine 2.5 mg IV and transport", f: "Correct. Severe pain requires IV opioids." },
                { t: "Give 250 mL normal saline bolus", f: "Fluids are important but pain relief is the priority." },
                { t: "Transport without analgesia", f: "Unacceptable; pain relief should be provided." }
            ],
            correct: 1,
            explanation: "Severe pain in sickle cell crisis requires prompt opioid analgesia; IV morphine is indicated.",
            kpi: "Analgesia administered within 15 minutes."
        },
        {
            id: "crit_6_13_2",
            scenario: "A 10-year-old with sickle cell disease presents with fever (39°C), cough, and chest pain. He is tachypneic with SpO2 91% on room air. What should you suspect?",
            question: "What is the most likely diagnosis and next step?",
            options: [
                { t: "Vaso-occlusive crisis; give morphine", f: "Chest pain, fever, and hypoxia suggest acute chest syndrome." },
                { t: "Acute chest syndrome; administer oxygen, establish IV access, and transport urgently", f: "Correct. This is a medical emergency." },
                { t: "Pneumonia; give antibiotics", f: "Antibiotics not available prehospital; oxygen and transport are priority." },
                { t: "Stroke; perform BEFAST", f: "No focal neurological deficits." }
            ],
            correct: 1,
            explanation: "Fever, chest pain, cough, and hypoxia in a sickle cell patient are classic for acute chest syndrome, which can rapidly progress.",
            kpi: "Oxygen administered and patient transported."
        },
        {
            id: "crit_6_13_3",
            scenario: "A 30-year-old with sickle cell disease has severe abdominal pain and is vomiting. He is hypotensive (BP 85/50) and tachycardic (HR 120). What should you consider?",
            question: "What is the likely cause and management?",
            options: [
                { t: "Vaso-occlusive crisis; give fluids and morphine", f: "Hypotension with abdominal pain may indicate splenic sequestration or other complication." },
                { t: "Splenic sequestration or acute abdomen; give fluid bolus and transport urgently", f: "Correct. Hypotension suggests significant volume loss." },
                { t: "Gastroenteritis; give antiemetic", f: "Inadequate; patient is in shock." },
                { t: "Acute chest syndrome; give oxygen", f: "No respiratory symptoms." }
            ],
            correct: 1,
            explanation: "Hypotension in sickle cell crisis may be due to splenic sequestration, aplastic crisis, or other acute abdomen; fluid resuscitation and urgent transport are critical.",
            kpi: "IV fluids administered and transport expedited."
        },
        {
            id: "crit_6_13_4",
            scenario: "A 40-year-old with sickle cell disease is found with slurred speech and right-sided weakness. BP 140/90, HR 100, SpO2 95%. What is the priority?",
            question: "What should you do?",
            options: [
                { t: "Administer aspirin", f: "Not indicated; may increase risk of bleeding." },
                { t: "Perform BEFAST, give oxygen, and transport urgently to stroke-capable facility", f: "Correct. This is a stroke in sickle cell disease." },
                { t: "Give morphine for pain", f: "No pain reported; stroke is priority." },
                { t: "Give fluids", f: "Stroke requires evaluation; fluids alone are insufficient." }
            ],
            correct: 1,
            explanation: "Focal neurological deficits in sickle cell disease indicate stroke until proven otherwise; urgent transport to a stroke centre is needed.",
            kpi: "Stroke assessment performed and patient transported."
        },
        {
            id: "crit_6_13_5",
            scenario: "A 15-year-old with sickle cell crisis has received morphine 2.5 mg IV for severe pain. Fifteen minutes later, the patient becomes drowsy with a respiratory rate of 8 and SpO2 88%. What should you do?",
            question: "What is your immediate action?",
            options: [
                { t: "Administer naloxone", f: "Correct. Opioid-induced respiratory depression requires reversal." },
                { t: "Give oxygen and stimulate patient", f: "Supportive, but naloxone is indicated." },
                { t: "Administer more morphine", f: "Contraindicated." },
                { t: "Transport immediately", f: "Reversal and airway support should be provided first." }
            ],
            correct: 0,
            explanation: "Opioid overdose with respiratory depression requires naloxone administration and ventilatory support.",
            kpi: "Naloxone administered and airway supported."
        }
    ]
};