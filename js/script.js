const TESTIMONIALS = document.querySelectorAll(".slider__item");
const SLIDER_PREV = document.querySelector(".slider__control.control--prev");
const SLIDER_NEXT = document.querySelector(".slider__control.control--next");
let currentSlider = 0;

SLIDER_PREV.addEventListener("click", function (e) {
  TESTIMONIALS[currentSlider].classList.remove("item--active");
  TESTIMONIALS[currentSlider].classList.add("slider__item-next");
  currentSlider--;
  TESTIMONIALS[currentSlider].classList.add(
    "item--active",
    "slider__item-prev"
  );
  setTimeout(function () {
    TESTIMONIALS[currentSlider].classList.remove("slider__item-prev");
    TESTIMONIALS[currentSlider + 1].classList.remove("slider__item-next");
  }, 50);
  SLIDER_NEXT.classList.remove("disabled");

  if (currentSlider === 0) {
    SLIDER_PREV.classList.add("disabled");
    e.preventDefault();
  }
});

SLIDER_NEXT.addEventListener("click", function (e) {
  TESTIMONIALS[currentSlider].classList.remove("item--active");
  TESTIMONIALS[currentSlider].classList.add("slider__item-prev");
  currentSlider++;
  TESTIMONIALS[currentSlider].classList.add(
    "item--active",
    "slider__item-next"
  );
  setTimeout(function () {
    TESTIMONIALS[currentSlider].classList.remove("slider__item-next");
    TESTIMONIALS[currentSlider - 1].classList.remove("slider__item-prev");
  }, 50);
  SLIDER_PREV.classList.remove("disabled");

  if (TESTIMONIALS.length === currentSlider + 1) {
    SLIDER_NEXT.classList.add("disabled");
    e.preventDefault();
  }
});
