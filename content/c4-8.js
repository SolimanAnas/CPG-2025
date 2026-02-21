/* ========== Chapter 4.8 – Starting, Stopping and Transferring CPR ========== */
window.CPG_DATA = {
    id: "c4-8",
    title: "Starting, Stopping and Transferring CPR",
    shortTitle: "4.8 Starting/Stopping CPR",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">⏯️ Starting, Stopping and Transferring CPR</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Promptly initiate high‑quality CPR for patients in cardiac arrest.</li>
                <li>Make informed decisions about stopping or transferring CPR based on clinical criteria and futility to avoid unnecessary prolongation of resuscitation.</li>
                <li>Maintain effective CPR during transfer.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Patients presenting with cardiac arrest, including unresponsiveness with no signs of life (no pulse, no breathing, or agonal gasps).</li>
                <li>Patients requiring decisions about initiating, continuing, or terminating CPR.</li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>None noted.</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Cardiac arrest confirmation:</strong> Verify unresponsiveness (AVPU: U), absent pulse (carotid/femoral) for 5‑10 seconds, absent normal breathing or only agonal gasps.</li>
                <li><strong>Bystander CPR:</strong> Note presence/absence and quality of bystander CPR.</li>
                <li><strong>Cardiac rhythm:</strong> Apply monitor to identify rhythm (VF/VT/PEA/asystole).</li>
                <li><strong>Time patient last seen alive:</strong> Note time of arrest onset or when patient was last seen alive.</li>
                <li><strong>Signs of irreversible death:</strong> Assess for decomposition, rigor mortis, dependent lividity (hypostasis), incineration, decapitation, injuries totally incompatible with life.</li>
                <li><strong>Futile resuscitation in trauma assessment:</strong> In unwitnessed traumatic cardiac arrest, assess for: blunt or penetrating trauma, no spontaneous movement, no pupillary response, apnoeic and pulseless, ECG shows no organized rhythm – if ALL present, CPR not indicated.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Starting CPR:</strong>
                    <ul>
                        <li>CPR does not need to be started if any sign of irreversible death is present.</li>
                        <li>In unwitnessed traumatic arrest, if ALL futility criteria met, do not start CPR.</li>
                        <li>CPR should be started on all other patients.</li>
                        <li>Once started, CPR should generally be continued for at least 20 minutes.</li>
                    </ul>
                </li>
                <li><strong>Transferring CPR:</strong>
                    <ul>
                        <li>Mandatory transfer with ongoing CPR for: age <18 years, drowning, hypothermia, pregnancy, clearly identified reversible cause that cannot be corrected prehospitally.</li>
                        <li>Initial resuscitation efforts (airway, BVM, IV access, medications) should be performed prior to transport when feasible.</li>
                        <li>Transport should be prioritised if hospital arrival will provide clear benefit (e.g., haemorrhage control).</li>
                        <li>If family requests transfer, it is appropriate to transport.</li>
                    </ul>
                </li>
                <li><strong>Stopping CPR:</strong>
                    <ul>
                        <li>Only Paramedic, Advanced Paramedic, or Emergency Physician may stop resuscitation efforts. EMTs cannot stop CPR – must transfer or wait for ALS.</li>
                        <li><strong>Stopping CPR in non‑trauma patient:</strong> May stop if ALL of the following are met:
                            <ul>
                                <li>Patient not in mandatory transfer criteria (age <18, drowning, hypothermia, pregnancy, reversible cause).</li>
                                <li>No pulse, no respirations.</li>
                                <li>Appropriate ALS interventions administered.</li>
                                <li>No ROSC after 20 minutes of resuscitation.</li>
                                <li>Rhythm asystole.</li>
                                <li>EtCO₂ <20 mmHg.</li>
                                <li>No heart sounds, no palpable pulse, no neurological function (non‑reactive pupils, no response to pain, no movement).</li>
                                <li>All clinicians agree.</li>
                            </ul>
                        </li>
                        <li><strong>Stopping CPR in trauma patient:</strong> Under normal circumstances, transfer with ongoing CPR is preferred; may stop only in exceptional circumstances (e.g., difficult extrication) if same criteria as above are met.</li>
                    </ul>
                </li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>If any doubt about starting CPR, start CPR.</li>
                <li>Transport should be prioritised when fast arrival at hospital provides clear benefit (e.g., exsanguination).</li>
                <li>ALS back‑up should be routinely requested for all patients undergoing CPR.</li>
                <li>If transferring under CPR, effective resuscitation must be maintained during extrication and transport (chest compressions, airway, ventilation, medications).</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li>In most cases, appropriate initial resuscitation should be performed on‑scene before starting transfer (airway management, BVM, chest compressions, defibrillation, IV access, medications, reversal of identified causes).</li>
                <li>If it is difficult to perform some procedures (e.g., IV access) prior to transfer, a clinical decision must balance time taken vs. ability to perform en route.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Identification, mechanism/medical complaint, injuries/information, signs (rhythm, EtCO₂, response to CPR, ROSC signs).</li>
                <li>Treatment: time CPR started/stopped, defibrillation, medications, ventilation method, airway management, transfer decision rationale.</li>
                <li>Allergies, medications, background, other (scene conditions, staff involved, consensus notes for stopping CPR).</li>
                <li>Ensure accurate time‑stamping of key actions.</li>
                <li>If CPR stopped, include signs of irreversible death or futility criteria met.</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Ensure all relevant information surrounding the decision to start/stop or transfer CPR is captured in the patient care report.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "Which of the following is a sign of irreversible death and a contraindication to starting CPR?",
            options: ["Hypothermia", "Rigor mortis", "Agonal gasps", "Pulseless electrical activity"],
            correct: 1,
            explanation: "Rigor mortis, decomposition, dependent lividity, incineration, decapitation are signs of irreversible death; CPR should not be started."
        },
        {
            q: "In an unwitnessed traumatic cardiac arrest, all the following must be present to withhold CPR except:",
            options: ["Blunt or penetrating trauma", "No spontaneous movement", "Reactive pupils", "ECG shows no organized rhythm"],
            correct: 2,
            explanation: "Criteria for withholding CPR in unwitnessed traumatic arrest include: blunt/penetrating trauma, no movement, no pupillary response, apnoeic and pulseless, ECG no organized rhythm. Reactive pupils would indicate possible neurological function."
        },
        {
            q: "Once CPR is started, how long should it generally be continued before considering termination?",
            options: ["5 minutes", "10 minutes", "20 minutes", "30 minutes"],
            correct: 2,
            explanation: "CPR should generally be continued for at least 20 minutes before considering termination, unless signs of irreversible death or futility criteria are met earlier."
        },
        {
            q: "Which of the following patients must be transported to hospital with ongoing CPR?",
            options: ["Age 65 with asystole", "Drowning victim", "Witnessed arrest with VF", "Trauma arrest with exsanguination"],
            correct: 1,
            explanation: "Mandatory transfer criteria include age <18, drowning, hypothermia, pregnancy, and clearly identified reversible cause that cannot be corrected prehospitally."
        },
        {
            q: "Who is authorised to stop resuscitation efforts in the prehospital setting?",
            options: ["EMT", "Paramedic", "Any trained rescuer", "Police officer"],
            correct: 1,
            explanation: "Only a Paramedic, Advanced Paramedic, or Emergency Physician may stop resuscitation efforts. EMTs cannot stop CPR."
        },
        {
            q: "What is the minimum EtCO₂ value required as part of the criteria to stop CPR in a non‑trauma patient?",
            options: ["<10 mmHg", "<20 mmHg", "<30 mmHg", "<40 mmHg"],
            correct: 1,
            explanation: "EtCO₂ <20 mmHg is one of the criteria that must be met to consider stopping CPR."
        },
        {
            q: "In a non‑trauma patient, after how many minutes of resuscitation without ROSC may stopping CPR be considered?",
            options: ["10 minutes", "20 minutes", "30 minutes", "40 minutes"],
            correct: 1,
            explanation: "No ROSC after 20 minutes of resuscitation is one of the criteria for considering termination."
        },
        {
            q: "Which rhythm must be present to consider stopping CPR in a non‑trauma patient?",
            options: ["PEA", "VF", "Asystole", "VT"],
            correct: 2,
            explanation: "Asystole is the required rhythm as part of the termination criteria."
        },
        {
            q: "A patient is in cardiac arrest and meets all criteria for stopping CPR except that the family requests continued resuscitation. What should you do?",
            options: ["Stop CPR as per criteria", "Continue CPR and transport", "Consult Tele‑EMS", "Wait for police"],
            correct: 1,
            explanation: "If family requests transport, it is appropriate to transfer the patient to hospital with ongoing CPR."
        },
        {
            q: "Which of the following is NOT a mandatory transfer criterion for ongoing CPR?",
            options: ["Age <18", "Hypothermia", "Pregnancy", "Age >80"],
            correct: 3,
            explanation: "Mandatory transfer criteria: age <18, drowning, hypothermia, pregnancy, and clearly identified reversible cause not correctable prehospitally."
        },
        {
            q: "In a trauma patient with difficult extrication, who may stop resuscitation efforts?",
            options: ["EMT", "Paramedic only", "Any crew member", "Police"],
            correct: 1,
            explanation: "Only a Paramedic or higher may stop resuscitation, even in trauma, but only in exceptional circumstances and if all criteria are met."
        },
        {
            q: "What is the role of bystander CPR documentation?",
            options: ["Not important", "It affects termination criteria", "It is required for transport decisions", "It helps determine quality of CPR"],
            correct: 3,
            explanation: "Documenting bystander CPR and its quality is important for clinical decision‑making and handover."
        },
        {
            q: "A patient in cardiac arrest has no pulse, apnoeic, asystole on ECG, and EtCO₂ 15 mmHg after 20 minutes of ALS. The patient is 25 years old with no reversible cause. What should you do?",
            options: ["Stop CPR", "Continue CPR and transport", "Give another dose of adrenaline", "Perform bilateral needle decompression"],
            correct: 0,
            explanation: "If all criteria are met (including age not <18, no reversible cause, asystole, EtCO₂ <20, no ROSC after 20 min, and no neurological signs), stopping CPR is appropriate."
        },
        {
            q: "A 3‑year‑old child is in cardiac arrest. After 25 minutes of resuscitation, there is no ROSC. What should you do?",
            options: ["Stop CPR", "Continue CPR and transport", "Give amiodarone", "Terminate resuscitation"],
            correct: 1,
            explanation: "Age <18 is a mandatory transfer criterion; the child must be transported with ongoing CPR."
        },
        {
            q: "What is the recommended action if ALS back‑up is significantly delayed?",
            options: ["Stop CPR", "Request another BLS unit for assistance", "Transport with ongoing CPR", "Wait for ALS"],
            correct: 2,
            explanation: "If ALS is delayed, consider transport to hospital with ongoing CPR, especially if hospital is closer."
        },
        {
            q: "Which of the following neurological signs is part of the criteria to stop CPR?",
            options: ["Pupils reactive to light", "Spontaneous movement", "Withdrawal to pain", "No response to pain"],
            correct: 3,
            explanation: "No evidence of neurological function (non‑reactive pupils, no response to pain, no spontaneous movement) is required."
        },
        {
            q: "A patient with hypothermic cardiac arrest has been resuscitated for 30 minutes without ROSC. Core temperature is 28°C. What should you do?",
            options: ["Stop CPR", "Continue CPR and transport", "Give another dose of adrenaline", "Double defibrillation energy"],
            correct: 1,
            explanation: "Hypothermia is a mandatory transfer criterion; continue CPR and transport."
        },
        {
            q: "What is the maximum on‑scene time goal for a trauma patient in cardiac arrest?",
            options: ["<5 minutes", "<10 minutes", "<15 minutes", "<20 minutes"],
            correct: 1,
            explanation: "Scene time should be minimized; goal <10 minutes for red priority patients."
        },
        {
            q: "A patient achieves ROSC during transport. What is the next priority?",
            options: ["Stop transport", "Continue to hospital with post‑resuscitation care", "Return to scene", "Wait for ALS"],
            correct: 1,
            explanation: "Continue transport to hospital and provide post‑ROSC care en route."
        },
        {
            q: "Which of the following is a requirement for stopping CPR in a non‑trauma patient?",
            options: ["All clinicians agree", "Patient age >80", "Family consent", "Pupils fixed and dilated"],
            correct: 0,
            explanation: "All clinicians involved in the patient's care must agree that stopping resuscitation is appropriate."
        },
        {
            q: "In a witnessed traumatic cardiac arrest, what is the priority?",
            options: ["Stop CPR", "Start CPR immediately", "Wait for ALS", "Apply pelvic binder first"],
            correct: 1,
            explanation: "Witnessed arrest by EMS requires immediate initiation of CPR."
        },
        {
            q: "What should be documented when CPR is stopped?",
            options: ["Time of death", "Signs of irreversible death or futility criteria met", "Names of all clinicians", "All of the above"],
            correct: 3,
            explanation: "All relevant information, including time, criteria met, and staff involved, should be documented."
        },
        {
            q: "A patient with a clearly identified reversible cause of arrest (e.g., opioid overdose) has received naloxone and there is no ROSC after 20 minutes. Should CPR be stopped?",
            options: ["Yes", "No, continue and transport"],
            correct: 1,
            explanation: "Reversible cause that cannot be corrected prehospitally? Opioid overdose may respond to naloxone, but if no response, transport is still indicated as it may be a mandatory criterion? Actually, if the cause is reversible but not corrected, it's a mandatory transfer criterion. So continue CPR and transport."
        },
        {
            q: "Who can stop CPR in a trauma patient with difficult extrication?",
            options: ["EMT", "Paramedic", "Police", "Any crew member"],
            correct: 1,
            explanation: "Only a Paramedic or higher may stop resuscitation, even in trauma, and only under exceptional circumstances."
        },
        {
            q: "What is the role of EtCO₂ monitoring in termination of resuscitation decisions?",
            options: ["It is not used", "EtCO₂ <20 mmHg supports termination", "EtCO₂ >40 mmHg supports termination", "EtCO₂ is only for ROSC"],
            correct: 1,
            explanation: "EtCO₂ <20 mmHg after 20 minutes of resuscitation is one of the criteria supporting termination."
        },
        {
            q: "A 20‑year‑old drowning victim is in cardiac arrest. After 25 minutes of ALS, no ROSC. What should you do?",
            options: ["Stop CPR", "Continue CPR and transport"],
            correct: 1,
            explanation: "Drowning is a mandatory transfer criterion; continue CPR and transport."
        },
        {
            q: "What is the recommended action if a patient's family requests transport even though termination criteria are met?",
            options: ["Stop CPR as per criteria", "Continue CPR and transport", "Explain futility and stop", "Wait for police"],
            correct: 1,
            explanation: "If family requests transport, it is appropriate to transfer the patient to hospital with ongoing CPR."
        },
        {
            q: "Which of the following is NOT required to stop CPR in a non‑trauma patient?",
            options: ["No ROSC after 20 minutes", "Asystole", "EtCO₂ <20 mmHg", "Patient age >80"],
            correct: 3,
            explanation: "Age >80 is not a criterion; age <18 is a mandatory transfer criterion, but older age alone does not justify termination."
        },
        {
            q: "In a patient with PEA, after 20 minutes of ALS, there is no ROSC and EtCO₂ is 15 mmHg. What should you do?",
            options: ["Stop CPR", "Continue CPR and transport", "Give atropine", "Change to VF protocol"],
            correct: 1,
            explanation: "Termination criteria require asystole, not PEA. So continue CPR and transport."
        },
        {
            q: "A patient is in cardiac arrest and you are the only EMT on scene. ALS is 20 minutes away. What should you do?",
            options: ["Stop CPR", "Continue CPR and transport", "Wait for ALS", "Request police assistance"],
            correct: 1,
            explanation: "EMTs cannot stop CPR; if ALS is delayed, consider transport with ongoing CPR."
        }
    ],
    flashcards: [
        { category: "Starting CPR", question: "When should CPR NOT be started?", answer: "If signs of irreversible death (rigor mortis, decomposition, dependent lividity, incineration, decapitation) are present, or in unwitnessed trauma if all futility criteria met." },
        { category: "Irreversible death", question: "List five signs of irreversible death.", answer: "Decomposition, rigor mortis, dependent lividity, incineration, decapitation." },
        { category: "Futility criteria (trauma)", question: "What five criteria must ALL be met to withhold CPR in unwitnessed traumatic cardiac arrest?", answer: "Blunt/penetrating trauma, no spontaneous movement, no pupillary response, apnoeic and pulseless, ECG no organized rhythm." },
        { category: "Mandatory transfer", question: "Which patients must be transported with ongoing CPR?", answer: "Age <18, drowning, hypothermia, pregnancy, clearly identified reversible cause not correctable prehospitally." },
        { category: "Stopping CPR", question: "Who can stop CPR in the prehospital setting?", answer: "Paramedic, Advanced Paramedic, or Emergency Physician." },
        { category: "Stopping criteria (non‑trauma)", question: "List the criteria for stopping CPR in a non‑trauma patient.", answer: "Not in mandatory transfer group, no pulse/no respirations, ALS given, no ROSC after 20 min, asystole, EtCO₂ <20 mmHg, no heart sounds, no pulse, no neuro function, all clinicians agree." },
        { category: "EtCO₂ threshold", question: "What EtCO₂ value supports termination of resuscitation?", answer: "<20 mmHg after 20 minutes of resuscitation." },
        { category: "CPR duration", question: "How long should CPR generally be continued before considering termination?", answer: "At least 20 minutes." },
        { category: "EMT role", question: "Can an EMT stop CPR?", answer: "No; EMTs must either transfer the patient or wait for ALS." },
        { category: "Transport decision", question: "If family requests transport despite meeting termination criteria, what should you do?", answer: "Transport with ongoing CPR." },
        { category: "Scene time", question: "What is the goal on‑scene time for trauma cardiac arrest?", answer: "<10 minutes." },
        { category: "Hypothermia", question: "Is hypothermia a mandatory transfer criterion?", answer: "Yes." },
        { category: "Drowning", question: "Is drowning a mandatory transfer criterion?", answer: "Yes." },
        { category: "Pregnancy", question: "Is pregnancy a mandatory transfer criterion?", answer: "Yes." },
        { category: "Reversible cause", question: "If a reversible cause is identified but cannot be corrected prehospitally, what should you do?", answer: "Transport with ongoing CPR." },
        { category: "Neurological criteria", question: "What neurological findings are required to stop CPR?", answer: "No response to pain, no spontaneous movement, non‑reactive pupils." },
        { category: "Heart sounds", question: "What cardiac finding is part of termination criteria?", answer: "No heart sounds." },
        { category: "Rhythm", question: "What rhythm must be present to stop CPR in non‑trauma?", answer: "Asystole." },
        { category: "Agreement", question: "What agreement is required to stop CPR?", answer: "All clinicians involved must agree." },
        { category: "ALS backup", question: "Should ALS back‑up be requested for all CPR patients?", answer: "Yes." },
        { category: "Documentation", question: "What must be documented if CPR is stopped?", answer: "Time, criteria met, staff involved, signs of irreversible death." },
        { category: "ROSC", question: "If ROSC is achieved during transport, what should you do?", answer: "Continue to hospital with post‑resuscitation care." },
        { category: "Witnessed arrest", question: "If EMS witnesses a cardiac arrest, what should you do?", answer: "Start CPR immediately." },
        { category: "PEA", question: "Can CPR be stopped if the rhythm is PEA after 20 minutes?", answer: "No, termination criteria require asystole." },
        { category: "EtCO₂ after ROSC", question: "What EtCO₂ suggests ROSC?", answer: "Sudden rise >40 mmHg." },
        { category: "Trauma arrest", question: "In trauma arrest, what is the preferred action after starting CPR?", answer: "Rapid transport to trauma centre." },
        { category: "Difficult extrication", question: "In trauma with difficult extrication, when may CPR be stopped?", answer: "In exceptional circumstances, by a Paramedic, if all termination criteria met." },
        { category: "KPI", question: "What is the KPI for starting/stopping CPR?", answer: "Ensure all relevant information is captured in the patient care report." },
        { category: "Family request", question: "If family requests transport, what should you do?", answer: "Transport with ongoing CPR." },
        { category: "Reassessment", question: "How often should you check for ROSC during CPR?", answer: "Every 2 minutes." }
    ],
    critical: [
        {
            id: "crit_4_8_1",
            scenario: "You are called to a 75‑year‑old male in cardiac arrest. Bystander CPR is in progress. The arrest was unwitnessed. There are no signs of irreversible death. ECG shows asystole. What is your next action?",
            question: "What should you do?",
            options: [
                { t: "Start CPR and request ALS back‑up", f: "Correct. No contraindications; start CPR." },
                { t: "Do not start CPR – asystole is not shockable", f: "Asystole is a rhythm in cardiac arrest; CPR should be started." },
                { t: "Wait for ALS to arrive", f: "CPR should be initiated immediately." },
                { t: "Check for a pulse for 20 seconds", f: "Prolonged pulse check delays CPR." }
            ],
            correct: 0,
            explanation: "In the absence of signs of irreversible death, CPR should be started immediately. Asystole is a non‑shockable rhythm but requires CPR and medications.",
            kpi: "CPR initiated within 1 minute."
        },
        {
            id: "crit_4_8_2",
            scenario: "You are managing a 45‑year‑old female in cardiac arrest. After 20 minutes of ALS, there is no ROSC. The rhythm remains asystole, EtCO₂ is 12 mmHg, pupils fixed and dilated, no response to pain. She is not pregnant, not hypothermic, and the arrest is not drowning‑related. What should you do?",
            question: "What is the appropriate action?",
            options: [
                { t: "Continue CPR and transport", f: "All termination criteria are met; consider stopping." },
                { t: "Stop resuscitation efforts", f: "Correct. All criteria for termination are met." },
                { t: "Give another dose of adrenaline", f: "No further benefit if criteria met." },
                { t: "Change to VF protocol", f: "Rhythm is asystole, not VF." }
            ],
            correct: 1,
            explanation: "All criteria for termination are met: not in mandatory transfer group, no ROSC after 20 min, asystole, EtCO₂ <20, no neurological function, all clinicians agree. Stopping CPR is appropriate.",
            kpi: "Termination decision documented."
        },
        {
            id: "crit_4_8_3",
            scenario: "A 2‑year‑old child is in cardiac arrest. After 25 minutes of resuscitation, there is no ROSC. The rhythm is asystole, EtCO₂ 10 mmHg. What should you do?",
            question: "What is the next action?",
            options: [
                { t: "Stop CPR", f: "Age <18 is a mandatory transfer criterion." },
                { t: "Continue CPR and transport", f: "Correct. The child must be transported with ongoing CPR." },
                { t: "Give amiodarone", f: "Not indicated for asystole." },
                { t: "Double defibrillation energy", f: "Not indicated." }
            ],
            correct: 1,
            explanation: "Paediatric age (<18 years) is a mandatory transfer criterion. Continue CPR and transport to hospital.",
            kpi: "Transport initiated with ongoing CPR."
        },
        {
            id: "crit_4_8_4",
            scenario: "You are an EMT on scene with a patient in cardiac arrest. ALS is 20 minutes away. You have been performing CPR for 10 minutes with no ROSC. What should you do?",
            question: "What is your priority?",
            options: [
                { t: "Stop CPR and wait for ALS", f: "EMTs cannot stop CPR." },
                { t: "Continue CPR and consider transport to hospital", f: "Correct. If ALS is delayed, transport with ongoing CPR is appropriate." },
                { t: "Wait for ALS on scene", f: "Transport may be faster; consider moving." },
                { t: "Request police assistance", f: "Not indicated." }
            ],
            correct: 1,
            explanation: "EMTs cannot terminate resuscitation. If ALS is significantly delayed, consider transport to the nearest hospital with ongoing CPR.",
            kpi: "Transport decision made and documented."
        },
        {
            id: "crit_4_8_5",
            scenario: "A 30‑year‑old pregnant woman (32 weeks) is in cardiac arrest. After 20 minutes of ALS, there is no ROSC. The rhythm is asystole, EtCO₂ 15 mmHg. What should you do?",
            question: "What is the appropriate action?",
            options: [
                { t: "Stop CPR – criteria met", f: "Pregnancy is a mandatory transfer criterion." },
                { t: "Continue CPR and transport to hospital with obstetric capability", f: "Correct. Pregnancy requires transport with ongoing CPR." },
                { t: "Perform peri‑mortem caesarean section on scene", f: "Not within prehospital scope; transport rapidly." },
                { t: "Give oxytocin", f: "Not indicated." }
            ],
            correct: 1,
            explanation: "Pregnancy is a mandatory transfer criterion. Continue CPR and transport urgently to a hospital capable of obstetric care and peri‑mortem caesarean section.",
            kpi: "Transport initiated; hospital notified."
        }
    ]
};