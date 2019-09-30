const date = document.getElementById("partyTime");

document.addEventListener("DOMContentLoaded", function(){
    date.innerHTML = document.lastModified;
    console.log(document.lastModified);
})