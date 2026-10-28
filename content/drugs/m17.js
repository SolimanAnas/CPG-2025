/* ========== M17 – Glucose 40% Oral Paste ==========
 * Source: DCAS CPG 2025, M17 (p. 360) – data/cpg-source/M17_Glucose_40_Oral_Paste.txt
 */
window.CPG_DRUG = {
    "code": "M17",
    "name": "Glucose 40% Oral Paste",
    "classification": "Carbohydrate",
    "source": {
        "label": "M17",
        "pages": "360",
        "pdf": "../pdf_sections/M17_Glucose_40_Oral_Paste.pdf"
    },
    "scope": [
        {
            "level": "EMR",
            "for": "Hypoglycemia"
        }
    ],
    "presentation": [
        "Tube containing 15 g glucose."
    ],
    "indications": [
        "Hypoglycemia (RBS &lt;70 mg/dl)."
    ],
    "contraindications": [
        "Known allergy.",
        "Unresponsive, or unable to swallow."
    ],
    "precautions": [
        "Airway occlusion in semi-conscious patients, particularly children &lt;2 years."
    ],
    "adult": [
        {
            "for": "Hypoglycemia",
            "items": [
                "1 tube PO, adjusting the amount to the space available.",
                "Repeat after 5–10 minutes if required."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Hypoglycemia",
            "items": [
                "½ tube PO, adjusting the amount to the space available.",
                "Repeat after 5–10 minutes if required."
            ]
        }
    ],
    "sideEffects": [
        "May cause vomiting."
    ],
    "pregnancy": [
        "Pregnancy and lactation: safety not established, but give if clinically indicated."
    ],
    "notes": [
        "Not absorbed through the buccal mucosa: it must be swallowed.",
        "Very young children or neonates who can suck: put a little on a gloved fingertip and let them suck it."
    ],
    "mechanism": "Supplies glucose for cellular metabolism, raising blood glucose rapidly.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: glucose 40% oral paste",
                    "sub": "1 tube adult, ½ tube child",
                    "href": "../pages/drug-calculator.html?drug=Glucose 40% Oral Paste",
                    "icon": "pill"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "6.8 Hypoglycemia",
            "href": "c6-8.html"
        }
    ]
};
