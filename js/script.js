const TESTIMONIALS = document.querySelectorAll(".slider__item");
const SLIDER_PREV = document.querySelector(".slider__control.control--prev");
const SLIDER_NEXT = document.querySelector(".slider__control.control--next");
let currentSlider = 0;
let nextSlider = currentSlider + 1;
let previousSlider = 0;

SLIDER_PREV.addEventListener("click", function () {
  TESTIMONIALS[currentSlider].classList.remove("item--active");
  if (currentSlider === 0) {
    currentSlider = TESTIMONIALS.length - 1;
  } else {
    currentSlider--;
  }
  TESTIMONIALS[currentSlider].classList.add("item--active");
});

SLIDER_NEXT.addEventListener("click", function () {
  TESTIMONIALS[currentSlider].classList.add("slider__item-prev");
  TESTIMONIALS[nextSlider].classList.add("slider__item-next");

  TESTIMONIALS[currentSlider].classList.remove("item--active");
  TESTIMONIALS[nextSlider].classList.add("item--active");

  currentSlider = nextSlider;
  nextSlider = nextSlider === TESTIMONIALS.length - 1 ? 0 : nextSlider + 1;

  setTimeout(function () {
    TESTIMONIALS.forEach((slide) => {
      if (slide.classList.contains("slider__item-next")) {
        slide.classList.remove("slider__item-next");
      } else if (slide.classList.contains("slider__item-prev")) {
        slide.classList.remove("slider__item-prev");
      }
    });
  }, 500);

  clearTimeout();
});
