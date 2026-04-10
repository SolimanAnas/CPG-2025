/* ========== Chapter 4.4 – Pediatric Cardiac Arrest ========== */
window.CPG_DATA = {
    id: "c4-4",
    title: "Pediatric Cardiac Arrest",
    shortTitle: "4.4 Pediatric Cardiac Arrest",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">👶 Pediatric Cardiac Arrest</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Promptly recognize pediatric cardiac arrest and begin high‑quality CPR without delay.</li>
                <li>Deliver effective ventilations and compressions with minimal interruptions.</li>
                <li>Identify and treat reversible causes (4 Hs and 4 Ts).</li>
                <li>Ensure early defibrillation for shockable rhythms (VF/pVT).</li>
                <li>Provide post‑resuscitation care and transport to an appropriate facility.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Infants and children ≤13 years with no signs of life (unresponsive, not breathing, no pulse).</li>
                <li>Any pediatric patient requiring CPR, defibrillation, or advanced life support.</li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>Obvious signs of irreversible death (rigor mortis, dependent lividity, decapitation).</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Scene safety & initial impression:</strong> Ensure scene safety. Use the Pediatric Assessment Triangle (PAT) – Appearance, Work of Breathing, Circulation to Skin.</li>
                <li><strong>Confirm cardiac arrest:</strong> Unresponsive, not breathing (or only gasping), no pulse felt within 10 seconds (brachial in infants, carotid in children).</li>
                <li><strong>Rhythm assessment:</strong> Apply defibrillator/monitor to identify shockable (VF/pVT) vs. non‑shockable (asystole/PEA) rhythms.</li>
                <li><strong>Identify reversible causes (4 Hs & 4 Ts):</strong> Hypoxia, hypovolemia, hypothermia, hypo‑/hyperkalemia, tension pneumothorax, tamponade, toxins, thrombosis (pulmonary/coronary).</li>
                <li><strong>Triage category:</strong> All cardiac arrest patients are Red Priority.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Immediate CPR (C‑A‑B):</strong>
                    <ul>
                        <li><strong>Compressions:</strong> Rate 100‑120/min; depth at least 1/3 chest diameter (~4 cm infants, ~5 cm children). Allow full recoil. Minimise interruptions (<10 seconds).</li>
                        <li>Single rescuer: 30:2; two or more rescuers: 15:2.</li>
                        <li>Rotate compressors every 2 minutes.</li>
                        <li><strong>Airway:</strong> Open airway (head‑tilt/chin‑lift if no trauma; jaw‑thrust if trauma). Use OPA/NPA. Supraglottic airway (laryngeal tube) preferred when available.</li>
                        <li><strong>Breathing:</strong> Give 2 breaths after each compression cycle. Use BVM with 100% oxygen. Once advanced airway in place, deliver 1 breath every 6 seconds (10/min) without pausing compressions. Target SpO₂ ≥94%.</li>
                    </ul>
                </li>
                <li><strong>Defibrillation:</strong>
                    <ul>
                        <li>Attach AED/manual defibrillator as soon as available. Use pediatric pads if available; otherwise adult pads (ensure no overlap).</li>
                        <li>Shockable rhythms (VF/pVT): first shock 2 J/kg; subsequent shocks 4 J/kg, up to 10 J/kg (not exceeding adult dose).</li>
                        <li>Resume CPR immediately after shock for 2 minutes.</li>
                    </ul>
                </li>
                <li><strong>IV/IO access:</strong> Obtain IV/IO access as soon as feasible. If difficult, IO is preferred over prolonged IV attempts.</li>
                <li><strong>Medications:</strong>
                    <ul>
                        <li><strong>Epinephrine (adrenaline):</strong> 0.01 mg/kg (0.1 mL/kg of 1:10,000) IV/IO every 3‑5 minutes. If no IV/IO, via ETT: 0.1 mg/kg (1:1,000) diluted in 3‑5 mL saline.</li>
                        <li><strong>Amiodarone:</strong> For refractory VF/pVT: 5 mg/kg IV/IO bolus after 3rd shock; may repeat after 5th shock (max 300 mg per dose).</li>
                    </ul>
                </li>
                <li><strong>Check blood glucose:</strong> Treat hypoglycaemia (see Hypoglycaemia CPG).</li>
                <li><strong>Consider reversible causes</strong> – treat accordingly (e.g., needle decompression for tension pneumothorax, fluids for hypovolaemia).</li>
                <li><strong>Reassess for ROSC</strong> every 2 minutes.</li>
                <li><strong>Post‑ROSC care:</strong> Maintain airway, breathing, and circulation. Target SpO₂ 94‑98%, EtCO₂ 35‑45 mmHg. Monitor for re‑arrest. Transport to appropriate facility.</li>
            </ul>

            <h4>Special Considerations</h4>
            <ul>
                <li><strong>Drowning:</strong> Give 5 initial rescue breaths before starting compressions.</li>
                <li><strong>Hypothermia:</strong> Check pulse for up to 60 seconds. Withhold adrenaline until core temperature >30°C; if given, extend intervals. Defibrillation attempts may continue. Transport under CPR.</li>
                <li><strong>Trauma:</strong> Follow trauma cardiac arrest protocol (C‑ABC).</li>
                <li><strong>Newborns:</strong> Different ratios and considerations – see Newborn Resuscitation CPG.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Avoid hyperventilation and excessive oxygen.</li>
                <li>Ensure correct compression depth and rate.</li>
                <li>Defibrillate promptly for shockable rhythms.</li>
                <li>Use Broselow tape for weight‑based dosing and equipment sizing.</li>
                <li>Communicate clearly within the team; assign roles.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Time of arrest, CPR start, defibrillation (energy, number), medications, airway interventions.</li>
                <li>Rhythm changes, ROSC, post‑resuscitation vitals.</li>
                <li>Reversible causes considered, ALS back‑up details.</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>CPR initiated within 1 minute of arrest recognition.</li>
                <li>First defibrillation for shockable rhythm within 2 minutes of monitor application.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What is the compression‑ventilation ratio for two‑rescuer CPR in a child?",
            options: ["30:2", "15:2", "20:2", "5:1"],
            correct: 1,
            explanation: "For two rescuers, the child/infant ratio is 15:2."
        },
        {
            q: "What is the recommended compression depth for an infant?",
            options: ["At least 2 cm", "At least 4 cm (1/3 chest depth)", "At least 5 cm", "3‑4 cm"],
            correct: 1,
            explanation: "Compression depth should be at least one‑third the anterior‑posterior chest diameter, approximately 4 cm in infants."
        },
        {
            q: "What is the recommended compression depth for a child?",
            options: ["At least 3 cm", "At least 5 cm (1/3 chest depth)", "At least 6 cm", "4‑5 cm"],
            correct: 1,
            explanation: "For children, compress at least one‑third the chest depth, about 5 cm."
        },
        {
            q: "What is the recommended chest compression rate for pediatric CPR?",
            options: ["80‑100/min", "100‑120/min", "120‑140/min", "60‑80/min"],
            correct: 1,
            explanation: "The compression rate for all ages is 100‑120 per minute."
        },
        {
            q: "Where should you check for a pulse in an infant (<1 year)?",
            options: ["Carotid", "Brachial", "Femoral", "Radial"],
            correct: 1,
            explanation: "The brachial artery is the recommended pulse check site in infants."
        },
        {
            q: "What is the initial shock energy for a child in VF/pVT?",
            options: ["2 J/kg", "4 J/kg", "6 J/kg", "10 J/kg"],
            correct: 0,
            explanation: "The first shock should be 2 J/kg. Subsequent shocks are 4 J/kg."
        },
        {
            q: "What is the dose of epinephrine in pediatric cardiac arrest?",
            options: ["0.01 mg/kg IV/IO", "0.1 mg/kg IV/IO", "0.5 mg", "1 mg"],
            correct: 0,
            explanation: "Epinephrine 0.01 mg/kg (0.1 mL/kg of 1:10,000) IV/IO every 3‑5 minutes."
        },
        {
            q: "If IV/IO access is not available, how can epinephrine be given?",
            options: ["IM", "SC", "Endotracheal (ETT)", "Intranasal"],
            correct: 2,
            explanation: "Epinephrine may be given via ETT at 0.1 mg/kg (1:1,000) diluted in 3‑5 mL saline."
        },
        {
            q: "What is the dose of amiodarone for refractory VF/pVT in a child?",
            options: ["1 mg/kg", "5 mg/kg", "10 mg/kg", "15 mg/kg"],
            correct: 1,
            explanation: "Amiodarone 5 mg/kg IV/IO bolus after the third shock; may repeat once."
        },
        {
            q: "How often should you check for ROSC during pediatric CPR?",
            options: ["After every shock", "Every 2 minutes", "Every 5 minutes", "Only if patient moves"],
            correct: 1,
            explanation: "Rhythm checks should occur every 2 minutes with minimal interruption."
        },
        {
            q: "What is the target SpO₂ during pediatric resuscitation?",
            options: ["88‑92%", "94‑98%", "97‑100%", "As high as possible"],
            correct: 1,
            explanation: "Target SpO₂ 94‑98% to avoid both hypoxia and hyperoxia."
        },
        {
            q: "What is a common cause of cardiac arrest in children?",
            options: ["Primary cardiac", "Hypoxia from respiratory failure", "Trauma", "Drug overdose"],
            correct: 1,
            explanation: "Pediatric cardiac arrest is often secondary to respiratory failure or shock."
        },
        {
            q: "What is the Broselow tape used for?",
            options: ["Measuring height", "Estimating weight and equipment sizes", "Determining drug allergies", "Measuring blood pressure"],
            correct: 1,
            explanation: "Broselow tape estimates weight based on length, guiding equipment sizes and drug doses."
        },
        {
            q: "In a child with suspected trauma, which airway maneuver should be used?",
            options: ["Head‑tilt/chin‑lift", "Jaw thrust", "Neck hyperextension", "OPA insertion"],
            correct: 1,
            explanation: "Jaw thrust without head tilt maintains cervical spine alignment."
        },
        {
            q: "What is the correct initial ventilation rate for a child with a pulse but not breathing?",
            options: ["1 breath every 2‑3 seconds (20‑30/min)", "1 breath every 5‑6 seconds (10‑12/min)", "1 breath every 6‑8 seconds", "2 breaths every 30 compressions"],
            correct: 0,
            explanation: "For a child with a pulse but inadequate breathing, give 1 breath every 2‑3 seconds."
        },
        {
            q: "How long should you take to check for a pulse in a child?",
            options: ["5‑10 seconds", "10‑15 seconds", "At least 10 seconds", "Up to 1 minute"],
            correct: 0,
            explanation: "Check for a pulse for at least 5 seconds but no more than 10 seconds."
        },
        {
            q: "What is the preferred two‑rescuer infant compression technique?",
            options: ["Two‑finger technique", "Two‑thumb encircling hands technique", "One hand", "Heel of one hand"],
            correct: 1,
            explanation: "The two‑thumb encircling hands technique is preferred for two‑rescuer infant CPR."
        },
        {
            q: "A 4‑year‑old child is in cardiac arrest with asystole. IV access is obtained. What is the first medication?",
            options: ["Amiodarone", "Atropine", "Epinephrine", "Sodium bicarbonate"],
            correct: 2,
            explanation: "Epinephrine is the first medication for asystole/PEA."
        },
        {
            q: "After the third shock for refractory VF, what medication should be given?",
            options: ["Epinephrine", "Amiodarone", "Lidocaine", "Magnesium"],
            correct: 1,
            explanation: "Amiodarone 5 mg/kg is given after the third shock for refractory VF/pVT."
        },
        {
            q: "What is the compression‑ventilation ratio for single‑rescuer CPR in a child?",
            options: ["30:2", "15:2", "20:2", "5:1"],
            correct: 0,
            explanation: "For single rescuer, the ratio is 30:2 for all ages."
        },
        {
            q: "What does EtCO₂ <10 mmHg during CPR indicate?",
            options: ["Adequate compressions", "Poor compressions", "ROSC", "Hyperventilation"],
            correct: 1,
            explanation: "EtCO₂ <10 mmHg suggests inadequate chest compressions."
        },
        {
            q: "What does a sudden rise in EtCO₂ >40 mmHg suggest?",
            options: ["ROSC", "Tension pneumothorax", "Hyperventilation", "Airway obstruction"],
            correct: 0,
            explanation: "A sudden sustained rise in EtCO₂ often indicates ROSC."
        },
        {
            q: "In a drowning victim, what is the priority before starting compressions?",
            options: ["Give 5 initial rescue breaths", "Start CPR immediately", "Apply AED", "Check pulse for 10 seconds"],
            correct: 0,
            explanation: "In drowning, hypoxia is the primary cause; give 5 initial breaths then start CPR."
        },
        {
            q: "What is the maximum single dose of amiodarone in a child?",
            options: ["150 mg", "300 mg", "5 mg/kg", "No maximum"],
            correct: 2,
            explanation: "Dose is 5 mg/kg; maximum single dose is typically 300 mg, but weight‑based dosing is used."
        },
        {
            q: "After an advanced airway is placed, what is the ventilation rate during CPR?",
            options: ["1 breath every 3 seconds", "1 breath every 6 seconds", "1 breath every 10 seconds", "Asynchronous"],
            correct: 1,
            explanation: "With an advanced airway, deliver 1 breath every 6 seconds (10/min) without pausing compressions."
        },
        {
            q: "What is a reversible cause (H) of pediatric cardiac arrest?",
            options: ["Hypoxia", "Hypertension", "Hyperglycaemia", "Hepatitis"],
            correct: 0,
            explanation: "Hypoxia is one of the 4 Hs (Hypoxia, Hypovolemia, Hypothermia, Hypo‑/Hyperkalemia)."
        },
        {
            q: "What is a reversible cause (T) of pediatric cardiac arrest?",
            options: ["Tension pneumothorax", "Tachycardia", "Tachypnoea", "Tonsillitis"],
            correct: 0,
            explanation: "Tension pneumothorax is one of the 4 Ts (Tension pneumothorax, Tamponade, Toxins, Thrombosis)."
        },
        {
            q: "How often should compressors be rotated during pediatric CPR?",
            options: ["Every 1 minute", "Every 2 minutes", "Every 5 minutes", "When tired"],
            correct: 1,
            explanation: "Rotate compressors every 2 minutes to maintain quality."
        },
        {
            q: "What is the maximum interruption time for chest compressions during pediatric CPR?",
            options: ["5 seconds", "10 seconds", "15 seconds", "20 seconds"],
            correct: 1,
            explanation: "Interruptions should be <10 seconds."
        },
        {
            q: "If pediatric pads are not available, what should you use?",
            options: ["Do not defibrillate", "Use adult pads", "Use infant pads", "Use manual mode only"],
            correct: 1,
            explanation: "If pediatric pads are unavailable, use adult pads ensuring they do not overlap."
        }
    ],
    flashcards: [
        { category: "CPR basics", question: "What is the compression‑ventilation ratio for single‑rescuer pediatric CPR?", answer: "30:2." },
        { category: "CPR basics", question: "What is the compression‑ventilation ratio for two‑rescuer pediatric CPR?", answer: "15:2." },
        { category: "CPR basics", question: "What is the recommended compression depth for an infant?", answer: "At least 1/3 chest depth (~4 cm)." },
        { category: "CPR basics", question: "What is the recommended compression depth for a child?", answer: "At least 1/3 chest depth (~5 cm)." },
        { category: "CPR basics", question: "What is the recommended compression rate for children?", answer: "100‑120/min." },
        { category: "Pulse check", question: "Where do you check pulse in an infant?", answer: "Brachial artery." },
        { category: "Pulse check", question: "Where do you check pulse in a child >1 year?", answer: "Carotid artery." },
        { category: "Airway", question: "What airway maneuver is used in a child with suspected spinal injury?", answer: "Jaw thrust." },
        { category: "Airway", question: "What is the preferred supraglottic airway in DCAS?", answer: "Laryngeal tube (LT)." },
        { category: "Ventilation", question: "What is the ventilation rate with an advanced airway during pediatric CPR?", answer: "1 breath every 6 seconds (10/min)." },
        { category: "Defibrillation", question: "What is the first shock energy for a child in VF/pVT?", answer: "2 J/kg." },
        { category: "Defibrillation", question: "What is the second shock energy for a child in VF/pVT?", answer: "4 J/kg." },
        { category: "Defibrillation", question: "What is the maximum shock energy for a child?", answer: "10 J/kg or adult dose, whichever is lower." },
        { category: "Defibrillation", question: "If pediatric pads are unavailable, what should you use?", answer: "Adult pads (ensure no overlap)." },
        { category: "Medications", question: "What is the dose of epinephrine in pediatric cardiac arrest?", answer: "0.01 mg/kg IV/IO (1:10,000)." },
        { category: "Medications", question: "What is the ETT dose of epinephrine in a child?", answer: "0.1 mg/kg (1:1,000)." },
        { category: "Medications", question: "How often is epinephrine repeated during pediatric arrest?", answer: "Every 3‑5 minutes." },
        { category: "Medications", question: "What is the dose of amiodarone for refractory VF/pVT in a child?", answer: "5 mg/kg IV/IO." },
        { category: "ROSC", question: "How often should you check for ROSC during CPR?", answer: "Every 2 minutes." },
        { category: "Monitoring", question: "What is the target SpO₂ after ROSC?", answer: "94‑98%." },
        { category: "Monitoring", question: "What does EtCO₂ >10 mmHg during CPR indicate?", answer: "Adequate chest compressions." },
        { category: "Reversible causes", question: "What are the 4 Hs of reversible causes?", answer: "Hypoxia, hypovolemia, hypothermia, hypo/hyperkalemia." },
        { category: "Reversible causes", question: "What are the 4 Ts of reversible causes?", answer: "Tension pneumothorax, tamponade, toxins, thrombosis." },
        { category: "Equipment", question: "What is the Broselow tape used for?", answer: "Estimating weight, drug doses, and equipment sizes." },
        { category: "Technique", question: "What is the preferred two‑rescuer infant compression technique?", answer: "Two‑thumb encircling hands." },
        { category: "Drowning", question: "How many initial rescue breaths should be given in drowning?", answer: "5 initial breaths before starting compressions." },
        { category: "Hypothermia", question: "How long should you check pulse in severe hypothermia?", answer: "Up to 60 seconds." },
        { category: "Hypothermia", question: "When should adrenaline be given in hypothermic arrest?", answer: "After core temperature >30°C." },
        { category: "Documentation", question: "What key times should be documented in pediatric arrest?", answer: "Time of arrest, CPR start, defibrillation, ROSC." },
        { category: "KPI", question: "What are two key performance indicators for pediatric cardiac arrest?", answer: "CPR within 1 minute; first shock within 2 minutes for shockable rhythms." }
    ],
    critical: [
        {
            id: "crit_4_4_1",
            scenario: "You are called to a 3‑year‑old child found unresponsive by parents. Bystander CPR is in progress. On arrival, the child is not breathing and has no pulse. What is your priority?",
            question: "What should you do first?",
            options: [
                { t: "Check for a pulse for 20 seconds", f: "Prolonged pulse check delays CPR." },
                { t: "Take over CPR, request ALS back‑up, and apply AED as soon as available", f: "Correct. Continue high‑quality CPR (15:2 if two rescuers) and get the AED." },
                { t: "Give two rescue breaths", f: "Breaths are part of the cycle, but compressions should not be delayed." },
                { t: "Start oxygen via NRB", f: "Oxygen is important, but CPR is the priority." }
            ],
            correct: 1,
            explanation: "Continue high‑quality CPR, rotate compressors every 2 minutes, and apply AED as soon as it arrives. Request ALS back‑up immediately.",
            kpi: "CPR continued without interruption; AED applied within 3 minutes."
        },
        {
            id: "crit_4_4_2",
            scenario: "A 6‑year‑old child is in cardiac arrest. The rhythm is VF. You deliver a shock at 2 J/kg and resume CPR. After 2 minutes, the rhythm remains VF. What is your next action?",
            question: "What should you do next?",
            options: [
                { t: "Give epinephrine 0.01 mg/kg IV", f: "Correct. Epinephrine is given after the second shock." },
                { t: "Deliver another shock at 4 J/kg", f: "The next shock is 4 J/kg, but medication should also be considered; after second shock, give epinephrine." },
                { t: "Give amiodarone 5 mg/kg", f: "Amiodarone is given after the third shock." },
                { t: "Check for a pulse", f: "Rhythm check is done every 2 minutes; you have already identified VF." }
            ],
            correct: 0,
            explanation: "After the second shock, epinephrine 0.01 mg/kg is indicated. If still in VF after the third shock, give amiodarone.",
            kpi: "Epinephrine given at correct time."
        },
        {
            id: "crit_4_4_3",
            scenario: "You are resuscitating a 4‑year‑old in cardiac arrest. An advanced airway is placed. What ventilation rate should be used during CPR?",
            question: "What is the correct ventilation rate?",
            options: [
                { t: "1 breath every 3 seconds (20/min)", f: "Too fast; may cause gastric inflation." },
                { t: "1 breath every 6 seconds (10/min)", f: "Correct. This rate avoids hyperventilation." },
                { t: "2 breaths every 30 compressions", f: "That ratio is for CPR without an advanced airway." },
                { t: "Continuous ventilation", f: "Ventilations are asynchronous but at a rate of 10/min." }
            ],
            correct: 1,
            explanation: "With an advanced airway, deliver 1 breath every 6 seconds (10 breaths/min) without pausing compressions.",
            kpi: "Ventilation rate maintained at 10/min."
        },
        {
            id: "crit_4_4_4",
            scenario: "A 2‑year‑old child was pulled from a swimming pool. Bystanders started CPR. On arrival, you confirm cardiac arrest. What is a critical consideration in this drowning victim?",
            question: "What additional step is important in drowning?",
            options: [
                { t: "Give 5 initial rescue breaths before starting compressions", f: "Correct. In drowning, give 5 initial breaths then start CPR." },
                { t: "Start with compressions first", f: "Breaths are prioritized in hypoxic arrest." },
                { t: "Apply AED immediately", f: "AED is important, but breaths come first." },
                { t: "Check blood glucose", f: "Not the priority." }
            ],
            correct: 0,
            explanation: "In drowning, the arrest is due to hypoxia. Give 5 initial rescue breaths before starting chest compressions. Then continue CPR with 15:2 ratio.",
            kpi: "Initial breaths given within 1 minute."
        },
        {
            id: "crit_4_4_5",
            scenario: "A 5‑year‑old child in cardiac arrest has received 2 minutes of CPR and one shock for VF. IV access is obtained. The rhythm remains VF. What medication should be given?",
            question: "What is the appropriate medication and dose?",
            options: [
                { t: "Epinephrine 0.01 mg/kg IV", f: "Correct. Epinephrine is given after the second shock." },
                { t: "Amiodarone 5 mg/kg IV", f: "Amiodarone is given after the third shock." },
                { t: "Atropine 0.02 mg/kg", f: "Not indicated in cardiac arrest." },
                { t: "Sodium bicarbonate", f: "Not routinely indicated." }
            ],
            correct: 0,
            explanation: "After the second shock, epinephrine 0.01 mg/kg IV/IO is indicated. Amiodarone is given after the third shock.",
            kpi: "Epinephrine given at correct time."
        }
    ]
};