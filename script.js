let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;

document.
  getElementById('carousel-button-next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('carousel-button-prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

  function updateSlidePosition() {
    for (let slide of slides) {
      slide.classList.remove('carousel-item-visible');
      slide.classList.add('carousel-item-hidden');
    }

    slides[slidePosition].classList.add('carousel-item-visible');
  }

  function moveToPrevSlide() {
    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
      slidePosition ++;
    }

    updateSlidePosition();
  }

  function moveToNextSlide() {
    if (slidePosition === 0) {
      slidePosition = totalSlides - 1;
    } else {
      slidePosition --;
    }

    updateSlidePosition();
  }


  $(document).ready(main);
		
  var contador = 1;

  function main (){
    $('.menu-toggle').click(function(){
      if (contador == 1){
        $('.links').animate({
          left: '0'
        });
        contador = 0;
      } else {
        contador = 1;
        $('.links').animate({
          left: '-100%'
        });
      }
    });

  };