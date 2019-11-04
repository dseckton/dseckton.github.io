'use strict';

/*
WEATHER SITE JAVASCRIPT FUNCTIONS
*/

var deg = '&deg;F';

const navButton = document.getElementById("nav-toggle");
const menuNav = document.getElementById("menu-nav");
const menuToggle = document.getElementById("menu-toggle")
const disabler = document.getElementById("disabler");

const feelTemp = document.getElementById('feel-temp');
const preview = document.getElementById('preview');
const speed = document.getElementById('speed');
const currentTemp = document.getElementById('current-temp');

const bckImg = document.getElementById('weather-info');

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
    console.log(dayOfWeek);
    let weekDay = "";

    const date = d.getDate();
    console.log(date);

    const month = d.getMonth();
    console.log(month);
    let monthName = "";

    const year = d.getFullYear();
    console.log(year);

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
    console.log(document.lastModified);

    bckImgSelect("CLOUD");

    setIndicator(hour);

    speed.innerHTML = 3
    currentTemp.innerHTML = 17
    preview.innerHTML = currentTemp.innerHTML;
    buildWC(speed.innerHTML, currentTemp.innerHTML);
    speed.innerHTML += 'mph';
    currentTemp.innerHTML += deg;

})


// FONTLOAD
// WebFont.load({google: { families: ['Nanum Gothic', 'Oswald']}})


// WINDCHILL FUNCTION

function buildWC(speed, temp) {
    
    let wc = Math.floor(35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16));

    wc = (wc > temp)?temp:wc;

    console.log("BUILDWC FUNCTION: " + wc);

    feelTemp.innerHTML = wc + deg;

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
    console.log(weather);
    switch (weather) {
        case "snow":
            bckImg.className = "";
            bckImg.classList.add("snow");
        break;

        case "clear":
            bckImg.className = "";
            bckImg.classList.add("clear");
        break;

        case "rain":
            bckImg.className = "";
            bckImg.classList.add("rain");
        break;

        case "cloud":
            bckImg.className = "";
            bckImg.classList.add("cloud");
        break;

        case "fog":
            bckImg.className = "";
            bckImg.classList.add("fog");
        break;
    }
}