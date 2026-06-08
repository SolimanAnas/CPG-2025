import os
import secrets

from flask import Flask, abort, jsonify, redirect, request, send_from_directory
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


def create_app(test_config=None):
    app = Flask(__name__, static_folder=".", static_url_path="")

    # ── Secrets & config (Secure SDLC §3.4: no hard-coded secrets) ──────────
    # SECRET_KEY must come from the environment. If it is unset we fall back to
    # a per-process RANDOM key (never a predictable literal) so a missing
    # config can never enable session-cookie forgery.
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

    if test_config:
        app.config.update(test_config)

    db.init_app(app)
    login_manager.init_app(app)
    login_manager.login_view = "index"

    with app.app_context():
        db.create_all()

    _register_routes(app)
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

    @app.route("/api/register", methods=["POST"])
    def register():
        data = request.get_json(silent=True) or {}
        email = data.get("username", "").strip()
        password = data.get("password", "").strip()
        full_name = data.get("full_name", "").strip()
        professional_level = data.get("professional_level", "").strip()

        if not email or not password:
            return jsonify({"error": "Email and password are required"}), 400

        if User.query.filter_by(username=email).first():
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

        return jsonify({"message": "Account created successfully! You can now log in."}), 201

    @app.route("/api/login", methods=["POST"])
    def login():
        data = request.get_json(silent=True) or {}
        user = User.query.filter_by(username=data.get("username")).first()

        if user and check_password_hash(user.password, data.get("password", "")):
            login_user(user)
            return jsonify(
                {
                    "message": "Logged in successfully",
                    "redirect": "/index.html",
                    "role": user.role or "user",
                    "email": user.username,
                }
            )

        # Generic message — do not reveal whether the user exists (anti-enumeration).
        return jsonify({"error": "Invalid username or password"}), 401

    @app.route("/api/google-login", methods=["POST"])
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

            login_user(user)
            return jsonify(
                {
                    "message": "Logged in successfully",
                    "redirect": "/index.html",
                    "role": user.role or "user",
                    "email": user.username,
                }
            )
        except ValueError:
            return jsonify({"error": "Google authentication failed."}), 401

    @app.route("/api/logout")
    @login_required
    def logout():
        logout_user()
        return redirect("/login.html")

    # ── Admin API (Secure SDLC §4.4(c): authn + authz required) ─────────────
    @app.route("/api/admin/users", methods=["GET"])
    @login_required
    def get_all_users():
        if not _is_admin(current_user):
            abort(403)

        users = User.query.all()
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
            abort(403)

        data = request.get_json(silent=True) or {}
        new_role = (data.get("role") or "").strip()
        if not new_role:
            return jsonify({"error": "Role is required"}), 400

        user = db.session.get(User, user_id)
        if not user:
            return jsonify({"error": "User not found"}), 404

        user.role = new_role
        db.session.commit()
        return jsonify({"message": "Role updated", "id": user.id, "role": user.role})

    @app.route("/api/admin/users/<int:user_id>", methods=["DELETE"])
    @login_required
    def delete_user(user_id):
        if not _is_admin(current_user):
            abort(403)

        user = db.session.get(User, user_id)
        if not user:
            return jsonify({"error": "User not found"}), 404

        db.session.delete(user)
        db.session.commit()
        return jsonify({"message": "User deleted", "id": user_id})

    @app.errorhandler(403)
    def forbidden(e):
        return jsonify({"error": "Forbidden"}), 403

    @app.errorhandler(404)
    def not_found(e):
        return send_from_directory(app.static_folder or ".", "404.html"), 404


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
