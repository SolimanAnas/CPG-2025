/* ========== c-index.js – Full CPG Index with Correct Links ========== */
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
    // ---------- Complete CPG list (same as in main index.html) ----------
    const CHAPTERS = [
        // Special
        { id: "c0", title: "2025 Updates", shortTitle: "c0", hasCritical: false, chapterGroup: null, isFirstInChapter: false },
        { id: "c-index", title: "Index", shortTitle: "c-index", hasCritical: false, chapterGroup: null, isFirstInChapter: false },
        
        // Universal Care
        { id: "c1s1", shortTitle: "1.1 Universal Care", title: "Universal Care – Core Assessment", hasCritical: true, chapterFile: "c1", sectionParam: "c1s1", chapterGroup: "universal" },
        { id: "c1s2", shortTitle: "1.2 Documentation", title: "Patient Care Documentation", hasCritical: true, chapterFile: "c1", sectionParam: "c1s2", chapterGroup: "universal" },
        { id: "c1s3", shortTitle: "1.3 Triage", title: "Patient Triage Categories", hasCritical: true, chapterFile: "c1", sectionParam: "c1s3", chapterGroup: "universal" },
        { id: "c1s4", shortTitle: "1.4 Functional Needs", title: "Functional Needs", hasCritical: true, chapterFile: "c1", sectionParam: "c1s4", chapterGroup: "universal" },
        { id: "c1s5", shortTitle: "1.5 Treated at Scene", title: "Treated at Scene", hasCritical: true, chapterFile: "c1", sectionParam: "c1s5", chapterGroup: "universal" },
        { id: "c1s6", shortTitle: "1.6 Refusal of Transfer", title: "Patient Refusal of Transfer", hasCritical: true, chapterFile: "c1", sectionParam: "c1s6", chapterGroup: "universal" },

        // Airway
        { id: "c2", shortTitle: "2.1 Airway Management", title: "Airway & Breathing", hasCritical: true, chapterFile: "c2", chapterGroup: "airway" },
        { id: "c2-2", shortTitle: "2.2 FBAO", title: "Foreign Body Airway Obstruction", hasCritical: true, chapterFile: "c2-2", chapterGroup: "airway" },
        { id: "c2-3", shortTitle: "2.3 Asthma", title: "Asthma", hasCritical: true, chapterFile: "c2-3", chapterGroup: "airway" },
        { id: "c2-4", shortTitle: "2.4 COPD", title: "COPD", hasCritical: true, chapterFile: "c2-4", chapterGroup: "airway" },
        { id: "c2-5", shortTitle: "2.5 Invasive Ventilation", title: "Invasive (Mechanical) Ventilation", hasCritical: true, chapterFile: "c2-5", chapterGroup: "airway" },

        // Cardiovascular
        { id: "c3-1", shortTitle: "3.1 Chest Pain / ACS", title: "Chest Pain / Acute Coronary Syndrome", hasCritical: true, chapterFile: "c3-1", chapterGroup: "cardio" },
        { id: "c3-2", shortTitle: "3.2 Adult Bradycardia", title: "Adult Bradycardia", hasCritical: true, chapterFile: "c3-2", chapterGroup: "cardio" },
        { id: "c3-3", shortTitle: "3.3 Adult Tachycardia", title: "Adult Tachycardia with a Pulse", hasCritical: true, chapterFile: "c3-3", chapterGroup: "cardio" },
        { id: "c3-4", shortTitle: "3.4 Acute Pulmonary Edema", title: "Acute Pulmonary Edema", hasCritical: true, chapterFile: "c3-4", chapterGroup: "cardio" },

        // Resuscitation
        { id: "c4-1", shortTitle: "4.1 Adult BLS", title: "Adult Basic Life Support", hasCritical: true, chapterFile: "c4-1", chapterGroup: "resus" },
        { id: "c4-2", shortTitle: "4.2 Pediatric BLS", title: "Pediatric Basic Life Support", hasCritical: true, chapterFile: "c4-2", chapterGroup: "resus" },
        { id: "c4-3", shortTitle: "4.3 Adult Cardiac Arrest", title: "Adult Cardiac Arrest", hasCritical: true, chapterFile: "c4-3", chapterGroup: "resus" },
        { id: "c4-4", shortTitle: "4.4 Pediatric Cardiac Arrest", title: "Pediatric Cardiac Arrest", hasCritical: true, chapterFile: "c4-4", chapterGroup: "resus" },
        { id: "c4-5", shortTitle: "4.5 Trauma Cardiac Arrest", title: "Cardiac Arrest in Trauma", hasCritical: true, chapterFile: "c4-5", chapterGroup: "resus" },
        { id: "c4-6", shortTitle: "4.6 Newborn Resuscitation", title: "Newborn (<4 weeks) and Pre‑term Infant Resuscitation", hasCritical: true, chapterFile: "c4-6", chapterGroup: "resus" },
        { id: "c4-7", shortTitle: "4.7 Post-ROSC", title: "Post Cardiac Arrest Care (ROSC)", hasCritical: true, chapterFile: "c4-7", chapterGroup: "resus" },
        { id: "c4-8", shortTitle: "4.8 Starting/Stopping CPR", title: "Starting, Stopping and Transferring CPR", hasCritical: true, chapterFile: "c4-8", chapterGroup: "resus" },
        { id: "c4-9", shortTitle: "4.9 Verification of Death", title: "Verification of Death", hasCritical: true, chapterFile: "c4-9", chapterGroup: "resus" },

        // Neurological
        { id: "c5-1", shortTitle: "5.1 Stroke", title: "Stroke", hasCritical: true, chapterFile: "c5-1", chapterGroup: "neuro" },
        { id: "c5-2", shortTitle: "5.2 Seizures", title: "Seizures", hasCritical: true, chapterFile: "c5-2", chapterGroup: "neuro" },

        // General Medical
        { id: "c6-1", shortTitle: "6.1 Abdominal Pain", title: "Abdominal Pain", hasCritical: true, chapterFile: "c6-1", chapterGroup: "medical" },
        { id: "c6-2", shortTitle: "6.2 Abnormal Behavior", title: "Abnormal Behavior", hasCritical: true, chapterFile: "c6-2", chapterGroup: "medical" },
        { id: "c6-3", shortTitle: "6.3 Adrenal Insufficiency", title: "Adrenal Insufficiency", hasCritical: true, chapterFile: "c6-3", chapterGroup: "medical" },
        { id: "c6-4", shortTitle: "6.4 Anaphylaxis", title: "Anaphylaxis / Allergic Reaction", hasCritical: true, chapterFile: "c6-4", chapterGroup: "medical" },
        { id: "c6-5", shortTitle: "6.5 Altered Mental Status", title: "Altered Mental Status", hasCritical: true, chapterFile: "c6-5", chapterGroup: "medical" },
        { id: "c6-6", shortTitle: "6.6 Epistaxis", title: "Epistaxis", hasCritical: true, chapterFile: "c6-6", chapterGroup: "medical" },
        { id: "c6-7", shortTitle: "6.7 Fever and Sepsis", title: "Fever and Sepsis", hasCritical: true, chapterFile: "c6-7", chapterGroup: "medical" },
        { id: "c6-8", shortTitle: "6.8 Hypoglycemia", title: "Hypoglycemia", hasCritical: true, chapterFile: "c6-8", chapterGroup: "medical" },
        { id: "c6-9", shortTitle: "6.9 Hyperglycemia", title: "Hyperglycemia", hasCritical: true, chapterFile: "c6-9", chapterGroup: "medical" },
        { id: "c6-10", shortTitle: "6.10 Nausea and Vomiting", title: "Nausea and Vomiting", hasCritical: true, chapterFile: "c6-10", chapterGroup: "medical" },
        { id: "c6-11", shortTitle: "6.11 Non‑Traumatic Shock", title: "Non‑Traumatic Shock", hasCritical: true, chapterFile: "c6-11", chapterGroup: "medical" },
        { id: "c6-12", shortTitle: "6.12 Pain Management", title: "Pain Management", hasCritical: true, chapterFile: "c6-12", chapterGroup: "medical" },
        { id: "c6-13", shortTitle: "6.13 Sickle Cell Crisis", title: "Sickle Cell Crisis", hasCritical: true, chapterFile: "c6-13", chapterGroup: "medical" },
        { id: "c6-14", shortTitle: "6.14 Alcohol Intoxication", title: "Suspected Alcohol Intoxication", hasCritical: true, chapterFile: "c6-14", chapterGroup: "medical" },

        // Trauma
        { id: "c7-1", shortTitle: "7.1 General Trauma", title: "General Trauma Management", hasCritical: true, chapterFile: "c7-1", chapterGroup: "trauma" },
        { id: "c7-2", shortTitle: "7.2 Burns", title: "Burns", hasCritical: true, chapterFile: "c7-2", chapterGroup: "trauma" },
        { id: "c7-3", shortTitle: "7.3 Crush Injuries", title: "Crush Injuries", hasCritical: true, chapterFile: "c7-3", chapterGroup: "trauma" },
        { id: "c7-4", shortTitle: "7.4 Limb Injuries", title: "Limb Injuries", hasCritical: true, chapterFile: "c7-4", chapterGroup: "trauma" },
        { id: "c7-5", shortTitle: "7.5 Spinal Motion Restriction", title: "Spinal Motion Restriction", hasCritical: true, chapterFile: "c7-5", chapterGroup: "trauma" },
        { id: "c7-6", shortTitle: "7.6 Traumatic Brain Injury", title: "Traumatic Brain Injuries", hasCritical: true, chapterFile: "c7-6", chapterGroup: "trauma" },

        // Environmental
        { id: "c8-1", shortTitle: "8.1 General Toxicology", title: "General Toxicology Management", hasCritical: true, chapterFile: "c8-1", chapterGroup: "environmental" },
        { id: "c8-2", shortTitle: "8.2 Opioid Overdose", title: "Opioid Overdose", hasCritical: true, chapterFile: "c8-2", chapterGroup: "environmental" },
        { id: "c8-3", shortTitle: "8.3 Beta‑Blocker Overdose", title: "Beta‑Blocker Overdose", hasCritical: true, chapterFile: "c8-3", chapterGroup: "environmental" },
        { id: "c8-4", shortTitle: "8.4 CCB Overdose", title: "Calcium Channel Blocker Overdose", hasCritical: true, chapterFile: "c8-4", chapterGroup: "environmental" },
        { id: "c8-5", shortTitle: "8.5 Organophosphate", title: "Organophosphate Poisoning", hasCritical: true, chapterFile: "c8-5", chapterGroup: "environmental" },
        { id: "c8-6", shortTitle: "8.6 Diving Emergencies", title: "Diving (SCUBA) Emergencies", hasCritical: true, chapterFile: "c8-6", chapterGroup: "environmental" },
        { id: "c8-7", shortTitle: "8.7 Drowning", title: "Drowning / Near Drowning", hasCritical: true, chapterFile: "c8-7", chapterGroup: "environmental" },
        { id: "c8-8", shortTitle: "8.8 Envenomation", title: "Envenomation", hasCritical: true, chapterFile: "c8-8", chapterGroup: "environmental" },
        { id: "c8-9", shortTitle: "8.9 Hypothermia", title: "Hypothermia / Cold Exposure", hasCritical: true, chapterFile: "c8-9", chapterGroup: "environmental" },
        { id: "c8-10", shortTitle: "8.10 Hyperthermia", title: "Hyperthermia / Heat Exposure", hasCritical: true, chapterFile: "c8-10", chapterGroup: "environmental" },

        // Pediatric
        { id: "c9-1", shortTitle: "9.1 Croup", title: "Croup", hasCritical: true, chapterFile: "c9-1", chapterGroup: "pediatric" },
        { id: "c9-2", shortTitle: "9.2 Pediatric Bradycardia", title: "Pediatric Bradycardia", hasCritical: true, chapterFile: "c9-2", chapterGroup: "pediatric" },
        { id: "c9-3", shortTitle: "9.3 Pediatric Tachycardia", title: "Pediatric Tachycardia", hasCritical: true, chapterFile: "c9-3", chapterGroup: "pediatric" },

        // Obstetrics
        { id: "c10-1", shortTitle: "10.1 Childbirth", title: "Childbirth", hasCritical: true, chapterFile: "c10-1", chapterGroup: "obstetric" },
        { id: "c10-2", shortTitle: "10.2 Post Partum Hemorrhage", title: "Post Partum Hemorrhage", hasCritical: true, chapterFile: "c10-2", chapterGroup: "obstetric" },
        { id: "c10-3", shortTitle: "10.3 PV Hemorrhage", title: "PV Hemorrhage in Pregnancy", hasCritical: true, chapterFile: "c10-3", chapterGroup: "obstetric" },
        { id: "c10-4", shortTitle: "10.4 Eclampsia", title: "Eclampsia / Pre‑eclampsia", hasCritical: true, chapterFile: "c10-4", chapterGroup: "obstetric" },

        // Major Incident Triage
        { id: "c11-1", shortTitle: "11.1 START Triage", title: "S.T.A.R.T Triage (MCI Triage)", hasCritical: true, chapterFile: "c11-1", chapterGroup: "mci" },

        // Scope & Medications
        { id: "s1", shortTitle: "S1 Scope of Practice", title: "Scope of Practice Matrix", hasCritical: false, chapterFile: "s1", chapterGroup: "scope" },
        { id: "m1-38", shortTitle: "M1–38 Formulary", title: "Medication Formulary (38 drugs)", hasCritical: false, chapterFile: "m1-38", chapterGroup: "scope" }
    ];

    // Group chapters by category (you can define your own grouping)
    const categories = {
        "universal": "🛡️ Universal Care",
        "airway": "🫁 Airway & Breathing",
        "cardio": "❤️ Cardiovascular",
        "resus": "🔄 Resuscitation",
        "neuro": "🧠 Neurological",
        "medical": "📋 General Medical",
        "trauma": "🩻 Trauma",
        "environmental": "🌡️ Environmental",
        "pediatric": "👶 Pediatric",
        "obstetric": "🤰 Obstetrics & Gynecology",
        "mci": "🚨 Major Incident Triage",
        "scope": "📘 Scope & Medications"
    };

    // Start building HTML
    let html = `<div class="sum-card"><h3 style="color:var(--header-text);">📚 Complete DCAS CPG 2025 Index</h3>`;

    for (let group in categories) {
        const groupChapters = CHAPTERS.filter(ch => ch.chapterGroup === group);
        if (groupChapters.length === 0) continue;

        html += `<h4 style="color:var(--accent-${group}); margin:30px 0 15px;">${categories[group]}</h4>`;
        html += `<table style="width:100%; border-collapse:collapse;">`;

        groupChapters.forEach(ch => {
            const baseFile = ch.chapterFile || ch.id;
            const sectionParam = ch.sectionParam ? `&section=${ch.sectionParam}` : '';
            const link = `chapters/${baseFile}.html?view=summary${sectionParam}`;
            html += `
                <tr style="border-bottom:1px solid rgba(0,0,0,0.05);">
                    <td style="padding:12px 8px; width:80px;"><span class="status-badge" style="background:var(--glass-bg);">${ch.shortTitle}</span></td>
                    <td style="padding:12px 8px;"><a href="${link}" style="color:var(--text-primary); text-decoration:none; font-weight:500;">${ch.title}</a></td>
                </tr>
            `;
        });
        html += `</table>`;
    }

    html += `<div style="margin-top:40px;"><button class="btn-action btn-summary" data-action="backHome">← Back to Chapters</button></div>`;
    html += `</div>`;

    return html;
}
