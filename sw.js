var CACHE_NAME = 'about-me-v2';
var urlsToCache = [
  '/',
  '/index.html',
  '/fonts/icomoon.ttf',
  '/fonts/Oswald-Regular.ttf',
  '/css/font-awesome.css',
  '/css/assets/style.min.css',
  '/js/dist/script.min.js',
  '/node_modules/fontfaceobserver/fontfaceobserver.standalone.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});