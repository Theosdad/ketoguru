import"./swiper.js";let swiperAdvantages=null,swiperFeedback=null;const initSwiper=()=>{const e=window.innerWidth;e<1101&&!swiperAdvantages?swiperAdvantages=new Swiper(".advantages__slider",{direction:"horizontal",loop:!1,navigation:{nextEl:".advantages__slider-button--next",prevEl:".advantages__slider-button--prev"}}):e>=1101&&swiperAdvantages&&(swiperAdvantages.destroy(),swiperAdvantages=null),e<1e3&&!swiperFeedback?swiperFeedback=new Swiper(".feedback__slider",{direction:"horizontal",autoHeight:"true",spaceBetween:10,loop:!1,navigation:{nextEl:".feedback__slider-button--next",prevEl:".feedback__slider-button--prev"},slidesPerView:1,slidesPerGroup:1}):e>=1001&&swiperFeedback&&(swiperFeedback.destroy(),swiperFeedback=null)};initSwiper(),window.addEventListener("resize",(()=>{initSwiper()}));