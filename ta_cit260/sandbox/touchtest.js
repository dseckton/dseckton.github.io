const touchMe = document.getElementById("touchMe");

touchMe.addEventListener('touchstart', function() {
    touchMe.classList.remove('untouch', 'touching');
    touchMe.classList.add('touched');
})

touchMe.addEventListener('touchmove', function() {
    touchMe.classList.remove('touched', 'untouch');
    touchMe.classList.add('touching');
})

touchMe.addEventListener('touchend', function {
    touchMe.classList.remove('touching', 'touched');
    touchMe.classList.add('untouch');
})