/* * * * * * * * * *
 * Weather Site JavaScript Functions
 * * * * * * * * * */

 console.log('my js worketh');

// declaration of variables to be used in functions
 const speed = document.getElementById('windspeed').innerHTML;
 const temp = document.getElementById('actual').innerHTML;

 const direction = document.getElementById('direction').innerHTML;

 // Calculate Wind Chill function
 function buildWC(speed, temp) {
    const tempFeel = document.getElementById('tempFeel');

    // compute windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

    // round down wc to nearest integer
    wc = Math.floor(wc);

    // if chill is greater than temp, return temp
    wc - (wc > temp)?temp:wc;

    //display windchill
    console.log(wc);
    tempFeel.innerHTML = wc;
 }

 // use wind chill function
 buildWC(speed, temp);

 //Rotate wind pointer function
 function windDial(direction) {
    // get wind dial container
    const dial = document.getElementById('dial');

    // Determine the dial class
 switch (direction){
    case "North":
    case "N":
     dial.setAttribute("class", "n"); //"n" is the CSS rule selector
     break;
    case "NE":
    case "NNE":
    case "ENE":
     dial.setAttribute("class", "ne");
     break;
    case "NW":
    case "NNW":
    case "WNW":
     dial.setAttribute("class", "nw");
     break;
    case "South":
    case "S":
     dial.setAttribute("class", "s");
     break;
    case "SE":
    case "SSE":
    case "ESE":
     dial.setAttribute("class", "se");
     break;
    case "SW":
    case "SSW":
    case "WSW":
     dial.setAttribute("class", "sw");
     break;
    case "East":
    case "E":
     dial.setAttribute("class", "e");
     break;
    case "West":
    case "W":
     dial.setAttribute("class", "w");
     break;
   }
 }

 // use wind dial function
 windDial(direction);