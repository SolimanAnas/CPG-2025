/* ========== Chapter S1 – Scope of Practice Matrix ========== */
window.CPG_DATA = {
    id: "s1",
    title: "Scope of Practice Matrix",
    shortTitle: "S1 Scope of Practice",
    summary: `
        <div class="sum-card">
            <h3 style="color:var(--primary-accent);">📋 Scope of Practice Matrix</h3>
            <p>This matrix outlines the medications, skills, procedures, and interventions that DCAS staff are authorized to perform at each clinical level.</p>
            <p><strong>Colour key:</strong></p>
            <ul>
                <li><span style="background:#0056b3; color:white; padding:2px 8px; border-radius:12px;">Blue box</span> – Independent practice (may be carried out without supervision).</li>
                <li><span style="background:#e67e22; color:white; padding:2px 8px; border-radius:12px;">Orange box with 📞</span> – Requires prior consultation with Tele‑EMS.</li>
                <li>Empty cells – Not authorised at that level.</li>
            </ul>
            <p><em>Note: Tele‑EMS remains available for guidance even for independent practice items.</em></p>

            <h4>Medications</h4>
            <div class="scope-table-wrapper">
                <table class="scope-table">
                    <thead>
                        <tr><th>Medication / Intervention</th><th>ER</th><th>EMR</th><th>EMT</th><th>EMT‑A</th><th>P</th><th>AP</th><th>EP</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Oxygen</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Actimaris Wound Cleaning Solution</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Biofreeze / Ethyl Chloride</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Paracetamol PO</td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Aspirin PO</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Glucose gel buccal</td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>EpiPen 0.3mg, 0.15mg</td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Paracetamol PR / IV</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>GTN SL</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Combivent Nebulized</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Salbutamol Nebulized</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Penthrox</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Dextrose 10%</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Ringer's Lactate</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Sodium Chloride 0.9%</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Epinephrine 1:10,000 PFS</td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Diphenhydramine IM</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Glucagon SC/IM</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Naloxone IM/IV/IN</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Amiodarone (cardiac arrest)</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Hydrocortisone IM</td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Nefopam IV</td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Racemic Epinephrine</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Diclofenac IM</td><td></td><td></td><td class="tele">📞</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Atropine</td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Hydrocortisone IV</td><td></td><td></td><td></td><td class="tele">📞</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Hyoscine IM/IV</td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Metoclopramide IM/IV</td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Adenosine</td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Epinephrine 1:1000 amp</td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Tranexamic Acid</td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Furosemide</td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Epinephrine push‑dose/infusion</td><td></td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Amiodarone Infusion (tachyarrhythmias)</td><td></td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Dopamine</td><td></td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Labetalol</td><td></td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Morphine</td><td></td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Pethidine</td><td></td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Haloperidol</td><td></td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Midazolam</td><td></td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Diazepam IM/IV/PR</td><td></td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Ketamine</td><td></td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td></tr>
                    </tbody>
                </table>
            </div>

            <h4>Airway Management & Ventilation</h4>
            <div class="scope-table-wrapper">
                <table class="scope-table">
                    <thead><tr><th>Skill</th><th>ER</th><th>EMR</th><th>EMT</th><th>EMT‑A</th><th>P</th><th>AP</th><th>EP</th></tr></thead>
                    <tbody>
                        <tr><td>Open Airway Maneuvers</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Bag Mask Ventilation</td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Oxygen therapy</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Suction</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Basic Airway Adjuncts (OPA/NPA)</td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Nebulization</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>End‑tidal CO₂ monitoring</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Laryngeal Tube insertion</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Flow‑Safe CPAP</td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Endotracheal intubation</td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Ventilation via Ventilator</td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Non‑Invasive Ventilation via Ventilator</td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Rapid Sequence Intubation</td><td></td><td></td><td></td><td></td><td></td><td></td><td class="indep">✔</td></tr>
                        <tr><td>Foreign Body Removal</td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                    </tbody>
                </table>
            </div>

            <h4>Cardiac</h4>
            <div class="scope-table-wrapper">
                <table class="scope-table">
                    <thead><tr><th>Skill</th><th>ER</th><th>EMR</th><th>EMT</th><th>EMT‑A</th><th>P</th><th>AP</th><th>EP</th></tr></thead>
                    <tbody>
                        <tr><td>AED & CPR adult & pediatrics</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>4‑lead ECG</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>12‑lead ECG</td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Defibrillation</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Determining Death‑on‑Arrival (deciding to not start CPR)</td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Stopping CPR once it has been started</td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Synchronized Cardioversion & Pacing</td><td></td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td></tr>
                    </tbody>
                </table>
            </div>

            <h4>Trauma</h4>
            <div class="scope-table-wrapper">
                <table class="scope-table">
                    <thead><tr><th>Skill</th><th>ER</th><th>EMR</th><th>EMT</th><th>EMT‑A</th><th>P</th><th>AP</th><th>EP</th></tr></thead>
                    <tbody>
                        <tr><td>Sling application</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Splinting (SAM and foam splint)</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Logroll</td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Spinal stabilization</td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>C‑collar application</td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Rapid extrication</td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>KED</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Pelvic Binder</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Scoop stretcher</td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Traction Splint (femur fracture)</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Helmet stabilization/removal</td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Triaging – Establishing Priorities</td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Needle decompression</td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                    </tbody>
                </table>
            </div>

            <h4>Hemorrhage Control</h4>
            <div class="scope-table-wrapper">
                <table class="scope-table">
                    <thead><tr><th>Skill</th><th>ER</th><th>EMR</th><th>EMT</th><th>EMT‑A</th><th>P</th><th>AP</th><th>EP</th></tr></thead>
                    <tbody>
                        <tr><td>C.A.T. Tourniquet Use</td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Nasal Packing</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                    </tbody>
                </table>
            </div>

            <h4>Others</h4>
            <div class="scope-table-wrapper">
                <table class="scope-table">
                    <thead><tr><th>Skill</th><th>ER</th><th>EMR</th><th>EMT</th><th>EMT‑A</th><th>P</th><th>AP</th><th>EP</th></tr></thead>
                    <tbody>
                        <tr><td>Childbirth</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Intramuscular Injection</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Intravenous Cannulation</td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Intraosseous Cannulation</td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td><td class="indep">✔</td></tr>
                        <tr><td>Procedural Sedation</td><td></td><td></td><td></td><td></td><td></td><td class="indep">✔</td><td class="indep">✔</td></tr>
                    </tbody>
                </table>
            </div>

            <p><strong>Note:</strong> This matrix is a summary. For full details, always refer to the current DCAS Clinical Practice Guidelines.</p>
        </div>
    `,
    quiz: [],
    flashcards: [],
    critical: []
};