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
         slidesPerView: 1
      },
      540: {
         slidesPerView: 2
      },
      992: {
         slidesPerView: 2
      },
      1200: {
         spacebetween: 1,
         slidesPerView: 5
      }
   }
});
   
                   
                