# Annual Internal Audit Procedure — DCAS CPG 2025

**Policy ref:** Secure SDLC §11 (Policy Compliance, Enforcement, and Violations) · §4.7(c)
**Document ref:** CPG2025-AAP-001 · Version 1.0 · 2026-06-12
**Classification:** Shared – Confidential

> Per policy §11: "An Internal audit shall be carried out once a year and a report on the compliance shall be submitted to the DCAS Information Security Steering Committee (DCASISSC)."

---

## 1. Purpose

This document defines the annual internal security audit procedure for the DCAS CPG 2025 platform, ensuring continued compliance with the DCAS Secure SDLC Policy and Procedure v1.1 and the referenced ISR v3 / ISO 27001:2022 controls. The audit report is submitted to the DCAS Information Security Steering Committee (DCASISSC).

---

## 2. Audit Schedule

| Activity | Timing |
|----------|--------|
| Audit initiation | First week of each calendar year (or within 12 months of previous audit) |
| Audit execution | Over a 3-week period |
| Report finalisation | By end of week 4 |
| DCASISSC submission | Within 30 days of audit initiation |
| Follow-up remediation review | 90 days after DCASISSC submission |

---

## 3. Audit Scope

Each annual audit covers:

| Area | What is reviewed |
|------|-----------------|
| **Source code** | Bandit SAST, Ruff lint, manual code review of security-critical paths |
| **Dependencies** | `pip-audit` current; no High/Critical CVEs outstanding |
| **CI/CD pipeline** | All security gates active (SAST, dep scan, secret scan, tests) |
| **SDLC documentation** | All mandatory artefacts current and signed off |
| **Access control** | GitHub repo access list; CODEOWNERS active; branch protection rules |
| **Secrets management** | No secrets in source or history; env vars current; rotation log |
| **Incident/finding log** | All open security findings triaged; residual risk accepted or remediated |
| **Patch management** | Dependency versions current; Dependabot PRs not stale |
| **Environment separation** | Dev/UAT/prod separation verified; no PII in dev/CI |
| **Audit log** | `dcas.audit` logger active and flowing to monitored sink |
| **Risk register** | RISK_ASSESSMENT.md current; residual risks reviewed |

---

## 4. Audit Team

| Role | Responsibility |
|------|---------------|
| **Lead Auditor** (ISO Section) | Conduct technical checks; author report |
| **Developer** | Provide evidence; run scans on request |
| **Project Manager** | Coordinate; ensure evidence availability |
| **Project Owner** | Review findings; approve residual risk acceptance |

The audit may be conducted by an external consultant per policy §8 point 3 for independence.

---

## 5. Audit Checklist

### 5.1 Code & CI security

| Check | Command / Evidence | Pass criteria | Result |
|-------|-------------------|--------------|--------|
| SAST — no open findings | `bandit -r server.py scripts/ -ll` | Exit 0 | ☐ |
| Dependency CVEs — clean | `pip-audit -r requirements.txt` | No High/Critical | ☐ |
| Secret scan — clean | Gitleaks CI result | No secrets found | ☐ |
| All CI jobs green on main | GitHub Actions result | All pass | ☐ |
| Python lint clean | `ruff check .` | Exit 0 | ☐ |
| JS lint clean | ESLint result | No errors | ☐ |

### 5.2 Access control

| Check | Evidence | Pass criteria | Result |
|-------|---------|--------------|--------|
| CODEOWNERS active | GitHub repo settings | ISO team is enforced reviewer | ☐ |
| Branch protection on main | GitHub repo settings | PR + CI required; no direct push | ☐ |
| Repo access list reviewed | GitHub collaborators | Only active authorised developers | ☐ |
| Admin team membership current | GitHub/Render team roles | No departed staff with access | ☐ |

### 5.3 Secrets & configuration

| Check | Evidence | Pass criteria | Result |
|-------|---------|--------------|--------|
| No secrets in git history | `git log --all -S "SECRET" -- server.py` | No matches | ☐ |
| `SECRET_KEY` rotated in last 12 months | Render env var change log | Yes | ☐ |
| Google OAuth client secret rotated | Google Cloud Console | Yes | ☐ |
| `.env` not committed | `git ls-files .env` | No output | ☐ |
| `instance/users.db` not in history | `git log --all -- instance/users.db` | No commits (post F-05 purge) | ☐ |

### 5.4 SDLC documentation currency

| Document | Last reviewed | Sign-off current | Result |
|----------|-------------|:---------------:|--------|
| RISK_ASSESSMENT.md | | ☐ | ☐ |
| SAD.md | | ☐ | ☐ |
| DESIGN_HLD_LLD.md | | ☐ | ☐ |
| SECURE_CODING_STANDARD.md | | ☐ | ☐ |
| TEST_STRATEGY.md | | ☐ | ☐ |
| ENVIRONMENT_SEPARATION.md | | ☐ | ☐ |
| RELEASE_CHANGE_MGMT.md | | ☐ | ☐ |
| MAINTENANCE_PATCH_PLAN.md | | ☐ | ☐ |
| SOURCE_CODE_VC_PROCESS.md | | ☐ | ☐ |
| COMPLIANCE_TRACEABILITY.md | | ☐ | ☐ |
| POST_IMPLEMENTATION_REVIEW.md | | ☐ | ☐ |

### 5.5 Security monitoring & incident response

| Check | Evidence | Pass criteria | Result |
|-------|---------|--------------|--------|
| `dcas.audit` log flowing to monitored sink | SIEM/CloudWatch query | Events visible | ☐ |
| Auth failure events logged in last 30 days | Log query | Log entries present | ☐ |
| No unacknowledged security alerts in monitoring | Alert dashboard | Zero open alerts | ☐ |
| All `security`-labelled GitHub Issues resolved | GitHub Issues | None open without accepted risk | ☐ |
| `SECURITY.md` disclosure inbox monitored | Inbox check | Monitored; no unresponded reports | ☐ |

### 5.6 Risk register review

| Check | Action |
|-------|--------|
| Review all residual Medium/High risks from RISK_ASSESSMENT.md | Confirm still valid or update |
| Confirm F-05 (git history purge) completed or re-accepted | Update R-12 status |
| Confirm P2-6 (DB encryption) implemented or re-accepted | Update R-11 status |
| Check for new threats (new CVEs, new DCAS policy changes, incidents) | Add new risks if needed |
| Residual risk re-accepted by Project Owner and ISO Section | Sign-off on updated register |

---

## 6. Audit Report Structure

The audit report submitted to DCASISSC must contain:

1. **Executive Summary** — overall compliance status (Compliant / Partially Compliant / Non-Compliant)
2. **Scope and methodology**
3. **Findings** — one row per finding: ID, description, severity, recommendation
4. **Compliance matrix** — updated `COMPLIANCE_TRACEABILITY.md` snapshot
5. **Risk register summary** — open residual risks and acceptance status
6. **Remediation plan** — findings requiring action, owner, target date
7. **Sign-off** — Lead Auditor, Project Manager, Project Owner

---

## 7. Finding Severity & SLA

| Severity | Definition | Remediation SLA |
|----------|-----------|-----------------|
| Critical | Active exploitable vulnerability; policy §8 violation | 24 hours |
| High | Significant control gap; DCASISSC must be notified | 5 business days |
| Medium | Control weakness; mitigating factors present | Next sprint (≤ 2 weeks) |
| Low | Minor gap or documentation issue | Next planned release |
| Informational | Observation; no immediate action required | No SLA |

---

## 8. Audit History

| Audit year | Lead Auditor | Findings (C/H/M/L) | DCASISSC submission | Status |
|------------|-------------|-------------------|---------------------|--------|
| 2026 | | — | — | Scheduled |

---

## 9. Review & Approval

| Role | Name | Sign-off |
|------|------|:--------:|
| Information Security Section (Lead Auditor) | | ☐ |
| Project Manager | | ☐ |
| Project Owner | | ☐ |
