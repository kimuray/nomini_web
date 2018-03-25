(function($) {
  $(function() {
    $('#nav-toggle').click(function(){
      $('#mobile-global-nav').toggleClass('open');
      $('#mobile-global-nav').css('top', (scrollTop() + 67) + 'px');
      $('#nav-toggle').toggleClass('open');
    });
  });

  $(function() {
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      slidesPerView: 1,
    });
  });
})(jQuery);
