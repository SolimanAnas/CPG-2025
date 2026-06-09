# Software Architecture Document (SAD) — DCAS CPG 2025

**Policy ref:** Secure SDLC §6 (Engineering Principles and SAD) · §3.7 · §3.9
**Document ref:** CPG2025-SAD-001 · Version 1.0 · 2026-06-09
**Classification:** Shared – Confidential

> Per policy §6: "The Information Security Section should ensure that security requirements are identified in the SAD document in accordance with the IT Security Policy, Security Monitoring Policy, Password Security Policy, Application Security Standard, Database Security Standard."

---

## 1. Architecture Principles

| Principle | Implementation |
|-----------|---------------|
| Security-by-design (ISR 8.1.1.2) | Security controls at every SDLC phase; security review gates before coding and deployment |
| Least privilege | Users get minimum role; admin actions require explicit admin role; API returns only needed fields |
| Defence in depth | Layered controls: rate limiting → auth → CSRF guard → role check → input validation → output encoding |
| Fail secure | Missing secrets generate ephemeral key with warning; debug defaults off; errors return generic messages |
| No hard-coded secrets | All credentials from environment variables; CI fails if missing |
| Separation of concerns | Auth, admin, static serving are distinct route groups; security headers in a dedicated `after_request` hook |

---

## 2. Architecture Constraints

- Single-process Flask / Gunicorn deployment on Render (PaaS).
- SQLite for development; must migrate to managed encrypted DB for production at scale.
- Service Worker caches static assets; server remains the authority for auth and data.
- No external user-facing microservices; third-party surface limited to Google OAuth.

---

## 3. Context View

```
┌─────────────────────────────────────────────────────┐
│                   DCAS EMS Staff                     │
│   (Physician / Paramedic / EMT)                      │
└──────────────────┬───────────────────────────────────┘
                   │ HTTPS (Render TLS)
┌──────────────────▼───────────────────────────────────┐
│               CPG 2025 PWA                           │
│  ┌──────────────┐  ┌────────────────────────────┐   │
│  │ Static PWA   │  │   Flask Backend (server.py) │   │
│  │ (HTML/JS/CSS)│  │   Gunicorn · Python 3.11    │   │
│  │ Service Worker│ │   Flask-Login · Flask-Limiter│   │
│  └──────────────┘  └──────────┬─────────────────┘   │
│                               │                      │
│                     ┌─────────▼──────────┐           │
│                     │  SQLite / managed  │           │
│                     │  DB (users table)  │           │
│                     └────────────────────┘           │
└──────────────────────────────────────────────────────┘
                   │
        ┌──────────▼──────────┐
        │  Google OAuth 2.0   │
        │  (identity provider)│
        └─────────────────────┘

    ┌───────────────┐
    │  IT Admin     │──► /pages/admin.html ──► /api/admin/* (auth+role gated)
    └───────────────┘
```

---

## 4. Service / Logical View

### 4.1 Backend routes

| Route | Method | Auth | Admin | Purpose |
|-------|--------|:----:|:-----:|---------|
| `/` | GET | — | — | Serve `index.html` |
| `/<path>` | GET | — | — | Serve static assets |
| `/api/register` | POST | — | — | Create account (rate-limited, password policy) |
| `/api/login` | POST | — | — | Session login (rate-limited) |
| `/api/google-login` | POST | — | — | Google OAuth login (rate-limited) |
| `/api/logout` | GET | ✅ | — | Destroy session |
| `/api/admin/users` | GET | ✅ | ✅ | List all users (PII) |
| `/api/admin/users/:id/role` | PATCH | ✅ | ✅ | Update user role |
| `/api/admin/users/:id` | DELETE | ✅ | ✅ | Delete user |

### 4.2 Front-end modules

| Module | Description |
|--------|-------------|
| `app.js` | Chapter navigation, quiz engine, progress tracking, search |
| `sw.js` | Service Worker — cache management, offline support |
| `pages/login.html` | Email/password + Google OAuth login |
| `pages/signup.html` | User registration |
| `pages/admin.html` | IT admin user management console |
| `pages/drug-calculator.js` | Drug dosing calculator (static data) |
| `src/prometric/exam.js` | Exam engine (static JSON question banks) |

---

## 5. Security View

> This view is **mandatory** per policy §6 and must be reviewed by the Security Architect before any coding sprint.

### 5.1 Identification

- All users identified by email address (unique, validated at registration).
- Google OAuth users identified via verified `email` claim in the ID token.
- Admin identity determined by `user.role == 'Admin'` OR membership in `ADMIN_EMAILS` env var.

### 5.2 Authentication

| Mechanism | Implementation | Standard |
|-----------|---------------|----------|
| Email/password | Werkzeug PBKDF2-SHA256 hashing; server-side only | DCAS Password Security Policy |
| Google OAuth 2.0 | `google-auth` `id_token.verify_oauth2_token`; GOOGLE_CLIENT_ID from env | OAuth 2.0 RFC 6749 |
| Session management | Flask-Login + server-side sessions; HttpOnly, Secure, SameSite=Lax cookies | DCAS IT Security Policy |
| Rate limiting | Flask-Limiter: 10/min on login; 5/min on register | ISR 5.2.1.5 |
| Password policy | Min 10 chars, upper+lower+digit, common-password block | DCAS Password Security Policy |

### 5.3 Authorisation

| Resource | Minimum privilege | Enforcement |
|----------|-------------------|-------------|
| Any authenticated route | Valid session | `@login_required` |
| Admin API endpoints | `role == 'Admin'` or `ADMIN_EMAILS` | `_is_admin()` + `abort(403)` |
| Source code | Authorised developers only | GitHub branch protection + CODEOWNERS |

### 5.4 Confidentiality of Data

| Data | In transit | At rest |
|------|-----------|---------|
| All traffic | TLS (Render terminates HTTPS) | N/A |
| Passwords | Never transmitted in plaintext after hashing | PBKDF2-SHA256 hash |
| Session tokens | HttpOnly + Secure cookie | Server-side storage |
| User PII | TLS | **Open item P2-6:** DB encryption required for production |
| Secrets | Environment variables only | Never in source or logs |

### 5.5 Security Monitoring

Per DCAS Security Monitoring Policy:

- `dcas.audit` logger emits one JSON line per security event: `ts`, `event`, `outcome`, `actor`, `ip`, `detail`.
- Covered events: `register`, `login`, `google_login`, `logout`, `admin_list_users`, `admin_update_role`, `admin_delete_user`, `rate_limit`, `csrf_guard`.
- **Action required:** Ship `dcas.audit` logger to a monitored sink (CloudWatch, Datadog, SIEM) in production.

### 5.6 Network Positioning

Per DCAS IT Security Policy (environment-separation requirements):

| Environment | Location | Notes |
|-------------|----------|-------|
| Production | Render cloud (HTTPS, public) | TLS terminated at platform edge |
| Development | Local machine | No external exposure; debug off |
| CI | GitHub Actions ephemeral runners | Isolated per-run; in-memory SQLite |

Full network-zone separation (dev/SIT/UAT/prod VLANs) is documented in `ENVIRONMENT_SEPARATION.md`.

### 5.7 Hardening

Per DCAS Secure Baseline Document:

- Flask `debug=False` in production (driven by `FLASK_DEBUG` env var).
- Gunicorn (not the Flask dev server) serves production.
- Security headers on every response: `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Content-Security-Policy`, `Strict-Transport-Security` (production only).
- CSP: `default-src 'self'`; limited script/style/frame allowlisting for Google OAuth.

### 5.8 Patch Management

Per §4.7(a) and DCAS Patch Management process:

- `pip-audit` runs on every CI push — blocks merge on High/Critical CVE.
- Dependabot configured for automated dependency PRs.
- Pinned versions in `requirements.txt`; bump process documented in `MAINTENANCE_PATCH_PLAN.md`.

### 5.9 Database Security

Per DCAS Database Security Standard:

- ORM (SQLAlchemy) for all DB access — no raw SQL, parameterised queries only.
- DB connection string from `DATABASE_URL` env var.
- **Open item P2-6:** Production must use an encrypted managed DB (e.g. Supabase/PlanetScale with TLS + encryption at rest).
- Test data must be masked/dummy only (`ENVIRONMENT_SEPARATION.md`).
- Admin group for DB administration must be separate from application role.

---

## 6. Deployment View

```
GitHub (source + CI)
       │
       │  git push / PR merge
       ▼
GitHub Actions CI
  ├─ ruff (lint)
  ├─ pytest (unit + integration + security regression)
  ├─ bandit (SAST)
  ├─ pip-audit (dependency CVE scan)
  └─ eslint + prettier (JS)
       │
       │  on main merge (after ISO security sign-off)
       ▼
Render (PaaS)
  Gunicorn → Flask app (server.py)
  Static assets served by Flask send_from_directory
  TLS terminated at Render edge
  SQLite (dev) / managed encrypted DB (prod)
```

---

## 7. Review & Approval

| Role | Name | Sign-off |
|------|------|:--------:|
| Security / Solution Architect | | ☐ |
| Information Security Section | | ☐ |
| Project Owner | | ☐ |
| Project Manager | | ☐ |
