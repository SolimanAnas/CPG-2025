/* ========== M38 – Tranexamic Acid ==========
 * Source: DCAS CPG 2025, M38 (p. 381) – data/cpg-source/M38_Tranexamic_Acid.txt
 */
window.CPG_DRUG = {
    "code": "M38",
    "name": "Tranexamic Acid",
    "classification": "Antifibrinolytic",
    "source": {
        "label": "M38",
        "pages": "381",
        "pdf": "../pdf_sections/M38_Tranexamic_Acid.pdf"
    },
    "scope": [
        {
            "level": "P",
            "for": "Hemorrhage"
        }
    ],
    "presentation": [
        "500 mg/5 ml ampule."
    ],
    "indications": [
        "Uncontrolled bleeding from trauma.",
        "Significant bleeding with post-partum hemorrhage."
    ],
    "contraindications": [
        "Known allergy.",
        "&gt;3 hours since injury or start of bleeding."
    ],
    "precautions": [
        "First trimester pregnancy.",
        "Renal impairment.",
        "Oral contraceptives.",
        "Concurrent thromboembolic disease.",
        "Suspected subarachnoid hemorrhage."
    ],
    "adult": [
        {
            "for": "Hemorrhage",
            "items": [
                "1000 mg IV once only, within 3 hours of the onset of bleeding.",
                "Dilute in 100 ml normal saline; give over 10 minutes."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Hemorrhage",
            "items": [
                "15 mg/kg IV once only, slowly over 10 minutes."
            ]
        }
    ],
    "sideEffects": [
        "Thrombosis.",
        "Convulsions.",
        "Hypotension with rapid injection."
    ],
    "pregnancy": [
        "Pregnancy and lactation: safety not established, but give if clinically indicated."
    ],
    "notes": [],
    "mechanism": "Blocks conversion of plasminogen to plasmin, reducing fibrinolysis and blood loss.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: tranexamic acid",
                    "sub": "1000 mg or 15 mg/kg",
                    "href": "../pages/drug-calculator.html?drug=Tranexamic Acid",
                    "icon": "pill"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "7.1 General Trauma Management",
            "href": "c7-1.html"
        },
        {
            "label": "10.2 Post-Partum Hemorrhage",
            "href": "c10-2.html"
        },
        {
            "label": "10.3 PV Hemorrhage in Pregnancy",
            "href": "c10-3.html"
        }
    ]
};
