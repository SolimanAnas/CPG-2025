/* ========== Chapter 11.1 – S.T.A.R.T Triage (MCI Triage) ========== */
window.CPG_DATA = {
    id: "c11-1",
    title: "S.T.A.R.T Triage (MCI Triage)",
    shortTitle: "11.1 S.T.A.R.T Triage",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">?? S.T.A.R.T Triage (MCI Triage)</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Rapidly categorize patients in mass casualty incidents (MCIs) to prioritize treatment and resource allocation based on injury severity and survivability.</li>
                <li>Identify life-threatening conditions quickly to facilitate immediate interventions while maximizing the number of survivors.</li>
                <li>Ensure efficient scene management and transport decisions based on patient priority.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Patients involved in mass casualty incidents (e.g., multi-vehicle accidents, explosions, natural disasters) requiring triage.</li>
                <li>All individuals at the scene, regardless of age, presenting with potential injuries or exposure.</li>
                <li>Symptomatic or asymptomatic patients needing rapid assessment for prioritization.</li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>Patients not part of an MCI.</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Sequential Evaluation (START Algorithm):</strong>
                    <ol>
                        <li><strong>Global Command:</strong> "If you can hear me and are able to walk, come to my voice." – all walking/ambulatory patients are categorized as <strong>Green (Minor)</strong>.</li>
                        <li><strong>For non-ambulatory patients:</strong>
                            <ul>
                                <li><strong>Breathing:</strong> Is the patient breathing spontaneously? If no ? position airway; if still not breathing ? <strong>Black (Expectant)</strong>. If breathing returns ? continue.</li>
                                <li><strong>Respiratory Rate:</strong> If >30 ? <strong>Red (Immediate)</strong>. If =30 ? continue.</li>
                                <li><strong>Perfusion:</strong> Check radial pulse or capillary refill. If radial pulse absent or capillary refill >2 seconds ? <strong>Red (Immediate)</strong>. If present ? continue.</li>
                                <li><strong>Mental Status:</strong> Does the patient obey commands? If no ? <strong>Red (Immediate)</strong>. If yes ? <strong>Yellow (Delayed)</strong>.</li>
                            </ul>
                        </li>
                    </ol>
                </li>
                <li><strong>Category/Priority Assignment:</strong>
                    <ul>
                        <li><strong>Immediate (Red):</strong> Requires urgent intervention; life-threatening condition.</li>
                        <li><strong>Delayed (Yellow):</strong> Serious but not immediately life-threatening.</li>
                        <li><strong>Minor (Green):</strong> Walking wounded; minimal injuries.</li>
                        <li><strong>Expectant (Black):</strong> Unlikely to survive given resources; deceased or injuries incompatible with life.</li>
                    </ul>
                </li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Start with Global Command:</strong> Instruct all ambulatory patients to walk to a designated area; tag them as Green.</li>
                <li><strong>For non-ambulatory patients, apply START algorithm:</strong>
                    <ul>
                        <li>Open airway if apneic; if breathing resumes, tag Red.</li>
                        <li>If respiratory rate >30, tag Red.</li>
                        <li>If radial pulse absent or capillary refill >2 sec, tag Red.</li>
                        <li>If mental status altered (does not obey commands), tag Red.</li>
                        <li>Otherwise, tag Yellow.</li>
                    </ul>
                </li>
                <li><strong>Apply basic interventions during triage:</strong> Airway positioning for apnea; control massive hemorrhage if identified.</li>
                <li><strong>Integration with Incident Command:</strong> Report triage numbers to incident commander; adjust based on available resources.</li>
                <li><strong>Patient Reassessment:</strong> Reassess patients as resources allow; triage categories may change with deterioration or improvement.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Scene Safety: Prioritize personal protective equipment; avoid entering unsafe areas during initial triage.</li>
                <li>Do not delay transport of Red patients for detailed on-scene interventions.</li>
                <li>Apply triage tags to all patients to ensure proper prioritization.</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li>START (Simple Triage and Rapid Treatment) is designed for use by first responders without advanced equipment.</li>
                <li>Children may be triaged using a modified pediatric version (JumpSTART) if resources allow.</li>
                <li>In an MCI, the goal is to do the greatest good for the greatest number; some patients may be classified as Expectant if resources are overwhelmed.</li>
                <li>Triage tags should be placed on each patient; colour-coded tags (red, yellow, green, black) help with scene management.</li>
                <li>Document triage category and any interventions on the tag; communicate numbers to command.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Number of patients by triage category.</li>
                <li>Individual patient triage category (tag colour).</li>
                <li>Any interventions performed (airway positioning, hemorrhage control).</li>
                <li>Time of triage and transport priority.</li>
                <li>Communication with incident command.</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Complete triage assessment within 30 seconds (per patient).</li>
                <li>Apply a triage tag to all patients triaged.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What is the first step in the START triage system?",
            options: ["Check respiratory rate", "Check capillary refill", "Issue a global command for walking wounded", "Assess mental status"],
            correct: 2,
            explanation: "The first step is to instruct all ambulatory patients to walk to a designated area; they are tagged Green (Minor)."
        },
        {
            q: "A patient is not walking. After opening the airway, the patient remains apneic. What triage category should be assigned?",
            options: ["Red (Immediate)", "Yellow (Delayed)", "Green (Minor)", "Black (Expectant)"],
            correct: 3,
            explanation: "If a patient is apneic after airway positioning, they are categorized as Black (Expectant)."
        },
        {
            q: "A non-ambulatory patient is breathing spontaneously with a respiratory rate of 32. What triage category?",
            options: ["Red", "Yellow", "Green", "Black"],
            correct: 0,
            explanation: "Respiratory rate >30 is a Red (Immediate) criterion."
        },
        {
            q: "A patient has a respiratory rate of 24, radial pulse present, and obeys commands. What triage category?",
            options: ["Red", "Yellow", "Green", "Black"],
            correct: 1,
            explanation: "The patient meets all Yellow criteria (RR <30, perfusion present, obeys commands)."
        },
        {
            q: "Which of the following indicates a Red (Immediate) patient in START triage?",
            options: ["Absent radial pulse", "Respiratory rate 28", "Walks to designated area", "Obeys commands"],
            correct: 0,
            explanation: "Absent radial pulse or capillary refill >2 seconds is a Red criterion."
        },
        {
            q: "What is the maximum time recommended for triage per patient in START?",
            options: ["15 seconds", "30 seconds", "60 seconds", "90 seconds"],
            correct: 1,
            explanation: "START triage is designed to be completed in 30 seconds or less per patient."
        },
        {
            q: "A patient with a traumatic amputation and severe bleeding is unable to walk. After airway positioning, he has a respiratory rate of 24 and a palpable radial pulse. He is confused and does not follow commands. What triage category?",
            options: ["Red", "Yellow", "Green", "Black"],
            correct: 0,
            explanation: "Mental status altered (does not obey commands) makes him Red, regardless of other parameters."
        },
        {
            q: "In an MCI, which patients are tagged Green?",
            options: ["All patients with minor injuries", "Patients who can walk to the designated area", "Patients with normal vital signs", "Patients with no injuries"],
            correct: 1,
            explanation: "Green (Minor) patients are those who can walk when instructed; they are directed to a separate area."
        },
        {
            q: "What is the purpose of applying a triage tag to each patient?",
            options: ["To document patient identity", "To indicate priority for treatment and transport", "To track patient location", "All of the above"],
            correct: 3,
            explanation: "Triage tags indicate priority, allow tracking, and communicate essential information."
        },
        {
            q: "A patient with a respiratory rate of 28, absent radial pulse, and obeys commands. What triage category?",
            options: ["Red", "Yellow", "Green", "Black"],
            correct: 0,
            explanation: "Absent radial pulse (perfusion) makes the patient Red, regardless of other findings."
        },
        {
            q: "What is the correct order of the START assessment for non-ambulatory patients?",
            options: ["Breathing, Perfusion, Mental Status", "Perfusion, Breathing, Mental Status", "Mental Status, Breathing, Perfusion", "Breathing, Mental Status, Perfusion"],
            correct: 0,
            explanation: "START uses Breathing ? Perfusion ? Mental Status (RPM)."
        },
        {
            q: "A patient has a respiratory rate of 10, palpable radial pulse, and obeys commands. After opening the airway, breathing returns. What triage category?",
            options: ["Red", "Yellow", "Green", "Black"],
            correct: 0,
            explanation: "If a patient is apneic and then breathes after airway opening, they are categorized as Red (Immediate)."
        },
        {
            q: "Which triage category is assigned to patients who are deceased or have injuries incompatible with life?",
            options: ["Red", "Yellow", "Green", "Black"],
            correct: 3,
            explanation: "Black (Expectant) is used for deceased or those unlikely to survive given available resources."
        },
        {
            q: "What should you do if a patient has a capillary refill time of 3 seconds?",
            options: ["Tag Red", "Tag Yellow", "Tag Green", "Reassess in 30 seconds"],
            correct: 0,
            explanation: "Capillary refill >2 seconds (or absent radial pulse) is a Red criterion."
        },
        {
            q: "During an MCI, you encounter a patient with a head injury who is lying on the ground. He has a respiratory rate of 26, radial pulse present, and is able to follow simple commands. What triage category?",
            options: ["Red", "Yellow", "Green", "Black"],
            correct: 1,
            explanation: "All Yellow criteria: RR =30, perfusion present, obeys commands."
        },
        {
            q: "Why is it important to quickly move ambulatory patients to a designated area?",
            options: ["To prevent them from interfering with triage of non-ambulatory", "To free up resources", "To reduce scene congestion", "All of the above"],
            correct: 3,
            explanation: "Moving Green patients allows focus on those needing immediate care and improves scene organization."
        },
        {
            q: "In START triage, what is the cutoff for abnormal respiratory rate?",
            options: [">20", ">25", ">30", ">35"],
            correct: 2,
            explanation: "A respiratory rate >30 indicates immediate (Red) priority."
        },
        {
            q: "A patient with a chest wound is unable to walk. He is breathing at 22 breaths/min, has a radial pulse, and is confused. What triage category?",
            options: ["Red", "Yellow", "Green", "Black"],
            correct: 0,
            explanation: "Confusion (does not obey commands) makes the patient Red, regardless of other parameters."
        },
        {
            q: "What does the 'R' in START RPM stand for?",
            options: ["Respirations", "Rescue", "Resuscitation", "Reassessment"],
            correct: 0,
            explanation: "RPM stands for Respirations, Perfusion, Mental Status."
        },
        {
            q: "A patient is found with a traumatic amputation of the lower leg, actively bleeding. He is conscious, breathing at 28/min, has a weak radial pulse, and follows commands. What triage category?",
            options: ["Red", "Yellow", "Green", "Black"],
            correct: 0,
            explanation: "Weak radial pulse indicates poor perfusion ? Red."
        },
        {
            q: "What is the recommended method to assess perfusion in START triage?",
            options: ["Check carotid pulse", "Check radial pulse or capillary refill", "Check blood pressure", "Check skin color"],
            correct: 1,
            explanation: "Perfusion is assessed by radial pulse presence or capillary refill time (<2 seconds normal)."
        },
        {
            q: "A patient is unresponsive with a respiratory rate of 8. You open the airway and he begins to breathe spontaneously. What triage category?",
            options: ["Red", "Yellow", "Green", "Black"],
            correct: 0,
            explanation: "Spontaneous breathing after airway opening indicates Red (Immediate)."
        },
        {
            q: "What should you do if a patient's triage category changes during the incident?",
            options: ["Ignore the change", "Change the tag and notify command", "Leave as original", "Only change if resources available"],
            correct: 1,
            explanation: "Patients may improve or deteriorate; triage category should be updated and communicated."
        },
        {
            q: "Which of the following is NOT a START triage category?",
            options: ["Immediate", "Delayed", "Urgent", "Expectant"],
            correct: 2,
            explanation: "The START categories are Immediate (Red), Delayed (Yellow), Minor (Green), and Expectant (Black). 'Urgent' is not a START category."
        },
        {
            q: "A patient is found supine with no obvious injuries. He is breathing, has a pulse, and opens his eyes when you speak. What triage category?",
            options: ["Red", "Yellow", "Green", "Black"],
            correct: 1,
            explanation: "If the patient obeys commands (opens eyes to voice is not a command, but if he responds appropriately, he would be Yellow; if not, Red. This scenario implies he obeys commands, so Yellow."
        },
        {
            q: "What is the key performance indicator for MCI triage?",
            options: ["Transport all patients within 10 minutes", "Complete triage assessment within 30 seconds per patient and apply a triage tag", "Administer oxygen to all patients", "Perform CPR on all non-breathing patients"],
            correct: 1,
            explanation: "The KPI is to triage each patient quickly and tag them appropriately."
        },
        {
            q: "During an MCI, you encounter a patient with a severe burn who is walking. What triage category?",
            options: ["Red", "Yellow", "Green", "Black"],
            correct: 2,
            explanation: "Walking patients are initially categorized as Green (Minor), even if they have significant injuries, until they can be reassessed."
        },
        {
            q: "After initial triage, which patients should be treated and transported first?",
            options: ["Red (Immediate)", "Yellow (Delayed)", "Green (Minor)", "Black (Expectant)"],
            correct: 0,
            explanation: "Red (Immediate) patients have life-threatening conditions and should be prioritized."
        },
        {
            q: "What is the purpose of the global command in START triage?",
            options: ["To identify Green patients", "To assess hearing", "To calm the scene", "To identify who needs immediate help"],
            correct: 0,
            explanation: "The global command identifies ambulatory patients who can self-evacuate and are tagged Green."
        },
        {
            q: "In a mass casualty incident, a patient with a sucking chest wound is not ambulatory. He has a respiratory rate of 28, radial pulse present, and obeys commands. What triage category?",
            options: ["Red", "Yellow", "Green", "Black"],
            correct: 0,
            explanation: "Despite meeting Yellow criteria for RR, perfusion, and mental status, the mechanism (sucking chest wound) and potential for deterioration may still warrant Red, but strictly by START algorithm, he is Yellow. However, clinical judgment may upgrade. According to the algorithm, Yellow."
        }
    ],
    flashcards: [
        { category: "START", question: "What does START stand for?", answer: "Simple Triage and Rapid Treatment." },
        { category: "Triage categories", question: "What are the four START triage categories?", answer: "Immediate (Red), Delayed (Yellow), Minor (Green), Expectant (Black)." },
        { category: "Green patients", question: "How are Green patients identified?", answer: "They can walk when instructed (global command)." },
        { category: "Red criteria – breathing", question: "What breathing abnormality makes a patient Red?", answer: "Respiratory rate >30, or apnea that resumes after airway opening." },
        { category: "Red criteria – perfusion", question: "What perfusion abnormality makes a patient Red?", answer: "Absent radial pulse or capillary refill >2 seconds." },
        { category: "Red criteria – mental status", question: "What mental status abnormality makes a patient Red?", answer: "Does not obey commands." },
        { category: "Yellow criteria", question: "What are the criteria for Yellow (Delayed)?", answer: "RR =30, radial pulse present, capillary refill =2 sec, and obeys commands." },
        { category: "Black criteria", question: "When is a patient tagged Black (Expectant)?", answer: "Apneic after airway opening; obviously deceased; injuries incompatible with life." },
        { category: "Triage tag", question: "What is the purpose of a triage tag?", answer: "To indicate priority, document findings, and assist with patient tracking." },
        { category: "RPM", question: "What does RPM stand for in START?", answer: "Respirations, Perfusion, Mental Status." },
        { category: "Time per patient", question: "What is the goal time for triage per patient?", answer: "30 seconds or less." },
        { category: "Global command", question: "What is the global command?", answer: "'If you can hear me and are able to walk, come to my voice.'" },
        { category: "Walking wounded", question: "What triage category is given to walking patients?", answer: "Green (Minor)." },
        { category: "Apneic after airway", question: "What triage category for a patient who remains apneic after airway opening?", answer: "Black (Expectant)." },
        { category: "Respiratory rate threshold", question: "What respiratory rate threshold indicates Immediate?", answer: ">30 breaths/min." },
        { category: "Capillary refill threshold", question: "What capillary refill time indicates Immediate?", answer: ">2 seconds." },
        { category: "Radial pulse assessment", question: "What does absence of radial pulse indicate?", answer: "Poor perfusion ? Immediate (Red)." },
        { category: "Mental status assessment", question: "How is mental status tested in START?", answer: "Ask the patient to obey a simple command (e.g., 'Squeeze my hand')." },
        { category: "KPI", question: "What is a key performance indicator for MCI triage?", answer: "Complete triage assessment within 30 seconds per patient and apply a triage tag." },
        { category: "Incident command", question: "What should be reported to incident command?", answer: "Number of patients in each triage category." }
    ],
    critical: [
        {
            id: "crit_11_1_1",
            scenario: "In a bus rollover, you are the first EMS provider on scene. You shout, 'If you can hear me and are able to walk, come to my voice.' Fifteen patients walk toward you. What is your next step?",
            question: "What should you do?",
            options: [
                { t: "Start triaging the walking patients individually", f: "Not yet; direct them to a designated area first." },
                { t: "Direct them to a designated area and tag them Green", f: "Correct. Walking patients are Green; move them to a safe area." },
                { t: "Begin treating the most critical", f: "Not the immediate next step; triage first." },
                { t: "Call for additional resources", f: "Already needed, but first move the walking patients." }
            ],
            correct: 1,
            explanation: "Walking patients are tagged Green and directed to a safe area to clear the scene for triage of non-ambulatory patients.",
            kpi: "Green patients identified and moved."
        },
        {
            id: "crit_11_1_2",
            scenario: "You approach a non-ambulatory patient who is not breathing. After opening the airway, she begins to breathe spontaneously. What triage category should she receive?",
            question: "What color tag should you assign?",
            options: ["Green", "Yellow", "Red", "Black"],
            correct: 2,
            explanation: "If a patient is apneic and then breathes after airway opening, they are tagged Red (Immediate).",
            kpi: "Correct triage category assigned."
        },
        {
            id: "crit_11_1_3",
            scenario: "A patient is breathing at 24 breaths/min, has a palpable radial pulse, and follows commands. What triage category?",
            question: "What is the correct tag color?",
            options: ["Red", "Yellow", "Green", "Black"],
            correct: 1,
            explanation: "All parameters are within Yellow criteria (RR =30, perfusion present, obeys commands).",
            kpi: "Yellow tag applied."
        },
        {
            id: "crit_11_1_4",
            scenario: "You are triaging a patient with a large scalp laceration. He is breathing at 32 breaths/min, has a weak radial pulse, and is confused. What triage category?",
            question: "What color tag?",
            options: ["Red", "Yellow", "Green", "Black"],
            correct: 0,
            explanation: "Tachypnea (RR>30), weak radial pulse (perfusion abnormal), and confusion (does not obey commands) all indicate Red.",
            kpi: "Red tag assigned."
        },
        {
            id: "crit_11_1_5",
            scenario: "You are triaging patients after an explosion. One patient is obviously dead with decapitation. What triage category?",
            question: "What tag should be applied?",
            options: ["Red", "Yellow", "Green", "Black"],
            correct: 3,
            explanation: "Deceased or injuries incompatible with life are tagged Black (Expectant).",
            kpi: "Black tag applied and documented."
        }
    ]
};