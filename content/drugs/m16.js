/* ========== M16 – Glucagon ==========
 * Source: DCAS CPG 2025, M16 (p. 359) – data/cpg-source/M16_Glucagon.txt
 */
window.CPG_DRUG = {
    "code": "M16",
    "name": "Glucagon",
    "classification": "Hormone",
    "source": {
        "label": "M16",
        "pages": "359",
        "pdf": "../pdf_sections/M16_Glucagon.pdf"
    },
    "scope": [
        {
            "level": "EMT",
            "for": "Hypoglycemia; beta-blocker and CCB overdose"
        }
    ],
    "presentation": [
        "1 mg/1 ml vial."
    ],
    "indications": [
        "Hypoglycemia.",
        "Beta-blocker overdose.",
        "Calcium channel blocker overdose."
    ],
    "contraindications": [
        "Known allergy."
    ],
    "precautions": [
        "Glycogen stores possibly depleted (see notes)."
    ],
    "adult": [
        {
            "for": "Hypoglycemia",
            "items": [
                "1 mg IM/SC."
            ]
        },
        {
            "for": "Beta-blocker / CCB overdose",
            "items": [
                "1 mg IM; up to 5 mg IM (different sites) if more glucagon is available.",
                "Repeat every 10–15 minutes if required."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Hypoglycemia",
            "items": [
                "&gt;6 years (or &gt;25 kg): 1 mg IM/SC.",
                "&lt;6 years (or &lt;25 kg): 0.5 mg IM/SC."
            ]
        },
        {
            "for": "Beta-blocker / CCB overdose",
            "items": [
                "&gt;6 years (or &gt;25 kg): 1 mg IM.",
                "&lt;6 years (or &lt;25 kg): 0.5 mg IM.",
                "Repeat every 10–15 minutes if required."
            ]
        }
    ],
    "sideEffects": [
        "Difficulty keeping glucose stable for up to two weeks afterwards."
    ],
    "pregnancy": [
        "Pregnancy: safety not established, but give if clinically indicated.",
        "Lactation: safety not established; if essential, advise the mother to stop breastfeeding until advised by their physician."
    ],
    "notes": [
        "Glycogen may be depleted in non-diabetics, sepsis, young children, after extreme exercise, no food for more than 12 hours, adrenal insufficiency, chronic or alcohol-induced hypoglycemia.",
        "In these patients glucagon is unlikely to work, but may be considered if there is no IV access, hypoglycemia persists, or reduced consciousness compromises the ABCs."
    ],
    "mechanism": "Stimulates glycogenolysis, mainly in the liver, raising blood glucose.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: glucagon",
                    "sub": "Weight-based pediatric dose",
                    "href": "../pages/drug-calculator.html?drug=Glucagon",
                    "icon": "pill"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "6.8 Hypoglycemia",
            "href": "c6-8.html"
        },
        {
            "label": "8.3 Beta-Blocker Overdose",
            "href": "c8-3.html"
        },
        {
            "label": "8.4 Calcium Channel Blocker Overdose",
            "href": "c8-4.html"
        },
        {
            "label": "M8 Dextrose 10%",
            "href": "m8.html"
        }
    ]
};
