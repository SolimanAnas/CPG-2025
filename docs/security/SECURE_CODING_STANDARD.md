# Secure Coding Standard — DCAS CPG 2025

**Policy ref:** Secure SDLC §7 "Secure Coding Standards" · §3.8 · ISR 8.2.3
**Document ref:** CPG2025-SCS-001 · Version 1.0 · 2026-06-09
**Classification:** Shared – Confidential

> Per policy §7: "The SCS should be strictly followed by all developers during the entire development process." All outsourced contributors must also comply.
>
> **Approval required:** All changes to this document must be reviewed and approved by the Information Security Section before taking effect.

---

## 1. Naming Conventions

### Python

| Construct | Convention | Example |
|-----------|-----------|---------|
| Module / file | `snake_case.py` | `server.py` |
| Function / method | `snake_case` | `_validate_password()` |
| Class | `PascalCase` | `User` |
| Constant | `UPPER_SNAKE_CASE` | `_MIN_PW_LEN = 10` |
| Private helper | Leading `_` | `_is_admin()` |

### JavaScript

| Construct | Convention | Example |
|-----------|-----------|---------|
| Function | `camelCase` | `fetchUsers()` |
| Variable | `camelCase` | `allUsers` |
| Constant | `UPPER_SNAKE_CASE` or `camelCase` for module-scope | `STRONG_PW` |
| DOM element refs | descriptive camelCase | `userTableBody` |
| Private (module-internal) | Prefix `_` or IIFE scope | `(function(){...})()` |

---

## 2. Commenting

- **Never** comment *what* the code does — use well-named identifiers instead.
- **Do** comment *why*: hidden constraints, security-relevant invariants, workarounds.
- Allowed: one-line security rationale above non-obvious controls.
- **Prohibited:** commented-out dead code; TODO comments in production branches; credential or secret information in any comment.

```python
# Generic message — do not reveal whether the user exists (anti-enumeration).
return jsonify({"error": "Invalid username or password"}), 401
```

---

## 3. Code Formatting

Formatting is enforced automatically — **never disable the linter** without written ISO approval.

| Language | Tool | Config |
|----------|------|--------|
| Python | Ruff (`ruff format`) | `pyproject.toml` — line length 100, double quotes |
| JavaScript | Prettier | Project defaults |
| Python lint | Ruff (`ruff check`) | `pyproject.toml` — E, F, W, I rules |
| JavaScript lint | ESLint v8 | `.eslintrc.json` |

CI fails on any linting error. `# noqa` suppressions require a comment explaining the justification.

---

## 4. Use of Data Types

- **Strings:** never concatenate user-supplied input into SQL, HTML, shell commands, or log messages. Use ORMs / parameterised queries / template escaping.
- **Passwords:** `str` for the plaintext (only during validation, never stored or logged), `str` for the Werkzeug hash. Zero the plaintext from memory as soon as hashing is complete where the language permits.
- **User IDs:** always `int` (validated by Flask route converter `<int:user_id>`).
- **Email addresses:** validate against `_EMAIL_RE` regex and enforce max length 254 before use.
- **Secrets:** read from `os.getenv()` only; never from constants, defaults, or config files committed to VCS.
- **Booleans:** use Python `bool` / JS `boolean`; avoid truthy/falsy comparisons for security decisions.

---

## 5. Use of Programming Routines

### Prohibited patterns

| Pattern | Reason | Use instead |
|---------|--------|-------------|
| Raw SQL string concatenation | SQL injection | SQLAlchemy ORM |
| `innerHTML = userValue` | XSS | `textContent`, `createTextNode`, or `escapeHtml()` |
| `eval()` / `new Function(str)` | Code injection | Never use for user data |
| `os.system(userInput)` | Command injection | Never; if needed, use `subprocess` with list args |
| Hard-coded secrets | Secret exposure | `os.getenv()` |
| `print()` for logging | Unstructured, no level | Python `logging` module |
| `debug=True` in Flask app | RCE via debugger | `FLASK_DEBUG` env var, default off |
| `User.query.get()` (legacy) | SQLAlchemy 2.0 deprecation | `db.session.get(User, id)` |

### Required patterns

| Requirement | How |
|-------------|-----|
| Hash passwords | `werkzeug.security.generate_password_hash()` |
| Verify passwords | `werkzeug.security.check_password_hash()` |
| Generate tokens / keys | `secrets.token_hex(32)` |
| Validate auth on route | `@login_required` decorator |
| Enforce admin role | `_is_admin(current_user)` + `abort(403)` |
| Audit security event | `_audit(event, outcome, actor, detail)` |
| Parse JSON from request | `request.get_json(silent=True) or {}` |

---

## 6. Error Handling

### Principles
- **Never** expose stack traces, database queries, internal paths, or library versions to the client.
- Always return a **generic** error message to the user; log the full detail internally.
- Use the `@app.errorhandler` mechanism — do not swallow exceptions silently.
- Rate-limit-triggered errors return `429` with `{"error": "Too many requests. Please try again later."}`.
- CSRF-guard rejections return `400` with `{"error": "Invalid request"}`.

### Python

```python
# Good — generic to client, detail logged
try:
    result = do_something_risky(user_input)
except ValueError as exc:
    app.logger.error("Validation failed for user %s: %s", user.id, exc)
    return jsonify({"error": "Invalid input"}), 400

# Bad — leaks internal detail
except Exception as exc:
    return jsonify({"error": str(exc)}), 500
```

### JavaScript

```javascript
// Good — generic to user
} catch (_) {
    showMsg('❌ Server unreachable. Please try again when you have a connection.');
}

// Bad — logs or displays internal error strings
} catch (err) {
    console.error(err);   // may leak in prod dev-tools
    alert(err.message);   // exposes internal detail
}
```

---

## 7. Input Validation (Secure SDLC §4.2(b), ISR 8.3.1)

**All validation is performed server-side.** Client-side validation is UX only and is never trusted.

| Input | Validation | Location |
|-------|-----------|----------|
| Email | `_EMAIL_RE` regex + max 254 chars | `server.py:_validate_email()` |
| Password | `_validate_password()` (length, complexity, common-pw block) | `server.py` |
| `professional_level` | Allowlist: `{Physician, Paramedic, EMT, Admin, ""}` | `server.py:register()` |
| `full_name` | Max 150 chars | `server.py:register()` |
| `user_id` | Flask `<int:user_id>` route type | route definition |
| `role` (PATCH) | Non-empty string; length check | `server.py:update_user_role()` |
| JSON body | `request.get_json(silent=True) or {}` | all API routes |

---

## 8. Output Encoding (Secure SDLC §4.4(a), ISR 8.3.4)

| Context | Encoding function | Location |
|---------|------------------|----------|
| HTML element content | `escapeHtml(str)` → `&amp; &lt; &gt;` | `pages/admin.html` |
| HTML attribute value | `escapeHtml(str)` → additionally `&quot; &#x27;` | `pages/admin.html` |
| DOM text node (preferred) | `document.createTextNode(str)` | `showToast()` in `admin.html` |
| JSON API response | Flask `jsonify()` | all API routes |

**Rule:** Whenever user-supplied data is rendered in the browser, use `escapeHtml()` for HTML contexts or `createTextNode()` for text content. Never use template literals with user data in `innerHTML`.

---

## 9. Authentication & Session Patterns (Secure SDLC §4.4(c))

- All authentication decisions are server-side. No credential hashes, admin tokens, or session state in client code.
- Flask-Login manages sessions; `@login_required` is the only permitted gate on protected routes.
- Session cookies: `HttpOnly=True`, `Secure=True` (production), `SameSite=Lax`.
- Google OAuth: token verified server-side via `google-auth`; client only forwards the raw `credential`.

---

## 10. Secrets Management (Secure SDLC §3.4)

- All secrets from `os.getenv()`. See `.env.example` for the full list.
- No secret shall appear as a default value, fallback, constant, or comment.
- CI injects secrets via GitHub Actions environment secrets — never echoed in logs.
- On `SECRET_KEY` absence: random ephemeral key generated with a logged warning (sessions non-persistent, not a security bypass).

---

## 11. Compliance

This standard maps to the following policy controls:

| SCS Section | ISR | ISO 27001:2022 |
|-------------|-----|----------------|
| §6 Error handling | 8.3.x | A.8.25 |
| §7 Input validation | 8.3.1, 8.3.3 | A.8.26, A.8.29 |
| §8 Output encoding | 8.3.4 | A.8.26 |
| §9 Auth patterns | 5.2.1.5 | A.8.26 |
| §10 Secrets | 8.2.x | A.8.25 |

---

## 12. Review & Approval

| Role | Name | Sign-off |
|------|------|:--------:|
| Information Security Section | | ☐ |
| Lead Developer | | ☐ |
