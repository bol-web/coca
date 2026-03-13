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
