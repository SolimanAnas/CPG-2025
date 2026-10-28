/* ========== M9 – Diazepam ==========
 * Source: DCAS CPG 2025, M9 (p. 351) – data/cpg-source/M9_Diazepam.txt
 */
window.CPG_DRUG = {
    "code": "M9",
    "name": "Diazepam",
    "classification": "Benzodiazepine",
    "source": {
        "label": "M9",
        "pages": "351",
        "pdf": "../pdf_sections/M9_Diazepam.pdf"
    },
    "scope": [
        {
            "level": "EP",
            "for": "Seizures and sedation"
        }
    ],
    "presentation": [
        "10 mg/2 ml ampule.",
        "5 mg/2.5 ml rectal tube."
    ],
    "indications": [
        "Seizures.",
        "Sedation of agitated or combative patients."
    ],
    "contraindications": [
        "Known allergy."
    ],
    "precautions": [
        "Respiratory distress.",
        "Shock or hypotension.",
        "Reduced level of consciousness."
    ],
    "adult": [
        {
            "for": "Seizures",
            "items": [
                "5 mg IV."
            ]
        },
        {
            "for": "Sedation",
            "items": [
                "5 mg IV.",
                "Reduce the dose if agitation is secondary to traumatic brain injury."
            ]
        },
        {
            "for": "IV/IO dilution",
            "items": [
                "Draw up 8 ml normal saline in a 10 ml syringe and add 2 ml (10 mg) diazepam: 1 mg/1 ml."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Seizures",
            "items": [
                "0.1 mg/kg IV/IO (max 5 mg).",
                "0.5 mg/kg PR (maximum 20 mg)."
            ]
        },
        {
            "for": "IV dilution",
            "items": [
                "8 ml normal saline + 2 ml (10 mg) diazepam: 1 mg/1 ml."
            ]
        }
    ],
    "sideEffects": [
        "Respiratory depression.",
        "Hypotension."
    ],
    "pregnancy": [
        "Pregnancy: fetal harm demonstrated, but give if clinically indicated.",
        "Lactation: safety not established, but give if clinically indicated."
    ],
    "notes": [
        "Not recommended IM (slow onset): the sheet advises IM midazolam.",
        "Can compromise airway, breathing and circulation: full monitoring; establish IV access as soon as possible if not already in place."
    ],
    "mechanism": "Potentiates GABA, producing sedation and seizure inhibition.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: Diazepam",
                    "sub": "Adult and pediatric seizure doses",
                    "href": "../pages/drug-calculator.html?drug=Diazepam",
                    "icon": "pill"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "5.2 Seizures",
            "href": "c5-2.html"
        },
        {
            "label": "6.2 Abnormal Behavior",
            "href": "c6-2.html"
        },
        {
            "label": "10.4 Pre-eclampsia and Eclampsia",
            "href": "c10-4.html"
        }
    ]
};
