var slideIndex = 1;
updateSlides(slideIndex);

function changeSlides(index) {
  updateSlides(slideIndex += index);
}

function updateSlides(index) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (index > slides.length) {slideIndex = 1}
  if (index < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++)
      slides[i].style.display = "none";

  slides[slideIndex-1].style.display = "block";
}