var scr = document.createElement('script');
scr.src = chrome.extension.getURL('check.js');
scr.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(scr);

window.addEventListener("checkAngularEvent", function (e) {
    var check = e.detail.passback;
    chrome.runtime.sendMessage({ng: check}, function(){});
});


chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    var scr = document.createElement('script');
    scr.src = request.watch ? chrome.extension.getURL('watch.js') : chrome.extension.getURL('unwatch.js');
    scr.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(scr);
    return true;
});