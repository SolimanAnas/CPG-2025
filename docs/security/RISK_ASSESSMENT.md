# Risk Assessment — DCAS CPG 2025

**Policy ref:** Secure SDLC §4.1 (Planning Phase) · §3.1 (Policy Statement 1)
**Document ref:** CPG2025-RA-001 · Version 1.0 · 2026-06-09
**Classification:** Shared – Confidential
**Review cadence:** Annually and after any significant architectural change.

---

## 1. Scope

This risk assessment covers the DCAS CPG 2025 Clinical Review Platform:

| Component | Description |
|-----------|-------------|
| Flask backend (`server.py`) | Authentication, user management, API |
| PWA front-end | Guideline content, quizzes, drug calculator, ECG tools |
| Admin console (`/api/admin/*`, `admin.html`) | IT staff management of clinical users |
| SQLite / managed DB | User PII (name, email, professional level, password hash) |
| GitHub repository | Source code, CI/CD pipeline |
| Render cloud hosting | Production runtime, HTTPS termination |

**Out of scope:** DCAS network infrastructure, Google OAuth platform internals, end-user devices.

---

## 2. Assets & Criticality

| Asset | Data classification | Criticality | Owner |
|-------|---------------------|:-----------:|-------|
| User PII (name, email, role) | Confidential | High | IT Admin |
| Password hashes | Confidential | High | IT Admin |
| Flask session tokens | Confidential | High | IT Admin |
| Clinical guideline content | Internal | Medium | Clinical Team |
| Admin console | N/A (function) | High | IT Admin |
| Source code / CI secrets | Confidential | High | Development Team |
| Google OAuth client credentials | Confidential | High | IT Admin |

---

## 3. Threat Catalogue & Risk Register

Risk score = Likelihood (1–3) × Impact (1–3). Tolerance threshold: ≥ 6 requires immediate mitigation.

### 3.1 Authentication & Authorisation

| ID | Threat | L | I | Raw | Control(s) | Residual |
|----|--------|:-:|:-:|:---:|-----------|:--------:|
| R-01 | Brute-force / credential stuffing on `/api/login` | 3 | 3 | 9 | Rate limiting (10/min), generic error messages | Low (2) |
| R-02 | Weak passwords → account compromise | 3 | 3 | 9 | Password policy (min 10 chars, upper/lower/digit, common-pw block) | Low (2) |
| R-03 | Session fixation / cookie theft | 2 | 3 | 6 | `HttpOnly`, `Secure`, `SameSite=Lax` cookies; HTTPS-only | Low (2) |
| R-04 | Broken access control — admin endpoint unauthorised access | 3 | 3 | 9 | `@login_required` + admin role check on all `/api/admin/*`; 403 for non-admins | Low (2) |
| R-05 | Forged session (predictable `SECRET_KEY`) | 2 | 3 | 6 | `SECRET_KEY` from env; random ephemeral if unset; no hard-coded fallback | Low (2) |
| R-06 | Google OAuth token replay / forged token | 2 | 3 | 6 | Server-side `id_token.verify_oauth2_token`; GOOGLE_CLIENT_ID from env | Low (2) |

### 3.2 Injection & Input Validation

| ID | Threat | L | I | Raw | Control(s) | Residual |
|----|--------|:-:|:-:|:---:|-----------|:--------:|
| R-07 | SQL injection | 2 | 3 | 6 | SQLAlchemy ORM (parameterised queries); no raw SQL | Low (1) |
| R-08 | Stored/reflected XSS via admin console | 2 | 3 | 6 | `escapeHtml()` on all user data in innerHTML; DOM-based toast; CSP | Low (1) |
| R-09 | CSRF on state-changing admin API | 2 | 3 | 6 | SameSite=Lax; Content-Type + X-Requested-With guard | Low (1) |
| R-10 | Path traversal via `/<path>` static route | 2 | 3 | 6 | Flask `send_from_directory` limits to app root; no `..` handling | Low (2) |

### 3.3 Data Protection

| ID | Threat | L | I | Raw | Control(s) | Residual |
|----|--------|:-:|:-:|:---:|-----------|:--------:|
| R-11 | PII exposure via unencrypted DB | 2 | 3 | 6 | Passwords hashed (Werkzeug PBKDF2); `psycopg2-binary` added; production must use `DATABASE_URL=postgresql://...?sslmode=require` (P2-6) | Low (2) |
| R-12 | PII in version control (git history) | 3 | 3 | 9 | `.gitignore` for `*.db`; `instance/users.db` **purged from all history** via `git filter-repo` on 2026-06-12 | Low (1) ✅ |
| R-13 | Secrets exposed in environment logs | 2 | 2 | 4 | Secrets in env vars; no debug logging of config | Low (2) |

### 3.4 Infrastructure & Supply Chain

| ID | Threat | L | I | Raw | Control(s) | Residual |
|----|--------|:-:|:-:|:---:|-----------|:--------:|
| R-14 | Vulnerable dependency exploited | 3 | 3 | 9 | `pip-audit` in CI; Dependabot; pinned versions | Low (2) |
| R-15 | Werkzeug debugger RCE in production | 2 | 3 | 6 | `FLASK_DEBUG` off by default; driven by env var | Low (1) |
| R-16 | Malicious code merged without review | 2 | 3 | 6 | Branch protection + CODEOWNERS on security-sensitive files | Medium (4) |
| R-17 | Exposed CI secret (GitHub Actions) | 2 | 3 | 6 | Secrets via GitHub Actions environment; not logged | Low (2) |

### 3.5 Availability

| ID | Threat | L | I | Raw | Control(s) | Residual |
|----|--------|:-:|:-:|:---:|-----------|:--------:|
| R-18 | DoS via auth endpoint flooding | 2 | 2 | 4 | Rate limiting; Render/infra-level DDoS protection | Low (2) |
| R-19 | PWA cache serving stale / malicious content | 1 | 2 | 2 | Cache-bust via SW version; OTA update protocol | Low (1) |

---

## 4. Security Objectives (derived from residual risk)

| Objective | Addresses |
|-----------|-----------|
| Enforce authentication and admin role check on every admin endpoint | R-01, R-02, R-04 |
| Protect session tokens in transit and at rest | R-03, R-05 |
| Validate and sanitise all user-supplied input; block injection and XSS | R-07, R-08 |
| Apply CSRF mitigations on all state-changing API routes | R-09 |
| Keep all dependencies patched; scan on every CI run | R-14 |
| Purge PII from version control history — COMPLETED 2026-06-12 | R-12 |
| Use PostgreSQL with `sslmode=require` in production (P2-6 — `psycopg2-binary` added) | R-11 |
| Never run debug mode in production | R-15 |

---

## 5. Residual Risk Acceptance

| Risk | Residual | Accepted by | Date | Notes |
|------|:--------:|-------------|------|-------|
| R-11 DB at rest (SQLite dev) | Low | Project Owner / Developer | 2026-06-12 | `psycopg2-binary` added; production uses PostgreSQL SSL. SQLite is development-only, never exposed. |
| R-12 PII in git history | **Closed** | — | 2026-06-12 | `instance/users.db` purged from all history via `git filter-repo`. Rotate `SECRET_KEY` on next Render deploy. |
| R-16 Single-developer review | Medium | Project Owner / Developer | 2026-06-12 | Solo project — formal peer review not applicable. Compensating controls: CODEOWNERS (ISO team for corp review), Bandit, Gitleaks, pip-audit all in CI. |

All other residuals: **Low** — accepted by Developer / Project Owner (same person — sole developer).

---

## 6. Review & Approval

| Role | Name | Sign-off |
|------|------|:--------:|
| Information Security Section | | ☐ |
| Project Owner | | ☐ |
| Project Manager | | ☐ |
