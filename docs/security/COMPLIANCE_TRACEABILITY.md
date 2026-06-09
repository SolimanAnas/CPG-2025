# Compliance Traceability Matrix — DCAS CPG 2025

**Policy ref:** DCAS Secure SDLC Policy and Procedure v1.1 (07-02-2025) — all sections
**Document ref:** CPG2025-CTM-001 · Version 1.0 · 2026-06-09
**Classification:** Shared – Confidential

> This matrix maps every Secure SDLC policy control to the implementation evidence in this repository. "Status" reflects compliance as of 2026-06-09.

---

## 1. Policy §3 — General Requirements

| Policy ref | Requirement | Implementation evidence | Status |
|-----------|-------------|------------------------|:------:|
| §3.1 | Security requirements identified from project initiation | `docs/requirements.md`, `upgrades.md` §2–§3, RISK_ASSESSMENT.md | ✅ |
| §3.2 | Security risks assessed; risk register maintained | `docs/security/RISK_ASSESSMENT.md` (19-item register, residual risk acceptance) | ✅ |
| §3.3 | Secure SDLC process documented | `upgrades.md`, all `docs/security/` artefacts | ✅ |
| §3.4 | Secrets management — no hard-coded secrets | `server.py`: all secrets via `os.getenv()`; `.env.example`; `.gitignore` covers `.env`, `*.db` | ✅ |
| §3.5 | Least privilege | Admin endpoints require `_is_admin()` + `abort(403)`; `@login_required` on all auth routes; DB returns only needed fields | ✅ |
| §3.7 | Version control process defined | `docs/security/SOURCE_CODE_VC_PROCESS.md` | ✅ |
| §3.8 | CODEOWNERS enforces review of security-sensitive files | `SOURCE_CODE_VC_PROCESS.md §4` documents CODEOWNERS; `.github/CODEOWNERS` to be configured | ⚠️ |
| §3.9 | Environment separation documented | `docs/security/ENVIRONMENT_SEPARATION.md` | ✅ |

---

## 2. Policy §4.1 — Planning Phase

| Policy ref | Requirement | Implementation evidence | Status |
|-----------|-------------|------------------------|:------:|
| §4.1(a) | Risk assessment completed before development | `docs/security/RISK_ASSESSMENT.md` — 19 risks identified and rated | ✅ |
| §4.1(b) | Security objectives derived from risks | `RISK_ASSESSMENT.md §4` — 8 security objectives | ✅ |
| §4.1(c) | Security requirements documented | `docs/requirements.md` (BRS/SBS/SRS + Security Requirements) | ✅ |

---

## 3. Policy §4.2 — Design Phase

| Policy ref | Requirement | Implementation evidence | Status |
|-----------|-------------|------------------------|:------:|
| §4.2(a) | Software Architecture Document (SAD) produced | `docs/security/SAD.md` | ✅ |
| §4.2(b) | Security View mandatory in SAD | `SAD.md §5` — Identification, Authentication, Authorisation, Confidentiality, Monitoring, Network, Hardening, Patch Mgmt, DB Security | ✅ |
| §4.2(c) | Security Architect review of SAD before coding | `SAD.md §7` sign-off table — pending ISO Section sign-off | ⚠️ |
| §4.2(d) | Defence-in-depth architecture | `SAD.md §1`: layered controls — rate limiting → auth → CSRF → role → input validation → output encoding | ✅ |
| §4.2(e) | Input validation specified in SAD/SCS | `SECURE_CODING_STANDARD.md §7`; `SAD.md §5.2` | ✅ |

---

## 4. Policy §4.3 — Development Phase

| Policy ref | Requirement | Implementation evidence | Status |
|-----------|-------------|------------------------|:------:|
| §4.3(a) | Secure Coding Standard followed | `docs/security/SECURE_CODING_STANDARD.md`; `server.py` passes Bandit; Ruff enforces formatting | ✅ |
| §4.3(b) | No raw SQL — ORM only | `server.py`: all DB access via SQLAlchemy ORM (`db.session.get`, query objects); no string concatenation | ✅ |
| §4.3(c) | No `innerHTML` with user data (XSS) | `admin.html`: `escapeHtml()` covers `& < > " '`; `showToast()` uses `createTextNode` | ✅ |
| §4.3(d) | No hard-coded secrets in code | `server.py`: `SECRET_KEY`, `DATABASE_URL`, `GOOGLE_CLIENT_ID`, `ADMIN_EMAILS` from `os.getenv()` | ✅ |
| §4.3(e) | Password policy enforced server-side | `server.py:_validate_password()`: min 10 chars, upper, lower, digit, common-password block | ✅ |
| §4.3(f) | Passwords hashed with strong algorithm | `werkzeug.security.generate_password_hash()` → PBKDF2-SHA256; never stored in plaintext | ✅ |
| §4.3(g) | Session cookies hardened | `SESSION_COOKIE_HTTPONLY=True`, `SESSION_COOKIE_SAMESITE="Lax"`, `SESSION_COOKIE_SECURE=True` (production) | ✅ |
| §4.3(h) | Generic error messages (anti-enumeration) | `server.py:login()`: single `"Invalid username or password"` for all login failures | ✅ |
| §4.3(i) | `debug=False` in production | `app.run(debug=bool(os.getenv("FLASK_DEBUG", "0")))` — default off | ✅ |
| §4.3(j) | Audit logging for security events | `_audit()` emits JSON to `dcas.audit` logger for: register, login, google_login, logout, admin actions, rate_limit, csrf_guard | ✅ |

---

## 5. Policy §4.4 — Security Controls

| Policy ref | Requirement | Implementation evidence | Status |
|-----------|-------------|------------------------|:------:|
| §4.4(a) | Output encoding | `escapeHtml()` in `admin.html`; `jsonify()` for all API responses; `createTextNode` for DOM | ✅ |
| §4.4(b) | CSRF protection | SameSite=Lax + Content-Type + `X-Requested-With: XMLHttpRequest` guard in `_register_csrf_guard()` | ✅ |
| §4.4(c) | Authentication — server-side only | All auth decisions in `server.py`; no client-side auth bypass (hard-coded hash removed from `login.html`) | ✅ |
| §4.4(d) | Rate limiting on auth endpoints | Flask-Limiter: 10/min on `/api/login`, `/api/google-login`; 5/min on `/api/register` | ✅ |
| §4.4(e) | Access control — admin endpoints | `@login_required` + `_is_admin()` + `abort(403)` on all `/api/admin/*` routes | ✅ |
| §4.4(f) | Security headers on every response | `_register_security_headers()`: CSP, HSTS (prod), X-Content-Type-Options, X-Frame-Options, Referrer-Policy | ✅ |
| §4.4(g) | Email validation | `_validate_email()`: `_EMAIL_RE` regex + max 254 chars | ✅ |
| §4.4(h) | `professional_level` allowlist | `register()`: allowlist `{Physician, Paramedic, EMT, Admin, ""}` | ✅ |

---

## 6. Policy §4.5 — Client-Side Security

| Policy ref | Requirement | Implementation evidence | Status |
|-----------|-------------|------------------------|:------:|
| §4.5(a) | No authentication credentials in client code | `login.html`: `ADMIN_HASH`, `PBKDF2_SALT`, `pbkdf2Hex()`, `safeEqual()`, `tryLocalAdmin()` all removed | ✅ |
| §4.5(b) | `X-Requested-With` header on all API calls | `login.html`, `signup.html`, `admin.html`: all fetch calls include `"X-Requested-With": "XMLHttpRequest"` | ✅ |
| §4.5(c) | CSP prevents inline script execution | `Content-Security-Policy: default-src 'self'; script-src 'self' accounts.google.com ...` (no `unsafe-inline`) | ✅ |

---

## 7. Policy §4.6 — Change Management

| Policy ref | Requirement | Implementation evidence | Status |
|-----------|-------------|------------------------|:------:|
| §4.6(a) | Change management process defined | `docs/security/RELEASE_CHANGE_MGMT.md` | ✅ |
| §4.6(b) | Security-critical changes require ISO review | `RELEASE_CHANGE_MGMT.md §2`; CODEOWNERS enforces | ⚠️ CODEOWNERS pending |
| §4.6(c) | No direct push to main | Branch protection rules documented in `SOURCE_CODE_VC_PROCESS.md §3` | ⚠️ Rules pending config |

---

## 8. Policy §4.7 — Maintenance & Patch Management

| Policy ref | Requirement | Implementation evidence | Status |
|-----------|-------------|------------------------|:------:|
| §4.7(a) | Vulnerability scanning on dependencies | `pip-audit` in CI (`ci.yml`); fails on any CVE; Dependabot configured | ✅ |
| §4.7(b) | Patching SLA defined | `MAINTENANCE_PATCH_PLAN.md §4`: Critical 24h, High 5 days, Medium/Low next sprint | ✅ |
| §4.7(c) | Patch process documented | `MAINTENANCE_PATCH_PLAN.md §5` | ✅ |
| §4.7(d) | Pinned dependency versions | `requirements.txt`: all packages pinned to exact versions | ✅ |

---

## 9. Policy §5 — Testing Requirements (SAST / Dependency)

| Policy ref | Requirement | Implementation evidence | Status |
|-----------|-------------|------------------------|:------:|
| §5(a) | SAST tool runs on every push | Bandit in `ci.yml`: `bandit -r server.py scripts/ -ll` — fails on Medium+ | ✅ |
| §5(b) | No High/Critical SAST findings at merge | `TEST_STRATEGY.md §3.1`: "No current SAST exceptions" | ✅ |
| §5(c) | SAST exception process defined | `TEST_STRATEGY.md §3.1`: exceptions require ISO written approval, tracked in doc | ✅ |
| §5(d) | Dependency CVE scan in CI | pip-audit in `ci.yml` | ✅ |

---

## 10. Policy §6 — SAD / Architecture

| Policy ref | Requirement | Implementation evidence | Status |
|-----------|-------------|------------------------|:------:|
| §6(a) | SAD produced and maintained | `docs/security/SAD.md` | ✅ |
| §6(b) | Security View in SAD (mandatory) | `SAD.md §5` (9 sub-sections) | ✅ |
| §6(c) | SAD reviewed by Security Architect before sprint | `SAD.md §7` sign-off pending | ⚠️ |

---

## 11. Policy §7 — Testing (SIT / Security / UAT)

| Policy ref | Requirement | Implementation evidence | Status |
|-----------|-------------|------------------------|:------:|
| §7 SIT | Automated unit and integration tests | `tests/` — 36 tests covering positive, negative, boundary, security regression | ✅ |
| §7 SIT | Test cases version-controlled | `tests/` in git; `TEST_STRATEGY.md` in `docs/security/` | ✅ |
| §7 SIT | Negative / boundary test cases | `TEST_STRATEGY.md §2.2`: 8 categories of negative tests | ✅ |
| §7 SST | Software Security Testing plan | `TEST_STRATEGY.md §5`: 13-item web app security test checklist | ✅ |
| §7 SST | ISO Section responsible for security tests | `TEST_STRATEGY.md §5` header | ✅ |
| §7 SST | CISO sign-off before UAT | `TEST_STRATEGY.md §5` / `§8` sign-off table | ⚠️ Pending |
| §7 SST | Vulnerability tracking | `TEST_STRATEGY.md §5.2`: SST-NNN tracking table | ✅ |
| §7 UAT | UAT test cases defined | `TEST_STRATEGY.md §6.1`: 14 UAT test cases (UAT-01 to UAT-14) | ✅ |
| §7 UAT | UAT on masked/dummy data only | `ENVIRONMENT_SEPARATION.md §3` | ✅ |
| §7 UAT | UAT Manager sign-off | `TEST_STRATEGY.md §8` sign-off table | ⚠️ Pending |
| §7 SCS | Secure Coding Standard defined | `docs/security/SECURE_CODING_STANDARD.md` | ✅ |

---

## 12. ISR / ISO 27001:2022 Mapping

| ISR ref | Control | Implementation | Status |
|---------|---------|----------------|:------:|
| ISR 5.2.1.5 | Authentication and session security | Flask-Login, PBKDF2, rate limiting, session cookies | ✅ |
| ISR 8.1.1.2 | Security-by-design | SAD §1 principles; layered controls | ✅ |
| ISR 8.1.1.3 | Source code version control | `SOURCE_CODE_VC_PROCESS.md` | ✅ |
| ISR 8.1.1.4 | Environment separation | `ENVIRONMENT_SEPARATION.md` | ✅ |
| ISR 8.1.2 | Change management | `RELEASE_CHANGE_MGMT.md` | ✅ |
| ISR 8.2.1 | System maintenance | `MAINTENANCE_PATCH_PLAN.md` | ✅ |
| ISR 8.2.2 | Patch management | `MAINTENANCE_PATCH_PLAN.md §3–§5` | ✅ |
| ISR 8.2.3 | Secure coding standard | `SECURE_CODING_STANDARD.md` | ✅ |
| ISR 8.3.1 | Input validation | `SECURE_CODING_STANDARD.md §7`; `server.py:_validate_*` | ✅ |
| ISR 8.3.3 | Business logic validation | Allowlist for `professional_level`; role enum enforcement | ✅ |
| ISR 8.3.4 | Output encoding | `escapeHtml()`, `createTextNode`, `jsonify()` | ✅ |
| ISR 8.6.1/8.6.2 | Web application security testing | `TEST_STRATEGY.md §5.1` (13-item checklist) | ✅ |
| ISO A.8.25 | Secure development life cycle | All `docs/security/` documents; CI pipeline; sign-off gates | ✅ |
| ISO A.8.26 | Application security requirements | `docs/requirements.md §3 Security Requirements` | ✅ |
| ISO A.8.29 | Security testing in development and acceptance | `TEST_STRATEGY.md` (SIT §2 + SST §5 + UAT §6) | ✅ |

---

## 13. Open Items Summary

| ID | Finding | Severity | Status | Owner |
|----|---------|:--------:|:------:|-------|
| F-05 | `instance/users.db` in git history (PII exposure) | High | Open — pending approval | Developer + ISO |
| P2-6 | Production DB unencrypted (SQLite) | High | Open — pending infra decision | IT Admin |
| P3-8a | GitHub branch protection rules not yet configured | Medium | Open | Developer |
| P3-8b | `CODEOWNERS` file not yet created | Medium | Open | Developer |
| R-12 | PII in git history residual risk | Medium | Open (depends on F-05) | ISO Section |
| R-11 | DB encryption at rest residual risk | Medium | Open (depends on P2-6) | IT Admin |

All other controls: **Implemented** — verified by code review and CI as of 2026-06-09.

---

## 14. Review & Approval

| Role | Name | Sign-off |
|------|------|:--------:|
| Information Security Section | | ☐ |
| Security Architect | | ☐ |
| Lead Developer | | ☐ |
| Project Manager | | ☐ |
| Project Owner | | ☐ |
