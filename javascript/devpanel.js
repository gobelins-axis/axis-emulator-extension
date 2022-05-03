console.log('Hello Emulator panel');
console.log(chrome.devtools.inspectedWindow.tabId);

const backgroundPageConnection = chrome.runtime.connect({
    name: "devtools-page"
});

backgroundPageConnection.postMessage({
    tabId: chrome.devtools.inspectedWindow.tabId,
    // scriptToInject: "content_script.js"
});
