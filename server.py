import os
import secrets
from flask import Flask, request, jsonify, send_from_directory, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests

db = SQLAlchemy()
login_manager = LoginManager()


def create_app(test_config=None):
    app = Flask(__name__, static_folder=".", static_url_path="")

    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', "dcas-cpg-2025-secure-key")
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///users.db')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    if test_config:
        app.config.update(test_config)

    db.init_app(app)
    login_manager.init_app(app)
    login_manager.login_view = 'index'

    with app.app_context():
        db.create_all()

    _register_routes(app)

    return app


# ==========================================
# DATABASE MODEL
# ==========================================
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)
    full_name = db.Column(db.String(150), nullable=True)
    role = db.Column(db.String(50), nullable=True)
    progress = db.Column(db.Text, default='{}')


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


# ==========================================
# ROUTES
# ==========================================
def _register_routes(app):

    GOOGLE_CLIENT_ID = os.getenv(
        'GOOGLE_CLIENT_ID',
        "413832763437-48k3r32312e8uevrouha9ss11lk79un9.apps.googleusercontent.com"
    )

    @app.route("/")
    def index():
        return send_from_directory(".", "index.html")

    @app.route("/<path:path>")
    def serve_static(path):
        return send_from_directory(".", path)

    @app.route('/api/register', methods=['POST'])
    def register():
        data = request.get_json() or {}
        email = data.get('username', '').strip()
        password = data.get('password', '').strip()
        full_name = data.get('full_name', '').strip()
        professional_level = data.get('professional_level', '').strip()

        if not email or not password:
            return jsonify({"error": "Email and password are required"}), 400

        if User.query.filter_by(username=email).first():
            return jsonify({"error": "An account with that email already exists"}), 400

        hashed_pw = generate_password_hash(password)
        new_user = User(
            username=email,
            password=hashed_pw,
            full_name=full_name,
            role=professional_level
        )
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "Account created successfully! You can now log in."}), 201

    @app.route('/api/login', methods=['POST'])
    def login():
        data = request.get_json()
        user = User.query.filter_by(username=data.get('username')).first()

        if user and check_password_hash(user.password, data.get('password')):
            login_user(user)
            return jsonify({"message": "Logged in successfully", "redirect": "/index.html"})

        return jsonify({"error": "Invalid username or password"}), 401

    @app.route('/api/google-login', methods=['POST'])
    def google_login():
        data = request.get_json()
        token = data.get('credential')

        if not token:
            return jsonify({"error": "No token provided"}), 400

        try:
            idinfo = id_token.verify_oauth2_token(token, google_requests.Request(), GOOGLE_CLIENT_ID)
            email = idinfo['email']
            name = idinfo.get('name', '')

            user = User.query.filter_by(username=email).first()

            if not user:
                random_pw = generate_password_hash(secrets.token_hex(16))
                user = User(username=email, password=random_pw, full_name=name)
                db.session.add(user)
                db.session.commit()

            login_user(user)
            return jsonify({"message": "Logged in successfully", "redirect": "/index.html"})

        except ValueError:
            return jsonify({"error": "Google authentication failed."}), 401

    @app.route('/api/logout')
    @login_required
    def logout():
        logout_user()
        return redirect('/login.html')

    @app.route('/api/admin/users', methods=['GET'])
    def get_all_users():
        users = User.query.all()
        user_list = []

        for u in users:
            user_list.append({
                "id": u.id,
                "full_name": u.full_name or "Google User",
                "email": u.username,
                "role": u.role or "Unassigned"
            })

        return jsonify(user_list)

    @app.errorhandler(404)
    def not_found(e):
        return send_from_directory(app.static_folder or '.', '404.html'), 404


# ==========================================
# INITIALIZE & RUN
# ==========================================
app = create_app()

if __name__ == "__main__":
    app.run(debug=True, port=8899)
