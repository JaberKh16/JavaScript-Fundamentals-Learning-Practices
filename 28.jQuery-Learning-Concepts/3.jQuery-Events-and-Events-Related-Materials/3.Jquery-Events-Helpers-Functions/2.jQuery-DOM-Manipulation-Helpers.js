/*
    jQuery DOM Manipulation Methods
    ===============================
    jQuery can be used to manipulate DOM means to add, update and delete DOM element
    in the HTML page and for that jQuery provides some methods.

    jQuery DOM Manipulation Based Methods
    -------------------------------------
    1) append(content)      --> inserts element at the end of the elements which is specified by a selector.
    2) prepend(content)     --> inserts content at the begining of the elements which is specified by a selector.
    3) appendTo(content)    --> 
    4) prependTo(content)   --> 
    5) before(content)      --> inserts content(new or existing DOM elements) before an element(s) which is 
                                specified by a selector.
    6) after(content)       --> inserts content(new or existing DOM elements) after an element(s) which is
                                specified by a selector.
    7) remove(element)      --> removes element(s) from the DOM with specified(selected) element.
    8) wrap(element)        --> wrap an HTML structure around each element which is specified by selector.
    9) replaceAll(element)  --> replace targetted element(s) with specified element, basically replace a content
                                with specified(selector) element.


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
$('.appendAndprependMethodSection').ready(function(){
    $('#list-items').append('<li>New Link Appended</li>');
});


// example of prepend() method
$('.appendAndprependMethodSection').ready(function(){
    $('#list-items').prepend('<li>New Link Prepended</li>');
});

// example of remove() method
$('.removeMethodSection').ready(function(){
    // takes a selector which to be removed --> $('selector').remove() 
    $('.remove-div__list #list-items .item').remove(); // removing the list element
});

// example of replaceAll() method
$('.replaceAllMethodSection').ready(function(){
    // takes a content first and then replace with selected element --> $('content').replaceAll('selector')
    $('<span>Replacement Of Previous Bombshell</span>').replaceAll('.replace-div__content p');
});


