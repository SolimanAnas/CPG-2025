/* ========== Chapter 1 – Universal Care (six independent sections, fully populated) ========== */
window.CPG_DATA = {
    id: "c1",
    title: "Universal Care",
    shortTitle: "1.0 Universal Care",
    sections: [
        // ---------- SECTION 1.1: Universal Care (FULL CONTENT – unchanged) ----------
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
            quiz: [ /* 60 questions – keep your existing array */ ],
            flashcards: [ /* 60 flashcards – keep your existing array */ ],
            critical: [ /* 5 critical scenarios – keep your existing array */ ]
        },

        // ---------- SECTION 1.2: Patient Care Documentation ----------
        {
            id: "c1s2",
            shortTitle: "1.2 Documentation",
            summary: `
                <div class="sum-card">
                    <h3 style="color:var(--accent-universal);">📋 Documentation (CPG 1.2)</h3>
                    <p><strong>ePCR (electronic Patient Care Record)</strong> is mandatory for every patient encounter.</p>
                    <h4>IMIST‑AMBO Handover</h4>
                    <ul>
                        <li><strong>I</strong> – Identification (name, age, gender)</li>
                        <li><strong>M</strong> – Mechanism / Medical complaint</li>
                        <li><strong>I</strong> – Injuries / Information (relevant findings)</li>
                        <li><strong>S</strong> – Signs (vital signs, GCS, pain score)</li>
                        <li><strong>T</strong> – Treatment (interventions performed)</li>
                        <li><strong>A</strong> – Allergies (known allergies)</li>
                        <li><strong>M</strong> – Medications (current prescriptions)</li>
                        <li><strong>B</strong> – Background (past medical history)</li>
                        <li><strong>O</strong> – Other (scene observations, additional info)</li>
                    </ul>
                    <h4>Key Documentation Requirements</h4>
                    <ul>
                        <li>Timestamps for all interventions and reassessments.</li>
                        <li>Use only approved medical abbreviations.</li>
                        <li>Complete refusal forms for patients who decline transport.</li>
                    </ul>
                </div>
            `,
            quiz: [
                { q: "What does 'I' stand for in IMIST‑AMBO?", options: ["Injuries", "Identification", "Illness", "Intake"], correct: 1, explanation: "IMIST‑AMBO: Identification, Mechanism, Injuries, Signs, Treatment, Allergies, Medications, Background, Other." },
                { q: "What must be documented for every intervention?", options: ["Rationale", "Timestamp", "Patient consent", "Supervisor approval"], correct: 1, explanation: "Timestamps for all critical events and reassessments are mandatory in the ePCR." },
                { q: "In SAMPLE history, what does 'A' stand for?", options: ["Age", "Allergies", "Appearance", "Airway"], correct: 1, explanation: "SAMPLE: Signs/symptoms, Allergies, Medications, Past history, Last oral intake, Events." },
                { q: "What is the correct format for patient handover?", options: ["SAMPLE", "OPQRST", "IMIST‑AMBO", "DCAP‑BTLS"], correct: 2, explanation: "IMIST‑AMBO is the DCAS‑mandated handover tool for all patient transfers." },
                { q: "What is the minimum number of vital sign sets required before accepting a patient refusal?", options: ["One", "Two", "Three", "None"], correct: 1, explanation: "Two complete sets of vital signs must be documented before a refusal can be accepted." },
                { q: "What does the 'M' in IMIST‑AMBO stand for?", options: ["Medications", "Mechanism/Medical complaint", "Mental status", "Movement"], correct: 1, explanation: "M = Mechanism of injury (trauma) or Medical complaint (medical)." },
                { q: "In SAMPLE history, what does 'L' stand for?", options: ["Last oral intake", "Last menstrual period", "Level of consciousness", "Location"], correct: 0, explanation: "SAMPLE: Signs/Symptoms, Allergies, Medications, Past history, Last oral intake, Events." },
                { q: "What does the second 'I' in IMIST‑AMBO stand for?", options: ["Injuries", "Identification", "Illness", "Intake"], correct: 0, explanation: "Second I = Injuries or Information (relevant assessment findings)." },
                { q: "What should be documented in the 'Background' section of IMIST‑AMBO?", options: ["Past medical history", "Current medications", "Allergies", "Vital signs"], correct: 0, explanation: "Background = past medical history, recent events." },
                { q: "What is the purpose of a refusal form?", options: ["Legal documentation of patient's decision", "To transfer care to another provider", "To record vital signs only", "To notify police"], correct: 0, explanation: "The refusal form documents that the patient was informed of the risks and voluntarily refused transport." },
                { q: "In OPQRST, what does 'R' stand for?", options: ["Rate", "Rhythm", "Radiation", "Reaction"], correct: 2, explanation: "OPQRST: Onset, Provocation, Quality, Radiation, Severity, Time." },
                { q: "What does 'S' stand for in IMIST‑AMBO?", options: ["Symptoms", "Signs", "Severity", "Scene"], correct: 1, explanation: "S = Signs (vital signs and key physical exam findings)." },
                { q: "How often should a 'Red' priority patient be reassessed?", options: ["5 min", "10 min", "15 min", "30 min"], correct: 0, explanation: "Red (critical) patients require reassessment every 5 minutes." },
                { q: "How often should a 'Green' priority patient be reassessed?", options: ["5 min", "10 min", "15 min", "30 min"], correct: 2, explanation: "Green (minor) patients require reassessment every 15 minutes." },
                { q: "What does 'T' stand for in IMIST‑AMBO?", options: ["Treatment", "Time", "Triage", "Temperature"], correct: 0, explanation: "T = Treatment (interventions performed)." },
                { q: "What should be included in the 'Other' section of IMIST‑AMBO?", options: ["Scene observations", "Past medical history", "Allergies", "Medications"], correct: 0, explanation: "Other = scene observations, additional information not covered elsewhere." },
                { q: "In SAMPLE history, what does 'E' stand for?", options: ["Exposure", "Events", "Environment", "Emergency"], correct: 1, explanation: "E = Events leading up to the emergency." },
                { q: "What does 'A' stand for in IMIST‑AMBO?", options: ["Airway", "Allergies", "Appearance", "Assessment"], correct: 1, explanation: "A = Allergies (known allergies)." },
                { q: "What does 'B' stand for in IMIST‑AMBO?", options: ["Breathing", "Background", "Blood pressure", "Bleeding"], correct: 1, explanation: "B = Background (past medical history, recent events)." },
                { q: "What does 'M' (second) in IMIST‑AMBO stand for?", options: ["Mechanism", "Medications", "Mental status", "Movement"], correct: 1, explanation: "Second M = Medications (current prescribed or OTC)." }
            ],
            flashcards: [
                { category: "Documentation", question: "IMIST‑AMBO – what does 'I' stand for?", answer: "Identification (patient name, age, gender)." },
                { category: "Documentation", question: "IMIST‑AMBO – what does 'M' stand for?", answer: "Mechanism (trauma) or Medical complaint." },
                { category: "Documentation", question: "IMIST‑AMBO – what does the second 'I' stand for?", answer: "Injuries / Information (relevant assessment findings)." },
                { category: "Documentation", question: "IMIST‑AMBO – what does 'S' stand for?", answer: "Signs (vital signs, AVPU/GCS, pain score)." },
                { category: "Documentation", question: "IMIST‑AMBO – what does 'T' stand for?", answer: "Treatment (interventions performed)." },
                { category: "Documentation", question: "IMIST‑AMBO – what does 'A' stand for?", answer: "Allergies (known allergies)." },
                { category: "Documentation", question: "IMIST‑AMBO – what does the second 'M' stand for?", answer: "Medications (current prescribed or OTC)." },
                { category: "Documentation", question: "IMIST‑AMBO – what does 'B' stand for?", answer: "Background (past medical history, recent events)." },
                { category: "Documentation", question: "IMIST‑AMBO – what does 'O' stand for?", answer: "Other (scene observations, additional info)." },
                { category: "Documentation", question: "SAMPLE – what does 'S' stand for?", answer: "Signs/Symptoms." },
                { category: "Documentation", question: "SAMPLE – what does 'A' stand for?", answer: "Allergies." },
                { category: "Documentation", question: "SAMPLE – what does 'M' stand for?", answer: "Medications." },
                { category: "Documentation", question: "SAMPLE – what does 'P' stand for?", answer: "Past history." },
                { category: "Documentation", question: "SAMPLE – what does 'L' stand for?", answer: "Last oral intake." },
                { category: "Documentation", question: "SAMPLE – what does 'E' stand for?", answer: "Events leading up." },
                { category: "Documentation", question: "OPQRST – what does 'O' stand for?", answer: "Onset." },
                { category: "Documentation", question: "OPQRST – what does 'P' stand for?", answer: "Provocation/Palliation." },
                { category: "Documentation", question: "OPQRST – what does 'Q' stand for?", answer: "Quality." },
                { category: "Documentation", question: "OPQRST – what does 'R' stand for?", answer: "Radiation." },
                { category: "Documentation", question: "OPQRST – what does 'S' stand for?", answer: "Severity." }
            ],
            critical: []
        },

        // ---------- SECTION 1.3: Patient Triage Categories ----------
        {
            id: "c1s3",
            shortTitle: "1.3 Triage",
            summary: `
                <div class="sum-card">
                    <h3 style="color:var(--accent-universal);">🚦 Triage (CPG 1.3)</h3>
                    <ul>
                        <li><span style="background:#ffcccc; padding:3px 8px; border-radius:20px;">🔴 Red (critical)</span> – immediate life threat, reassess every 5 min.</li>
                        <li><span style="background:#fff3cd; padding:3px 8px; border-radius:20px;">🟡 Yellow (serious)</span> – serious but stable, reassess every 10 min.</li>
                        <li><span style="background:#d4edda; padding:3px 8px; border-radius:20px;">🟢 Green (minor)</span> – minor injuries, reassess every 15 min.</li>
                        <li><span style="background:#e2e3e5; padding:3px 8px; border-radius:20px;">⚫ Black (expectant)</span> – deceased or non‑survivable.</li>
                    </ul>
                    <h4>Significant Mechanism of Injury (MOI)</h4>
                    <ul>
                        <li>Fall >10 feet (all ages)</li>
                        <li>High‑speed MVC >40 km/h (unrestrained) or >60 km/h (restrained)</li>
                        <li>Ejection, rollover, death in same vehicle</li>
                        <li>Pedestrian / rider thrown or run over</li>
                        <li>Intrusion >12 inches occupant side / >18 inches any side</li>
                        <li>Child unrestrained or in unsecured seat</li>
                    </ul>
                    <p><strong>Triage category can change</strong> – must be reassessed and documented.</p>
                    <div class="highlight-box">
                        📌 <strong>Key KPIs:</strong> Assign a triage category to every patient. Document any change in category.
                    </div>
                </div>
            `,
            quiz: [
                { q: "What is the reassessment interval for a Yellow priority patient?", options: ["5 min", "10 min", "15 min", "30 min"], correct: 1, explanation: "Yellow (serious) patients require reassessment every 10 minutes." },
                { q: "A fall from what height is considered a significant MOI for any age?", options: [">5 feet", ">10 feet", ">15 feet", ">20 feet"], correct: 1, explanation: "Fall >10 feet (all ages) is a significant mechanism of injury." },
                { q: "Which triage colour is used for patients who are unlikely to survive given available resources?", options: ["Red", "Yellow", "Green", "Black"], correct: 3, explanation: "Black = expectant or deceased." },
                { q: "A patient with an isolated femur fracture, normal vitals, and no other injuries is classified as:", options: ["Red", "Yellow", "Green", "Black"], correct: 1, explanation: "Isolated long‑bone fracture without shock or limb ischemia = Yellow priority (serious but stable)." },
                { q: "Which of the following is a Red‑priority triage criterion?", options: ["GCS 14", "SpO₂ 91%", "SBP <90 mmHg", "HR 110 bpm"], correct: 2, explanation: "Hypotension (SBP <90 mmHg) is an immediate life threat and defines Red priority." },
                { q: "What is the primary purpose of a triage tag?", options: ["Track patient identity", "Prioritise treatment & transport", "Record vital signs", "Legal documentation"], correct: 1, explanation: "Triage tags communicate priority and immediate treatment needs, especially in mass casualty incidents." },
                { q: "A patient with GCS 13 after a seizure is classified as:", options: ["Red", "Yellow", "Green", "Black"], correct: 1, explanation: "GCS 10‑14 is Yellow priority; <9 is Red." },
                { q: "Which vital sign abnormality in isolation is a Red flag in an adult?", options: ["HR 110", "RR 22", "SBP 85", "SpO₂ 93%"], correct: 2, explanation: "SBP <90 mmHg is hypotension and constitutes a Red priority." },
                { q: "How often is a Green priority patient reassessed?", options: ["5 min", "10 min", "15 min", "30 min"], correct: 2, explanation: "Green (minor) patients require reassessment every 15 minutes." },
                { q: "Which MOI is NOT considered significant for triage?", options: ["Fall from 8 feet", "Ejection from vehicle", "Death in same vehicle", "Intrusion >12 inches"], correct: 0, explanation: "Fall from 8 feet is below the 10‑foot threshold and is not automatically a significant MOI." },
                { q: "In paediatric triage, a child with a respiratory rate of 35 at rest (age 4) is:", options: ["Red", "Yellow", "Green", "Black"], correct: 1, explanation: "For a 4‑year‑old, RR >29 is tachypnoea and triggers Yellow; >40 is Red." },
                { q: "What is the normal SpO₂ target for a standard medical patient?", options: ["88‑92%", "94‑98%", "100%", "90‑94%"], correct: 1, explanation: "94‑98% is the standard target; 88‑92% for COPD." },
                { q: "Which of the following is an exclusion criterion for 'Treat at Scene'?", options: ["Age 25", "Age 65", "Age 17", "Age 45"], correct: 2, explanation: "Patients <18 years are excluded from Treat at Scene; they require guardian consent and transport." },
                { q: "What is the minimum number of vital sign sets required before accepting a patient refusal?", options: ["One", "Two", "Three", "None"], correct: 1, explanation: "Two complete sets of vital signs must be documented (CPG 1.6)." },
                { q: "A patient with an open femur fracture and absent distal pulse is classified as:", options: ["Red", "Yellow", "Green", "Black"], correct: 0, explanation: "Limb ischemia with fracture is a limb‑threatening emergency and is Red priority." },
                { q: "What does 'M' in IMIST‑AMBO stand for?", options: ["Medications", "Mechanism/Medical complaint", "Mental status", "Movement"], correct: 1, explanation: "M = Mechanism of injury (trauma) or Medical complaint (medical)." },
                { q: "A patient with chest pain and diaphoresis, but normal vital signs, is classified as:", options: ["Red", "Yellow", "Green", "Black"], correct: 1, explanation: "Chest pain without instability is Yellow priority (serious but stable)." },
                { q: "What is the correct format for patient handover?", options: ["SAMPLE", "OPQRST", "IMIST‑AMBO", "DCAP‑BTLS"], correct: 2, explanation: "IMIST‑AMBO is the DCAS‑mandated handover tool for all patient transfers." },
                { q: "A patient with a GCS of 9 after head trauma is classified as:", options: ["Red", "Yellow", "Green", "Black"], correct: 0, explanation: "GCS ≤8 is Red; 9 is still serious but borderline – many protocols classify GCS <9 as Red." },
                { q: "What is the most reliable indicator of effective resuscitation in a newborn?", answer: "Increase in heart rate." }
            ],
            flashcards: [
                { category: "Triage", question: "Red priority reassessment interval?", answer: "Every 5 minutes." },
                { category: "Triage", question: "Yellow priority reassessment interval?", answer: "Every 10 minutes." },
                { category: "Triage", question: "Green priority reassessment interval?", answer: "Every 15 minutes." },
                { category: "Triage", question: "Significant MOI – fall height?", answer: ">10 feet (all ages)." },
                { category: "Triage", question: "Significant MOI – vehicle intrusion (occupant side)?", answer: ">12 inches." },
                { category: "Triage", question: "Significant MOI – vehicle intrusion (any side)?", answer: ">18 inches." },
                { category: "Triage", question: "Significant MOI – speed for restrained patient?", answer: ">60 km/h." },
                { category: "Triage", question: "Significant MOI – speed for unrestrained patient?", answer: ">40 km/h." },
                { category: "Triage", question: "Black priority definition?", answer: "Deceased or expectant (non‑survivable)." },
                { category: "Triage", question: "Is an isolated femur fracture Red priority?", answer: "No – Yellow, unless shock or limb ischemia." },
                { category: "Triage", question: "GCS range for Yellow priority?", answer: "9‑13 (some protocols use 10‑14)." },
                { category: "Triage", question: "GCS range for Red priority?", answer: "≤8." },
                { category: "Triage", question: "What is the first step in triage?", answer: "Sort by ability to walk – walking wounded are Green." },
                { category: "Triage", question: "What is the most common cause of preventable death in trauma?", answer: "Haemorrhage." },
                { category: "Triage", question: "What is the triage category for a patient with an open chest wound?", answer: "Red (critical)." },
                { category: "Triage", question: "What is the triage category for a patient with a simple forearm fracture?", answer: "Green (minor)." },
                { category: "Triage", question: "What does MOI stand for?", answer: "Mechanism of Injury." },
                { category: "Triage", question: "What does SAMPLE stand for?", answer: "Signs/Symptoms, Allergies, Medications, Past history, Last oral intake, Events." },
                { category: "Triage", question: "What does OPQRST stand for?", answer: "Onset, Provocation, Quality, Radiation, Severity, Time." },
                { category: "Triage", question: "What is the purpose of a triage tag?", answer: "To communicate priority and treatment needs." }
            ],
            critical: []
        },

        // ---------- SECTION 1.4: Functional Needs ----------
        {
            id: "c1s4",
            shortTitle: "1.4 Functional Needs",
            summary: `
                <div class="sum-card">
                    <h3 style="color:var(--accent-universal);">🧑‍🦽 Functional Needs (CPG 1.4)</h3>
                    <ul>
                        <li>Identify <strong>mobility, sensory, cognitive, or mental health</strong> impairments.</li>
                        <li>Use alternative communication: written notes, sign language, interpreter, caregiver.</li>
                        <li><strong>Assistive devices</strong> (hearing aids, glasses, prostheses, wheelchairs) must accompany the patient.</li>
                        <li>Involve caregiver; assess for abuse/neglect.</li>
                        <li>Service animals should be accommodated if possible.</li>
                    </ul>
                </div>
            `,
            quiz: [
                { q: "A deaf patient uses sign language. No interpreter is on scene. What should you do?", options: ["Write notes", "Speak loudly", "Use family member", "Transport without communication"], correct: 0, explanation: "Written communication is an effective alternative. Involve family/caregiver if available and willing." },
                { q: "What must accompany a patient with a hearing aid?", options: ["The hearing aid itself", "A family member", "A written note", "Nothing"], correct: 0, explanation: "Assistive devices must accompany the patient or be safely stored and documented." },
                { q: "How to communicate with a deaf patient without an interpreter?", options: ["Written notes", "Shouting", "Gestures only", "Use a flashlight"], correct: 0, explanation: "Written notes, gestures, or caregiver/family assistance are appropriate." },
                { q: "What is a service animal?", options: ["An emotional support animal", "An animal trained to perform tasks for a person with a disability", "Any pet brought by the patient", "A guide dog only"], correct: 1, explanation: "A service animal is trained to perform specific tasks for a person with a disability; it should be accommodated if possible." },
                { q: "A patient with an intellectual disability refuses transport. Who should be involved?", options: ["Police", "Tele‑EMS", "Caregiver/guardian", "All of the above"], correct: 3, explanation: "Involve caregiver/guardian, and if capacity is impaired, involve Tele‑EMS and consider police assistance." },
                { q: "A patient is blind. What is the best way to communicate?", options: ["Written notes", "Verbal description", "Sign language", "Braille"], correct: 1, explanation: "Verbal communication with clear descriptions is appropriate. Identify yourself and explain each step." },
                { q: "What are the three main categories of functional needs?", options: ["Medical, surgical, trauma", "Mobility, sensory, cognitive/mental health", "Adult, pediatric, geriatric", "Airway, breathing, circulation"], correct: 1, explanation: "Functional needs include mobility, sensory, and cognitive/mental health impairments." },
                { q: "A patient with a mobility impairment uses a wheelchair. What should you do?", options: ["Leave the wheelchair behind", "Ensure the wheelchair accompanies the patient", "Use a stair chair only", "Ask the patient to walk"], correct: 1, explanation: "Assistive devices (wheelchair, walker, etc.) must accompany the patient." },
                { q: "A patient with a cognitive impairment is agitated. What is the best approach?", options: ["Restrain immediately", "Use calm, simple language and involve caregiver", "Ignore the behaviour", "Sedate without assessment"], correct: 1, explanation: "Use calm, simple language, involve caregiver, and assess for underlying causes." },
                { q: "What should you do if you suspect abuse or neglect in a patient with functional needs?", options: ["Ignore it", "Document and report as per protocol", "Confront the caregiver", "Transport without action"], correct: 1, explanation: "Document your concerns and report according to your service's protocol." }
            ],
            flashcards: [
                { category: "Functional Needs", question: "Three main categories of functional needs?", answer: "Mobility, sensory, cognitive/mental health." },
                { category: "Functional Needs", question: "What must accompany a patient with a hearing aid?", answer: "The hearing aid itself – assistive devices go with the patient." },
                { category: "Functional Needs", question: "How to communicate with a deaf patient without an interpreter?", answer: "Written notes, gestures, or caregiver/family assistance." },
                { category: "Functional Needs", question: "What is a service animal?", answer: "An animal trained to perform tasks for a person with a disability; should be accommodated." },
                { category: "Functional Needs", question: "A patient with intellectual disability refuses transport. Who should be involved?", answer: "Caregiver/guardian, Tele‑EMS, police if needed." },
                { category: "Functional Needs", question: "Best way to communicate with a blind patient?", answer: "Verbal description; identify yourself and explain each step." },
                { category: "Functional Needs", question: "Should a wheelchair be left behind?", answer: "No – assistive devices must accompany the patient." },
                { category: "Functional Needs", question: "How to approach an agitated patient with cognitive impairment?", answer: "Calm, simple language; involve caregiver; assess for underlying causes." },
                { category: "Functional Needs", question: "What to do if abuse/neglect is suspected?", answer: "Document and report as per protocol." },
                { category: "Functional Needs", question: "What does 'functional needs' include?", answer: "Mobility, sensory, cognitive, and mental health impairments." }
            ],
            critical: []
        },

        // ---------- SECTION 1.5: Treated at Scene ----------
        {
            id: "c1s5",
            shortTitle: "1.5 Treated at Scene",
            summary: `
                <div class="sum-card">
                    <h3 style="color:var(--accent-universal);">🏠 Treat at Scene (CPG 1.5)</h3>
                    <p>Only for <strong>minor, stable, resolved conditions</strong> (e.g., mild hypoglycaemia corrected, small laceration with controlled bleeding, mild allergic reaction resolved).</p>
                    <h4>Requirements</h4>
                    <ul>
                        <li>Patient must have <strong>mental capacity</strong> (4‑step test).</li>
                        <li>Must have <strong>access to follow‑up care</strong> and a <strong>responsible, sober adult caregiver</strong> willing to accept responsibility.</li>
                    </ul>
                    <h4>Exclusion Criteria (mandatory transport)</h4>
                    <ul>
                        <li>Age <18 or >60 years</li>
                        <li>Pregnancy</li>
                        <li>Unreliable history</li>
                        <li>Self‑inflicted injuries (suicidal)</li>
                        <li>Significant relevant comorbidities</li>
                        <li>Repeat call for same condition within 30 days</li>
                        <li>No GP or primary care access</li>
                    </ul>
                </div>
            `,
            quiz: [
                { q: "Which patient meets the exclusion criteria for Treat at Scene?", options: ["22‑year‑old with resolved hypoglycaemia", "35‑year‑old with ankle sprain", "59‑year‑old with chest pain now resolved", "17‑year‑old with small laceration"], correct: 3, explanation: "Patients <18 years are excluded from Treat at Scene; they require guardian consent and transport." },
                { q: "What is the first step in the four‑step capacity assessment?", options: ["Reasoning", "Appreciation", "Understanding", "Expression"], correct: 2, explanation: "1. Understanding – can they repeat the information? 2. Appreciation – do they recognise their own risk? 3. Reasoning – can they weigh options? 4. Expression – clear and consistent decision." },
                { q: "A patient with chest pain refuses transport. Which action is MANDATORY?", options: ["Contact police", "Contact Tele‑EMS", "Restrain the patient", "Leave the scene"], correct: 1, explanation: "High‑risk refusal (chest pain, neurological deficits) requires Tele‑EMS consultation and duty officer notification." },
                { q: "How many complete sets of vital signs are required for a patient refusing transport?", options: ["One", "Two", "Three", "None"], correct: 1, explanation: "Two full sets of vital signs must be documented before a refusal can be accepted." },
                { q: "Which of the following is NOT an exclusion criterion for Treat at Scene?", options: ["Age 55", "Pregnancy", "Self‑inflicted injury", "Repeat caller within 30 days"], correct: 0, explanation: "Age >60 is an exclusion, but 55 is not. Pregnancy, self‑harm, and repeat callers are all exclusions." },
                { q: "What is the maximum total IV fluid bolus for an adult in shock?", options: ["1000 mL", "2000 mL", "3000 mL", "No maximum"], correct: 1, explanation: "Maximum total crystalloid bolus is 2000 mL for adults." },
                { q: "A 62‑year‑old with well‑controlled hypertension and a minor laceration requests Treat at Scene. Is this allowed?", options: ["Yes, if vitals normal and laceration controlled", "No, age >60 is an exclusion", "Only with Tele‑EMS approval", "Only if family present"], correct: 1, explanation: "Age >60 is an absolute exclusion criterion for Treat at Scene." },
                { q: "What does 'appreciation' mean in capacity assessment?", options: ["Understanding the words", "Recognising personal risk", "Choosing between options", "Speaking clearly"], correct: 1, explanation: "Appreciation = the patient acknowledges their own medical condition and the risks of refusing care." },
                { q: "What is the minimum age for a patient to be considered for Treat at Scene?", options: ["16", "17", "18", "21"], correct: 2, explanation: "Patients must be ≥18 years old to be eligible for Treat at Scene." },
                { q: "Which vital sign abnormality automatically excludes a patient from Treat at Scene?", options: ["HR 95", "RR 18", "SpO₂ 93%", "SBP 88 mmHg"], correct: 3, explanation: "Hypotension (SBP <90 mmHg) is a Red flag and requires transport." }
            ],
            flashcards: [
                { category: "Treat at Scene", question: "Age exclusions for Treat at Scene?", answer: "<18 years or >60 years." },
                { category: "Treat at Scene", question: "Must a patient have a caregiver to be left at scene?", answer: "Yes – a sober, adult caregiver willing to accept responsibility." },
                { category: "Treat at Scene", question: "Pregnancy and Treat at Scene?", answer: "Pregnant patients are excluded – must be transported." },
                { category: "Treat at Scene", question: "Repeat caller within 30 days – allowed?", answer: "No – excluded; transport recommended." },
                { category: "Treat at Scene", question: "Self‑inflicted injury – treat at scene?", answer: "No – excluded; transport mandatory." },
                { category: "Treat at Scene", question: "Unreliable history – treat at scene?", answer: "No – excluded." },
                { category: "Treat at Scene", question: "Four steps of capacity assessment?", answer: "Understanding, Appreciation, Reasoning, Expression." },
                { category: "Treat at Scene", question: "Minimum number of vital sign sets for refusal?", answer: "Two." },
                { category: "Treat at Scene", question: "High‑risk refusal examples?", answer: "Chest pain, neurological deficit, Red priority." },
                { category: "Treat at Scene", question: "Who to call for high‑risk refusal?", answer: "Tele‑EMS and Duty Officer." }
            ],
            critical: []
        },

        // ---------- SECTION 1.6: Patient Refusal of Transfer ----------
        {
            id: "c1s6",
            shortTitle: "1.6 Refusal of Transfer",
            summary: `
                <div class="sum-card">
                    <h3 style="color:var(--accent-universal);">🚫 Refusal of Transfer (CPG 1.6)</h3>
                    <h4>Four‑step capacity assessment (all must be met)</h4>
                    <ol>
                        <li><strong>Understanding</strong> – can they repeat the information?</li>
                        <li><strong>Appreciation</strong> – do they recognise their own risk?</li>
                        <li><strong>Reasoning</strong> – can they weigh options?</li>
                        <li><strong>Expression</strong> – clear and consistent decision.</li>
                    </ol>
                    <p>If capacity impaired → transport (with police/Tele‑EMS if necessary).</p>
                    <p><strong>High‑risk refusal</strong> (chest pain, neurological deficits, Red priority) → mandatory Tele‑EMS consultation and duty officer notification.</p>
                    <p>Document: <strong>two full sets of vital signs</strong>, 12‑lead ECG (if cardiac), refusal form, education given, caregiver details.</p>
                </div>
            `,
            quiz: [
                { q: "What is the first step in the four‑step capacity assessment?", options: ["Reasoning", "Appreciation", "Understanding", "Expression"], correct: 2, explanation: "1. Understanding – can they repeat the information? 2. Appreciation – do they recognise their own risk? 3. Reasoning – can they weigh options? 4. Expression – clear and consistent decision." },
                { q: "A patient with chest pain refuses transport. Which action is MANDATORY?", options: ["Contact police", "Contact Tele‑EMS", "Restrain the patient", "Leave the scene"], correct: 1, explanation: "High‑risk refusal (chest pain, neurological deficits) requires Tele‑EMS consultation and duty officer notification." },
                { q: "How many complete sets of vital signs are required for a patient refusing transport?", options: ["One", "Two", "Three", "None"], correct: 1, explanation: "Two full sets of vital signs must be documented before a refusal can be accepted." },
                { q: "What does 'appreciation' mean in capacity assessment?", options: ["Understanding the words", "Recognising personal risk", "Choosing between options", "Speaking clearly"], correct: 1, explanation: "Appreciation = the patient acknowledges their own medical condition and the risks of refusing care." },
                { q: "What should you do if a patient fails the capacity assessment but still refuses transport?", options: ["Accept refusal", "Contact Tele‑EMS", "Leave the scene", "Document and go"], correct: 1, explanation: "If capacity is impaired, the patient cannot refuse. Contact Tele‑EMS for guidance; police assistance may be needed." },
                { q: "Which of the following is a valid reason to override a patient's refusal?", options: ["Family request", "Impaired capacity", "Long transport time", "Patient is emotional"], correct: 1, explanation: "Lack of decision‑making capacity overrides refusal. Transport is mandatory." },
                { q: "What documentation is required for a refusal?", options: ["Refusal form only", "Full ePCR with assessment, vitals, capacity, education", "Police report", "Verbal handover only"], correct: 1, explanation: "Complete ePCR with all assessment details, vital signs, capacity assessment, and patient education." },
                { q: "A 70‑year‑old with a minor scalp laceration (bleeding controlled) refuses transport. His wife is present and agrees to stay with him. Can he be left at scene?", options: ["Yes, with signed refusal", "No, age >60 exclusion", "Yes, if Tele‑EMS approves", "No, scalp laceration is Red"], correct: 1, explanation: "Age >60 is an absolute exclusion for Treat at Scene; transport must be recommended." },
                { q: "What is the purpose of the 'reasoning' step in capacity assessment?", options: ["Repeat information", "Understand risk", "Weigh options logically", "State a decision"], correct: 2, explanation: "Reasoning assesses whether the patient can compare the consequences of going to hospital versus staying home." },
                { q: "What should be documented about education given to a refusing patient?", options: ["Only that education was given", "Risks explained, alternatives, follow‑up instructions, and that the patient understood", "Nothing", "Only the patient's signature"], correct: 1, explanation: "Document the specific risks explained, alternatives offered, follow‑up advice, and confirmation that the patient understood." }
            ],
            flashcards: [
                { category: "Refusal", question: "Four steps of capacity assessment?", answer: "Understanding, Appreciation, Reasoning, Expression." },
                { category: "Refusal", question: "Minimum number of vital sign sets for refusal?", answer: "Two." },
                { category: "Refusal", question: "High‑risk refusal examples?", answer: "Chest pain, neurological deficit, Red priority." },
                { category: "Refusal", question: "Who to call for high‑risk refusal?", answer: "Tele‑EMS and Duty Officer." },
                { category: "Refusal", question: "What if capacity is impaired and patient refuses?", answer: "Transport is mandatory; involve Tele‑EMS/police." },
                { category: "Refusal", question: "Is a 12‑lead ECG required for refusal in a cardiac‑type complaint?", answer: "Yes – must be performed and documented." },
                { category: "Refusal", question: "Can a minor refuse transport?", answer: "No – guardian consent required; transport unless guardian refuses." },
                { category: "Refusal", question: "What form must be signed for refusal?", answer: "DCAS Patient Refusal of Transfer form." },
                { category: "Refusal", question: "What should be documented about education?", answer: "Risks explained, alternatives, follow‑up instructions, and that the patient understood." },
                { category: "Refusal", question: "Police role in refusal?", answer: "Assist when patient lacks capacity and is unsafe; may also help with aggressive patients." }
            ],
            critical: []
        }
    ]
};