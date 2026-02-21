/* ========== Chapter 3.1 – Chest Pain / Acute Coronary Syndrome ========== */
window.CPG_DATA = {
    id: "c3-1",
    title: "Chest Pain / Acute Coronary Syndrome",
    shortTitle: "3.1 Chest Pain / ACS",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">❤️ Chest Pain / Acute Coronary Syndrome (ACS)</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Conduct a full vital signs assessment and obtain a 12‑lead ECG promptly, considering right‑sided and posterior leads when indicated.</li>
                <li>Determine the exact time of symptom onset – this is critical for reperfusion decisions.</li>
                <li>Expedite transport to an appropriate cardiac hospital while initiating prehospital management.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <p>Patients with ischemic‑type symptoms (chest pain/pressure, dyspnoea, diaphoresis, nausea, dizziness, syncope, palpitations) or ECG changes suggestive of ACS (STEMI, NSTEMI, new LBBB, ischemic T‑wave inversions/ST depressions). Also include non‑specific presentations where a cardiac cause cannot be excluded, or hemodynamic compromise with suspected cardiac origin.</p>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>12‑lead ECG:</strong> Obtain as soon as possible. Consider right‑sided leads (V4R) for inferior STEMI and posterior leads (V7‑V9) if high suspicion of posterior infarction.</li>
                <li><strong>Time of onset:</strong> Ask precisely when the discomfort began; this determines eligibility for reperfusion therapy.</li>
                <li><strong>Pain characteristics:</strong> Use OPQRST to differentiate ischemic from non‑ischemic or non‑cardiac chest pain (see table below).</li>
                <li><strong>Triage category:</strong> Red priority if STEMI, haemodynamic instability, or chest pain with signs of shock.</li>
            </ul>

            <h4>Management</h4>
            <ul>
                <li><strong>Oxygen:</strong> Only if SpO₂ < 94% (or respiratory distress). Target 94‑98%.</li>
                <li><strong>Aspirin:</strong> 162‑324 mg chewed immediately. If the patient has taken aspirin within the last 60 minutes, give additional aspirin to reach a total of 324 mg.</li>
                <li><strong>GTN (Glyceryl Trinitrate):</strong> 0.4 mg sublingual every 3‑5 minutes for ongoing ischaemic pain, provided SBP ≥ 100 mmHg. Maximum 3 doses. Contraindicated if phosphodiesterase inhibitors (e.g., sildenafil) taken in last 24 hours, or inferior STEMI with suspected right ventricular involvement.</li>
                <li><strong>Morphine:</strong> For severe pain only (not routinely). Give 1‑2 mg IV increments every 5‑10 minutes (max 10 mg).</li>
                <li><strong>Fluids:</strong> If SBP < 90 mmHg and no signs of pulmonary oedema, give 250 mL normal saline IV/IO bolus; repeat cautiously.</li>
                <li><strong>ALS back‑up:</strong> Request early if haemodynamically unstable, refractory pain, or if sedation/cardioversion may be needed.</li>
                <li><strong>ECG monitoring:</strong> Continuous 4‑lead monitoring; apply defibrillator pads to all STEMI patients.</li>
            </ul>

            <h4>ECG Interpretation & Special Situations</h4>
            <ul>
                <li><strong>STEMI:</strong> ST elevation at the J point in two contiguous leads (≥1 mm in limb leads, ≥2 mm in precordial leads) or new LBBB. Expedite transport to a PCI‑capable hospital.</li>
                <li><strong>NSTEMI / unstable angina:</strong> ST depression, T‑wave inversions, or no dynamic changes. Perform serial ECGs. Contact Tele‑EMS if Occlusion Myocardial Infarction (OMI) is suspected (subtle signs: hyperacute T‑waves, reciprocal changes, ST depression in multiple leads).</li>
                <li><strong>Right ventricular infarct:</strong> Suspect in inferior STEMI; avoid GTN and give fluids cautiously. Obtain right‑sided ECG (V4R).</li>
                <li><strong>Posterior infarct:</strong> Look for tall R waves and ST depression in V1‑V3; obtain posterior leads V7‑V9.</li>
            </ul>

            <h4>Differential Features of Chest Pain</h4>
            <table style="width:100%; border-collapse:collapse; margin:10px 0;">
                <tr style="background:var(--glass-bg);"><th></th><th>Ischemic (ACS)</th><th>Non‑Ischemic (Pericarditis, PE, Aortic Dissection)</th><th>Non‑Cardiac (GI, Musculoskeletal)</th></tr>
                <tr><td><strong>Location</strong></td><td>Substernal, radiates to arms/neck/jaw/back</td><td>Variable: retrosternal (pericarditis), chest/back (dissection), lateral (PE)</td><td>Epigastric, localized, pleuritic</td></tr>
                <tr><td><strong>Quality</strong></td><td>Pressure, squeezing, heaviness</td><td>Sharp, pleuritic, tearing/ripping</td><td>Burning, sharp, aching</td></tr>
                <tr><td><strong>Duration</strong></td><td>2‑30 minutes</td><td>Hours to days, sudden & persistent</td><td>Variable</td></tr>
                <tr><td><strong>Worsening factors</strong></td><td>Exertion, stress</td><td>Inspiration, supine (pericarditis); deep breath (PE)</td><td>Meals, movement, palpation</td></tr>
                <tr><td><strong>Relieving factors</strong></td><td>Rest, nitroglycerin</td><td>Leaning forward (pericarditis)</td><td>Antacids, NSAIDs</td></tr>
            </table>

            <h4>Transport & Handover</h4>
            <p>Transport the patient to the nearest appropriate cardiac hospital (preferably with PCI capability). Notify the receiving facility early, especially if STEMI or high‑risk features. Provide a concise handover using IMIST‑AMBO, including ECG findings and time of symptom onset.</p>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>12‑lead ECG obtained within 5 minutes of arrival (or as soon as possible).</li>
                <li>Aspirin administered to all ACS patients unless contraindicated.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What is the target oxygen saturation for a patient with suspected ACS?",
            options: ["88‑92%", "94‑98%", "97‑100%", "As high as possible"],
            correct: 1,
            explanation: "Oxygen should be titrated to achieve SpO₂ 94‑98% to avoid hyperoxia; routine high‑flow oxygen is not recommended unless the patient is hypoxic."
        },
        {
            q: "A 55‑year‑old male with crushing substernal chest pain has taken 162 mg of aspirin at home 30 minutes ago. What additional aspirin dose should you administer?",
            options: ["81 mg", "162 mg", "324 mg", "None, he already took aspirin"],
            correct: 1,
            explanation: "The total aspirin dose should be 324 mg. Since he took 162 mg, give an additional 162 mg (two tablets)."
        },
        {
            q: "What is the maximum total dose of GTN (sublingual) that can be given in the prehospital setting?",
            options: ["0.4 mg", "1.2 mg", "2.4 mg", "No maximum"],
            correct: 1,
            explanation: "GTN 0.4 mg SL may be repeated every 3‑5 minutes up to a maximum of 1.2 mg (3 sprays)."
        },
        {
            q: "Which of the following is an absolute contraindication to administering GTN?",
            options: ["Heart rate 110 bpm", "SBP 100 mmHg", "Use of sildenafil (Viagra) within 24 hours", "History of inferior wall MI"],
            correct: 2,
            explanation: "GTN is contraindicated in patients who have taken phosphodiesterase‑5 inhibitors (e.g., sildenafil, tadalafil) within the previous 24 hours because of the risk of severe hypotension."
        },
        {
            q: "A patient presents with inferior STEMI. You note that he is hypotensive and has clear lung fields. You should suspect:",
            options: ["Left ventricular failure", "Right ventricular infarction", "Pulmonary embolism", "Cardiogenic shock due to massive anterior MI"],
            correct: 1,
            explanation: "Hypotension with clear lungs and inferior STEMI suggests right ventricular infarction. Avoid GTN and give fluid cautiously."
        },
        {
            q: "What additional ECG leads should be obtained when right ventricular infarction is suspected?",
            options: ["V4R", "V7‑V9", "I and aVL", "Lead II only"],
            correct: 0,
            explanation: "Right‑sided leads, particularly V4R, are used to detect right ventricular infarction in the setting of inferior STEMI."
        },
        {
            q: "Which of the following is NOT an ischemic‑type symptom?",
            options: ["Diaphoresis", "Nausea", "Sharp pleuritic chest pain", "Radiation to the jaw"],
            correct: 2,
            explanation: "Sharp, pleuritic pain is more characteristic of pericarditis or pulmonary embolism, not typical myocardial ischemia."
        },
        {
            q: "You are treating a 60‑year‑old female with chest pain, ECG shows ST depression in leads V1‑V4. What is the most likely diagnosis?",
            options: ["Anterior STEMI", "Posterior infarction", "Pericarditis", "Early repolarisation"],
            correct: 1,
            explanation: "ST depression in the anterior leads can be a mirror image of posterior infarction. Consider obtaining posterior leads V7‑V9."
        },
        {
            q: "What is the recommended initial dose of morphine for severe cardiac pain in an adult?",
            options: ["0.5 mg", "1‑2 mg IV", "5 mg IV", "10 mg IM"],
            correct: 1,
            explanation: "Morphine should be given in small increments (1‑2 mg IV) every 5‑10 minutes, titrated to effect, with a maximum of 10 mg."
        },
        {
            q: "A patient with suspected ACS has an SBP of 85 mmHg and is cool and clammy. There are no signs of pulmonary oedema. What is the appropriate fluid management?",
            options: ["250 mL normal saline bolus", "Rapid 1‑litre bolus", "No fluids, start dopamine", "GTN to reduce preload"],
            correct: 0,
            explanation: "In suspected cardiogenic shock without pulmonary oedema, a cautious 250 mL fluid bolus can be given and reassessed. Avoid over‑resuscitation."
        },
        {
            q: "In a patient with new left bundle branch block (LBBB) and symptoms consistent with ACS, the ECG should be interpreted as:",
            options: ["Non‑diagnostic for STEMI", "STEMI equivalent if symptoms are typical", "Probable pericarditis", "Normal variant"],
            correct: 1,
            explanation: "New or presumably new LBBB in the setting of ischaemic symptoms is considered a STEMI equivalent and should activate the same treatment pathway."
        },
        {
            q: "Which of the following findings is most suggestive of aortic dissection rather than ACS?",
            options: ["Substernal pressure radiating to left arm", "Tearing chest pain radiating to the back", "Nausea and diaphoresis", "ST elevation in inferior leads"],
            correct: 1,
            explanation: "Tearing or ripping pain that radiates to the back is classic for aortic dissection. ACS pain is usually described as pressure or squeezing."
        },
        {
            q: "A 45‑year‑old male with chest pain has an ECG showing ST elevation in leads II, III, and aVF. What is the diagnosis?",
            options: ["Anterior STEMI", "Inferior STEMI", "Lateral STEMI", "Posterior infarction"],
            correct: 1,
            explanation: "ST elevation in the inferior leads (II, III, aVF) indicates inferior STEMI."
        },
        {
            q: "What is the correct dose of aspirin for a patient with suspected ACS?",
            options: ["81 mg", "162‑324 mg", "500 mg", "1000 mg"],
            correct: 1,
            explanation: "The recommended dose is 162‑324 mg (two to four 81 mg tablets) chewed immediately."
        },
        {
            q: "Which of the following is a contraindication to aspirin in ACS?",
            options: ["History of asthma", "Active peptic ulcer disease", "Age >80 years", "Concurrent use of GTN"],
            correct: 1,
            explanation: "Aspirin is contraindicated in active peptic ulcer disease due to bleeding risk. Asthma is a relative caution but not an absolute contraindication."
        },
        {
            q: "You have given GTN to a patient with ongoing chest pain. Before repeating the dose, you must:",
            options: ["Check the patient's blood pressure", "Perform another 12‑lead ECG", "Give aspirin", "Start an IV line"],
            correct: 0,
            explanation: "Reassess vital signs, particularly blood pressure, before each repeat dose of GTN to ensure SBP is ≥100 mmHg."
        },
        {
            q: "A patient with inferior STEMI becomes hypotensive after GTN. The most likely cause is:",
            options: ["Anaphylaxis", "Right ventricular involvement", "Pulmonary embolism", "Vasovagal syncope"],
            correct: 1,
            explanation: "Inferior STEMI can involve the right ventricle; right ventricular infarction makes the patient preload‑dependent, so GTN can cause profound hypotension."
        },
        {
            q: "What is the purpose of applying defibrillator pads to a patient with STEMI?",
            options: ["To obtain a better ECG", "To prepare for possible cardiac arrest", "To provide pacing", "To monitor oxygen saturation"],
            correct: 1,
            explanation: "STEMI patients are at high risk of ventricular arrhythmias; pads allow immediate defibrillation if cardiac arrest occurs."
        },
        {
            q: "A patient's 12‑lead ECG shows ST depression in V1‑V4 and tall R waves in V1‑V2. You should suspect:",
            options: ["Anterior STEMI", "Posterior MI", "Pericarditis", "Early repolarisation"],
            correct: 1,
            explanation: "Tall R waves and ST depression in V1‑V4 are reciprocal changes of a posterior infarction. Posterior leads (V7‑V9) may show ST elevation."
        },
        {
            q: "Which of the following is a feature of pericarditis rather than myocardial infarction?",
            options: ["Pain relieved by leaning forward", "Pain radiating to the left arm", "Nausea and vomiting", "ST elevation in a regional distribution"],
            correct: 0,
            explanation: "Pericarditic pain is often sharp, pleuritic, and relieved by sitting up and leaning forward. ST elevation in pericarditis is diffuse, not confined to a vascular territory."
        },
        {
            q: "In a patient with suspected ACS, what information is most critical to obtain for reperfusion decision‑making?",
            options: ["Family history", "Time of symptom onset", "Blood glucose level", "Allergies"],
            correct: 1,
            explanation: "The time of symptom onset (or last known well) determines eligibility for thrombolysis or primary PCI."
        },
        {
            q: "A 70‑year‑old diabetic presents with epigastric discomfort and nausea. Vital signs are stable, ECG is normal. What should you do?",
            options: ["Reassure and discharge", "Obtain serial ECGs and consider ACS", "Treat as gastritis", "Give GTN"],
            correct: 1,
            explanation: "Diabetics and elderly may present with atypical symptoms. A normal ECG does not rule out ACS; serial ECGs and close monitoring are indicated."
        },
        {
            q: "What is the maximum single dose of morphine for severe cardiac pain in an adult?",
            options: ["2 mg", "5 mg", "10 mg", "20 mg"],
            correct: 2,
            explanation: "The maximum total dose of morphine for ACS is 10 mg; individual increments should be 1‑2 mg."
        },
        {
            q: "Which of the following is a sign of cardiogenic shock?",
            options: ["SBP <90 mmHg with signs of poor perfusion", "Heart rate 110 bpm", "Jugular venous distension", "All of the above"],
            correct: 3,
            explanation: "Cardiogenic shock is defined by hypotension (SBP <90) and evidence of end‑organ hypoperfusion (cool skin, altered mental status, oliguria). Tachycardia and JVD may be present."
        },
        {
            q: "In a patient with suspected ACS, what is the role of supplemental oxygen if SpO₂ is 96% on room air?",
            options: ["Give 2 L/min nasal cannula", "Give 15 L/min non‑rebreather", "No oxygen required", "Give oxygen only if chest pain persists"],
            correct: 2,
            explanation: "Oxygen is not indicated in normoxic patients with ACS; it may cause vasoconstriction and harm. Administer only if SpO₂ <94%."
        },
        {
            q: "A 50‑year‑old male with chest pain has an ECG showing 1 mm ST elevation in V2‑V4. He is pain‑free and haemodynamically stable. What is your priority?",
            options: ["Give aspirin and GTN", "Start an IV line", "Contact Tele‑EMS for STEMI confirmation", "Transport without delay to a PCI centre"],
            correct: 3,
            explanation: "ST elevation in contiguous leads meets STEMI criteria. Even if pain‑free, he requires immediate transport to a PCI‑capable hospital. Aspirin and GTN can be given en route."
        },
        {
            q: "What is the recommended dose of IV morphine for a paediatric patient with severe cardiac pain?",
            options: ["0.05 mg/kg", "0.1 mg/kg", "0.2 mg/kg", "1 mg/kg"],
            correct: 1,
            explanation: "Morphine dose in children is 0.1 mg/kg IV/IM (max 5 mg). However, ACS is extremely rare in paediatrics."
        },
        {
            q: "Which of the following findings on ECG is most suggestive of Occlusion Myocardial Infarction (OMI) without overt ST elevation?",
            options: ["Hyperacute T‑waves", "Pathological Q waves", "Left anterior fascicular block", "Sinus bradycardia"],
            correct: 0,
            explanation: "Hyperacute T‑waves (tall, peaked, symmetric) can be an early sign of coronary occlusion before ST elevation appears. Contact Tele‑EMS for further guidance."
        },
        {
            q: "A patient with chest pain has taken tadalafil for erectile dysfunction 12 hours ago. Can GTN be administered?",
            options: ["Yes, if SBP >100", "No, it is contraindicated", "Yes, but at half dose", "Only if the pain is severe"],
            correct: 1,
            explanation: "Phosphodiesterase‑5 inhibitors (sildenafil, tadalafil, vardenafil) are contraindications to GTN for at least 24 hours (48 hours for tadalafil) due to risk of severe hypotension."
        },
        {
            q: "What is the appropriate initial fluid bolus for an adult with suspected ACS and hypotension without pulmonary oedema?",
            options: ["50 mL", "250 mL", "500 mL", "1000 mL"],
            correct: 1,
            explanation: "A cautious 250 mL bolus of normal saline is recommended; reassess after each bolus and stop if signs of fluid overload appear."
        }
    ],
    flashcards: [
        { category: "Assessment", question: "What are the key components of the OPQRST assessment for chest pain?", answer: "Onset, Provocation/Palliation, Quality, Radiation, Severity, Time." },
        { category: "Assessment", question: "What is the target SpO₂ for a patient with suspected ACS?", answer: "94‑98% (oxygen only if <94%)." },
        { category: "Assessment", question: "What additional ECG leads should be considered in inferior STEMI?", answer: "Right‑sided leads (V4R) to detect RV infarction." },
        { category: "Assessment", question: "What leads are used for posterior ECG?", answer: "V7, V8, V9 (placed on the posterior chest wall)." },
        { category: "Assessment", question: "What are the ECG criteria for STEMI?", answer: "ST elevation at the J point in two contiguous leads: ≥1 mm in limb leads, ≥2 mm in precordial leads, or new LBBB." },
        { category: "Assessment", question: "Name three atypical presentations of ACS.", answer: "Epigastric pain, isolated dyspnoea, syncope, nausea/vomiting, diaphoresis." },
        { category: "Assessment", question: "What is the significance of hyperacute T‑waves?", answer: "They may indicate early coronary occlusion before ST elevation appears (OMI)." },
        { category: "Medications", question: "What is the dose of aspirin for ACS?", answer: "162‑324 mg (2‑4 tablets) chewed immediately." },
        { category: "Medications", question: "How is GTN administered in ACS?", answer: "0.4 mg sublingual every 3‑5 minutes, up to 1.2 mg, provided SBP ≥100 mmHg." },
        { category: "Medications", question: "What are the contraindications to GTN?", answer: "SBP <90 mmHg, phosphodiesterase inhibitors in last 24‑48 hours, inferior STEMI with RV involvement." },
        { category: "Medications", question: "What is the dose of morphine for severe cardiac pain?", answer: "1‑2 mg IV increments every 5‑10 minutes (max 10 mg)." },
        { category: "Medications", question: "What is the initial fluid bolus for hypotension in suspected ACS?", answer: "250 mL normal saline IV/IO, reassess for pulmonary oedema." },
        { category: "ECG", question: "What is the most common ECG finding in acute pericarditis?", answer: "Diffuse ST elevation (concave upward) and PR depression." },
        { category: "ECG", question: "What ECG finding suggests posterior MI?", answer: "ST depression in V1‑V3 with tall R waves; ST elevation in posterior leads V7‑V9." },
        { category: "ECG", question: "What is a STEMI equivalent?", answer: "New LBBB in the setting of ischaemic symptoms." },
        { category: "ECG", question: "What are the ECG features of NSTEMI?", answer: "ST depression, T‑wave inversions, or dynamic changes without ST elevation." },
        { category: "Differential", question: "What are features of pericarditis?", answer: "Sharp, pleuritic pain relieved by sitting forward, diffuse ST elevation, pericardial friction rub." },
        { category: "Differential", question: "What are features of aortic dissection?", answer: "Tearing pain radiating to back, pulse or BP differential, widened mediastinum." },
        { category: "Differential", question: "What are features of pulmonary embolism?", answer: "Pleuritic chest pain, dyspnoea, tachycardia, possible haemoptysis, signs of right heart strain on ECG." },
        { category: "Management", question: "When should ALS back‑up be requested in ACS?", answer: "Haemodynamic instability, refractory pain, need for sedation/cardioversion, or if the patient deteriorates." },
        { category: "Management", question: "Why should defibrillator pads be applied to STEMI patients?", answer: "To enable immediate defibrillation if ventricular fibrillation/tachycardia occurs." },
        { category: "Management", question: "What is the role of Tele‑EMS in ACS?", answer: "For ECG interpretation, confirmation of OMI, or guidance on complex cases (e.g., uncertainty about STEMI)." },
        { category: "Management", question: "What should you do if a patient with inferior STEMI becomes hypotensive after GTN?", answer: "Stop GTN, give fluid bolus, and consider right ventricular infarction." },
        { category: "Transport", question: "What information is critical to relay to the receiving hospital?", answer: "Time of symptom onset, ECG findings, treatments given, and suspected diagnosis." },
        { category: "Transport", question: "What type of hospital is preferred for STEMI?", answer: "A hospital with percutaneous coronary intervention (PCI) capability." },
        { category: "KPIs", question: "What are two key performance indicators for ACS care?", answer: "1. 12‑lead ECG obtained within 5 minutes. 2. Aspirin administered to all ACS patients." },
        { category: "Safety", question: "Why should GTN be avoided in right ventricular infarction?", answer: "RV infarct patients are preload‑dependent; GTN reduces preload and can cause severe hypotension." },
        { category: "Safety", question: "What is the danger of excessive oxygen in ACS?", answer: "Hyperoxia can cause coronary vasoconstriction and increase oxidative stress, potentially worsening outcomes." },
        { category: "General", question: "What is the 'Golden Hour' in STEMI?", answer: "The first hour after symptom onset, when timely reperfusion offers the greatest benefit." },
        { category: "General", question: "What is the difference between unstable angina and NSTEMI?", answer: "Both involve ischaemia without ST elevation; NSTEMI shows elevated cardiac biomarkers (troponin), unstable angina does not." }
    ],
    critical: [
        {
            id: "crit_3_1_1",
            scenario: "You are called to a 58‑year‑old male with crushing central chest pain radiating to the left arm, associated with diaphoresis and nausea. He is pale and clammy. HR 110, BP 130/85, RR 20, SpO₂ 94% on room air. Your 12‑lead ECG shows 3 mm ST elevation in leads II, III, and aVF, with reciprocal ST depression in I and aVL. He has taken no medications. What is your immediate management?",
            question: "What is the priority intervention for this patient?",
            options: [
                { t: "Give GTN 0.4 mg SL and reassess", f: "While GTN may be given, aspirin and oxygen should come first, and he needs rapid transport for PCI. GTN alone is insufficient." },
                { t: "Administer aspirin 324 mg chewed, apply defibrillator pads, and expedite transport to a PCI centre", f: "Correct. This is a clear inferior STEMI. Aspirin, monitoring, and rapid transport are essential. GTN can be given en route if BP permits." },
                { t: "Start an IV and give 2 mg morphine", f: "Morphine is for severe pain, but aspirin and transport are the highest priorities. Morphine can be given later if needed." },
                { t: "Request ALS back‑up and wait on scene until they arrive", f: "Delaying transport for ALS is not appropriate; the patient needs a PCI centre as soon as possible. Meet ALS en route if needed." }
            ],
            correct: 1,
            explanation: "This patient has a clear inferior STEMI. Immediate aspirin, application of defibrillator pads, and rapid transport to a PCI‑capable hospital are paramount. GTN and morphine can be administered en route, but they should not delay transport.",
            kpi: "Aspirin administered within 5 minutes; transport time ≤10 minutes on scene."
        },
        {
            id: "crit_3_1_2",
            scenario: "A 62‑year‑old female with a history of hypertension presents with sudden onset of severe 'tearing' chest pain that radiates to her back. Her BP is 150/95 in the right arm but 110/70 in the left arm. ECG shows sinus rhythm with no significant ST changes. What is the most likely diagnosis and appropriate action?",
            question: "What should you suspect and how should you manage this patient?",
            options: [
                { t: "Acute coronary syndrome – give aspirin and GTN", f: "The pain quality and BP differential are not typical for ACS; aspirin could worsen bleeding if dissection is present." },
                { t: "Aortic dissection – withhold aspirin, provide pain relief, and expedite transport to a facility with cardiothoracic surgery", f: "Correct. Tearing pain radiating to the back and BP differential strongly suggest aortic dissection. Aspirin is contraindicated; manage pain and transport urgently." },
                { t: "Pulmonary embolism – start oxygen and prepare for thrombolysis", f: "No signs of PE (no dyspnoea, tachypnoea, or hypoxia)." },
                { t: "Musculoskeletal pain – reassure and discharge", f: "The severity and BP differential indicate a life‑threatening condition; this is not musculoskeletal." }
            ],
            correct: 1,
            explanation: "Aortic dissection is a time‑critical emergency. Aspirin may increase bleeding risk; BP control and urgent transfer are key. Notify the receiving hospital early.",
            kpi: "Recognition of aortic dissection and avoidance of inappropriate medications."
        },
        {
            id: "crit_3_1_3",
            scenario: "A 55‑year‑old male with chest pain has an ECG showing 1 mm ST elevation in leads V2‑V4. He is currently pain‑free and haemodynamically stable. He states the pain started 2 hours ago and lasted 30 minutes, then resolved spontaneously. He has no cardiac history. What is your next step?",
            question: "What is the most appropriate management?",
            options: [
                { t: "Repeat the ECG and observe; if unchanged, he may refuse transport", f: "Even though pain resolved, ST elevation indicates STEMI; he requires urgent PCI evaluation." },
                { t: "Administer aspirin, apply pads, and transport emergently to a PCI centre", f: "Correct. The ECG still shows ST elevation, consistent with STEMI. Reperfusion therapy is time‑sensitive; do not delay." },
                { t: "Give GTN and wait for symptoms to return", f: "GTN is not harmful, but waiting is inappropriate; he needs definitive care." },
                { t: "Contact Tele‑EMS for advice on thrombolysis", f: "Tele‑EMS may be consulted, but transport should not be delayed. Thrombolysis decisions are usually made in hospital." }
            ],
            correct: 1,
            explanation: "Persistent ST elevation after symptom resolution still indicates an occluded artery. The patient needs immediate transfer for primary PCI.",
            kpi: "Recognition of ongoing STEMI despite symptom resolution."
        },
        {
            id: "crit_3_1_4",
            scenario: "You are managing a 68‑year‑old female with epigastric discomfort, nausea, and diaphoresis. Vital signs: HR 115, BP 95/70, RR 22, SpO₂ 95%. Her ECG shows ST depression in V1‑V3 and tall R waves in V1‑V2. She has a history of diabetes. What is your interpretation and management?",
            question: "What is the most likely ECG finding and appropriate intervention?",
            options: [
                { t: "Anterior STEMI – give GTN and aspirin", f: "Anterior STEMI would show ST elevation, not depression. GTN may worsen hypotension." },
                { t: "Posterior MI – administer aspirin, cautious fluid bolus, and urgent transport", f: "Correct. The findings are classic for posterior infarction. She is hypotensive but without pulmonary oedema; a 250 mL fluid bolus is appropriate. Aspirin should be given." },
                { t: "Pericarditis – give NSAIDs and transport", f: "No pericardial rub or diffuse ST elevation; unlikely." },
                { t: "Early repolarisation – discharge with follow‑up", f: "Not with symptoms and haemodynamic instability." }
            ],
            correct: 1,
            explanation: "Posterior MI can present with ST depression in V1‑V3 and tall R waves. Obtain posterior leads if possible. Fluids cautiously, aspirin, and expedite transport.",
            kpi: "Recognition of posterior MI; appropriate fluid management."
        },
        {
            id: "crit_3_1_5",
            scenario: "A 45‑year‑old male with chest pain and diaphoresis has an ECG showing sinus tachycardia with 2 mm ST elevation in leads II, III, aVF. He suddenly becomes unresponsive, pulseless, and apnoeic. The monitor now shows ventricular fibrillation. What is your immediate action?",
            question: "What is the priority at this moment?",
            options: [
                { t: "Perform a pulse check for 10 seconds", f: "He is already pulseless; start CPR immediately." },
                { t: "Start CPR and defibrillate as soon as possible", f: "Correct. For witnessed VF, immediate CPR and defibrillation are the priorities." },
                { t: "Administer 1 mg adrenaline IV", f: "Adrenaline is important, but defibrillation comes first for shockable rhythms." },
                { t: "Continue with the ACS protocol while assessing", f: "He is in cardiac arrest; the ACS protocol is now secondary to resuscitation." }
            ],
            correct: 1,
            explanation: "This is a witnessed cardiac arrest from VF. Immediate defibrillation (as soon as defibrillator is ready) and high‑quality CPR are the priorities. Follow cardiac arrest protocols.",
            kpi: "Time to first shock <3 minutes."
        }
    ]
};