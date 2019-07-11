//get the UL in the Nav
let nav = document.getElementById('nav');

//get the json file
let json = "https://dseckton.github.io/acme/js/acme.json"


fetch(json).then(function(response) {
    if(response.ok){
        return response.json();
    }
    throw new Error('Network response was not OK.');
})
.then(function(data){
    console.log(data);
})