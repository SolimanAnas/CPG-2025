/* ========== Chapter 6.9 – Hyperglycemia ========== */
window.CPG_DATA = {
    id: "c6-9",
    title: "Hyperglycemia",
    shortTitle: "6.9 Hyperglycemia",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">?? Hyperglycemia (DKA / HHS)</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Identify and manage hyperglycemia to prevent progression to diabetic ketoacidosis (DKA) or hyperosmolar hyperglycemic state (HHS).</li>
                <li>Correct dehydration and support perfusion.</li>
                <li>Recognize and escalate care in critical hyperglycemia presentations.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Patients with elevated blood glucose >250 mg/dL.</li>
                <li>Symptoms of polyuria, polydipsia, vomiting, weakness, or altered mental status.</li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>Hypoglycemia (RBS <70 mg/dL).</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Glucose Measurement:</strong> Check RBS to confirm hyperglycemia (>250 mg/dL). Repeat after interventions to monitor response.</li>
                <li><strong>History Specific to Glycemic Disorders:</strong> Confirm history of diabetes (type 1 or type 2), insulin use, or oral hypoglycemic agents. Inquire about recent medication compliance (e.g., missed insulin doses). Identify precipitating factors (comorbidities, infection, stress, dietary changes).</li>
                <li><strong>Symptoms of Hyperglycemia:</strong> Signs of dehydration (dry mucous membranes, thirst, hypotension, sunken eyes). Symptoms of diabetic ketoacidosis (DKA) or hyperosmolar hyperglycemic state (HHS), such as fruity breath, Kussmaul respirations, or severe lethargy. Evaluate mental status (GCS or AVPU).</li>
                <li><strong>Signs of DKA:</strong> Fruity odor on breath, Kussmaul respirations, confusion/altered mental status, dehydration, tachycardia/shock.</li>
                <li><strong>Determine Triage Category:</strong> Red priority for hyperglycemia >324 mg/dL WITH symptoms of DKA/HHS, or signs of shock.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Primary Survey:</strong> For unresponsive patients, perform airway assessment and initiate appropriate airway management. Place unconscious patients in the recovery position at minimum while treatment is being initiated.</li>
                <li><strong>Secondary Survey:</strong> Complete a focused assessment, including full vital signs, glucose level, and mental status (GCS/AVPU). Perform a 12-lead ECG to evaluate for signs of hyperkalemia (e.g., peaked T-waves, widened QRS) or acute coronary syndrome, especially in elderly or high-risk patients.</li>
                <li><strong>Consider ALS back-up:</strong> For severe hyperglycemia with altered mental status, shock, or respiratory distress.</li>
                <li><strong>Oxygen:</strong> Administer if SpO2 <94% or signs of respiratory distress; titrate to maintain SpO2 =94%.</li>
                <li><strong>Establish IV Access:</strong> For fluid resuscitation and medication administration.</li>
                <li><strong>Fluid Resuscitation:</strong> Administer Normal Saline or Ringer's Lactate for hyperglycemia with signs of dehydration, shock, or DKA:
                    <ul>
                        <li>Adults: 500-1000 mL IV bolus (up to 2000 mL), reassess and repeat as needed.</li>
                        <li>Pediatrics: 10-20 mL/kg IV bolus (up to 1000 mL), reassess and repeat as needed (maximum 60 mL/kg).</li>
                        <li>Monitor for signs of fluid overload, especially in patients with cardiac or renal disease.</li>
                    </ul>
                </li>
                <li><strong>Patient Reassessment:</strong> Reassess blood glucose every 15 minutes after treatment or fluid administration. Frequently reassess vital signs and mental status.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Monitor for signs of hypoglycemia if patient receives treatment prior to EMS arrival.</li>
                <li>Avoid aggressive fluid resuscitation in patients with renal or cardiac comorbidities.</li>
                <li>Do not delay transport to initiate full fluid replacement therapy.</li>
                <li>Escalate early in patients with altered mental status or suspected DKA/HHS.</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li>Document suspected cause of hyperglycemia (infection, missed insulin, stress).</li>
                <li>Confirm recent medication compliance or omission (insulin or oral agents).</li>
                <li>Assess for abdominal pain or vomiting in DKA patients.</li>
                <li>Avoid oral fluids if patient has altered mental status.</li>
                <li>Inform receiving facility if patient meets criteria for DKA/HHS for early preparation.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>RBS, vital signs, dehydration indicators, mental status (AVPU/GCS).</li>
                <li>History of diabetes, insulin/oral agents, precipitating factors.</li>
                <li>Fluids administered (type, volume), oxygen therapy, repeat glucose levels.</li>
                <li>Response to treatment, hospital notification.</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Administer IV fluid for patients with dehydration or signs of shock.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What glucose level defines hyperglycemia requiring evaluation?",
            options: [">150 mg/dL", ">200 mg/dL", ">250 mg/dL", ">300 mg/dL"],
            correct: 2,
            explanation: "Hyperglycemia is typically considered >250 mg/dL in the prehospital setting, though DKA can occur at lower levels in some patients."
        },
        {
            q: "Which of the following is a sign of diabetic ketoacidosis (DKA)?",
            options: ["Fruity breath odor", "Kussmaul respirations", "Altered mental status", "All of the above"],
            correct: 3,
            explanation: "DKA is characterized by hyperglycemia, metabolic acidosis, ketonemia, and often presents with fruity breath, deep rapid breathing, and altered mental status."
        },
        {
            q: "What is the initial fluid bolus for an adult with hyperglycemia and signs of shock?",
            options: ["250 mL", "500-1000 mL", "2000 mL", "No fluids"],
            correct: 1,
            explanation: "Adults with hyperglycemia and dehydration or shock should receive 500-1000 mL crystalloid bolus."
        },
        {
            q: "A patient with hyperglycemia has a blood glucose of 450 mg/dL, is confused, and has Kussmaul respirations. What is the most likely diagnosis?",
            options: ["Hypoglycemia", "Diabetic ketoacidosis (DKA)", "Hyperosmolar hyperglycemic state (HHS)", "Lactic acidosis"],
            correct: 1,
            explanation: "Kussmaul respirations and confusion suggest DKA with metabolic acidosis."
        },
        {
            q: "What is the pediatric fluid bolus for hyperglycemia with signs of dehydration?",
            options: ["5 mL/kg", "10-20 mL/kg", "30 mL/kg", "40 mL/kg"],
            correct: 1,
            explanation: "Pediatric initial bolus is 10-20 mL/kg crystalloid, repeated as needed."
        },
        {
            q: "Which of the following is a red flag in hyperglycemia?",
            options: ["Polyuria", "Polydipsia", "Hypotension", "Blurred vision"],
            correct: 2,
            explanation: "Hypotension indicates severe dehydration or shock and is a red flag requiring urgent intervention."
        },
        {
            q: "What is the target SpO2 for a patient with hyperglycemia?",
            options: ["=90%", "=94%", "=88%", "100%"],
            correct: 1,
            explanation: "Maintain SpO2 =94% to prevent hypoxia."
        },
        {
            q: "A patient with hyperglycemia is on an insulin pump. What should you do?",
            options: ["Remove the pump", "Leave the pump in place, but document", "Disconnect the pump and give insulin", "Turn off the pump"],
            correct: 1,
            explanation: "Do not disconnect the pump; leave it in place and document for hospital staff."
        },
        {
            q: "What is the maximum total fluid bolus for an adult with hyperglycemic crisis?",
            options: ["500 mL", "1000 mL", "2000 mL", "No maximum"],
            correct: 2,
            explanation: "Up to 2000 mL crystalloid may be given, with reassessment after each bolus."
        },
        {
            q: "Which of the following is a common precipitating factor for DKA?",
            options: ["Infection", "Missed insulin doses", "Stress", "All of the above"],
            correct: 3,
            explanation: "Infection, insulin omission, and physical/emotional stress are common triggers for DKA."
        },
        {
            q: "What is the maximum total fluid bolus for a pediatric patient with hyperglycemia?",
            options: ["20 mL/kg", "40 mL/kg", "60 mL/kg", "80 mL/kg"],
            correct: 2,
            explanation: "Maximum 60 mL/kg total crystalloid in the prehospital setting."
        },
        {
            q: "A patient with DKA has a blood glucose of 650 mg/dL. After 1 L normal saline, the patient remains hypotensive. What should you do?",
            options: ["Give another fluid bolus", "Start insulin infusion", "Administer sodium bicarbonate", "Transport without further fluids"],
            correct: 0,
            explanation: "Fluid resuscitation is the priority; repeat boluses as needed to improve perfusion."
        },
        {
            q: "Which electrolyte abnormality is commonly seen in DKA?",
            options: ["Hyperkalemia", "Hypokalemia", "Hyponatremia", "Hypercalcemia"],
            correct: 0,
            explanation: "Initial hyperkalemia may be present due to acidosis, but total body potassium is depleted."
        },
        {
            q: "What is the significance of Kussmaul respirations in DKA?",
            options: ["Compensatory response to metabolic acidosis", "Sign of hypoxia", "Indicates brain herniation", "Normal breathing pattern"],
            correct: 0,
            explanation: "Deep, rapid respirations (Kussmaul) are the body's attempt to blow off CO2 to compensate for metabolic acidosis."
        },
        {
            q: "A patient with hyperglycemia has a blood glucose of 800 mg/dL, is elderly, and has profound dehydration but no ketosis. What is the likely diagnosis?",
            options: ["DKA", "HHS (hyperosmolar hyperglycemic state)", "Lactic acidosis", "Sepsis"],
            correct: 1,
            explanation: "HHS is more common in elderly type 2 diabetics and presents with severe hyperglycemia, hyperosmolality, and dehydration without significant ketosis."
        },
        {
            q: "What is the dose of 0.9% normal saline for an adult with DKA?",
            options: ["250 mL bolus", "500-1000 mL bolus", "1-2 L/h infusion", "No fluids"],
            correct: 1,
            explanation: "Initial fluid resuscitation is 500-1000 mL bolus, repeated as needed."
        },
        {
            q: "Which of the following is a sign of severe dehydration in hyperglycemia?",
            options: ["Dry mucous membranes", "Poor skin turgor", "Hypotension", "All of the above"],
            correct: 3,
            explanation: "All are signs of significant volume depletion."
        },
        {
            q: "A patient with hyperglycemia has a history of heart failure. How should fluid resuscitation be approached?",
            options: ["Give full boluses as usual", "Give smaller boluses and monitor for pulmonary edema", "Avoid fluids entirely", "Use colloids instead"],
            correct: 1,
            explanation: "Cautious fluid administration with smaller boluses and close monitoring for signs of fluid overload is recommended."
        },
        {
            q: "What is the target blood pressure for an adult with hyperglycemic crisis?",
            options: ["SBP >90 mmHg", "SBP >100 mmHg", "MAP >65 mmHg", "Both A and C"],
            correct: 3,
            explanation: "Goal is to maintain adequate perfusion (SBP >90 mmHg or MAP >65 mmHg)."
        },
        {
            q: "A patient with DKA presents with abdominal pain. What is the appropriate action?",
            options: ["Treat as appendicitis", "Administer analgesia and transport", "Suspect DKA as cause; transport for evaluation", "Give nothing and transport"],
            correct: 2,
            explanation: "Abdominal pain is common in DKA and usually resolves with treatment; still requires transport for evaluation."
        },
        {
            q: "What is the recommended fluid for initial resuscitation in hyperglycemic crisis?",
            options: ["5% dextrose", "0.9% normal saline", "Ringer's lactate", "Colloids"],
            correct: 1,
            explanation: "Isotonic crystalloid (normal saline) is preferred for initial volume replacement."
        },
        {
            q: "A patient with hyperglycemia has a blood glucose of 300 mg/dL and is alert with no symptoms. What is the appropriate management?",
            options: ["IV fluids", "Insulin", "Transport for evaluation", "Treat at scene and discharge"],
            correct: 2,
            explanation: "Even asymptomatic hyperglycemia requires evaluation to identify underlying cause and prevent progression."
        },
        {
            q: "What is the role of insulin in prehospital management of DKA?",
            options: ["Routinely given IV", "Given IM if glucose >500", "Not given prehospital; focus on fluids and transport", "Given only with physician order"],
            correct: 2,
            explanation: "Insulin is not administered prehospital; fluid resuscitation and transport are the priorities."
        },
        {
            q: "Which of the following ECG changes may be seen in hyperkalemia associated with DKA?",
            options: ["Peaked T waves", "Widened QRS", "Loss of P waves", "All of the above"],
            correct: 3,
            explanation: "Hyperkalemia can cause peaked T waves, widened QRS, and loss of P waves."
        },
        {
            q: "A patient with DKA has a respiratory rate of 32 and SpO2 96%. What should you do?",
            options: ["Administer high-flow oxygen", "Apply CPAP", "Monitor and treat underlying DKA", "Intubate"],
            correct: 2,
            explanation: "Tachypnea is compensatory; oxygen is not needed if SpO2 is normal. Treat the DKA with fluids."
        },
        {
            q: "What is the pediatric fluid bolus dose for a 10 kg child with hyperglycemia and poor perfusion?",
            options: ["50 mL", "100-200 mL", "200-300 mL", "500 mL"],
            correct: 1,
            explanation: "10-20 mL/kg = 100-200 mL for a 10 kg child."
        },
        {
            q: "Why should you avoid giving insulin prehospital?",
            options: ["Risk of hypoglycemia", "Requires monitoring of electrolytes", "Fluid resuscitation is more urgent", "All of the above"],
            correct: 3,
            explanation: "Insulin can cause rapid shifts in electrolytes and glucose; fluids are the priority in the prehospital setting."
        },
        {
            q: "A patient with hyperglycemia is vomiting and has altered mental status. What is the priority?",
            options: ["Administer antiemetic", "Protect airway and give fluids", "Give insulin", "Transport only"],
            correct: 1,
            explanation: "Airway protection and fluid resuscitation are priorities in a patient with vomiting and altered mental status."
        },
        {
            q: "What is the key performance indicator for hyperglycemia?",
            options: ["Administer insulin", "Give IV fluids for dehydration or shock", "Perform 12-lead ECG", "Check ketones"],
            correct: 1,
            explanation: "Administering IV fluid for patients with dehydration or signs of shock is a key KPI."
        },
        {
            q: "A patient with hyperglycemia has a glucose of 450 mg/dL and is drowsy. After 1000 mL normal saline, the patient is more alert. What should you do?",
            options: ["Stop fluids", "Continue fluids and transport", "Give insulin", "Check glucose again"],
            correct: 1,
            explanation: "Continue fluid resuscitation and transport; improvement indicates response to volume replacement."
        }
    ],
    flashcards: [
        { category: "Definition", question: "What is hyperglycemia?", answer: "Elevated blood glucose level, typically >250 mg/dL." },
        { category: "DKA", question: "What is diabetic ketoacidosis (DKA)?", answer: "Life-threatening complication of diabetes characterized by hyperglycemia, metabolic acidosis, and ketosis." },
        { category: "HHS", question: "What is hyperosmolar hyperglycemic state (HHS)?", answer: "Severe hyperglycemia (>600 mg/dL) with hyperosmolality and dehydration, without significant ketosis; more common in type 2 diabetes." },
        { category: "Kussmaul respirations", question: "What are Kussmaul respirations?", answer: "Deep, rapid breathing seen in DKA as compensation for metabolic acidosis." },
        { category: "Precipitating factors", question: "Name three common triggers of DKA.", answer: "Infection, missed insulin doses, myocardial infarction, stress, surgery." },
        { category: "Symptoms", question: "What are symptoms of DKA?", answer: "Polyuria, polydipsia, weakness, nausea, vomiting, abdominal pain, confusion, Kussmaul respirations, fruity breath." },
        { category: "Fluid resuscitation", question: "What is the initial fluid for hyperglycemic crisis?", answer: "0.9% normal saline." },
        { category: "Adult fluid bolus", question: "What is the initial fluid bolus for an adult with DKA/HHS?", answer: "500-1000 mL crystalloid." },
        { category: "Pediatric fluid bolus", question: "What is the pediatric fluid bolus for DKA/HHS?", answer: "10-20 mL/kg crystalloid." },
        { category: "Maximum adult fluids", question: "What is the maximum total fluid bolus for an adult?", answer: "2000 mL, with reassessment after each bolus." },
        { category: "Maximum pediatric fluids", question: "What is the maximum total fluid bolus for a child?", answer: "60 mL/kg total." },
        { category: "Electrolyte abnormalities", question: "What electrolyte abnormalities are common in DKA?", answer: "Initial hyperkalemia (with total body potassium depletion), hyponatremia (pseudo)." },
        { category: "ECG changes", question: "What ECG changes may occur in DKA due to hyperkalemia?", answer: "Peaked T waves, widened QRS, loss of P waves." },
        { category: "Insulin in prehospital", question: "Is insulin given prehospital for DKA?", answer: "No; focus is on fluid resuscitation and transport." },
        { category: "Red flags", question: "What are red flags in hyperglycemia?", answer: "Hypotension, altered mental status, Kussmaul respirations, severe dehydration." },
        { category: "Elderly considerations", question: "Why are elderly patients at risk for HHS?", answer: "Age-related decline in thirst, polypharmacy, and comorbidities." },
        { category: "Pediatric DKA", question: "What is a common presentation of DKA in children?", answer: "Abdominal pain, vomiting, dehydration, and altered mental status." },
        { category: "Documentation", question: "What must be documented in hyperglycemia?", answer: "RBS, vital signs, fluids given, mental status, precipitating factors." },
        { category: "KPI", question: "What is the key performance indicator for hyperglycemia?", answer: "Administer IV fluid for patients with dehydration or signs of shock." },
        { category: "Transport decision", question: "Should all hyperglycemic patients be transported?", answer: "Yes, especially those with symptoms, DKA/HHS, or underlying causes requiring evaluation." }
    ],
    critical: [
        {
            id: "crit_6_9_1",
            scenario: "A 25-year-old type 1 diabetic is found by friends. She is drowsy, has deep rapid breathing, and smells of acetone. RBS is 450 mg/dL. BP 100/60, HR 110, SpO2 96%. What is your priority?",
            question: "What should you do first?",
            options: [
                { t: "Administer insulin IV", f: "Insulin is not given prehospital; fluids are the priority." },
                { t: "Start fluid resuscitation with normal saline", f: "Correct. Fluid resuscitation is critical in DKA." },
                { t: "Give 50% dextrose", f: "Contraindicated; glucose is already high." },
                { t: "Transport immediately without intervention", f: "Fluids should be started en route." }
            ],
            correct: 1,
            explanation: "DKA with dehydration requires fluid resuscitation; 500-1000 mL normal saline bolus is indicated.",
            kpi: "IV fluids administered."
        },
        {
            id: "crit_6_9_2",
            scenario: "A 60-year-old male with type 2 diabetes is found confused and lethargic. His wife states he has been vomiting and not eating for 2 days. RBS is 800 mg/dL, BP 90/60, HR 120, dry mucous membranes. No fruity breath. What is the most likely diagnosis?",
            question: "What is the most likely diagnosis and next step?",
            options: [
                { t: "DKA; give fluids and insulin", f: "No ketosis, more likely HHS." },
                { t: "HHS; give fluids and transport", f: "Correct. HHS presents with severe hyperglycemia, dehydration, and altered mental status without significant ketosis." },
                { t: "Sepsis; give antibiotics", f: "No signs of infection." },
                { t: "Stroke; perform BEFAST", f: "No focal deficits." }
            ],
            correct: 1,
            explanation: "HHS is more common in elderly type 2 diabetics; fluid resuscitation is the priority.",
            kpi: "IV fluids administered and patient transported."
        },
        {
            id: "crit_6_9_3",
            scenario: "A 35-year-old female with DKA has received 1 L normal saline. Her BP is now 100/70, HR 100, and she is more alert. Her RBS remains 400 mg/dL. What should you do?",
            question: "What is the next step?",
            options: [
                { t: "Give another 500 mL fluid bolus", f: "Correct. Continue fluid resuscitation; BP is improving but still needs volume." },
                { t: "Administer insulin", f: "Not indicated prehospital." },
                { t: "Stop fluids", f: "Not enough; still dehydrated." },
                { t: "Give dextrose", f: "No; glucose is still high." }
            ],
            correct: 0,
            explanation: "Continued fluid resuscitation is needed; reassess after each bolus up to 2000 mL total.",
            kpi: "Fluids continued."
        },
        {
            id: "crit_6_9_4",
            scenario: "A 50-year-old with DKA is vomiting and has a decreased level of consciousness. You are unable to obtain IV access after two attempts. What should you do?",
            question: "What is the appropriate action?",
            options: [
                { t: "Continue attempting IV access", f: "Delay is harmful; consider IO." },
                { t: "Establish IO access", f: "Correct. IO access is indicated when IV is difficult." },
                { t: "Transport without fluids", f: "Fluids are critical; IO should be used." },
                { t: "Give oral fluids", f: "Unsafe with altered mental status." }
            ],
            correct: 1,
            explanation: "IO access provides a rapid route for fluid resuscitation in critically ill patients.",
            kpi: "IO access established and fluids given."
        },
        {
            id: "crit_6_9_5",
            scenario: "A 45-year-old with DKA is now alert after 1 L normal saline. However, you note that he has an irregular pulse and ECG shows peaked T waves. What should you suspect?",
            question: "What is the likely cause and next step?",
            options: [
                { t: "Hyperkalemia; continue fluids and transport", f: "Correct. Hyperkalemia is common in DKA and usually improves with fluids and insulin." },
                { t: "Myocardial infarction; give aspirin", f: "Peaked T waves are not typical of STEMI." },
                { t: "Pulmonary embolism; give oxygen", f: "Not likely." },
                { t: "Hypokalemia; give potassium", f: "Peaked T waves suggest hyperkalemia, not hypokalemia." }
            ],
            correct: 0,
            explanation: "Peaked T waves indicate hyperkalemia; continue fluid resuscitation and transport for definitive care.",
            kpi: "ECG findings documented and patient transported."
        }
    ]
};