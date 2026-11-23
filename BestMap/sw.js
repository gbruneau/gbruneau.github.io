/**
 * @fileoverview BestMap service worker: makes the app installable from
 * Chrome/Edge and lets the app shell open offline.
 *
 * Strategy: network first for the app's own files (so a new build or the
 * Vite dev server is always used when online), falling back to the last
 * cached copy when offline. Requests to other origins (map tiles, geocoder,
 * CDNs) are not touched and go straight to the network.
 *
 * Bump CACHE_NAME to drop every previously cached file.
 */

const CACHE_NAME = "bestmap-v1";

self.addEventListener("install", function () {
  // Activate the new worker right away instead of waiting for old tabs to close.
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  // Delete caches from older CACHE_NAME versions, then control open pages.
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys
          .filter(function (key) { return key !== CACHE_NAME; })
          .map(function (key) { return caches.delete(key); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) {
    return; // Let the browser handle it normally.
  }
  event.respondWith(
    fetch(request)
      .then(function (response) {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(request, copy); });
        }
        return response;
      })
      .catch(function () {
        // Offline: serve the cached copy; for a page navigation with query
        // parameters (map state), fall back to the cached start page.
        return caches.match(request, { ignoreSearch: request.mode === "navigate" });
      })
  );
});
