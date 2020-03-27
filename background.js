// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('options.html'));
    }
});

chrome.runtime.onMessage.addListener(
    function (request, _sender, sendResponse) {
        (async () => {
            if (request.fetch) {
                try {
                    const response = await fetch(request.fetch);
                    const data = await response.json()
                    sendResponse({ data })
                }
                catch (error) {
                    sendResponse({ error })
                }
            }
        })()
        return true;  // Will respond asynchronously.
    }
);
