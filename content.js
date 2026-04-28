// content.js - DCAS CPG 2025 Data Store
// Source: Universal Care.pdf (CPG 1.1)

const CPG_CONTENT = {
    // 1. CHAPTERS METADATA
    chapters: [
        { id: 'c1', title: "Universal Care", desc: "Foundation, Primary Survey, Safety", hasQuiz: true, hasFlashcards: true, hasSummary: true },
        { id: 'c2', title: "Airway & Breathing", desc: "Advanced Airway, Ventilation", hasQuiz: false, hasFlashcards: false },
        { id: 'c3', title: "Cardiovascular", desc: "ACS, Stroke, Shock", hasQuiz: false, hasFlashcards: false },
        { id: 'c4', title: "Resuscitation", desc: "Adult, Peds, Newborn", hasQuiz: true, hasFlashcards: true },
        { id: 'c5', title: "Neurological", desc: "Seizures, ALOC", hasQuiz: false, hasFlashcards: false },
        { id: 'c6', title: "General Medical", desc: "Sepsis, Anaphylaxis", hasQuiz: false, hasFlashcards: false },
        { id: 'c7', title: "Env & Toxicology", desc: "Overdoses, Envenomation", hasQuiz: true, hasFlashcards: true },
        { id: 'c8', title: "Trauma", desc: "Major Trauma, Burns", hasQuiz: false, hasFlashcards: false },
        { id: 'c9', title: "Peds & Obstetrics", desc: "Childbirth, Pediatrics", hasQuiz: false, hasFlashcards: false },
        { id: 'c10', title: "Major Incident", desc: "Triage, Command", hasQuiz: false, hasFlashcards: false },
        { id: 'c11', title: "Formulary", desc: "Medications & Scope", hasQuiz: false, hasFlashcards: false }
    ],

    // 2. SUMMARIES (HTML Content)
    summaries: {
        c1: `
            <div class="sum-card">
                <h3>1. [span_0](start_span)Assessment Approach[span_0](end_span)</h3>
                <ul>
                    [span_1](start_span)<li><strong>Medical:</strong> Use <strong>A-B-C</strong> (Airway, Breathing, Circulation).[span_1](end_span)</li>
                    [span_2](start_span)<li><strong>Trauma:</strong> Use <strong>C-A-B-C</strong> (Catastrophic Hemorrhage, Airway, Breathing, Circulation).[span_2](end_span)</li>
                    [span_3](start_span)<li><strong>Cardiac Arrest:</strong> Use <strong>C-A-B</strong> (Circulation/Compressions, Airway, Breathing).[span_3](end_span)</li>
                    [span_4](start_span)<li><strong>General Impression:</strong> Assess Appearance, Breathing, and Activity immediately upon arrival.[span_4](end_span)</li>
                </ul>
            </div>

            <div class="sum-card">
                <h3>2. [span_5](start_span)[span_6](start_span)[span_7](start_span)Primary Survey & Vitals[span_5](end_span)[span_6](end_span)[span_7](end_span)</h3>
                <ul>
                    <li><strong>Airway:</strong> Ensure patency. [span_8](start_span)Remove obstructions for laryngectomies/tracheostomies.[span_8](end_span)</li>
                    [span_9](start_span)<li><strong>Breathing:</strong> Target SpO2 is <strong>94-98%</strong>.[span_9](end_span)</li>
                    <li><strong>Circulation:</strong> Assess rate/quality of carotid/radial pulses. [span_10](start_span)Control bleeding.[span_10](end_span)</li>
                    <li><strong>Disability:</strong> Assess AVPU & GCS. [span_11](start_span)Check Glucose if AMS (Treat if <strong>< 70 mg/dl</strong>).[span_11](end_span)</li>
                    [span_12](start_span)<li><strong>Vital Signs:</strong> Pulse, BP, RR, Temp, SpO2, EtCO2, GCS/AVPU.[span_12](end_span)</li>
                </ul>
            </div>

            <div class="sum-card red-flag">
                <h3>3. [span_13](start_span)[span_14](start_span)[span_15](start_span)Critical Decision Making[span_13](end_span)[span_14](end_span)[span_15](end_span)</h3>
                <ul>
                    [span_16](start_span)<li><strong>ALS Back-Up:</strong> Request within <strong>1 minute</strong> of patient contact if indicated (KPI).[span_16](end_span)</li>
                    [span_17](start_span)<li><strong>Transport Decision:</strong> If transport time is <strong>< 10 minutes</strong> and ALS is not already dispatched, load and go (do not wait).[span_17](end_span)</li>
                    <li><strong>Airwing:</strong> Consider if ground transport > 30 minutes. [span_18](start_span)<em>Exclusions:</em> Imminent birth, Violent patients.[span_18](end_span)</li>
                    [span_19](start_span)<li><strong>Red Flags:</strong> Apnea, SpO2 < 94%, SBP < 90 mmHg, GCS < 15.[span_19](end_span)</li>
                </ul>
            </div>

            <div class="sum-card">
                <h3>4. [span_20](start_span)[span_21](start_span)Secondary Survey[span_20](end_span)[span_21](end_span)</h3>
                <ul>
                    [span_22](start_span)<li><strong>Trauma:</strong> Rapid Trauma Survey using <strong>DCAP-BTLS-TIC</strong>.[span_22](end_span)</li>
                    [span_23](start_span)<li><strong>History:</strong> SAMPLE (Symptoms, Allergies, Meds, Past Hx, Last Intake, Events).[span_23](end_span)</li>
                    [span_24](start_span)<li><strong>Pain:</strong> OPQRST (Onset, Provoke, Quality, Radiate, Severity, Time).[span_24](end_span)</li>
                    <li><strong>Neuro:</strong> Reassess GCS. Check Pupils. [span_25](start_span)Motor/Sensory function.[span_25](end_span)</li>
                </ul>
            </div>

            <div class="sum-card" style="border-left-color: var(--accent-gold);">
                <h3>5. [span_26](start_span)[span_27](start_span)[span_28](start_span)Reassessment & Documentation[span_26](end_span)[span_27](end_span)[span_28](end_span)</h3>
                <ul>
                    [span_29](start_span)<li><strong>Red Priority (Critical):</strong> Every <strong>5 minutes</strong>.[span_29](end_span)</li>
                    [span_30](start_span)<li><strong>Yellow Priority (Serious):</strong> Every <strong>10 minutes</strong>.[span_30](end_span)</li>
                    [span_31](start_span)<li><strong>Green Priority (Minor):</strong> Every <strong>15 minutes</strong>.[span_31](end_span)</li>
                    [span_32](start_span)<li><strong>Handover:</strong> Use <strong>IMIST-AMBO</strong> format.[span_32](end_span)</li>
                    [span_33](start_span)<li><strong>Pediatrics:</strong> Defined as age <strong>≤ 13 years</strong>.[span_33](end_span)</li>
                    [span_34](start_span)<li><strong>Geriatrics:</strong> Defined as age <strong>≥ 65 years</strong>.[span_34](end_span)</li>
                </ul>
            </div>
        `
    },

    // 3. QUIZ QUESTION BANK (60 Questions)
    questions: {
        c1: [
            // --- GENERAL ASSESSMENT (1-10) ---
            [span_35](start_span){ q: "What is the assessment sequence for a Trauma patient?", options: ["A-B-C-D-E", "C-A-B-C", "D-R-A-B-C", "M-A-R-C-H"], correct: 1, rationale: "Trauma prioritizes Catastrophic Hemorrhage control before Airway. Sequence: C-A-B-C.[span_35](end_span)", difficulty: "basic" },
            [span_36](start_span){ q: "What is the assessment sequence for a Medical patient?", options: ["A-B-C", "C-A-B", "D-R-A-B-C", "Safety-First"], correct: 0, rationale: "Medical patients follow the standard A-B-C sequence: Airway, Breathing, Circulation.[span_36](end_span)", difficulty: "basic" },
            { q: "Assessment sequence for Cardiac Arrest?", options: ["A-B-C", "C-A-B", "D-R-A-B-C", "B-A-C"], correct: 1, rationale: "Cardiac Arrest prioritizes Circulation (Compressions) to circulate oxygenated blood. [span_37](start_span)Sequence: C-A-B.[span_37](end_span)", difficulty: "basic" },
            [span_38](start_span){ q: "Elements of General Impression?", options: ["Airway, Breathing, Circ", "Appearance, Breathing, Activity", "Alertness, Bleeding, Color", "Age, Weight, Complaint"], correct: 1, rationale: "General Impression: Appearance, Breathing, Activity.[span_38](end_span)", difficulty: "basic" },
            [span_39](start_span){ q: "In AVPU, 'P' stands for?", options: ["Pulse", "Pain", "Pupils", "Pallor"], correct: 1, rationale: "AVPU: Alert, Verbal, Pain, Unresponsive.[span_39](end_span)", difficulty: "basic" },
            [span_40](start_span){ q: "Pulse check for unconscious adult?", options: ["Radial", "Carotid", "Femoral", "Brachial"], correct: 1, rationale: "Carotid is the central pulse for unconscious adults.[span_40](end_span)", difficulty: "basic" },
            [span_41](start_span){ q: "Pulse check for infant (<1yr)?", options: ["Carotid", "Brachial", "Radial", "Popliteal"], correct: 1, rationale: "Brachial pulse (upper arm) for infants due to short neck.[span_41](end_span)", difficulty: "basic" },
            [span_42](start_span){ q: "Normal capillary refill time?", options: ["< 2 secs", "> 3 secs", "5 secs", "1 sec"], correct: 0, rationale: "Normal CRT is less than 2 seconds.[span_42](end_span)", difficulty: "basic" },
            [span_43](start_span){ q: "First priority in any call?", options: ["Airway", "Scene Safety", "Circulation", "Dispatch"], correct: 1, rationale: "Scene Safety is always the first priority.[span_43](end_span)", difficulty: "basic" },
            [span_44](start_span){ q: "Primary Survey 'D' assesses?", options: ["Deformity", "Disability", "Danger", "Disease"], correct: 1, rationale: "Disability involves neurological check: AVPU/GCS, Pupils, Glucose.[span_44](end_span)", difficulty: "basic" },

            // --- VITALS & RANGES (11-20) ---
            [span_45](start_span){ q: "Normal Adult Respiratory Rate?", options: ["8-12", "12-20", "20-30", "10-25"], correct: 1, rationale: "12-20 breaths per minute.[span_45](end_span)", difficulty: "basic" },
            [span_46](start_span){ q: "Normal Adult Heart Rate?", options: ["50-90", "60-100", "70-110", "60-90"], correct: 1, rationale: "60-100 beats per minute.[span_46](end_span)", difficulty: "basic" },
            [span_47](start_span){ q: "Target SpO2 (Standard)?", options: ["100%", "94-98%", "88-92%", ">90%"], correct: 1, rationale: "Aim for 94-98% to avoid hyperoxia.[span_47](end_span)", difficulty: "basic" },
            [span_48](start_span){ q: "Target SpO2 (COPD)?", options: ["100%", "94-98%", "88-92%", ">95%"], correct: 2, rationale: "88-92% for COPD to prevent suppression of hypoxic drive.[span_48](end_span)", difficulty: "advanced" },
            [span_49](start_span){ q: "Adult Hypotension threshold?", options: ["SBP < 110", "SBP < 100", "SBP < 90", "SBP < 80"], correct: 2, rationale: "Hypotension is SBP < 90 mmHg.[span_49](end_span)", difficulty: "basic" },
            [span_50](start_span){ q: "Hypoglycemia Treatment BGL?", options: ["< 80 mg/dl", "< 70 mg/dl", "< 60 mg/dl", "< 100 mg/dl"], correct: 1, rationale: "Treat if BGL < 70 mg/dl with symptoms.[span_50](end_span)", difficulty: "basic" },
            [span_51](start_span){ q: "Normal EtCO2 range?", options: ["20-30", "35-45", "45-55", "90-100"], correct: 1, rationale: "35-45 mmHg.[span_51](end_span)", difficulty: "advanced" },
            [span_52](start_span){ q: "Adult Tachycardia definition?", options: ["> 90", "> 100", "> 110", "> 120"], correct: 1, rationale: "Heart rate > 100 bpm.[span_52](end_span)", difficulty: "basic" },
            [span_53](start_span){ q: "Adult Bradycardia definition?", options: ["< 50", "< 60", "< 70", "< 55"], correct: 1, rationale: "Heart rate < 60 bpm.[span_53](end_span)", difficulty: "basic" },
            [span_54](start_span){ q: "Pediatric Age definition (DCAS)?", options: ["< 12", "<= 13", "< 16", "< 18"], correct: 1, rationale: "Pediatrics is <= 13 years.[span_54](end_span)", difficulty: "basic" },

            // --- MNEMONICS & HISTORY (21-30) ---
            [span_55](start_span){ q: "DCAP-BTLS 'S' stands for?", options: ["Severity", "Swelling", "Saturation", "Shock"], correct: 1, rationale: "Swelling.[span_55](end_span)", difficulty: "basic" },
            [span_56](start_span){ q: "SAMPLE 'L' stands for?", options: ["Last oral intake", "Last menses", "LOC", "Location"], correct: 0, rationale: "Last oral intake.[span_56](end_span)", difficulty: "basic" },
            [span_57](start_span){ q: "OPQRST 'P' stands for?", options: ["Past Hx", "Provocation/Palliation", "Pain", "Pulse"], correct: 1, rationale: "Provocation/Palliation (What makes it better/worse).[span_57](end_span)", difficulty: "basic" },
            [span_58](start_span){ q: "OPQRST 'R' stands for?", options: ["Rate", "Rhythm", "Radiation", "Respiration"], correct: 2, rationale: "Radiation (Does pain move?).[span_58](end_span)", difficulty: "basic" },
            [span_59](start_span){ q: "IMIST-AMBO 'A' stands for?", options: ["Airway", "Alertness", "Allergies", "Age"], correct: 2, rationale: "Allergies.[span_59](end_span)", difficulty: "basic" },
            [span_60](start_span){ q: "IMIST-AMBO 'M' stands for?", options: ["Mechanism", "Medications", "Medical Hx", "Movement"], correct: 1, rationale: "Medications.[span_60](end_span)", difficulty: "basic" },
            [span_61](start_span){ q: "Stroke Assessment Mnemonic?", options: ["SAMPLE", "BEFAST", "OPQRST", "AEIOU"], correct: 1, rationale: "BEFAST (Balance, Eyes, Face, Arms, Speech, Time).[span_61](end_span)", difficulty: "basic" },
            [span_62](start_span){ q: "GCS 'Confused' verbal score?", options: ["5", "4", "3", "2"], correct: 1, rationale: "Confused = 4.[span_62](end_span)", difficulty: "advanced" },
            [span_63](start_span){ q: "GCS 'Spontaneous' eye score?", options: ["4", "3", "2", "1"], correct: 0, rationale: "Spontaneous = 4.[span_63](end_span)", difficulty: "basic" },
            [span_64](start_span){ q: "Geriatric Age definition?", options: [">= 60", ">= 65", ">= 70", ">= 75"], correct: 1, rationale: "Geriatrics is >= 65 years.[span_64](end_span)", difficulty: "basic" },

            // --- OPERATIONS & SAFETY (31-40) ---
            [span_65](start_span){ q: "When to request ALS Backup?", options: ["Within 10 mins", "Within 1 min of contact", "Before arrival", "Only if arrest"], correct: 1, rationale: "KPI: Request ALS within 1 minute of patient contact if indicated.[span_65](end_span)", difficulty: "advanced" },
            [span_66](start_span){ q: "General guideline for ALS Backup request?", options: ["Always request", "Within 5 mins", "Only for Red patients", "Never"], correct: 1, rationale: "General guideline is within 5 minutes (Page 5), but KPI is 1 minute (Page 9).[span_66](end_span)", difficulty: "advanced" },
            [span_67](start_span){ q: "Do NOT request ALS if transport time is?", options: ["< 30 mins", "< 20 mins", "< 10 mins", "< 15 mins"], correct: 2, rationale: "If transport < 10 mins and ALS not dispatched, load and go.[span_67](end_span)", difficulty: "scenario" },
            [span_68](start_span){ q: "Airwing Transport Consideration?", options: ["Ground > 15m", "Ground > 30m", "Traffic", "VIP"], correct: 1, rationale: "Consider Airwing if ground transport > 30 mins.[span_68](end_span)", difficulty: "basic" },
            [span_69](start_span){ q: "Airwing Exclusion Criteria?", options: ["Stroke", "Imminent Birth", "STEMI", "Trauma"], correct: 1, rationale: "Exclusions: Imminent birth, Violent patients.[span_69](end_span)", difficulty: "basic" },
            [span_70](start_span){ q: "Reassessment Frequency (Red)?", options: ["5 min", "10 min", "15 min", "Continuous"], correct: 0, rationale: "Critical/Red patients: Every 5 minutes.[span_70](end_span)", difficulty: "basic" },
            [span_71](start_span){ q: "Reassessment Frequency (Yellow)?", options: ["5 min", "10 min", "15 min", "30 min"], correct: 1, rationale: "Serious/Yellow patients: Every 10 minutes.[span_71](end_span)", difficulty: "basic" },
            [span_72](start_span){ q: "Reassessment Frequency (Green)?", options: ["5 min", "10 min", "15 min", "30 min"], correct: 2, rationale: "Minor/Green patients: Every 15 minutes.[span_72](end_span)", difficulty: "basic" },
            [span_73](start_span){ q: "Standard PPE includes?", options: ["Gloves", "Gloves & Glasses", "Gloves, Mask, Eye", "Full Suit"], correct: 2, rationale: "Gloves, Mask, Eye protection.[span_73](end_span)", difficulty: "basic" },
            { q: "Safe Parking Distance (Car Fire)?", options: ["15m", "30m", "50m", "100m"], correct: 2, rationale: "30 meters. [Not explicit in PDF, standard EMS practice]", difficulty: "basic" },

            // --- CPR & TREATMENT (41-50) ---
            { q: "Adult CPR Ratio (1 rescuer)?", options: ["15:2", "30:2", "10:1", "Continuous"], correct: 1, rationale: "30 compressions : 2 breaths. [Standard BLS]", difficulty: "basic" },
            { q: "Pediatric CPR Ratio (2 rescuers)?", options: ["30:2", "15:2", "5:1", "10:2"], correct: 1, rationale: "15:2 for 2-rescuer pediatric CPR. [Standard BLS]", difficulty: "basic" },
            { q: "CPR Compression Rate?", options: ["60-80", "80-100", "100-120", "120-140"], correct: 2, rationale: "100-120 compressions per minute. [Standard BLS]", difficulty: "basic" },
            { q: "Adult Compression Depth?", options: ["5-6cm", "3cm", "7-8cm", "1/3 depth"], correct: 0, rationale: "5-6 cm. [Standard BLS]", difficulty: "basic" },
            { q: "Switch Compressor Frequency?", options: ["1 min", "2 mins", "5 mins", "When tired"], correct: 1, rationale: "Every 2 minutes. [Standard BLS]", difficulty: "basic" },
            { q: "Max CPR Interruption?", options: ["5s", "10s", "15s", "20s"], correct: 1, rationale: "< 10 seconds. [Standard BLS]", difficulty: "basic" },
            { q: "Hand Placement Adult CPR?", options: ["Upper sternum", "Lower half sternum", "Left", "Right"], correct: 1, rationale: "Lower half of the sternum. [Standard BLS]", difficulty: "basic" },
            { q: "Advanced Airway Ventilation Rate?", options: ["30:2", "1 breath/6s", "1 breath/3s", "Async"], correct: 1, rationale: "1 breath every 6 seconds (10/min). [Standard BLS]", difficulty: "advanced" },
            [span_74](start_span){ q: "Tourniquet Indication?", options: ["Minor cut", "Venous bleed", "Arterial Limb Bleed", "Head wound"], correct: 2, rationale: "KPI: Uncontrolled arterial limb bleeding.[span_74](end_span)", difficulty: "basic" },
            [span_75](start_span){ q: "IV Access Indication?", options: ["All patients", "Risk of deterioration", "Green patients", "Minor cuts"], correct: 1, rationale: "If indicated for intervention or risk of deterioration.[span_75](end_span)", difficulty: "basic" },

            // --- SPECIAL & TABLES (51-60) ---
            [span_76](start_span){ q: "Pediatric GCS 'Irritable' Verbal Score?", options: ["5", "4", "3", "2"], correct: 2, rationale: "Persistently irritable = 3.[span_76](end_span)", difficulty: "advanced" },
            [span_77](start_span){ q: "Pediatric GCS 'Pain' Eye Score?", options: ["4", "3", "2", "1"], correct: 2, rationale: "To Pain = 2.[span_77](end_span)", difficulty: "basic" },
            [span_78](start_span){ q: "Normal Newborn Pulse (Awake)?", options: ["80-120", "100-205", "60-100", "120-160"], correct: 1, rationale: "100-205 bpm.[span_78](end_span)", difficulty: "advanced" },
            [span_79](start_span){ q: "Normal 6-10y Respiratory Rate?", options: ["12-20", "18-30", "24-40", "30-60"], correct: 1, rationale: "18-30 bpm.[span_79](end_span)", difficulty: "advanced" },
            [span_80](start_span){ q: "Newborn Systolic BP Range?", options: ["39-59", "60-76", "67-84", "72-104"], correct: 2, rationale: "67-84 mmHg.[span_80](end_span)", difficulty: "advanced" },
            { q: "HazMat 'Hot Zone' is?", options: ["Support", "Contamination", "Safe", "Hospital"], correct: 1, rationale: "Contamination Zone. [Standard HazMat]", difficulty: "basic" },
            [span_81](start_span){ q: "Hyperoxia Avoidance Conditions?", options: ["Trauma", "Sepsis", "COPD & Stroke", "Anaphylaxis"], correct: 2, rationale: "Avoid hyperoxia in COPD and suspected Stroke.[span_81](end_span)", difficulty: "advanced" },
            [span_82](start_span){ q: "Pain Scale for < 3 years?", options: ["0-10", "Wong-Baker", "FLACC", "VAS"], correct: 2, rationale: "FLACC scale.[span_82](end_span)", difficulty: "basic" },
            [span_83](start_span){ q: "Pain Scale for Non-Verbal?", options: ["0-10", "Wong-Baker", "FLACC", "VAS"], correct: 1, rationale: "Wong-Baker Faces.[span_83](end_span)", difficulty: "basic" },
            [span_84](start_span){ q: "IO Access Indication?", options: ["First line", "If IV fails/impractical", "Never", "Conscious patients"], correct: 1, rationale: "If IV access cannot be readily obtained.[span_84](end_span)", difficulty: "basic" }
        ],

        // --- CHAPTER 7: TOXICOLOGY (New) ---
        c7: [
            { q: "Opioid Antidote?", options: ["Atropine", "Naloxone"], correct: 1, rationale: "Naloxone.", difficulty: "basic" },
            { q: "Organophosphate sign?", options: ["Dry", "Wet (SLUDGE)"], correct: 1, rationale: "Cholinergic crisis = Wet.", difficulty: "basic" },
            { q: "Beta Blocker Antidote?", options: ["Glucagon", "Calcium"], correct: 0, rationale: "Glucagon.", difficulty: "advanced" },
            { q: "TCA ECG sign?", options: ["Narrow QRS", "Wide QRS"], correct: 1, rationale: "Wide QRS > 0.10s.", difficulty: "advanced" },
            { q: "CO SpO2 reading?", options: ["Low", "Falsely High"], correct: 1, rationale: "Cannot distinguish CO from O2.", difficulty: "scenario" }
        ],

        // --- CHAPTER 4: RESUSCITATION (New) ---
        c4: [
            { q: "Newborn (<4 weeks) CPR Ratio?", options: ["15:2", "3:1"], correct: 1, rationale: "3 Compressions : 1 Breath.", difficulty: "basic" },
            { q: "Start Newborn PPV if HR?", options: ["< 100", "< 60"], correct: 0, rationale: "HR < 100.", difficulty: "basic" },
            { q: "First step for non-vigorous newborn?", options: ["Suction", "Warm, Dry, Stimulate"], correct: 1, rationale: "Warm, Dry, Stimulate.", difficulty: "basic" },
            { q: "Target SpO2 at 1 minute of life?", options: ["60-65%", "90-95%"], correct: 0, rationale: "60-65%. It takes 10 mins to reach 90%.", difficulty: "advanced" },
            { q: "Start Compressions if Newborn HR is below?", options: ["100", "60"], correct: 1, rationale: "HR < 60 bpm despite effective PPV = Compressions.", difficulty: "advanced" },
            { q: "APGAR 'A' stands for?", options: ["Airway", "Appearance (Color)"], correct: 1, rationale: "Appearance.", difficulty: "basic" },
            { q: "Pre-ductal SpO2 probe location?", options: ["Right Hand", "Left Foot"], correct: 0, rationale: "Right Hand (Pre-ductal).", difficulty: "advanced" }
        ]
    },

    // 4. FLASHCARDS BANK (60 Flashcards)
    flashcards: {
        c1: [
            [span_85](start_span){ category: "Sequence", question: "Trauma Assessment?", answer: "C - A - B - C\n(Control Hemorrhage First)[span_85](end_span)" },
            [span_86](start_span){ category: "Sequence", question: "Medical Assessment?", answer: "A - B - C[span_86](end_span)" },
            [span_87](start_span){ category: "Sequence", question: "Cardiac Arrest?", answer: "C - A - B\n(Compressions First)[span_87](end_span)" },
            [span_88](start_span){ category: "Triangle", question: "General Impression?", answer: "Appearance\nWork of Breathing\nCirculation[span_88](end_span)" },
            [span_89](start_span){ category: "AVPU", question: "P stands for?", answer: "Responds to Pain[span_89](end_span)" },
            [span_90](start_span){ category: "Pulse", question: "Unconscious Adult?", answer: "Carotid (Neck)[span_90](end_span)" },
            [span_91](start_span){ category: "Pulse", question: "Infant Pulse?", answer: "Brachial (Upper Arm)[span_91](end_span)" },
            [span_92](start_span){ category: "Vitals", question: "Normal CRT?", answer: "< 2 seconds[span_92](end_span)" },
            [span_93](start_span){ category: "Safety", question: "First Priority?", answer: "Scene Safety[span_93](end_span)" },
            [span_94](start_span){ category: "ABCDE", question: "D stands for?", answer: "Disability (GCS, Pupils, Glucose)[span_94](end_span)" },
            [span_95](start_span){ category: "Vitals", question: "Adult RR?", answer: "12 - 20 bpm[span_95](end_span)" },
            [span_96](start_span){ category: "Vitals", question: "Adult HR?", answer: "60 - 100 bpm[span_96](end_span)" },
            [span_97](start_span){ category: "Vitals", question: "SpO2 Standard?", answer: "94 - 98%[span_97](end_span)" },
            [span_98](start_span){ category: "Vitals", question: "SpO2 COPD?", answer: "88 - 92%[span_98](end_span)" },
            [span_99](start_span){ category: "Vitals", question: "Hypotension?", answer: "SBP < 90 mmHg[span_99](end_span)" },
            [span_100](start_span){ category: "Vitals", question: "Hypoglycemia?", answer: "< 70 mg/dl[span_100](end_span)" },
            [span_101](start_span){ category: "Vitals", question: "EtCO2 Norm?", answer: "35 - 45 mmHg[span_101](end_span)" },
            [span_102](start_span){ category: "Vitals", question: "Fever?", answer: "> 38.0 C[span_102](end_span)" },
            [span_103](start_span){ category: "Mnemonic", question: "DCAP-BTLS?", answer: "Deformity, Contusion, Abrasion, Puncture\nBurn, Tender, Lac, Swell[span_103](end_span)" },
            [span_104](start_span){ category: "Mnemonic", question: "SAMPLE?", answer: "Sx, Allergy, Meds, Past Hx, Last Meal, Events[span_104](end_span)" },
            [span_105](start_span){ category: "Mnemonic", question: "OPQRST?", answer: "Onset, Provoke, Quality, Radiate, Severity, Time[span_105](end_span)" },
            [span_106](start_span){ category: "Mnemonic", question: "IMIST-AMBO?", answer: "ID, Mech, Inj, Signs, Tx\nAllergy, Meds, BG, Other[span_106](end_span)" },
            [span_107](start_span){ category: "Mnemonic", question: "Stroke Scale?", answer: "BEFAST[span_107](end_span)" },
            { category: "Mnemonic", question: "AEIOU-TIPS?", answer: "Causes of Altered Mental Status" },
            { category: "Mnemonic", question: "PASTE?", answer: "Respiratory Assessment" },
            { category: "Mnemonic", question: "APGAR?", answer: "Appearance, Pulse, Grimace, Activity, Resp" },
            { category: "Mnemonic", question: "DICE?", answer: "Drug, Integrity, Concentration, Equipment" },
            { category: "Mnemonic", question: "SLUDGE?", answer: "Organophosphate Poisoning Signs" },
            { category: "CPR", question: "Adult Ratio?", answer: "30:2" },
            { category: "CPR", question: "Peds Ratio (2)?", answer: "15:2" },
            { category: "CPR", question: "Comp Rate?", answer: "100 - 120 / min" },
            { category: "CPR", question: "Adult Depth?", answer: "5 - 6 cm" },
            { category: "CPR", question: "Infant Depth?", answer: "4 cm (1/3 chest)" },
            { category: "CPR", question: "Adv Airway Rate?", answer: "1 breath every 6 secs" },
            { category: "CPR", question: "Switch?", answer: "Every 2 mins" },
            { category: "CPR", question: "Hand Place?", answer: "Lower half sternum" },
            { category: "CPR", question: "Shockable?", answer: "VF / Pulseless VT" },
            { category: "CPR", question: "Non-Shockable?", answer: "Asystole / PEA" },
            [span_108](start_span){ category: "Ops", question: "Safe Park?", answer: "30 meters[span_108](end_span)" },
            { category: "Ops", question: "Hot Zone?", answer: "Contamination Area" },
            [span_109](start_span){ category: "Ops", question: "Airwing Exclusion?", answer: "Birth, Violence[span_109](end_span)" },
            [span_110](start_span){ category: "Ops", question: "PPE?", answer: "Gloves, Mask, Eye[span_110](end_span)" },
            [span_111](start_span){ category: "Ops", question: "Red Reassess?", answer: "5 mins[span_111](end_span)" },
            [span_112](start_span){ category: "Ops", question: "Yellow Reassess?", answer: "10 mins[span_112](end_span)" },
            [span_113](start_span){ category: "Ops", question: "Green Reassess?", answer: "15 mins[span_113](end_span)" },
            { category: "Ops", question: "Lifting?", answer: "Legs, straight back" },
            [span_114](start_span){ category: "Ops", question: "Tourniquet?", answer: "Arterial Limb Bleed[span_114](end_span)" },
            { category: "Ops", question: "Tourniquet Pos?", answer: "High & Tight" },
            { category: "Ops", question: "Triage Red?", answer: "Immediate" },
            [span_115](start_span){ category: "Peds", question: "Peds Age?", answer: "<= 13 years[span_115](end_span)" },
            [span_116](start_span){ category: "Peds", question: "Late Shock?", answer: "Hypotension[span_116](end_span)" },
            [span_117](start_span){ category: "Geri", question: "Geri Age?", answer: ">= 65 years[span_117](end_span)" },
            { category: "Burn", question: "Rule of 9s Arm?", answer: "9%" },
            { category: "Burn", question: "Rule of 9s Leg?", answer: "18%" },
            { category: "Burn", question: "Rule of 9s Chest?", answer: "18% (Torso 36%)" },
            { category: "Spl", question: "Shock Pos?", answer: "Supine" },
            { category: "Spl", question: "Recovery Pos?", answer: "Lateral Recumbent" },
            [span_118](start_span){ category: "Spl", question: "NRB Flow?", answer: "10 - 15 LPM[span_118](end_span)" },
            [span_119](start_span){ category: "Spl", question: "ALS Backup KPI?", answer: "Request < 1 min[span_119](end_span)" },
            [span_120](start_span){ category: "Spl", question: "Transport Rule?", answer: "< 10 mins = No ALS wait[span_120](end_span)" }
        ],
        c4: [
            { category: "Newborn", question: "CPR Ratio?", answer: "3:1" },
            { category: "Newborn", question: "PPV Indication?", answer: "HR < 100 or Apnea" },
            { category: "Newborn", question: "Compressions?", answer: "HR < 60 after PPV" }
        ],
        c7: [
            { category: "Tox", question: "Opioid Pupil?", answer: "Pinpoint" },
            { category: "Tox", question: "SLUDGE?", answer: "Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis" },
            { category: "Tox", question: "Beta Blocker?", answer: "Glucagon" }
        ]
    },

    // 5. CRITICAL RECOGNITION SCENARIOS
    criticalScenarios: [
        { scenario: "Male 55, Tearing back pain, BP difference in arms.", options: [{t:"Aspirin", s:0, f:"Contraindicated! Possible Dissection."}, {t:"Rapid Transport", s:10, f:"Correct. Suspected Aortic Dissection."}], kpi: "Scene < 10 mins." },
        { scenario: "Child 4, Stridor, Drooling, High Fever.", options: [{t:"Inspect Throat", s:0, f:"Danger! Could trigger airway collapse."}, {t:"Keep Calm & Transport", s:10, f:"Correct. Suspected Epiglottitis."}], kpi: "Gentle handling." }
    ]
};
