/* ========== Chapter 1 – Universal Care (six independent sections) ========== */
window.CPG_DATA = {
    id: "c1",
    title: "Universal Care",
    shortTitle: "1.0 Universal Care",
    sections: [
        // ---------- SECTION 1.1: Universal Care (FULL CONTENT) ----------
        {
            id: "c1s1",
            shortTitle: "1.1 Universal Care",
            summary: `
                <div class="sum-card">
                    <h3 style="color:var(--accent-universal);">📘 Universal Care – Full Guideline Summary</h3>
                    
                    <h4>1. SCENE SAFETY & INITIAL IMPRESSION</h4>
                    <ul>
                        <li><strong>Scene safety</strong> – always first priority (crew, patient, bystanders).</li>
                        <li><strong>General Impression</strong> – Appearance, Work of Breathing, Circulation to skin (Pediatric Assessment Triangle).</li>
                        <li><strong>Resource assessment</strong> – request ALS / MCI if needed.</li>
                    </ul>

                    <h4>2. PRIMARY SURVEY (ABCDE / C‑ABC / CAB)</h4>
                    <ul>
                        <li><strong>Trauma:</strong> C‑A‑B‑C – Catastrophic haemorrhage control, C‑spine, Airway, Breathing, Circulation.</li>
                        <li><strong>Medical:</strong> A‑B‑C – Airway, Breathing, Circulation → Disability, Exposure.</li>
                        <li><strong>Cardiac arrest:</strong> C‑A‑B – Compressions, Airway, Breathing.</li>
                        <li><strong>Airway:</strong> Open with head‑tilt/chin‑lift or jaw thrust (if trauma). Suction, OPA/NPA, supraglottic/ETT as indicated.</li>
                        <li><strong>Breathing:</strong> Rate, effort, SpO₂, breath sounds. O₂ to target SpO₂ 94‑98% (88‑92% COPD). BVM if inadequate.</li>
                        <li><strong>Circulation:</strong> Control major haemorrhage (tourniquet, hemostatic agents). Palpate pulse (carotid – unconscious adult; brachial – infant). Assess skin, CRT (<2 sec normal).</li>
                        <li><strong>Disability:</strong> AVPU (Alert, Voice, Pain, Unresponsive). GCS (3‑15). Check blood glucose; if <70 mg/dl → Hypoglycaemia CPG. BEFAST if stroke suspected.</li>
                        <li><strong>Exposure:</strong> Remove clothing as needed; maintain modesty and temperature.</li>
                    </ul>

                    <h4>3. ALS BACKUP</h4>
                    <ul>
                        <li>Request within <strong>5 minutes</strong> if advanced skills needed.</li>
                        <li><strong>Red priority (unstable):</strong> always request ALS.</li>
                        <li><strong>Stable red priority:</strong> e.g. controlled limb bleed, uncomplicated CVA – ALS may be deferred if transport <10 min.</li>
                        <li>May request and rendezvous en route.</li>
                    </ul>

                    <h4>4. VITAL SIGNS & MONITORING</h4>
                    <ul>
                        <li>Obtain full set: HR, BP, RR, SpO₂, temperature, BGL (if indicated), EtCO₂ (if indicated), neurologic status.</li>
                        <li><strong>Normal ranges (adult):</strong> HR 60‑100, RR 12‑20, SBP ≥90, SpO₂ ≥94%, EtCO₂ 35‑45.</li>
                        <li><strong>Paediatric norms:</strong> use age‑specific charts (see CPG 1.1 table).</li>
                        <li><strong>Hypotension:</strong> SBP <90 mmHg (adult) or <5th percentile for age (paeds).</li>
                        <li><strong>Tachycardia:</strong> HR >100 (adult); Bradycardia: HR <60 (adult).</li>
                        <li><strong>12‑lead ECG:</strong> for cardiac or suspected cardiac complaints. Continuous monitoring for unstable patients.</li>
                        <li><strong>Waveform capnography:</strong> essential for advanced airways and critical patients.</li>
                    </ul>

                    <h4>5. SECONDARY SURVEY & HISTORY</h4>
                    <ul>
                        <li><strong>Physical exam:</strong> head‑to‑toe (trauma: DCAP‑BTLS‑TIC; medical: system‑focused).</li>
                        <li><strong>OPQRST:</strong> Onset, Provocation/Palliation, Quality, Radiation, Severity, Time.</li>
                        <li><strong>SAMPLE:</strong> Signs/symptoms, Allergies, Medications, Past history, Last oral intake, Events.</li>
                        <li><strong>Pain assessment:</strong> 0‑10 scale, Wong‑Baker (non‑verbal), FLACC (paeds <3 yrs).</li>
                    </ul>

                    <h4>6. RED FLAGS (IMMEDIATE LIFE THREATS)</h4>
                    <div style="background:#f8d7da; padding:15px; border-radius:12px; margin:10px 0;">
                        <ul style="margin:0; color:#721c24;">
                            <li>Apnoea, pulselessness, severe haemorrhage</li>
                            <li>Altered mental status (AVPU < A, GCS ≤8 or deteriorating)</li>
                            <li>Hypoxia (SpO₂ <90% on O₂) / hypotension (SBP <90)</li>
                            <li>High‑risk MOI: fall >10ft, high‑speed MVC, ejection, death in same vehicle, pedestrian vs vehicle</li>
                            <li>Signs of severe shock, STEMI, uncontrolled dysrhythmia</li>
                        </ul>
                    </div>

                    <h4>7. VASCULAR ACCESS & FLUIDS</h4>
                    <ul>
                        <li>IV access if deterioration risk, fluid/medication need. IO if IV fails.</li>
                        <li>Crystalloid (Normal Saline / Ringer's Lactate) for hypotension/shock. Adult: 250‑500 mL bolus, reassess; max 2000 mL. Paeds: 20 mL/kg, max 60 mL/kg.</li>
                    </ul>

                    <h4>8. REASSESSMENT INTERVALS</h4>
                    <ul>
                        <li><span style="background:#ffcccc; padding:3px 8px; border-radius:20px;">🔴 Red (critical):</span> every <strong>5 minutes</strong></li>
                        <li><span style="background:#fff3cd; padding:3px 8px; border-radius:20px;">🟡 Yellow (serious):</span> every <strong>10 minutes</strong></li>
                        <li><span style="background:#d4edda; padding:3px 8px; border-radius:20px;">🟢 Green (stable):</span> every <strong>15 minutes</strong></li>
                        <li>Reassess LOC, airway, breathing, circulation, vitals, interventions, response.</li>
                    </ul>

                    <h4>9. TELE‑EMS CONSULTATION</h4>
                    <ul>
                        <li>For complex cases, skill outside scope, or 12‑lead interpretation.</li>
                        <li>Not mandatory for every case; do not delay essential interventions.</li>
                    </ul>

                    <h4>10. PATIENT HANDOVER (IMIST‑AMBO)</h4>
                    <ul>
                        <li><strong>I</strong> – Identification</li>
                        <li><strong>M</strong> – Mechanism/Medical complaint</li>
                        <li><strong>I</strong> – Injuries/Information</li>
                        <li><strong>S</strong> – Signs (vitals)</li>
                        <li><strong>T</strong> – Treatment</li>
                        <li><strong>A</strong> – Allergies</li>
                        <li><strong>M</strong> – Medications</li>
                        <li><strong>B</strong> – Background</li>
                        <li><strong>O</strong> – Other info</li>
                    </ul>

                    <h4>11. DOCUMENTATION (ePCR)</h4>
                    <ul>
                        <li>Must include: identification, MOI/medical complaint, injuries, signs, treatment, allergies, medications, background, other.</li>
                        <li>Timestamps for all critical events and reassessments.</li>
                    </ul>

                    <h4>12. SPECIAL POPULATIONS</h4>
                    <ul>
                        <li><strong>Paediatrics:</strong> ≤13 years. Use Broselow tape for weight/meds. PAT = Appearance, Work of Breathing, Circulation to skin.</li>
                        <li><strong>Geriatrics:</strong> ≥65 years. Reduced doses for renal/hepatic impairment. Higher risk of under‑triage.</li>
                        <li><strong>Comorbidities:</strong> adjust medication doses for renal/hepatic disease.</li>
                    </ul>

                    <h4>13. AIRWING CONSIDERATIONS</h4>
                    <ul>
                        <li>For time‑critical patients with ground transport >30 min.</li>
                        <li><strong>Exclusions:</strong> imminent birth, violent patients.</li>
                    </ul>
                </div>
                <div class="sum-card" style="border-left-color: #dc3545;">
                    <h3 style="color:#dc3545;">🚨 CRITICAL RED FLAGS – IMMEDIATE ACTION</h3>
                    <div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:15px;">
                        <span style="background:#f8d7da; padding:5px 12px; border-radius:20px; font-weight:600;">Apnoea / pulseless</span>
                        <span style="background:#f8d7da; padding:5px 12px; border-radius:20px; font-weight:600;">GCS ≤8 or ↓</span>
                        <span style="background:#f8d7da; padding:5px 12px; border-radius:20px; font-weight:600;">SpO₂ <90%</span>
                        <span style="background:#f8d7da; padding:5px 12px; border-radius:20px; font-weight:600;">SBP <90</span>
                        <span style="background:#f8d7da; padding:5px 12px; border-radius:20px; font-weight:600;">Uncontrolled haemorrhage</span>
                        <span style="background:#f8d7da; padding:5px 12px; border-radius:20px; font-weight:600;">STEMI / dysrhythmia + shock</span>
                        <span style="background:#f8d7da; padding:5px 12px; border-radius:20px; font-weight:600;">Significant MOI</span>
                    </div>
                    <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                        <strong>🎯 KPI:</strong> ALS backup requested within 1 minute of red flag identification.
                    </div>
                </div>
            `,
            quiz: [
                // 60 questions – 1.1 Universal Care
                { q: "What is the correct assessment sequence for a Trauma patient?", options: ["A-B-C-D-E", "C-A-B-C", "D-R-A-B-C", "M-A-R-C-H"], correct: 1, explanation: "C‑A‑B‑C: Catastrophic Haemorrhage/C‑spine, Airway, Breathing, Circulation. In trauma, catastrophic bleeding is the first priority, followed by c-spine control, then airway, breathing, and circulation." },
                { q: "What is the assessment sequence for a Medical patient?", options: ["A-B-C-D-E", "C-A-B-C", "D-R-A-B-C", "Safety-First"], correct: 0, explanation: "Medical patients follow A‑B‑C: Airway, Breathing, Circulation, Disability, Exposure. This is the standard approach when no traumatic mechanism is present." },
                { q: "What is the assessment sequence for Cardiac Arrest?", options: ["A-B-C", "C-A-B", "D-R-A-B-C", "B-A-C"], correct: 1, explanation: "Cardiac arrest: C‑A‑B (Compressions, Airway, Breathing). Chest compressions are started immediately to circulate blood, followed by airway opening and rescue breaths." },
                { q: "What are the 3 elements of the 'General Impression'?", options: ["Airway, Breathing, Circ", "Appearance, Breathing, Activity", "Alertness, Bleeding, Color", "Age, Body type, Complaint"], correct: 1, explanation: "General Impression = Appearance, Work of Breathing, and Circulation/Activity (mental status). In paediatrics this is formalised as the Pediatric Assessment Triangle (PAT)." },
                { q: "In the AVPU scale, what does 'P' stand for?", options: ["Pulse", "Pain", "Pupils", "Pallor"], correct: 1, explanation: "AVPU: Alert, Verbal (responds to voice), Pain (responds to painful stimuli), Unresponsive. Painful stimuli include trapezius squeeze or supraorbital pressure." },
                { q: "Where do you check the pulse on an unconscious adult?", options: ["Radial", "Carotid", "Femoral", "Brachial"], correct: 1, explanation: "Carotid artery is the central pulse used in unconscious adults. Check for at least 5 but no more than 10 seconds." },
                { q: "Where do you check the pulse on an infant (<1 year)?", options: ["Carotid", "Brachial", "Radial", "Popliteal"], correct: 1, explanation: "Brachial pulse (upper arm) is recommended for infants. The neck is often too short to reliably palpate the carotid." },
                { q: "Normal capillary refill time (CRT) is less than:", options: ["1 second", "2 seconds", "3 seconds", "5 seconds"], correct: 1, explanation: "Normal CRT is <2 seconds. Delayed refill (>2s) indicates poor perfusion and possible shock." },
                { q: "What is the absolute FIRST step in any call?", options: ["Airway", "Scene Safety", "Circulation", "Call Dispatch"], correct: 1, explanation: "Scene safety is always the first priority. You cannot help the patient if you become a patient yourself." },
                { q: "What does 'D' stand for in ABCDE?", options: ["Deformity", "Disability", "Danger", "Disease"], correct: 1, explanation: "Disability – rapid neurological assessment: AVPU, GCS, pupils, and blood glucose." },
                { q: "What is the target SpO₂ for a COPD patient?", options: ["100%", "94-98%", "88-92%", ">95%"], correct: 2, explanation: "88‑92% is the target for COPD patients to avoid suppressing their hypoxic drive. Higher SpO₂ can lead to hypercapnia and respiratory failure." },
                { q: "Hypotension in an adult is defined as SBP below:", options: ["110 mmHg", "100 mmHg", "90 mmHg", "80 mmHg"], correct: 2, explanation: "SBP <90 mmHg is the standard threshold for hypotension in adults." },
                { q: "You initiate hypoglycaemia treatment if BGL is below:", options: ["80 mg/dl", "70 mg/dl", "60 mg/dl", "100 mg/dl"], correct: 1, explanation: "Treat if BGL <70 mg/dl and the patient is symptomatic. Asymptomatic patients may still require treatment." },
                { q: "What does EtCO₂ monitoring measure?", options: ["Oxygen in blood", "Carbon dioxide exhaled", "Carbon monoxide", "pH balance"], correct: 1, explanation: "End‑tidal CO₂ measures the concentration of carbon dioxide in exhaled breath. It is the gold standard for confirming advanced airway placement and monitoring CPR quality." },
                { q: "Normal EtCO₂ range is:", options: ["20-30 mmHg", "35-45 mmHg", "45-55 mmHg", "90-100 mmHg"], correct: 1, explanation: "35‑45 mmHg is the normal physiological range for end‑tidal CO₂." },
                { q: "How often do you reassess a 'Red' (Critical) patient?", options: ["5 min", "10 min", "15 min", "Continuous"], correct: 0, explanation: "Red (critical) patients must be reassessed every 5 minutes, including vital signs, interventions, and response to treatment." },
                { q: "How often do you reassess a 'Green' (Non‑Critical) patient?", options: ["5 min", "10 min", "15 min", "30 min"], correct: 2, explanation: "Green (stable, minor) patients require reassessment every 15 minutes." },
                { q: "In SAMPLE history, what does 'L' stand for?", options: ["Last oral intake", "Last menstrual period", "Level of consciousness", "Location"], correct: 0, explanation: "SAMPLE: Signs/Symptoms, Allergies, Medications, Past history, Last oral intake, Events leading up." },
                { q: "In OPQRST, what does 'P' stand for?", options: ["Past History", "Provocation/Palliation", "Pain Score", "Pulse"], correct: 1, explanation: "OPQRST: Onset, Provocation/Palliation (what makes it better/worse), Quality, Radiation, Severity, Time." },
                { q: "Which mnemonic is used for Stroke Assessment?", options: ["SAMPLE", "BEFAST", "OPQRST", "AEIOU"], correct: 1, explanation: "BEFAST: Balance (sudden loss), Eyes (vision loss), Face (droop), Arms (drift), Speech (slurred), Time (last known well)." },
                { q: "What is the normal heart rate for an adult at rest?", options: ["50-90 bpm", "60-100 bpm", "70-110 bpm", "80-120 bpm"], correct: 1, explanation: "60‑100 bpm is the standard adult range." },
                { q: "What is the normal respiratory rate for an adult?", options: ["8-12/min", "12-20/min", "16-24/min", "20-30/min"], correct: 1, explanation: "12‑20 breaths per minute is the normal range for a healthy adult at rest." },
                { q: "What is the definition of bradycardia in an adult?", options: ["<50 bpm", "<60 bpm", "<70 bpm", "<80 bpm"], correct: 1, explanation: "Bradycardia is defined as a heart rate <60 bpm in adults." },
                { q: "What is the definition of tachycardia in an adult?", options: [">90 bpm", ">100 bpm", ">110 bpm", ">120 bpm"], correct: 1, explanation: "Tachycardia is defined as a heart rate >100 bpm in adults." },
                { q: "What is the normal systolic BP for a newborn (0-1 month)?", options: ["39-59 mmHg", "60-76 mmHg", "67-84 mmHg", "72-104 mmHg"], correct: 1, explanation: "Newborn SBP range is 60‑76 mmHg (DCAS CPG 1.1 vital signs table)." },
                { q: "What is the normal systolic BP for a child 6-10 years?", options: ["89-112 mmHg", "97-115 mmHg", "102-120 mmHg", "110-131 mmHg"], correct: 1, explanation: "SBP 97‑115 mmHg is normal for children aged 6‑10 years." },
                { q: "What is the target SpO₂ for a standard medical patient?", options: ["90-94%", "94-98%", "98-100%", "88-92%"], correct: 1, explanation: "Aim for SpO₂ 94‑98%. Avoid hyperoxia (100%) as it may cause vasoconstriction." },
                { q: "What does 'C' stand for in the trauma C‑ABC approach?", options: ["Circulation", "C‑spine control", "Catastrophic haemorrhage", "Chest compressions"], correct: 2, explanation: "C = Catastrophic haemorrhage. Life‑threatening external bleeding must be controlled before airway assessment in trauma." },
                { q: "What is the Glasgow Coma Scale (GCS) range?", options: ["1-10", "3-15", "0-14", "5-20"], correct: 1, explanation: "GCS ranges from 3 (deep coma) to 15 (fully alert). It assesses eye, verbal, and motor responses." },
                { q: "What is the verbal response score for 'Confused' in adults?", options: ["5", "4", "3", "2"], correct: 1, explanation: "GCS verbal: 5 = oriented, 4 = confused, 3 = inappropriate words, 2 = incomprehensible sounds, 1 = none." },
                { q: "In DCAP‑BTLS, what does 'B' stand for?", options: ["Bleeding", "Burns", "Bruising", "Breath sounds"], correct: 1, explanation: "DCAP‑BTLS: Deformities, Contusions, Abrasions, Punctures/Penetrations, Burns, Tenderness, Lacerations, Swelling." },
                { q: "In SAMPLE history, what does 'A' stand for?", options: ["Age", "Allergies", "Appearance", "Airway"], correct: 1, explanation: "SAMPLE: Signs/symptoms, Allergies, Medications, Past history, Last oral intake, Events." },
                { q: "In OPQRST, what does 'R' stand for?", options: ["Rate", "Rhythm", "Radiation", "Reaction"], correct: 2, explanation: "OPQRST: Onset, Provocation, Quality, Radiation (does pain move?), Severity, Time." },
                { q: "In IMIST‑AMBO, what does 'I' stand for?", options: ["Injuries", "Identification", "Illness", "Intake"], correct: 1, explanation: "IMIST‑AMBO: Identification, Mechanism/Medical complaint, Injuries/Information, Signs, Treatment, Allergies, Medications, Background, Other." },
                { q: "In IMIST‑AMBO, what does 'S' stand for?", options: ["Symptoms", "Signs", "Severity", "Scene"], correct: 1, explanation: "S = Signs (vital signs and key physical exam findings)." },
                { q: "What does 'AEIOU‑TIPS' help assess?", options: ["Chest pain", "Altered mental status", "Trauma triage", "Respiratory distress"], correct: 1, explanation: "AEIOU‑TIPS is a mnemonic for causes of altered mental status: Alcohol/Abuse, Epilepsy/Electrolytes, Insulin, Overdose/Oxygen, Uremia, Trauma/Tumor, Infection, Psych/Poisoning, Stroke/Sepsis." },
                { q: "What does 'PASTE' assess?", options: ["Respiratory distress", "Cardiac chest pain", "Stroke", "Abdominal pain"], correct: 0, explanation: "PASTE is a respiratory assessment mnemonic: Provocation, Associated chest pain, Sputum, Talking tiredness, Exacerbation." },
                { q: "What is the APGAR score component for 'Appearance'?", options: ["Color", "Pulse", "Grimace", "Activity"], correct: 0, explanation: "APGAR: Appearance (skin color), Pulse (heart rate), Grimace (reflex irritability), Activity (muscle tone), Respiration (crying/breathing)." },
                { q: "What is the normal APGAR score range?", options: ["0-5", "0-10", "1-8", "5-15"], correct: 1, explanation: "APGAR score 0‑10; 7‑10 is reassuring, 4‑6 moderately abnormal, 0‑3 low." },
                { q: "In SLUDGE, what does 'U' stand for?", options: ["Urination", "Unresponsiveness", "Uremia", "Ulcers"], correct: 0, explanation: "SLUDGE – cholinergic toxidrome: Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis." },
                { q: "What is the adult CPR compression:ventilation ratio (single rescuer)?", options: ["15:2", "30:2", "20:2", "10:1"], correct: 1, explanation: "30 compressions to 2 breaths for all adults (single or two rescuers)." },
                { q: "What is the pediatric CPR ratio for two rescuers?", options: ["30:2", "15:2", "20:2", "5:1"], correct: 1, explanation: "15:2 for children/infants with two rescuers. Single rescuer uses 30:2." },
                { q: "What is the recommended compression rate for CPR?", options: ["80-100/min", "100-120/min", "120-140/min", "90-110/min"], correct: 1, explanation: "100‑120 compressions per minute." },
                { q: "What is the correct compression depth for an adult?", options: ["At least 2 cm", "At least 5 cm", "3-4 cm", "6-7 cm"], correct: 1, explanation: "At least 5 cm (2 inches), no more than 6 cm (2.4 inches)." },
                { q: "How often should you switch compressors during CPR?", options: ["Every 1 min", "Every 2 mins", "Every 5 mins", "When tired"], correct: 1, explanation: "Switch every 2 minutes (approx 5 cycles) to maintain high‑quality compressions." },
                { q: "What is the maximum interruption time for pulses/breaths during CPR?", options: ["5 sec", "10 sec", "15 sec", "20 sec"], correct: 1, explanation: "Interruptions should be <10 seconds." },
                { q: "Where is the correct hand placement for adult CPR?", options: ["Upper half of sternum", "Lower half of sternum", "Left side of chest", "Right side of chest"], correct: 1, explanation: "Place hands on the lower half of the sternum (centre of chest)." },
                { q: "With an advanced airway in place, how often do you ventilate during CPR?", options: ["1 breath every 3 sec", "1 breath every 6 sec", "1 breath every 10 sec", "Asynchronous with compressions"], correct: 1, explanation: "1 breath every 6 seconds (10 breaths/min) without pausing compressions." },
                { q: "What is the first drug for non‑shockable cardiac arrest?", options: ["Amiodarone", "Atropine", "Adrenaline (Epinephrine)", "Lidocaine"], correct: 2, explanation: "Adrenaline 1 mg IV/IO every 3‑5 minutes is first line for asystole/PEA." },
                { q: "What is the standard energy for first biphasic defibrillation?", options: ["100J", "120‑200J", "360J", "50J"], correct: 1, explanation: "Manufacturer‑specific, typically 120‑200J for biphasic defibrillators." },
                { q: "What is the safe parking distance from a burning vehicle?", options: ["15m", "30m", "50m", "100m"], correct: 2, explanation: "At least 30‑50m (100‑165ft), ideally uphill and upwind." },
                { q: "In HazMat, which zone is the 'Hot Zone'?", options: ["Support zone", "Contamination zone", "Safe zone", "Decon zone"], correct: 1, explanation: "Hot Zone = contamination/exclusion zone; Warm Zone = decontamination; Cold Zone = support/command." },
                { q: "Is imminent birth an exclusion for Airwing transport?", options: ["True", "False"], correct: 0, explanation: "True – delivering in a helicopter is dangerous due to space and equipment limitations. Ground transport is preferred." },
                { q: "Are violent patients eligible for Airwing?", options: ["True", "False"], correct: 1, explanation: "False – violent patients pose a catastrophic safety risk to the aircraft and crew." },
                { q: "What PPE is required for Standard Precautions?", options: ["Gloves only", "Gloves & Glasses", "Gloves, Mask, Glasses, Gown (risk‑based)", "Mask only"], correct: 2, explanation: "Standard precautions require risk‑based PPE: gloves, mask, eye protection, and gown when exposure to body fluids is anticipated." },
                { q: "When lifting, you should primarily use your:", options: ["Back", "Legs/Hips", "Arms", "Shoulders"], correct: 1, explanation: "Lift with legs, keep back straight, weight close to body (power lift)." },
                { q: "When is a tourniquet indicated?", options: ["Minor cuts", "Venous bleeding", "Uncontrolled arterial limb bleed", "Head wounds"], correct: 2, explanation: "Tourniquets are for life‑threatening arterial haemorrhage on a limb that cannot be controlled by direct pressure." },
                { q: "What is the 'Golden Hour' in trauma?", options: ["Time to eat", "Time from injury to surgery", "Time on scene", "Time to call dispatch"], correct: 1, explanation: "The Golden Hour is the 60‑minute window from injury to definitive surgical care – survival is highest within this time." },
                { q: "The Pediatric Assessment Triangle (PAT) consists of Appearance, Circulation, and:", options: ["Airway", "Work of Breathing", "Bleeding", "Alertness"], correct: 1, explanation: "PAT = Appearance, Work of Breathing, Circulation to Skin." },
                { q: "In Dubai CPGs, a pediatric patient is defined as age:", options: ["<12", "≤13", "<16", "<18"], correct: 1, explanation: "13 years and under is the pediatric definition in Dubai CPG 2025." }
            ],
            flashcards: [
                // 60 flashcards – 1.1 Universal Care
                { category: "Primary Survey", question: "Trauma assessment sequence?", answer: "C‑A‑B‑C\n1. Catastrophic Haemorrhage (tourniquet, hemostatic dressing)\n2. C‑spine manual stabilisation\n3. Airway (jaw thrust, suction, OPA/NPA)\n4. Breathing (assess, O₂, BVM)\n5. Circulation (pulse, skin, IV fluids)" },
                { category: "Primary Survey", question: "Medical patient assessment?", answer: "A‑B‑C\nAirway → Breathing → Circulation\nThen Disability (AVPU, GCS, pupils, BGL) and Exposure (remove clothing, prevent hypothermia)" },
                { category: "Primary Survey", question: "Cardiac arrest sequence?", answer: "C‑A‑B\nCompressions (start immediately, 30:2) → Airway (open, OPA/NPA) → Breathing (BVM, 2 breaths)" },
                { category: "Primary Survey", question: "General Impression elements?", answer: "1. Appearance (tone, interactivity)\n2. Work of Breathing (noises, retractions, position)\n3. Circulation to skin (colour, pallor, cyanosis)" },
                { category: "AVPU", question: "What does AVPU stand for?", answer: "Alert (A) – eyes open, tracking\nVerbal (V) – responds to voice\nPain (P) – responds to pain/pressure\nUnresponsive (U) – no response" },
                { category: "Vitals", question: "Normal adult pulse?", answer: "60‑100 beats per minute\n<60 = bradycardia\n>100 = tachycardia" },
                { category: "Vitals", question: "Normal adult respiratory rate?", answer: "12‑20 breaths per minute" },
                { category: "Vitals", question: "Normal CRT?", answer: "< 2 seconds" },
                { category: "Vitals", question: "SpO₂ target (standard)?", answer: ">94% (94‑98%)" },
                { category: "Vitals", question: "SpO₂ target (COPD)?", answer: "88‑92%" },
                { category: "Shock", question: "Hypotension threshold?", answer: "SBP <90 mmHg (adult)" },
                { category: "Hypoglycaemia", question: "Treat BGL below?", answer: "<70 mg/dl" },
                { category: "Monitoring", question: "EtCO₂ normal range?", answer: "35‑45 mmHg" },
                { category: "Reassessment", question: "Red priority interval?", answer: "Every 5 minutes" },
                { category: "Reassessment", question: "Green priority interval?", answer: "Every 15 minutes" },
                { category: "Mnemonics", question: "DCAP‑BTLS – what does S stand for?", answer: "Swelling\nFull mnemonic: Deformities, Contusions, Abrasions, Punctures/Penetrations, Burns, Tenderness, Lacerations, Swelling" },
                { category: "Mnemonics", question: "SAMPLE – what does L stand for?", answer: "Last oral intake\nFull: Signs/Symptoms, Allergies, Medications, Past history, Last oral intake, Events" },
                { category: "Mnemonics", question: "OPQRST – what does R stand for?", answer: "Radiation (does pain move?)\nFull: Onset, Provocation/Palliation, Quality, Radiation, Severity, Time" },
                { category: "Handover", question: "IMIST‑AMBO – what does A stand for?", answer: "Allergies\nFull: Identification, Mechanism, Injuries, Signs, Treatment, Allergies, Medications, Background, Other" },
                { category: "Handover", question: "IMIST‑AMBO – what does M stand for?", answer: "Medications" },
                { category: "Stroke", question: "BEFAST – what does B stand for?", answer: "Balance (sudden loss of balance/coordination)" },
                { category: "GCS", question: "Confused verbal response score?", answer: