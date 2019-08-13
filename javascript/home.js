// getting DOM elements

const pageBody = document.getElementById("pageBody");
const pageHeader = document.getElementById("pageHeader");
const contentTitle = document.getElementById("contentTitle");
const pageMain = document.getElementById("pageMain");

const navToggle = document.getElementById("navToggle");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

const titleName = document.getElementById("titleName");

const acmeModalButton = document.getElementById("acmeModalButton");
const acmeVidModal = document.getElementById("acmeVidModal");

let headerHeight = pageHeader.clientHeight;

// nav menu opening and closing function
navToggle.addEventListener("click", function() {
    if (menuToggle.classList.contains("menu-open")) { //close
        menuToggle.classList.remove("menu-open");
        navMenu.classList.remove("menu-open");

        menuToggle.classList.add("menu-closed");
        navMenu.classList.add("menu-closed");
        console.log("Closed Navigation Menu");
    }
    else if (menuToggle.classList.contains("menu-closed")) { //open
        menuToggle.classList.remove("menu-closed");
        navMenu.classList.remove("menu-closed");

        menuToggle.classList.add("menu-open");
        navMenu.classList.remove("menu-open");
        console.log("Opened Navigation Menu");
    }
    else {
        return Error;
    }
});

console.log (window.innerWidth);

// function to test the menu status, and open it if it's closed when window resizes
window.addEventListener("resize", function() {
    console.log (window.innerWidth);
    if (window.innerWidth >= 550) {
        if (menuToggle.classList.contains("menu-closed")) {
            menuToggle.classList.remove("menu-closed");
            navMenu.classList.remove("menu-closed");
    
            menuToggle.classList.add("menu-open");
            navMenu.classList.add("menu-open");
            console.log("Opened Navigation Menu");
        }
    }
});


// function to open acme modal
function openAcmeModal() {
    acmeVidModal.classList.remove("closed");
    acmeVidModal.classList.add("open");
    console.log("Opened ACME Modal");
}

// function to close acme modal
function closeAcmeModal() {
    acmeVidModal.classList.remove("open");
    acmeVidModal.classList.add("closed");
    console.log("Closed ACME Modal");
}

window.addEventListener("scroll", function(){ 
    let titleBoundary = contentTitle.getBoundingClientRect();
    if (titleBoundary.top <= 0) {
        pageHeader.classList.add("sticky");
        pageMain.style.paddingTop = (headerHeight + 20 + "px");

        if (window.innerWidth <= 550) {
            if (menuToggle.classList.contains("menu-open")) { //close
                menuToggle.classList.remove("menu-open");
                navMenu.classList.remove("menu-open");
        
                menuToggle.classList.add("menu-closed");
                navMenu.classList.add("menu-closed");
                console.log("Closed Navigation Menu");
            }
        }
    }
    if (titleBoundary.top >= 0) {
        pageHeader.classList.remove("sticky");
        pageMain.style.removeProperty("padding-top")

    }
});

