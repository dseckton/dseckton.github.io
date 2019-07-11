//get the UL in the Nav
let nav = document.getElementById('nav');

//get the json file
let json = "https://dseckton.github.io/acme/js/acme.json"

//get info from json
fetch(json).then(function(response) {
    if(response.ok){
        return response.json();
    }
    throw new Error('Network response was not OK.');
})
.then(function(data){
    console.log(data);
    //get the name of each item
    let keys = (Object.keys(data));

    let navItems = '<li><a href="#">Home</a></li>';

    let i = 0;
    while (i < keys.length) {
        navItems += '<li><a href="#">' + keys[i] + '</a></li>'
        i++;
    }
    nav.innerHTML = navItems;
})