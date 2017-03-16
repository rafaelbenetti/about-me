var CACHE_NAME = 'about-me-v3';
var urlsToCache = [
  '/about-me/',
  '/about-me/index.html',  
  '/about-me/css/font-awesome.css',
  '/about-me/css/assets/style.min.css',
  '/about-me/js/dist/script.min.js',
  '/about-me/images/social/codepen.png',
  '/about-me/images/social/github.png',
  '/about-me/images/social/linkedin.png',
  '/about-me/images/social/gmail.png',
  '/about-me/fonts/Oswald-Regular.ttf',
  '/about-me/icons/favicon.ico',
  '/about-me/node_modules/fontfaceobserver/fontfaceobserver.standalone.js',
  '/about-me/manifest.json'
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