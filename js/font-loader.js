var FontLoader = (function () {

    var timer = function (time) {
        return new Promise(function (resolve, reject) {
            setTimeout(reject, time);
        });
    }

    var init = function () {
        var font = new FontFaceObserver('Oswald');
        var html = document.documentElement;

        Promise.race([
            timer(1000),
            font.load()
        ]).then(function () {
            html.classList.add('fonts-loaded');
            console.log('Output Sans has loaded.');
        }).catch(function () {
            console.log('Output Sans has timed out.');
        });
    }

    return {
        init: init
    }

})();