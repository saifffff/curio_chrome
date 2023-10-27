chrome.runtime.onMessage.addListener((message) => {
    // Update the extension's HTML page with the reading time.
    console.log("service worker msg : ",message.rt);
  });