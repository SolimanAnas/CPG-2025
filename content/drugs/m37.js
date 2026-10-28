/* ========== M37 – Sodium Chloride 0.9% (Normal Saline) ==========
 * Source: DCAS CPG 2025, M37 (p. 380) – data/cpg-source/M37_Sodium_Chloride_09_Normal_Saline.txt
 */
window.CPG_DRUG = {
    "code": "M37",
    "name": "Sodium Chloride 0.9% (Normal Saline)",
    "classification": "Isotonic crystalloid",
    "source": {
        "label": "M37",
        "pages": "380",
        "pdf": "../pdf_sections/M37_Sodium_Chloride_09_Normal_Saline.pdf"
    },
    "scope": [
        {
            "level": "EMT",
            "for": "Fluids, flushes, dilution"
        }
    ],
    "presentation": [
        "250 ml bottle or bag.",
        "100 ml bottle."
    ],
    "indications": [
        "End-organ perfusion, as per the relevant CPG.",
        "Hyperglycemia.",
        "Flushing IV/IO lines.",
        "Medication dilution."
    ],
    "contraindications": [
        "Known allergy to the preparation.",
        "Pulmonary edema or fluid overload."
    ],
    "precautions": [
        "Cardiovascular disease.",
        "Heart failure.",
        "Renal failure."
    ],
    "adult": [
        {
            "for": "All indications",
            "items": [
                "As per the relevant CPG."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "All indications",
            "items": [
                "As per the relevant CPG."
            ]
        }
    ],
    "sideEffects": [
        "Fluid overload."
    ],
    "pregnancy": [
        "Pregnancy and lactation: safe."
    ],
    "notes": [],
    "mechanism": "Replaces intravascular volume to maintain organ perfusion.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: normal saline",
                    "sub": "Boluses by weight",
                    "href": "../pages/drug-calculator.html?drug=Normal Saline",
                    "icon": "pill"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "6.11 Non-Traumatic Shock",
            "href": "c6-11.html"
        },
        {
            "label": "6.9 Hyperglycemia",
            "href": "c6-9.html"
        },
        {
            "label": "7.1 General Trauma Management",
            "href": "c7-1.html"
        },
        {
            "label": "10.2 Post-Partum Hemorrhage",
            "href": "c10-2.html"
        }
    ]
};
