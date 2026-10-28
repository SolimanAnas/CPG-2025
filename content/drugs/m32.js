/* ========== M32 – Paracetamol (Acetaminophen) ==========
 * Source: DCAS CPG 2025, M32 (p. 375) – data/cpg-source/M32_Paracetamol.txt
 */
window.CPG_DRUG = {
    "code": "M32",
    "name": "Paracetamol (Acetaminophen)",
    "classification": "Non-opioid analgesic and antipyretic",
    "source": {
        "label": "M32",
        "pages": "375",
        "pdf": "../pdf_sections/M32_Paracetamol.pdf"
    },
    "scope": [
        {
            "level": "EMR",
            "for": "PO"
        },
        {
            "level": "EMT",
            "for": "IV and PR"
        }
    ],
    "presentation": [
        "Tablet: 500 mg.",
        "Suppository: 125 mg and 250 mg.",
        "IV bottle: 1000 mg/100 ml."
    ],
    "indications": [
        "Moderate to severe pain.",
        "Fever &gt;38°C."
    ],
    "contraindications": [
        "Known allergy.",
        "Paracetamol taken within the last 4 hours, or the maximum daily dose already reached."
    ],
    "precautions": [
        "Nil."
    ],
    "adult": [
        {
            "for": "Pain or fever",
            "items": [
                "1000 mg IV/PO; maximum 4 g in 24 hours.",
                "IV slowly over 10 minutes to avoid toxicity."
            ]
        }
    ],
    "pediatric": [
        {
            "for": "Pain or fever",
            "items": [
                "PR: &lt;5 years 125 mg; &gt;5 years 250 mg.",
                "IV: 10 mg/kg, slowly over 10–15 minutes.",
                "IV generally not recommended under 33 kg (toxicity risk)."
            ]
        }
    ],
    "sideEffects": [
        "Hypotension with rapid IV administration.",
        "Pruritus.",
        "Nausea.",
        "Vomiting."
    ],
    "pregnancy": [
        "Pregnancy and lactation: safety not established, but generally considered safe; may be given when clinically indicated."
    ],
    "notes": [
        "Take care giving IV paracetamol to children without a syringe driver, infusion pump or micro-drip set: the dose can't be given accurately."
    ],
    "mechanism": "Inhibits prostaglandin synthesis, mainly in the CNS.",
    "tools": [
        {
            "title": "Tools",
            "items": [
                {
                    "label": "Drug calculator: paracetamol",
                    "sub": "PO, PR and IV doses",
                    "href": "../pages/drug-calculator.html?drug=Paracetamol",
                    "icon": "pill"
                }
            ]
        }
    ],
    "related": [
        {
            "label": "6.12 Pain Management",
            "href": "c6-12.html"
        },
        {
            "label": "6.7 Fever and Sepsis",
            "href": "c6-7.html"
        }
    ]
};
