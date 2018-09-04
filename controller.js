$(document).ready(() => {

    chrome.storage.sync.get('totalDebits', (credits) => {
        let amt = parseInt(credits.totalDebits);
        document.getElementById('bal_a').innerHTML = amt;
        // $("#bal_a").val() = netAmount;
        console.warn('thisss')
        console.warn(isNaN(amt))
    })
    chrome.storage.sync.get('totalCredits', (credits) => {
        let amt = parseInt(credits.totalCredits);
        if(credits.totalCredits==undefined)
        document.getElementById('cre_a').innerHTML = 0;
        else
        document.getElementById('cre_a').innerHTML = amt;
        // $("#bal_a").val() = netAmount;
    })
    
    $("#addAmt").click(() => {
        var netAmount=0
        console.warn('adding '+ $("#amount").val())
        netAmount =  netAmount+ parseInt($("#amount").val()) 
        let curr_debit = parseInt($("#amount").val()) 
        chrome.storage.sync.get('totalCredits', credits => {
            let credit =parseInt(credits.totalCredits) ;
            if (credit >= curr_debit) {
                credit -= curr_debit;
                chrome.notifications.create('cutNotify', {
                    type:'basic',
                    title:'Debited from Balance',
                    iconUrl:'icon.jpg',
                    message: curr_debit+' have been debited from your account.'
                })

                chrome.storage.sync.set({'totalCredits':credit})
                chrome.storage.sync.get('totalDebits', (credits) => {
                    let amt = parseInt(credits.totalDebits);
                    if(!isNaN(amt))
                    netAmount += amt;
        
        
                    chrome.storage.sync.set({'totalDebits': parseInt(netAmount) });
                    document.getElementById('bal_a').innerHTML = netAmount;
        
                })
            }
            else
                chrome.notifications.create('noBalanceWarning', {
                    type:'basic',
                    title:'No Balance',
                    iconUrl:'icon.jpg',
                    message:'Your Account has Zero balance. Please add credits to continue further shopping.'
                })
            
        })

        
        
    })
    $("#colorPick").on('change', ()=>{
        var colorobj = document.getElementById('colorPick');
        console.warn('value color : '+ colorobj.value)
        chrome.tabs.query({active:true, currentWindow:true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id,{check:'abc'  ,color:colorobj.value.toString()} )
        })

        // chrome.runtime.sendMessage()
    })

})

