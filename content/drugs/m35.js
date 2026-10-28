/* ========== M35 – Ringer's Lactate ==========
 * Source: DCAS CPG 2025, M35 (p. 378) – data/cpg-source/M35_Ringers_Lactate.txt
 */
window.CPG_DRUG = {
    "code": "M35",
    "name": "Ringer's Lactate",
    "classification": "Isotonic crystalloid",
    "source": {
        "label": "M35",
        "pages": "378",
        "pdf": "../pdf_sections/M35_Ringers_Lactate.pdf"
    },
    "scope": [
        {
            "level": "EMT",
            "for": "Volume replacement"
        }
    ],
    "presentation": [
        "250 ml bottle."
    ],
    "indications": [
        "Blood pressure, intravascular volume and end-organ perfusion, as per the relevant CPG."
    ],
    "contraindications": [
        "Hypersensitivity to Ringer's lactate.",
        "Pediatrics &lt;1 month.",
        "Diabetic ketoacidosis.",
        "Hypervolemia."
    ],
    "precautions": [
        "Crush injuries.",
        "Renal failure.",
        "Liver failure."
    ],
    "adult": [
        {
            "for": "Volume",
            "items": [
                "As per the relevant CPG."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Volume",
            "items": [
                "As per the relevant CPG.",
                "Avoid routine use: normal saline is preferred."
            ]
        }
    ],
    "sideEffects": [
        "Hyperkalemia.",
        "Hypervolemia.",
        "Hyponatremia."
    ],
    "pregnancy": [
        "Pregnancy and lactation: safety not established, but give when clinically indicated."
    ],
    "notes": [],
    "mechanism": "Replaces intravascular volume to maintain organ perfusion.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: Ringer's lactate",
                    "sub": "As per CPG",
                    "href": "../pages/drug-calculator.html?drug=Lactated Ringers",
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
            "label": "7.2 Burns",
            "href": "c7-2.html"
        },
        {
            "label": "M37 Normal Saline",
            "href": "m37.html"
        }
    ]
};
