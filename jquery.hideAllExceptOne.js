/* http://github.com/enure/Hide-All-Except-One */

(function($){
  $.hideAllExcept = {
    init: function() {
      var hash = window.location.hash;
      var hs = $.hideAllExcept.hideShow;

      (!hash) ? hs('#' + $('#toggleThis > div:first').attr('id')) : hs(window.location.hash);

      $('a.toggle').click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        hs(href);
      });
    },
    hideShow: function(el) {
      $(el).show().siblings().hide();

      $('a.toggle').removeClass('active');
      $('a[href="' + el + '"]').addClass('active');
    }
  }
})(jQuery);







