# Environment Separation — DCAS CPG 2025

**Policy ref:** Secure SDLC §6 (SAD §5.6 "Network Positioning") · §3.9 · ISR 8.1.1.4
**Document ref:** CPG2025-ENV-001 · Version 1.0 · 2026-06-09
**Classification:** Shared – Confidential

---

## 1. Purpose

This document defines the separation of environments used throughout the DCAS CPG 2025 SDLC, ensuring that production data is never accessible from development or test environments and that each environment has controls appropriate to its exposure level.

---

## 2. Environment Inventory

| Environment | Purpose | Hosting | Access |
|-------------|---------|---------|--------|
| **Development (DEV)** | Active coding and local testing | Developer workstation | Developer only — no external exposure |
| **CI (Continuous Integration)** | Automated build, lint, test, SAST, dependency scan | GitHub Actions ephemeral runners | GitHub Actions — isolated per run |
| **SIT (System Integration Test)** | End-to-end integration testing against dummy data | Local / ephemeral Docker | Developer + Test Lead |
| **UAT (User Acceptance Test)** | Business / clinical acceptance testing | Render preview environment or separate Render service | Project Owner, BAs, End Users — no production data |
| **Production (PROD)** | Live service for DCAS clinical staff | Render cloud (HTTPS, public) | Authorised DCAS clinical staff |

---

## 3. Data Rules per Environment

| Rule | DEV | CI | SIT | UAT | PROD |
|------|:---:|:--:|:---:|:---:|:----:|
| Real patient / PII data permitted | ✗ | ✗ | ✗ | ✗ | ✅ |
| Dummy / masked data required | ✅ | ✅ | ✅ | ✅ | — |
| Production `SECRET_KEY` used | ✗ | ✗ | ✗ | ✗ | ✅ |
| Production `DATABASE_URL` used | ✗ | ✗ | ✗ | ✗ | ✅ |
| `FLASK_DEBUG=1` permitted | ✅ | ✗ | ✗ | ✗ | ✗ |
| TLS required | ✗ | ✗ | ✗ | ✅ | ✅ |
| External network exposure | ✗ | ✗ | ✗ | Limited | ✅ |

> **Policy requirement (Secure SDLC §7, UAT section):** UAT environment must use masked or dummy data only. No patient identifiers, real names, or production credentials may be imported into UAT.

---

## 4. Configuration per Environment

### 4.1 Development

```
FLASK_DEBUG=1
SECRET_KEY=<random local value — not committed>
DATABASE_URL=sqlite:///dev.db          # local file, ignored by .gitignore
GOOGLE_CLIENT_ID=<dev OAuth client>
ADMIN_EMAILS=developer@example.com
APP_ENV=development
```

- `.env` file loaded locally; **never committed** (`.gitignore` covers `.env`, `.env.*`).
- SQLite DB file stored in `instance/`; **never committed** (`.gitignore` covers `instance/`, `*.db`).

### 4.2 CI (GitHub Actions)

```
SECRET_KEY         → GitHub Actions secret (injected per run)
DATABASE_URL       → sqlite:///:memory:   (in-memory, ephemeral)
GOOGLE_CLIENT_ID   → ci-test-id           (non-functional placeholder)
RATELIMIT_ENABLED  → False               (test fixture)
```

- Secrets injected via GitHub Actions environment; never echoed in logs.
- Ephemeral runner destroyed after each run — no data persistence.

### 4.3 UAT

- Separate Render service (e.g. `cpg-2025-uat.onrender.com`).
- Separate database instance — **no connection to production DB**.
- `SECRET_KEY` and `GOOGLE_CLIENT_ID` are UAT-specific values, not production values.
- Seeded with dummy clinical staff data only (no real emails, no real names).
- Access restricted to project stakeholders via Render service password or IP allowlist.

### 4.4 Production

- `DATABASE_URL` points to encrypted managed DB (open item P2-6: Supabase / PlanetScale).
- `SECRET_KEY` is a 64-character random value, rotated after any suspected exposure.
- `FLASK_DEBUG` absent or `0`.
- `APP_ENV=production` triggers HSTS header.
- Render deploy hooks triggered only after ISO security sign-off (manual approval gate).

---

## 5. Promotion Gates

```
DEV ──► CI (automated on push)
           │  CI green (lint + tests + SAST + pip-audit)
           ▼
        SIT sign-off (Test Lead)
           │
           ▼
        ISO Software Security Testing (manual — see TEST_STRATEGY.md §5)
           │  CISO sign-off
           ▼
        UAT (Project Owner + End Users)
           │  UAT Manager sign-off
           ▼
        PROD deploy (via Render)
```

No code may be deployed to production without all upstream gate sign-offs. Render deploy is **not** triggered automatically from `main` — it is triggered manually after sign-off confirmation.

---

## 6. Secret Isolation

| Secret | DEV | CI | UAT | PROD |
|--------|:---:|:--:|:---:|:----:|
| `SECRET_KEY` | local `.env` | GitHub secret | Render UAT env var | Render prod env var |
| `DATABASE_URL` | local `.env` | in-memory SQLite | Render UAT env var | Render prod env var |
| `GOOGLE_CLIENT_ID` | local `.env` | placeholder | UAT OAuth client | Prod OAuth client |
| `ADMIN_EMAILS` | local `.env` | not required | Render UAT env var | Render prod env var |

Prod and UAT OAuth clients are **separate Google Cloud credentials** so that a UAT breach cannot be used against production Google accounts.

---

## 7. Network Zones

| Zone | Exposure | Controls |
|------|----------|---------|
| DEV workstation | None (localhost only) | OS firewall; no open ports beyond localhost |
| CI runner | GitHub internal network | Ephemeral; destroyed post-run; no inbound |
| UAT Render service | HTTPS (restricted) | Render TLS; optional IP allowlist or basic auth |
| PROD Render service | HTTPS (public) | Render TLS + DDoS protection; rate limiting in app |

Full VLAN / network-zone separation (dev/SIT/UAT/prod VLANs at the DCAS perimeter level) is a DCAS IT infrastructure control documented separately by the Network Security team.

---

## 8. Open Items

| ID | Item | Owner | Target |
|----|------|-------|--------|
| P2-6 | Provision encrypted managed DB for UAT and production | IT Admin | Sprint 2 end |
| F-05 | Purge `instance/users.db` from git history; rotate secrets | Developer + ISO | On explicit approval |

---

## 9. Review & Approval

| Role | Name | Sign-off |
|------|------|:--------:|
| Information Security Section | | ☐ |
| Project Manager | | ☐ |
| Project Owner | | ☐ |
