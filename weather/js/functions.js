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

// feels like temperature and wind variables variables
 let speed = document.getElementById('windspeed').innerHTML;
 let temp = document.getElementById('actual').innerHTML;

 let direction = document.getElementById('direction').innerHTML;

 let condition = document.getElementById('condition').innerHTML;

 // elevation variables
 let meters = 1514.246;
 let feet = convertMeters(meters);

 // Get the next hour based on the current time
let date = new Date(); 
let nextHour = date.getHours() + 1;




 /* * * * CALL FUNCTIONS * * * */

// call wind chill function
buildWC(speed, temp);

// call wind dial function
windDial(direction);

// call get condition function
let weather = getCondition(condition);

//call change img class function
changeSummaryImage(weather);

//call meters to feet function
convertMeters(meters);




 /* * * * FUNCTIONS * * * */

 // Calculate Wind Chill function
 function buildWC(speed, temp) {
    let tempFeel = document.getElementById('tempFeel');

    console.log("speed is " + speed);
    console.log("temp is " + temp);

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
    let dial = document.getElementById('dial');

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

   console.log("wind direction is " + direction);
 }

// get weather condition function
 function getCondition(condition) {
    let weather;
    console.log("weather condition is " + condition);

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

   console.log("weather is " + weather);
   return weather;
 }


 // change img class function
 function changeSummaryImage(weather) {
   let weatherImg = document.getElementById('weatherImg')

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
   console.log("elevation in meters is " + meters);

   let elevation = document.getElementById('elevation');

   let feet = Math.floor(meters*3.28084);

   elevation.innerHTML = feet;

   console.log("elevation in feet is " + feet);
   return feet;
 }
 
 // Convert, Format time to 12 hour format
function format_time(hour) {
   if(hour > 23){ 
    hour -= 24; 
   } 
   let amPM = (hour > 11) ? "pm" : "am"; 
   if(hour > 12) { 
    hour -= 12; 
   } 
   if(hour == 0) { 
    hour = "12"; 
   } 
   return hour + amPM;
  }

  // Build the hourly temperature list
function buildHourlyData(nextHour,hourlyTemps) {
   // Data comes from a JavaScript object of hourly temp name - value pairs
   // Next hour should have a value between 0-23
   // The hourlyTemps variable holds an array of temperatures
   // Line 8 builds a list item showing the time for the next hour 
   // and then the first element (value in index 0) from the hourly temps array
    let hourlyListItems = '<li>' + format_time(nextHour) + ': ' + hourlyTemps[0] + '&deg;F</li>';
    // Build the remaining list items using a for loop
    for (let i = 1, x = hourlyTemps.length; i < x; i++) {
     hourlyListItems += '<li>' + format_time(nextHour+i) + ': ' + hourlyTemps[i] + '&deg;F</li>';
    }
    console.log('HourlyList is: ' +hourlyListItems);
    return hourlyListItems;
   }
 
 

 