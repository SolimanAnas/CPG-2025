/* ========== M8 – Dextrose 10% ==========
 * Source: DCAS CPG 2025, M8 (p. 350) – data/cpg-source/M8_Dextrose_10.txt
 */
window.CPG_DRUG = {
    "code": "M8",
    "name": "Dextrose 10%",
    "classification": "Carbohydrate",
    "source": {
        "label": "M8",
        "pages": "350",
        "pdf": "../pdf_sections/M8_Dextrose_10.pdf"
    },
    "scope": [
        {
            "level": "EMT",
            "for": "Hypoglycemia"
        }
    ],
    "presentation": [
        "50 g in 500 ml bottle.",
        "25 g in 250 ml bottle."
    ],
    "indications": [
        "Hypoglycemia (RBS &lt;70 mg/dl)."
    ],
    "contraindications": [
        "Hyperglycemia."
    ],
    "precautions": [
        "Nil."
    ],
    "adult": [
        {
            "for": "Hypoglycemia",
            "items": [
                "125–250 ml (12.5–25 g) IV/IO.",
                "May be repeated if hypoglycemia persists."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Hypoglycemia",
            "items": [
                "10 ml/kg IV/IO (maximum 125 ml).",
                "May be repeated if hypoglycemia persists."
            ]
        }
    ],
    "sideEffects": [
        "Hyperglycemia."
    ],
    "pregnancy": [
        "Pregnancy: may cause fetal harm, but give if clinically indicated.",
        "Lactation: safety not established, but give if clinically indicated."
    ],
    "notes": [
        "Avoid excessive doses (rebound hyperglycemia): titrate to GCS and RBS.",
        "If GCS stays abnormal once RBS is normal, look for another cause."
    ],
    "mechanism": "Supplies glucose for cellular metabolism, raising blood glucose rapidly.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: Dextrose 10%",
                    "sub": "Adult 125–250 ml; child 10 ml/kg",
                    "href": "../pages/drug-calculator.html?drug=Dextrose 10%",
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
            "label": "6.5 Altered Mental Status",
            "href": "c6-5.html"
        },
        {
            "label": "M16 Glucagon",
            "href": "m16.html"
        }
    ]
};
