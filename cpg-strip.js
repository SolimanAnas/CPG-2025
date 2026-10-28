/* ========== cpg-strip.js – static rhythm strips for guideline pages ==========
 * Draws a calibrated strip (25 mm/s, 10 mm/mV) from the ECG Simulator's own
 * engine (pages/ecg-engine.js, loaded first), so a strip on a guideline page
 * is the same waveform the simulator shows for that rhythm.
 */
(function () {
    'use strict';

    const MM_PER_S = 25;
    const MM_PER_MV = 10;
    const cache = {};
    // ecg-engine.js declares `const ECGEngine` (a global, but not on window).
    const engine = () => (typeof ECGEngine !== 'undefined' ? ECGEngine : null);

    // Lead `lead` of rhythm `key` as an SVG path `seconds` long, with its
    // vertical extent in mm (y grows downwards).
    function trace(key, seconds, lead) {
        const E = engine();
        const sim = E.createSim(key, null, { seed: 7 });
        const out = new Float32Array(E.NL);
        const li = E.LEAD_INDEX[lead];
        const step = 2;                       // every 2nd sample: 250 Hz, plenty at this scale
        const t0 = 2;                         // skip the first beats while the rhythm settles
        let d = '', lo = 0, hi = 0;
        for (let i = 0; i <= seconds * E.FS; i += step) {
            sim.sampleAt(t0 + i / E.FS, out);
            const x = (i / E.FS) * MM_PER_S;
            const y = -out[li] * MM_PER_MV;
            d += (i ? 'L' : 'M') + x.toFixed(2) + ' ' + y.toFixed(2);
            lo = Math.min(lo, y); hi = Math.max(hi, y);
        }
        return { d, lo, hi };
    }

    function svg(key, opts) {
        const o = Object.assign({ seconds: 6, lead: 'II', label: '' }, opts);
        if (!engine() || !engine().RHYTHMS[key]) return '';
        const id = key + '|' + o.seconds + '|' + o.lead;
        const t = cache[id] || (cache[id] = trace(key, o.seconds, o.lead));
        const w = o.seconds * MM_PER_S;
        // At least +2 mV to -1 mV, taller when the waveform needs it (coarse VF),
        // in whole 5 mm boxes so the grid lines up with the baseline.
        const top = Math.min(-20, Math.floor((t.lo - 3) / 5) * 5);
        const h = Math.max(10, Math.ceil((t.hi + 3) / 5) * 5) - top;
        // The 1 mm / 5 mm grid is a CSS background on .ecg-paper (cpg-guide.css),
        // sized so one box is 1 mm at this aspect ratio.
        return `<div class="ecg-paper" style="aspect-ratio:${w} / ${h};--ecg-cols:${w};--ecg-rows:${h}">
            <svg class="ecg-strip" viewBox="0 ${top} ${w} ${h}" role="img"
                aria-label="${o.label ? o.label + ', ' : ''}lead ${o.lead} rhythm strip">
                <path d="${t.d}" class="ecg-trace" vector-effect="non-scaling-stroke"/>
                <text x="2" y="${top + 4}" class="ecg-lead">${o.lead}</text>
            </svg></div>`;
    }

    window.CPGStrip = { svg };
})();
