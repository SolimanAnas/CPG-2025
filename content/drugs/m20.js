/* ========== M20 – Hydrocortisone ==========
 * Source: DCAS CPG 2025, M20 (p. 363) – data/cpg-source/M20_Hydrocortisone.txt
 */
window.CPG_DRUG = {
    "code": "M20",
    "name": "Hydrocortisone",
    "classification": "Corticosteroid",
    "source": {
        "label": "M20",
        "pages": "363",
        "pdf": "../pdf_sections/M20_Hydrocortisone.pdf"
    },
    "scope": [
        {
            "level": "EMT",
            "for": "IM"
        },
        {
            "level": "EMT-A",
            "for": "IV"
        }
    ],
    "presentation": [
        "100 mg/2 ml Act-O-Vial."
    ],
    "indications": [
        "Asthma.",
        "COPD.",
        "Anaphylaxis."
    ],
    "contraindications": [
        "Known allergy."
    ],
    "precautions": [
        "Concurrent fungal infection."
    ],
    "adult": [
        {
            "for": "Asthma",
            "items": [
                "Moderate: 100 mg IV/IM.",
                "Severe or life-threatening: 200 mg IV/IM/IO."
            ]
        },
        {
            "for": "Anaphylaxis / COPD",
            "items": [
                "100–200 mg IV/IM/IO."
            ]
        },
        {
            "for": "IV administration",
            "items": [
                "Slowly over 2 minutes, or diluted in 100 ml normal saline over 2–5 minutes."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Asthma and anaphylaxis: moderate",
            "items": [
                "2 mg/kg IV/IM/IO.",
                "Or, for ease: &lt;1 year 25 mg; 1–5 years 50 mg; &gt;5 years 100 mg."
            ]
        },
        {
            "for": "Severe",
            "items": [
                "4 mg/kg IV/IM/IO."
            ]
        }
    ],
    "sideEffects": [
        "Fatigue.",
        "Hypertension."
    ],
    "pregnancy": [
        "Pregnancy: fetal harm demonstrated: give only in severe or life-threatening cases.",
        "Lactation: safety not established; if essential, advise the mother to stop breastfeeding until advised by their physician."
    ],
    "notes": [
        "Severe asthma: the dose may be increased to 200 mg (adult) or 4 mg/kg (pediatric), given IV."
    ],
    "mechanism": "Anti-inflammatory and immunosuppressive: reduces prostaglandin and leukotriene production.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: hydrocortisone",
                    "sub": "Adult and age-band pediatric doses",
                    "href": "../pages/drug-calculator.html?drug=Hydrocortisone",
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
            "label": "6.3 Adrenal Insufficiency",
            "href": "c6-3.html"
        }
    ]
};
