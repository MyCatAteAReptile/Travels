// Swiper 7.4.1
import Swiper from './vendor/swiper';
import './vendor/focus-visible-polyfill';
import {map as createMap, tileLayer as createTitleLayers, icon as createIcon, marker as createMarker} from './vendor/leaflet';

let advantagesSlider = null;

export const heroSlider = new Swiper('.hero__slider', {
  pagination: {
    el: '.hero__pagination',
    clickable: true,
    renderBullet: (index, className) => {
      return `<button class="hero__pagination-btn ${className}" type="button" aria-label="Перейти к ${index + 1} слайду"></button>`;
    },
  },
});

export const toursSlider = new Swiper('.closest-tours__slider', {
  breakpoints: {
    0: {
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 100,
    },
    768: {
      centeredSlides: false,
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1200: {
      centeredSlides: false,
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: '.closest-tours__next',
    prevEl: '.closest-tours__prev',
  },
});

export const instructorsSlider = new Swiper('.instructors__slider', {
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: '.instructors__next',
    prevEl: '.instructors__prev',
  },
});

export const reviewsSlider = new Swiper('.reviews__slider', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  navigation: {
    nextEl: '.reviews__next',
    prevEl: '.reviews__prev',
  },
});

const createAdvantagesSlider = () => {
  return new Swiper('.advantages__slider', {
    loop: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.advantages__next',
      prevEl: '.advantages__prev',
    },
  });
};

if (window.matchMedia('(min-width: 1200px)').matches) {
  advantagesSlider = createAdvantagesSlider();
}

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 1200px)').matches) {
    if (!advantagesSlider) {
      advantagesSlider = createAdvantagesSlider();
    }
  } else {
    if (advantagesSlider) {
      advantagesSlider.destroy();
      advantagesSlider = null;
    }
  }
});

export const photoGallerySlider = new Swiper('.photo-gallery__slider', {
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.photo-gallery__next',
    prevEl: '.photo-gallery__prev',
  },
});

if (document.querySelector('#map')) {
  document.querySelector('#map').querySelector('picture').remove();

  const coordinate = [55.77496078146944, 37.63265222886684];
  const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  const map = createMap('map', {
    center: coordinate,
    zoom: 16,
    scrollWheelZoom: false,
  });

  const icon = createIcon({
    iconUrl: './img/svg/map-marker.svg',
    iconSize: [48, 48],
  });

  createTitleLayers(url).addTo(map);
  createMarker(coordinate, {icon}).addTo(map);
}
