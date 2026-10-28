/* ========== M28 – Morphine ==========
 * Source: DCAS CPG 2025, M28 (p. 371) – data/cpg-source/M28_Morphine.txt
 */
window.CPG_DRUG = {
    "code": "M28",
    "name": "Morphine",
    "classification": "Opiate analgesic (agonist)",
    "source": {
        "label": "M28",
        "pages": "371",
        "pdf": "../pdf_sections/M28_Morphine.pdf"
    },
    "scope": [
        {
            "level": "EP",
            "for": "Severe pain"
        }
    ],
    "presentation": [
        "10 mg/1 ml ampule."
    ],
    "indications": [
        "Severe pain."
    ],
    "contraindications": [
        "Known allergy.",
        "Respiratory depression.",
        "SBP &lt;90 mmHg."
    ],
    "precautions": [
        "Respiratory distress or difficulty (including chest injuries).",
        "Elderly &gt;65 years.",
        "Infants &lt;1 year (respiratory depression).",
        "Morbid obesity.",
        "Moderate hypotension or shock."
    ],
    "adult": [
        {
            "for": "Severe pain",
            "items": [
                "2.5 mg IV/IO increments every 5 minutes; maximum 10 mg.",
                "2–10 mg IM; maximum 20 mg."
            ]
        },
        {
            "for": "IV/IO dilution",
            "items": [
                "9 ml normal saline + 1 ml (10 mg) morphine in a 10 ml syringe: 1 mg/1 ml."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Severe pain",
            "items": [
                "0.1 mg/kg IV/IM/IO."
            ]
        }
    ],
    "sideEffects": [
        "Respiratory depression.",
        "Hypotension.",
        "Drowsiness, reduced consciousness.",
        "Rash."
    ],
    "pregnancy": [
        "Pregnancy: may cause fetal harm; give only when benefit outweighs risk, discussed with the mother or family where possible.",
        "Never in labor: it crosses the placenta and can depress the newborn's breathing.",
        "Lactation: safety not established; give only when benefit outweighs risk."
    ],
    "notes": [
        "In the higher-risk groups above, use lower, carefully titrated doses and watch for respiratory depression."
    ],
    "mechanism": "Binds mu opioid receptors, producing analgesia.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: morphine",
                    "sub": "Titrated IV/IO or IM",
                    "href": "../pages/drug-calculator.html?drug=Morphine",
                    "icon": "pill"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "6.12 Pain Management",
            "href": "c6-12.html"
        },
        {
            "label": "M29 Naloxone",
            "href": "m29.html"
        }
    ]
};
