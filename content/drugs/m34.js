/* ========== M34 – Racemic Epinephrine (Adrenaline) ==========
 * Source: DCAS CPG 2025, M34 (p. 377) – data/cpg-source/M34_Racemic_Epinephrine.txt
 */
window.CPG_DRUG = {
    "code": "M34",
    "name": "Racemic Epinephrine (Adrenaline)",
    "classification": "Adrenergic agonist",
    "source": {
        "label": "M34",
        "pages": "377",
        "pdf": "../pdf_sections/M34_Racemic_Epinephrine.pdf"
    },
    "scope": [
        {
            "level": "EMT",
            "for": "Croup"
        }
    ],
    "presentation": [
        "0.5 ml nebule of 2.25% racemic epinephrine."
    ],
    "indications": [
        "Croup."
    ],
    "contraindications": [
        "Known allergy to the preparation."
    ],
    "precautions": [
        "Heart disease or structural abnormalities.",
        "Hypertension.",
        "Thyroid disease."
    ],
    "adult": [
        {
            "for": "Croup",
            "items": [
                "0.5 ml nebulised, diluted in 3 ml normal saline or sterile water."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Croup",
            "items": [
                "&gt;4 years: 0.5 ml nebulised in 3 ml normal saline or sterile water.",
                "&lt;4 years: 0.05 ml/kg (max 0.5 ml) in 3 ml normal saline or sterile water."
            ]
        }
    ],
    "sideEffects": [
        "Tachycardia.",
        "Arrhythmias, including VF.",
        "Tremor.",
        "Pulmonary edema.",
        "Headache."
    ],
    "pregnancy": [
        "Pregnancy and lactation: safety not established, but give when clinically indicated."
    ],
    "notes": [
        "The Croup CPG gives every child the same nebulised dose, with no weight-based dose for younger children."
    ],
    "mechanism": "Stimulates α1 receptors in laryngeal and tracheal mucosal vessels: vasoconstriction reduces airway edema.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: racemic epinephrine",
                    "sub": "Nebulised",
                    "href": "../pages/drug-calculator.html?drug=Racemic Epinephrine (Adrenaline)",
                    "icon": "pill"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "9.1 Croup",
            "href": "c9-1.html"
        }
    ]
};
