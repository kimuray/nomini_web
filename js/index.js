(function($) {
  $(function() {
    $('#nav-toggle').click(function(){
      $('#mobile-global-nav').toggleClass('open');
      $('#nav-toggle').toggleClass('open');
    });
  });
})(jQuery);
