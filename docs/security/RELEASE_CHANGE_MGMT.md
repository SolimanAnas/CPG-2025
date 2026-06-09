# Release & Change Management — DCAS CPG 2025

**Policy ref:** Secure SDLC §5 (Change Management) · §4.6 · §4.7 · ISR 8.1.2 · ISR 8.2.1
**Document ref:** CPG2025-RCM-001 · Version 1.0 · 2026-06-09
**Classification:** Shared – Confidential

---

## 1. Purpose

This document defines how code changes, dependency updates, and configuration changes to the DCAS CPG 2025 platform are reviewed, approved, and released — ensuring that no untested or unauthorised change reaches production.

---

## 2. Change Categories

| Category | Examples | Approval required |
|----------|---------|-------------------|
| **Security-critical** | Auth logic, CSRF guard, session config, secrets management, admin routes, security headers, rate limiting | ISO Section + Lead Developer |
| **Dependency update (CVE)** | Patching a CVE via `requirements.txt` version bump | Developer + ISO Section (fast-track) |
| **Feature change** | New guideline content, new PWA feature, UI change | Developer + Project Owner |
| **Documentation** | Updates to `docs/security/`, `upgrades.md`, README | Lead Developer |
| **Hotfix** | Critical production fix (e.g. crash, data exposure) | Emergency process — see §5 |

---

## 3. Standard Change Process

### 3.1 Branch strategy

All development work is done on feature branches; the `main` branch is protected.

```
main (protected)
  └── feature/<ticket-id>-short-description    ← development
  └── fix/<ticket-id>-short-description        ← bug fixes
  └── security/<ticket-id>-short-description   ← security-critical
```

Branch naming follows the convention above. Branches are short-lived and merged via pull request only.

### 3.2 Pull request requirements

Every PR targeting `main` must:

1. **Pass all CI checks** (ruff, pytest, bandit, pip-audit, eslint, prettier).
2. **Include a description** covering: what changed, why, security impact, and test evidence.
3. **Have at least one approved review** from a CODEOWNERS-designated reviewer.
4. **For security-critical changes:** ISO Section sign-off is required before merge.
5. **Not disable or bypass any CI check** without written ISO approval.

### 3.3 Review checklist (reviewer responsibility)

- [ ] CI is green — no exceptions.
- [ ] No hard-coded secrets, credentials, or PII.
- [ ] Security controls not weakened (rate limits, auth checks, CSRF guard, headers).
- [ ] Input validation and output encoding applied to any new user-facing data path.
- [ ] New routes have appropriate `@login_required` and `_is_admin()` guards where applicable.
- [ ] Audit log calls added for any new security event.
- [ ] Tests cover new behaviour, including negative/boundary cases.
- [ ] No commented-out code, debug statements, or TODO comments in the PR.

### 3.4 Merge policy

- Squash or merge commits — no direct pushes to `main`.
- The merge button is only available after: CI green + required reviewer approval.
- After merge, the feature branch is deleted.

---

## 4. Dependency Update Process

Per policy §4.7(a) and `MAINTENANCE_PATCH_PLAN.md`:

1. **Detection:** `pip-audit` in CI (every push) + Dependabot automated PRs.
2. **Assessment:** Classify CVE severity (Critical / High / Medium / Low).
3. **Patching SLA:**

   | Severity | Maximum time to merge patch |
   |----------|-----------------------------|
   | Critical | 24 hours (emergency process if needed) |
   | High | 5 business days |
   | Medium | Next scheduled sprint |
   | Low | Next scheduled sprint or planned release |

4. **Validation:** Full test suite must pass (`pytest tests/ -v`) after any version bump.
5. **Release:** Version bump PRs follow the standard process above; ISO fast-track review for CVE patches.

---

## 5. Emergency / Hotfix Process

For Critical vulnerabilities or production incidents:

1. **Notify:** Inform ISO Section and Project Manager immediately.
2. **Branch:** Create `security/hotfix-<short-description>` from `main`.
3. **Fix:** Develop and test the fix (pytest + bandit minimum).
4. **Review:** ISO Section + Lead Developer review (synchronous if needed).
5. **Merge:** Fast-track merge after review — CI must still be green.
6. **Deploy:** ISO Section gives verbal / written approval to deploy; Render deploy triggered.
7. **Post-incident:** Full incident report within 5 business days; risk register updated if required.

---

## 6. Production Deployment

### 6.1 Pre-deployment checklist

- [ ] All Phase gates passed (CI → SIT → ISO security test → UAT) — see `ENVIRONMENT_SEPARATION.md §5`.
- [ ] UAT Manager sign-off received (documented).
- [ ] `FLASK_DEBUG` is `0` or absent in Render environment.
- [ ] All required environment variables configured in Render (see `.env.example`).
- [ ] Database migration scripts (if any) reviewed and tested against UAT DB.
- [ ] Rollback plan documented.

### 6.2 Deployment procedure

1. Confirm all sign-offs are recorded (GitHub PR + email trail).
2. Trigger Render deploy manually (web dashboard or Render CLI) — **not** automatic on `main` merge.
3. Monitor application logs for errors immediately post-deploy (first 15 minutes).
4. Confirm health check endpoint returns 200.
5. Notify Project Owner and ISO Section of successful deployment.

### 6.3 Rollback

If a post-deploy issue is detected:

- Render: use "Rollback to previous deploy" in the Render dashboard (immediate, no code change).
- For data-affecting issues: restore DB from last known-good backup (DB backup SLA defined by managed DB provider).

---

## 7. Version Control of Security-Sensitive Files

The following files are protected by `CODEOWNERS` and require ISO Section review on any PR that modifies them:

```
CODEOWNERS
server.py
requirements.txt
.github/workflows/ci.yml
pages/login.html
pages/admin.html
docs/security/
```

Any modification to these files without ISO review approval is a policy violation (Secure SDLC §3.8).

---

## 8. Change Log (this document)

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 1.0 | 2026-06-09 | Development Team | Initial version |

---

## 9. Review & Approval

| Role | Name | Sign-off |
|------|------|:--------:|
| Information Security Section | | ☐ |
| Lead Developer | | ☐ |
| Project Manager | | ☐ |
