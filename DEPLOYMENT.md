# Deployment Guide — DCAS CPG

Covers local development and production deployment. The production server/host is
provided by the organization; fill in host-specific values where indicated.

## 1. Prerequisites

- Python 3.11+
- `pip` / virtualenv
- A WSGI host (Render, or org-provided server) running Gunicorn

## 2. Environment Variables

| Variable | Required | Default | Purpose |
|----------|----------|---------|---------|
| `SECRET_KEY` | Strongly recommended | ephemeral random (logs a warning) | Flask session signing. Without it, sessions don't survive a restart. Generate: `python -c "import secrets; print(secrets.token_hex(32))"` |
| `APP_ENV` | Prod | `development` | Set to `production` to enable `Secure` session cookies + HSTS |
| `DATABASE_URL` | No | `sqlite:///users.db` | SQLAlchemy connection string |
| `GOOGLE_CLIENT_ID` | For Google login | — | OAuth client ID; if unset, `/api/google-login` returns `503` |
| `RATELIMIT_STORAGE_URI` | Multi-worker prod | `memory://` | Set to `redis://...` so rate limits are shared across workers |

> Never commit secrets. `instance/`, `*.db`, and `.env` are gitignored.

## 3. Local Development

```bash
git clone https://github.com/SolimanAnas/CPG-2025.git
cd CPG-2025
python -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt

export SECRET_KEY=$(python -c "import secrets; print(secrets.token_hex(32))")
python server.py        # http://localhost:8899 (set FLASK_DEBUG=1 for debug)
```

## 4. Running Tests

```bash
SECRET_KEY=test DATABASE_URL=sqlite:///:memory: python -m pytest tests/ -v
```

## 5. Production (Gunicorn)

The app exposes a module-level `app = create_app()`, so the `Procfile` works as-is:

```
web: gunicorn server:app
```

Manual launch:

```bash
APP_ENV=production SECRET_KEY=... gunicorn server:app --bind 0.0.0.0:$PORT --workers 2
```

> When running more than one worker, set `RATELIMIT_STORAGE_URI=redis://...` so
> rate limits are enforced consistently across processes.

## 6. Host Configuration (org-provided)

1. **TLS / HTTPS** — terminate TLS at the host/load balancer. Setting
   `APP_ENV=production` makes session cookies `Secure` and emits HSTS.
2. **Database** — set `DATABASE_URL` to the managed database. SQLite is
   single-instance only; see `reports/database-roadmap.md`.
3. **Rate-limit storage** — Redis via `RATELIMIT_STORAGE_URI` for multi-worker.
4. **Backups** — schedule automated database backups.
5. **Audit log sink** — route the `dcas.audit` logger to a monitored sink
   (CloudWatch/Datadog/etc.).
6. **Health checks** — point the monitor at `GET /api/health`
   (`200` healthy, `503` degraded).

## 7. Post-Deploy Verification

```bash
curl -fsS https://<host>/api/health        # {"status":"healthy",...}
curl -sI https://<host>/ | grep -iE "content-security-policy|x-frame-options|strict-transport-security"
```
