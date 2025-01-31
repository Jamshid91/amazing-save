const best_prices = new Swiper('.best-prices', {
    loop: false,
    navigation: {
        nextEl: '.best-prices-next',
        prevEl: '.best-prices-prev',
      },
      pagination: {
        el: '.best-prices-pagination',
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