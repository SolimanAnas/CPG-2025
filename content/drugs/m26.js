/* ========== M26 – Metoclopramide ==========
 * Source: DCAS CPG 2025, M26 (p. 369) – data/cpg-source/M26_Metoclopramide.txt
 */
window.CPG_DRUG = {
    "code": "M26",
    "name": "Metoclopramide",
    "classification": "Antiemetic",
    "source": {
        "label": "M26",
        "pages": "369",
        "pdf": "../pdf_sections/M26_Metoclopramide.pdf"
    },
    "scope": [
        {
            "level": "P",
            "for": "Nausea and vomiting"
        }
    ],
    "presentation": [
        "10 mg/2 ml ampule."
    ],
    "indications": [
        "Nausea and vomiting."
    ],
    "contraindications": [
        "Known allergy.",
        "Epilepsy.",
        "Parkinson's disease.",
        "Tardive dyskinesia.",
        "Suspected GI hemorrhage or obstruction.",
        "Pheochromocytoma.",
        "Recent GI surgery.",
        "Age &lt;1 year.",
        "Allergy to procainamide."
    ],
    "precautions": [
        "Pediatrics (extrapyramidal effects)."
    ],
    "adult": [
        {
            "for": "Nausea and vomiting",
            "items": [
                "10 mg IV/IM: slow IV over 3 minutes, or diluted in 100 ml normal saline as an infusion."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Nausea and vomiting",
            "items": [
                "Not recommended routinely (significant risk of extrapyramidal effects).",
                "0.1 mg/kg IV/IM, slow IV over 3 minutes."
            ]
        }
    ],
    "sideEffects": [
        "Extrapyramidal effects (common in children).",
        "Rash.",
        "Hypotension.",
        "Dyspnea.",
        "Drowsiness and dizziness."
    ],
    "pregnancy": [
        "Pregnancy: safety not established: not routinely recommended.",
        "Lactation: safety not established: not routinely recommended; if essential, advise the mother to stop breastfeeding until advised by their physician."
    ],
    "notes": [
        "Do not mix with morphine.",
        "Never give prophylactically after an opiate: only if nausea occurs."
    ],
    "mechanism": "Blocks dopamine D2 receptors in the chemoreceptor trigger zone, and weakly 5-HT3 receptors in the gut, reducing nausea and increasing gastric motility.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: metoclopramide",
                    "sub": "10 mg",
                    "href": "../pages/drug-calculator.html?drug=Metoclopramide",
                    "icon": "pill"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "6.10 Nausea and Vomiting",
            "href": "c6-10.html"
        },
        {
            "label": "10.3 PV Hemorrhage in Pregnancy",
            "href": "c10-3.html"
        }
    ]
};
