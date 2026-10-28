/* ========== M11 – Diphenhydramine ==========
 * Source: DCAS CPG 2025, M11 (p. 353) – data/cpg-source/M11_Diphenhydramine.txt
 */
window.CPG_DRUG = {
    "code": "M11",
    "name": "Diphenhydramine",
    "classification": "Antihistamine",
    "source": {
        "label": "M11",
        "pages": "353",
        "pdf": "../pdf_sections/M11_Diphenhydramine.pdf"
    },
    "scope": [
        {
            "level": "EMT",
            "for": "Allergic reactions"
        }
    ],
    "presentation": [
        "50 mg/1 ml vial."
    ],
    "indications": [
        "Moderate to severe allergic reactions or anaphylaxis."
    ],
    "contraindications": [
        "Known allergy.",
        "Lactation.",
        "Children under 4 weeks."
    ],
    "precautions": [
        "Nil."
    ],
    "adult": [
        {
            "for": "Allergy / anaphylaxis",
            "items": [
                "1 mg/kg IM/IV (maximum 50 mg); IM preferred.",
                "IV: dilute in 100 ml normal saline, infuse over 5 minutes."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Allergy / anaphylaxis",
            "items": [
                "1 mg/kg IM/IV (maximum 50 mg); IM preferred.",
                "IV: dilute in 1 ml/kg normal saline, infuse over 5 minutes."
            ]
        }
    ],
    "sideEffects": [
        "Drowsiness, CNS depression.",
        "Pain with IV injection."
    ],
    "pregnancy": [
        "Pregnancy: fetal harm demonstrated: not routinely given.",
        "Lactation: safety not established: not routinely given."
    ],
    "notes": [
        "IV injection is very painful: never give it undiluted."
    ],
    "mechanism": "Blocks histamine at H1 receptors, reducing itching, urticaria and edema.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: Diphenhydramine",
                    "sub": "1 mg/kg, max 50 mg",
                    "href": "../pages/drug-calculator.html?drug=Diphenhydramine",
                    "icon": "pill"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "6.4 Anaphylaxis / Allergic Reaction",
            "href": "c6-4.html"
        },
        {
            "label": "8.8 Envenomation",
            "href": "c8-8.html"
        }
    ]
};
