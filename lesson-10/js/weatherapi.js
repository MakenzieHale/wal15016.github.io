const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=79e15b681560d53f708b95aafeb82274 ";
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
   console.log(jsObject);

            //temp = Math.floor(jsObject.main.temp * (9/5) - 459.67);
            //max_temp = Math.floor(jsObject.main.temp_max *(9/5)-459.67);

         
            

   document.getElementById('current').textContent = jsObject.weather[0].description;
   document.getElementById('currentTemp').textContent = jsObject.main.temp;
   document.getElementById('humidity').textContent = jsObject.main.humidity;
   document.getElementById('wind-speed').textContent = jsObject.wind.speed;

   iconsource.textContent = `https://openweather.org/img/w/${jsObject.weater[0].icon}.png`;
   const isrc = `https://openweather.org/img/w/${jsObject.weather[0].icon}.png`;

  
   document.getElementById('imagesrc').textContent= imagesrc;
   document.getElementById('icon').setAttribute('src',imagesrc);
   document.getElementById('icon').setAttribute('alt',desc);
});