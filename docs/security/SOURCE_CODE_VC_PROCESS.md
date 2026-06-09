# Source Code Version Control Process — DCAS CPG 2025

**Policy ref:** Secure SDLC §3.7 (Version Control) · §3.8 (CODEOWNERS) · §4.3 · ISR 8.1.1.3
**Document ref:** CPG2025-VCP-001 · Version 1.0 · 2026-06-09
**Classification:** Shared – Confidential

---

## 1. Purpose

This document defines the source code version control process for the DCAS CPG 2025 platform, including branch strategy, commit standards, CODEOWNERS configuration, and history hygiene requirements. It ensures traceability between code changes and their justifications and prevents unauthorised modifications to security-sensitive files.

---

## 2. Repository

| Property | Value |
|----------|-------|
| Platform | GitHub |
| Repository | `SolimanAnas/CPG-2025` |
| Default branch | `main` (protected) |
| Visibility | Private |

---

## 3. Branch Protection Rules (main)

The `main` branch must have the following GitHub branch protection settings:

| Rule | Setting |
|------|---------|
| Require pull request before merging | ✅ Enabled |
| Required approving reviews | ≥ 1 (CODEOWNERS-designated reviewer) |
| Dismiss stale reviews on new push | ✅ Enabled |
| Require status checks to pass | ✅ Enabled (all CI jobs) |
| Require branches to be up to date | ✅ Enabled |
| Restrict who can push to matching branches | Admins + CODEOWNERS only |
| Allow force pushes | ✗ Disabled (except controlled history purge — see §7) |
| Allow deletions | ✗ Disabled |

---

## 4. CODEOWNERS

The `CODEOWNERS` file (`.github/CODEOWNERS`) defines mandatory reviewers for security-sensitive files. Any PR that modifies these files will not merge without approval from the listed owner(s).

```
# Security-sensitive backend
/server.py                      @security-reviewer
/requirements.txt               @security-reviewer
/Procfile                       @security-reviewer

# CI/CD pipeline
/.github/                       @security-reviewer

# Authentication and admin UI
/pages/login.html               @security-reviewer
/pages/admin.html               @security-reviewer
/pages/signup.html              @security-reviewer

# Security documentation
/docs/security/                 @security-reviewer

# Root security config
/.gitignore                     @security-reviewer
/pyproject.toml                 @security-reviewer
```

`@security-reviewer` maps to the Information Security Section GitHub team. This must be configured in GitHub repository settings.

---

## 5. Branch Naming Convention

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feature/<ticket>-description` | `feature/CPG-42-drug-calc-ui` |
| Bug fix | `fix/<ticket>-description` | `fix/CPG-55-login-redirect` |
| Security fix | `security/<ticket>-description` | `security/CPG-61-csrf-patch` |
| Dependency patch | `deps/<ticket>-description` | `deps/CPG-63-bump-werkzeug` |
| Documentation | `docs/<ticket>-description` | `docs/CPG-64-sad-update` |
| Hotfix | `hotfix/<ticket>-description` | `hotfix/CPG-99-session-leak` |

Branches are deleted after their PR is merged.

---

## 6. Commit Message Standard

All commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <short description>

[optional body: explain WHY, not WHAT]

[optional footer: refs, breaking changes]
```

| Type | When to use |
|------|------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `security` | Security fix or hardening |
| `deps` | Dependency version change |
| `docs` | Documentation only |
| `test` | Test additions or changes |
| `ci` | CI/CD configuration |
| `refactor` | Code change with no behaviour change |

**Prohibited in commit messages:**
- Secrets, API keys, passwords, or hashes of any kind.
- PII (names, email addresses).
- Internal IP addresses or hostnames.
- The string `SECRET_KEY` followed by any value.

---

## 7. History Hygiene

### 7.1 Files that must never be committed

Enforced by `.gitignore`:

```
instance/
*.db
.env
.env.*
!.env.example
*.pem
*.key
```

Any accidental commit of these files requires immediate remediation (see §7.2).

### 7.2 Remediation procedure for sensitive data in history

> **Warning:** `git filter-repo` and force-push are irreversible. This procedure requires explicit written approval from the ISO Section and Project Manager before execution.

**Open item F-05:** `instance/users.db` was committed in commits `99cd25c` and `292c5bc`. Remediation steps (pending approval):

```bash
# 1. Ensure all collaborators are informed and have committed / stashed local work.

# 2. Install git-filter-repo (pip install git-filter-repo).

# 3. Remove the file from all history:
git filter-repo --invert-paths --path instance/users.db --force

# 4. Force-push all branches:
git push origin --force --all
git push origin --force --tags

# 5. All collaborators must re-clone the repository — local clones will diverge.

# 6. Rotate all secrets that may have been in the DB or in any committed config file:
#    - Render: regenerate SECRET_KEY environment variable
#    - Google Cloud Console: rotate GOOGLE_CLIENT_ID / client secret
#    - Any ADMIN_EMAILS-associated accounts: consider password reset

# 7. Document completion in the Risk Assessment (R-12 status → "Fixed").
```

**Status:** Open — awaiting written approval from ISO Section and Project Manager.

---

## 8. Access Control

| Role | Repository access | Can merge to main |
|------|-------------------|:-----------------:|
| Lead Developer | Write | ✅ (via PR, after review) |
| Developer | Write | ✅ (via PR, after review) |
| ISO Section reviewer | Write (read-only to protected files) | ✅ (review/approve only) |
| Project Owner | Read | ✗ |
| External contributor | Fork only | ✗ |

Access is managed via GitHub repository collaborators and teams. Access must be reviewed quarterly or when a team member leaves.

---

## 9. Audit Trail

GitHub provides an immutable audit trail for:

- Who pushed each commit (`git log --format="%H %ae %s"`).
- Who approved each PR and when.
- Who merged each PR.
- Who changed branch protection settings.

GitHub organisation audit logs are exported and reviewed by the ISO Section quarterly.

---

## 10. Review & Approval

| Role | Name | Sign-off |
|------|------|:--------:|
| Information Security Section | | ☐ |
| Lead Developer | | ☐ |
| Project Manager | | ☐ |
