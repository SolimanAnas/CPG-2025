/* ============================================================
   DCAS Drug Calculator 2026  —  Application Logic
   drug-calculator.js  |  Data: drug-data.json
   ============================================================ */
'use strict';

const state = { data:null, drug:null, age:null, pickerOpen:false };

/* ── Boot: load JSON then init ──────────────────────────── */
async function boot() {
  try {
    const res  = await fetch('drug-data.json');
    state.data = await res.json();
    buildDrugPicker();
    renderEmpty();
  } catch(e) {
    document.getElementById('root').innerHTML =
      '<div class="boot-err">\u274c Could not load drug-data.json<br><small>' + e.message + '</small></div>';
  }
}

/* ── Build drug picker list ─────────────────────────────── */
function buildDrugPicker() {
  var list = document.getElementById('pickerList');
  var html = '';
  state.data.categories.forEach(function(cat) {
    html += '<div class="pc-header" style="--cat:' + cat.color + '">' +
            cat.icon + ' ' + esc(cat.name) + '</div>';
    cat.drugs.forEach(function(name) {
      html += '<button class="pc-drug" data-drug="' + esc(name) +
              '" onclick="pickDrug(this)">' + esc(name) + '</button>';
    });
  });
  list.innerHTML = html;
}

/* ── Picker open / close ────────────────────────────────── */
function openPicker() {
  state.pickerOpen = true;
  document.getElementById('pickerModal').classList.add('open');
  document.getElementById('pickerSearch').value = '';
  filterPicker('');
  setTimeout(function(){ document.getElementById('pickerSearch').focus(); }, 120);
}
function closePicker() {
  state.pickerOpen = false;
  document.getElementById('pickerModal').classList.remove('open');
}
function filterPicker(q) {
  q = q.toLowerCase().trim();
  document.querySelectorAll('.pc-drug').forEach(function(btn) {
    btn.style.display = (!q || btn.dataset.drug.toLowerCase().includes(q)) ? '' : 'none';
  });
  document.querySelectorAll('.pc-header').forEach(function(h) {
    var el = h.nextElementSibling, show = false;
    while (el && el.classList.contains('pc-drug')) {
      if (el.style.display !== 'none') show = true;
      el = el.nextElementSibling;
    }
    h.style.display = show ? '' : 'none';
  });
}

/* ── Pick drug ──────────────────────────────────────────── */
function pickDrug(btnEl) {
  var name = btnEl.dataset.drug;
  closePicker();
  state.drug = name;
  state.age  = null;
  var drug = state.data.drugs[name];

  var selBtn = document.getElementById('drugSelectBtn');
  selBtn.querySelector('.dsb-name').textContent = name;
  selBtn.querySelector('.dsb-cat').textContent  = drug.category;
  selBtn.style.setProperty('--dc', drug.color);
  selBtn.classList.add('has-drug');

  document.querySelectorAll('.pc-drug').forEach(function(b) {
    b.classList.toggle('active', b.dataset.drug === name);
  });

  renderAgeBar(drug);
  renderDoseArea(null, null);
}

/* ── Render age bar ─────────────────────────────────────── */
function renderAgeBar(drug) {
  var bar = document.getElementById('ageBar');
  bar.innerHTML = drug.age_data.map(function(row) {
    var isNR = !row.dose1 || row.dose1 === 'N/R' || row.dose1 === 'NR';
    return '<button class="age-chip' + (isNR ? ' chip-nr' : '') +
           '" id="ac-' + slugify(row.age) +
           '" data-age="' + esc(row.age) +
           '" onclick="pickAge(this)">' + esc(row.age) + '</button>';
  }).join('');
  document.getElementById('ageSection').style.display = 'flex';
}

/* ── Pick age ───────────────────────────────────────────── */
function pickAge(chipEl) {
  if (!state.drug) return;
  state.age = chipEl.dataset.age;
  document.querySelectorAll('.age-chip').forEach(function(c) {
    c.classList.toggle('active', c.id === 'ac-' + slugify(state.age));
  });
  var drug = state.data.drugs[state.drug];
  var row  = drug.age_data.find(function(a) { return a.age === state.age; });
  renderDoseArea(drug, row);
}

/* ── Render dose area ───────────────────────────────────── */
function renderDoseArea(drug, row) {
  var area = document.getElementById('doseArea');

  if (!drug || !row) {
    area.innerHTML = '<div class="dose-placeholder">' +
      '<span class="dp-icon">\ud83d\udc46</span>' +
      '<span>Select an age group above</span></div>';
    return;
  }

  var color  = drug.color;
  var inds   = drug.indications;
  var allNR  = !row.dose1 || row.dose1 === 'N/R' || row.dose1 === 'NR';
  var html   = '<div class="dose-result" style="--dc:' + color + '">';

  html += '<div class="pt-banner" style="border-color:' + color + '50;background:' + color + '1a">' +
    '<div class="pt-icon">\ud83e\uddd1\u200d\u2695\ufe0f</div>' +
    '<div><div class="pt-age">' + esc(row.age) + '</div>' +
    '<div class="pt-wt">\u2696\ufe0f ' + esc(row.weight) + '</div></div></div>';

  if (allNR) {
    html += '<div class="nr-banner"><span>\ud83d\udeab</span>' +
      '<div><strong>Not Recommended</strong>' +
      '<div class="nr-sub">Not indicated for this age group</div></div></div>';
  } else {
    html += buildDoseCards(inds, row, color);
  }
  html += '</div>';
  area.innerHTML = html;
  area.scrollIntoView({ behavior:'smooth', block:'start' });
}

/* ── Build dose cards ───────────────────────────────────── */
function buildDoseCards(inds, row, color) {
  var html = '';
  var ind1 = inds[0], ind2 = inds[1];

  if (ind1) {
    html += doseCard(ind1.name, row.dose1, row.vol1,
                     ind1.dose_formula, ind1.max_dose, ind1.concentration, color, true);
  }
  if (ind2) {
    var diffName = ind2.name !== (ind1 && ind1.name);
    var d2ok = row.dose2 && row.dose2 !== 'N/R' && row.dose2 !== 'NR';
    if (d2ok) {
      var label = diffName ? ind2.name
                : (ind2.concentration ? ind2.concentration.split('\n')[0] : 'Alternative');
      html += doseCard(label, row.dose2, row.vol2,
                       ind2.dose_formula, ind2.max_dose, diffName ? ind2.concentration : null,
                       color, false);
    }
  }
  return html;
}

function doseCard(indication, dose, vol, formula, maxDose, conc, color, isPrimary) {
  var isNR = !dose || dose === 'N/R' || dose === 'NR';
  var volOk = vol && vol !== 'N/R' && vol !== '\u2014';
  var info = '';
  if (formula) info += ir('Formula',       formula, false);
  if (maxDose) info += ir('Max Dose',       maxDose, true);
  if (conc)    info += ir('Concentration',  conc,    false);

  return '<div class="dose-card ' + (isPrimary ? 'primary' : 'secondary') +
         (isNR ? ' nr-card' : '') + '" style="--dc:' + color + '">' +
    '<div class="dc-ind">' + esc(indication) + '</div>' +
    '<div class="dc-body">' +
      '<div class="dc-col">' +
        '<div class="dc-lbl">DOSE</div>' +
        '<div class="dc-val' + (isNR ? ' nr' : '') + '">' + esc(isNR ? 'N/R' : dose) + '</div>' +
      '</div>' +
      (volOk ?
        '<div class="dc-sep"></div>' +
        '<div class="dc-col">' +
          '<div class="dc-lbl">VOLUME</div>' +
          '<div class="dc-val vol">' + esc(vol) + '</div>' +
        '</div>' : '') +
    '</div>' +
    (info ? '<div class="dc-info">' + info + '</div>' : '') +
    '</div>';
}

function ir(label, val, warn) {
  return '<div class="ir"><span class="ir-l">' + esc(label) + '</span>' +
         '<span class="ir-v' + (warn ? ' w' : '') + '">' + esc(val) + '</span></div>';
}

/* ── Empty state ────────────────────────────────────────── */
function renderEmpty() {
  document.getElementById('doseArea').innerHTML =
    '<div class="dose-placeholder full">' +
    '<span class="dp-icon">\ud83d\udc8a</span>' +
    '<strong>Select a medication</strong>' +
    '<span>Tap the drug selector above to begin</span></div>';
  document.getElementById('ageSection').style.display = 'none';
}

/* ── Helpers ────────────────────────────────────────────── */
function esc(s) {
  if (!s) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')
                  .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function slugify(s) { return s.replace(/[^a-zA-Z0-9]/g,'_'); }

document.addEventListener('click', function(e) {
  if (state.pickerOpen && e.target.id === 'pickerModal') closePicker();
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && state.pickerOpen) closePicker();
});