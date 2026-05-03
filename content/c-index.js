/* ========== c-index.js – Full CPG Index (Glassy Search Bar) ========== */

window.CPG_DATA = {
    id: "c-index",
    title: "DCAS CPG Index",
    shortTitle: "📋 Full Index",
    sections: [
        {
            id: "c-index-main",
            shortTitle: "Complete Index",
            summary: generateIndexHTML(),
            quiz: [],
            flashcards: [],
            critical: []
        }
    ]
};

function generateIndexHTML() {

    /* ===================== FULL ORIGINAL CHAPTER ARRAY ===================== */
    const CHAPTERS = [
        // Universal Care
        { id: "c1s1", shortTitle: "1.1 Universal Care", title: "Universal Care – Core Assessment", chapterFile: "c1", sectionParam: "c1s1", chapterGroup: "universal" },
        { id: "c1s2", shortTitle: "1.2 Documentation", title: "Patient Care Documentation", chapterFile: "c1", sectionParam: "c1s2", chapterGroup: "universal" },
        { id: "c1s3", shortTitle: "1.3 Triage", title: "Patient Triage Categories", chapterFile: "c1", sectionParam: "c1s3", chapterGroup: "universal" },
        { id: "c1s4", shortTitle: "1.4 Functional Needs", title: "Functional Needs", chapterFile: "c1", sectionParam: "c1s4", chapterGroup: "universal" },
        { id: "c1s5", shortTitle: "1.5 Treated at Scene", title: "Treated at Scene", chapterFile: "c1", sectionParam: "c1s5", chapterGroup: "universal" },
        { id: "c1s6", shortTitle: "1.6 Refusal of Transfer", title: "Patient Refusal of Transfer", chapterFile: "c1", sectionParam: "c1s6", chapterGroup: "universal" },

        // Airway & Breathing
        { id: "c2s1", shortTitle: "2.1 Airway Management", title: "Airway & Breathing", chapterFile: "c2", sectionParam: "c2s1", chapterGroup: "airway" },
        { id: "c2s2", shortTitle: "2.2 FBAO", title: "Foreign Body Airway Obstruction", chapterFile: "c2", sectionParam: "c2s2", chapterGroup: "airway" },
        { id: "c2s3", shortTitle: "2.3 Asthma", title: "Asthma", chapterFile: "c2", sectionParam: "c2s3", chapterGroup: "airway" },
        { id: "c2s4", shortTitle: "2.4 COPD", title: "COPD", chapterFile: "c2", sectionParam: "c2s4", chapterGroup: "airway" },
        { id: "c2s5", shortTitle: "2.5 Invasive Ventilation", title: "Invasive (Mechanical) Ventilation", chapterFile: "c2", sectionParam: "c2s5", chapterGroup: "airway" },

        // Cardiovascular
        { id: "c3-1", shortTitle: "3.1 Chest Pain / ACS", title: "Chest Pain / Acute Coronary Syndrome", chapterFile: "c3-1", chapterGroup: "cardio" },
        { id: "c3-2", shortTitle: "3.2 Adult Bradycardia", title: "Adult Bradycardia", chapterFile: "c3-2", chapterGroup: "cardio" },
        { id: "c3-3", shortTitle: "3.3 Adult Tachycardia", title: "Adult Tachycardia with a Pulse", chapterFile: "c3-3", chapterGroup: "cardio" },
        { id: "c3-4", shortTitle: "3.4 Acute Pulmonary Edema", title: "Acute Pulmonary Edema", chapterFile: "c3-4", chapterGroup: "cardio" },

        // Resuscitation
        { id: "c4-1", shortTitle: "4.1 Adult BLS", title: "Adult Basic Life Support", chapterFile: "c4-1", chapterGroup: "resus" },
        { id: "c4-2", shortTitle: "4.2 Pediatric BLS", title: "Pediatric Basic Life Support", chapterFile: "c4-2", chapterGroup: "resus" },
        { id: "c4-3", shortTitle: "4.3 Adult Cardiac Arrest", title: "Adult Cardiac Arrest", chapterFile: "c4-3", chapterGroup: "resus" },
        { id: "c4-4", shortTitle: "4.4 Pediatric Cardiac Arrest", title: "Pediatric Cardiac Arrest", chapterFile: "c4-4", chapterGroup: "resus" },
        { id: "c4-5", shortTitle: "4.5 Trauma Cardiac Arrest", title: "Cardiac Arrest in Trauma", chapterFile: "c4-5", chapterGroup: "resus" },
        { id: "c4-6", shortTitle: "4.6 Newborn Resuscitation", title: "Newborn (<4 weeks) and Pre-term Infant Resuscitation", chapterFile: "c4-6", chapterGroup: "resus" },
        { id: "c4-7", shortTitle: "4.7 Post-ROSC", title: "Post Cardiac Arrest Care (ROSC)", chapterFile: "c4-7", chapterGroup: "resus" },
        { id: "c4-8", shortTitle: "4.8 Starting/Stopping CPR", title: "Starting, Stopping and Transferring CPR", chapterFile: "c4-8", chapterGroup: "resus" },
        { id: "c4-9", shortTitle: "4.9 Verification of Death", title: "Verification of Death", chapterFile: "c4-9", chapterGroup: "resus" },

        // Neurological
        { id: "c5-1", shortTitle: "5.1 Stroke", title: "Stroke", chapterFile: "c5-1", chapterGroup: "neuro" },
        { id: "c5-2", shortTitle: "5.2 Seizures", title: "Seizures", chapterFile: "c5-2", chapterGroup: "neuro" },

        // General Medical
        { id: "c6-1", shortTitle: "6.1 Abdominal Pain", title: "Abdominal Pain", chapterFile: "c6-1", chapterGroup: "medical" },
        { id: "c6-2", shortTitle: "6.2 Abnormal Behavior", title: "Abnormal Behavior", chapterFile: "c6-2", chapterGroup: "medical" },
        { id: "c6-3", shortTitle: "6.3 Adrenal Insufficiency", title: "Adrenal Insufficiency", chapterFile: "c6-3", chapterGroup: "medical" },
        { id: "c6-4", shortTitle: "6.4 Anaphylaxis", title: "Anaphylaxis / Allergic Reaction", chapterFile: "c6-4", chapterGroup: "medical" },
        { id: "c6-5", shortTitle: "6.5 Altered Mental Status", title: "Altered Mental Status", chapterFile: "c6-5", chapterGroup: "medical" },
        { id: "c6-6", shortTitle: "6.6 Epistaxis", title: "Epistaxis", chapterFile: "c6-6", chapterGroup: "medical" },
        { id: "c6-7", shortTitle: "6.7 Fever and Sepsis", title: "Fever and Sepsis", chapterFile: "c6-7", chapterGroup: "medical" },
        { id: "c6-8", shortTitle: "6.8 Hypoglycemia", title: "Hypoglycemia", chapterFile: "c6-8", chapterGroup: "medical" },
        { id: "c6-9", shortTitle: "6.9 Hyperglycemia", title: "Hyperglycemia", chapterFile: "c6-9", chapterGroup: "medical" },
        { id: "c6-10", shortTitle: "6.10 Nausea and Vomiting", title: "Nausea and Vomiting", chapterFile: "c6-10", chapterGroup: "medical" },
        { id: "c6-11", shortTitle: "6.11 Non-Traumatic Shock", title: "Non-Traumatic Shock", chapterFile: "c6-11", chapterGroup: "medical" },
        { id: "c6-12", shortTitle: "6.12 Pain Management", title: "Pain Management", chapterFile: "c6-12", chapterGroup: "medical" },
        { id: "c6-13", shortTitle: "6.13 Sickle Cell Crisis", title: "Sickle Cell Crisis", chapterFile: "c6-13", chapterGroup: "medical" },
        { id: "c6-14", shortTitle: "6.14 Alcohol Intoxication", title: "Suspected Alcohol Intoxication", chapterFile: "c6-14", chapterGroup: "medical" },

        // Trauma
        { id: "c7-1", shortTitle: "7.1 General Trauma", title: "General Trauma Management", chapterFile: "c7-1", chapterGroup: "trauma" },
        { id: "c7-2", shortTitle: "7.2 Burns", title: "Burns", chapterFile: "c7-2", chapterGroup: "trauma" },
        { id: "c7-3", shortTitle: "7.3 Crush Injuries", title: "Crush Injuries", chapterFile: "c7-3", chapterGroup: "trauma" },
        { id: "c7-4", shortTitle: "7.4 Limb Injuries", title: "Limb Injuries", chapterFile: "c7-4", chapterGroup: "trauma" },
        { id: "c7-5", shortTitle: "7.5 Spinal Motion Restriction", title: "Spinal Motion Restriction", chapterFile: "c7-5", chapterGroup: "trauma" },
        { id: "c7-6", shortTitle: "7.6 Traumatic Brain Injury", title: "Traumatic Brain Injuries", chapterFile: "c7-6", chapterGroup: "trauma" },

        // Environmental
        { id: "c8-1", shortTitle: "8.1 General Toxicology", title: "General Toxicology Management", chapterFile: "c8-1", chapterGroup: "environmental" },
        { id: "c8-2", shortTitle: "8.2 Opioid Overdose", title: "Opioid Overdose", chapterFile: "c8-2", chapterGroup: "environmental" },
        { id: "c8-3", shortTitle: "8.3 Beta-Blocker Overdose", title: "Beta-Blocker Overdose", chapterFile: "c8-3", chapterGroup: "environmental" },
        { id: "c8-4", shortTitle: "8.4 CCB Overdose", title: "Calcium Channel Blocker Overdose", chapterFile: "c8-4", chapterGroup: "environmental" },
        { id: "c8-5", shortTitle: "8.5 Organophosphate", title: "Organophosphate Poisoning", chapterFile: "c8-5", chapterGroup: "environmental" },
        { id: "c8-6", shortTitle: "8.6 Diving Emergencies", title: "Diving (SCUBA) Emergencies", chapterFile: "c8-6", chapterGroup: "environmental" },
        { id: "c8-7", shortTitle: "8.7 Drowning", title: "Drowning / Near Drowning", chapterFile: "c8-7", chapterGroup: "environmental" },
        { id: "c8-8", shortTitle: "8.8 Envenomation", title: "Envenomation", chapterFile: "c8-8", chapterGroup: "environmental" },
        { id: "c8-9", shortTitle: "8.9 Hypothermia", title: "Hypothermia / Cold Exposure", chapterFile: "c8-9", chapterGroup: "environmental" },
        { id: "c8-10", shortTitle: "8.10 Hyperthermia", title: "Hyperthermia / Heat Exposure", chapterFile: "c8-10", chapterGroup: "environmental" },

        // Pediatric
        { id: "c9-1", shortTitle: "9.1 Croup", title: "Croup", chapterFile: "c9-1", chapterGroup: "pediatric" },
        { id: "c9-2", shortTitle: "9.2 Pediatric Bradycardia", title: "Pediatric Bradycardia", chapterFile: "c9-2", chapterGroup: "pediatric" },
        { id: "c9-3", shortTitle: "9.3 Pediatric Tachycardia", title: "Pediatric Tachycardia", chapterFile: "c9-3", chapterGroup: "pediatric" },

        // Obstetrics
        { id: "c10-1", shortTitle: "10.1 Childbirth", title: "Childbirth", chapterFile: "c10-1", chapterGroup: "obstetric" },
        { id: "c10-2", shortTitle: "10.2 Post Partum Hemorrhage", title: "Post Partum Hemorrhage", chapterFile: "c10-2", chapterGroup: "obstetric" },
        { id: "c10-3", shortTitle: "10.3 PV Hemorrhage", title: "PV Hemorrhage in Pregnancy", chapterFile: "c10-3", chapterGroup: "obstetric" },
        { id: "c10-4", shortTitle: "10.4 Eclampsia", title: "Eclampsia / Pre-eclampsia", chapterFile: "c10-4", chapterGroup: "obstetric" },

        // MCI
        { id: "c11-1", shortTitle: "11.1 START Triage", title: "S.T.A.R.T Triage (MCI Triage)", chapterFile: "c11-1", chapterGroup: "mci" },

        // Scope & Medications
        { id: "s1", shortTitle: "S1 Scope of Practice", title: "Scope of Practice Matrix", chapterFile: "s1", chapterGroup: "scope" },
        { id: "m1", shortTitle: "M1 ActiMaris", title: "ActiMaris (Wound Irrigation)", chapterFile: "m1", chapterGroup: "meds" },
        { id: "m2", shortTitle: "M2 Adenosine", title: "Adenosine", chapterFile: "m2", chapterGroup: "meds" },
        { id: "m3", shortTitle: "M3 Amiodarone", title: "Amiodarone", chapterFile: "m3", chapterGroup: "meds" },
        { id: "m4", shortTitle: "M4 Aspirin", title: "Aspirin", chapterFile: "m4", chapterGroup: "meds" },
        { id: "m5", shortTitle: "M5 Atropine", title: "Atropine", chapterFile: "m5", chapterGroup: "meds" },
        { id: "m6", shortTitle: "M6 Combivent", title: "Combivent", chapterFile: "m6", chapterGroup: "meds" },
        { id: "m7", shortTitle: "M7 Dextrose 5% D5W", title: "Dextrose 5% in Water (D5W)", chapterFile: "m7", chapterGroup: "meds" },
        { id: "m8", shortTitle: "M8 Dextrose 10%", title: "Dextrose 10%", chapterFile: "m8", chapterGroup: "meds" },
        { id: "m9", shortTitle: "M9 Diazepam", title: "Diazepam", chapterFile: "m9", chapterGroup: "meds" },
        { id: "m10", shortTitle: "M10 Diclofenac", title: "Diclofenac", chapterFile: "m10", chapterGroup: "meds" },
        { id: "m11", shortTitle: "M11 Diphenhydramine", title: "Diphenhydramine", chapterFile: "m11", chapterGroup: "meds" },
        { id: "m12", shortTitle: "M12 Dopamine", title: "Dopamine", chapterFile: "m12", chapterGroup: "meds" },
        { id: "m13", shortTitle: "M13 Epinephrine", title: "Epinephrine (Adrenaline)", chapterFile: "m13", chapterGroup: "meds" },
        { id: "m14", shortTitle: "M14 Ethyl Chloride", title: "Ethyl Chloride", chapterFile: "m14", chapterGroup: "meds" },
        { id: "m15", shortTitle: "M15 Furosemide", title: "Furosemide", chapterFile: "m15", chapterGroup: "meds" },
        { id: "m16", shortTitle: "M16 Glucagon", title: "Glucagon", chapterFile: "m16", chapterGroup: "meds" },
        { id: "m17", shortTitle: "M17 Glucose Paste", title: "Glucose (40%) Oral Paste", chapterFile: "m17", chapterGroup: "meds" },
        { id: "m18", shortTitle: "M18 GTN", title: "Glyceryl Trinitrate (GTN)", chapterFile: "m18", chapterGroup: "meds" },
        { id: "m19", shortTitle: "M19 Haloperidol", title: "Haloperidol", chapterFile: "m19", chapterGroup: "meds" },
        { id: "m20", shortTitle: "M20 Hydrocortisone", title: "Hydrocortisone", chapterFile: "m20", chapterGroup: "meds" },
        { id: "m21", shortTitle: "M21 Hyoscine Butylbromide", title: "Hyoscine Butylbromide", chapterFile: "m21", chapterGroup: "meds" },
        { id: "m22", shortTitle: "M22 Ketamine", title: "Ketamine", chapterFile: "m22", chapterGroup: "meds" },
        { id: "m23", shortTitle: "M23 Labetalol", title: "Labetalol", chapterFile: "m23", chapterGroup: "meds" },
        { id: "m24", shortTitle: "M24 Magnesium Sulphate", title: "Magnesium Sulphate", chapterFile: "m24", chapterGroup: "meds" },
        { id: "m25", shortTitle: "M25 Methoxyflurane", title: "Methoxyflurane (Penthrox)", chapterFile: "m25", chapterGroup: "meds" },
        { id: "m26", shortTitle: "M26 Metoclopramide", title: "Metoclopramide", chapterFile: "m26", chapterGroup: "meds" },
        { id: "m27", shortTitle: "M27 Midazolam", title: "Midazolam", chapterFile: "m27", chapterGroup: "meds" },
        { id: "m28", shortTitle: "M28 Morphine", title: "Morphine", chapterFile: "m28", chapterGroup: "meds" },
        { id: "m29", shortTitle: "M29 Naloxone", title: "Naloxone", chapterFile: "m29", chapterGroup: "meds" },
        { id: "m30", shortTitle: "M30 Nefopam", title: "Nefopam", chapterFile: "m30", chapterGroup: "meds" },
        { id: "m31", shortTitle: "M31 Oxygen", title: "Oxygen", chapterFile: "m31", chapterGroup: "meds" },
        { id: "m32", shortTitle: "M32 Paracetamol", title: "Paracetamol", chapterFile: "m32", chapterGroup: "meds" },
        { id: "m33", shortTitle: "M33 Pethidine", title: "Pethidine", chapterFile: "m33", chapterGroup: "meds" },
        { id: "m34", shortTitle: "M34 Racemic Epinephrine", title: "Racemic Epinephrine", chapterFile: "m34", chapterGroup: "meds" },
        { id: "m35", shortTitle: "M35 Ringers Lactate", title: "Ringers Lactate", chapterFile: "m35", chapterGroup: "meds" },
        { id: "m36", shortTitle: "M36 Salbutamol", title: "Salbutamol", chapterFile: "m36", chapterGroup: "meds" },
        { id: "m37", shortTitle: "M37 Sodium Chloride 0.9%", title: "Sodium Chloride 0.9% (Normal Saline)", chapterFile: "m37", chapterGroup: "meds" },
        { id: "m38", shortTitle: "M38 Tranexamic Acid", title: "Tranexamic Acid", chapterFile: "m38", chapterGroup: "meds" }
    ];

    /* ================= CATEGORIES ================= */
    const categories = {
        universal: "🛡️ Universal Care",
        airway: "🫁 Airway & Breathing",
        cardio: "❤️ Cardiovascular",
        resus: "🔄 Resuscitation",
        neuro: "🧠 Neurological",
        medical: "📋 General Medical",
        trauma: "🩻 Trauma",
        environmental: "🌡️ Environmental",
        pediatric: "👶 Pediatric",
        obstetric: "🤰 Obstetrics & Gynecology",
        mci: "🚨 Major Incident Triage",
        scope: "📘 Scope of Practice",
        meds: "💊 Medications"
    };

    let html = `<div class="sum-card" id="indexRoot">
        <h3>📚 Complete DCAS CPG 2025 Index</h3>

        <!-- Glassy search bar styles – matches the home page exactly -->
        <style>
            .index-search-wrapper {
                display: flex;
                align-items: center;
                background: var(--glass-bg);
                border: 1px solid var(--glass-border);
                border-radius: 40px;
                padding: 4px 4px 4px 20px;
                margin-bottom: 24px;
                backdrop-filter: blur(10px);
                box-shadow: var(--glass-shadow);
            }
            .index-search-wrapper span {
                font-size: 1.2rem;
                margin-right: 8px;
                color: var(--text-secondary);
            }
            .index-search-wrapper input {
                flex: 1;
                background: transparent;
                border: none;
                padding: 12px 0;
                font-size: 1rem;
                color: var(--text-primary);
                outline: none;
            }
            .index-search-wrapper input::placeholder {
                color: var(--text-secondary);
                opacity: 0.7;
            }
            .index-search-wrapper button {
                background: transparent;
                border: none;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
                color: var(--text-secondary);
                cursor: pointer;
                transition: all 0.2s;
                margin-right: 4px;
                padding: 0;
            }
            .index-search-wrapper button:hover {
                background: rgba(255,255,255,0.1);
                color: var(--text-primary);
            }
            .index-search-wrapper button:active {
                transform: scale(0.95);
            }
            .index-category {
                margin: 20px 0 10px;
                font-size: 1.2rem;
                font-weight: 700;
                border-bottom: 2px solid currentColor;
                padding-bottom: 5px;
            }
            .index-table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 15px;
            }
            .index-topic-link {
                display: block;
                padding: 12px 0;
                font-weight: 500;
                font-size: 1.05rem;
                color: var(--text-primary);
                text-decoration: none;
                border-bottom: 1px solid rgba(128, 128, 128, 0.15);
                transition: color 0.2s, padding-left 0.2s, background 0.2s;
            }
            .index-topic-link:hover {
                color: var(--primary-accent);
                padding-left: 8px;
                background: rgba(0,0,0,0.02);
                border-radius: 8px 0 0 8px;
            }
            .index-row td {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .index-pdf-link {
                text-decoration: none;
                opacity: 0.7;
                transition: opacity 0.2s, transform 0.2s;
                margin-left: auto;
                padding: 4px 8px;
                display: flex;
                align-items: center;
            }
            .index-pdf-link img {
                width: 22px;
                height: 22px;
            }
            .index-pdf-link:hover {
                opacity: 1;
                transform: scale(1.15);
            }
            .index-no-results {
                padding: 30px;
                text-align: center;
                color: var(--text-secondary);
                font-style: italic;
                background: var(--glass-bg);
                border-radius: 16px;
                border: 1px dashed var(--glass-border);
            }
        </style>

        <!-- Search bar -->
        <div class="index-search-wrapper">
            <span>🔍</span>
            <input type="text" id="indexSearchInput" placeholder="Search guidelines..." value="">
            <button id="indexSearchClearBtn" style="display: none;">✕</button>
        </div>

        <div id="indexTableContainer">
    `;

    const PDF_MAP = {
        c1s1:  '1_1_Universal_Care__Core_Assessment.pdf',
        c1s2:  '1_2_Patient_Care_Documentation.pdf',
        c1s3:  '1_3_Patient_Triage_Categories.pdf',
        c1s4:  '1_4_Functional_Needs.pdf',
        c1s5:  '1_5_Treated_at_Scene.pdf',
        c1s6:  '1_6_Patient_Refusal_of_Transfer.pdf',
        c2s1:  '2_1_Airway_and_Breathing.pdf',
        c2s2:  '2_2_Foreign_Body_Airway_Obstruction_FBAO.pdf',
        c2s3:  '2_3_Asthma.pdf',
        c2s4:  '2_4_COPD.pdf',
        c2s5:  '2_5_Invasive_Mechanical_Ventilation.pdf',
        'c3-1': '3_1_Chest_Pain___Acute_Coronary_Syndrome.pdf',
        'c3-2': '3_2_Adult_Bradycardia.pdf',
        'c3-3': '3_3_Adult_Tachycardia_with_a_Pulse.pdf',
        'c3-4': '3_4_Acute_Pulmonary_Edema.pdf',
        'c4-1': '4_1_Adult_Basic_Life_Support.pdf',
        'c4-2': '4_2_Pediatric_Basic_Life_Support.pdf',
        'c4-3': '4_3_Adult_Cardiac_Arrest.pdf',
        'c4-4': '4_4_Pediatric_Cardiac_Arrest.pdf',
        'c4-5': '4_5_Cardiac_Arrest_in_Trauma.pdf',
        'c4-6': '4_6_Newborn_4_weeks_and_Pre-term_Infant_Resuscitation.pdf',
        'c4-7': '4_7_Post_Cardiac_Arrest_Care_ROSC.pdf',
        'c4-8': '4_8_Starting_Stopping_and_Transferring_CPR.pdf',
        'c4-9': '4_9_Verification_of_Death.pdf',
        'c5-1': '5_1_Stroke.pdf',
        'c5-2': '5_2_Seizures.pdf',
        'c6-1':  '6_1_Abdominal_Pain.pdf',
        'c6-2':  '6_2_Abnormal_Behavior.pdf',
        'c6-3':  '6_3_Adrenal_Insufficiency.pdf',
        'c6-4':  '6_4_Anaphylaxis___Allergic_Reaction.pdf',
        'c6-5':  '6_5_Altered_Mental_Status.pdf',
        'c6-6':  '6_6_Epistaxis.pdf',
        'c6-7':  '6_7_Fever_and_Sepsis.pdf',
        'c6-8':  '6_8_Hypoglycemia.pdf',
        'c6-9':  '6_9_Hyperglycemia.pdf',
        'c6-10': '6_10_Nausea_and_Vomiting.pdf',
        'c6-11': '6_11_Non-Traumatic_Shock.pdf',
        'c6-12': '6_12_Pain_Management.pdf',
        'c6-13': '6_13_Sickle_Cell_Crisis.pdf',
        'c6-14': '6_14_Suspected_Alcohol_Intoxication.pdf',
        'c7-1': '7_1_General_Trauma_Management.pdf',
        'c7-2': '7_2_Burns.pdf',
        'c7-3': '7_3_Crush_Injuries.pdf',
        'c7-4': '7_4_Limb_Injuries.pdf',
        'c7-5': '7_5_Spinal_Motion_Restriction.pdf',
        'c7-6': '7_6_Traumatic_Brain_Injuries.pdf',
        'c8-1':  '8_1_General_Toxicology_Management.pdf',
        'c8-2':  '8_2_Opioid_Overdose.pdf',
        'c8-3':  '8_3_Beta-Blocker_Overdose.pdf',
        'c8-4':  '8_4_Calcium_Channel_Blocker_Overdose.pdf',
        'c8-5':  '8_5_Organophosphate_Poisoning.pdf',
        'c8-6':  '8_6_Diving_SCUBA_Emergencies.pdf',
        'c8-7':  '8_7_Drowning___Near_Drowning.pdf',
        'c8-8':  '8_8_Envenomation.pdf',
        'c8-9':  '8_9_Hypothermia___Cold_Exposure.pdf',
        'c8-10': '8_10_Hyperthermia___Heat_Exposure.pdf',
        'c9-1': '9_1_Croup.pdf',
        'c9-2': '9_2_Pediatric_Bradycardia.pdf',
        'c9-3': '9_3_Pediatric_Tachycardia.pdf',
        'c10-1': '10_1_Childbirth.pdf',
        'c10-2': '10_2_Post_Partum_Hemorrhage.pdf',
        'c10-3': '10_3_PV_Hemorrhage_in_Pregnancy.pdf',
        'c10-4': '10_4_Eclampsia___Pre-eclampsia.pdf',
        'c11-1': '11_1_START_Triage_MCI_Triage.pdf',
        'c12-1': '12_1_Scope_of_Practice_Matrix.pdf',
        s1:      '12_1_Scope_of_Practice_Matrix.pdf',
        m1:  'M1_ActiMaris_Wound_Irrigation.pdf',
        m2:  'M2_Adenosine.pdf',
        m3:  'M3_Amiodarone.pdf',
        m4:  'M4_Aspirin.pdf',
        m5:  'M5_Atropine.pdf',
        m6:  'M6_Combivent.pdf',
        m7:  'M7_Dextrose_5_in_Water_D5W.pdf',
        m8:  'M8_Dextrose_10.pdf',
        m9:  'M9_Diazepam.pdf',
        m10: 'M10_Diclofenac.pdf',
        m11: 'M11_Diphenhydramine.pdf',
        m12: 'M12_Dopamine.pdf',
        m13: 'M13_Epinephrine_Adrenaline.pdf',
        m14: 'M14_Ethyl_Chloride.pdf',
        m15: 'M15_Furosemide.pdf',
        m16: 'M16_Glucagon.pdf',
        m17: 'M17_Glucose_40_Oral_Paste.pdf',
        m18: 'M18_Glyceryl_Trinitrate_GTN.pdf',
        m19: 'M19_Haloperidol.pdf',
        m20: 'M20_Hydrocortisone.pdf',
        m21: 'M21_Hyoscine_Butylbromide.pdf',
        m22: 'M22_Ketamine.pdf',
        m23: 'M23_Labetalol.pdf',
        m24: 'M24_Magnesium_Sulphate.pdf',
        m25: 'M25_Methoxyflurane_Penthrox.pdf',
        m26: 'M26_Metoclopramide.pdf',
        m27: 'M27_Midazolam.pdf',
        m28: 'M28_Morphine.pdf',
        m29: 'M29_Naloxone.pdf',
        m30: 'M30_Nefopam.pdf',
        m31: 'M31_Oxygen.pdf',
        m32: 'M32_Paracetamol.pdf',
        m33: 'M33_Pethidine.pdf',
        m34: 'M34_Racemic_Epinephrine.pdf',
        m35: 'M35_Ringers_Lactate.pdf',
        m36: 'M36_Salbutamol.pdf',
        m37: 'M37_Sodium_Chloride_09_Normal_Saline.pdf',
        m38: 'M38_Tranexamic_Acid.pdf',
    };

    for (let group in categories) {
        const groupChapters = CHAPTERS.filter(ch => ch.chapterGroup === group);
        if (!groupChapters.length) continue;

        html += `<h4 class="index-category" style="color: var(--accent-${group});">${categories[group]}</h4>`;
        html += `<table class="index-table">`;

        groupChapters.forEach(ch => {
            const baseFile = ch.chapterFile || ch.id;
            const sectionParam = ch.sectionParam ? `&section=${ch.sectionParam}` : '';
            const link = `${baseFile}.html?view=summary${sectionParam}`;
            const pdfFile = PDF_MAP[ch.id];
            const pdfLink = pdfFile ? `../pdf_sections/${pdfFile}` : '';

            html += `
                <tr class="index-row" data-title="${(ch.shortTitle + ' ' + ch.title).toLowerCase()}">
                    <td>
                        <a href="${link}" class="index-topic-link" data-original="${ch.shortTitle}">
                            ${ch.shortTitle}
                        </a>
                        ${pdfLink ? `<a href="${pdfLink}" class="index-pdf-link" title="Open PDF" target="_blank"><img src="../images/pdf.png" alt="PDF"></a>` : ''}
                    </td>
                </tr>
            `;
        });

        html += `</table>`;
    }

    html += `<div id="noResultsMsg" class="index-no-results" style="display: none;">No matching guidelines found.</div>`;
    html += `</div></div>`;

    /* ================= SEARCH LOGIC (EXACTLY AS ORIGINAL) ================= */
    setTimeout(() => {
        const input = document.getElementById('indexSearchInput');
        const clearBtn = document.getElementById('indexSearchClearBtn');
        const rows = document.querySelectorAll('.index-row');
        const tables = document.querySelectorAll('.index-table');
        const headers = document.querySelectorAll('.index-category');
        const noResults = document.getElementById('noResultsMsg');

        function fuzzyMatch(text, query) {
            let t = text.toLowerCase();
            let q = query.toLowerCase();
            let ti = 0, qi = 0;
            while (ti < t.length && qi < q.length) {
                if (t[ti] === q[qi]) qi++;
                ti++;
            }
            return qi === q.length;
        }

        function highlight(text, query) {
            let result = "";
            let qIndex = 0;
            query = query.toLowerCase();
            for (let i = 0; i < text.length; i++) {
                if (qIndex < query.length && text[i].toLowerCase() === query[qIndex]) {
                    result += `<span style="background: var(--primary-accent); color: #fff; border-radius: 3px; padding: 0 2px;">${text[i]}</span>`;
                    qIndex++;
                } else {
                    result += text[i];
                }
            }
            return result;
        }

        input.addEventListener('input', () => {
            const query = input.value.trim();
            clearBtn.style.display = query ? 'flex' : 'none';
            const lowerQuery = query.toLowerCase();
            let visibleCount = 0;

            rows.forEach(row => {
                const link = row.querySelector('.index-topic-link');
                const original = link.getAttribute('data-original');
                const title = row.getAttribute('data-title');

                if (!query) {
                    row.style.display = '';
                    link.innerHTML = original;
                    visibleCount++;
                } else if (fuzzyMatch(title, lowerQuery)) {
                    row.style.display = '';
                    link.innerHTML = highlight(original, query);
                    visibleCount++;
                } else {
                    row.style.display = 'none';
                }
            });

            tables.forEach((table, i) => {
                const visibleRows = table.querySelectorAll('.index-row:not([style*="display: none"])');
                if (visibleRows.length === 0) {
                    table.style.display = 'none';
                    if (headers[i]) headers[i].style.display = 'none';
                } else {
                    table.style.display = '';
                    if (headers[i]) headers[i].style.display = '';
                }
            });

            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        });

        clearBtn.addEventListener('click', () => {
            input.value = '';
            clearBtn.style.display = 'none';
            input.dispatchEvent(new Event('input'));
        });
    }, 50);

    return html;
}