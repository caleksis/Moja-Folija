//SLIDESHOW

var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var textBottom = document.getElementsByClassName("textBottom");
  var icon_picker = document.getElementsByClassName("icon-picker");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
      textBottom[i].style.display = "none";
  }
  for (i = 0; i < icon_picker.length; i++) {
      icon_picker[i].className = icon_picker[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  textBottom[slideIndex-1].style.display = "block"; 
  icon_picker[slideIndex-1].className += " active";
}

//FLIP CARD

$(".card").click(function () {
    $(this).toggleClass('flipped');
});