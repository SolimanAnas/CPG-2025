/* ========== M10 – Diclofenac (Voltaren) ==========
 * Source: DCAS CPG 2025, M10 (p. 352) – data/cpg-source/M10_Diclofenac.txt
 */
window.CPG_DRUG = {
    "code": "M10",
    "name": "Diclofenac (Voltaren)",
    "classification": "NSAID",
    "source": {
        "label": "M10",
        "pages": "352",
        "pdf": "../pdf_sections/M10_Diclofenac.pdf"
    },
    "scope": [
        {
            "level": "EMT-A",
            "for": "Moderate to severe pain"
        }
    ],
    "presentation": [
        "75 mg/3 ml ampule."
    ],
    "indications": [
        "Moderate to severe pain."
    ],
    "contraindications": [
        "Known allergy.",
        "Previous reaction to NSAIDs.",
        "Renal insufficiency.",
        "Pregnancy."
    ],
    "precautions": [
        "Asthma or COPD with previous worsening after an NSAID."
    ],
    "adult": [
        {
            "for": "Pain",
            "items": [
                "75 mg IM into a large muscle.",
                "75 mg IV, diluted in 100 ml normal saline over 10 minutes."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "All indications",
            "items": [
                "Not given to pediatrics."
            ]
        }
    ],
    "sideEffects": [
        "Pain at the injection site."
    ],
    "pregnancy": [
        "Pregnancy: fetal harm demonstrated: do not give.",
        "Lactation: safety not established; if essential, advise the mother to stop breastfeeding until advised by their physician."
    ],
    "notes": [
        "Avoid IV administration: increased risk of thromboembolic events."
    ],
    "mechanism": "Inhibits COX-1 and COX-2, stopping prostaglandin production: reduces pain, inflammation and fever.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: Diclofenac",
                    "sub": "75 mg IM",
                    "href": "../pages/drug-calculator.html?drug=Diclofenac",
                    "icon": "pill"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "6.12 Pain Management",
            "href": "c6-12.html"
        }
    ]
};
