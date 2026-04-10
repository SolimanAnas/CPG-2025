/* ========== Chapter 7.4 – Limb Injuries ========== */
window.CPG_DATA = {
    id: "c7-4",
    title: "Limb Injuries",
    shortTitle: "7.4 Limb Injuries",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">?? Limb Injuries</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Control external hemorrhage and prevent hemorrhagic shock.</li>
                <li>Stabilize fractures and dislocations to minimize further injury and pain.</li>
                <li>Manage pain effectively while maintaining patient safety.</li>
                <li>Assess and maintain neurovascular function in affected limbs.</li>
                <li>Facilitate timely transport to appropriate facilities for definitive care.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Patients with suspected or confirmed fractures, dislocations, or soft tissue injuries to extremities.</li>
                <li>Traumatic amputations or open wounds with potential for significant bleeding.</li>
                <li>Limb injuries from crush mechanisms or high-energy trauma.</li>
                <li>Neurovascular compromise or compartment syndrome suspicion.</li>
                <li>Scene information indicating mechanism likely to cause limb injury.</li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>Limbs which are entrapped (see Crush Injury CPG).</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Initial Impression:</strong> Scene safety, mechanism of injury, energy involved; number of patients, need for additional resources.</li>
                <li><strong>Airway & Breathing:</strong> Ensure airway patency, assess for associated chest trauma; administer oxygen if SpO2 <94% or respiratory distress.</li>
                <li><strong>Circulation & Perfusion:</strong> Check for external bleeding, signs of shock; evaluate pulses, capillary refill, skin color/temperature in affected limb.</li>
                <li><strong>Neurovascular Status (CMS):</strong> Assess sensation, motor function, distal pulses; check for deformity, swelling, crepitus, open wounds.</li>
                <li><strong>Compartment Syndrome Signs:</strong> Pain on passive stretch, pallor, pulselessness, paresthesia, paralysis (late signs).</li>
                <li><strong>Determine Triage Category:</strong> Red priority for life-threatening hemorrhage, hypotensive shock, neurovascular compromise.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Primary Survey:</strong> Use C-ABC algorithm (Catastrophic Hemorrhage, Airway, Breathing, Circulation). Focus on catastrophic bleeding, airway obstruction, tension pneumothorax, or signs of shock.</li>
                <li><strong>Hemorrhage Control:</strong> Apply direct pressure, tourniquet if uncontrolled bleeding; use hemostatic agents for junctional wounds.</li>
                <li><strong>Secondary Survey:</strong> Expose affected limb, assess CMS (Color, Movement, Sensation).</li>
                <li><strong>Pain Management:</strong> Assess and administer analgesia per Pain Management CPG; consider ALS back-up for severe pain.</li>
                <li><strong>IV Access & Fluid Resuscitation:</strong> Manage shock as per General Trauma Management CPG.</li>
                <li><strong>Splinting and Immobilization:</strong> Splint fractures/dislocations in anatomic position; realign if neurovascular compromise, with analgesia.</li>
                <li><strong>Limb Amputations:</strong> Stump care: cover with moist sterile dressing, apply moderate compression; apply tourniquet if bleeding not controlled. Amputated part: wrap in moist sterile gauze, place in plastic bag, then surround with ice water mixture (not direct ice).</li>
                <li><strong>Impaled Objects:</strong> Do not remove; secure in place with bulky dressing.</li>
                <li><strong>Femur Fractures:</strong> Traction splints for isolated mid-shaft femur fractures; may be used on distal third with careful assessment; delay transfer only to apply splint if no other time-critical injuries.</li>
                <li><strong>Dislocations:</strong> Anterior shoulder and patella dislocations may be reduced (if no fracture suspected); use appropriate technique; other dislocations splinted in place. Pain management for reduction: methoxyflurane as minimum.</li>
                <li><strong>Patient Reassessment:</strong> Reassess limb CMS immediately after splinting and every 15 minutes.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Ensure scene safety before approaching patient.</li>
                <li>Avoid manipulation without analgesia if possible.</li>
                <li>Reassess neurovascular status after splinting.</li>
                <li>Use caution with tourniquets; document time applied.</li>
                <li>Prevent hypothermia by covering patient.</li>
                <li>Be prepared for deterioration during transport.</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li>The use of a tourniquet for uncontrolled limb bleeding is exceptionally important. Ensure tourniquets are applied when indicated.</li>
                <li>Manipulation of fractured limbs to apply a splint will likely increase pain. Ensure adequate analgesia is administered prior to splinting.</li>
                <li>Traction splint for mid-shaft femur fracture limits blood loss and pain; it is appropriate to delay transfer to apply it, providing there are no other signs/symptoms that require immediate transfer.</li>
                <li>Reduction of anterior shoulder dislocation: position patient supine, flex elbow to 90°, apply gentle longitudinal traction, then slowly externally rotate forearm until reduction occurs.</li>
                <li>Patella dislocation reduction: extend knee while applying medial pressure to lateral edge of patella.</li>
                <li>Amputated part viability: cooling slows chemical processes and extends viability from 4 hours to up to 18 hours.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Age, gender, weight.</li>
                <li>Limb injury description, mechanism.</li>
                <li>Affected limb, deformity, neurovascular status (CMS).</li>
                <li>Vitals, pain score, bleeding assessment.</li>
                <li>Hemorrhage control, splinting, analgesia.</li>
                <li>Time of tourniquet application (if used).</li>
                <li>Amputated part management (if applicable).</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Apply a traction splint for mid-shaft fracture femurs, when no time-critical injuries are present.</li>
                <li>Document initial and post-treatment pain score.</li>
                <li>Reassess CMS after splinting.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What is the first step in managing a patient with a traumatic limb injury?",
            options: ["Splint the limb", "Control catastrophic hemorrhage", "Obtain X-ray", "Administer pain medication"],
            correct: 1,
            explanation: "The C-ABC approach prioritizes Catastrophic Hemorrhage control before other interventions."
        },
        {
            q: "What is the preferred method for controlling uncontrolled arterial bleeding from a limb?",
            options: ["Direct pressure", "Tourniquet", "Hemostatic dressing", "Elevation"],
            correct: 1,
            explanation: "A tourniquet is indicated for uncontrolled arterial limb bleeding."
        },
        {
            q: "A patient with a mid-shaft femur fracture should have which intervention?",
            options: ["Pelvic binder", "Traction splint", "Long leg splint", "KED"],
            correct: 1,
            explanation: "Traction splints are routinely applied to isolated mid-shaft femur fractures to reduce pain and blood loss."
        },
        {
            q: "What is the dose of morphine for an adult with severe pain from a limb injury?",
            options: ["2.5 mg IV increments", "10 mg IV push", "5 mg IM", "0.1 mg/kg"],
            correct: 0,
            explanation: "Morphine is titrated in 2.5 mg IV increments every 5-10 minutes."
        },
        {
            q: "How should an amputated part be preserved for transport?",
            options: ["Place directly on ice", "Wrap in dry gauze and place on ice", "Wrap in moist sterile gauze, place in plastic bag, then surround with ice water mixture", "Discard"],
            correct: 2,
            explanation: "The amputated part should be wrapped in moist sterile gauze, placed in a plastic bag, then surrounded by ice water (not direct ice) to preserve viability."
        },
        {
            q: "What is the target SpO2 for a patient with a limb injury?",
            options: ["=90%", "=94%", "=88%", "100%"],
            correct: 1,
            explanation: "Maintain SpO2 =94% to prevent hypoxia."
        },
        {
            q: "Which of the following is a sign of compartment syndrome?",
            options: ["Pain on passive stretch", "Pulselessness", "Paresthesia", "All of the above"],
            correct: 3,
            explanation: "Compartment syndrome presents with the 5 P's: pain (especially on passive stretch), pallor, pulselessness, paresthesia, paralysis."
        },
        {
            q: "What is the preferred position for reducing an anterior shoulder dislocation?",
            options: ["Sitting upright with arm adducted", "Supine with elbow flexed 90°, apply gentle traction and external rotation", "Prone with arm hanging", "Standing with arm raised"],
            correct: 1,
            explanation: "The technique involves supine position, elbow flexion, gentle longitudinal traction, then slow external rotation of the forearm."
        },
        {
            q: "A patient with a fractured femur has a BP of 85/50. What is the likely cause and next step?",
            options: ["Hemorrhage from fracture; give fluid bolus", "Cardiogenic shock; give dopamine", "Tension pneumothorax; decompress", "Neurogenic shock; give fluids"],
            correct: 0,
            explanation: "Femur fractures can lose up to 1-2 L of blood; fluid resuscitation is indicated."
        },
        {
            q: "What is the maximum total fluid bolus for an adult with hemorrhagic shock from a limb injury?",
            options: ["500 mL", "1000 mL", "2000 mL", "No maximum"],
            correct: 2,
            explanation: "Up to 2000 mL crystalloid may be given, with reassessment after each bolus."
        },
        {
            q: "How should an impaled object in a limb be managed?",
            options: ["Remove immediately", "Cut the object flush with the skin", "Secure in place with bulky dressing", "Apply traction to remove"],
            correct: 2,
            explanation: "Impaled objects should not be removed; they should be secured in place with a bulky dressing."
        },
        {
            q: "What is the pediatric fluid bolus for a child with a limb injury and signs of shock?",
            options: ["10 mL/kg", "20 mL/kg", "40 mL/kg", "5 mL/kg"],
            correct: 1,
            explanation: "Initial bolus is 20 mL/kg crystalloid; may repeat up to 60 mL/kg total."
        },
        {
            q: "Which of the following is a red flag requiring ALS back-up in a limb injury?",
            options: ["Isolated finger fracture", "Severe pain (7-10/10)", "Minor laceration", "Contusion"],
            correct: 1,
            explanation: "Severe pain may require advanced analgesia and is an indication for ALS back-up."
        },
        {
            q: "What is the technique for reducing a lateral patella dislocation?",
            options: ["Flex knee, apply lateral pressure", "Extend knee while applying medial pressure", "Straight leg raise", "Pull patella upward"],
            correct: 1,
            explanation: "Gently extend the knee while applying medial pressure to the lateral edge of the patella."
        },
        {
            q: "When should a tourniquet be applied to a limb injury?",
            options: ["For all open fractures", "For uncontrolled arterial bleeding not controlled by direct pressure", "For venous bleeding", "For all amputations"],
            correct: 1,
            explanation: "A tourniquet is indicated when direct pressure fails to control severe arterial bleeding."
        },
        {
            q: "What is the dose of methoxyflurane (Penthrox) for procedural pain in a limb injury?",
            options: ["1.5 mL", "3 mL", "6 mL", "9 mL"],
            correct: 1,
            explanation: "Methoxyflurane dose is 3 mL inhalation; may repeat once (max 6 mL in 24 hours)."
        },
        {
            q: "A patient with a femur fracture is in severe pain. What is the appropriate analgesic?",
            options: ["Paracetamol 1 g PO", "Morphine 2.5 mg IV", "Diclofenac 75 mg IM", "Ibuprofen 400 mg PO"],
            correct: 1,
            explanation: "Severe pain requires IV opioids; morphine is indicated."
        },
        {
            q: "How often should neurovascular status (CMS) be reassessed after splinting?",
            options: ["Immediately after splinting and every 15 minutes", "Only before transport", "Every hour", "Only if patient complains"],
            correct: 0,
            explanation: "CMS should be reassessed immediately after splinting and every 15 minutes."
        },
        {
            q: "What is the key performance indicator for limb injuries?",
            options: ["Administer antibiotics", "Apply traction splint for mid-shaft femur fracture (when no time-critical injuries)", "Perform X-ray", "Apply cast"],
            correct: 1,
            explanation: "Applying a traction splint for mid-shaft femur fracture is a key KPI."
        },
        {
            q: "A patient has a dislocated shoulder with no neurovascular compromise. What is the appropriate action?",
            options: ["Transport without reduction", "Attempt reduction using gentle external rotation technique", "Apply ice and wait", "Give oral analgesia"],
            correct: 1,
            explanation: "Anterior shoulder dislocations may be reduced using the gentle external rotation technique, if no fracture suspected."
        },
        {
            q: "What is the maximum 24-hour dose of methoxyflurane?",
            options: ["3 mL", "6 mL", "9 mL", "12 mL"],
            correct: 1,
            explanation: "Maximum 6 mL (two doses) in 24 hours."
        },
        {
            q: "Why should a traction splint be applied to a femur fracture?",
            options: ["To reduce pain", "To limit blood loss", "To prevent further soft tissue damage", "All of the above"],
            correct: 3,
            explanation: "Traction splints reduce pain, limit blood loss, and prevent further injury."
        },
        {
            q: "A patient with a forearm fracture has a splint applied. After splinting, you note that the fingers are pale and cold. What should you do?",
            options: ["Remove the splint", "Loosen the splint and reassess", "Transport immediately", "Apply heat"],
            correct: 1,
            explanation: "Signs of compromised circulation require loosening the splint and reassessing neurovascular status."
        },
        {
            q: "What is the dose of normal saline bolus for an adult with a limb injury and hypotension?",
            options: ["250 mL", "500 mL", "1000 mL", "2000 mL"],
            correct: 1,
            explanation: "Initial bolus is 500 mL; may repeat up to 2000 mL."
        },
        {
            q: "Which of the following is NOT a component of the CMS assessment?",
            options: ["Color", "Movement", "Sensation", "Capillary refill"],
            correct: 3,
            explanation: "CMS stands for Color, Movement, Sensation. Capillary refill is part of perfusion assessment but not part of CMS specifically."
        },
        {
            q: "A patient has a partial amputation of the hand with arterial bleeding. What is the priority?",
            options: ["Apply tourniquet", "Reattach the part", "Splint the hand", "Give pain medication"],
            correct: 0,
            explanation: "Uncontrolled arterial bleeding requires immediate tourniquet application."
        },
        {
            q: "What is the recommended method for splinting a fractured tibia?",
            options: ["Traction splint", "Long leg splint in anatomic position", "Air splint", "Cast"],
            correct: 1,
            explanation: "Fractures below the knee should be splinted in anatomic position with a long leg splint."
        },
        {
            q: "A patient with a knee dislocation has a pulse deficit in the foot. What should you suspect?",
            options: ["Compartment syndrome", "Vascular injury", "Nerve injury", "Fracture"],
            correct: 1,
            explanation: "Knee dislocation can cause popliteal artery injury; pulse deficit indicates vascular compromise."
        },
        {
            q: "What is the maximum total fluid bolus for a pediatric patient with hemorrhagic shock?",
            options: ["20 mL/kg", "40 mL/kg", "60 mL/kg", "80 mL/kg"],
            correct: 2,
            explanation: "Maximum 60 mL/kg crystalloid in the prehospital setting (three 20 mL/kg boluses)."
        },
        {
            q: "A patient with a limb injury has a blood pressure of 90/60 and heart rate of 120. What is the priority?",
            options: ["Splint the limb", "Give fluid bolus", "Administer pain medication", "Transport immediately"],
            correct: 1,
            explanation: "Hypotension and tachycardia indicate shock; fluid resuscitation is the priority."
        }
    ],
    flashcards: [
        { category: "Hemorrhage control", question: "What is the first step for uncontrolled arterial limb bleeding?", answer: "Apply a tourniquet proximal to the wound." },
        { category: "Tourniquet", question: "When should a tourniquet be used?", answer: "For uncontrolled arterial bleeding not controlled by direct pressure." },
        { category: "Traction splint", question: "What is the indication for a traction splint?", answer: "Isolated mid-shaft femur fracture." },
        { category: "CMS assessment", question: "What does CMS stand for?", answer: "Color, Movement, Sensation." },
        { category: "Compartment syndrome", question: "What are the signs of compartment syndrome?", answer: "Pain on passive stretch, pallor, pulselessness, paresthesia, paralysis." },
        { category: "Amputated part", question: "How should an amputated part be preserved?", answer: "Wrap in moist sterile gauze, place in plastic bag, then surround with ice water mixture." },
        { category: "Impaled object", question: "How should an impaled object be managed?", answer: "Do not remove; secure with bulky dressing." },
        { category: "Shoulder reduction", question: "How is an anterior shoulder dislocation reduced?", answer: "Supine, elbow flexed 90°, gentle traction, then slow external rotation." },
        { category: "Patella dislocation reduction", question: "How is a lateral patella dislocation reduced?", answer: "Extend knee while applying medial pressure." },
        { category: "Femur fracture blood loss", question: "How much blood can be lost from a femur fracture?", answer: "1-2 L." },
        { category: "Methoxyflurane dose", question: "What is the dose of methoxyflurane for procedural pain?", answer: "3 mL inhalation; may repeat once (max 6 mL/24h)." },
        { category: "Morphine dose", question: "What is the IV morphine dose for an adult?", answer: "2.5 mg increments every 5-10 minutes, max 20 mg." },
        { category: "Pain assessment", question: "How is pain severity assessed?", answer: "0-10 numeric scale; Wong-Baker FACES for non-verbal; FLACC for children <3 years." },
        { category: "Splinting", question: "What is the goal of splinting?", answer: "Immobilize the injury to reduce pain and prevent further damage." },
        { category: "Reassessment interval", question: "How often should CMS be reassessed after splinting?", answer: "Immediately after splinting and every 15 minutes." },
        { category: "Vascular injury signs", question: "What are signs of vascular injury in a limb?", answer: "Pulselessness, pallor, coolness, delayed capillary refill." },
        { category: "Open fracture", question: "What is an open fracture?", answer: "A fracture where the bone penetrates the skin." },
        { category: "Pelvic binder", question: "When is a pelvic binder used?", answer: "For suspected unstable pelvic fracture; not for isolated limb injury." },
        { category: "KPI", question: "What is a key performance indicator for limb injuries?", answer: "Apply traction splint for mid-shaft femur fracture when no time-critical injuries are present." },
        { category: "Transport decision", question: "Should all limb injury patients be transported?", answer: "Yes, especially those with fractures, dislocations, neurovascular compromise, or significant mechanism." }
    ],
    critical: [
        {
            id: "crit_7_4_1",
            scenario: "A 35-year-old male is involved in a motorcycle crash. He has an obvious deformity of the right femur, with a large hematoma. He is alert, BP 100/70, HR 110. What is the priority?",
            question: "What should you do first?",
            options: [
                { t: "Apply traction splint", f: "Correct. Isolated femur fracture with signs of blood loss requires traction splint to reduce pain and bleeding." },
                { t: "Give 1 L fluid bolus", f: "Fluids are important, but splinting should be done first." },
                { t: "Apply tourniquet", f: "Not indicated; no arterial bleeding." },
                { t: "Transport immediately", f: "Splinting can be done on scene without significant delay." }
            ],
            correct: 0,
            explanation: "Applying a traction splint reduces pain, limits blood loss, and prevents further injury.",
            kpi: "Traction splint applied."
        },
        {
            id: "crit_7_4_2",
            scenario: "A 45-year-old male has a deep laceration to the forearm with spurting bright red blood. Direct pressure is not controlling the bleeding. What should you do?",
            question: "What is the appropriate intervention?",
            options: [
                { t: "Apply additional gauze and pressure", f: "Direct pressure is already failing." },
                { t: "Apply a tourniquet proximal to the wound", f: "Correct. Uncontrolled arterial bleeding requires a tourniquet." },
                { t: "Apply a pressure dressing", f: "Inadequate for arterial spurting." },
                { t: "Elevate the arm", f: "Will not control arterial bleeding." }
            ],
            correct: 1,
            explanation: "Tourniquet is indicated for uncontrolled arterial limb bleeding when direct pressure fails.",
            kpi: "Tourniquet applied and time documented."
        },
        {
            id: "crit_7_4_3",
            scenario: "A 20-year-old male has a traumatic amputation of the lower leg from a train accident. The stump is bleeding moderately, and the amputated part is nearby. What is the priority?",
            question: "What should you do first?",
            options: [
                { t: "Recover the amputated part", f: "Control hemorrhage first." },
                { t: "Apply a tourniquet to control bleeding", f: "Correct. Hemorrhage control is the priority." },
                { t: "Wrap the stump in sterile gauze", f: "Bleeding control first." },
                { t: "Start IV fluids", f: "Not the priority." }
            ],
            correct: 1,
            explanation: "Life-threatening hemorrhage must be controlled first; then manage the amputated part.",
            kpi: "Tourniquet applied and bleeding controlled."
        },
        {
            id: "crit_7_4_4",
            scenario: "A 55-year-old female falls and sustains a left hip deformity. She is in severe pain (9/10), and the left leg is shortened and externally rotated. Her BP is 110/70, HR 100. What is the most likely injury and next step?",
            question: "What is the likely injury and appropriate intervention?",
            options: [
                { t: "Femoral neck fracture; apply traction splint", f: "Traction splints are for mid-shaft femur fractures; hip fractures are splinted differently." },
                { t: "Hip fracture; splint with pillow between legs and transport", f: "Correct. Hip fractures are managed with positioning and padding, not traction." },
                { t: "Pelvic fracture; apply pelvic binder", f: "No pelvic instability." },
                { t: "Knee dislocation; reduce", f: "Not likely." }
            ],
            correct: 1,
            explanation: "Hip fractures are common in elderly; splint with padding and transport for surgical repair.",
            kpi: "Injury identified and appropriately splinted."
        },
        {
            id: "crit_7_4_5",
            scenario: "A 30-year-old male has a forearm fracture that was splinted. After splinting, you note that his fingers are pale, cold, and he has decreased sensation. What should you do?",
            question: "What is the next step?",
            options: [
                { t: "Remove the splint and reassess", f: "Correct. Neurovascular compromise requires splint adjustment." },
                { t: "Apply a tourniquet", f: "Not indicated." },
                { t: "Give pain medication", f: "Not the priority." },
                { t: "Transport immediately", f: "Splint must be adjusted first." }
            ],
            correct: 0,
            explanation: "Signs of vascular compromise (pale, cold, decreased sensation) indicate the splint is too tight; remove or loosen and reassess CMS.",
            kpi: "CMS reassessed after splint adjustment."
        }
    ]
};