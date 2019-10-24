const touchMe = document.getElementById("touchMe");

touchMe.addEventListener('touchstart', function() {
    touchMe.classList.add('touched');
})