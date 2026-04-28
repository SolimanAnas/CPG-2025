#!/usr/bin/env python3
"""
generate_chapters.py – Automated chapter file generator for DCAS CPG 2025
Reads chapters_config.json and creates missing content JS and HTML files.
"""

import json
import os
import sys
from pathlib import Path

# ---------- Paths ----------
ROOT = Path(__file__).parent
CONTENT_DIR = ROOT / "content"
CHAPTERS_DIR = ROOT / "chapters"
CONFIG_FILE = ROOT / "chapters_config.json"

# ---------- Templates ----------
CONTENT_TEMPLATE = '''/* ========== {shortTitle} – auto‑generated placeholder ========== */
window.CPG_DATA = {{
    id: "{id}",
    title: "{title}",
    shortTitle: "{shortTitle}",
    summary: `<div class="sum-card"><h3>Coming Soon</h3><p>This chapter is under construction.</p></div>`,
    quiz: [],
    flashcards: [],
    critical: []
}};
'''

# For multi‑section chapters (if sectionParam is present, the content file must have sections)
MULTI_SECTION_TEMPLATE = '''/* ========== {shortTitle} – auto‑generated placeholder (multi‑section) ========== */
window.CPG_DATA = {{
    id: "{id}",
    title: "{title}",
    shortTitle: "{shortTitle}",
    sections: [
        {{
            id: "{id}s1",
            shortTitle: "{shortTitle}",
            summary: `<div class="sum-card"><h3>Coming Soon</h3><p>This section is under construction.</p></div>`,
            quiz: [],
            flashcards: [],
            critical: []
        }}
    ]
}};
'''

HTML_TEMPLATE = '''<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    <title>DCAS CPG 2025 · {shortTitle}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles.css">
    
    <!-- PWA Manifest and icons -->
    <link rel="manifest" href="../manifest.json">
    <meta name="theme-color" content="#0056b3">
    <link rel="apple-touch-icon" href="../icon.png">
</head>
<body>

<header>
    <div class="header-left">
        <button class="icon-btn" id="homeBtn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <div class="header-text">
            <h1 id="pageTitle">{shortTitle}</h1>
            <p id="pageSubtitle">DCAS CPG 2025</p>
        </div>
    </div>
    <div class="header-right">
        <button class="icon-btn" id="themeToggle" title="Switch Theme">🎨</button>
        <div class="stats-badge" id="liveStatsBadge">
            <span>📊 <span id="statsAttempts">0</span></span>
            <div class="stats-divider"></div>
            <span>🎯 <span id="statsCritical">0%</span></span>
        </div>
        <a href="c-index.html?view=summary" class="icon-btn" id="headerIndexBtn" title="Index">📋</a>
        <a href="../about.html" class="icon-btn" id="headerAboutBtn" title="About">ℹ️</a>
    </div>
</header>

<main id="mainContent"></main>

<footer>
    <div>Created by Soliman Anas · for study aid only</div>
    <div><a href="../about.html">About & Disclaimer</a> · Refer to DCAS CPG and memo for procedures and protocols.</div>
</footer>

<script src="../content/{content_file}.js"></script>
<script src="../app.js"></script>
<script>
    (function() {{
        const themeBtn = document.getElementById('themeToggle');
        const html = document.documentElement;
        const themes = ['dark', 'light', 'sepia', 'forest'];
        
        function initTheme() {{
            const saved = localStorage.getItem('theme') || 'dark';
            html.setAttribute('data-theme', saved);
        }}

        function nextTheme() {{
            const current = html.getAttribute('data-theme') || 'dark';
            const currentIndex = themes.indexOf(current);
            const nextIndex = (currentIndex + 1) % themes.length;
            const next = themes[nextIndex];
            html.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        }}

        if (themeBtn) {{
            themeBtn.addEventListener('click', nextTheme);
        }}
        initTheme();

        document.getElementById('homeBtn').addEventListener('click', () => {{
            window.location.href = '../index.html';
        }});

        function loadStats() {{
            try {{
                const data = localStorage.getItem('dcas_cpg_stats');
                const stats = data ? JSON.parse(data) : {{ totalAttempts: 0, critical: {{ total: 0, correct: 0 }} }};
                const critAcc = stats.critical.total ? Math.round((stats.critical.correct / stats.critical.total) * 100) : 0;
                document.getElementById('statsAttempts').innerText = stats.totalAttempts || 0;
                document.getElementById('statsCritical').innerText = critAcc + '%';
            }} catch(e) {{}}
        }}
        loadStats();
    }})();
</script>

<!-- Service Worker Registration -->
<script>
    if ('serviceWorker' in navigator) {{
        window.addEventListener('load', () => {{
            navigator.serviceWorker.register('../sw.js')
                .then(reg => console.log('PWA Ready!', reg))
                .catch(err => console.log('PWA Failed', err));
        }});
    }}
</script>
</body>
</html>
'''

# ---------- Helpers ----------
def ensure_dir(path):
    if not path.exists():
        path.mkdir(parents=True)
        print(f"Created directory: {path}")

def write_if_missing(filepath, content):
    if not filepath.exists():
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Created: {filepath}")
    else:
        print(f"Exists, skipping: {filepath}")

def generate_content_file(ch):
    """Generate content JS file for a chapter."""
    # Determine if it's a multi‑section chapter: if sectionParam is present, it's part of a multi-section file
    # Actually, multi-section chapters share a single file (e.g., c1.js contains all c1s* sections).
    # We'll group by chapterFile.
    # For now, we treat each entry as a separate content file (except when chapterFile is same for multiple entries).
    # The simplest: use chapterFile as the base name. If multiple entries share the same chapterFile, we only create one file.
    # We'll handle that later by checking if file already exists.
    content_file = ch['chapterFile'] + '.js'
    content_path = CONTENT_DIR / content_file
    if content_path.exists():
        print(f"Content file exists: {content_path}")
        return
    
    # If it's a special chapter (c0, c-index) we can create a basic template.
    # For normal chapters, we create a placeholder.
    # If the chapter has a sectionParam, it means it's part of a multi-section file; we might want to create a file with a sections array.
    # But since we don't know the full structure, we'll create a simple single-section placeholder.
    # The user can later edit it.
    if ch.get('sectionParam'):
        # This is a section of a multi-section chapter – the content file should contain a sections array.
        # We'll create a basic multi-section template.
        content = MULTI_SECTION_TEMPLATE.format(
            id=ch['id'],
            title=ch['title'],
            shortTitle=ch['shortTitle']
        )
    else:
        content = CONTENT_TEMPLATE.format(
            id=ch['id'],
            title=ch['title'],
            shortTitle=ch['shortTitle']
        )
    write_if_missing(content_path, content)

def generate_html_file(ch):
    """Generate HTML file for a chapter."""
    html_file = ch['chapterFile'] + '.html'
    html_path = CHAPTERS_DIR / html_file
    if html_path.exists():
        print(f"HTML file exists: {html_path}")
        return
    content = HTML_TEMPLATE.format(
        shortTitle=ch['shortTitle'],
        content_file=ch['chapterFile']
    )
    write_if_missing(html_path, content)

def main():
    if not CONFIG_FILE.exists():
        print(f"Error: Config file not found: {CONFIG_FILE}")
        sys.exit(1)
    
    with open(CONFIG_FILE, 'r', encoding='utf-8') as f:
        chapters = json.load(f)
    
    ensure_dir(CONTENT_DIR)
    ensure_dir(CHAPTERS_DIR)
    
    # Keep track of created files to avoid duplicates (for multi-section chapters)
    created_content = set()
    created_html = set()
    
    for ch in chapters:
        # Generate content file (if not already created)
        content_key = ch['chapterFile']
        if content_key not in created_content:
            generate_content_file(ch)
            created_content.add(content_key)
        
        # Generate HTML file (if not already created)
        html_key = ch['chapterFile']
        if html_key not in created_html:
            generate_html_file(ch)
            created_html.add(html_key)
    
    # Optional: generate the CHAPTERS array for index.html
    print("\nDone. Now you may want to update index.html with the CHAPTERS array.")
    print("You can copy the array from chapters_config.json (with appropriate formatting).")

if __name__ == "__main__":
    main()
