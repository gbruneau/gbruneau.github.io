// BestMap moved to https://bestmap.guybruneau.app. This replaces the old
// service worker of gbruneau.github.io/BestMap/: it deletes BestMap's cache
// (only that one: other apps of this site share the origin), unregisters
// itself and reloads open BestMap pages, which then redirect.
self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil((async function () {
    const keys = await caches.keys();
    await Promise.all(keys.filter(function (k) { return k.startsWith("bestmap-"); })
      .map(function (k) { return caches.delete(k); }));
    await self.registration.unregister();
    const pages = await self.clients.matchAll({ type: "window" });
    pages.forEach(function (page) { page.navigate(page.url); });
  })());
});
