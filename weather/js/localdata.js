"use strict";


// declare variables
let pageNav = document.getElementById('page-nav');
let statusContainer = document.getElementById('status');
let contentContainer = document.getElementById('main-content');

let weatherURL = "https://dseckton.github.io/weather/js/weather.json";

// call fetch function
fetchData(weatherURL);

// fetch function
function fetchData(weatherURL){
  let cityName = 'Greenville'; // The data we want from the weather.json file
  fetch(weatherURL)
  .then(function(response) {
  if(response.ok){
  return response.json();
  }
  throw new ERROR('Network response was not OK.');
  })
  .then(function(data){
    // Check the data object that was retrieved
    console.log(data);
    // data is the full JavaScript object, but we only want the greenville part
    // shorten the variable and focus only on the data we want to reduce typing
    let g = data[cityName];

    // ************ Get the content ******************************

    // Get the location data
    let locName = g.City;
    let locState = g.State;
    // Put them together
    let fullName = locName+', '+locState;
    // See if it worked
    console.log('fullName is: '+fullName);

    // Get the temperature data
    let locHigh = g.High;
    let locLow = g.Low;
    let locTemp = g.Temp;

    console.log('High: ' + locHigh);
    console.log('Low: ' + locLow);
    console.log('Temp: ' + locTemp);

    // Get the wind data 
    let locWind = g.Wind;
    let locDirection = g.Direction;
    let locGusts = g.Gusts;

    console.log('Wind: ' + locWind);
    console.log('Direction: ' + locDirection);
    console.log('Gusts: ' + locGusts);

    // Get the current conditions
    let locCondition = g.Summary;
    // let locPrecipitation = g.Precip;

    console.log('Condition: ' + locCondition);

    // Get the hourly data 
    let locHourly = g.Hourly;

    console.log('Hourly Data: ' + locHourly)

    // get area info
    let locZip = g.Zip;
    let locLatitude = g.Latitude;
    let locLongitude = g.Longitude;
    let locElevation = g.Elevation;

    console.log('Zip: ' + locZip);
    console.log('Latitude: ' + locLatitude);
    console.log('Longitude: ' + locLongitude);
    console.log('Elevation: ' + locElevation)

    // ************ Display the content ******************************
    // Set the title with the location name at the first
    // Gets the title element so it can be worked with
    let pageTitle = document.getElementById('page-title');
    // Create a text node containing the full name 
    let fullNameNode = document.createTextNode(fullName);
    // inserts the fullName value before any other content that might exist
    pageTitle.insertBefore(fullNameNode, pageTitle.childNodes[0]);
    // When this is done the title should look something like this:
    // Greenville, SC | The Weather Site

    // Set the Location information
    // Get the h1 to display the city location
    let contentHeading = document.getElementById('location');
    contentHeading.innerHTML = fullName;
    // The h1 in main h1 should now say "Greenville, SC"

    // set local information
    let zip = document.getElementById('zip');
    let elevation = document.getElementById('elevation');
    let lat = document.getElementById('lat');
    let long = document.getElementById('long');

    zip.innerHTML = locZip;
    elevation.innerHTML = convertMeters(locElevation);
    lat.innerHTML = locLatitude;
    long.innerHTML = locLongitude;

    console.log(zip.innerHTML + lat.innerHTML + long.innerHTML + elevation.innerHTML);

    // Set the temperature information
    let actual = document.getElementById('actual');
    let high = document.getElementById('high');
    let low = document.getElementById('low');
    let tempFeel = document.getElementById('tempFeel');

    actual.innerHTML = locTemp;
    high.innerHTML = locHigh;
    low.innerHTML = locLow;

    console.log(actual.innerHTML + high.innerHTML + low.innerHTML + tempFeel.innerHTML);

    // Set the wind information
    let windspeed = document.getElementById('windspeed');
    let direction = document.getElementById('direction');
    let gustspeed = document.getElementById('gustspeed');
    

    windspeed.innerHTML = locWind;
    direction.innerHTML = locDirection;
    gustspeed.innerHTML = locGusts;

    windDial(locDirection);


    // change feels like temp
    tempFeel.innerHTML = buildWC(windspeed, actual);

    // Set the current conditions information
    let condition = document.getElementById('condition');

    condition.innerHTML = locCondition;

    // Set the hourly temperature information
    let hourlyTemp = document.getElementById('hourly-temp');

    

    hourlyTemp.innerHTML = buildHourlyData(nextHour, hourlyTemp);
    console.log(hourlyTemp);

    // Change the status of the containers
    contentContainer.setAttribute('class', ''); // removes the hide class
    statusContainer.setAttribute('class', 'hide'); // hides the status container
  })
  .catch(function(error){
  console.log('There was a fetch problem: ', error.message);
  statusContainer.innerHTML = 'Sorry, the data could not be processed.';
  })
}