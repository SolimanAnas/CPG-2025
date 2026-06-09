"""Smoke tests for the DCAS CPG Flask API."""
import json
import logging

# ── Helpers ───────────────────────────────────────────────────────────────────
STRONG_PW = "Dcas2025!Secure"  # meets all policy requirements


def _register(client, email, password=STRONG_PW, role="Paramedic"):
    return client.post("/api/register", json={
        "username": email,
        "password": password,
        "full_name": "Test User",
        "professional_level": role,
    })


def _login(client, email, password=STRONG_PW):
    return client.post("/api/login", json={"username": email, "password": password})


# ── Index ─────────────────────────────────────────────────────────────────────
class TestIndex:
    def test_index_serves_html(self, client):
        resp = client.get("/")
        assert resp.status_code == 200
        assert resp.content_type.startswith("text/html")


# ── Registration ──────────────────────────────────────────────────────────────
class TestRegister:
    def test_register_creates_user(self, client):
        resp = _register(client, "test@dcas.ae")
        assert resp.status_code == 201
        assert "Account created successfully" in resp.get_json()["message"]

    def test_register_duplicate_email(self, client):
        _register(client, "dup@dcas.ae")
        resp = _register(client, "dup@dcas.ae")
        assert resp.status_code == 400
        assert "already exists" in resp.get_json()["error"]

    def test_register_missing_password(self, client):
        resp = client.post("/api/register", json={"username": "x@x.ae"})
        assert resp.status_code == 400

    # ── Password policy (P2-1, ISR 5.2.1.5) ──────────────────────────────────
    def test_password_too_short(self, client):
        resp = _register(client, "short@dcas.ae", password="Ab1short")
        assert resp.status_code == 400
        assert "10 characters" in resp.get_json()["error"]

    def test_password_no_uppercase(self, client):
        resp = _register(client, "noupper@dcas.ae", password="alllower1234")
        assert resp.status_code == 400
        assert "uppercase" in resp.get_json()["error"]

    def test_password_no_lowercase(self, client):
        resp = _register(client, "nolower@dcas.ae", password="ALLUPPER1234")
        assert resp.status_code == 400
        assert "lowercase" in resp.get_json()["error"]

    def test_password_no_digit(self, client):
        resp = _register(client, "nodigit@dcas.ae", password="NoDigitAtAll")
        assert resp.status_code == 400
        assert "digit" in resp.get_json()["error"]

    def test_common_password_blocked(self, client):
        resp = _register(client, "common@dcas.ae", password="Password123")
        assert resp.status_code == 400
        assert "common" in resp.get_json()["error"].lower()

    def test_invalid_email_rejected(self, client):
        resp = _register(client, "not-an-email", password=STRONG_PW)
        assert resp.status_code == 400
        assert "email" in resp.get_json()["error"].lower()

    def test_invalid_professional_level_rejected(self, client):
        resp = client.post("/api/register", json={
            "username": "badlevel@dcas.ae",
            "password": STRONG_PW,
            "professional_level": "Hacker",
        })
        assert resp.status_code == 400


# ── Login ─────────────────────────────────────────────────────────────────────
class TestLogin:
    def test_login_success(self, client):
        _register(client, "login@dcas.ae")
        resp = _login(client, "login@dcas.ae")
        assert resp.status_code == 200
        data = resp.get_json()
        assert "Logged in successfully" in data["message"]
        assert data["redirect"] == "/index.html"

    def test_login_wrong_password(self, client):
        _register(client, "bad@dcas.ae")
        resp = _login(client, "bad@dcas.ae", password="WrongPass99!")
        assert resp.status_code == 401

    def test_login_nonexistent_user(self, client):
        resp = _login(client, "nobody@dcas.ae")
        assert resp.status_code == 401

    def test_login_generic_error_message(self, client):
        """Both bad-user and bad-password return the same message (anti-enumeration)."""
        _register(client, "enum@dcas.ae")
        r1 = _login(client, "enum@dcas.ae", password="WrongPass99!")
        r2 = _login(client, "noone@dcas.ae", password="WrongPass99!")
        assert r1.get_json()["error"] == r2.get_json()["error"]


# ── Google login ──────────────────────────────────────────────────────────────
class TestGoogleLogin:
    def test_google_login_missing_token(self, client):
        resp = client.post("/api/google-login", json={})
        assert resp.status_code == 400
        assert "No token provided" in resp.get_json()["error"]

    def test_google_login_bad_token(self, client):
        resp = client.post("/api/google-login", json={"credential": "totally-fake-token"})
        assert resp.status_code == 401


# ── Logout ────────────────────────────────────────────────────────────────────
class TestLogout:
    def test_logout_requires_auth(self, client):
        resp = client.get("/api/logout")
        assert resp.status_code == 302


# ── Admin (access-control regression, P0-1/P0-2) ─────────────────────────────
class TestAdminUsers:
    def test_admin_users_requires_auth(self, client):
        """Anonymous access to the admin API must be denied (no PII leak)."""
        resp = client.get("/api/admin/users")
        assert resp.status_code in (302, 401)

    def test_admin_users_forbidden_for_regular_user(self, client):
        """A signed-in non-admin must be forbidden (broken-access-control fix)."""
        _register(client, "regular@dcas.ae", role="Paramedic")
        _login(client, "regular@dcas.ae")
        assert client.get("/api/admin/users").status_code == 403

    def test_admin_can_list_users(self, client):
        """An authenticated admin (role == 'Admin') can list users."""
        _register(client, "admin-test@dcas.ae", role="Admin")
        _login(client, "admin-test@dcas.ae")
        resp = client.get("/api/admin/users")
        assert resp.status_code == 200
        data = resp.get_json()
        assert any(u["email"] == "admin-test@dcas.ae" for u in data)

    def test_admin_role_update(self, client):
        _register(client, "promote-me@dcas.ae", role="EMT")
        _register(client, "mgr@dcas.ae", role="Admin")
        _login(client, "mgr@dcas.ae")
        users = client.get("/api/admin/users").get_json()
        target = next(u for u in users if u["email"] == "promote-me@dcas.ae")
        resp = client.patch(f"/api/admin/users/{target['id']}/role",
                            json={"role": "Paramedic"})
        assert resp.status_code == 200
        assert resp.get_json()["role"] == "Paramedic"

    def test_admin_delete_user(self, client):
        _register(client, "todelete@dcas.ae", role="EMT")
        _register(client, "deleter@dcas.ae", role="Admin")
        _login(client, "deleter@dcas.ae")
        users = client.get("/api/admin/users").get_json()
        target = next(u for u in users if u["email"] == "todelete@dcas.ae")
        resp = client.delete(
            f"/api/admin/users/{target['id']}",
            headers={"X-Requested-With": "XMLHttpRequest"},
        )
        assert resp.status_code == 200
        users_after = client.get("/api/admin/users").get_json()
        assert not any(u["email"] == "todelete@dcas.ae" for u in users_after)

    def test_non_admin_cannot_update_role(self, client):
        _register(client, "attacker@dcas.ae", role="EMT")
        _register(client, "victim@dcas.ae", role="EMT")
        _login(client, "attacker@dcas.ae")
        # attacker doesn't know victim's id but any id should return 403
        resp = client.patch("/api/admin/users/1/role", json={"role": "Admin"})
        assert resp.status_code == 403


# ── Security headers (P0-7, §3.5) ────────────────────────────────────────────
class TestSecurityHeaders:
    REQUIRED_HEADERS = [
        "X-Content-Type-Options",
        "X-Frame-Options",
        "Referrer-Policy",
        "Content-Security-Policy",
    ]

    def test_security_headers_present(self, client):
        resp = client.get("/")
        for h in self.REQUIRED_HEADERS:
            assert h in resp.headers, f"Missing header: {h}"

    def test_csp_blocks_framing(self, client):
        csp = client.get("/").headers.get("Content-Security-Policy", "")
        assert "frame-ancestors" in csp


# ── Health check ─────────────────────────────────────────────────────────────
class TestHealthCheck:
    def test_health_returns_ok(self, client):
        resp = client.get("/api/health")
        assert resp.status_code == 200
        data = resp.get_json()
        assert data["status"] == "healthy"
        assert data["database"] == "up"


# ── Audit logging (P2-5, §4.7(b)) ────────────────────────────────────────────
class TestAuditLogging:
    def test_successful_login_is_audited(self, client, caplog):
        _register(client, "audit@dcas.ae")
        with caplog.at_level(logging.INFO, logger="dcas.audit"):
            _login(client, "audit@dcas.ae")
        records = [r for r in caplog.records if r.name == "dcas.audit"]
        events = [json.loads(r.message) for r in records]
        login_events = [e for e in events if e["event"] == "login"]
        assert any(e["outcome"] == "success" for e in login_events)

    def test_failed_login_is_audited(self, client, caplog):
        with caplog.at_level(logging.INFO, logger="dcas.audit"):
            _login(client, "ghost@dcas.ae", password="WrongPass99!")
        records = [r for r in caplog.records if r.name == "dcas.audit"]
        events = [json.loads(r.message) for r in records]
        assert any(e["event"] == "login" and e["outcome"] == "fail" for e in events)

    def test_admin_action_is_audited(self, client, caplog):
        _register(client, "adminlog@dcas.ae", role="Admin")
        _login(client, "adminlog@dcas.ae")
        with caplog.at_level(logging.INFO, logger="dcas.audit"):
            client.get("/api/admin/users")
        records = [r for r in caplog.records if r.name == "dcas.audit"]
        events = [json.loads(r.message) for r in records]
        assert any(e["event"] == "admin_list_users" and e["outcome"] == "success"
                   for e in events)


# ── CSRF guard (P2-7, §4.2(b)) ───────────────────────────────────────────────
class TestCsrfGuard:
    def test_post_without_json_content_type_rejected(self, client):
        """A plain-form POST to an API endpoint must be rejected (CSRF)."""
        resp = client.post(
            "/api/login",
            data="username=x&password=y",
            content_type="application/x-www-form-urlencoded",
            headers={"X-Requested-With": "XMLHttpRequest"},
        )
        assert resp.status_code == 400

    def test_post_without_xrw_header_rejected(self, client):
        """A POST missing X-Requested-With must be rejected."""
        resp = client.post(
            "/api/login",
            json={"username": "x@x.ae", "password": "y"},
            headers={"X-Requested-With": ""},  # blank — override the fixture default
        )
        assert resp.status_code == 400

    def test_valid_json_post_allowed(self, client):
        """A well-formed JSON POST with the CSRF headers must reach the handler."""
        resp = client.post(
            "/api/login",
            json={"username": "noone@dcas.ae", "password": "whatever"},
            headers={"X-Requested-With": "XMLHttpRequest"},
        )
        # Handler reached — 401 from wrong credentials, not 400 from CSRF guard.
        assert resp.status_code == 401

    def test_get_requests_not_blocked(self, client):
        """GET requests are never subject to the CSRF guard."""
        assert client.get("/api/admin/users").status_code in (302, 401)


# ── Static files ──────────────────────────────────────────────────────────────
class TestStaticFiles:
    def test_style_css(self, client):
        resp = client.get("/styles.css")
        assert resp.status_code == 200
        assert resp.content_type.startswith("text/css")

    def test_manifest_json(self, client):
        resp = client.get("/manifest.json")
        assert resp.status_code == 200
        assert resp.content_type.startswith("application/json")

    def test_nonexistent_file_returns_404(self, client):
        resp = client.get("/nonexistent-file.xyz")
        assert resp.status_code == 404
