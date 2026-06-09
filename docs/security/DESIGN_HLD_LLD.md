# High-Level & Low-Level Design — DCAS CPG 2025

**Policy ref:** Secure SDLC §4.2 (Design Phase) · §3.7 · §3.9 · ISR 8.2.1
**Document ref:** CPG2025-HLD-001 · Version 1.0 · 2026-06-09
**Classification:** Shared – Confidential

> Per policy §4.2: "Security architect reviews and approves the design documents and that security controls required are addressed before development commences."

---

## 1. Requirements Traceability

This document traces the security requirements from `docs/requirements.md` through the design decisions below.

| Req ID | Requirement | HLD section |
|--------|------------|-------------|
| SR-01 | All admin endpoints require authenticated session with Admin role | §3.1 |
| SR-02 | Passwords hashed with PBKDF2-SHA256; min 10 chars + complexity | §3.2 |
| SR-03 | Rate limiting on auth endpoints; generic error messages | §3.3 |
| SR-04 | CSRF protection on all state-changing API routes | §3.4 |
| SR-05 | Security headers on every HTTP response | §3.5 |
| SR-06 | Audit log for all auth and admin events | §3.6 |
| SR-07 | All secrets from environment variables; none hard-coded | §4 |
| SR-08 | Input validation server-side; output encoding for HTML contexts | §3.7 |
| SR-09 | Session cookies: HttpOnly, Secure (production), SameSite=Lax | §3.2 |
| SR-10 | No client-side authentication logic | §3.1 |

---

## 2. High-Level Design

### 2.1 System Layers

```
┌─────────────────────────────────────────────────────────────┐
│  Layer 1 — TLS Termination (Render PaaS)                    │
│  All traffic HTTPS; HTTP redirected to HTTPS at platform    │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTPS
┌──────────────────────────▼──────────────────────────────────┐
│  Layer 2 — Rate Limiting (Flask-Limiter)                    │
│  10/min login · 5/min register · memory storage (dev)       │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│  Layer 3 — CSRF Guard (before_request hook)                 │
│  POST/PATCH/PUT: Content-Type=application/json required     │
│  All mutating methods: X-Requested-With=XMLHttpRequest req. │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│  Layer 4 — Authentication (Flask-Login)                     │
│  @login_required on every protected route                   │
│  Session cookie: HttpOnly · Secure · SameSite=Lax           │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│  Layer 5 — Authorisation (Role Check)                       │
│  _is_admin() → abort(403) for non-admin on /api/admin/*     │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│  Layer 6 — Input Validation                                 │
│  _validate_email() · _validate_password() · allowlists      │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│  Layer 7 — Business Logic (Flask route handlers)            │
│  ORM queries · password hashing · Google OAuth verify       │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│  Layer 8 — Output (Security Headers + JSON responses)       │
│  after_request: CSP · HSTS · X-Content-Type-Options etc.    │
│  jsonify() for all API responses                            │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│  Layer 9 — Audit Log (dcas.audit logger)                    │
│  JSON line per event: ts · event · outcome · actor · ip     │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Component responsibilities

| Component | File | Responsibility |
|-----------|------|----------------|
| Flask application factory | `server.py:create_app()` | Bootstrap app, register all extensions and hooks |
| Rate limiter | `server.py:_register_rate_limits()` | Flask-Limiter, configured from env |
| CSRF guard | `server.py:_register_csrf_guard()` | `before_request` hook; rejects missing headers |
| Security headers | `server.py:_register_security_headers()` | `after_request` hook; attaches all headers |
| Auth routes | `server.py:/api/login`, `/api/register`, `/api/google-login`, `/api/logout` | Session management |
| Admin routes | `server.py:/api/admin/*` | CRUD on user records; admin-only |
| Static file route | `server.py:/<path>` | `send_from_directory`; path-traversal-safe |
| Login UI | `pages/login.html` | Email/pw + Google One-Tap; server-side auth only |
| Admin UI | `pages/admin.html` | User management; all output through `escapeHtml()` |
| Signup UI | `pages/signup.html` | Registration form; server validates everything |
| Audit log | `server.py:_audit()` | Structured JSON events to `dcas.audit` logger |
| ORM model | `server.py:User` | SQLAlchemy model; password never stored plaintext |

---

## 3. Low-Level Design

### 3.1 Authentication & Authorisation

#### Email/password login flow

```
Client                          server.py
  │── POST /api/login ─────────────►│
  │   {email, password}             │
  │                                 │ 1. CSRF guard checks X-Requested-With + Content-Type
  │                                 │ 2. Rate limiter checks 10/min threshold
  │                                 │ 3. db.session.scalar(select User by email)
  │                                 │ 4. check_password_hash(user.password_hash, pw)
  │                                 │ 5. login_user(user) → sets session cookie
  │                                 │ 6. _audit("login", "success"/"failure", ...)
  │◄── 200 {message} / 401 ─────────│   (same error message either path)
```

#### Admin endpoint guard

```python
# Every /api/admin/* handler starts with:
@login_required          # Flask-Login: 401/redirect if no session
def handler():
    if not _is_admin(current_user):   # role or ADMIN_EMAILS list
        abort(403)
    ...
```

#### Session configuration (production)

```python
SESSION_COOKIE_HTTPONLY = True     # JS cannot read cookie
SESSION_COOKIE_SECURE   = True     # HTTPS-only transmission
SESSION_COOKIE_SAMESITE = "Lax"   # CSRF mitigation
```

### 3.2 Password Policy

```
_MIN_PW_LEN = 10
Checks (in order):
  1. len(pw) >= 10
  2. re.search(r"[A-Z]", pw)   — at least one uppercase
  3. re.search(r"[a-z]", pw)   — at least one lowercase
  4. re.search(r"\d",    pw)   — at least one digit
  5. pw.lower() not in _COMMON_PASSWORDS  — 20-entry block list

Hash: werkzeug.security.generate_password_hash(pw)  → PBKDF2-SHA256
```

### 3.3 CSRF Guard

| Condition | HTTP result |
|-----------|:-----------:|
| Non-mutating method (GET, HEAD, OPTIONS) | Pass through |
| Route outside `/api/` | Pass through |
| `X-Requested-With` ≠ `XMLHttpRequest` | 400 |
| POST/PATCH/PUT and `Content-Type` ≠ `application/json` | 400 |
| DELETE with `X-Requested-With: XMLHttpRequest` | Pass through |

DELETE does not require `Content-Type` because it carries no body.

### 3.4 Security Headers

| Header | Value (production) | Purpose |
|--------|--------------------|---------|
| `Content-Security-Policy` | `default-src 'self'; script-src 'self' accounts.google.com apis.google.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; frame-src 'self' accounts.google.com; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'` | XSS, clickjacking |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` (prod only) | Force HTTPS |
| `X-Content-Type-Options` | `nosniff` | MIME-sniffing |
| `X-Frame-Options` | `DENY` | Clickjacking |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Referer leakage |

### 3.5 Audit Log Schema

Every security event emits one JSON line to the `dcas.audit` logger:

```json
{
  "ts":      "2026-06-09T10:23:45.123456",
  "event":   "login",
  "outcome": "success",
  "actor":   "user@example.com",
  "ip":      "10.0.0.1",
  "detail":  ""
}
```

| event | Trigger |
|-------|---------|
| `register` | New user registered |
| `login` | Email/password login attempt (success or failure) |
| `google_login` | Google OAuth login attempt |
| `logout` | Session terminated |
| `admin_list_users` | Admin viewed user list |
| `admin_update_role` | Admin changed a user's role |
| `admin_delete_user` | Admin deleted a user |
| `rate_limit` | Rate limit threshold exceeded |
| `csrf_guard` | CSRF guard blocked a request |

### 3.6 Input Validation Summary

| Field | Validator | Constraint |
|-------|-----------|-----------|
| `email` | `_validate_email()` | `_EMAIL_RE` regex + max 254 chars |
| `password` | `_validate_password()` | min 10 + upper + lower + digit + not common |
| `full_name` | inline | max 150 chars |
| `professional_level` | allowlist | `{Physician, Paramedic, EMT, Admin, ""}` |
| `user_id` | Flask route `<int:user_id>` | integer only; 400 on type mismatch |
| `role` (PATCH) | inline | non-empty string; max 50 chars |
| JSON body | `request.get_json(silent=True) or {}` | silently returns `{}` on malformed JSON |

### 3.7 Output Encoding

| Context | Method | Location |
|---------|--------|---------|
| API responses | `flask.jsonify()` | all `server.py` route handlers |
| HTML element content in admin console | `escapeHtml(str)` → `&amp; &lt; &gt; &quot; &#x27;` | `admin.html` |
| DOM text nodes | `document.createTextNode(str)` | `admin.html:showToast()` |

### 3.8 Database Model

```python
class User(db.Model, UserMixin):
    id               = db.Column(db.Integer, primary_key=True)
    username         = db.Column(db.String(254), unique=True, nullable=False)  # email
    full_name        = db.Column(db.String(150), nullable=False)
    password_hash    = db.Column(db.String(256), nullable=True)   # NULL for OAuth users
    role             = db.Column(db.String(50),  nullable=False, default="")
    google_id        = db.Column(db.String(128), unique=True, nullable=True)
    created_at       = db.Column(db.DateTime,    default=datetime.utcnow)
```

- `password_hash` stores only the Werkzeug PBKDF2-SHA256 output; plaintext is never persisted.
- `google_id` is set for Google OAuth users; `password_hash` may be NULL for these users.
- All DB access via SQLAlchemy session — no raw SQL strings.

---

## 4. Security Architect Review Checklist

Before any coding sprint begins, the Security Architect verifies:

- [ ] All SR-* requirements (§1) have an implementation in §3.
- [ ] No authentication or authorisation logic resides in client code.
- [ ] All user-supplied data paths have a corresponding validation entry in §3.6.
- [ ] All output paths have a corresponding encoding entry in §3.7.
- [ ] Audit events cover every security-relevant action in §3.5.
- [ ] Defence-in-depth layers (§2.1) have no gaps for any API route.

---

## 5. Open Design Items

| ID | Item | Owner | Target |
|----|------|-------|--------|
| P2-6 | Replace SQLite with encrypted managed DB; update `DATABASE_URL` and document key management per DCAS Encryption & Key Management Policy | IT Admin | Sprint 2 end |
| P3-5a | HLD/LLD review and approval by Security Architect (sign-off below) | Security Architect | Before next coding sprint |

---

## 6. Review & Approval

| Role | Name | Sign-off |
|------|------|:--------:|
| Security / Solution Architect | | ☐ |
| Information Security Section | | ☐ |
| Lead Developer | | ☐ |
