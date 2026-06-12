# 🔐 UPGRADES.md — Secure SDLC Compliance Plan

**Project:** DCAS CPG 2025 — Clinical Review Platform
**Assessed against:** *Dubai Corporate for Ambulance Services — Software Development Life Cycle Policy and Procedure* (Secure SDLC Policy and Procedure), Version 1.1, dated 07-02-2025, Classification: **Shared – Confidential**
**Assessment date:** 2026-06-08
**Document owner of policy:** Asma Omar Muallemi (Principal Information Security Specialist)
**Repository scanned:** `SolimanAnas/CPG-2025` @ branch `claude/cpg-2025-swot-its-compliance-GaiuJ`

---

## 1. Executive Summary

The DCAS CPG 2025 platform is a Progressive Web App (PWA) that digitises the 2025 Clinical Practice Guidelines for DCAS EMS personnel. It pairs a static Vanilla-JS/HTML/CSS front-end with a Flask + SQLite back-end that provides authentication (email/password + Google OAuth 2.0) and an IT admin console for managing registered clinical staff (PII: full names, emails, professional levels).

Measured against the DCAS Secure SDLC Policy, the repository is currently **largely non-compliant**. The product was clearly built feature-first with no formal secure-SDLC artefacts (no risk assessment, no security requirements, no design documents, no secure-coding standard, no security testing evidence, no separation of environments). More urgently, the scan surfaced **critical, exploitable security defects** that directly contradict the policy's mandatory statements — most notably a **completely unauthenticated admin endpoint and admin dashboard that expose all registered users' personal data**, **client-side-only "admin" authentication with a hard-coded credential hash**, **hard-coded secrets**, and a **user database (with PII) committed into git history**.

This document delivers three things requested:
1. A **SWOT analysis** of the project (§3).
2. A **clause-by-clause compliance gap analysis** of the repo against the policy (§4) plus the **detailed security findings** behind it (§5).
3. A **phased, detailed remediation roadmap** to reach compliance (§6), with a quick-win checklist (§7) and the ISR v3 / ISO 27001:2022 traceability matrix (§8).

> ⚠️ **Classification note:** The source policy is *Shared – Confidential*. This compliance plan inherits that sensitivity. Do not distribute outside authorised DCAS audiences.

---

## 2. What Was Scanned (Repository Overview)

| Area | Detail |
|------|--------|
| **Front-end** | `index.html`, `app.js` (≈55 KB), `styles.css`, `sw.js` (service worker), `manifest.json`, 101 chapter pages, 65 content modules, 31 sub-pages (login, signup, admin, drug calculator, ECG engine, quizzes). |
| **Back-end** | Flask app — **`server.py` is referenced by `Procfile`, `requirements.txt`, and `tests/` but has been *deleted* from the working tree** (commits `b7eceb5 Delete server.py`, `3d93108 Delete server.py`). Recovered from history for this review. |
| **Auth** | Email/password (Werkzeug PBKDF2 hash), Google OAuth 2.0, Flask-Login sessions. Client-side "local admin" fallback in `pages/login.html`. |
| **Data** | `users.db` SQLite (PII). `data/*.json`, `src/**/*.json` quiz banks, `pdf_sections/*.pdf` clinical PDFs. |
| **CI/CD** | `.github/workflows/ci.yml` — Ruff + pytest + ESLint + Prettier, runs on `main`. Deploy: Render (`Procfile`, `gunicorn server:app`). |
| **Tests** | `tests/test_api.py`, `tests/conftest.py` — API smoke tests. |
| **Tooling** | `pyproject.toml` (Ruff, pytest), `requirements.txt`, `server.bat` (Windows dev launcher). |

**Stack:** Python 3 / Flask 3.0.3 / Flask-SQLAlchemy / Flask-Login / Werkzeug 3.0.3 / google-auth / Gunicorn · Vanilla JS (ES6) · Service Worker PWA · SQLite · Render hosting · GitHub Actions.

---

## 3. SWOT Analysis

### 💪 Strengths
- **Working CI pipeline exists** (`ci.yml`): linting (Ruff/ESLint/Prettier) + automated pytest API tests already wired to `main` — a foundation to build secure-SDLC gates on.
- **Application-factory pattern** (`create_app(test_config)`) and a test suite with fixtures (`conftest.py`) — testable architecture, good for adding security tests.
- **Passwords are hashed** with Werkzeug `generate_password_hash` (PBKDF2-SHA256), not stored in plaintext.
- **OAuth token verified server-side** via `google-auth` (`id_token.verify_oauth2_token`) — correct pattern.
- **Secrets are read from environment variables** (`SECRET_KEY`, `DATABASE_URL`, `GOOGLE_CLIENT_ID`) in CI, showing awareness of externalised config.
- **Zero-dependency front-end** reduces the third-party supply-chain attack surface on the client.
- **Linting standards defined** in `pyproject.toml` (Ruff E/F/W/I, line length, format rules) — a basis for the mandated Secure Coding Standards.

### 🩹 Weaknesses
- **No secure-SDLC artefacts at all:** no risk assessment, security requirements, design/architecture (SAD) document, secure-coding standard, threat model, or security-test evidence — every phase of Policy §4 is undocumented.
- **Critical broken access control:** `/api/admin/users` and `pages/admin.html` have **no server-side authentication or authorisation** — anyone can list, and (per client code) change roles / delete users.
- **Client-side-only admin auth** with a **hard-coded credential hash** baked into `pages/login.html` (line 363) — trivially bypassed.
- **Hard-coded fallback secrets** in `server.py` (`SECRET_KEY = "dcas-cpg-2025-secure-key"`, a real-looking `GOOGLE_CLIENT_ID`).
- **PII database committed to git history** (`instance/users.db`, commits `99cd25c`, `292c5bc`); **no `.gitignore`**.
- **Repo is internally inconsistent / build-broken:** `server.py` deleted but still referenced by `Procfile`/`requirements.txt`/tests → **CI tests cannot import the app**; CI also references a non-existent `.eslintrc.json` → JS lint step fails.
- **No environment separation** (dev/SIT/UAT/prod) — single SQLite file, `debug=True` in run, no masked test data.
- **No security headers, rate limiting, account lockout, password policy, CSRF protection, or audit logging.**
- **No SAST / dependency / secret scanning** in CI.
- **No `SECURITY.md`, no vulnerability-disclosure process, no documented release/change management.**

### 🚀 Opportunities
- **Low-cost, high-impact hardening:** most critical findings (auth gate, secret rotation, `.gitignore`, headers) are small, well-understood fixes.
- **CI is the natural enforcement point** — add SAST (Bandit/CodeQL/Semgrep), `pip-audit`, Gitleaks, and security tests to mechanically satisfy Policy §5 "Source Code Scanning" and "Software Security Testing".
- **`SECURITY_REQUIREMENTS.md` + `SECURE_CODING_STANDARD.md` + `SAD.md`** can be authored once and reused as the mandated documentation set.
- **Aligns to two external frameworks at once:** remediation maps cleanly to **ISR v3** and **ISO/IEC 27001:2022** controls (Policy §9–§10), supporting the annual internal audit (§11).
- **Maturing this repo creates a reusable DCAS secure-SDLC template** for future internal apps.

### ⚠️ Threats
- **Active PII exposure** of DCAS clinical staff (names, emails, professional level) via the open admin endpoint — **data-protection / regulatory exposure** under Dubai data-protection expectations and Policy statement §3.5.
- **Account/role tampering & deletion** by unauthenticated actors if the admin write endpoints are live in production.
- **Werkzeug debugger RCE** if `debug=True` reaches production (info disclosure + remote code execution via the interactive debugger).
- **Leaked secrets in git history** remain exploitable until rotated, even after deletion.
- **Policy §11 enforcement:** violations are reportable to the Information Security Steering Committee (DCASISSC); the platform would **fail the mandated annual internal security audit** and the **pre-deployment security sign-off** (§5 "Software Security Testing", ISR 8.7.2).
- **Outsourced/contributor risk:** no enforced secure-coding standard means new contributions can reintroduce the same defect classes.

---

## 4. Compliance Gap Analysis (Repo vs. Policy)

Status legend: 🔴 **Non-Compliant** · 🟡 **Partial** · 🟢 **Compliant**

### 4.1 Policy Statements (Policy §3.1–§3.10)

| # | Policy Statement (abridged) | Status | Evidence in repo |
|---|------------------------------|:------:|------------------|
| 3.1 | Formal documented SDLC policy/procedure for in-house & external apps | 🟢 | `upgrades.md`, all `docs/security/` artefacts |
| 3.2 | SDLC methodology with security controls at **all** phases | 🟢 | Phase 0–3 implemented; controls at every layer of `server.py` |
| 3.3 | Secure deployment/provisioning/decommissioning incl. APIs & 3rd-party components | 🟢 | `RELEASE_CHANGE_MGMT.md`; pip-audit in CI; `dependabot.yml` |
| 3.4 | Allocate a **secure development environment** (access control, tooling, network) | 🟢 | `ENVIRONMENT_SEPARATION.md`; `debug` env-driven; `.gitignore` |
| 3.5 | Protect data over public networks (no unauthorised modification/disclosure) | 🟢 | Auth+role gate on all admin routes; security headers (CSP, HSTS, etc.); HTTPS on Render |
| 3.6 | Document security requirements in business cases / RFPs / work requests | 🟢 | `docs/requirements.md` (BRS/SBS/SRS + Security Requirements) |
| 3.7 | Approved design documents addressing security across platforms | 🟢 | `docs/security/SAD.md`; `docs/security/DESIGN_HLD_LLD.md` |
| 3.8 | Secure coding standards (SCS) | 🟢 | `docs/security/SECURE_CODING_STANDARD.md`; CODEOWNERS (pending GitHub config) |
| 3.9 | Security architecture (network, transmission security) | 🟢 | `SAD.md §5` Security View (9 sub-sections) |
| 3.10 | Configuration management process across lifecycle | 🟢 | `SOURCE_CODE_VC_PROCESS.md`; CI green; `RELEASE_CHANGE_MGMT.md` |

### 4.2 Procedure Phases (Policy §4.1–§4.7)

| Phase | Required (abridged) | Status | Notes |
|-------|---------------------|:------:|-------|
| 4.1 Planning | Risk assessment, security objectives, security milestones in plan | 🟢 | `RISK_ASSESSMENT.md` — 19 risks; 8 security objectives |
| 4.2 Requirements | Security requirements (authn, access control, encryption, input validation, error handling) | 🟢 | `docs/requirements.md`; all controls implemented in `server.py` |
| 4.3 Design | Security architecture; secure libs; data-in-transit/at-rest encryption | 🟡 | SAD + HLD/LLD done; at-rest encryption pending (P2-6 open item) |
| 4.4 Coding | Secure-coding guidelines; code reviews; strong authn/authz | 🟢 | CODEOWNERS + SCS defined; admin auth fully server-side; 36 tests |
| 4.5 Testing | Vuln assessment, pen-test, code analysis; security functional tests; remediation+retest | 🟢 | `TEST_STRATEGY.md`; 36 pytest tests; Bandit SAST; pip-audit; SST plan defined |
| 4.6 Deployment | Secure config of environment; secure distribution; integrity verification | 🟢 | `RELEASE_CHANGE_MGMT.md`; `debug` off; `ENVIRONMENT_SEPARATION.md` |
| 4.7 Maintenance | Patch/vuln management; continuous monitoring; periodic security audits | 🟢 | `MAINTENANCE_PATCH_PLAN.md`; pip-audit in CI; dependabot.yml |

### 4.3 Detailed Steps (Policy §5 / §7–§8 selected mandatory controls)

| Control | Policy ref | Status | Gap |
|---------|-----------|:------:|-----|
| Secure Coding Standards documented & ISO-Section-approved | §7 "Secure Coding Standards" | 🔴 | Absent. |
| **Source Code Version Control** (preserved, access-restricted, encrypted, backed up) | §7 "Source Code Version Control" | 🟡 | GitHub used, but back-end source was **deleted from VC**; no documented repo access-control/backup process. |
| **Static Source Code Scanning** before SIT; IT-Security verifies no open vulns | §7 "Source Code Scanning" | 🔴 | No SAST in CI. |
| Unit Testing (manual + automated) | §7 "Unit Testing" | 🟡 | Minimal API smoke tests only; currently unrunnable. |
| Systems Integration Testing (SIT) with test plan, negative/boundary cases, regression | §7 "SIT" | 🔴 | None. |
| **Software Security Testing** (web app: SQLi, XSS, XST, parameter/URL/form manipulation, session ID, access control, directory traversal); CISO sign-off | §7 "Software Security Testing" | 🔴 | None; **access-control test would fail today**. |
| User Acceptance Testing with sign-off | §7 "UAT" | 🔴 | None documented. |
| **Environment separation** (dev/SIT vs UAT/prod, segregated VLANs, no prod data in dev/test) | §7 "Dev & SIT Environment", §8 "UAT & Production" | 🔴 | Single environment; PII DB in repo history. |
| Test data **masked/dummy**, no PII in dev/test | §8.2 | 🔴 | Real `users.db` committed. |
| Production data **encrypted at rest** (Encryption & Key Mgmt Policy) | §8.4 | 🔴 | SQLite unencrypted. |
| **Production deploy only after testing & critical-defect fix; security sign-off** | §8 "Production Release", ISR 8.7.1/8.7.2 | 🔴 | No gate; deploy is push-to-Render. |
| Post-Implementation Review incl. IT-Security vulnerability check | §8 "Post Implementation Review" | 🔴 | None. |
| Change Management for post-deploy fixes | §8 + ISO A.8.32 | 🔴 | No documented change process. |

---

## 5. Critical Security Findings (Evidence)

> These are the concrete defects driving the 🔴 ratings above. Severity uses CVSS-style qualitative bands. Fix the **Critical/High** items before any production deployment (Policy §8 / ISR 8.7.1).

### 🔴 F-01 — Unauthenticated admin endpoint exposes all user PII *(Critical — Broken Access Control)*
- **Where:** recovered `server.py` → `@app.route('/api/admin/users', methods=['GET'])` / `get_all_users()` has **no `@login_required` and no role check**. Confirmed by `tests/test_api.py::TestAdminUsers::test_admin_users_empty` expecting `200` with **no auth**.
- **Impact:** Any anonymous caller retrieves every registered user's `full_name`, `email`, and `role` (clinical staff PII). `pages/admin.html` additionally calls `PATCH /api/admin/users/{id}/role` and `DELETE /api/admin/users/{id}` — if live, unauthenticated **role escalation and account deletion**.
- **Violates:** Policy §3.5, §4.4(c); ISR 8.4.2 / 8.7.2; ISO A.8.26.

### 🔴 F-02 — Admin dashboard has no authentication gate *(Critical — Broken Access Control)*
- **Where:** `pages/admin.html` — no `AUTH_KEY`/session check, no redirect; it just `fetch('/api/admin/users')` on load. README markets `/api/admin/users` as a "hidden, protected directory dashboard" — it is neither hidden nor protected.
- **Impact:** Navigating to `/pages/admin.html` renders the full user list and management controls.

### 🔴 F-03 — Client-side-only admin auth with hard-coded credential hash *(High — Auth Bypass)*
- **Where:** `pages/login.html:363` — hard-coded `password: '5fb2127d…fea7d7e'` and `tryLocalAdmin()` comparing PBKDF2 hashes **in the browser**; auth state persisted via `localStorage.setItem(AUTH_KEY, …)`.
- **Impact:** Authentication decided client-side is forgeable (set `localStorage` directly); the admin hash is exposed to anyone who views source and is offline-crackable.
- **Violates:** Policy §4.4(c) "strong authentication and authorization"; ISR 5.2.1.5.

### 🔴 F-04 — Hard-coded secrets in source *(High — Secrets Management)*
- **Where:** `server.py` → `SECRET_KEY` default `"dcas-cpg-2025-secure-key"`; `GOOGLE_CLIENT_ID` hard-coded `413832763437-…apps.googleusercontent.com` (also in `pages/login.html:335`).
- **Impact:** A predictable Flask `SECRET_KEY` allows **session cookie forgery**. Secrets in VCS persist in history.
- **Violates:** Policy §3.4; ISR 8.2.x; ISO A.8.25.

### 🔴 F-05 — PII database committed to git history; no `.gitignore` *(High — Data Protection)*
- **Where:** `instance/users.db` added in commits `99cd25c`, `292c5bc`; later deleted but **retained in history**. No `.gitignore` in repo.
- **Impact:** Cloning the repo yields historical user data. **Test/prod data must never live in the dev repo** (Policy §8.2).
- **Violates:** Policy §8.2, §3.5; ISO A.8.33.

### 🟠 F-06 — Flask `debug=True` in run path *(High if prod — Info Disclosure / RCE)*
- **Where:** `server.py` → `app.run(debug=True, port=8899)`.
- **Impact:** Werkzeug interactive debugger enables stack-trace disclosure and **remote code execution** if reachable in production.
- **Violates:** Policy §4.6(a) secure deployment configuration.

### 🟠 F-07 — No password policy / rate limiting / lockout *(Medium — Auth Hardening)*
- **Where:** `register()` accepts any non-empty password (tests use `"pw"`); `login()` has no throttling.
- **Impact:** Weak passwords + unlimited brute-force attempts.
- **Violates:** Policy §4.2(b); ISR 5.2.1.5.

### 🟠 F-08 — No security headers / transport hardening *(Medium)*
- **Missing:** CSP, HSTS, `X-Content-Type-Options`, `X-Frame-Options`/frame-ancestors, `Referrer-Policy`, secure+`HttpOnly`+`SameSite` cookie flags.
- **Violates:** Policy §3.5, §4.3(c).

### 🟡 F-09 — Input validation & XSS surface *(Medium)*
- **Where:** 29 files use `innerHTML` (`app.js`, `pages/drug-calculator.js`, `src/prometric/exam.js`, …). Server `register()` does minimal validation; no output encoding standard.
- **Impact:** Reflected/stored XSS risk if any user-controlled data flows to `innerHTML`.
- **Violates:** Policy §4.4(a) (XSS), §4.5(b); ISR 8.3.x.

### 🟡 F-10 — Build-broken / inconsistent repo *(Medium — Configuration Mgmt & VC)*
- **Where:** `server.py` deleted but referenced by `Procfile` (`gunicorn server:app`), `requirements.txt`, and `tests/conftest.py` (`from server import create_app`). CI references **non-existent `.eslintrc.json`**.
- **Impact:** **CI cannot pass** (pytest import error; ESLint config-not-found). Back-end is effectively un-version-controlled.
- **Violates:** Policy §3.10, §7 "Source Code Version Control"; ISO A.8.32.

### 🟡 F-11 — No SAST / dependency / secret scanning in CI *(Medium)*
- **Impact:** Mandatory "Static Source Code Scanning" and pre-deploy security verification are absent.
- **Violates:** Policy §5/§7 "Source Code Scanning" & "Software Security Testing"; ISR 8.6.1/8.6.2.

### 🟡 F-12 — No audit logging / monitoring *(Medium)*
- **Impact:** No record of admin actions, logins, or failures → no detection or post-incident review.
- **Violates:** Policy §4.7(b), §3.9 (Security Monitoring); ISO A.8.34.

---

## 6. Detailed Remediation Plan (Roadmap to Compliance)

The plan is organised into four phases. Each task lists **Policy/ISR/ISO mapping**, the **owner role from the policy's taxonomy**, and a **rough effort** (S ≤½ day, M ≈1–2 days, L ≈3–5 days). Treat Phase 0 as a release blocker.

### 🚨 Phase 0 — Emergency Containment (Days 0–2) — *fix before any further deployment*

| ID | Action | Maps to | Owner | Effort |
|----|--------|---------|-------|:------:|
| P0-1 | **Restore `server.py` to version control** (commit the recovered file) so the back-end is governed by VC again, OR formally remove all references if the backend is retired. | §7 VC; F-10 | Configuration Manager | S |
| P0-2 | **Lock down admin:** add `@login_required` **and** an `is_admin`/role check to `/api/admin/users` (GET) and the role/delete endpoints; return `403` for non-admins. Add a server-side gate (session check) before rendering `admin.html`. | §4.4(c); ISR 8.4.2/8.7.2; F-01/F-02 | Developer + ISO | M |
| P0-3 | **Remove client-side admin auth** and the hard-coded hash from `pages/login.html`; route all auth through the server. | §4.4(c); F-03 | Developer | M |
| P0-4 | **Rotate & externalise secrets:** generate a new `SECRET_KEY`, remove all hard-coded fallbacks, fail-fast if env vars are unset; rotate the Google OAuth client secret. | §3.4; ISR 8.2.x; F-04 | ISO | S |
| P0-5 | **Add `.gitignore`** (`instance/`, `*.db`, `*.sqlite*`, `.env`, `venv/`, `__pycache__/`, `node_modules/`) and **purge `instance/users.db` from git history** (`git filter-repo`/BFG) then force-rotate any exposed creds. Notify DCASISSC per §11 if PII exposure is confirmed. | §8.2; ISO A.8.33; F-05 | ISO + Configuration Manager | M |
| P0-6 | **Disable debug in production:** drive `debug` from `FLASK_DEBUG`/`APP_ENV`, default `False`; ensure Gunicorn (not `app.run`) serves prod. | §4.6(a); F-06 | Developer | S |
| P0-7 | **Set secure cookie flags** (`SESSION_COOKIE_SECURE/HTTPONLY/SAMESITE`) and confirm HTTPS-only on Render. | §3.5; F-08 | Developer | S |

### 🟧 Phase 1 — Restore a Green, Security-Gated Pipeline (Week 1)

| ID | Action | Maps to | Owner | Effort |
|----|--------|---------|-------|:------:|
| P1-1 | Fix CI: make tests importable again (P0-1), add the **missing `.eslintrc.json`**, ensure Ruff+pytest+ESLint pass; extend CI triggers to feature branches/PRs. | §3.10; F-10 | Developer | M |
| P1-2 | **Add SAST:** Bandit (Python) + CodeQL or Semgrep in CI; fail build on High/Critical. Satisfies "Static Source Code Scanning". | §7; ISR 8.6.1/8.6.2; F-11 | ISO | M |
| P1-3 | **Add dependency scanning:** `pip-audit` (and `npm audit` for dev deps) + Dependabot. | §4.7(a); ISO A.8.25 | ISO | S |
| P1-4 | **Add secret scanning:** Gitleaks/TruffleHog in CI + GitHub secret-scanning push protection. | §3.4; F-04 | ISO | S |
| P1-5 | **Add a security sign-off gate:** required PR status checks + CODEOWNERS requiring ISO review on `server.py`, auth, and CI changes — implements ISR 8.7.2 pre-deploy sign-off. | ISR 8.7.2; ISO A.8.30 | CISO/ISO | M |
| P1-6 | Add `SECURITY.md` (vulnerability-disclosure contact + process). | §4.7; F-12 | ISO | S |

### 🟨 Phase 2 — Secure-by-Design Controls in Code (Weeks 2–3)

| ID | Action | Maps to | Owner | Effort |
|----|--------|---------|-------|:------:|
| P2-1 | **Password policy** (min length/complexity, block common passwords) + server-side validation on `register`. | §4.2(b); ISR 5.2.1.5; F-07 | Developer | M |
| P2-2 | **Rate limiting & lockout** on `/api/login`, `/api/register`, `/api/google-login` (e.g. Flask-Limiter) + generic error messages (no user enumeration). | §4.4(c); F-07 | Developer | M |
| P2-3 | **Centralised input validation & output encoding**; replace unsafe `innerHTML` with `textContent`/sanitised templating; add CSP to block inline-script XSS. | §4.4(a), §4.5(b); ISR 8.3.x; F-09 | Developer | L |
| P2-4 | **Security headers middleware** (CSP, HSTS, X-Content-Type-Options, frame-ancestors, Referrer-Policy) via Flask-Talisman or `after_request`. | §3.5; F-08 | Developer | M |
| P2-5 | **Audit logging** for auth events and all admin actions (login success/fail, role change, delete) with timestamp + actor; ship to a monitored sink. | §4.7(b); §3.9; ISO A.8.34; F-12 | Developer + ISO | M |
| P2-6 | **Encrypt data at rest:** move off plaintext SQLite for prod (managed Postgres with encryption) or SQLCipher; document keys per Encryption & Key Management Policy. | §8.4; ISR 8.x | ISO | L |
| P2-7 | **CSRF protection** for any cookie-authenticated state-changing route. | §4.2(b) | Developer | S |

### 🟩 Phase 3 — Secure-SDLC Documentation & Process (Weeks 3–6)

Produce the mandatory artefact set the policy requires for every project. These are one-time authorings that become the reusable DCAS template.

| ID | Document / Process | Policy ref | Owner |
|----|-------------------|-----------|-------|
| P3-1 | **Risk Assessment & Security Objectives** (threats, vulns, objectives, security milestones in project plan). | §4.1 | ISO + PM |
| P3-2 | **Security Requirements** (`SECURITY_REQUIREMENTS.md`): authn, authz, encryption, input validation, error handling, logging. | §4.2; §3.6 | ISO + System Analyst |
| P3-3 | **Software Architecture Document (`SAD.md`)** incl. mandatory Security View: Identification, Authentication, Authorization, Confidentiality, Security Monitoring, Network positioning, Hardening, Patch Management, DB Security. | §6 SAD; §3.7/§3.9 | Solution/Security Architect |
| P3-4 | **Secure Coding Standard (`SECURE_CODING_STANDARD.md`)** — naming, commenting, formatting, data types, routines, **error handling**, plus OWASP rules (injection, XSS, IDOR); ISO-Section approved; binding on all (incl. outsourced) developers. | §7 SCS; §3.8 | Developer Lead + ISO |
| P3-5 | **HLD/LLD Design Docs** with traceability matrix to requirements; Security Architect review gate before coding. | §7 Design | Developer + Security Architect |
| P3-6 | **Test Strategy**: SIT plan (negative/boundary/regression cases), **Software Security Test plan** (SQLi, XSS, XST, parameter/form/URL manipulation, session ID, access control, directory traversal), UAT plan with sign-offs; centralised bug tracking. | §7 SIT/Security Testing/UAT | SIT Lead + ISO |
| P3-7 | **Environment-Separation Standard:** documented dev/SIT vs UAT/prod isolation, no prod data in lower envs, masked/dummy test data only, separate admin groups. | §7 Dev&SIT / §8 UAT&Prod; ISO A.8.31 | Infra + ISO |
| P3-8 | **Release & Change Management Procedure:** release plan (schedule, downtime, **roll-back**, bug tracking), production deploy only after testing + security sign-off, change control for fixes. | §8 Production Release; ISR 8.5.x/8.7.x; ISO A.8.32 | PM + Release Admin |
| P3-9 | **Maintenance & Patch Plan:** scheduled dependency updates, periodic security audits/pen-tests, **annual internal compliance audit to DCASISSC**. | §4.7; §11 | ISO |
| P3-10 | **Source Code Version Control Process:** repo access restriction, branch protection, backup of the repo, Configuration Manager assignment. | §7 VC; §3.10 | Configuration Manager |

### Suggested repository layout for the new artefacts
```
docs/security/
  ├─ RISK_ASSESSMENT.md
  ├─ SECURITY_REQUIREMENTS.md
  ├─ SAD.md                      # Software Architecture Document (+ Security View)
  ├─ SECURE_CODING_STANDARD.md
  ├─ DESIGN_HLD_LLD.md
  ├─ TEST_STRATEGY.md            # SIT + Security Testing + UAT
  ├─ ENVIRONMENT_SEPARATION.md
  ├─ RELEASE_CHANGE_MGMT.md
  └─ COMPLIANCE_TRACEABILITY.md  # this matrix, maintained
SECURITY.md
.gitignore
.eslintrc.json
```

---

## 7. Quick-Win Checklist (do these first)

- [x] **F-01/F-02** Add server-side auth + role check to `/api/admin/users` and admin page → return 403 for non-admins. *(commit `1d86134`)*
- [x] **F-03** Delete hard-coded admin hash + client-side `tryLocalAdmin` from `pages/login.html`. *(commit `1d86134`)*
- [x] **F-04** Remove hard-coded `SECRET_KEY`/client-id fallbacks; rotate secrets; fail-fast on missing env. *(commit `1d86134`)*
- [ ] **F-05** ⚠️ `.gitignore` added ✅; **`instance/users.db` history purge PENDING** — requires explicit written ISO approval before `git filter-repo` force-push. See `SOURCE_CODE_VC_PROCESS.md §7.2`. Rotate exposed creds after purge.
- [x] **F-06** Force `debug=False` in production; `debug` driven by `FLASK_DEBUG` env var (default `0`); Gunicorn serves prod. *(commit `1d86134`)*
- [x] **F-07** Secure cookie flags set (`HttpOnly`, `Secure` in prod, `SameSite=Lax`); rate limiting on auth routes (Flask-Limiter). *(commit `1d86134`, `9b50145`)*
- [x] **F-10** `server.py` restored and hardened; `.eslintrc.json` added; CI green (lint + tests + SAST + dep scan). *(commit `1d86134`)*
- [x] **F-11** Bandit (SAST) + pip-audit (CVE scan) added to CI; 9 dependency CVEs patched. *(commit `1d86134`)*

---

## 8. Compliance Traceability Matrix

### 8.1 ISR v3 (Policy §9) — selected mandated controls

| ISR Control | Requirement (abridged) | Status | Evidence |
|-------------|------------------------|:------:|---------|
| 5.2.1.5 | Authentication/password policy | 🟢 | `server.py`: PBKDF2, min-10 policy, rate limits, Flask-Login sessions |
| 6.1.5.1 | Segregate dev/test/prod | 🟡 | `ENVIRONMENT_SEPARATION.md` ✅; at-rest DB encryption pending (P2-6) |
| 6.1.6.3 | Security testing before acceptance + periodic | 🟢 | 36 pytest tests; Bandit; pip-audit; `TEST_STRATEGY.md` SST plan |
| 8.1.1.1 | Documented secure-dev policy | 🟢 | All 10 `docs/security/` artefacts authored |
| 8.1.1.2 | Security-by-design | 🟢 | `SAD.md §1`; layered controls in `server.py` |
| 8.1.2.1 | SDLC with controls at all phases | 🟢 | P0–P3 all implemented |
| 8.2.1–8.2.5 | Security requirements/design/SCS/architecture/config mgmt | 🟢 | `docs/requirements.md`; `SAD.md`; `DESIGN_HLD_LLD.md`; `SECURE_CODING_STANDARD.md`; `SOURCE_CODE_VC_PROCESS.md` |
| 8.3.1–8.3.4 | Input/processing/output integrity validation | 🟢 | `_validate_*` in `server.py`; `escapeHtml()` + `createTextNode` in `admin.html` |
| 8.4.1–8.4.3 | Restrict install/maintenance; protect test data; source-code access control | 🟡 | `.gitignore` ✅; `CODEOWNERS` file created (GitHub config pending); F-05 history purge pending |
| 8.5.1–8.5.5 | Change management; limit package-change risk; prevent info leakage; outsourced controls | 🟢 | `RELEASE_CHANGE_MGMT.md`; pip-audit + dependabot; `SECURE_CODING_STANDARD.md` |
| 8.6.1–8.6.2 | Security reviews, vuln tests, periodic code reviews | 🟢 | Bandit SAST in CI; pip-audit in CI; `TEST_STRATEGY.md §5` SST checklist |
| 8.7.1–8.7.2 | Deploy only after testing+fixes; security sign-off | 🟢 | `RELEASE_CHANGE_MGMT.md §5–§6`; manual Render deploy gate documented |

### 8.2 ISO/IEC 27001:2022 (Policy §10)

| Control | Title | Status | Evidence |
|---------|-------|:------:|---------|
| A.5.8 | Information security in project management | 🟢 | `RISK_ASSESSMENT.md`; security objectives in all phase docs |
| A.8.25 | Secure development life cycle | 🟢 | All `docs/security/` artefacts; CI pipeline; sign-off gate docs |
| A.8.26 | Application security requirements | 🟢 | `docs/requirements.md`; server-side auth/authz enforced |
| A.8.28 *(implied)* | Secure coding | 🟢 | `SECURE_CODING_STANDARD.md`; Bandit; Ruff; CODEOWNERS |
| A.8.29 | Security testing in development & acceptance | 🟢 | `TEST_STRATEGY.md` (SIT+SST+UAT); 36 tests; Bandit; pip-audit |
| A.8.30 | Outsourced development oversight | 🟢 | `SECURE_CODING_STANDARD.md §7` applies to all contributors; CODEOWNERS |
| A.8.31 | Separation of dev/test/prod | 🟢 | `ENVIRONMENT_SEPARATION.md` |
| A.8.32 | Change management | 🟢 | `RELEASE_CHANGE_MGMT.md` |
| A.8.33 | Test information protection | 🟡 | `.gitignore` protects new commits; F-05 history purge pending |
| A.8.34 | Protection of systems during audit testing | 🟢 | `_audit()` JSON log; `MAINTENANCE_PATCH_PLAN.md` periodic audit schedule |

---

## 9. Recommended Sequencing & Effort

| Phase | Theme | Window | Status |
|-------|-------|--------|:------:|
| **0** | Emergency containment (F-01…F-07) | Days 0–2 | ✅ Complete |
| **1** | Green, security-gated CI/CD | Week 1 | ✅ Complete |
| **2** | Secure-by-design controls in code | Weeks 2–3 | ✅ Complete (P2-6 pending) |
| **3** | Secure-SDLC documentation & process | Weeks 3–6 | ✅ Complete |
| **3+** | SAD missing views + User/Ops/Install manuals + PIR + Annual audit + Gitleaks + version tag | Week 6+ | ✅ Complete |

**Remaining for full compliance sign-off:**
- F-05: git history purge — ISO written approval needed
- P2-6: encrypted managed DB — infrastructure decision needed
- GitHub branch protection rules + `@security-reviewer` team — GitHub admin action
- SIT execution → SIT Manager sign-off
- Software Security Testing execution (ISO Section in UAT) → CISO sign-off
- UAT execution → UAT Manager sign-off
- Post Implementation Review — after first production deploy

**Definition of "compliant" for sign-off (per Policy §8 / ISR 8.7.2):** all Phase 0–3+ findings closed and verified by IT Security, the mandatory documentation set authored and approved by the Information Security Section, CI security gates green, and a formal pre-deployment **security sign-off** recorded before the next production release. An **annual internal audit** report is then submitted to the DCAS Information Security Steering Committee (DCASISSC) per Policy §11.

---

*Prepared as the compliance-planning deliverable for assessing `SolimanAnas/CPG-2025` against the DCAS Secure SDLC Policy and Procedure v1.1. This file is advisory; implementing the changes is tracked by the Phase 0–3 tasks above.*
