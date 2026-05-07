/* ========== M1-38 – Medication Formulary (DCAS CPG 2026) ========== */
window.CPG_DATA = {
    id: "m1-38",
    title: "Medication Formulary",
    shortTitle: "M1–38 Formulary",
    sections: [
        {
            id: "m1-38s1",
            shortTitle: "M1–38 Drug Formulary",
            summary: `
                <div class="sum-card" style="text-align:center;padding:28px 20px;">
                    <div style="font-size:2.8rem;margin-bottom:12px;">💊</div>
                    <h3 style="color:var(--primary-accent);font-size:1.2rem;margin-bottom:8px;">DCAS Medication Formulary</h3>
                    <p style="color:var(--text-secondary);font-size:.85rem;line-height:1.6;margin-bottom:20px;">
                        The full interactive drug reference — all 31 medications across 6 clinical categories with indications, dosing tables, and pediatric weight-based doses — is available in the Medication Index.
                    </p>
                    <a href="../med-index.html" style="display:inline-flex;align-items:center;gap:8px;background:var(--primary-accent);color:#fff;text-decoration:none;padding:12px 24px;border-radius:12px;font-weight:700;font-size:.9rem;box-shadow:0 4px 16px rgba(0,86,179,.35);transition:opacity .2s;" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
                        💊 Open Medication Index →
                    </a>
                    <div style="margin-top:20px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;text-align:center;">
                        <div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:10px;">
                            <div style="font-size:1.3rem;font-weight:900;color:var(--primary-accent);">31</div>
                            <div style="font-size:.65rem;text-transform:uppercase;letter-spacing:.5px;color:var(--text-secondary);font-weight:700;">Medications</div>
                        </div>
                        <div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:10px;">
                            <div style="font-size:1.3rem;font-weight:900;color:var(--primary-accent);">6</div>
                            <div style="font-size:.65rem;text-transform:uppercase;letter-spacing:.5px;color:var(--text-secondary);font-weight:700;">Categories</div>
                        </div>
                        <div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:10px;">
                            <div style="font-size:1.3rem;font-weight:900;color:var(--primary-accent);">2026</div>
                            <div style="font-size:.65rem;text-transform:uppercase;letter-spacing:.5px;color:var(--text-secondary);font-weight:700;">CPG Edition</div>
                        </div>
                    </div>
                </div>
                <div class="sum-card">
                    <h3 style="color:var(--primary-accent);">❤️ Cardiac / Resus</h3>
                    <ul>
                        <li><strong>Adenosine:</strong> SVT — 0.1 mg/kg IV rapid push (max 6 mg); 2nd dose 0.2 mg/kg (max 12 mg). Follow with NS flush.</li>
                        <li><strong>Amiodarone:</strong> Arrest (VT/VF) 5 mg/kg IV/IO; Wide-complex tachycardia 5 mg/kg over 20 min.</li>
                        <li><strong>Atropine:</strong> Bradycardia 0.02 mg/kg IV/IO q3-5 min (min 0.1 mg, max 0.5 mg peds / 3 mg adult); Organophosphate 2–4 mg IV until secretions dry.</li>
                        <li><strong>Epinephrine:</strong> Arrest 0.01 mg/kg (1:10,000) IV/IO q3-5 min; Anaphylaxis 0.01 mg/kg (1:1,000) IM (max 0.5 mg).</li>
                        <li><strong>Labetalol:</strong> Pre-eclampsia/eclampsia hypertension — 20 mg IV over 2 min, repeat q10 min (max 80 mg).</li>
                    </ul>
                </div>
                <div class="sum-card">
                    <h3 style="color:#10b981;">🫁 Airway / Respiratory</h3>
                    <ul>
                        <li><strong>Salbutamol:</strong> Bronchospasm — Nebulized: Adult 5 mg; Peds &lt;5y 2.5 mg, ≥5y 5 mg.</li>
                        <li><strong>Combivent:</strong> Asthma/COPD — 2.5 ml nebulized (Salbutamol 2.5 mg + Ipratropium 0.5 mg).</li>
                        <li><strong>Racemic Epi:</strong> Croup — &gt;4y: 0.5 ml; &lt;4y: 0.05 ml/kg nebulized in 3 ml NS.</li>
                        <li><strong>Hydrocortisone:</strong> Anaphylaxis/Asthma — 2 mg/kg IV/IM/IO.</li>
                        <li><strong>Magnesium Sulphate:</strong> Severe asthma/eclampsia — Adult 2 g IV over 20 min; Peds 40 mg/kg.</li>
                        <li><strong>Methoxyflurane (Penthrox):</strong> Pain — 3 ml inhaled, self-administered (max 6 ml/24 h adult).</li>
                    </ul>
                </div>
                <div class="sum-card">
                    <h3 style="color:#8b5cf6;">🧠 Neuro / Sedation</h3>
                    <ul>
                        <li><strong>Diazepam:</strong> Seizures — Adult 5 mg IV; Peds 0.1 mg/kg IV/IO (max 5 mg) or 0.5 mg/kg PR (max 20 mg).</li>
                        <li><strong>Haloperidol:</strong> Acute psychosis — 5 mg IM only. Not IV. Not pediatric.</li>
                    </ul>
                </div>
                <div class="sum-card">
                    <h3 style="color:#f97316;">💊 Pain Management</h3>
                    <ul>
                        <li><strong>Morphine:</strong> Severe pain — IV 2.5 mg q5 min (max 10 mg); Peds 0.1 mg/kg IV/IM/IO.</li>
                        <li><strong>Paracetamol:</strong> Pain/Fever — Adult 1 g IV/PO (max 4 g/24h); Peds 10 mg/kg IV slow.</li>
                        <li><strong>Diclofenac:</strong> Moderate-severe pain — 75 mg IM or IV in 100 ml NS over 10 min.</li>
                        <li><strong>GTN:</strong> Cardiac chest pain — 0.4 mg SL spray q3-5 min (max 3 sprays). No hypotension.</li>
                        <li><strong>Nefopam:</strong> Moderate pain — 20 mg IV in 100 ml NS over 5 min. Avoid in epilepsy/renal impairment.</li>
                    </ul>
                </div>
                <div class="sum-card">
                    <h3 style="color:#06b6d4;">💧 Metabolic / Fluids</h3>
                    <ul>
                        <li><strong>Dextrose 10%:</strong> Hypoglycemia (&lt;70 mg/dl) — 10 ml/kg IV/IO (max 125 ml peds); Adult 125–250 ml.</li>
                        <li><strong>Glucose 40% Oral Paste:</strong> Hypoglycemia (conscious) — Adult 1 tube (15 g); Peds ½ tube. Swallow only.</li>
                        <li><strong>Glucagon:</strong> Hypoglycemia/BB overdose — &gt;25 kg: 1 mg IM/SC; &lt;25 kg: 0.5 mg IM/SC.</li>
                        <li><strong>Normal Saline:</strong> Volume replacement — Peds 10 ml/kg bolus (max 500 ml).</li>
                        <li><strong>Lactated Ringers:</strong> Volume replacement — Not for age &lt;1 month, DKA, or liver failure.</li>
                    </ul>
                </div>
                <div class="sum-card">
                    <h3 style="color:#94a3b8;">🧪 Other Medications</h3>
                    <ul>
                        <li><strong>Aspirin:</strong> ACS — 324 mg (4×81 mg) chewed. Not if already taken in last 60 min.</li>
                        <li><strong>Naloxone:</strong> Opioid overdose — IV/IM 0.4 mg q3 min (max 2 mg); IN 4 mg q3 min. Titrate to respiratory effort.</li>
                        <li><strong>TXA:</strong> Trauma/PPH bleeding — 1 g IV over 10 min (within 3 h of onset); Peds 15 mg/kg.</li>
                        <li><strong>Furosemide:</strong> Pulmonary edema — 40 mg IV slow over 1–2 min. Adult only.</li>
                        <li><strong>Diphenhydramine:</strong> Allergic reaction — 1 mg/kg IM/IV (max 50 mg).</li>
                        <li><strong>Metoclopramide:</strong> Nausea/vomiting — 10 mg IV/IM adult slow over 3 min.</li>
                        <li><strong>Hyoscine:</strong> Abdominal cramping — 20 mg IV/IM/SC. Not pediatric.</li>
                    </ul>
                </div>
                <div class="sum-card red-flag">
                    <h3>⚠️ High-Alert Drug Reminders</h3>
                    <ul>
                        <li><strong>Adenosine:</strong> Must be given as a RAPID IV push + 10–20 ml NS flush immediately after.</li>
                        <li><strong>Amiodarone:</strong> Always dilute in D5W (NOT NS). Incompatible with NS.</li>
                        <li><strong>GTN:</strong> Contraindicated if SBP &lt;100 mmHg or patient took PDE-5 inhibitor in 24–48 h.</li>
                        <li><strong>Haloperidol:</strong> IM only in prehospital setting — never IV push.</li>
                        <li><strong>Morphine:</strong> Monitor RR closely — have Naloxone ready.</li>
                        <li><strong>TXA:</strong> Must be given within 3 hours of injury/PPH onset — ineffective after.</li>
                        <li><strong>Glucose 40% paste:</strong> Swallow only — NOT buccally absorbed.</li>
                    </ul>
                </div>
            `,

            flashcards: [
                /* ── CARDIAC / RESUS ── */
                { category: "Cardiac", question: "Adenosine: SVT 1st dose (adult)?", answer: "6 mg IV rapid push\n(0.1 mg/kg pediatric)\nFollow immediately with 10–20 ml NS flush" },
                { category: "Cardiac", question: "Adenosine: SVT 2nd dose (adult)?", answer: "12 mg IV rapid push\n(0.2 mg/kg pediatric, max 12 mg)" },
                { category: "Cardiac", question: "Adenosine: Critical administration tip?", answer: "Must be given as RAPID PUSH — the faster the better.\nFlush immediately with 10–20 ml NS.\nConsider arm elevation." },
                { category: "Cardiac", question: "Amiodarone: Cardiac arrest dose?", answer: "5 mg/kg IV/IO\n(after 3rd shock in VF/VT)" },
                { category: "Cardiac", question: "Amiodarone: Stable wide-complex tachycardia dose?", answer: "5 mg/kg IV/IO over 20 minutes" },
                { category: "Cardiac", question: "Amiodarone: What is the correct diluent?", answer: "Dextrose 5% Water (D5W) ONLY\nNever Normal Saline — incompatible" },
                { category: "Cardiac", question: "Atropine: Bradycardia dose?", answer: "0.02 mg/kg IV/IO q3-5 min\nMin: 0.1 mg | Peds max: 0.5 mg | Adult max: 3 mg" },
                { category: "Cardiac", question: "Atropine: Organophosphate poisoning dose?", answer: "2–4 mg IV q5-10 min\nTitrate until secretions dry (not HR)" },
                { category: "Cardiac", question: "Epinephrine: Cardiac arrest dose?", answer: "0.01 mg/kg (1:10,000) IV/IO\nAdult: 1 mg IV/IO every 3–5 min" },
                { category: "Cardiac", question: "Epinephrine: Anaphylaxis dose?", answer: "0.01 mg/kg (1:1,000) IM (lateral thigh)\nMax: 0.3 mg pediatric / 0.5 mg adult" },
                { category: "Cardiac", question: "Epinephrine: Push-dose for bradycardia?", answer: "10–20 mcg IV bolus (1:100,000 dilution)\nRepeat q2-5 min as needed" },
                { category: "Cardiac", question: "Labetalol: Indication in obstetrics?", answer: "Pre-eclampsia with severe hypertension / Eclampsia\n(SBP ≥160 or DBP ≥110 mmHg)" },
                { category: "Cardiac", question: "Labetalol: Dose?", answer: "20 mg IV over 2 minutes\nRepeat 40–80 mg q10 min — max 80 mg total" },

                /* ── AIRWAY / RESPIRATORY ── */
                { category: "Airway", question: "Salbutamol: Dose for adult bronchospasm?", answer: "5 mg nebulized in max 5 ml NS\nRepeat q20 min x3 if needed" },
                { category: "Airway", question: "Salbutamol: Pediatric dose?", answer: "<5 years: 2.5 mg nebulized\n≥5 years: 5 mg nebulized" },
                { category: "Airway", question: "Combivent: Contents?", answer: "Salbutamol 2.5 mg + Ipratropium 0.5 mg\nNebulize 2.5 ml, dilute to max 5 ml NS" },
                { category: "Airway", question: "Racemic Epinephrine: Indication?", answer: "Croup (stridor, barking cough)\nPost-extubation stridor" },
                { category: "Airway", question: "Racemic Epinephrine: Dose?", answer: ">4 years: 0.5 ml nebulized in 3 ml NS\n<4 years: 0.05 ml/kg (max 0.5 ml) in 3 ml NS" },
                { category: "Airway", question: "Hydrocortisone: Dose for anaphylaxis/asthma?", answer: "2 mg/kg IV/IM/IO\nAlternative: <1y 25 mg, 1-5y 50 mg, >5y 100 mg" },
                { category: "Airway", question: "Magnesium Sulphate: Severe asthma dose?", answer: "Adult: 2 g IV/IO over 20 min\nPediatric: 40 mg/kg IV/IO over 20 min" },
                { category: "Airway", question: "Magnesium Sulphate: Eclampsia dose?", answer: "4 g IV over 5-10 min (loading)\nMonitor for loss of reflexes and respiratory depression" },
                { category: "Airway", question: "Methoxyflurane (Penthrox): Route and dose?", answer: "Inhaled, self-administered via green whistle inhaler\n3 ml per episode, max 6 ml/24 h (adult)\nPediatric: max 3 ml" },

                /* ── NEURO / SEDATION ── */
                { category: "Neuro", question: "Diazepam: Seizure dose (adult)?", answer: "5 mg IV slow (over 2 min)\nRepeat once if no effect after 5 min" },
                { category: "Neuro", question: "Diazepam: Seizure dose (pediatric)?", answer: "IV/IO: 0.1 mg/kg (max 5 mg)\nPR (rectal): 0.5 mg/kg (max 20 mg)" },
                { category: "Neuro", question: "Diazepam: What is the reversal agent?", answer: "Flumazenil (not prehospital)\nSupport airway — have BVM ready" },
                { category: "Neuro", question: "Haloperidol: Indication?", answer: "Acute psychosis / agitated patient (suspected mental health illness)" },
                { category: "Neuro", question: "Haloperidol: Dose and route?", answer: "5 mg IM only\nNEVER IV in prehospital setting\nNot for pediatric use" },

                /* ── PAIN ── */
                { category: "Pain", question: "Morphine: Adult dose for severe pain?", answer: "IV: 2.5 mg increments q5 min (max 10 mg)\nIM: 2–10 mg (max 20 mg)\nMonitor RR — Naloxone reversal ready" },
                { category: "Pain", question: "Morphine: Pediatric dose?", answer: "0.1 mg/kg IV/IM/IO\nMax single dose 5 mg" },
                { category: "Pain", question: "GTN: Indication?", answer: "Cardiac chest pain (ACS/suspected MI)\nAcute pulmonary edema" },
                { category: "Pain", question: "GTN: Dose and route?", answer: "0.4 mg SL spray q3-5 min\nMax 3 sprays (1.2 mg total)\nDo NOT shake bottle" },
                { category: "Pain", question: "GTN: Contraindications?", answer: "SBP <100 mmHg\nPDE-5 inhibitor use in last 24-48 h (Sildenafil/Viagra)\nRV infarction" },
                { category: "Pain", question: "Paracetamol: Adult dose?", answer: "1000 mg IV over 10-15 min or PO\nMax 4 g per 24 hours\nReduce dose in hepatic impairment" },
                { category: "Pain", question: "Paracetamol: Pediatric IV dose?", answer: "10 mg/kg IV slow over 10-15 min\nPR: <5y 125 mg, ≥5y 250 mg" },
                { category: "Pain", question: "Diclofenac: Dose and route?", answer: "75 mg IM (large muscle) OR IV diluted in 100 ml NS over 10 min\nDo not repeat dose prehospital" },
                { category: "Pain", question: "Nefopam: Dose and contraindications?", answer: "20 mg IV in 100 ml NS over 5 min\nContraindicated: Epilepsy, STEMI/NSTEMI, Renal impairment, <13 years" },

                /* ── METABOLIC / FLUIDS ── */
                { category: "Metabolic", question: "Dextrose 10%: Hypoglycemia threshold?", answer: "Blood glucose <70 mg/dl" },
                { category: "Metabolic", question: "Dextrose 10%: Adult dose?", answer: "125–250 ml IV/IO\nRecheck glucose after 5-10 min" },
                { category: "Metabolic", question: "Dextrose 10%: Pediatric dose?", answer: "10 ml/kg IV/IO (max 125 ml in children)\nNeonates: 2 ml/kg D10W" },
                { category: "Metabolic", question: "Glucose 40% Oral Paste: Indication?", answer: "Hypoglycemia in a CONSCIOUS patient who can swallow\nNOT for unconscious patients" },
                { category: "Metabolic", question: "Glucose 40% Oral Paste: Dose?", answer: "Adult: 1 tube (15 g)\nPediatric: ½ tube\nMust be SWALLOWED — not buccally absorbed" },
                { category: "Metabolic", question: "Glucagon: Dose by weight?", answer: ">6 years or >25 kg: 1 mg IM/SC\n<6 years or <25 kg: 0.5 mg IM/SC\nRepeat q10-15 min; up to 5 mg for BB/CCB overdose" },
                { category: "Metabolic", question: "Normal Saline: Pediatric fluid bolus?", answer: "10 ml/kg IV/IO bolus\nMax 500 ml — reassess after each bolus" },
                { category: "Metabolic", question: "Lactated Ringers: Key contraindications?", answer: "<1 month of age\nDKA (may worsen)\nHypervolemia\nLiver failure" },

                /* ── OTHER MEDICATIONS ── */
                { category: "Other", question: "Aspirin: Dose for ACS?", answer: "324 mg (4 × 81 mg tablets) CHEWED\nIf already taken in last 60 min → give additional to reach 324 mg total" },
                { category: "Other", question: "Naloxone: Opioid overdose dose?", answer: "IV/IM: 0.4 mg q3 min (max 2 mg)\nIN: 4 mg q3 min\nPeds: 0.01 mg/kg IV/IM/IO q3 min\nTitrate to restore respirations ONLY — do not over-reverse" },
                { category: "Other", question: "Naloxone: Why titrate carefully?", answer: "Over-reversal causes acute withdrawal: agitation, vomiting, tachycardia, hypertension\nGoal: adequate spontaneous respirations, not full consciousness" },
                { category: "Other", question: "Tranexamic Acid (TXA): Indication?", answer: "Uncontrolled traumatic bleeding OR postpartum hemorrhage\nMust be within 3 hours of onset of bleeding" },
                { category: "Other", question: "TXA: Dose?", answer: "Adult: 1 g IV in 100 ml NS over 10 min (single dose)\nPediatric: 15 mg/kg IV over 10 min" },
                { category: "Other", question: "Furosemide: Indication and dose?", answer: "Acute pulmonary edema with fluid overload\n40 mg IV slowly over 1–2 min\nADULT ONLY — not for pediatric prehospital use" },
                { category: "Other", question: "Diphenhydramine: Dose?", answer: "1 mg/kg IM/IV (max 50 mg)\nIM preferred\nIV: dilute in 100 ml NS adult (1 ml/kg NS peds) over 5 min" },
                { category: "Other", question: "Metoclopramide: Dose?", answer: "Adult: 10 mg IV/IM slow (3 min) or diluted in 100 ml NS\nPeds: 0.1 mg/kg IV/IM — generally not recommended (extrapyramidal risk)" },
                { category: "Other", question: "Hyoscine Butylbromide: Indication?", answer: "Lower abdominal cramping: gastroenteritis, renal colic, IBS, dysmenorrhea\n20 mg IV/IM/SC — adult only" }
            ],

            quiz: [
                /* CARDIAC */
                { q: "Adenosine for SVT: what is the FIRST dose for an adult?", options: ["3 mg IV slow push", "6 mg IV rapid push", "12 mg IV slow push", "0.1 mg IV over 1 min"], correct: 1, explanation: "Adenosine 6 mg is the adult 1st dose for SVT, given as a RAPID push followed immediately by a 10–20 ml NS flush." },
                { q: "Adenosine must be administered:", options: ["Slowly over 1–2 minutes", "As a rapid IV push with immediate NS flush", "Diluted in 100 ml NS", "Via IM injection only"], correct: 1, explanation: "Adenosine has a half-life of <10 seconds. It must be pushed rapidly and flushed immediately to reach the heart before it is metabolized." },
                { q: "What diluent must be used for Amiodarone infusion?", options: ["Normal Saline", "Lactated Ringers", "Dextrose 5% Water", "Sterile water"], correct: 2, explanation: "Amiodarone is incompatible with Normal Saline and must be diluted in D5W only." },
                { q: "Amiodarone dose for cardiac arrest (refractory VF/VT)?", options: ["1 mg/kg IV", "3 mg/kg IV/IO", "5 mg/kg IV/IO", "300 mg flat dose adult only"], correct: 2, explanation: "The DCAS CPG dose is 5 mg/kg IV/IO given after the 3rd shock in refractory VF/VT." },
                { q: "Atropine for organophosphate poisoning: treatment endpoint is:", options: ["Heart rate >60", "Pupil dilation", "Drying of secretions", "BP normalization"], correct: 2, explanation: "In organophosphate poisoning, atropine is titrated until secretions dry — not to heart rate. Doses may be very high (2–4 mg q5-10 min)." },
                { q: "Epinephrine for anaphylaxis: correct concentration and route?", options: ["1:10,000 IV", "1:1,000 IM lateral thigh", "1:1,000 IV push", "1:10,000 IM"], correct: 1, explanation: "Anaphylaxis: 1:1,000 (1 mg/ml) given IM into the lateral thigh. The 1:10,000 concentration is for cardiac arrest via IV/IO." },
                { q: "GTN is CONTRAINDICATED in which scenario?", options: ["Anterior STEMI", "BP 110/70 with chest pain", "Patient took sildenafil 20 hours ago", "Pulmonary edema with normal BP"], correct: 2, explanation: "GTN + PDE-5 inhibitors (sildenafil/Viagra) causes severe refractory hypotension. Contraindicated within 24–48 hours of sildenafil use." },
                { q: "Labetalol prehospital use: indication?", options: ["Hypertensive emergency in stroke", "Pre-eclampsia with severe hypertension", "Hypertension with tachycardia in all adults", "Post-cardiac arrest hypertension"], correct: 1, explanation: "Labetalol in DCAS CPG is indicated for pre-eclampsia with severe hypertension (SBP ≥160 or DBP ≥110) or eclampsia." },

                /* AIRWAY */
                { q: "Salbutamol pediatric dose for a 3-year-old?", options: ["1.25 mg nebulized", "2.5 mg nebulized", "5 mg nebulized", "Same as adult"], correct: 1, explanation: "Children under 5 years receive 2.5 mg salbutamol nebulized. Children ≥5 years receive 5 mg (adult dose)." },
                { q: "Racemic epinephrine is indicated for:", options: ["Anaphylaxis", "Asthma exacerbation", "Croup (stridor)", "Post-intubation hypertension"], correct: 2, explanation: "Racemic epinephrine is nebulized for croup — it reduces upper airway edema and stridor. It is not used for asthma or anaphylaxis in DCAS CPG." },
                { q: "Magnesium sulphate adult dose for severe asthma?", options: ["1 g IV over 10 min", "2 g IV over 20 min", "4 g IV over 5 min", "40 mg/kg IV"], correct: 1, explanation: "2 g IV over 20 minutes for adults with severe/life-threatening asthma not responding to bronchodilators." },
                { q: "Methoxyflurane (Penthrox) maximum adult dose per episode?", options: ["3 ml", "6 ml", "9 ml", "12 ml"], correct: 1, explanation: "Maximum 6 ml per 24 hours in adults (one use of 3 ml + one repeat). Pediatric max is 3 ml total." },

                /* NEURO */
                { q: "Diazepam rectal (PR) dose for a 20 kg child in status epilepticus?", options: ["2 mg", "5 mg", "10 mg", "20 mg"], correct: 2, explanation: "PR dose is 0.5 mg/kg. For a 20 kg child: 0.5 × 20 = 10 mg PR (max 20 mg)." },
                { q: "Haloperidol: which route is used in prehospital care?", options: ["IV slow push", "IM only", "Oral", "Sublingual"], correct: 1, explanation: "Haloperidol is given IM only in the prehospital setting. IV administration carries risks of QT prolongation and torsades — not used prehospital." },
                { q: "A patient is seizing. You give Diazepam 5 mg IV. After 5 minutes the seizure continues. What next?", options: ["Repeat Diazepam 5 mg IV", "Give Haloperidol 5 mg IM", "Give Atropine", "Transport — no further drug"], correct: 0, explanation: "A single repeat dose of Diazepam 5 mg IV is appropriate if seizure continues after 5 minutes. Request ALS backup." },

                /* PAIN */
                { q: "Morphine maximum IV dose for an adult?", options: ["5 mg", "10 mg", "20 mg", "No maximum"], correct: 1, explanation: "Maximum IV dose is 10 mg (given as 2.5 mg increments q5 min). The IM maximum is 20 mg." },
                { q: "Paracetamol adult IV dose?", options: ["500 mg", "750 mg", "1000 mg", "1500 mg"], correct: 2, explanation: "1000 mg (1 g) IV over 10–15 min. Maximum 4 g per 24 hours. Reduce in hepatic impairment." },
                { q: "Nefopam is contraindicated in all EXCEPT:", options: ["Epilepsy", "STEMI", "Moderate fracture pain with normal renal function", "Age 10 years"], correct: 2, explanation: "Nefopam can be used for moderate-severe pain with normal renal function. It is contraindicated in epilepsy, STEMI/NSTEMI, renal impairment, and patients under 13 years." },
                { q: "GTN maximum number of SL sprays prehospital?", options: ["1 spray (0.4 mg)", "2 sprays (0.8 mg)", "3 sprays (1.2 mg)", "5 sprays (2 mg)"], correct: 2, explanation: "Maximum 3 sprays (0.4 mg each = 1.2 mg total) at 3–5 minute intervals, provided SBP remains ≥100 mmHg." },

                /* METABOLIC */
                { q: "Blood glucose threshold to treat hypoglycemia?", options: ["<50 mg/dl", "<60 mg/dl", "<70 mg/dl", "<80 mg/dl"], correct: 2, explanation: "Treat hypoglycemia when blood glucose is <70 mg/dl regardless of symptoms in DCAS CPG." },
                { q: "Dextrose 10% pediatric dose?", options: ["5 ml/kg", "10 ml/kg (max 125 ml)", "20 ml/kg", "2 ml/kg"], correct: 1, explanation: "10 ml/kg IV/IO (max 125 ml in children). Neonates receive 2 ml/kg of D10W." },
                { q: "Glucose 40% oral paste: which patient CANNOT receive it?", options: ["A 70 kg adult", "A 20 kg child", "An unconscious patient", "A diabetic on insulin"], correct: 2, explanation: "Oral paste requires a conscious patient who can swallow. It must be swallowed — not buccally absorbed — so it cannot be given to unconscious patients." },
                { q: "Glucagon dose for a 20 kg child?", options: ["1 mg IM", "0.5 mg IM", "2 mg IM", "0.1 mg/kg IM"], correct: 1, explanation: "Children under 6 years OR under 25 kg receive 0.5 mg IM/SC. Children over 25 kg receive 1 mg." },
                { q: "Lactated Ringers is contraindicated in:", options: ["Hemorrhagic shock", "Burns", "Diabetic ketoacidosis", "Sepsis"], correct: 2, explanation: "LR is contraindicated in DKA (risk of worsening acidosis), <1 month of age, hypervolemia, and liver failure." },

                /* OTHER */
                { q: "Aspirin for ACS: correct dose and method?", options: ["600 mg swallowed whole", "325 mg chewed", "324 mg (4×81 mg) chewed", "162 mg sublingual"], correct: 2, explanation: "324 mg (4 × 81 mg) must be CHEWED (not swallowed whole) for rapid absorption. Do not give if patient already had 324 mg in the past 60 minutes." },
                { q: "Naloxone: goal of titration in opioid overdose?", options: ["Full consciousness", "Normal BP", "Adequate spontaneous respirations", "HR >60"], correct: 2, explanation: "Titrate Naloxone to restore adequate spontaneous respirations ONLY. Over-reversal causes acute withdrawal (agitation, vomiting, tachycardia) and is dangerous." },
                { q: "TXA must be given within how many hours of injury?", options: ["1 hour", "2 hours", "3 hours", "6 hours"], correct: 2, explanation: "Tranexamic Acid must be given within 3 hours of injury or onset of PPH. After 3 hours it may actually increase mortality." },
                { q: "Furosemide 40 mg IV: which patient is it indicated for?", options: ["8-year-old with anaphylaxis", "Adult with acute pulmonary edema and fluid overload", "Any patient with dyspnea", "Pediatric septic shock"], correct: 1, explanation: "Furosemide is indicated for adults with acute pulmonary edema accompanied by signs of fluid overload. Not for pediatric prehospital use." },
                { q: "Metoclopramide is generally avoided in pediatrics due to risk of:", options: ["Respiratory depression", "Extrapyramidal effects", "Hypoglycemia", "Hypertension"], correct: 1, explanation: "Metoclopramide causes extrapyramidal effects (dystonia, akathisia) especially in children and young adults — generally avoid prehospital in pediatrics." }
            ],

            critical: [
                {
                    scenario: "32F, 8 months pregnant. BP 178/112, severe headache, visual changes. GCS 15. No active seizure.",
                    question: "Which drug is indicated FIRST?",
                    options: [
                        { t: "Diazepam 5 mg IV", f: "Diazepam is for active seizure (eclampsia), not prophylaxis here." },
                        { t: "Labetalol 20 mg IV over 2 min", f: "Correct. Pre-eclampsia with severe hypertension — Labetalol is first-line to reduce BP." },
                        { t: "GTN 0.4 mg SL", f: "GTN is not indicated in obstetric hypertension." },
                        { t: "Magnesium 4 g IV over 5 min", f: "Magnesium is for active eclampsia seizure, not isolated hypertension." }
                    ],
                    correct: 1,
                    explanation: "Pre-eclampsia with severe features: SBP ≥160 or DBP ≥110 requires antihypertensive treatment. Labetalol 20 mg IV over 2 minutes per DCAS CPG.",
                    kpi: "Administer Labetalol within 5 min of recognition of severe hypertension."
                },
                {
                    scenario: "58M, witnessed cardiac arrest. VF on monitor. 3 shocks delivered, CPR ongoing. IV access established.",
                    question: "After the 3rd shock, which drug is given?",
                    options: [
                        { t: "Atropine 1 mg IV", f: "Atropine is not indicated in VF/VT arrest." },
                        { t: "Amiodarone 5 mg/kg IV/IO", f: "Correct. Amiodarone 5 mg/kg IV/IO is given after the 3rd shock in refractory VF/VT." },
                        { t: "Adenosine 6 mg IV rapid push", f: "Adenosine is for SVT — never used in cardiac arrest." },
                        { t: "Lidocaine 1 mg/kg IV", f: "Lidocaine is an alternative, but DCAS CPG specifies Amiodarone." }
                    ],
                    correct: 1,
                    explanation: "Amiodarone 5 mg/kg IV/IO is the anti-arrhythmic of choice after the 3rd defibrillation in refractory VF/pulseless VT. Must be diluted in D5W, never NS.",
                    kpi: "Do not interrupt CPR to draw up Amiodarone — prepare during compressions."
                },
                {
                    scenario: "4-year-old, 18 kg. History of febrile seizures. Active generalized tonic-clonic seizure × 4 min. IV access not established.",
                    question: "What is the MOST appropriate immediate intervention?",
                    options: [
                        { t: "Diazepam 5 mg IV — attempt IV access first", f: "No IV access is established. Attempting IV during active seizure wastes critical time." },
                        { t: "Diazepam PR 9 mg (0.5 mg/kg)", f: "Correct. No IV → rectal Diazepam 0.5 mg/kg = 9 mg. Fast, effective, atraumatic." },
                        { t: "Haloperidol 5 mg IM", f: "Haloperidol is for psychosis — never for seizures." },
                        { t: "Intranasal Midazolam", f: "Not in DCAS CPG formulary for this indication." }
                    ],
                    correct: 1,
                    explanation: "When IV access is unavailable: rectal Diazepam 0.5 mg/kg (max 20 mg). For 18 kg: 9 mg PR. This is the fastest and safest route in a seizing child without IV access.",
                    kpi: "Airway management takes priority — position patient, suction if needed, O2 via mask."
                },
                {
                    scenario: "25M, found unresponsive. RR 4/min, pinpoint pupils, bradycardia. Suspected heroin overdose.",
                    question: "Naloxone dose and route?",
                    options: [
                        { t: "0.4 mg IV — full dose at once to wake the patient", f: "Giving full dose at once risks acute withdrawal. Titrate to respirations, not consciousness." },
                        { t: "0.4 mg IV/IM — titrate to adequate spontaneous respirations", f: "Correct. Start 0.4 mg, reassess in 3 min, repeat if needed. Goal: RR ≥10, not full consciousness." },
                        { t: "2 mg IV — maximum dose immediately", f: "Start with 0.4 mg and titrate. 2 mg maximum is the total allowed, not the starting dose." },
                        { t: "4 mg IN — intranasal only, avoid IV", f: "IV/IM is faster in this scenario. IN 4 mg is an option but IV is preferred with access." }
                    ],
                    correct: 1,
                    explanation: "Titrate Naloxone 0.4 mg IV/IM q3 min. Do NOT over-reverse — goal is spontaneous respirations ≥10/min. Over-reversal causes acute withdrawal (vomiting, agitation, pulmonary edema) and is dangerous.",
                    kpi: "Support airway with BVM before and during Naloxone administration."
                },
                {
                    scenario: "19F, known asthma. Severe exacerbation, SpO2 82% on 15L O2 NRB. Accessory muscle use, tripod position, unable to speak in sentences. Salbutamol × 2 rounds given.",
                    question: "What is the NEXT drug indicated?",
                    options: [
                        { t: "Repeat Salbutamol only", f: "Already given × 2. Add Ipratropium (Combivent) and consider Magnesium." },
                        { t: "Magnesium Sulphate 2 g IV over 20 min", f: "Correct. Life-threatening asthma not responding to bronchodilators → Magnesium 2 g IV/IO over 20 min." },
                        { t: "Haloperidol 5 mg IM for anxiety", f: "Never — causes respiratory depression in a patient already in extremis." },
                        { t: "Furosemide 40 mg IV", f: "Not indicated — this is bronchoconstriction, not pulmonary edema." }
                    ],
                    correct: 1,
                    explanation: "Life-threatening asthma not responding to repeated Salbutamol: add Combivent, Hydrocortisone 2 mg/kg IV, and Magnesium Sulphate 2 g IV over 20 min. Consider RSI and ALS backup.",
                    kpi: "Request ALS backup immediately for life-threatening asthma. Do not delay transport."
                },
                {
                    scenario: "70M, STEMI confirmed on 12-lead. BP 126/78. Patient took sildenafil (Viagra) last night.",
                    question: "Can you give GTN?",
                    options: [
                        { t: "Yes — STEMI always gets GTN regardless", f: "Incorrect. PDE-5 inhibitor use within 24-48 h is an absolute contraindication for GTN." },
                        { t: "No — sildenafil use within 24 hours is a contraindication to GTN", f: "Correct. GTN + sildenafil causes severe, refractory hypotension that does not respond to fluid." },
                        { t: "Yes, but use half the dose", f: "There is no safe dose of GTN after recent sildenafil. Contraindicated." },
                        { t: "Yes — only contraindicated if BP <90 mmHg", f: "BP alone is not the only contraindication. PDE-5 inhibitors within 24-48 h are absolute CI." }
                    ],
                    correct: 1,
                    explanation: "GTN + PDE-5 inhibitors (sildenafil, tadalafil, vardenafil) causes profound hypotension refractory to fluids. Absolute contraindication within 24 h (sildenafil) or 48 h (tadalafil). Manage pain with Morphine instead.",
                    kpi: "ALWAYS ask about erectile dysfunction medications before giving GTN in male patients with chest pain."
                },
                {
                    scenario: "6-year-old, 22 kg. BG 48 mg/dl. Altered mental status but responding to voice. IV access established.",
                    question: "Which treatment is MOST appropriate?",
                    options: [
                        { t: "Glucose 40% oral paste ½ tube", f: "Altered mental status means uncertain airway protection — oral paste unsafe if at risk of aspiration." },
                        { t: "Dextrose 10% 220 ml IV (10 ml/kg)", f: "Correct. 10 ml/kg = 220 ml D10W IV/IO for a 22 kg child with hypoglycemia and altered mental status." },
                        { t: "Glucagon 1 mg IM", f: "Glucagon is for patients without IV access. With IV access, dextrose is preferred (faster and more reliable)." },
                        { t: "Normal Saline bolus 220 ml", f: "NS does not treat hypoglycemia." }
                    ],
                    correct: 1,
                    explanation: "With IV access: D10W 10 ml/kg (220 ml) is the preferred treatment for pediatric hypoglycemia. Recheck BG after 5-10 minutes. Glucagon IM is the backup when no IV access is available.",
                    kpi: "Recheck blood glucose 5-10 minutes after treatment. Aim for BG >80 mg/dl."
                },
                {
                    scenario: "28F, 36 weeks pregnant. Active postpartum hemorrhage post-delivery on scene. Estimated blood loss >1L. Time since delivery: 45 minutes.",
                    question: "Is TXA indicated? If so, what is the dose?",
                    options: [
                        { t: "No — TXA is only for trauma, not obstetric hemorrhage", f: "Incorrect. DCAS CPG includes TXA for postpartum hemorrhage within 3 hours of onset." },
                        { t: "Yes — 1 g IV in 100 ml NS over 10 min", f: "Correct. TXA is indicated for PPH within 3 hours. 1 g IV over 10 min as a single dose." },
                        { t: "Yes — 2 g IV bolus immediately", f: "Incorrect dose. The DCAS dose is 1 g over 10 min (not bolus, not 2 g)." },
                        { t: "No — too much time has passed", f: "45 minutes is well within the 3-hour window. TXA should be given." }
                    ],
                    correct: 1,
                    explanation: "TXA is indicated for PPH within 3 hours of delivery. Dose: 1 g IV diluted in 100 ml NS over 10 minutes (single dose). Infusing too fast may cause nausea/hypotension. Time-critical — do not delay.",
                    kpi: "Document exact time of PPH onset for TXA eligibility. Must be within 3 hours."
                }
            ]
        }
    ]
};
