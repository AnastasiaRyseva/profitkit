import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const ProductSwiper = new Swiper('.product-swiper', {
    // autoplay: {
    //     delay: 6500,
    // },
    loop: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    spaceBetween: 20,
    breakpoints: {
      574: {
        slidesPerView: 'auto',
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1326: {
        slidesPerView: 4,
        spaceBetween: 15,
      }
    }
  });
  
export const PictureSlider = new Swiper('.product--img-slider', {
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })