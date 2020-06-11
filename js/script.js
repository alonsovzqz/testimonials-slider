const TESTIMONIALS = document.querySelectorAll(".slider__item");
const SLIDER_PREV = document.querySelector(".slider__control.control--prev");
const SLIDER_NEXT = document.querySelector(".slider__control.control--next");
let currentSlider = 0;
let nextSlider = 0;
let previousSlider = 0;

function getCurrentSlider() {
  TESTIMONIALS.forEach((slide, index) => {
    if (slide.classList.contains("item--active")) {
      currentSlider = index;
      nextSlider =
        currentSlider === TESTIMONIALS.length - 1 ? 0 : nextSlider + 1;
      previousSlider =
        currentSlider === 0 ? TESTIMONIALS.length - 1 : previousSlider - 1;
    }
  });
}

function removeAnimationSliderClasses() {
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
}

SLIDER_PREV.addEventListener("click", function () {
  TESTIMONIALS[currentSlider].classList.add("slider__item-next");
  TESTIMONIALS[previousSlider].classList.add("slider__item-prev");

  TESTIMONIALS[currentSlider].classList.remove("item--active");
  TESTIMONIALS[previousSlider].classList.add("item--active");

  getCurrentSlider();

  removeAnimationSliderClasses();
});

SLIDER_NEXT.addEventListener("click", function () {
  TESTIMONIALS[currentSlider].classList.add("slider__item-prev");
  TESTIMONIALS[nextSlider].classList.add("slider__item-next");

  TESTIMONIALS[currentSlider].classList.remove("item--active");
  TESTIMONIALS[nextSlider].classList.add("item--active");

  getCurrentSlider();

  removeAnimationSliderClasses();
});

getCurrentSlider();
