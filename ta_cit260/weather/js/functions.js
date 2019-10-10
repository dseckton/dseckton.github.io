const navButton = document.getElementById("nav-toggle");
const menuNav = document.getElementById("menu-nav");
const menuToggle = document.getElementById("menu-toggle")
const disabler = document.getElementById("disabler");

navButton.addEventListener("click", function() {
    menuToggle.classList.toggle("closed");
    menuNav.classList.toggle("closed");
    disabler.classList.toggle("closed");
})

const currentDate = document.getElementById("current-date");

let output = "";

const d = new Date();

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