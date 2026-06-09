# Security Policy

DCAS CPG 2025 is developed under the **DCAS Secure Software Development Life
Cycle Policy and Procedure** (v1.1). Security is treated as a requirement at
every phase of the lifecycle.

## Reporting a Vulnerability

If you discover a security vulnerability, **do not open a public issue**.
Instead, report it privately to the DCAS Information Security Section so it can
be triaged and remediated before disclosure.

- Email the project maintainer / DCAS Information Security Section.
- Include: a description, steps to reproduce, affected component/endpoint, and
  impact assessment.
- You will receive an acknowledgement and a remediation timeline.

Per the Secure SDLC Policy (§11), all confirmed violations and material
vulnerabilities are reported to the DCAS Information Security Steering
Committee (DCASISSC).

## Supported Surface

| Component | Notes |
|-----------|-------|
| Backend API (`server.py`) | Authentication, admin user management. |
| Authentication | Email/password (hashed) + Google OAuth 2.0. |
| Admin endpoints (`/api/admin/*`) | Require an authenticated **admin** session. |

## Security Controls in CI

Every push and pull request runs:
- **Ruff** — Python static linting.
- **pytest** — includes access-control regression tests.
- **Bandit** — Python SAST (Static Source Code Scanning, §5/§7).
- **pip-audit** — dependency vulnerability scanning (§4.7 patch management).
- **ESLint** — JavaScript static analysis.

## Handling of Secrets

All secrets (`SECRET_KEY`, OAuth credentials, `DATABASE_URL`) are injected via
environment variables — never hard-coded. See `.env.example`. Databases and
`.env` files are git-ignored and must never be committed.

## Roadmap

A full compliance gap analysis and remediation roadmap is maintained in
[`upgrades.md`](upgrades.md); the mandated requirements specification is in
[`docs/requirements.md`](docs/requirements.md).
