/*
    jQuery HTML Elements Manipulation Methods
    =========================================
    jQuery provides a some methods related HTML Elements Manipulation to generally sets or gets value for
    attribute, property, html or text.

    HTML Elements Manipulation Methods
    ----------------------------------
    1) attr()   --> to get or set the value of specified attribute of the targetted(DOM) element.
                    syntax- $('selector').attr('attrname', 'attrvalue')
    2) prop()   --> to get or set the value of specified property of the targetted(DOM) element.
                    syntax- $('selector').prop('propname', 'propvalue')
    3) html()   --> to get or set the html content for the specified targetted(DOM) element.
    4) text()   --> to get or set the text content for the specified targetted(DOM) element.
    5) val()    --> to get or set the value property of the specified targetted(DOM) element.

*/

// example of attr() method
$('.attribute-method__section').ready(function(){
    $('#div-element__attr').attr('class', 'changeDivElementStyling'); // setting a class attribute for the div element
    console.log(`Setted attribute value is: ${$('#div-element__attr').attr('class')}`);
    console.log(`Getting internal p tag default attribute value: ${$('p').attr('style')}`);
});

// example of attr() method
$('.prop-method__section').ready(function(){
    $('#div-element__prop').prop('class', 'changeDivElementStyling'); // setting a class attribute for the div element
    console.log(`Setted property value is: ${$('#div-element__prop').prop('class')}`);
    console.log(`Getting internal p tag default property value: ${$('p').prop('style')}`);
});


// example of html() method
$('.html-method__section').ready(function(){
    // $('#div-element__html').html('class', 'changeDivElementStyling'); // setting a class attribute for the div element
    // console.log(`Setted property value is: ${$('#div-element__prop').prop('class')}`);
    // console.log(`Getting internal p tag default property value: ${$('p').prop('style')}`);
    console.log($('#div-element__html').html()); // to the html() content initially inside this selector div
    $('#div-element__html').html('<span>New Content Added</span>').appendTo('#div-element__html');
});