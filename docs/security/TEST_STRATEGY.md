# Test Strategy — DCAS CPG 2025

**Policy ref:** Secure SDLC §7 (Unit Testing · SIT · Software Security Testing · UAT) · §4.5
**Document ref:** CPG2025-TST-001 · Version 1.0 · 2026-06-09
**Classification:** Shared – Confidential

---

## 1. Overview

| Phase | Responsible | Gate |
|-------|-------------|------|
| Unit / Integration (automated) | Developer | CI must be green before PR merge |
| Static Source Code Scanning (SAST) | Developer + ISO | CI: Bandit; no High/Critical open |
| Dependency Scan | Developer + ISO | CI: pip-audit; no known CVEs |
| Software Security Testing | Information Security Section | ISO sign-off before UAT |
| User Acceptance Testing (UAT) | Project Owner + End Users | UAT Manager sign-off before prod deploy |

---

## 2. Unit & Integration Tests

**Tool:** pytest 9.x · **Location:** `tests/` · **CI trigger:** every push and PR.

### 2.1 Test fixtures

| Fixture | Purpose |
|---------|---------|
| `app` | In-memory SQLite Flask app; rate limiting disabled (`RATELIMIT_ENABLED: False`) |
| `client` | Test client with default CSRF headers (`X-Requested-With: XMLHttpRequest`) |

### 2.2 Test coverage requirements (policy §7 "SIT")

- **Positive paths:** registration, login (email + Google OAuth), logout, admin CRUD.
- **Negative / boundary cases** (policy: "adequate negative test cases … out-of-range data, special characters, boundary conditions"):

| Category | Test cases |
|----------|-----------|
| Password policy | Too short, no upper, no lower, no digit, common password |
| Email validation | Missing `@`, missing domain, too long |
| Input enumeration prevention | Same error message for bad-user vs bad-password |
| Access control | Anon → 302/401; non-admin → 403; admin → 200 |
| CSRF guard | Form POST rejected; missing X-Requested-With rejected; valid JSON passes |
| Admin CRUD | Role update; delete; non-admin privilege escalation attempt |
| Security headers | All required headers present; CSP blocks framing |
| Audit log | Login success, login failure, admin action each produce an audit record |

### 2.3 Running the suite

```bash
SECRET_KEY=ci-test-key DATABASE_URL=sqlite:///:memory: GOOGLE_CLIENT_ID=ci-test-id \
  python -m pytest tests/ -v
```

---

## 3. Static Source Code Scanning (SAST)

**Tool:** Bandit (Python) · **CI trigger:** every push and PR.

```bash
bandit -r server.py scripts/ -ll   # fail on Medium+ severity
```

**Rule:** No open Medium, High, or Critical Bandit findings permitted at merge. Findings must be fixed or explicitly accepted with ISO written approval (tracked in this document as exceptions).

### 3.1 Current SAST exceptions

*None.*

---

## 4. Dependency Vulnerability Scan

**Tool:** pip-audit · **CI trigger:** every push and PR.

```bash
pip-audit -r requirements.txt
```

**Rule:** No known CVEs permitted at merge. Version bumps to patch CVEs must be validated with the full test suite before merging.

---

## 5. Software Security Testing Plan

**Responsible:** Information Security Section
**Environment:** UAT (separate from production — see `ENVIRONMENT_SEPARATION.md`)
**Trigger:** After SIT sign-off; before UAT begins.
**Sign-off:** CISO (per policy §7 "The results ... approved by the CISO with a formal sign off").

### 5.1 Web application test checklist (policy §7, ISR 8.6.1/8.6.2)

| Test | Tool / Method | Pass criteria |
|------|--------------|---------------|
| **SQL Injection** | SQLMap / manual; test all API params | No injection possible via ORM |
| **Cross-Site Scripting (XSS)** | OWASP ZAP / manual payloads on all input fields and API responses | No stored/reflected XSS; CSP blocks inline execution |
| **Cross-Site Tracing (XST)** | Send HTTP TRACE request | Server returns 405 or Render blocks TRACE |
| **Parameter Manipulation** | Tamper API query params, JSON fields | Invalid types / out-of-range values rejected |
| **Form Field Manipulation** | Modify `professional_level` to arbitrary value | Allowlist enforced; 400 returned |
| **URL Manipulation** | Path traversal: `/../etc/passwd`, `/%2e%2e/` | Flask `send_from_directory` restricts to app root |
| **Session ID Security** | Inspect cookie flags; attempt session fixation | `HttpOnly`, `Secure`, `SameSite=Lax` set; session regenerated post-login |
| **Access Control** | Access `/api/admin/users` as anon, as non-admin | 302/401 and 403 respectively |
| **CSRF** | Cross-origin form POST to `/api/login` | Rejected by Content-Type + X-Requested-With guard |
| **Rate Limiting / Brute Force** | Send >10 requests/min to `/api/login` | 429 returned after threshold |
| **Authentication bypass** | Submit login with empty/null credentials; replay session | 400 / 401; session not valid after logout |
| **Web Page Code Analysis** | Review CSP headers; check for secrets in JS bundles | No secrets; CSP present |
| **Directory Traversal** | Request `/../server.py`, `/%2e%2e/instance/users.db` | 404 returned; file not served |

### 5.2 Vulnerability tracking

All findings are logged with:

| Field | Value |
|-------|-------|
| ID | Sequential (SST-001, SST-002, …) |
| Description | What was found |
| Severity | Critical / High / Medium / Low |
| Endpoint / location | Affected route or file |
| Reproduction steps | Exact request/payload |
| Status | Open / In-progress / Fixed / Accepted |
| Fixed in version | Commit hash |

Findings must be resolved and retested before UAT may begin (policy §7).

---

## 6. User Acceptance Testing (UAT)

**Responsible:** Project Owner + End Users + Business Analysts (policy §7)
**Environment:** UAT environment with masked/dummy data only
**Trigger:** After ISO Software Security Testing sign-off.
**Sign-off:** UAT Manager + Project Manager + Project Owner (policy §7).

### 6.1 UAT test cases

| ID | Requirement (BRS/SBS ref) | Pass criteria |
|----|--------------------------|---------------|
| UAT-01 | FR-1: Register | User can register with valid email, strong password, role |
| UAT-02 | FR-1: Register validation | Weak password / invalid email / disallowed role shown clear error |
| UAT-03 | FR-2: Email/password login | Login succeeds; redirected to index |
| UAT-04 | FR-2: Google OAuth login | Google login succeeds with valid account |
| UAT-05 | FR-2: Failed login | Wrong password returns error; no account enumeration |
| UAT-06 | FR-3: Guideline content | Chapter content loads; flashcards and quizzes functional |
| UAT-07 | FR-3: Drug calculator | Drug dosing calculator returns correct results |
| UAT-08 | FR-4: Progress persistence | Chapter completion and quiz scores retained across sessions |
| UAT-09 | FR-6: Offline mode | Core content accessible without network connection |
| UAT-10 | FR-5: Admin — list users | Admin user can view all registered clinical staff |
| UAT-11 | FR-5: Admin — role update | Admin can change a user's professional level |
| UAT-12 | FR-5: Admin — delete user | Admin can delete a user |
| UAT-13 | Security adequacy | Non-admin cannot access admin console; anon redirected to login |
| UAT-14 | Regulatory | Patient data (PII) not present in dev/test environment |

---

## 7. Test Case Version Control

Per policy §7:
- All test cases stored in `tests/` (unit/integration) and this document (security/UAT checklists).
- Versions controlled via git.
- Bug tracking: GitHub Issues; label `security` for security findings.
- Access to test results restricted to authorised project team (GitHub repo access).

---

## 8. Review & Approval

| Role | Name | Sign-off |
|------|------|:--------:|
| SIT / Test Lead | | ☐ |
| Information Security Section (security test plan) | | ☐ |
| CISO (security test sign-off) | | ☐ |
| UAT Manager | | ☐ |
| Project Manager | | ☐ |
| Project Owner | | ☐ |
