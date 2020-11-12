const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
.then(function(response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject); //temporary
    const prophets = jsonObject['prophets'];
    prophets.forEach( prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');

        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        image.setAttribute('src', prophet.imageurl);
        image.setAttribute('alt', `Official Portrait of ${prophet.name} ${prophet.lastname}`);


        card.appendChild(h2);
        card.appendChild(image);

        document.querySelector('.cards').appendChild(card);
    }
});