// Block site
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
