var swiper = new Swiper('.mySwiper', {
   pagination: {
      el: '.swiper-pagination',
      clickable: true
   },
   autoplay: {
      delay: 3000
   },
   breakpoints: {
      300: {
         slidesPerView: 2
      },
      600: {
         slidesPerView: 3
      },
      1100: {
         slidesPerView: 6
      }
   }
});
