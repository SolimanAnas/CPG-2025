/* ========== Chapter 4.1 – Adult Basic Life Support ========== */
window.CPG_DATA = {
    id: "c4-1",
    title: "Adult Basic Life Support",
    shortTitle: "4.1 Adult BLS",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">🫀 Adult Basic Life Support (BLS)</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Rapidly identify and initiate high‑quality cardiopulmonary resuscitation (CPR) for adults in cardiac arrest.</li>
                <li>Ensure ALS back‑up is requested promptly.</li>
                <li>Rapidly apply an AED (if available) and deliver a shock when indicated.</li>
            </ul>

            <!-- BLS Algorithm Image -->
            <div style="text-align:center; margin:20px 0;">
                <img src="../images/bls.png" alt="Adult BLS Algorithm" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
            </div>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Adult patients (≥13 years) presenting with cardiac arrest:
                    <ul>
                        <li>Unresponsiveness with no signs of life (no pulse, no breathing, or agonal gasps).</li>
                        <li>Suspected pulseless electrical activity (PEA), ventricular fibrillation (VF), ventricular tachycardia (VT), or asystole.</li>
                    </ul>
                </li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>Patients with obvious signs of irreversible death (rigor mortis, dependent lividity, decapitation).</li>
                <li>Paediatric patients (<13 years) – see Pediatric BLS CPG.</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Cardiac arrest confirmation:</strong> Verify unresponsiveness (AVPU: U), absent pulse (carotid) for 5‑10 seconds, absent normal breathing or only agonal gasps.</li>
                <li><strong>Scene and bystander assessment:</strong> Ensure scene safety; determine if bystander CPR was initiated and its quality.</li>
                <li><strong>Triage category:</strong> All unconscious patients and patients in cardiac arrest are Red Priority.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Check responsiveness</strong> – tap and shout.</li>
                <li><strong>Call for ALS back‑up</strong> – as soon as arrest is recognised.</li>
                <li><strong>Retrieve emergency equipment</strong> – first rescuer stays with patient, second retrieves AED and other gear.</li>
                <li><strong>Primary survey (C‑A‑B):</strong>
                    <ul>
                        <li><strong>C – Circulation:</strong> Start chest compressions immediately if no pulse felt within 10 seconds.
                            <ul>
                                <li>Rate: 100‑120/min.</li>
                                <li>Depth: 5‑6 cm (2‑2.4 inches).</li>
                                <li>Allow full chest recoil.</li>
                                <li>Minimise interruptions (<10 seconds).</li>
                                <li>Rotate compressors every 2 minutes.</li>
                            </ul>
                        </li>
                        <li><strong>A – Airway:</strong> Open airway (head‑tilt/chin‑lift; jaw thrust if trauma suspected). Use OPA/NPA as needed. For patients with laryngectomy/tracheostomy, remove obstructions and ventilate via stoma.</li>
                        <li><strong>B – Breathing:</strong> Provide ventilations:
                            <ul>
                                <li>Without advanced airway: 30 compressions : 2 breaths.</li>
                                <li>With advanced airway (supraglottic/ETT): 1 breath every 6 seconds (10 breaths/min), no pause in compressions.</li>
                                <li>Use BVM with 100% oxygen as soon as available.</li>
                                <li>Avoid excessive ventilation.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><strong>Apply AED</strong> – as soon as available.
                    <ul>
                        <li>If shock advised: deliver 1 shock, immediately resume CPR for 2 minutes.</li>
                        <li>If no shock advised: resume CPR for 2 minutes.</li>
                    </ul>
                </li>
                <li><strong>Continue CPR</strong> – until ALS back‑up arrives or signs of ROSC.</li>
                <li><strong>Check for ROSC</strong> – every 2 minutes (spontaneous pulse, normal breathing, EtCO₂ >40 mmHg).</li>
            </ul>

            <h4>Special Circumstances</h4>
            <ul>
                <li><strong>Maternal cardiac arrest:</strong>
                    <ul>
                        <li>Perform high‑quality CPR with manual left‑lateral uterine displacement to relieve aortocaval compression.</li>
                        <li>Transfer to an appropriate facility as soon as possible.</li>
                        <li>Peri‑mortem caesarean delivery may be needed for >20 weeks gestation – coordinate with hospital.</li>
                    </ul>
                </li>
                <li><strong>Hypothermia:</strong>
                    <ul>
                        <li>Check pulse for up to 60 seconds before confirming arrest.</li>
                        <li>Withhold adrenaline until core temperature >30°C.</li>
                        <li>Defibrillation doses remain unchanged.</li>
                        <li>All cardiac arrest patients secondary to hypothermia must be transferred to hospital under CPR.</li>
                    </ul>
                </li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Minimise interruptions in compressions (<10 seconds).</li>
                <li>Ensure correct compression depth and rate; use feedback devices if available.</li>
                <li>Ensure no one touches the patient during defibrillation.</li>
                <li>Remove patient from wet surfaces before defibrillation.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Time CPR started, AED applied, defibrillation given.</li>
                <li>Ventilation method, airway adjuncts, oxygen.</li>
                <li>Compressor rotations, ALS arrival.</li>
                <li>ROSC indicators, vitals post‑ROSC.</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Initiate chest compressions within 1 minute of recognition of cardiac arrest.</li>
                <li>Apply the AED within 3 minutes of recognition of cardiac arrest.</li>
            </ul>

            <h4>References</h4>
            <ul>
                <li>American Heart Association, 2020. AHA Guidelines for CPR and ECC.</li>
                <li>DCAS CPG 2025 – Resuscitation section.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What is the correct compression‑to‑ventilation ratio for single‑rescuer adult CPR?",
            options: ["15:2", "30:2", "20:2", "10:1"],
            correct: 1,
            explanation: "The ratio for single‑rescuer adult CPR is 30 compressions to 2 breaths."
        },
        {
            q: "What is the recommended chest compression rate for adult CPR?",
            options: ["80‑100/min", "100‑120/min", "120‑140/min", "60‑80/min"],
            correct: 1,
            explanation: "Compressions should be delivered at a rate of 100‑120 per minute."
        },
        {
            q: "What is the correct compression depth for an adult?",
            options: ["At least 2 inches (5 cm)", "At least 3 inches (7.5 cm)", "1‑2 inches", "2‑3 inches"],
            correct: 0,
            explanation: "Compression depth should be at least 5 cm (2 inches), but not exceed 6 cm."
        },
        {
            q: "After how many minutes should compressors be rotated?",
            options: ["Every 1 minute", "Every 2 minutes", "Every 5 minutes", "When tired"],
            correct: 1,
            explanation: "Rotate compressors every 2 minutes to maintain high‑quality compressions."
        },
        {
            q: "What is the maximum interruption time for pulses/breaths during CPR?",
            options: ["5 seconds", "10 seconds", "15 seconds", "20 seconds"],
            correct: 1,
            explanation: "Interruptions in chest compressions should be <10 seconds."
        },
        {
            q: "With an advanced airway in place, how often should ventilations be delivered during CPR?",
            options: ["1 breath every 3 seconds", "1 breath every 6 seconds", "1 breath every 10 seconds", "Asynchronous with compressions"],
            correct: 1,
            explanation: "With an advanced airway, deliver 1 breath every 6 seconds (10 breaths/min) without pausing compressions."
        },
        {
            q: "What is the first step when using an AED on an adult in cardiac arrest?",
            options: ["Check pulse", "Apply pads", "Turn on the AED", "Start CPR"],
            correct: 2,
            explanation: "Turn on the AED first, then follow its prompts. CPR should be ongoing while preparing the AED."
        },
        {
            q: "If an AED advises a shock, what should you do immediately after delivering the shock?",
            options: ["Check pulse", "Re‑analyze rhythm", "Resume CPR for 2 minutes", "Give a second shock"],
            correct: 2,
            explanation: "After a shock, immediately resume CPR for 2 minutes (starting with compressions)."
        },
        {
            q: "In maternal cardiac arrest, what additional intervention is critical?",
            options: ["Left lateral uterine displacement", "Elevate legs", "Give oxygen only", "Wait for ALS"],
            correct: 0,
            explanation: "Manual left lateral uterine displacement relieves aortocaval compression and improves venous return."
        },
        {
            q: "In hypothermic cardiac arrest, when should adrenaline be administered?",
            options: ["Immediately", "After core temperature >30°C", "After 10 minutes of CPR", "Only if VF/VT present"],
            correct: 1,
            explanation: "Withhold adrenaline until core temperature >30°C; below that, it may accumulate and cause toxicity on rewarming."
        },
        {
            q: "What is the preferred method to open the airway in a trauma patient with suspected cervical spine injury?",
            options: ["Head‑tilt/chin‑lift", "Jaw thrust", "Neck hyperextension", "OPA insertion"],
            correct: 1,
            explanation: "Jaw thrust moves the mandible forward without moving the neck, maintaining spinal alignment."
        },
        {
            q: "What is the initial shock energy for biphasic defibrillation in adult cardiac arrest?",
            options: ["100 J", "120‑200 J (manufacturer‑specific)", "360 J", "50 J"],
            correct: 1,
            explanation: "Typical initial biphasic energy is 120‑200 J, depending on the device; follow manufacturer's recommendation."
        },
        {
            q: "What should you do if an adult victim is unresponsive, not breathing, but has a definite pulse?",
            options: ["Start CPR", "Give rescue breaths at 1 breath every 5‑6 seconds", "Apply AED", "Place in recovery position"],
            correct: 1,
            explanation: "If the patient has a pulse but is not breathing adequately, give rescue breaths at a rate of 10‑12 breaths/min (1 breath every 5‑6 seconds)."
        },
        {
            q: "Which of the following is a sign of effective CPR?",
            options: ["EtCO₂ <10 mmHg", "EtCO₂ >10 mmHg", "EtCO₂ >40 mmHg", "No EtCO₂ waveform"],
            correct: 1,
            explanation: "EtCO₂ >10 mmHg during CPR suggests adequate chest compressions; a sudden rise to >40 mmHg may indicate ROSC."
        },
        {
            q: "How long should you check for a pulse in an unresponsive adult?",
            options: ["At least 5 seconds but no more than 10 seconds", "Exactly 10 seconds", "At least 10 seconds", "Until you are sure"],
            correct: 0,
            explanation: "Check for a central pulse for at least 5 seconds but no more than 10 seconds; if unsure, start CPR."
        },
        {
            q: "What is the correct hand placement for adult CPR?",
            options: ["Upper half of sternum", "Lower half of sternum", "Left side of chest", "Centre of chest (lower half)"],
            correct: 3,
            explanation: "Place hands on the lower half of the sternum (centre of the chest)."
        },
        {
            q: "During CPR, what is the purpose of allowing full chest recoil?",
            options: ["Increase coronary perfusion", "Prevent rib fractures", "Allow lung inflation", "Reduce rescuer fatigue"],
            correct: 0,
            explanation: "Full chest recoil allows the heart to refill, improving coronary perfusion and cardiac output."
        },
        {
            q: "A patient in cardiac arrest has an advanced airway placed. What is the correct ventilation rate?",
            options: ["6‑8 breaths/min", "8‑10 breaths/min", "10‑12 breaths/min", "12‑15 breaths/min"],
            correct: 2,
            explanation: "With an advanced airway, give 1 breath every 6 seconds (10 breaths/min) without interrupting compressions."
        },
        {
            q: "What is the first drug for non‑shockable cardiac arrest (asystole/PEA)?",
            options: ["Amiodarone", "Atropine", "Adrenaline (epinephrine)", "Lidocaine"],
            correct: 2,
            explanation: "Adrenaline 1 mg IV/IO every 3‑5 minutes is first line for non‑shockable rhythms."
        },
        {
            q: "What is the recommended depth for chest compressions in an adult?",
            options: ["2‑3 cm", "4‑5 cm", "5‑6 cm", "6‑7 cm"],
            correct: 2,
            explanation: "Compression depth should be 5‑6 cm (2‑2.4 inches)."
        },
        {
            q: "What is the correct compression‑ventilation ratio when two or more rescuers are present for an adult?",
            options: ["15:2", "30:2", "5:1", "20:2"],
            correct: 1,
            explanation: "Even with two rescuers, the adult ratio remains 30:2 until an advanced airway is placed."
        },
        {
            q: "You witness an adult suddenly collapse. The scene is safe. What is your next action?",
            options: ["Check pulse", "Start CPR", "Call for help and get AED", "Give 2 rescue breaths"],
            correct: 2,
            explanation: "First, check responsiveness. If unresponsive and not breathing, call for help and retrieve an AED (or send someone), then start CPR."
        },
        {
            q: "What is a contraindication to starting CPR in an adult?",
            options: ["Rigor mortis", "Unwitnessed arrest", "Hypothermia", "Pulseless electrical activity"],
            correct: 0,
            explanation: "Signs of irreversible death (rigor mortis, dependent lividity, decapitation) are contraindications to starting CPR."
        },
        {
            q: "During CPR, how often should rhythm checks be performed?",
            options: ["After every shock", "Every 2 minutes", "Every 5 minutes", "Only when AED prompts"],
            correct: 1,
            explanation: "Rhythm checks should occur every 2 minutes, with minimal interruption (<10 seconds)."
        },
        {
            q: "What is the maximum time you should interrupt compressions for a rhythm check?",
            options: ["5 seconds", "10 seconds", "15 seconds", "20 seconds"],
            correct: 1,
            explanation: "Interruptions should be kept to less than 10 seconds."
        },
        {
            q: "Which of the following is a shockable rhythm?",
            options: ["Asystole", "Pulseless electrical activity", "Ventricular fibrillation", "Sinus bradycardia"],
            correct: 2,
            explanation: "Ventricular fibrillation and pulseless ventricular tachycardia are shockable rhythms."
        },
        {
            q: "What is the correct dose of adrenaline during adult cardiac arrest?",
            options: ["0.5 mg", "1 mg", "2 mg", "0.1 mg/kg"],
            correct: 1,
            explanation: "Adrenaline 1 mg IV/IO every 3‑5 minutes is the standard dose."
        },
        {
            q: "A patient with a tracheostomy is in cardiac arrest. How should you ventilate?",
            options: ["Use a mask over the mouth and nose", "Ventilate via the stoma", "Use an OPA", "Seal the stoma and ventilate mouth"],
            correct: 1,
            explanation: "For a patient with a tracheostomy, ventilate directly via the stoma using a paediatric mask or BVM with a tracheostomy adapter."
        },
        {
            q: "In maternal cardiac arrest, why is left lateral uterine displacement important?",
            options: ["To improve fetal oxygenation", "To relieve pressure on the inferior vena cava", "To make chest compressions easier", "To prevent aspiration"],
            correct: 1,
            explanation: "Displacing the uterus to the left relieves aortocaval compression, improving venous return and cardiac output during CPR."
        },
        {
            q: "What is the recommended compression depth for an adult?",
            options: ["At least 2 inches (5 cm)", "At least 2.5 inches (6 cm)", "1.5‑2 inches", "3 inches"],
            correct: 0,
            explanation: "Compression depth should be at least 2 inches (5 cm), but no more than 2.4 inches (6 cm)."
        }
    ],
    flashcards: [
        { category: "CPR basics", question: "What is the compression‑ventilation ratio for single‑rescuer adult CPR?", answer: "30:2." },
        { category: "CPR basics", question: "What is the recommended compression rate for adult CPR?", answer: "100‑120 compressions per minute." },
        { category: "CPR basics", question: "What is the correct compression depth for an adult?", answer: "5‑6 cm (2‑2.4 inches)." },
        { category: "CPR basics", question: "How often should compressors be rotated?", answer: "Every 2 minutes." },
        { category: "CPR basics", question: "What is the maximum interruption time for compressions?", answer: "<10 seconds." },
        { category: "Airway", question: "What manoeuvre opens the airway in non‑trauma patients?", answer: "Head‑tilt/chin‑lift." },
        { category: "Airway", question: "What manoeuvre opens the airway in suspected trauma?", answer: "Jaw thrust." },
        { category: "Airway", question: "How do you size an OPA?", answer: "Corner of mouth to earlobe." },
        { category: "Airway", question: "How do you size an NPA?", answer: "Nostril to tragus." },
        { category: "Ventilation", question: "What is the ventilation rate with an advanced airway during CPR?", answer: "1 breath every 6 seconds (10/min)." },
        { category: "Ventilation", question: "What is the ventilation rate without an advanced airway?", answer: "30 compressions to 2 breaths." },
        { category: "AED", question: "What should you do immediately after an AED delivers a shock?", answer: "Resume CPR for 2 minutes, starting with compressions." },
        { category: "AED", question: "If AED says 'no shock advised', what do you do?", answer: "Resume CPR for 2 minutes." },
        { category: "ROSC", question: "What are signs of ROSC?", answer: "Spontaneous pulse, normal breathing, EtCO₂ >40 mmHg." },
        { category: "Maternal arrest", question: "What is the key intervention in maternal cardiac arrest?", answer: "Manual left lateral uterine displacement." },
        { category: "Hypothermia", question: "How long should you check for a pulse in severe hypothermia?", answer: "Up to 60 seconds." },
        { category: "Hypothermia", question: "When should adrenaline be given in hypothermic arrest?", answer: "After core temperature >30°C." },
        { category: "Defibrillation", question: "What are shockable rhythms?", answer: "VF and pulseless VT." },
        { category: "Defibrillation", question: "What energy is used for first biphasic shock?", answer: "120‑200 J (manufacturer‑specific)." },
        { category: "Drugs", question: "What is the dose and interval of adrenaline in cardiac arrest?", answer: "1 mg every 3‑5 minutes." },
        { category: "Drugs", question: "What is the first‑line antiarrhythmic in shockable arrest?", answer: "Amiodarone (300 mg first dose)." },
        { category: "Airway", question: "What should you do for a patient with a laryngectomy in arrest?", answer: "Ventilate via stoma." },
        { category: "Quality", question: "What does EtCO₂ >10 mmHg during CPR indicate?", answer: "Adequate compressions." },
        { category: "Quality", question: "What does EtCO₂ >40 mmHg suddenly indicate?", answer: "Possible ROSC." },
        { category: "Exclusion", question: "When should CPR not be started?", answer: "Signs of irreversible death (rigor mortis, dependent lividity, decapitation)." },
        { category: "BLS sequence", question: "What is the BLS sequence for adult cardiac arrest?", answer: "Check responsiveness → call for help/AED → check pulse (≤10 sec) → start CPR 30:2." },
        { category: "Chest recoil", question: "Why is full chest recoil important?", answer: "Allows heart to refill, improving coronary perfusion." },
        { category: "Pulse check", question: "Where do you check pulse in an adult?", answer: "Carotid artery." },
        { category: "Pulse check duration", question: "How long should you check for a pulse?", answer: "At least 5 seconds but no more than 10 seconds." },
        { category: "Transport", question: "Should a patient in cardiac arrest from hypothermia be transported?", answer: "Yes, all such patients must be transferred to hospital under CPR." }
    ],
    critical: [
        {
            id: "crit_4_1_1",
            scenario: "You are called to a 60‑year‑old male who collapsed at a restaurant. Bystanders are performing CPR. When you arrive, the patient is unresponsive, not breathing, and has no pulse. What is your priority action?",
            question: "What should you do first?",
            options: [
                { t: "Take over CPR and request ALS back‑up", f: "Correct. Continue high‑quality CPR and send someone to get the AED." },
                { t: "Check for a pulse for 20 seconds", f: "Prolonged pulse check delays CPR." },
                { t: "Give two rescue breaths", f: "CPR should be continued; breaths are part of the cycle." },
                { t: "Apply the AED immediately", f: "AED should be applied as soon as available, but CPR must continue without interruption." }
            ],
            correct: 0,
            explanation: "Continue high‑quality CPR, rotate compressors every 2 minutes, and apply the AED as soon as it arrives. Request ALS back‑up immediately.",
            kpi: "CPR continued without interruption; AED applied within 3 minutes."
        },
        {
            id: "crit_4_1_2",
            scenario: "A 55‑year‑old female in cardiac arrest has an advanced airway in place. CPR is ongoing. What ventilation rate should be used?",
            question: "What is the correct ventilation rate?",
            options: [
                { t: "1 breath every 3 seconds (20/min)", f: "Too fast; may cause gastric inflation." },
                { t: "1 breath every 6 seconds (10/min)", f: "Correct. This rate avoids hyperventilation." },
                { t: "2 breaths every 30 compressions", f: "That ratio is for CPR without an advanced airway." },
                { t: "Continuous ventilation without pausing", f: "Ventilations are asynchronous but at a rate of 10/min." }
            ],
            correct: 1,
            explanation: "With an advanced airway, deliver 1 breath every 6 seconds (10 breaths/min) without pausing compressions.",
            kpi: "Ventilation rate maintained at 10/min."
        },
        {
            id: "crit_4_1_3",
            scenario: "You are managing a 30‑week pregnant woman in cardiac arrest. What additional intervention is essential?",
            question: "What should you do to improve maternal and fetal outcomes?",
            options: [
                { t: "Place a wedge under the right hip", f: "Correct. Left lateral tilt or manual uterine displacement relieves aortocaval compression." },
                { t: "Give high‑flow oxygen only", f: "Oxygen is important, but mechanical displacement is key." },
                { t: "Start CPR in the Trendelenburg position", f: "Not recommended." },
                { t: "Delay defibrillation", f: "Defibrillation should not be delayed." }
            ],
            correct: 0,
            explanation: "Perform manual left lateral uterine displacement or place a wedge under the right hip to shift the uterus off the inferior vena cava, improving venous return during CPR.",
            kpi: "Uterine displacement initiated immediately."
        },
        {
            id: "crit_4_1_4",
            scenario: "A patient in cardiac arrest is hypothermic (core temperature 28°C). You have been performing CPR for 5 minutes. What is the correct approach to medication?",
            question: "Should you give adrenaline now?",
            options: [
                { t: "Give adrenaline 1 mg IV now", f: "Withhold until temperature >30°C." },
                { t: "Withhold adrenaline until temperature >30°C", f: "Correct. Adrenaline may accumulate and cause toxicity." },
                { t: "Give half‑dose adrenaline", f: "No evidence; withhold." },
                { t: "Give amiodarone instead", f: "Adrenaline should still be withheld." }
            ],
            correct: 1,
            explanation: "In hypothermic arrest, withhold adrenaline until core temperature is >30°C. Defibrillation attempts may continue. Rewarm aggressively.",
            kpi: "Adrenaline withheld appropriately."
        },
        {
            id: "crit_4_1_5",
            scenario: "You are performing CPR on an adult. After 2 minutes, the AED prompts a rhythm check. The patient now has a pulse. What is your next step?",
            question: "What should you do now?",
            options: [
                { t: "Continue CPR for another 2 minutes", f: "ROSC has been achieved; stop compressions." },
                { t: "Check for breathing and provide post‑resuscitation care", f: "Correct. Maintain airway, give oxygen, and monitor vitals." },
                { t: "Deliver another shock", f: "Not indicated." },
                { t: "Give adrenaline", f: "Adrenaline is for cardiac arrest; post‑ROSC care is now priority." }
            ],
            correct: 1,
            explanation: "After ROSC, assess airway, breathing, and circulation. Provide oxygen to maintain SpO₂ 94‑98%, monitor ECG, and transport to an appropriate facility.",
            kpi: "ROSC recognised; post‑resuscitation care initiated."
        }
    ]
};