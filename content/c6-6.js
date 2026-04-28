/* ========== Chapter 6.6 – Epistaxis ========== */
window.CPG_DATA = {
    id: "c6-6",
    title: "Epistaxis",
    shortTitle: "6.6 Epistaxis",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">?? Epistaxis (Nosebleed)</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Control acute epistaxis to prevent airway compromise or significant blood loss.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Patients presenting with epistaxis (nosebleed), including:
                    <ul>
                        <li>Active nasal bleeding, unilateral or bilateral.</li>
                        <li>Mild, self-limiting bleeding to severe, persistent hemorrhage.</li>
                        <li>Associated symptoms such as dizziness, weakness, or pallor due to blood loss.</li>
                        <li>Suspected underlying causes such as hypertension, trauma, coagulopathy, or medication use (e.g., anticoagulants).</li>
                    </ul>
                </li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>Patients with no active bleeding or resolved epistaxis prior to arrival.</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Patient History:</strong> Onset, duration, frequency; triggers (trauma, dry environment); medication use (anticoagulants, antiplatelets, nasal sprays); history of bleeding disorders, hypertension, or recent nasal procedures.</li>
                <li><strong>Bleeding Severity:</strong> Assess the amount (dripping, streaming, clots), site (anterior vs. posterior), and any blood in the oropharynx (posterior bleeding).</li>
                <li><strong>Airway and Swallowing:</strong> Check for blood pooling in the oropharynx, difficulty swallowing, or airway compromise.</li>
                <li><strong>Signs of Shock:</strong> Pallor, tachycardia, hypotension, or altered mental status indicate significant blood loss.</li>
                <li><strong>Determine Triage Category:</strong> Red priority for uncontrolled bleeding, airway compromise, or signs of shock.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Primary Survey:</strong> Ensure airway patency, breathing, and circulation. If airway is compromised, suction and position appropriately.</li>
                <li><strong>Positioning:</strong> Sit the patient upright with head tilted forward to prevent blood from pooling in the oropharynx. Instruct the patient to avoid swallowing blood and not to blow the nose.</li>
                <li><strong>Nasal Compression:</strong> Apply firm, continuous pressure to the soft part of the nose (alae nasi) for 10–15 minutes using a gauze pad or cloth.</li>
                <li><strong>Nasal Packing:</strong> If bleeding persists, consider nasal packing with hemostatic agents or gauze. Posterior packing requires hospital management.</li>
                <li><strong>Consider ALS back-up:</strong> For uncontrolled bleeding, signs of shock, or airway compromise. Prioritize transport; meet ALS en route.</li>
                <li><strong>IV Access and Fluid Resuscitation:</strong> For hypotension (SBP <90 mmHg in adults) or tachycardia >120 bpm, administer 500 mL bolus of normal saline (adults) or 20 mL/kg (pediatrics) as per shock protocol.</li>
                <li><strong>Patient Reassessment:</strong> Reassess bleeding every 5–10 minutes; maintain direct pressure if bleeding continues. Monitor for airway compromise or worsening blood loss.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Avoid delays in transport for patients with red flags (e.g., posterior epistaxis, significant airway).</li>
                <li>If initial attempts to stop bleeding fail, prioritize rapid transfer to hospital.</li>
                <li>Patients on anticoagulants are at higher risk; treat aggressively and transport.</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li>Anterior bleeding is usually from Kiesselbach’s plexus; posterior bleeding often requires otolaryngology intervention.</li>
                <li>Epistaxis with uncontrolled bleeding may result in severe hypovolemic shock.</li>
                <li>Ice packs applied to the bridge of the nose may help vasoconstriction (adjunctive).</li>
                <li>Hypertension may exacerbate bleeding but should not be treated emergently unless severe and causing end-organ damage.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Onset, duration, estimated blood loss, site of bleeding (anterior/posterior).</li>
                <li>Medications (anticoagulants, antiplatelets), history of bleeding disorders, trauma.</li>
                <li>Vital signs, signs of airway compromise.</li>
                <li>Interventions: nasal compression, packing, IV fluids, response.</li>
                <li>Transport decision and hospital notification.</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Document all bleeding control measures.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What is the first step in managing a patient with active epistaxis?",
            options: ["Nasal packing", "Apply ice to the bridge of the nose", "Sit the patient upright with head tilted forward and apply direct pressure", "Lay the patient flat"],
            correct: 2,
            explanation: "The patient should be seated upright with head forward to prevent aspiration, and direct pressure applied to the soft part of the nose."
        },
        {
            q: "A patient with epistaxis is on warfarin. What is a key consideration?",
            options: ["Bleeding will likely stop spontaneously", "Anticoagulation increases risk of severe bleeding; early transport is warranted", "Hold warfarin dose", "Apply a tourniquet"],
            correct: 1,
            explanation: "Anticoagulated patients are at higher risk of significant hemorrhage and require urgent evaluation."
        },
        {
            q: "What is the maximum fluid bolus for an adult with epistaxis and hypotension?",
            options: ["500 mL", "1000 mL", "2000 mL", "No fluids"],
            correct: 2,
            explanation: "For shock, adults may receive up to 2000 mL of crystalloid, reassessing after each 500 mL bolus."
        },
        {
            q: "A patient with epistaxis has blood in the oropharynx and difficulty swallowing. What should you suspect?",
            options: ["Anterior bleeding", "Posterior bleeding", "Traumatic injury", "Allergic reaction"],
            correct: 1,
            explanation: "Posterior epistaxis often presents with blood trickling into the oropharynx and may cause airway compromise."
        },
        {
            q: "How long should direct nasal compression be applied initially?",
            options: ["2–3 minutes", "5–10 minutes", "10–15 minutes", "30 minutes"],
            correct: 2,
            explanation: "Firm, continuous pressure for 10–15 minutes is recommended to allow clot formation."
        },
        {
            q: "Which of the following is a red flag in epistaxis?",
            options: ["Unilateral bleeding", "Bleeding that stops with pressure", "Hypotension and tachycardia", "History of seasonal allergies"],
            correct: 2,
            explanation: "Hypotension and tachycardia indicate significant blood loss and require urgent intervention."
        },
        {
            q: "A patient with epistaxis has a systolic BP of 160 mmHg. Should you treat the hypertension?",
            options: ["Yes, give labetalol immediately", "Yes, give GTN", "No, hypertension is common and usually not the cause; treat bleeding first", "No, give fluids to lower BP"],
            correct: 2,
            explanation: "Hypertension may exacerbate bleeding but is not typically treated in the prehospital setting unless severe with end-organ dysfunction."
        },
        {
            q: "What is the preferred position for a patient with severe epistaxis?",
            options: ["Supine", "Prone", "Semi-Fowler's with head forward", "Trendelenburg"],
            correct: 2,
            explanation: "Sitting upright with head forward prevents blood from flowing into the oropharynx and reduces aspiration risk."
        },
        {
            q: "What is the dose of normal saline bolus for an adult with epistaxis and signs of shock?",
            options: ["250 mL", "500 mL", "1000 mL", "2000 mL initially"],
            correct: 1,
            explanation: "Start with a 500 mL bolus and reassess; repeat as needed up to 2000 mL."
        },
        {
            q: "A patient with epistaxis reports taking clopidogrel. Why is this important?",
            options: ["It increases bleeding risk", "It may cause allergic reaction", "It interferes with nasal packing", "It increases blood pressure"],
            correct: 0,
            explanation: "Clopidogrel (antiplatelet) and other anticoagulants increase the risk of persistent bleeding."
        },
        {
            q: "When should nasal packing be considered?",
            options: ["For all epistaxis", "For anterior bleeding that does not stop with direct pressure", "For posterior bleeding only", "Only in the hospital"],
            correct: 1,
            explanation: "If direct pressure fails, nasal packing with hemostatic gauze may be attempted, especially for anterior bleeding."
        },
        {
            q: "What is a potential complication of posterior epistaxis?",
            options: ["Airway compromise", "Seizures", "Myocardial infarction", "Stroke"],
            correct: 0,
            explanation: "Blood can pool in the oropharynx, leading to aspiration or airway obstruction."
        },
        {
            q: "A patient with epistaxis is pale, diaphoretic, and has a heart rate of 120. What is the most likely cause?",
            options: ["Anxiety", "Pain", "Hypovolemic shock from blood loss", "Hypertensive crisis"],
            correct: 2,
            explanation: "Tachycardia and pallor suggest significant blood loss; treat for shock."
        },
        {
            q: "What is the maximum total fluid bolus for an adult with epistaxis and hypotension?",
            options: ["500 mL", "1000 mL", "2000 mL", "No maximum"],
            correct: 2,
            explanation: "2000 mL is the maximum recommended crystalloid bolus in the prehospital setting."
        },
        {
            q: "Which medication increases the risk of bleeding in epistaxis?",
            options: ["Aspirin", "Paracetamol", "Ibuprofen", "Both A and C"],
            correct: 3,
            explanation: "Aspirin and NSAIDs like ibuprofen have antiplatelet effects; anticoagulants also increase risk."
        },
        {
            q: "A patient with epistaxis has a history of hemophilia. What is the priority?",
            options: ["Apply ice", "Administer factor replacement", "Control bleeding and transport urgently", "Give oral vitamin K"],
            correct: 2,
            explanation: "Patients with bleeding disorders require rapid transport for specialized care; factor replacement is not available prehospital."
        },
        {
            q: "What is the correct technique for direct nasal compression?",
            options: ["Pinch the bony bridge of the nose", "Pinch the soft part of the nose (alae nasi) for 10–15 minutes", "Apply pressure above the eyebrows", "Press the upper lip"],
            correct: 1,
            explanation: "Compress the soft cartilaginous part of the nose against the septum to apply direct pressure to the bleeding site."
        },
        {
            q: "A patient with epistaxis is anxious and breathing rapidly. What is the appropriate intervention?",
            options: ["Sedation", "Oxygen via non-rebreather", "Calm reassurance and encourage slow breathing", "Bag-valve mask ventilation"],
            correct: 2,
            explanation: "Anxiety is common; calm the patient and avoid unnecessary interventions unless hypoxic."
        },
        {
            q: "What is the fluid of choice for resuscitation in hemorrhagic shock from epistaxis?",
            options: ["Dextrose 5%", "Normal saline", "Ringer's lactate", "Colloids"],
            correct: 1,
            explanation: "Isotonic crystalloid (normal saline) is preferred for initial resuscitation."
        },
        {
            q: "A patient with epistaxis has a blood pressure of 80/50 after 500 mL normal saline. What should you do next?",
            options: ["Give another 500 mL bolus", "Start dopamine", "Transport immediately without further fluids", "Give hypertonic saline"],
            correct: 0,
            explanation: "Repeat fluid boluses until SBP =90 mmHg or signs of perfusion improve, up to 2000 mL total."
        },
        {
            q: "Why should a patient with epistaxis avoid blowing the nose?",
            options: ["It may increase blood pressure", "It may dislodge clots and restart bleeding", "It may cause sinus infection", "It may cause dizziness"],
            correct: 1,
            explanation: "Blowing the nose can disrupt clot formation and cause rebleeding."
        },
        {
            q: "What is the recommended method for nasal packing in the prehospital setting?",
            options: ["Posterior packing with Foley catheter", "Anterior packing with hemostatic gauze", "Both A and B are within EMT scope", "Only in hospital"],
            correct: 1,
            explanation: "Anterior nasal packing with hemostatic gauze may be attempted by trained personnel; posterior packing is a hospital procedure."
        },
        {
            q: "A patient with epistaxis has a history of hypertension and presents with SBP 180/100. What is the appropriate management?",
            options: ["Administer GTN", "Administer labetalol", "Control bleeding and transport; treat hypertension only if signs of end-organ damage", "No intervention needed"],
            correct: 2,
            explanation: "Hypertension is common and usually secondary to stress; focus on bleeding control. Only treat if severe with symptoms like chest pain or altered mental status."
        },
        {
            q: "Which of the following is an indicator of severe blood loss in epistaxis?",
            options: ["Capillary refill <2 seconds", "Heart rate 80 bpm", "SBP 110 mmHg", "Altered mental status"],
            correct: 3,
            explanation: "Altered mental status suggests cerebral hypoperfusion due to significant blood loss."
        },
        {
            q: "What is the pediatric fluid bolus dose for shock due to epistaxis?",
            options: ["10 mL/kg", "20 mL/kg", "40 mL/kg", "5 mL/kg"],
            correct: 1,
            explanation: "The initial bolus is 20 mL/kg crystalloid, repeated as needed up to 60 mL/kg total."
        },
        {
            q: "A patient with epistaxis has a history of nasal surgery. What is the concern?",
            options: ["Bleeding may be more difficult to control", "They are at risk for meningitis", "They are immune to infection", "No special concern"],
            correct: 0,
            explanation: "Previous nasal surgery can alter anatomy and increase risk of persistent bleeding."
        },
        {
            q: "What is the most common site of anterior epistaxis?",
            options: ["Sphenopalatine foramen", "Kiesselbach's plexus", "Posterior nasal cavity", "Nasopharynx"],
            correct: 1,
            explanation: "Kiesselbach's plexus (Little's area) on the anterior septum is the most common site."
        },
        {
            q: "A patient with epistaxis is on rivaroxaban. What is the priority?",
            options: ["Hold the next dose", "Administer vitamin K", "Control bleeding and transport promptly", "Give protamine sulfate"],
            correct: 2,
            explanation: "Direct oral anticoagulants (DOACs) increase bleeding risk; patients require hospital evaluation."
        },
        {
            q: "What is the maximum total fluid bolus for a pediatric patient with shock from epistaxis?",
            options: ["20 mL/kg", "40 mL/kg", "60 mL/kg", "No maximum"],
            correct: 2,
            explanation: "Up to 60 mL/kg total crystalloid may be given, with reassessment after each 20 mL/kg bolus."
        },
        {
            q: "A patient with epistaxis is unable to protect their airway due to blood. What should you do?",
            options: ["Suction the oropharynx, position on side, and prepare for advanced airway if needed", "Place in Trendelenburg", "Administer oxygen via non-rebreather", "Transport supine"],
            correct: 0,
            explanation: "Airway protection is paramount; suction, recovery position, and early ALS backup are indicated."
        }
    ],
    flashcards: [
        { category: "Definition", question: "What is epistaxis?", answer: "Bleeding from the nose, which can be anterior or posterior." },
        { category: "Anterior bleeding", question: "What is the most common site of anterior epistaxis?", answer: "Kiesselbach's plexus (Little's area) on the anterior nasal septum." },
        { category: "Posterior bleeding", question: "How does posterior epistaxis present?", answer: "Blood may drain into the oropharynx, causing swallowing of blood or airway compromise." },
        { category: "Risk factors", question: "Name three risk factors for epistaxis.", answer: "Anticoagulant use, hypertension, dry air, trauma, bleeding disorders." },
        { category: "Initial management", question: "What is the first step in managing epistaxis?", answer: "Position patient upright with head forward, apply firm direct pressure to the soft part of the nose for 10–15 minutes." },
        { category: "Nasal packing", question: "When is nasal packing indicated?", answer: "When direct pressure fails to control anterior bleeding." },
        { category: "Shock signs", question: "What signs indicate significant blood loss from epistaxis?", answer: "Tachycardia, hypotension, pallor, diaphoresis, altered mental status." },
        { category: "Fluid resuscitation", question: "What is the initial fluid bolus for an adult with shock from epistaxis?", answer: "500 mL normal saline; repeat as needed up to 2000 mL." },
        { category: "Pediatric fluid bolus", question: "What is the pediatric fluid bolus for shock?", answer: "20 mL/kg crystalloid; may repeat up to 60 mL/kg total." },
        { category: "Anticoagulants", question: "Why are anticoagulated patients at higher risk?", answer: "They have impaired hemostasis and may develop severe hemorrhage." },
        { category: "Airway compromise", question: "What should you do if blood is pooling in the oropharynx?", answer: "Suction, position patient on their side, and prepare for advanced airway if needed." },
        { category: "Posterior packing", question: "Can EMTs perform posterior nasal packing?", answer: "No, posterior packing is a hospital procedure; transport promptly." },
        { category: "Ice application", question: "What is the role of ice in epistaxis?", answer: "Ice applied to the bridge of the nose may cause vasoconstriction as an adjunct." },
        { category: "Hypertension", question: "Should hypertension be treated in epistaxis?", answer: "Generally no, unless severe with end-organ damage; treat bleeding first." },
        { category: "Avoidance", question: "What should patients avoid after epistaxis?", answer: "Blowing the nose, heavy lifting, straining, and hot liquids." },
        { category: "Documentation", question: "What must be documented for epistaxis?", answer: "Site of bleeding, estimated blood loss, medications, interventions, response." },
        { category: "KPI", question: "What is the key performance indicator for epistaxis?", answer: "Document all bleeding control measures." },
        { category: "Pediatric considerations", question: "Why are children more prone to epistaxis?", answer: "Nasal mucosa is fragile and prone to irritation from dry air, allergies, or digital trauma." },
        { category: "Elderly considerations", question: "Why are elderly patients at higher risk of severe epistaxis?", answer: "Age-related vascular fragility, anticoagulant use, and comorbidities." },
        { category: "Transport decision", question: "When is transport mandatory for epistaxis?", answer: "Uncontrolled bleeding, signs of shock, airway compromise, or anticoagulant use." }
    ],
    critical: [
        {
            id: "crit_6_6_1",
            scenario: "A 65-year-old male on warfarin for atrial fibrillation has profuse right nostril bleeding that started spontaneously 30 minutes ago. He is pale and diaphoretic, BP 90/60, HR 110. Direct pressure has not stopped the bleeding. What is your priority?",
            question: "What should you do first?",
            options: [
                { t: "Administer vitamin K", f: "Vitamin K is not given prehospital and takes hours to work." },
                { t: "Apply nasal packing and request ALS back-up", f: "Correct. This patient has signs of shock and anticoagulant use; urgent transport is needed." },
                { t: "Give a 500 mL normal saline bolus", f: "Fluids are important, but controlling bleeding and transport are priorities." },
                { t: "Call Tele-EMS for permission to give protamine", f: "Not indicated; protamine is for heparin reversal." }
            ],
            correct: 1,
            explanation: "The patient is in hemorrhagic shock and anticoagulated; rapid transport with ALS backup is essential. Fluids can be given en route.",
            kpi: "ALS back-up requested and transport initiated."
        },
        {
            id: "crit_6_6_2",
            scenario: "A 45-year-old female has epistaxis after a fall. She is alert and oriented. You apply direct pressure for 15 minutes, but bleeding continues. She has no signs of shock. What should you do next?",
            question: "What is the next step?",
            options: [
                { t: "Apply nasal packing and transport", f: "Correct. If direct pressure fails, nasal packing may be attempted, and transport is indicated." },
                { t: "Apply ice and wait another 15 minutes", f: "Delay is not appropriate; persistent bleeding requires escalation." },
                { t: "Administer tranexamic acid", f: "TXA is not indicated for epistaxis unless massive hemorrhage." },
                { t: "Transport without further intervention", f: "Packing may help control bleeding en route." }
            ],
            correct: 0,
            explanation: "If direct pressure fails, nasal packing can be attempted, and transport is warranted for further evaluation.",
            kpi: "Nasal packing applied and transport arranged."
        },
        {
            id: "crit_6_6_3",
            scenario: "A 30-year-old male has epistaxis after a fight. He has a deformed nose and swelling. Bleeding is brisk. What is your concern?",
            question: "What is the most important consideration?",
            options: [
                { t: "Possible nasal fracture and airway compromise", f: "Correct. Facial trauma can cause airway obstruction from swelling or blood." },
                { t: "Risk of meningitis", f: "Not an immediate concern." },
                { t: "Need for tetanus prophylaxis", f: "Not a priority." },
                { t: "Apply ice only", f: "Inadequate." }
            ],
            correct: 0,
            explanation: "Traumatic epistaxis may be associated with nasal fracture; assess for airway patency and signs of septal hematoma.",
            kpi: "Airway assessment documented."
        },
        {
            id: "crit_6_6_4",
            scenario: "A 70-year-old female with epistaxis has a history of hypertension. Her BP is 190/100, HR 90, and she is anxious but otherwise stable. Bleeding has stopped with direct pressure. Should you treat the blood pressure?",
            question: "What is the appropriate action?",
            options: [
                { t: "Administer GTN sublingual", f: "Not indicated; could worsen bleeding." },
                { t: "Administer labetalol IV", f: "Not indicated without end-organ damage." },
                { t: "Monitor and transport; do not treat hypertension prehospital", f: "Correct. Hypertension is likely stress-induced; focus on bleeding control." },
                { t: "Give aspirin", f: "Contraindicated." }
            ],
            correct: 2,
            explanation: "Isolated hypertension without end-organ dysfunction should not be treated prehospital; it may be a compensatory response to stress or pain.",
            kpi: "Blood pressure monitored, no unnecessary treatment given."
        },
        {
            id: "crit_6_6_5",
            scenario: "A child with epistaxis is crying and has blood running down the back of the throat. The parent is very anxious. What is your priority?",
            question: "What should you do first?",
            options: [
                { t: "Calm the child and parent, position head forward, and apply direct pressure", f: "Correct. Anxiety can worsen bleeding; calm approach is key." },
                { t: "Lay the child flat and administer oxygen", f: "Supine position risks aspiration." },
                { t: "Insert a nasal airway", f: "Not indicated." },
                { t: "Give oral glucose", f: "Not relevant." }
            ],
            correct: 0,
            explanation: "Most pediatric epistaxis is anterior and responds to calm reassurance, upright positioning, and direct pressure.",
            kpi: "Bleeding controlled with non-invasive measures."
        }
    ]
};