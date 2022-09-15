/*
    jQuery Selectors Concept
    ========================
    jQuery Selector can use to select and manipulate HTML Elements.
    
    Syntax Of jQuery Selectors
    --------------------------
    1) $('selector').method();              // selecting using 'selector'
    2) $('selector expression).method();    // selecting using 'selector expression'


    Selecting Ways Of jQuery Selectors
    ----------------------------------
    1) $('tagname')                             --> selected through a HTML tag(element) name.
    2) $('.className')                          --> selected through a class name.
    3) $('#idName')                             --> selected through a id name.
    4) $('[attrname]')                          --> selected through a attribute name.
    5) $('tagname[attrname='attrvalue']')       --> selected through a attribute value.
    6) $('tagname .classTitle')                 --> selected through psuedo selection.
    7) $('tagname #idTitle')                    --> selected through psuedo selection.
    
    Attributes Based Selectors
    --------------------------
    1) [Attribute]         ==> $('[href]')  --> selected all elements with 'href' attribute.
    2) [Attribute=value]   ==> $(':empty)   --> selected all elements no child(element) nodes.
    3) [Attribute!=value]  ==> $('[href!='default.html']) --> selected all elements with 'href' attribute
                                value not equal to 'default.html'.
    4) [Attribute$=value]  ==> $('[href$='.png']') --> selected all element with 'href' attribute
                                value ends with '.png'.
    5) [Attribute^=value]  ==> $('[href^='somefile_']') --> selected all element with 'href' attribute value 
                                starts with 'somefile_'.

    Form Based Selectors
    ---------------------
    1)  $(':input')              --> select all input elements.
    2)  $(':text')               --> select all input elements with type='text'
    3)  $(':password')           --> select all input elements with type='password'
    4)  $(':radio')              --> select all input elements with type='radio'
    5)  $(':checkbox')           --> select all input elements with type='checkbox'
    6)  $(':submit')             --> select all input elements with type='submit'
    7)  $(':reset')              --> select all input elements with type='reset'
    8)  $(':file')               --> select all input elements with type='file'
    9)  $(':image')              --> select all input elements with type='image'
    10) $(':button')             --> select all input elements with type='button'
    11) $(':enabled')            --> select all input elements which are enabled.
    12) $(':disabled')           --> select all input elements which are disabled.
    13) $(':checked')            --> select all input elements which are checked.
    14) $(':reset')              --> select all input elements which are enabled.
    15) $(':selected')           --> select all input elements which are selected.
    15) $(':hidden')             --> select all elements which are hidden.
    15) $(':visible')            --> select all input elements which are visible.

    Others Different Selectors
    --------------------------
    1)  :first              ==> $('p:first')        --> select first 'p' element. 
    2)  :last               ==> $('p:last')         --> select last 'p' element.
    3)  :even               ==> $('tr:even')        --> select all even 'tr' element.
    4)  :odd                ==> $('li:odd')         --> select all odd 'li' element.
    5)  :gt(num)            ==> $('ui li:gt(2)')    --> select elements with an index greater than 2.
    6)  :lt(num)            ==> $('ui li:lt(3)')    --> select elements with an index less than 3.
    7)  :eq(index_val)      ==> $('ui li:eq(2)')    --> select 3rd element in the list(index value starts from 0).
    8)  :header             ==> $(':header')        --> select all headers h1, h2, ..
    9)  :animated           ==> $(':animated')      --> select all animated elements.
    10) S1, S2, S3          ==> $('th td p')        --> select all elements with matching selectors.
    
*/

// loading the whole document 
$('document').ready(function(){
    // working with button 
    $('#button-clicked').click(function(){
        $(this).text('Changing the color'); // changing its inner text color through text() function
        $('.content').css('color', 'green'); // changing the color of the header content
    });

    // working with list items
    $('ul .list-item').hover(function(){
        $('li:first').css('color', 'blue');     // selecting fast element from the list
        $('li:last').css('color', 'orange');    // selecting last element from the list
        $('li:even').css('color', 'purple');    // selecting list elements having an even index
        $('li:eq(4)').css('color', 'red');      // selecting list element  with an index value equals to 4 thus selected 5 item
        $('li:gt(5)').css('color', '#44f495');  // selecting list elements with an index value greater then 5
    })
    
})