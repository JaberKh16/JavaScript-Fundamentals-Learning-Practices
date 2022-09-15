/*
    JavaScript jQuery Based Concepts
    ================================
    jQuery is a JS library that simplifies different VanilaJS(raw JS) features such as
    DOM Manipulation, Ajax Request Handling.

    jQuery Syntax-
        $('selector').someMethod('parameter');
    
    In the above syntax, 
        1) $ --> access modifier of jQuery
        2) selector     ---> to select HTML Element
        3) someMethod   ---> some methods on selected elements provided by jQuery
        4) parameter    ---> some optional paramter

    Advantages Of jQuery
    --------------------
    1) Simple, easy and light weight.
    2) Provides HTML & CSS Manipulation.
    3) Provides DOM Manipulation.
    4) Has Built-in Animation support.
    5) Has cross-browser support.
    6) Has AJAX support.
    7) Provides Event Handling support.

    Concepts In jQuery
    ------------------
    1)  jQuery Selector
    2)  jQuery Events
    3)  jQuery Callbacks
    4)  jQuery Animation
    5)  jQuery Chaining
    6)  jQuery CSS Methods
    7)  jQuery Traversing
    8)  jQuery Ancestor
    9)  jQuery Siblings
    10) jQuery Filtering
    11) jQuery AJAX
    12) jQuery APIs
    13) jQuery UI

    How To Work With jQuery
    -----------------------
    There are 2 ways to have jQuery on your syetem and emebed with HTML which are the following-
        1) Downloading the compressed or uncompressed file from jQuery sites(best for production) 
        2) Using jQuery CDN(get from 'Google CDN', 'Microsoft CDN', 'CDNJS', 'jsDelivr CDN')
    
    Installing jQuery As A Package
    ------------------------------
    Installing of jQuery library can be in following ways-
        1) using NPM Package Manager    ==> npm install jquery
        2) using Yarn Package Manager   ==> yarn add jquery
        3) using Bower Package Manager  ==> bower install jquery

    jQuery Best Way Of Coding Syntax
    --------------------------------
    jQuery can support any line of which is valid in jQuery format. Thus it is a best practice to
    first load the DOM and then perform changes on the DOM through jQuery, otherwise when the 
    DOM getts bigger and bigger when loading the whole DOM some functionality can be accessible
    through a say- On Ecomerce Site a client trying to look for a product but even before the
    product image loads client get access to that product selected button click which is a 
    complete disaster. So to avoid this kind of issue format the code as following way-
        
        $('document').ready(function(){
            // selecting the element
            $('selector).method(function(){
                // do something on the selected element
            });
        });

*/

// VanilaJS Way 
function changeTextColor (){
    document.getElementById('clicked-to__change').addEventListener('click', ()=>{
        document.querySelector('h3').style.color = 'green';
    })
}
// changeTextColor(); // uncomment the code to see the effect


// jQuery Way Less Code
// selecting button element through id selector
$('#clicked-to__change').click(function(){
    // selecting the h2 selector
    $('h3').css('color', 'green');
});
