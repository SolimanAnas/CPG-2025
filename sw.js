// ============================================================
//  DCAS CPG 2025 – Service Worker
//  Strategy: NETWORK FIRST (docs/data) + CACHE FIRST (static/CDN)
//  Goal: full offline support with a resilient app shell.
// ============================================================

const CACHE_VERSION = 'dcas-cpg-v6.0';   // Major offline hardening
const CACHE_TIMEOUT = 5000;              // ms before falling back to cache
const OFFLINE_URL   = 'offline.html';    // synthetic branded fallback page

// ── Critical app shell: cached on install (blocking, must be small/fast) ──
const APP_SHELL = [
  './',
  'index.html',
  '404.html',
  'styles.css',
  'app.js',
  'manifest.json',
  'icons/icon.png',
  'icons/sprite.svg',
  'pages/login.html',
  'pages/signup.html',
  'pages/about.html',
  'pages/privacy.html',
  'pages/terms.html',
  'pages/admin.html',
  'pages/courses.html',
  'chapters/c-index.html',
  'content/c-index.js'
];

// ── Extended content: cached in the background after activation ──
//    (exam pages + question banks + engines) so offline exams work
//    even without a prior visit. Non-blocking; failures are ignored.
const CONTENT_CACHE = [
  // Exam & tool pages
  'pages/acls.html', 'pages/bls.html', 'pages/pals.html', 'pages/bdls.html',
  'pages/medical.html', 'pages/pepp.html', 'pages/ppet.html', 'pages/itls.html',
  'pages/empact.html', 'pages/ecg.html', 'pages/ecg-test.html',
  'pages/drug-calculator.html', 'pages/drug-index.html', 'pages/med-index.html',
  'pages/ecg-engine.js', 'pages/ecg-engine2.js',
  'pages/drug-calculator.js', 'pages/drug-data.json',
  // Prometric engine + bank
  'src/prometric/exam.html', 'src/prometric/exam.css', 'src/prometric/exam.js',
  'src/prometric/exam-db.json',
  // Question banks
  'src/ACLS/acls.json',
  'src/BLS/bls.json',
  'src/PALS/pals.json',
  'src/BDLS/BDLS.json',
  'src/Medical/medical.json',
  'src/PEPP/exam_a.json', 'src/PEPP/exam_b.json', 'src/PEPP/exam_c.json',
  'src/PEPP/exam_d.json', 'src/PEPP/pearls.json',
  'src/PPET/ppet.json', 'src/PPET/exam2.json',
  'src/ITLS/itls-pre.json', 'src/ITLS/itls-pre-9th.json',
  'src/ITLS/itls-post-A.json', 'src/ITLS/itls-post-B.json', 'src/ITLS/pearls.json',
  'src/EMPACT/exam1.json', 'src/EMPACT/pearls.json',
  'src/ECG/ecg-test-1.json', 'src/ECG/ecg-test-2.json'
];

// ── Cross-origin / static assets served cache-first ──
const CACHE_FIRST_PATTERNS = [
  /\/icons\//,
  /\/images\//,
  /\/algorithms\//,
  /fonts\.googleapis\.com/,
  /fonts\.gstatic\.com/,
  /cdnjs\.cloudflare\.com/,
  /cdn\.jsdelivr\.net/,
  /unpkg\.com/,
];

// ── Branded offline fallback page (self-contained, no external deps) ──
const OFFLINE_PAGE = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Offline · DCAS CPG</title>
<style>
  :root{color-scheme:dark}
  html,body{height:100%;margin:0}
  body{display:flex;align-items:center;justify-content:center;
    font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
    background:#0a1628;color:#e8f0fe;text-align:center;padding:24px}
  .card{max-width:340px}
  .ic{width:64px;height:64px;margin:0 auto 18px;border-radius:50%;
    background:rgba(59,130,246,.15);display:flex;align-items:center;justify-content:center}
  svg{width:32px;height:32px;stroke:#60a5fa;fill:none;stroke-width:2;
    stroke-linecap:round;stroke-linejoin:round}
  h1{font-size:1.25rem;margin:0 0 8px}
  p{color:#94a3b8;font-size:.9rem;line-height:1.5;margin:0 0 20px}
  button{background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff;border:0;
    border-radius:30px;padding:11px 26px;font-size:.9rem;font-weight:700;cursor:pointer}
  button:active{transform:translateY(1px)}
</style></head><body>
<div class="card">
  <div class="ic"><svg viewBox="0 0 24 24"><path d="M2 8.82a15 15 0 0 1 20 0"/>
    <path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/>
    <line x1="12" y1="20" x2="12.01" y2="20"/><line x1="2" y1="2" x2="22" y2="22"/></svg></div>
  <h1>You're offline</h1>
  <p>This page hasn't been saved for offline use yet. Reconnect and open it once — after that it'll work offline.</p>
  <button onclick="location.reload()">Try again</button>
</div></body></html>`;

// ============================================================
//  INSTALL — precache the critical app shell + offline page
// ============================================================
self.addEventListener('install', function (event) {
  console.log('[SW] Installing ' + CACHE_VERSION);
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function (cache) {
      // Store the branded offline page as a real cached response.
      cache.put(OFFLINE_URL, new Response(OFFLINE_PAGE, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      }));
      return Promise.allSettled(
        APP_SHELL.map(function (url) {
          return fetch(url, { credentials: 'same-origin', cache: 'reload' })
            .then(function (res) { if (res && res.ok) return cache.put(url, res); })
            .catch(function (err) { console.warn('[SW] Precache skip:', url, err.message); });
        })
      );
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

// ============================================================
//  ACTIVATE — drop old caches, enable nav preload, claim clients,
//             then warm the extended content cache in the background.
// ============================================================
self.addEventListener('activate', function (event) {
  console.log('[SW] Activating ' + CACHE_VERSION);
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE_VERSION; })
            .map(function (k) { console.log('[SW] Delete old cache', k); return caches.delete(k); })
      );
    }).then(function () {
      if (self.registration.navigationPreload) {
        return self.registration.navigationPreload.enable().catch(function () {});
      }
    }).then(function () {
      return self.clients.claim();
    }).then(function () {
      // Fire-and-forget: warm exam content without blocking activation.
      warmContentCache();
    })
  );
});

function warmContentCache() {
  caches.open(CACHE_VERSION).then(function (cache) {
    CONTENT_CACHE.forEach(function (url) {
      cache.match(url).then(function (hit) {
        if (hit) return; // already cached (e.g. from a prior visit)
        fetch(url, { credentials: 'same-origin' })
          .then(function (res) { if (res && res.ok) cache.put(url, res); })
          .catch(function () { /* offline or missing — ignore */ });
      });
    });
  });
}

// ============================================================
//  FETCH
// ============================================================
self.addEventListener('fetch', function (event) {
  const req = event.request;

  if (req.method !== 'GET') return;
  if (!req.url.startsWith('http')) return;

  const url = new URL(req.url);
  const isCrossOrigin = url.origin !== self.location.origin;

  // Never touch cross-origin requests we can't cache (analytics, APIs, etc.)
  if (isCrossOrigin && !isCacheable(req.url)) return;

  // Static assets & whitelisted CDNs → cache first (fast, offline-safe).
  if (CACHE_FIRST_PATTERNS.some(function (p) { return p.test(req.url); })) {
    event.respondWith(cacheFirst(req));
    return;
  }

  // Page navigations → network first with preload + branded offline fallback.
  if (req.mode === 'navigate') {
    event.respondWith(navigationHandler(event));
    return;
  }

  // Everything else same-origin (CSS/JS/JSON) → network first.
  event.respondWith(networkFirst(req));
});

// ============================================================
//  STRATEGY: Navigation (network → preload → cache → offline page)
// ============================================================
function navigationHandler(event) {
  const req = event.request;
  return (async function () {
    try {
      // 1) Use a navigation-preload response if one is in flight.
      const preload = await event.preloadResponse;
      if (preload) {
        cachePut(req, preload.clone());
        return preload;
      }
      // 2) Otherwise race the network against a timeout.
      const net = await withTimeout(fetch(req.clone()));
      if (net && net.ok) cachePut(req, net.clone());
      return net;
    } catch (e) {
      // 3) Offline: exact page → root shell → branded offline page.
      const cached = await caches.match(req, { ignoreSearch: true });
      if (cached) return cached;
      const shell = await caches.match('index.html', { ignoreSearch: true });
      if (shell) return shell;
      return caches.match(OFFLINE_URL);
    }
  })();
}

// ============================================================
//  STRATEGY: Network First (same-origin CSS/JS/JSON)
// ============================================================
function networkFirst(req) {
  return withTimeout(fetch(req.clone()))
    .then(function (res) {
      if (res && res.ok && res.status === 200) cachePut(req, res.clone());
      return res;
    })
    .catch(function () {
      return caches.match(req, { ignoreSearch: true }).then(function (cached) {
        if (cached) return cached;

        // API requests get a JSON error, not an HTML page.
        if (req.url.indexOf('/api/') !== -1) {
          return jsonError('Server offline or unreachable.', 503);
        }

        // Missing static asset offline → fail quietly (don't poison the DOM).
        return new Response('', { status: 504, statusText: 'Offline' });
      });
    });
}

// ============================================================
//  STRATEGY: Cache First (static assets + whitelisted CDNs)
//  Caches opaque cross-origin responses too, so fonts work offline.
// ============================================================
function cacheFirst(req) {
  return caches.match(req, { ignoreSearch: true }).then(function (cached) {
    const networkUpdate = fetch(req.clone()).then(function (res) {
      if (res && (res.status === 200 || res.type === 'opaque')) {
        cachePut(req, res.clone());
      }
      return res;
    }).catch(function () { return cached; /* stay offline-friendly */ });

    return cached || networkUpdate;
  });
}

// ============================================================
//  HELPERS
// ============================================================
function withTimeout(promise) {
  return Promise.race([
    promise,
    new Promise(function (_, reject) {
      setTimeout(function () { reject(new Error('timeout')); }, CACHE_TIMEOUT);
    })
  ]);
}

function cachePut(req, res) {
  // Only store cacheable responses; ignore partial (206) & error responses.
  if (!res) return;
  if (res.status !== 200 && res.type !== 'opaque') return;
  caches.open(CACHE_VERSION).then(function (cache) {
    cache.put(req, res).catch(function () {});
  });
}

function jsonError(message, status) {
  return new Response(JSON.stringify({ error: message }), {
    status: status,
    headers: { 'Content-Type': 'application/json' }
  });
}

function isCacheable(url) {
  return CACHE_FIRST_PATTERNS.some(function (p) { return p.test(url); });
}

// ============================================================
//  MESSAGE HANDLER
// ============================================================
self.addEventListener('message', function (event) {
  if (!event.data) return;

  switch (event.data.type) {
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;

    case 'CACHE_URLS':
      if (Array.isArray(event.data.urls)) {
        caches.open(CACHE_VERSION).then(function (cache) {
          return Promise.allSettled(
            event.data.urls.map(function (url) {
              return fetch(url, { credentials: 'same-origin' })
                .then(function (r) { if (r && r.ok) return cache.put(url, r); })
                .catch(function () {});
            })
          );
        }).then(function () {
          if (event.source) event.source.postMessage({ type: 'CACHE_COMPLETE' });
        });
      }
      break;

    case 'CLEAR_CACHE':
      caches.keys().then(function (keys) {
        return Promise.all(keys.map(function (k) { return caches.delete(k); }));
      }).then(function () {
        if (event.source) event.source.postMessage({ type: 'CACHE_CLEARED' });
      });
      break;
  }
});
