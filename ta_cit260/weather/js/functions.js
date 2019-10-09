const navButton = document.getElementById("nav-toggle");
const menuNav = document.getElementById("menu-nav");
const menuToggle = document.getElementById("menu-toggle")
const disabler = document.getElementById("disabler");

navButton.addEventListener("click", function() {
    menuToggle.classList.toggle("closed");
    menuNav.classList.toggle("closed");
    disabler.classList.toggle("closed");
})