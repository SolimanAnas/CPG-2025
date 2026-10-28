/* ========== M36 – Salbutamol ==========
 * Source: DCAS CPG 2025, M36 (p. 379) – data/cpg-source/M36_Salbutamol.txt
 */
window.CPG_DRUG = {
    "code": "M36",
    "name": "Salbutamol",
    "classification": "Bronchodilator (β2-selective agonist)",
    "source": {
        "label": "M36",
        "pages": "379",
        "pdf": "../pdf_sections/M36_Salbutamol.pdf"
    },
    "scope": [
        {
            "level": "EMT",
            "for": "Bronchospasm"
        }
    ],
    "presentation": [
        "2.5 mg/2.5 ml nebule."
    ],
    "indications": [
        "Bronchospasm with asthma, COPD, anaphylaxis, or after drowning or water inhalation.",
        "Tocolysis for a prolapsed umbilical cord."
    ],
    "contraindications": [
        "Known allergy to salbutamol."
    ],
    "precautions": [
        "Hypertension.",
        "Tachyarrhythmias.",
        "Last trimester of pregnancy."
    ],
    "adult": [
        {
            "for": "Bronchospasm",
            "items": [
                "5 mg nebulised; repeat as required."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Bronchospasm",
            "items": [
                "&lt;5 years: 2.5 mg nebulised; repeat as required.",
                "&gt;5 years: 5 mg nebulised; repeat as required.",
                "Dilute with normal saline or sterile water to a maximum of 5 ml."
            ]
        }
    ],
    "sideEffects": [
        "Angina.",
        "Tachycardia.",
        "Tachyarrhythmias."
    ],
    "pregnancy": [
        "Pregnancy and lactation: safety not established, but give if clinically indicated."
    ],
    "notes": [
        "The tocolysis dose is in the Childbirth CPG (AP); this sheet gives no dose for it."
    ],
    "mechanism": "Stimulates β2 adrenergic receptors, causing bronchodilation.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: salbutamol",
                    "sub": "2.5 or 5 mg nebulised",
                    "href": "../pages/drug-calculator.html?drug=Salbutamol",
                    "icon": "pill"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "2.3 Asthma",
            "href": "c2.html?section=c2s3"
        },
        {
            "label": "2.4 COPD Exacerbation",
            "href": "c2.html?section=c2s4"
        },
        {
            "label": "6.4 Anaphylaxis / Allergic Reaction",
            "href": "c6-4.html"
        },
        {
            "label": "8.7 Drowning",
            "href": "c8-7.html"
        },
        {
            "label": "10.1 Childbirth",
            "href": "c10-1.html"
        }
    ]
};
