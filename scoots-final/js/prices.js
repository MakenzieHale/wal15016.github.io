const requestURL = 'https://makenziehale.github.io/wal15016.github.io/scoots-final/prices.json';

fetch(requestURL)
.then(function (response){
    return response.json();
})
.then(function(jsonObject) {
    console.table(jsonObject);

    const rentals = jsonObject['rentals'];

    var x=1;

for (let i = 0; i < rentals.length; i++){
 

        if (x <= 6){
            document.getElementById('type' + x).textContent = rentals[i].type;
            document.getElementById('rHalf' + x).textContent = rentals[i].reservations.half;

            x++

        }
       
 

    };
});