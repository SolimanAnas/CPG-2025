/* SmartCare — shared theme module.
 *
 * Single source of truth for the theme list, replacing ~20 copy-pasted
 * `const themes = [...]` blocks that had drifted (some missing 'amoled',
 * inconsistent ordering) — a user who picked AMOLED on one page would get
 * silently bounced to a different theme cycling on another.
 *
 * Usage: load this script as early as possible in <head> (before first
 * paint, to avoid a flash of the wrong theme), then call SmartTheme.init()
 * immediately after:
 *
 *   <script src="(rel)/src/theme.js"></script>
 *   <script>SmartTheme.init();</script>
 *
 * Wire a theme-toggle button with: SmartTheme.next()
 */
(function () {
    "use strict";

    var THEMES = ['dark', 'amoled', 'light', 'sepia', 'forest'];
    var STORAGE_KEY = 'theme';

    function current() {
        return document.documentElement.getAttribute('data-theme') || 'dark';
    }

    function set(theme) {
        var next = THEMES.indexOf(theme) !== -1 ? theme : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
        return next;
    }

    function init() {
        var saved;
        try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { saved = null; }
        set(saved || 'dark');
    }

    function next() {
        var idx = THEMES.indexOf(current());
        return set(THEMES[(idx + 1) % THEMES.length]);
    }

    window.SmartTheme = { init: init, next: next, set: set, THEMES: THEMES };
})();
