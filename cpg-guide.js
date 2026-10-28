/* ========== cpg-guide.js – renders a CPG guideline or drug sheet ==========
 * Content files hold data only (window.CPG_DATA.guide in content/,
 * window.CPG_DRUG in content/drugs/); this file turns it into the page.
 * Every fact in that data comes from the official DCAS CPG PDF: numbers are
 * checked against data/cpg-source/ by tests/test_cpg_guides.py.
 *
 * Text fields may carry <b>, <sub> and <sup> only.
 */
(function () {
    'use strict';

    // Clinical levels, lowest first, as in the Scope of Practice Matrix (S1).
    const LEVELS = {
        'ER': 'Emergency Responder',
        'EMR': 'Emergency Medical Responder',
        'EMT': 'Emergency Medical Technician',
        'EMT-A': 'EMT-Advanced',
        'P': 'Paramedic',
        'AP': 'Advanced Paramedic',
        'EP': 'Emergency Physician'
    };

    // Table cells that are just a number or range ("120–160") never wrap.
    const NUMERIC = /^[\d.,\s\u2013\u2212<>&;ltg-]+$/;

    const ICON = (name) => `<svg class="lucide" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#${name}"/></svg>`;

    function level(code) {
        if (!code) return '';
        const name = LEVELS[code] || code;
        return `<span class="g-lvl" data-lvl="${code}" title="${name} and above">${code}</span>`;
    }

    function list(items, cls) {
        if (!items || !items.length) return '';
        return `<ul class="${cls || 'g-list'}">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    }

    // `inherited`: the step's own level, so rows at that level don't repeat it.
    function doseTable(rows, inherited) {
        if (!rows || !rows.length) return '';
        return `<table class="g-doses">
            <thead><tr><th scope="col">Drug</th><th scope="col">Dose</th><th scope="col">Repeat / note</th><th scope="col"><span class="g-sr">Level</span></th></tr></thead>
            <tbody>${rows.map(r => `<tr>
                <th scope="row">${r.drug}</th>
                <td class="g-dose">${r.dose}</td>
                <td>${r.note || ''}</td>
                <td>${r.level === inherited ? '' : level(r.level)}</td>
            </tr>`).join('')}</tbody></table>`;
    }

    // The phone form of a wide table: one card per column, rows as label/value.
    function stackedTable(s) {
        const rows = s.rows.filter(r => !r.group);
        return `<div class="g-stack">${s.columns.slice(1).map((col, i) => `
            <div class="g-stack-card"><h4>${col}</h4><dl>${rows
                .filter(r => r[i + 1])
                .map(r => `<dt>${r[0]}</dt><dd>${r[i + 1]}</dd>`).join('')}</dl></div>`).join('')}
        </div>`;
    }

    function step(s, n) {
        // A step that is one drug shows its dose on a line, not as a table.
        const single = s.doses && s.doses.length === 1 && s.doses[0].drug === s.title && s.doses[0].level === s.level ? s.doses[0] : null;
        return `<li class="g-step">
            <span class="g-num" aria-hidden="true">${n}</span>
            <div class="g-step-body">
                <div class="g-step-h"><span>${s.title}</span>${level(s.level)}</div>
                ${s.text ? `<p>${s.text}</p>` : ''}
                ${list(s.items)}
                ${single ? `<p class="g-dose-line"><b>${single.dose}</b>${single.note ? ` · ${single.note}` : ''}</p>` : doseTable(s.doses, s.level)}
            </div>
        </li>`;
    }

    const SECTION = {
        list: (s) => list(s.items),

        criteria: (s) => `<div class="g-criteria">
            <div><h4>Include</h4>${list(s.include)}</div>
            <div><h4>Exclude</h4>${list(s.exclude)}</div>
        </div>`,

        steps: (s) => `<ol class="g-steps" start="${s.start || 1}">${s.steps.map((x, i) => step(x, (s.start || 1) + i)).join('')}</ol>`,

        gate: (s) => `<div class="g-gate">
            <p class="g-gate-q">${s.question}</p>
            ${list(s.items)}
            <div class="g-gate-a">
                <div class="g-no"><b>No</b> ${s.no}</div>
                <div class="g-yes"><b>Yes</b> ${s.yes}</div>
            </div>
        </div>`,

        pathways: (s) => `<div class="g-paths">${s.paths.map(p => `
            <div class="g-path" data-tone="${p.tone || ''}">
                <h4>${p.title}</h4>
                <ol>${p.steps.map(x => `<li><span>${x.text}</span>${level(x.level)}</li>`).join('')}</ol>
            </div>`).join('')}</div>
            ${s.after ? `<p class="g-after">${s.after}</p>` : ''}`,

        doses: (s) => doseTable(s.rows),

        // A reference table from the CPG (normal vital signs, GCS, …).
        // Scrolls inside its box on phones; `notes` follow as a list.
        // A row of the form { group: "…" } is a sub-heading row.
        // `stack: true` (wide tables): on phones each column becomes a card.
        table: (s) => `<div class="g-table-wrap${s.stack ? ' g-has-stack' : ''}" tabindex="0" role="region" aria-label="${s.title}">
            <table class="g-table">
                <thead><tr>${s.columns.map(c => `<th scope="col">${c}</th>`).join('')}</tr></thead>
                <tbody>${s.rows.map(r => r.group
                    ? `<tr class="g-tgroup"><th colspan="${s.columns.length}" scope="rowgroup">${r.group}</th></tr>`
                    : `<tr>${r.map((c, i) => i ? `<td${NUMERIC.test(c) ? ' class="g-n"' : ''}>${c}</td>` : `<th scope="row">${c}</th>`).join('')}</tr>`).join('')}</tbody>
            </table></div>
            ${s.stack ? stackedTable(s) : ''}
            ${list(s.notes)}`,

        groups: (s) => s.groups.map(g => `<div class="g-group"><h4>${g.title}</h4>${list(g.items)}</div>`).join(''),

        related: (s) => `<ul class="g-related">${s.items.map(r =>
            `<li><a href="${r.href}">${r.label}</a></li>`).join('')}</ul>`,

        // Links into the app's own tools. Items with `ecg` (an ECG Simulator
        // rhythm key) show the rhythm strip itself (cpg-strip.js) and open it
        // in the simulator.
        tools: (s) => s.groups.map(g => g.items.some(t => t.ecg) ? `<div class="g-group">
            <h4>${g.title}</h4>
            <div class="g-strips">${g.items.map(strip).join('')}</div>
        </div>` : `<div class="g-group">
            <h4>${g.title}</h4>
            <ul class="g-tools">${g.items.map(t => `<li><a href="${t.href}">
                ${ICON(t.icon || g.icon || 'arrow-right')}
                <span><b>${t.label}</b>${t.sub ? `<small>${t.sub}</small>` : ''}</span>
            </a></li>`).join('')}</ul>
        </div>`).join('')
    };

    // `lead` (default II) picks the strip's lead; 12-lead patterns such as
    // STEMI open the simulator on its 12-lead view at that lead.
    function ecgHref(key, lead) {
        return `../pages/ecg.html?r=${encodeURIComponent(key)}${lead && lead !== 'II' ? `&view=12&lead=${encodeURIComponent(lead)}` : ''}`;
    }

    function strip(t) {
        const href = ecgHref(t.ecg, t.lead);
        const wave = window.CPGStrip ? CPGStrip.svg(t.ecg, { label: t.label, lead: t.lead || 'II' }) : '';
        return `<figure class="g-strip">
            ${wave}
            <figcaption>
                <span><b>${t.label}</b>${t.sub ? `<small>${t.sub}</small>` : ''}</span>
                <a href="${href}">${ICON('heart-pulse')}Open in ECG Simulator</a>
            </figcaption>
        </figure>`;
    }

    function section(s) {
        const body = (SECTION[s.type] || SECTION.list)(s);
        return `<section class="g-sec" data-tone="${s.tone || ''}">
            <h3>${s.icon ? ICON(s.icon) : ''}${s.title}</h3>
            ${s.intro ? `<p class="g-intro">${s.intro}</p>` : ''}
            ${body}
        </section>`;
    }

    function source(src) {
        return `<a class="g-source" href="${src.pdf}" target="_blank" rel="noopener">
            ${ICON('book-open')}<span>Source: ${src.label}, p. ${src.pages}</span></a>`;
    }

    function legend(levels) {
        if (!levels.length) return '';
        return `<p class="g-legend">${levels.map(level).join('')}
            <span>Lowest clinical level authorised; levels above it may also perform it.</span></p>`;
    }

    function usedLevels(obj) {
        const found = new Set();
        JSON.stringify(obj, (k, v) => { if (k === 'level' && v) found.add(v); return v; });
        return Object.keys(LEVELS).filter(l => found.has(l));
    }

    // A guideline: window.CPG_DATA.guide
    function renderGuide(g) {
        return `<article class="cpg-guide" data-group="${g.group || ''}">
            <div class="g-head">
                <p class="g-kicker">CPG ${g.cpg} · ${g.groupLabel}</p>
                <h2>${g.title}</h2>
                ${g.lead ? `<p class="g-lead">${g.lead}</p>` : ''}
                ${legend(usedLevels(g))}
            </div>
            ${g.sections.map(section).join('')}
            ${source(g.source)}
        </article>`;
    }

    // A drug sheet: window.CPG_DRUG
    function renderDrug(d) {
        const row = (label, html, tone) => html ? `<div class="d-row" data-tone="${tone || ''}"><h4>${label}</h4><div>${html}</div></div>` : '';
        const doses = (blocks) => (blocks || []).map(b => `<div class="d-dose"><b>${b.for}</b>${list(b.items)}</div>`).join('');
        return `<article class="cpg-guide cpg-drug">
            <div class="g-head">
                <p class="g-kicker">${d.code} · ${d.classification}</p>
                <h2>${d.name}</h2>
                <ul class="d-scope">${d.scope.map(s => `<li>${level(s.level)}<span>${s.for}</span></li>`).join('')}</ul>
            </div>
            <section class="g-sec d-sheet">
                ${row('Presentation', list(d.presentation))}
                ${row('Indications', list(d.indications), 'ok')}
                ${row('Contraindications', list(d.contraindications), 'stop')}
                ${row('Precautions', list(d.precautions), 'warn')}
                ${row('Adult dose', doses(d.adult))}
                ${row('Pediatric dose', doses(d.pediatric))}
                ${row('Side effects', list(d.sideEffects))}
                ${row('Pregnancy & lactation', list(d.pregnancy))}
                ${row('Administration notes', list(d.notes))}
                ${row('Mechanism', d.mechanism ? `<p>${d.mechanism}</p>` : '')}
            </section>
            ${source(d.source)}
        </article>`;
    }

    window.CPGGuide = { renderGuide, renderDrug, ecgHref, LEVELS };
})();
