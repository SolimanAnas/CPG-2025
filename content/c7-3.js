/* ========== Chapter 7.3 – Crush Injuries ========== */
window.CPG_DATA = {
    id: "c7-3",
    title: "Crush Injuries",
    shortTitle: "7.3 Crush Injuries",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">??? Crush Injuries</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Recognize and manage systemic complications of crush injuries early.</li>
                <li>Prevent or minimize the risk of crush syndrome, hyperkalemia, and acute kidney injury.</li>
                <li>Relieve compressive forces safely and in a controlled manner.</li>
                <li>Provide adequate pain relief and support oxygenation and perfusion.</li>
                <li>Coordinate safe extrication, fluid resuscitation, and timely hospital transport.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Patient entrapped or compressed by an object for >30 minutes.</li>
                <li>Clinical evidence of extremity or torso crush injury.</li>
                <li>Suspect or confirmed muscle injury with systemic symptoms.</li>
                <li>Scene or dispatch information suggesting prolonged entrapment or compression.</li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>Minor soft tissue contusions without systemic risk.</li>
                <li>Isolated fractures without prolonged entrapment.</li>
                <li>Patients with fatal injuries not compatible with life.</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Initial Impression:</strong> Scene safety, mechanism of injury, time under compression; number of patients, need for extrication or heavy rescue.</li>
                <li><strong>Airway & Breathing:</strong> Assess for trauma-related airway compromise, hypoxia, or impaired ventilation. Administer high-flow oxygen if SpO2 <94% or chest trauma present.</li>
                <li><strong>Circulation & Perfusion:</strong> Check for tachycardia, hypotension, or signs of shock. Inspect compressed limb for swelling, pallor, cyanosis, coolness. Capillary refill, peripheral pulses, and distal sensation.</li>
                <li><strong>Crush Syndrome Warning Signs:</strong> Prolonged entrapment (>30 minutes); dark or decreased urine output (if catheter or history known); swelling and firmness of limb; muscle weakness, paresthesia, or paralysis.</li>
                <li><strong>Determine Triage Category:</strong> Red priority for entrapment >30 mins, systemic symptoms, hypotension, altered mental status; Yellow priority for shorter duration entrapment, isolated limb swelling, stable vitals.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Consider ALS back-up:</strong> Routinely for prolonged entrapment (>30 min), suspected crush syndrome, cardiac dysrhythmias, or need for ALS medications (e.g., pain relief).</li>
                <li><strong>Pain Management:</strong> Assess and manage pain as per Pain Management CPG. Severe pain may require opioids.</li>
                <li><strong>Oxygen Therapy:</strong> Administer high-flow oxygen (target SpO2 =94%). Continue throughout extrication and transport.</li>
                <li><strong>IV Access & Fluid Resuscitation:</strong> Establish large-bore IV access before extrication if entrapment >30 mins. Administer initial bolus of Normal Saline, repeat as needed to maintain perfusion:
                    <ul>
                        <li>Adults: 500 mL bolus.</li>
                        <li>Pediatrics: 20 mL/kg bolus.</li>
                    </ul>
                    Anticipate hyperkalemia, acidosis, and rhabdomyolysis once compression is released.
                </li>
                <li><strong>Tourniquet Application:</strong> If blood flow to extremity is impaired and extrication will release toxins into circulation, consider tourniquet placement prior to release.</li>
                <li><strong>Patient Reassessment:</strong> Frequently reassess as per Universal Care CPG. Specific points:
                    <ul>
                        <li>ECG Monitoring: Watch for peaked T-waves, wide QRS (hyperkalemia).</li>
                        <li>Compartment Syndrome: Monitor for deterioration or signs of compartment syndrome.</li>
                    </ul>
                </li>
                <li><strong>Transport:</strong> Notify receiving facility early if prolonged entrapment or suspected crush syndrome. Transport urgently with continued fluids, oxygen, and monitoring.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Do not delay IV fluids until after release — pre-hydration improves outcomes.</li>
                <li>Use Broselow tape for pediatric patients to guide equipment and dosing.</li>
                <li>Avoid overuse of opioids that may mask declining LOC or respiratory effort.</li>
                <li>Apply tourniquet judiciously and only if limb injury is severe and extrication imminent.</li>
                <li>Be prepared for sudden deterioration post-release.</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li>Crush syndrome can lead to fatal arrhythmias, acute kidney injury, or shock; prevention starts in the field.</li>
                <li>Fluid before release is one of the most critical prehospital interventions.</li>
                <li>Be alert for signs of hyperkalemia, especially in crush injuries involving large muscle groups or prolonged entrapment. Clinical signs may include:
                    <ul>
                        <li>Muscle weakness or flaccid paralysis.</li>
                        <li>Nausea, vomiting, or paresthesia.</li>
                        <li>Bradycardia, hypotension, or irregular pulse.</li>
                        <li>ECG may show peaked T-waves or widened QRS — but may appear normal early.</li>
                    </ul>
                </li>
                <li>Treat based on clinical suspicion, not ECG alone. Early fluid resuscitation is critical.</li>
                <li>Delays in ALS arrival must be mitigated by early BLS actions.</li>
                <li>Tourniquets should not be used for routine crush injuries unless release is imminent and limb is non-viable.</li>
                <li>Electrical crush injuries (e.g., pinned under live machinery) require additional precautions.</li>
                <li>When in doubt, contact Tele-EMS and prepare early hospital notification.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Mechanism of injury and entrapment duration.</li>
                <li>Affected area, limb deformity, swelling, neurovascular status.</li>
                <li>Vital signs, perfusion, ECG findings if applicable.</li>
                <li>Treatment: oxygen, fluids, pain relief, tourniquet application (time).</li>
                <li>Allergies, medications given.</li>
                <li>Background medical history (especially renal issues).</li>
                <li>Scene challenges, time of release, handover information.</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Document entrapment duration in ePCR.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What is the most critical prehospital intervention for a patient with prolonged entrapment?",
            options: ["Tourniquet application", "Fluid resuscitation before release", "Pain management", "Immediate extrication"],
            correct: 1,
            explanation: "Pre-hydration with IV fluids before release helps prevent acute kidney injury and mitigates the effects of crush syndrome."
        },
        {
            q: "What is the initial fluid bolus for an adult with crush injury and entrapment >30 minutes?",
            options: ["250 mL", "500 mL", "1000 mL", "2000 mL"],
            correct: 1,
            explanation: "Adults should receive a 500 mL bolus of normal saline; repeat as needed to maintain perfusion."
        },
        {
            q: "What is the pediatric fluid bolus for a child with crush injury?",
            options: ["5-10 mL/kg", "10-15 mL/kg", "20 mL/kg", "40 mL/kg"],
            correct: 2,
            explanation: "The initial bolus is 20 mL/kg crystalloid; may repeat based on response."
        },
        {
            q: "Which of the following ECG changes is associated with hyperkalemia from crush syndrome?",
            options: ["Peaked T waves", "Widened QRS", "Loss of P waves", "All of the above"],
            correct: 3,
            explanation: "Hyperkalemia causes peaked T waves, widened QRS, and eventually loss of P waves."
        },
        {
            q: "What is the primary goal of fluid resuscitation before extrication?",
            options: ["Prevent hypotension", "Maintain urine output", "Prevent acute kidney injury", "All of the above"],
            correct: 3,
            explanation: "Pre-hydration helps maintain renal perfusion and reduces the risk of acute kidney injury from myoglobin."
        },
        {
            q: "A patient has been trapped under a collapsed wall for 45 minutes. What is your priority?",
            options: ["Immediately extricate", "Start IV fluids before release", "Administer pain relief", "Apply tourniquet"],
            correct: 1,
            explanation: "Fluids should be started before release to prevent post-release hypotension and acute kidney injury."
        },
        {
            q: "What is the recommended timing for IV fluid administration in crush injuries?",
            options: ["After extrication", "Before extrication if possible", "Only if hypotensive", "Only in hospital"],
            correct: 1,
            explanation: "Fluids should be initiated before extrication whenever feasible to mitigate reperfusion injury and renal damage."
        },
        {
            q: "Which of the following is a sign of crush syndrome?",
            options: ["Dark urine", "Muscle weakness", "Hypotension", "All of the above"],
            correct: 3,
            explanation: "Crush syndrome presents with myoglobinuria, muscle weakness, and hypotension from third-spacing and acidosis."
        },
        {
            q: "What is the target SpO2 for a patient with crush injury?",
            options: ["=90%", "=94%", "=88%", "100%"],
            correct: 1,
            explanation: "Maintain SpO2 =94% to prevent hypoxia."
        },
        {
            q: "Why should you consider a tourniquet in a crush injury?",
            options: ["To control arterial bleeding", "To prevent release of toxins into circulation", "To reduce pain", "To prevent compartment syndrome"],
            correct: 1,
            explanation: "A tourniquet may be placed to prevent the sudden release of potassium and myoglobin into the systemic circulation upon extrication."
        },
        {
            q: "What is the maximum total fluid bolus for an adult crush injury patient?",
            options: ["500 mL", "1000 mL", "2000 mL", "No maximum"],
            correct: 2,
            explanation: "Up to 2000 mL crystalloid may be given, with reassessment after each bolus."
        },
        {
            q: "A patient with a crushed lower extremity develops hypotension after release. What is the most likely cause?",
            options: ["Hemorrhage", "Reperfusion injury and third-spacing", "Cardiac contusion", "Pneumothorax"],
            correct: 1,
            explanation: "After release, vasodilation and fluid shifts into damaged tissues can cause hypotension."
        },
        {
            q: "What electrolyte abnormality is most concerning in crush syndrome?",
            options: ["Hyponatremia", "Hyperkalemia", "Hypocalcemia", "Hypomagnesemia"],
            correct: 1,
            explanation: "Hyperkalemia from muscle cell breakdown can cause life-threatening arrhythmias."
        },
        {
            q: "How soon after extrication should ECG monitoring be initiated?",
            options: ["Immediately", "After 10 minutes", "Only if symptomatic", "Not required"],
            correct: 0,
            explanation: "Continuous ECG monitoring should begin as soon as possible to detect hyperkalemia-induced arrhythmias."
        },
        {
            q: "What is the role of sodium bicarbonate in crush syndrome?",
            options: ["Given prehospital", "Given in hospital", "Not indicated", "Only for pediatric patients"],
            correct: 1,
            explanation: "Sodium bicarbonate is a hospital intervention to alkalinize urine; not part of prehospital care in DCAS."
        },
        {
            q: "A patient with crush injury has a blood pressure of 80/50 after extrication. What should you do?",
            options: ["Give another fluid bolus", "Start dopamine", "Administer adrenaline", "Transport only"],
            correct: 0,
            explanation: "Repeat fluid boluses up to 2000 mL to maintain perfusion."
        },
        {
            q: "What is the dose of morphine for an adult with severe pain from crush injury?",
            options: ["2.5 mg IV increments", "10 mg IV push", "5 mg IM", "0.1 mg/kg"],
            correct: 0,
            explanation: "Morphine should be titrated in 2.5 mg IV increments every 5-10 minutes."
        },
        {
            q: "Why should you avoid giving excessive fluids in a crush injury patient with suspected chest trauma?",
            options: ["May cause pulmonary edema", "May worsen bleeding", "May cause hyperkalemia", "No reason"],
            correct: 0,
            explanation: "Fluid overload can lead to pulmonary edema, especially if chest trauma or underlying cardiac disease is present."
        },
        {
            q: "What is the maximum total fluid bolus for a pediatric crush injury patient?",
            options: ["20 mL/kg", "40 mL/kg", "60 mL/kg", "80 mL/kg"],
            correct: 2,
            explanation: "Maximum 60 mL/kg total crystalloid in the prehospital setting (three 20 mL/kg boluses)."
        },
        {
            q: "Which of the following is a red flag requiring ALS back-up?",
            options: ["Entrapment >30 minutes", "Hypotension", "Cardiac dysrhythmia", "All of the above"],
            correct: 3,
            explanation: "All are indications for ALS support."
        },
        {
            q: "A patient with crush injury has an ECG showing peaked T waves. What is the priority?",
            options: ["Administer calcium", "Give insulin and dextrose", "Monitor and transport", "Continue fluids"],
            correct: 2,
            explanation: "Peaked T waves indicate hyperkalemia; early transport for hospital management is critical."
        },
        {
            q: "What is the mechanism of acute kidney injury in crush syndrome?",
            options: ["Hypotension", "Myoglobin cast formation in tubules", "Hyperkalemia", "Hypovolemia"],
            correct: 1,
            explanation: "Myoglobin released from damaged muscle precipitates in renal tubules, causing acute tubular necrosis."
        },
        {
            q: "When should a tourniquet be applied in a crush injury?",
            options: ["For all crush injuries", "Only if the limb is non-viable and release is imminent", "Never", "Only for arterial bleeding"],
            correct: 1,
            explanation: "A tourniquet may be used to prevent systemic release of toxins if the limb is severely damaged and extrication is imminent."
        },
        {
            q: "What is the key performance indicator for crush injuries?",
            options: ["Administer pain relief", "Document entrapment duration", "Start IV fluids", "Perform 12-lead ECG"],
            correct: 1,
            explanation: "Documenting the duration of entrapment is a key KPI for crush injury management."
        },
        {
            q: "A patient with a crushed arm is trapped. Extrication will take another 20 minutes. What should you do?",
            options: ["Wait to start IV until after extrication", "Start IV fluids now", "Apply tourniquet", "Give oral fluids"],
            correct: 1,
            explanation: "Start IV fluids before extrication to pre-hydrate and reduce renal injury."
        },
        {
            q: "What is the most common cause of death in crush syndrome?",
            options: ["Hyperkalemia-induced arrhythmia", "Acute kidney injury", "Sepsis", "Hypovolemic shock"],
            correct: 0,
            explanation: "Sudden release of potassium after extrication can cause fatal arrhythmias."
        },
        {
            q: "Why should you monitor urine output in a crush injury patient?",
            options: ["To assess hydration", "To detect myoglobinuria", "To guide fluid therapy", "All of the above"],
            correct: 3,
            explanation: "Urine output and colour are important indicators of renal perfusion and myoglobinuria."
        },
        {
            q: "What is the dose of 0.9% normal saline for an adult crush injury patient?",
            options: ["500 mL bolus", "1 L bolus", "2 L bolus", "No fluids"],
            correct: 0,
            explanation: "Initial bolus is 500 mL, repeated as needed."
        },
        {
            q: "A patient with crush injury has a respiratory rate of 28 and is complaining of chest pain after extrication. What should you suspect?",
            options: ["Pneumothorax from rib fracture", "Pulmonary edema", "Myocardial infarction", "Anxiety"],
            correct: 0,
            explanation: "Chest pain and tachypnea after crush injury may indicate pneumothorax or hemothorax from associated trauma."
        },
        {
            q: "What is the role of calcium in crush syndrome?",
            options: ["Treats hyperkalemia", "Given in hospital if ECG changes", "Not given prehospital", "All of the above"],
            correct: 3,
            explanation: "Calcium is a hospital intervention for hyperkalemia with ECG changes; not routinely given prehospital."
        }
    ],
    flashcards: [
        { category: "Definition", question: "What is crush injury?", answer: "Compression of a body part causing muscle damage, with potential for systemic complications (crush syndrome)." },
        { category: "Crush syndrome", question: "What is crush syndrome?", answer: "Systemic effects of crush injury, including hyperkalemia, metabolic acidosis, acute kidney injury, and hypovolemic shock." },
        { category: "Critical time", question: "What duration of entrapment is considered high risk for crush syndrome?", answer: ">30 minutes." },
        { category: "Hyperkalemia signs", question: "What are ECG signs of hyperkalemia?", answer: "Peaked T waves, widened QRS, loss of P waves, sine wave." },
        { category: "Fluid resuscitation", question: "What is the initial fluid bolus for an adult with crush injury?", answer: "500 mL normal saline; repeat as needed." },
        { category: "Pediatric fluid bolus", question: "What is the initial fluid bolus for a child with crush injury?", answer: "20 mL/kg crystalloid." },
        { category: "Pre-hydration", question: "When should IV fluids be started in a crush injury?", answer: "Before extrication if possible, to prevent post-release complications." },
        { category: "Tourniquet indication", question: "When is a tourniquet used in crush injury?", answer: "If limb is severely damaged and extrication imminent, to prevent systemic toxin release." },
        { category: "ECG monitoring", question: "What ECG monitoring is required?", answer: "Continuous ECG to detect hyperkalemia (peaked T waves, widened QRS)." },
        { category: "Pain management", question: "What analgesic is used for severe pain in crush injury?", answer: "Morphine IV titrated (2.5 mg increments)." },
        { category: "ALS back-up", question: "When should ALS be requested for crush injury?", answer: "Entrapment >30 min, suspected crush syndrome, dysrhythmias, need for ALS medications." },
        { category: "Acute kidney injury", question: "What causes AKI in crush syndrome?", answer: "Myoglobin release and tubular precipitation, compounded by hypovolemia." },
        { category: "Hyperkalemia treatment", question: "What treatments for hyperkalemia are given in hospital?", answer: "Calcium, insulin/glucose, sodium bicarbonate, kayexalate, dialysis." },
        { category: "Myoglobinuria", question: "What does dark urine indicate in crush injury?", answer: "Myoglobinuria from muscle breakdown; a sign of potential renal injury." },
        { category: "Reperfusion injury", question: "What is reperfusion injury?", answer: "Sudden release of potassium, myoglobin, and inflammatory mediators after restoration of blood flow." },
        { category: "Documentation", question: "What must be documented in crush injury?", answer: "Entrapment duration, fluid administered, pain management, ECG findings." },
        { category: "KPI", question: "What is the key performance indicator for crush injuries?", answer: "Document entrapment duration in ePCR." },
        category: "Pediatric considerations", question: "Why are children at risk for crush syndrome?", answer: "Greater muscle mass relative to body weight; fluid resuscitation must be weight-based (Broselow)." },
        { category: "Elderly considerations", question: "Why are elderly at higher risk?", answer: "Pre-existing renal impairment, cardiovascular disease, and reduced physiological reserve." },
        { category: "Transport decision", question: "Should all crush injury patients be transported?", answer: "Yes, especially those with entrapment >30 minutes, signs of crush syndrome, or significant mechanism." }
    ],
    critical: [
        {
            id: "crit_7_3_1",
            scenario: "A 40-year-old male is trapped under a collapsed wall for 45 minutes. He is alert with a crushed lower leg. You have IV access. What should you do before extrication?",
            question: "What is the priority intervention?",
            options: [
                { t: "Administer morphine for pain", f: "Pain relief is important, but fluids are more urgent." },
                { t: "Start IV fluids (500 mL normal saline)", f: "Correct. Pre-hydration is critical to prevent acute kidney injury." },
                { t: "Apply a tourniquet above the crush site", f: "Tourniquet only if limb is non-viable and release imminent." },
                { t: "Extricate immediately", f: "Fluids should be given before release." }
            ],
            correct: 1,
            explanation: "Pre-hydration with IV fluids reduces the risk of acute kidney injury from myoglobin release.",
            kpi: "IV fluids initiated before extrication."
        },
        {
            id: "crit_7_3_2",
            scenario: "A 25-year-old male is extricated after being pinned under a vehicle for 2 hours. Immediately after release, he becomes hypotensive (BP 80/50) and develops peaked T waves on ECG. What is the most likely cause?",
            question: "What is the likely diagnosis and next step?",
            options: [
                { t: "Hemorrhage; give fluids", f: "Fluids are needed, but ECG changes indicate hyperkalemia." },
                { t: "Hyperkalemia from crush syndrome; give calcium (hospital)", f: "Correct. ECG changes suggest hyperkalemia; continued fluids and rapid transport." },
                { t: "Cardiac contusion; give fluids", f: "No evidence." },
                { t: "Pneumothorax; decompress", f: "No respiratory symptoms." }
            ],
            correct: 1,
            explanation: "Peaked T waves after extrication indicate hyperkalemia; fluids and urgent transport are critical; calcium is a hospital intervention.",
            kpi: "ECG documented and transport expedited."
        },
        {
            id: "crit_7_3_3",
            scenario: "A 55-year-old female has a crush injury to both legs from a forklift accident. She is in severe pain (9/10) and has a BP of 100/60. What is the appropriate pain management?",
            question: "What should you administer?",
            options: [
                { t: "Paracetamol 1 g PO", f: "Inadequate for severe pain." },
                { t: "Morphine 2.5 mg IV titrated", f: "Correct. Severe pain requires IV opioids." },
                { t: "Diclofenac 75 mg IM", f: "NSAIDs may worsen renal injury." },
                { t: "Methoxyflurane only", f: "May be used as adjunct, but morphine is indicated." }
            ],
            correct: 1,
            explanation: "Severe pain from crush injury requires IV morphine; titrate to effect and monitor for respiratory depression.",
            kpi: "Analgesia administered."
        },
        {
            id: "crit_7_3_4",
            scenario: "A 10-year-old child is trapped under a fallen tree for 20 minutes. The leg is swollen but pulses are present. What is the appropriate management?",
            question: "What should you do?",
            options: [
                { t: "Start IV fluids 20 mL/kg", f: "Correct. Even with shorter entrapment, fluids are indicated." },
                { t: "Apply a tourniquet", f: "Not indicated; pulses present." },
                { t: "Extricate without fluids", f: "Fluids should be started before or during extrication." },
                { t: "Give oral fluids", f: "Not appropriate; IV is preferred." }
            ],
            correct: 0,
            explanation: "Even with entrapment <30 minutes, significant crush injury warrants fluid resuscitation, especially in children.",
            kpi: "IV fluids initiated."
        },
        {
            id: "crit_7_3_5",
            scenario: "A 35-year-old male is extricated after being crushed by a concrete slab for 90 minutes. He is alert but complaining of numbness in the affected leg. His BP is 90/60, HR 110. ECG shows peaked T waves. What is the priority?",
            question: "What should you do next?",
            options: [
                { t: "Give another fluid bolus", f: "Fluids are important, but ECG changes require rapid transport." },
                { t: "Administer calcium gluconate (hospital intervention)", f: "Not available prehospital; transport urgently." },
                { t: "Rapid transport with ongoing fluids", f: "Correct. Hyperkalemia requires hospital treatment." },
                { t: "Apply a tourniquet", f: "Too late; already extricated." }
            ],
            correct: 2,
            explanation: "ECG changes indicate hyperkalemia; continue fluid resuscitation and transport urgently for definitive management.",
            kpi: "Patient transported with ECG monitoring and fluids ongoing."
        }
    ]
};