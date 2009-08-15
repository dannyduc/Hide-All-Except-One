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

/*                                  2009-03-04
    "hide all except one"
    by charles stuart
    requires jquery (http://jquery.com/)
    ** requires rev 1465 or above **
    ** http://dev.jquery.com/ticket/745 **
    
    Keep this url with the script:
    http://enure.net/dev/hide-all-except-one/

    OVERVIEW
    This works like tabs, however you may
    style it however you want of course.
    The markup is not structurally tied 
    together--meaning your 'tabs' and
    their content' don't have to be nested.

    The tabs are bookmarkable, however browser
    back and forward buttons do not work.

    HOWTO
    Create links as such and place them 
    anywhere in your markup:
     <a href="#lorem" class="toggle">lorem</a>
     <a href="#ipsum" class="toggle">ipsum</a>

    Put your 'tab' content in a div:
     <div id="toggleThis">
       <div id="lorem">
         lorem
       </div>
       <div id="ipsum">
         ipsum
       </div>
     </div>

    Clicking a .toggle link will hide all inside
    #toggleThis except the link target. As
    you can see the id and the href must match.

    NO JS
    This works works for users without javascript
    enabled. The browser will scroll to the
    target.

    TODO
    This could be abstracted further by
    not requiring the hideable elements to be
    siblings in a parent.

    CHANGES
    [FIXED 2009-03-04] Added "return false" to 
    stop browser from scrolling after clicking 
    "a.toggle".

*/