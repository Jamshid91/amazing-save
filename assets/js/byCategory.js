const byCategory = new Swiper('.swiper-byCategory', {
    loop: false,
    breakpoints: {
        0: {
          slidesPerView: 1.5,
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 2.5,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3.2,
          spaceBetween: 16,
        },
        992: {
          slidesPerView: 4.2,
          spaceBetween: 16,
        },
        1199: {
          slidesPerView: 5.2,
          spaceBetween: 16,
        },
        1450: {
            spaceBetween: 20,
            slidesPerView: 6,
        },
  }
  });