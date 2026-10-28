/**
 * SmartCare Clinical ECG Engine v4.0
 * Real-time ECG synthesis for rhythm and 12-lead teaching.
 *
 * KEY IDEA #1 — the heart is a moving dipole; a lead is where you look from.
 *   Every wave (P, QRS, ST, T, U) is a sum of a few smooth kernels — Gaussians,
 *   asymmetric Gaussians and plateaus — and each kernel carries a 3-D vector in
 *   patient coordinates: x = patient's left, y = inferior (towards the feet),
 *   z = anterior. A lead's voltage is the dot product of that vector with the
 *   lead's axis. All 16 leads (12 standard + V4R + V7–V9) therefore come from
 *   ONE source: Einthoven's law (II = I + III) and Goldberger's relations hold
 *   exactly, and reciprocal ST change, R-wave progression and axis deviation are
 *   not drawn — they fall out of the geometry, as they do in a patient.
 *
 * KEY IDEA #2 — a rhythm is a schedule of electrical events, not a formula of t.
 *   Each rhythm is a small scheduler that places atrial events (P waves, flutter
 *   waves), ventricular events (QRS–ST–T–U) and pacing spikes on a timeline a
 *   fraction of a second ahead of the sweep. AV dissociation, dropped beats,
 *   compensatory pauses, Wenckebach timing, competitive pacing and live rate
 *   changes all come from the same machinery — and every interval is known
 *   exactly, so the page can annotate and measure without guessing.
 *
 * KEY IDEA #3 — intervals follow physiology.
 *   QT is recomputed for every beat from the PRECEDING R–R interval with
 *   Fridericia's relation (QT = QTc · RR^⅓). PR shortens a little with rate,
 *   sinus rhythm carries respiratory sinus arrhythmia, and stroke output (the
 *   pleth) depends on diastolic filling time. That is why the T wave crowds the
 *   next P in tachycardia, why AF has a pulse deficit and why a PVC barely
 *   perfuses.
 *
 * KEY IDEA #4 — artefact enters at the electrodes.
 *   Tremor, mains hum, respiratory wander, CPR and a loose electrode are injected
 *   as electrode potentials (RA, LA, LL, C1…) and only then combined into leads.
 *   A trembling left arm therefore shows in I, III and aVL but barely in V2.
 *
 * Amplitudes are millivolts; time is absolute seconds and must increase
 * monotonically between calls on one simulator. Educational use only — this is
 * not a diagnostic device and not a substitute for a real monitor.
 */
const ECGEngine = (() => {
  'use strict';

  const VERSION = '4.0.0';
  const FS = 500;                       // native sample rate (Hz)
  const TAU = Math.PI * 2;
  const LOOK = 0.9;                     // schedule this far ahead of the sweep (s)
  const KEEP = 14;                      // keep this much history for annotation (s)
  const MAX_SPAN = 1.9;                 // longest an event can influence the trace (s)

  // ── MATH PRIMITIVES ──────────────────────────────────────────
  const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
  const lerp = (a, b, w) => a + (b - a) * w;

  // Deterministic 32-bit integer hash → [0,1). Keyed on beat indices so a given
  // beat always looks the same: "irregular rhythm", not "noisy line".
  const hash01 = (n, salt) => {
    let h = ((n | 0) * 0x27d4eb2d) ^ (((salt | 0) + 0x165667b1) * 0x9e3779b1);
    h ^= h << 13; h ^= h >>> 17; h ^= h << 5;
    return (h >>> 0) / 4294967296;
  };
  // Smooth value noise in [-1,1] — slowly wandering, never jumpy.
  const vnoise = (x, salt) => {
    const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f);
    return 2 * lerp(hash01(i, salt), hash01(i + 1, salt), u) - 1;
  };
  function rngFrom(seed) {
    let s = (seed >>> 0) || 0x9e3779b9;
    return () => { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return (s >>> 0) / 4294967296; };
  }
  const norm = v => { const m = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / m, v[1] / m, v[2] / m]; };
  const vscale = (v, k) => [v[0] * k, v[1] * k, v[2] * k];
  const vadd = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];

  // ── LEADS ────────────────────────────────────────────────────
  // Limb leads use Einthoven-consistent axes (I + III = II exactly; the
  // augmented leads are the true Goldberger combinations, magnitude √3/2).
  // Precordial leads are horizontal-plane directions with a gain: chest leads
  // sit close to the heart and record larger voltages than the limb leads.
  const LEADS = ['I', 'II', 'III', 'aVR', 'aVL', 'aVF',
    'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V4R', 'V7', 'V8', 'V9'];
  const NL = LEADS.length;
  const LEAD_INDEX = {};
  LEADS.forEach((l, i) => { LEAD_INDEX[l] = i; });
  const STANDARD_12 = LEADS.slice(0, 12);

  const pre = (deg, gain, y) => {
    const r = deg * Math.PI / 180;
    return [gain * Math.cos(r), gain * y, gain * Math.sin(r)];
  };
  const AXES = [
    [1, 0, 0], [0.5, 0.866, 0], [-0.5, 0.866, 0],
    [-0.75, -0.433, 0], [0.75, -0.433, 0], [0, 0.866, 0],
    pre(118, 1.05, 0.00), pre(96, 1.45, 0.00), pre(76, 1.55, 0.06),
    pre(56, 1.55, 0.12), pre(30, 1.30, 0.18), pre(4, 1.05, 0.22),
    pre(152, 0.95, 0.05), pre(-18, 0.80, 0.16), pre(-46, 0.70, 0.10), pre(-72, 0.62, 0.05),
  ];
  const LX = new Float32Array(NL), LY = new Float32Array(NL), LZ = new Float32Array(NL);
  AXES.forEach((a, i) => { LX[i] = a[0]; LY[i] = a[1]; LZ[i] = a[2]; });

  function project(v) {
    const g = new Float32Array(NL);
    for (let i = 0; i < NL; i++) g[i] = v[0] * LX[i] + v[1] * LY[i] + v[2] * LZ[i];
    return g;
  }
  // Non-dipolar ("local") contribution seen by a few leads only — used where a
  // finding is genuinely confined to adjacent electrodes (Brugada in V1–V2).
  function localGains(map) {
    const g = new Float32Array(NL);
    Object.keys(map).forEach(k => { g[LEAD_INDEX[k]] = map[k]; });
    return g;
  }

  // ── KERNELS ──────────────────────────────────────────────────
  const KG = 0, KAG = 1, KPL = 2;
  // c.p0..p4 are ABSOLUTE times/widths; c.a is the beat amplitude scalar.
  function kval(c, t) {
    if (c.k === KG) {
      const z = (t - c.p0) / c.p1;
      return z > 6 || z < -6 ? 0 : Math.exp(-0.5 * z * z);
    }
    if (c.k === KAG) {
      const d = t - c.p0, z = d / (d < 0 ? c.p1 : c.p2);
      return z > 6 || z < -6 ? 0 : Math.exp(-0.5 * z * z);
    }
    // Plateau: logistic rise at p0 (width p2), logistic fall at p1 (width p3),
    // linear slope p4 across the plateau — enough for horizontal, up- and
    // down-sloping ST deviation and for the PR-segment shift of pericarditis.
    if (t < c.p0 - 10 * c.p2 || t > c.p1 + 10 * c.p3) return 0;
    const r = 1 / (1 + Math.exp(-(t - c.p0) / c.p2));
    const f = 1 / (1 + Math.exp((t - c.p1) / c.p3));
    const u = clamp((t - c.p0) / (c.p1 - c.p0), 0, 1);
    return r * f * (1 + c.p4 * u);
  }
  function comp(k, p0, p1, p2, v, tag, a, gains) {
    return { k, p0, p1, p2: p2 || 0, p3: 0, p4: 0, v: v || null,
      g: gains || project(v), tag, a: a == null ? 1 : a };
  }
  function plateau(start, end, rise, fall, slope, v, tag, gains) {
    const c = comp(KPL, start, end, rise, v, tag, 1, gains);
    c.p3 = fall; c.p4 = slope;
    return c;
  }
  // Area of a kernel at unit amplitude (for axis = net QRS area per axis).
  const karea = c => (c.k === KG ? c.p1 * 2.5066 : c.k === KAG ? (c.p1 + c.p2) * 1.2533 : 0);

  // ── P-WAVE MORPHOLOGY ────────────────────────────────────────
  // [centre (s from P onset), sigma, vector]. Sinus P = right atrium (early,
  // anterior-inferior) then left atrium (later, leftward-posterior): upright in
  // II, biphasic in V1, inverted in aVR.
  const PWAVES = {
    sinus: [[0.030, 0.016, [0.025, 0.085, 0.055]], [0.066, 0.019, [0.085, 0.060, -0.060]]],
    lae:   [[0.030, 0.016, [0.025, 0.080, 0.050]], [0.080, 0.022, [0.105, 0.055, -0.120]]],
    low:   [[0.038, 0.020, [0.020, -0.110, 0.030]]],          // low atrial / retrograde
    left:  [[0.040, 0.021, [-0.075, 0.070, -0.060]]],         // left atrial focus
    high:  [[0.034, 0.018, [0.070, 0.095, 0.045]]],
    paced: [[0.046, 0.026, [0.060, 0.080, 0.020]]],
    mat0:  [[0.034, 0.018, [0.040, 0.120, 0.040]]],
    mat1:  [[0.036, 0.019, [0.100, 0.020, -0.050]]],
    mat2:  [[0.034, 0.017, [-0.040, 0.090, 0.070]]],
    mat3:  [[0.040, 0.021, [0.035, -0.070, 0.030]]],
  };
  const P_SPAN = 0.13;
  const P_GAIN = 1.3;

  // ── QRS MORPHOLOGY TEMPLATES ─────────────────────────────────
  // comps: [kind, t (s from QRS onset), sigma (rise), sigmaFall, x, y, z]
  // The normal QRS follows the vectorcardiographic loop: septum (rightward,
  // anterior) → apex (anterior, inferior) → LV free wall (leftward, posterior)
  // → base (posterior, superior). That rotation is what gives rS in V1, RS
  // transition in V3 and qR in V6.
  const T_NORMAL = [0.200, 0.235, 0.215];
  const MORPHS = {
    narrow: { dur: 0.098, rpk: 0.042, comps: [
      [KG, 0.012, 0.0062, 0, -0.14, 0.05, 0.17],
      [KG, 0.030, 0.0090, 0, 0.20, 0.42, 0.36],
      [KG, 0.047, 0.0105, 0, 0.86, 0.60, -0.42],
      [KG, 0.071, 0.0100, 0, -0.12, -0.22, -0.26]], tv: T_NORMAL },
    // Right bundle branch block: normal start, then slow late RV activation
    // directed rightward-anterior → rSR′ in V1, broad S in I and V6.
    rbbb: { dur: 0.136, rpk: 0.042, comps: [
      [KG, 0.011, 0.0055, 0, -0.15, 0.05, 0.18],
      [KG, 0.028, 0.0075, 0, 0.22, 0.46, 0.30],
      [KG, 0.044, 0.0090, 0, 0.95, 0.66, -0.44],
      [KG, 0.098, 0.0170, 0, -0.40, 0.04, 0.66]], tv: [0.26, 0.22, -0.12] },
    // Left bundle branch block: septum depolarised right-to-left (no septal q),
    // slow LV activation leftward-posterior in two humps → broad notched R in
    // I/V6, deep QS in V1–V3.
    lbbb: { dur: 0.150, rpk: 0.104, comps: [
      [KG, 0.022, 0.0120, 0, 0.20, 0.08, -0.16],
      [KG, 0.060, 0.0200, 0, 0.60, 0.30, -0.56],
      [KG, 0.106, 0.0200, 0, 0.70, 0.22, -0.74]], tv: [-0.28, -0.10, 0.34] },
    // Left anterior fascicular block: inferior-right initial forces, then the
    // main LV vector swings superior-left → qR in I/aVL, rS in II/III/aVF.
    lafb: { dur: 0.104, rpk: 0.046, comps: [
      [KG, 0.012, 0.0060, 0, -0.06, 0.24, 0.15],
      [KG, 0.028, 0.0080, 0, 0.24, 0.10, 0.36],
      [KG, 0.046, 0.0105, 0, 0.82, -0.98, -0.40],
      [KG, 0.070, 0.0095, 0, 0.05, -0.36, -0.26]], tv: [0.24, 0.10, 0.22] },
    // Wolff–Parkinson–White: a slurred delta wave from the accessory pathway
    // fuses with normal AV-nodal activation that arrives later.
    wpw: { dur: 0.124, rpk: 0.072, comps: [
      [KAG, 0.034, 0.020, 0.012, 0.26, 0.40, 0.30],
      [KG, 0.056, 0.0080, 0, 0.18, 0.40, 0.32],
      [KG, 0.071, 0.0090, 0, 0.90, 0.62, -0.40],
      [KG, 0.093, 0.0090, 0, -0.16, -0.26, -0.28]], tv: [0.10, 0.12, 0.10] },
    // Fully pre-excited complex (AF down an accessory pathway).
    preex: { dur: 0.160, rpk: 0.072, comps: [
      [KAG, 0.050, 0.030, 0.018, 0.50, 0.80, 0.55],
      [KG, 0.100, 0.022, 0, 0.55, 0.40, -0.10],
      [KG, 0.140, 0.016, 0, -0.10, -0.18, -0.20]] },
    // Monomorphic VT from the LV: wide, tall in II, AV dissociated.
    vt: { dur: 0.176, rpk: 0.086, comps: [
      [KG, 0.030, 0.025, 0, -0.15, 0.25, 0.55],
      [KG, 0.086, 0.036, 0, 0.55, 1.35, 0.35],
      [KG, 0.150, 0.030, 0, 0.25, -0.45, -0.65]] },
    // PVC from the RV outflow tract: LBBB-like, inferior axis.
    pvc: { dur: 0.160, rpk: 0.080, comps: [
      [KG, 0.030, 0.020, 0, 0.10, 0.35, -0.30],
      [KG, 0.080, 0.030, 0, 0.35, 1.25, -0.85],
      [KG, 0.135, 0.025, 0, 0.10, 0.10, -0.40]] },
    // PVC from the LV: RBBB-like, superior axis (second focus of multiform PVCs).
    pvcL: { dur: 0.156, rpk: 0.078, comps: [
      [KG, 0.030, 0.020, 0, -0.20, -0.30, 0.50],
      [KG, 0.078, 0.030, 0, -0.50, -1.00, 0.90],
      [KG, 0.138, 0.025, 0, 0.20, 0.30, -0.20]] },
    // Right-ventricular apical pacing: LBBB-like with a superior axis.
    paced: { dur: 0.168, rpk: 0.078, comps: [
      [KG, 0.026, 0.020, 0, 0.20, -0.30, -0.25],
      [KG, 0.078, 0.032, 0, 0.55, -1.05, -0.80],
      [KG, 0.140, 0.028, 0, 0.30, -0.35, -0.50]] },
    // Ventricular escape / idioventricular focus.
    escape: { dur: 0.170, rpk: 0.088, comps: [
      [KG, 0.032, 0.026, 0, -0.10, 0.20, 0.45],
      [KG, 0.088, 0.038, 0, 0.60, 1.05, -0.10],
      [KG, 0.150, 0.030, 0, 0.20, -0.30, -0.50]] },
  };

  // Template → per-beat component list, with optional per-beat transforms.
  function morphComps(m, onset, amp, opt) {
    const o = opt || {};
    const w = o.widen || 1, out = [];
    for (let i = 0; i < m.comps.length; i++) {
      const c = m.comps[i];
      let v = [c[4], c[5], c[6]];
      if (o.scale && o.scale[i] != null) v = vscale(v, o.scale[i]);
      if (o.rot) v = o.rot(v, i);
      const cc = comp(c[0], onset + c[1] * w, c[2] * w, c[3] * w, v, 'QRS', amp);
      out.push(cc);
    }
    return out;
  }
  // QRS area vector (net deflection per axis) — used for discordant T and axis.
  function areaVector(comps) {
    const s = [0, 0, 0];
    comps.forEach(c => {
      if (c.tag !== 'QRS' || !c.v) return;
      const A = karea(c) * c.a;
      s[0] += c.v[0] * A; s[1] += c.v[1] * A; s[2] += c.v[2] * A;
    });
    return s;
  }
  // Rotation about an arbitrary unit axis (Rodrigues) — polymorphic VT.
  function rotator(axis, ang) {
    const k = norm(axis), c = Math.cos(ang), s = Math.sin(ang);
    return v => {
      const d = k[0] * v[0] + k[1] * v[1] + k[2] * v[2];
      const cr = [k[1] * v[2] - k[2] * v[1], k[2] * v[0] - k[0] * v[2], k[0] * v[1] - k[1] * v[0]];
      return [v[0] * c + cr[0] * s + k[0] * d * (1 - c),
        v[1] * c + cr[1] * s + k[1] * d * (1 - c),
        v[2] * c + cr[2] * s + k[2] * d * (1 - c)];
    };
  }

  // ── INJURY / ISCHAEMIA TERRITORIES ───────────────────────────
  // The ST injury vector points TOWARDS the injured myocardium: leads that face
  // it record elevation, leads opposite record reciprocal depression.
  const INJURY = {
    inferior:   norm([-0.15, 1.00, -0.10]),
    inferiorRV: norm([-0.45, 0.90, 0.30]),
    anterior:   norm([0.10, -0.12, 1.00]),
    septal:     norm([-0.35, 0.00, 1.00]),
    lateral:    norm([0.85, -0.45, 0.15]),
    extensive:  norm([0.45, -0.35, 0.85]),
    posterior:  norm([0.15, 0.25, -1.00]),
    subendo:    norm([-0.70, -0.55, 0.05]),
    pericard:   norm([0.45, 0.75, 0.35]),
  };
  // Scale a unit injury vector so its largest standard-lead projection = mV.
  function stVector(u, mv, leadSet) {
    const g = project(u);
    const idx = leadSet || [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let mx = 0;
    idx.forEach(i => { if (Math.abs(g[i]) > mx) mx = Math.abs(g[i]); });
    return vscale(u, mv / (mx || 1));
  }

  // ═══════════════════════════════════════════════════════════
  //  EVENT BUILDERS
  // ═══════════════════════════════════════════════════════════
  function addEvent(s, e) {
    const ev = s.events;
    ev.push(e);
    let i = ev.length - 1;
    while (i > 0 && ev[i - 1].t > e.t) { ev[i] = ev[i - 1]; i--; }
    ev[i] = e;
    if (i < s.cur) s.cur = i;
    return e;
  }

  // Atrial depolarisation. o: { kind, amp, conducted, blocked, note, prSeg }
  function addP(s, t, o) {
    const opt = o || {};
    const kind = opt.kind || 'sinus';
    const amp = opt.amp == null ? 1 : opt.amp;
    const comps = [];
    if (amp > 0.01 && PWAVES[kind]) {
      PWAVES[kind].forEach(p => comps.push(comp(KG, t + p[0], p[1], 0, p[2], 'P', amp * P_GAIN)));
    }
    let t1 = t + P_SPAN;
    // PR-segment shift (pericarditis: PR depression in II, elevation in aVR).
    if (opt.prSeg && opt.pr) {
      comps.push(plateau(t + 0.10, t + opt.pr - 0.004, 0.008, 0.004, 0, opt.prSeg, 'PR'));
      t1 = t + opt.pr + 0.05;
    }
    return addEvent(s, { type: 'A', t, t0: t - 0.01, t1, comps, kind,
      conducted: !!opt.conducted, blocked: !!opt.blocked, dissociated: !!opt.dissociated,
      flutter: kind === 'F' });
  }

  // Ventricular complex. b (beat profile):
  //   morph, amp, widen, scale, rot, rr, qtc, qt, fixedT, tv, tAdd, tScale, tSym,
  //   tComps(fn), st (vector), stSlope, stDome, u, extra(fn), perf, label, pr,
  //   conducted, resp (respiratory amplitude modulation, default on)
  function addV(s, t, b) {
    const bp = b || {};
    const m = typeof bp.morph === 'object' ? bp.morph : MORPHS[bp.morph || 'narrow'];
    const w = bp.widen || 1;
    const resp = bp.resp === false ? 1 : 1 + 0.035 * Math.sin(TAU * 0.24 * t);
    const amp = (bp.amp == null ? 1 : bp.amp) * resp;
    const comps = morphComps(m, t, amp, { widen: w, scale: bp.scale, rot: bp.rot });
    const dur = m.dur * w;
    const J = t + dur;

    const rr = bp.rr != null ? bp.rr : (s.lastV != null ? t - s.lastV : 60 / (s.p.rate || 75));
    const rrc = clamp(rr, 0.24, 2.4);
    const qtc = bp.qtc || s.p.qtc || 0.41;
    let qt = bp.qt || qtc * Math.cbrt(rrc);
    qt = Math.max(qt, dur + 0.15);

    // T wave: asymmetric (slower rise, faster fall) unless peaked/symmetric.
    let sR, sF;
    if (bp.tSym) { sR = sF = bp.tSym; } else if (bp.fixedT) { sR = 0.058; sF = 0.042; }
    else { const k = qt / 0.38; sR = 0.058 * Math.pow(k, 0.9); sF = 0.042 * Math.pow(k, 0.8); }
    const tEnd = t + qt;
    let tPeak = tEnd - 2.5 * sF;
    if (tPeak < J + 0.035) tPeak = J + 0.035;

    let tv = bp.tv || m.tv;
    if (!tv) {
      // Wide complexes: secondary T wave discordant to the net QRS vector.
      const av = norm(areaVector(comps));
      tv = vscale(av, -0.36);
    }
    if (bp.tScale != null) tv = vscale(tv, bp.tScale);
    if (bp.tAdd) tv = vadd(tv, bp.tAdd);
    if (bp.tComps) bp.tComps(comps, { t, J, tPeak, tEnd, sR, sF, tv });
    else comps.push(comp(KAG, tPeak, sR, sF, tv, 'T'));

    if (bp.st) {
      comps.push(plateau(J - 0.002, tPeak, 0.004, sF * 0.85, bp.stSlope || 0, bp.st, 'ST'));
      if (bp.stDome) {
        comps.push(comp(KG, J + 0.55 * (tPeak - J), 0.30 * (tPeak - J), 0, vscale(bp.st, bp.stDome), 'ST'));
      }
    }
    const uv = bp.u || [0.010, 0.018, 0.026];
    comps.push(comp(KG, tEnd + 0.075, 0.032, 0, uv, 'U'));
    if (bp.extra) bp.extra(comps, { t, J, tPeak, tEnd, dur });

    // Stroke output: filling time (preceding RR) × the rhythm's mechanical factor.
    const fill = Math.pow(clamp((rr - 0.22) / 0.5, 0, 1.15), 0.8);
    const perfBase = bp.perf != null ? bp.perf : s.def.perf;
    const perf = perfBase > 0 ? Math.max(perfBase * fill, s.def.perfFloor || 0) : 0;

    const e = addEvent(s, { type: 'V', t, t0: t - 0.03, t1: tEnd + 0.22, comps,
      label: bp.label || 'N', qrs: dur, j: J, qt, tPeak, tEnd,
      rPeak: t + m.rpk * w, rr, pr: bp.pr == null ? null : bp.pr,
      perf, conducted: !!bp.conducted, wide: dur >= 0.12 });
    s.lastV = t;
    return e;
  }

  function addSpike(s, t, chamber, captured) {
    return addEvent(s, { type: 'S', t, t0: t, t1: t + 0.004, comps: [], chamber, captured: !!captured });
  }

  // ── SHARED TIMING HELPERS ────────────────────────────────────
  // Sinus P–P interval with respiratory sinus arrhythmia and small jitter.
  function sinusPP(s, t, n, rate) {
    const hr = rate || s.p.rate || 75;
    const base = 60 / hr;
    const rsa = s.p.rsa != null ? s.p.rsa : hr < 90 ? 0.035 : hr < 120 ? 0.016 : 0.006;
    const f = s.p.resp || 0.24;
    return base * (1 + rsa * Math.sin(TAU * f * t) + 0.02 * (hash01(n, s.seed) - 0.5));
  }
  const ratePR = (pr, hr) => Math.max(0.09, pr - 0.0004 * ((hr || 75) - 75));
  const regRR = (s, n, hr, jit) => (60 / hr) * (1 + (jit == null ? 0.006 : jit) * (hash01(n, s.seed + 7) - 0.5));

  // ═══════════════════════════════════════════════════════════
  //  BEAT PROFILES (morphology modifiers shared by many rhythms)
  // ═══════════════════════════════════════════════════════════
  // Acute coronary occlusion. stage: hyperacute | acute | evolving.
  function ischaemiaProfile(territory, mm, stage) {
    const u = INJURY[territory];
    const mv = (mm || 3) / 10;
    const b = {};
    if (stage === 'hyperacute') {
      b.st = stVector(u, mv * 0.3);
      b.tAdd = stVector(u, 0.55);
      b.stSlope = 0.6;
    } else if (stage === 'evolving') {
      b.st = stVector(u, mv * 0.4);
      b.stDome = 0.2;
      b.tAdd = stVector(u, -0.62);           // T inversion facing the infarct
      const q = vscale(u, -0.55);            // loss of forces toward the infarct
      b.extra = (c, x) => { c.push(comp(KG, x.t + 0.020, 0.011, 0, q, 'QRS')); };
    } else {
      b.st = stVector(u, mv);
      b.stDome = 0.25;
      b.stSlope = 0.15;
      b.tAdd = stVector(u, 0.22);
    }
    return b;
  }

  // ═══════════════════════════════════════════════════════════
  //  SCHEDULERS
  // ═══════════════════════════════════════════════════════════
  // Generic sinus-driven rhythm: one P per cycle, each conducted with a PR.
  // beat(s, n, pp) may return a beat profile; returning { drop:true } blocks
  // the beat, { pause:x } stretches the cycle.
  function sinusFamily(beat, pKind) {
    return (s, until) => {
      const st = s.st;
      if (st.nextP == null) { st.nextP = s.t0 + 0.08; st.n = 0; }
      while (st.nextP <= until) {
        const tP = st.nextP, n = ++st.n;
        const hr = s.p.rate || 75;
        let pp = sinusPP(s, tP, n, hr);
        const b = beat ? (beat(s, n, pp) || {}) : {};
        const pr = b.pr != null ? b.pr : ratePR(s.p.pr || 0.16, hr);
        if (b.pause) { st.nextP = tP + b.pause; continue; }
        addP(s, tP, { kind: b.pKind || pKind || 'sinus', amp: b.pAmp, conducted: !b.drop,
          blocked: !!b.drop, pr, prSeg: b.prSeg });
        if (!b.drop) addV(s, tP + pr, Object.assign({ conducted: true, pr }, b));
        st.nextP = tP + pp * (b.ppScale || 1);
      }
    };
  }

  // Ventricular-only regular train (SVT, VT, escape, paced …).
  function ventTrain(beat, opts) {
    const o = opts || {};
    return (s, until) => {
      const st = s.st;
      if (st.nextV == null) { st.nextV = s.t0 + 0.12; st.n = 0; }
      while (st.nextV <= until) {
        const t = st.nextV, n = ++st.n;
        const hr = s.p.rate || 75;
        const b = beat ? (beat(s, n, t) || {}) : {};
        if (o.spike) addSpike(s, t - 0.002, 'V', true);
        addV(s, t, b);
        st.nextV = t + (b.rr2 || regRR(s, n, hr, o.jit));
      }
    };
  }

  // Independent atrial train that does not conduct (AV dissociation, P-wave
  // asystole, VT with dissociated sinus activity).
  function dissociatedP(s, until, rate, amp) {
    const st = s.st;
    if (st.nextA == null) { st.nextA = s.t0 + 0.31; st.an = 0; }
    while (st.nextA <= until) {
      const t = st.nextA, n = ++st.an;
      addP(s, t, { kind: 'sinus', amp: amp == null ? 1 : amp, dissociated: true, blocked: true });
      st.nextA = t + sinusPP(s, t, n + 500, rate);
    }
  }

  const R = {};   // rhythm definitions

  // ── SINUS ────────────────────────────────────────────────────
  R.nsr = { defaults: { rate: 75 }, controls: [['rate', 60, 100]], sched: sinusFamily() };
  R.sbrady = { defaults: { rate: 46 }, controls: [['rate', 30, 59]], sched: sinusFamily() };
  R.stach = { defaults: { rate: 124 }, controls: [['rate', 101, 170]], sched: sinusFamily(() => ({ pAmp: 1.15 })) };
  R.sarrhythmia = { defaults: { rate: 68, rsa: 0.17, resp: 0.2 }, controls: [['rate', 50, 90]],
    sched: sinusFamily() };
  R.sinusPause = { defaults: { rate: 74 }, controls: [['rate', 55, 95]],
    sched: sinusFamily((s, n) => (n % 8 === 0 ? { pause: 2.45 } : null)) };

  // ── ATRIAL & SUPRAVENTRICULAR ────────────────────────────────
  // Premature atrial complexes: early, differently shaped P; the sinus node is
  // reset, so the pause is NOT fully compensatory.
  R.pac = { defaults: { rate: 76 }, controls: [['rate', 60, 100]],
    sched: (s, until) => {
      const st = s.st;
      if (st.nextP == null) { st.nextP = s.t0 + 0.08; st.n = 0; st.since = 0; }
      while (st.nextP <= until) {
        const tP = st.nextP, n = ++st.n, hr = s.p.rate;
        const pp = sinusPP(s, tP, n, hr), pr = ratePR(0.16, hr);
        addP(s, tP, { conducted: true, pr });
        addV(s, tP + pr, { conducted: true, pr });
        st.since++;
        if (st.since >= 3 && hash01(n, s.seed + 3) < 0.34) {
          st.since = 0;
          const tPac = tP + pp * 0.62, k = hash01(n, 9) < 0.5 ? 'low' : 'high';
          addP(s, tPac, { kind: k, conducted: true, pr: 0.14 });
          addV(s, tPac + 0.14, { conducted: true, pr: 0.14, label: 'A' });
          st.nextP = tPac + pp * 1.04;
        } else st.nextP = tP + pp;
      }
    } };

  R.mat = { defaults: { rate: 118 }, controls: [['rate', 100, 150]],
    sched: (s, until) => {
      const st = s.st;
      if (st.nextP == null) { st.nextP = s.t0 + 0.08; st.n = 0; }
      while (st.nextP <= until) {
        const tP = st.nextP, n = ++st.n;
        const f = Math.floor(hash01(n, s.seed + 11) * 4);
        const pr = [0.13, 0.16, 0.19, 0.12][f];
        addP(s, tP, { kind: 'mat' + f, amp: 0.8 + 0.5 * hash01(n, 5), conducted: true, pr });
        addV(s, tP + pr, { conducted: true, pr });
        st.nextP = tP + (60 / s.p.rate) * (0.72 + 0.56 * hash01(n, s.seed + 12));
      }
    } };

  // Atrial fibrillation: chaotic f waves (continuous) + irregularly irregular
  // ventricular response — R–R drawn from a broad distribution with no pattern.
  function afVent(beatFn) {
    return (s, until) => {
      const st = s.st;
      if (st.nextV == null) { st.nextV = s.t0 + 0.15; st.n = 0; }
      while (st.nextV <= until) {
        const t = st.nextV, n = ++st.n;
        const mean = 60 / s.p.rate;
        const u = hash01(n, s.seed + 21), u2 = hash01(n, s.seed + 22);
        const rr = Math.max(0.27, mean * (0.58 + 0.84 * (0.6 * u + 0.4 * u2)));
        addV(s, t, beatFn ? beatFn(s, n) : {});
        st.nextV = t + rr;
      }
    };
  }
  function afWaves(s, t, v, ampMul) {
    const a = (s.p.famp || 0.075) * (ampMul || 1);
    const m = 0.65 + 0.35 * vnoise(t * 0.7, 31);
    const w1 = Math.sin(TAU * 5.3 * t + 1.4 * Math.sin(TAU * 0.41 * t));
    const w2 = Math.sin(TAU * 6.6 * t + 1.1 * Math.sin(TAU * 0.29 * t + 2));
    const w3 = Math.sin(TAU * 7.7 * t + 0.9 * Math.sin(TAU * 0.53 * t + 4));
    const x = a * m * (0.15 * w1 + 0.20 * w3);
    const y = a * m * (0.50 * w1 + 0.35 * w2);
    const z = a * m * (0.60 * w2 + 0.70 * w3 + 0.30 * w1);
    v[0] += x; v[1] += y; v[2] += z;
  }
  // No atrial kick in AF: mechanical factor 0.75 — a pulse deficit appears only at fast rates.
  R.afib = { defaults: { rate: 84, famp: 0.10 }, controls: [['rate', 60, 110]], perf: 0.75, sched: afVent(),
    cont: (s, t, v) => afWaves(s, t, v) };
  R.afibRvr = { defaults: { rate: 148, famp: 0.085 }, controls: [['rate', 111, 190]], perf: 0.75, sched: afVent(),
    cont: (s, t, v) => afWaves(s, t, v) };

  // Atrial flutter (typical counter-clockwise macro-re-entry): a continuous
  // saw-tooth that is negative in II/III/aVF and positive in V1. Flutter waves
  // are scheduled as atrial events so conduction ratio and annotation are exact.
  const FL_PTS = [[0, 0.12], [0.34, 0.05], [0.60, -0.06], [0.78, -0.20], [0.90, 0.01], [1, 0.12]];
  function flutterShape(ph) {
    let i = 0;
    while (i < FL_PTS.length - 2 && ph > FL_PTS[i + 1][0]) i++;
    const a = FL_PTS[i], b = FL_PTS[i + 1];
    const u = (ph - a[0]) / (b[0] - a[0]);
    const pa = FL_PTS[(i - 1 + FL_PTS.length - 1) % (FL_PTS.length - 1)];
    const pb = FL_PTS[(i + 2) % (FL_PTS.length - 1)];
    // Catmull–Rom through the control points (periodic, smooth).
    const m0 = (b[1] - pa[1]) * 0.5, m1 = (pb[1] - a[1]) * 0.5;
    const u2 = u * u, u3 = u2 * u;
    return (2 * u3 - 3 * u2 + 1) * a[1] + (u3 - 2 * u2 + u) * m0 + (-2 * u3 + 3 * u2) * b[1] + (u3 - u2) * m1;
  }
  const FL_VEC = [0.06, 0.95, -0.50];
  const FL_NADIR = 0.78;
  function flutterSched(s, until) {
    const st = s.st;
    if (st.nextF == null) { st.nextF = s.t0 + 0.05; st.fn = 0; st.fList = []; st.since = 0; st.need = 0; }
    while (st.nextF <= until) {
      const t = st.nextF, n = ++st.fn;
      const per = 60 / (s.p.arate || 300);
      st.fList.push(t);
      if (st.fList.length > 64) st.fList.splice(0, st.fList.length - 64);
      if (!st.need) {
        const r = +s.p.ratio;
        st.need = r > 0 ? r : [2, 4, 3, 4, 2, 4, 4, 3][Math.floor(hash01(n, s.seed + 41) * 8)];
      }
      st.since++;
      const conducts = st.since >= st.need;
      addP(s, t, { kind: 'F', conducted: conducts, blocked: !conducts });
      if (conducts) {
        addV(s, t + 0.26, { conducted: true });
        st.since = 0; st.need = 0;
      }
      st.nextF = t + per;
    }
  }
  function flutterCont(s, t, v) {
    const L = s.st.fList;
    if (!L || L.length < 2) return;
    let i = L.length - 1;
    while (i > 0 && L[i] > t) i--;
    const a = L[i], per = i + 1 < L.length ? L[i + 1] - a : 60 / (s.p.arate || 300);
    let ph = FL_NADIR + (t - a) / per;
    ph -= Math.floor(ph);
    const f = flutterShape(ph) * (s.p.famp || 1);
    v[0] += f * FL_VEC[0]; v[1] += f * FL_VEC[1]; v[2] += f * FL_VEC[2];
  }
  R.aflutter = { defaults: { arate: 300, ratio: 4 }, controls: [['arate', 240, 340], ['ratio']],
    sched: flutterSched, cont: flutterCont, rateFrom: 'V' };
  R.aflutter21 = { defaults: { arate: 300, ratio: 2 }, controls: [['arate', 240, 340], ['ratio']], perfFloor: 0.3,
    sched: flutterSched, cont: flutterCont };

  // AVNRT: regular narrow tachycardia; retrograde P buried at the end of the
  // QRS (the "pseudo-r′" in V1 / pseudo-S in the inferior leads).
  const retroP = (c, x) => { c.push(comp(KG, x.t + 0.086, 0.011, 0, [0.0, -0.075, 0.055], 'P')); };
  R.svt = { defaults: { rate: 186 }, controls: [['rate', 150, 240]], perfFloor: 0.3,
    sched: ventTrain(() => ({ extra: retroP, amp: 0.92 }), { jit: 0.003 }) };

  // Paroxysmal SVT: sinus → PAC triggers re-entry → runs → stops abruptly.
  R.psvt = { defaults: { rate: 190, sinus: 82 }, controls: [['rate', 150, 230]], perfFloor: 0.3,
    sched: (s, until) => {
      const st = s.st;
      if (st.next == null) { st.next = s.t0 + 0.08; st.phase = 'sinus'; st.k = 0; st.n = 0; }
      while (st.next <= until) {
        const t = st.next, n = ++st.n;
        if (st.phase === 'sinus') {
          const pp = sinusPP(s, t, n, s.p.sinus);
          addP(s, t, { conducted: true, pr: 0.16 });
          addV(s, t + 0.16, { conducted: true, pr: 0.16 });
          if (++st.k >= 5) {
            const tPac = t + pp * 0.58;
            addP(s, tPac, { kind: 'low', conducted: true, pr: 0.20 });
            st.next = tPac + 0.20; st.phase = 'svt'; st.k = 0; st.runEnd = st.next + 9 + 3 * hash01(n, 3);
          } else st.next = t + pp;
        } else {
          addV(s, t, { extra: retroP, amp: 0.92, label: 'S' });
          if (t > st.runEnd) { st.phase = 'sinus'; st.k = 0; st.next = t + 1.55; }
          else st.next = t + regRR(s, n, s.p.rate, 0.003);
        }
      }
    } };

  // Pre-excited AF (AF conducting down an accessory pathway): fast, broad,
  // irregular, with beat-to-beat variation in the degree of pre-excitation.
  R.afWpw = { defaults: { rate: 205, famp: 0.05 }, controls: [['rate', 160, 260]],
    sched: (s, until) => {
      const st = s.st;
      if (st.nextV == null) { st.nextV = s.t0 + 0.15; st.n = 0; }
      while (st.nextV <= until) {
        const t = st.nextV, n = ++st.n;
        const mean = 60 / s.p.rate;
        const rr = Math.max(0.2, mean * (0.6 + 0.8 * hash01(n, s.seed + 51)));
        const d = 0.45 + 0.55 * hash01(n, s.seed + 52);
        if (d > 0.62) addV(s, t, { morph: 'preex', amp: 0.75 + 0.5 * d, widen: 0.85 + 0.25 * d, perf: 0.9 });
        else addV(s, t, { morph: 'wpw', amp: 0.95, perf: 0.9 });
        st.nextV = t + rr;
      }
    }, cont: (s, t, v) => afWaves(s, t, v) };

  // ── JUNCTIONAL ───────────────────────────────────────────────
  function junctionalSched(pOffset) {
    return (s, until) => {
      const st = s.st;
      if (st.nextV == null) { st.nextV = s.t0 + 0.2; st.n = 0; }
      while (st.nextV <= until) {
        const t = st.nextV, n = ++st.n;
        addP(s, t + pOffset, { kind: 'low', amp: 0.85 });
        addV(s, t, { label: 'J' });
        st.nextV = t + regRR(s, n, s.p.rate, 0.01);
      }
    };
  }
  R.junctional = { defaults: { rate: 48 }, controls: [['rate', 40, 60]], sched: junctionalSched(-0.07) };
  R.accelJunctional = { defaults: { rate: 82 }, controls: [['rate', 61, 100]], sched: junctionalSched(0.11) };

  // ── VENTRICULAR ──────────────────────────────────────────────
  // Sinus rhythm with PVCs. The sinus node keeps firing on schedule; a sinus P
  // that falls in the PVC's refractory period is not conducted — which is
  // exactly why the pause after a PVC is fully compensatory.
  function pvcSched(defEvery, multiform) {
    return (s, until) => {
      const st = s.st;
      if (st.nextP == null) { st.nextP = s.t0 + 0.08; st.n = 0; st.normals = 0; st.lastWasPvc = false; }
      while (st.nextP <= until) {
        const tP = st.nextP, n = ++st.n, hr = s.p.rate;
        const pp = sinusPP(s, tP, n, hr), pr = ratePR(0.16, hr);
        const tV = tP + pr;
        if (s.lastV != null && tV - s.lastV < 0.40) {
          addP(s, tP, { blocked: true, note: 'hidden' });
        } else {
          addP(s, tP, { conducted: true, pr });
          addV(s, tV, { conducted: true, pr });
          st.normals++;
          const every = s.p.every != null ? +s.p.every : defEvery;
          let fire;
          if (every > 0) fire = st.normals % (every - 1 || 1) === 0;
          else fire = !st.lastWasPvc && st.normals >= 3 && hash01(n, s.seed + 61) < 0.3;
          st.lastWasPvc = false;
          if (fire) {
            const m = multiform && hash01(n, s.seed + 62) < 0.5 ? 'pvcL' : 'pvc';
            addV(s, tV + Math.max(0.36, 0.56 * pp), { morph: m, label: 'V', perf: 0.35 });
            st.normals = every > 0 ? st.normals : 0;
            st.lastWasPvc = true;
          }
        }
        st.nextP = tP + pp;
      }
    };
  }
  R.pvc = { defaults: { rate: 76, every: 0 }, controls: [['rate', 60, 100], ['every']], sched: pvcSched(0) };
  R.bigeminy = { defaults: { rate: 78, every: 2 }, controls: [['rate', 60, 100], ['every']], sched: pvcSched(2) };
  R.multiformPvc = { defaults: { rate: 80, every: 0 }, controls: [['rate', 60, 100]], sched: pvcSched(0, true) };

  // Non-sustained VT: sinus rhythm interrupted by 3–8-beat runs.
  R.nsvt = { defaults: { rate: 82, vrate: 175 }, controls: [['rate', 60, 100], ['vrate', 130, 220]],
    sched: (s, until) => {
      const st = s.st;
      if (st.next == null) { st.next = s.t0 + 0.08; st.n = 0; st.k = 0; st.phase = 'sinus'; }
      while (st.next <= until) {
        const t = st.next, n = ++st.n;
        if (st.phase === 'sinus') {
          const pp = sinusPP(s, t, n, s.p.rate);
          if (s.lastV != null && t + 0.16 - s.lastV < 0.40) addP(s, t, { blocked: true });
          else { addP(s, t, { conducted: true, pr: 0.16 }); addV(s, t + 0.16, { conducted: true, pr: 0.16 }); }
          if (++st.k >= 6) {
            st.phase = 'run'; st.k = 0; st.left = 3 + Math.floor(hash01(n, 71) * 6);
            st.vNext = t + 0.16 + 0.38;
            st.pAfter = t + pp;
            st.next = st.vNext;
          } else st.next = t + pp;
        } else {
          addV(s, t, { morph: 'vt', amp: 0.95, label: 'V', perf: 0.3 });
          if (--st.left <= 0) {
            st.phase = 'sinus';
            let tp = st.pAfter;
            while (tp < t + 0.25) tp += 60 / s.p.rate;
            st.next = tp;
          } else st.next = t + regRR(s, n, s.p.vrate, 0.02);
        }
      }
    } };

  R.ivr = { defaults: { rate: 34 }, controls: [['rate', 20, 40]], perf: 0.85,
    sched: ventTrain(() => ({ morph: 'escape', label: 'E' }), { jit: 0.03 }) };
  R.aivr = { defaults: { rate: 74, arate: 66 }, controls: [['rate', 50, 110]], perf: 0.9,
    sched: (s, until) => {
      dissociatedP(s, until, s.p.arate, 0.9);
      ventTrain(() => ({ morph: 'escape', label: 'E' }), { jit: 0.015 })(s, until);
    } };

  R.vt = { defaults: { rate: 172, arate: 82 }, controls: [['rate', 120, 250]], perf: 0.85,
    sched: (s, until) => {
      dissociatedP(s, until, s.p.arate, 0.8);
      ventTrain(() => ({ morph: 'vt', label: 'V' }), { jit: 0.004 })(s, until);
    } };

  // Polymorphic VT with a normal QT: every complex has a different axis.
  R.pvt = { defaults: { rate: 222 }, controls: [['rate', 180, 260]], perf: 0,
    sched: ventTrain((s, n) => {
      // Axis drifts continuously beat to beat (with a random kick), so no two
      // consecutive complexes share a morphology — but without TdP's spindle.
      const ax = [0.35 + 0.3 * (hash01(n >> 2, 81) - 0.5), 0.2 * (hash01(n >> 2, 82) - 0.5), 1];
      return { morph: 'vt', rot: rotator(ax, 0.9 * n + 1.6 * (hash01(n, 84) - 0.5)),
        amp: 0.55 + 0.75 * hash01(n, 85), widen: 0.8 + 0.35 * hash01(n, 86), label: 'V' };
    }, { jit: 0.16 }) };

  // Torsades de pointes: long-QT sinus beats → PVC lands on the T wave
  // (R-on-T) → a run of oscillating complexes whose AXIS ROTATES, so in any one
  // lead the amplitude waxes and wanes and the polarity "twists" → runs stop
  // on their own, then recur. The twist is physical: a rotating dipole.
  R.torsades = { defaults: { rate: 56, qtc: 0.58 }, controls: [['qtc', 0.50, 0.66]], perf: 0.9,
    sched: (s, until) => {
      const st = s.st;
      if (st.next == null) { st.next = s.t0 + 0.08; st.n = 0; st.k = 0; st.phase = 'sinus'; st.runs = []; }
      while (st.next <= until) {
        const t = st.next, n = ++st.n;
        if (st.phase === 'sinus') {
          addP(s, t, { conducted: true, pr: 0.17 });
          const v = addV(s, t + 0.17, { conducted: true, pr: 0.17, qtc: s.p.qtc });
          if (++st.k >= 3) {
            const tr = v.tPeak - 0.02;                         // R-on-T
            addV(s, tr, { morph: 'pvc', label: 'V', perf: 0.2 });
            const start = tr + 0.20, dur = 7 + 4 * hash01(n, 91);
            st.runs.push([start, start + dur]);
            if (st.runs.length > 4) st.runs.shift();
            st.k = 0; st.phase = 'run'; st.next = start + dur + 1.1;
          } else st.next = t + 60 / s.p.rate;
        } else { st.phase = 'sinus'; st.next = t; }
      }
    },
    cont: (s, t, v) => {
      const runs = s.st.runs || [];
      for (let i = 0; i < runs.length; i++) {
        const r = runs[i];
        if (t < r[0] || t > r[1]) continue;
        const u = t - r[0], left = r[1] - t;
        const env = Math.min(1, u / 0.5) * Math.min(1, left / 0.6);
        const ph = TAU * (4.1 * u + 0.25 * Math.sin(TAU * 0.33 * u));
        const w = Math.sin(ph) + 0.32 * Math.sin(2 * ph - 0.6) + 0.12 * Math.sin(3 * ph);
        const psi = Math.PI * u / 2.1 + 0.4;
        const a = Math.cos(psi), b = Math.sin(psi), k = 0.72 * env * w;
        v[0] += k * (0.40 * a + 0.75 * b); v[1] += k * (0.95 * a - 0.35 * b); v[2] += k * (0.20 * a + 0.75 * b);
      }
    },
    contRate: (s, t) => ((s.st.runs || []).some(r => t >= r[0] && t <= r[1] + 0.5) ? 246 : null) };

  // ── ARREST ───────────────────────────────────────────────────
  function vfCont(s, t, v) {
    const st = s.st;
    if (!st.vf) st.vf = { ph: [0, 1.7, 3.1], last: t };
    const F = st.vf;
    let dt = t - F.last;
    if (!(dt > 0) || dt > 0.05) dt = 1 / FS;
    F.last = t;
    const base = [4.5, 5.6, 6.8];
    for (let k = 0; k < 3; k++) F.ph[k] += TAU * base[k] * (1 + 0.34 * vnoise(t * 1.4, 101 + k)) * dt;
    const amp = s.p.amp || 0.8;
    const env = amp * (0.72 + 0.28 * vnoise(t * 0.45, 111)) * (0.86 + 0.14 * Math.sin(TAU * 0.11 * t));
    const a = Math.sin(F.ph[0]) + 0.35 * Math.sin(2 * F.ph[0] + 0.7);
    const b = Math.sin(F.ph[1]) + 0.25 * Math.sin(2 * F.ph[1] + 1.9);
    const c = Math.sin(F.ph[2]);
    v[0] += env * (0.70 * a + 0.35 * c);
    v[1] += env * (0.40 * a + 0.80 * b);
    v[2] += env * (0.50 * b - 0.60 * c);
  }
  R.vfCoarse = { defaults: { amp: 0.85 }, controls: [['amp', 0.4, 1.4]], perf: 0, sched: () => {}, cont: vfCont };
  R.vfFine = { defaults: { amp: 0.17 }, controls: [['amp', 0.08, 0.35]], perf: 0, sched: () => {}, cont: vfCont };
  R.pulselessVt = { defaults: { rate: 188, arate: 0 }, controls: [['rate', 150, 250]], perf: 0,
    sched: ventTrain(() => ({ morph: 'vt', label: 'V' }), { jit: 0.004 }) };
  R.pea = { defaults: { rate: 54 }, controls: [['rate', 20, 100]], perf: 0,
    sched: sinusFamily(() => ({ amp: 0.75, widen: 1.18, tScale: 0.7 })) };
  R.asystole = { defaults: {}, controls: [], perf: 0, sched: () => {},
    cont: (s, t, v) => { const d = 0.012 * vnoise(t * 0.8, 121); v[1] += d; v[0] += 0.5 * d; } };
  R.pWaveAsystole = { defaults: { arate: 58 }, controls: [['arate', 40, 90]], perf: 0,
    sched: (s, until) => dissociatedP(s, until, s.p.arate, 1.05) };
  // Agonal: the dying heart — slow, very broad, low-amplitude ventricular beats.
  R.agonal = { defaults: { rate: 14 }, controls: [['rate', 6, 20]], perf: 0,
    sched: ventTrain((s, n) => ({ morph: 'escape', widen: 1.6 + 0.4 * hash01(n, 131),
      amp: 0.45 + 0.25 * hash01(n, 132), label: 'E' }), { jit: 0.35 }) };

  // ── AV BLOCK ─────────────────────────────────────────────────
  R.avb1 = { defaults: { rate: 70, pr: 0.29 }, controls: [['rate', 50, 100], ['pr', 0.21, 0.42]],
    sched: sinusFamily(s => ({ pr: s.p.pr })) };

  // Mobitz I: each PR increment is SMALLER than the last, so the R–R interval
  // SHORTENS through the group, and the pause is less than two P–P intervals.
  R.wenckebach = { defaults: { rate: 80, conduct: 4 }, controls: [['rate', 60, 100], ['conduct']],
    sched: (s, until) => {
      const st = s.st;
      if (st.nextP == null) { st.nextP = s.t0 + 0.08; st.n = 0; st.k = 0; }
      while (st.nextP <= until) {
        const tP = st.nextP, n = ++st.n, N = +s.p.conduct || 4;
        const pp = sinusPP(s, tP, n, s.p.rate);
        if (st.k >= N - 1) { addP(s, tP, { blocked: true }); st.k = 0; }
        else {
          let pr = 0.20;
          for (let i = 1; i <= st.k; i++) pr += 0.11 * Math.pow(0.5, i - 1);
          addP(s, tP, { conducted: true, pr });
          addV(s, tP + pr, { conducted: true, pr });
          st.k++;
        }
        st.nextP = tP + pp;
      }
    } };

  // Mobitz II: constant PR, then a P wave simply fails to conduct. Usually
  // infranodal, so the conducted QRS is often wide (here RBBB).
  function fixedBlock(every, morph, prv) {
    return (s, until) => {
      const st = s.st;
      if (st.nextP == null) { st.nextP = s.t0 + 0.08; st.n = 0; st.k = 0; }
      while (st.nextP <= until) {
        const tP = st.nextP, n = ++st.n;
        const N = every || +s.p.conduct || 4;
        const pp = sinusPP(s, tP, n, s.p.arate || s.p.rate);
        st.k++;
        const pr = prv || 0.18;
        if (every === 2 ? st.k % 2 === 0 : every === 3 ? st.k % 3 !== 1 : st.k >= N) {
          addP(s, tP, { blocked: true });
          if (every !== 2 && every !== 3) st.k = 0;
        } else {
          addP(s, tP, { conducted: true, pr });
          addV(s, tP + pr, { conducted: true, pr, morph });
        }
        st.nextP = tP + pp;
      }
    };
  }
  R.mobitz2 = { defaults: { rate: 78, conduct: 4 }, controls: [['rate', 60, 100], ['conduct']],
    sched: fixedBlock(0, 'rbbb', 0.18) };
  R.avb2to1 = { defaults: { arate: 88 }, controls: [['arate', 60, 110]], sched: fixedBlock(2, 'narrow', 0.20) };
  R.highGrade = { defaults: { arate: 92 }, controls: [['arate', 70, 120]], sched: fixedBlock(3, 'narrow', 0.20) };

  // Third degree: atria and ventricles fire independently.
  R.chb = { defaults: { arate: 82, rate: 34, escape: 'ventricular' },
    controls: [['arate', 60, 110], ['rate', 20, 55], ['escape']], perf: 0.85,
    sched: (s, until) => {
      dissociatedP(s, until, s.p.arate, 1);
      const junc = s.p.escape === 'junctional';
      ventTrain(() => (junc ? { label: 'J' } : { morph: 'escape', label: 'E' }), { jit: 0.012 })(s, until);
    } };

  // ── CONDUCTION ───────────────────────────────────────────────
  R.rbbb = { defaults: { rate: 74 }, controls: [['rate', 50, 110]], sched: sinusFamily(() => ({ morph: 'rbbb' })) };
  R.lbbb = { defaults: { rate: 76 }, controls: [['rate', 50, 110]],
    sched: sinusFamily(() => ({ morph: 'lbbb', st: [-0.06, -0.02, 0.10], stSlope: 0.3 })) };
  R.lafb = { defaults: { rate: 72 }, controls: [['rate', 50, 110]], sched: sinusFamily(() => ({ morph: 'lafb' })) };
  R.wpw = { defaults: { rate: 74 }, controls: [['rate', 50, 110]],
    sched: sinusFamily(() => ({ morph: 'wpw', pr: 0.10 })) };

  // ── PACEMAKER ────────────────────────────────────────────────
  R.pacedV = { defaults: { rate: 70 }, controls: [['rate', 50, 100]], perf: 0.85,
    sched: ventTrain(() => ({ morph: 'paced', label: 'P' }), { spike: true, jit: 0 }) };
  R.pacedDDD = { defaults: { rate: 70, av: 0.16 }, controls: [['rate', 50, 100]], perf: 0.95,
    sched: (s, until) => {
      const st = s.st;
      if (st.next == null) { st.next = s.t0 + 0.08; }
      while (st.next <= until) {
        const t = st.next, av = s.p.av || 0.16;
        addSpike(s, t, 'A', true);
        addP(s, t + 0.003, { kind: 'paced', conducted: true, pr: av });
        addSpike(s, t + av, 'V', true);
        addV(s, t + av + 0.002, { morph: 'paced', label: 'P', pr: av });
        st.next = t + 60 / s.p.rate;
      }
    } };
  R.failCapture = { defaults: { rate: 72 }, controls: [['rate', 50, 100]], perf: 0.85,
    sched: (s, until) => {
      const st = s.st;
      if (st.next == null) { st.next = s.t0 + 0.08; st.n = 0; }
      while (st.next <= until) {
        const t = st.next, n = ++st.n;
        const cap = !(n % 3 === 0 || (n % 7 === 0));
        addSpike(s, t, 'V', cap);
        if (cap) addV(s, t + 0.002, { morph: 'paced', label: 'P' });
        st.next = t + 60 / s.p.rate;
      }
    } };
  // Undersensing: the pacemaker ignores the patient's own beats and fires on
  // its fixed timer — spikes march through the rhythm, some on T waves.
  R.failSense = { defaults: { rate: 78, prate: 64 }, controls: [['rate', 60, 100]], perf: 0.9,
    sched: (s, until) => {
      const st = s.st;
      if (st.nextP == null) { st.nextP = s.t0 + 0.08; st.nextS = s.t0 + 0.47; st.n = 0; st.m = 0; }
      while (Math.min(st.nextP + 0.16, st.nextS) <= until + 0.16) {
        if (st.nextP + 0.16 <= st.nextS) {
          const tP = st.nextP, n = ++st.n, tV = tP + 0.16;
          if (s.lastV != null && tV - s.lastV < 0.36) addP(s, tP, { blocked: true });
          else { addP(s, tP, { conducted: true, pr: 0.16 }); addV(s, tV, { conducted: true, pr: 0.16 }); }
          st.nextP = tP + sinusPP(s, tP, n, s.p.rate);
        } else {
          const t = st.nextS;
          const cap = s.lastV == null || t - s.lastV > 0.36;
          addSpike(s, t, 'V', cap);
          if (cap) addV(s, t + 0.002, { morph: 'paced', label: 'P' });
          st.m++;
          st.nextS = t + 60 / (s.p.prate || 64);
        }
      }
    } };

  // ── ACUTE CORONARY SYNDROMES ─────────────────────────────────
  function stemi(territory, rate, extraFn) {
    return { defaults: { rate, st: 3, stage: 'acute' },
      controls: [['rate', 45, 130], ['st', 1, 6], ['stage']],
      sched: sinusFamily(s => {
        const b = ischaemiaProfile(territory, s.p.st, s.p.stage);
        return extraFn ? extraFn(s, b) : b;
      }) };
  }
  R.stemiInf = stemi('inferior', 62);
  R.stemiInfRv = stemi('inferiorRV', 56);
  R.stemiAnt = stemi('anterior', 88);
  R.stemiSept = stemi('septal', 84);
  R.stemiLat = stemi('lateral', 82);
  R.stemiExt = stemi('extensive', 104);
  // Posterior MI: the injury faces V7–V9, so V1–V3 show the mirror image —
  // ST depression with upright T, and (once evolved) tall R waves.
  R.stemiPost = stemi('posterior', 78, (s, b) => {
    if (s.p.stage === 'acute') { b.stDome = 0.1; b.tAdd = stVector(INJURY.posterior, -0.20); }
    return b;
  });
  R.stemiPost.defaults.st = 2.5;

  // Diffuse subendocardial ischaemia: widespread ST depression with ST
  // elevation in aVR (and V1) — left main / three-vessel pattern.
  R.nstemi = { defaults: { rate: 96, st: 2.5 }, controls: [['rate', 60, 130], ['st', 0.5, 4]],
    sched: sinusFamily(s => ({ st: stVector(INJURY.subendo, s.p.st / 10), stSlope: 0.2,
      tAdd: stVector(INJURY.subendo, 0.06) })) };

  // Wellens: reperfused proximal LAD — T-wave changes in V2–V3, ST near
  // baseline. Type A = biphasic, type B = deep symmetric inversion.
  R.wellens = { defaults: { rate: 72, wtype: 'B' }, controls: [['rate', 50, 100], ['wtype']],
    sched: sinusFamily(s => {
      const deep = [-0.06, 0.02, -0.62];
      if (s.p.wtype === 'A') {
        return { tComps: (c, x) => {
          c.push(comp(KAG, x.tPeak - 0.06, 0.05, 0.03, T_NORMAL, 'T'));
          c.push(comp(KAG, x.tPeak + 0.03, 0.03, 0.05, [-0.04, -0.02, -0.38], 'T'));
        } };
      }
      return { tv: vadd(T_NORMAL, deep), tSym: 0.05 };
    }) };

  // de Winter: upsloping ST depression at the J point running into tall,
  // symmetric precordial T waves — an anterior STEMI equivalent.
  R.deWinter = { defaults: { rate: 84 }, controls: [['rate', 55, 120]],
    sched: sinusFamily(() => ({ st: stVector(norm([-0.25, -0.05, -0.95]), 0.30), stSlope: -0.85,
      tAdd: [0.18, 0.02, 0.62], tSym: 0.045 })) };

  R.pericarditis = { defaults: { rate: 102 }, controls: [['rate', 70, 130]],
    sched: sinusFamily(() => ({ st: stVector(INJURY.pericard, 0.14), stSlope: 0.3,
      prSeg: vscale(norm([0.25, 0.85, 0.30]), -0.10), tAdd: [0.02, 0.03, 0.02] })) };

  // ── ELECTROLYTES, DRUGS & OTHER ──────────────────────────────
  // Hyperkalaemia, graded by serum K⁺: peaked T → P flattening and PR
  // prolongation → QRS widening → sine-wave pre-arrest pattern.
  R.hyperK = { defaults: { rate: 72, k: 7.0 }, controls: [['k', 5.5, 9.5]],
    sched: sinusFamily(s => {
      const k = +s.p.k;
      const peak = clamp(k - 5.2, 0, 3.6);
      const wide = clamp((k - 6.6) / 2.4, 0, 1.25);
      const pAmp = clamp(1 - (k - 6.8) / 1.4, 0, 1);
      return { tScale: 1 + 0.62 * peak, tSym: Math.max(0.024, 0.040 - 0.006 * peak), qtc: 0.38,
        widen: 1 + 0.95 * wide, amp: 1 - 0.18 * wide, pAmp, pr: 0.16 + 0.035 * clamp(k - 6.5, 0, 2.6) };
    }) };
  R.hypoK = { defaults: { rate: 78 }, controls: [['rate', 55, 110]],
    sched: sinusFamily(() => ({ tScale: 0.32, u: [0.05, 0.085, 0.12], qtc: 0.42, pAmp: 1.2,
      st: [-0.03, -0.05, -0.04], stSlope: 0.6 })) };
  R.hypoCa = { defaults: { rate: 74 }, controls: [['rate', 55, 110]],
    sched: sinusFamily(() => ({ qtc: 0.53, fixedT: true })) };
  R.hyperCa = { defaults: { rate: 74 }, controls: [['rate', 55, 110]],
    sched: sinusFamily(() => ({ qtc: 0.33, fixedT: true, tScale: 1.05 })) };
  R.digoxin = { defaults: { rate: 66 }, controls: [['rate', 45, 100]],
    sched: sinusFamily(() => ({ pr: 0.21, qtc: 0.36, tScale: 0.45,
      extra: (c, x) => { c.push(comp(KG, x.J + 0.045, 0.045, 0, [-0.11, -0.10, 0.02], 'ST')); } })) };
  R.longQt = { defaults: { rate: 64, qtc: 0.56 }, controls: [['rate', 45, 100], ['qtc', 0.46, 0.66]],
    sched: sinusFamily(s => ({ qtc: s.p.qtc, tScale: 0.85 })) };
  R.brugada = { defaults: { rate: 72 }, controls: [['rate', 50, 110]],
    sched: sinusFamily(() => ({
      extra: (c, x) => {
        const gST = localGains({ V1: 1, V2: 0.85, V3: 0.18 });
        const gT = localGains({ V1: 1, V2: 0.75, V3: 0.10 });
        c.push(comp(KG, x.J - 0.008, 0.010, 0, null, 'QRS', 0.22, gST));
        c.push(plateau(x.J - 0.006, x.tPeak + 0.02, 0.004, 0.04, -0.62, null, 'ST', gST));
        c[c.length - 1].a = 0.40;
        c.push(comp(KAG, x.tPeak + 0.025, 0.045, 0.045, null, 'T', -0.36, gT));
      } })) };
  // LVH: big LV voltages, lateral "strain" (down-sloping ST depression with
  // asymmetric T inversion) and left atrial enlargement.
  R.lvh = { defaults: { rate: 72 }, controls: [['rate', 50, 110]],
    sched: sinusFamily(() => {
      const lat = norm([1.0, 0.55, -0.55]);
      return { pKind: 'lae', scale: [1.2, 1.1, 2.25, 1.4], st: vscale(lat, -0.10), stSlope: 1.4,
        tv: vadd(vscale(lat, -0.32), [0, 0, 0.12]) };
    }, 'lae') };
  // Acute PE: sinus tachycardia, S1Q3T3, RV strain T inversion, incomplete RBBB.
  R.pe = { defaults: { rate: 114 }, controls: [['rate', 90, 140]],
    sched: sinusFamily(() => ({
      tAdd: [0.0, -0.10, -0.34],
      extra: (c, x) => {
        c.push(comp(KG, x.t + 0.012, 0.007, 0, [0.06, -0.30, 0.0], 'QRS'));        // Q in III
        c.push(comp(KG, x.t + 0.084, 0.012, 0, [-0.55, -0.05, 0.30], 'QRS'));      // S in I, r′ V1
      } })) };
  // Hypothermia: bradycardia, long intervals, Osborn (J) waves, shivering.
  R.hypothermia = { defaults: { rate: 42 }, controls: [['rate', 30, 60]], art: { emg: 0.45 },
    sched: sinusFamily(() => ({ pr: 0.22, qtc: 0.49,
      extra: (c, x) => { c.push(comp(KAG, x.J + 0.004, 0.010, 0.024, [0.32, 0.34, 0.05], 'J')); } })) };
  // Electrical alternans (large pericardial effusion): low voltage, the heart
  // swings in the fluid so QRS amplitude and axis alternate beat to beat.
  R.alternans = { defaults: { rate: 112 }, controls: [['rate', 90, 140]], perf: 0.75,
    sched: sinusFamily((s, n) => (n % 2
      ? { amp: 0.50, tScale: 0.6, pAmp: 0.8 }
      : { amp: 0.30, tScale: 0.55, pAmp: 0.8, rot: rotator([0, 0, 1], 0.35) })) };

  // Shared defaults: perfusion and SpO₂ for each rhythm.
  const SPO2 = { pe: 89, afibRvr: 95, afWpw: 93, vt: 92, mat: 90, alternans: 94, hypothermia: 93 };
  Object.keys(R).forEach(k => {
    const d = R[k];
    if (d.perf == null) d.perf = 1;
    d.spo2 = d.perf === 0 ? null : (SPO2[k] || 98);
  });

  const CONTROLS = {
    rate:  { label: 'Heart rate', unit: 'bpm', step: 1 },
    vrate: { label: 'VT run rate', unit: 'bpm', step: 1 },
    arate: { label: 'Atrial rate', unit: '/min', step: 1 },
    ratio: { label: 'AV conduction', type: 'select', options: [[2, '2:1'], [3, '3:1'], [4, '4:1'], [0, 'Variable']] },
    conduct: { label: 'Conduction', type: 'select', options: [[3, '3:2'], [4, '4:3'], [5, '5:4']] },
    pr:    { label: 'PR interval', unit: 'ms', step: 0.01, scale: 1000 },
    qtc:   { label: 'QTc', unit: 'ms', step: 0.01, scale: 1000 },
    st:    { label: 'ST deviation', unit: 'mm', step: 0.5 },
    stage: { label: 'Stage', type: 'select', options: [['hyperacute', 'Hyperacute'], ['acute', 'Acute injury'], ['evolving', 'Evolving (Q waves)']] },
    k:     { label: 'Serum K⁺', unit: 'mmol/L', step: 0.1 },
    amp:   { label: 'Amplitude', unit: 'mV', step: 0.01 },
    every: { label: 'PVC frequency', type: 'select', options: [[0, 'Occasional'], [2, 'Bigeminy'], [3, 'Trigeminy'], [4, 'Quadrigeminy']] },
    escape: { label: 'Escape focus', type: 'select', options: [['ventricular', 'Ventricular (wide)'], ['junctional', 'Junctional (narrow)']] },
    wtype: { label: 'Wellens pattern', type: 'select', options: [['A', 'Type A — biphasic'], ['B', 'Type B — deep inversion']] },
  };

  // ═══════════════════════════════════════════════════════════
  //  ELECTRODE ARTEFACTS
  // ═══════════════════════════════════════════════════════════
  // Electrodes: RA LA LL C1…C6 C4R C7 C8 C9 (13). Lead = electrode combination.
  const NE = 13;
  const E_WANDER = [0.35, 0.40, 0.90, 1.0, 1.0, 0.95, 0.9, 0.85, 0.8, 1.0, 0.75, 0.7, 0.65];
  const E_EMG = [1.0, 1.0, 0.45, 0.22, 0.22, 0.24, 0.26, 0.28, 0.30, 0.22, 0.32, 0.32, 0.30];
  const E_MAINS = [0.9, 1.25, 1.0, 0.45, 0.40, 0.40, 0.42, 0.45, 0.50, 0.42, 0.55, 0.55, 0.55];
  const E_CPR = [0.25, 0.30, 0.55, 1.0, 1.1, 1.15, 1.1, 0.95, 0.8, 0.9, 0.55, 0.45, 0.4];

  function electrodeArtefacts(s, t, out) {
    const A = s.art;
    const e = s.elec;
    for (let i = 0; i < NE; i++) e[i] = 0;
    let any = false;
    const emg = Math.max(A.emg || 0, (s.def.art && s.def.art.emg) || 0);
    if (A.wander) {
      any = true;
      const r = Math.sin(TAU * 0.22 * t);
      for (let i = 0; i < NE; i++) {
        e[i] += E_WANDER[i] * (0.11 * Math.sin(TAU * 0.22 * t + 0.4 * i) + 0.05 * vnoise(t * 0.15, 140 + i)) + 0.02 * r;
      }
    }
    if (emg > 0) {
      any = true;
      const burst = 0.55 + 0.45 * vnoise(t * 0.7, 160);
      const n = s.emgState;
      for (let i = 0; i < NE; i++) {
        const w = s.rng() * 2 - 1;
        const hp = 0.79 * (n[i * 3] + w - n[i * 3 + 1]);     // ~20 Hz high-pass
        n[i * 3] = hp; n[i * 3 + 1] = w;
        n[i * 3 + 2] += 0.75 * (hp - n[i * 3 + 2]);            // ~110 Hz low-pass
        e[i] += E_EMG[i] * emg * 0.09 * burst * n[i * 3 + 2] * 2.2;
      }
    }
    if (A.mains) {
      any = true;
      const f = A.mainsHz || 50;
      for (let i = 0; i < NE; i++) e[i] += E_MAINS[i] * 0.075 * Math.sin(TAU * f * t + 0.6 * i);
    }
    if (A.cpr) {
      any = true;
      const ph = (t * (A.cprRate || 110) / 60) % 1;
      const c = ph < 0.48 ? Math.pow(Math.sin(Math.PI * ph / 0.48), 1.4) : -0.18 * Math.sin(Math.PI * (ph - 0.48) / 0.52);
      for (let i = 0; i < NE; i++) e[i] += E_CPR[i] * 1.05 * c * (i === 0 ? -0.6 : 1);
    }
    if (A.loose) {
      any = true;
      // Left-arm electrode intermittently losing contact: steps that recover,
      // and bursts of contact noise.
      const k = Math.floor(t / 2.3), u = t - k * 2.3;
      const h = hash01(k, s.seed + 171);
      let a = 0;
      if (h < 0.55) {
        const d = u - 0.4 - h;
        if (d > 0) a += (h < 0.3 ? 1.6 : -1.2) * Math.exp(-d / 0.28);
      } else if (u > 0.3 && u < 0.95) {
        a += 0.45 * Math.sin(TAU * 11 * t) * vnoise(t * 9, 172) + 0.35 * vnoise(t * 25, 173);
      }
      e[1] += a;
    }
    if (!any) return;
    const RA = e[0], LA = e[1], LL = e[2], W = (RA + LA + LL) / 3;
    out[0] += LA - RA; out[1] += LL - RA; out[2] += LL - LA;
    out[3] += RA - (LA + LL) / 2; out[4] += LA - (RA + LL) / 2; out[5] += LL - (RA + LA) / 2;
    for (let i = 0; i < 10; i++) out[6 + i] += e[3 + i] - W;
  }

  // ═══════════════════════════════════════════════════════════
  //  SIMULATOR
  // ═══════════════════════════════════════════════════════════
  function createSim(key, params, options) {
    const opt = options || {};
    const s = {
      key: null, def: null, p: {}, st: {}, events: [], cur: 0, horizon: 0, t0: 0,
      lastV: null, lastT: -1, seed: (opt.seed == null ? (Date.now() & 0xffff) : opt.seed) | 0,
      art: { wander: false, emg: 0, mains: false, mainsHz: 50, cpr: false, loose: false },
      elec: new Float32Array(NE), emgState: new Float32Array(NE * 3), vec: [0, 0, 0],
      pcur: 0,
    };
    s.rng = rngFrom(s.seed * 2654435761 + 12345);

    function setRhythm(k, prm, tNow) {
      const def = R[k] || R.nsr;
      const t = tNow == null ? Math.max(0, s.lastT) : tNow;
      s.key = R[k] ? k : 'nsr';
      s.def = def;
      s.p = Object.assign({}, def.defaults, prm || {});
      s.st = {};
      // Keep beats already under way; discard the old rhythm's future.
      s.events = s.events.filter(e => e.t <= t);
      s.cur = 0;
      s.t0 = t;
      s.horizon = t;
    }
    function setParams(prm) { Object.assign(s.p, prm); }
    function setArtefacts(a) { Object.assign(s.art, a); }

    function schedule(until) {
      if (until <= s.horizon) return;
      s.def.sched(s, until);
      s.horizon = until;
      // Garbage-collect old history.
      const keepFrom = s.lastT - KEEP;
      let drop = 0;
      while (drop < s.events.length && s.events[drop].t1 < keepFrom) drop++;
      if (drop > 32) { s.events.splice(0, drop); s.cur = Math.max(0, s.cur - drop); s.pcur = 0; }
    }

    // Fill out[0..NL) with every lead's voltage (mV) at time t. Returns a pacing
    // spike code for this sample: 0 none, 1 atrial, 2 ventricular.
    function sampleAt(t, out) {
      if (t < s.lastT) { s.cur = 0; s.pcur = 0; }
      const dt = t - s.lastT > 0 && t - s.lastT < 0.05 ? t - s.lastT : 1 / FS;
      s.lastT = t;
      if (t + LOOK > s.horizon) schedule(t + LOOK + 0.4);
      for (let i = 0; i < NL; i++) out[i] = 0;
      const ev = s.events;
      while (s.cur < ev.length && ev[s.cur].t < t - MAX_SPAN) s.cur++;
      let spike = 0;
      for (let i = s.cur; i < ev.length; i++) {
        const e = ev[i];
        if (e.t0 > t) { if (e.t > t + 0.2) break; continue; }
        if (e.t1 < t) continue;
        if (e.type === 'S') {
          if (e.t > t - dt && e.t <= t + 1e-9) spike = e.chamber === 'A' ? 1 : 2;
          continue;
        }
        const cs = e.comps;
        for (let j = 0; j < cs.length; j++) {
          const c = cs[j];
          const k = kval(c, t);
          if (k === 0) continue;
          const a = k * c.a, g = c.g;
          for (let l = 0; l < NL; l++) out[l] += a * g[l];
        }
      }
      if (s.def.cont) {
        const v = s.vec;
        v[0] = v[1] = v[2] = 0;
        s.def.cont(s, t, v);
        if (v[0] || v[1] || v[2]) for (let l = 0; l < NL; l++) out[l] += v[0] * LX[l] + v[1] * LY[l] + v[2] * LZ[l];
      }
      electrodeArtefacts(s, t, out);
      return spike;
    }

    // Noise-free beat evaluation (events only) for measurement.
    function evalEvents(t, out) {
      for (let i = 0; i < NL; i++) out[i] = 0;
      for (let i = 0; i < s.events.length; i++) {
        const e = s.events[i];
        if (e.t0 > t) break;
        if (e.t1 < t || e.type === 'S') continue;
        for (let j = 0; j < e.comps.length; j++) {
          const c = e.comps[j];
          const k = kval(c, t);
          if (k) { const a = k * c.a; for (let l = 0; l < NL; l++) out[l] += a * c.g[l]; }
        }
      }
      return out;
    }

    // Peripheral pulse (pleth), arbitrary units 0…~1.2.
    function plethAt(t) {
      const ev = s.events;
      if (t < s.lastPT) s.pcur = 0;
      s.lastPT = t;
      while (s.pcur < ev.length && ev[s.pcur].t < t - 2.2) s.pcur++;
      let v = 0;
      for (let i = s.pcur; i < ev.length; i++) {
        const e = ev[i];
        if (e.t > t) break;
        if (e.type !== 'V' || e.perf < 0.02) continue;
        const d = t - e.rPeak - 0.20;
        if (d < 0 || d > 1.5) continue;
        const up = 0.12;
        const y = d < up ? 0.5 - 0.5 * Math.cos(Math.PI * d / up)
          : Math.exp(-(d - up) * 2.7) + 0.10 * Math.exp(-0.5 * ((d - 0.30) / 0.035) ** 2);
        v += e.perf * y;
      }
      if (s.art.cpr) {
        const ph = (t * (s.art.cprRate || 110) / 60 + 0.8) % 1;
        v += 0.22 * Math.max(0, Math.sin(Math.PI * ph / 0.6));
      }
      return v;
    }

    function eventsIn(t0, t1) {
      const out = [];
      for (let i = 0; i < s.events.length; i++) {
        const e = s.events[i];
        if (e.t < t0) continue;
        if (e.t > t1) break;
        out.push(e);
      }
      return out;
    }

    // Measurements derived from the scheduled beats (what a monitor would
    // measure on a clean median beat), never from the rhythm's label.
    function stats(tNow) {
      const now = tNow == null ? s.lastT : tNow;
      const vs = [], ps = [], as = [];
      for (let i = 0; i < s.events.length; i++) {
        const e = s.events[i];
        if (e.t > now) break;
        if (e.t < now - 12 || e.t < s.t0) continue;   // ignore the previous rhythm's beats
        // A beat counts as a pulse only with adequate stroke output (≈ palpable).
        if (e.type === 'V' && e.rPeak <= now) { vs.push(e); if (e.perf >= 0.2) ps.push(e); }
        if (e.type === 'A' && e.t <= now) as.push(e);
      }
      // Rate averaged over the last ~8 s (as monitors do), falling back to the
      // last few beats for slow rhythms.
      const rateOf = (list, horizon) => {
        if (list.length < 2) return null;
        let tail = list.filter(e => e.rPeak >= now - 8);
        if (tail.length < 4) tail = list.slice(-Math.min(list.length, 4));
        const span = tail[tail.length - 1].rPeak - tail[0].rPeak;
        let rr = span / (tail.length - 1);
        const since = now - tail[tail.length - 1].rPeak;
        if (since > Math.max(horizon || 3, 1.8 * rr)) rr = since;
        return 60 / rr;
      };
      let hr = rateOf(vs, 3.2);
      if (vs.length && now - vs[vs.length - 1].rPeak > 6) hr = 0;
      if (s.def.contRate) { const cr = s.def.contRate(s, now); if (cr) hr = cr; }
      if (!vs.length && !hr) hr = null;
      const pulse = ps.length ? rateOf(ps, 3.2) : null;
      const pulseRate = ps.length && now - ps[ps.length - 1].rPeak < 4 ? pulse : 0;
      // R–R regularity
      const rrs = [];
      for (let i = Math.max(1, vs.length - 9); i < vs.length; i++) rrs.push(vs[i].rPeak - vs[i - 1].rPeak);
      let cv = null;
      if (rrs.length >= 3) {
        const m = rrs.reduce((a, b) => a + b, 0) / rrs.length;
        cv = Math.sqrt(rrs.reduce((a, b) => a + (b - m) * (b - m), 0) / rrs.length) / m;
      }
      let arate = null;
      if (as.length >= 3) {
        const tail = as.slice(-6);
        arate = 60 * (tail.length - 1) / (tail[tail.length - 1].t - tail[0].t);
      }
      // Most recent dominant beat for intervals.
      let beat = null;
      for (let i = vs.length - 1; i >= 0; i--) { if (vs[i].tEnd <= now + 0.0) { beat = vs[i]; break; } }
      if (!beat && vs.length) beat = vs[vs.length - 1];
      let lastConducted = null;
      for (let i = vs.length - 1; i >= 0; i--) { if (vs[i].pr != null) { lastConducted = vs[i]; break; } }
      const res = { hr, pulse: pulseRate, arate, cv, regular: cv == null ? null : cv < 0.07,
        pr: lastConducted ? lastConducted.pr : null, qrs: null, qt: null, qtcB: null, qtcF: null,
        axis: null, st: null, sokolow: null, beatLabel: beat ? beat.label : null };
      if (beat) {
        res.qrs = beat.qrs; res.qt = beat.qt;
        const rr = clamp(beat.rr, 0.25, 3);
        res.qtcB = beat.qt / Math.sqrt(rr);
        res.qtcF = beat.qt / Math.cbrt(rr);
        const av = areaVector(beat.comps);
        if (Math.hypot(av[0], av[1]) > 1e-5) res.axis = Math.round(Math.atan2(av[1], av[0]) * 180 / Math.PI);
        // ST deviation at J + 60 ms against the PR-segment baseline. At fast
        // rates the T wave starts earlier, so the point moves closer to J (as
        // monitors do) instead of measuring the T-wave upstroke.
        const base = new Float32Array(NL), jp = new Float32Array(NL);
        evalEvents(beat.t - 0.014, base);
        evalEvents(beat.j + Math.min(0.06, 0.32 * (beat.tPeak - beat.j)), jp);
        res.st = Array.from(jp, (v, i) => (v - base[i]) * 10);   // mm at 10 mm/mV
        // Sokolow–Lyon: S(V1) + max R(V5, V6)
        let sV1 = 0, rV5 = 0, rV6 = 0;
        const tmp = new Float32Array(NL);
        for (let tt = beat.t - 0.01; tt <= beat.j + 0.01; tt += 0.002) {
          evalEvents(tt, tmp);
          const b0 = base;
          sV1 = Math.min(sV1, tmp[6] - b0[6]);
          rV5 = Math.max(rV5, tmp[10] - b0[10]);
          rV6 = Math.max(rV6, tmp[11] - b0[11]);
        }
        res.sokolow = (-sV1 + Math.max(rV5, rV6)) * 10;
      }
      return res;
    }

    setRhythm(key || 'nsr', params, 0);
    return {
      get key() { return s.key; },
      get params() { return Object.assign({}, s.p); },
      get perfusing() { return s.def.perf > 0; },
      get spo2() { return s.def.spo2; },
      setRhythm, setParams, setArtefacts, sampleAt, plethAt, eventsIn, stats, evalEvents,
      _s: s,
    };
  }

  // ═══════════════════════════════════════════════════════════
  //  MONITOR SIGNAL CHAIN (per-lead filters)
  // ═══════════════════════════════════════════════════════════
  // Real monitors band-limit the ECG. "Monitor" (0.5–40 Hz) gives a stable
  // baseline but can distort the ST segment; "Diagnostic" (0.05–150 Hz) is the
  // standard for 12-lead ST analysis. The notch removes 50/60 Hz hum.
  const FILTER_MODES = {
    monitor: { hp: 0.5, lp: 40, label: 'Monitor 0.5–40 Hz' },
    st: { hp: 0.05, lp: 40, label: 'ST 0.05–40 Hz' },
    diagnostic: { hp: 0.05, lp: 150, label: 'Diagnostic 0.05–150 Hz' },
  };
  function biquad(type, f, fs, q) {
    const w = TAU * f / fs, c = Math.cos(w), sn = Math.sin(w), al = sn / (2 * q);
    let b0, b1, b2;
    if (type === 'lp') { b0 = (1 - c) / 2; b1 = 1 - c; b2 = (1 - c) / 2; }
    else { b0 = 1; b1 = -2 * c; b2 = 1; }
    const a0 = 1 + al;
    return [b0 / a0, b1 / a0, b2 / a0, (-2 * c) / a0, (1 - al) / a0];
  }
  function createChain(n, fs, cfg) {
    const N = n || NL, F = fs || FS;
    const st = new Float64Array(N * 10);
    let hpA = 1, lpC = null, nC = null, on = true;
    function configure(c) {
      const m = FILTER_MODES[c.mode] || FILTER_MODES.monitor;
      on = c.mode !== 'off';
      const rc = 1 / (TAU * m.hp);
      hpA = rc / (rc + 1 / F);
      lpC = m.lp < F / 2.2 ? biquad('lp', m.lp, F, Math.SQRT1_2) : null;
      nC = c.notch ? biquad('notch', c.mainsHz || 50, F, 3.5) : null;
    }
    function reset() { st.fill(0); }
    configure(cfg || { mode: 'monitor' });
    function process(inp, out) {
      for (let i = 0; i < N; i++) {
        const o = i * 10;
        let x = inp[i];
        if (!on) { out[i] = x; continue; }
        // 1st-order high-pass
        const y = hpA * (st[o] + x - st[o + 1]);
        st[o] = y; st[o + 1] = x; x = y;
        if (lpC) {
          const c = lpC;
          const yy = c[0] * x + c[1] * st[o + 2] + c[2] * st[o + 3] - c[3] * st[o + 4] - c[4] * st[o + 5];
          st[o + 3] = st[o + 2]; st[o + 2] = x; st[o + 5] = st[o + 4]; st[o + 4] = yy; x = yy;
        }
        if (nC) {
          const c = nC;
          const yy = c[0] * x + c[1] * st[o + 6] + c[2] * st[o + 7] - c[3] * st[o + 8] - c[4] * st[o + 9];
          st[o + 7] = st[o + 6]; st[o + 6] = x; st[o + 9] = st[o + 8]; st[o + 8] = yy; x = yy;
        }
        out[i] = x;
      }
    }
    return { configure, process, reset };
  }

  // ═══════════════════════════════════════════════════════════
  //  LEGACY API (v3 contract): generateSample(t, key, state, noise) → lead II
  // ═══════════════════════════════════════════════════════════
  const LEGACY = { stach: 'stach', sbrady: 'sbrady', svt: 'svt', psvt: 'psvt', afib: 'afib',
    aflutter: 'aflutter', vtach: 'vt', torsades: 'torsades', coarseVf: 'vfCoarse', fineVf: 'vfFine',
    asystole: 'asystole', pea: 'pea', block1: 'avb1', block2_1: 'wenckebach', block2_2: 'mobitz2',
    block3: 'chb', stemi_inf: 'stemiInf', stemi_ant: 'stemiAnt', stemi_sep: 'stemiSept',
    stemi_lat: 'stemiLat', stemi_ext: 'stemiExt', stdepress: 'nstemi', tinvert: 'wellens', nsr: 'nsr' };
  const resolveKey = k => (R[k] ? k : LEGACY[k] || null);

  function createState() { return { sim: null, key: null, buf: new Float32Array(NL) }; }
  function generateSample(t, rhythmKey, state, addNoise) {
    const st = state || (generateSample._st = generateSample._st || createState());
    const key = resolveKey(rhythmKey) || 'nsr';
    if (!st.sim) st.sim = createSim(key, null, { seed: 7 });
    if (st.key !== key) { st.sim.setRhythm(key, key === 'aflutter' ? { ratio: 3 } : null, t); st.key = key; }
    st.sim.setArtefacts({ wander: true, emg: addNoise ? 0.6 : 0 });
    const sp = st.sim.sampleAt(t, st.buf);
    return st.buf[1] + (sp ? 2.2 : 0);
  }

  const G = (t, mu, sigma, amp) => amp * Math.exp(-0.5 * ((t - mu) / sigma) ** 2);
  const AG = (t, mu, sR, sF, amp) => { const d = t - mu; return amp * Math.exp(-0.5 * (d / (d < 0 ? sR : sF)) ** 2); };

  return {
    VERSION, FS, LEADS, STANDARD_12, LEAD_INDEX, NL,
    RHYTHMS: R, KEYS: Object.keys(R), CONTROLS, FILTER_MODES,
    createSim, createChain, resolveKey, leadAxis: l => AXES[LEAD_INDEX[l]].slice(),
    // legacy
    generateSample, createState, gauss: G, asymGauss: AG,
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ECGEngine;
}
