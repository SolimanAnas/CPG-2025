/* ========== M33 – Pethidine ==========
 * Source: DCAS CPG 2025, M33 (p. 376) – data/cpg-source/M33_Pethidine.txt
 */
window.CPG_DRUG = {
    "code": "M33",
    "name": "Pethidine",
    "classification": "Opiate analgesic",
    "source": {
        "label": "M33",
        "pages": "376",
        "pdf": "../pdf_sections/M33_Pethidine.pdf"
    },
    "scope": [
        {
            "level": "EP",
            "for": "Moderate to severe pain"
        }
    ],
    "presentation": [
        "50 mg/1 ml ampule."
    ],
    "indications": [
        "Moderate to severe pain."
    ],
    "contraindications": [
        "Known allergy.",
        "Respiratory depression.",
        "SBP &lt;90 mmHg.",
        "Renal impairment.",
        "Concurrent monoamine oxidase inhibitors.",
        "Suspected bowel obstruction."
    ],
    "precautions": [
        "Respiratory distress or difficulty.",
        "Elderly.",
        "Infants &lt;1 year (respiratory depression).",
        "Morbid obesity.",
        "Moderate hypotension or shock."
    ],
    "adult": [
        {
            "for": "Pain",
            "items": [
                "IM: 25–100 mg; maximum 400 mg/24 hours.",
                "IV: 25–50 mg slowly over 2 minutes; maximum 200 mg/24 hours."
            ]
        },
        {
            "for": "IV dilution",
            "items": [
                "9 ml normal saline + 1 ml (50 mg) pethidine in a 10 ml syringe: 5 mg/1 ml."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Pain",
            "items": [
                "IM: 0.5–2 mg/kg; repeat after 4 hours."
            ]
        }
    ],
    "sideEffects": [
        "Respiratory depression.",
        "Hypotension.",
        "Drowsiness, reduced consciousness.",
        "Arrhythmias."
    ],
    "pregnancy": [
        "Pregnancy: may cause fetal harm: do not give.",
        "Lactation: safety not established; only if benefit outweighs risk, and advise the mother to stop breastfeeding until advised by their physician."
    ],
    "notes": [],
    "mechanism": "Binds mu opioid receptors, producing analgesia.",
    "related": [
        {
            "label": "6.12 Pain Management",
            "href": "c6-12.html"
        },
        {
            "label": "M29 Naloxone",
            "href": "m29.html"
        }
    ]
};
