self.addEventListener("install", event => {
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    event.waitUntil(self.clients.claim());
    console.log("SW activated and claiming clients");
});

self.addEventListener("fetch", event => {
    event.respondWith(fetch(event.request));
});
