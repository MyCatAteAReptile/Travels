// Swiper 7.4.1
import Swiper from './vendor/swiper';
import './vendor/focus-visible-polyfill';
import {map as createMap, tileLayer as createTitleLayers, icon as createIcon, marker as createMarker} from './vendor/leaflet';
import {addVideoPlayer} from './modules/custom/video';
import {addAudioPlayer} from './modules/custom/audio';


let advantagesSlider = null;

const isMobile = () => {
  return /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone|Opera Mini/i.test(navigator.userAgent);
};

export const heroSlider = new Swiper('.hero__slider', {
  loop: true,
  pagination: {
    el: '.hero__pagination',
    clickable: true,
    renderBullet: (index, className) => {
      return `<button class="hero__pagination-btn ${className}" type="button" aria-label="Перейти к ${index + 1} слайду"></button>`;
    },
  },
});

// const heroDublicateSlides =
//   document.querySelector('hero__list').querySelectorAll('.swiper-slide-duplicate, .swiper-slide-duplicate-prev, .swiper-slide-duplicate-next');

// heroDublicateSlides.forEach((slide) => {
//   let slideElements = slide.querySelectorAll('a, button');
//   slideElements.forEach((e) => {
//     e.tabindex = -1;
//   });
// });

// let notActiveSlides = document.querySelectorAll('.hero__item:not(.swiper-slide-active)');
// notActiveSlides.forEach((slide) => {
//   let slideElements = slide.querySelectorAll('button, a');
//   slideElements.forEach((e) => {
//     e.tabindex = -1;
//   });
// });

let initialNotActiveSlides = document.querySelectorAll('.hero__item:not(.swiper-slide-active)');
initialNotActiveSlides.forEach((slide) => {
  let slideElements = slide.querySelectorAll('button, a');
  slideElements.forEach((e) => {
    e.tabIndex = '-1';
  });
});

heroSlider.on('touchStart', () => {
  if (!isMobile()) {
    heroSlider.allowTouchMove = false;
  } else {
    heroSlider.allowTouchMove = true;
  }
}); // realIndex

heroSlider.on('slideChange', () => {
  const videoPlayers = document.querySelectorAll('.hero__video');
  const audioPlayers = document.querySelectorAll('.hero__audio');

  audioPlayers.forEach((player) => {
    player.innerHTML = `
    <picture class="hero__audio-cover">
    <source type="image/webp" srcset="./img/hero/audio-player-no-play@1x.webp, ./img/hero/audio-player-no-play@2x.webp 2x" width="340" height="220">
    <img src="./img/hero/audio-player-no-play@1x.png" srcset="./img/hero/audio-player-no-play@2x.png 2x" width="340" height="220" alt="Шаблон аудиоплеера." loading="lazy">
  </picture>
  <button class="hero__audio-btn hero__audio-play" type="button" aria-label="Воспроизвести." data-src="https://music.yandex.ru/iframe/#album/25474374">
    <svg width="47" height="47" aria-hidden="true" focusable="false">
      <use href="./img/sprite.svg#play-audio"></use>
    </svg>
  </button>
  `;
  });
  addAudioPlayer();

  videoPlayers.forEach((player) => {
    player.innerHTML = `
    <picture>
    <source type="image/webp" media="(max-width: 1199px)" srcset="./img/hero/man-in-mountains-tablet@1x.webp, ./img/hero/man-in-mountains-tablet@2x.webp 2x" width="442" height="300">
    <source type="image/webp" srcset="./img/hero/man-in-mountains-desktop@1x.webp, ./img/hero/man-in-mountains-desktop@2x.webp 2x" width="482" height="317">
    <source media="(max-width: 1199px)" srcset="./img/hero/man-in-mountains-tablet@1x.jpg, ./img/hero/man-in-mountains-tablet@2x.jpg 2x" width="442" height="300">
    <img src="./img/hero/man-in-mountains-desktop@1x.jpg" srcset="./img/hero/man-in-mountains-desktop@2x.jpg 2x" width="482" height="317" alt="Альпинист на вершине горы.">
  </picture>
  <button class="video__btn" type="button" aria-label="Воспроизвести видео.">
    <svg class="video__icon" width="12" height="22" aria-hidden="true" focusable="false">
      <use href="./img/sprite.svg#play-video"></use>
    </svg>
  </button>
  `;
  });
  addVideoPlayer();

});

heroSlider.on('slideChangeTransitionEnd', () => {
  let notActiveSlides = document.querySelectorAll('.hero__item:not(.swiper-slide-active)');
  notActiveSlides.forEach((slide) => {
    let slideElements = slide.querySelectorAll('button, a');
    slideElements.forEach((e) => {
      e.tabIndex = -1;
    });
  });

  let activeElements = document.querySelector('.hero__item:not(.swiper-slide-duplicate):not(.swiper-slide-duplicate-prev):not(.swiper-slide-duplicate-next).swiper-slide-active').querySelectorAll('button, a');
  activeElements.forEach((e) => {
    e.tabIndex = 0;
  });
});


// const heroSlide = document.querySelector('.hero__item');

// heroSlide.onfocusin = function () {
//   // Reset the scroll

//   heroSlide.scrollLeft = 0;
//   // WebKit sets the scroll after the event, we need
//   // to reset it with zero timeout. Keep the first
//   // reset to prevent jittering in other browsers
//   setTimeout(function () {
//     heroSlide.scrollLeft = 0;
//   }, 0);

//   // switch to the slide containing the event
//   if (heroSlider.realIndex < 2) {
//     heroSlider.slideNext(300, false);
//   }
// };

// // Now use the function bound to `onfocusin` in
// // a regular `addEventListener`
// if (heroSlide.addEventListener) {
//   // `true` turns on the capturing
//   heroSlide.addEventListener('focus', heroSlide.onfocusin, true);
// }

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
