/* ========== M23 – Labetalol ==========
 * Source: DCAS CPG 2025, M23 (p. 366) – data/cpg-source/M23_Labetalol.txt
 */
window.CPG_DRUG = {
    "code": "M23",
    "name": "Labetalol",
    "classification": "Beta blocker",
    "source": {
        "label": "M23",
        "pages": "366",
        "pdf": "../pdf_sections/M23_Labetalol.pdf"
    },
    "scope": [
        {
            "level": "EP",
            "for": "Pre-eclampsia and eclampsia"
        }
    ],
    "presentation": [
        "100 mg/20 ml ampule (5 mg/ml)."
    ],
    "indications": [
        "Pre-eclampsia with severe hypertension.",
        "Eclampsia."
    ],
    "contraindications": [
        "Known allergy.",
        "Asthma.",
        "COPD.",
        "2nd or 3rd degree heart block without a pacemaker.",
        "Known sick sinus syndrome without an internal pacemaker.",
        "Taking non-dihydropyridine calcium channel blockers.",
        "Heart failure."
    ],
    "precautions": [
        "1st degree heart block (may cause bradycardia)."
    ],
    "adult": [
        {
            "for": "Pre-eclampsia and eclampsia",
            "items": [
                "20 mg IV/IO over 2 minutes; repeat every 10 minutes as required; maximum 80 mg."
            ]
        },
        {
            "for": "Dilution (prepare two syringes)",
            "items": [
                "20 ml syringe: 12 ml normal saline + 8 ml labetalol = 40 mg/20 ml (2 mg/ml).",
                "Give 10 ml (20 mg) over 2 minutes.",
                "Label both syringes “Labetalol 2 mg/ml”."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "All indications",
            "items": [
                "Not for pediatric administration."
            ]
        }
    ],
    "sideEffects": [
        "Hypotension.",
        "Nausea.",
        "Dizziness.",
        "Headache."
    ],
    "pregnancy": [
        "Pregnancy: safety not established, but give if clinically indicated.",
        "Lactation: infant harm possible; if given, advise the mother to stop breastfeeding until advised by their physician."
    ],
    "notes": [
        "The two-syringe dilution keeps the preparation clean and avoids handling an open ampule for repeat doses."
    ],
    "mechanism": "Blocks β1 receptors (lower heart rate and contractility) and weakly blocks α receptors (vasodilation), lowering blood pressure.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: labetalol",
                    "sub": "20 mg, max 80 mg",
                    "href": "../pages/drug-calculator.html?drug=Labetalol",
                    "icon": "pill"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "10.4 Pre-eclampsia and Eclampsia",
            "href": "c10-4.html"
        }
    ]
};
