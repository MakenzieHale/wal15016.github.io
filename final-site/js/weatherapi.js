
   const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=79e15b681560d53f708b95aafeb82274 ";
   const forapi = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=79e15b681560d53f708b95aafeb82274";
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

     for(i = 0; i < jsObject.list.length; i++){
      var myTime = jsObject.list[i].dt_txt.substring(11);
        let date = new Date(jsObject.list[i].dt * 1000); //turns milliseconds into seconds
        let weather = weekDay[date.getDay()];
        if(myTime == '18:00:00' && x<=5 ) {
           document.getElementById('weather' + x).textContent = weather;
           document.getElementById('forecast' + x).textContent = Math.ceil(jsObject.list[i].main.temp) + '°F';
          
           const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
           const desc = jsObject.list[i].weather[0].description;
           document.getElementById('icon' + x).setAttribute('src', imagesrc);
           document.getElementById('icon' + x).setAttribute('alt',desc);
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

        if(towns[i].name == "Preston"){
           
           let eventInfo = document.createElement('div');

           eventInfo.setAttribute('class', 'eventInfo');

           let para1 = document.createElement('p');
           let para2 = document.createElement('p');
           let para3 = document.createElement('p');

           para1.textContent = towns[i].events[0];
           para2.textContent = towns[i].events[1];
           para3.textContent = towns[i].events[2];

           eventInfo.appendChild(para1);
           eventInfo.appendChild(para2);
           eventInfo.appendChild(para3);

      

        }
      }

    });