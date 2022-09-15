/*
    jQuery DOM Manipulation Methods
    ===============================
    jQuery can be used to manipulate DOM means to add, update and delete DOM element
    in the HTML page and for that jQuery provides some methods.

    jQuery DOM Manipulation Based Methods
    -------------------------------------
    1) append(element)      --> inserts element at the end of the elements which is specified by a selector.
    2) prepend(element)     --> inserts content at the begining of the elements which is specified by a selector.
    3) appendTo(element)    --> 
    4) prependTo(element)   --> 
    5) before(element)      --> inserts content(new or existing DOM elements) before an element(s) which is 
                                specified by a selector.
    6) after(element)       --> inserts content(new or existing DOM elements) after an element(s) which is
                                specified by a selector.
    7) remove(element)      --> removes element(s) from  the DOM with specified element.
    8) wrap(element)        --> wrap an HTML structure around each element which is specified by selector.
    9) replaceAll(element)  --> replace targetted element(s) with specified element. 


*/

// example of after() method
$('.afterMethodSection').ready(function(){

    $('.div-element1').after('<ul><li>Item-1</li></ul>');
});

// example of before() method
$('.beforeMethodSection').ready(function(){

    $('.div-element2').before('<h2> Added h2 tag before p tag</h2>');
});


// example of append() method
$('.prependMethodSection').ready(function(){
    $('#list-items').append('<li>New Link Appended</li>');
});


// example of prepend() method
$('.prependMethodSection').ready(function(){
    $('#list-items').prepend('<li>New Link Prepended</li>');
});


