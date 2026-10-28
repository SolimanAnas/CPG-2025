/* ========== M31 – Oxygen ==========
 * Source: DCAS CPG 2025, M31 (p. 374) – data/cpg-source/M31_Oxygen.txt
 */
window.CPG_DRUG = {
    "code": "M31",
    "name": "Oxygen",
    "classification": "Gas",
    "source": {
        "label": "M31",
        "pages": "374",
        "pdf": "../pdf_sections/M31_Oxygen.pdf"
    },
    "scope": [
        {
            "level": "EMR",
            "for": "Hypoxemia"
        }
    ],
    "presentation": [
        "Black cylinder with a white shoulder."
    ],
    "indications": [
        "SpO<sub>2</sub> &lt;94%."
    ],
    "contraindications": [
        "Bleomycin lung injury."
    ],
    "precautions": [
        "Newborns."
    ],
    "adult": [
        {
            "for": "Hypoxemia",
            "items": [
                "As set by the relevant CPG, to the target saturation."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Hypoxemia",
            "items": [
                "As set by the relevant CPG, to the target saturation."
            ]
        }
    ],
    "sideEffects": [
        "Prolonged use in COPD may reduce the drive to breathe."
    ],
    "pregnancy": [
        "Pregnancy and lactation: safe; give when clinically indicated."
    ],
    "notes": [],
    "mechanism": "Supplemental oxygen corrects hypoxemia and supports tissue oxygenation.",
    "related": [
        {
            "label": "1.1 Universal Care",
            "href": "c1.html?section=c1s1"
        },
        {
            "label": "2.1 Airway Management",
            "href": "c2.html?section=c2s1"
        },
        {
            "label": "2.4 COPD Exacerbation",
            "href": "c2.html?section=c2s4"
        },
        {
            "label": "4.6 Newborn and Preterm Infant Resuscitation",
            "href": "c4-6.html"
        }
    ]
};
