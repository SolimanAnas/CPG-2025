/* ========== Chapter 4.7 – Post Cardiac Arrest Care (ROSC) ========== */
window.CPG_DATA = {
    id: "c4-7",
    title: "Post Cardiac Arrest Care (ROSC)",
    shortTitle: "4.7 Post‑ROSC",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">🔄 Post Cardiac Arrest Care (ROSC)</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Optimize oxygenation, ventilation, and hemodynamics in patients achieving return of spontaneous circulation (ROSC) to support organ perfusion and neurological outcome.</li>
                <li>Implement measures to prevent re‑arrest.</li>
                <li>Ensure rapid transport to a facility capable of advanced post‑cardiac arrest care appropriate to the clinical condition (e.g., STEMI).</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Adult and pediatric patients who have achieved ROSC following cardiac arrest, including presence of a palpable pulse.</li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>Patients with no ROSC, requiring ongoing CPR.</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>ROSC confirmation:</strong> Verify organized rhythm, palpable pulse (carotid/femoral) for at least 10 seconds. Monitor end‑tidal CO₂ (EtCO₂) – sustained >40 mmHg indicates ROSC.</li>
                <li><strong>Neurological status:</strong> Evaluate AVPU or GCS, assess for focal deficits (pupil asymmetry, motor weakness).</li>
                <li><strong>Hemodynamic stability:</strong> Monitor for hypotension (SBP <90 mmHg), poor perfusion (cool skin, delayed capillary refill >2s).</li>
                <li><strong>12‑lead ECG:</strong> Perform in all medical cardiac arrests to identify potential cardiac cause (e.g., STEMI).</li>
                <li><strong>Re‑arrest risk:</strong> Identify factors increasing risk (persistent arrhythmias, hypoxia, hypotension). Reassess reversible causes (H's and T's).</li>
                <li><strong>Triage category:</strong> All ROSC patients are Red Priority.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Consider ALS back‑up:</strong> Request if not already activated; meet en route.</li>
                <li><strong>Primary survey:</strong> Ensure airway patency, adequate breathing, circulation. Prepare for immediate re‑initiation of CPR if re‑arrest occurs.</li>
                <li><strong>Secondary survey:</strong> Focused neurological and hemodynamic assessment. Obtain history from bystanders (cause of arrest, duration, interventions).</li>
                <li><strong>Reassess vital signs:</strong> RR, HR, BP, EtCO₂.</li>
                <li><strong>IV access:</strong> Establish if not already obtained; consider second line if vasopressors anticipated. IO if IV fails.</li>
                <li><strong>12‑lead ECG:</strong> For all medical cardiac arrests; for traumatic arrests only if cardiac involvement suspected.</li>
                <li><strong>Oxygenation and ventilation:</strong> Titrate oxygen to maintain SpO₂ 94‑98% (avoid hyperoxia). Provide ventilatory support if inadequate. Target EtCO₂ 35‑45 mmHg.</li>
                <li><strong>Fluid administration:</strong> For hypotension: adults 250‑500 mL bolus IV/IO, pediatrics 10‑20 mL/kg. Repeat cautiously; avoid fluid overload in cardiogenic shock.</li>
                <li><strong>Hemodynamic support:</strong> 
                    <ul>
                        <li>Adrenaline preferred for hypotensive shock (push dose 0.01 mg/kg every 2‑5 min or infusion 0.05‑0.3 mcg/kg/min).</li>
                        <li>Dopamine (5‑20 mcg/kg/min) may be used for normotensive shock.</li>
                    </ul>
                </li>
                <li><strong>Arrhythmia management:</strong> Monitor for recurrent VF/VT or bradycardia; prepare for defibrillation or pacing.</li>
                <li><strong>Targeted temperature management (TTM):</strong> Maintain core temperature 32‑36°C. Remove clothing, cool vehicle, avoid active cooling without core temp monitoring.</li>
                <li><strong>Sedation:</strong> For agitation or intubated patients: midazolam (adults 1‑5 mg IV, pediatrics 0.1 mg/kg), diazepam (adults 1‑5 mg IV, pediatrics 0.1 mg/kg), or ketamine (adults 0.25‑1 mg/kg, pediatrics 0.5‑1 mg/kg). Avoid sedation for supraglottic airway management; remove device if causing agitation.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Avoid aggressive fluid boluses in cardiogenic shock (pulmonary edema, JVD).</li>
                <li>Use vasopressors if hypotension persists after fluids.</li>
                <li>Avoid hyper‑/hypoventilation; target EtCO₂ 35‑45 mmHg.</li>
                <li>Monitor for seizures or neurological deterioration; treat as per Seizures CPG.</li>
                <li>Place supraglottic airway for unresponsive patients being transported.</li>
                <li>Avoid rapid/rough movement for up to 10 minutes following ROSC (may cause re‑arrest).</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li>Perform a full reassessment (ABC, vitals) before moving the patient.</li>
                <li>Pediatric arrest often hypoxic – focus on effective ventilations. Intubation may be difficult; supraglottic airway often sufficient.</li>
                <li>After traumatic brain injury, maintain SBP >90 mmHg (adults) or age‑appropriate SBP (pediatrics).</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Identification, mechanism/medical complaint, injuries/information, signs (vital signs, EtCO₂, GCS, ECG).</li>
                <li>Treatment: oxygen, fluids, vasopressors, sedation, TTM, airway management.</li>
                <li>Allergies, medications, background, other (e.g., time of ROSC, ALS contact).</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Document a set of vital signs including EtCO₂ within 5 minutes of ROSC.</li>
                <li>Perform a 12‑lead ECG for all non‑traumatic ROSC patients within 5 minutes of ROSC.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What is the target SpO₂ range for a patient with ROSC?",
            options: ["88‑92%", "94‑98%", "97‑100%", "As high as possible"],
            correct: 1,
            explanation: "Target SpO₂ 94‑98% to avoid hyperoxia, which can worsen neurological injury."
        },
        {
            q: "What EtCO₂ reading suggests ROSC?",
            options: ["<10 mmHg", "10‑20 mmHg", ">40 mmHg", "35‑45 mmHg"],
            correct: 2,
            explanation: "A sudden sustained rise in EtCO₂ to >40 mmHg often indicates ROSC."
        },
        {
            q: "What is the target EtCO₂ range after ROSC?",
            options: ["30‑35 mmHg", "35‑45 mmHg", "45‑50 mmHg", ">50 mmHg"],
            correct: 1,
            explanation: "Target EtCO₂ 35‑45 mmHg to maintain normocapnia."
        },
        {
            q: "A patient achieves ROSC but remains hypotensive with SBP 85 mmHg. What is the initial fluid bolus dose for an adult?",
            options: ["100 mL", "250‑500 mL", "1000 mL", "2000 mL"],
            correct: 1,
            explanation: "Initial fluid bolus for adult hypotension after ROSC is 250‑500 mL IV/IO crystalloid."
        },
        {
            q: "Which vasopressor is generally preferred for hypotensive shock after ROSC?",
            options: ["Dopamine", "Adrenaline", "Noradrenaline", "Vasopressin"],
            correct: 1,
            explanation: "Adrenaline is preferred for hypotensive shock due to lower arrhythmia risk compared to dopamine at vasopressor doses."
        },
        {
            q: "What is the push dose of adrenaline for an adult with hypotension after ROSC?",
            options: ["0.1 mg", "0.01 mg/kg", "1 mg", "0.5 mg"],
            correct: 0,
            explanation: "Adrenaline push dose is 0.01 mg/kg (typically 0.1 mg for a 70 kg adult) every 2‑5 minutes."
        },
        {
            q: "A pediatric patient achieves ROSC but remains hypotensive. What is the initial fluid bolus dose?",
            options: ["5 mL/kg", "10‑20 mL/kg", "30 mL/kg", "40 mL/kg"],
            correct: 1,
            explanation: "Initial fluid bolus for pediatric hypotension is 10‑20 mL/kg IV/IO."
        },
        {
            q: "What is the target temperature range for targeted temperature management (TTM) after ROSC?",
            options: ["30‑32°C", "32‑36°C", "36‑37°C", "34‑38°C"],
            correct: 1,
            explanation: "TTM target is 32‑36°C; avoid hyperthermia."
        },
        {
            q: "A patient after ROSC is agitated and intubated. What sedation agent can be used?",
            options: ["Morphine", "Midazolam", "Ketamine", "All of the above"],
            correct: 3,
            explanation: "Midazolam, diazepam, or ketamine may be used for sedation after ROSC."
        },
        {
            q: "What is the maximum single dose of midazolam for an adult after ROSC?",
            options: ["1 mg", "5 mg", "10 mg", "20 mg"],
            correct: 1,
            explanation: "Midazolam dose for adults is 1‑5 mg IV, repeat after 10 minutes if needed."
        },
        {
            q: "What is the pediatric dose of ketamine for sedation after ROSC?",
            options: ["0.1 mg/kg", "0.25‑1 mg/kg", "1‑2 mg/kg", "5 mg/kg"],
            correct: 1,
            explanation: "Ketamine dose for pediatrics is 0.5‑1 mg/kg IV/IO (some sources 0.25‑1 mg/kg)."
        },
        {
            q: "Which of the following is a sign of cardiogenic shock after ROSC?",
            options: ["Hypotension with pulmonary oedema", "Hypotension with clear lungs", "Tachycardia", "Bradycardia"],
            correct: 0,
            explanation: "Cardiogenic shock presents with hypotension, pulmonary oedema, and signs of poor perfusion."
        },
        {
            q: "How often should you reassess vital signs after ROSC?",
            options: ["Every 5 minutes", "Every 10 minutes", "Every 15 minutes", "Every 30 minutes"],
            correct: 0,
            explanation: "Red priority patients (including ROSC) require reassessment every 5 minutes."
        },
        {
            q: "A patient after ROSC has a 12‑lead ECG showing STEMI. What is the priority?",
            options: ["Give aspirin and GTN", "Transport to a PCI‑capable hospital", "Start TTM", "Administer fibrinolytics"],
            correct: 1,
            explanation: "Rapid transport to a PCI‑capable hospital is the priority; aspirin and GTN can be given en route."
        },
        {
            q: "What is the recommended maximum time for a 12‑lead ECG after ROSC?",
            options: ["Immediately, within 5 minutes", "Within 10 minutes", "Within 20 minutes", "Not urgent"],
            correct: 0,
            explanation: "A 12‑lead ECG should be performed within 5 minutes of ROSC for all non‑traumatic arrests."
        },
        {
            q: "A patient after ROSC has a supraglottic airway in place and is agitated. What should you do?",
            options: ["Administer sedation", "Remove the supraglottic airway if causing agitation", "Increase oxygen", "Restrain the patient"],
            correct: 1,
            explanation: "If the supraglottic airway is causing significant agitation, it may be removed; sedation is not routinely given to maintain it."
        },
        {
            q: "What is the target systolic blood pressure after ROSC in an adult with isolated traumatic brain injury?",
            options: ["≥90 mmHg", "≥100 mmHg", "≥110 mmHg", "≥120 mmHg"],
            correct: 3,
            explanation: "For isolated TBI, maintain SBP ≥120 mmHg to ensure cerebral perfusion."
        },
        {
            q: "What is the most reliable indicator of effective resuscitation after ROSC?",
            options: ["SpO₂", "Heart rate", "Blood pressure", "Neurological status"],
            correct: 2,
            explanation: "Blood pressure and perfusion are key indicators; neurological status may take time to assess."
        },
        {
            q: "A patient after ROSC has recurrent VF. What is the immediate action?",
            options: ["Give amiodarone", "Defibrillate and resume CPR", "Start TTM", "Give adrenaline"],
            correct: 1,
            explanation: "Defibrillation and resumption of CPR are the priorities for recurrent VF."
        },
        {
            q: "What is the correct adrenaline infusion rate for an adult after ROSC?",
            options: ["0.05‑0.3 mcg/kg/min", "0.5‑1 mcg/min", "2‑10 mcg/min", "5‑20 mcg/kg/min"],
            correct: 2,
            explanation: "Adrenaline infusion rate is 2‑10 mcg/min IV/IO."
        },
        {
            q: "What is the correct dopamine dose for normotensive shock after ROSC?",
            options: ["2‑5 mcg/kg/min", "5‑20 mcg/kg/min", "20‑50 mcg/kg/min", "0.5‑1 mg/kg"],
            correct: 1,
            explanation: "Dopamine dose is 5‑20 mcg/kg/min IV infusion."
        },
        {
            q: "A pediatric patient after ROSC is hypotensive despite two fluid boluses. What vasopressor can be considered?",
            options: ["Adrenaline infusion", "Dopamine", "Both are acceptable", "Noradrenaline"],
            correct: 2,
            explanation: "Both adrenaline and dopamine can be used; adrenaline is often preferred in hypotensive shock."
        },
        {
            q: "What is the target EtCO₂ after ROSC in a patient with traumatic brain injury?",
            options: ["30‑35 mmHg", "35‑45 mmHg", "40‑45 mmHg", "25‑30 mmHg"],
            correct: 0,
            explanation: "In TBI, mild hyperventilation (EtCO₂ 30‑35 mmHg) may be used to lower ICP, but normocapnia is generally targeted."
        },
        {
            q: "Which of the following is a contraindication to active cooling in the prehospital setting?",
            options: ["Temperature >38°C", "Inability to monitor core temperature", "Hemodynamic instability", "All of the above"],
            correct: 1,
            explanation: "Active cooling without core temperature monitoring is not recommended due to risk of overcooling."
        },
        {
            q: "A patient achieves ROSC and is obeying commands. What is the appropriate disposition?",
            options: ["Transport to hospital", "Treat at scene if stable", "Discharge with advice", "Observe for 30 minutes"],
            correct: 0,
            explanation: "All ROSC patients require hospital evaluation, even if neurologically intact."
        },
        {
            q: "What is the maximum total fluid bolus recommended for an adult after ROSC?",
            options: ["1000 mL", "2000 mL", "3000 mL", "No maximum"],
            correct: 1,
            explanation: "A total of up to 2000 mL may be given, but reassess frequently for fluid overload."
        },
        {
            q: "What is the pediatric maximum total fluid bolus after ROSC?",
            options: ["20 mL/kg", "40 mL/kg", "60 mL/kg", "80 mL/kg"],
            correct: 2,
            explanation: "Maximum 60 mL/kg, with frequent reassessment."
        },
        {
            q: "A patient after ROSC has a GCS of 6. What airway management is appropriate?",
            options: ["Supraglottic airway", "Endotracheal intubation", "OPA/NPA", "Any of the above depending on resources"],
            correct: 3,
            explanation: "If the patient cannot protect the airway, an advanced airway (SGA or ETT) should be placed."
        },
        {
            q: "What is the purpose of targeted temperature management after ROSC?",
            options: ["Reduce cerebral oxygen demand", "Prevent seizures", "Improve neurological outcome", "All of the above"],
            correct: 3,
            explanation: "TTM aims to improve neurological outcomes by reducing reperfusion injury and cerebral oedema."
        },
        {
            q: "How soon after ROSC should TTM be initiated?",
            options: ["Within 1 hour", "Within 2 hours", "Within 6 hours", "As soon as possible"],
            correct: 3,
            explanation: "TTM should be initiated as soon as possible after ROSC."
        }
    ],
    flashcards: [
        { category: "ROSC confirmation", question: "What are signs of ROSC?", answer: "Palpable pulse, sudden rise in EtCO₂ (>40 mmHg), organized rhythm, spontaneous breathing." },
        { category: "Oxygenation", question: "What is the target SpO₂ after ROSC?", answer: "94‑98%." },
        { category: "Ventilation", question: "What is the target EtCO₂ after ROSC?", answer: "35‑45 mmHg." },
        { category: "Fluids", question: "What is the initial fluid bolus for an adult with hypotension after ROSC?", answer: "250‑500 mL crystalloid IV/IO." },
        { category: "Fluids pediatric", question: "What is the initial fluid bolus for a pediatric patient after ROSC?", answer: "10‑20 mL/kg." },
        { category: "Fluids max adult", question: "What is the maximum fluid bolus for an adult after ROSC?", answer: "2000 mL total." },
        { category: "Fluids max pediatric", question: "What is the maximum fluid bolus for a pediatric patient after ROSC?", answer: "60 mL/kg." },
        { category: "Vasopressors", question: "Which vasopressor is preferred for hypotensive shock after ROSC?", answer: "Adrenaline." },
        { category: "Adrenaline push", question: "What is the push dose of adrenaline for an adult?", answer: "0.01 mg/kg (typically 0.1 mg) every 2‑5 minutes." },
        { category: "Adrenaline infusion", question: "What is the adrenaline infusion rate for an adult?", answer: "2‑10 mcg/min." },
        { category: "Adrenaline infusion pediatric", question: "What is the adrenaline infusion rate for pediatrics?", answer: "0.05‑0.3 mcg/kg/min." },
        { category: "Dopamine", question: "What is the dopamine dose for shock after ROSC?", answer: "5‑20 mcg/kg/min." },
        { category: "ECG", question: "When should a 12‑lead ECG be performed after ROSC?", answer: "Within 5 minutes for non‑traumatic arrests." },
        { category: "TTM", question: "What is the target temperature for TTM after ROSC?", answer: "32‑36°C." },
        { category: "TTM initiation", question: "How should TTM be initiated prehospital?", answer: "Remove clothing, cool vehicle, avoid active cooling without core temp monitoring." },
        { category: "Sedation", question: "What sedation agents can be used after ROSC?", answer: "Midazolam, diazepam, ketamine." },
        { category: "Midazolam adult", question: "What is the adult dose of midazolam for sedation?", answer: "1‑5 mg IV." },
        { category: "Midazolam pediatric", question: "What is the pediatric dose of midazolam?", answer: "0.1 mg/kg IV." },
        { category: "Ketamine adult", question: "What is the adult dose of ketamine for sedation?", answer: "0.25‑1 mg/kg IV." },
        { category: "Ketamine pediatric", question: "What is the pediatric dose of ketamine?", answer: "0.5‑1 mg/kg IV." },
        { category: "Re‑arrest", question: "What should you do if a patient re‑arrests after ROSC?", answer: "Immediately resume CPR and follow cardiac arrest protocols." },
        { category: "Movement", question: "Why should rapid movement be avoided for 10 minutes after ROSC?", answer: "It may precipitate re‑arrest." },
        { category: "Reassessment", question: "How often should vital signs be reassessed after ROSC?", answer: "Every 5 minutes." },
        { category: "Triage", question: "What triage priority are ROSC patients?", answer: "Red Priority." },
        { category: "Airway", question: "What airway should be placed for an unresponsive patient being transported?", answer: "Supraglottic airway (LT)." },
        { category: "TBI BP", question: "What SBP target for isolated TBI after ROSC?", answer: "≥120 mmHg (adults)." },
        { category: "Cardiogenic shock", question: "What are signs of cardiogenic shock?", answer: "Hypotension, pulmonary oedema, JVD." },
        { category: "Fluid overload", question: "What signs indicate fluid overload?", answer: "Crackles, JVD, worsening dyspnoea." },
        { category: "KPI", question: "What are two KPIs for ROSC care?", answer: "Vitals/EtCO₂ within 5 minutes; 12‑lead ECG within 5 minutes (non‑trauma)." },
        { category: "Handover", question: "What information is critical in handover after ROSC?", answer: "Time of ROSC, interventions given, ECG findings, neurological status." }
    ],
    critical: [
        {
            id: "crit_4_7_1",
            scenario: "A 65‑year‑old male achieved ROSC after 10 minutes of CPR for VF arrest. He is now unconscious with a GCS of 5, BP 85/50, HR 110, SpO₂ 93% on room air. What is your priority intervention?",
            question: "What should you do first?",
            options: [
                { t: "Give a 250‑500 mL fluid bolus", f: "Correct. Hypotension after ROSC should be treated with fluids." },
                { t: "Start an adrenaline infusion", f: "Vasopressors may be needed, but fluid is first‑line." },
                { t: "Perform a 12‑lead ECG", f: "ECG is important but should not delay hypotension management." },
                { t: "Initiate TTM with ice packs", f: "TTM can be started after stabilising BP." }
            ],
            correct: 0,
            explanation: "Hypotension after ROSC should be treated with a fluid bolus (250‑500 mL). If no response, consider vasopressors.",
            kpi: "Fluid bolus given within 5 minutes."
        },
        {
            id: "crit_4_7_2",
            scenario: "A 50‑year‑old female achieved ROSC after cardiac arrest. Her SpO₂ is 100% on 15 L O₂ via NRB. What is your next action regarding oxygenation?",
            question: "What should you do?",
            options: [
                { t: "Continue 15 L O₂", f: "Hyperoxia can be harmful; titrate to lower FiO₂." },
                { t: "Titrate oxygen to maintain SpO₂ 94‑98%", f: "Correct. Avoid hyperoxia." },
                { t: "Remove oxygen entirely", f: "Hypoxia must be avoided." },
                { t: "Switch to nasal cannula at 2 L/min", f: "Titrate based on SpO₂." }
            ],
            correct: 1,
            explanation: "After ROSC, target SpO₂ 94‑98% to avoid both hypoxia and hyperoxia. Reduce FiO₂ as tolerated.",
            kpi: "Oxygen titrated appropriately."
        },
        {
            id: "crit_4_7_3",
            scenario: "A patient after ROSC has a 12‑lead ECG showing ST elevation in leads II, III, aVF. He is haemodynamically stable. What is the priority?",
            question: "What should you do next?",
            options: [
                { t: "Give aspirin and GTN", f: "These are important, but the priority is transport to a PCI centre." },
                { t: "Transport emergently to a PCI‑capable hospital", f: "Correct. STEMI after ROSC requires immediate PCI." },
                { t: "Start fibrinolytic therapy", f: "Not indicated prehospital; PCI is preferred." },
                { t: "Administer amiodarone", f: "Not indicated for stable STEMI." }
            ],
            correct: 1,
            explanation: "STEMI after ROSC requires urgent transport to a PCI‑capable hospital. Aspirin and GTN can be given en route.",
            kpi: "Hospital notified; transport initiated <10 minutes."
        },
        {
            id: "crit_4_7_4",
            scenario: "A 70‑year‑old male achieved ROSC but remains unconscious. His BP is 110/70, HR 90, SpO₂ 96%. You are preparing for transport. What additional intervention should be considered?",
            question: "What should you do before moving the patient?",
            options: [
                { t: "Insert a supraglottic airway", f: "Correct. For unresponsive patients, secure the airway before transport." },
                { t: "Give a fluid bolus", f: "BP is stable; no indication." },
                { t: "Start TTM", f: "TTM can be initiated en route." },
                { t: "Perform a CT scan", f: "Not possible prehospital." }
            ],
            correct: 0,
            explanation: "Unconscious patients after ROSC require airway protection. Place a supraglottic airway before transport.",
            kpi: "Airway secured before departure."
        },
        {
            id: "crit_4_7_5",
            scenario: "A 5‑year‑old child achieved ROSC after drowning. He is intubated and ventilated. BP is 80/40, HR 140. What is the appropriate fluid and vasopressor management?",
            question: "What is the next step?",
            options: [
                { t: "Give 20 mL/kg fluid bolus and reassess", f: "Correct. Initial fluid bolus for pediatric hypotension." },
                { t: "Start dopamine infusion", f: "May be needed after fluids, but fluids first." },
                { t: "Give adrenaline 0.01 mg/kg", f: "Not first‑line for hypotension without shock?" },
                { t: "Increase PEEP", f: "Not indicated for hypotension." }
            ],
            correct: 0,
            explanation: "For pediatric hypotension after ROSC, give 20 mL/kg fluid bolus. If no response, consider vasopressors.",
            kpi: "Fluid bolus given within 5 minutes."
        }
    ]
};