/* ========== M29 – Naloxone ==========
 * Source: DCAS CPG 2025, M29 (p. 372) – data/cpg-source/M29_Naloxone.txt
 */
window.CPG_DRUG = {
    "code": "M29",
    "name": "Naloxone",
    "classification": "Opiate antagonist",
    "source": {
        "label": "M29",
        "pages": "372",
        "pdf": "../pdf_sections/M29_Naloxone.pdf"
    },
    "scope": [
        {
            "level": "EMT",
            "for": "Opiate overdose"
        }
    ],
    "presentation": [
        "0.4 mg/1 ml ampule.",
        "4 mg prefilled intranasal spray."
    ],
    "indications": [
        "Opiate overdose."
    ],
    "contraindications": [
        "Known allergy."
    ],
    "precautions": [
        "Severe hypoxia before administration."
    ],
    "adult": [
        {
            "for": "Opiate overdose",
            "items": [
                "0.4 mg IV/IO/IM every 3 minutes as required; maximum 2 mg.",
                "4 mg IN every 3 minutes as required."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Opiate overdose",
            "items": [
                "0.01 mg/kg IV/IO/IM every 3 minutes as required."
            ]
        }
    ],
    "sideEffects": [
        "Withdrawal symptoms, including arrhythmias and seizures.",
        "Hypoxia-related agitation after rapid reversal without pre-oxygenation."
    ],
    "pregnancy": [
        "Pregnancy and lactation: safety not established, but give when clinically indicated."
    ],
    "notes": [
        "IV or IN preferred.",
        "Titrate to reverse respiratory depression only: fully waking the patient can cause aggression.",
        "Maximum dose reached: strongly consider other causes of unconsciousness.",
        "IN spray: do not test or prime it.",
        "Transport every opiate overdose, even if naloxone worked."
    ],
    "mechanism": "Competitively binds opiate receptors, reversing opiate agonists such as morphine.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: naloxone",
                    "sub": "0.4 mg IV/IM, 4 mg IN",
                    "href": "../pages/drug-calculator.html?drug=Naloxone",
                    "icon": "pill"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "8.2 Opioid Overdose",
            "href": "c8-2.html"
        },
        {
            "label": "6.5 Altered Mental Status",
            "href": "c6-5.html"
        },
        {
            "label": "M28 Morphine",
            "href": "m28.html"
        }
    ]
};
