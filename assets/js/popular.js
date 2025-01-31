const popular = new Swiper('.popular', {
    loop: false,
    navigation: {
        nextEl: '.popular-next',
        prevEl: '.popular-prev',
      },
      pagination: {
        el: '.popular-pagination',
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