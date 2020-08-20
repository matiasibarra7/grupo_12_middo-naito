/* Barra de menú en mobile */
function openSidebar() {
    document.querySelector(".sidebar").style.display = "block";
    document.querySelector(".close-zone").style.display = "block";
}

function closeSidebar() {
    document.querySelector(".sidebar").style.display = "none";
    document.querySelector(".close-zone").style.display = "none";
}
/* Fin Barra de menú en mobile */

/* Banner dinámico en home */
let slideAutoIndex
document.addEventListener("DOMContentLoaded", function (event) {
    slideAutoIndex= 0;
    showAutoSlides()
});

function showAutoSlides() {
    let slides = document.getElementsByClassName("myAutoSlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideAutoIndex++;
    if (slideAutoIndex > slides.length) {slideAutoIndex = 1}
    slides[slideAutoIndex-1].style.display = "block";
    setTimeout(showAutoSlides, 3000); // Change image every 3 seconds
}

/* Fin Banner dinámico en home */
