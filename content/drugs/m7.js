/* ========== M7 – Dextrose 5% in Water (D5W) ==========
 * Source: DCAS CPG 2025, M7 (p. 349) – data/cpg-source/M7_Dextrose_5_in_Water_D5W.txt
 */
window.CPG_DRUG = {
    "code": "M7",
    "name": "Dextrose 5% in Water (D5W)",
    "classification": "Carbohydrate",
    "source": {
        "label": "M7",
        "pages": "349",
        "pdf": "../pdf_sections/M7_Dextrose_5_in_Water_D5W.pdf"
    },
    "scope": [
        {
            "level": "AP",
            "for": "Drug dilution"
        }
    ],
    "presentation": [
        "5 g in 100 ml bottle."
    ],
    "indications": [
        "Dilution of medications (amiodarone) for infusion."
    ],
    "contraindications": [
        "Use as a treatment for hypoglycemia."
    ],
    "precautions": [
        "Nil."
    ],
    "adult": [
        {
            "for": "Dilution",
            "items": [
                "As required by the infusion volume."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Dilution",
            "items": [
                "As required by the infusion volume."
            ]
        }
    ],
    "sideEffects": [
        "Hyperglycemia."
    ],
    "pregnancy": [
        "Pregnancy: may cause fetal harm, but give if clinically indicated.",
        "Lactation: safety not established, but give if clinically indicated."
    ],
    "notes": [],
    "mechanism": "Prevents solutes precipitating during infusions.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: Dextrose 5% Water",
                    "sub": "Amiodarone dilution",
                    "href": "../pages/drug-calculator.html?drug=Dextrose 5% Water",
                    "icon": "pill"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "M3 Amiodarone",
            "href": "m3.html"
        },
        {
            "label": "3.3 Adult Tachycardia with a Pulse",
            "href": "c3-3.html"
        }
    ]
};
