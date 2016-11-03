var watched = [];

chrome.pageAction.onClicked.addListener(function (tab) {
    var icon;

    if(typeof watched[tab.id] == 'undefined'){
        watched[tab.id] = false;
    }

    watched[tab.id] = !watched[tab.id];

    icon = watched[tab.id] ? 'icon_red.png' : 'icon.png';

    chrome.tabs.sendMessage(tab.id, {watch: watched[tab.id]});

    chrome.pageAction.setIcon({
        tabId: tab.id,
        path: icon
    });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    watched = [];

    if (request.ng) {
        chrome.pageAction.show(sender.tab.id);
    } else {
        chrome.pageAction.hide(sender.tab.id)
    }

    return true;
});