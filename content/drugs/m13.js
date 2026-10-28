/* ========== M13 – Epinephrine (Adrenaline) ==========
 * Source: DCAS CPG 2025, M13 (p. 355–356) – data/cpg-source/M13_Epinephrine_Adrenaline.txt
 */
window.CPG_DRUG = {
    "code": "M13",
    "name": "Epinephrine (Adrenaline)",
    "classification": "Adrenergic agonist",
    "source": {
        "label": "M13",
        "pages": "355–356",
        "pdf": "../pdf_sections/M13_Epinephrine_Adrenaline.pdf"
    },
    "scope": [
        {
            "level": "EMT",
            "for": "IM auto-injector (adult and pediatric); prefilled syringe 1 mg/10 ml"
        },
        {
            "level": "AP",
            "for": "Ampule 1 mg/1 ml"
        }
    ],
    "presentation": [
        "EpiPen auto-injector: adult 0.3 mg IM, pediatric 0.15 mg IM.",
        "Prefilled syringe: 1 mg/10 ml.",
        "Ampule: 1 mg/1 ml.",
        "Presented in mg; infusions are in <b>mcg</b>."
    ],
    "indications": [
        "Cardiac arrest.",
        "Shock that is fluid-incompatible or fluid-refractory.",
        "Bradycardia.",
        "Anaphylaxis.",
        "Life-threatening asthma."
    ],
    "contraindications": [
        "None in the emergency context."
    ],
    "precautions": [
        "High risk of arrhythmias.",
        "Increases myocardial oxygen consumption and ischemia."
    ],
    "adult": [
        {
            "for": "Cardiac arrest",
            "items": [
                "1 mg IV/IO every 3–5 minutes."
            ]
        },
        {
            "for": "Septic shock / bradycardia",
            "items": [
                "Push dose: 0.01 mg IV/IO every 2–5 minutes.",
                "Infusion: 2–10 mcg/min IV/IO."
            ]
        },
        {
            "for": "Anaphylaxis / asthma",
            "items": [
                "0.3–0.5 mg IM (auto-injector or 1:1,000 ampule).",
                "Push dose: 0.01 mg IV/IO every 2–5 minutes.",
                "Infusion: 2–10 mcg/min IV/IO."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Cardiac arrest",
            "items": [
                "0.01 mg/kg IV/IO every 3–5 minutes."
            ]
        },
        {
            "for": "Septic shock",
            "items": [
                "Push dose: 0.005 mg/kg IV/IO.",
                "Infusion: 0.05–0.3 mcg/kg/min IV/IO."
            ]
        },
        {
            "for": "Bradycardia",
            "items": [
                "0.01 mg/kg IV/IO every 3–5 minutes."
            ]
        },
        {
            "for": "Anaphylaxis",
            "items": [
                "0.15 mg–0.3 mg IM (auto-injector or 1:1,000 ampule; the sheet prints “0.15mg-0.3mcg”).",
                "Push dose: 0.005 mg/kg IV/IO.",
                "Infusion: 0.05–0.3 mcg/kg/min IV/IO."
            ]
        },
        {
            "for": "Asthma",
            "items": [
                "0.15 mg–0.3 mg IM (auto-injector or 1:1,000 ampule).",
                "IV infusion: 0.1–1 mcg/kg/min."
            ]
        }
    ],
    "sideEffects": [
        "Tachycardia.",
        "Arrhythmias.",
        "Tremor, anxiety, sweating.",
        "Nausea and vomiting."
    ],
    "pregnancy": [
        "Give if clinically indicated."
    ],
    "notes": [],
    "mechanism": "Stimulates adrenergic receptors: bronchodilation, higher heart rate and contractility, vasoconstriction. Also stabilises mast cells in anaphylaxis.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: adrenaline",
                    "sub": "Arrest, push dose, IM and infusion",
                    "href": "../pages/drug-calculator.html?drug=Epinephrine (Adrenaline)",
                    "icon": "pill"
                }
            ]
        },
        {
            "title": "Rhythms",
            "items": [
                {
                    "ecg": "asystole",
                    "label": "Asystole",
                    "sub": "Non-shockable: adrenaline as soon as possible"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "4.3 Adult Cardiac Arrest",
            "href": "c4-3.html"
        },
        {
            "label": "4.4 Pediatric Cardiac Arrest",
            "href": "c4-4.html"
        },
        {
            "label": "6.4 Anaphylaxis / Allergic Reaction",
            "href": "c6-4.html"
        },
        {
            "label": "2.3 Asthma",
            "href": "c2.html?section=c2s3"
        },
        {
            "label": "3.2 Adult Bradycardia",
            "href": "c3-2.html"
        },
        {
            "label": "6.11 Non-Traumatic Shock",
            "href": "c6-11.html"
        }
    ]
};
