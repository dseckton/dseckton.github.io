'use strict';

/*
WEATHER SITE JAVASCRIPT FUNCTIONS
*/

var deg = '&deg;F';

var pageNav = document.getElementById("menu-nav");
var pgStatus = document.getElementById("status");
var pgContent = document.getElementById("loaded");

var pageTitle = document.getElementById('page-title');

const navButton = document.getElementById("nav-toggle");
const menuNav = document.getElementById("menu-nav");
const menuToggle = document.getElementById("menu-toggle")
const disabler = document.getElementById("disabler");

const feelTemp = document.getElementById('feel-temp');
const preview = document.getElementById('preview');
const speed = document.getElementById('speed');
const currentTemp = document.getElementById('current-temp');

const bckImg = document.querySelector("main");

var weatherURL = "../js/idahoweather.json";

var locStore = window.localStorage;
var sessStore = window.sessionStorage;

var indicators = [document.getElementById("tInd"), document.getElementById("cInd"), document.getElementById("fInd")];
console.log(indicators);

navButton.addEventListener("click", function() {
    menuToggle.classList.toggle("closed");
    menuNav.classList.toggle("closed");
    disabler.classList.toggle("closed");
})

const currentDate = document.getElementById("current-date");

let output = "";

const d = new Date();

console.log(d);

var hour = d.getHours();

function formatDate() {

    const dayOfWeek = d.getDay();
    let weekDay = "";

    const date = d.getDate();

    const month = d.getMonth();
    let monthName = "";

    const year = d.getFullYear();

    switch (dayOfWeek) {
        case 0:
            weekDay = "Sunday";
            break;
        case 1:
            weekDay = "Monday";
            break;
        case 2:
            weekDay = "Tuesday";
            break;
        case 3:
            weekDay = "Wednesday";
            break;
        case 4:
            weekDay = "Thursday";
            break;
        case 5:
            weekDay = "Friday";
            break;
        case 6:
            weekDay = "Saturday";
            break;
    }

    switch (month) {
        case 0:
            monthName = "January";
            break;
        case 1:
            monthName = "February";
            break;
        case 2:
            monthName = "March";
            break;
        case 3:
            monthName = "April";
            break;
        case 4:
            monthName = "May";
            break;
        case 5:
            monthName = "June";
            break;
        case 6:
            monthName = "July";
            break;
        case 7:
            monthName = "August";
            break;
        case 8:
            monthName = "September";
            break;
        case 9:
            monthName = "October";
            break;
        case 10:
            monthName = "November";
            break;
        case 11:
            monthName = "December";
            break;
    }

    output = weekDay + ", " + date + " " + monthName + " " + year;
    return output;
}

formatDate();

currentDate.innerHTML = output;


// DOCLOAD
const date = document.getElementById("partyTime");

// BUILD SITE
document.addEventListener("DOMContentLoaded", function(){
    date.innerHTML = document.lastModified;
    console.log("DOC MOD: "+ document.lastModified);

    setIndicator(hour);

    fetchWeather(weatherURL);

    // speed.innerHTML = 3
    // currentTemp.innerHTML = 17
    // buildWC(sessStore.getItem("windSpeed"), sessStore.getItem("temperature"));
    // speed.innerHTML += 'mph';
    // currentTemp.innerHTML += deg;

    // buildPage();
})


// FONTLOAD
// WebFont.load({google: { families: ['Nanum Gothic', 'Oswald']}})


// WINDCHILL FUNCTION

function buildWC(speed, temp) {
    
    let wc = Math.floor(35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16));

    wc = (wc > temp)?temp:wc;
    console.log("SPEED: "+ speed);
    console.log("TEMP: "+ temp);

    console.log("BUILDWC FUNCTION: " + wc);

    return wc;

    // feelTemp.innerHTML = wc + deg;

}


// INDICATOR FUNCTION

function setIndicator(hour) {
    if (hour > 12) {
        hour = hour - 12;
    } else if (hour == 0) {
        hour = 12;
    }
    switch (hour) {
        case 12:
                indicators[0].className = ""
                indicators[0].classList.add("twelve", "indicator");

                indicators[1].className = ""
                indicators[1].classList.add("twelve", "indicator");

                indicators[2].className = ""
                indicators[2].classList.add("twelve", "indicator");
        break;
        case 1:
                indicators[0].className = ""
                indicators[0].classList.add("one", "indicator");

                indicators[1].className = ""
                indicators[1].classList.add("one", "indicator");

                indicators[2].className = ""
                indicators[2].classList.add("one", "indicator");
        break;
        case 2:
                indicators[0].className = ""
                indicators[0].classList.add("two", "indicator");

                indicators[1].className = ""
                indicators[1].classList.add("two", "indicator");

                indicators[2].className = ""
                indicators[2].classList.add("two", "indicator");
        break;
        case 3:
                indicators[0].className = ""
                indicators[0].classList.add("three", "indicator");

                indicators[1].className = ""
                indicators[1].classList.add("three", "indicator");

                indicators[2].className = ""
                indicators[2].classList.add("three", "indicator");
        break;
        case 4:
                indicators[0].className = ""
                indicators[0].classList.add("four", "indicator");

                indicators[1].className = ""
                indicators[1].classList.add("four", "indicator");

                indicators[2].className = ""
                indicators[2].classList.add("four", "indicator");
        break;
        case 5:
                indicators[0].className = ""
                indicators[0].classList.add("five", "indicator");

                indicators[1].className = ""
                indicators[1].classList.add("five", "indicator");

                indicators[2].className = ""
                indicators[2].classList.add("five", "indicator");
        break;
        case 6:
                indicators[0].className = ""
                indicators[0].classList.add("six", "indicator");

                indicators[1].className = ""
                indicators[1].classList.add("six", "indicator");

                indicators[2].className = ""
                indicators[2].classList.add("six", "indicator");
        break;
        case 7:
                indicators[0].className = ""
                indicators[0].classList.add("seven", "indicator");

                indicators[1].className = ""
                indicators[1].classList.add("seven", "indicator");

                indicators[2].className = ""
                indicators[2].classList.add("seven", "indicator");
        break;
        case 8:
                indicators[0].className = ""
                indicators[0].classList.add("eight", "indicator");

                indicators[1].className = ""
                indicators[1].classList.add("eight", "indicator");

                indicators[2].className = ""
                indicators[2].classList.add("eight", "indicator");
        break;
        case 9:
                indicators[0].className = ""
                indicators[0].classList.add("nine", "indicator");

                indicators[1].className = ""
                indicators[1].classList.add("nine", "indicator");

                indicators[2].className = ""
                indicators[2].classList.add("nine", "indicator");
        break;
        case 10:
                indicators[0].className = ""
                indicators[0].classList.add("ten", "indicator");

                indicators[1].className = ""
                indicators[1].classList.add("ten", "indicator");

                indicators[2].className = ""
                indicators[2].classList.add("ten", "indicator");
        break;
        case 11:
                indicators[0].className = ""
                indicators[0].classList.add("eleven", "indicator");

                indicators[1].className = ""
                indicators[1].classList.add("eleven", "indicator");

                indicators[2].className = ""
                indicators[2].classList.add("eleven", "indicator");
        break;

    }
}


// BACKGROUND IMAGE SELECTOR

function bckImgSelect(weather) {
    weather = weather.toLowerCase();
    switch (weather) {
        case "snow":
            bckImg.className = "";
            bckImg.classList.add("snow");
        break;

        case "clear":
        case "sunny":
            bckImg.className = "";
            bckImg.classList.add("clear");
        break;

        case "rain":
            bckImg.className = "";
            bckImg.classList.add("rain");
        break;

        case "cloud":
        case "mostly cloudy":
            bckImg.className = "";
            bckImg.classList.add("cloud");
        break;

        case "fog":
            bckImg.className = "";
            bckImg.classList.add("fog");
        break;
    }
}

function fetchWeather(weatherURL) {
    let cityName = pageTitle.dataset.location;
    fetch(weatherURL)
    .then(function(response) {
        if(response.ok){
            return response.json();
        }
        throw new Error('Network response was not OK.');
    })
    .then(function(data) {
        console.log(data);
        let p = data[cityName];
        console.log(p);
        let locName = p.properties.relativeLocation.properties.city;
        let locState = p.properties.relativeLocation.properties.state;
        let fullName = locName + ', ' + locState;
        console.log(`fullName is: ${fullName}`);

        getHourly(p.properties.forecastHourly);

        const latLong = p.properties.relativeLocation.geometry.coordinates[1] + ","+ p.properties.relativeLocation.geometry.coordinates[0];
console.log(latLong);

sessStore.setItem("fullName", fullName);
console.log("FULL NAME "+ sessStore.getItem("fullName"));
sessStore.setItem("latitude",p.properties.relativeLocation.geometry.coordinates[1]);
sessStore.setItem("longitude",p.properties.relativeLocation.geometry.coordinates[0]);

sessStore.setItem("temperature", p.properties.relativeLocation.properties.temperature);

sessStore.setItem("highTemp", p.properties.relativeLocation.properties.highTemp)
sessStore.setItem("lowTemp", p.properties.relativeLocation.properties.lowTemp)

sessStore.setItem("windSpeed",p.properties.relativeLocation.properties.windSpeed);
sessStore.setItem("windGust", p.properties.relativeLocation.properties.windGust);




const prestonData = JSON.stringify({fullName,latLong});
locStore.setItem("Preston,ID", prestonData);
    })
    .catch(function(error){
        console.log('There was a fetch problem: ' + error.message);
        status.innerHTML = "Sorry, the data was unable to be processed";
    })

}

function getHourly(URL) {
    fetch(URL)
     .then(function (response) {
      if (response.ok) {
       return response.json();
      }
      throw new ERROR('Response not OK.');
     })
     .then(function (data) {
      console.log('Data from getHourly function:');
      console.log(data); // Let's see what we got back
   
      // Store 12 hours of data to session storage  
      var hourData = [];
      let todayDate = new Date();
      var nowHour = todayDate.getHours();
      console.log(`nowHour is ${nowHour}`);
      for (let i = 0, x = 11; i <= x; i++) {
       if (nowHour <= 12) {
        hourData[nowHour] = data.properties.periods[i].temperature + "," + data.properties.periods[i].windSpeed + "," + data.properties.periods[i].icon;
        sessStore.setItem(`hour${nowHour}`, hourData[nowHour]);
        nowHour++;
       } else {
        nowHour = 1;
        hourData[nowHour] = data.properties.periods[i].temperature + "," + data.properties.periods[i].windSpeed + "," + data.properties.periods[i].icon;
        sessStore.setItem(`hour${nowHour}`, hourData[nowHour]);
        nowHour++;
       }
      }
   
      // Get the shortForecast value from the first hour (the current hour)
      // This will be the condition keyword for setting the background image
      sessStore.setItem('shortForecast', data.properties.periods[0].shortForecast);
   
      // Call the buildPage function
      buildPage();

     })
     .catch(error => console.log('There was a getHourly error: ', error))
   }

   function buildPage() {
    // Set the title with the location name at the first
    // Gets the title element so it can be worked with
    // Create a text node containing the full name 
    let fullNameNode = document.createTextNode(sessStore.getItem('fullName'));
    // inserts the fullName value before any other content that might exist
    pageTitle.insertBefore(fullNameNode, pageTitle.childNodes[0]);
    // When this is done the title should look something like this:
    // Preston, Idaho | The Weather Site   
    
    let contentHeading = document.getElementById("location-name")
 contentHeading.innerHTML = sessStore.getItem('fullName');
          
 
    let coordsLat = document.getElementById("latitude");
    let coordsLong = document.getElementById("longitude");
    coordsLat.innerHTML = sessStore.getItem('latitude');
    coordsLong.innerHTML = sessStore.getItem('longitude');

    var weather = sessStore.getItem('shortForecast');

    bckImgSelect(weather);

    let highTemp = document.getElementById('high');
let loTemp = document.getElementById('low');
let currentTemp = document.getElementById('current-temp');
let feelTemp = document.getElementById('feel-temp');
highTemp.innerHTML = sessStore.getItem('highTemp') + "°F";
loTemp.innerHTML = sessStore.getItem('lowTemp') + "°F";
currentTemp.innerHTML = sessStore.getItem('temperature') + "°F";
preview.innerHTML = sessStore.getItem('temperature') + "°F";
// Set the wind information
let speed = document.getElementById('speed');
let gust = document.getElementById('gusts');
speed.innerHTML = sessStore.getItem('windSpeed');
gust.innerHTML = sessStore.getItem('windGust');
// Calculate feel like temp
feelTemp.innerHTML = buildWC(sessStore.getItem('windSpeed'), sessStore.getItem('temperature')) + "°F";

let thisDate = new Date();
let currentHour = thisDate.getHours();
// If hour is greater than 12, subtract 12
if(currentHour > 12){currentHour = currentHour-12}else{currentHour};
// Set the time indicator
setIndicator(currentHour);

let currentData = [];
// If hour is greater than 12, subtract 12
for (let i = 0, x = 12; i < x; i++) {
  if (currentHour > 12) {
  currentHour = currentHour - 12;
  currentData[i] = sessStore.getItem('hour' + currentHour).split(",");
  currentHour++;
  } else {
  currentData[i] = sessStore.getItem('hour' + currentHour).split(",");
  currentHour++;
  }
}
console.log(currentData);

// Loop through array inserting data
// Start with the outer container that matchs the time indicator
// let startContainer = '#temps .o' + currentHour;
// console.log(`start container is ${startContainer}`);
for (let i = 0, x = 12; i < x; i++) {
  if (currentHour > 12) {
  currentHour = currentHour - 12;

  let HourString;

//   switch(currentHour) {
//       case 1: hourString = "one"; break;
//       case 2: hourString = "two"; break;
//       case 3: hourString = "three"; break;
//       case 4: hourString = "four"; break;
//       case 5: hourString = "five"; break;
//       case 6: hourString = "six"; break;
//       case 7: hourString = "seven"; break;
//       case 8: hourString = "eight"; break;
//       case 9: hourString = "nine"; break;
//       case 10: hourString = "ten"; break;
//       case 11: hourString = "eleven"; break;
//       case 12: hourString = "twelve"; break;
//   }

  document.querySelector(`#temp .outer li:nth-child(${currentHour})`).innerHTML = currentData[i][0]
  currentHour++;
  } else {
    document.querySelector(`#temp .outer li:nth-child(${currentHour})`).innerHTML = currentData[i][0]
    currentHour++;
  }
}

// startContainer = '#winds .o' + currentHour;
for (let i = 0, x = 12; i < x; i++) {
  let windArray = [];
  if (currentHour > 12) {
  currentHour = currentHour - 12;
  windArray[i] = currentData[i][1].split(" ");
  console.log(windArray[i]);
  document.querySelector(`#winds .outer li:nth-child(${currentHour})`).innerHTML = windArray[i][0];
  currentHour++;
  } else {
  windArray[i] = currentData[i][1].split(" ");
  document.querySelector(`#winds .outer li:nth-child(${currentHour})`).innerHTML = windArray[i][0];
  currentHour++;
  }
}

// startContainer = '#condition .o' + currentHour;
for (let i = 0, x = 12; i < x; i++) {
  if (currentHour > 12) {
  currentHour = currentHour - 12;
  document.querySelector(`#cond .outer li:nth-child(${currentHour})`).innerHTML = '<img src="' + currentData[i][2] + '" alt="hourly weather condition image">';
  currentHour++;
  } else {
    document.querySelector(`#cond .outer li:nth-child(${currentHour})`).innerHTML = '<img src="' + currentData[i][2] + '" alt="hourly weather condition image">';
  currentHour++;
  }
}

pgContent.setAttribute('class', ''); // removes the hide class from main
pgStatus.setAttribute('class', 'hidden');

let links = document.querySelectorAll("#nav-list li");
console.log(links);
console.log(links.length);



   }