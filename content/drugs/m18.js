/* ========== M18 – Glyceryl Trinitrate (GTN) ==========
 * Source: DCAS CPG 2025, M18 (p. 361) – data/cpg-source/M18_Glyceryl_Trinitrate_GTN.txt
 */
window.CPG_DRUG = {
    "code": "M18",
    "name": "Glyceryl Trinitrate (GTN)",
    "classification": "Organic nitrate, vasodilator",
    "source": {
        "label": "M18",
        "pages": "361",
        "pdf": "../pdf_sections/M18_Glyceryl_Trinitrate_GTN.pdf"
    },
    "scope": [
        {
            "level": "EMT",
            "for": "Cardiac chest pain and pulmonary edema"
        }
    ],
    "presentation": [
        "Spray bottle, 0.4 mg per spray."
    ],
    "indications": [
        "Cardiac chest pain.",
        "Pulmonary edema."
    ],
    "contraindications": [
        "Known allergy to corn or corn products.",
        "SBP &lt;90 mmHg.",
        "Phosphodiesterase inhibitor (e.g. Viagra) within the last 24 hours.",
        "Right ventricular infarct.",
        "Heart rate &lt;50 or &gt;150."
    ],
    "precautions": [
        "Physiologically unstable patients or signs of poor perfusion."
    ],
    "adult": [
        {
            "for": "Chest pain and pulmonary edema",
            "items": [
                "0.4 mg (1 spray) SL every 3–5 minutes; max 1.2 mg (3 sprays)."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "All indications",
            "items": [
                "Not for pediatric administration."
            ]
        }
    ],
    "sideEffects": [
        "Hypotension.",
        "Headache.",
        "Tachycardia.",
        "Lightheadedness."
    ],
    "pregnancy": [
        "Safety not established; MI or ischemia is very unlikely in pregnancy or lactation, so GTN should generally be withheld."
    ],
    "notes": [
        "Do not shake the bottle: it can give a sub-therapeutic dose.",
        "Consider a right-sided 12-lead ECG to exclude RV infarction."
    ],
    "mechanism": "Relaxes vascular smooth muscle, mainly venous: lowers preload and, to a lesser extent, afterload, so myocardial oxygen demand falls; may dilate coronary arteries.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: GTN",
                    "sub": "0.4 mg SL",
                    "href": "../pages/drug-calculator.html?drug=Glyceryl Trinitrate",
                    "icon": "pill"
                }
            ]
        },
        {
            "title": "Rhythms",
            "items": [
                {
                    "ecg": "stemiInfRv",
                    "lead": "V4R",
                    "label": "Inferior STEMI with RV involvement",
                    "sub": "RV infarct: GTN contraindicated"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "3.1 Chest Pain / Acute Coronary Syndrome",
            "href": "c3-1.html"
        },
        {
            "label": "3.4 Acute Pulmonary Edema",
            "href": "c3-4.html"
        }
    ]
};
