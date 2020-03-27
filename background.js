// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
    // No tabs or host permissions needed!
    console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"'
    });
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
