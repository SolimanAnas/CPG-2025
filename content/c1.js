/* ========== Chapter 1 – Universal Care (Full Content) ========== */
/* Source: DCAS Universal Care Guideline 2025 (CPG 1.1) */

window.CPG_DATA = {
    id: "c1",
    title: "Universal Care",
    shortTitle: "1.0 Universal Care",
    sections: [
        // ============================================================
        // 1.1 UNIVERSAL CARE (Core Assessment & Safety)
        // ============================================================
        {
            id: "c1s1",
            shortTitle: "1.1 Universal Care",
            summary: `
                <div class="sum-card">
                    <h3 style="color:var(--primary-accent);">📘 1.1 Assessment & Vitals</h3>
                    
                    <h4>1. Assessment Approach</h4>
                    <ul>
                        <li><strong>Trauma:</strong> C-A-B-C (Catastrophic Hemorrhage, Airway, Breathing, Circulation).</li>
                        <li><strong>Medical:</strong> A-B-C (Airway, Breathing, Circulation).</li>
                        <li><strong>Cardiac Arrest:</strong> C-A-B (Circulation/Compressions, Airway, Breathing).</li>
                        <li><strong>General Impression:</strong> Assess Appearance, Breathing, and Activity.</li>
                    </ul>

                    <h4>2. Primary Survey & Red Flags</h4>
                    <ul>
                        <li><strong>Airway:</strong> Ensure patency; C-spine control for trauma.</li>
                        <li><strong>Breathing:</strong> Target SpO2 <strong>94-98%</strong> (88-92% for COPD).</li>
                        <li><strong>Circulation:</strong> Pulse check (Carotid for unconscious adult, Brachial for infant).</li>
                        <li><strong>Disability:</strong> AVPU & GCS. Check Glucose if AMS (Treat if <strong>< 70 mg/dl</strong>).</li>
                        <li><strong>Red Flags:</strong> Apnea, SpO2 <94%, SBP <90 mmHg, GCS <15.</li>
                    </ul>

                    <h4>3. ALS Back-Up KPI</h4>
                    <div class="highlight-box">
                        <strong>KPI:</strong> Request ALS Back-up within <strong>1 minute</strong> of patient contact if indicated.
                    </div>
                    <ul>
                        <li><strong>Transport Decision:</strong> If transport time is < 10 mins and ALS is not dispatched, load and go (do not wait).</li>
                        <li><strong>Airwing:</strong> Consider if ground transport > 30 minutes.</li>
                    </ul>
                </div>
            `,
            flashcards: [
                { category: "Sequence", question: "Trauma Assessment Sequence?", answer: "C - A - B - C\n(Control Hemorrhage First)" },
                { category: "Sequence", question: "Medical Assessment Sequence?", answer: "A - B - C" },
                { category: "Sequence", question: "Cardiac Arrest Sequence?", answer: "C - A - B\n(Compressions First)" },
                { category: "Vitals", question: "Hypotension Definition (Adult)?", answer: "SBP < 90 mmHg" },
                { category: "Vitals", question: "Target SpO2 (Standard)?", answer: "94% - 98%" },
                { category: "Vitals", question: "Target SpO2 (COPD)?", answer: "88% - 92%" },
                { category: "Vitals", question: "Hypoglycemia Threshold?", answer: "< 70 mg/dl" },
                { category: "KPI", question: "Time to request ALS Backup?", answer: "Within 1 minute of patient contact" },
                { category: "Transport", question: "Transport vs Wait Rule?", answer: "If transport < 10 mins, do NOT wait for ALS" },
                { category: "Airwing", question: "Airwing Exclusion?", answer: "Imminent Birth, Violent Patient" },
                { category: "Primary Survey", question: "Cardiac arrest sequence?", answer: "C‑A‑B\nCompressions (start immediately, 30:2) → Airway (open, OPA/NPA) → Breathing (BVM, 2 breaths)" },
                { category: "Primary Survey", question: "General Impression elements?", answer: "1. Appearance (tone, interactivity)\n2. Work of Breathing (noises, retractions, position)\n3. Circulation to skin (colour, pallor, cyanosis)" },
                { category: "AVPU", question: "What does AVPU stand for?", answer: "Alert (A) – eyes open, tracking\nVerbal (V) – responds to voice\nPain (P) – responds to pain/pressure\nUnresponsive (U) – no response" },
                { category: "Vitals", question: "Normal adult pulse?", answer: "60‑100 beats per minute\n<60 = bradycardia\n>100 = tachycardia" },
                { category: "Vitals", question: "Normal adult respiratory rate?", answer: "12‑20 breaths per minute" },
                { category: "Vitals", question: "Normal CRT?", answer: "< 2 seconds" },
                { category: "Monitoring", question: "EtCO₂ normal range?", answer: "35‑45 mmHg" },
                { category: "Reassessment", question: "Red priority interval?", answer: "Every 5 minutes" },
                { category: "Reassessment", question: "Green priority interval?", answer: "Every 15 minutes" },
                { category: "Mnemonics", question: "DCAP‑BTLS – what does S stand for?", answer: "Swelling\nFull mnemonic: Deformities, Contusions, Abrasions, Punctures/Penetrations, Burns, Tenderness, Lacerations, Swelling" },
                { category: "Mnemonics", question: "SAMPLE – what does L stand for?", answer: "Last oral intake\nFull: Signs/Symptoms, Allergies, Medications, Past history, Last oral intake, Events" },
                { category: "Mnemonics", question: "OPQRST – what does R stand for?", answer: "Radiation (does pain move?)\nFull: Onset, Provocation/Palliation, Quality, Radiation, Severity, Time" },
                { category: "Handover", question: "IMIST‑AMBO – what does A stand for?", answer: "Allergies\nFull: Identification, Mechanism, Injuries, Signs, Treatment, Allergies, Medications, Background, Other" },
                { category: "Handover", question: "IMIST‑AMBO – what does M stand for?", answer: "Medications" },
                { category: "Stroke", question: "BEFAST – what does B stand for?", answer: "Balance (sudden loss of balance/coordination)" },
                { category: "GCS", question: "Confused verbal response score?", answer: "4" },
                { category: "GCS", question: "Spontaneous eye opening score?", answer: "4" },
                { category: "Safety", question: "First priority on every call?", answer: "Scene safety" },
                { category: "Operations", question: "Standard precautions PPE?", answer: "Gloves, mask, eye protection, gown (risk‑based)" },
                { category: "Airway", question: "Pulse check in infant?", answer: "Brachial artery" },
                { category: "Airway", question: "Pulse check in unconscious adult?", answer: "Carotid artery" },
                { category: "Triage", question: "Yellow priority reassessment interval?", answer: "Every 10 minutes" },
                { category: "History", question: "OPQRST – what does O stand for?", answer: "Onset (what were you doing when pain started?)" },
                { category: "History", question: "SAMPLE – what does E stand for?", answer: "Events leading up to the emergency" },
                { category: "Vitals", question: "Newborn heart rate (awake)?", answer: "100‑205 bpm" },
                { category: "Vitals", question: "Infant (1-12 mo) heart rate?", answer: "100‑180 bpm" },
                { category: "Vitals", question: "Child 1-3 years heart rate?", answer: "100‑140 bpm" },
                { category: "Vitals", question: "Child 6-10 years heart rate?", answer: "75‑120 bpm" },
                { category: "Vitals", question: "Adolescent heart rate?", answer: "60‑100 bpm" },
                { category: "Vitals", question: "Newborn SBP range?", answer: "60‑76 mmHg" },
                { category: "Vitals", question: "Child 1-2 years SBP?", answer: "86‑106 mmHg" },
                { category: "Vitals", question: "Child 6-10 years SBP?", answer: "97‑115 mmHg" },
                { category: "Vitals", question: "Adult SBP normal range?", answer: "90‑120 mmHg (approx)" },
                { category: "Vitals", question: "Bradycardia definition (adult)?", answer: "HR <60 bpm" },
                { category: "Trauma", question: "Significant MOI – fall height?", answer: ">10 feet (all ages)" },
                { category: "Trauma", question: "Tourniquet application time?", answer: "Mark time on tourniquet; do not remove until hospital" },
                { category: "Trauma", question: "Pelvic binder indication?", answer: "Unstable pelvic fracture / suspected haemorrhage from pelvic ring disruption" },
                { category: "Trauma", question: "Chest seal indication?", answer: "Open / sucking chest wound – apply three‑sided occlusive dressing" },
                { category: "CPR", question: "Adult compression depth?", answer: "5‑6 cm (2‑2.4 inches)" },
                { category: "CPR", question: "Infant compression depth?", answer: "4 cm (1.5 inches) or 1/3 chest depth" },
                { category: "CPR", question: "Ventilation rate with advanced airway?", answer: "1 breath every 6 seconds (10 breaths/min), no pause in compressions" },
                { category: "CPR", question: "Shockable rhythms?", answer: "Ventricular Fibrillation (VF), Pulseless Ventricular Tachycardia (VT)" },
                { category: "CPR", question: "Non‑shockable rhythms?", answer: "Asystole, Pulseless Electrical Activity (PEA)" },
                { category: "ALS", question: "When to request ALS backup?", answer: "Within 5 minutes if red flags present, unstable patient, or advanced skills required" },
                { category: "Paediatrics", question: "Pediatric age cutoff in Dubai?", answer: "13 years and under" },
                { category: "Paediatrics", question: "Pediatric Assessment Triangle (PAT)?", answer: "Appearance (tone, interactivity), Work of Breathing (rate, effort, sounds), Circulation to Skin (colour, pallor, mottling)" },
                { category: "Paediatrics", question: "Late sign of shock in children?", answer: "Hypotension (decompensated shock) – children maintain BP until late" },
                { category: "Paediatrics", question: "Neonatal pulse check site?", answer: "Brachial artery or apical auscultation" },
                { category: "Burns", question: "Rule of Nines – adult arm?", answer: "9% Total Body Surface Area (TBSA) – 4.5% front, 4.5% back" },
                { category: "Burns", question: "Rule of Nines – adult leg?", answer: "18% TBSA – 9% front, 9% back" },
                { category: "Burns", question: "Rule of Nines – adult anterior torso?", answer: "18% (chest 9% + abdomen 9%)" },
                { category: "Positioning", question: "Shock patient (no spinal injury) position?", answer: "Supine (flat on back). Elevating legs is controversial; flat maximises cerebral perfusion." },
                { category: "Positioning", question: "Recovery position indication?", answer: "Unconscious patient with pulse and breathing spontaneously – prevents aspiration" },
                { category: "Oxygen", question: "Flow rate for Non‑Rebreather Mask?", answer: "10‑15 L/min to keep reservoir bag inflated" }
            ],
            quiz: [
                { q: "What is the assessment sequence for a Trauma patient?", options: ["A-B-C", "C-A-B-C", "D-R-A-B-C"], correct: 1, explanation: "C-A-B-C: Catastrophic Hemorrhage first." },
                { q: "ALS Backup KPI time?", options: ["5 mins", "1 min", "10 mins"], correct: 1, explanation: "Request ALS within 1 minute of patient contact." },
                { q: "Target SpO2?", options: ["100%", "94-98%", "90-94%"], correct: 1, explanation: "94-98% for standard patients." },
                { q: "You should NOT wait for ALS if transport time is less than:", options: ["10 mins", "15 mins", "20 mins"], correct: 0, explanation: "If transport is < 10 mins and ALS isn't there, load and go." },
                { q: "Hypotension in an adult is defined as SBP below:", options: ["100 mmHg", "90 mmHg", "80 mmHg"], correct: 1, explanation: "SBP < 90 mmHg is the threshold for hypotension." },
                { q: "What is the assessment sequence for a Medical patient?", options: ["A-B-C-D-E", "C-A-B-C", "D-R-A-B-C", "Safety-First"], correct: 0, explanation: "Medical patients follow A‑B‑C: Airway, Breathing, Circulation, Disability, Exposure. This is the standard approach when no traumatic mechanism is present." },
                { q: "What is the assessment sequence for Cardiac Arrest?", options: ["A-B-C", "C-A-B", "D-R-A-B-C", "B-A-C"], correct: 1, explanation: "Cardiac arrest: C‑A‑B (Compressions, Airway, Breathing). Chest compressions are started immediately to circulate blood, followed by airway opening and rescue breaths." },
                { q: "What are the 3 elements of the 'General Impression'?", options: ["Airway, Breathing, Circ", "Appearance, Breathing, Activity", "Alertness, Bleeding, Color", "Age, Body type, Complaint"], correct: 1, explanation: "General Impression = Appearance, Work of Breathing, and Circulation/Activity (mental status). In paediatrics this is formalised as the Pediatric Assessment Triangle (PAT)." },
                { q: "In the AVPU scale, what does 'P' stand for?", options: ["Pulse", "Pain", "Pupils", "Pallor"], correct: 1, explanation: "AVPU: Alert, Verbal (responds to voice), Pain (responds to painful stimuli), Unresponsive. Painful stimuli include trapezius squeeze or supraorbital pressure." },
                { q: "Where do you check the pulse on an unconscious adult?", options: ["Radial", "Carotid", "Femoral", "Brachial"], correct: 1, explanation: "Carotid artery is the central pulse used in unconscious adults. Check for at least 5 but no more than 10 seconds." },
                { q: "Where do you check the pulse on an infant (<1 year)?", options: ["Carotid", "Brachial", "Radial", "Popliteal"], correct: 1, explanation: "Brachial pulse (upper arm) is recommended for infants. The neck is often too short to reliably palpate the carotid." },
                { q: "Normal capillary refill time (CRT) is less than:", options: ["1 second", "2 seconds", "3 seconds", "5 seconds"], correct: 1, explanation: "Normal CRT is <2 seconds. Delayed refill (>2s) indicates poor perfusion and possible shock." },
                { q: "What is the absolute FIRST step in any call?", options: ["Airway", "Scene Safety", "Circulation", "Call Dispatch"], correct: 1, explanation: "Scene safety is always the first priority. You cannot help the patient if you become a patient yourself." },
                { q: "What does 'D' stand for in ABCDE?", options: ["Deformity", "Disability", "Danger", "Disease"], correct: 1, explanation: "Disability – rapid neurological assessment: AVPU, GCS, pupils, and blood glucose." },
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
            critical: [
                { 
                    scenario: "Trauma: 45M, partial leg amputation, active arterial bleed. Conscious.", 
                    question: "What is your FIRST action?", 
                    options: [{t:"Check Airway", f:"Wrong. Control bleed first (C-A-B-C)."}, {t:"Apply Tourniquet", f:"Correct. Catastrophic hemorrhage comes before Airway."}], 
                    correct: 1, 
                    explanation: "In trauma (C-A-B-C), stop life-threatening bleeding immediately.",
                    kpi: "Tourniquet application < 1 min."
                }
            ]
        },

        // ============================================================
        // 1.2 DOCUMENTATION
        // ============================================================
        {
            id: "c1s2",
            shortTitle: "1.2 Documentation",
            summary: `
                <div class="sum-card">
                    <h3 style="color:var(--primary-accent);">📋 Documentation Standards</h3>
                    <ul>
                        <li><strong>ePCR Mandatory:</strong> A comprehensive ePCR is required for <em>every</em> patient contact.</li>
                        <li><strong>Timeline:</strong> You must record timestamps for all critical events (Arrival, Meds, Handover).</li>
                        <li><strong>Narrative:</strong> Must provide a complete 'picture of events' supporting your decisions.</li>
                    </ul>
                    <h4>IMIST-AMBO Handover</h4>
                    <p><strong>I</strong>dentification, <strong>M</strong>echanism, <strong>I</strong>njuries, <strong>S</strong>igns, <strong>T</strong>reatment.<br>
                    <strong>A</strong>llergies, <strong>M</strong>edications, <strong>B</strong>ackground, <strong>O</strong>ther.</p>
                </div>
            `,
            flashcards: [
                { category: "Handover", question: "IMIST meaning?", answer: "ID, Mechanism, Injuries, Signs, Treatment" },
                { category: "Handover", question: "AMBO meaning?", answer: "Allergies, Medications, Background, Other" },
                { category: "ePCR", question: "When to do ePCR?", answer: "Every patient contact" },
                { category: "ePCR", question: "Narrative goal?", answer: "Provide a complete picture of events" },
                { category: "Legal", question: "Timestamps?", answer: "Required for all critical interventions" }
            ],
            quiz: [
                { q: "Which format is used for patient handover?", options: ["SAMPLE", "IMIST-AMBO", "SOAP"], correct: 1, explanation: "IMIST-AMBO is the standard DCAS handover format." },
                { q: "What is required for critical interventions in the ePCR?", options: ["Estimated time", "Exact Timestamp", "No time needed"], correct: 1, explanation: "Timestamps are required for all critical events." },
                { q: "What does the 'S' in IMIST stand for?", options: ["Symptoms", "Signs (Vitals)", "Severity"], correct: 1, explanation: "S stands for Signs (Vital Signs)." }
            ],
            critical: [
                {
                    scenario: "Handover: You arrive at the hospital with a stable medical patient. The nurse asks for a report.",
                    question: "Which format do you use?",
                    options: [{t:"Just give the ID and Complaint", f:"Insufficient information."}, {t:"IMIST-AMBO", f:"Correct. This covers all critical info."}],
                    correct: 1,
                    explanation: "Use IMIST-AMBO for a structured, safe handover."
                }
            ]
        },

        // ============================================================
        // 1.3 TRIAGE CATEGORIES
        // ============================================================
        {
            id: "c1s3",
            shortTitle: "1.3 Triage",
            summary: `
                <div class="sum-card red-flag">
                    <h3>🔴 Red Priority (Critical)</h3>
                    <ul>
                        <li><strong>Definition:</strong> Immediate life threat (e.g., Shock, Apnea, GCS<9).</li>
                        <li><strong>Reassessment:</strong> Every <strong>5 minutes</strong>.</li>
                        <li><strong>Action:</strong> Request ALS immediately.</li>
                    </ul>
                </div>
                <div class="sum-card" style="border-top-color: #f59e0b;">
                    <h3>🟡 Yellow Priority (Serious)</h3>
                    <ul>
                        <li><strong>Definition:</strong> Serious but not immediately life-threatening.</li>
                        <li><strong>Reassessment:</strong> Every <strong>10 minutes</strong>.</li>
                    </ul>
                </div>
                <div class="sum-card" style="border-top-color: #10b981;">
                    <h3>🟢 Green Priority (Minor)</h3>
                    <ul>
                        <li><strong>Definition:</strong> Minor injury/illness. Stable.</li>
                        <li><strong>Reassessment:</strong> Every <strong>15 minutes</strong>.</li>
                    </ul>
                </div>
            `,
            flashcards: [
                { category: "Triage", question: "Red Reassessment?", answer: "Every 5 Minutes" },
                { category: "Triage", question: "Yellow Reassessment?", answer: "Every 10 Minutes" },
                { category: "Triage", question: "Green Reassessment?", answer: "Every 15 Minutes" },
                { category: "Triage", question: "Red Priority Definition?", answer: "Life Threatening" },
                { category: "Triage", question: "Unstable Red Patient?", answer: "Request ALS Backup" }
            ],
            quiz: [
                { q: "How often do you reassess a Red Priority patient?", options: ["5 mins", "10 mins", "15 mins"], correct: 0, explanation: "Critical patients need reassessment every 5 minutes." },
                { q: "How often do you reassess a Yellow Priority patient?", options: ["5 mins", "10 mins", "15 mins"], correct: 1, explanation: "Serious (Yellow) patients are reassessed every 10 minutes." },
                { q: "Which priority represents a life threat?", options: ["Green", "Yellow", "Red"], correct: 2, explanation: "Red priority indicates a life-threatening condition." }
            ],
            critical: [
                {
                    scenario: "Triage: Patient has a GCS of 13, BP 110/70, but severe abdominal pain.",
                    question: "What is the likely triage category?",
                    options: [{t:"Red", f:"Vitals are stable."}, {t:"Yellow", f:"Correct. Serious but not unstable."}, {t:"Green", f:"Too severe for green."}],
                    correct: 1,
                    explanation: "Yellow Priority: Serious condition but stable vitals. Reassess every 10 mins."
                }
            ]
        },
        // ============================================================
        // 1.4 FUNCTIONAL NEEDS
        // ============================================================
        {
            id: "c1s4",
            shortTitle: "1.4 Functional Needs",
            summary: `
                <div class="sum-card">
                    <h3 style="color:var(--primary-accent);">🧑‍🤝‍🧑 Special Populations</h3>
                    <ul>
                        <li><strong>Pediatrics:</strong> Age <strong>≤ 13 years</strong>. Use Broselow Tape.</li>
                        <li><strong>Geriatrics:</strong> Age <strong>≥ 65 years</strong>. High risk of under-triage.</li>
                        <li><strong>Comorbidities:</strong> Reduced drug doses may apply for Renal (Dialysis) or Hepatic failure.</li>
                    </ul>
                    <h4>Cultural Sensitivity</h4>
                    <p>Communicate respectfully considering language barriers. Address anxiety to improve compliance.</p>
                </div>
            `,
            flashcards: [
                { category: "Def", question: "Pediatric Age Cutoff?", answer: "13 Years and Under" },
                { category: "Def", question: "Geriatric Age Cutoff?", answer: "65 Years and Older" },
                { category: "Tool", question: "Tool for Peds Weight?", answer: "Broselow Tape" },
                { category: "Meds", question: "Renal Failure Dosing?", answer: "Consider Reduced Doses" },
                { category: "Comms", question: "Language Barriers?", answer: "Use translation tools/respectful comms" }
            ],
            quiz: [
                { q: "What is the definition of a Pediatric patient in DCAS?", options: ["< 12", "<= 13", "< 18"], correct: 1, explanation: "Pediatrics are considered ≤ 13 years of age." },
                { q: "What is the definition of a Geriatric patient?", options: ["> 60", ">= 65", "> 70"], correct: 1, explanation: "Geriatrics are ≥ 65 years of age." },
                { q: "For a patient on dialysis, what medication consideration applies?", options: ["Standard dose", "Reduced dose", "Increased dose"], correct: 1, explanation: "Reduced dosages may apply for renal/hepatic disease." }
            ],
            critical: [
                {
                    id: "crit_1_4_1",
                    scenario: "You are treating a 12-year-old child with Autism Spectrum Disorder (ASD) involved in a minor MVC. The child is screaming, rocking back and forth, and covering their ears. There are no obvious life-threatening injuries.",
                    question: "What is the most appropriate immediate action?",
                    options: [
                        { t: "Restrain the child to perform a full assessment", f: "Incorrect. Restraint will escalate agitation." },
                        { t: "Administer IM sedation immediately", f: "Incorrect. Sedation is a last resort." },
                        { t: "Reduce stimuli (turn off sirens/lights), speak calmly, and allow a caregiver to assist", f: "Correct. Reducing sensory overload is the priority." },
                        { t: "Force the child onto a backboard", f: "Incorrect. Increases distress." }
                    ],
                    correct: 2,
                    explanation: "Patients with ASD often experience sensory overload during emergencies. Reducing noise/light and involving a familiar caregiver is the safest approach.",
                    kpi: "Patient safety & de-escalation"
                },
                {
                    id: "crit_1_4_2",
                    scenario: "You respond to a 40-year-old female with Cerebral Palsy who has a suspected fracture. She is non-verbal but alert. You need to assess her pain.",
                    question: "How should you assess pain in this patient?",
                    options: [
                        { t: "Assume she cannot feel pain", f: "Incorrect." },
                        { t: "Use the FLACC scale or a visual/picture board", f: "Correct. Use appropriate tools for non-verbal adults." },
                        { t: "Ask her to speak louder", f: "Ineffective." },
                        { t: "Skip pain assessment", f: "Incorrect. Pain management is a patient right." }
                    ],
                    correct: 1,
                    explanation: "For non-verbal adults, use visual scales (Wong-Baker faces) or behavioral scales (FLACC) and look for physiological signs (tachycardia, grimacing).",
                    kpi: "Pain scoring documentation"
                }
            ]
        },

        // ============================================================
        // 1.5 TREATED AT SCENE (Derived from Patient Safety)
        // ============================================================
        {
            id: "c1s5",
            shortTitle: "1.5 Treat at Scene",
            summary: `
                <div class="sum-card">
                    <h3 style="color:var(--primary-accent);">🏠 Treat & Release</h3>
                    <p>Providing care without transport requires strict adherence to safety protocols.</p>
                    <ul>
                        <li><strong>Goal:</strong> Treat minor/reversible conditions if safe.</li>
                        <li><strong>Tele-EMS:</strong> Consult for complex decisions or high-risk refusals.</li>
                        <li><strong>Documentation:</strong> Requires full ePCR, vitals, and clear rationale.</li>
                        <li><strong>Exclusions:</strong> Do not leave if capacity is impaired or condition is critical.</li>
                    </ul>
                </div>
            `,
            flashcards: [
                { category: "Ops", question: "Tele-EMS Indication?", answer: "Complex/Deteriorating conditions" },
                { category: "Ops", question: "Treat at Scene Req?", answer: "Normal vitals + Capacity" },
                { category: "Ops", question: "Documentation?", answer: "Full ePCR mandatory" },
                { category: "Safety", question: "Unstable Patient?", answer: "Must Transport / Request ALS" },
                { category: "Consult", question: "High Risk Refusal?", answer: "Consult Tele-EMS" }
            ],
            quiz: [
                { q: "Who should be consulted for complex non-transport decisions?", options: ["Dispatch", "Tele-EMS", "Police"], correct: 1, explanation: "Consult Tele-EMS for complex or deteriorating conditions." },
                { q: "Can you treat and release a Red Priority patient?", options: ["Yes", "No", "Only if they sign"], correct: 1, explanation: "Critical patients require transport." },
                { q: "What documentation is needed for non-transport?", options: ["Short note", "Full ePCR", "Nothing"], correct: 1, explanation: "Comprehensive ePCR is required for all contacts." }
            ],
            critical: [
                {
                    id: "crit_1_5_1",
                    scenario: "You have treated a known diabetic male for hypoglycemia with D10. His GCS improved from 9 to 15. BGL is now 110 mg/dL. He wants to stay home. His wife is present and sober.",
                    question: "Is this patient eligible for 'Treat at Scene'?",
                    options: [
                        { t: "No, all diabetics must be transported", f: "Incorrect. Resolved hypoglycemia is a common T&R." },
                        { t: "Yes, if he eats complex carbs and has capacity", f: "Correct. Meets criteria: Resolved, Capacity, Caregiver present." },
                        { t: "Yes, but you don't need to document vitals", f: "Incorrect. Full ePCR required." },
                        { t: "No, because he required IV fluids", f: "Incorrect. IV D10 does not mandate transport if resolved." }
                    ],
                    correct: 1,
                    explanation: "Treat at scene is appropriate for resolved hypoglycemia if: GCS 15, capacity is present, a responsible adult is on scene, and the patient consumes food.",
                    kpi: "Post-treatment BGL & Capacity check"
                },
                {
                    id: "crit_1_5_2",
                    scenario: "You assess a 75-year-old female who fell. She has a small skin tear but no other injuries. She wants to stay home. Her vitals are stable.",
                    question: "Does she meet the criteria for Treat at Scene?",
                    options: [
                        { t: "Yes, stable vitals", f: "Incorrect. Check age exclusion." },
                        { t: "No, age >65 is a relative exclusion / high risk", f: "Correct. Geriatric falls often hide occult injury." },
                        { t: "Yes, if she signs the form", f: "Insufficient safety check." }
                    ],
                    correct: 1,
                    explanation: "While strict exclusion is often >60 or >65 depending on specific policy versions, geriatric falls are high risk. DCAS CPG 1.5 advises caution/exclusion for elderly patients without Tele-EMS consult.",
                    kpi: "Safety netting for geriatric falls"
                }
            ]
        },

        // ============================================================
        // 1.6 REFUSAL OF TRANSFER
        // ============================================================
        {
            id: "c1s6",
            shortTitle: "1.6 Refusal",
            summary: `
                <div class="sum-card red-flag">
                    <h3 style="color:#dc3545;">🚫 Refusal of Transfer</h3>
                    <ul>
                        <li><strong>Rights:</strong> Adults (>18) with capacity can refuse.</li>
                        <li><strong>Capacity Test:</strong> Must Understand, Retain, and Repeat info.</li>
                        <li><strong>Living Wills:</strong> NOT recognized in Dubai prehospital settings yet.</li>
                        <li><strong>High Risk:</strong> If refusal is high-risk (e.g., chest pain), consult Tele-EMS.</li>
                    </ul>
                </div>
            `,
            flashcards: [
                { category: "Legal", question: "Refusal Age?", answer: "18 Years+" },
                { category: "Legal", question: "Capacity Criteria?", answer: "Understand, Retain, Repeat" },
                { category: "Legal", question: "Living Wills in Dubai?", answer: "Not Recognized Prehospital" },
                { category: "Action", question: "High Risk Refusal?", answer: "Consult Tele-EMS" },
                { category: "Action", question: "Impaired Capacity?", answer: "Treat & Transport (Implied Consent)" }
            ],
            quiz: [
                { q: "What is the minimum age to refuse treatment?", options: ["16", "18", "21"], correct: 1, explanation: "Patients must be above 18 years old." },
                { q: "Are Living Wills recognized in prehospital Dubai?", options: ["Yes", "No", "Only if signed"], correct: 1, explanation: "Advanced Directives/Living Wills are NOT recognized yet." },
                { q: "What defines mental capacity?", options: ["Alertness only", "Understand, Retain, Repeat", "Signing a form"], correct: 1, explanation: "Patient must understand, retain, and repeat information." }
            ],
            critical: [
                {
                    id: "crit_1_6_1",
                    scenario: "A 55-year-old male complains of crushing chest pain (8/10). ECG shows ST elevation (STEMI). He is GCS 15 but refuses transport saying 'I will go to my own doctor tomorrow'.",
                    question: "What is your immediate course of action?",
                    options: [
                        { t: "Accept refusal and leave", f: "Incorrect. This is a life threat." },
                        { t: "Restrain him physically", f: "Incorrect. He has capacity (GCS 15)." },
                        { t: "Consult Tele-EMS, Duty Officer, and attempt aggressive persuasion", f: "Correct. High-risk refusal protocol." },
                        { t: "Ask his wife to drive him", f: "Unsafe for STEMI." }
                    ],
                    correct: 2,
                    explanation: "This is a High-Risk Refusal. You must involve the Tele-EMS doctor and Duty Officer. Spend time educating the patient on the risk of death.",
                    kpi: "Tele-EMS consultation for High Risk Refusal"
                },
                {
                    id: "crit_1_6_2",
                    scenario: "A 22-year-old male involved in a fight has a head laceration. He smells of alcohol, is repetitive in his questions, and wants to walk away. GCS is 14 (Confused).",
                    question: "Can he refuse transport?",
                    options: [
                        { t: "Yes, he is an adult", f: "Incorrect. Capacity is impaired." },
                        { t: "No, he lacks capacity due to head injury/intoxication", f: "Correct. Implied consent applies." },
                        { t: "Yes, if police sign for him", f: "Incorrect." }
                    ],
                    correct: 1,
                    explanation: "Capacity requires the ability to Understand, Retain, Weigh, and Communicate. Repetitive questioning indicates an inability to Retain info (concussion). Transport is required under Duty of Care.",
                    kpi: "Capacity assessment documentation"
                }
            ]
        }
    ]
};