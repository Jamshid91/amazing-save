const highlighted_deals = new Swiper('.highlighted-deals', {
    loop: false,
    navigation: {
        nextEl: '.highlighted-deals-next',
        prevEl: '.highlighted-deals-prev',
      },
      pagination: {
        el: '.highlighted-deals-pagination',
        clickable: 'true',
    },
    breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1199: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        1400: {
            spaceBetween: 20,
            slidesPerView: 5,
        },
  }
  });