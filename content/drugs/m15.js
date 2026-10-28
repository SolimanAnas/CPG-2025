/* ========== M15 – Furosemide ==========
 * Source: DCAS CPG 2025, M15 (p. 358) – data/cpg-source/M15_Furosemide.txt
 */
window.CPG_DRUG = {
    "code": "M15",
    "name": "Furosemide",
    "classification": "Loop diuretic",
    "source": {
        "label": "M15",
        "pages": "358",
        "pdf": "../pdf_sections/M15_Furosemide.pdf"
    },
    "scope": [
        {
            "level": "P",
            "for": "Pulmonary edema with fluid overload"
        }
    ],
    "presentation": [
        "20 mg/2 ml ampule."
    ],
    "indications": [
        "Acute pulmonary edema with signs of fluid overload."
    ],
    "contraindications": [
        "Liver cirrhosis.",
        "Anuria."
    ],
    "precautions": [
        "Pulmonary edema without signs of fluid overload."
    ],
    "adult": [
        {
            "for": "Pulmonary edema with fluid overload",
            "items": [
                "40 mg IV, slowly over 1–2 minutes."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "All indications",
            "items": [
                "Not for pediatric use."
            ]
        }
    ],
    "sideEffects": [
        "Hypotension.",
        "Increased urine output.",
        "Dehydration.",
        "Electrolyte imbalance."
    ],
    "pregnancy": [
        "Pregnancy: may cause fetal harm; not advised prehospital.",
        "Lactation: minimal infant risk; if essential, advise the mother to stop breastfeeding until advised by their physician."
    ],
    "notes": [
        "Give only with signs of fluid overload: in patients who are not overloaded it is linked to dehydration and electrolyte imbalance without better outcomes."
    ],
    "mechanism": "Inhibits sodium reabsorption in the ascending loop of Henle, increasing urine output.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: furosemide",
                    "sub": "40 mg slow IV",
                    "href": "../pages/drug-calculator.html?drug=Furosemide",
                    "icon": "pill"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "3.4 Acute Pulmonary Edema",
            "href": "c3-4.html"
        }
    ]
};
