/* ========== Chapter 6.3 – Adrenal Insufficiency ========== */
window.CPG_DATA = {
    id: "c6-3",
    title: "Adrenal Insufficiency",
    shortTitle: "6.3 Adrenal Insufficiency",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">?? Adrenal Insufficiency (Addisonian Crisis)</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Rapid recognition and treatment of adrenal crisis to prevent cardiovascular collapse.</li>
                <li>Prompt administration of hydrocortisone and fluid resuscitation.</li>
                <li>Identify and manage precipitating factors (infection, trauma, stress, medication non-compliance).</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Known adrenal insufficiency (Addison’s disease) with signs of crisis (hypotension, altered mental status, vomiting, abdominal pain).</li>
                <li>Suspected adrenal crisis in undiagnosed patient with shock not responding to standard therapy.</li>
                <li>Patients on long-term corticosteroids with acute illness or injury.</li>
                <li>Patients with medical alert bracelets indicating adrenal insufficiency.</li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>None – treat empirically if suspicion is high.</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Patient History:</strong> Known adrenal insufficiency, recent steroid use, autoimmune disease, recent infection, surgery, or trauma; check for medical alert bracelets.</li>
                <li><strong>Symptoms:</strong> Severe weakness, fatigue, dizziness, nausea, vomiting, abdominal pain, confusion, seizures.</li>
                <li><strong>Signs:</strong> Hypotension (especially postural), tachycardia, fever, hyperpigmentation (chronic), hypoglycemia, hyponatremia (if labs available).</li>
                <li><strong>Consider in any patient with:</strong> Unexplained hypotension, poor response to fluids, or hyperkalemia (if known).</li>
                <li><strong>Exclude other causes:</strong> Sepsis, hypovolemia, cardiac shock, anaphylaxis.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Primary Survey:</strong> Ensure airway patency, adequate breathing, and circulation. Give high-flow oxygen if hypoxic.</li>
                <li><strong>Circulation:</strong>
                    <ul>
                        <li>Establish IV/IO access.</li>
                        <li>Administer fluid bolus: <strong>500-1000 mL crystalloid (e.g., normal saline)</strong> rapidly; reassess.</li>
                        <li>If no improvement, consider additional fluids and immediate corticosteroid administration.</li>
                    </ul>
                </li>
                <li><strong>Glucose:</strong> Check blood glucose. If <70 mg/dL, give 50% dextrose 25 g IV (or 10% dextrose infusion).</li>
                <li><strong>Hydrocortisone:</strong>
                    <ul>
                        <li>Administer hydrocortisone <strong>100 mg IV/IM</strong> as soon as possible.</li>
                        <li>If hydrocortisone unavailable, consider methylprednisolone 50-100 mg IV or dexamethasone 4-8 mg IV.</li>
                        <li>Do not delay steroids for diagnostic tests.</li>
                    </ul>
                </li>
                <li><strong>Monitoring:</strong>
                    <ul>
                        <li>Continuous ECG, pulse oximetry, blood pressure every 5-10 minutes.</li>
                        <li>Observe for response to fluids and steroids (usually improves within 30-60 minutes).</li>
                    </ul>
                </li>
                <li><strong>Transport:</strong> Priority to nearest appropriate facility; notify receiving hospital of adrenal crisis.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Rapid deterioration can occur – monitor closely.</li>
                <li>Fluid resuscitation may need to be repeated; avoid excessive fluid in patients with heart failure.</li>
                <li>If patient has known steroid use, do not withhold steroids even if crisis not definite.</li>
                <li>Hypoglycemia is common – treat aggressively.</li>
                <li>Addisonian crisis is difficult to diagnose; most patients will inform you – check for medical alert bracelets.</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li>Adrenal crisis can mimic septic shock; give steroids early if there is any suspicion.</li>
                <li>Patients on chronic steroids may not have the classic hyperpigmentation.</li>
                <li>If patient is unable to take oral maintenance steroids, IM/IV hydrocortisone is life-saving.</li>
                <li>Document time of steroid administration – crucial for ongoing hospital care.</li>
                <li>Common causes: medication non-compliance, infection, trauma, surgery, dehydration.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>History of adrenal insufficiency, steroid use, presenting symptoms.</li>
                <li>Vital signs, blood glucose, response to fluids and steroids.</li>
                <li>Medication(s) given (dose, route, time).</li>
                <li>Fluids administered.</li>
                <li>Hospital notification and transport details.</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Hydrocortisone administered to suspected adrenal crisis within 30 minutes of identification.</li>
                <li>Blood glucose checked and treated if <70 mg/dL.</li>
                <li>Documentation of steroid administration (drug, dose, route, time).</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What is the initial fluid bolus for suspected adrenal crisis?",
            options: ["250 mL crystalloid", "500-1000 mL crystalloid", "1-2 L colloid", "No fluids"],
            correct: 1,
            explanation: "Administer 500-1000 mL normal saline rapidly; reassess for further need."
        },
        {
            q: "What is the recommended dose of hydrocortisone for adrenal crisis?",
            options: ["50 mg IV", "100 mg IV/IM", "200 mg IV", "25 mg IM"],
            correct: 1,
            explanation: "Hydrocortisone 100 mg IV/IM is the standard dose."
        },
        {
            q: "A patient with known Addison’s disease presents with hypotension, vomiting, and confusion. What is the priority?",
            options: ["IV fluids", "Hydrocortisone", "Blood glucose check", "All of the above"],
            correct: 3,
            explanation: "All are critical; fluids and steroids should be given rapidly, and glucose checked early."
        },
        {
            q: "Which of the following is a common precipitant of adrenal crisis?",
            options: ["Infection", "Trauma", "Surgery", "All of the above"],
            correct: 3,
            explanation: "Stressors such as infection, trauma, or surgery can trigger adrenal crisis."
        },
        {
            q: "A patient with adrenal crisis has a blood glucose of 55 mg/dL. What should you administer?",
            options: ["Glucagon", "Oral glucose", "50% dextrose 25 g IV", "No treatment"],
            correct: 2,
            explanation: "Treat hypoglycemia with IV dextrose."
        },
        {
            q: "What finding on physical exam may suggest chronic adrenal insufficiency?",
            options: ["Hyperpigmentation", "Pallor", "Cyanosis", "Jaundice"],
            correct: 0,
            explanation: "Hyperpigmentation of skin and mucous membranes can occur due to elevated ACTH."
        },
        {
            q: "If hydrocortisone is unavailable, which alternative can be given?",
            options: ["Prednisone 50 mg IV", "Methylprednisolone 50-100 mg IV", "Fludrocortisone", "No alternative"],
            correct: 1,
            explanation: "Methylprednisolone or dexamethasone can be substituted."
        },
        {
            q: "What is the expected response time after IV hydrocortisone?",
            options: ["Immediate", "30-60 minutes", "2-4 hours", "12 hours"],
            correct: 1,
            explanation: "Improvement in blood pressure and mental status usually occurs within 30-60 minutes."
        },
        {
            q: "A patient on long-term prednisone presents with fever and hypotension. Should you give steroids?",
            options: ["Yes, they may have adrenal suppression", "No, wait for hospital", "Only if cortisol level low", "Give fluids only"],
            correct: 0,
            explanation: "Chronic steroid use causes adrenal suppression; stress doses are indicated."
        },
        {
            q: "What electrolyte abnormality is often seen in adrenal crisis?",
            options: ["Hyperkalemia", "Hyponatremia", "Both A and B", "Hypercalcemia"],
            correct: 2,
            explanation: "Adrenal insufficiency causes aldosterone deficiency ? sodium loss and potassium retention."
        },
        {
            q: "Which of the following is a contraindication to giving hydrocortisone?",
            options: ["Hypotension", "Pregnancy", "Infection", "None – it is life-saving"],
            correct: 3,
            explanation: "In suspected adrenal crisis, do not withhold steroids – they are life-saving."
        },
        {
            q: "What is the most common cause of death in untreated adrenal crisis?",
            options: ["Hypoglycemia", "Cardiovascular collapse", "Hyperkalemia", "Seizures"],
            correct: 1,
            explanation: "Hypotension and shock from lack of cortisol and aldosterone can be fatal."
        },
        {
            q: "A patient with adrenal crisis is unresponsive to fluids. What is the next step?",
            options: ["Repeat fluids", "Administer vasopressors", "Give hydrocortisone", "Transport immediately"],
            correct: 2,
            explanation: "Steroids are essential; do not delay."
        },
        {
            q: "What is the dose of dexamethasone if hydrocortisone is not available?",
            options: ["2-4 mg IV", "10-15 mg IV", "20 mg IV", "0.5 mg IV"],
            correct: 0,
            explanation: "Dexamethasone 4-8 mg IV is acceptable."
        },
        {
            q: "Which of the following should be monitored closely in adrenal crisis?",
            options: ["Blood pressure", "Heart rhythm", "Oxygen saturation", "All of the above"],
            correct: 3,
            explanation: "Continuous monitoring is essential."
        },
        {
            q: "What is the typical Glasgow Coma Scale score in severe adrenal crisis?",
            options: ["Normal", "Mildly decreased", "Severely decreased due to hypoglycemia and hypotension", "Always normal"],
            correct: 2,
            explanation: "Altered mental status is common from hypotension and hypoglycemia."
        },
        {
            q: "Why should you not delay steroids for diagnostic tests?",
            options: ["Tests are unreliable", "Steroids are harmless", "Delaying increases mortality", "All of the above"],
            correct: 2,
            explanation: "Early steroid administration reduces mortality."
        },
        {
            q: "What is the preferred IV fluid for resuscitation in adrenal crisis?",
            options: ["Dextrose 5%", "Normal saline", "Ringer’s lactate", "Colloids"],
            correct: 1,
            explanation: "Isotonic crystalloid (normal saline) is recommended."
        },
        {
            q: "A patient with adrenal insufficiency develops vomiting. They cannot take oral steroids. What should you do?",
            options: ["Give IM hydrocortisone", "Wait for hospital", "Give oral steroids if tolerated", "Give fluids only"],
            correct: 0,
            explanation: "IM hydrocortisone is indicated when oral route is not possible."
        },
        {
            q: "Which medication may precipitate adrenal crisis?",
            options: ["Aspirin", "Metformin", "Etomidate", "Paracetamol"],
            correct: 2,
            explanation: "Etomidate (used for rapid sequence intubation) can suppress adrenal function."
        },
        {
            q: "What is the KPI for adrenal crisis management?",
            options: ["Fluid administration", "Hydrocortisone given within 30 minutes", "Blood glucose checked", "All of the above"],
            correct: 3,
            explanation: "All are important performance indicators."
        },
        {
            q: "What is the role of hydrocortisone in adrenal crisis?",
            options: ["Replaces cortisol", "Reverses hypoglycemia", "Improves vascular tone", "All of the above"],
            correct: 3,
            explanation: "Hydrocortisone provides both glucocorticoid and mineralocorticoid activity, improving blood pressure and glucose."
        },
        {
            q: "A known Addisonian patient has been vomiting for 24 hours. What should you suspect?",
            options: ["Gastroenteritis", "Adrenal crisis", "Food poisoning", "Appendicitis"],
            correct: 1,
            explanation: "Vomiting and inability to take oral steroids can precipitate adrenal crisis."
        },
        {
            q: "What is the recommended dose of 50% dextrose in an adult with hypoglycemia and adrenal crisis?",
            options: ["25 g IV (50 mL)", "50 g IV", "10 g IV", "100 mL of 10% dextrose"],
            correct: 0,
            explanation: "Standard adult dose is 25 g (50 mL of 50% dextrose)."
        },
        {
            q: "After administering hydrocortisone, what should you expect?",
            options: ["Increased heart rate", "Rise in blood pressure", "Decreased consciousness", "Seizures"],
            correct: 1,
            explanation: "Blood pressure should improve within 30-60 minutes."
        },
        {
            q: "What should you do if a patient with adrenal crisis has a seizure?",
            options: ["Give diazepam", "Check glucose", "Support airway", "All of the above"],
            correct: 3,
            explanation: "Seizure may be due to hypoglycemia or hypotension; treat ABCs and glucose."
        },
        {
            q: "Which of the following is NOT a sign of adrenal crisis?",
            options: ["Hyperpigmentation", "Hypertension", "Abdominal pain", "Hypoglycemia"],
            correct: 1,
            explanation: "Hypertension is not a sign; hypotension is typical."
        },
        {
            q: "What is the primary goal of prehospital management?",
            options: ["Definitive diagnosis", "Stabilization and rapid transport", "Withholding steroids", "IV antibiotics"],
            correct: 1,
            explanation: "Stabilize with fluids and steroids, then transport."
        },
        {
            q: "When should you suspect adrenal crisis in an undiagnosed patient?",
            options: ["Unexplained shock", "Hypotension not responding to fluids", "Nausea, vomiting, weakness", "All of the above"],
            correct: 3,
            explanation: "Adrenal crisis should be considered in any patient with shock, especially with gastrointestinal symptoms."
        },
        {
            q: "What is the effect of hydrocortisone on potassium?",
            options: ["Increases potassium", "Lowers potassium", "No effect", "Causes hyperkalemia"],
            correct: 1,
            explanation: "Hydrocortisone has mineralocorticoid activity, promoting potassium excretion."
        }
    ],
    flashcards: [
        { category: "Definition", question: "What is adrenal insufficiency?", answer: "A condition where the adrenal glands do not produce enough cortisol (and often aldosterone)." },
        { category: "Addisonian crisis", question: "What is an Addisonian crisis?", answer: "Acute, life-threatening adrenal insufficiency with hypotension, shock, and altered mental status." },
        { category: "Precipitants", question: "Name three common triggers of adrenal crisis.", answer: "Infection, trauma, surgery, stress, vomiting/diarrhea, or sudden cessation of steroids." },
        { category: "Symptoms", question: "What are typical symptoms of adrenal crisis?", answer: "Weakness, nausea, vomiting, abdominal pain, confusion, hypotension, hypoglycemia." },
        { category: "Physical signs", question: "What physical sign may suggest chronic adrenal insufficiency?", answer: "Hyperpigmentation of skin and mucous membranes (due to high ACTH)." },
        { category: "Hydrocortisone dose", question: "What is the dose of hydrocortisone for adrenal crisis?", answer: "100 mg IV/IM." },
        { category: "Alternative steroids", question: "If hydrocortisone is unavailable, what can you use?", answer: "Methylprednisolone 50-100 mg IV or dexamethasone 4-8 mg IV." },
        { category: "Fluid resuscitation", question: "How much fluid should be given?", answer: "500-1000 mL normal saline bolus, reassess." },
        { category: "Hypoglycemia treatment", question: "What glucose level requires treatment?", answer: "<70 mg/dL; give 25 g 50% dextrose IV." },
        { category: "Electrolyte abnormalities", question: "What electrolyte changes occur in adrenal crisis?", answer: "Hyponatremia, hyperkalemia, hypoglycemia." },
        { category: "Monitoring", question: "What should you monitor continuously?", answer: "ECG, SpO2, blood pressure (every 5-10 min), mental status." },
        { category: "Response time", question: "How soon does hydrocortisone work?", answer: "Improvement usually seen within 30-60 minutes." },
        { category: "KPI", question: "What is a key performance indicator for adrenal crisis?", answer: "Hydrocortisone administered within 30 minutes of identification." },
        { category: "Steroid withdrawal", question: "Why do chronic steroid users need stress doses?", answer: "Adrenal suppression means they cannot mount a stress response." },
        { category: "Etomidate risk", question: "Why should etomidate be used with caution?", answer: "It can cause adrenal suppression and precipitate crisis." },
        { category: "Documentation", question: "What must be documented regarding steroid administration?", answer: "Drug, dose, route, time." },
        { category: "Transport priority", question: "What is the transport priority for adrenal crisis?", answer: "Priority to nearest appropriate facility after stabilization." },
        { category: "Common misdiagnosis", question: "What is adrenal crisis often mistaken for?", answer: "Septic shock, hypovolemic shock, gastroenteritis." },
        { category: "Prevention", question: "How can adrenal crisis be prevented?", answer: "Stress-dose steroids during illness/injury and patient education." },
        { category: "Hydrocortisone mechanism", question: "How does hydrocortisone help?", answer: "Replaces cortisol, improves vascular tone, corrects electrolyte imbalance, increases glucose." }
    ],
    critical: [
        {
            id: "crit_6_3_1",
            scenario: "A 55-year-old known Addison’s disease patient is found collapsed at home. He is confused, BP 80/50, HR 120, blood glucose 45 mg/dL. What is your priority?",
            question: "What should you do first?",
            options: [
                { t: "Give 50% dextrose 25 g IV", f: "Correct. Hypoglycemia is life-threatening; correct glucose first." },
                { t: "Administer hydrocortisone 100 mg IV", f: "Important, but glucose should be given immediately." },
                { t: "Start fluid bolus", f: "Also needed, but glucose first." },
                { t: "Transport immediately", f: "Not without treatment." }
            ],
            correct: 0,
            explanation: "Hypoglycemia must be treated urgently with IV dextrose. After that, give hydrocortisone and fluids.",
            kpi: "Glucose checked and treated; hydrocortisone administered."
        },
        {
            id: "crit_6_3_2",
            scenario: "A 28-year-old with known Addison’s presents with vomiting and weakness. She is alert but pale. BP 90/60, HR 110. She took her morning hydrocortisone. What should you do?",
            question: "What is the best next step?",
            options: [
                { t: "Administer additional hydrocortisone 100 mg IV", f: "Correct. Stress doses are needed despite morning dose." },
                { t: "Wait for hospital", f: "She needs immediate steroids." },
                { t: "Give fluids only", f: "Inadequate without steroids." },
                { t: "Check cortisol level", f: "Not possible prehospital; treat empirically." }
            ],
            correct: 0,
            explanation: "Even if she took her maintenance dose, stress dosing is required during illness.",
            kpi: "Hydrocortisone given and documented."
        },
        {
            id: "crit_6_3_3",
            scenario: "A 45-year-old with no known adrenal disease presents with shock after a bout of gastroenteritis. He does not respond to two fluid boluses. What should you suspect?",
            question: "What is the most likely diagnosis and next step?",
            options: [
                { t: "Septic shock – start antibiotics", f: "Possible, but adrenal crisis should be considered." },
                { t: "Adrenal crisis – give hydrocortisone", f: "Correct. Unexplained shock after illness with poor fluid response is classic." },
                { t: "Cardiogenic shock – give dopamine", f: "Not indicated." },
                { t: "Hypovolemia – give more fluids", f: "Already done." }
            ],
            correct: 1,
            explanation: "Adrenal crisis can present as shock not responding to fluids; empiric steroids are indicated.",
            kpi: "Steroids administered without delay."
        },
        {
            id: "crit_6_3_4",
            scenario: "You administer hydrocortisone 100 mg IV and 1000 mL normal saline to a patient with adrenal crisis. His BP remains 85/55. What should you do next?",
            question: "What is your next action?",
            options: [
                { t: "Give another fluid bolus", f: "Correct. Repeat fluid bolus as needed." },
                { t: "Give additional hydrocortisone", f: "One dose is usually sufficient initially." },
                { t: "Start norepinephrine infusion", f: "Consider if refractory, but fluids first." },
                { t: "Transport immediately", f: "Stabilize before transport." }
            ],
            correct: 0,
            explanation: "Repeat fluid boluses until BP improves. Steroid effect may take time.",
            kpi: "Fluid response documented."
        },
        {
            id: "crit_6_3_5",
            scenario: "A patient with adrenal crisis becomes unresponsive with agonal breathing after IV dextrose. What is your immediate priority?",
            question: "What should you do?",
            options: [
                { t: "Re-check glucose", f: "Not the first step if breathing is agonal." },
                { t: "Open airway and provide BVM ventilation", f: "Correct. Airway and breathing come first." },
                { t: "Give naloxone", f: "Not indicated." },
                { t: "Give additional hydrocortisone", f: "Will not reverse airway compromise." }
            ],
            correct: 1,
            explanation: "Airway and breathing are always first. Support ventilation immediately.",
            kpi: "Airway management performed."
        }
    ]
};