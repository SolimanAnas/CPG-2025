# ECG Physics Engine Specification (ecg.md)

## 🎯 Goal

Generate physiologically accurate ECG waveforms using time-based signal synthesis (not static SVG paths).
Output should resemble real bedside cardiac monitor (Lead II default).

---

# 1. SIGNAL MODEL OVERVIEW

An ECG signal is a continuous function:

ECG(t) = P(t) + QRS(t) + T(t) + Noise(t)

Where:

* t = time in seconds
* amplitude = millivolts (mV)

---

# 2. TIME & SCALE

## Standard ECG scale:

* Paper speed: 25 mm/s
* 1 small box = 0.04 s
* 1 large box = 0.20 s

## Amplitude:

* 10 mm = 1 mV

---

# 3. HEART RATE → CYCLE LENGTH

Cycle duration:

RR_interval = 60 / HR  (seconds)

Example:

* HR 60 → RR = 1.0 s
* HR 120 → RR = 0.5 s

---

# 4. WAVE COMPONENTS (PHYSIOLOGICAL MODEL)

All waves modeled using Gaussian or skewed Gaussian functions.

---

## 4.1 P WAVE (ATRIAL DEPOLARIZATION)

Characteristics:

* Duration: 0.06–0.11 s
* Amplitude: 0.1–0.25 mV
* Shape: smooth rounded

Model:

P(t) = A_p * exp(-((t - t_p)^2) / (2 * σ_p^2))

Typical:

* A_p = 0.15
* σ_p = 0.02

---

## 4.2 PR INTERVAL

* Duration: 0.12–0.20 s
* Flat isoelectric segment
* Represents AV node delay

---

## 4.3 QRS COMPLEX (VENTRICULAR DEPOLARIZATION)

### NORMAL QRS

Duration:

* < 0.12 s

Components:

Q (small negative)
R (sharp positive)
S (negative)

Model:

Q(t) = -A_q * exp(-((t - t_q)^2)/(2σ_q^2))
R(t) =  A_r * exp(-((t - t_r)^2)/(2σ_r^2))
S(t) = -A_s * exp(-((t - t_s)^2)/(2σ_s^2))

Typical:

* A_q = 0.3
* A_r = 2.0–3.0
* A_s = 0.8–1.5

Key:

* R is narrow and sharp
* slopes must be steep (fast depolarization)

---

### WIDE QRS (VT / BBB)

* Duration > 0.12 s
* Broader Gaussian
* Reduced slope
* Monomorphic shape

---

## 4.4 ST SEGMENT

* Normally isoelectric
* Slight elevation/depression = pathology

---

## 4.5 T WAVE (VENTRICULAR REPOLARIZATION)

Characteristics:

* Duration: 0.10–0.25 s
* Amplitude: 0.2–0.5 mV
* Asymmetric (slow rise, faster fall)

Model:

T(t) = A_t * exp(-((t - t_t)^2)/(2σ_t^2))

---

# 5. RHYTHM-SPECIFIC MODIFICATIONS

---

## 5.1 NORMAL SINUS RHYTHM

* P before every QRS
* Constant PR
* Narrow QRS
* Regular RR

---

## 5.2 SINUS BRADYCARDIA

* Same morphology as NSR
* Increased RR interval

---

## 5.3 SINUS TACHYCARDIA

* Same morphology
* Reduced RR
* possible P-T fusion at high rates

---

## 5.4 SVT (NARROW COMPLEX)

* No visible P waves
* QRS narrow
* very regular rhythm
* HR 150–250

---

## 5.5 ATRIAL FIBRILLATION

* No P waves
* baseline = low amplitude chaotic oscillations
* irregular RR intervals

Noise model:
random low amplitude signal added

---

## 5.6 VENTRICULAR TACHYCARDIA

* No P waves
* Wide QRS (>120 ms)
* monomorphic shape
* steep upstroke, slower downstroke
* HR 150–250

---

## 5.7 TORSADES DE POINTES

* polymorphic VT
* amplitude modulated:

A(t) = sin(2π * f_mod * t)

* waveform rotates around baseline
* “twisting” appearance

---

## 5.8 VENTRICULAR FIBRILLATION

* no identifiable waves
* chaotic noise

Model:
sum of random sine waves:

ECG(t) = Σ A_i * sin(ω_i t + φ_i)

---

## 5.9 ASYSTOLE

* flat baseline
* minimal electrical noise

---

## 5.10 AV BLOCKS

### 1st Degree

* prolonged PR
* all beats conducted

### 2nd Degree Mobitz I

* progressive PR increase
* dropped QRS

### 2nd Degree Mobitz II

* constant PR
* sudden dropped QRS

### 3rd Degree

* P and QRS independent
* separate oscillators

---

# 6. NOISE & ARTIFACT MODEL

Add realistic noise:

ECG_final(t) = ECG(t) + Noise(t)

Types:

### Baseline wander

low frequency sine (respiration)

### Muscle artifact

high frequency random noise

### Electrical interference

50/60 Hz sine wave

---

# 7. SIGNAL GENERATION ALGORITHM

For each frame:

1. Compute time t
2. Compute cardiac phase = t % RR
3. Generate waveform components
4. Add noise
5. Normalize amplitude
6. Render

---

# 8. OUTPUT REQUIREMENTS

AI must output:

* JavaScript function:
  generateECG(t, HR, rhythmType)

* Returns:
  amplitude value at time t

* Continuous waveform (not discrete SVG)

---

# 9. RENDERING REQUIREMENTS

* Smooth scrolling
* 60 FPS animation
* Anti-aliased curve
* Glow effect optional

---

# 10. CRITICAL RULES

* DO NOT use static SVG paths
* MUST be time-based physics simulation
* MUST respect physiological durations
* MUST support dynamic HR changes
* MUST support rhythm switching

---

# 🧠 END GOAL

Indistinguishable from real monitor waveform:

* correct timing
* correct morphology
* correct variability
* clinically accurate
