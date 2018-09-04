chrome.runtime.sendMessage({hey:"thisisaHeyMessage"})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.check == 'abc'){
        alert('changed color to '+request.color)
        document.getElementsByTagName('h1')[0].style.color = request.color;
        
    }
})