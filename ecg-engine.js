/**
 * DCAS Clinical ECG Engine v3.0
 * Real-time physics-based ECG synthesis
 * Based on ecg.md (physics model) + ecg-data.md (clinical data)
 *
 * KEY FIX: All wave positions are in SECONDS within the cardiac cycle.
 * RR interval = 60/HR seconds. Brady has long RR (wide spacing),
 * Tachy has short RR (narrow spacing). The engine is called per-sample.
 */
const ECGEngine = (() => {
  'use strict';

  // ── MATH PRIMITIVES (ecg.md §4) ─────────────────────────────
  // Symmetric Gaussian: models P wave, Q, R, S
  const G = (t, mu, sigma, amp) =>
    amp * Math.exp(-0.5 * ((t - mu) / sigma) ** 2);

  // Asymmetric Gaussian: models T wave (slow rise, faster fall)
  const AG = (t, mu, sR, sF, amp) => {
    const dt = t - mu;
    return amp * Math.exp(-0.5 * (dt / (dt < 0 ? sR : sF)) ** 2);
  };

  // ── STATE FACTORY ────────────────────────────────────────────
  // Each rhythm session needs fresh state for irregular rhythms
  function createState() {
    // XorShift PRNG for reproducible noise
    let s = (Date.now() ^ 0xdeadbeef) | 1;
    const prng = () => {
      s ^= s << 13; s ^= s >> 17; s ^= s << 5;
      return (s >>> 0) / 0x100000000;
    };
    return {
      prng,
      // AFib: next QRS beat times
      afibNext: 0.12 + Math.random() * 0.25,
      afibLast: -1,
      afibRng: prng,
    };
  }

  // ── SINUS COMPLEX BUILDER ─────────────────────────────────────
  // Assembles P + QRS + T in absolute seconds within one cardiac cycle.
  // ALL times are in seconds — this is the key to correct rate rendering.
  //
  //  Phase     Meaning (at HR=72, RR=0.833s)
  //  0.000     cycle start
  //  0.065     P wave center  (duration ~80ms)
  //  0.160     PR interval end → QRS onset
  //  0.176     R peak (narrow!)
  //  0.190     S nadir
  //  0.360     T wave center
  //  0.470     T wave end
  //  0.833     next cycle (long baseline 470-833ms for brady)
  //
  function sinusComplex(phase, opts = {}) {
    const {
      pr      = 0.160,  // PR interval in seconds
      wide    = false,  // wide QRS (VT/BBB morphology)
      stElev  = 0,      // ST elevation in mV (+ve = elevation)
      tInv    = false,  // inverted T wave
      pAmp    = 0.12,   // P wave amplitude mV
      rAmp    = 1.80,   // R wave amplitude mV
    } = opts;

    let v = 0;

    // ── P wave (atrial depolarization)
    if (pAmp > 0.005) {
      v += G(phase, 0.065, 0.025, pAmp);
    }

    // ── QRS complex (ventricular depolarization)
    // sigmas differ dramatically between narrow and wide QRS
    const qS = wide ? 0.028 : 0.009;  // Q sigma
    const rS = wide ? 0.042 : 0.008;  // R sigma — NARROW vs WIDE
    const sS = wide ? 0.032 : 0.010;  // S sigma
    const rOf = wide ? 0.042 : 0.016; // R offset from QRS onset
    const sOf = wide ? 0.085 : 0.030; // S offset from QRS onset
    const sA  = wide ? -0.72 : -0.34; // S amplitude

    v += G(phase, pr + 0.000, qS, -0.07);    // Q deflection
    v += G(phase, pr + rOf,   rS, rAmp);     // R peak (sharp!)
    v += G(phase, pr + sOf,   sS, sA);       // S deflection

    // ── ST segment modification
    if (stElev !== 0) {
      // Gentle plateau between QRS end and T wave start
      v += G(phase, pr + (wide ? 0.16 : 0.09), 0.06, stElev);
    }

    // ── T wave (ventricular repolarization)
    // Asymmetric: slow rise (sR) faster fall (sF) for realism
    const tC   = pr + (wide ? 0.28 : 0.20); // T center
    const tAmp = tInv ? -0.34 : 0.36;
    v += AG(phase, tC, 0.055, 0.085, tAmp);

    return v;
  }

  // ── MAIN SAMPLE GENERATOR ─────────────────────────────────────
  // t         : absolute time in seconds (continuously increasing)
  // rhythmKey : string key
  // state     : mutable state object from createState()
  // addNoise  : boolean for muscle artifact
  //
  // Returns: amplitude in millivolts
  //
  function generateSample(t, rhythmKey, state, addNoise) {
    let v = 0;

    // Subtle baseline wander (respiration ~15 breaths/min)
    const wander = 0.04 * Math.sin(2 * Math.PI * 0.25 * t);
    // Optional high-frequency noise (muscle artifact)
    const noise = addNoise ? (Math.random() - 0.5) * 0.06 : 0;

    switch (rhythmKey) {

      // ════════════════════════════════════════
      // SINUS RHYTHMS
      // ════════════════════════════════════════

      case 'nsr': {
        // HR=72 → RR=0.833s. Phase runs 0→0.833 then resets.
        // P at 0.065, QRS at 0.16, T ends ~0.47s, then 360ms flat baseline.
        v = sinusComplex(t % (60 / 72), { pr: 0.16, rAmp: 1.80 });
        break;
      }

      case 'stach': {
        // HR=120 → RR=0.500s. Same wave positions, but much shorter flat baseline.
        // T (ends ~0.47s) nearly touches next cycle (0.50s) → busy trace!
        v = sinusComplex(t % (60 / 120), { pr: 0.14, pAmp: 0.10, rAmp: 1.70 });
        break;
      }

      case 'sbrady': {
        // HR=45 → RR=1.333s. Same wave positions, but enormous flat baseline.
        // T ends ~0.47s, next beat at 1.333s → 860ms of flatline between beats.
        v = sinusComplex(t % (60 / 45), { pr: 0.18, rAmp: 1.85 });
        break;
      }

      // ════════════════════════════════════════
      // ATRIAL RHYTHMS
      // ════════════════════════════════════════

      case 'svt': {
        // HR=180 → RR=0.333s.
        // P waves: NOT VISIBLE — buried inside the QRS complex (retrograde conduction).
        // No discernible P wave before or after QRS. Narrow QRS. Rapid regular rate.
        // T wave is slightly deformed by the hidden retrograde P (small negative notch at T end).
        const rr = 60 / 180;
        const p = t % rr;
        // Sharp narrow QRS — no preceding P wave
        v  = G(p, 0.016, 0.007, -0.06); // Q
        v += G(p, 0.028, 0.007,  1.65); // R — sharp, narrow
        v += G(p, 0.040, 0.008, -0.22); // S
        // T wave with slight terminal notch = retrograde P buried at end of T
        v += AG(p, 0.130, 0.035, 0.052, 0.22); // T wave
        v += G(p,  0.175, 0.010, -0.06); // retrograde P notch buried at T end (barely visible)
        break;
      }

      case 'afib': {
        // Irregular QRS (variable RR 380-780ms) + fibrillatory baseline
        // Advance beat schedule
        if (t >= state.afibNext) {
          state.afibLast = state.afibNext;
          // Random RR: 380-760ms (ventricular rate ~80-160 bpm, irregular)
          state.afibNext += 0.38 + state.prng() * 0.40;
        }
        // Chaotic atrial baseline (summed sinusoids ~4-8 Hz)
        v  = 0.065 * Math.sin(2 * Math.PI * 4.5 * t);
        v += 0.055 * Math.sin(2 * Math.PI * 6.2 * t + 1.3);
        v += 0.040 * Math.sin(2 * Math.PI * 7.8 * t + 2.6);
        v += (Math.random() - 0.5) * 0.035;
        // QRS at each beat
        if (state.afibLast >= 0) {
          const dt = t - state.afibLast;
          if (dt >= 0 && dt < 0.34) {
            v += G(dt,  0.010, 0.009, -0.08);
            v += G(dt,  0.026, 0.008,  1.75);
            v += G(dt,  0.042, 0.010, -0.32);
            v += AG(dt, 0.160, 0.045, 0.075, 0.30);
          }
        }
        break;
      }

case 'aflutter': {
  // ATRIAL FLUTTER 3:1 — near-clinical Lead II morphology

  const flRR = 0.200;   // Atrial rate ~300 bpm
  const vRR  = 0.600;   // Ventricular rate ~100 bpm (3:1)

  // Flutter phase (0 → 1)
  const flPh = (t % flRR) / flRR;

  // --- Flutter wave (curved sawtooth, physiologic) ---
  let fwave;
  if (flPh < 0.75) {
    const x = flPh / 0.75;
    fwave = -0.48 * (x * x);   // curved descent
  } else {
    const x = (flPh - 0.75) / 0.25;
    fwave = -0.48 + (x * x * 0.48); // softened upstroke
  }

  // Per-cycle variability (avoids mechanical repetition)
  const cycleNoise = Math.sin(2 * Math.PI * (t % flRR) / flRR);
  fwave *= (0.96 + 0.06 * cycleNoise);

  // Subtle asymmetry (adds realism)
  fwave *= (1 + 0.02 * Math.cos(4 * Math.PI * t));

  // Continuous baseline (no flat segments)
  v = fwave - 0.08 + 0.006 * Math.sin(2 * Math.PI * t / flRR);

  // --- Ventricular complex every 3 flutter waves ---
  const qp = t % vRR;

  // Place QRS just AFTER the 3rd flutter wave
  if (qp > (vRR - 0.05)) {
    const q = qp - (vRR - 0.05);

    // Narrow QRS (balanced amplitude)
    v += G(q, 0.010, 0.005, -0.07);   // Q
    v += G(q, 0.020, 0.005,  1.70);   // R
    v += G(q, 0.032, 0.007, -0.25);   // S

    // T wave (subtle)
    v += AG(q, 0.140, 0.040, 0.050, 0.22);
  }

  // Tiny noise (monitor realism)
  v += (Math.random() - 0.5) * 0.006;

  break;
}
      // ════════════════════════════════════════
      // VENTRICULAR RHYTHMS
      // ════════════════════════════════════════

      case 'vtach': {
        // HR=180 → RR=0.333s. WIDE QRS, no P waves, discordant T.
        // Wide sigma makes the QRS span ~150ms (vs ~50ms normal).
        const rr = 60 / 180;
        const p = t % rr;
        v  = G(p,  0.030, 0.025, -0.15); // broad Q
        v += G(p,  0.078, 0.044,  2.00); // broad R
        v += G(p,  0.132, 0.035, -0.72); // broad S
        v += AG(p, 0.265, 0.060, 0.090, -0.46); // discordant T (inverted)
        break;
      }

case 'torsades': {
  // TRUE TdP: sine-like oscillations + spindle envelope

  const freq = 4.8;        // ~220–250 bpm oscillation
  const slowFreq = 0.42;   // spindle rate (wax/waning)

  const fast = 2 * Math.PI * freq * t;
  const slow = 2 * Math.PI * slowFreq * t;

  // --- Core waveform (NOT pure sine) ---
  let wave =
    Math.sin(fast) +
    0.25 * Math.sin(2 * fast) +   // sharpen peaks
    0.10 * Math.sin(3 * fast);    // slight irregularity

  // --- Envelope & Polarity rotation ("twisting") ---
  // A standard sine wave handles both the spindle shape AND the flip.
  let twist = Math.sin(slow);

  // Shape it (avoid smooth sine look, BUT prevent flatlines)
  // Using a power < 1 makes the spindles slightly fatter and forces 
  // the zero-crossing to happen quickly, eliminating the flat pauses.
  twist = Math.sign(twist) * Math.pow(Math.abs(twist), 0.8);

  // --- Apply twist ---
  v = wave * twist;

  // --- SCALE ---
  v *= 1.2;

  // --- Tiny noise ---
  v += (Math.random() - 0.5) * 0.015;

  break;
}



      case 'fineVf': {
        // Low-amplitude chaotic oscillations
        v  = Math.sin(2 * Math.PI * 4.5 * t + 0.3) * 0.18;
        v += Math.sin(2 * Math.PI * 7.2 * t + 1.5) * 0.15;
        v += Math.sin(2 * Math.PI * 9.1 * t + 2.2) * 0.11;
        v += Math.sin(2 * Math.PI * 3.3 * t + 0.7) * 0.12;
        v += (Math.random() - 0.5) * 0.09;
        break;
      }

      case 'asystole': {
        // Flatline with minimal electrical noise
        v = (Math.random() - 0.5) * 0.018;
        break;
      }

      case 'pea': {
        // Organised rhythm (looks like sinus) but patient has no pulse
        // Morphologically identical to NSR at 65bpm — label distinguishes
        v = sinusComplex(t % (60 / 65), { pr: 0.16, rAmp: 1.65 });
        break;
      }

      // ════════════════════════════════════════
      // AV BLOCKS
      // ════════════════════════════════════════

      case 'block1': {
        // 1st Degree: all beats conduct, PR prolonged to 0.28s
        // Visible: long flat PR segment between P and QRS
        v = sinusComplex(t % (60 / 68), { pr: 0.28, rAmp: 1.80 });
        break;
      }

      case 'block2_1': {
        // Wenckebach (Mobitz I): progressive PR prolongation, then dropped QRS
        // Pattern: 3:2 (2 conducted, 1 dropped), each group = 0.80+0.88+0.96 = 2.64s
        const rrSeq = [0.80, 0.88, 0.96]; // RR intervals in group
        const prSeq = [0.18, 0.26, null]; // PR for each beat (null = dropped QRS)
        const gDur  = rrSeq.reduce((a, b) => a + b, 0);
        const tg    = t % gDur;
        let cum = 0;
        for (let i = 0; i < 3; i++) {
          if (tg >= cum && tg < cum + rrSeq[i]) {
            const ph = tg - cum;
            // P wave always present
            v += G(ph, 0.065, 0.025, 0.13);
            if (prSeq[i] !== null) {
              const pr = prSeq[i];
              v += G(ph,  pr + 0.000, 0.009, -0.07);
              v += G(ph,  pr + 0.016, 0.008,  1.80);
              v += G(ph,  pr + 0.030, 0.010, -0.33);
              v += AG(ph, pr + 0.200, 0.055, 0.085, 0.36);
            }
            break;
          }
          cum += rrSeq[i];
        }
        break;
      }

      case 'block2_2': {
        // Mobitz II: constant PR, sudden dropped QRS (3:1 ratio shown here)
        // Regular P waves, every 3rd fails to conduct → slow ventricular rate
        const pRR  = 0.82; // P-P interval
        const ratio = 3;   // conduct ratio (1 dropped per group)
        const pr    = 0.20; // constant PR
        const gDur  = pRR * ratio;
        const tg    = t % gDur;
        for (let i = 0; i < ratio; i++) {
          const bs = i * pRR;
          const ph = tg - bs;
          if (ph >= 0 && ph < pRR) {
            // P wave every beat
            v += G(ph, 0.065, 0.025, 0.12);
            // QRS only for first (ratio-1) beats, last P is blocked
            if (i < ratio - 1) {
              v += G(ph,  pr + 0.000, 0.009, -0.07);
              v += G(ph,  pr + 0.016, 0.008,  1.80);
              v += G(ph,  pr + 0.030, 0.010, -0.33);
              v += AG(ph, pr + 0.200, 0.055, 0.085, 0.34);
            }
          }
        }
        break;
      }

      case 'block3': {
        // Complete Heart Block: P waves (80/min) and QRS (35/min) fire INDEPENDENTLY
        // Wide escape QRS. P waves march through QRS at different rate.
        const pRR  = 60 / 80;   // 0.750s P-P
        const qRR  = 60 / 35;   // 1.714s QRS-QRS (ventricular escape)
        // Phase offset ensures P and QRS don't always coincide at startup
        const pPh  = t % pRR;
        const qPh  = (t + 0.38) % qRR; // 0.38s offset

        // Narrow P waves (atrial activity — normal)
        v += G(pPh, 0.050, 0.022, 0.14);

        // WIDE ventricular escape QRS (infranodal)
        v += G(qPh,  0.040, 0.028, -0.15);
        v += G(qPh,  0.092, 0.042,  1.72);
        v += G(qPh,  0.148, 0.032, -0.66);
        // Discordant T wave (opposite to main QRS deflection)
        v += AG(qPh, 0.290, 0.062, 0.092, -0.42);
        break;
      }

      // ════════════════════════════════════════
      // STEMI / ACS
      // ════════════════════════════════════════

      case 'stemi_inf':
      case 'stemi_ant':
      case 'stemi_sep':
      case 'stemi_lat': {
        v = sinusComplex(t % (60 / 80), { pr: 0.16, stElev: 0.36, rAmp: 1.80 });
        break;
      }

      case 'stemi_ext': {
        // Extensive anterior — larger ST elevation, slightly faster rate
        v = sinusComplex(t % (60 / 95), { pr: 0.16, stElev: 0.50, rAmp: 1.70 });
        break;
      }

      case 'stdepress': {
        // ST depression (NSTEMI / ischaemia) — negative stElev
        v = sinusComplex(t % (60 / 82), { pr: 0.16, stElev: -0.30, rAmp: 1.80 });
        break;
      }

      case 'tinvert': {
        // T-wave inversion
        v = sinusComplex(t % (60 / 75), { pr: 0.16, tInv: true, rAmp: 1.72 });
        break;
      }

      default: {
        v = sinusComplex(t % (60 / 72), { pr: 0.16 });
        break;
      }
    }

    return v + wander + noise;
  }

  // ── PUBLIC API ───────────────────────────────────────────────
  return {
    generateSample,
    createState,
    // Gaussian helpers for external use
    gauss: G,
    asymGauss: AG,
  };

})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ECGEngine;
}
