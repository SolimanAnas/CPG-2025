/* ========== M25 – Methoxyflurane (Penthrox) ==========
 * Source: DCAS CPG 2025, M25 (p. 368) – data/cpg-source/M25_Methoxyflurane_Penthrox.txt
 */
window.CPG_DRUG = {
    "code": "M25",
    "name": "Methoxyflurane (Penthrox)",
    "classification": "Inhaled anesthetic",
    "source": {
        "label": "M25",
        "pages": "368",
        "pdf": "../pdf_sections/M25_Methoxyflurane_Penthrox.pdf"
    },
    "scope": [
        {
            "level": "EMT",
            "for": "Moderate to severe pain"
        }
    ],
    "presentation": [
        "3 ml vial."
    ],
    "indications": [
        "Moderate to severe pain.",
        "Moderate pain with occasional severe pain during procedures."
    ],
    "contraindications": [
        "Unable to obey commands or to self-administer.",
        "History of malignant hyperthermia (rare).",
        "Known renal impairment.",
        "Severe liver disease.",
        "Hypersensitivity to anesthetics."
    ],
    "precautions": [
        "Age &gt;75 years: renal impairment more likely.",
        "Pre-eclampsia: renal impairment is likely."
    ],
    "adult": [
        {
            "for": "Pain",
            "items": [
                "3 ml self-administered; repeat once if required.",
                "Maximum 6 ml (2 doses) in 24 hours."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Pain",
            "items": [
                "Maximum 3 ml (single dose).",
                "Generally only over 5 years, to understand self-administration.",
                "Not widely studied in children: use sparingly and switch to more appropriate analgesia when available."
            ]
        }
    ],
    "sideEffects": [
        "Dizziness.",
        "Headache.",
        "Mild, temporary sedation."
    ],
    "pregnancy": [
        "Pregnancy: safety not established; not recommended during labor.",
        "Lactation: safety not established; if essential, advise the mother to stop breastfeeding until advised by their physician."
    ],
    "notes": [
        "Effective with good coaching.",
        "Analgesia wears off about 30 seconds after inhalation stops: the patient must keep inhaling."
    ],
    "mechanism": "CNS depressant: enhances GABA-A inhibition and blocks NMDA receptors, reducing pain signals.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: methoxyflurane",
                    "sub": "3 ml, max 6 ml in 24 hours",
                    "href": "../pages/drug-calculator.html?drug=Methoxyflurane (Penthrox)",
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
            "label": "7.4 Limb Injuries",
            "href": "c7-4.html"
        }
    ]
};
