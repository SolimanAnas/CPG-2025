/* ========== Chapter 4.5 – Trauma Cardiac Arrest ========== */
window.CPG_DATA = {
    id: "c4-5",
    title: "Trauma Cardiac Arrest",
    shortTitle: "4.5 Trauma Cardiac Arrest",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">🚑 Trauma Cardiac Arrest</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Rapidly identify and manage traumatic cardiac arrest.</li>
                <li>Perform high‑quality resuscitation (CPR) and specific interventions related to traumatic arrest to maximize survival.</li>
                <li>Ensure safe transport to a trauma center.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Adult and pediatric patients presenting with traumatic cardiac arrest, including unresponsiveness with no signs of life (no pulse, no breathing, or agonal gasps) following significant trauma.</li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>Non‑traumatic cardiac arrest patients.</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Traumatic cardiac arrest confirmation:</strong> Perform primary survey as per Universal Care CPG. Verify unresponsiveness (AVPU: U), absent pulse (carotid or femoral) for 5‑10 seconds, absent normal breathing or agonal gasps.</li>
                <li><strong>Trauma mechanism assessment:</strong> Identify mechanism of injury (blunt vs. penetrating, location such as chest, abdomen, or head). Assess for high‑risk injuries likely causing arrest (e.g., tension pneumothorax, massive hemothorax, cardiac tamponade).</li>
                <li><strong>Signs of irreversible death:</strong> In unwitnessed traumatic cardiac arrest, identify decapitation, incineration, body decomposition, rigor mortis – if any present, CPR not required.</li>
                <li><strong>Futile resuscitation assessment:</strong> For unwitnessed traumatic arrest, if ALL of the following are present: blunt or penetrating trauma, no spontaneous movement, no pupillary response, apneic and pulseless, ECG shows no organized rhythm – then CPR is not indicated.</li>
                <li><strong>Triage category:</strong> All cardiac arrest patients are Red Priority.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Deciding to start CPR:</strong>
                    <ul>
                        <li><strong>Witnessed cardiac arrest:</strong> If arrest witnessed by ambulance staff, CPR should be initiated.</li>
                        <li><strong>Unwitnessed cardiac arrest:</strong> Check for signs of irreversible death. If any present, do not start CPR. If none, assess futility criteria; if all criteria met, do not start CPR. Otherwise, start CPR.</li>
                    </ul>
                </li>
                <li><strong>Request ALS back‑up:</strong> Consider requirement for ALS back‑up as per Universal Care CPG. If resuscitation started, ALS back‑up should be considered. Transfer to hospital prioritized; do not wait on scene – meet ALS en route.</li>
                <li><strong>Perform resuscitation (CPR):</strong> As per Adult or Pediatric Cardiac Arrest CPG.</li>
                <li><strong>Consider specific trauma interventions:</strong>
                    <ul>
                        <li><strong>Pelvic binder:</strong> Consider placement if pelvic fracture suspected (e.g., mechanism, instability). Should be placed before chest compressions start; time permitted for placement limited to 30 seconds after no pulse is felt.</li>
                        <li><strong>Bilateral chest needle decompression:</strong> Consider if cause of arrest unclear (e.g., polytrauma) or tension pneumothorax suspected. Perform in the 2nd intercostal space, midclavicular line on both sides.</li>
                        <li><strong>Control active external bleeding:</strong> Identify and immediately control using direct pressure, wound packing, or tourniquets as appropriate.</li>
                        <li><strong>Tranexamic acid (TXA):</strong> Consider if arrest witnessed or signs of massive hemorrhage (penetrating trauma, major limb injury, severe pelvic fracture). Dose: Adults 1g IV/IO over 10 minutes; Pediatrics 15mg/kg IV/IO over 10 minutes (max 1g). Contraindicated if unwitnessed with prolonged downtime or non‑survivable injuries.</li>
                    </ul>
                </li>
                <li><strong>Transport:</strong> All traumatic cardiac arrest patients must be transported to a trauma center. Minimize scene time. See Starting, Stopping or Transferring CPR CPG for guidance.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Resuscitation should be initiated in cases where mechanism of injury does not correlate with clinical condition, suggesting non‑traumatic cause.</li>
                <li>Pelvic binder placement should not delay chest compressions beyond 30 seconds.</li>
                <li>Needle decompression may be life‑saving if tension pneumothorax present.</li>
                <li>TXA should be given early (within 3 hours of injury).</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li>For guidance on stopping or transferring CPR cases in trauma, see the Starting, Stopping or Transferring CPR CPG.</li>
                <li>TXA is not routinely indicated in patients already in cardiac arrest unless high suspicion that arrest is due to massive hemorrhage and ROSC achievable.</li>
                <li>Uncontrolled hemorrhage is a common reversible cause of traumatic cardiac arrest – address rapidly.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Identification: Patient's full name, age, gender.</li>
                <li>Mechanism / Medical Complaint: Mechanism of injury (blunt, penetrating), suspected traumatic cardiac arrest.</li>
                <li>Injuries / Information: Injury pattern noted, signs of irreversible death, resuscitation criteria met/unmet.</li>
                <li>Signs: Initial rhythm, unresponsiveness, pulse and breathing status, GCS if regained, pupil response.</li>
                <li>Treatment: CPR and trauma‑specific interventions (pelvic binder, bilateral chest decompression, hemorrhage control methods). IV/IO access, airway management, medications (TXA if given).</li>
                <li>Allergies: Known drug or environmental allergies.</li>
                <li>Medications: Pre‑arrest medications if known.</li>
                <li>Background: History if available from bystanders.</li>
                <li>Other: ECG rhythm strips, time CPR started/stopped, transfer or termination rationale.</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Immediately initiate CPR for traumatic cardiac arrests witnessed by EMS.</li>
                <li>Request ALS back‑up (where appropriate) for all traumatic cardiac arrests.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "In a witnessed traumatic cardiac arrest by EMS, what is the priority?",
            options: ["Wait for ALS back‑up", "Start CPR immediately", "Apply pelvic binder first", "Perform bilateral chest decompression"],
            correct: 1,
            explanation: "If the arrest is witnessed by ambulance staff, CPR should be initiated immediately."
        },
        {
            q: "Which of the following is a sign of irreversible death and a contraindication to starting CPR?",
            options: ["Hypothermia", "Decapitation", "Tension pneumothorax", "Agonal gasps"],
            correct: 1,
            explanation: "Decapitation, incineration, decomposition, and rigor mortis are signs of irreversible death; CPR should not be started."
        },
        {
            q: "In an unwitnessed traumatic cardiac arrest, all the following must be present to withhold CPR except:",
            options: ["Blunt or penetrating trauma", "No spontaneous movement", "Pupils reactive to light", "ECG shows no organized rhythm"],
            correct: 2,
            explanation: "Criteria for withholding CPR include: blunt/penetrating trauma, no spontaneous movement, no pupillary response, apneic and pulseless, ECG no organized rhythm. Reactive pupils would indicate possible neurological function."
        },
        {
            q: "What is the time limit for placing a pelvic binder after no pulse is felt in traumatic cardiac arrest?",
            options: ["10 seconds", "30 seconds", "1 minute", "2 minutes"],
            correct: 1,
            explanation: "The pelvic binder should be placed before chest compressions start, and the time permitted is limited to 30 seconds after no pulse is felt."
        },
        {
            q: "When should bilateral chest needle decompression be considered in traumatic cardiac arrest?",
            options: ["Only if obvious chest injury", "When the cause of arrest is unclear (e.g., polytrauma)", "After 10 minutes of CPR", "Only in penetrating trauma"],
            correct: 1,
            explanation: "Bilateral chest needle decompression should be considered when the cause of arrest is not clear, such as in polytrauma."
        },
        {
            q: "What is the dose of tranexamic acid (TXA) for an adult in traumatic cardiac arrest?",
            options: ["500 mg IV", "1 g IV over 10 minutes", "2 g IV bolus", "15 mg/kg"],
            correct: 1,
            explanation: "TXA dose for adults is 1 g IV/IO, diluted in 100 mL normal saline, given over 10 minutes."
        },
        {
            q: "In which of the following is TXA contraindicated in traumatic cardiac arrest?",
            options: ["Witnessed arrest with massive hemorrhage", "Unwitnessed arrest with prolonged downtime", "Penetrating trauma to the chest", "Pelvic fracture with instability"],
            correct: 1,
            explanation: "TXA is contraindicated in unwitnessed arrest with prolonged downtime, or when death is clearly non‑survivable (e.g., massive head injury, decapitation)."
        },
        {
            q: "What is the first step in managing a traumatic cardiac arrest patient with uncontrolled limb bleeding?",
            options: ["Start chest compressions", "Apply a tourniquet", "Give TXA", "Insert an advanced airway"],
            correct: 1,
            explanation: "Uncontrolled hemorrhage is a common reversible cause; control external bleeding immediately with direct pressure, wound packing, or tourniquets."
        },
        {
            q: "After ROSC in traumatic cardiac arrest, what is a key consideration?",
            options: ["Rapid transport to trauma center", "Administer TXA", "Perform bilateral chest decompression", "Apply pelvic binder"],
            correct: 0,
            explanation: "After ROSC, the patient should be rapidly transported to a trauma center for definitive care."
        },
        {
            q: "Which of the following is NOT a reversible cause of traumatic cardiac arrest?",
            options: ["Tension pneumothorax", "Cardiac tamponade", "Hypovolemia", "Ventricular fibrillation"],
            correct: 3,
            explanation: "Ventricular fibrillation may be a primary cardiac cause, but in trauma, reversible causes include tension pneumothorax, tamponade, hypovolemia, and hypoxia."
        },
        {
            q: "How should TXA be administered in a pediatric patient with traumatic cardiac arrest?",
            options: ["1 g IV", "15 mg/kg IV over 10 minutes (max 1 g)", "0.1 mg/kg", "5 mg/kg bolus"],
            correct: 1,
            explanation: "Pediatric TXA dose is 15 mg/kg IV/IO over 10 minutes, maximum 1 g."
        },
        {
            q: "What is the primary goal of placing a pelvic binder in traumatic cardiac arrest?",
            options: ["Stabilize femur fractures", "Reduce pelvic volume and control hemorrhage", "Prevent further spinal injury", "Facilitate chest compressions"],
            correct: 1,
            explanation: "A pelvic binder helps reduce pelvic volume and control hemorrhage from pelvic fractures."
        },
        {
            q: "In an unwitnessed traumatic cardiac arrest with blunt trauma, no movement, non‑reactive pupils, apnea, and asystole, what should you do?",
            options: ["Start CPR", "Apply pelvic binder", "Do not start CPR", "Give TXA"],
            correct: 2,
            explanation: "All criteria for futile resuscitation are met; CPR should not be started."
        },
        {
            q: "What is the preferred site for needle decompression in traumatic cardiac arrest?",
            options: ["5th intercostal space, anterior axillary line", "2nd intercostal space, midclavicular line", "4th intercostal space, midaxillary line", "Suprasternal notch"],
            correct: 1,
            explanation: "Needle decompression is performed in the 2nd intercostal space, midclavicular line on the affected side."
        },
        {
            q: "In traumatic cardiac arrest, what is the maximum on‑scene time goal?",
            options: ["<5 minutes", "<10 minutes", "<15 minutes", "<20 minutes"],
            correct: 1,
            explanation: "Scene time should be minimized; goal is under 10 minutes for red priority patients."
        },
        {
            q: "A patient with penetrating chest trauma arrests. You suspect tension pneumothorax. What is your immediate action?",
            options: ["Start CPR", "Perform needle decompression", "Give TXA", "Apply pelvic binder"],
            correct: 1,
            explanation: "Needle decompression should be performed immediately if tension pneumothorax is suspected."
        },
        {
            q: "When should ALS back‑up be requested in traumatic cardiac arrest?",
            options: ["After 10 minutes of CPR", "Immediately if resuscitation is started", "Only if ROSC achieved", "After bilateral decompression"],
            correct: 1,
            explanation: "ALS back‑up should be considered as soon as resuscitation is started; do not wait on scene, meet en route."
        },
        {
            q: "What is the correct compression‑ventilation ratio during CPR for an adult traumatic cardiac arrest with an advanced airway?",
            options: ["30:2", "15:2", "Continuous compressions with 10 breaths/min", "5:1"],
            correct: 2,
            explanation: "With an advanced airway, deliver continuous compressions at 100‑120/min and 1 breath every 6 seconds (10 breaths/min)."
        },
        {
            q: "Which of the following is a sign of cardiac tamponade in trauma?",
            options: ["Tracheal deviation", "Muffled heart sounds", "Subcutaneous emphysema", "Unilateral breath sounds"],
            correct: 1,
            explanation: "Beck's triad (muffled heart sounds, hypotension, JVD) suggests cardiac tamponade, though in arrest these may be difficult to assess."
        },
        {
            q: "In traumatic cardiac arrest, what is the role of bilateral chest decompression?",
            options: ["Treat bilateral hemothorax", "Rule out tension pneumothorax as cause", "Improve ventilation", "Facilitate CPR"],
            correct: 1,
            explanation: "Bilateral decompression may be performed when the cause is unclear, to rule out tension pneumothorax on either side."
        },
        {
            q: "What is the recommended dose of TXA for an adult traumatic cardiac arrest with massive hemorrhage?",
            options: ["500 mg IV push", "1 g IV over 10 minutes", "2 g IV bolus", "0.5 g IM"],
            correct: 1,
            explanation: "TXA 1 g IV/IO diluted in 100 mL normal saline, infused over 10 minutes."
        },
        {
            q: "A trauma patient is in cardiac arrest and has a suspected pelvic fracture. When should the pelvic binder be applied?",
            options: ["After 2 minutes of CPR", "Before starting chest compressions, within 30 seconds", "After intubation", "During transport"],
            correct: 1,
            explanation: "The pelvic binder should be placed before chest compressions start, limited to 30 seconds after no pulse is felt."
        },
        {
            q: "What is the primary indication for withholding CPR in an unwitnessed traumatic cardiac arrest?",
            options: ["Age >65", "Mechanism of injury", "Signs of irreversible death", "Pupils fixed and dilated"],
            correct: 2,
            explanation: "If any sign of irreversible death (decapitation, incineration, decomposition, rigor mortis) is present, CPR should not be started."
        },
        {
            q: "In traumatic cardiac arrest, after initiating CPR, what is the next priority?",
            options: ["Transport to trauma center", "Obtain IV access", "Give adrenaline", "Perform 12‑lead ECG"],
            correct: 0,
            explanation: "Transport to a trauma center should be prioritized; interventions can be performed en route."
        },
        {
            q: "A patient with traumatic cardiac arrest has massive external bleeding from a leg amputation. What is your immediate action?",
            options: ["Start CPR", "Apply tourniquet", "Give TXA", "Insert supraglottic airway"],
            correct: 1,
            explanation: "Control catastrophic hemorrhage first (C‑ABC). Apply a tourniquet immediately."
        },
        {
            q: "Which of the following is a component of the C‑ABC approach in trauma?",
            options: ["Circulation, Airway, Breathing, Cervical spine", "Catastrophic hemorrhage, Airway, Breathing, Circulation", "Compressions, Airway, Breathing, Circulation", "C‑spine, Airway, Breathing, Circulation"],
            correct: 1,
            explanation: "C‑ABC stands for Catastrophic hemorrhage control, Airway, Breathing, Circulation."
        },
        {
            q: "What is the maximum time allowed for a pelvic binder application before chest compressions start?",
            options: ["10 seconds", "30 seconds", "60 seconds", "2 minutes"],
            correct: 1,
            explanation: "The time permitted for pelvic binder placement is limited to 30 seconds after no pulse is felt."
        },
        {
            q: "In traumatic cardiac arrest, when should adrenaline be given?",
            options: ["Immediately after starting CPR", "After defibrillation if VF/VT", "Every 3‑5 minutes as per adult cardiac arrest protocol", "Only after ROSC"],
            correct: 2,
            explanation: "Adrenaline is given every 3‑5 minutes as per standard cardiac arrest protocols."
        },
        {
            q: "A patient with traumatic cardiac arrest has a tension pneumothorax. After needle decompression, you hear a gush of air and chest rise improves. What is your next action?",
            options: ["Repeat decompression on the other side", "Continue CPR and transport", "Give TXA", "Insert chest tube"],
            correct: 1,
            explanation: "After successful decompression, continue CPR and transport; a chest tube may be placed at hospital."
        },
        {
            q: "Which of the following is a contraindication to TXA in traumatic cardiac arrest?",
            options: ["Penetrating trauma", "Hypovolemic shock", "Unwitnessed arrest with prolonged downtime", "Pelvic fracture"],
            correct: 2,
            explanation: "TXA is contraindicated if arrest is unwitnessed with prolonged downtime, or if injuries are non‑survivable."
        },
        {
            q: "What is the role of bilateral chest decompression in traumatic cardiac arrest?",
            options: ["Treat bilateral hemothorax", "Rule out tension pneumothorax as a reversible cause", "Improve ventilation", "All of the above"],
            correct: 1,
            explanation: "Bilateral decompression may help exclude tension pneumothorax as a cause of arrest when the mechanism is unclear."
        }
    ],
    flashcards: [
        { category: "Indications", question: "When should CPR be started in traumatic cardiac arrest?", answer: "In witnessed arrest by EMS, or in unwitnessed arrest if no signs of irreversible death and futility criteria not met." },
        { category: "Contraindications", question: "What are signs of irreversible death that preclude starting CPR?", answer: "Decapitation, incineration, decomposition, rigor mortis." },
        { category: "Futility criteria", question: "What five criteria must ALL be met to withhold CPR in unwitnessed traumatic cardiac arrest?", answer: "Blunt/penetrating trauma, no spontaneous movement, no pupillary response, apneic and pulseless, ECG no organized rhythm." },
        { category: "C‑ABC", question: "What does C‑ABC stand for in trauma?", answer: "Catastrophic hemorrhage, Airway, Breathing, Circulation." },
        { category: "Pelvic binder", question: "When should a pelvic binder be placed in traumatic cardiac arrest?", answer: "Before chest compressions start, within 30 seconds after no pulse is felt." },
        { category: "Needle decompression", question: "Where is needle decompression performed for tension pneumothorax?", answer: "2nd intercostal space, midclavicular line." },
        { category: "Bilateral decompression", question: "Why consider bilateral chest decompression in traumatic cardiac arrest?", answer: "When cause of arrest is unclear (e.g., polytrauma) to rule out tension pneumothorax." },
        { category: "Hemorrhage control", question: "What is the priority in traumatic cardiac arrest with external bleeding?", answer: "Control catastrophic hemorrhage with tourniquet, direct pressure, or wound packing." },
        { category: "TXA", question: "What is the adult dose of TXA in traumatic cardiac arrest?", answer: "1 g IV/IO over 10 minutes (diluted in 100 mL normal saline)." },
        { category: "TXA pediatric", question: "What is the pediatric dose of TXA in trauma?", answer: "15 mg/kg IV/IO over 10 minutes (max 1 g)." },
        { category: "TXA timing", question: "Within what time window should TXA be given after injury?", answer: "Within 3 hours of injury." },
        { category: "TXA contraindications", question: "When is TXA contraindicated in traumatic cardiac arrest?", answer: "Unwitnessed arrest with prolonged downtime, or non‑survivable injuries." },
        { category: "Reversible causes", question: "Name three reversible causes of traumatic cardiac arrest.", answer: "Tension pneumothorax, cardiac tamponade, hypovolemia (hemorrhage)." },
        { category: "Transport", question: "What is the transport priority in traumatic cardiac arrest?", answer: "Rapid transport to a trauma center; minimize scene time (<10 minutes)." },
        { category: "ALS backup", question: "Should ALS backup be requested in traumatic cardiac arrest?", answer: "Yes, immediately after starting resuscitation; meet en route." },
        { category: "CPR ratio", question: "What is the CPR ratio for adult traumatic cardiac arrest without an advanced airway?", answer: "30:2." },
        { category: "Advanced airway", question: "What is the ventilation rate with an advanced airway during CPR?", answer: "1 breath every 6 seconds (10/min) without pausing compressions." },
        { category: "ROSC", question: "What should be done after ROSC in traumatic cardiac arrest?", answer: "Continue monitoring, maintain airway/breathing/circulation, and transport rapidly to trauma center." },
        { category: "Scene time", question: "What is the goal on‑scene time for traumatic cardiac arrest?", answer: "<10 minutes." },
        { category: "Witnessed arrest", question: "If EMS witnesses a traumatic cardiac arrest, what should be done?", answer: "Start CPR immediately." },
        { category: "Unwitnessed arrest", question: "In unwitnessed traumatic cardiac arrest, what is the first step?", answer: "Check for signs of irreversible death; if none, assess futility criteria." },
        { category: "Pupils", question: "What pupil finding is part of the futility criteria?", answer: "No pupillary response." },
        { category: "ECG rhythm", question: "What rhythm on ECG is part of the futility criteria?", answer: "No organized rhythm (asystole)." },
        { category: "Massive hemorrhage", question: "What is a common reversible cause of traumatic cardiac arrest?", answer: "Uncontrolled hemorrhage." },
        { category: "Pelvic binder placement", question: "What is the time limit for placing a pelvic binder after no pulse?", answer: "30 seconds." },
        { category: "Needle decompression site", question: "In which intercostal space is needle decompression performed?", answer: "2nd intercostal space, midclavicular line." },
        { category: "Bilateral decompression", question: "When is bilateral chest decompression indicated?", answer: "When the cause of arrest is unclear (e.g., polytrauma)." },
        { category: "TXA mechanism", question: "What is the mechanism of action of TXA?", answer: "Antifibrinolytic; inhibits plasminogen activation, reducing clot breakdown." },
        { category: "Cardiac tamponade", question: "What is a classic sign of cardiac tamponade in trauma?", answer: "Beck's triad: muffled heart sounds, hypotension, JVD." },
        { category: "KPI", question: "What are two key performance indicators for traumatic cardiac arrest?", answer: "Immediate CPR for witnessed arrest; ALS backup requested." }
    ],
    critical: [
        {
            id: "crit_4_5_1",
            scenario: "You are called to a 30‑year‑old male involved in a high‑speed motor vehicle collision. He is unresponsive, not breathing, and has no pulse. The arrest was witnessed by bystanders. There is obvious deformity of the pelvis and a large laceration to the thigh with active bleeding. What is your priority action?",
            question: "What should you do first?",
            options: [
                { t: "Start CPR and apply a tourniquet to the leg", f: "Correct. Control catastrophic hemorrhage first, then start CPR." },
                { t: "Start CPR only", f: "Bleeding must be controlled; otherwise, CPR is ineffective." },
                { t: "Apply pelvic binder and start CPR", f: "Pelvic binder is important, but active limb bleeding should be controlled first." },
                { t: "Give TXA 1 g IV", f: "TXA can be given later; hemorrhage control and CPR are immediate priorities." }
            ],
            correct: 0,
            explanation: "In trauma, catastrophic hemorrhage must be controlled first (C‑ABC). Apply a tourniquet to the leg, then start CPR.",
            kpi: "Tourniquet applied within 1 minute."
        },
        {
            id: "crit_4_5_2",
            scenario: "A 45‑year‑old male was found unresponsive after a fall from height. On arrival, he is apneic and pulseless. Pupils are fixed and dilated. ECG shows asystole. There are no signs of irreversible death. What is your next action?",
            question: "What should you do?",
            options: [
                { t: "Start CPR and prepare for rapid transport", f: "Correct. No futility criteria are fully met; start CPR." },
                { t: "Do not start CPR – death is inevitable", f: "Without signs of irreversible death, resuscitation should be attempted." },
                { t: "Give TXA first", f: "CPR and hemorrhage control come first." },
                { t: "Perform bilateral needle decompression", f: "No indication yet; start CPR." }
            ],
            correct: 0,
            explanation: "The patient does not meet futility criteria (no signs of irreversible death, and not all five futility criteria are checked? Actually, unwitnessed arrest but mechanism unclear; we have asystole, apneic, no movement, fixed pupils – but need all five. Since not all met, start CPR.",
            kpi: "CPR initiated within 1 minute."
        },
        {
            id: "crit_4_5_3",
            scenario: "You are managing a traumatic cardiac arrest patient with a suspected pelvic fracture. You have started CPR. What specific intervention should you consider within the first 30 seconds?",
            question: "What should you do next?",
            options: [
                { t: "Apply a pelvic binder", f: "Correct. Place pelvic binder before or during initial CPR, within 30 seconds." },
                { t: "Perform needle decompression", f: "Not indicated unless tension pneumothorax suspected." },
                { t: "Give adrenaline", f: "Adrenaline can be given later; pelvic binder is a trauma‑specific priority." },
                { t: "Insert an advanced airway", f: "Airway can be managed after initial interventions." }
            ],
            correct: 0,
            explanation: "In suspected pelvic fracture, apply a pelvic binder within 30 seconds of confirming no pulse, before or during initial chest compressions.",
            kpi: "Pelvic binder applied within 30 seconds."
        },
        {
            id: "crit_4_5_4",
            scenario: "A 25‑year‑old male sustained a gunshot wound to the chest. He is in cardiac arrest. You have controlled external bleeding and started CPR. You suspect tension pneumothorax as a possible cause. What is your next intervention?",
            question: "What should you do?",
            options: [
                { t: "Perform needle decompression on the affected side", f: "Correct. Decompress the chest to relieve tension pneumothorax." },
                { t: "Give TXA 1 g IV", f: "TXA may be considered but decompression is more urgent." },
                { t: "Perform bilateral decompression", f: "Start with the affected side; if no improvement, consider the other side." },
                { t: "Apply a pelvic binder", f: "Not indicated." }
            ],
            correct: 0,
            explanation: "With penetrating chest trauma and arrest, tension pneumothorax is a likely reversible cause. Perform needle decompression immediately.",
            kpi: "Needle decompression performed within 2 minutes."
        },
        {
            id: "crit_4_5_5",
            scenario: "A 60‑year‑old female was involved in a high‑speed RTC. She is in traumatic cardiac arrest. You have controlled external bleeding, started CPR, applied a pelvic binder, and performed bilateral needle decompression. After 10 minutes of resuscitation, there is no ROSC. What should you consider?",
            question: "What is the next appropriate action?",
            options: [
                { t: "Continue CPR and transport to a trauma center", f: "Correct. Transport should be initiated as soon as possible; do not delay for further on‑scene interventions." },
                { t: "Stop resuscitation efforts", f: "Unless all criteria for termination are met, continue and transport." },
                { t: "Give a second dose of TXA", f: "TXA is given once." },
                { t: "Perform pericardiocentesis", f: "Not indicated without signs of tamponade." }
            ],
            correct: 0,
            explanation: "Transport to a trauma center should be prioritized. Continue CPR en route and notify the receiving hospital.",
            kpi: "Scene time <10 minutes; transport initiated."
        }
    ]
};