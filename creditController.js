$(document).ready(() => {
    chrome.storage.sync.get('totalCredits', credits => {
        if(credits.totalCredits==undefined)
        document.getElementById('showCredits').innerHTML = 0;
        else
        document.getElementById('showCredits').innerHTML = credits.totalCredits;
    })
    $("#add").click(() => {
        chrome.storage.sync.get('totalCredits', credits => {
            let previsCredit = parseInt(credits.totalCredits) ;
            let nowCredit = parseInt($("#addCredit").val()) ;
            if(credits.totalCredits!=undefined)
            nowCredit+= previsCredit;
            else
            nowCredit = previsCredit = 0
            chrome.storage.sync.set({'totalCredits':nowCredit})
            document.getElementById('showCredits').innerHTML = nowCredit;
            close();
        })
    })
})

