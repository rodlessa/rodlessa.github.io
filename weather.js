function weather( cityID ) {
  var key = '452cb428ac2a43b958c8477f11f11050';
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
    // catch any errors
  });
}

window.onload = function() {
  weather(6320062);
}


function weathercity(cityname) {
  var cityname = document.getElementById('search_city').value;
  var key = '452cb428ac2a43b958c8477f11f11050';
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityname+ '&appid=' + key)
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
}

const element = document.getElementById("searchbtn");
element.addEventListener("click", weathercity);
