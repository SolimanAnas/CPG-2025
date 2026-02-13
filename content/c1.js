/* ========== Chapter 1 – Universal Care (Full Content) ========== */
/* Source: DCAS Universal Care Guideline 2025 (CPG 1.1) */

window.CPG_DATA = {
    id: "c1",
    title: "Universal Care",
    shortTitle: "1.0 Universal Care",
    sections: [
        // ============================================================
        // 1.1 UNIVERSAL CARE (Core Assessment & Safety)
        // ============================================================
        {
            id: "c1s1",
            shortTitle: "1.1 Universal Care",
            summary: `
                <div class="sum-card">
                    <h3 style="color:var(--primary-accent);">📘 1.1 Assessment & Vitals</h3>
                    
                    <h4>1. [span_0](start_span)Assessment Approach[span_0](end_span)</h4>
                    <ul>
                        [span_1](start_span)<li><strong>Trauma:</strong> C-A-B-C (Catastrophic Hemorrhage, Airway, Breathing, Circulation).[span_1](end_span)</li>
                        [span_2](start_span)<li><strong>Medical:</strong> A-B-C (Airway, Breathing, Circulation).[span_2](end_span)</li>
                        [span_3](start_span)<li><strong>Cardiac Arrest:</strong> C-A-B (Circulation/Compressions, Airway, Breathing).[span_3](end_span)</li>
                        [span_4](start_span)<li><strong>General Impression:</strong> Assess Appearance, Breathing, and Activity.[span_4](end_span)</li>
                    </ul>

                    <h4>2. [span_5](start_span)[span_6](start_span)Primary Survey & Red Flags[span_5](end_span)[span_6](end_span)</h4>
                    <ul>
                        <li><strong>Airway:</strong> Ensure patency; [span_7](start_span)C-spine control for trauma.[span_7](end_span)</li>
                        [span_8](start_span)<li><strong>Breathing:</strong> Target SpO2 <strong>94-98%</strong> (88-92% for COPD).[span_8](end_span)</li>
                        [span_9](start_span)<li><strong>Circulation:</strong> Pulse check (Carotid for unconscious adult, Brachial for infant).[span_9](end_span)</li>
                        <li><strong>Disability:</strong> AVPU & GCS. [span_10](start_span)Check Glucose if AMS (Treat if <strong>< 70 mg/dl</strong>).[span_10](end_span)</li>
                        [span_11](start_span)<li><strong>Red Flags:</strong> Apnea, SpO2 <94%, SBP <90 mmHg, GCS <15.[span_11](end_span)</li>
                    </ul>

                    <h4>3. [span_12](start_span)[span_13](start_span)ALS Back-Up KPI[span_12](end_span)[span_13](end_span)</h4>
                    <div class="highlight-box">
                        [span_14](start_span)<strong>KPI:</strong> Request ALS Back-up within <strong>1 minute</strong> of patient contact if indicated.[span_14](end_span)
                    </div>
                    <ul>
                        [span_15](start_span)<li><strong>Transport Decision:</strong> If transport time is < 10 mins and ALS is not dispatched, load and go (do not wait).[span_15](end_span)</li>
                        [span_16](start_span)<li><strong>Airwing:</strong> Consider if ground transport > 30 minutes.[span_16](end_span)</li>
                    </ul>
                </div>
            `,
            flashcards: [
                [span_17](start_span){ category: "Sequence", question: "Trauma Assessment Sequence?", answer: "C - A - B - C\n(Control Hemorrhage First)[span_17](end_span)" },
                [span_18](start_span){ category: "Sequence", question: "Medical Assessment Sequence?", answer: "A - B - C[span_18](end_span)" },
                [span_19](start_span){ category: "Sequence", question: "Cardiac Arrest Sequence?", answer: "C - A - B\n(Compressions First)[span_19](end_span)" },
                [span_20](start_span){ category: "Vitals", question: "Hypotension Definition (Adult)?", answer: "SBP < 90 mmHg[span_20](end_span)" },
                [span_21](start_span){ category: "Vitals", question: "Target SpO2 (Standard)?", answer: "94% - 98%[span_21](end_span)" },
                [span_22](start_span){ category: "Vitals", question: "Target SpO2 (COPD)?", answer: "88% - 92%[span_22](end_span)" },
                [span_23](start_span){ category: "Vitals", question: "Hypoglycemia Threshold?", answer: "< 70 mg/dl[span_23](end_span)" },
                [span_24](start_span){ category: "KPI", question: "Time to request ALS Backup?", answer: "Within 1 minute of patient contact[span_24](end_span)" },
                [span_25](start_span){ category: "Transport", question: "Transport vs Wait Rule?", answer: "If transport < 10 mins, do NOT wait for ALS[span_25](end_span)" },
                [span_26](start_span){ category: "Airwing", question: "Airwing Exclusion?", answer: "Imminent Birth, Violent Patient[span_26](end_span)" }
            ],
            quiz: [
                [span_27](start_span){ q: "What is the assessment sequence for a Trauma patient?", options: ["A-B-C", "C-A-B-C", "D-R-A-B-C"], correct: 1, explanation: "Trauma prioritizes Catastrophic Hemorrhage (C) before Airway.[span_27](end_span)" },
                [span_28](start_span){ q: "When should ALS backup be requested (KPI)?", options: ["Within 5 mins", "Within 1 min", "After vitals"], correct: 1, explanation: "KPI: Request ALS within 1 minute of patient contact if indicated.[span_28](end_span)" },
                [span_29](start_span){ q: "What is the target SpO2 for a COPD patient?", options: ["100%", "94-98%", "88-92%"], correct: 2, explanation: "88-92% to avoid suppressing hypoxic drive.[span_29](end_span)" },
                [span_30](start_span){ q: "You should NOT wait for ALS if transport time is less than:", options: ["10 mins", "15 mins", "20 mins"], correct: 0, explanation: "If transport is < 10 mins and ALS isn't there, load and go.[span_30](end_span)" },
                [span_31](start_span){ q: "Hypotension in an adult is defined as SBP below:", options: ["100 mmHg", "90 mmHg", "80 mmHg"], correct: 1, explanation: "SBP < 90 mmHg is the threshold for hypotension.[span_31](end_span)" }
            ],
            critical: [
                { 
                    scenario: "Trauma: 45M, partial leg amputation, active arterial bleed. Conscious.", 
                    question: "What is your FIRST action?", 
                    options: [{t:"Check Airway", f:"Wrong. Control bleed first (C-A-B-C)."}, {t:"Apply Tourniquet", f:"Correct. Catastrophic hemorrhage comes before Airway."}], 
                    correct: 1, 
                    [span_32](start_span)explanation: "In trauma (C-A-B-C), stop life-threatening bleeding immediately.[span_32](end_span)",
                    kpi: "Tourniquet application < 1 min."
                }
            ]
        },

        // ============================================================
        // 1.2 DOCUMENTATION
        // ============================================================
        {
            id: "c1s2",
            shortTitle: "1.2 Documentation",
            summary: `
                <div class="sum-card">
                    <h3 style="color:var(--primary-accent);">📋 Documentation Standards</h3>
                    <ul>
                        [span_33](start_span)<li><strong>ePCR Mandatory:</strong> A comprehensive ePCR is required for <em>every</em> patient contact.[span_33](end_span)</li>
                        [span_34](start_span)<li><strong>Timeline:</strong> You must record timestamps for all critical events (Arrival, Meds, Handover).[span_34](end_span)</li>
                        [span_35](start_span)<li><strong>Narrative:</strong> Must provide a complete 'picture of events' supporting your decisions.[span_35](end_span)</li>
                    </ul>
                    [span_36](start_span)<h4>IMIST-AMBO Handover[span_36](end_span)</h4>
                    <p><strong>I</strong>dentification, <strong>M</strong>echanism, <strong>I</strong>njuries, <strong>S</strong>igns, <strong>T</strong>reatment.<br>
                    <strong>A</strong>llergies, <strong>M</strong>edications, <strong>B</strong>ackground, <strong>O</strong>ther.</p>
                </div>
            `,
            flashcards: [
                [span_37](start_span){ category: "Handover", question: "IMIST meaning?", answer: "ID, Mechanism, Injuries, Signs, Treatment[span_37](end_span)" },
                [span_38](start_span){ category: "Handover", question: "AMBO meaning?", answer: "Allergies, Medications, Background, Other[span_38](end_span)" },
                [span_39](start_span){ category: "ePCR", question: "When to do ePCR?", answer: "Every patient contact[span_39](end_span)" },
                [span_40](start_span){ category: "ePCR", question: "Narrative goal?", answer: "Provide a complete picture of events[span_40](end_span)" },
                [span_41](start_span){ category: "Legal", question: "Timestamps?", answer: "Required for all critical interventions[span_41](end_span)" }
            ],
            quiz: [
                [span_42](start_span){ q: "Which format is used for patient handover?", options: ["SAMPLE", "IMIST-AMBO", "SOAP"], correct: 1, explanation: "IMIST-AMBO is the standard DCAS handover format.[span_42](end_span)" },
                [span_43](start_span){ q: "What is required for critical interventions in the ePCR?", options: ["Estimated time", "Exact Timestamp", "No time needed"], correct: 1, explanation: "Timestamps are required for all critical events.[span_43](end_span)" },
                [span_44](start_span){ q: "What does the 'S' in IMIST stand for?", options: ["Symptoms", "Signs (Vitals)", "Severity"], correct: 1, explanation: "S stands for Signs (Vital Signs).[span_44](end_span)" }
            ],
            critical: [
                {
                    scenario: "Handover: You arrive at the hospital with a stable medical patient. The nurse asks for a report.",
                    question: "Which format do you use?",
                    options: [{t:"Just give the ID and Complaint", f:"Insufficient information."}, {t:"IMIST-AMBO", f:"Correct. This covers all critical info."}],
                    correct: 1,
                    [span_45](start_span)explanation: "Use IMIST-AMBO for a structured, safe handover.[span_45](end_span)"
                }
            ]
        },

        // ============================================================
        // 1.3 TRIAGE CATEGORIES
        // ============================================================
        {
            id: "c1s3",
            shortTitle: "1.3 Triage",
            summary: `
                <div class="sum-card red-flag">
                    <h3>🔴 Red Priority (Critical)</h3>
                    <ul>
                        <li><strong>Definition:</strong> Immediate life threat (e.g., Shock, Apnea, GCS<9).</li>
                        [span_46](start_span)<li><strong>Reassessment:</strong> Every <strong>5 minutes</strong>.[span_46](end_span)</li>
                        [span_47](start_span)<li><strong>Action:</strong> Request ALS immediately.[span_47](end_span)</li>
                    </ul>
                </div>
                <div class="sum-card" style="border-top-color: #f59e0b;">
                    <h3>🟡 Yellow Priority (Serious)</h3>
                    <ul>
                        <li><strong>Definition:</strong> Serious but not immediately life-threatening.</li>
                        [span_48](start_span)<li><strong>Reassessment:</strong> Every <strong>10 minutes</strong>.[span_48](end_span)</li>
                    </ul>
                </div>
                <div class="sum-card" style="border-top-color: #10b981;">
                    <h3>🟢 Green Priority (Minor)</h3>
                    <ul>
                        <li><strong>Definition:</strong> Minor injury/illness. Stable.</li>
                        [span_49](start_span)<li><strong>Reassessment:</strong> Every <strong>15 minutes</strong>.[span_49](end_span)</li>
                    </ul>
                </div>
            `,
            flashcards: [
                [span_50](start_span){ category: "Triage", question: "Red Reassessment?", answer: "Every 5 Minutes[span_50](end_span)" },
                [span_51](start_span){ category: "Triage", question: "Yellow Reassessment?", answer: "Every 10 Minutes[span_51](end_span)" },
                [span_52](start_span){ category: "Triage", question: "Green Reassessment?", answer: "Every 15 Minutes[span_52](end_span)" },
                [span_53](start_span){ category: "Triage", question: "Red Priority Definition?", answer: "Life Threatening[span_53](end_span)" },
                [span_54](start_span){ category: "Triage", question: "Unstable Red Patient?", answer: "Request ALS Backup[span_54](end_span)" }
            ],
            quiz: [
                [span_55](start_span){ q: "How often do you reassess a Red Priority patient?", options: ["5 mins", "10 mins", "15 mins"], correct: 0, explanation: "Critical patients need reassessment every 5 minutes.[span_55](end_span)" },
                [span_56](start_span){ q: "How often do you reassess a Yellow Priority patient?", options: ["5 mins", "10 mins", "15 mins"], correct: 1, explanation: "Serious (Yellow) patients are reassessed every 10 minutes.[span_56](end_span)" },
                [span_57](start_span){ q: "Which priority represents a life threat?", options: ["Green", "Yellow", "Red"], correct: 2, explanation: "Red priority indicates a life-threatening condition.[span_57](end_span)" }
            ],
            critical: [
                {
                    scenario: "Triage: Patient has a GCS of 13, BP 110/70, but severe abdominal pain.",
                    question: "What is the likely triage category?",
                    options: [{t:"Red", f:"Vitals are stable."}, {t:"Yellow", f:"Correct. Serious but not unstable."}, {t:"Green", f:"Too severe for green."}],
                    correct: 1,
                    explanation: "Yellow Priority: Serious condition but stable vitals. [span_58](start_span)Reassess every 10 mins.[span_58](end_span)"
                }
            ]
        },

        // ============================================================
        // 1.4 FUNCTIONAL NEEDS
        // ============================================================
        {
            id: "c1s4",
            shortTitle: "1.4 Functional Needs",
            summary: `
                <div class="sum-card">
                    <h3 style="color:var(--primary-accent);">🧑‍🤝‍🧑 Special Populations</h3>
                    <ul>
                        [span_59](start_span)<li><strong>Pediatrics:</strong> Age <strong>≤ 13 years</strong>. Use Broselow Tape.[span_59](end_span)</li>
                        <li><strong>Geriatrics:</strong> Age <strong>≥ 65 years</strong>. [span_60](start_span)High risk of under-triage.[span_60](end_span)</li>
                        [span_61](start_span)<li><strong>Comorbidities:</strong> Reduced drug doses may apply for Renal (Dialysis) or Hepatic failure.[span_61](end_span)</li>
                    </ul>
                    [span_62](start_span)<h4>Cultural Sensitivity[span_62](end_span)</h4>
                    <p>Communicate respectfully considering language barriers. Address anxiety to improve compliance.</p>
                </div>
            `,
            flashcards: [
                [span_63](start_span){ category: "Def", question: "Pediatric Age Cutoff?", answer: "13 Years and Under[span_63](end_span)" },
                [span_64](start_span){ category: "Def", question: "Geriatric Age Cutoff?", answer: "65 Years and Older[span_64](end_span)" },
                [span_65](start_span){ category: "Tool", question: "Tool for Peds Weight?", answer: "Broselow Tape[span_65](end_span)" },
                [span_66](start_span){ category: "Meds", question: "Renal Failure Dosing?", answer: "Consider Reduced Doses[span_66](end_span)" },
                [span_67](start_span){ category: "Comms", question: "Language Barriers?", answer: "Use translation tools/respectful comms[span_67](end_span)" }
            ],
            quiz: [
                [span_68](start_span){ q: "What is the definition of a Pediatric patient in DCAS?", options: ["< 12", "<= 13", "< 18"], correct: 1, explanation: "Pediatrics are considered ≤ 13 years of age.[span_68](end_span)" },
                [span_69](start_span){ q: "What is the definition of a Geriatric patient?", options: ["> 60", ">= 65", "> 70"], correct: 1, explanation: "Geriatrics are ≥ 65 years of age.[span_69](end_span)" },
                [span_70](start_span){ q: "For a patient on dialysis, what medication consideration applies?", options: ["Standard dose", "Reduced dose", "Increased dose"], correct: 1, explanation: "Reduced dosages may apply for renal/hepatic disease.[span_70](end_span)" }
            ],
            critical: [
                {
                    scenario: "Peds: 5-year-old needs medication. You don't know the weight.",
                    question: "What tool should you use?",
                    options: [{t:"Guess based on height", f:"Unsafe."}, {t:"Broselow Tape", f:"Correct."}],
                    correct: 1,
                    [span_71](start_span)explanation: "Use the Broselow Tape to estimate weight and guide dosing.[span_71](end_span)"
                }
            ]
        },

        // ============================================================
        // 1.5 TREATED AT SCENE (Derived from Patient Safety)
        // ============================================================
        {
            id: "c1s5",
            shortTitle: "1.5 Treat at Scene",
            summary: `
                <div class="sum-card">
                    <h3 style="color:var(--primary-accent);">🏠 Treat & Release</h3>
                    <p>Providing care without transport requires strict adherence to safety protocols.</p>
                    <ul>
                        <li><strong>Goal:</strong> Treat minor/reversible conditions if safe.</li>
                        [span_72](start_span)<li><strong>Tele-EMS:</strong> Consult for complex decisions or high-risk refusals.[span_72](end_span)</li>
                        [span_73](start_span)<li><strong>Documentation:</strong> Requires full ePCR, vitals, and clear rationale.[span_73](end_span)</li>
                        <li><strong>Exclusions:</strong> Do not leave if capacity is impaired or condition is critical.</li>
                    </ul>
                </div>
            `,
            flashcards: [
                [span_74](start_span){ category: "Ops", question: "Tele-EMS Indication?", answer: "Complex/Deteriorating conditions[span_74](end_span)" },
                { category: "Ops", question: "Treat at Scene Req?", answer: "Normal vitals + Capacity" },
                [span_75](start_span){ category: "Ops", question: "Documentation?", answer: "Full ePCR mandatory[span_75](end_span)" },
                { category: "Safety", question: "Unstable Patient?", answer: "Must Transport / Request ALS" },
                [span_76](start_span){ category: "Consult", question: "High Risk Refusal?", answer: "Consult Tele-EMS[span_76](end_span)" }
            ],
            quiz: [
                [span_77](start_span){ q: "Who should be consulted for complex non-transport decisions?", options: ["Dispatch", "Tele-EMS", "Police"], correct: 1, explanation: "Consult Tele-EMS for complex or deteriorating conditions.[span_77](end_span)" },
                [span_78](start_span){ q: "Can you treat and release a Red Priority patient?", options: ["Yes", "No", "Only if they sign"], correct: 1, explanation: "Critical patients require transport.[span_78](end_span)" },
                [span_79](start_span){ q: "What documentation is needed for non-transport?", options: ["Short note", "Full ePCR", "Nothing"], correct: 1, explanation: "Comprehensive ePCR is required for all contacts.[span_79](end_span)" }
            ],
            critical: [
                {
                    scenario: "Scene: Patient with resolved hypoglycemia (BGL 110) wants to stay home. He is alert (GCS 15).",
                    question: "Can he be released?",
                    options: [{t:"Yes, if capacity & food present", f:"Correct. Low risk."}, {t:"No, mandatory transport", f:"Hypoglycemia can often be treated at scene."}],
                    correct: 0,
                    explanation: "Treat at scene is appropriate if patient is stable, capable, and has support."
                }
            ]
        },

        // ============================================================
        // 1.6 REFUSAL OF TRANSFER
        // ============================================================
        {
            id: "c1s6",
            shortTitle: "1.6 Refusal",
            summary: `
                <div class="sum-card red-flag">
                    <h3 style="color:#dc3545;">🚫 Refusal of Transfer</h3>
                    <ul>
                        [span_80](start_span)<li><strong>Rights:</strong> Adults (>18) with capacity can refuse.[span_80](end_span)</li>
                        [span_81](start_span)<li><strong>Capacity Test:</strong> Must Understand, Retain, and Repeat info.[span_81](end_span)</li>
                        [span_82](start_span)<li><strong>Living Wills:</strong> NOT recognized in Dubai prehospital settings yet.[span_82](end_span)</li>
                        [span_83](start_span)<li><strong>High Risk:</strong> If refusal is high-risk (e.g., chest pain), consult Tele-EMS.[span_83](end_span)</li>
                    </ul>
                </div>
            `,
            flashcards: [
                [span_84](start_span){ category: "Legal", question: "Refusal Age?", answer: "18 Years+[span_84](end_span)" },
                [span_85](start_span){ category: "Legal", question: "Capacity Criteria?", answer: "Understand, Retain, Repeat[span_85](end_span)" },
                [span_86](start_span){ category: "Legal", question: "Living Wills in Dubai?", answer: "Not Recognized Prehospital[span_86](end_span)" },
                [span_87](start_span){ category: "Action", question: "High Risk Refusal?", answer: "Consult Tele-EMS[span_87](end_span)" },
                { category: "Action", question: "Impaired Capacity?", answer: "Treat & Transport (Implied Consent)" }
            ],
            quiz: [
                [span_88](start_span){ q: "What is the minimum age to refuse treatment?", options: ["16", "18", "21"], correct: 1, explanation: "Patients must be above 18 years old.[span_88](end_span)" },
                [span_89](start_span){ q: "Are Living Wills recognized in prehospital Dubai?", options: ["Yes", "No", "Only if signed"], correct: 1, explanation: "Advanced Directives/Living Wills are NOT recognized yet.[span_89](end_span)" },
                [span_90](start_span){ q: "What defines mental capacity?", options: ["Alertness only", "Understand, Retain, Repeat", "Signing a form"], correct: 1, explanation: "Patient must understand, retain, and repeat information.[span_90](end_span)" }
            ],
            critical: [
                {
                    scenario: "Refusal: 50M with crushing chest pain refuses transport. He is GCS 15.",
                    question: "Action?",
                    options: [{t:"Accept Refusal immediately", f:"High risk!"}, {t:"Consult Tele-EMS & Persuade", f:"Correct. High risk refusal."}],
                    correct: 1,
                    [span_91](start_span)explanation: "For high-risk refusals, involve Tele-EMS and attempt to persuade.[span_91](end_span)"
                }
            ]
        }
    ]
};
