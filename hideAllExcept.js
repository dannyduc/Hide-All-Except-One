jQuery(document).ready(function() {
    jQuery().hideAllExcept.init();
});

jQuery.fn.hideAllExcept = {
    init: function() {
        var hash = window.location.hash;

        (!hash) ?  
            jQuery().hideAllExcept.hideShow('#' + jQuery('#toggleThis > div:first').attr('id')) 
                : jQuery().hideAllExcept.hideShow(window.location.hash);

        jQuery('a.toggle').click(function() {
            var href = jQuery(this).attr('href');
            jQuery().hideAllExcept.hideShow(href);
            return false; // prevents the window from scrolling to the anchor
        });
        
    },
    hideShow: function(el) {
        jQuery(el).removeClass('hide').siblings().addClass('hide');
    
        jQuery('a.toggle').removeClass('active');
        jQuery('a[href="' + el + '"]').addClass('active');
    }
}
