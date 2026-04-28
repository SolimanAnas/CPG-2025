/* ========== Chapter 6.10 – Nausea and Vomiting ========== */
window.CPG_DATA = {
    id: "c6-10",
    title: "Nausea and Vomiting",
    shortTitle: "6.10 Nausea and Vomiting",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">?? Nausea and Vomiting</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Identify life-threatening causes associated with nausea and vomiting.</li>
                <li>Improve patient comfort.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Patients presenting with nausea and/or vomiting, including traumatic and non-traumatic causes.</li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>None noted.</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Secondary Survey:</strong> Perform a focused physical examination to identify potential causes of nausea and vomiting.</li>
                <li><strong>Patient History:</strong> Use OPQRST and SAMPLE history to identify potentially serious underlying causes.</li>
                <li><strong>Determine Triage Category:</strong> Red priority for persistent vomiting, hematemesis, signs of shock, or suspected pregnancy complications.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Primary and Secondary Surveys:</strong> Perform as per Universal Care CPG.</li>
                <li><strong>Consider Red Flags:</strong> Persistent vomiting or hematemesis; suspected pregnancy complications (e.g., ectopic pregnancy, miscarriage).</li>
                <li><strong>Evaluate for Signs of Shock or Instability:</strong> Hypotension (SBP <90 mmHg in adults, or age-specific for pediatrics); tachycardia (HR >100 in adults, or age-specific); altered mental status; poor perfusion (cool, clammy skin, delayed capillary refill).</li>
                <li><strong>Consider ALS back-up:</strong> For unstable patients or those requiring advanced care. It is generally not appropriate to request ALS back-up for the administration of antiemetics alone.</li>
                <li><strong>Establish IV Access:</strong> Indicated for dehydration, hypotension, or anticipated medication administration.</li>
                <li><strong>Fluid Resuscitation:</strong> For signs of shock or dehydration:
                    <ul>
                        <li>Adults: 500-1000 mL bolus of normal saline or Ringer's lactate, reassess, repeat as needed.</li>
                        <li>Pediatrics: 20 mL/kg bolus, reassess, repeat as needed.</li>
                    </ul>
                </li>
                <li><strong>Medication Administration:</strong> For nausea/vomiting, administer metoclopramide:
                    <ul>
                        <li>Adults: 10 mg IV/IM (slow IV over 3 minutes, or diluted in 100 mL normal saline as an infusion).</li>
                        <li>Pediatrics: Not recommended for routine pediatric administration due to risk of extrapyramidal effects; use only if clearly indicated and after consultation.</li>
                    </ul>
                </li>
                <li><strong>Pain Management:</strong> Assess and manage pain as per Pain Management CPG.</li>
                <li><strong>Patient Reassessment:</strong> Frequently reassess vital signs, hydration status, and response to interventions.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Nausea and vomiting typically have an underlying cause; do not assume it is benign.</li>
                <li>Prophylactic administration of anti-nausea medications for opiates (e.g., morphine) is not recommended.</li>
                <li>Metoclopramide should not be mixed with morphine.</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li>Common causes: gastroenteritis, appendicitis, bowel obstruction, pancreatitis, DKA, pregnancy, head injury, myocardial infarction, and medication side effects.</li>
                <li>In children, consider intussusception, pyloric stenosis, or viral illness.</li>
                <li>In elderly, consider myocardial infarction, infection, or bowel obstruction.</li>
                <li>Vomiting can lead to dehydration and electrolyte disturbances; assess for signs of hypovolemia.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Onset, duration, frequency, character of vomitus (e.g., bilious, bloody, projectile).</li>
                <li>Associated symptoms (abdominal pain, headache, fever, diarrhea).</li>
                <li>Vital signs, signs of dehydration, mental status.</li>
                <li>Fluids administered, antiemetics given, response.</li>
                <li>Transport decision and hospital notification.</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Administer an antiemetic to all patients with moderate to severe nausea or vomiting (unless contraindicated or inappropriate).</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What is the first step in managing a patient with nausea and vomiting?",
            options: ["Administer antiemetic", "Perform primary survey (ABC)", "Establish IV access", "Transport immediately"],
            correct: 1,
            explanation: "The primary survey (Airway, Breathing, Circulation) is always the priority to identify life threats."
        },
        {
            q: "Which of the following is a red flag in a patient with nausea and vomiting?",
            options: ["Vomiting after eating", "Hematemesis (blood in vomit)", "Nausea without vomiting", "Vomiting lasting 1 hour"],
            correct: 1,
            explanation: "Hematemesis indicates possible upper GI bleeding and requires urgent evaluation."
        },
        {
            q: "What is the dose of metoclopramide for an adult with nausea?",
            options: ["5 mg IV", "10 mg IV/IM", "20 mg IV", "2 mg IV"],
            correct: 1,
            explanation: "Adult dose of metoclopramide is 10 mg IV/IM."
        },
        {
            q: "A 25-year-old female with nausea and vomiting has a BP of 90/60 and HR 110. What should you do?",
            options: ["Give metoclopramide", "Start fluid resuscitation", "Transport without intervention", "Give oral fluids"],
            correct: 1,
            explanation: "Hypotension and tachycardia suggest hypovolemia; fluid resuscitation is indicated."
        },
        {
            q: "What is the initial fluid bolus for an adult with signs of dehydration from vomiting?",
            options: ["250 mL", "500-1000 mL", "2000 mL", "No fluids"],
            correct: 1,
            explanation: "Adults with dehydration should receive 500-1000 mL crystalloid bolus."
        },
        {
            q: "Which of the following is a contraindication to metoclopramide?",
            options: ["History of epilepsy", "Nausea from gastroenteritis", "Post-operative nausea", "Pregnancy"],
            correct: 0,
            explanation: "Metoclopramide is contraindicated in epilepsy due to risk of seizures."
        },
        {
            q: "A patient with nausea and vomiting has a history of head trauma. What should you suspect?",
            options: ["Increased intracranial pressure", "Gastroenteritis", "Migraine", "Food poisoning"],
            correct: 0,
            explanation: "Vomiting after head trauma may indicate increased ICP; assess neurological status."
        },
        {
            q: "What is the pediatric dose of metoclopramide?",
            options: ["0.1 mg/kg", "0.5 mg/kg", "Not routinely recommended", "1 mg/kg"],
            correct: 2,
            explanation: "Metoclopramide is not routinely recommended for pediatrics due to risk of extrapyramidal effects."
        },
        {
            q: "Which of the following is a sign of dehydration in a child with vomiting?",
            options: ["Sunken fontanelle", "Dry mucous membranes", "Decreased urine output", "All of the above"],
            correct: 3,
            explanation: "All are signs of dehydration in children."
        },
        {
            q: "A patient with nausea and vomiting has a blood glucose of 450 mg/dL and deep breathing. What is the likely cause?",
            options: ["Gastroenteritis", "Diabetic ketoacidosis (DKA)", "Appendicitis", "Pancreatitis"],
            correct: 1,
            explanation: "Nausea, vomiting, hyperglycemia, and deep breathing are classic for DKA."
        },
        {
            q: "What is the target SpO2 for a patient with nausea and vomiting?",
            options: ["=90%", "=94%", "=88%", "100%"],
            correct: 1,
            explanation: "Maintain SpO2 =94% to prevent hypoxia."
        },
        {
            q: "Why should metoclopramide not be mixed with morphine?",
            options: ["They form a precipitate", "They cause respiratory depression", "They cause arrhythmias", "No interaction"],
            correct: 0,
            explanation: "Metoclopramide and morphine should not be mixed in the same syringe as they may precipitate."
        },
        {
            q: "A patient with nausea and vomiting has a history of migraine. What is a common associated symptom?",
            options: ["Photophobia", "Aura", "Unilateral headache", "All of the above"],
            correct: 3,
            explanation: "Migraine often presents with nausea, vomiting, headache, photophobia, and aura."
        },
        {
            q: "Which of the following is a potential cause of vomiting in a pregnant patient?",
            options: ["Hyperemesis gravidarum", "Ectopic pregnancy", "Appendicitis", "All of the above"],
            correct: 3,
            explanation: "All are possible; early pregnancy requires consideration of ectopic pregnancy."
        },
        {
            q: "What is the maximum total fluid bolus for an adult with dehydration from vomiting?",
            options: ["500 mL", "1000 mL", "2000 mL", "No maximum"],
            correct: 2,
            explanation: "Up to 2000 mL crystalloid may be given, with reassessment after each bolus."
        },
        {
            q: "A patient with nausea and vomiting has a BP of 80/50 after 1000 mL normal saline. What should you do?",
            options: ["Give another fluid bolus", "Start vasopressors", "Transport without further fluids", "Give metoclopramide"],
            correct: 0,
            explanation: "Continue fluid resuscitation up to 2000 mL; if no response, consider other causes."
        },
        {
            q: "Which of the following is a side effect of metoclopramide?",
            options: ["Extrapyramidal symptoms (dystonia)", "Tachycardia", "Hypotension", "All of the above"],
            correct: 3,
            explanation: "Metoclopramide can cause extrapyramidal symptoms, tachycardia, and hypotension."
        },
        {
            q: "A patient with nausea and vomiting has a history of alcohol abuse and presents with epigastric pain. What should you suspect?",
            options: ["Gastritis", "Pancreatitis", "Hepatitis", "All of the above"],
            correct: 3,
            explanation: "Alcohol use can cause gastritis, pancreatitis, and hepatitis, all of which may present with nausea and vomiting."
        },
        {
            q: "What is the pediatric fluid bolus for a child with vomiting and signs of shock?",
            options: ["10 mL/kg", "20 mL/kg", "40 mL/kg", "5 mL/kg"],
            correct: 1,
            explanation: "Initial bolus is 20 mL/kg crystalloid."
        },
        {
            q: "Which of the following is a red flag in a patient with vomiting?",
            options: ["Projectile vomiting in an infant", "Bilious vomitus", "Vomiting after head injury", "All of the above"],
            correct: 3,
            explanation: "All are red flags requiring urgent evaluation."
        },
        {
            q: "A patient with nausea and vomiting is on chemotherapy. What should you consider?",
            options: ["They may be immunocompromised", "They may have electrolyte abnormalities", "They may have a central line infection", "All of the above"],
            correct: 3,
            explanation: "Chemotherapy patients are at risk for infection, electrolyte imbalance, and complications from central lines."
        },
        {
            q: "What is the role of ondansetron in prehospital nausea management?",
            options: ["It is available in DCAS formulary", "It is not in DCAS formulary; metoclopramide is used", "It is first-line", "It is only for pediatrics"],
            correct: 1,
            explanation: "Ondansetron is not part of the DCAS formulary; metoclopramide is the antiemetic of choice."
        },
        {
            q: "A patient with nausea and vomiting has a history of appendectomy. What condition should you consider?",
            options: ["Bowel obstruction", "Gastroenteritis", "Pancreatitis", "Renal colic"],
            correct: 0,
            explanation: "Previous abdominal surgery increases risk of adhesive bowel obstruction."
        },
        {
            q: "What is the maximum single dose of metoclopramide for an adult?",
            options: ["5 mg", "10 mg", "20 mg", "50 mg"],
            correct: 1,
            explanation: "Single dose is 10 mg; may repeat if needed, but total daily dose should not exceed 30-40 mg."
        },
        {
            q: "A patient with nausea and vomiting has a potassium level of 2.8 mmol/L. What is the risk?",
            options: ["Cardiac arrhythmias", "Muscle weakness", "Paralytic ileus", "All of the above"],
            correct: 3,
            explanation: "Hypokalemia can cause arrhythmias, weakness, and ileus."
        },
        {
            q: "Which of the following is a contraindication to metoclopramide?",
            options: ["Suspected bowel obstruction", "Parkinson's disease", "Pheochromocytoma", "All of the above"],
            correct: 3,
            explanation: "Metoclopramide is contraindicated in bowel obstruction, Parkinson's, and pheochromocytoma."
        },
        {
            q: "A patient with nausea and vomiting has a blood glucose of 45 mg/dL. What should you do?",
            options: ["Give metoclopramide", "Treat hypoglycemia first", "Give IV fluids", "Transport only"],
            correct: 1,
            explanation: "Hypoglycemia is a life threat and must be treated before antiemetics."
        },
        {
            q: "What is the key performance indicator for nausea and vomiting?",
            options: ["Administer oxygen", "Give IV fluids for dehydration", "Administer antiemetic for moderate to severe symptoms", "Perform 12-lead ECG"],
            correct: 2,
            explanation: "Administering an antiemetic to patients with moderate to severe nausea or vomiting is a key KPI."
        },
        {
            q: "A patient with nausea and vomiting has chest pain and diaphoresis. What should you suspect?",
            options: ["Gastroesophageal reflux", "Myocardial infarction", "Peptic ulcer", "Pancreatitis"],
            correct: 1,
            explanation: "Nausea and vomiting can be atypical symptoms of myocardial infarction, especially in women and diabetics."
        },
        {
            q: "Why should you avoid giving oral antiemetics to a patient with vomiting?",
            options: ["They may be vomited before absorption", "They cause sedation", "They interact with other drugs", "They are less effective"],
            correct: 0,
            explanation: "Oral medications may be vomited; IV/IM route is preferred."
        }
    ],
    flashcards: [
        { category: "Definition", question: "What is nausea?", answer: "Subjective sensation of wanting to vomit." },
        { category: "Causes", question: "Name three common causes of nausea and vomiting.", answer: "Gastroenteritis, pregnancy, medication side effects, bowel obstruction, DKA, head injury." },
        { category: "Red flags", question: "What are red flags in nausea and vomiting?", answer: "Hematemesis, severe abdominal pain, altered mental status, hypotension, projectile vomiting, bilious vomiting." },
        { category: "Dehydration signs", question: "What are signs of dehydration from vomiting?", answer: "Dry mucous membranes, decreased skin turgor, tachycardia, hypotension, oliguria." },
        { category: "Metoclopramide dose", question: "What is the dose of metoclopramide for an adult?", answer: "10 mg IV/IM (slow IV over 3 minutes)." },
        { category: "Metoclopramide contraindications", question: "What are contraindications to metoclopramide?", answer: "Epilepsy, bowel obstruction, Parkinson's disease, pheochromocytoma, allergy." },
        { category: "Fluid resuscitation", question: "What is the initial fluid bolus for an adult with vomiting and signs of dehydration?", answer: "500-1000 mL normal saline." },
        { category: "Pediatric fluid bolus", question: "What is the pediatric fluid bolus for vomiting with dehydration?", answer: "20 mL/kg crystalloid." },
        { category: "Extrapyramidal symptoms", question: "What are extrapyramidal symptoms (EPS)?", answer: "Dystonia, oculogyric crisis, torticollis, akathisia; can occur with metoclopramide." },
        { category: "Treatment of EPS", question: "How are extrapyramidal symptoms treated?", answer: "Diphenhydramine 1 mg/kg IV/IM." },
        { category: "Pregnancy considerations", question: "What conditions in pregnancy can cause nausea and vomiting?", answer: "Hyperemesis gravidarum, ectopic pregnancy, pre-eclampsia, appendicitis." },
        { category: "Head injury", question: "Why is vomiting after head injury concerning?", answer: "May indicate increased intracranial pressure." },
        { category: "Diabetic ketoacidosis", question: "How does DKA present with nausea and vomiting?", answer: "Nausea, vomiting, abdominal pain, hyperglycemia, acidosis, Kussmaul respirations." },
        { category: "Myocardial infarction", question: "Why can myocardial infarction cause nausea and vomiting?", answer: "Vagal stimulation or inferior wall ischemia can cause GI symptoms." },
        { category: "Bowel obstruction", question: "What are signs of bowel obstruction?", answer: "Vomiting (bilious or feculent), abdominal distension, pain, obstipation." },
        { category: "Documentation", question: "What should be documented in nausea and vomiting?", answer: "Onset, character of vomitus, associated symptoms, vital signs, hydration status, treatment." },
        { category: "KPI", question: "What is the key performance indicator for nausea and vomiting?", answer: "Administer antiemetic to patients with moderate to severe symptoms (unless contraindicated)." },
        { category: "Pediatric note", question: "Why is metoclopramide not recommended in children?", answer: "High risk of extrapyramidal side effects." },
        { category: "Elderly considerations", question: "What should be considered in elderly with vomiting?", answer: "Increased risk of dehydration, electrolyte imbalance, and aspiration." },
        { category: "Prophylactic antiemetics", question: "Should antiemetics be given prophylactically with opioids?", answer: "No, routine prophylactic antiemetics are not recommended; give only if nausea occurs." }
    ],
    critical: [
        {
            id: "crit_6_10_1",
            scenario: "A 30-year-old female presents with severe nausea, vomiting, and abdominal pain. She is 8 weeks pregnant. BP 90/60, HR 110, pale. What is your priority?",
            question: "What should you do first?",
            options: [
                { t: "Give metoclopramide", f: "Antiemetic is not the priority; she may have ectopic pregnancy." },
                { t: "Establish IV access and give fluid bolus", f: "Correct. She is in shock; fluid resuscitation is critical." },
                { t: "Perform a pelvic exam", f: "Not within EMS scope; transport promptly." },
                { t: "Give oral glucose", f: "Not indicated." }
            ],
            correct: 1,
            explanation: "Hypotension and tachycardia in early pregnancy with abdominal pain suggest possible ectopic pregnancy; treat shock and transport urgently.",
            kpi: "IV fluids administered and patient transported."
        },
        {
            id: "crit_6_10_2",
            scenario: "A 60-year-old male with nausea and vomiting for 12 hours. He has a history of diabetes and is on insulin. RBS 450 mg/dL, BP 100/70, HR 110, dry mucous membranes. He is alert. What is the likely cause?",
            question: "What is the most likely diagnosis and next step?",
            options: [
                { t: "Gastroenteritis; give metoclopramide", f: "Hyperglycemia suggests DKA." },
                { t: "Diabetic ketoacidosis; give fluid bolus and transport", f: "Correct. Nausea, vomiting, and hyperglycemia in a diabetic suggest DKA." },
                { t: "Pancreatitis; give pain relief", f: "Possible, but DKA is more likely given history." },
                { t: "Myocardial infarction; perform ECG", f: "Not the priority." }
            ],
            correct: 1,
            explanation: "DKA presents with nausea, vomiting, hyperglycemia, and dehydration; fluid resuscitation is key.",
            kpi: "IV fluids administered."
        },
        {
            id: "crit_6_10_3",
            scenario: "A 5-year-old child with vomiting and diarrhea for 1 day. He is lethargic, has dry mucous membranes, and a sunken fontanelle. BP 80/50, HR 140. What should you do?",
            question: "What is the priority?",
            options: [
                { t: "Give oral rehydration solution", f: "He is in shock; oral is unsafe." },
                { t: "Establish IV access and give 20 mL/kg normal saline bolus", f: "Correct. The child is in hypovolemic shock." },
                { t: "Administer metoclopramide", f: "Not indicated; fluids are priority." },
                { t: "Transport without intervention", f: "Fluids should be given en route." }
            ],
            correct: 1,
            explanation: "Signs of shock in a child require immediate fluid resuscitation.",
            kpi: "IV fluids administered."
        },
        {
            id: "crit_6_10_4",
            scenario: "A 45-year-old male with nausea and vomiting after heavy alcohol use. He has epigastric pain radiating to the back. BP 110/70, HR 100, tender epigastrium. What is the likely cause?",
            question: "What should you suspect and do?",
            options: [
                { t: "Acute pancreatitis; give pain relief and transport", f: "Correct. Epigastric pain radiating to back after alcohol suggests pancreatitis." },
                { t: "Gastroenteritis; give metoclopramide", f: "Pain pattern is more consistent with pancreatitis." },
                { t: "Peptic ulcer; give antacid", f: "Not a prehospital intervention." },
                { t: "Myocardial infarction; perform ECG", f: "Less likely given history and pain pattern." }
            ],
            correct: 0,
            explanation: "Pancreatitis presents with epigastric pain radiating to back, nausea, vomiting, and history of alcohol use or gallstones.",
            kpi: "Pain assessed and patient transported."
        },
        {
            id: "crit_6_10_5",
            scenario: "A 70-year-old female with nausea and vomiting. She is on warfarin and has a history of atrial fibrillation. She has severe headache and confusion. BP 180/100, HR 80. What should you suspect?",
            question: "What is the most likely diagnosis?",
            options: [
                { t: "Gastroenteritis", f: "Headache and confusion are not typical." },
                { t: "Intracranial hemorrhage", f: "Correct. Patient on anticoagulant with headache and confusion suggests possible intracranial bleed." },
                { t: "Migraine", f: "Not likely given age and anticoagulation." },
                { t: "Hypertensive emergency", f: "Possible, but anticoagulation increases bleed risk." }
            ],
            correct: 1,
            explanation: "Anticoagulated patient with new headache, confusion, and vomiting should be evaluated for intracranial hemorrhage.",
            kpi: "Stroke/bleed assessment performed and patient transported urgently."
        }
    ]
};