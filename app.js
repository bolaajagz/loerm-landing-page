let slideIndex = 0
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('img_slides')  
  for (let index = 0; index < slides.length; index++) {
         slides[index].style.display = 'none';
    
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1
  }

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000);
}


// SECOND SLIDER
let indexSlide= 0
slidesShow();

function slidesShow() {
  let i;
  let slide = document.getElementsByClassName('banners')  
  for (let index = 0; index < slide.length; index++) {
         slide[index].style.display = 'none';
    
  }
  indexSlide++;

  if (indexSlide > slide.length) {
    indexSlide = 1
  }

  slide[indexSlide-1].style.display = "block";  
  setTimeout(slidesShow, 10000);
}

// FOR NAV BAR
// function myFunction() {
//   var x = document.getElementsByClassName("links");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }

const grabnavlinks = document.querySelector('.main_nav');
const grabhamburger = document.querySelector('.hamburger');

grabhamburger.addEventListener('click', respond);

function respond() {
    grabnavlinks.classList.toggle('show')
}
