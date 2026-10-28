#!/usr/bin/env node
/**
 * Builds downloads/SmartCare-ECG-Rhythm-Reference.pdf — the printable
 * companion to the ECG Simulator (pages/ecg.html).
 *
 * Every strip is rendered from the simulator's own engine (ecg-engine.js) and
 * every card from its clinical library (ecg-rhythms.js), so the PDF never
 * drifts from what the simulator teaches. Rerun after changing either file:
 *
 *   npm run ecg-reference                          (writes the PDF)
 *   node scripts/build_ecg_reference.js --html     (also keeps the HTML source)
 *
 * Uses the Playwright Chromium already installed for the test suite; set
 * PLAYWRIGHT_CHROMIUM_PATH to use a pre-installed browser instead.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.dirname(__dirname);
const OUT_PDF = path.join(ROOT, 'downloads', 'SmartCare-ECG-Rhythm-Reference.pdf');
const KEEP_HTML = process.argv.includes('--html');
const APP_WEB = 'https://solimananas.github.io/SmartCare/index.html';
const APP_PLAY = 'https://play.google.com/store/apps/details?id=io.github.solimananas.smartcare';
const E = require(path.join(ROOT, 'pages/ecg-engine.js'));
const L = vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'pages/ecg-rhythms.js'), 'utf8') + ';ECG_LIBRARY');

const FS = E.FS, LI = E.LEAD_INDEX;
// The library is written for the simulator; drop its references to on-screen controls.
const paper = s => String(s).replace(/ \(choose V4R in the lead menu\)/, '')
  .replace('Choose V7, V8 or V9 in the lead menu to see the elevation', 'Record V7–V9 to see the elevation')
  .replace(' (drag the QTc control)', '').replace(' (try the Stage control)', '').replace('with the calipers', 'with calipers')
  .replace(' — check the live axis readout', '').replace(' — see the live measurement', '');
const esc = s => paper(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Per-rhythm strip start (s) where the default 1 s window misses the feature.
const START = { psvt: 0.2, sinusPause: 3 };
const dataUri = (rel, type) => `data:${type};base64,` + fs.readFileSync(path.join(ROOT, rel)).toString('base64');
const LOGO = dataUri('icons/icon-384x384.png', 'image/png');
const LOGO_SMALL = dataUri('icons/icon-96x96.png', 'image/png');
const MI_IMG = dataUri('images/ecg/mi-location-leads.jpg', 'image/jpeg');
// segno writes a fixed-size SVG; give it a viewBox so it scales to its box.
const qr = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8')
  .replace(/width="(\d+)" height="(\d+)"/, 'viewBox="0 0 $1 $2" class="qr" shape-rendering="crispEdges"');
const TWELVE = new Set(['conduction', 'acs', 'other']);

function record(key, secs) {
  const sim = E.createSim(key, null, { seed: 4 });
  const n = Math.ceil(secs * FS), out = new Float32Array(E.NL);
  const data = E.LEADS.map(() => new Float32Array(n)), spikes = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    spikes[i] = sim.sampleAt(i / FS, out) || 0;
    for (let l = 0; l < E.NL; l++) data[l][i] = out[l];
  }
  return { data, spikes };
}

// Polyline for one lead: x0/y0 in mm, mm per second, mm per mV.
function trace(sig, spikes, i0, i1, x0, yBase, mmS, mmMv) {
  const pts = [];
  const X = i => (x0 + (i - i0) / FS * mmS).toFixed(2), Y = v => (yBase - v * mmMv).toFixed(2);
  const step = 2;                       // 250 Hz is ample at print resolution …
  for (let i = i0; i < i1; i += step) {
    let a = sig[i], b = sig[Math.min(i + 1, i1 - 1)];
    if (spikes[i] || spikes[i + 1]) {   // … except pacing spikes: draw them as a sharp line
      pts.push(X(i) + ',' + Y(a), X(i) + ',' + Y(a + 1.4), X(i) + ',' + Y(a));
      continue;
    }
    // keep the extreme of each pair so QRS peaks are not shaved
    const v = Math.abs(b - sig[i0]) > Math.abs(a - sig[i0]) ? b : a;
    pts.push(X(i) + ',' + Y(v));
  }
  return '<polyline class="tr" points="' + pts.join(' ') + '"/>';
}

// Explicit paths, not an SVG pattern: Chromium turns each pattern use into
// thousands of PDF objects, which made the file several times larger.
function grid(w, h, s) {
  let mi = '', ma = '';
  for (let k = 0, x = 0; x <= w + 1e-6; k++, x = k * s) (k % 5 ? (mi += `M${x.toFixed(2)} 0V${h}`) : (ma += `M${x.toFixed(2)} 0V${h}`));
  for (let k = 0, y = 0; y <= h + 1e-6; k++, y = k * s) (k % 5 ? (mi += `M0 ${y.toFixed(2)}H${w}`) : (ma += `M0 ${y.toFixed(2)}H${w}`));
  return `<rect width="${w}" height="${h}" fill="#fffafa"/><path class="gmin" d="${mi}"/><path class="gmaj" d="${ma}"/>`;
}
function defs() {
  const pat = (id, s) => `<pattern id="${id}" width="${5 * s}" height="${5 * s}" patternUnits="userSpaceOnUse">
    <path d="${[1, 2, 3, 4].map(k => `M${k * s} 0V${5 * s}M0 ${k * s}H${5 * s}`).join('')}" class="gmin"/>
    <path d="M0 0V${5 * s}M0 0H${5 * s}" class="gmaj"/></pattern>`;
  return `<svg width="0" height="0" style="position:absolute"><defs>${pat('gf', 1)}${pat('gs', 0.736)}</defs></svg>`;
}
function calPulse(x, yBase, mmMv, mmS) {
  const w = 0.2 * mmS;
  return `<path class="cal" d="M${x} ${yBase}h${w * 0.4}v${-mmMv}h${w}v${mmMv}h${w * 0.4}"/>`;
}

const STRIP_W = 184, STRIP_H = 21, SEC = 7;
function rhythmStrip(rec, key, lead) {
  const li = LI[lead], s0 = START[key] != null ? START[key] : 1;
  const i0 = Math.round(s0 * FS), i1 = i0 + SEC * FS, sig = rec.data[li];
  let lo = Infinity, hi = -Infinity;
  for (let i = i0; i < i1; i++) { lo = Math.min(lo, sig[i]); hi = Math.max(hi, sig[i]); }
  // centre the trace, but keep the baseline in the lower-middle where ECG paper puts it
  let base = STRIP_H / 2 + ((hi + lo) / 2) * 10;
  base = Math.max(6, Math.min(STRIP_H - 3, base));
  const calX = 1.5, x0 = 9;
  const mmS = (STRIP_W - x0) / SEC;     // = 25 mm/s
  return `<svg class="strip" viewBox="0 0 ${STRIP_W} ${STRIP_H}" width="${STRIP_W}mm" height="${STRIP_H}mm">
    ${grid(STRIP_W, STRIP_H, 1)}${calPulse(calX, base, 10, 25)}
    ${trace(sig, rec.spikes, i0, i1, x0, base, mmS, 10)}
    <text x="${x0 + 1}" y="3.6" class="ll">${esc(lead)}</text></svg>`;
}

const S12 = 0.736, ROW_H = 16;
function twelveLead(rec, key, focus) {
  const W = STRIP_W, H = ROW_H * 3 + 1, mmS = 25 * S12, mmMv = 10 * S12;
  const x0 = 6, colW = 2.5 * mmS;
  const rows = [['I', 'aVR', 'V1', 'V4'], ['II', 'aVL', 'V2', 'V5'], ['III', 'aVF', 'V3', 'V6']];
  // Right-sided / posterior diagnostic leads take V4's slot so they are on the page.
  if (!E.STANDARD_12.includes(focus)) rows[0][3] = focus;
  const s0 = START[key] != null ? START[key] : 1, i0 = Math.round(s0 * FS);
  let body = '';
  rows.forEach((row, r) => {
    const base = ROW_H * r + ROW_H * 0.62;
    body += calPulse(1, base, mmMv, mmS);
    row.forEach((lead, c) => {
      const a = i0 + Math.round(c * 2.5 * FS), b = a + Math.round(2.5 * FS);
      body += trace(rec.data[LI[lead]], rec.spikes, a, b, x0 + c * colW, base, mmS, mmMv);
      body += `<text x="${x0 + c * colW + 1}" y="${ROW_H * r + 3.4}" class="ll${lead === focus ? ' fo' : ''}">${lead}</text>`;
      if (c) body += `<path class="sep" d="M${x0 + c * colW} ${base - 2.2}v4.4"/>`;
    });
  });
  return `<svg class="strip" viewBox="0 0 ${W} ${H}" width="${W}mm" height="${H}mm">
    ${grid(W, H, S12)}<g clip-path="none">${body}</g></svg>`;
}

// ── content helpers ──
const KIND_ORDER = { crit: 0, first: 1, avoid: 1, next: 2, info: 3 };
// The shared STEMI items repeat on every infarct card; fold them into one line.
const BUNDLE = /^(Activate the STEMI|Aspirin 162|Serial 12-leads|Nitroglycerin 0\.4 mg SL$|Oxygen only if)/;
function actions(r) {
  let m = r.manage || [];
  if (m.some(x => /^Activate the STEMI/.test(x.a))) {
    m = [{ a: 'STEMI bundle', d: 'Cath-lab activation, aspirin, pads on, NTG if SBP ≥ 90, O₂ only if SpO₂ < 90%', k: 'crit' }]
      .concat(m.filter(x => !BUNDLE.test(x.a)));
  }
  const avoid = m.filter(x => x.k === 'avoid');
  const rest = m.filter(x => x.k !== 'avoid' && x.k !== 'info');
  let pick = rest.slice(0, Math.max(1, 4 - avoid.length)).concat(avoid);
  if (!pick.length) pick = m.slice(0, 2);
  pick.sort((a, b) => KIND_ORDER[a.k] - KIND_ORDER[b.k]);
  return pick;
}
const shortD = d => {
  // First sentence; if long, cut only at a clause boundary so a dose is never split from its unit.
  let s = d.split(/(?<=[.;])\s/)[0].replace(/[.;:,]$/, '');
  if (s.length > 100) {
    let cut = -1;
    for (const m of s.matchAll(/, | or | \(|; | — /g)) if (m.index >= 30 && m.index <= 100) cut = m.index;
    if (cut > 0) s = s.slice(0, cut) + ' …';
  }
  return s;
};

function card(key) {
  const r = L.RHYTHMS[key], cat = r.cat, twelve = TWELVE.has(cat);
  const lead = twelve ? 'II' : r.lead;
  const rec = record(key, 12);
  const wave = twelve ? twelveLead(rec, key, r.lead) : rhythmStrip(rec, key, lead);
  const crit = r.criteria.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join('');
  const look = r.look.map(x => `<li>${esc(x)}</li>`).join('');
  const act = actions(r).map(m => `<li class="k-${m.k}"><b>${esc(m.a)}</b>${m.k === 'crit' || m.k === 'avoid' || m.k === 'first' ? '' : ''}${m.d && m.k !== 'avoid' ? ' — <span>' + esc(shortD(m.d)) + '</span>' : ''}</li>`).join('');
  const alike = (r.alike || []).slice(0, 2).map(([k, t]) => {
    const i = t.indexOf(': ');          // "2:1 block: …" — split at the label's colon, not the ratio's
    const nm = i > 0 ? t.slice(0, i) : (L.RHYTHMS[k] ? L.RHYTHMS[k].short : k);
    const tx = i > 0 ? t.slice(i + 1).trim() : t;
    return `<span class="al"><a href="#r-${k}">${esc(nm)}</a> ${esc(tx)}</span>`;
  }).join('');
  const acu = L.ACUITY[r.acuity];
  return `<article class="card c-${cat}${twelve ? ' tw' : ''}" id="r-${key}">
  <header><h3>${esc(r.name)}</h3><span class="acu a-${r.acuity}">${esc(acu.label)}</span>
    ${twelve && r.lead !== 'II' ? `<span class="dl">Look at ${esc(r.lead)}</span>` : ''}</header>
  <p class="sum">${esc(r.summary)}</p>
  ${wave}
  <div class="info">
    <div><h4>Criteria</h4><table>${crit}</table></div>
    <div><h4>Look for</h4><ul>${look}</ul></div>
    <div><h4>Act</h4><ul class="act">${act}</ul></div>
  </div>
  ${alike ? `<div class="alike"><b>Don’t confuse with</b>${alike}</div>` : ''}
</article>`;
}

// ── front matter ──
function indexHtml() {
  return L.CATEGORIES.map(c => {
    const ks = L.ORDER.filter(k => L.RHYTHMS[k].cat === c.id);
    const mi = c.id === 'acs' ? '<a href="#mi-location"><b>MI location map</b></a>' : '';
    return `<p class="ix c-${c.id}"><a class="h" href="#cat-${c.id}">${esc(c.label)}</a><span>${mi}${ks.map(k =>
      `<a href="#r-${k}"><i class="dot a-${L.RHYTHMS[k].acuity}"></i>${esc(L.RHYTHMS[k].short)}</a>`).join('')}</span></p>`;
  }).join('');
}
function pathwaysHtml() {
  return Object.values(L.PATHWAYS).map(p => `<section class="pw"><h3>${esc(p.title)}</h3><ol>${
    p.steps.map(([h, d]) => `<li><b>${esc(h)}</b><span>${esc(d)}</span></li>`).join('')}</ol></section>`).join('');
}

const n = L.ORDER.length;
let cards = '';
for (const c of L.CATEGORIES) {
  const ks = L.ORDER.filter(k => L.RHYTHMS[k].cat === c.id);
  if (!ks.length) continue;
  cards += `<h2 class="cat c-${c.id}" id="cat-${c.id}">${esc(c.label)}<small>${ks.length} ${ks.length === 1 ? 'rhythm' : 'rhythms'}${TWELVE.has(c.id) ? ' · 12-lead at 74%' : ' · 25 mm/s, 10 mm/mV'}</small></h2>`;
  if (c.id === 'acs') cards += miHtml();
  cards += ks.map(card).join('\n');
}

// MI territory map: which leads look at which wall, and the usual culprit artery.
function miHtml() {
  const rows = [
    ['Inferior', 'II, III, aVF', 'RCA (~80%) or LCx', 'inf'],
    ['Septal', 'V1–V2', 'LAD — septal branches', 'sep'],
    ['Anterior', 'V3–V4', 'LAD', 'ant'],
    ['Lateral', 'I, aVL, V5–V6', 'LCx or diagonal', 'lat'],
    ['Posterior', 'ST ↓ V1–V3 · STE V7–V9', 'RCA or LCx', 'pos'],
    ['Right ventricle', 'V1, V4R', 'Proximal RCA', 'rv'],
  ];
  return `<section class="mi" id="mi-location">
  <img src="${MI_IMG}" alt="Location of MI by ECG leads: lateral I, aVL, V5, V6; inferior II, III, aVF; septal V1, V2; anterior V3, V4; aVR no specific region">
  <div class="mi-side"><h3>Where is the infarct?</h3>
    <p class="sum">ST elevation in two or more contiguous leads localises the injured wall; the opposite wall shows reciprocal depression.</p>
    <table class="terr"><tr><th>Wall</th><th>Leads</th><th>Usual artery</th></tr>
      ${rows.map(([w, l, a, k]) => `<tr class="t-${k}"><td><i></i>${w}</td><td>${l}</td><td>${a}</td></tr>`).join('')}</table>
    <ul class="mi-notes">
      <li><b>aVR</b> looks at no single wall. STE in aVR with diffuse ST depression suggests left-main or three-vessel disease.</li>
      <li><b>Inferior STEMI?</b> Record V4R before nitrates (RV involvement) and V7–V9 if V1–V3 are depressed.</li>
      <li><b>Reciprocal pairs</b> Inferior ↔ I/aVL · Anterior ↔ inferior · Posterior ↔ V1–V3.</li>
    </ul></div>
</section>`;
}

const backHtml = `<section class="back">
  <img class="logo-big" src="${LOGO}" alt="SmartCare">
  <h2>Practise every rhythm live</h2>
  <p class="lead">The SmartCare ECG Simulator plays all ${L.ORDER.length} rhythms in this reference, with a 12-lead view, calipers and a quiz mode.</p>
  <div class="qrs">
    <a class="qrc" href="${APP_PLAY}">${qr('images/ecg/qr-play.svg')}<b>Get it on Google Play</b><span>Android app</span></a>
    <a class="qrc" href="${APP_WEB}">${qr('images/ecg/qr-web.svg')}<b>Open the web app</b><span>Any browser · works offline</span></a>
  </div>
  <p class="links"><a href="${APP_WEB}">solimananas.github.io/SmartCare</a><a href="${APP_WEB.replace('index.html', 'pages/ecg.html')}">ECG Simulator</a></p>
  <p class="disc">A study aid, not a substitute for clinical judgement. Local protocols and medical direction always take precedence.</p>
</section>`;

const fontDir = 'file://' + path.join(ROOT, 'fonts');
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>ECG Rhythm Reference</title>
<style>
@font-face{font-family:Inter;src:url(${fontDir}/inter-var.woff2) format('woff2');font-weight:100 900}
@font-face{font-family:'Barlow Condensed';src:url(${fontDir}/barlow-condensed-700.woff2) format('woff2');font-weight:700}
@font-face{font-family:'Barlow Condensed';src:url(${fontDir}/barlow-condensed-600.woff2) format('woff2');font-weight:600}
@page{size:A4;margin:11mm 12mm 13mm}
:root{--tx:#14181f;--mu:#5b6573;--ln:#dfe3ea;--sunk:#f5f7fa;
  --stable:#15803d;--monitor:#b45309;--urgent:#c2410c;--arrest:#b91c1c;
  --c-sinus:#0f766e;--c-atrial:#7c3aed;--c-junctional:#0369a1;--c-ventricular:#be123c;--c-arrest:#991b1b;
  --c-block:#a16207;--c-conduction:#4338ca;--c-paced:#0e7490;--c-acs:#c2410c;--c-other:#475569}
*{box-sizing:border-box}
html{-webkit-print-color-adjust:exact;print-color-adjust:exact}
body{margin:0;font:7.1pt/1.32 Inter,sans-serif;color:var(--tx);font-feature-settings:'cv11','ss01'}
a{color:inherit;text-decoration:none}
h1,h2,h3,h4{margin:0;font-weight:700;letter-spacing:-.01em}
${L.CATEGORIES.map(c => `.c-${c.id}{--cc:var(--c-${c.id})}`).join('')}
.a-stable{--ac:var(--stable)}.a-monitor{--ac:var(--monitor)}.a-urgent{--ac:var(--urgent)}.a-arrest{--ac:var(--arrest)}

/* cover */
.cover{break-after:page}
.brand{display:flex;align-items:center;gap:4mm;border-bottom:2.2pt solid var(--tx);padding-bottom:2.6mm;margin-bottom:3.4mm}
.brand .logo{width:24mm;height:24mm;flex:none}
.brand .bt{flex:1}
.brand h1{font:700 30pt/0.95 'Barlow Condensed',Inter,sans-serif;letter-spacing:-.005em;text-transform:uppercase}
.brand h1 em{font-style:normal;color:var(--arrest)}
.brand p{margin:1.5mm 0 0;color:var(--mu);font-size:8.4pt}
.brand .meta{text-align:right;color:var(--mu);font-size:7pt;line-height:1.5}
.brand .meta b{color:var(--tx);font:700 15pt/1 'Barlow Condensed',sans-serif;display:block}
.hero{margin:0 0 4mm}
.hero .strip{display:block}
.cols{display:grid;grid-template-columns:1.05fr 1fr;gap:5mm}
.box{border:0.6pt solid var(--ln);border-radius:2mm;padding:2.6mm 3mm;margin-bottom:3.4mm;break-inside:avoid}
.box h3{font-size:8.6pt;margin-bottom:1.6mm;display:flex;align-items:center;gap:1.6mm}
.box h3 i{font:700 7pt/1 'Barlow Condensed',sans-serif;background:var(--tx);color:#fff;border-radius:1mm;padding:.5mm 1.2mm .4mm}
.steps{margin:0;padding:0;list-style:none;counter-reset:s}
.steps li{counter-increment:s;display:grid;grid-template-columns:5mm 1fr;margin-bottom:1.25mm}
.steps li::before{content:counter(s);font:700 10pt/1 'Barlow Condensed',sans-serif;color:var(--arrest)}
.steps b{display:block;font-size:7.6pt}
.steps span{color:var(--mu)}
table.nv{width:100%;border-collapse:collapse}
table.nv td,table.nv th{padding:.75mm 0;border-bottom:0.5pt solid var(--ln);text-align:left;vertical-align:top}
table.nv th{font-weight:600;width:19%}
table.nv td.v{font:600 8.4pt/1.1 'Barlow Condensed',sans-serif;white-space:nowrap;width:29%;padding-right:2mm}
.quad{display:grid;grid-template-columns:auto 1fr 1fr;gap:.6mm;font-size:6.8pt}
.quad>div{background:var(--sunk);border-radius:1.2mm;padding:1.6mm 2mm}
.quad .hd{background:none;font-weight:700;padding:.4mm 1mm;align-self:end}
.quad .sd{background:none;font-weight:700;writing-mode:vertical-rl;transform:rotate(180deg);text-align:center;padding:0 .5mm}
.quad .warn{color:var(--arrest);font-weight:650}
.legend{display:flex;flex-wrap:wrap;gap:1.4mm 4mm;margin-top:1mm}
.legend span{display:flex;align-items:center;gap:1.2mm}
.dot{display:inline-block;width:1.8mm;height:1.8mm;border-radius:50%;background:var(--ac);flex:none}
.index{margin-top:.4mm}
.ix{margin:0 0 1.1mm;display:grid;grid-template-columns:30mm 1fr;line-height:1.45}
.ix span{display:flex;flex-wrap:wrap;gap:.3mm 2.6mm}
.ix span a{display:inline-flex;align-items:center;gap:1mm;white-space:nowrap}
.ix a.h{font-weight:700;color:var(--cc);text-transform:uppercase;letter-spacing:.04em;font-size:6.6pt}
.disc{color:var(--mu);font-size:6.4pt;margin-top:2mm}

/* pathways */
.pways{break-after:page}
.pways h2{font:700 17pt/1 'Barlow Condensed',sans-serif;text-transform:uppercase;border-bottom:1.6pt solid var(--tx);padding-bottom:1.6mm;margin-bottom:3.5mm}
.pwg{columns:2;column-gap:5mm}
.pw{break-inside:avoid;border:0.6pt solid var(--ln);border-top:2pt solid var(--arrest);border-radius:1.6mm;padding:2.4mm 3mm;margin-bottom:3.6mm}
.pw h3{font-size:8.4pt;margin-bottom:1.6mm}
.pw ol{margin:0;padding:0;list-style:none;counter-reset:p}
.pw li{counter-increment:p;display:grid;grid-template-columns:4.4mm 1fr;margin-bottom:1.3mm}
.pw li::before{content:counter(p);font:700 9pt/1.05 'Barlow Condensed',sans-serif;color:var(--arrest)}
.pw li b{grid-column:2}.pw li span{grid-column:2;color:var(--mu)}
.pw:nth-child(3),.pw:nth-child(4){border-top-color:var(--c-block)}
.pw:nth-child(5){border-top-color:var(--c-acs)}

/* cards */
h2.cat{font:700 15pt/1 'Barlow Condensed',sans-serif;text-transform:uppercase;color:var(--cc);display:flex;align-items:baseline;gap:3mm;
  border-bottom:1.4pt solid var(--cc);padding-bottom:1.2mm;margin:1mm 0 2.6mm;break-after:avoid}
h2.cat small{font:500 6.8pt Inter,sans-serif;color:var(--mu);text-transform:none;letter-spacing:0}
.card{break-inside:avoid;margin-bottom:2.9mm;padding-left:2.4mm;border-left:1.3pt solid var(--cc)}
.card header{display:flex;align-items:center;gap:2mm;margin-bottom:.4mm}
.card h3{font-size:9.6pt}
.acu{font-size:6.2pt;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--ac);border:0.6pt solid var(--ac);border-radius:4mm;padding:.15mm 1.6mm}
.dl{font-size:6.4pt;font-weight:600;color:var(--mu);margin-left:auto}
.sum{margin:0 0 1.2mm;color:var(--mu)}
svg.strip{display:block;margin-bottom:1.4mm;border-radius:.8mm}
.gmin{stroke:#f6c9c4;stroke-width:.09;fill:none}
.gmaj{stroke:#ea9b92;stroke-width:.2;fill:none}
.tr{fill:none;stroke:#111;stroke-width:.3;stroke-linejoin:round;stroke-linecap:round}
.cal{fill:none;stroke:#111;stroke-width:.25}
.sep{stroke:#111;stroke-width:.3}
.ll{font:700 2.5px Inter,sans-serif;fill:#111}
.ll.fo{fill:var(--arrest);font-size:2.9px}
.info{display:grid;grid-template-columns:1.05fr 1fr 1.15fr;gap:3.2mm}
.info h4{font-size:6.3pt;text-transform:uppercase;letter-spacing:.06em;color:var(--cc);margin-bottom:.6mm}
.info table{border-collapse:collapse;width:100%}
.info th{font-weight:650;text-align:left;vertical-align:top;padding:0 1.6mm .35mm 0;white-space:nowrap}
.info td{padding:0 0 .35mm;vertical-align:top}
.info ul{margin:0;padding:0;list-style:none}
.info li{position:relative;padding-left:2.4mm;margin-bottom:.45mm}
.info li::before{content:'';position:absolute;left:.3mm;top:1.05mm;width:1mm;height:1mm;border-radius:50%;background:var(--cc)}
.act li span{color:var(--mu)}
.act li.k-crit::before{background:var(--arrest);border-radius:.2mm}
.act li.k-first::before{background:var(--stable)}
.act li.k-next::before{background:var(--monitor)}
.act li.k-info::before{background:#94a3b8}
.act li.k-avoid::before{content:'✕';background:none;width:auto;height:auto;top:-.1mm;left:0;color:var(--arrest);font-weight:800;font-size:6.6pt}
.act li.k-avoid b{color:var(--arrest)}
.alike{margin-top:1.1mm;color:var(--mu);display:flex;flex-wrap:wrap;gap:.4mm 3mm;font-size:6.6pt}
.alike>b{color:var(--tx);font-weight:650}
.alike a{color:var(--tx);font-weight:600;border-bottom:0.4pt solid var(--ln)}
.alike .al::before{content:'≠ ';color:var(--cc);font-weight:700}

/* MI territory map */
.mi{display:grid;grid-template-columns:104mm 1fr;gap:4.5mm;align-items:center;break-inside:avoid;margin-bottom:4mm;
  border:0.6pt solid var(--ln);border-radius:2mm;padding:2.6mm}
.mi img{width:100%;display:block;border-radius:1.4mm}
.mi h3{font-size:10pt;margin-bottom:.6mm}
table.terr{width:100%;border-collapse:collapse;margin:1mm 0 2mm}
.terr th{text-align:left;font-size:6.2pt;text-transform:uppercase;letter-spacing:.05em;color:var(--mu);padding:0 0 .8mm;border-bottom:0.6pt solid var(--ln)}
.terr td{padding:.9mm 1.5mm .9mm 0;border-bottom:0.5pt solid var(--ln);vertical-align:top}
.terr td:first-child{font-weight:650;white-space:nowrap}
.terr td:nth-child(2){font-weight:600}
.terr i{display:inline-block;width:2mm;height:2mm;border-radius:.5mm;margin-right:1.3mm;vertical-align:-.2mm;background:var(--tc)}
.t-inf{--tc:#8fd9a8}.t-sep{--tc:#7cb8f0}.t-ant{--tc:#f6c54d}.t-lat{--tc:#f2a5ad}.t-pos{--tc:#b9a5e8}.t-rv{--tc:#9fb3c8}
.mi-notes{margin:0;padding:0;list-style:none}
.mi-notes li{margin-bottom:1mm;color:var(--mu)}
.mi-notes b{color:var(--tx)}

/* back page */
.back{break-before:page;min-height:262mm;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
.back .logo-big{width:62mm;height:62mm;margin-bottom:5mm}
.back h2{font:700 24pt/1 'Barlow Condensed',sans-serif;text-transform:uppercase;letter-spacing:.005em}
.back .lead{max-width:120mm;color:var(--mu);font-size:9pt;margin:2.5mm 0 8mm}
.qrs{display:flex;gap:14mm}
.qrc{display:flex;flex-direction:column;align-items:center;border:0.6pt solid var(--ln);border-radius:3mm;padding:5mm 6mm 4mm}
.qrc svg.qr{width:40mm;height:40mm;margin-bottom:3mm}
.qrc b{font-size:9.5pt}
.qrc span{color:var(--mu);font-size:7.5pt;margin-top:.6mm}
.back .links{display:flex;gap:6mm;margin:8mm 0 2mm;font-size:9pt;font-weight:600}
.back .links a{border-bottom:0.8pt solid var(--arrest)}
.back .disc{max-width:130mm}
</style></head><body>
${defs()}
<section class="cover">
  <div class="brand"><img class="logo" src="${LOGO}" alt="SmartCare"><div class="bt"><h1>ECG Rhythm <em>Reference</em></h1>
    <p>Recognise it, then act on it. ${n} rhythms, each on a strip with criteria, features to look for and management.</p></div>
    <div class="meta"><b>SmartCare</b>AHA 2020 + 2025 update<br>${new Date().toISOString().slice(0, 7)}</div></div>
  <div class="hero">${rhythmStrip(record('nsr', 12), 'nsr', 'II')}</div>
  <div class="cols">
    <div>
      <div class="box"><h3><i>READ</i>Every strip in seven steps</h3><ol class="steps">
        <li><div><b>Patient first</b><span>Pulse, perfusion, symptoms. Treat the patient, not the monitor; an organised rhythm can still be PEA.</span></div></li>
        <li><div><b>Rate</b><span>Regular: 300 ÷ large boxes (or 1500 ÷ small boxes) between R waves. Irregular: QRS count in 6 s × 10.</span></div></li>
        <li><div><b>Rhythm</b><span>Regular, regularly irregular (grouped beats, bigeminy) or irregularly irregular.</span></div></li>
        <li><div><b>P waves</b><span>Present? Upright in II? One before every QRS, and a QRS after every P?</span></div></li>
        <li><div><b>PR interval</b><span>120–200 ms. Constant, lengthening, short, or no relationship to the QRS?</span></div></li>
        <li><div><b>QRS width</b><span>Narrow (&lt; 120 ms): supraventricular. Wide (≥ 120 ms): ventricular, bundle-branch block, paced, pre-excited or hyperkalaemia.</span></div></li>
        <li><div><b>ST, T and QT</b><span>ST elevation or depression and its territory; T-wave shape; QTc (&gt; 500 ms carries a high risk of torsades).</span></div></li>
      </ol></div>
      <div class="box"><h3><i>SORT</i>Fast tachycardia triage</h3>
        <div class="quad">
          <div class="hd"></div><div class="hd">Regular</div><div class="hd">Irregular</div>
          <div class="sd">Narrow</div><div>Sinus tachycardia · SVT (AVNRT/AVRT) · flutter 2:1 · atrial tachycardia</div><div>AF · flutter with variable block · MAT · frequent PACs</div>
          <div class="sd">Wide</div><div><span class="warn">VT until proven otherwise</span> · SVT with aberrancy · paced · hyperkalaemia</div><div>AF with BBB · <span class="warn">pre-excited AF (no AV-nodal blockers)</span> · polymorphic VT / torsades</div>
        </div></div>
    </div>
    <div>
      <div class="box"><h3><i>NORM</i>Normal values</h3><table class="nv">
        <tr><th>Paper</th><td class="v">25 mm/s · 10 mm/mV</td><td>1 small box 40 ms / 0.1 mV; 1 large box 200 ms / 0.5 mV</td></tr>
        <tr><th>Heart rate</th><td class="v">60–100 /min</td><td>&lt; 60 bradycardia · &gt; 100 tachycardia</td></tr>
        <tr><th>P wave</th><td class="v">&lt; 120 ms</td><td>&lt; 2.5 mm tall in II; upright in I, II, aVF</td></tr>
        <tr><th>PR interval</th><td class="v">120–200 ms</td><td>Short: pre-excitation or junctional. Long: AV block</td></tr>
        <tr><th>QRS</th><td class="v">&lt; 120 ms</td><td>110–119 ms: incomplete block</td></tr>
        <tr><th>QTc</th><td class="v">≤ 450 / 460 ms</td><td>Men / women. &gt; 500 ms: high risk. Fridericia QT ÷ ∛RR</td></tr>
        <tr><th>Axis</th><td class="v">−30° to +90°</td><td>LAD &lt; −30° · RAD &gt; +90°</td></tr>
        <tr><th>ST segment</th><td class="v">Isoelectric</td><td>STEMI: ≥ 1 mm in 2 contiguous leads (V2–V3: ≥ 2 mm men ≥ 40 y, ≥ 2.5 mm men &lt; 40 y, ≥ 1.5 mm women)</td></tr>
      </table></div>
      <div class="box"><h3><i>KEY</i>How each card reads</h3>
        <div class="legend">${Object.entries(L.ACUITY).map(([k, a]) => `<span class="a-${k}"><i class="dot"></i><b>${esc(a.label)}</b>&nbsp;${esc(a.desc)}</span>`).join('')}</div>
        <div class="legend" style="margin-top:2mm">
          <span><i class="dot" style="--ac:var(--arrest);border-radius:.3mm"></i>Do now</span>
          <span><i class="dot" style="--ac:var(--stable)"></i>First line</span>
          <span><i class="dot" style="--ac:var(--monitor)"></i>Escalate</span>
          <span style="color:var(--arrest);font-weight:700">✕ Avoid</span></div>
        <p class="disc" style="margin-top:2mm">Rhythm strips: 7 s at true scale (25 mm/s, 10 mm/mV) with a 1 mV calibration pulse. ACS, conduction and electrolyte patterns are shown as 12-leads at 74% scale; the lead to study is named on the card.</p></div>
    </div>
  </div>
  <div class="box"><h3><i>FIND</i>Contents</h3><div class="index">${indexHtml()}</div></div>
  <p class="disc">A study aid, not a substitute for clinical judgement. Management follows the AHA Guidelines for CPR and ECC (2020) and the 2025 update. Local protocols and medical direction always take precedence. Strips are generated by the SmartCare ECG engine.</p>
</section>
<section class="pways"><h2>Algorithms at a glance</h2><div class="pwg">${pathwaysHtml()}</div></section>
${cards}
${backHtml}
</body></html>`;

(async () => {
  const { chromium } = require('@playwright/test');
  const htmlPath = path.join(path.dirname(OUT_PDF), 'ecg-reference.html');
  fs.mkdirSync(path.dirname(OUT_PDF), { recursive: true });
  fs.writeFileSync(htmlPath, html);
  const browser = await chromium.launch(process.env.PLAYWRIGHT_CHROMIUM_PATH
    ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH } : {});
  try {
    const page = await browser.newPage();
    await page.goto('file://' + htmlPath, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const foot = `<div style="width:100%;font:6.5px Inter,Arial,sans-serif;color:#7b8594;padding:0 12mm;display:flex;justify-content:space-between;align-items:center">
      <span style="display:flex;align-items:center;gap:5px"><img src="${LOGO_SMALL}" style="width:16px;height:16px">SmartCare · ECG Rhythm Reference · a study aid — local protocols take precedence</span>
      <span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`;
    await page.pdf({ path: OUT_PDF, format: 'A4', printBackground: true, preferCSSPageSize: true,
      displayHeaderFooter: true, headerTemplate: '<span></span>', footerTemplate: foot, tagged: true, outline: true });
  } finally {
    await browser.close();
    if (!KEEP_HTML) fs.unlinkSync(htmlPath);
  }
  console.log(`wrote ${path.relative(ROOT, OUT_PDF)}: ${n} rhythms, ${(fs.statSync(OUT_PDF).size / 1e6).toFixed(1)} MB`);
})().catch(e => { console.error(e); process.exit(1); });
