## hide all except one

### Overview

This works like tabs, however you may
style it however you want of course.
The markup is not structurally tied 
together--meaning your 'tabs' and
their content' don't have to be nested.

The tabs are bookmarkable, however browser
back and forward buttons do not work.

### HowTo

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

Clicking a `.toggle` link will hide all inside
`#toggleThis` except the link target. As
you can see the `id` and the `href` must match.

### No Javascript

This works works for users without javascript
enabled. The browser will scroll to the
target.

### Requirements

Requires jquery (http://jquery.com/) (rev 1465 or above: http://dev.jquery.com/ticket/745)

### TODO
This could be abstracted further by
not requiring the hideable elements to be
siblings in a parent.

### URL

http://github.com/enure/Hide-All-Except-One
