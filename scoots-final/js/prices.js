const requestURL = 'https://makenziehale.github.io/wal15016.github.io/scoots-final/prices.json';

fetch(requestURL)
.then(function (response){
    return response.json();
})
.then(function(jsonObject) {
    console.table(jsonObject);
var x=1;

for (let i = 0; i< rentals.length; i++){

       
   document.getElementById('type' +x).textContent = jsObject.rentals[i].type;


};
});