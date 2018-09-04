chrome.contextMenus.create({
    "id":"addToDebits",
    "title":"spend",
    "contexts":["selection"]
});


chrome.storage.onChanged.addListener((changes, storageName)=>{
    chrome.browserAction.setBadgeText({"text":changes.totalCredits.newValue.toString()});
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.hey == "thisisaHeyMessage"){
        console.warn('received HEY MESSAGE')
        alert('received a hey message')
    }
})