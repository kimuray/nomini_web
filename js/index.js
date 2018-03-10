(function($) {
  $(function() {
    $('#nav-toggle').click(function(){
      $('#mobile-global-nav').toggleClass('open');
      $('#mobile-global-nav').css('top', (scrollTop() + 67) + 'px');
      $('#nav-toggle').toggleClass('open');
    });
  });
})(jQuery);
