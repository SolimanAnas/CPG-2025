# 📋 Requirements Specification — DCAS CPG 2025

**Project:** DCAS CPG 2025 — Clinical Review Platform
**Document type:** Software / Security Requirements Specification (SRS)
**Derived from:** *DCAS Software Development Life Cycle Policy and Procedure* (Secure SDLC), Version 1.1 (07-02-2025), Classification **Shared – Confidential**
**Prepared:** 2026-06-08 · **Status:** Draft for review/approval
**Classification:** Shared – Confidential

> **How this maps to the policy.** The Secure SDLC Procedure requires a layered requirements set: a **Business Requirement Specification (BRS, §6.1)**, a **Supplementary Business Specification (SBS, §6.2)** for Quality of Service, and a **Systems Requirement Specification (SRS, §6)** that *must* contain explicit **Security Requirements**, plus a **Software Architecture Document Security View (§6 SAD)**. This file consolidates those mandated sections for the CPG-2025 application. It is the input the policy expects to hand to "IT Solution Delivery teams involved in development, testing and maintenance."

---

## 0. Document Control & Approval

| Item | Detail |
|------|--------|
| Document Title | Requirements Specification — DCAS CPG 2025 |
| Document Reference | CPG2025-SRS-001 |
| Classification | Shared – Confidential |
| Version | 0.1 (Draft) |
| Author | Project Delivery / Information Security Section |
| Policy basis | Secure SDLC Policy & Procedure v1.1, §4.2, §6, §7 |

**Required approvals (per policy §6.1.2, §6.2.3, §6 SRS, §6 SAD):**

| Role (policy taxonomy) | Responsibility | Sign-off |
|------------------------|----------------|:--------:|
| Project Owner / Business Owner | Approve BRS & SBS | ☐ |
| Project Manager | Receive approved BRS/SBS/SRS/SAD | ☐ |
| System Analyst | Translate BRS/SBS → SRS | ☐ |
| Solution / Security Architect | Author SAD Security View | ☐ |
| Information Security Section | Ensure security requirements per IT Security, Security Monitoring, Password, Application & Database Security standards | ☐ |

> Per policy §6 (SRS/SAD): "The Information Security Section should ensure that security requirements are identified … in accordance with the IT Security Policy, Security Monitoring Policy, Password Security Policy, Application Security Standard, Database Security Standard." These referenced DCAS standards are **dependencies** of this document (see §7).

---

## 1. Business Requirement Specification (BRS) — *policy §6.1*

### 1.1 Description of business processes to be automated
Provide DCAS EMS personnel (Physicians, Paramedics, EMTs) with a digitised, interactive, **offline-capable** study aid and rapid reference tool for the 2025 Clinical Practice Guidelines, including chapter content, flashcards, quizzes, drug calculator, ECG tools and certification exam practice.

### 1.2 Added features expected after automation
- Instant offline access to protocols in the field (unreliable cellular coverage).
- Personal progress tracking (chapter completion, quiz accuracy).
- IT/management visibility of registered clinical staff and professional levels.

### 1.3 Actors & objectives
| Actor | Objective |
|-------|-----------|
| EMS Clinician (Physician/Paramedic/EMT) | Study, reference protocols, take practice exams. |
| IT Administrator | Manage user accounts and professional-level assignments. |
| Information Security Section | Assure security controls across the lifecycle. |

### 1.4 Inputs / Outputs
- **Inputs:** user registration data (name, email, professional level, password) or Google OAuth identity; quiz answers; navigation/progress events.
- **Outputs:** rendered guideline content, quiz scores, progress state, admin user list.

### 1.5 Business Rules
- Only authenticated users may access personalised features.
- Only authorised IT Administrators may view or modify user records.
- Clinical PII (name, email, professional level) must be protected at all times.

### 1.6 Business Volumes & Performance Measures
- Target user base: DCAS EMS staff. Content must render instantly from local cache; auth round-trip < 2 s on a normal connection.

---

## 2. Supplementary Business Specification (SBS) — Quality of Service — *policy §6.2*

| QoS attribute (policy §6.2.2) | Requirement for CPG-2025 |
|-------------------------------|---------------------------|
| **Scalability** | Support the full DCAS clinical workforce concurrently at peak (shift changes). |
| **Availability** | Core guideline content 100% available offline via Service Worker cache; backend auth target ≥ 99.5% uptime. |
| **Performance** | First contentful paint from cache < 1 s; API responses < 500 ms p95. |
| **Manageability** | Admin console for user/role management; observable logs for auth & admin actions. |
| **Flexibility/Configurability** | Themeable UI; content updatable without app reinstall (cache-bust protocol). |
| **Usability** | Dynamic font scaling, accessibility, 5 themes incl. AMOLED. |
| **Extensibility** | Modular content/quiz JSON; new chapters/exams added without code changes. |
| **Reusability** | Application-factory backend; reusable secure components. |
| **Services & Support** | Documented vulnerability-disclosure (`SECURITY.md`) and maintenance process. |

---

## 3. Systems Requirement Specification (SRS) — *policy §6*

### 3.1 High-level system overview
A PWA front-end (Vanilla JS/HTML/CSS + Service Worker) served by a Flask backend (Flask-SQLAlchemy, Flask-Login) on Gunicorn/Render, with SQLite/managed-DB persistence and Google OAuth 2.0 + local email/password authentication.

### 3.2 Assumptions & Dependencies
- TLS/HTTPS terminated at the hosting platform (Render).
- Google OAuth client credentials provisioned and held as environment secrets.
- DCAS reference security standards (IT Security, Password, Application & Database Security, Encryption & Key Management, Security Monitoring) are available and binding — see §7.

### 3.3 Functional requirements (summary)
| ID | Requirement |
|----|-------------|
| FR-1 | Register a user with name, email, professional level, password. |
| FR-2 | Authenticate via email/password (hashed) or Google OAuth 2.0. |
| FR-3 | Serve guideline content, flashcards, quizzes, drug calculator, ECG tools. |
| FR-4 | Persist per-user progress. |
| FR-5 | Provide an admin console to list/manage users and roles. |
| FR-6 | Operate offline for cached content. |

### 3.4 Interface requirements
- REST-style JSON API (`/api/register`, `/api/login`, `/api/google-login`, `/api/logout`, `/api/admin/users`).
- Static asset serving for the PWA shell and content.

### 3.5 Traceability
Each Security Requirement (§4) is traceable to a Policy clause and to an ISR/ISO control (§8). A full traceability matrix is maintained in `docs/security/COMPLIANCE_TRACEABILITY.md` (to be created).

---

## 4. Security Requirements — *policy §4.2, §6 SRS "Security Requirements", §6 SAD Security View*

> These are **mandatory**. The policy §4.2(b) names the controls that must be identified — *authentication, access control, encryption, input validation, and error handling* — and §6 SAD enumerates the Security View items. Each requirement below has an ID, the control, an acceptance criterion, and its mapping.

### 4.1 Identification & Authentication *(SAD: Identification, Authentication · §4.2, §4.4(c))*
| ID | Requirement | Acceptance criterion |
|----|-------------|----------------------|
| SR-AUTH-1 | All authentication decisions are made **server-side**; no credential check or auth state in client code. | No secret/hash in front-end; `localStorage` cannot grant access. |
| SR-AUTH-2 | Passwords stored only as salted one-way hashes (Werkzeug PBKDF2/scrypt). | DB never stores plaintext; hash verified server-side. |
| SR-AUTH-3 | Enforce a **password policy** (min length, complexity, common-password block) per DCAS Password Security Policy. | Weak passwords rejected at `register`. |
| SR-AUTH-4 | Google OAuth tokens verified server-side against the configured client ID. | Forged/expired tokens rejected (401). |
| SR-AUTH-5 | Rate limiting + lockout on auth endpoints; generic failure messages (no user enumeration). | Brute-force throttled; identical error for bad user vs bad password. |

### 4.2 Authorization & Access Control *(SAD: Authorization · §4.4(c), ISR 8.4.2)*
| ID | Requirement | Acceptance criterion |
|----|-------------|----------------------|
| SR-AUTHZ-1 | Every admin endpoint (`/api/admin/*`) requires authentication **and** an admin-role check. | Anonymous/non-admin → 403; verified by a security test. |
| SR-AUTHZ-2 | The admin dashboard page is gated server-side; unauthenticated requests are redirected/denied. | `/pages/admin.html` not renderable without admin session. |
| SR-AUTHZ-3 | Principle of least privilege for all roles; source-code repo access restricted to authorised developers. | Role matrix enforced; repo branch protection + CODEOWNERS. |

### 4.3 Confidentiality of Data *(SAD: Confidentiality of data · §3.5, §8.4)*
| ID | Requirement | Acceptance criterion |
|----|-------------|----------------------|
| SR-CONF-1 | PII (name, email, professional level) protected in transit (TLS) and at rest (encrypted DB per Encryption & Key Management Policy). | Prod DB encrypted; HTTPS enforced. |
| SR-CONF-2 | No production/PII data in development, test, or version control. | `.gitignore` excludes DBs; test data masked/dummy only. |
| SR-CONF-3 | Admin user list exposes only the minimum necessary fields to authorised admins. | No password hashes or surplus PII returned by APIs. |

### 4.4 Integrity & Input/Output Validation *(§4.4(a), §4.5(b), ISR 8.3.1–8.3.4)*
| ID | Requirement | Acceptance criterion |
|----|-------------|----------------------|
| SR-INT-1 | Validate and sanitise all inputs server-side (type, length, format). | Malformed input rejected with safe errors. |
| SR-INT-2 | Prevent injection (SQLi via ORM/parameterised queries) and XSS (output encoding; avoid unsafe `innerHTML`; CSP). | Security tests for SQLi/XSS pass. |
| SR-INT-3 | Integrity/validation checks on processed and output data. | Tampered parameters/forms rejected. |

### 4.5 Error Handling *(§4.2(b), §4.4(b))*
| ID | Requirement | Acceptance criterion |
|----|-------------|----------------------|
| SR-ERR-1 | Errors handled gracefully; no stack traces or internal detail to clients; **debug mode disabled in production**. | `debug=False` in prod; generic error pages. |

### 4.6 Security Monitoring & Logging *(SAD: Security Monitoring · §3.9, §4.7(b))*
| ID | Requirement | Acceptance criterion |
|----|-------------|----------------------|
| SR-LOG-1 | Log auth events (success/failure) and all admin actions (role change, delete) with timestamp + actor. | Audit trail queryable; shipped to monitored sink. |
| SR-LOG-2 | Security monitoring requirements identified per DCAS Security Monitoring Policy. | Monitoring coverage documented. |

### 4.7 Secure Configuration & Transport *(SAD: Network positioning, Hardening · §4.3(c), §4.6(a))*
| ID | Requirement | Acceptance criterion |
|----|-------------|----------------------|
| SR-CFG-1 | All secrets (`SECRET_KEY`, OAuth client/secret, DB URL) injected via environment; app fails fast if unset; **no hard-coded fallbacks**. | No secrets in source or history. |
| SR-CFG-2 | Security headers enforced: CSP, HSTS, X-Content-Type-Options, frame-ancestors, Referrer-Policy. | Headers present on all responses. |
| SR-CFG-3 | Secure session cookies (`Secure`, `HttpOnly`, `SameSite`). | Verified in responses. |
| SR-CFG-4 | OS / web server / DB hardened per the DCAS Secure Baseline Document. | Hardening checklist signed off. |
| SR-CFG-5 | Network positioning of components per IT Security Policy; environments separated (dev/SIT vs UAT/prod). | Deployment topology documented in SAD. |

### 4.8 Patch & Database Security *(SAD: Patch Management, Database Security · §4.7(a))*
| ID | Requirement | Acceptance criterion |
|----|-------------|----------------------|
| SR-PATCH-1 | Process to manage security updates/patches; automated dependency scanning (`pip-audit`, Dependabot). | CI fails on High/Critical vulns. |
| SR-DB-1 | Database security per the DCAS Database Security Standard (access control, least privilege, encryption). | DB access restricted & audited. |

---

## 5. SAD Security View — Requirement Checklist *(policy §6 SAD)*

The policy mandates the Software Architecture Document Security View cover the following. Each maps to the requirements above and **must be designed before coding** (§7 Design, Security Architect review gate).

| SAD Security View item | Covered by |
|------------------------|-----------|
| Identification | SR-AUTH-1 |
| Authentication | SR-AUTH-1…5 |
| Authorization | SR-AUTHZ-1…3 |
| Confidentiality of data | SR-CONF-1…3 |
| Security Monitoring | SR-LOG-1…2 |
| Network positioning | SR-CFG-5 |
| Hardening | SR-CFG-4 |
| Patch Management | SR-PATCH-1 |
| Database Security Requirements | SR-DB-1 |

---

## 6. Verification & Testing Requirements *(policy §7 Testing, §4.5)*

| ID | Requirement |
|----|-------------|
| VR-1 | **Static Source Code Scanning (SAST)** in CI; identified vulnerabilities fixed before SIT (§7 Source Code Scanning). |
| VR-2 | **Software Security Testing** for the web app: SQL injection, XSS, XST, parameter/form/URL manipulation, session ID security, access control, directory traversal (§7 Software Security Testing). |
| VR-3 | Unit + integration tests incl. negative/boundary/regression cases (§7 Unit/SIT). |
| VR-4 | **Security sign-off** by the Information Security Section / CISO before production deployment (ISR 8.7.2). |

---

## 7. Referenced DCAS Standards (Dependencies)

Per policy §6, the security requirements above are governed by, and must be reconciled with, the following DCAS documents (obtain current versions from the Information Security Section):

- IT Security Policy
- Password Security Policy
- Application Security Standard
- Database Security Standard
- Security Monitoring Policy
- Encryption and Key Management Policy
- Secure Baseline Document (per platform)
- Third Party Policy *(if any component is outsourced)*
- Change Management Procedure · Release Management Procedure · Information Back-up Procedure

---

## 8. Traceability — Requirements → Policy / ISR / ISO

| Requirement | Policy clause | ISR v3 | ISO 27001:2022 |
|-------------|---------------|--------|----------------|
| SR-AUTH-* | §4.2(b), §4.4(c) | 5.2.1.5 | A.8.26 |
| SR-AUTHZ-* | §4.4(c) | 8.4.2, 8.7.2 | A.8.26 |
| SR-CONF-* | §3.5, §8.2, §8.4 | 8.5.4 | A.8.33 |
| SR-INT-* | §4.4(a), §4.5(b) | 8.3.1–8.3.4 | A.8.29 |
| SR-ERR-1 | §4.2(b), §4.6(a) | 8.5.x | A.8.25 |
| SR-LOG-* | §3.9, §4.7(b) | 8.6.1 | A.8.34 |
| SR-CFG-* | §3.4, §4.3(c), §4.6(a) | 8.2.x | A.8.25, A.8.31 |
| SR-PATCH-1 / SR-DB-1 | §4.7(a) | 8.6.1 | A.8.25 |
| VR-1…VR-4 | §4.5, §7 | 8.6.1/8.6.2, 8.7.1/8.7.2 | A.8.29 |

---

*This requirements specification is the §6 mandated artefact set (BRS + SBS + SRS + SAD Security View) for DCAS CPG 2025. It must be reviewed and approved by the Project Owner and the Information Security Section (per §6) before the design and coding phases begin, and traced to delivery via `docs/security/COMPLIANCE_TRACEABILITY.md`.*
