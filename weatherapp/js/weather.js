function getWeatherInfo() {
  const cityName = document.getElementById("weather").value;
  const apiKey = "c0b41b78dbafd84aa17b3a6e5dd1dcdb";
  const response = httpGet(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey +
      "&units=metric"
  ); // retriving data from API server
  buildTable(response);
}
function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  console.log("dfdfgöldfkögldflkglödfkögldfölkg");
  return JSON.parse(xmlHttp.responseText);
}
function buildTable(response) {
  var table = document.getElementById("weatherTable");

  var row = document.createElement("tr");
  var weather = document.createElement("td");
  weather.innerHTML = response.weather[0].main;
  var country = document.createElement("td");
  country.innerHTML = response.sys.country;
  var temprature = document.createElement("td");
  temprature.innerHTML = response.main.temp;
  console.log(response);

  //cityName.innerHTML = response.main.;
  row.appendChild(weather);
  row.appendChild(country);
  row.appendChild(temprature);

  table.appendChild(row);

  switch (response.weather[0].main) {
    case "Clear":
      document.getElementById("body").style.backgroundImage =
        "url('images/clearsky.jpeg')";
      break;
    case "Clouds":
      document.getElementById("body").style.backgroundImage =
        "url('images/cloudy.jpg')";
      break;
    case "Snow":
      document.getElementById("body").style.backgroundImage =
        "url('images/snow.jpg')";
      break;
    case "Rain":
      document.getElementById("body").style.backgroundImage =
        "url('images/rainy.jpg')";
      break;
    case "Haze":
      document.getElementById("body").style.backgroundImage =
        "url('images/haze.png')";
      break;
    case "Fog":
      document.getElementById("body").style.backgroundImage =
        "url('images/fog.jpg')";
      break;
    case "Mist":
      document.getElementById("body").style.backgroundImage =
        "url('images/mist.jpg')";
  }

  function fToC(temp) {
    var fToCel = ((parseInt(temp) - 32) * 5) / 9;
    return fToCel;
  }
}
