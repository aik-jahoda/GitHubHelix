import { Message } from "./utils"

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (_tab) {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('options.html'));
    }
});

chrome.runtime.onMessage.addListener(
    function (request: Message, _sender, sendResponse) {
        (async () => {
            if (request.type === 'fetch') {
                try {
                    const response = await fetch(request.payload.url);
                    const data = await (request.payload.resultType === 'json' ?
                        response.json() :
                        response.text())
                    return sendResponse({ data })
                }
                catch (error) {
                    return sendResponse({ error })
                }
            }
            return sendResponse({ error: "Unknown message" })
        })()
        return true;  // Will respond asynchronously.
    }
);
