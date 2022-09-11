/*
    JavaScript Jquery Based Concepts
    ================================
    Jquery is a JS library that simplifies different VanilaJS(raw JS) features such as
    DOM Manipulation, Ajax Request Handling.

    Jqury Syntax-
        $('selector').someMethod('parameter');
    
    In the above syntax, 
        1) $ --> access modifier of Jquery
        2) selector     ---> to select HTML Element
        3) someMethod   ---> some methods on selected elements provided by Jquery
        4) parameter    ---> some optional paramter

    Advantages Of Jquery
    --------------------
    1) Simple, easy and light weight.
    2) Provides HTML & CSS Manipulation.
    3) Provides DOM Manipulation.
    4) Has Built-in Animation support.
    5) Has cross-browser support.
    6) Has AJAX support.
    7) Provides Event Handling support.

    Concepts In Jquery
    ------------------
    1)  Jquery Selector
    2)  Jquery Events
    3)  Jquery Callbacks
    4)  Jquery Animation
    5)  Jquery Chaining
    6)  Jquery CSS Methods
    7)  Jquery Traversing
    8)  Jquery Ancestor
    9)  Jquery Siblings
    10) Jquery Filtering
    11) Jquery AJAX
    12) Jquery APIs
    13) Jquery UI

    How To Work With Jquery
    -----------------------
    There are 2 ways to have Jquery on your syetem and emebed with HTML which are the following-
        1) Downloading the compressed or uncompressed file from Jquery sites(best for production) 
        2) Using Jquery CDN(get from 'Google CDN', 'Microsoft CDN', 'CDNJS', 'jsDelivr CDN')
    
    Installing Jquery As A Package
    ------------------------------
    Installing of Jquery library can be in following ways-
        1) using NPM Package Manager    ==> npm install jquery
        2) using Yarn Package Manager   ==> yarn add jquery
        3) using Bower Package Manager  ==> bower install jquery

*/

// VanilaJS Way 
function changeTextColor (){
    document.getElementById('clicked-to__change').addEventListener('click', ()=>{
        document.querySelector('h3').style.color = 'green';
    })
}
// changeTextColor(); // uncomment the code to see the effect


// Jquery Way Less Code
// selecting button element through id selector
$('#clicked-to__change').click(function(){
    // selecting the h2 selector
    $('h3').css('color', 'green');
});
