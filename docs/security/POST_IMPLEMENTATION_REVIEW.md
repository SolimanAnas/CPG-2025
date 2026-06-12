# Post Implementation Review — DCAS CPG 2025

**Policy ref:** Secure SDLC §8 "Post Implementation Review" · §4.7(c) · ISR 8.6.1
**Document ref:** CPG2025-PIR-001 · Version 1.0 · 2026-06-12
**Classification:** Shared – Confidential

> Per policy §8: "At the end of successful deployment, the project manager should prepare for the post implementation review in coordination with the project owner."

---

## 1. Purpose

This document defines the Post Implementation Review (PIR) process for the DCAS CPG 2025 platform. The PIR is conducted after each production deployment to confirm that the system meets user requirements, identify residual bugs or security issues, and formally close the deployment activity.

---

## 2. Trigger

The PIR is triggered after:
1. Successful production deployment confirmed by support admin.
2. System health check passes (all routes return expected responses).
3. Initial monitoring period of **5 business days** in production has elapsed.

---

## 3. Review Team

Per policy §8, the PIR team must include:

| Role | Responsibility |
|------|---------------|
| **Project Manager** (chair) | Organise and lead the PIR; prepare summary report |
| **Project Owner** | Verify requirements are met; authorise project sign-off |
| **End Users** (EMS clinical staff sample) | Validate clinical content accuracy and usability |
| **Business Analysts** | Cross-check delivered functionality against BRS/SBS |
| **Information Security Section** | Security vulnerability check; verify controls are active in production |
| **IT Admin** | Operational readiness; confirm monitoring and backup active |

---

## 4. Review Objectives (policy §8 points 2–3)

1. Determine effectiveness of the software in meeting user requirements.
2. Evaluate end-user experience (usability, performance, offline behaviour).
3. Identify any bugs or exception conditions in the software.
4. IT Security team checks for security issues and vulnerabilities post-deployment.
5. Optionally: commission an independent external consultant review.

---

## 5. PIR Checklist

### 5.1 Functional verification

| Item | Check | Owner | Result |
|------|-------|-------|--------|
| All FR-1…FR-6 requirements (from `docs/requirements.md`) delivered | Test UAT-01…UAT-14 results reviewed | Project Owner | ☐ |
| Guideline content renders correctly for all user roles | Sample content review | End Users | ☐ |
| Drug calculator returns correct dosing results | Spot-check against clinical source | Clinical Lead | ☐ |
| Offline mode functions for cached content | Test on airplane mode device | End Users | ☐ |
| Admin console — list, role update, delete all function correctly | Functional test | IT Admin | ☐ |
| Progress/quiz scores persist across sessions | Test on multiple devices | End Users | ☐ |

### 5.2 Security verification (IT Security — policy §8 point 5)

| Item | Check | Owner | Result |
|------|-------|-------|--------|
| Security headers present on all production responses | `curl -I https://[prod-url]/` | ISO Section | ☐ |
| Admin endpoint returns 403 for non-admin in production | Live test | ISO Section | ☐ |
| Rate limiting active on `/api/login` in production | >10 requests/min returns 429 | ISO Section | ☐ |
| HTTPS enforced; HTTP redirects to HTTPS | Browser test + curl | IT Admin | ☐ |
| Audit log (`dcas.audit`) flowing to monitored sink | Log sink confirmation | IT Admin | ☐ |
| No secrets in environment logs | Review Render log output | ISO Section | ☐ |
| `pip-audit` clean on current production dependencies | CI result | Developer | ☐ |
| Bandit SAST clean | CI result | Developer | ☐ |
| No open High/Critical CVEs | CI result | Developer | ☐ |

### 5.3 Operational readiness

| Item | Check | Owner | Result |
|------|-------|-------|--------|
| Database backup active and tested | DB provider backup confirmation | IT Admin | ☐ |
| Monitoring/alerting configured (errors, latency) | Render/SIEM alert config | IT Admin | ☐ |
| Rollback plan tested and documented | `RELEASE_CHANGE_MGMT.md §6.3` | IT Admin | ☐ |
| Incident response contacts updated | Contact list current | Project Manager | ☐ |
| `SECURITY.md` disclosure contact valid and monitored | Inbox check | ISO Section | ☐ |

---

## 6. Bug & Issue Tracking (policy §8 points 4–6)

All issues discovered during PIR are logged in GitHub Issues with:

| Label | Use |
|-------|-----|
| `bug` | Functional defect |
| `security` | Security finding (ISO Section only) |
| `pir-finding` | Issue raised during PIR |
| `critical` / `high` / `medium` / `low` | Severity |

- Issues tagged `security` or `critical` are escalated to the ISO Section and Project Manager immediately.
- All `pir-finding` issues must be resolved and retested before the PIR is formally closed.
- Changes required from PIR findings follow the Change Management Procedure (`RELEASE_CHANGE_MGMT.md`).

---

## 7. End-User Satisfaction Survey (policy §8 point 7)

The Project Manager, in coordination with the Project Owner, conducts an end-user satisfaction survey covering:

1. Ease of use and navigation.
2. Reliability and performance in the field.
3. Offline functionality.
4. Content accuracy and completeness.
5. Any missing features or improvements needed.

Survey results are documented and feed into the next sprint planning.

---

## 8. Formal Project Sign-off (policy §8 point 8)

Once all PIR checklist items are closed and the satisfaction survey is complete, a **project sign-off meeting** is held between:

- Project Manager
- Project Owner
- Information Security Section
- Key project team members

The sign-off meeting produces a **Project Closure Report** confirming:

- All specified requirements have been met.
- All identified defects and security findings have been resolved.
- The system is operating as expected in production.
- The project is formally closed.

---

## 9. PIR Record

| Deployment | Date | PIR conducted | Sign-off |
|------------|------|:-------------:|:--------:|
| v1.0.0 initial production | — | ☐ | ☐ |

---

## 10. Review & Approval

| Role | Name | Sign-off |
|------|------|:--------:|
| Project Manager | | ☐ |
| Project Owner | | ☐ |
| Information Security Section | | ☐ |
