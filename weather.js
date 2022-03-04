function weather( cityID ) {
  var key = 'df43061c90b4277aa5dd0bbd350d5bbc';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    document.getElementById('city').innerHTML = data.name;
    document.getElementById('description').innerHTML = data.weather[0]['description'];
    icon = 'https://openweathermap.org/img/wn/'+data.weather[0]["icon"]+'@2x.png';
    var celcius = Math.round(parseFloat(data.main.temp)-273.15);
    var cmax = Math.round(parseFloat(data.main.temp_max)-273.15);
    var cmin = Math.round(parseFloat(data.main.temp_min)-273.15);
    document.getElementById('icon').innerHTML = "<img src='"+icon+"' />" ;
    document.getElementById('temps').innerHTML = celcius+ '&deg;';
    document.getElementById('max').innerHTML = "Temperatura maxima: "+cmax+ '&deg;';
    document.getElementById('min').innerHTML = "Temperatura minima: "+cmin+ '&deg;';
  })
  .catch(function() {
    // erros
  });
}

window.onload = function() {
  weather(6320062);
}


function weathercity(cityname) {
  var cityname = document.getElementById('search_city').value;
  var key = 'df43061c90b4277aa5dd0bbd350d5bbc';
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&appid=' + key)
  .then(function(resp) { return resp.json() })
  .then(function(data) {
    document.getElementById('city').innerHTML = data.name;
    document.getElementById('description').innerHTML = data.weather[0]['description'];
    if (data.weather[0]['description'] === undefined ) {
      alert("Possivel erro de chave de API, contate o admistrador!")
    }
    icon = 'https://openweathermap.org/img/wn/'+data.weather[0]["icon"]+'@2x.png';
    var celcius = Math.round(parseFloat(data.main.temp)-273.15);
    var cmax = Math.round(parseFloat(data.main.temp_max)-273.15);
    var cmin = Math.round(parseFloat(data.main.temp_min)-273.15);
    document.getElementById('icon').innerHTML = "<img src='"+icon+"' />" ;
    document.getElementById('temps').innerHTML = celcius+ '&deg;';
    document.getElementById('max').innerHTML = "Temperatura maxima: "+cmax+ '&deg;';
    document.getElementById('min').innerHTML = "Temperatura minima: "+cmin+ '&deg;';
  })
}

const element = document.getElementById("searchbtn");
element.addEventListener("click", weathercity);
