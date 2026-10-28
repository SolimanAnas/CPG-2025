/* ========== M27 – Midazolam ==========
 * Source: DCAS CPG 2025, M27 (p. 370) – data/cpg-source/M27_Midazolam.txt
 */
window.CPG_DRUG = {
    "code": "M27",
    "name": "Midazolam",
    "classification": "Benzodiazepine",
    "source": {
        "label": "M27",
        "pages": "370",
        "pdf": "../pdf_sections/M27_Midazolam.pdf"
    },
    "scope": [
        {
            "level": "EP",
            "for": "Seizures and sedation"
        }
    ],
    "presentation": [
        "5 mg/1 ml ampule."
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
                "5 mg IV/IO/IM; repeat once after 10 minutes if required."
            ]
        },
        {
            "for": "Sedation",
            "items": [
                "1–5 mg IV/IO/IM."
            ]
        },
        {
            "for": "IV/IO dilution",
            "items": [
                "4 ml normal saline + 1 ml (5 mg) midazolam in a 5 ml syringe: 1 mg/1 ml."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Seizures",
            "items": [
                "0.1 mg/kg IV (max 5 mg); repeat once after 10 minutes if required.",
                "0.2 mg/kg IM (max 5 mg); repeat once after 10 minutes if required."
            ]
        },
        {
            "for": "IV dilution",
            "items": [
                "4 ml normal saline + 1 ml (5 mg) midazolam in a 5 or 10 ml syringe: 1 mg/1 ml."
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
        "Can compromise airway, breathing and circulation: full monitoring including nasal EtCO<sub>2</sub>.",
        "Establish IV access as soon as possible afterwards if not already in place."
    ],
    "mechanism": "Potentiates GABA, producing sedation and seizure inhibition.",
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
            "label": "3.2 Adult Bradycardia",
            "href": "c3-2.html"
        },
        {
            "label": "M9 Diazepam",
            "href": "m9.html"
        }
    ]
};
