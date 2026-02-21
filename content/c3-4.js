/* ========== Chapter 3.4 – Acute Pulmonary Edema ========== */
window.CPG_DATA = {
    id: "c3-4",
    title: "Acute Pulmonary Edema",
    shortTitle: "3.4 Acute Pulmonary Edema",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">🫁 Acute Pulmonary Edema</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Stabilize patients presenting with pulmonary edema.</li>
                <li>Enhance oxygenation and ventilation.</li>
                <li>Provide CPAP to moderate and severe cases.</li>
                <li>Identify and address underlying causes (e.g., ACS, fluid overload).</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <p>Patients with a provisional diagnosis of pulmonary edema.</p>

            <h4>Exclusion Criteria</h4>
            <p>Difficulty of breathing secondary to another cause (e.g., asthma, COPD).</p>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Respiratory assessment:</strong> Common signs include dyspnoea on exertion or when lying down, wheezing, coughing, pink sputum/haemoptysis, chest pain, cyanosis/pallor/anxiety, tachycardia, hypotension, crackles on auscultation.</li>
                <li><strong>Severity determination:</strong> Mild, moderate, or severe based on general appearance, respiratory rate, work of breathing, words per breath, air movement, SpO₂.</li>
                <li><strong>Consider alternative causes:</strong> Pneumonia, ARDS.</li>
                <li><strong>Cardiac assessment:</strong> 12‑lead ECG to include or exclude concurrent STEMI or arrhythmia.</li>
                <li><strong>Triage category:</strong> As per Patient Triage Categories CPG. Red priority if severe distress, hypoxia, or haemodynamic instability.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Consider ALS back‑up</strong> – for severe cases, or in moderate cases where CPAP is not available.</li>
                <li><strong>Position the patient</strong> – seated with head and torso elevated as much as possible; feet and legs dependent.</li>
                <li><strong>Administer oxygen</strong> – titrate to maintain SpO₂ ≥92%.</li>
                <li><strong>Consider Tele‑EMS consultation</strong> – if diagnosis unclear or to confirm CPAP settings.</li>
                <li><strong>GTN (Glyceryl Trinitrate)</strong> – if SBP >100 mmHg: 0.4 mg SL every 5 minutes (max 3 doses).</li>
                <li><strong>CPAP (Continuous Positive Airway Pressure)</strong> – initiate if SpO₂ <90% on room air or obvious respiratory distress. Start at 5 cmH₂O and increase as tolerated. Provide reassurance; do not remove mask for oral medications if good seal is achieved.</li>
                <li><strong>BiPAP (Bilevel Positive Airway Pressure)</strong> – if inspiratory support is required: IPAP 10 cmH₂O, EPAP 5–10 cmH₂O.</li>
                <li><strong>Furosemide</strong> – only for patients with signs of fluid overload. Dose: 40 mg IV/IO. Routine administration is not recommended.</li>
                <li><strong>Salbutamol</strong> – if CPAP is available, administer nebulized salbutamol via the CPAP mask. If no CPAP, a single dose of 5 mg nebulized may be given; repeat after 10–15 minutes only if respiratory function improves. If no improvement, no further doses.</li>
                <li><strong>If cardiac chest pain or STEMI</strong> – treat as per Chest Pain / ACS CPG.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Monitor for signs of fluid overload before administering furosemide.</li>
                <li>Request ALS back‑up for moderate, severe, or deteriorating patients.</li>
                <li>Ensure proper mask fit for CPAP/BiPAP; coach the patient to reduce claustrophobia.</li>
                <li>Avoid removing CPAP mask for oral medications if a good seal is achieved.</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li>Attaining a proper mask fit is key to effective pressure delivery.</li>
                <li>Consider starting with a lower pressure (5 cmH₂O) and increase as the patient becomes comfortable.</li>
                <li>Do not delay transport in severe cases; continue CPAP en route.</li>
                <li>Salbutamol should be given via CPAP mask if possible to ensure delivery.</li>
                <li>Furosemide should be reserved for definite fluid overload; avoid in hypovolaemic patients.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Identification, mechanism (suspected cause), injuries/illness, signs (cyanosis, crackles), vital signs, SpO₂, ECG findings.</li>
                <li>Treatment: oxygen, GTN doses, CPAP/BiPAP use, furosemide, salbutamol, response to interventions.</li>
                <li>Allergies, medications, background, other (e.g., Tele‑EMS consultation).</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Apply CPAP/BiPAP for all severe pulmonary edema patients.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What is a common symptom of acute pulmonary edema?",
            options: ["Frothy pink sputum", "Productive cough with green sputum", "Stridor", "Unilateral leg swelling"],
            correct: 0,
            explanation: "Pink, frothy sputum is classic for pulmonary edema due to transudation of fluid into the alveoli."
        },
        {
            q: "Which position is recommended for a patient with acute pulmonary edema?",
            options: ["Supine", "Left lateral recumbent", "Sitting upright with legs dependent", "Trendelenburg"],
            correct: 2,
            explanation: "Sitting upright with legs dependent reduces venous return (preload) and helps improve breathing."
        },
        {
            q: "What is the target SpO₂ for a patient with acute pulmonary edema?",
            options: ["88‑92%", "≥92%", "100%", "94‑98%"],
            correct: 1,
            explanation: "Oxygen should be titrated to maintain SpO₂ ≥92% to avoid both hypoxia and hyperoxia."
        },
        {
            q: "When should GTN be administered in acute pulmonary edema?",
            options: ["SBP >100 mmHg", "SBP <90 mmHg", "HR <50 bpm", "All patients"],
            correct: 0,
            explanation: "GTN is indicated if SBP >100 mmHg. It reduces preload and afterload, relieving pulmonary congestion."
        },
        {
            q: "What is the dose and route of GTN for acute pulmonary edema?",
            options: ["0.4 mg SL every 5 minutes (max 3 doses)", "0.4 mg IV bolus", "5 mg nebulized", "10 mg PO"],
            correct: 0,
            explanation: "GTN 0.4 mg sublingual (spray or tablet) every 5 minutes, up to three doses, as long as SBP remains >100 mmHg."
        },
        {
            q: "What is the initial CPAP pressure setting recommended for acute pulmonary edema?",
            options: ["5 cmH₂O", "10 cmH₂O", "15 cmH₂O", "20 cmH₂O"],
            correct: 0,
            explanation: "Start at 5 cmH₂O and increase as tolerated to improve patient comfort and compliance."
        },
        {
            q: "What is an absolute contraindication to CPAP?",
            options: ["Hypoxia", "Tachypnoea", "Unconscious patient", "Hypertension"],
            correct: 2,
            explanation: "CPAP requires a conscious, cooperative patient who can protect their airway. Unconsciousness/apnoea is an absolute contraindication."
        },
        {
            q: "A patient with pulmonary edema is on CPAP and needs GTN. What should you do?",
            options: ["Remove CPAP mask to give GTN", "Give GTN through the CPAP mask if there is a port", "Wait until CPAP is discontinued", "Give IM GTN"],
            correct: 1,
            explanation: "Do not remove the CPAP mask if a good seal is achieved. Use a medication port if available, or briefly break the seal to administer SL GTN."
        },
        {
            q: "When is furosemide indicated in acute pulmonary edema?",
            options: ["All patients with pulmonary edema", "Only if signs of fluid overload are present", "Only if SBP <90 mmHg", "Routinely with every CPAP patient"],
            correct: 1,
            explanation: "Furosemide should only be given to patients with definite signs of fluid overload (e.g., JVD, oedema). Routine administration is not recommended."
        },
        {
            q: "What is the dose of furosemide for an adult with fluid overload?",
            options: ["20 mg IV", "40 mg IV", "80 mg IV", "100 mg IV"],
            correct: 1,
            explanation: "The initial dose is 40 mg IV/IO. May be repeated based on response and hospital guidance."
        },
        {
            q: "What is the role of salbutamol in acute pulmonary edema?",
            options: ["First‑line treatment", "Only if wheezing is present", "Routine administration with CPAP", "Contraindicated"],
            correct: 1,
            explanation: "Salbutamol may be given if bronchospasm/wheezing is present. If CPAP is used, administer via nebulizer integrated with CPAP."
        },
        {
            q: "If CPAP is not available, how should salbutamol be given?",
            options: ["IV bolus", "Single nebulized dose (5 mg)", "Continuous nebulization", "Not given"],
            correct: 1,
            explanation: "A single dose of nebulized salbutamol 5 mg may be given; repeat only if there is clear improvement. No improvement indicates no further doses."
        },
        {
            q: "What is the initial BiPAP setting for acute pulmonary edema?",
            options: ["IPAP 5, EPAP 5", "IPAP 10, EPAP 5‑10", "IPAP 15, EPAP 5", "IPAP 20, EPAP 10"],
            correct: 1,
            explanation: "Initial BiPAP settings are IPAP 10 cmH₂O and EPAP 5‑10 cmH₂O, titrated to clinical response."
        },
        {
            q: "Which ECG finding may accompany acute pulmonary edema?",
            options: ["STEMI", "Atrial fibrillation", "Left ventricular hypertrophy", "All of the above"],
            correct: 3,
            explanation: "Pulmonary edema can be caused by or associated with various cardiac abnormalities; a 12‑lead ECG should be obtained to identify STEMI or arrhythmias."
        },
        {
            q: "What is a sign of severe respiratory distress in pulmonary edema?",
            options: ["Speaking in full sentences", "Accessory muscle use", "SpO₂ 95%", "Lying flat comfortably"],
            correct: 1,
            explanation: "Accessory muscle use, inability to speak, and hypoxia indicate severe distress requiring immediate intervention."
        },
        {
            q: "A patient with pulmonary edema has SBP 85 mmHg and is diaphoretic. What should you do?",
            options: ["Give GTN", "Start CPAP", "Give fluid bolus cautiously and consider inotropes", "Give furosemide"],
            correct: 2,
            explanation: "Hypotension in pulmonary edema may indicate cardiogenic shock. GTN is contraindicated. Cautious fluid may help if hypovolaemic, but often inotropes/pressors are needed. CPAP may still be used but monitor BP closely."
        },
        {
            q: "Why is CPAP effective in pulmonary edema?",
            options: ["Increases preload", "Decreases intrathoracic pressure", "Increases alveolar pressure, reducing transudation", "Stimulates diuresis"],
            correct: 2,
            explanation: "CPAP increases alveolar pressure, opposing hydrostatic pressure and reducing fluid transudation into alveoli. It also reduces preload and afterload."
        },
        {
            q: "What is the maximum number of GTN doses that can be given prehospital?",
            options: ["1", "2", "3", "Unlimited"],
            correct: 2,
            explanation: "Up to three doses (total 1.2 mg) may be given, provided SBP remains ≥100 mmHg."
        },
        {
            q: "A patient on CPAP becomes hypotensive. What should you consider?",
            options: ["Increase CPAP pressure", "Remove CPAP", "Check for tension pneumothorax", "Give furosemide"],
            correct: 2,
            explanation: "Hypotension in a patient on CPAP may indicate tension pneumothorax, especially if associated with respiratory distress or tracheal deviation."
        },
        {
            q: "Which of the following is NOT a typical finding in pulmonary edema?",
            options: ["Crackles on auscultation", "Peripheral oedema", "Pleuritic chest pain", "Jugular venous distension"],
            correct: 2,
            explanation: "Pleuritic chest pain is more typical of pericarditis or pulmonary embolism; pulmonary edema usually presents with dull, retrosternal discomfort or no pain."
        },
        {
            q: "How should you reassess a patient with pulmonary edema after starting CPAP?",
            options: ["Check SpO₂ and respiratory rate every 5 minutes", "Wait 20 minutes before reassessing", "Remove CPAP to auscultate", "Only reassess if patient deteriorates"],
            correct: 0,
            explanation: "Frequent reassessment of vital signs, SpO₂, and clinical status is essential to gauge response to therapy."
        },
        {
            q: "What is the preferred route for furosemide administration?",
            options: ["Oral", "Sublingual", "IV/IO", "IM"],
            correct: 2,
            explanation: "IV/IO is preferred for rapid onset in acute pulmonary edema."
        },
        {
            q: "A patient with known renal failure presents with pulmonary edema. What medication should be used with caution?",
            options: ["GTN", "Furosemide", "Salbutamol", "CPAP"],
            correct: 1,
            explanation: "Furosemide may be less effective in renal failure and can cause ototoxicity; use cautiously and monitor response."
        },
        {
            q: "What is the mechanism of action of GTN in pulmonary edema?",
            options: ["Positive inotropy", "Vasodilation (reduces preload and afterload)", "Bronchodilation", "Diuresis"],
            correct: 1,
            explanation: "GTN dilates veins (reducing preload) and arteries (reducing afterload), decreasing the workload of the heart and pulmonary congestion."
        },
        {
            q: "A patient with pulmonary edema has a 12‑lead ECG showing ST elevation in leads II, III, aVF. What should you do?",
            options: ["Treat as inferior STEMI and follow ACS CPG", "Give only CPAP", "Avoid GTN", "Both A and C"],
            correct: 3,
            explanation: "This is an inferior STEMI. Treat as per Chest Pain CPG, including aspirin and consideration of GTN (but cautious if RV involvement). CPAP may still be used."
        },
        {
            q: "Which of the following is a potential complication of excessive CPAP pressure?",
            options: ["Hypotension", "Pneumothorax", "Gastric distension", "All of the above"],
            correct: 3,
            explanation: "High pressures can cause hypotension (reduced venous return), pneumothorax (barotrauma), and gastric distension (if air is swallowed)."
        },
        {
            q: "A patient with pulmonary edema improves on CPAP and GTN. What is the next priority?",
            options: ["Discontinue CPAP", "Transport to hospital for further evaluation", "Give oral furosemide", "Repeat 12‑lead ECG"],
            correct: 1,
            explanation: "Even if improved, the patient requires hospital evaluation for underlying cause. Continue CPAP and monitor en route."
        },
        {
            q: "What is the dose of nebulized salbutamol for an adult with pulmonary edema and wheezing?",
            options: ["2.5 mg", "5 mg", "10 mg", "1.25 mg"],
            correct: 1,
            explanation: "The standard adult dose is 5 mg nebulized, diluted to a total volume of 5 mL with normal saline or sterile water."
        },
        {
            q: "A patient with pulmonary edema becomes increasingly agitated on CPAP. What should you do?",
            options: ["Sedate immediately", "Remove CPAP and use NRB", "Check mask fit and provide reassurance; consider reducing pressure", "Increase CPAP pressure"],
            correct: 2,
            explanation: "Agitation is often due to claustrophobia or discomfort. Reassure, check fit, and consider lowering pressure temporarily. Sedation may be needed but only after non‑pharmacological measures."
        },
        {
            q: "What is the recommended initial CPAP device in DCAS?",
            options: ["Flow‑safe CPAP", "BVM with PEEP valve", "Ventilator", "Non‑rebreather mask"],
            correct: 0,
            explanation: "Flow‑safe CPAP is the DCAS device for prehospital CPAP."
        }
    ],
    flashcards: [
        { category: "Definition", question: "What is acute pulmonary edema?", answer: "Accumulation of fluid in the lung interstitium and alveoli, often due to elevated pulmonary capillary pressure (e.g., heart failure)." },
        { category: "Symptoms", question: "List three common symptoms of pulmonary edema.", answer: "Dyspnoea, orthopnoea, cough with pink frothy sputum, crackles, wheezing." },
        { category: "Signs", question: "What are typical auscultatory findings in pulmonary edema?", answer: "Bibasilar crackles (may progress to all lung fields), sometimes wheezes." },
        { category: "Positioning", question: "How should a patient with pulmonary edema be positioned?", answer: "Sitting upright with legs dependent to reduce venous return." },
        { category: "Oxygen", question: "What is the target SpO₂ in pulmonary edema?", answer: "≥92%." },
        { category: "GTN", question: "What is the dose of GTN for pulmonary edema?", answer: "0.4 mg SL every 5 minutes, max 3 doses, provided SBP >100 mmHg." },
        { category: "GTN contraindication", question: "When is GTN contraindicated in pulmonary edema?", answer: "SBP <90 mmHg, or suspected right ventricular infarction." },
        { category: "CPAP", question: "What is the initial CPAP pressure?", answer: "5 cmH₂O, then titrate up as tolerated." },
        { category: "CPAP contraindication", question: "What is an absolute contraindication to CPAP?", answer: "Unconscious/apnoeic patient." },
        { category: "BiPAP", question: "What are typical initial BiPAP settings?", answer: "IPAP 10 cmH₂O, EPAP 5‑10 cmH₂O." },
        { category: "Furosemide", question: "When should furosemide be given in pulmonary edema?", answer: "Only if there are definite signs of fluid overload (e.g., JVD, peripheral oedema)." },
        { category: "Furosemide dose", question: "What is the dose of furosemide in acute pulmonary edema?", answer: "40 mg IV/IO." },
        { category: "Salbutamol", question: "When is salbutamol indicated in pulmonary edema?", answer: "If wheezing/bronchospasm is present." },
        { category: "Salbutamol dose", question: "What is the dose of nebulized salbutamol for an adult?", answer: "5 mg." },
        { category: "CPAP + medications", question: "How do you give medications to a patient on CPAP?", answer: "Use a nebulizer port integrated with the CPAP circuit; avoid removing mask." },
        { category: "Monitoring", question: "How often should you reassess a patient with pulmonary edema?", answer: "Every 5 minutes for unstable patients." },
        { category: "Differential", question: "Name two conditions that mimic pulmonary edema.", answer: "COPD exacerbation, pneumonia, ARDS." },
        { category: "ECG", question: "Why obtain a 12‑lead ECG in pulmonary edema?", answer: "To identify STEMI, arrhythmias, or other cardiac causes." },
        { category: "Complication", question: "What is a potential complication of high CPAP pressures?", answer: "Hypotension, pneumothorax, gastric insufflation." },
        { category: "Claustrophobia", question: "What should you do if a patient becomes claustrophobic on CPAP?", answer: "Reassure, coach, and consider starting with a lower pressure." },
        { category: "KPI", question: "What is the key performance indicator for pulmonary edema?", answer: "Apply CPAP/BiPAP for all severe cases." },
        { category: "ALS backup", question: "When should ALS backup be requested in pulmonary edema?", answer: "For severe cases, or moderate cases where CPAP is not available." },
        { category: "Tele‑EMS", question: "When should Tele‑EMS be consulted?", answer: "If diagnosis unclear, or for guidance on CPAP settings." },
        { category: "Fluid overload", question: "What signs suggest fluid overload?", answer: "Jugular venous distension, peripheral oedema, ascites." },
        { category: "Hypotension", question: "What should you consider if a patient with pulmonary edema is hypotensive?", answer: "Cardiogenic shock, RV infarction, or tension pneumothorax." },
        { category: "Transport", question: "Should a patient who improves on CPAP still be transported?", answer: "Yes, for evaluation of underlying cause and continued monitoring." },
        { category: "Pink sputum", question: "What does pink frothy sputum indicate?", answer: "Fluid in the alveoli with small amounts of blood, typical of pulmonary edema." },
        { category: "Wheezing", question: "What causes wheezing in pulmonary edema?", answer: "Fluid around airways causing bronchial compression or reflex bronchospasm ('cardiac asthma')." },
        { category: "Device", question: "What CPAP device is used by DCAS?", answer: "Flow‑safe CPAP." },
        { category: "Documentation", question: "What key elements should be documented in pulmonary edema?", answer: "Vital signs, SpO₂, CPAP settings, medications given, response, ECG findings." }
    ],
    critical: [
        {
            id: "crit_3_4_1",
            scenario: "A 70‑year‑old male presents with sudden onset of severe dyspnoea, pink frothy sputum, and crackles up to the apices. He is sitting upright, anxious, and diaphoretic. HR 130 bpm, BP 170/100, RR 32, SpO₂ 84% on room air. What is your priority intervention?",
            question: "What should you do first?",
            options: [
                { t: "Give GTN 0.4 mg SL and reassess", f: "GTN is indicated, but oxygenation and positioning are higher priority." },
                { t: "Position him upright, give high‑flow oxygen, and initiate CPAP at 5 cmH₂O", f: "Correct. Immediate CPAP and oxygen are the priority." },
                { t: "Start IV and give furosemide 40 mg", f: "Furosemide may be given later; CPAP and GTN come first." },
                { t: "Perform a 12‑lead ECG", f: "ECG is important but should not delay CPAP." }
            ],
            correct: 1,
            explanation: "This patient has severe pulmonary edema. Immediate CPAP with oxygen is the priority. GTN can be given concurrently if BP permits. Furosemide and ECG can follow.",
            kpi: "CPAP initiated within 5 minutes."
        },
        {
            id: "crit_3_4_2",
            scenario: "A 65‑year‑old female with acute pulmonary edema is on CPAP at 10 cmH₂O and has received two doses of GTN. Her SpO₂ has improved to 94%, but she remains tachypnoeic and her BP is now 95/60. What should you do?",
            question: "What is the next appropriate action?",
            options: [
                { t: "Give another dose of GTN", f: "GTN is contraindicated with SBP <100 mmHg." },
                { t: "Increase CPAP to 15 cmH₂O", f: "Higher CPAP may further reduce venous return and worsen hypotension." },
                { t: "Decrease CPAP to 5 cmH₂O and reassess", f: "Correct. Reducing CPAP may improve venous return and BP while maintaining oxygenation." },
                { t: "Give furosemide 40 mg IV", f: "Furosemide may not help and could worsen hypotension." }
            ],
            correct: 2,
            explanation: "Hypotension on CPAP may be due to reduced preload. Lowering CPAP can improve venous return. Monitor response and consider fluid bolus if signs of hypoperfusion persist.",
            kpi: "CPAP adjusted appropriately for hypotension."
        },
        {
            id: "crit_3_4_3",
            scenario: "You are called to a 60‑year‑old with dyspnoea. He has crackles and wheezes, SpO₂ 89%. He is alert and can speak in short sentences. He has no history of asthma. What is your initial management?",
            question: "What is the most appropriate initial treatment?",
            options: [
                { t: "Nebulized salbutamol 5 mg", f: "Wheezing may be due to 'cardiac asthma'; CPAP and GTN are more appropriate first." },
                { t: "CPAP and GTN", f: "Correct. This is likely pulmonary edema; CPAP addresses the primary problem." },
                { t: "Furosemide 40 mg IV", f: "Not first‑line without signs of fluid overload." },
                { t: "IV fluids", f: "Fluids could worsen pulmonary edema." }
            ],
            correct: 1,
            explanation: "Wheezing in this context may be cardiac asthma. CPAP and GTN are the priority. Salbutamol can be added if wheezing persists after CPAP.",
            kpi: "CPAP initiated before bronchodilators."
        },
        {
            id: "crit_3_4_4",
            scenario: "A patient with pulmonary edema on CPAP suddenly becomes more agitated and complains of severe chest pain. You note tracheal deviation to the left and absent breath sounds on the right. What is the most likely diagnosis and immediate action?",
            question: "What should you do?",
            options: [
                { t: "Increase CPAP pressure", f: "Will worsen tension pneumothorax." },
                { t: "Perform needle decompression on the right chest", f: "Correct. Tension pneumothorax is a life‑threatening complication." },
                { t: "Give GTN for chest pain", f: "GTN may worsen hypotension." },
                { t: "Remove CPAP and give oxygen via NRB", f: "Not adequate; decompression is needed." }
            ],
            correct: 1,
            explanation: "Sudden deterioration with tracheal deviation and absent breath sounds suggests tension pneumothorax. Immediate needle decompression (second intercostal space, midclavicular line) is required.",
            kpi: "Decompression performed within 2 minutes."
        },
        {
            id: "crit_3_4_5",
            scenario: "A 75‑year‑old with pulmonary edema improves on CPAP and GTN. His SpO₂ is 96% on CPAP 7.5 cmH₂O, BP 130/80. He has received three GTN doses. You are 10 minutes from hospital. What is your ongoing management?",
            question: "What should you do next?",
            options: [
                { t: "Continue CPAP en route, monitor vitals, and prepare for handover", f: "Correct. Maintain therapy and transport." },
                { t: "Wean CPAP to room air", f: "Premature weaning may cause deterioration." },
                { t: "Give another dose of GTN", f: "Maximum three doses reached." },
                { t: "Start furosemide infusion", f: "Not indicated prehospital; continue current management." }
            ],
            correct: 0,
            explanation: "Continue CPAP and monitoring during transport. Provide handover including therapies given and response.",
            kpi: "Therapy maintained during transport; complete documentation."
        }
    ]
};