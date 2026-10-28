/* ========== M30 – Nefopam ==========
 * Source: DCAS CPG 2025, M30 (p. 373) – data/cpg-source/M30_Nefopam.txt
 */
window.CPG_DRUG = {
    "code": "M30",
    "name": "Nefopam",
    "classification": "Non-opioid analgesic",
    "source": {
        "label": "M30",
        "pages": "373",
        "pdf": "../pdf_sections/M30_Nefopam.pdf"
    },
    "scope": [
        {
            "level": "EMT",
            "for": "Moderate to severe pain"
        }
    ],
    "presentation": [
        "20 mg/2 ml ampule."
    ],
    "indications": [
        "Moderate to severe pain."
    ],
    "contraindications": [
        "Known allergy.",
        "History of epilepsy.",
        "Pain from STEMI or NSTEMI.",
        "Renal impairment.",
        "Pediatrics &lt;13 years."
    ],
    "precautions": [
        "Nil."
    ],
    "adult": [
        {
            "for": "Pain",
            "items": [
                "20 mg IV once only: dilute in 100 ml normal saline, infuse over 5 minutes."
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
        "Nausea.",
        "Vomiting.",
        "Tremor.",
        "Dry mouth."
    ],
    "pregnancy": [
        "Pregnancy and lactation: safety not established: not recommended."
    ],
    "notes": [
        "Never in the same IV line as diclofenac: it may precipitate."
    ],
    "mechanism": "Inhibits serotonin, noradrenaline and dopamine reuptake in the CNS, dampening pain signals.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: nefopam",
                    "sub": "20 mg infusion",
                    "href": "../pages/drug-calculator.html?drug=Nefopam",
                    "icon": "pill"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "6.12 Pain Management",
            "href": "c6-12.html"
        }
    ]
};
