/* ========== Chapter 4.9 – Verification of Death ========== */
window.CPG_DATA = {
    id: "c4-9",
    title: "Verification of Death",
    shortTitle: "4.9 Verification of Death",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">⚰️ Verification of Death</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Accurately verify death to confirm that no further resuscitation efforts are required.</li>
                <li>Ensure effective communication with Dispatch and other Emergency Services.</li>
                <li>Ensure appropriate documentation is completed.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Patients presenting with clinical signs suggestive of irreversible death, including decomposition, obvious rigor mortis, dependent lividity (hypostasis), incineration, decapitation, or injuries totally incompatible with life.</li>
                <li>Patients requiring confirmation of death after resuscitative efforts have been completed and death has been declared (see Starting, Stopping or Transferring CPR CPG).</li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>Unconscious patients who do not meet the inclusion criteria listed above.</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Termination of resuscitation efforts:</strong> Verify unresponsiveness (AVPU: U), absence of spontaneous breathing or only agonal gasps for at least 60 seconds, absence of pulse (carotid or femoral) for at least 60 seconds, 4‑lead ECG showing asystole for at least 60 seconds, absence of heart sounds for at least 60 seconds, absence of neurological function (pupils non‑reactive to light). Note time of death declared.</li>
                <li><strong>Definitive signs of irreversible death:</strong> Check for rigor mortis (stiffening of muscles, typically onset 2‑6 hours post‑death), dependent lividity (pooling of blood in dependent areas, appearing as purplish discoloration), catastrophic injuries incompatible with life (e.g., decapitation, incineration, decomposition, massive crush injuries).</li>
                <li><strong>Environmental and contextual assessment:</strong> Note scene conditions (e.g., body position, evidence of prolonged downtime). Identify any suspicious circumstances (e.g., trauma, ligature marks) requiring police involvement.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Verification of death:</strong>
                    <ul>
                        <li>Confirm signs of death: unresponsiveness, no breathing (≥60 sec), no pulse (≥60 sec), 4‑lead ECG asystole (≥60 sec), no heart sounds, non‑reactive pupils.</li>
                        <li>Note the time of death declared.</li>
                    </ul>
                </li>
                <li><strong>Communication:</strong>
                    <ul>
                        <li>Inform dispatch of death declaration and request black ambulance (deceased person ambulance).</li>
                        <li>Notify dispatch if any suspicious circumstances exist and request police assistance.</li>
                    </ul>
                </li>
                <li><strong>Post‑verification management:</strong>
                    <ul>
                        <li><strong>Suspicious circumstances:</strong> Preserve the scene for police or coroner investigation; avoid disturbing the body or surroundings unless necessary for safety or death verification.</li>
                        <li><strong>Informed by dispatch that a life‑threatening call is waiting:</strong> Ensure dispatch is aware of any special circumstances (e.g., police not yet on scene or body in a public place).</li>
                        <li><strong>If directed by police to remain on‑scene:</strong> Comply and document.</li>
                    </ul>
                </li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Do not transport a body in an ambulance vehicle unless:
                    <ul>
                        <li>The body is recently deceased and in a public place where public concern may be caused if left there.</li>
                        <li>The emotional circumstance associated with the death causes severe distress for the family.</li>
                        <li>Prior to transport, an arrangement is in place to accept the body at the destination (coordinate and confirm with dispatch).</li>
                        <li>As instructed by higher management.</li>
                    </ul>
                </li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Identification: full name, age, gender.</li>
                <li>Mechanism/medical complaint: context of arrest or condition leading to assessment (e.g., collapse, trauma, found unresponsive).</li>
                <li>Injuries/information: obvious signs of irreversible death (decomposition, rigor mortis, decapitation), suspicious marks, last known alive.</li>
                <li>Signs: confirmed absence of breathing, pulse, heart sounds, neurological response; 4‑lead ECG strip showing asystole (≥60 seconds); if agonal ECG, wait until flat line then take copy.</li>
                <li>Treatment: time of arrest (if known), time CPR stopped (if applicable), time of death declaration, any interventions performed prior to verification (e.g., airway, IV attempts).</li>
                <li>Allergies: not applicable unless relevant history.</li>
                <li>Medications: any found medications that may indicate cause of death or chronic illness.</li>
                <li>Background: medical history, living situation, family witness statements.</li>
                <li>Other: scene description, presence of bystanders, police involvement, emotional distress observed. If transported, reason and confirmation of receiving facility. Communication with dispatch and coordination steps. Accurate timestamp of each assessment point.</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Ensure documentation includes confirmation of all vital sign absences, ECG documentation, and time of death declaration.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "Which of the following is a definitive sign of irreversible death?",
            options: ["Apnoea", "Pulselessness", "Rigor mortis", "Fixed pupils"],
            correct: 2,
            explanation: "Rigor mortis, dependent lividity, decomposition, incineration, and decapitation are definitive signs of irreversible death."
        },
        {
            q: "How long should you check for absence of pulse before declaring death?",
            options: ["10 seconds", "30 seconds", "60 seconds", "2 minutes"],
            correct: 2,
            explanation: "You must confirm absence of a central pulse for at least 60 seconds before declaring death."
        },
        {
            q: "What ECG finding is required for verification of death after resuscitation efforts?",
            options: ["PEA", "VF", "Asystole for at least 60 seconds", "Sinus bradycardia"],
            correct: 2,
            explanation: "A 4‑lead ECG showing asystole for at least 60 seconds is required."
        },
        {
            q: "What is dependent lividity?",
            options: ["Pooling of blood in dependent areas", "Stiffening of muscles", "Skin discolouration from trauma", "Rigor mortis"],
            correct: 0,
            explanation: "Dependent lividity (hypostasis) is the pooling of blood in dependent parts of the body after death, appearing as purplish discolouration."
        },
        {
            q: "Approximately how long after death does rigor mortis typically begin?",
            options: ["30 minutes", "1‑2 hours", "2‑6 hours", "12‑24 hours"],
            correct: 2,
            explanation: "Rigor mortis typically begins 2‑6 hours after death."
        },
        {
            q: "Which of the following is NOT a sign of irreversible death?",
            options: ["Decomposition", "Fixed and dilated pupils", "Decapitation", "Incineration"],
            correct: 1,
            explanation: "Fixed and dilated pupils can occur in reversible conditions (e.g., drug overdose, hypothermia); they are not definitive signs of death."
        },
        {
            q: "If you are unsure whether a sign of irreversible death is present, what should you do?",
            options: ["Declare death", "Start CPR", "Wait for police", "Consult Tele‑EMS"],
            correct: 1,
            explanation: "If there is any doubt, CPR should be started."
        },
        {
            q: "What should you do if you encounter suspicious circumstances during death verification?",
            options: ["Move the body to a safe place", "Preserve the scene and request police", "Continue with verification only", "Transport immediately"],
            correct: 1,
            explanation: "Preserve the scene for police or coroner investigation and notify dispatch."
        },
        {
            q: "When is it appropriate to transport a deceased person in an ambulance?",
            options: ["Always", "When family requests", "When in a public place causing concern and arrangements are confirmed", "Never"],
            correct: 2,
            explanation: "Transport may be appropriate if the body is in a public place, family distress is severe, or directed by management, and receiving facility is confirmed."
        },
        {
            q: "What must be documented when death is verified?",
            options: ["Time of death", "ECG strip showing asystole", "Absence of vital signs", "All of the above"],
            correct: 3,
            explanation: "All relevant findings, including time of death, ECG documentation, and absence of signs of life, must be documented."
        },
        {
            q: "Which neurological finding must be absent to declare death?",
            options: ["Pupils non‑reactive to light", "Pupils sluggish", "Pupils equal", "Pupils constricted"],
            correct: 0,
            explanation: "Non‑reactive pupils are part of the criteria; reactive pupils would indicate possible brainstem function."
        },
        {
            q: "How long should you observe for absence of spontaneous breathing before declaring death?",
            options: ["10 seconds", "30 seconds", "60 seconds", "2 minutes"],
            correct: 2,
            explanation: "Absence of spontaneous breathing must be confirmed for at least 60 seconds."
        },
        {
            q: "What is the role of heart sounds in verification of death?",
            options: ["Not required", "Must be absent for at least 60 seconds", "Only if ECG unavailable", "Auscultation for 30 seconds"],
            correct: 1,
            explanation: "Absence of heart sounds for at least 60 seconds is part of the verification criteria."
        },
        {
            q: "If a patient has a pacemaker and presents with asystole, can death be verified?",
            options: ["Yes", "No, pacemaker may cause artefact", "Yes, but only after confirming no capture", "No, always transport"],
            correct: 2,
            explanation: "If the pacemaker is not capturing (no electrical activity), death can still be verified after confirming asystole."
        },
        {
            q: "What should you do if dispatch informs you of a life‑threatening call while you are at a death scene?",
            options: ["Leave immediately", "Inform dispatch of circumstances and follow instructions", "Continue as planned", "Wait for police"],
            correct: 1,
            explanation: "Communicate with dispatch; they may direct you to remain or clear based on priority."
        },
        {
            q: "A body shows signs of rigor mortis and dependent lividity. What is your next action?",
            options: ["Start CPR", "Verify death and document", "Transport immediately", "Notify family"],
            correct: 1,
            explanation: "Definitive signs of death are present; verify and document accordingly."
        },
        {
            q: "What is the minimum duration of asystole required on ECG for death verification?",
            options: ["30 seconds", "60 seconds", "2 minutes", "5 minutes"],
            correct: 1,
            explanation: "Asystole must be present for at least 60 seconds."
        },
        {
            q: "If agonal complexes are seen on ECG, what should you do?",
            options: ["Declare death", "Wait until flat line then document", "Start CPR", "Give atropine"],
            correct: 1,
            explanation: "Agonal complexes indicate some electrical activity; wait until a flat line (asystole) is confirmed for 60 seconds before verifying death."
        },
        {
            q: "Which of the following is an injury totally incompatible with life?",
            options: ["Open femur fracture", "Decapitation", "Tension pneumothorax", "Cardiac tamponade"],
            correct: 1,
            explanation: "Decapitation, massive crush injuries, incineration are examples of injuries incompatible with life."
        },
        {
            q: "When should police be notified at a death scene?",
            options: ["All deaths", "Only suspicious deaths", "Only if trauma", "Only if family requests"],
            correct: 1,
            explanation: "Police should be notified if circumstances are suspicious (e.g., signs of violence, unknown cause)."
        },
        {
            q: "What is the correct action if you are directed by police to remain on scene?",
            options: ["Leave and document", "Comply and document", "Ignore and transport", "Call supervisor"],
            correct: 1,
            explanation: "Follow police direction and document accordingly."
        },
        {
            q: "A family is extremely distressed and requests the body be transported despite no arrangements. What should you do?",
            options: ["Transport immediately", "Explain limitations and coordinate with dispatch", "Refuse and leave", "Wait for police"],
            correct: 1,
            explanation: "Coordinate with dispatch to arrange acceptance; if possible, transport may be appropriate."
        },
        {
            q: "What is the significance of dependent lividity?",
            options: ["Confirms time of death", "Confirms irreversible death", "Indicates cause of death", "None"],
            correct: 1,
            explanation: "Dependent lividity is a definitive sign of irreversible death."
        },
        {
            q: "How should you document the ECG for death verification?",
            options: ["Verbally describe rhythm", "Print or save a strip showing asystole with time", "Only note in narrative", "Photograph monitor"],
            correct: 1,
            explanation: "A printed or saved ECG strip showing asystole and timestamp should be included in documentation."
        },
        {
            q: "If a patient is found with no signs of life but the time of arrest is unknown, can death be verified?",
            options: ["Yes, if definitive signs present", "No, always start CPR", "Only if family agrees", "After 10 minutes of CPR"],
            correct: 0,
            explanation: "If definitive signs of irreversible death (rigor, lividity, etc.) are present, death can be verified without resuscitation."
        },
        {
            q: "What should you do if you are unsure whether rigor mortis is present?",
            options: ["Declare death", "Start CPR", "Wait 30 minutes", "Call Tele‑EMS"],
            correct: 1,
            explanation: "If unsure, start CPR; do not withhold resuscitation based on uncertainty."
        },
        {
            q: "Who can verify death in the prehospital setting?",
            options: ["Any EMT", "Paramedic or higher", "Police", "Physician only"],
            correct: 1,
            explanation: "Paramedics and higher levels can verify death according to protocol; EMTs may require ALS consultation."
        },
        {
            q: "What is the role of Tele‑EMS in death verification?",
            options: ["Required for all deaths", "Optional if uncertain", "Only for paediatric deaths", "Not used"],
            correct: 1,
            explanation: "Tele‑EMS may be consulted if there is uncertainty about signs of death or if required by protocol."
        },
        {
            q: "A patient with hypothermia (core 28°C) is pulseless and apnoeic. Can death be verified?",
            options: ["Yes", "No, resuscitate and rewarm", "Only after 30 minutes of CPR", "Yes if pupils fixed"],
            correct: 1,
            explanation: "Hypothermia mimics death; resuscitation and rewarming should be attempted before verifying death."
        },
        {
            q: "What is the minimum duration of absent pulse required for death verification?",
            options: ["30 seconds", "60 seconds", "2 minutes", "5 minutes"],
            correct: 1,
            explanation: "Absence of a central pulse must be confirmed for at least 60 seconds."
        }
    ],
    flashcards: [
        { category: "Definition", question: "What are the definitive signs of irreversible death?", answer: "Rigor mortis, dependent lividity, decomposition, incineration, decapitation, injuries totally incompatible with life." },
        { category: "Rigor mortis", question: "What is rigor mortis and when does it appear?", answer: "Stiffening of muscles, typically begins 2‑6 hours after death." },
        { category: "Lividity", question: "What is dependent lividity (hypostasis)?", answer: "Pooling of blood in dependent areas, appearing as purplish discolouration." },
        { category: "ECG criteria", question: "What ECG finding is required for death verification?", answer: "Asystole for at least 60 seconds." },
        { category: "Pulse check", question: "How long must absence of pulse be confirmed?", answer: "At least 60 seconds." },
        { category: "Breathing", question: "How long must absence of breathing be confirmed?", answer: "At least 60 seconds." },
        { category: "Heart sounds", question: "What cardiac auscultation finding is required?", answer: "Absence of heart sounds for at least 60 seconds." },
        { category: "Pupils", question: "What pupil finding is required?", answer: "Non‑reactive to light." },
        { category: "Time of death", question: "What time should be recorded?", answer: "The time death is declared." },
        { category: "Suspicious death", question: "What should you do if circumstances are suspicious?", answer: "Preserve scene, notify police, avoid disturbing body." },
        { category: "Transport", question: "When can a deceased person be transported?", answer: "If in public place causing concern, family distress, or directed, with confirmed acceptance." },
        { category: "Documentation", question: "What must be documented in death verification?", answer: "Absence of vital signs, ECG strip, time of death, signs of irreversible death." },
        { category: "Uncertainty", question: "What if you are unsure about signs of death?", answer: "Start CPR; do not withhold resuscitation." },
        { category: "Hypothermia", question: "Can death be verified in hypothermia?", answer: "No, resuscitate and rewarm first." },
        { category: "Drug overdose", question: "Can death be verified in suspected overdose?", answer: "Not until definitive signs present; resuscitate." },
        { category: "Agonal complexes", question: "What if ECG shows agonal complexes?", answer: "Wait for flat line asystole before verifying death." },
        { category: "Pacemaker", question: "How does a pacemaker affect verification?", answer: "If no capture and asystole confirmed, death can be verified." },
        { category: "Police notification", question: "When should police be notified?", answer: "If circumstances are suspicious (e.g., violence, unknown cause)." },
        { category: "Family distress", question: "What if family is extremely distressed?", answer: "Consider transport if arrangements can be made." },
        { category: "Scene preservation", question: "What is the priority in suspicious death?", answer: "Preserve scene for investigation." },
        { category: "Life‑threatening call", question: "What if you receive another call while at a death scene?", answer: "Inform dispatch and follow instructions." },
        { category: "Tele‑EMS", question: "When should Tele‑EMS be consulted?", answer: "If uncertain about signs or protocol requirements." },
        { category: "Decomposition", question: "Is decomposition a definitive sign of death?", answer: "Yes." },
        { category: "Incineration", question: "Is incineration a definitive sign of death?", answer: "Yes." },
        { category: "Decapitation", question: "Is decapitation a definitive sign of death?", answer: "Yes." },
        { category: "CPR contraindication", question: "When should CPR not be started?", answer: "When definitive signs of irreversible death are present." },
        { category: "EMT role", question: "Can an EMT verify death?", answer: "Usually requires ALS consultation unless definitive signs present and protocol allows." },
        { category: "Paramedic role", question: "Can a paramedic verify death?", answer: "Yes, according to protocol." },
        { category: "KPI", question: "What is the KPI for death verification?", answer: "Document confirmation of all vital sign absences, ECG, and time of death." },
        { category: "Handover", question: "What information should be communicated?", answer: "Time of death, signs present, police involvement, disposition." }
    ],
    critical: [
        {
            id: "crit_4_9_1",
            scenario: "You are called to a 70‑year‑old male found unresponsive at home. The body is cold, with stiff limbs and purple discolouration on the dependent parts. There are no signs of trauma. What is your next action?",
            question: "What should you do?",
            options: [
                { t: "Start CPR immediately", f: "Definitive signs of death are present; CPR not indicated." },
                { t: "Verify death, document findings, and notify dispatch", f: "Correct. Rigor mortis and lividity are definitive signs." },
                { t: "Transport to hospital", f: "Not necessary unless special circumstances." },
                { t: "Wait for police", f: "No suspicious circumstances." }
            ],
            correct: 1,
            explanation: "Rigor mortis and dependent lividity are definitive signs of irreversible death. Verify death, document, and notify dispatch for a black ambulance.",
            kpi: "Death verification documented."
        },
        {
            id: "crit_4_9_2",
            scenario: "You are called to a 45‑year‑old female found unresponsive. There are no signs of rigor or lividity. The family states she was last seen alive 1 hour ago. ECG shows asystole. What should you do?",
            question: "What is the appropriate action?",
            options: [
                { t: "Declare death – asystole present", f: "No definitive signs; resuscitation required." },
                { t: "Start CPR and follow cardiac arrest protocol", f: "Correct. Without definitive signs, start CPR." },
                { t: "Wait for police", f: "Not indicated." },
                { t: "Transport without CPR", f: "Inappropriate." }
            ],
            correct: 1,
            explanation: "Without definitive signs of irreversible death, CPR should be initiated. Asystole alone is not a reason to withhold resuscitation.",
            kpi: "CPR initiated within 1 minute."
        },
        {
            id: "crit_4_9_3",
            scenario: "You verify death in a patient with rigor mortis. While on scene, dispatch informs you of a life‑threatening call nearby. What should you do?",
            question: "What is your priority?",
            options: [
                { t: "Leave immediately for the other call", f: "Must ensure proper handover of deceased." },
                { t: "Inform dispatch of the situation and await instructions", f: "Correct. Communicate and follow direction." },
                { t: "Continue with documentation and ignore", f: "Dispatch must be informed." },
                { t: "Transport the body to hospital quickly", f: "Not appropriate." }
            ],
            correct: 1,
            explanation: "Communicate with dispatch; they may direct you to remain or clear based on priority and availability of other units.",
            kpi: "Appropriate communication documented."
        },
        {
            id: "crit_4_9_4",
            scenario: "You are called to a death scene where the body has a ligature around the neck and suspicious circumstances. What is your priority?",
            question: "What should you do first?",
            options: [
                { t: "Remove the ligature", f: "Do not disturb evidence." },
                { t: "Verify death and preserve the scene", f: "Correct. Verify death, then preserve scene and notify police." },
                { t: "Start CPR", f: "If definitive signs present, CPR not indicated." },
                { t: "Transport immediately", f: "Scene preservation is priority." }
            ],
            correct: 1,
            explanation: "Verify death, then preserve the scene for police investigation. Do not disturb potential evidence.",
            kpi: "Scene preserved; police notified."
        },
        {
            id: "crit_4_9_5",
            scenario: "A family is extremely distressed after a loved one's death and insists the body be taken to hospital. There are no suspicious circumstances. What should you do?",
            question: "What is the appropriate action?",
            options: [
                { t: "Refuse and leave", f: "Consider family needs." },
                { t: "Explain that transport is not routine but coordinate with dispatch", f: "Correct. If possible, arrange transport with confirmed acceptance." },
                { t: "Transport immediately without coordination", f: "Must confirm acceptance first." },
                { t: "Call police", f: "Not indicated." }
            ],
            correct: 1,
            explanation: "While not routine, transport may be arranged to alleviate distress, provided a receiving facility is confirmed. Coordinate with dispatch.",
            kpi: "Transport arranged appropriately if possible."
        }
    ]
};