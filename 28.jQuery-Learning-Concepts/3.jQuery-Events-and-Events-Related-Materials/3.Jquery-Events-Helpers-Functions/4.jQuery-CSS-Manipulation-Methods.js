/*
    jQuery CSS Manipulation Methods
    ===============================
    jQuery provides some CSS Manipulation Methods to work with the CSS styling properties and 
    CSS class of the DOM elements.

    CSS Manipulation Methods
    ------------------------
    1) css()            --> set style properties to the specified selector.
                            syntax - 
                                1)  $('selector').css('style propname', 'value'); // to set single style property
                                2)  $('selector').css({
                                        'style propname': 'value'
                                    }); // to set multiple styling properties with JSON object
                            
    2) addClass()       --> add one or more class properties to the specified selector. it can support single 
                            class passing or multiple class passing as a paramter and if multiple classes
                            passing then should be separated through space.
                            syntax-
                                1) $('selector').addClass('className'); // to include a single class property
                                2) $('selector').addClass('className1 className2'); // to include multiple classes property

    3) hasClass()       --> determining whether a specified selector has the assigned class property or not and 
                            returns a boolean value.
                            syntax-
                                1) $('selector').hasClass('className'); // checking whether specifed 'className' been available to 'selector'

    4) removeClass()    --> remove single/multiple or even all classes properties from the specified selector.
                            syntax-
                                1) $('selector').removeClass(); // removing specified selector all class property if available
                                1) $('selector').removeClass('className'); // removing specified selector specific class property if available

    5) toggleClass()    --> toggling between adding or removing classes just like- addClass() and removeClass() methods.
                            syntax- 
                                1) $('selector').toggleClass('className'); // toggling between addClass() and removeClass() methods

*/

// example of css() method
$('.css-method__section').ready(function(){
    $('#div-element__css p').css('color', '#5cb555'); // to set a single styling property
    $('#div-element__css').css({ // to set multiple styling properties through JSON 
        'color': '#5cb555',
        'font-size': '25px',
        'background-color': '#ccc'
    });
});


// example of addClass() method
$('.addClass-method__section').ready(function(){
    $('#div-element__addClass').addClass('changeDivElementStyling'); // including single class property
    $('#div-element__addClass').addClass('changeDivWidth changeDivTextFont'); // including multiple classes property
});



// example of hasClass() method
$('.hasClass-method__section').ready(function(){
    // on button click to check the class availability
    $('#clickToCheckClassAvailability').click(function(){
        // checking whether this selector div has class defined or not
        if($('#div-element__hasClass').hasClass('changeDivWidth')){
            console.log(`Selector div has 'changeDivWidth' class property.`);
        }else{
            console.log(`Selector div doesn't have 'changeDivWidth' class property.`);
        } 
    });
});

// example of removeClass() method
$('.removeClass-method__section').ready(function(){
    // on button click remove the available class
    $('#clickToRemove').click(function(){
        $('#div-element__removeClass').removeClass(); // removing whatever class been availanle to this selector div
    });
});



// example of removeClass() method
$('.removeClass-method__section').ready(function(){
    // on button click remove the available class
    $('#clickToRemove').click(function(){
        $('#div-element__removeClass').removeClass(); // removing whatever class been availanle to this selector div
    });
});











