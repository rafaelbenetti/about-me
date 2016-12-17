var Main = (function () {

  var configureServiceWorker = function() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('../sw.js');
      });
    }
  }

  var loadFontOnCache = function () {
    if (sessionStorage.fontsLoaded) {
      var html = document.documentElement;
      html.classList.add('fonts-loaded');
    }
  }

  var initApplication = function () {
    configureServiceWorker();
    loadFontOnCache();
    FontLoader.init();
  }

  var init = function () {
    document.onreadystatechange = function () {
      if (document.readyState === "complete") {
        initApplication();
      }
    }
  }

  return {
    init: init
  };

})();

Main.init();