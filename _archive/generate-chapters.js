const fs = require('fs');
const path = require('path');

// ---------- COMPLETE CPG INDEX – all chapter filenames ----------
const CHAPTER_FILES = [
    // Universal Care (already have c1.html – skip)
    // Airway & Breathing
    'c2-2.html', 'c2-3.html', 'c2-4.html', 'c2-5.html',
    // Cardiovascular
    'c3-1.html', 'c3-2.html', 'c3-3.html', 'c3-4.html',
    // Resuscitation
    'c4-1.html', 'c4-2.html', 'c4-3.html', 'c4-4.html', 'c4-5.html',
    'c4-6.html', 'c4-7.html', 'c4-8.html', 'c4-9.html',
    // Neurological
    'c5-1.html', 'c5-2.html',
    // General Medical
    'c6-1.html', 'c6-2.html', 'c6-3.html', 'c6-4.html', 'c6-5.html',
    'c6-6.html', 'c6-7.html', 'c6-8.html', 'c6-9.html', 'c6-10.html',
    'c6-11.html', 'c6-12.html', 'c6-13.html', 'c6-14.html',
    // Trauma
    'c7-1.html', 'c7-2.html', 'c7-3.html', 'c7-4.html', 'c7-5.html', 'c7-6.html',
    // Environmental
    'c8-1.html', 'c8-2.html', 'c8-3.html', 'c8-4.html', 'c8-5.html',
    'c8-6.html', 'c8-7.html', 'c8-8.html', 'c8-9.html', 'c8-10.html',
    // Pediatric
    'c9-1.html', 'c9-2.html', 'c9-3.html',
    // Obstetrics
    'c10-1.html', 'c10-2.html', 'c10-3.html', 'c10-4.html',
    // Major Incident Triage
    'c11-1.html',
    // Scope & Medications
    's1.html', 'm1-38.html'
];

const template = fs.readFileSync('chapter-template.html', 'utf8');

// Ensure chapters directory exists
if (!fs.existsSync('chapters')) {
    fs.mkdirSync('chapters');
}

CHAPTER_FILES.forEach(filename => {
    const filePath = path.join('chapters', filename);
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, template);
        console.log(`✅ Created: chapters/${filename}`);
    } else {
        console.log(`⏩ Skipped (already exists): chapters/${filename}`);
    }
});

console.log('\n🎉 All placeholder chapter files generated!');