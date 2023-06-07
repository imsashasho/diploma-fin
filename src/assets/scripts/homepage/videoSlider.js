import Swiper, { Navigation, Controller } from 'swiper';

Swiper.use([Navigation, Controller]);

const bookSwiper = new Swiper('.book-item-swiper', {
  keyboard: true,
  spaceBetween: 50,
  centeredSlides: true,
  initialSlide: 0,
  slidesPerView: 1,
  preloadImages: false,
  lazy: true,
  speed: 1500,
  navigation: {
    nextEl: '.book-item-button-next',
    prevEl: '.book-item-button-prev',
  },
});
