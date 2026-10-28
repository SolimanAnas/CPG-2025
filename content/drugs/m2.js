/* ========== M2 – Adenosine ==========
 * Source: DCAS CPG 2025, M2 (p. 344) – data/cpg-source/M2_Adenosine.txt
 */
window.CPG_DRUG = {
    "code": "M2",
    "name": "Adenosine",
    "classification": "Antiarrhythmic",
    "source": {
        "label": "M2",
        "pages": "344",
        "pdf": "../pdf_sections/M2_Adenosine.pdf"
    },
    "scope": [
        {
            "level": "P",
            "for": "SVT and regular monomorphic VT"
        }
    ],
    "presentation": [
        "6 mg/2 ml vial."
    ],
    "indications": [
        "Chemical cardioversion of narrow complex SVT and regular monomorphic VT."
    ],
    "contraindications": [
        "Known allergy.",
        "Wolff-Parkinson-White syndrome with atrial fibrillation.",
        "Known sick sinus syndrome without a pacemaker.",
        "Previous 2nd or 3rd degree heart block without a pacemaker."
    ],
    "precautions": [
        "Asthma or severe reactive airway disease (COPD)."
    ],
    "adult": [
        {
            "for": "SVT / regular monomorphic VT",
            "items": [
                "1st dose: 6 mg rapid IV/IO push over 1–2 seconds.",
                "2nd dose: 12 mg rapid IV/IO push over 1–2 seconds.",
                "Follow each dose with a 10–20 ml normal saline flush; consider raising the arm."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "SVT / regular monomorphic VT",
            "items": [
                "1st dose: 0.1 mg/kg (max 6 mg) rapid IV/IO push over 1–2 seconds.",
                "2nd dose: 0.2 mg/kg (max 12 mg) rapid IV/IO push over 1–2 seconds."
            ]
        }
    ],
    "sideEffects": [
        "Bradycardia, asystole (usually transient), VF/VT.",
        "Hypotension.",
        "Difficulty breathing.",
        "Chest pain.",
        "Facial flushing."
    ],
    "pregnancy": [
        "Pregnancy and lactation: fetal risk cannot be ruled out, but if indicated the balance of risk generally favours giving it."
    ],
    "notes": [
        "On conversion, expect transient rhythms: a short period of asystole, PVCs, PACs, sinus bradycardia or tachycardia, skipped beats, AV nodal block."
    ],
    "mechanism": "Slows impulse formation in the SA node and conduction through the AV node, interrupting re-entry pathways through the AV node. Onset immediate; peak 20 seconds; duration 40 seconds.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: adenosine",
                    "sub": "Adult and pediatric doses",
                    "href": "../pages/drug-calculator.html?drug=Adenosine",
                    "icon": "pill"
                }
            ]
        },
        {
            "title": "Rhythms",
            "items": [
                {
                    "ecg": "svt",
                    "label": "SVT",
                    "sub": "Narrow complex: adenosine after vagal manoeuvres"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "3.3 Adult Tachycardia with a Pulse",
            "href": "c3-3.html"
        },
        {
            "label": "9.3 Pediatric Tachycardia",
            "href": "c9-3.html"
        }
    ]
};
