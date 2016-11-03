(function(){
    var ng = typeof window.angular !== 'undefined';
    var event = document.createEvent("CustomEvent");
    event.initCustomEvent("checkAngularEvent", true, true, {"passback": ng});
    window.dispatchEvent(event);
})();