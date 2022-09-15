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
                    syntax- $('selector').html('content')
    4) text()   --> to get or set the text content for the specified targetted(DOM) element.
                    syntax- $('selector').text('content')
    5) val()    --> to get or set the value property of the specified targetted(DOM) element.
                    If a selector doesn't support value property then it return 'null'.
                    syntax- $('selector').val('value'); 

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
    console.log($('#div-element__html').html()); // resulted the html content initially inside this selector div
    $('#div-element__html').html('<span>New Content Added</span>');
    console.log(`Getting html content: ${$('#div-element__html').html()}`);
});


// example of text() method
$('.text-method__section').ready(function(){
    console.log($('#div-element__text').text()); // resulted the text content initially inside this selector div
    $('#div-element__text').text('<span>New Content Added</span>'); 
    console.log(`Getting text content: ${$('#div-element__text').text()}`);
});


// examople of val() method
$('.val-method__section').ready(function(){
    console.log(`Initially the value is: ${$('#div-inputelement__val input:text').val()}`); // initially it is 'undefined'
    $('#div-inputelement__val input:text').val('Mr. X');
    console.log(`After setted the value is: ${$('#div-inputelement__val input:text').val()}`);
});