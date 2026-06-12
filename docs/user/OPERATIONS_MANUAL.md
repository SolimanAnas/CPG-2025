# Operations Manual — DCAS CPG 2025 Clinical Review Platform

**Document ref:** CPG2025-OPS-001 · Version 1.0 · 2026-06-12
**Classification:** Shared – Confidential
**Audience:** IT Administrators, Information Security Section

---

## 1. Introduction

This manual covers the day-to-day operation, monitoring, and administration of the DCAS CPG 2025 platform in the production environment. It is intended for the DCAS IT Admin team and the Information Security Section.

---

## 2. System Overview

| Component | Technology | Location |
|-----------|-----------|---------|
| Web application | Flask 3.1.3 + Gunicorn 23.0.0 | Render PaaS |
| Database | SQLite (dev) / Managed encrypted DB (prod) | Render / DB provider |
| Static assets | Flask `send_from_directory` | Served from Render dyno |
| CI/CD | GitHub Actions | github.com/SolimanAnas/CPG-2025 |
| Source code | GitHub (private) | github.com/SolimanAnas/CPG-2025 |

---

## 3. Required Environment Variables

All must be set in Render Environment → Environment Variables before deployment. See `.env.example` for descriptions.

| Variable | Required | Description |
|----------|:--------:|-------------|
| `SECRET_KEY` | ✅ | 64-char random hex; used to sign session cookies |
| `DATABASE_URL` | ✅ | Production DB connection string |
| `GOOGLE_CLIENT_ID` | ✅ | Google OAuth 2.0 client ID |
| `ADMIN_EMAILS` | ✅ | Comma-separated list of admin email addresses |
| `APP_ENV` | ✅ | Set to `production` to enable HSTS |
| `FLASK_DEBUG` | — | Must be absent or `0` in production |

> **Security rule:** Never set `FLASK_DEBUG=1` in production. This would expose the Werkzeug interactive debugger and enable RCE.

---

## 4. User Management (Admin Console)

### 4.1 Accessing the admin console

1. Log in with an admin-role account or an account whose email is in `ADMIN_EMAILS`.
2. Navigate to `/pages/admin.html`.
3. The user list loads automatically.

### 4.2 Updating a user's professional level

1. In the admin console, find the user in the table.
2. Select the new role from the dropdown in the **Role** column.
3. Click **Update** — the change takes effect immediately.
4. An audit log entry is created automatically.

Allowed roles: `Physician`, `Paramedic`, `EMT`, `Admin`.

### 4.3 Deleting a user

1. Click the **Delete** (trash) icon next to the user's row.
2. Confirm the deletion in the modal.
3. The user's record is permanently removed from the database.
4. An audit log entry is created automatically.

> Deletion is **irreversible**. The user must re-register to regain access.

### 4.4 Adding an admin user

Two methods:
- **Via `ADMIN_EMAILS` env var:** Add the user's email to the comma-separated list in Render and redeploy. No role change in DB required.
- **Via DB role:** In the admin console, update the user's role to `Admin`.

---

## 5. Monitoring

### 5.1 Audit log

Security events are emitted to the `dcas.audit` Python logger as JSON lines:

```json
{"ts": "2026-06-12T10:23:45.123456", "event": "login", "outcome": "success", "actor": "user@dcas.gov.ae", "ip": "10.0.0.1", "detail": ""}
```

**In production:** the `dcas.audit` logger must be wired to a monitored sink (CloudWatch, Datadog, or SIEM). If not yet configured, Render's log stream is a temporary alternative — navigate to Render dashboard → Logs.

Events to monitor:

| Event | Alert if |
|-------|---------|
| `login` outcome `failure` | > 5 failures per user in 5 minutes (possible brute force) |
| `rate_limit` | Repeated occurrences from same IP |
| `csrf_guard` | Any occurrence — indicates a cross-origin attack attempt |
| `admin_delete_user` | Any occurrence — review legitimacy |
| `admin_update_role` | Any occurrence — review legitimacy |

### 5.2 Application health

Render provides built-in health monitoring. Check:
- **Render dashboard → Metrics:** CPU, memory, request latency.
- **Render dashboard → Logs:** Application and access logs.
- **GitHub Actions:** CI status on every push.

---

## 6. Backup & Recovery

### 6.1 Database backup

**SQLite (development only):** Copy `instance/users.db` to a secure location. Never commit to git.

**Managed DB (production):** Use the DB provider's automated backup feature:
- Supabase: automated daily backups, point-in-time recovery available.
- PlanetScale: automated backups via Branches.

Backup frequency: **daily minimum**. Retention: **30 days minimum**.

Test recovery: restore from backup to a staging instance quarterly.

### 6.2 Source code backup

The GitHub repository is the authoritative source. Ensure:
- Repository is private.
- At least one team member has owner access.
- Consider enabling GitHub repository backup via a third-party service (e.g. GitHub Archive Program or automated clone to a secondary storage).

### 6.3 Recovery procedure

1. **Application failure:** Use Render "Rollback to previous deploy" in the dashboard.
2. **Database corruption:** Restore from last known-good backup at DB provider.
3. **Secret compromise:** Rotate `SECRET_KEY` in Render env vars → all active sessions are invalidated (users must re-login). Rotate `GOOGLE_CLIENT_ID` in Google Cloud Console.

---

## 7. Patch Management

When a dependency vulnerability is reported:

1. Dependabot or `pip-audit` raises a PR or CI failure.
2. Developer bumps the version in `requirements.txt`.
3. CI must pass (all tests, SAST, pip-audit).
4. PR reviewed by ISO Section (CODEOWNERS).
5. Merged and deployed following `RELEASE_CHANGE_MGMT.md §5`.

SLA: Critical CVEs patched within 24 hours; High within 5 business days.

---

## 8. Incident Response

| Severity | Examples | First responder | Escalation |
|----------|---------|----------------|-----------|
| Critical | Data breach, RCE, admin bypass in production | ISO Section (immediate) | CISO + CEO within 1 hour |
| High | Auth bypass, PII exposure, service down | ISO Section + IT Admin | CISO within 4 hours |
| Medium | Rate limit bypass, unexpected admin action | IT Admin | ISO Section within 24 hours |
| Low | Failed scan, minor config drift | Developer | ISO Section within 5 days |

Incident actions:
1. Contain: revoke compromised credentials, take service offline if needed.
2. Investigate: review `dcas.audit` log for scope.
3. Remediate: apply fix following change management.
4. Report: notify DCASISSC per policy §11 if High/Critical.
5. Post-mortem: document root cause and prevention within 5 business days.

---

## 9. Secret Rotation Schedule

| Secret | Rotation trigger | Last rotated |
|--------|-----------------|-------------|
| `SECRET_KEY` | Every 12 months or on suspected compromise | — |
| `GOOGLE_CLIENT_ID` / OAuth secret | On suspected compromise | — |
| DB credentials | Every 12 months or on staff change | — |
| Admin email list (`ADMIN_EMAILS`) | On staff change | — |

---

## 10. Document Control

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-06-12 | Initial release |
