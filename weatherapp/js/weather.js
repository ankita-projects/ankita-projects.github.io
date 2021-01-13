function getWeatherInfo(){
    const cityName=document.getElementById("weather").value;
    const apiKey = "c0b41b78dbafd84aa17b3a6e5dd1dcdb";
    const response = httpGet("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" +apiKey);  // retriving data from API server
    buildTable(response);
}
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();              
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    console.log("dfdfgöldfkögldflkglödfkögldfölkg")
    return JSON.parse(xmlHttp.responseText);
}
function buildTable(response){
    var table =document.getElementById("weatherTable")
   
        var row = document.createElement("tr");
        var weather = document.createElement("td");
        weather.innerHTML = response.weather[0].main;
        var country = document.createElement("td");
        country.innerHTML = response.sys.country;
        var temprature = document.createElement("td");
        temprature.innerHTML = response.main.temp;
        row.appendChild(weather);
        row.appendChild(country);
        row.appendChild(temprature);
       
        table.appendChild(row);
        
        
        
        
        
      
}