// getting DOM elements

const pageBody = document.getElementById("pageBody");
const pageHeader = document.getElementById("pageHeader");
const contentTitle = document.getElementById("contentTitle");
const pageMain = document.getElementById("pageMain");

const navToggle = document.getElementById("navToggle");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

const stickyContainer = document.getElementById("stickyContainer");
const stickyNavMenu = document.getElementById("stickyNavMenu");
const stickyMenuToggle = document.getElementById("stickyMenuToggle");
const stickyNavToggle = document.getElementById("stickyNavToggle");

const titleName = document.getElementById("titleName");

const acmeModalButton = document.getElementById("acmeModalButton");
const acmeVidModal = document.getElementById("acmeVidModal");
const closeModal = document.getElementById("closeModal");

const logoContainer = document.getElementById("logoContainer");

// let headerHeight = logoContainer.clientHeight + 20 + "px";
// console.log("logoContainer.clientHeight: " + logoContainer.clientHeight);
// pageMain.style.marginTop = headerHeight;


// nav menu opening and closing function
function toggleNav() {
    console.log("function runs...")
    if (navMenu.classList.contains("menu-open")) {
        menuToggle.classList.remove("menu-open");
        navMenu.classList.remove("menu-open");
        menuToggle.classList.add("menu-closed");
        navMenu.classList.add("menu-closed");

        stickyMenuToggle.classList.remove("menu-open");
        stickyNavMenu.classList.remove("menu-open");
        stickyMenuToggle.classList.add("menu-closed");
        stickyNavMenu.classList.add("menu-closed");
    }
    else if (navMenu.classList.contains("menu-closed")) {
        menuToggle.classList.remove("menu-closed");
        navMenu.classList.remove("menu-closed");
        menuToggle.classList.add("menu-open");
        navMenu.classList.add("menu-open");

        stickyMenuToggle.classList.remove("menu-closed");
        stickyNavMenu.classList.remove("menu-closed");
        stickyMenuToggle.classList.add("menu-open");
        stickyNavMenu.classList.add("menu-open");
    }
}

navToggle.addEventListener("click", toggleNav);
stickyNavToggle.addEventListener("click", toggleNav);

console.log ("Load up window width is: " + window.innerWidth);

(function () {
    if (window.innerWidth > 550) {
        menuToggle.classList.remove("menu-closed");
        navMenu.classList.remove("menu-closed");
        menuToggle.classList.add("menu-open");
        navMenu.classList.add("menu-open");

        stickyMenuToggle.classList.remove("menu-closed");
        stickyNavMenu.classList.remove("menu-closed");
        stickyMenuToggle.classList.add("menu-open");
        stickyNavMenu.classList.add("menu-open");
    }
    else {
        menuToggle.classList.remove("menu-open");
        navMenu.classList.remove("menu-open");
        menuToggle.classList.add("menu-closed");
        navMenu.classList.add("menu-closed");

        stickyMenuToggle.classList.remove("menu-open");
        stickyNavMenu.classList.remove("menu-open");
        stickyMenuToggle.classList.add("menu-closed");
        stickyNavMenu.classList.add("menu-closed");
        console.log("Page opened in mobile view")
    }
})();

// function to test the menu status, and open it if it's closed when window resizes
window.addEventListener("resize", function () {
    console.log ("Window width is: " + window.innerWidth);
    if (window.innerWidth >= 550) {
        menuToggle.classList.remove("menu-closed");
        navMenu.classList.remove("menu-closed");
        menuToggle.classList.add("menu-open");
        navMenu.classList.add("menu-open");

        stickyMenuToggle.classList.remove("menu-closed");
        stickyNavMenu.classList.remove("menu-closed");
        stickyMenuToggle.classList.add("menu-open");
        stickyNavMenu.classList.add("menu-open");
    }
    else if (this.window.innerWidth < 550) {
        menuToggle.classList.remove("menu-open");
        navMenu.classList.remove("menu-open");
        menuToggle.classList.add("menu-closed");
        navMenu.classList.add("menu-closed");

        stickyMenuToggle.classList.remove("menu-open");
        stickyNavMenu.classList.remove("menu-open");
        stickyMenuToggle.classList.add("menu-closed");
        stickyNavMenu.classList.add("menu-closed");
    }
    // pageMain.style.marginTop = headerHeight;
    // console.log("headerHeight is: " + headerHeight);
});


acmeModalButton.addEventListener("click", openAcmeModal);
closeModal.addEventListener("click", closeAcmeModal);


// functions to open or close acme modal
function openAcmeModal() {
    acmeVidModal.classList.remove("closed");
    acmeVidModal.classList.add("open");
    pageBody.classList.add("noScroll");
    console.log("Opened ACME Modal");
}

function closeAcmeModal() {
    acmeVidModal.classList.remove("open");
    acmeVidModal.classList.add("closed");
    pageBody.classList.remove("noScroll");
    console.log("Closed ACME Modal");
}


// functions to open or close nav menu



window.addEventListener("scroll", function() {
    let headerBoundary = pageHeader.getBoundingClientRect();
    // if (window.innerWidth <= 550) {
        if (headerBoundary.bottom <= 0) {
            stickyContainer.classList.remove("offscreen");        stickyContainer.classList.add("onscreen");
        } else if (headerBoundary.bottom > 0) {
            stickyContainer.classList.remove("onscreen");
            stickyContainer.classList.add("offscreen");
        }
    }
);