import json
import logging
import os
import re
import secrets
from datetime import datetime, timezone

from flask import Flask, abort, jsonify, redirect, request, send_from_directory
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_login import (
    LoginManager,
    UserMixin,
    current_user,
    login_required,
    login_user,
    logout_user,
)
from flask_sqlalchemy import SQLAlchemy
from google.auth.transport import requests as google_requests
from google.oauth2 import id_token
from werkzeug.security import check_password_hash, generate_password_hash

db = SQLAlchemy()
login_manager = LoginManager()
limiter = Limiter(key_func=get_remote_address)

# ── Audit logger (Secure SDLC §4.7(b), §3.9) ─────────────────────────────────
# Emits one JSON line per security event to the "dcas.audit" logger.
# Wire this logger to a monitored sink (e.g. CloudWatch, Datadog) in production.
_audit_log = logging.getLogger("dcas.audit")


def _audit(event: str, outcome: str, actor: str = "anonymous", detail: str = "") -> None:
    """Write a structured audit record for auth and admin events."""
    record = {
        "ts": datetime.now(timezone.utc).isoformat(),
        "event": event,
        "outcome": outcome,
        "actor": actor,
        "ip": request.remote_addr if request else "-",
        "detail": detail,
    }
    _audit_log.info(json.dumps(record))


# ── Password policy (Secure SDLC §4.2(b), ISR 5.2.1.5) ─────────────────────
_MIN_PW_LEN = 10
_EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
# Top common passwords to block at registration (sampled from NCSC/HIBP top-1k).
_COMMON_PASSWORDS = {
    "password", "password1", "password123", "passw0rd",
    "123456789", "1234567890", "12345678", "123456",
    "qwerty123", "qwertyuiop", "iloveyou", "welcome1",
    "admin1234", "letmein1", "monkey123", "dragon123",
    "superman", "batman123", "football", "baseball",
}


def _validate_email(email: str) -> str | None:
    """Return an error string, or None if valid."""
    if not email or not _EMAIL_RE.match(email):
        return "A valid email address is required."
    if len(email) > 254:
        return "Email address is too long."
    return None


def _validate_password(pw: str) -> str | None:
    """Return an error string, or None if the password meets policy."""
    if len(pw) < _MIN_PW_LEN:
        return f"Password must be at least {_MIN_PW_LEN} characters."
    if not re.search(r"[A-Z]", pw):
        return "Password must include at least one uppercase letter."
    if not re.search(r"[a-z]", pw):
        return "Password must include at least one lowercase letter."
    if not re.search(r"\d", pw):
        return "Password must include at least one digit."
    if pw.lower() in _COMMON_PASSWORDS:
        return "Password is too common. Please choose a stronger password."
    return None


def create_app(test_config=None):
    app = Flask(__name__, static_folder=".", static_url_path="")

    # ── Secrets & config (Secure SDLC §3.4: no hard-coded secrets) ──────────
    secret_key = os.getenv("SECRET_KEY")
    if not secret_key:
        secret_key = secrets.token_hex(32)
        app.logger.warning(
            "SECRET_KEY not set — generated an ephemeral key. Sessions will not "
            "survive a restart. Set SECRET_KEY in the environment for production."
        )
    app.config["SECRET_KEY"] = secret_key

    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL", "sqlite:///users.db")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    # ── Secure session cookies (Secure SDLC §3.5, §4.6) ─────────────────────
    is_production = os.getenv("APP_ENV", "development").lower() == "production"
    app.config["SESSION_COOKIE_HTTPONLY"] = True
    app.config["SESSION_COOKIE_SAMESITE"] = "Lax"
    app.config["SESSION_COOKIE_SECURE"] = is_production

    # ── Rate limiting (Secure SDLC §4.4(c), ISR 5.2.1.5) ────────────────────
    # Production: set RATELIMIT_STORAGE_URI=redis://... for multi-worker safety.
    # In test mode RATELIMIT_ENABLED is set to False (see test_config below).
    app.config.setdefault(
        "RATELIMIT_STORAGE_URI",
        os.getenv("RATELIMIT_STORAGE_URI", "memory://"),
    )
    app.config.setdefault("RATELIMIT_HEADERS_ENABLED", True)

    if test_config:
        app.config.update(test_config)

    db.init_app(app)
    login_manager.init_app(app)
    login_manager.login_view = "index"
    limiter.init_app(app)

    with app.app_context():
        db.create_all()

    _register_routes(app)
    _register_csrf_guard(app)
    _register_security_headers(app)

    return app


# ==========================================
# DATABASE MODEL
# ==========================================
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    full_name = db.Column(db.String(150), nullable=True)
    role = db.Column(db.String(50), nullable=True)
    progress = db.Column(db.Text, default="{}")


@login_manager.user_loader
def load_user(user_id):
    return db.session.get(User, int(user_id))


def _admin_emails():
    """Allow-list of admin emails sourced from the environment (no hard-coding)."""
    raw = os.getenv("ADMIN_EMAILS", "")
    return {e.strip().lower() for e in raw.split(",") if e.strip()}


def _is_admin(user):
    """A user is an admin if their role is 'Admin' or they are allow-listed."""
    if not user or not user.is_authenticated:
        return False
    if (user.role or "").strip().lower() == "admin":
        return True
    return (user.username or "").strip().lower() in _admin_emails()


# ==========================================
# ROUTES
# ==========================================
def _register_routes(app):

    GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")

    @app.route("/")
    def index():
        return send_from_directory(".", "index.html")

    @app.route("/<path:path>")
    def serve_static(path):
        return send_from_directory(".", path)

    # ── Auth endpoints ────────────────────────────────────────────────────────
    @app.route("/api/register", methods=["POST"])
    @limiter.limit("5 per minute; 20 per hour")
    def register():
        data = request.get_json(silent=True) or {}
        email = (data.get("username") or "").strip()
        password = (data.get("password") or "").strip()
        full_name = (data.get("full_name") or "").strip()
        professional_level = (data.get("professional_level") or "").strip()

        # ── Input validation (Secure SDLC §4.2(b), ISR 8.3.1) ───────────────
        err = _validate_email(email)
        if err:
            _audit("register", "fail", detail=f"invalid email: {err}")
            return jsonify({"error": err}), 400

        err = _validate_password(password)
        if err:
            _audit("register", "fail", actor=email, detail=f"weak password: {err}")
            return jsonify({"error": err}), 400

        if len(full_name) > 150:
            return jsonify({"error": "Name is too long."}), 400

        allowed_levels = {"Physician", "Paramedic", "EMT", "Admin", ""}
        if professional_level and professional_level not in allowed_levels:
            return jsonify({"error": "Invalid professional level."}), 400

        if User.query.filter_by(username=email).first():
            _audit("register", "fail", actor=email, detail="duplicate email")
            return jsonify({"error": "An account with that email already exists"}), 400

        hashed_pw = generate_password_hash(password)
        new_user = User(
            username=email,
            password=hashed_pw,
            full_name=full_name,
            role=professional_level,
        )
        db.session.add(new_user)
        db.session.commit()

        _audit("register", "success", actor=email)
        return jsonify({"message": "Account created successfully! You can now log in."}), 201

    @app.route("/api/login", methods=["POST"])
    @limiter.limit("10 per minute; 50 per hour")
    def login():
        data = request.get_json(silent=True) or {}
        username = (data.get("username") or "").strip()
        password = data.get("password") or ""

        user = User.query.filter_by(username=username).first()

        if user and check_password_hash(user.password, password):
            login_user(user)
            _audit("login", "success", actor=username)
            return jsonify(
                {
                    "message": "Logged in successfully",
                    "redirect": "/index.html",
                    "role": user.role or "user",
                    "email": user.username,
                }
            )

        # Generic message — do not reveal whether the user exists (anti-enumeration).
        _audit("login", "fail", actor=username or "unknown")
        return jsonify({"error": "Invalid username or password"}), 401

    @app.route("/api/google-login", methods=["POST"])
    @limiter.limit("10 per minute; 50 per hour")
    def google_login():
        data = request.get_json(silent=True) or {}
        token = data.get("credential")

        if not token:
            return jsonify({"error": "No token provided"}), 400

        if not GOOGLE_CLIENT_ID:
            return jsonify({"error": "Google login is not configured"}), 503

        try:
            idinfo = id_token.verify_oauth2_token(
                token, google_requests.Request(), GOOGLE_CLIENT_ID
            )
            email = idinfo["email"]
            name = idinfo.get("name", "")

            user = User.query.filter_by(username=email).first()
            if not user:
                random_pw = generate_password_hash(secrets.token_hex(16))
                user = User(username=email, password=random_pw, full_name=name)
                db.session.add(user)
                db.session.commit()
                _audit("google_register", "success", actor=email)

            login_user(user)
            _audit("google_login", "success", actor=email)
            return jsonify(
                {
                    "message": "Logged in successfully",
                    "redirect": "/index.html",
                    "role": user.role or "user",
                    "email": user.username,
                }
            )
        except ValueError:
            _audit("google_login", "fail", detail="invalid token")
            return jsonify({"error": "Google authentication failed."}), 401

    @app.route("/api/logout")
    @login_required
    def logout():
        actor = current_user.username if current_user.is_authenticated else "unknown"
        logout_user()
        _audit("logout", "success", actor=actor)
        return redirect("/login.html")

    # ── Admin API (Secure SDLC §4.4(c): authn + authz required) ─────────────
    @app.route("/api/admin/users", methods=["GET"])
    @login_required
    def get_all_users():
        if not _is_admin(current_user):
            _audit("admin_list_users", "denied", actor=current_user.username)
            abort(403)

        users = User.query.all()
        _audit("admin_list_users", "success", actor=current_user.username)
        return jsonify(
            [
                {
                    "id": u.id,
                    "full_name": u.full_name or "Google User",
                    "email": u.username,
                    "role": u.role or "Unassigned",
                }
                for u in users
            ]
        )

    @app.route("/api/admin/users/<int:user_id>/role", methods=["PATCH"])
    @login_required
    def update_user_role(user_id):
        if not _is_admin(current_user):
            _audit("admin_update_role", "denied", actor=current_user.username)
            abort(403)

        data = request.get_json(silent=True) or {}
        new_role = (data.get("role") or "").strip()
        if not new_role:
            return jsonify({"error": "Role is required"}), 400

        user = db.session.get(User, user_id)
        if not user:
            return jsonify({"error": "User not found"}), 404

        old_role = user.role
        user.role = new_role
        db.session.commit()
        _audit(
            "admin_update_role",
            "success",
            actor=current_user.username,
            detail=f"user={user.username} {old_role!r}→{new_role!r}",
        )
        return jsonify({"message": "Role updated", "id": user.id, "role": user.role})

    @app.route("/api/admin/users/<int:user_id>", methods=["DELETE"])
    @login_required
    def delete_user(user_id):
        if not _is_admin(current_user):
            _audit("admin_delete_user", "denied", actor=current_user.username)
            abort(403)

        user = db.session.get(User, user_id)
        if not user:
            return jsonify({"error": "User not found"}), 404

        deleted_email = user.username
        db.session.delete(user)
        db.session.commit()
        _audit(
            "admin_delete_user",
            "success",
            actor=current_user.username,
            detail=f"deleted={deleted_email}",
        )
        return jsonify({"message": "User deleted", "id": user_id})

    @app.errorhandler(429)
    def rate_limit_exceeded(e):
        _audit("rate_limit", "blocked", detail=str(e.description))
        return jsonify({"error": "Too many requests. Please try again later."}), 429

    @app.errorhandler(403)
    def forbidden(e):
        return jsonify({"error": "Forbidden"}), 403

    @app.route("/api/health")
    @limiter.exempt
    def health_check():
        # Liveness/readiness probe for monitoring. Verifies DB connectivity.
        try:
            db.session.execute(db.text("SELECT 1"))
            db_ok = True
        except Exception:
            _audit("health_check", "db_probe_failed")
            db_ok = False
        status = "healthy" if db_ok else "degraded"
        return (
            jsonify({"status": status, "database": "up" if db_ok else "down"}),
            200 if db_ok else 503,
        )

    @app.errorhandler(404)
    def not_found(e):
        return send_from_directory(app.static_folder or ".", "404.html"), 404


# ==========================================
# CSRF GUARD (Secure SDLC §4.2(b), P2-7)
# ==========================================
# Defense-in-depth on top of SameSite=Lax cookies:
#  1. SameSite=Lax blocks cross-site POST/PATCH/DELETE from carrying cookies.
#  2. We additionally require Content-Type: application/json (browsers cannot
#     send cross-site JSON POSTs without a CORS preflight) and the custom
#     X-Requested-With header (simple cross-site requests cannot set custom
#     headers without a preflight that would be rejected by absent CORS config).
def _register_csrf_guard(app):
    @app.before_request
    def csrf_guard():
        if request.method not in ("POST", "PATCH", "DELETE", "PUT"):
            return
        if not request.path.startswith("/api/"):
            return
        xrw = request.headers.get("X-Requested-With", "")
        # Body-carrying methods must additionally declare JSON content.
        # DELETE has no body so Content-Type is typically absent.
        ct = request.content_type or ""
        needs_ct = request.method in ("POST", "PATCH", "PUT")
        ct_ok = not needs_ct or "application/json" in ct
        if xrw != "XMLHttpRequest" or not ct_ok:
            detail = f"method={request.method} path={request.path}"
            _audit("csrf_guard", "blocked", detail=detail)
            return jsonify({"error": "Invalid request"}), 400


# ==========================================
# SECURITY HEADERS (Secure SDLC §3.5, §4.3(c))
# ==========================================
def _register_security_headers(app):
    @app.after_request
    def set_security_headers(response):
        response.headers.setdefault("X-Content-Type-Options", "nosniff")
        response.headers.setdefault("X-Frame-Options", "DENY")
        response.headers.setdefault("Referrer-Policy", "strict-origin-when-cross-origin")
        csp = (
            "default-src 'self'; "
            "img-src 'self' data: https:; "
            "script-src 'self' 'unsafe-inline' "
            "https://accounts.google.com https://apis.google.com; "
            "style-src 'self' 'unsafe-inline' https:; "
            "font-src 'self' https: data:; "
            "connect-src 'self' https://accounts.google.com; "
            "frame-src https://accounts.google.com; "
            "frame-ancestors 'none'"
        )
        response.headers.setdefault("Content-Security-Policy", csp)
        if app.config.get("SESSION_COOKIE_SECURE"):
            response.headers.setdefault(
                "Strict-Transport-Security", "max-age=31536000; includeSubDomains"
            )
        return response


# ==========================================
# INITIALIZE & RUN
# ==========================================
app = create_app()

if __name__ == "__main__":
    debug_enabled = os.getenv("FLASK_DEBUG", "").lower() in ("1", "true", "yes")
    app.run(debug=debug_enabled, port=int(os.getenv("PORT", "8899")))
