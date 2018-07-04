/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

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
  var dots = document.getElementsByClassName("icon-picker");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

//FLIPCARD

// $('#js-flip-1').toggle(
//     function() {
//         $('#js-flip-1 .card').addClass('flipped');
//     },
//     function() { $('#js-flip-1 .card').removeClass('flipped');
//     }
// );

// $('#js-flip-2').bind('click mouseleave', function() {
//     $('#js-flip-2 .card').toggleClass('flipped');
// });

// $('#js-flip-3').bind({
//     click: function() {
//         $('#js-flip-3 .card').toggleClass('flipped');
//     },
//     mouseleave: function() {
//         $('#js-flip-3 .card').toggleClass('flipped');
//     }
// });