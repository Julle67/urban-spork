self.addEventListener("install", event => {
    console.log("Service Worker installerad");
});

self.addEventListener("fetch", event => {
    // grundläggande pass-through (ingen caching ännu)
});
