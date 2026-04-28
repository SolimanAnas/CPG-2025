/* ========== Chapter 6.4 – Anaphylaxis / Allergic Reaction ========== */
window.CPG_DATA = {
    id: "c6-4",
    title: "Anaphylaxis / Allergic Reaction",
    shortTitle: "6.4 Anaphylaxis / Allergic Reaction",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">??? Anaphylaxis / Allergic Reaction</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Rapidly identify and treat life-threatening anaphylaxis or severe allergic reactions.</li>
                <li>Alleviate symptoms and prevent progression through timely administration of medications.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Patients presenting with signs and symptoms of an allergic reaction or anaphylaxis, including:
                    <ul>
                        <li>Mild to moderate allergic reaction: Localized urticaria (hives), itching, or mild swelling without systemic symptoms.</li>
                        <li>Anaphylaxis: Systemic symptoms involving two or more organ systems (e.g., skin/mucosa, respiratory, cardiovascular, gastrointestinal).</li>
                        <li>Respiratory distress (e.g., wheezing, stridor, shortness of breath).</li>
                        <li>Hypotension (SBP <90 mmHg in adults, or age-specific for pediatrics).</li>
                        <li>Angioedema (swelling of face, lips, tongue, or throat).</li>
                        <li>Gastrointestinal symptoms (e.g., nausea, vomiting, abdominal pain).</li>
                    </ul>
                </li>
                <li>Known or suspected exposure to an allergen (e.g., food, medication, insect sting, environmental trigger).</li>
                <li>History of previous allergic reactions or anaphylaxis.</li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>None noted.</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Allergen Exposure History:</strong> Identify recent exposure to potential allergens (foods, medications, insect stings, latex). Confirm history of known allergies or previous anaphylaxis. Check for medical alert bracelets.</li>
                <li><strong>Severity Assessment:</strong> Differentiate mild/moderate allergic reaction (localized hives) from anaphylaxis (systemic involvement of =2 organ systems or hypotension).</li>
                <li><strong>Airway:</strong> Assess for stridor, hoarseness, throat swelling.</li>
                <li><strong>Breathing:</strong> Evaluate for wheezing, bronchospasm, tachypnea, hypoxia.</li>
                <li><strong>Circulation:</strong> Check for hypotension, tachycardia, poor perfusion.</li>
                <li><strong>Skin/Mucosa:</strong> Urticaria, angioedema, flushing.</li>
                <li><strong>Gastrointestinal:</strong> Nausea, vomiting, abdominal pain.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Primary and Secondary Surveys:</strong> Perform as per Universal Care CPG.</li>
                <li><strong>Consider ALS back-up:</strong> For anaphylaxis, severe symptoms, or anticipated deterioration.</li>
                <li><strong>Oxygen:</strong> Titrate to maintain SpO2 =94% if hypoxia or respiratory distress.</li>
                <li><strong>Mild Reaction:</strong> Generally does not require treatment; recommend transport and reassess.</li>
                <li><strong>Moderate Reaction:</strong>
                    <ul>
                        <li>Diphenhydramine: Adults 25-50 mg IV/IM/PO; Pediatrics 1 mg/kg (max 50 mg).</li>
                        <li>Hydrocortisone: Adults 100-200 mg IV/IM; Pediatrics 2 mg/kg (max 200 mg).</li>
                        <li>If bronchospasm: Salbutamol 2.5-5 mg nebulized; Combivent (adults only) 0.5 mg ipratropium + 3 mg salbutamol.</li>
                    </ul>
                </li>
                <li><strong>Severe Reaction (Anaphylaxis):</strong>
                    <ul>
                        <li><strong>Epinephrine (Adrenaline):</strong>
                            <ul>
                                <li>Adults: 0.3-0.5 mg IM (1:1000) in anterolateral thigh. Repeat every 5-15 minutes as needed.</li>
                                <li>Pediatrics: 0.01 mg/kg IM (max 0.3 mg). Use pediatric EpiPen if available.</li>
                            </ul>
                        </li>
                        <li>Diphenhydramine and hydrocortisone as above.</li>
                        <li>IV fluids: Normal saline 500-1000 mL bolus (adults) or 20 mL/kg (pediatrics) for hypotension/shock.</li>
                        <li>Consider repeat adrenaline if no improvement.</li>
                    </ul>
                </li>
                <li><strong>Establish IV Access:</strong> For moderate to severe cases.</li>
                <li><strong>Patient Reassessment:</strong> Every 5-10 minutes; monitor for deterioration or improvement.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Airway edema can progress rapidly; have a low threshold for IM adrenaline.</li>
                <li>Invasive airway management may be required if symptoms do not resolve.</li>
                <li>Use caution with epinephrine in patients with known cardiovascular disease; consult Telemedicine if needed.</li>
                <li>Elderly patients may present atypically (e.g., hypotension without skin symptoms).</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li>Epinephrine is the first-line treatment for anaphylaxis; do not delay.</li>
                <li>Hydrocortisone should be given after epinephrine.</li>
                <li>All patients who have received epinephrine or have severe reactions must be transported to hospital.</li>
                <li>Notify Dispatch 2 of patients with significant airway edema or poor response to treatment.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Allergen exposure, symptom onset and progression.</li>
                <li>Vital signs, SpO2, airway/respiratory/cardiovascular status.</li>
                <li>Medications given: dose, route, time, response.</li>
                <li>IV fluids, oxygen therapy.</li>
                <li>Hospital notification and transport details.</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Administer adrenaline for anaphylaxis within 5 minutes of recognition.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What is the first-line medication for anaphylaxis?",
            options: ["Diphenhydramine", "Hydrocortisone", "Epinephrine (adrenaline)", "Salbutamol"],
            correct: 2,
            explanation: "Epinephrine is the first-line treatment for anaphylaxis; it reverses bronchospasm, hypotension, and mucosal edema."
        },
        {
            q: "What is the recommended IM dose of epinephrine for an adult with anaphylaxis?",
            options: ["0.1 mg", "0.3-0.5 mg", "1 mg", "2 mg"],
            correct: 1,
            explanation: "Adult IM epinephrine dose is 0.3-0.5 mg (1:1000)."
        },
        {
            q: "A child with anaphylaxis weighs 20 kg. What is the correct IM epinephrine dose?",
            options: ["0.01 mg/kg (0.2 mg)", "0.1 mg/kg (2 mg)", "0.3 mg total", "0.5 mg total"],
            correct: 0,
            explanation: "Pediatric epinephrine dose is 0.01 mg/kg IM (max 0.3 mg)."
        },
        {
            q: "What is the preferred site for IM epinephrine in anaphylaxis?",
            options: ["Deltoid", "Ventrogluteal", "Anterolateral thigh", "Dorsogluteal"],
            correct: 2,
            explanation: "The anterolateral thigh provides the best absorption for IM epinephrine."
        },
        {
            q: "A patient with anaphylaxis remains hypotensive after epinephrine and 1 L normal saline. What should you do?",
            options: ["Give a second dose of epinephrine", "Give diphenhydramine", "Start dopamine infusion", "Transport without further intervention"],
            correct: 0,
            explanation: "Repeat epinephrine every 5-15 minutes if symptoms persist or deteriorate."
        },
        {
            q: "Which of the following is NOT a sign of anaphylaxis?",
            options: ["Wheezing", "Urticaria", "Bradycardia", "Hypotension"],
            correct: 2,
            explanation: "Anaphylaxis typically causes tachycardia due to compensatory mechanisms and vasodilation."
        },
        {
            q: "What is the dose of diphenhydramine for an adult with moderate allergic reaction?",
            options: ["10 mg", "25-50 mg", "100 mg", "200 mg"],
            correct: 1,
            explanation: "Diphenhydramine adult dose is 25-50 mg IV/IM/PO."
        },
        {
            q: "What is the dose of hydrocortisone for an adult with anaphylaxis?",
            options: ["25 mg", "50 mg", "100-200 mg", "500 mg"],
            correct: 2,
            explanation: "Hydrocortisone 100-200 mg IV/IM is used as an adjunct in anaphylaxis."
        },
        {
            q: "A patient with anaphylaxis develops wheezing. Which medication should be administered?",
            options: ["Diphenhydramine", "Salbutamol nebulized", "Hydrocortisone", "All of the above"],
            correct: 3,
            explanation: "Salbutamol relieves bronchospasm; hydrocortisone and diphenhydramine address inflammation and histamine release."
        },
        {
            q: "What is the maximum number of epinephrine doses recommended prehospital?",
            options: ["1", "2", "3", "No limit"],
            correct: 1,
            explanation: "No strict limit, but repeated doses should be guided by clinical response; typically up to 2-3 doses may be needed."
        },
        {
            q: "A patient with anaphylaxis has stridor and difficulty breathing. What is the priority?",
            options: ["Diphenhydramine", "IV fluids", "Epinephrine IM", "Hydrocortisone"],
            correct: 2,
            explanation: "Epinephrine is the priority for airway edema; it rapidly reduces swelling."
        },
        {
            q: "What is the target SpO2 for a patient with anaphylaxis?",
            options: ["=90%", "=94%", "=88%", "100%"],
            correct: 1,
            explanation: "Target SpO2 =94% to prevent hypoxia."
        },
        {
            q: "Which of the following is a contraindication to giving epinephrine in anaphylaxis?",
            options: ["Pregnancy", "Age >65 years", "Hypertension", "None – it is life-saving"],
            correct: 3,
            explanation: "There are no absolute contraindications to epinephrine in anaphylaxis; the benefits outweigh risks."
        },
        {
            q: "A patient with mild urticaria after eating peanuts has no respiratory symptoms. What is the appropriate management?",
            options: ["Epinephrine IM", "Diphenhydramine PO and observation", "IV fluids", "Transport immediately"],
            correct: 1,
            explanation: "Mild reactions may be treated with oral antihistamines and monitored for progression."
        },
        {
            q: "What is the dose of salbutamol nebulized for an adult with bronchospasm in anaphylaxis?",
            options: ["2.5 mg", "5 mg", "10 mg", "0.5 mg"],
            correct: 1,
            explanation: "Adult salbutamol nebulized dose is 5 mg."
        },
        {
            q: "Which of the following is an indication for IV fluids in anaphylaxis?",
            options: ["Tachycardia", "Hypotension", "Urticaria", "Wheezing"],
            correct: 1,
            explanation: "IV fluids are indicated for hypotension or shock to maintain perfusion."
        },
        {
            q: "A child with anaphylaxis has hypotension after epinephrine. What volume of normal saline should be given?",
            options: ["5 mL/kg", "10 mL/kg", "20 mL/kg", "40 mL/kg"],
            correct: 2,
            explanation: "Pediatric fluid bolus is 20 mL/kg crystalloid, repeated as needed."
        },
        {
            q: "What is the maximum adult dose of diphenhydramine?",
            options: ["25 mg", "50 mg", "100 mg", "200 mg"],
            correct: 1,
            explanation: "Maximum single dose is 50 mg."
        },
        {
            q: "A patient with anaphylaxis receives epinephrine but remains in respiratory distress. What should you consider?",
            options: ["Repeat epinephrine", "Nebulized salbutamol", "Airway management (e.g., intubation)", "All of the above"],
            correct: 3,
            explanation: "Reassess and escalate treatment; prepare for airway compromise."
        },
        {
            q: "What is the dose of Combivent for an adult with bronchospasm?",
            options: ["0.5 mg ipratropium + 3 mg salbutamol", "1 mg ipratropium + 5 mg salbutamol", "0.25 mg ipratropium + 2.5 mg salbutamol", "Not recommended"],
            correct: 0,
            explanation: "Combivent nebule contains 0.5 mg ipratropium bromide and 3 mg salbutamol."
        },
        {
            q: "Which of the following is NOT a component of the definition of anaphylaxis?",
            options: ["Involvement of at least two organ systems", "Hypotension", "Fever", "Respiratory distress"],
            correct: 2,
            explanation: "Fever is not a feature of anaphylaxis; it suggests infection."
        },
        {
            q: "How often can epinephrine be repeated in anaphylaxis?",
            options: ["Every 5-15 minutes as needed", "Once only", "Every 30 minutes", "Only after IV fluids"],
            correct: 0,
            explanation: "Epinephrine may be repeated every 5-15 minutes if symptoms persist."
        },
        {
            q: "What is the mechanism of action of epinephrine in anaphylaxis?",
            options: ["Alpha-adrenergic vasoconstriction", "Beta-adrenergic bronchodilation", "Mast cell stabilization", "All of the above"],
            correct: 3,
            explanation: "Epinephrine has alpha and beta effects: vasoconstriction, bronchodilation, and reduces mast cell mediator release."
        },
        {
            q: "A patient with known allergy to peanuts develops urticaria, abdominal pain, and wheezing. What is the priority?",
            options: ["Oral diphenhydramine", "IM epinephrine", "IV hydrocortisone", "Nebulized salbutamol"],
            correct: 1,
            explanation: "Two organ systems involved (skin and respiratory) defines anaphylaxis; epinephrine is first line."
        },
        {
            q: "What is the initial dose of epinephrine for a 5-year-old child (weight 18 kg)?",
            options: ["0.15 mg IM (EpiPen Jr)", "0.3 mg IM", "0.01 mg/kg = 0.18 mg", "0.5 mg IM"],
            correct: 0,
            explanation: "For children, either use weight-based 0.01 mg/kg (0.18 mg) or pediatric EpiPen 0.15 mg. Both are acceptable."
        },
        {
            q: "What is the role of hydrocortisone in anaphylaxis?",
            options: ["Immediate relief of bronchospasm", "Prevents biphasic reactions", "Treats hypotension", "Antihistamine effect"],
            correct: 1,
            explanation: "Corticosteroids help prevent biphasic reactions and reduce inflammation, but are not first line."
        },
        {
            q: "A patient with anaphylaxis has been given epinephrine but remains hypotensive. Which fluid is preferred?",
            options: ["5% dextrose", "Normal saline", "Ringer’s lactate", "Colloids"],
            correct: 1,
            explanation: "Isotonic crystalloid (normal saline) is preferred for resuscitation."
        },
        {
            q: "Which of the following is a common trigger for anaphylaxis in children?",
            options: ["Peanuts", "Milk", "Insect stings", "All of the above"],
            correct: 3,
            explanation: "Common triggers include foods, insect stings, medications, and latex."
        },
        {
            q: "What is the maximum total dose of epinephrine recommended in the field?",
            options: ["0.5 mg", "1 mg", "2 mg", "No absolute maximum; titrate to effect"],
            correct: 3,
            explanation: "Epinephrine should be titrated to clinical response; repeated doses are guided by symptoms and response."
        },
        {
            q: "After administering epinephrine for anaphylaxis, the patient’s wheezing improves. What should you do next?",
            options: ["Transport immediately", "Give diphenhydramine and hydrocortisone", "Repeat epinephrine", "Discharge home"],
            correct: 1,
            explanation: "Continue care with antihistamines and steroids; all anaphylaxis patients require transport."
        }
    ],
    flashcards: [
        { category: "Definition", question: "What is anaphylaxis?", answer: "A severe, life-threatening systemic allergic reaction involving two or more organ systems (e.g., skin, respiratory, cardiovascular, GI)." },
        { category: "First-line treatment", question: "What is the first-line treatment for anaphylaxis?", answer: "Epinephrine (adrenaline) IM." },
        { category: "Epinephrine adult dose", question: "What is the IM dose of epinephrine for an adult?", answer: "0.3-0.5 mg (1:1000) in the anterolateral thigh." },
        { category: "Epinephrine pediatric dose", question: "What is the IM dose of epinephrine for a child?", answer: "0.01 mg/kg (max 0.3 mg)." },
        { category: "Site of injection", question: "Where should IM epinephrine be given?", answer: "Anterolateral thigh (vastus lateralis)." },
        { category: "Diphenhydramine dose", question: "What is the dose of diphenhydramine for moderate allergic reaction?", answer: "Adults 25-50 mg; Pediatrics 1 mg/kg (max 50 mg)." },
        { category: "Hydrocortisone dose", question: "What is the dose of hydrocortisone for anaphylaxis?", answer: "Adults 100-200 mg IV/IM; Pediatrics 2 mg/kg (max 200 mg)." },
        { category: "Salbutamol dose", question: "What is the dose of nebulized salbutamol for bronchospasm?", answer: "Adults 5 mg; Pediatrics (<5 years) 2.5 mg, (>5 years) 5 mg." },
        { category: "Combivent dose", question: "What is the dose of Combivent for bronchospasm?", answer: "Adults only: 0.5 mg ipratropium + 3 mg salbutamol." },
        { category: "IV fluids", question: "When are IV fluids indicated in anaphylaxis?", answer: "Hypotension or signs of shock; adult bolus 500-1000 mL, pediatric 20 mL/kg." },
        { category: "Airway compromise", question: "What are signs of airway compromise in anaphylaxis?", answer: "Stridor, hoarseness, throat swelling, drooling." },
        { category: "Biphasic reaction", question: "What is a biphasic reaction?", answer: "Recurrence of anaphylaxis symptoms after initial resolution, typically within 1-8 hours." },
        { category: "KPI", question: "What is the key performance indicator for anaphylaxis?", answer: "Administer adrenaline within 5 minutes of recognition." },
        { category: "Contraindications to epinephrine", question: "What are the contraindications to epinephrine in anaphylaxis?", answer: "None – it is life-saving; use even with cardiovascular disease." },
        { category: "Allergen identification", question: "Why is identifying the allergen important?", answer: "To prevent future exposure and guide management." },
        { category: "Monitoring after epinephrine", question: "How often should a patient with anaphylaxis be reassessed?", answer: "Every 5-10 minutes for vital signs and response." },
        { category: "Transport decision", question: "Should all anaphylaxis patients be transported to hospital?", answer: "Yes, even if symptoms resolve, due to risk of biphasic reaction." },
        { category: "Medications that may cause anaphylaxis", question: "Name three common medications that can cause anaphylaxis.", answer: "Penicillins, NSAIDs, aspirin, vaccines, contrast media." },
        { category: "Food triggers", question: "What are common food triggers for anaphylaxis?", answer: "Peanuts, tree nuts, fish, shellfish, milk, eggs, wheat, soy." },
        { category: "Role of antihistamines", question: "What is the role of antihistamines in anaphylaxis?", answer: "Adjunct to epinephrine; relieve itching and urticaria but do not reverse respiratory or cardiovascular effects." }
    ],
    critical: [
        {
            id: "crit_6_4_1",
            scenario: "You are called to a restaurant for a 35-year-old male who ate peanuts and now has difficulty breathing, hives, and a swollen tongue. BP 100/70, HR 110, SpO2 91% on room air. What is your priority?",
            question: "What should you do first?",
            options: [
                { t: "Administer diphenhydramine 50 mg IM", f: "Antihistamines are not first line for airway compromise." },
                { t: "Administer epinephrine 0.3 mg IM", f: "Correct. Epinephrine is indicated for anaphylaxis with respiratory symptoms." },
                { t: "Start high-flow oxygen", f: "Oxygen is important, but epinephrine is the priority." },
                { t: "Establish IV access", f: "IV access is secondary to immediate epinephrine." }
            ],
            correct: 1,
            explanation: "Epinephrine is the first-line treatment for anaphylaxis, especially with airway involvement.",
            kpi: "Epinephrine administered within 5 minutes."
        },
        {
            id: "crit_6_4_2",
            scenario: "A 45-year-old woman stung by a wasp develops wheezing, hypotension (BP 80/50), and generalized urticaria. She receives epinephrine 0.3 mg IM. Five minutes later, her BP is 85/55 and wheezing persists. What should you do next?",
            question: "What is the appropriate next step?",
            options: [
                { t: "Repeat epinephrine 0.3 mg IM", f: "Correct. Persistent symptoms warrant repeat epinephrine." },
                { t: "Give diphenhydramine 50 mg IV", f: "Antihistamines are adjuncts, not primary." },
                { t: "Administer hydrocortisone 100 mg IV", f: "Steroids are not immediate life-saving agents." },
                { t: "Start IV fluids", f: "Fluids are important, but epinephrine is still needed." }
            ],
            correct: 0,
            explanation: "If symptoms persist after initial epinephrine, repeat doses every 5-15 minutes as needed.",
            kpi: "Repeat epinephrine given and response documented."
        },
        {
            id: "crit_6_4_3",
            scenario: "A 6-year-old child (weight 22 kg) with known peanut allergy develops lip swelling, hives, and stridor after eating a snack. The child is alert but anxious. What is the correct epinephrine dose?",
            question: "Which dose should you administer?",
            options: [
                { t: "0.15 mg IM (pediatric EpiPen)", f: "Correct for weight 10-25 kg." },
                { t: "0.3 mg IM (adult EpiPen)", f: "Adult dose is too high for this weight." },
                { t: "0.01 mg/kg = 0.22 mg IM", f: "Also acceptable, but pediatric EpiPen is easier." },
                { t: "0.5 mg IM", f: "Too high." }
            ],
            correct: 0,
            explanation: "The pediatric EpiPen (0.15 mg) is appropriate for children weighing 10-25 kg. Weight-based 0.01 mg/kg is also correct but the auto-injector is preferred for rapid administration.",
            kpi: "Epinephrine administered."
        },
        {
            id: "crit_6_4_4",
            scenario: "A patient with anaphylaxis receives epinephrine and improves. Ten minutes later, while en route, he becomes wheezy again and his BP drops to 80/50. What is the most likely explanation?",
            question: "What should you suspect and do?",
            options: [
                { t: "Biphasic reaction; administer another dose of epinephrine", f: "Correct. Recurrence of symptoms after initial improvement is typical of biphasic anaphylaxis." },
                { t: "Inadequate initial dose; give diphenhydramine", f: "Diphenhydramine will not reverse hypotension." },
                { t: "Pneumothorax; perform needle decompression", f: "No evidence of tension pneumothorax." },
                { t: "Normal course; continue transport without intervention", f: "Deterioration requires immediate action." }
            ],
            correct: 0,
            explanation: "Biphasic reactions can occur; repeat epinephrine is indicated.",
            kpi: "Repeat epinephrine administered."
        },
        {
            id: "crit_6_4_5",
            scenario: "A 70-year-old male with known coronary artery disease develops anaphylaxis after a bee sting. He has hives, stridor, and BP 85/55. What is your main concern regarding treatment?",
            question: "Should you withhold epinephrine because of his cardiac history?",
            options: [
                { t: "Yes, epinephrine could cause a heart attack", f: "Incorrect; epinephrine is life-saving even with cardiac disease." },
                { t: "No, epinephrine is indicated; the risk of anaphylaxis outweighs cardiac risk", f: "Correct. Anaphylaxis can be fatal; epinephrine is essential." },
                { t: "Give a reduced dose of epinephrine", f: "Full dose is recommended; titrate based on response." },
                { t: "Use IV fluids and steroids instead", f: "Inadequate for airway and hypotension." }
            ],
            correct: 1,
            explanation: "There are no absolute contraindications to epinephrine in anaphylaxis; the benefit far outweighs the risk.",
            kpi: "Epinephrine administered despite cardiac history."
        }
    ]
};