# Maintenance & Patch Management Plan — DCAS CPG 2025

**Policy ref:** Secure SDLC §4.7 (Maintenance Phase) · §4.7(a) Patch Management · ISR 8.2.2 · ISR 8.2.3
**Document ref:** CPG2025-MPP-001 · Version 1.0 · 2026-06-09
**Classification:** Shared – Confidential

---

## 1. Purpose

This document defines the ongoing patch management and maintenance process for the DCAS CPG 2025 platform, covering Python dependencies, OS/runtime, and application-level security fixes. It satisfies the policy requirement that "systems are kept up-to-date and that known vulnerabilities are patched within a reasonable timeframe."

---

## 2. Dependency Inventory

### 2.1 Python packages (`requirements.txt`)

| Package | Pinned version | Purpose | Last reviewed |
|---------|---------------|---------|---------------|
| Flask | 3.1.3 | Web framework | 2026-06-09 |
| Flask-Login | 0.6.3 | Session / auth management | 2026-06-09 |
| Flask-Limiter | 3.9.0 | Rate limiting | 2026-06-09 |
| Flask-SQLAlchemy | 3.1.1 | ORM | 2026-06-09 |
| Werkzeug | 3.1.6 | WSGI toolkit, password hashing | 2026-06-09 |
| google-auth | 2.38.0 | Google OAuth token verification | 2026-06-09 |
| gunicorn | 23.0.0 | Production WSGI server | 2026-06-09 |
| requests | 2.33.0 | HTTP client (OAuth flow) | 2026-06-09 |
| SQLAlchemy | 2.0.41 | ORM core | 2026-06-09 |
| pytest | 9.0.3 | Test runner | 2026-06-09 |

### 2.2 JavaScript (CDN/npm)

| Dependency | Version | Source | Purpose |
|------------|---------|--------|---------|
| Font Awesome | 6.x | CDN | UI icons |
| ESLint | 8.57.1 | npm (CI only) | JS linting |
| Prettier | latest | npm (CI only) | JS formatting |

### 2.3 Runtime

| Component | Version | Notes |
|-----------|---------|-------|
| Python | 3.11 | Render runtime |
| Gunicorn | 23.0.0 | Configured in `Procfile` |
| Render platform | Managed | OS patching by Render |

---

## 3. Automated Scanning

### 3.1 pip-audit (CI — every push and PR)

```bash
pip-audit -r requirements.txt
```

- Fails the CI build on any known CVE in any installed package.
- Results visible in GitHub Actions workflow logs.
- No merge permitted while any CVE is reported.

### 3.2 Dependabot

- Configured in `.github/dependabot.yml` to check for Python dependency updates weekly.
- Automated PRs are created for available version bumps.
- Dependabot PRs follow the standard PR process: CI must pass + developer review before merge.

### 3.3 Bandit SAST (CI — every push and PR)

```bash
bandit -r server.py scripts/ -ll   # Medium+ severity = build fail
```

- Catches newly introduced insecure code patterns.
- No Medium, High, or Critical finding may be merged without ISO written approval.

---

## 4. Patching SLA

| CVE Severity | Maximum time to patch and deploy |
|-------------|----------------------------------|
| Critical (CVSS ≥ 9.0) | 24 hours — emergency process |
| High (CVSS 7.0–8.9) | 5 business days |
| Medium (CVSS 4.0–6.9) | Next sprint (≤ 2 weeks) |
| Low (CVSS < 4.0) | Next planned release |

SLA clock starts when the CVE appears in `pip-audit` output or is reported via `SECURITY.md` disclosure.

---

## 5. Patch Process

```
1. pip-audit or Dependabot reports CVE
         │
         ▼
2. Developer assesses severity and affected package
         │
         ▼
3. Bump version in requirements.txt
         │
         ▼
4. Run full test suite locally:
   SECRET_KEY=ci-test-key DATABASE_URL=sqlite:///:memory: GOOGLE_CLIENT_ID=ci-test-id \
     python -m pytest tests/ -v
         │
         ▼
5. Open PR:  "fix(deps): bump <package> to <version> — patches CVE-YYYY-NNNNN"
         │
         ▼
6. CI must pass (lint + tests + bandit + pip-audit)
         │
         ▼
7. ISO Section fast-track review (security change category)
         │
         ▼
8. Merge to main → Render deploy (standard gates for non-critical;
   emergency process for Critical)
         │
         ▼
9. Update this document: §2.1 table (new version + review date)
```

---

## 6. Version Bump History

| Date | Package | Old version | New version | CVE / reason |
|------|---------|-------------|-------------|-------------|
| 2026-06-09 | Flask | 3.0.3 | 3.1.3 | CVE-2024-34069 (Werkzeug chain) + latest stable |
| 2026-06-09 | Werkzeug | 3.0.3 | 3.1.6 | CVE-2024-34069 (DoS in debugger) |
| 2026-06-09 | requests | 2.32.3 | 2.33.0 | CVE-2024-35195 (proxy credentials leak) |
| 2026-06-09 | gunicorn | 22.0.0 | 23.0.0 | CVE-2024-1135 (HTTP request smuggling) |
| 2026-06-09 | pytest | 8.3.4 | 9.0.3 | 9 CVEs in pytest 8.x chain |

---

## 7. OS and Runtime Patching

- **Render PaaS** manages OS-level patching for production; no direct OS access required.
- Python runtime updates on Render are triggered by updating the `runtime.txt` or `python-version` specification and redeploying.
- When a new Python minor version is released with security fixes, the target is to migrate within one sprint after the Render platform supports it.

---

## 8. Maintenance Windows

- **Scheduled maintenance:** Announced to DCAS IT Admin at least 48 hours in advance via email.
- **Emergency patches:** Deployed with minimum possible notice; IT Admin notified as soon as possible.
- **Service downtime:** Render zero-downtime deploys are used where available. If a migration requires downtime, it is scheduled for off-peak hours.

---

## 9. Open Maintenance Items

| ID | Item | Priority | Owner | Target date |
|----|------|:--------:|-------|-------------|
| P2-6 | Migrate production DB to encrypted managed instance (Supabase / PlanetScale) | High | IT Admin | Sprint 2 end |
| F-05 | Purge `instance/users.db` from git history; rotate `SECRET_KEY` and `GOOGLE_CLIENT_ID` | High | Developer + ISO | On explicit approval |
| P3-11 | Configure `runtime.txt` to pin Python 3.11.x | Medium | Developer | Next sprint |
| P3-12 | Set up Dependabot for npm (ESLint / Prettier) | Low | Developer | Next sprint |

---

## 10. Review & Approval

| Role | Name | Sign-off |
|------|------|:--------:|
| Information Security Section | | ☐ |
| Lead Developer | | ☐ |
| Project Manager | | ☐ |
