/* ========== M4 – Aspirin ==========
 * Source: DCAS CPG 2025, M4 (p. 346) – data/cpg-source/M4_Aspirin.txt
 */
window.CPG_DRUG = {
    "code": "M4",
    "name": "Aspirin",
    "classification": "Platelet aggregation inhibitor",
    "source": {
        "label": "M4",
        "pages": "346",
        "pdf": "../pdf_sections/M4_Aspirin.pdf"
    },
    "scope": [
        {
            "level": "EMR",
            "for": "Acute coronary syndrome"
        }
    ],
    "presentation": [
        "81 mg tablet."
    ],
    "indications": [
        "Acute coronary syndrome."
    ],
    "contraindications": [
        "Known allergy.",
        "Pregnancy.",
        "Active peptic ulcer disease."
    ],
    "precautions": [
        "Asthma or COPD with previous worsening bronchospasm after an NSAID.",
        "Clinically significant active bleeding (e.g. GI bleeding): aspirin increases bleeding."
    ],
    "adult": [
        {
            "for": "ACS",
            "items": [
                "324 mg (4 tablets), chewed before swallowing.",
                "Already taken aspirin within the last 60 minutes: confirm the dose and top up to a maximum total of 324 mg."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "All indications",
            "items": [
                "Not given to pediatrics."
            ]
        }
    ],
    "sideEffects": [
        "Increased bleeding."
    ],
    "pregnancy": [
        "Pregnancy: fetal harm demonstrated in the third trimester; MI or ischemia in pregnancy is very unlikely, so aspirin should generally be withheld.",
        "Lactation: may be given; advise the mother to stop breastfeeding until advised by their physician."
    ],
    "notes": [],
    "mechanism": "Blocks cyclooxygenase, lowering prostaglandin and thromboxane production. Aspirin is antiplatelet, antipyretic and analgesic; DCAS uses it only as an antiplatelet.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: Aspirin",
                    "sub": "324 mg chewed",
                    "href": "../pages/drug-calculator.html?drug=Aspirin",
                    "icon": "pill"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "3.1 Chest Pain / Acute Coronary Syndrome",
            "href": "c3-1.html"
        }
    ]
};
