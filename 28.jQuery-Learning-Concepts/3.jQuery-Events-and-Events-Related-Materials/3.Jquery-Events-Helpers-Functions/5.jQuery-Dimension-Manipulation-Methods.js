/*
    jQuery Dimension Manipulation Methods
    =====================================
    jQuery library provides various methods to manipulate DOM elements dimension like- height, width, 
    offset, positon etc.

    Dimension Manipulation Methods
    ------------------------------
    1) height()         --> get or set the height of the specified selector. it takes an integer value as a parameter
                            to that reference selector.
                            syntax-
                                $('selector').height(value);

    2) width()          --> get or set the width of the specified selector.it takes an integer value as a parameter
                            to that reference selector.
                            syntax-
                                $('selector').width(value);

    3) innerHeight()    --> get or set the innerHeight(padding + height) of the specified selector.
                            syntax-
                                $('selector').innerHeight(value);

    4) innerWidth()     --> get or set the innerWidth(padding + width) of the specified selector.
                            syntax-
                                $('selector').innerWidth(value);

    5) outerHeight()    --> get or set the outerHeight(border + padding + height) of the specified selector.
                            syntax-
                                $('selector').innerHeight(value);

    6) outerWidth()     --> get or set the outerWidth(border + padding + width) of the specified selector.
                            syntax-
                                $('selector').outerWidth(value);

    7) offset()         --> get or set the left and top coordinates property of the specified selector. to work with 
                            this specify JSON object with left and top property with the coordinates where you wanted 
                            to move the element.
                            syntax-
                                $('selector').offset(optiond);

    8) postion()        --> get or set the current coordinates of the specified selector.

    Points to Remember:
    ------------------
    a) jQuery dimension methods allows you to manipulate dimensions of DOM elements.
    b) use the selector to get the reference of an element(s) and then call jQuery dimension methods to edit it.
    c) important DOM manipulation methods: height(), width(), offset(), position() etc.

*/

// example of height() method
$('.height-and-width-method__section').ready(function(){
    console.log(`Initial Height is: ${$('#div-element__height').height()}px`);
    const setHeight = $('#div-element__height').height(200); // settting a new height to 200px
    console.log(`Setted Height is: ${setHeight}px`); // returns an objects
});


// example of width() method
$('.height-and-width-method__section').ready(function(){
    console.log(`Initial Height is: ${$('#div-element__height').width()}px`);
    const setWidth = $('#div-element__width').width(600); // settting a new width to 600px
    console.log(`Setted Height is: ${setWidth}px`); // returns an object
});


// example of innerHeight() method
$('.innerHeight-and-innerWidth-method__section').ready(function(){
    console.log(`Initial Height is: ${$('#div-element__innerHeight').innerHeight()}px`);
    const setInnerHeight = $('#div-element__innerHeight').innerHeight(200); // settting a new height to 200px
    console.log(`Setted innerHeight is: ${setInnerHeight}px`); // returns an objects
});


// example of innerWidth() method
$('.height-and-width-method__section').ready(function(){
    console.log(`Initial Height is: ${$('#div-element__innerWidth').innerWidth()}px`);
    const setInnerWidth = $('#div-element__innerWidth').innerWidth(600); // settting a new width to 600px
    console.log(`Setted innerWidth is: ${setInnerWidth}px`); // returns an object
});


// example of offset() method
$('.offset-method__section').ready(function(){
    const divOffsetVal = $('#div-element__offset').offset();
    console.log(`Initial 'div' tag coordinates info --> left: ${divOffsetVal.left},  top:${divOffsetVal.top} `); // checking initial offset value

    // set a new offset value for the insidal p tag
    $('p').offset({
        left:500, 
        top:1060
    });
});


// example of position() method
$('.position-method__section').ready(function(){
    const divPositionVal = $('#div-element__position').position();
    console.log(`Initial 'div' tag coordinates info --> left: ${divPositionVal.left},  top:${divPositionVal.top} `); // checking initial offset value

    // set a new offset value for the insidal p tag
    $('p').offset({
        left:500, 
        top:1060
    });

});
