var currentId= "lat=20.5083&lon=-86.9458";

const apiURL = "https://api.openweathermap.org/data/2.5/forecast?" + currentId + "&units=imperial&APPID=79e15b681560d53f708b95aafeb82274";

fetch(apiURL)
.then ((response) => response.json())
.then ((jsObject) => {
    //console.log(jsObject);
    var x = 1;
    let weekDay = new Array(7);
    weekDay[0] = "Sunday";
    weekDay[1] = "Monday";
    weekDay[2] = "Tuesday";
    weekDay[3] = "Wednesday";
    weekDay[4] = "Thursday";
    weekDay[5] = "Friday";
    weekDay[6] = "Saturday";

    for(i = 0; i < jsObject.list.length; i++){
        var myTime = jsObject.list.length[i].dt_txt.substring(11);
        let date = new Date(jsObject.list[i].dt * 1000);
        let weather = weekDay[date.getDay()];
        if (myTime == '18:00:00' && x <=3){
            document.getElementById('weather' + x).textContent = weather;

            document.getElementById('forecast' + x).textContent = Math.ceil(jsObject.list[i].main.temp) +'°F';
        }
    }
});