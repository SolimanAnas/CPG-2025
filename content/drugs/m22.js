/* ========== M22 – Ketamine ==========
 * Source: DCAS CPG 2025, M22 (p. 365) – data/cpg-source/M22_Ketamine.txt
 */
window.CPG_DRUG = {
    "code": "M22",
    "name": "Ketamine",
    "classification": "Dissociative anesthetic",
    "source": {
        "label": "M22",
        "pages": "365",
        "pdf": "../pdf_sections/M22_Ketamine.pdf"
    },
    "scope": [
        {
            "level": "EP",
            "for": "Sedation"
        }
    ],
    "presentation": [
        "500 mg/10 ml ampule."
    ],
    "indications": [
        "Sedation of agitated patients."
    ],
    "contraindications": [
        "Known allergy.",
        "Significant hypertension."
    ],
    "precautions": [
        "Active psychosis: may worsen it.",
        "With haloperidol or benzodiazepines: enhanced sedation."
    ],
    "adult": [
        {
            "for": "Sedation for abnormal behavior",
            "items": [
                "IM: 1–4 mg/kg; may repeat once after 10 minutes.",
                "IV/IO: 1 mg/kg over 1–2 minutes; maximum 100 mg."
            ]
        },
        {
            "for": "Sedation for agitation (ROSC, TBI, cardioversion, pacing)",
            "items": [
                "0.25–1 mg/kg IV/IO."
            ]
        },
        {
            "for": "IV dilution",
            "items": [
                "8 ml normal saline + 2 ml (100 mg) ketamine in a 10 ml syringe: 10 mg/1 ml."
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
        "Laryngospasm.",
        "Respiratory depression (mostly with large or rapid IV doses).",
        "Emergence phenomena.",
        "Increased airway secretions.",
        "Nystagmus.",
        "Transient hypertension."
    ],
    "pregnancy": [
        "Pregnancy and lactation: safety not demonstrated: not recommended."
    ],
    "notes": [
        "Never give ketamine to facilitate intubation.",
        "Most adverse effects come from high doses or rapid IV injection: give IV doses slowly.",
        "Treat emergence phenomena only if they impede care: low-dose IV benzodiazepine, which may lower consciousness significantly."
    ],
    "mechanism": "Blocks glutamate at NMDA receptors: dose-dependent analgesia, amnesia, dissociation and anesthesia.",
    "related": [
        {
            "label": "6.2 Abnormal Behavior",
            "href": "c6-2.html"
        },
        {
            "label": "4.7 Post Cardiac Arrest Care (ROSC)",
            "href": "c4-7.html"
        },
        {
            "label": "7.6 Traumatic Brain Injuries",
            "href": "c7-6.html"
        }
    ]
};
