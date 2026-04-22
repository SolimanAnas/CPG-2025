// ============================================================
//  DCAS CPG 2025 – Service Worker
//  Strategy: NETWORK FIRST  →  cache fallback
// ============================================================

const CACHE_VERSION = 'dcas-cpg-v5.1';           // ← Bumped to v5 to fix CSS offline rendering
const CACHE_TIMEOUT = 5000;                    

// ── Files cached immediately on install ─────────────────────
const PRE_CACHE = [
  './',
  'index.html',
  'login.html',
  'admin.html',
  'about.html',
  'signup.html',
  'privacy.html',
  'terms.html',
  'styles.css',
  'app.js',
  'manifest.json',
  'icons/icon.png',
  'images/image-01.png',
  'chapters/c-index.html',
  'chapters/c0.html',
  'content/c-index.js',
  'content/c0.js',
  'drug-calculator.js'
  'drug-data.json'
  'ecg.html'
];

// ── File type routing ────────────────────────────────────────
const CACHE_FIRST_PATTERNS = [
  /\/icons\//,
  /\/images\//,
  /fonts\.googleapis\.com/,
  /fonts\.gstatic\.com/,
  /cdnjs\.cloudflare\.com/,
];

// ============================================================
//  INSTALL  
// ============================================================
self.addEventListener('install', function(event) {
  console.log('[SW] Installing v' + CACHE_VERSION);
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache) {
      return Promise.allSettled(
        PRE_CACHE.map(function(url) {
          return fetch(url, { credentials: 'same-origin' })
            .then(function(response) {
              if (response.ok) return cache.put(url, response);
            })
            .catch(function(err) {
              console.warn('[SW] Pre-cache failed for:', url, err.message);
            });
        })
      );
    }).then(function() {
      console.log('[SW] Pre-cache complete. Skipping waiting.');
      return self.skipWaiting();
    })
  );
});

// ============================================================
//  ACTIVATE 
// ============================================================
self.addEventListener('activate', function(event) {
  console.log('[SW] Activating v' + CACHE_VERSION);
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) {
          return key !== CACHE_VERSION;   
        }).map(function(key) {
          console.log('[SW] Deleting old cache:', key);
          return caches.delete(key);
        })
      );
    }).then(function() {
      return self.clients.claim(); 
    })
  );
});

// ============================================================
//  FETCH  
// ============================================================
self.addEventListener('fetch', function(event) {
  const req = event.request;

  if (req.method !== 'GET') return;
  if (!req.url.startsWith('http')) return;

  const url = new URL(req.url);
  const isCrossOrigin = url.origin !== self.location.origin;
  if (isCrossOrigin && !isCacheable(req.url)) return;

  if (CACHE_FIRST_PATTERNS.some(function(p) { return p.test(req.url); })) {
    event.respondWith(cacheFirst(req));
    return;
  }

  event.respondWith(networkFirst(req));
});

// ============================================================
//  STRATEGY: Network First
// ============================================================
function networkFirst(req) {
  return Promise.race([
    fetch(req.clone()),
    new Promise(function(_, reject) {
      setTimeout(function() { reject(new Error('timeout')); }, CACHE_TIMEOUT);
    })
  ]).then(function(networkResponse) {
    if (networkResponse && networkResponse.ok) {
      const responseToCache = networkResponse.clone();
      caches.open(CACHE_VERSION).then(function(cache) {
        cache.put(req, responseToCache);
      });
    }
    return networkResponse;
  }).catch(function() {
    // FIX: ignoreSearch ensures styles.css matches even if the browser adds hidden parameters
    return caches.match(req, { ignoreSearch: true }).then(function(cached) {
      if (cached) {
        console.log('[SW] Offline fallback for:', req.url);
        return cached;
      }
      
      if (req.url.includes('/api/')) {
          return new Response(JSON.stringify({ error: 'Server offline or unreachable.' }), {
              status: 503,
              headers: { 'Content-Type': 'application/json' }
          });
      }

      // FIX: Only return the HTML error page if the browser is explicitly asking for a webpage
      if (req.headers.get('accept').includes('text/html') || req.mode === 'navigate') {
          return caches.match('index.html', { ignoreSearch: true }).then(function(fallback) {
            return fallback || new Response(
              '<h2 style="font-family:sans-serif;text-align:center;margin-top:40px">' +
              '📵 You are offline and this page is not cached yet.</h2>',
              { headers: { 'Content-Type': 'text/html' } }
            );
          });
      }

      // If a CSS or JS file is missing offline, silently fail instead of poisoning the DOM
      return new Response('', { status: 404, statusText: 'Offline' });
    });
  });
}

// ============================================================
//  STRATEGY: Cache First
// ============================================================
function cacheFirst(req) {
  return caches.match(req, { ignoreSearch: true }).then(function(cached) {
    const networkUpdate = fetch(req.clone()).then(function(response) {
      if (response && response.ok) {
        caches.open(CACHE_VERSION).then(function(cache) {
          cache.put(req, response.clone());
        });
      }
      return response;
    }).catch(function() { /* offline, ignore */ });

    return cached || networkUpdate;
  });
}

// ============================================================
//  HELPER
// ============================================================
function isCacheable(url) {
  return CACHE_FIRST_PATTERNS.some(function(p) { return p.test(url); });
}

// ============================================================
//  MESSAGE HANDLER
// ============================================================
self.addEventListener('message', function(event) {
  if (!event.data) return;

  switch (event.data.type) {
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;

    case 'CACHE_URLS':
      if (Array.isArray(event.data.urls)) {
        caches.open(CACHE_VERSION).then(function(cache) {
          return Promise.allSettled(
            event.data.urls.map(function(url) {
              return fetch(url, { credentials: 'same-origin' })
                .then(function(r) { if (r.ok) return cache.put(url, r); })
                .catch(function() {});
            })
          );
        }).then(function() {
          if (event.source) {
            event.source.postMessage({ type: 'CACHE_COMPLETE' });
          }
        });
      }
      break;

    case 'CLEAR_CACHE':
      caches.keys().then(function(keys) {
        return Promise.all(keys.map(function(k) { return caches.delete(k); }));
      }).then(function() {
        if (event.source) {
          event.source.postMessage({ type: 'CACHE_CLEARED' });
        }
      });
      break;
  }
});
