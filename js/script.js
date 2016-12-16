var Main = (function () {

  var init = function () {
    document.onreadystatechange = function () {
      if (document.readyState === "complete") {
        initApplication();
      }
    }
  }

  var initApplication = function () {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('../sw.js');
      });
    }

    FontLoader.init();
  }

  return {
    init: init
  };

})();

Main.init();