import os
import secrets
from flask import Flask, request, jsonify, send_from_directory, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests

app = Flask(__name__, static_folder=".", static_url_path="")

# ==========================================
# APP CONFIGURATION (Security & Database)
# ==========================================
app.config['SECRET_KEY'] = "dcas-cpg-2025-secure-key"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize Database and Login Manager
db = SQLAlchemy(app)
login_manager = LoginManager(app)
login_manager.login_view = 'index'

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

# 🚀 FIX: Create tables here so Gunicorn (Render) catches it!
with app.app_context():
    db.create_all()

# ==========================================
# API KEYS & SETUP
# ==========================================
GOOGLE_CLIENT_ID = "413832763437-48k3r32312e8uevrouha9ss11lk79un9.apps.googleusercontent.com"

# ==========================================
# STATIC FILES (HTML, CSS, JS)
# ==========================================
@app.route("/")
def index():
    return send_from_directory(".", "index.html")

@app.route("/<path:path>")
def serve_static(path):
    return send_from_directory(".", path)

# ==========================================
# AUTHENTICATION ROUTES
# ==========================================
@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('username')
    password = data.get('password')
    full_name = data.get('full_name')               
    professional_level = data.get('professional_level') 

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

# ==========================================
# ADMIN DASHBOARD ROUTES
# ==========================================
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

# ==========================================
# INITIALIZE & RUN
# ==========================================
if __name__ == "__main__":
    app.run(debug=True, port=5000)