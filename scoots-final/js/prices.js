const requestURL = 'https://makenziehale.github.io/wal15016.github.io/scoots-final/prices.json';

fetch(requestURL)
.then(function (response){
    return response.json();
})
.then(function(jsonObject) {
    console.table(jsonObject);


for (let i = 0; i< jsObject.rentals.length; i++){
    var x=1;
    if(rentals[i].type == "~Honda Metro Scooter" || rentals[i].type == "~Honda Dio Scooter" || rentals[i].type == "~Honda PCX150 Scooter" || rentals[i].type == "Honda Pioneer ATV" || rentals[i].type == "Jeep Wrangler-4 door with a/c" || rentals[i].type == "Jeep Wrangler-2 door"){
       
   document.getElementById('type' +x).textContent = jsObject.rentals[i].type;

    };
};
});