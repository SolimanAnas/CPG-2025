// content.js - DCAS CPG 2025 Data Store
// Cleaned & Aligned Version

window.CPG_CONTENT = {

    /* ===============================
       1️⃣ CHAPTER METADATA
    =============================== */

    chapters: [
        { id: 'c1', title: "Universal Care", desc: "Foundation, Primary Survey, Safety" },
        { id: 'c4', title: "Resuscitation", desc: "Adult, Peds, Newborn" },
        { id: 'c7', title: "Env & Toxicology", desc: "Overdoses, Envenomation" }
    ],

    /* ===============================
       2️⃣ SUMMARIES
    =============================== */

    summaries: {
        c1: `
        <div class="card">
            <h2>Universal Care Summary</h2>

            <h3>1. Assessment Approach</h3>
            <ul>
                <li><strong>Medical:</strong> A-B-C</li>
                <li><strong>Trauma:</strong> C-A-B-C</li>
                <li><strong>Cardiac Arrest:</strong> C-A-B</li>
                <li><strong>General Impression:</strong> Appearance, Breathing, Activity</li>
            </ul>

            <h3>2. Primary Survey</h3>
            <ul>
                <li><strong>Airway:</strong> Ensure patency</li>
                <li><strong>Breathing:</strong> Target SpO₂ 94–98%</li>
                <li><strong>Circulation:</strong> Pulse + bleeding control</li>
                <li><strong>Disability:</strong> AVPU, GCS, Glucose (< 70 mg/dl)</li>
            </ul>

            <h3>3. Red Flags</h3>
            <ul>
                <li>SpO₂ < 94%</li>
                <li>SBP < 90 mmHg</li>
                <li>GCS < 15</li>
                <li>Apnea</li>
            </ul>

            <h3>4. Reassessment</h3>
            <ul>
                <li>Red: Every 5 minutes</li>
                <li>Yellow: Every 10 minutes</li>
                <li>Green: Every 15 minutes</li>
            </ul>
        </div>
        `
    },

    /* ===============================
       3️⃣ QUESTION BANK
    =============================== */

    questions: {

        c1: [
            {
                q: "What is the Trauma assessment sequence?",
                options: ["A-B-C", "C-A-B-C", "C-A-B"],
                correct: 1,
                rationale: "Trauma prioritizes catastrophic hemorrhage.",
                difficulty: "basic"
            },
            {
                q: "Adult hypotension threshold?",
                options: ["SBP < 100", "SBP < 90"],
                correct: 1,
                rationale: "Hypotension is SBP < 90 mmHg.",
                difficulty: "basic"
            }
        ],

        c7: [
            {
                q: "Opioid antidote?",
                options: ["Atropine", "Naloxone"],
                correct: 1,
                rationale: "Naloxone reverses opioid toxicity.",
                difficulty: "basic"
            }
        ],

        c4: [
            {
                q: "Newborn CPR Ratio?",
                options: ["15:2", "3:1"],
                correct: 1,
                rationale: "3 compressions to 1 breath.",
                difficulty: "basic"
            }
        ]
    },

    /* ===============================
       4️⃣ FLASHCARDS
    =============================== */

    flashcards: {

        c1: [
            { category: "Sequence", question: "Trauma Sequence?", answer: "C-A-B-C" },
            { category: "Vitals", question: "Hypotension?", answer: "SBP < 90 mmHg" }
        ],

        c4: [
            { category: "Newborn", question: "CPR Ratio?", answer: "3:1" }
        ],

        c7: [
            { category: "Tox", question: "Opioid Pupil?", answer: "Pinpoint" }
        ]
    }

};
