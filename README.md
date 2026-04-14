# 🚑 DCAS CPG 2025 - Clinical Review Platform

![Python](https://img.shields.io/badge/Python-3.10+-blue.svg?logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Framework-Flask-black.svg?logo=flask&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/Frontend-Vanilla_JS-f7df1e.svg?logo=javascript&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-100%25_Offline_Ready-5a0fc8.svg?logo=pwa&logoColor=white)

A secure, high-performance Progressive Web Application (PWA) designed to provide Dubai Corporation for Ambulance Services (DCAS) EMS personnel with a digitized, interactive study aid and rapid reference tool for the 2025 Clinical Practice Guidelines.

*🔗 **Live Demo:** [https://cpg-2025.onrender.com](https://cpg-2025.onrender.com)* *(Replace with your actual link)*

---

## ✨ Enterprise Features

### 🔐 Secure Authentication & IT Management
* **Google OAuth 2.0 Integration:** Seamless single-tap login utilizing Google Cloud credentials.
* **Encrypted Standard Login:** Secure email/password registration utilizing `Werkzeug` SHA-256 password hashing.
* **IT Admin Console:** A hidden, protected directory dashboard (`/api/admin/users`) allowing IT and management to monitor registered clinical staff and track professional levels (Physician, Paramedic, EMT).

### ⚡ 100% Offline Capability (PWA)
Built for the field where cellular service is unreliable. 
* Utilizes **Service Workers** to aggressively cache core clinical guidelines, flashcards, and UI assets.
* Instant load times via local storage rendering.
* Dedicated "Clear Cache" protocol for seamless over-the-air (OTA) updates.

### 🎨 Premium Glassmorphism UI & Accessibility
* **Zero-Dependency Frontend:** Built entirely in Vanilla JavaScript and raw CSS for maximum rendering speed and zero framework bloat.
* **5 Custom Themes:** Includes Dark, Light, Sepia, Forest, and a true **AMOLED Black** theme for battery conservation during long shifts.
* **Accessibility:** Dynamic font scaling and battery-level monitoring.

### 🧠 Interactive Clinical Engine
* **Study Modules:** Chapter summaries, interactive flashcards, quizzes, and clinical scenarios.
* **Progress Tracking:** Local caching engine memorizes chapter completion, quiz accuracy, and total attempts.
* **Session Memory:** Automatically remembers the user's last scrolled position and recently visited protocols.

---

## 🛠️ Technology Stack

**Backend:**
* Python 3
* Flask (Web Framework)
* Flask-SQLAlchemy (ORM) & SQLite (Database)
* Flask-Login (Session Management)
* Gunicorn (Production WSGI Server)

**Frontend:**
* HTML5 / CSS3 (Modern Glassmorphism Design)
* Vanilla JavaScript (ES6+)
* Service Workers / Cache API

**Deployment:**
* Render Cloud Hosting
* GitHub CI/CD Pipeline

---

## 💻 Local Installation & Setup

For IT review or local development, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/SolimanAnas/CPG-2025.git](https://github.com/SolimanAnas/CPG-2025.git)
   cd CPG-2025
