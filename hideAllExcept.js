$(document).ready(function() {
    $().hideAllExcept.init();
});

$.fn.hideAllExcept = {
    init: function() {
        var hash = window.location.hash;

        (!hash) ?  
            $().hideAllExcept.hideShow('#' + $('#toggleThis > div:first').attr('id')) 
                : $().hideAllExcept.hideShow(window.location.hash);

        $('a.toggle').click(function() {
            var href = $(this).attr('href');
            $().hideAllExcept.hideShow(href);
            return false; // prevents the window from scrolling to the anchor
        });
        
    },
    hideShow: function(el) {
        $(el).removeClass('hide').siblings().addClass('hide');
    
        $('a.toggle').removeClass('active');
        $('a[href="' + el + '"]').addClass('active');
    }
}
