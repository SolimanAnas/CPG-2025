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
        { id: "m1-38", shortTitle: "M1–38 Formulary", title: "Medication Formulary (38 drugs)", chapterFile: "m1-38", chapterGroup: "scope" }
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
        scope: "📘 Scope & Medications"
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

    for (let group in categories) {
        const groupChapters = CHAPTERS.filter(ch => ch.chapterGroup === group);
        if (!groupChapters.length) continue;

        html += `<h4 class="index-category" style="color: var(--accent-${group});">${categories[group]}</h4>`;
        html += `<table class="index-table">`;

        groupChapters.forEach(ch => {
            const baseFile = ch.chapterFile || ch.id;
            const sectionParam = ch.sectionParam ? `&section=${ch.sectionParam}` : '';
            const link = `${baseFile}.html?view=summary${sectionParam}`;

            html += `
                <tr class="index-row" data-title="${(ch.shortTitle + ' ' + ch.title).toLowerCase()}">
                    <td>
                        <a href="${link}" class="index-topic-link" data-original="${ch.shortTitle}">
                            ${ch.shortTitle}
                        </a>
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