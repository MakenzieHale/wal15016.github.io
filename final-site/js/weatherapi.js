var currentURL = window.location.href;
var currentId = "5604473";
if (currentURL.indexOf("preston.html") > 0) {
   currentId = "5604473";
} else if (currentId.indexOf("sodaSprings.html") > 0) {
   currentId = "5607916"; //The Soda Springs ID here
}
else if (currentId.indexOf("fishHaven.html") > 0){
   currentId = "lat=42.0380399&lon=-111.4048681";
}

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + currentId + "&units=imperial&APPID=79e15b681560d53f708b95aafeb82274 ";
const forapi = "https://api.openweathermap.org/data/2.5/forecast?id=" + currentId + "&units=imperial&APPID=79e15b681560d53f708b95aafeb82274";
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(apiURL)
   .then((response) => response.json())
   .then((jsObject) => {
      console.log(jsObject);

      //temp = Math.floor(jsObject.main.temp * (9/5) - 459.67);
      //max_temp = Math.floor(jsObject.main.temp_max *(9/5)-459.67);




      document.getElementById('current').textContent = jsObject.weather[0].description;
      document.getElementById('currentTemp').textContent = Math.ceil(jsObject.main.temp);
      document.getElementById('humidity').textContent = jsObject.main.humidity;
      document.getElementById('wind-speed').textContent = Math.ceil(jsObject.wind.speed);


   });

fetch(forapi)
   .then((response) => response.json())
   .then((jsObject) => {
      console.log(jsObject);
      var x = 1;
      let weekDay = new Array(7);
      weekDay[0] = "Sun";
      weekDay[1] = "Mon";
      weekDay[2] = "Tues";
      weekDay[3] = "Wed";
      weekDay[4] = "Thurs";
      weekDay[5] = "Fri";
      weekDay[6] = "Sat";

      for (i = 0; i < jsObject.list.length; i++) {
         var myTime = jsObject.list[i].dt_txt.substring(11);
         let date = new Date(jsObject.list[i].dt * 1000); //turns milliseconds into seconds
         let weather = weekDay[date.getDay()];
         if (myTime == '18:00:00' && x <= 5) {
            document.getElementById('weather' + x).textContent = weather;
            document.getElementById('forecast' + x).textContent = Math.ceil(jsObject.list[i].main.temp) + '°F';

            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
            const desc = jsObject.list[i].weather[0].description;
            document.getElementById('icon' + x).setAttribute('src', imagesrc);
            document.getElementById('icon' + x).setAttribute('alt', desc);
            x++
         }

      }
   });
fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      console.table(jsonObject);

      const towns = jsonObject['towns'];
      for (let i = 0; i < towns.length; i++) {

         const eventInfo = document.createElement('div');

         if (towns[i].name == "Preston" && currentURL.indexOf("preston.html") > 0 ) {



            eventInfo.setAttribute('class', 'eventInfo');
            for (let x = 0; x <= towns[i].events.length; x++) {

               let para = document.createElement('p');

               para.textContent = towns[i].events[x];

               eventInfo.appendChild(para);

            }
            
            

            


         }
         else if(towns[i].name == "Soda Springs"){

            eventInfo.setAttribute('class', 'eventInfo');
            for (let x = 0; x <= towns[i].events.length; x++) {

               let para = document.createElement('p');

               para.textContent = towns[i].events[x];

               eventInfo.appendChild(para);
            }
         }
         else if(towns[i].name == "Fish Haven" &&currentURL.indexOf('fishHaven.html') > 0){

            eventInfo.setAttribute('class', 'eventInfo');
            for (let x = 0; x <= towns[i].events.length; x++) {

               let para = document.createElement('p');

               para.textContent = towns[i].events[x];

               eventInfo.appendChild(para);
            }
            
         }

         document.getElementById('events').appendChild(eventInfo);
      }

   });