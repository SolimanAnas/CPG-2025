/* ========== M5 – Atropine ==========
 * Source: DCAS CPG 2025, M5 (p. 347) – data/cpg-source/M5_Atropine.txt
 */
window.CPG_DRUG = {
    "code": "M5",
    "name": "Atropine",
    "classification": "Anticholinergic",
    "source": {
        "label": "M5",
        "pages": "347",
        "pdf": "../pdf_sections/M5_Atropine.pdf"
    },
    "scope": [
        {
            "level": "EMT-A",
            "for": "Bradycardia and organophosphate poisoning"
        }
    ],
    "presentation": [
        "0.5 mg/5 ml prefilled syringe."
    ],
    "indications": [
        "Compromised bradycardia.",
        "Organophosphate poisoning."
    ],
    "contraindications": [
        "Known allergy."
    ],
    "precautions": [
        "Myocardial ischemia: atropine increases myocardial oxygen demand.",
        "Glaucoma: atropine increases intraocular pressure."
    ],
    "adult": [
        {
            "for": "Bradycardia",
            "items": [
                "1 mg IV every 3–5 minutes."
            ]
        },
        {
            "for": "Organophosphate poisoning",
            "items": [
                "2 mg IV initial dose.",
                "Double each subsequent dose (the sheet's example: 4 mg / 6 mg / 8 mg) until symptoms resolve."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Bradycardia",
            "items": [
                "0.02 mg/kg IV/IO every 3–5 minutes."
            ]
        },
        {
            "for": "Organophosphate poisoning",
            "items": [
                "0.02–0.05 mg/kg IV/IO every 3–5 minutes."
            ]
        }
    ],
    "sideEffects": [
        "Tachycardia and palpitations.",
        "Confusion.",
        "Dry mouth.",
        "Blurred vision."
    ],
    "pregnancy": [
        "Pregnancy: fetal harm demonstrated, but do not withhold if the patient is significantly compromised; transcutaneous pacing is preferred if available.",
        "Lactation: infant harm cannot be ruled out; may be given. The mother should be advised to stop breastfeeding until advised by their physician."
    ],
    "notes": [
        "Give as a fast IV push: slow administration may cause further (transient) bradycardia."
    ],
    "mechanism": "Blocks muscarinic acetylcholine receptors, reducing vagal tone: raises heart rate, dries salivary and bronchial secretions and causes bronchodilation.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: atropine",
                    "sub": "Bradycardia and organophosphate doses",
                    "href": "../pages/drug-calculator.html?drug=Atropine",
                    "icon": "pill"
                }
            ]
        },
        {
            "title": "Rhythms",
            "items": [
                {
                    "ecg": "sbrady",
                    "label": "Sinus bradycardia",
                    "sub": "Compromised: atropine"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "3.2 Adult Bradycardia",
            "href": "c3-2.html"
        },
        {
            "label": "9.2 Pediatric Bradycardia",
            "href": "c9-2.html"
        },
        {
            "label": "8.5 Organophosphate Poisoning",
            "href": "c8-5.html"
        },
        {
            "label": "8.3 Beta-Blocker Overdose",
            "href": "c8-3.html"
        },
        {
            "label": "8.4 Calcium Channel Blocker Overdose",
            "href": "c8-4.html"
        }
    ]
};
