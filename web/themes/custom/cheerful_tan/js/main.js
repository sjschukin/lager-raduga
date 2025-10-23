(function () {
  "use strict";

  // Team Slider Start
  const teamSlider = new Swiper(".team-slider", {
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".array-prev",
      prevEl: ".array-next",
    },
    pagination: {
      el: ".dot",
      clickable: true,
    },
    breakpoints: {
      1299: {
        slidesPerView: 4,
      },
      1199: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  // Testimonial Slider Start
  const testimonialSlider = new Swiper(".testimonial-slider", {
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".dot",
      clickable: true,
    },
    breakpoints: {
      1199: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  // Last Photos Slider Start
  const instagramBannerSlider = new Swiper(".last-photos-banner-slider", {
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".array-prev",
      prevEl: ".array-next",
    },
    breakpoints: {
      1399: {
        slidesPerView: 6,
      },
      1199: {
        slidesPerView: 5,
      },
      991: {
        slidesPerView: 4,
      },
      767: {
        slidesPerView: 3,
      },
      650: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  // AOS Animation Start
  AOS.init();

  // Displaying Loader Start
  function loader() {
    window.addEventListener('load', function () {
      const preloaders = document.querySelectorAll('.preloader');

      preloaders.forEach(function (preloader) {
        // Animate loader off screen
        preloader.classList.add('loaded');

        setTimeout(function () {
          preloader.style.transition = 'opacity 0.3s ease-out';
          preloader.style.opacity = '0';
          preloader.addEventListener('transitionend', function hide() {
            preloader.style.display = 'none';
            preloader.removeEventListener('transitionend', hide);
          });
        }, 600);
      });
    });
  }

  loader();

})();
