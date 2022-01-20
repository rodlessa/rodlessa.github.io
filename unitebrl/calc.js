window.onload = function(){
  myFunction();
}
window.onload = function(){
  calcf();
}
/*
function myFunction(){

  var requestURL = 'https://api.coingecko.com/api/v3/simple/price?ids=usd-coin&vs_currencies=brl';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  var brl = 0;
  request.onload = function() {
    var usdc = request.response;
    var brl = usdc['usd-coin']['brl'];



    var invest = +document.getElementById("invest").value;
    var valor = +document.getElementById("uvalue").value;
    //var vper = 8.24;
    var start = 0.2458;
    var total = invest * valor;
    var totalbrl = total * brl;

    document.getElementById('vpr').innerHTML = "Total: "+ total.toFixed(2) + "<br> Total BRL: " + totalbrl.toFixed(2);

    }

}
*/

function calcu (){
  var startulp = +document.getElementById("startulp").value;
  var duapy = +document.getElementById("duapy").value;
  a=startulp;
  b=duapy/365;
  b=b/100;
for (var i = 0; i < 1; i++) {
  c=a*b;
  a=a+c;
  document.getElementById('result-u1').innerHTML = "1 day total: "+ a.toFixed(2) + " LP";
  }
for (var i = 0; i < 7; i++) {
  c=a*b;
  a=a+c;
  document.getElementById('result-u7').innerHTML = "7 days total: "+ a.toFixed(2) + " LP";
  }
for (var i = 0; i < 30; i++) {
  c=a*b;
  a=a+c;
document.getElementById('result-u30').innerHTML = "30 days total: "+ a.toFixed(2) + " LP";
  }
}


function calcf (){
  var startlp = +document.getElementById("startlp").value;
  var dapy = +document.getElementById("dapy").value;
  a=startlp;
  b=dapy/365;
  b=dapy/100;
for (var i = 0; i < 1; i++) {
  c=a*b;
  a=a+c;
  document.getElementById('result-1').innerHTML = "1 day total: "+ a.toFixed(2) + " LP";
  }
for (var i = 0; i < 7; i++) {
  c=a*b;
  a=a+c;
  document.getElementById('result-7').innerHTML = "7 days total: "+ a.toFixed(2) + " LP";
  }
for (var i = 0; i < 30; i++) {
  c=a*b;
  a=a+c;
  document.getElementById('result-30').innerHTML = "30 days total: "+ a.toFixed(2) + " LP";
  }



}
