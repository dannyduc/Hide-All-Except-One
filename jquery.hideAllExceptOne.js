(function($){
  $.hideAllExcept = {
    init: function() {
      var hash = window.location.hash;

      (!hash) ? $.hideAllExcept.hideShow('#' + $('#toggleThis > div:first').attr('id')) : $.hideAllExcept.hideShow(window.location.hash);

      $('a.toggle').click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $.hideAllExcept.hideShow(href);
      });
    },
    hideShow: function(el) {
      $(el).show().siblings().hide();

      $('a.toggle').removeClass('active');
      $('a[href="' + el + '"]').addClass('active');
    }
  }
})(jQuery);







