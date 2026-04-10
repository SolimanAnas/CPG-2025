/* ========== Chapter 6.8 – Hypoglycemia ========== */
window.CPG_DATA = {
    id: "c6-8",
    title: "Hypoglycemia",
    shortTitle: "6.8 Hypoglycemia",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">?? Hypoglycemia</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Rapidly identify and manage hypoglycemia to prevent neurological injury.</li>
                <li>Restore blood glucose levels to a safe range.</li>
                <li>Prevent hypoglycemia recurrence and ensure appropriate disposition.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Patients presenting with symptoms suggestive of hypoglycemia, including:
                    <ul>
                        <li>Confusion, irritability, sweating, shakiness, seizures, or unresponsiveness.</li>
                        <li>Random blood sugar (RBS) <70 mg/dL.</li>
                    </ul>
                </li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>Hyperglycemia without hypoglycemic symptoms.</li>
                <li>Altered mental status or symptoms clearly attributable to another cause (e.g., stroke, trauma, drug overdose) without glucose abnormality.</li>
                <li>Patients with normal blood glucose levels and no clinical suspicion of glycemic disturbance.</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Glucose Measurement:</strong> Check RBS to confirm hypoglycemia (<70 mg/dL). Repeat after interventions to monitor response.</li>
                <li><strong>History Specific to Glycemic Disorders:</strong> Confirm history of diabetes (type 1 or type 2), insulin use, or oral hypoglycemic agents. Inquire about recent medication compliance (e.g., excess hypoglycemic agents). Identify precipitating factors (infection, stress, dietary changes).</li>
                <li><strong>Symptoms of Hypoglycemia:</strong> Autonomic symptoms (sweating, tremors, anxiety, palpitations). Neurological symptoms (confusion, irritability, seizures, coma).</li>
                <li><strong>Determine Triage Category:</strong> Red priority for severe hypoglycemia with seizures, unresponsiveness, or hypotension.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Primary and Secondary Surveys:</strong> Perform as per Universal Care CPG. Unconscious patients should be placed in the recovery position while treatment is administered.</li>
                <li><strong>Oxygen:</strong> Consider oxygen if symptoms of hypoxia or respiratory distress; titrate to maintain SpO2 =94%.</li>
                <li><strong>Consider ALS back-up:</strong> For severe hypoglycemia with seizures, unresponsiveness, or hypotension.</li>
                <li><strong>Establish IV Access:</strong> For administration of IV dextrose or fluids. Consider IO access if IV unsuccessful and patient is critical. Avoid fluids in uncomplicated hypoglycemia unless hypotension is present.</li>
                <li><strong>Dextrose 10%:</strong> Adults: 100-200 mL IV (10-20 g), repeat as needed if RBS remains <70 mg/dL. Pediatrics: 2-4 mL/kg IV (0.2-0.4 g/kg, max 25 g).</li>
                <li><strong>Glucose 40% Oral Paste:</strong> Adults: 15-20 g orally if conscious and able to swallow. Pediatrics: 0.5-1 g/kg orally (max 15 g).</li>
                <li><strong>Glucagon:</strong> Indicated if IV access is unavailable and patient is unresponsive. Adults: 1 mg IM (once only). Pediatrics: 0.5 mg IM (<20 kg) or 1 mg (=20 kg), once only.</li>
                <li><strong>Patient Reassessment:</strong> Recheck RBS after each intervention. Frequently reassess mental status and vital signs.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Ensure airway is secure before administering oral glucose.</li>
                <li>Monitor closely for seizures or vomiting.</li>
                <li>Reassess blood glucose after treatment to ensure response.</li>
                <li>Document all treatment and timing of reassessment.</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li>Rule out alternative causes of altered mental status such as stroke, head trauma, or overdose.</li>
                <li>Consider hypoglycemia as a secondary complication in seizure patients.</li>
                <li>If family or caregivers administered treatment prior to EMS arrival, confirm substance and dose.</li>
                <li>Patients with repeated hypoglycemia should be advised to follow up with their diabetes care provider.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Pre- and post-treatment RBS, vital signs, AVPU/GCS.</li>
                <li>Diabetes history, medications, precipitating factors.</li>
                <li>Treatment given (oral glucose, IV dextrose, glucagon), dose, route, response.</li>
                <li>Transport decision and hospital notification.</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Perform and document RBS before and after treatment.</li>
                <li>Administer glucose (as appropriate) for all patients with an RBS <70 mg/dL.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What is the threshold for hypoglycemia in adults?",
            options: ["<60 mg/dL", "<70 mg/dL", "<80 mg/dL", "<50 mg/dL"],
            correct: 1,
            explanation: "Hypoglycemia is defined as blood glucose <70 mg/dL."
        },
        {
            q: "A patient with hypoglycemia is unconscious. What is the first step?",
            options: ["Give oral glucose", "Administer glucagon IM", "Protect airway and give IV dextrose", "Transport immediately"],
            correct: 2,
            explanation: "Airway protection is paramount; give IV dextrose if accessible."
        },
        {
            q: "What is the dose of 50% dextrose for an adult with hypoglycemia?",
            options: ["10 mL (5 g)", "25 mL (12.5 g)", "50 mL (25 g)", "100 mL (50 g)"],
            correct: 2,
            explanation: "The standard adult dose is 25 g (50 mL of 50% dextrose)."
        },
        {
            q: "A conscious diabetic patient has a glucose of 55 mg/dL and is able to swallow. What should you give?",
            options: ["IV dextrose", "Glucagon IM", "Oral glucose paste", "Normal saline"],
            correct: 2,
            explanation: "Oral glucose is appropriate if the patient is conscious and able to swallow safely."
        },
        {
            q: "What is the dose of glucagon for an adult with hypoglycemia?",
            options: ["0.5 mg IM", "1 mg IM", "2 mg IM", "0.1 mg IV"],
            correct: 1,
            explanation: "Adult dose of glucagon is 1 mg IM."
        },
        {
            q: "A child weighing 15 kg has hypoglycemia and no IV access. What is the appropriate glucagon dose?",
            options: ["0.25 mg IM", "0.5 mg IM", "1 mg IM", "0.1 mg IM"],
            correct: 1,
            explanation: "For children <20 kg, glucagon dose is 0.5 mg IM."
        },
        {
            q: "After giving IV dextrose, the patient becomes alert. What is the next step?",
            options: ["Discharge with dietary advice", "Transport to hospital", "Give oral glucose", "Repeat dextrose"],
            correct: 1,
            explanation: "Patients requiring EMS intervention for hypoglycemia should be transported to hospital for evaluation and monitoring."
        },
        {
            q: "Which of the following is a symptom of hypoglycemia?",
            options: ["Polyuria", "Polydipsia", "Sweating and tremors", "Fruity breath"],
            correct: 2,
            explanation: "Sweating, tremors, and anxiety are autonomic symptoms of hypoglycemia."
        },
        {
            q: "What is the target SpO2 for a patient with hypoglycemia?",
            options: ["=90%", "=94%", "=88%", "100%"],
            correct: 1,
            explanation: "Maintain SpO2 =94% to prevent hypoxia."
        },
        {
            q: "A patient with hypoglycemia is on insulin. What is the most likely cause?",
            options: ["Missed meal", "Excess insulin", "Infection", "All of the above"],
            correct: 3,
            explanation: "Hypoglycemia in diabetics can result from excess insulin, missed meals, or increased metabolic demand (e.g., infection)."
        },
        {
            q: "What is the pediatric dose of 50% dextrose for hypoglycemia?",
            options: ["0.5 g/kg", "1 g/kg", "2 g/kg", "0.1 g/kg"],
            correct: 0,
            explanation: "Pediatric dose is 0.5-1 g/kg (typically 0.5 g/kg = 1 mL/kg of 50% dextrose, but diluted to 10% is preferred)."
        },
        {
            q: "Why should oral glucose not be given to an unconscious patient?",
            options: ["It is ineffective", "It may cause aspiration", "It increases blood pressure", "It delays transport"],
            correct: 1,
            explanation: "Oral glucose carries a high risk of aspiration in patients with an unprotected airway."
        },
        {
            q: "A patient with hypoglycemia has a seizure. What is the priority?",
            options: ["Give oral glucose", "Protect airway, administer benzodiazepine, and treat hypoglycemia", "Transport immediately", "Check glucose"],
            correct: 1,
            explanation: "Seizure management includes airway protection, benzodiazepines, and correction of hypoglycemia."
        },
        {
            q: "What is the dose of 10% dextrose for an adult with hypoglycemia?",
            options: ["100-200 mL", "250-500 mL", "50 mL", "20 mL"],
            correct: 0,
            explanation: "10% dextrose provides 10 g per 100 mL; 100-200 mL (10-20 g) is appropriate."
        },
        {
            q: "A patient with hypoglycemia is unconscious and has no IV access. What should you do?",
            options: ["Give oral glucose", "Administer glucagon IM", "Wait for IV access", "Transport without treatment"],
            correct: 1,
            explanation: "Glucagon IM is indicated when IV access is not available and the patient is unresponsive."
        },
        {
            q: "Which of the following is a contraindication to glucagon?",
            options: ["Hypoglycemia", "Diabetes", "Known allergy", "Pheochromocytoma (rare)"],
            correct: 2,
            explanation: "Allergy to glucagon is a contraindication; otherwise, it is safe in emergencies."
        },
        {
            q: "What is the maximum single dose of 50% dextrose for an adult?",
            options: ["25 g", "50 g", "100 g", "No maximum"],
            correct: 0,
            explanation: "Standard single dose is 25 g; may repeat if needed, but careful to avoid hyperglycemia."
        },
        {
            q: "A patient with hypoglycemia has a blood glucose of 40 mg/dL after 25 g IV dextrose. What should you do?",
            options: ["Repeat dextrose", "Give glucagon", "Transport only", "Give oral glucose"],
            correct: 0,
            explanation: "If hypoglycemia persists, repeat dextrose or consider infusion of 10% dextrose."
        },
        {
            q: "What is the mechanism of action of glucagon?",
            options: ["Increases insulin release", "Stimulates glycogenolysis and gluconeogenesis", "Blocks glucose absorption", "Increases glucose excretion"],
            correct: 1,
            explanation: "Glucagon stimulates the liver to release stored glucose (glycogenolysis) and produce new glucose (gluconeogenesis)."
        },
        {
            q: "Which of the following is a sign of severe hypoglycemia?",
            options: ["Sweating", "Tachycardia", "Unresponsiveness", "Hunger"],
            correct: 2,
            explanation: "Unresponsiveness indicates severe cerebral glucose deprivation."
        },
        {
            q: "What is the role of oral glucose paste?",
            options: ["Buccal absorption", "Must be swallowed to be effective", "Sublingual absorption", "Topical application"],
            correct: 1,
            explanation: "Glucose paste must be swallowed for systemic absorption; it is not absorbed through the oral mucosa."
        },
        {
            q: "A patient with hypoglycemia is on a sulfonylurea. Why is this important?",
            options: ["They are at risk for prolonged hypoglycemia", "They require higher doses of dextrose", "Glucagon is ineffective", "No special consideration"],
            correct: 0,
            explanation: "Sulfonylureas can cause prolonged hypoglycemia lasting hours to days; patients require observation."
        },
        {
            q: "What is the target blood glucose after treatment?",
            options: [">70 mg/dL", ">100 mg/dL", ">120 mg/dL", ">150 mg/dL"],
            correct: 0,
            explanation: "Goal is to raise glucose above 70 mg/dL and improve symptoms."
        },
        {
            q: "A patient with hypoglycemia is also hypotensive. What should you consider?",
            options: ["Give only dextrose", "Give dextrose and fluid bolus", "Give glucagon", "Transport without treatment"],
            correct: 1,
            explanation: "Hypotension may indicate hypovolemia or another cause; treat both."
        },
        {
            q: "What is the dose of 10% dextrose for a 20 kg child with hypoglycemia?",
            options: ["20-40 mL", "40-80 mL", "100-200 mL", "10-20 mL"],
            correct: 1,
            explanation: "2-4 mL/kg of 10% dextrose gives 0.2-0.4 g/kg; for 20 kg, that is 40-80 mL."
        },
        {
            q: "Which of the following is NOT a cause of hypoglycemia in a non-diabetic?",
            options: ["Alcohol ingestion", "Liver failure", "Insulinoma", "Hyperthyroidism"],
            correct: 3,
            explanation: "Hyperthyroidism causes hypermetabolism but not typically hypoglycemia; alcohol, liver failure, and insulinoma can cause hypoglycemia."
        },
        {
            q: "What is the preferred route for glucagon when IV access is unavailable?",
            options: ["IV", "IM", "SC", "IN"],
            correct: 1,
            explanation: "Glucagon is given IM or SC; IM is preferred for faster absorption."
        },
        {
            q: "A patient with hypoglycemia has a glucose of 65 mg/dL after treatment but remains confused. What should you suspect?",
            options: ["Recurrent hypoglycemia", "Stroke", "Post-hypoglycemic encephalopathy", "All of the above"],
            correct: 3,
            explanation: "Persistent confusion may be due to ongoing hypoglycemia, underlying stroke, or prolonged cerebral effects."
        },
        {
            q: "What is the key performance indicator for hypoglycemia?",
            options: ["Administer oxygen", "Check RBS before and after treatment", "Transport all patients", "Give oral glucose"],
            correct: 1,
            explanation: "Documenting RBS before and after treatment is a key KPI."
        },
        {
            q: "A patient with hypoglycemia is on a beta-blocker. Why is this significant?",
            options: ["Beta-blockers mask tachycardia", "They increase glucose", "They cause hypoglycemia", "No significance"],
            correct: 0,
            explanation: "Beta-blockers can blunt the sympathetic response (tachycardia, tremors), making hypoglycemia harder to recognize."
        }
    ],
    flashcards: [
        { category: "Definition", question: "What is hypoglycemia?", answer: "Blood glucose level <70 mg/dL with or without symptoms." },
        { category: "Symptoms", question: "What are the autonomic symptoms of hypoglycemia?", answer: "Sweating, tremor, palpitations, anxiety, hunger." },
        { category: "Neuroglycopenic symptoms", question: "What are neuroglycopenic symptoms of hypoglycemia?", answer: "Confusion, drowsiness, seizures, coma, behavioral changes." },
        { category: "Causes", question: "What are common causes of hypoglycemia in diabetics?", answer: "Excess insulin/oral agents, missed meals, increased physical activity, alcohol, infection." },
        { category: "Treatment – conscious", question: "How should a conscious hypoglycemic patient be treated?", answer: "Oral glucose (15-20 g) or glucose paste, followed by complex carbohydrate if available." },
        { category: "Treatment – unconscious with IV", question: "How should an unconscious hypoglycemic patient with IV access be treated?", answer: "IV dextrose 25 g (50 mL of 50% dextrose) or 10-20 g of 10% dextrose." },
        { category: "Treatment – unconscious without IV", question: "How should an unconscious hypoglycemic patient without IV access be treated?", answer: "Glucagon 1 mg IM (adult) or 0.5 mg IM (child <20 kg)." },
        { category: "Glucagon", question: "When is glucagon ineffective?", answer: "In patients with depleted glycogen stores (e.g., alcoholics, malnutrition, liver disease)." },
        { category: "Pediatric dextrose", question: "What is the preferred dextrose concentration for children?", answer: "10% dextrose (2-4 mL/kg) to avoid hyperosmolar injury." },
        { category: "Recurrence", question: "Why might hypoglycemia recur after treatment?", answer: "Long-acting insulin or sulfonylureas can cause prolonged hypoglycemia." },
        { category: "Transport decision", question: "Should all EMS-treated hypoglycemic patients be transported?", answer: "Yes, to evaluate the cause and monitor for recurrence." },
        { category: "Hypoglycemia unawareness", question: "What is hypoglycemia unawareness?", answer: "Lack of autonomic symptoms due to recurrent hypoglycemia or beta-blocker use." },
        { category: "Alcohol and hypoglycemia", question: "How does alcohol cause hypoglycemia?", answer: "Inhibits gluconeogenesis; risk is higher in fasting state." },
        { category: "KPI", question: "What is the key performance indicator for hypoglycemia?", answer: "Document RBS before and after treatment." },
        { category: "Dextrose 10%", question: "What is the advantage of 10% dextrose over 50%?", answer: "Less hyperosmolar, lower risk of tissue necrosis if extravasated." },
        { category: "Glucagon side effects", question: "What are common side effects of glucagon?", answer: "Nausea, vomiting, hyperglycemia after recovery." },
        { category: "Hypoglycemia in infants", question: "What is a common cause of hypoglycemia in infants?", answer: "Prolonged fasting, maternal diabetes, sepsis, inborn errors of metabolism." },
        { category: "Differential diagnosis", question: "What conditions can mimic hypoglycemia?", answer: "Stroke, seizure, alcohol intoxication, head injury, sepsis." },
        { category: "Post-treatment monitoring", question: "How often should RBS be rechecked after treatment?", answer: "Every 15-30 minutes until stable." },
        { category: "Prevention", question: "How can hypoglycemia be prevented?", answer: "Regular meals, appropriate insulin dosing, sick day management, glucose monitoring." }
    ],
    critical: [
        {
            id: "crit_6_8_1",
            scenario: "A 60-year-old diabetic male is found unresponsive by his wife. He is sweating and has a blood glucose of 32 mg/dL. What is your first action?",
            question: "What should you do immediately?",
            options: [
                { t: "Give oral glucose", f: "The patient is unresponsive; oral glucose is contraindicated." },
                { t: "Establish IV access and give 50% dextrose 25 g IV", f: "Correct. IV dextrose is indicated for unresponsive hypoglycemia." },
                { t: "Administer glucagon IM", f: "Glucagon is an option if no IV access, but IV is preferred." },
                { t: "Transport without treatment", f: "Treatment must be initiated." }
            ],
            correct: 1,
            explanation: "Unresponsive patient with severe hypoglycemia requires immediate IV dextrose.",
            kpi: "IV dextrose administered."
        },
        {
            id: "crit_6_8_2",
            scenario: "A 25-year-old diabetic is found confused and diaphoretic. He is able to swallow. His blood glucose is 55 mg/dL. What should you do?",
            question: "What is the appropriate management?",
            options: [
                { t: "Give IV dextrose", f: "IV is not necessary if the patient can safely take oral glucose." },
                { t: "Give oral glucose paste and reassess", f: "Correct. Oral glucose is appropriate for conscious patients." },
                { t: "Administer glucagon", f: "Glucagon is for unconscious patients without IV access." },
                { t: "Transport without treatment", f: "Treatment should be given." }
            ],
            correct: 1,
            explanation: "Conscious patient with mild hypoglycemia can be treated with oral glucose.",
            kpi: "Oral glucose administered and glucose rechecked."
        },
        {
            id: "crit_6_8_3",
            scenario: "A patient with hypoglycemia receives 25 g IV dextrose and becomes alert. Fifteen minutes later, while en route, he becomes confused again. Blood glucose is 45 mg/dL. What should you do?",
            question: "What is the next step?",
            options: [
                { t: "Give another dose of IV dextrose", f: "Correct. Recurrent hypoglycemia requires additional dextrose." },
                { t: "Administer glucagon", f: "IV access is already established; dextrose is preferred." },
                { t: "Give oral glucose", f: "The patient is now confused; oral glucose is unsafe." },
                { t: "Transport without further treatment", f: "Recurrent hypoglycemia requires treatment." }
            ],
            correct: 0,
            explanation: "Recurrent hypoglycemia may occur due to long-acting insulin; repeat dextrose or start 10% dextrose infusion.",
            kpi: "Repeat dextrose administered."
        },
        {
            id: "crit_6_8_4",
            scenario: "A 45-year-old diabetic is found unresponsive. You attempt IV access but cannot obtain it after two attempts. Blood glucose is 28 mg/dL. What should you do?",
            question: "What is the next step?",
            options: [
                { t: "Continue attempting IV access", f: "Delay is harmful; consider alternative route." },
                { t: "Administer glucagon 1 mg IM", f: "Correct. Glucagon is indicated when IV access is unavailable." },
                { t: "Give oral glucose", f: "Unsafe in unresponsive patient." },
                { t: "Transport without treatment", f: "Treatment is needed." }
            ],
            correct: 1,
            explanation: "When IV access is not feasible, glucagon IM is an effective alternative.",
            kpi: "Glucagon administered."
        },
        {
            id: "crit_6_8_5",
            scenario: "A 70-year-old diabetic with a history of heart failure is found confused and diaphoretic. Glucose is 45 mg/dL. You give IV dextrose. The patient becomes alert. What is your next priority?",
            question: "What should you consider?",
            options: [
                { t: "Discharge with dietary advice", f: "Not safe; patient should be transported." },
                { t: "Transport to hospital for evaluation", f: "Correct. Even after correction, underlying cause needs assessment." },
                { t: "Give oral glucose and leave", f: "Inadequate." },
                { t: "Administer glucagon", f: "Not needed." }
            ],
            correct: 1,
            explanation: "All patients treated for hypoglycemia should be transported to hospital to identify the cause and prevent recurrence.",
            kpi: "Patient transported."
        }
    ]
};