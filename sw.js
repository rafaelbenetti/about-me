var CACHE_NAME = 'about-me-v3';
var urlsToCache = [
  '/about-me',
  'index.html',  
  'css/font-awesome.css',
  'css/assets/style.min.css',
  'js/dist/script.min.js',
  'js/dist/fontfaceobserver.standalone.js',
  'images/social/codepen.png',
  'images/social/github.png',
  'images/social/linkedin.png',
  'images/social/gmail.png',
  'fonts/Oswald-Regular.ttf',
  'icons/favicon.ico',  
  'manifest.json'
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