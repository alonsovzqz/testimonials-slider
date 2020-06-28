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
      if (slide.classList.contains("backOutRight")) {
        slide.classList.remove("backOutRight");
      } else if (slide.classList.contains("backOutLeft")) {
        slide.classList.remove("backOutLeft");
      } else if (slide.classList.contains("backInLeft")) {
        slide.classList.remove("backInLeft");
      } else if (slide.classList.contains("backInRight")) {
        slide.classList.remove("backInRight");
      }
    });
  }, 1000);

  clearTimeout();
}

SLIDER_PREV.addEventListener("click", function () {
  TESTIMONIALS[currentSlider].classList.add("backOutRight");
  TESTIMONIALS[previousSlider].classList.add("backInLeft");

  TESTIMONIALS[currentSlider].classList.remove("item--active");
  TESTIMONIALS[previousSlider].classList.add("item--active");

  getCurrentSlider();

  removeAnimationSliderClasses();
});

SLIDER_NEXT.addEventListener("click", function () {
  TESTIMONIALS[currentSlider].classList.add("backOutLeft");
  TESTIMONIALS[nextSlider].classList.add("backInRight");

  TESTIMONIALS[currentSlider].classList.remove("item--active");
  TESTIMONIALS[nextSlider].classList.add("item--active");

  getCurrentSlider();

  removeAnimationSliderClasses();
});

getCurrentSlider();
