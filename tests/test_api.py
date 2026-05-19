"""Smoke tests for the DCAS CPG Flask API."""
import json


class TestIndex:
    def test_index_serves_html(self, client):
        resp = client.get("/")
        assert resp.status_code == 200
        assert resp.content_type.startswith("text/html")


class TestRegister:
    def test_register_creates_user(self, client):
        resp = client.post("/api/register", json={
            "username": "test@dcas.ae",
            "password": "secure123",
            "full_name": "Test User",
            "professional_level": "Paramedic"
        })
        assert resp.status_code == 201
        data = resp.get_json()
        assert "Account created successfully" in data["message"]

    def test_register_duplicate_email(self, client):
        client.post("/api/register", json={
            "username": "dup@dcas.ae", "password": "pw"
        })
        resp = client.post("/api/register", json={
            "username": "dup@dcas.ae", "password": "pw"
        })
        assert resp.status_code == 400
        assert "already exists" in resp.get_json()["error"]

    def test_register_missing_password(self, client):
        resp = client.post("/api/register", json={"username": "x@x.ae"})
        assert resp.status_code in (400, 500)


class TestLogin:
    def test_login_success(self, client):
        client.post("/api/register", json={
            "username": "login@dcas.ae", "password": "correct"
        })
        resp = client.post("/api/login", json={
            "username": "login@dcas.ae", "password": "correct"
        })
        assert resp.status_code == 200
        data = resp.get_json()
        assert "Logged in successfully" in data["message"]
        assert data["redirect"] == "/index.html"

    def test_login_wrong_password(self, client):
        client.post("/api/register", json={
            "username": "bad@dcas.ae", "password": "goodpw"
        })
        resp = client.post("/api/login", json={
            "username": "bad@dcas.ae", "password": "wrongpw"
        })
        assert resp.status_code == 401

    def test_login_nonexistent_user(self, client):
        resp = client.post("/api/login", json={
            "username": "nobody@dcas.ae", "password": "x"
        })
        assert resp.status_code == 401


class TestGoogleLogin:
    def test_google_login_missing_token(self, client):
        resp = client.post("/api/google-login", json={})
        assert resp.status_code == 400
        assert "No token provided" in resp.get_json()["error"]

    def test_google_login_bad_token(self, client):
        resp = client.post("/api/google-login", json={
            "credential": "totally-fake-token"
        })
        assert resp.status_code == 401


class TestLogout:
    def test_logout_requires_auth(self, client):
        resp = client.get("/api/logout")
        assert resp.status_code == 302


class TestAdminUsers:
    def test_admin_users_empty(self, client):
        resp = client.get("/api/admin/users")
        assert resp.status_code == 200
        assert resp.get_json() == []

    def test_admin_users_with_data(self, client):
        client.post("/api/register", json={
            "username": "admin-test@dcas.ae",
            "password": "pw",
            "full_name": "Admin Test",
            "professional_level": "Admin"
        })
        resp = client.get("/api/admin/users")
        data = resp.get_json()
        assert len(data) >= 1
        assert any(u["email"] == "admin-test@dcas.ae" for u in data)


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
