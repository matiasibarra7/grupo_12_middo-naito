let slideIndex
let slideAutoIndex
document.addEventListener("DOMContentLoaded", function (event) {
    slideIndex = 1;
    showSlides(slideIndex);

    slideAutoIndex= 0;
    showAutoSlides()
});
  
  

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


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