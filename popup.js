// Block site
//background.js is all running in the background that actually blocks the site. this just passes the info to the backend. manifest.json is essential to run as a chrome extension.
//feel free to use this as a template!
document.getElementById("blockBtn").addEventListener("click", () => {
  const siteName = document.getElementById("site").value.trim();
  if (siteName) {
    chrome.storage.sync.set({ blockedSite: siteName }, () => {
      document.getElementById("output").innerText = siteName + " BLOCKED";
    });
  }
});

// Unblock site
document.getElementById("unblockBtn").addEventListener("click", () => {
  chrome.storage.sync.remove("blockedSite", () => {
    document.getElementById("output").innerText = "No site is blocked now";
  });
});
