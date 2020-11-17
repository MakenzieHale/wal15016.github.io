const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&unit=Fahrenheit(imperial)t&appid=79e15b681560d53f708b95aafeb82274 ";
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
   console.log(jsObject);

            temp = Math.floor(jsObject.main.temp * (9/5) - 459.67);

   document.getElementById('current-temp').textContent = temp;

   const imagesrc ='https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
   const desc = jsObject.weather[0].description;

   document.getElementById('imagesrc').textContent= imagesrc;
   document.getElementById('icon').setAttribute('src',imagesrc);
   document.getElementById('icon').setAttribute('alt',desc);
});