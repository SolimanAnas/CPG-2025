/* ========== M19 – Haloperidol ==========
 * Source: DCAS CPG 2025, M19 (p. 362) – data/cpg-source/M19_Haloperidol.txt
 */
window.CPG_DRUG = {
    "code": "M19",
    "name": "Haloperidol",
    "classification": "Antipsychotic",
    "source": {
        "label": "M19",
        "pages": "362",
        "pdf": "../pdf_sections/M19_Haloperidol.pdf"
    },
    "scope": [
        {
            "level": "EP",
            "for": "Acute psychosis"
        }
    ],
    "presentation": [
        "5 mg/1 ml ampule."
    ],
    "indications": [
        "Acute psychosis suspected to be from a worsening mental health illness."
    ],
    "contraindications": [
        "Known allergy.",
        "Parkinson's disease.",
        "Dementia."
    ],
    "precautions": [
        "Nil."
    ],
    "adult": [
        {
            "for": "Acute psychosis",
            "items": [
                "5 mg IM (IM only)."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "All indications",
            "items": [
                "Not for pediatric use."
            ]
        }
    ],
    "sideEffects": [
        "Extrapyramidal effects.",
        "Hyperactive behavior.",
        "Increased muscle tone.",
        "Prolonged QT.",
        "Torsades de pointes."
    ],
    "pregnancy": [
        "Pregnancy: fetal harm demonstrated: not recommended.",
        "Lactation: safety not established: not recommended."
    ],
    "notes": [],
    "mechanism": "Blocks dopamine D1 and D2 receptors in the mesolimbic pathway, reducing hallucinations, delusions and agitation; histamine receptor effects add sedation.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: haloperidol",
                    "sub": "5 mg IM",
                    "href": "../pages/drug-calculator.html?drug=Haloperidol",
                    "icon": "pill"
                }
            ]
        },
        {
            "title": "Rhythms",
            "items": [
                {
                    "ecg": "longQt",
                    "label": "Long QT",
                    "sub": "Side effect: QT prolongation, torsades"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "6.2 Abnormal Behavior",
            "href": "c6-2.html"
        }
    ]
};
