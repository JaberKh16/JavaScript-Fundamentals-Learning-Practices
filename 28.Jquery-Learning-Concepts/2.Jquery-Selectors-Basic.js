/*
    Jquery Selectors Concept
    ========================
    Jquery Selector can use to select and manipulate HTML Elements.
    
    Syntax Of Jquery Selectors
    --------------------------
        $('selector').method();

    Selecting Ways Of Jquery Selectors
    ----------------------------------
    1) $('h2')              --> selected through a HTML tag(element) name.
    2) $('.className')      --> selected through a class name.
    3) $('#idName')         --> selected through a id name.
    4) $('[href]')          --> selected through a attribute name.
    5) $('a[href='..']')    --> selected through a attribute value.
    6) $('p .classTitle')   --> selected through psuedo selection.
    7) $('p #idTitle')      --> selected through psuedo selection.
    
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
    1) $(':input')          --> select all input elements.
    2) $(':text')           --> select all input elements with type='text'
    3) $(':password')       --> select all input elements with type='password'
    4) $(':radio')          --> select all input elements with type='radio'
    4) $(':checkbox')       --> select all input elements with type='checkbox'
    4) $(':submit')         --> select all input elements with type='submit'
    4) $(':reset')          --> select all input elements with type='reset'
    4) $(':file')          --> select all input elements with type='file'
    4) $(':image')          --> select all input elements with type='image'
    4) $(':button')          --> select all input elements with type='button'
    4) $(':enabled')          --> select all input elements which are enabled.
    4) $(':disabled')          --> select all input elements which are disabled.
    4) $(':checked')          --> select all input elements which are checked.
    4) $(':reset')          --> select all input elements which are enabled.
    4) $(':selected')          --> select all input elements which are selected.

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

$('document').ready(function(){
    
})