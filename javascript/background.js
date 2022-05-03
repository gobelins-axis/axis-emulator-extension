// Background page -- background.js
console.log('Background script');
console.log(chrome.runtime);

chrome.runtime.onConnect.addListener((devToolsConnection) => {
    console.log('CONNECTED...');
    devToolsConnection.onMessage.addListener((message) => {
        chrome.scripting.executeScript({
            target: { tabId: message.tabId },
            function: () => {
                console.log(window);
                console.log('BACKGROUND SCRIPT INJECTED !!!!!!!!!!!!');
            }
        });
    });

    devToolsConnection.onDisconnect.addListener(function() {
        devToolsConnection.onMessage.removeListener(devToolsListener);
    });
});