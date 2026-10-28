/* ========== M12 – Dopamine ==========
 * Source: DCAS CPG 2025, M12 (p. 354) – data/cpg-source/M12_Dopamine.txt
 */
window.CPG_DRUG = {
    "code": "M12",
    "name": "Dopamine",
    "classification": "Catecholamine, positive inotrope, vasopressor",
    "source": {
        "label": "M12",
        "pages": "354",
        "pdf": "../pdf_sections/M12_Dopamine.pdf"
    },
    "scope": [
        {
            "level": "AP",
            "for": "Hypotension and shock"
        }
    ],
    "presentation": [
        "200 mg/5 ml ampule (presented in mg; doses calculated in mcg)."
    ],
    "indications": [
        "Hypotension or shock with: cardiogenic shock or heart failure, bradycardia, post cardiac arrest, sepsis."
    ],
    "contraindications": [
        "Known allergy.",
        "Pheochromocytoma."
    ],
    "precautions": [
        "Arrhythmias at the high doses needed for vasoconstriction."
    ],
    "adult": [
        {
            "for": "Infusion",
            "items": [
                "2–20 mcg/kg/min IV/IO.",
                "Use a syringe driver wherever possible."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Infusion",
            "items": [
                "2–20 mcg/kg/min IV/IO.",
                "Use a syringe driver wherever possible."
            ]
        }
    ],
    "sideEffects": [
        "Arrhythmias, particularly at high doses, including VF.",
        "Chest pain.",
        "Palpitations.",
        "QRS widening."
    ],
    "pregnancy": [
        "Pregnancy: may cause fetal harm, but give where clinically indicated.",
        "Lactation: may be excreted in breast milk, but give where clinically indicated."
    ],
    "notes": [
        "Hard to give accurately without a syringe driver: consider an alternative (e.g. adrenaline)."
    ],
    "mechanism": "Dose-dependent receptor effects. Low (1–5 mcg/kg/min): D1 and D2, raising renal blood flow and urine output. Medium (5–10 mcg/kg/min): β1, raising heart rate and contractility. High (10–20 mcg/kg/min): α1 vasoconstriction, raising blood pressure.",
    "related": [
        {
            "label": "6.11 Non-Traumatic Shock",
            "href": "c6-11.html"
        },
        {
            "label": "4.7 Post Cardiac Arrest Care (ROSC)",
            "href": "c4-7.html"
        },
        {
            "label": "3.2 Adult Bradycardia",
            "href": "c3-2.html"
        }
    ]
};
