/* ========== M24 – Magnesium Sulphate ==========
 * Source: DCAS CPG 2025, M24 (p. 367) – data/cpg-source/M24_Magnesium_Sulphate.txt
 */
window.CPG_DRUG = {
    "code": "M24",
    "name": "Magnesium Sulphate",
    "classification": "Electrolyte",
    "source": {
        "label": "M24",
        "pages": "367",
        "pdf": "../pdf_sections/M24_Magnesium_Sulphate.pdf"
    },
    "scope": [
        {
            "level": "AP",
            "for": "Asthma, eclampsia, torsades"
        }
    ],
    "presentation": [
        "5 g in 10 ml ampule.",
        "500 mg in 2 ml vial."
    ],
    "indications": [
        "Severe or life-threatening asthma.",
        "Eclampsia.",
        "Torsades de pointes."
    ],
    "contraindications": [
        "Previous severe reaction to magnesium.",
        "Toxemia of pregnancy within the 2 hours before delivery."
    ],
    "precautions": [
        "Hypotension.",
        "Arrhythmias."
    ],
    "adult": [
        {
            "for": "Asthma",
            "items": [
                "2 g IV/IO/IM; IV/IO as an infusion over 20 minutes."
            ]
        },
        {
            "for": "Eclampsia",
            "items": [
                "4 g IV/IO over 5–10 minutes (in 100 ml NaCl or by syringe driver).",
                "8 g IM: 4 g into each gluteal muscle (the sheet prints “4mg”)."
            ]
        },
        {
            "for": "Torsades de pointes",
            "items": [
                "1–2 g IV/IO over 5–20 minutes; may repeat once."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Asthma",
            "items": [
                "40 mg/kg IV/IO/IM."
            ]
        },
        {
            "for": "Torsades de pointes",
            "items": [
                "25–50 mg/kg IV/IO over 5–20 minutes; may repeat once."
            ]
        }
    ],
    "sideEffects": [
        "Hypotension (usually with fast administration).",
        "Muscle weakness.",
        "CNS depression."
    ],
    "pregnancy": [
        "Pregnancy and lactation: safety not established, but give if clinically indicated."
    ],
    "notes": [
        "Never run through the same line as adrenaline: it may precipitate."
    ],
    "mechanism": "Relaxes bronchial smooth muscle; blocks calcium channels in cardiac myocytes, suppressing the activity behind torsades; dilates cerebral vessels and depresses the CNS, reducing seizures.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: magnesium sulphate",
                    "sub": "Asthma, eclampsia, torsades",
                    "href": "../pages/drug-calculator.html?drug=Magnesium Sulphate",
                    "icon": "pill"
                }
            ]
        },
        {
            "title": "Rhythms",
            "items": [
                {
                    "ecg": "torsades",
                    "label": "Torsades de pointes",
                    "sub": "Magnesium 1–2 g IV/IO"
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
            "label": "10.4 Pre-eclampsia and Eclampsia",
            "href": "c10-4.html"
        },
        {
            "label": "3.3 Adult Tachycardia with a Pulse",
            "href": "c3-3.html"
        }
    ]
};
