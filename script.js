let exrate = document.getElementById("rate");
document.getElementById("refreshsubmit").addEventListener("click", submitrate);

function submitrate(){
    let exrate = document.getElementById("rate");
    chrome.storage.sync.set({'eurrate': exrate.value}, function() {
        console.log('Settings saved');
      });
  
}

chrome.storage.sync.get(['eurrate'], function(items) {
    console.log('Settings retrieved', items);
    let conrate = document.getElementById("outputrate");
    let exrate = document.getElementById("rate");
    conrate.innerHTML = items['eurrate'];
    exrate.value = items['eurrate'];
  });

document.getElementById("brutto").addEventListener("input", calc);


function calc(rates){
    let myrate = document.getElementById('rate');
    const eurpln = myrate.value;
    let brut = document.getElementById("brutto");
    let brutpln = document.getElementById("bruttopln");
    let vat1 = document.getElementById("vat21");
    let vat20 = document.getElementById("vat20");
    let netto21 = document.getElementById("netto21");
    let netto20 = document.getElementById("netto20");
    let euros = document.getElementById("eur");

    bruttoprice = brut.value;
    brutpln.value = parseFloat(bruttoprice * eurpln).toFixed(2);
    vat1.value = parseFloat(bruttoprice / 1.21).toFixed(2);
    vat20.value = parseFloat(bruttoprice / 1.20).toFixed(2);
    netto21.value = parseFloat(vat1.value*eurpln).toFixed(2);
    netto20.value = parseFloat(vat20.value*eurpln).toFixed(2);
}


document.getElementById("refreshsubmit").addEventListener("click", show);
function show(){
    chrome.storage.sync.get(['eurrate'], function(items) {
        console.log('Settings retrieved', items);
        let conrate = document.getElementById("outputrate");
        conrate.innerHTML = items['eurrate'];
    
      });
}
