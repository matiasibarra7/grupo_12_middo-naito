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
    setTimeout(showAutoSlides, 4000); // Change image every 4 seconds
}

/* Fin Banner dinámico en home */
