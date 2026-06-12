# User Manual — DCAS CPG 2025 Clinical Review Platform

**Document ref:** CPG2025-USR-001 · Version 1.0 · 2026-06-12
**Classification:** Shared – Confidential
**Audience:** DCAS EMS Clinical Staff (Physicians, Paramedics, EMTs)

---

## 1. Introduction

The DCAS CPG 2025 Clinical Review Platform is a Progressive Web App (PWA) that provides DCAS EMS personnel with an offline-capable, interactive reference tool for the 2025 Clinical Practice Guidelines. It includes:

- Chapter-by-chapter guideline content
- Flashcards and self-assessment quizzes
- Drug dosing calculator
- ECG and algorithm reference tools
- Prometric exam preparation engine
- Personal progress tracking

---

## 2. Supported Platforms

| Platform | Browser | Notes |
|----------|---------|-------|
| Android | Chrome 90+ | Full PWA install supported |
| iOS | Safari 15.4+ | PWA install via "Add to Home Screen" |
| Windows | Chrome, Edge 90+ | Desktop PWA install supported |
| macOS | Chrome, Safari 15.4+ | Desktop PWA install supported |

An active internet connection is required for first use and login. Once content is cached, core guideline access works offline.

---

## 3. Getting Started

### 3.1 Registering an account

1. Navigate to the app URL provided by your IT Admin.
2. Tap **Sign Up** on the login page.
3. Enter your:
   - **Full name** (as it appears in DCAS records)
   - **Email address** (DCAS email recommended)
   - **Professional level**: Physician, Paramedic, or EMT
   - **Password** (must be at least 10 characters, include uppercase, lowercase, and a number)
4. Tap **Create Account**.
5. On success you are redirected to the home page.

> If you see a password error, ensure your password meets all requirements listed on the form.

### 3.2 Logging in

**Email/password:**
1. Enter your registered email and password.
2. Tap **Log In**.

**Google Sign-In:**
1. Tap **Sign in with Google**.
2. Select your Google account.
3. You are signed in automatically.

> Contact your IT Admin if you cannot log in and have forgotten your password — there is no self-service password reset in this release.

### 3.3 Installing as a PWA (optional)

Installing the app to your home screen enables offline access and a full-screen experience.

**Android (Chrome):** Tap the browser menu → *Add to Home screen*.
**iOS (Safari):** Tap the Share icon → *Add to Home Screen*.
**Desktop (Chrome/Edge):** Click the install icon in the address bar.

---

## 4. Navigating the App

### 4.1 Home page

The home page displays:
- **Chapter list** — all CPG 2025 guideline chapters, organised by category.
- **Search bar** — full-text search across all chapter content.
- **Progress bar** — your overall completion percentage.
- **Theme selector** — choose from 5 display themes including AMOLED night mode.

### 4.2 Reading a chapter

1. Tap a chapter title from the home list or search results.
2. The chapter page displays the full guideline content with headings, tables, and images.
3. Tap the **bookmark** icon to mark the chapter as complete — this updates your progress.
4. Use the **back arrow** to return to the chapter list.

### 4.3 Flashcards

1. On any chapter page, tap **Flashcards**.
2. Cards display a prompt on the front — tap to reveal the answer on the back.
3. Use **Next** and **Previous** to navigate the deck.

### 4.4 Quizzes

1. On any chapter page, tap **Quiz**.
2. Multiple-choice questions are displayed one at a time.
3. Select your answer; immediate feedback shows whether it is correct.
4. Your score is saved automatically to your progress.

### 4.5 Drug Calculator

1. From the home page, tap **Drug Calculator**.
2. Select a drug from the dropdown list.
3. Enter patient weight (kg) and age where prompted.
4. The calculated dose and rate are displayed.

> The drug calculator is a reference tool only. Always verify dosing against current clinical protocols and patient assessment.

### 4.6 ECG & Algorithm tools

1. Tap **Algorithms** from the home page.
2. Select a clinical algorithm (e.g. Cardiac Arrest, Tachycardia).
3. Tap decision nodes to navigate the algorithm flowchart.

### 4.7 Progress tracking

Your progress is stored in your browser's local storage and includes:
- Chapters read (marked complete)
- Quiz scores per chapter
- Overall completion percentage

Progress persists across sessions on the same device and browser.

### 4.8 Exam preparation (Prometric)

1. Tap **Prometric Exam** from the home page.
2. Select an exam topic from the list.
3. A timed or untimed practice exam begins.
4. Results are shown at the end of the exam.

---

## 5. Offline Mode

Once the app is installed and you have logged in at least once with a connection, the following content is available offline:

- All chapter content, flashcards, and quizzes
- Drug calculator
- ECG and algorithm tools
- Exam practice questions

The following require an active connection:
- Logging in or registering for the first time
- Syncing progress across multiple devices

When offline, the app displays a banner: *"You are offline — some features may be unavailable."*

---

## 6. Security & Privacy

- Your session is protected by a secure, encrypted cookie.
- Your password is never stored in readable form — only a secure hash.
- Log out when using a shared device: tap the **Logout** button in the top menu.
- Do not share your password with anyone.

---

## 7. Troubleshooting

| Problem | Solution |
|---------|---------|
| Cannot log in | Check email and password; contact IT Admin if locked out |
| Content not loading offline | Open the app while connected once to prime the cache |
| Quiz scores not saving | Ensure local storage is not blocked in browser settings |
| App not updating with new content | Pull-to-refresh or clear cache from settings |
| Google Sign-In fails | Ensure pop-ups are not blocked; try a different browser |

---

## 8. Support & Reporting Security Issues

For IT support: contact your DCAS IT Admin team.

To report a security vulnerability in the app: see `SECURITY.md` in the repository or email the contact listed there.

---

## 9. Document Control

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-06-12 | Initial release |
