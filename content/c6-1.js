/* ========== Chapter 6.1 – Abdominal Pain ========== */
window.CPG_DATA = {
    id: "c6-1",
    title: "Abdominal Pain",
    shortTitle: "6.1 Abdominal Pain",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">🩺 Abdominal Pain</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Identify life‑threatening causes of abdominal pain.</li>
                <li>Improve patient comfort through appropriate pain management.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Abdominal pain or discomfort related to a non‑traumatic cause.</li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>Abdominal pain due to trauma.</li>
                <li>Abdominal pain related to pregnancy (see PV Hemorrhage in Pregnancy or Childbirth CPG).</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Abdominal examination:</strong> Inspect for distension, bruising, visible abnormalities. Palpate for tenderness, rigidity, masses. Note rebound tenderness or guarding.</li>
                <li><strong>Patient history:</strong> Use OPQRST and SAMPLE to identify likely cause. Investigate possibility of pregnancy.</li>
                <li><strong>Consider red flags:</strong> Severe unrelenting pain, fever (>38°C), persistent vomiting or hematemesis, suspected pregnancy complications (ectopic, miscarriage).</li>
                <li><strong>Evaluate for shock or instability:</strong> Hypotension (SBP <90 mmHg), tachycardia, altered mental status, poor perfusion.</li>
                <li><strong>12‑lead ECG:</strong> Consider in patients >40 years or with ≥3 cardiac risk factors (smoking, obesity, diabetes, hypertension, high cholesterol, cardiovascular disease, family history).</li>
                <li><strong>Determine triage category:</strong> Per Patient Triage Categories CPG.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Primary and secondary survey:</strong> As per Universal Care CPG.</li>
                <li><strong>Consider ALS back‑up:</strong> As per Universal Care CPG.</li>
                <li><strong>Establish IV access:</strong> Indicated for dehydration, hypotension, or anticipated medication.</li>
                <li><strong>Fluid resuscitation:</strong> If signs of shock or dehydration: adults 500‑1000 mL bolus, reassess; pediatrics 20 mL/kg bolus, reassess.</li>
                <li><strong>Pain management:</strong> Assess and manage as per Pain Management CPG.</li>
                <li><strong>If nausea/vomiting present:</strong> Manage as per Nausea & Vomiting CPG.</li>
                <li><strong>Patient reassessment:</strong> Frequently reassess per Universal Care CPG.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Abdominal pain can be a medical emergency poorly detected prehospitally. All patients with non‑specific abdominal pain or persistent vomiting should be recommended to see a doctor.</li>
                <li>Patients with early shock signs, unstable vitals, or suspected serious cause (e.g., appendicitis) should be transported routinely.</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li>Common causes: gastroenteritis, appendicitis, bowel obstruction, pancreatitis, kidney stones, ectopic pregnancy, DKA, mesenteric ischemia.</li>
                <li>Possible alternative causes: myocardial infarction (especially inferior MI), pneumonia, pulmonary embolism, aortic dissection, AAA.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>Identification, mechanism/medical complaint, injuries/information (relevant history), signs (vital signs, abdominal exam findings), treatment (medications, IV fluids, pain scores), allergies, medications, background, other (ECG findings, pregnancy status).</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Assess and document initial and post‑treatment pain score.</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "Which of the following is a red flag in a patient with abdominal pain?",
            options: ["Mild tenderness", "Fever >38°C", "Intermittent pain", "Flatulence"],
            correct: 1,
            explanation: "Fever suggests infection or inflammation and is a red flag for serious pathology."
        },
        {
            q: "A 55‑year‑old male with epigastric pain, nausea, and diaphoresis. He has a history of smoking and hypertension. What should you consider?",
            options: ["Gastroenteritis", "Inferior myocardial infarction", "Pancreatitis", "Cholecystitis"],
            correct: 1,
            explanation: "Epigastric pain with cardiac risk factors may be an inferior MI. Perform a 12‑lead ECG."
        },
        {
            q: "What is the initial fluid bolus for an adult with abdominal pain and signs of shock?",
            options: ["100 mL", "250‑500 mL", "500‑1000 mL", "2000 mL"],
            correct: 2,
            explanation: "Initial fluid bolus for adults is 500‑1000 mL crystalloid, reassess."
        },
        {
            q: "A 30‑year‑old female with RLQ pain, nausea, and low‑grade fever. What is a likely diagnosis?",
            options: ["Appendicitis", "Ectopic pregnancy", "Ovarian cyst", "Gastroenteritis"],
            correct: 0,
            explanation: "RLQ pain with fever suggests appendicitis, but ectopic pregnancy must be ruled out in females of childbearing age."
        },
        {
            q: "What is the first step in pain management for a patient with severe abdominal pain?",
            options: ["IV morphine", "Assess pain scale and treat per Pain CPG", "Oral paracetamol", "No analgesia until diagnosis"],
            correct: 1,
            explanation: "Assess pain using a scale and treat according to Pain Management CPG. Analgesia should not be withheld."
        },
        {
            q: "A patient with abdominal pain is hypotensive and tachycardic. What is the priority?",
            options: ["Pain relief", "IV fluid resuscitation", "Transport immediately", "12‑lead ECG"],
            correct: 1,
            explanation: "Treat shock with fluid resuscitation while preparing for transport."
        },
        {
            q: "Which of the following is a contraindication to giving opioids for abdominal pain?",
            options: ["Hypotension", "Nausea", "Age >65", "None, use with caution"],
            correct: 3,
            explanation: "Opioids can be used with caution; hypotension is a relative contraindication, but pain relief is important."
        },
        {
            q: "A 70‑year‑old male with sudden onset severe tearing abdominal pain radiating to the back. He has a history of hypertension. What should you suspect?",
            options: ["Appendicitis", "AAA rupture or dissection", "Pancreatitis", "Bowel obstruction"],
            correct: 1,
            explanation: "Tearing pain radiating to the back in an elderly patient with hypertension suggests abdominal aortic aneurysm or dissection."
        },
        {
            q: "What is the role of a 12‑lead ECG in abdominal pain?",
            options: ["Routine for all patients", "Only if >40 years or cardiac risk factors", "Not indicated", "Only if chest pain"],
            correct: 1,
            explanation: "Consider ECG in patients >40 years or with ≥3 cardiac risk factors to rule out MI."
        },
        {
            q: "A 25‑year‑female with lower abdominal pain and vaginal bleeding. What must be considered?",
            options: ["Ectopic pregnancy", "Appendicitis", "PID", "Ovarian torsion"],
            correct: 0,
            explanation: "Ectopic pregnancy is a life‑threatening emergency; assess pregnancy status and transport rapidly."
        },
        {
            q: "What is the target pain score reduction after analgesia?",
            options: ["At least 1 point", "At least 2 points", "At least 3 points", "To zero"],
            correct: 2,
            explanation: "Aim for a reduction of at least 3 points on a 0‑10 scale."
        },
        {
            q: "Which of the following is a sign of peritonitis?",
            options: ["Rebound tenderness", "Guarding", "Rigidity", "All of the above"],
            correct: 3,
            explanation: "Rebound tenderness, guarding, and rigidity are signs of peritoneal irritation."
        },
        {
            q: "A patient with abdominal pain has a blood glucose of 450 mg/dL. What condition should be considered?",
            options: ["DKA", "Pancreatitis", "Gastroenteritis", "Appendicitis"],
            correct: 0,
            explanation: "Hyperglycemia with abdominal pain may indicate DKA; check for other signs."
        },
        {
            q: "What is the appropriate analgesia for moderate abdominal pain in an adult?",
            options: ["IV morphine", "Oral paracetamol", "IV paracetamol", "Ketamine"],
            correct: 2,
            explanation: "IV paracetamol is appropriate for moderate pain; opioids for severe."
        },
        {
            q: "A patient with abdominal pain is vomiting. What medication can be considered?",
            options: ["Metoclopramide", "Ondansetron", "Prochlorperazine", "All of the above"],
            correct: 3,
            explanation: "Antiemetics can be used; metoclopramide is commonly available."
        },
        {
            q: "What is the most common cause of abdominal pain in the elderly?",
            options: ["Appendicitis", "Bowel obstruction", "Cholecystitis", "Diverticulitis"],
            correct: 2,
            explanation: "Cholecystitis and diverticulitis are common; presentation may be atypical."
        },
        {
            q: "A patient with known AAA complains of sudden back pain and hypotension. What is the priority?",
            options: ["Fluid resuscitation", "Pain relief", "Rapid transport to vascular centre", "12‑lead ECG"],
            correct: 2,
            explanation: "Suspected ruptured AAA requires immediate transport to a vascular centre."
        },
        {
            q: "Which of the following is NOT a cardiac risk factor?",
            options: ["Smoking", "Obesity", "Asthma", "Diabetes"],
            correct: 2,
            explanation: "Asthma is not a cardiac risk factor; smoking, obesity, diabetes, hypertension, hyperlipidemia, and family history are."
        },
        {
            q: "A patient with abdominal pain has a rigid, board‑like abdomen. What does this indicate?",
            options: ["Bowel obstruction", "Peritonitis", "Constipation", "Gas"],
            correct: 1,
            explanation: "Rigid abdomen suggests peritonitis, often from perforation."
        },
        {
            q: "What is the maximum fluid bolus for an adult with abdominal pain and shock?",
            options: ["1000 mL", "1500 mL", "2000 mL", "No maximum"],
            correct: 2,
            explanation: "Maximum total fluid bolus is 2000 mL, with frequent reassessment."
        },
        {
            q: "A 40‑year‑old male with epigastric pain radiating to the back, relieved by leaning forward. What is the likely diagnosis?",
            options: ["Pancreatitis", "Cholecystitis", "Gastritis", "MI"],
            correct: 0,
            explanation: "Pancreatitis pain often radiates to the back and may be relieved by leaning forward."
        },
        {
            q: "In a female of childbearing age with abdominal pain, what question is essential?",
            options: ["Last menstrual period", "Contraception use", "History of STIs", "All of the above"],
            correct: 3,
            explanation: "LMP helps assess possibility of pregnancy; contraception and STI history may guide differential."
        },
        {
            q: "What is the initial management for suspected ectopic pregnancy?",
            options: ["IV fluids, pain relief, rapid transport", "Pelvic exam", "Give oxytocin", "Ultrasound"],
            correct: 0,
            explanation: "Supportive care and rapid transport to a facility with surgical capability."
        },
        {
            q: "A patient with abdominal pain has a history of gastric bypass surgery. What complication should be considered?",
            options: ["Internal hernia", "Bowel obstruction", "Anastomotic leak", "All of the above"],
            correct: 3,
            explanation: "Post‑surgical patients are at risk for various complications; transport for evaluation."
        },
        {
            q: "Which of the following is a sign of hypovolemic shock in abdominal pain?",
            options: ["Tachycardia", "Hypotension", "Delayed capillary refill", "All of the above"],
            correct: 3,
            explanation: "All are signs of shock; early recognition is key."
        },
        {
            q: "A patient with abdominal pain and jaundice may have which condition?",
            options: ["Cholecystitis", "Choledocholithiasis", "Pancreatitis", "Hepatitis"],
            correct: 3,
            explanation: "Jaundice suggests liver or biliary involvement; hepatitis, cholangitis, or gallstones."
        },
        {
            q: "What is the role of Trendelenburg position in abdominal pain?",
            options: ["Improve cardiac output", "Not recommended", "Reduce pain", "Prevent aspiration"],
            correct: 1,
            explanation: "Trendelenburg is not recommended; it may impair breathing."
        },
        {
            q: "A patient with abdominal pain has a history of atrial fibrillation. What should you consider?",
            options: ["Mesenteric ischemia", "Splenic infarction", "Renal infarction", "All of the above"],
            correct: 3,
            explanation: "AF can cause emboli to mesenteric, splenic, or renal arteries."
        },
        {
            q: "What is the correct triage category for a patient with abdominal pain and signs of shock?",
            options: ["Green", "Yellow", "Red", "Blue"],
            correct: 2,
            explanation: "Signs of shock indicate Red Priority."
        },
        {
            q: "How often should you reassess a stable patient with abdominal pain?",
            options: ["Every 5 min", "Every 10 min", "Every 15 min", "Every 30 min"],
            correct: 2,
            explanation: "Yellow/green priority patients require reassessment every 15 minutes."
        }
    ],
    flashcards: [
        { category: "Red flags", question: "Name four red flags in abdominal pain.", answer: "Severe unrelenting pain, fever >38°C, persistent vomiting/hematemesis, suspected ectopic pregnancy." },
        { category: "Causes", question: "List five common causes of abdominal pain.", answer: "Gastroenteritis, appendicitis, bowel obstruction, pancreatitis, kidney stones, cholecystitis." },
        { category: "Causes", question: "What cardiac conditions can present as abdominal pain?", answer: "Inferior MI, aortic dissection, AAA." },
        { category: "Examination", question: "What does rebound tenderness indicate?", answer: "Peritoneal irritation (peritonitis)." },
        { category: "Examination", question: "What is guarding?", answer: "Involuntary muscle contraction over an inflamed area." },
        { category: "Examination", question: "What does a rigid, board‑like abdomen suggest?", answer: "Perforation with peritonitis." },
        { category: "Assessment", question: "Why is a 12‑lead ECG indicated in some abdominal pain patients?", answer: "To rule out inferior MI or ischaemia." },
        { category: "Cardiac risk factors", question: "List cardiac risk factors that warrant ECG in abdominal pain.", answer: "Age >40, smoking, obesity, diabetes, hypertension, high cholesterol, CVD, family history." },
        { category: "Shock", question: "What are signs of shock in abdominal pain?", answer: "Hypotension, tachycardia, altered mental status, poor perfusion." },
        { category: "Fluids", question: "What is the initial fluid bolus for an adult with abdominal pain and shock?", answer: "500‑1000 mL crystalloid." },
        { category: "Fluids pediatric", question: "What is the initial fluid bolus for a child with abdominal pain and shock?", answer: "20 mL/kg." },
        { category: "Pain management", question: "What is the goal of pain management in abdominal pain?", answer: "Reduce pain score by at least 3 points." },
        { category: "Pain scale", question: "What pain scales are used for adults and children?", answer: "0‑10 numeric scale; Wong‑Baker FACES for children." },
        { category: "Nausea", question: "What antiemetic can be used for vomiting with abdominal pain?", answer: "Metoclopramide 10 mg IV/IM." },
        { category: "Ectopic pregnancy", question: "What are signs of ectopic pregnancy?", answer: "Lower abdominal pain, vaginal bleeding, missed period, possibly shock." },
        { category: "Ectopic management", question: "What is the prehospital management of suspected ectopic?", answer: "IV fluids, pain relief, rapid transport." },
        { category: "AAA", question: "What are symptoms of ruptured AAA?", answer: "Sudden tearing back/abdominal pain, hypotension, pulsatile mass." },
        { category: "AAA management", question: "What is the priority for suspected AAA?", answer: "Rapid transport to vascular centre." },
        { category: "Pancreatitis", question: "What is a classic symptom of pancreatitis?", answer: "Epigastric pain radiating to the back, relieved by leaning forward." },
        { category: "Appendicitis", question: "What are typical symptoms of appendicitis?", answer: "RLQ pain, fever, nausea, anorexia." },
        { category: "Cholecystitis", question: "What are symptoms of cholecystitis?", answer: "RUQ pain, fever, nausea, pain after fatty meals." },
        { category: "Bowel obstruction", question: "What are signs of bowel obstruction?", answer: "Distension, vomiting, constipation, abdominal pain." },
        { category: "Diverticulitis", question: "What are symptoms of diverticulitis?", answer: "LLQ pain, fever, change in bowel habits." },
        { category: "Mesenteric ischaemia", question: "Who is at risk for mesenteric ischaemia?", answer: "Elderly with AF, heart failure, or hypercoagulable states." },
        { category: "DKA", question: "What abdominal symptoms can DKA cause?", answer: "Nausea, vomiting, abdominal pain." },
        { category: "KPI", question: "What is the key performance indicator for abdominal pain?", answer: "Assess and document pain score before and after treatment." },
        { category: "Transport", question: "When should a patient with abdominal pain be transported?", answer: "If unstable, red flags present, or serious cause suspected." },
        { category: "Reassessment", question: "How often should a stable patient with abdominal pain be reassessed?", answer: "Every 15 minutes." },
        { category: "Unstable", question: "How often should an unstable patient be reassessed?", answer: "Every 5 minutes." },
        { category: "Pregnancy test", question: "Why ask about last menstrual period?", answer: "To assess possibility of pregnancy and ectopic." }
    ],
    critical: [
        {
            id: "crit_6_1_1",
            scenario: "A 65‑year‑old male presents with sudden onset of severe epigastric pain radiating to the back. He is diaphoretic, with BP 85/50, HR 120, and a pulsatile abdominal mass. What is your priority?",
            question: "What should you do?",
            options: [
                { t: "Give morphine for pain", f: "Pain relief is important, but transport is urgent." },
                { t: "Start IV fluids and transport emergently to a vascular centre", f: "Correct. Suspected ruptured AAA requires immediate transport." },
                { t: "Perform 12‑lead ECG", f: "Can be done en route." },
                { t: "Give GTN for presumed MI", f: "GTN may worsen hypotension." }
            ],
            correct: 1,
            explanation: "This is a classic presentation of ruptured AAA. Fluid resuscitation and immediate transport to a vascular centre are critical.",
            kpi: "Transport initiated <10 minutes."
        },
        {
            id: "crit_6_1_2",
            scenario: "A 28‑year‑old female with lower abdominal pain and light vaginal bleeding. She is 8 weeks pregnant by LMP. BP 100/60, HR 110. What is the likely diagnosis and priority?",
            question: "What should you suspect and do?",
            options: [
                { t: "Miscarriage – provide emotional support", f: "Ectopic pregnancy is more likely with pain and bleeding." },
                { t: "Ectopic pregnancy – IV access, fluid, rapid transport", f: "Correct. Ectopic can rupture and cause life‑threatening haemorrhage." },
                { t: "Normal pregnancy – reassure", f: "Incorrect." },
                { t: "PID – give antibiotics", f: "Not indicated prehospital." }
            ],
            correct: 1,
            explanation: "Ectopic pregnancy is a possibility with pain, bleeding, and pregnancy. Establish IV, give fluids if hypotensive, and transport rapidly.",
            kpi: "Transport initiated; hospital notified."
        },
        {
            id: "crit_6_1_3",
            scenario: "A 55‑year‑old male with epigastric pain, nausea, and diaphoresis. He has hypertension and smokes. ECG shows ST elevation in leads II, III, aVF. BP 130/80, HR 90. What is your priority?",
            question: "What should you do?",
            options: [
                { t: "Give aspirin and GTN, transport to PCI centre", f: "Correct. This is an inferior STEMI." },
                { t: "Treat as abdominal pain with paracetamol", f: "Incorrect." },
                { t: "Give morphine and observe", f: "Aspirin and GTN are first‑line." },
                { t: "Transport to nearest hospital", f: "PCI centre is preferred if available." }
            ],
            correct: 0,
            explanation: "Inferior STEMI can present with epigastric pain. Aspirin, GTN, and transport to a PCI‑capable hospital are priorities.",
            kpi: "Aspirin given; hospital notified."
        },
        {
            id: "crit_6_1_4",
            scenario: "A 40‑year‑old female with RLQ pain, fever 38.5°C, and vomiting. She is tender in the RLQ with guarding. Vital signs stable. What is the likely diagnosis and appropriate action?",
            question: "What should you do?",
            options: [
                { t: "Appendicitis – transport for surgical evaluation", f: "Correct. Suspected appendicitis requires hospital evaluation." },
                { t: "Gastroenteritis – treat with antiemetics and observe", f: "Fever and localised tenderness suggest appendicitis." },
                { t: "PID – give antibiotics", f: "Not indicated prehospital." },
                { t: "Renal colic – give analgesia and discharge", f: "Incorrect." }
            ],
            correct: 0,
            explanation: "RLQ pain with fever and guarding suggests appendicitis. Transport to hospital for surgical evaluation.",
            kpi: "Pain assessed; transport initiated."
        },
        {
            id: "crit_6_1_5",
            scenario: "A 70‑year‑old male with sudden diffuse abdominal pain, distension, and vomiting. He has a history of atrial fibrillation. Vital signs: BP 100/70, HR 130, irregular. What should you suspect?",
            question: "What is the likely diagnosis?",
            options: [
                { t: "Bowel obstruction", f: "Possible, but AF suggests embolism." },
                { t: "Mesenteric ischaemia", f: "Correct. AF increases risk of mesenteric artery embolism." },
                { t: "Diverticulitis", f: "Less likely with diffuse pain." },
                { t: "Gastroenteritis", f: "Unlikely with AF and acute onset." }
            ],
            correct: 1,
            explanation: "Sudden abdominal pain in a patient with AF suggests mesenteric ischaemia. Rapid transport is essential.",
            kpi: "Transport initiated; hospital notified of suspected mesenteric ischaemia."
        }
    ]
};