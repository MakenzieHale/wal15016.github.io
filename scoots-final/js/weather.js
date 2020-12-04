const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.5083&lon=86.9458&units=imperial&APPID=79e15b681560d53f708b95aafeb82274";

fetch(apiURL)
.then ((response)=> response.json())
.then ((jsObject) => {
    console.log(jsObject);

   document.getElementById('current').textContent = jsObject.current.weather[0].description;

   document.getElementById('currentTemp').textContent = Math.ceil(jsObject.current.temp);

   document.getElementById('humidity').textContent = jsObject.current.humidity;
})

