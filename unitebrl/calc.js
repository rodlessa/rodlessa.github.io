window.onload = function(){
  myFunction();
}

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



    var invest = document.getElementById("invest").value;
    var valor = document.getElementById("uvalue").value;
    //var vper = 8.24;
    var start = 0.2458;
    var total = invest * valor;
    var totalbrl = total * brl;

    document.getElementById('vpr').innerHTML = "Total: "+ total.toFixed(2) + "<br> Total BRL: " + totalbrl.toFixed(2);

    }

}
