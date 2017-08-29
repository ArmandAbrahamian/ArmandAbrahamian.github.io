// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// Call TypeIt
$('#titles').typeIt({
    // options
    strings: ["Computer Science Graduate", "Software Engineer", "Gameplay Programmer", "Lifetime Video Gamer"],
    autoStart: true,
    breakLines: false,
    cursor: true,
    cursorSpeed: 1100,
    deleteDelay: 3350,
    deleteSpeed: 40,
    html: false,
    lifeLike: false,
    loop: true,
    loopDelay: 3350,
    startDelete: false,
    startDelay: 2000,
    speed: 75
});
