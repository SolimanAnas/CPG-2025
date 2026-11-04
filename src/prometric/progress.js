/* Prometric progress store, shared by the exam page, home and Courses.
 *
 * Keys start with `smartcare_` so pages/supabase-client.js syncs them to a
 * signed-in account. Each value is a whole collection, so that client merges
 * them per item (see mergeExamLog / mergeAnswerCounts there) rather than
 * letting one device's copy overwrite the other's.
 *
 *   smartcare_prometric_exams    [{ date, score, total, correct, answered, timeSpent, mode }]
 *                                score is a percentage; date (ISO) identifies the exam.
 *   smartcare_prometric_history  { [questionId]: [attempts, correct] }
 *   smartcare_prometric_setup    the last exam setup chosen
 *
 * The first load moves data from the old, unsynced keys (examStats,
 * questionHistory, examSetup) and compacts the answer history, which used to
 * log every attempt and would eventually outgrow the 1 MB account limit. */
(function () {
    'use strict';

    var KEYS = {
        exams: 'smartcare_prometric_exams',
        history: 'smartcare_prometric_history',
        setup: 'smartcare_prometric_setup',
    };
    var LEGACY = {
        exams: 'examStats',
        history: 'questionHistory',
        setup: 'examSetup',
        theme: 'examTheme',
    };
    var MAX_EXAMS = 1000;

    function read(key) {
        try {
            var raw = localStorage.getItem(key);
            return raw === null ? undefined : JSON.parse(raw);
        } catch (e) {
            return undefined;
        }
    }

    function write(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            return false;
        }
    }

    function remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            /* storage blocked */
        }
    }

    function count(value) {
        var n = Math.round(Number(value));
        return isFinite(n) && n > 0 ? n : 0;
    }

    function compactExam(e) {
        if (!e || typeof e !== 'object' || !e.date) return null;
        var record;
        if (e.max != null && e.total == null) {
            // Older home-page format: score was the number correct out of max.
            var max = count(e.max);
            record = { date: e.date, score: max ? Math.round((count(e.score) / max) * 100) : 0, total: max, correct: count(e.score) };
        } else {
            record = { date: e.date, score: Math.min(100, count(e.score)), total: count(e.total), correct: count(e.correct) };
        }
        record.answered = e.answered == null ? record.total : count(e.answered);
        if (e.timeSpent != null) record.timeSpent = count(e.timeSpent);
        if (e.mode) record.mode = String(e.mode);
        return record;
    }

    function compactHistory(old) {
        var out = {};
        Object.keys(old || {}).forEach(function (id) {
            var h = old[id];
            var attempts = Array.isArray(h) ? count(h[0]) : count(h && h.attempts);
            var correct = Array.isArray(h) ? count(h[1]) : count(h && h.correct);
            if (attempts > 0) out[id] = [attempts, Math.min(attempts, correct)];
        });
        return out;
    }

    function migrate() {
        if (read(KEYS.exams) === undefined) {
            var exams = read(LEGACY.exams);
            if (Array.isArray(exams) && write(KEYS.exams, exams.map(compactExam).filter(Boolean).slice(-MAX_EXAMS))) {
                remove(LEGACY.exams);
            }
        }
        if (read(KEYS.history) === undefined) {
            var history = read(LEGACY.history);
            if (history && typeof history === 'object' && write(KEYS.history, compactHistory(history))) {
                remove(LEGACY.history);
            }
        }
        if (read(KEYS.setup) === undefined) {
            var setup = read(LEGACY.setup);
            if (setup && typeof setup === 'object' && write(KEYS.setup, setup)) remove(LEGACY.setup);
        }
        // The exam page now follows the app-wide theme (src/theme.js).
        remove(LEGACY.theme);
    }

    function loadExams() {
        var exams = read(KEYS.exams);
        return Array.isArray(exams) ? exams.map(compactExam).filter(Boolean) : [];
    }

    function addExam(result) {
        var record = compactExam(result);
        if (!record) return loadExams();
        var exams = loadExams();
        exams.push(record);
        exams = exams.slice(-MAX_EXAMS);
        write(KEYS.exams, exams);
        return exams;
    }

    function loadHistory() {
        var history = read(KEYS.history);
        return history && typeof history === 'object' && !Array.isArray(history) ? compactHistory(history) : {};
    }

    function saveHistory(history) {
        return write(KEYS.history, history);
    }

    function loadSetup() {
        var setup = read(KEYS.setup);
        return setup && typeof setup === 'object' && !Array.isArray(setup) ? setup : {};
    }

    function saveSetup(setup) {
        return write(KEYS.setup, setup);
    }

    /* Last and average score, for summaries elsewhere in the app. */
    function summary() {
        var exams = loadExams();
        if (!exams.length) return null;
        var total = exams.reduce(function (sum, e) { return sum + e.score; }, 0);
        return {
            count: exams.length,
            last: exams[exams.length - 1].score,
            average: Math.round(total / exams.length),
            best: Math.max.apply(null, exams.map(function (e) { return e.score; })),
            lastDate: exams[exams.length - 1].date,
        };
    }

    /* Empty collections rather than removed keys, so the reset reaches other
       devices on the next sync instead of being restored from the cloud. */
    function clear() {
        write(KEYS.exams, []);
        write(KEYS.history, {});
        remove(LEGACY.exams);
        remove(LEGACY.history);
    }

    migrate();

    window.PrometricProgress = {
        KEYS: KEYS,
        migrate: migrate,
        loadExams: loadExams,
        addExam: addExam,
        loadHistory: loadHistory,
        saveHistory: saveHistory,
        loadSetup: loadSetup,
        saveSetup: saveSetup,
        summary: summary,
        clear: clear,
    };
})();
