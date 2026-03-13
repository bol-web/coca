import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

export const useBlogSlider = () => {
  new Swiper('.blog__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlides: true,

    breakpoints: {
      1201: {
        centeredSlides: false,
      },
    },
  });
};

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlides: true,
    
    navigation: {
      prevEl: '.articles__btn--prev',
      nextEl: '.articles__btn--next',
    },

    breakpoints: {
      1201: {
        centeredSlides: false,
      },
    },
  });
};
