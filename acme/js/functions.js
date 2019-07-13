
//get the title element
let title = document.getElementById('title');

//set keys variable
var keys;

//get containers
let homeContainer = document.getElementById('home-container');
let contentContainer = document.getElementById('content-container');

//get various content elements
let name = document.getElementById('name');
let path = document.getElementById('path');
let description = document.getElementById('description');
let manufacturer = document.getElementById('manufacturer');
let reviews = document.getElementById('rating');
let price = document.getElementById('price');

//GET AND DISPLAY NAV BAR INFO FROM JSON FILE

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
    keys = (Object.keys(data));
    let navItems = '<li><a href="#">Home</a></li>';
console.log(navItems);
    let i = 0;
    while (i < keys.length) {
        navItems += '<li><a href="#">' + keys[i] + '</a></li>'
        i++;
    }
    console.log(navItems);
    nav.innerHTML = navItems;
})






//BUILD THE CONTENT PAGE BASED ON CLICK

//listen for click within the nav
nav.addEventListener('click', function(evt) {

let itemSelection = evt.target.innerHTML;

console.log("Item selection: " + itemSelection);

if (itemSelection == "Home") {
    homeContainer.classList.remove('hidden');
    contentContainer.classList.add('hidden');
}
else {
    evt.preventDefault();

    fetch(json).then(function(response) {
        if(response.ok){
            return response.json();
        }
        throw new Error('Network response was not OK.');
    })
    .then(function(data){
        let itemInfo = data[itemSelection];
        console.log(itemInfo);

        //input info into the HTML
        name.innerHTML = itemInfo.name;
        console.log(itemInfo.path);
        path.src = itemInfo.path;
        description.innerHTML = itemInfo.description;
        manufacturer.innerHTML = itemInfo.manufacturer;
        reviews.innerHTML = itemInfo.reviews;
        price.innerHTML = itemInfo.price;


        console.log(name.innerHTML + path.src + description.innerHTML + manufacturer.innerHTML + reviews.innerHTML + price.innerHTML)
        //change visibilty of containers
        homeContainer.classList.add('hidden');
        contentContainer.classList.remove('hidden');
    })
}

})