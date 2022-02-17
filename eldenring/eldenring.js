var fim = new Date("Feb 25, 2022, 00:00:00 UTC-5:00").getTime();
var x = setInterval(function(){
  var now = new Date().getTime();
  var faltando = fim - now;
  var dias = Math.floor(faltando/(1000 * 60 * 60 * 24));
  var horas = Math.floor(faltando % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutos = Math.floor(faltando % (1000 * 60 * 60) / (1000 * 60));
  var segundos = Math.floor(faltando %(1000 * 60) / 1000);
  document.getElementById('timer').innerHTML = dias +"d " + horas +"h " +
  minutos + "m " + segundos + "s ";

  if (faltando <0) {
    clearInterval(x);
    document.getElementById('timer').innerHTML = "PRAISE THE LORD FELLOW TARNISHED! The Elden Ring is your to take"
  }
},1000);
