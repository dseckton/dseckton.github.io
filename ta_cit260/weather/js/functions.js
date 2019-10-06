const navButton = document.getElementById("nav-toggle");
const menuNav = document.getElementById("menu-nav");
const menuArrow = document.getElementById("menu-arrow")
const disabler = document.getElementById("disabler");

navButton.addEventListener("click", function() {
    menuArrow.classList.toggle("closed");
    menuNav.classList.toggle("closed");
    disabler.classList.toggle("closed");
})