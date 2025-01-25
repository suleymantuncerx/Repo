var swiper = new Swiper('.mySwiper', {
   pagination: {
      el: '.swiper-pagination',
      clickable: true
   },

   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
   },

   breakpoints: {
      0: {
         slidesPerView: 2
      },
      540: {
         slidesPerView: 3
      },
      992: {
         slidesPerView: 4
      },
      1200: {
         slidesPerView: 6
      }
   }
});
