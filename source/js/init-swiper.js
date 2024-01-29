import './swiper.js';
let swiperAdvantages = null;
let swiperFeedback = null;

const initSwiper = () => {
  const windowWidth = window.innerWidth;

  if (windowWidth < 1101 && !swiperAdvantages) {
    swiperAdvantages = new Swiper('.advantages__slider', {
      direction: 'horizontal',
      loop: false,
      navigation: {
        nextEl: '.advantages__slider-button--next',
        prevEl: '.advantages__slider-button--prev',
      },
    });
  } else if (windowWidth >= 1101 && swiperAdvantages) {
    swiperAdvantages.destroy();
    swiperAdvantages = null;
  }

  if (windowWidth < 1000 && !swiperFeedback) {
    swiperFeedback = new Swiper('.feedback__slider', {
      direction: 'horizontal',
      autoHeight: 'true',
      spaceBetween: 10,
      loop: false,
      navigation: {
        nextEl: '.feedback__slider-button--next',
        prevEl: '.feedback__slider-button--prev',
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
    });
  } else if (windowWidth >= 1001 && swiperFeedback) {
    swiperFeedback.destroy();
    swiperFeedback = null;
  }

};
initSwiper();

window.addEventListener('resize', () => {
  initSwiper();
});
