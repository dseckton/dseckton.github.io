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

//  console.log('my js worketh');
 



 /* * * * VARIABLES * * * */

// declaration of variables to be used in functions

// feels like temperature and wind variables variables
 let speed = document.getElementById('windspeed');
 let temp = document.getElementById('actual');

 let direction = document.getElementById('direction');

 let condition = document.getElementById('condition');

 let contentHeading = document.getElementById('location');

 let pageTitle = document.getElementById("page-title");

 let statusContainer = document.getElementById('status');

 let mainContainer = document.getElementById('main-content');

 let hourlyContainer = document.getElementById('hourly-temp');

 let highTemp = document.getElementById('high');
 let lowTemp = document.getElementById('low');

 let gustSpeed = document.getElementById('gustspeed');

 // elevation variables
 let meters = 1514.246;
 let feet = convertMeters(meters);

 // Get the next hour based on the current time
let date = new Date(); 
let nextHour = date.getHours() + 1;

// location variables
let storage = window.localStorage;

// Set global variable for custom header required by NWS API
var idHeader = {
    headers: {
      "User-Agent": "Student Learning Project - eck15001@byui.edu"
    }
  };

//   let hourlyTemps = [];
  let hourlyTempsStr = storage.getItem("hourlyTemps");
  let hourlyTemps = hourlyTempsStr.split(",");



 /* * * * CALL FUNCTIONS * * * */

// call wind chill function
buildWC(speed, temp);

// call wind dial function
windDial(direction);

// call get condition function
let weather = getCondition(condition);

//call change img class function
// changeSummaryImage(weather);

//call meters to feet function
convertMeters(meters);

//call format time function
format_time(nextHour);

// call get high low function
getHighLow();

//call hourly data funciton
buildPage();

 /* * * * FUNCTIONS * * * */

 // Calculate Wind Chill function
 function buildWC(speed, temp) {
    let tempFeel = document.getElementById('tempFeel');

   //  console.log("speed is " + speed);
   //  console.log("temp is " + temp);

    // compute windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

    // round down wc to nearest integer
    wc = Math.floor(wc);

    // if chill is greater than temp, return temp
    wc - (wc > temp)?temp:wc;

    //display windchill
   //  console.log(speed + ' & ' + temp)
   //  console.log(wc);
    tempFeel.innerHTML = wc;
    return wc;
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

   // console.log("wind direction is " + direction);
 }

// get weather condition function
 function getCondition(condition) {
    let weather = "";
   console.log("weather condition is " + condition);

   switch (condition) {
      case "Clear":
      case "Sunny":
      case "Mostly Clear":
      weather = "clear";
      break;
      case "Clouds":
      case "Cloudy":
      case "Overcast":
      case "Partly Cloudy":
      weather = "cloud";
      break;
      case "Fog": 
      case "Foggy":
      weather = "fog";
      break;
      case "Rain":
      case "Rainy":
      case "Thunderstorms":
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
   let weatherImg = document.getElementById('weatherImg');
   let background = document.getElementById('bckimg');

   switch (weather) {
      case "clear":
      weatherImg.setAttribute("class", "clear");
      background.setAttribute("class", "clear");
      break;
      case "cloud":
      weatherImg.setAttribute("class", "clouds");
      background.setAttribute("class", "clouds");
      break;
      case "fog": 
      weatherImg.setAttribute("class", "fog");
      background.setAttribute("class", "fog");
      break;
      case "rain":
      weatherImg.setAttribute("class", "rain");
      background.setAttribute("class", "rain");
      break;
      case "snow":
      weatherImg.setAttribute("class", "snow");
      background.setAttribute("class", "snow");
      break;
   }

   return weather;
 }


 // convert meters to feet function
 function convertMeters(meters) {
   // console.log("elevation in meters is " + meters);

   let elevation = document.getElementById('elevation');

   let feet = Math.floor(meters*3.28084);

   elevation.innerHTML = feet;

   // console.log("elevation in feet is " + feet);
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

   // console.log(hour + amPM);
   return hour + amPM;

  }

  function getHighLow() {
     fetch(storage.getItem("highLowURL"))
     .then(function(response){
        if(response.ok){
           return response.json();
        }
        throw new ERROR('Response not OK.');
     })
     .then(function (data) {
        console.log("Results from High-Low URL:");
        console.log(data);

        let tempHigh = data.properties.periods[0].temperature;

        storage.setItem("High", tempHigh);

        let tempLow = data.properties.periods[1].temperature;

        storage.setItem("Low", tempLow);

        let direction = data.properties.periods[0].windDirection;

        storage.setItem("Direction", direction)

        let windGust = data.properties.periods[0].windSpeed;

        storage.setItem("Gusts", windGust);
     })
     .catch(error => console.log('There was a HourlyURL error: ', error)) 
  }

  function getHourly() {
   fetch(storage.getItem("hourlyData")) 
   .then(function(response){
     if(response.ok){ 
      return response.json(); 
     } 
     throw new ERROR('Response not OK.');
   })
   .then(function (data) {
      console.log("Results from Hourly Forecast:")
      console.log(data)

      let hourlyTemps = [];

      let i = 0;
      while (i < 13) {

         hourlyTemps[i] = data.properties.periods[i].temperature;
         i++;
         
      }

      console.log(hourlyTemps);
      storage.setItem("hourlyTemps", hourlyTemps);
   })
   .catch(error => console.log('There was a HourlyURL error: ', error)) 
   
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
     hourlyListItems += ' <li>' + format_time(nextHour+i) + ': ' + hourlyTemps[i] + '&deg;F</li> ';
    }
     console.log('HourlyList is: ' + hourlyListItems);
     console.log('HourlyList.length is: ' + hourlyTemps.length);
    return hourlyListItems;
   }
 
 // Gets location information from the NWS API
function getLocation(locale) {
   const URL = "https://api.weather.gov/points/" + locale; 

   // NWS User-Agent header (built above) will be the second parameter 
   fetch(URL, idHeader) 
   .then(function(response){
     if(response.ok){ 
      return response.json(); 
     } 
     throw new ERROR('Response not OK.');
   })
   .then(function (data) { 
     // Let's see what we got back
     console.log('Json object from getLocation function:'); 
     console.log(data);
     // Store data to localstorage 
     storage.setItem("locName", data.properties.relativeLocation.properties.city); 
     storage.setItem("locState", data.properties.relativeLocation.properties.state); 
  
     // Next, get the weather station ID before requesting current conditions 
     // URL for station list is in the data object 
     let stationsURL = data.properties.observationStations; 
     // Call the function to get the list of weather stations
     getStationId(stationsURL); 

     // set url
      const hourlyURL = data.properties.forecastHourly;
      console.log(`Hourly URL is: ${hourlyURL}`);

      storage.setItem("hourlyData", hourlyURL)

      const highLowURL = data.properties.forecast;
      console.log(`High-Low UrRL is: ${highLowURL}`);

      storage.setItem("highLowURL", highLowURL);
    }) 
   .catch(error => console.log('There was a getLocation error: ', error)) 
  } // end getLocation function

// Gets weather station list and the nearest weather station ID from the NWS API
function getStationId(stationsURL) { 
   // NWS User-Agent header (built above) will be the second parameter 
   fetch(stationsURL, idHeader) 
   .then(function(response){
     if(response.ok){ 
      return response.json(); 
     } 
     throw new ERROR('Response not OK.');
   })
   .then(function (data) { 
     // Let's see what we got back
     console.log('From getStationId function:'); 
     console.log(data);
   
     // Store station ID and elevation (in meters - will need to be converted to feet) 
     let stationId = data.features[0].properties.stationIdentifier; 
     let stationElevation = data.features[0].properties.elevation.value; 
     console.log('Station and Elevation are: ' + stationId, stationElevation); 
  
     // Store data to localstorage 
     storage.setItem("stationId", stationId); 
     storage.setItem("stationElevation", stationElevation); 
  
     // Request the Current Weather for this station 
     getWeather(stationId);
    }) 
   .catch(error => console.log('There was a getStationId error: ', error)) 
  } // end getStationId function

// Gets current weather information for a specific weather station from the NWS API
function getWeather(stationId) { 
   // This is the URL for current observation data 
   const URL = 'https://api.weather.gov/stations/' + stationId + '/observations/latest';
   // NWS User-Agent header (built above) will be the second parameter 
   fetch(URL, idHeader) 
   .then(function(response){
     if(response.ok){ 
      return response.json(); 
     } 
     throw new ERROR('Response not OK.');
   })
   .then(function (data) { 
     // Let's see what we got back
     console.log('From getWeather function:'); 
     console.log(data);

   
     // Store weather information to localStorage 
      //  storage.setItem('City', data["@context"][1].city);
      //  storage.setItem('State', data["@context"][1].state);
      //  storage.setItem('High', data.properties.maxTemperatureLast24Hours.value);
      //  storage.setItem('Low', data.properties.minTemperatureLast24Hours.value);
      let farenheit = Math.floor(data.properties.temperature.value * (9/5) + 32);

       storage.setItem('Temp', farenheit);
      //  storage.setItem('Precip', data.properties.precipitationLastHour.value);
       storage.setItem('Wind', data.properties.windSpeed.value);
      //  storage.setItem('Direction', data.properties.windDirection.value);
      //  storage.setItem('Gusts', data.properties.windGust.value);
       storage.setItem('Summary', data.properties.textDescription);
       storage.setItem('Latitude', data.geometry.coordinates[1]);
       storage.setItem('Longitude', data.geometry.coordinates["0"]);
       storage.setItem('Elevation', data.properties.elevation.value);
       // storage.setItem('Zip', );

       console.log(data);
  
     // Build the page for viewing 
     

     // get hourly
     getHourly();

     
    }) 
   .catch(error => console.log('There was a getWeather error: ', error)) 
  } // end getWeather function

function buildPage() {
   // read data from local storage

   let currentLocation = storage.getItem("locName") + ", " + storage.getItem("locState");

   // inject local info
   elevation.innerHTML = convertMeters(storage.getItem("Elevation"));
   long.innerHTML = storage.getItem("Longitude");
   lat.innerHTML = storage.getItem("Latitude");

   pageTitle.innerHTML = currentLocation;
   contentHeading.innerHTML = currentLocation;

   
   // inject weather info
   speed.innerHTML = Math.floor(2.237 * storage.getItem("Wind"));
   temp.innerHTML = storage.getItem("Temp");
   direction.innerHTML = storage.getItem("Direction");
   condition.innerHTML = storage.getItem("Summary");

   let weatherCondition = getCondition(storage.getItem("Summary"));
   changeSummaryImage(weatherCondition);

   hourlyContainer.innerHTML = buildHourlyData(nextHour, hourlyTemps);

   windDial(storage.getItem("Direction"));


console.log("Variables passed to the buildWC function are: " + storage.getItem("Wind") + " & " + storage.getItem("Temp"))

   buildWC(Math.floor(2.237 * storage.getItem("Wind")), storage.getItem("Temp"));

   highTemp.innerHTML = storage.getItem("High");
   lowTemp.innerHTML = storage.getItem("Low");

   gustSpeed.innerHTML = storage.getItem("Gusts");

   // hide status
   statusContainer.setAttribute('class', 'hide');
   mainContainer.setAttribute('class', '');
}
