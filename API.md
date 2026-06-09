# API Reference — DCAS CPG

Base URL (local): `http://localhost:8899`

Request/response bodies are JSON. Authenticated endpoints use the Flask-Login
session cookie issued on login.

## CSRF requirement for state-changing requests

For any `POST`, `PATCH`, `PUT`, or `DELETE` to a `/api/` route, the CSRF guard
(`_register_csrf_guard`) requires:

- header `X-Requested-With: XMLHttpRequest`, **and**
- `Content-Type: application/json` for body-carrying methods (POST/PATCH/PUT).

Requests missing these are rejected with `400 {"error": "Invalid request"}`.

## Authentication

| Method | Path | Auth | Rate limit |
|--------|------|------|------------|
| POST | `/api/register` | none | (see config) |
| POST | `/api/login` | none | 10/min; 50/hour |
| POST | `/api/google-login` | none | 10/min; 50/hour |
| GET  | `/api/logout` | session | — |

### POST `/api/register`

```json
{ "username": "user@dcas.ae", "password": "Str0ngPass!", "full_name": "Jane Doe", "professional_level": "Paramedic" }
```
- `username` must be a valid email.
- `password` policy: min 10 chars, with upper/lower/digit; common passwords blocked.
- `professional_level` ∈ {Physician, Paramedic, EMT, Admin, ""}.

Responses: `201` success · `400` validation error / duplicate email.

### POST `/api/login`

```json
{ "username": "user@dcas.ae", "password": "Str0ngPass!" }
```
- `200` — `{ "message", "redirect": "/index.html", "role", "email" }` (sets session)
- `401` — `{ "error": "Invalid username or password" }` (generic, anti-enumeration)

### POST `/api/google-login`

```json
{ "credential": "<google-id-token>" }
```
Responses: `200` success · `400` no token · `401` invalid token · `503` Google login not configured.

### GET `/api/logout`

Requires session. Redirects (`302`) to `/login.html`.

## Admin API

All require session **and** admin role; non-admins get `403`.

| Method | Path | Description |
|--------|------|-------------|
| GET    | `/api/admin/users` | List all users |
| PATCH  | `/api/admin/users/<id>/role` | Update a user's role (`{ "role": "..." }`) |
| DELETE | `/api/admin/users/<id>` | Delete a user |

`GET /api/admin/users` returns `[{ "id", "full_name", "email", "role" }]`.

## Operations

### GET `/api/health`

Liveness/readiness probe (rate-limit exempt). Verifies DB connectivity.

- `200` — `{ "status": "healthy", "database": "up" }`
- `503` — `{ "status": "degraded", "database": "down" }`

## Error format

Errors return `{ "error": "<message>" }` with the matching status. Rate-limit
breaches return `429`; forbidden returns `403`.

## Audit logging

Auth and admin events emit one JSON line to the `dcas.audit` logger
(`_audit`). Wire this to a monitored sink in production (see `DEPLOYMENT.md`).
