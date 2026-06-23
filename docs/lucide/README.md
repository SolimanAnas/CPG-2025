# Lucide SVG Migration

Replaces emoji icons across the CPG-2025 frontend with Lucide SVG icons served from a single local sprite sheet. The work is staged but **not committed or pushed** — awaiting review and approval.

---

## Goal

Replace every UI emoji in HTML, JavaScript, and CSS with a Lucide icon referenced from `icons/sprite.svg`, so that:

- All icons are vector, scalable, and themed via `currentColor`.
- The visual style is consistent across all pages.
- Icons work offline (the sprite is pre-cached by the service worker).
- No icon references depend on the user's OS emoji font.
- Color-bearing status emojis (🟢 🟡 🔴 ⬛ ⬜ 🟧 🟨 🟩 ☐ © € and a few decorative sequences) stay as text because their meaning is conveyed by color or content, not by the glyph.

---

## Final State

| Metric                              | Value     |
| ----------------------------------- | --------- |
| Files modified                      | 197       |
| New file                            | `icons/sprite.svg` (42 KB, 122 symbols) |
| Total line changes (added+removed)  | ≈ 28,900  |
| Emoji→SVG replacements              | ≈ 2,400   |
| Distinct emojis found               | 146       |
| Mapped to Lucide                    | 142       |
| Kept as text (intentional)          | 16        |
| Unique Lucide icons used            | 122       |

The working tree has **197 modified files and 1 untracked file** (`icons/sprite.svg`). Nothing has been staged, committed, or pushed.

```
git status --porcelain   # 197 ' M ' lines + 1 '??' line
```

---

## Approach (what was actually done)

### 1. Discovery

Scanned every `.html`, `.js`, and `.css` file under the repo (excluding `node_modules`, `venv`, `_archive`, etc.) for emoji characters. Collected 146 unique emoji graphemes and ~3,000 occurrences.

### 2. Mapping

Built `emoji-mapping.json` with one entry per emoji:

```json
"🎨": { "lucide": "palette",      "category": "ui" }
"📊": { "lucide": "chart-no-axes-column", "category": "ui" }
"📋": { "lucide": "clipboard-list","category": "ui" }
…
"©":  { "lucide": null,           "category": "text",        "note": "Copyright, keep" }
"🟢": { "lucide": null,           "category": "color-emoji", "note": "Color = status" }
```

Mapping choices are documented in [`icon-mapping.md`](./icon-mapping.md). Notable fallbacks where Lucide has no exact match:

| Emoji | Lucide used | Why |
| --- | --- | --- |
| 🫁 lungs | `wind` | Closest medical analogy |
| 🤰 pregnant | `baby` | No pregnancy icon |
| 🚁 helicopter | `plane-takeoff` | No helicopter |
| 📊 bar chart | `chart-no-axes-column` | `bar-chart-3` was renamed |
| 🫙 jar | `container` | Closest shape |
| 🧸 teddy | `smile` | No teddy bear |
| ⏯ play-pause | `play` | Combined icon doesn't exist |
| ⎙ printer | `printer-check` | Print-with-check |
| ⚰ coffin | `skull` | No coffin |
| ℹ / ℹ️ info | `circle-help` | No exact match |

Every `lucide` name was verified to exist on `lucide-static@0.469.0` via HEAD request before being added.

### 3. Sprite generation

Fetched every unique Lucide SVG from `https://unpkg.com/lucide-static@0.469.0/icons/<name>.svg`, stripped the outer `<svg>` wrapper, and emitted each as a `<symbol id="…" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">` inside a single sprite file:

```xml
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol id="arrow-right" …><path d="M5 12h14"/>…</symbol>
  <symbol id="palette"    …><path d="…"/>…</symbol>
  …
</svg>
```

Result: `icons/sprite.svg`, 122 symbols, 42 KB.

### 4. Replacement in HTML/JS

Each emoji became an inline SVG referencing the sprite:

```html
<!-- before -->
<button>🎨</button>

<!-- after -->
<button>
  <svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false">
    <use href="icons/sprite.svg#palette"/>
  </svg>
</button>
```

Path depth is computed per file (root → `icons/sprite.svg`, `chapters/` and `pages/` → `../icons/sprite.svg`, `src/*/` → `../../icons/sprite.svg`).

The replacement preserves the file's existing line endings (LF or CRLF) so the diff stays clean.

### 5. CSS `content:` rules

Pseudo-element icons like `.cat-header::before{content:'🚑'}` were converted to mask-image so they inherit `currentColor`:

```css
/* before */
.cat-header::before{content:'🚑';font-size:.9rem}

/* after */
.cat-header::before{
  content:"";
  display:inline-block;
  width:1em; height:1em;
  background-color:currentColor;
  -webkit-mask:url("data:image/svg+xml;charset=utf-8,…#ambulance") no-repeat center/contain;
          mask:url("data:image/svg+xml;charset=utf-8,…#ambulance") no-repeat center/contain;
  vertical-align:-.125em;
  font-size:.9rem;
}
```

A second pass also repaired an earlier bug where the inline `<svg>` had been placed inside `content:` literally (which is invalid CSS).

### 6. Quote escaping fix

When the SVG output was inserted into JS strings wrapped in double quotes, the inner `class="lucide"` and `href="…"` collided with the outer string delimiters and produced JS syntax errors. All such occurrences in `.js` files were converted to single-quoted attribute syntax:

```js
// before — broken
shortTitle: "<svg class="lucide" …><use href="…"/></svg> Full Index",

// after — fixed
shortTitle: "<svg class='lucide' …><use href='…'/></svg> Full Index",
```

581 SVG blocks across 35 JS files were re-quoted. Inline `<script>` blocks in HTML files were inspected; they all use template literals or single-quoted strings and did not need changes.

### 7. Stylesheet additions

`styles.css` now defines how `.lucide` icons size themselves inside the existing component classes:

```css
.lucide {
  display: inline-block;
  vertical-align: -0.125em;
  fill: none; stroke: currentColor;
  stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
  flex-shrink: 0;
}
.icon-btn svg.lucide,
.toggle-btn svg.lucide,
.btn-action svg.lucide,
.sc-icon svg.lucide,
.lv-icon svg.lucide,
.search-empty-icon svg.lucide,
.pwa-icon-fallback svg.lucide { width: 60%; height: 60%; }
.toggle-btn svg.lucide { width: 1.4rem; height: 1.4rem; }
.stats-badge svg.lucide,
.popup-title svg.lucide,
.amoled-badge svg.lucide,
.res-ttl svg.lucide { width: 1em; height: 1em; margin-right: 4px; }
```

### 8. Service worker

`sw.js` was bumped from `dcas-cpg-v5.1` to `dcas-cpg-v5.2` and `icons/sprite.svg` was added to `PRE_CACHE` so the sprite is available offline. Existing `CACHE_FIRST_PATTERNS` already covered `/\/icons\//`, so once cached the sprite is served from cache.

---

## File inventory (what changed)

| Group | Files | Notes |
| --- | --- | --- |
| New asset | `icons/sprite.svg` | 122 Lucide `<symbol>`s |
| Stylesheet | `styles.css` | Added `.lucide` block at top |
| Service worker | `sw.js` | CACHE_VERSION bump + sprite pre-cache |
| Page entry | `index.html`, `404.html` | Theme/progress/nav icons |
| Chapters | `chapters/*.html` (≈80 files) | Header/footer icons |
| Pages | `pages/*.html`, `pages/*.js` | Course pages, exam pages, etc. |
| Content data | `content/*.js` | Headings, arrows, badges |
| Source | `src/prometric/exam.html`, `exam.js` | Wizard + analytics icons |
| Tests | `tests/prometric.spec.js` | Comment-level replacement only |

`data/*.json`, `pages/drug-data.json`, `pages/ecg-test-1.json`, all `src/{ITLS,EMPACT,PEPP}/*.json`, and every markdown file (`docs/**/*.md`, `reports/*.md`, `README.md`, `upgrades.md`) were **left untouched** per scope decision — their emojis live inside content/data strings that are not rendered as icon UI.

---

## Known issues / remaining tasks

These are **not blockers** for the migration itself, but they should be cleaned up before the work is merged.

### 1. Two pages still throw a JS syntax error

Playwright reports `Unexpected identifier 'lucide'` on:

- `chapters/c-index.html`
- `pages/ems-tools.html`

Both pages load `app.js` and one content script. `app.js` was processed by the quote-fix pass and is clean. The remaining syntax error is likely from an emoji replacement that landed **inside an inline `<script>` block** in one of these HTML files (or in a script that uses a quote style other than double or template-literal). Search the two files for `<svg class="lucide"` that sit inside a `<script>` tag and convert those to single-quoted attribute syntax the same way the JS files were fixed.

### 2. CSS specificity for inline `<style>` rules

A handful of pages (`pages/acls.html`, `pages/medical.html`, etc.) define their own `.float-btn`, `.icon-btn`, `.toggle-btn` rules inside an inline `<style>` block. Those rules are loaded **after** `styles.css`, so they override the `.lucide`-specific sizing in some narrow cases. Visually this shows up as icons that are slightly oversized or misaligned in those pages. Either:

- move the Lucide sizing rules into the inline `<style>` blocks too, **or**
- wrap the inline rules in `:where(...)` to drop their specificity.

### 3. Service-worker version

`sw.js` now reports `dcas-cpg-v5.2`. Existing users on v5.1 will need the new service worker to be activated before they get the offline sprite. There is no forced update path beyond `self.skipWaiting()` which is already called. Worth a sanity check on a real device after deploy.

### 4. Theme-color and ARIA labelling

Most buttons had `title="…"` on the icon-only `<button>` or `<a>`. Those titles were preserved, but the inner `<svg>` is now `aria-hidden="true" focusable="false"` — which is the right call. No changes needed unless the user testing surfaces a screen-reader regression.

### 5. Visual QA still required

The replacement is mechanical, so each icon mapping was chosen for **best fit**, not pixel-perfect identity. The following should be eyeballed on a real device:

- `🫁 lungs → wind` (Airway pages)
- `🚁 helicopter → plane-takeoff` (Trauma / dispatch pages)
- `🤰 pregnant → baby` (Obstetric pages)
- `📊 bar chart → chart-no-axes-column` (Statistics popups)
- `🧸 teddy → smile` (Pediatric icon)

If any of those reads wrong in context, swap the target icon in the mapping JSON and re-run the replacement script (see [`scripts.md`](./scripts.md)).

### 6. Caches that need to be cleared

On the user's device:

1. DevTools → Application → Service Workers → **Unregister**.
2. DevTools → Application → Storage → **Clear site data**.
3. Hard reload (Ctrl-Shift-R).

Otherwise the old CSS without `.lucide` will fight the new inline SVGs for a session or two.

---

## Re-running the migration

The scripts that produced this work are documented in [`scripts.md`](./scripts.md). The mapping JSON, the sprite builder, the replacement runner, and the post-fixers are all reproducible. If a new emoji is added later, append it to `emoji-mapping.json` and re-run `apply_v2.py`.

---

## Files in this folder

| File | Purpose |
| --- | --- |
| `README.md` (this file) | Goal, summary, known issues |
| `icon-mapping.md` | Full emoji → Lucide mapping table |
| `scripts.md` | How each script works, in execution order |
| `decisions.md` | Why certain emojis were kept as text |
