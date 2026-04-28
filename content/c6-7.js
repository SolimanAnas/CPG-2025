/* ========== Chapter 6.7 – Fever and Sepsis ========== */
window.CPG_DATA = {
    id: "c6-7",
    title: "Fever and Sepsis",
    shortTitle: "6.7 Fever and Sepsis",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">??? Fever and Sepsis</h3>
            
            <h4>Patient Care Goals</h4>
            <ul>
                <li>Identify and manage sepsis or septic shock.</li>
                <li>Identify patients at risk of sepsis.</li>
            </ul>

            <h4>Inclusion Criteria</h4>
            <ul>
                <li>Patients presenting with fever or suspected sepsis, including:
                    <ul>
                        <li>Documented or reported fever (temperature >38°C) or hypothermia (<36°C).</li>
                        <li>Symptoms suggestive of infection (e.g., chills, rigors, malaise, or localized symptoms like cough, dysuria, or wound infection).</li>
                        <li>Signs of systemic inflammatory response or sepsis, such as tachycardia, tachypnea, hypotension, or altered mental status.</li>
                        <li>Suspected septic shock with hypotension (SBP <90 mmHg in adults, or age-specific for pediatrics) and signs of poor perfusion.</li>
                    </ul>
                </li>
            </ul>

            <h4>Exclusion Criteria</h4>
            <ul>
                <li>Fever or symptoms attributable to a non-infectious cause (e.g., heat stroke, drug reaction).</li>
            </ul>

            <h4>Key Assessment Points</h4>
            <ul>
                <li><strong>Infection History:</strong> Identify potential sources of infection (respiratory, urinary, skin, abdominal). Recent illness, surgery, invasive procedures, immunocompromised states (diabetes, cancer, HIV).</li>
                <li><strong>Sepsis Screening (SIRS Criteria):</strong> Assess for systemic inflammatory response syndrome (SIRS) – two or more of:
                    <ul>
                        <li>Temperature >38°C or <36°C.</li>
                        <li>Heart rate >90 beats/min (or age-specific for pediatrics).</li>
                        <li>Respiratory rate >20 breaths/min (or age-specific for pediatrics).</li>
                        <li>Altered mental status or confusion.</li>
                    </ul>
                </li>
                <li><strong>Organ Dysfunction:</strong> Look for signs of end-organ hypoperfusion: decreased urine output, mottled skin, hypoxia, hypotension.</li>
                <li><strong>Temperature Assessment:</strong> Measure body temperature; note subjective reports if unavailable.</li>
                <li><strong>Source Identification:</strong> Look for localized signs of infection (erythema, purulent discharge, cough with sputum). Check for medical devices (catheters, central lines).</li>
                <li><strong>Determine Triage Category:</strong> Red priority for septic shock, hypotension, or altered mental status.</li>
            </ul>

            <h4>Patient Management & Interventions</h4>
            <ul>
                <li><strong>Primary and Secondary Surveys:</strong> Perform as per Universal Care CPG.</li>
                <li><strong>Oxygen:</strong> Titrate to maintain SpO2 =94% if hypoxia or respiratory distress.</li>
                <li><strong>Consider ALS back-up:</strong> For septic shock, severe respiratory distress, or altered mental status.</li>
                <li><strong>IV Access:</strong> Establish IV/IO access for fluid resuscitation and medication.</li>
                <li><strong>Fluid Resuscitation:</strong> Administer Normal Saline or Ringer's Lactate for signs of sepsis or septic shock:
                    <ul>
                        <li>Adults: 500-1000 mL bolus IV, repeat as needed (up to 2000 mL).</li>
                        <li>Pediatrics: 20 mL/kg bolus IV, repeat as needed (max 60 mL/kg).</li>
                        <li>Monitor for fluid overload, especially in patients with cardiac or renal comorbidities.</li>
                    </ul>
                </li>
                <li><strong>Paracetamol:</strong> Indicated to reduce fever and improve patient comfort.
                    <ul>
                        <li>Adults: 1 g IV/PO.</li>
                        <li>Pediatrics: 15 mg/kg IV/PO (max 1 g).</li>
                    </ul>
                </li>
                <li><strong>Vasopressors (Adrenaline):</strong> Indicated for fluid-refractory hypotension.
                    <ul>
                        <li>Push dose: Adults 0.01 mg every 2-5 minutes; Pediatrics 0.005 mg/kg every 2-5 minutes.</li>
                        <li>Infusion: Adults 2-10 mcg/min; Pediatrics 0.05-0.3 mcg/kg/min (use syringe driver when possible).</li>
                    </ul>
                </li>
                <li><strong>Patient Reassessment:</strong> Frequently reassess vital signs, mental status, and response to interventions.</li>
            </ul>

            <h4>Patient Safety Considerations</h4>
            <ul>
                <li>Patients who meet SIRS criteria must be recommended transfer to hospital.</li>
                <li>Use caution with fluid resuscitation in patients with cardiac or renal disease.</li>
                <li>Adrenaline infusions require careful monitoring; reduce doses in patients with underlying cardiac disease.</li>
                <li>In children <5 years, IV push adrenaline is preferred over infusion when a syringe driver is not available.</li>
            </ul>

            <h4>Clinical Insights & Additional Guidance</h4>
            <ul>
                <li><strong>Elderly patients:</strong> Fever may be absent; present with lethargy, confusion, or falls. Tachycardia may be masked by beta-blockers. Baseline hypertension may mask hypotension.</li>
                <li><strong>Pediatric patients:</strong> Fever may be the only sign; assess for irritability, poor feeding, or lethargy.</li>
                <li>Clearly identify to Dispatch 2 that the patient meets SIRS criteria when coordinating hospital admission.</li>
                <li>Early recognition and treatment of sepsis improves outcomes; do not delay transport.</li>
            </ul>

            <h4>Documentation</h4>
            <ul>
                <li>SIRS criteria met, temperature, vital signs, mental status.</li>
                <li>Suspected source of infection, recent procedures, immunosuppression.</li>
                <li>Fluids administered (type, volume), medications given (paracetamol, adrenaline).</li>
                <li>Response to treatment, hospital notification.</li>
            </ul>

            <h4>Key Performance Indicators</h4>
            <ul>
                <li>Assess and document SIRS criteria for all suspected sepsis patients.</li>
                <li>Assess and document temperature for all suspected sepsis patients.</li>
                <li>Administer fluid for hypotension (where appropriate).</li>
            </ul>
        </div>
    `,
    quiz: [
        {
            q: "What are the SIRS criteria?",
            options: ["Fever >38°C or <36°C, HR >90, RR >20, altered mental status", "SBP <90, HR >100, RR >24, temperature >39°C", "WBC >12,000, lactate >2, hypotension, oliguria", "Cough, fever, dyspnea, chest pain"],
            correct: 0,
            explanation: "SIRS criteria include temperature >38°C or <36°C, heart rate >90, respiratory rate >20, and altered mental status (or WBC abnormalities, though not typically measured prehospital)."
        },
        {
            q: "A patient with suspected sepsis has a BP of 85/50 after 1000 mL normal saline. What is the next step?",
            options: ["Give another fluid bolus", "Start adrenaline infusion", "Transport without further intervention", "Administer paracetamol"],
            correct: 1,
            explanation: "Fluid-refractory hypotension in septic shock requires vasopressor support (adrenaline)."
        },
        {
            q: "What is the initial fluid bolus for an adult with septic shock?",
            options: ["250 mL", "500-1000 mL", "2000 mL", "No fluids"],
            correct: 1,
            explanation: "Adults with septic shock should receive 500-1000 mL crystalloid bolus, repeated as needed."
        },
        {
            q: "Which of the following is a red flag for sepsis?",
            options: ["Temperature 38.5°C", "Heart rate 100", "Hypotension (SBP <90)", "Respiratory rate 22"],
            correct: 2,
            explanation: "Hypotension indicates septic shock and requires immediate intervention."
        },
        {
            q: "What is the target SpO2 for a patient with sepsis?",
            options: ["=88%", "=90%", "=94%", "100%"],
            correct: 2,
            explanation: "Maintain SpO2 =94% to prevent hypoxia and support tissue oxygenation."
        },
        {
            q: "A 70-year-old with suspected sepsis has a BP of 100/70, HR 110, RR 24, temperature 38.5°C, and is confused. How many SIRS criteria does she meet?",
            options: ["1", "2", "3", "4"],
            correct: 3,
            explanation: "She meets criteria for temperature (38.5°C), HR >90, RR >20, and altered mental status – all four."
        },
        {
            q: "What is the dose of paracetamol for an adult with fever?",
            options: ["500 mg", "1 g", "2 g", "500 mg IV only"],
            correct: 1,
            explanation: "Adult dose of paracetamol is 1 g IV/PO for fever or pain."
        },
        {
            q: "Which of the following is a common source of sepsis in elderly patients?",
            options: ["Urinary tract infection", "Pneumonia", "Skin/soft tissue infection", "All of the above"],
            correct: 3,
            explanation: "UTI, pneumonia, and skin infections are frequent sources of sepsis in the elderly."
        },
        {
            q: "What is the pediatric fluid bolus dose for septic shock?",
            options: ["10 mL/kg", "20 mL/kg", "40 mL/kg", "5 mL/kg"],
            correct: 1,
            explanation: "The initial bolus is 20 mL/kg crystalloid, repeated as needed up to 60 mL/kg total."
        },
        {
            q: "A patient with sepsis has a heart rate of 40 and BP 80/50. What should you suspect?",
            options: ["Septic shock", "Cardiogenic shock secondary to myocardial depression", "Beta-blocker overdose", "All of the above"],
            correct: 2,
            explanation: "Bradycardia in sepsis is unusual; consider beta-blocker toxicity or other causes of bradycardia."
        },
        {
            q: "What is the maximum total fluid bolus for an adult with septic shock?",
            options: ["500 mL", "1000 mL", "2000 mL", "No maximum"],
            correct: 2,
            explanation: "Up to 2000 mL crystalloid is recommended in the prehospital setting, with reassessment after each bolus."
        },
        {
            q: "When should vasopressors be initiated in septic shock?",
            options: ["Immediately upon diagnosis", "After 1 L fluid in adults", "After 2 L fluid", "Only in hospital"],
            correct: 1,
            explanation: "Vasopressors are indicated if hypotension persists after adequate fluid resuscitation (usually 1-2 L)."
        },
        {
            q: "What is the preferred vasopressor for septic shock?",
            options: ["Dopamine", "Norepinephrine", "Adrenaline", "Phenylephrine"],
            correct: 2,
            explanation: "Adrenaline (epinephrine) is the preferred vasopressor in the DCAS setting for septic shock."
        },
        {
            q: "What is the dose of adrenaline push dose for an adult with septic shock?",
            options: ["0.01 mg", "0.1 mg", "1 mg", "0.001 mg"],
            correct: 1,
            explanation: "Adult push dose adrenaline is 0.1 mg (100 mcg) IV every 2-5 minutes as needed."
        },
        {
            q: "A child with sepsis has a BP of 70/40 after 40 mL/kg fluids. What is the next step?",
            options: ["Give another fluid bolus", "Start adrenaline infusion", "Administer dopamine", "Transport without further intervention"],
            correct: 1,
            explanation: "Fluid-refractory shock requires vasopressor support; adrenaline infusion is appropriate."
        },
        {
            q: "Which of the following is a sign of organ dysfunction in sepsis?",
            options: ["Mottled skin", "Altered mental status", "Oliguria", "All of the above"],
            correct: 3,
            explanation: "Mottled skin, altered mental status, and decreased urine output indicate end-organ hypoperfusion."
        },
        {
            q: "What is the dose of adrenaline infusion for an adult with septic shock?",
            options: ["0.05-0.3 mcg/kg/min", "1-2 mcg/min", "5-10 mcg/min", "2-10 mcg/min"],
            correct: 3,
            explanation: "Adrenaline infusion for septic shock is typically 2-10 mcg/min in adults."
        },
        {
            q: "A patient with suspected sepsis has a temperature of 35.5°C. Is this a SIRS criterion?",
            options: ["Yes, hypothermia qualifies", "No, only fever qualifies", "Only if patient is also hypotensive", "Only in pediatrics"],
            correct: 0,
            explanation: "SIRS includes temperature <36°C (hypothermia) as well as fever."
        },
        {
            q: "What is the recommended initial fluid for septic shock?",
            options: ["Dextrose 5%", "Normal saline", "Ringer's lactate", "Colloids"],
            correct: 1,
            explanation: "Isotonic crystalloid (normal saline or Ringer's lactate) is recommended for initial resuscitation."
        },
        {
            q: "A patient with sepsis has a lactate level of 4.2 mmol/L. What does this indicate?",
            options: ["Normal", "Hypoglycemia", "Tissue hypoperfusion", "Liver failure"],
            correct: 2,
            explanation: "Elevated lactate indicates anaerobic metabolism due to hypoperfusion; a marker of severe sepsis."
        },
        {
            q: "Which of the following is a risk factor for sepsis?",
            options: ["Age >65", "Immunosuppression", "Diabetes", "All of the above"],
            correct: 3,
            explanation: "Elderly, immunosuppressed, and diabetic patients are at increased risk for sepsis."
        },
        {
            q: "What is the maximum total fluid bolus for a pediatric patient with septic shock?",
            options: ["20 mL/kg", "40 mL/kg", "60 mL/kg", "80 mL/kg"],
            correct: 2,
            explanation: "Up to 60 mL/kg crystalloid may be given in the prehospital setting, with reassessment after each 20 mL/kg bolus."
        },
        {
            q: "A patient with sepsis is on a beta-blocker and has a HR of 80 with hypotension. What is the significance?",
            options: ["Tachycardia is masked; patient may still be in shock", "Beta-blockers protect the heart", "No significance", "Patient is stable"],
            correct: 0,
            explanation: "Beta-blockers can blunt the tachycardic response to shock; hypotension despite a normal heart rate indicates severe illness."
        },
        {
            q: "What is the first-line antipyretic for fever in sepsis?",
            options: ["Aspirin", "Ibuprofen", "Paracetamol", "Diclofenac"],
            correct: 2,
            explanation: "Paracetamol is preferred for fever reduction in sepsis due to its safety profile."
        },
        {
            q: "A patient with sepsis has a respiratory rate of 32. What does this indicate?",
            options: ["Compensatory tachypnea", "Metabolic acidosis", "Hypoxia", "All of the above"],
            correct: 3,
            explanation: "Tachypnea in sepsis can be due to hypoxia, metabolic acidosis, or respiratory distress."
        },
        {
            q: "Which of the following is a contraindication to fluid resuscitation in septic shock?",
            options: ["Pulmonary edema", "Cardiogenic shock", "Renal failure", "All of the above are relative contraindications"],
            correct: 3,
            explanation: "Fluid administration should be cautious in patients with pulmonary edema, cardiogenic shock, or severe renal impairment."
        },
        {
            q: "What is the dose of adrenaline push dose for a pediatric patient with septic shock?",
            options: ["0.001 mg/kg", "0.005 mg/kg", "0.01 mg/kg", "0.1 mg/kg"],
            correct: 1,
            explanation: "Pediatric push dose adrenaline is 0.005 mg/kg (5 mcg/kg) IV every 2-5 minutes."
        },
        {
            q: "A patient with suspected sepsis has a fever of 39°C and is shivering. What should you do?",
            options: ["Administer paracetamol", "Cover with blankets", "Cool the patient with tepid sponging", "Administer adrenaline"],
            correct: 0,
            explanation: "Antipyretics like paracetamol help reduce fever and patient discomfort; avoid overcooling."
        },
        {
            q: "What is the key performance indicator for sepsis?",
            options: ["Administer antibiotics", "Measure lactate", "Administer fluids for hypotension", "Perform a chest X-ray"],
            correct: 2,
            explanation: "Administering fluid for hypotension is a key prehospital KPI for sepsis management."
        },
        {
            q: "A patient with sepsis has a BP of 80/50 after 2 L normal saline. What should you do?",
            options: ["Give another fluid bolus", "Start adrenaline infusion", "Transport without further intervention", "Administer dopamine"],
            correct: 1,
            explanation: "Fluid-refractory hypotension requires vasopressor support; adrenaline infusion is indicated."
        }
    ],
    flashcards: [
        { category: "Definition", question: "What is sepsis?", answer: "Life-threatening organ dysfunction caused by a dysregulated host response to infection." },
        { category: "Septic shock", question: "What is septic shock?", answer: "Sepsis with persistent hypotension requiring vasopressors to maintain MAP =65 mmHg and lactate >2 mmol/L despite adequate fluid resuscitation." },
        { category: "SIRS criteria", question: "What are the SIRS criteria?", answer: "Temperature >38°C or <36°C, heart rate >90, respiratory rate >20, and altered mental status or WBC >12,000 or <4,000." },
        { category: "Risk factors", question: "Name three risk factors for sepsis.", answer: "Age >65, immunosuppression, diabetes, chronic kidney disease, recent surgery." },
        { category: "Common sources", question: "What are common sources of sepsis?", answer: "Pneumonia, urinary tract infection, intra-abdominal infection, skin/soft tissue infection." },
        { category: "Fluid resuscitation", question: "What is the initial fluid bolus for adult septic shock?", answer: "500-1000 mL crystalloid, repeated as needed up to 2000 mL." },
        { category: "Pediatric fluid bolus", question: "What is the pediatric fluid bolus for septic shock?", answer: "20 mL/kg, repeated as needed up to 60 mL/kg total." },
        { category: "Vasopressor", question: "What is the preferred vasopressor for septic shock?", answer: "Adrenaline (epinephrine)." },
        { category: "Adrenaline push dose", question: "What is the adult push dose of adrenaline for septic shock?", answer: "0.1 mg IV every 2-5 minutes." },
        { category: "Adrenaline infusion", question: "What is the adult adrenaline infusion rate for septic shock?", answer: "2-10 mcg/min." },
        { category: "Pediatric adrenaline push", question: "What is the pediatric push dose of adrenaline for septic shock?", answer: "0.005 mg/kg (5 mcg/kg) IV every 2-5 minutes." },
        { category: "Pediatric adrenaline infusion", question: "What is the pediatric adrenaline infusion rate for septic shock?", answer: "0.05-0.3 mcg/kg/min." },
        { category: "Paracetamol dose", question: "What is the dose of paracetamol for fever in sepsis?", answer: "Adults 1 g, pediatrics 15 mg/kg (max 1 g)." },
        { category: "Red flags", question: "What are red flags for sepsis?", answer: "Hypotension, altered mental status, hypoxia, respiratory distress, mottled skin." },
        { category: "Elderly considerations", question: "How does sepsis present differently in the elderly?", answer: "Fever may be absent; may present with falls, confusion, lethargy, or decreased appetite." },
        { category: "Pediatric considerations", question: "What are signs of sepsis in children?", answer: "Fever or hypothermia, lethargy, irritability, poor feeding, tachypnea, tachycardia." },
        { category: "Lactate", question: "What does elevated lactate indicate in sepsis?", answer: "Tissue hypoperfusion due to anaerobic metabolism; marker of severity." },
        { category: "Source control", question: "What is source control in sepsis?", answer: "Identifying and managing the infection source (e.g., drainage, antibiotics, removal of infected device)." },
        { category: "KPI", question: "What is a key performance indicator for sepsis?", answer: "Administer fluid for hypotension (where appropriate)." },
        { category: "Transport decision", question: "Should all patients with suspected sepsis be transported?", answer: "Yes, all patients meeting SIRS criteria should be transported to hospital for further evaluation." }
    ],
    critical: [
        {
            id: "crit_6_7_1",
            scenario: "A 55-year-old male with diabetes presents with fever, chills, and productive cough for 2 days. On arrival, BP 85/50, HR 120, RR 28, SpO2 91% on room air, temperature 39°C. He is confused. What is your priority?",
            question: "What should you do first?",
            options: [
                { t: "Administer paracetamol", f: "Antipyretics are secondary; the priority is to support circulation and oxygenation." },
                { t: "Start fluid resuscitation and high-flow oxygen", f: "Correct. This patient is in septic shock; fluids and oxygen are critical." },
                { t: "Perform a 12-lead ECG", f: "Not a priority in the unstable septic patient." },
                { t: "Transport immediately without intervention", f: "Interventions should be initiated on scene or en route." }
            ],
            correct: 1,
            explanation: "Septic shock requires immediate fluid resuscitation and oxygen to improve perfusion and oxygenation.",
            kpi: "Fluids and oxygen administered."
        },
        {
            id: "crit_6_7_2",
            scenario: "A 40-year-old female with a history of IV drug use presents with fever, tachycardia, and hypotension. She has a red, swollen arm at an injection site. After 1000 mL normal saline, her BP is 85/55. What should you do next?",
            question: "What is the appropriate next step?",
            options: [
                { t: "Give another 500 mL fluid bolus", f: "Fluid-refractory shock requires vasopressors." },
                { t: "Start adrenaline infusion", f: "Correct. After adequate fluids, vasopressors are indicated." },
                { t: "Administer antibiotics", f: "Not available prehospital." },
                { t: "Transport without further intervention", f: "Vasopressors should be started en route." }
            ],
            correct: 1,
            explanation: "Fluid-refractory septic shock requires vasopressor support (adrenaline) to maintain perfusion.",
            kpi: "Adrenaline infusion started."
        },
        {
            id: "crit_6_7_3",
            scenario: "A 75-year-old female from a nursing home is found lethargic. Her temperature is 37.5°C, BP 100/60, HR 110, RR 24. She has a urinary catheter in place. Staff reports she was 'not herself' today. What should you suspect?",
            question: "What is the most likely diagnosis?",
            options: [
                { t: "Stroke", f: "No focal deficits." },
                { t: "Sepsis secondary to urinary tract infection", f: "Correct. Elderly patients often present with lethargy and no fever; urinary source is common." },
                { t: "Hypoglycemia", f: "Check glucose, but not the most likely." },
                { t: "Dehydration", f: "Possible, but SIRS criteria are met." }
            ],
            correct: 1,
            explanation: "Altered mental status with SIRS criteria and a catheter suggests urosepsis; transport for evaluation.",
            kpi: "Sepsis screening performed and documented."
        },
        {
            id: "crit_6_7_4",
            scenario: "A 2-year-old child with fever, irritability, and poor feeding. Temperature 39.5°C, HR 160, RR 40, SpO2 95%, BP 85/50. The child is lethargic. What is the priority?",
            question: "What should you do first?",
            options: [
                { t: "Administer paracetamol", f: "Antipyretics are secondary; fluid resuscitation is critical." },
                { t: "Start fluid resuscitation with 20 mL/kg normal saline", f: "Correct. The child is in septic shock." },
                { t: "Administer adrenaline push dose", f: "Fluids first unless pulseless." },
                { t: "Transport without intervention", f: "Interventions should be initiated." }
            ],
            correct: 1,
            explanation: "Pediatric septic shock requires early fluid resuscitation. Give 20 mL/kg bolus and reassess.",
            kpi: "Fluid bolus administered."
        },
        {
            id: "crit_6_7_5",
            scenario: "A 50-year-old male with sepsis has received 2 L normal saline and is on an adrenaline infusion at 5 mcg/min. His BP is now 100/70, HR 100, and mental status improving. What should you do?",
            question: "What is the appropriate action?",
            options: [
                { t: "Stop the adrenaline infusion", f: "Do not stop abruptly; monitor and titrate." },
                { t: "Continue current management and transport", f: "Correct. Continue monitoring and transport to definitive care." },
                { t: "Increase the adrenaline infusion", f: "Not needed; BP is improving." },
                { t: "Give another fluid bolus", f: "Not indicated; patient is responding to vasopressors." }
            ],
            correct: 1,
            explanation: "Continue current management, monitor vital signs, and transport. Vasopressor should be weaned only under medical supervision.",
            kpi: "Patient stabilized and transported."
        }
    ]
};