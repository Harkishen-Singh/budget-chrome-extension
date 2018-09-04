chrome.contextMenus.create({
    "id":"addToDebits",
    "title":"spend",
    "contexts":["selection"]
});

chrome.storage.onChanged.addListener((changes, storageName)=>{
    chrome.browserAction.setBadgeText({"text":changes.totalCredits.newValue.toString()});
})