$(document).ready(function() {
    var hash = window.location.hash;
    
    (!hash) ?  
        hideAllExcept('#' + $('#toggleThis > div:first').attr('id')) 
            : hideAllExcept(window.location.hash);

    $('a.toggle').click(function() {
        var href = $(this).attr('href');
        hideAllExcept(href);
        return false; // prevents the window from scrolling to the anchor
    });
});

function hideAllExcept(el) {
    $(el).removeClass('hide').siblings().addClass('hide');
    
    $('a.toggle').removeClass('active');
    $('a[href="' + el + '"]').addClass('active');
}