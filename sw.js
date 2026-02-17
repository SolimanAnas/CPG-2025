// TEMPORARY DISABLED - No caching, always fetch from network
self.addEventListener('install', () => {
  self.skipWaiting(); // Activate immediately
});

self.addEventListener('fetch', (event) => {
  // Always fetch from network, never from cache
  event.respondWith(fetch(event.request));
});

self.addEventListener('activate', () => {
  // Delete all old caches
  caches.keys().then(keys => {
    return Promise.all(keys.map(key => caches.delete(key)));
  }).then(() => {
    self.clients.claim(); // Take control immediately
  });
});