chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    chrome.storage.sync.get("blockedSite", (data) => {
      if (data.blockedSite && tab.url.includes(data.blockedSite)) {
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          func: () => {
            document.body.innerHTML = "<h1 style='text-align:center;margin-top:20%;font-size:50px;'>Blocked</h1>";
          }
        });
      }
    });
  }
});
