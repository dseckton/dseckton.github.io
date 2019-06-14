/* * * * * * * * * * * * * * * * * * * *
 * Weather Site JavaScript Functions
 * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * *
 * 1 - Variable Declarations
 * 
 * 2 - Calls
 *   - wind chill call
 *   - wind dial call
 *   - get condition call
 *   - change image call
 *   - convert meters call
 * 
 * 3 - Functions
 *   - wind chill calculation function
 *   - wind dial rotation function
 *   - get condition function
 *   - change summary image function
 *   - convert meters function
 * 
 * * * * * * * * * * * * * * * * * * * */

 console.log('my js worketh');
 



 /* * * * VARIABLES * * * */

// declaration of variables to be used in functions
 const speed = document.getElementById('windspeed').innerHTML;
 const temp = document.getElementById('actual').innerHTML;

 const direction = document.getElementById('direction').innerHTML;

 const condition = document.getElementById('condition').innerHTML;

 const meters = document.getElementById('elevation').innerHTML;
 const feet = convertMeters(meters);

 /* * * * CALL FUNCTIONS * * * */

// call wind chill function
buildWC(speed, temp);

// call wind dial function
windDial(direction);

// call get condition function
const weather = getCondition(condition);

//call change img class function
changeSummaryImage(weather);

//call meters to feet function
convertMeters(meters);


 /* * * * FUNCTIONS * * * */

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

// get weather condition function
 function getCondition(condition) {
    let weather;

   switch (condition) {
      case "Clear":
      case "Sunny":
      weather = "clear";
      break;
      case "Clouds":
      case "Cloudy":
      case "Overcast":
      weather = "cloud";
      break;
      case "Fog": 
      case "Foggy":
      weather = "fog";
      break;
      case "Rain":
      case "Rainy":
      weather = "rain";
      break;
      case "Snow":
      case "Snowy":
      weather = "snow";
      break;
   }

   return weather;
 }


 // change img class function
 function changeSummaryImage(weather) {
   const weatherImg = document.getElementById('weatherImg')

   switch (weather) {
      case "clear":
      weatherImg.setAttribute("class", "clear");
      break;
      case "clouds":
      weatherImg.setAttribute("class", "clouds");
      break;
      case "fog": 
      weatherImg.setAttribute("class", "fog");
      break;
      case "rain":
      weatherImg.setAttribute("class", "rain");
      break;
      case "snow":
      weatherImg.setAttribute("class", "snow");
      break;
   }
 }

 // convert meters to feet function
 function convertMeters(meters) {
   const feet = Math.floor(meters*3.28084);
   return feet;
 }

 console.log("speed is " + speed);
 console.log("temp is " + temp);
 console.log("wind direction is " + direction);
 console.log("weather condition is " + condition);
 console.log("weather is " + weather);
 console.log("elevation in meters is " + meters);
 console.log("elevation in feet is " + feet);