/* ========== M3 – Amiodarone ==========
 * Source: DCAS CPG 2025, M3 (p. 345) – data/cpg-source/M3_Amiodarone.txt
 */
window.CPG_DRUG = {
    "code": "M3",
    "name": "Amiodarone",
    "classification": "Antiarrhythmic",
    "source": {
        "label": "M3",
        "pages": "345",
        "pdf": "../pdf_sections/M3_Amiodarone.pdf"
    },
    "scope": [
        {
            "level": "EMT",
            "for": "Cardiac arrest"
        },
        {
            "level": "AP",
            "for": "Infusion for tachycardia"
        }
    ],
    "presentation": [
        "150 mg/3 ml ampule."
    ],
    "indications": [
        "Cardiac arrest (refractory VF or VT).",
        "Rate control or reversion of wide complex tachyarrhythmias."
    ],
    "contraindications": [
        "Known allergy.",
        "VT or VF secondary to tricyclic antidepressant overdose."
    ],
    "precautions": [
        "None if the patient is in cardiac arrest.",
        "Hypotension.",
        "Sick sinus syndrome without a pacemaker in place.",
        "Previous 2nd or 3rd degree heart block without a pacemaker in place."
    ],
    "adult": [
        {
            "for": "Cardiac arrest",
            "items": [
                "1st dose: 300 mg IV/IO push.",
                "2nd dose: 150 mg IV/IO push."
            ]
        },
        {
            "for": "Wide complex tachycardia",
            "items": [
                "150 mg over 10 minutes: dilute 150 mg (3 ml) in 100 ml D5W."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Cardiac arrest",
            "items": [
                "5 mg/kg IV/IO.",
                "May be repeated twice (maximum 15 mg/kg total)."
            ]
        }
    ],
    "sideEffects": [
        "Hypotension.",
        "Lightheadedness.",
        "Arrhythmias, particularly bradyarrhythmias."
    ],
    "pregnancy": [
        "Pregnancy: fetal harm has been demonstrated. Not recommended unless significantly clinically indicated, but do not withhold in cardiac arrest in pregnancy.",
        "Lactation: advise the mother to stop breastfeeding until advised by their physician."
    ],
    "notes": [
        "Give into a large vein where possible.",
        "If hypotension occurs, slow or stop administration.",
        "Give the full dose even if the rhythm reverts to sinus rhythm, unless hypotension or bradycardia develops."
    ],
    "mechanism": "Class III antiarrhythmic with wide-acting effects: prolongs the action potential and refractory period in atrial, nodal and ventricular tissue and lowers automaticity, which suppresses ectopic activity, slows conduction and heart rate and stabilises the SA and AV nodes. Slightly reduces myocardial oxygen demand by decreasing inotropy.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: amiodarone",
                    "sub": "Arrest and infusion doses",
                    "href": "../pages/drug-calculator.html?drug=Amiodarone",
                    "icon": "pill"
                }
            ]
        },
        {
            "title": "Rhythms",
            "items": [
                {
                    "ecg": "vfFine",
                    "label": "Ventricular fibrillation",
                    "sub": "Refractory: amiodarone after the 3rd shock"
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
            "label": "3.3 Adult Tachycardia with a Pulse",
            "href": "c3-3.html"
        }
    ]
};
