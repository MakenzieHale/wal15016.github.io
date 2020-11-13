const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven'){
                let town = document.createElement('section');
                let h2 = document.createElement('h2')
                let h3 = document.createElement('h3');
                let para2 = document.createElement('p')
                let para3 = document.createElement('p');
                let para4 = document.createElement('p');
    
    
                h2.textContent = towns[i].name;
                h3.textContent = towns[i].motto;
                para2.textContent = 'Year Founded :' + ' ' + towns[i].yearFounded;
                para3.textContent = 'Population :' + ' ' + towns[i].currentPopulation;
                para4.textContent = 'Annual Rain Fall :' + ' ' + towns[i].averageRainfall;
    
                town.appendChild(h2);
                town.appendChild(h3);
                town.appendChild(para2);
                town.appendChild(para3);
                town.appendChild(para4);
    
                document.querySelector('div.towns').appendChild(town);
            };

           
        };



    });