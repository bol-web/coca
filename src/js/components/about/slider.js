import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

export const useBrandPhilosophySlider = () => {
  new Swiper('.brand-philosophy__slider', {
    spaceBetween: 32,
    slidesPerView: 'auto',
    centeredSlides: true,
    breakpoints: {
      1201: {
        centeredSlides: false,
      },
    },
  });
};

export const useTeamSlider = () => {
  new Swiper('.team__slider', {
    spaceBetween: 32,
    slidesPerView: 'auto',
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};
