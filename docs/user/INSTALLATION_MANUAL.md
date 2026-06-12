# Installation & Deployment Manual — DCAS CPG 2025

**Document ref:** CPG2025-INS-001 · Version 1.0 · 2026-06-12
**Classification:** Shared – Confidential
**Audience:** IT Administrators, DevOps, Information Security Section

---

## 1. Prerequisites

| Requirement | Version | Notes |
|-------------|---------|-------|
| Python | 3.11.x | Specified in `runtime.txt` |
| pip | ≥ 23 | Bundled with Python |
| Git | ≥ 2.40 | For source checkout |
| Gunicorn | 23.0.0 | In `requirements.txt` |
| Node.js | 20.x | CI only — not needed for runtime |
| Render account | — | Production hosting |
| Google Cloud project | — | OAuth 2.0 client credentials |
| Managed DB provider | — | Supabase / PlanetScale (production) |

---

## 2. Environment Variables

All secrets are injected via environment variables. **Never hard-code values.**

Copy `.env.example` and populate:

```bash
cp .env.example .env          # local dev only — never commit .env
```

| Variable | Example value | Description |
|----------|--------------|-------------|
| `SECRET_KEY` | `$(python -c "import secrets; print(secrets.token_hex(32))")` | Flask session signing key — must be random and private |
| `DATABASE_URL` | `sqlite:///instance/dev.db` | DB connection string |
| `GOOGLE_CLIENT_ID` | `413832763437-xxx.apps.googleusercontent.com` | Google OAuth 2.0 client ID |
| `ADMIN_EMAILS` | `admin@dcas.gov.ae,it@dcas.gov.ae` | Comma-separated admin email addresses |
| `APP_ENV` | `production` | Enables HSTS header when set to `production` |
| `FLASK_DEBUG` | *(absent in production)* | Set to `1` only in local dev |

---

## 3. Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/SolimanAnas/CPG-2025.git
cd CPG-2025

# 2. Checkout the working branch
git checkout claude/cpg-2025-swot-its-compliance-GaiuJ

# 3. Create a virtual environment
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# 4. Install dependencies
pip install -r requirements.txt

# 5. Set up environment variables
cp .env.example .env
# Edit .env with your local values

# 6. Run the development server
FLASK_DEBUG=1 python server.py
# App runs on http://localhost:8899
```

> Do not expose the development server to the internet. `FLASK_DEBUG=1` enables the Werkzeug debugger (RCE risk if exposed).

---

## 4. Running the Test Suite

```bash
# All tests with coverage
SECRET_KEY=ci-test-key \
DATABASE_URL=sqlite:///:memory: \
GOOGLE_CLIENT_ID=ci-test-id \
python -m pytest tests/ -v

# Expected: 36 passed
```

CI runs this automatically on every push and PR. Do not merge if tests fail.

---

## 5. Running Security Scans Locally

```bash
# Python SAST
pip install bandit
bandit -r server.py scripts/ -ll

# Dependency CVE scan
pip install pip-audit
pip-audit -r requirements.txt

# Secret scan (requires gitleaks installed)
gitleaks detect --source . --no-git
```

All three must be clean before any production deployment.

---

## 6. Production Deployment on Render

### 6.1 One-time setup

1. **Create a Render Web Service:**
   - Source: GitHub repo `SolimanAnas/CPG-2025`, branch `main`
   - Build command: `pip install -r requirements.txt`
   - Start command: `gunicorn server:app` (from `Procfile`)
   - Runtime: Python 3.11

2. **Set all environment variables** in Render → Environment:

   | Variable | Value |
   |----------|-------|
   | `SECRET_KEY` | Generate: `python -c "import secrets; print(secrets.token_hex(32))"` |
   | `DATABASE_URL` | Managed DB connection string (PostgreSQL recommended) |
   | `GOOGLE_CLIENT_ID` | From Google Cloud Console |
   | `ADMIN_EMAILS` | Admin email addresses |
   | `APP_ENV` | `production` |

   > **Important:** Do NOT set `FLASK_DEBUG` in production.

3. **Configure the Google OAuth client:**
   - Go to Google Cloud Console → APIs & Services → Credentials.
   - Add the Render production URL to **Authorised JavaScript origins** and **Authorised redirect URIs**.

4. **Provision the production database:**
   - Create a managed PostgreSQL/MySQL instance (Supabase, PlanetScale, or Render PostgreSQL).
   - Set `DATABASE_URL` to the connection string.
   - The database schema is created automatically on first startup via `db.create_all()`.

5. **Verify CODEOWNERS and branch protection** are active in GitHub repo settings.

### 6.2 Deployment procedure (standard)

Follow `docs/security/RELEASE_CHANGE_MGMT.md §6` for the full pre-deployment checklist. In summary:

1. All CI checks green on the branch to be deployed.
2. ISO Section sign-off obtained (CODEOWNERS review approved).
3. UAT Manager sign-off obtained.
4. Trigger deploy in Render dashboard: **Manual Deploy → Deploy latest commit**.
5. Monitor Render logs for errors in the first 15 minutes.
6. Confirm health: `curl -I https://[your-render-url]/` → `200 OK`.
7. Notify Project Owner and ISO Section.

### 6.3 Rollback

If a post-deploy issue is detected:

1. Render dashboard → **Deploys** → select previous deploy → **Rollback**.
2. This is immediate and does not require a code change.
3. If the issue is data-related, restore from the last DB backup (see `OPERATIONS_MANUAL.md §6.3`).

---

## 7. UAT Environment Setup

The UAT environment is a separate Render service instance pointing to a separate database with **dummy data only**.

1. Create a second Render service (`cpg-2025-uat`) from the same repo.
2. Use **separate** env vars — different `SECRET_KEY`, different `DATABASE_URL`, different Google OAuth client (UAT-specific).
3. Set `APP_ENV=uat` (or `staging`).
4. Seed with dummy test users — **never import production data**.
5. Restrict access via Render service password or IP allowlist.

---

## 8. Version Identification

Every production release must be identifiable. Version is tracked via:

- `server.py`: `__version__ = "X.Y.Z"` constant.
- Git tag: `git tag vX.Y.Z && git push origin vX.Y.Z`
- Render deploy: the deployed commit SHA is visible in the Render dashboard.

Current version: **v1.0.0**

---

## 9. Post-Deployment Verification

Run these checks after every production deployment:

```bash
# 1. TLS and redirects
curl -I http://[your-render-url]/          # Should redirect to HTTPS
curl -I https://[your-render-url]/         # Should return 200

# 2. Security headers present
curl -s -D - https://[your-render-url]/ -o /dev/null | grep -i \
  "content-security-policy\|strict-transport-security\|x-content-type\|x-frame"

# 3. Admin endpoint requires auth
curl -s https://[your-render-url]/api/admin/users   # Should return 302 or 401

# 4. Rate limiting active
# Send 15 rapid POST requests to /api/login — 11th+ should return 429
```

---

## 10. Decommissioning

When the service is retired:

1. Export and archive all user data per DCAS Data Retention Policy.
2. Revoke Google OAuth client credentials.
3. Rotate and invalidate `SECRET_KEY`.
4. Delete the Render service and database.
5. Archive the GitHub repository (do not delete — preserves audit trail).
6. Document decommission in the change management log.

---

## 11. Document Control

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-06-12 | Initial release |
