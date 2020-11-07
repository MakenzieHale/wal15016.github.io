var params = new URLSearchParams(location.search);
var data = '<strong>Your Contact Information </strong><br/>';
data = data + 'First Name: ' + params.get('fname') + '<br/>';
data = data + 'Last Name: ' + params.get('lname') + '<br/>';
data = data + 'Phone: ' + params.get('phone') + '<br/>';
data = data + 'Email: ' + params.get('email') + '<br/>';


document.querySelector(".mydata").innerHTML = data;