# Software Architecture Document (SAD) — DCAS CPG 2025

**Policy ref:** Secure SDLC §6 (Engineering Principles and SAD) · §3.7 · §3.9
**Document ref:** CPG2025-SAD-001 · Version 1.1 · 2026-06-12
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

## 6. Behavioural / Process View

> Required by policy §6 SAD. Describes the runtime behaviour of the system for each key use case.

### 6.1 User Registration

```
Browser (signup.html)                server.py                     Database
        │                                │                              │
        │── POST /api/register ──────────►│                              │
        │   {email, full_name, role, pw}  │                              │
        │                                │ 1. CSRF guard                │
        │                                │ 2. Rate limit (5/min)        │
        │                                │ 3. _validate_email()         │
        │                                │ 4. _validate_password()      │
        │                                │ 5. role allowlist check      │
        │                                │ 6. generate_password_hash()  │
        │                                │ 7. db.session.add(User(...)) ─►│
        │                                │ 8. _audit("register", ...)   │
        │◄── 201 {message} / 400 ─────────│                              │
```

### 6.2 Email/Password Login

```
Browser (login.html)                server.py                     Database
        │                                │                              │
        │── POST /api/login ─────────────►│                              │
        │   {email, password}             │                              │
        │                                │ 1. CSRF guard                │
        │                                │ 2. Rate limit (10/min)       │
        │                                │ 3. SELECT User WHERE email ──►│
        │                                │◄─ User / None ───────────────│
        │                                │ 4. check_password_hash()     │
        │                                │ 5. login_user() → set cookie │
        │                                │ 6. _audit("login", ...)      │
        │◄── 200 / 401 (same message) ────│                              │
```

### 6.3 Google OAuth Login

```
Browser (login.html)    Google OAuth        server.py              Database
        │                    │                   │                      │
        │── Google One-Tap ──►│                   │                      │
        │◄── id_token ────────│                   │                      │
        │                                         │                      │
        │── POST /api/google-login ───────────────►│                      │
        │   {credential: id_token}                 │                      │
        │                                         │ 1. CSRF guard        │
        │                                         │ 2. Rate limit        │
        │                                         │ 3. id_token.verify() ─► Google
        │                                         │◄── {email, sub} ─────── Google
        │                                         │ 4. Upsert User ──────►│
        │                                         │ 5. login_user()      │
        │                                         │ 6. _audit(...)       │
        │◄── 200 / 401 ───────────────────────────│                      │
```

### 6.4 Admin User Management

```
Browser (admin.html)              server.py                     Database
        │                              │                              │
        │── GET /api/admin/users ──────►│                              │
        │                              │ 1. @login_required           │
        │                              │ 2. _is_admin() or 403        │
        │                              │ 3. SELECT all users ─────────►│
        │                              │◄─ [User, ...] ───────────────│
        │                              │ 4. _audit("admin_list_users")│
        │◄── 200 [{id,name,email,...}]──│                              │
        │                              │                              │
        │── PATCH /api/admin/users/N/role                             │
        │   {role: "Paramedic"} ───────►│                              │
        │                              │ 1–2. auth + role guard       │
        │                              │ 3. db.session.get(User, N) ──►│
        │                              │ 4. user.role = new_role      │
        │                              │ 5. db.session.commit() ──────►│
        │                              │ 6. _audit("admin_update_role")│
        │◄── 200 {message} ────────────│                              │
        │                              │                              │
        │── DELETE /api/admin/users/N ─►│                              │
        │                              │ 1–2. auth + role guard       │
        │                              │ 3. db.session.delete(user) ──►│
        │                              │ 4. _audit("admin_delete_user")│
        │◄── 200 {message} ────────────│                              │
```

### 6.5 Service Worker Cache Update (PWA Offline)

```
Browser (sw.js)                CDN / Server              Cache Storage
        │                           │                          │
        │ [On install event]         │                          │
        │── fetch(assets list) ──────►│                          │
        │◄── static assets ──────────│                          │
        │── cache.addAll(assets) ──────────────────────────────►│
        │                                                       │
        │ [On fetch event]                                      │
        │── Cache-first: match cache ──────────────────────────►│
        │◄── cached response (offline OK) ─────────────────────│
        │                                                       │
        │ [On activate / SW update]                             │
        │── delete old cache version ──────────────────────────►│
        │── clients.claim()                                     │
```

---

## 7. Implementation View

> Required by policy §6 SAD. Maps source files to architectural responsibilities.

### 7.1 Backend modules (`server.py`)

| Component | Responsibility | Key functions |
|-----------|---------------|---------------|
| Application factory | Bootstrap Flask app, register extensions | `create_app()` |
| Database model | User persistence (ORM) | `class User(db.Model)` |
| Auth routes | Registration, login, OAuth, logout | `register()`, `login()`, `google_login()`, `logout()` |
| Admin routes | User list, role update, delete | `get_all_users()`, `update_user_role()`, `delete_user()` |
| Static serving | Serve PWA shell + assets | `serve_root()`, `serve_static()` |
| CSRF guard | `before_request` hook blocking cross-origin mutations | `_register_csrf_guard()` |
| Rate limiter | Per-IP throttling on auth endpoints | `_register_rate_limits()`, Flask-Limiter |
| Security headers | `after_request` hook attaching CSP, HSTS, etc. | `_register_security_headers()` |
| Audit logger | Structured JSON events to `dcas.audit` logger | `_audit()` |
| Validators | Email and password policy enforcement | `_validate_email()`, `_validate_password()` |
| Admin check | Role/email-list authorisation | `_is_admin()` |

### 7.2 Front-end modules

| File | Responsibility |
|------|---------------|
| `index.html` | PWA shell; chapter navigation entry point |
| `app.js` | Chapter rendering, quiz engine, progress tracking, offline search, flashcards |
| `sw.js` | Service Worker: cache-first fetch, cache versioning, OTA update |
| `manifest.json` | PWA metadata: icons, display mode, theme colour |
| `styles.css` | Global theme (5 themes incl. AMOLED) |
| `pages/login.html` | Email/password + Google One-Tap login |
| `pages/signup.html` | New user registration |
| `pages/admin.html` | IT admin console: user list, role edit, delete |
| `pages/drug-calculator.js` | Drug dosing calculator (static data, no server call) |
| `src/prometric/exam.js` | Certification exam engine (static JSON question banks) |
| `algorithms/` | Clinical algorithm pages |
| `chapters/`, `content/` | Static guideline content (HTML fragments) |
| `pdf_sections/` | PDF clinical reference files served statically |

### 7.3 Infrastructure as code

| File | Responsibility |
|------|---------------|
| `Procfile` | Gunicorn start command: `web: gunicorn server:app` |
| `requirements.txt` | Pinned Python runtime dependencies |
| `pyproject.toml` | Ruff lint/format config; pytest config |
| `.github/workflows/ci.yml` | CI pipeline: lint → test → SAST → dep scan → secret scan → JS |
| `.github/CODEOWNERS` | Mandatory ISO Section review on security-sensitive files |
| `.github/dependabot.yml` | Weekly automated dependency update PRs |
| `.gitignore` | Excludes `instance/`, `*.db`, `.env*`, `__pycache__/` |
| `.env.example` | Documents all required environment variables |

### 7.4 Test suite

| File | Responsibility |
|------|---------------|
| `tests/conftest.py` | In-memory SQLite fixtures; rate-limit disabled for tests |
| `tests/test_api.py` | 36 tests: auth, admin CRUD, password policy, CSRF, headers, audit log |

---

## 8. Infrastructure View

> Required by policy §6 SAD. Describes the physical/cloud topology and network positioning.

### 8.1 Production topology

```
┌─────────────────────────────────────────────────────────────────┐
│  INTERNET (HTTPS only)                                          │
│                                                                 │
│  DCAS EMS Staff devices ──HTTPS──►  Render Edge (TLS termination)
│  IT Admin browser        ──HTTPS──►  (Render CDN / proxy)       │
└─────────────────────────────────────────────────────────────────┘
                                    │
                    ┌───────────────▼────────────────┐
                    │  Render PaaS — Production       │
                    │  ┌──────────────────────────┐  │
                    │  │  Gunicorn (WSGI server)   │  │
                    │  │  Flask app (server.py)    │  │
                    │  │  Python 3.11              │  │
                    │  └──────────┬───────────────┘  │
                    │             │ SQLAlchemy ORM    │
                    │  ┌──────────▼───────────────┐  │
                    │  │  Managed Encrypted DB     │  │
                    │  │  (P2-6: Supabase /        │  │
                    │  │   PlanetScale / SQLCipher) │  │
                    │  └──────────────────────────┘  │
                    │                                 │
                    │  Env vars: SECRET_KEY,          │
                    │  DATABASE_URL, GOOGLE_CLIENT_ID,│
                    │  ADMIN_EMAILS, APP_ENV          │
                    └─────────────────────────────────┘
                                    │
                    ┌───────────────▼────────────────┐
                    │  Google OAuth 2.0 API           │
                    │  (accounts.google.com)          │
                    │  Token verification only —      │
                    │  no user data stored at Google  │
                    └────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  GitHub (source control + CI)                                   │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  GitHub Actions — ephemeral runners (one per push/PR)     │  │
│  │  ruff → pytest → bandit → pip-audit → gitleaks → eslint   │  │
│  │  In-memory SQLite only; no network access to prod         │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### 8.2 Network positioning summary

| Component | Zone | Internet-facing | TLS |
|-----------|------|:---------------:|:---:|
| Render edge (proxy) | DMZ | ✅ | ✅ Terminates |
| Gunicorn / Flask | Internal PaaS | ✗ (behind Render proxy) | ✅ |
| Managed DB | Internal PaaS | ✗ | ✅ In transit |
| GitHub repo | GitHub cloud | ✗ (private repo) | ✅ |
| Google OAuth API | External | ✅ | ✅ |

### 8.3 Cloud-equivalent environment isolation

The policy requires VLAN segregation of dev/SIT/UAT/prod environments. For the Render PaaS deployment, this is achieved as follows:

| Policy requirement | Cloud-equivalent control |
|-------------------|--------------------------|
| Dev/SIT separate network zone | Separate local machines; CI runs on ephemeral GitHub Actions runners (destroyed post-run) |
| UAT separate from production | Separate Render service instance with separate DB and separate env vars |
| Production data not in dev/test | `.gitignore`; separate DB credentials; dummy data only in lower envs |
| Support admin group separate | Render team roles separate deploy permission from source access |

**ISO acceptance note:** Full physical VLAN segregation is not achievable on a public PaaS. The equivalent cloud controls above are documented here for ISO Section formal acceptance as a compensating control.

### 8.4 Third-party component inventory

| Component | Version | Purpose | Security review |
|-----------|---------|---------|-----------------|
| Render PaaS | Managed | Hosting, TLS, process management | Platform-level; reviewed via SLA |
| Google OAuth 2.0 | RFC 6749 | Identity provider | `id_token.verify_oauth2_token` server-side |
| Flask-Login | 0.6.3 | Session management | Pinned; pip-audit in CI |
| Flask-Limiter | 3.9.0 | Rate limiting | Pinned; pip-audit in CI |
| Werkzeug | 3.1.6 | PBKDF2 password hashing | Pinned; pip-audit in CI |
| google-auth | 2.38.0 | OAuth token verification | Pinned; pip-audit in CI |

---

## 9. Deployment View

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

## 10. Review & Approval

| Role | Name | Sign-off |
|------|------|:--------:|
| Security / Solution Architect | | ☐ |
| Information Security Section | | ☐ |
| Project Owner | | ☐ |
| Project Manager | | ☐ |
