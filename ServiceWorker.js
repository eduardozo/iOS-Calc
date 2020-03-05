const CACHE_NAME = 'ios-calc-v1';
const assetsToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/app.js',
    '/js/Calculator.js',
    '/js/Display.js',
    '/img/android-chrome-192x192.png',
    '/img/android-chrome-512x512.png',
    '/img/apple-touch-icon.png',
    '/img/favicon.ico',
    '/img/favicon-16x16.png',
    '/img/favicon-32x32.png',
    '/img/my_tech_stack.jpg',
    '/img/status.png'
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(assetsToCache)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})