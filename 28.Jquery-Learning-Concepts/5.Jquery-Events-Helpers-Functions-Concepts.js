/*
    Jquery Events Helper Functions Concepts
    =======================================
    Jquery provides some simple methods to work with events basically those methods attaches
    the event handlers(nothing but the function) to do particular task. Those handlers are 
    being called upon when the selector for that handler being triggered. Insied this
    handlers 'this' refers to the DOM element that initiated the event. This methods
    are also called 'Jquery Helper Functions'.


    The event handling function can receive an event object. This object can be used to determine 
    the nature of the event, and to prevent the event’s default behavior.
    
    Jquery Events Based Method Types
    --------------------------------
    a) Mouse Events Methods
    b) Form Events Methods
    c) Documents Events Methods
    d) Keyboard Events Methods

    Mouse Events Methods
    --------------------
    1)  click()         --> triggered by mouse click.
    2)  dblclick()      --> triggered by mouse double click.
    3)  mousedown()     --> fires when mouse button is pressed.
    4)  mouseup()       --> fires when mouse button is released.
    5)  mouseenter()    --> called when the mouse enters the html area.
    6)  mouseleave()    --> called when the mouse leaves the html area.
    7)  hover()         --> fires when the mouse enters and leave the the html area.
    8)  mousemove()     --> fires when the mouse is moved.
    9)  mouseout()      --> fires when the mouse moves out of the html area.
    10) mouseover()     --> fires when the mouse moves over the html area.

    Form Events Methods
    -------------------
    1) focus()      --> fires when the element get focus.
    2) blur()       --> fires when the html element loses focus.
    3) focusin()    --> fires when the html element is about to receive focus.
    4) focusout()   --> fires when the element loses focus.
    5) select()     --> fires when the text is selected.
    6) change()     --> fires on change.
    7) submit()     --> fires when a form is submitted.
    
    Document Events Methods
    -----------------------
    1) load()       --> called when a document is loaded.
    2) unload()     --> called when documents are unloaded.
    3) resize()     --> fires when the window is resized.
    4) ready()      --> occurs when the DOM has been loaded.
    5) scroll()     --> fires when the window is scrolled.
    6) error()      --> fires when there is an erro.

    Keyboard Events Methods
    -----------------------
    1) keypress()   --> triggers when any keyboard key is being pressed and release
    2) keyup()      --> triggers when any pressed is being released.
    3) keydown()    --> triggers when any pressed is being pressed.

*/

// working on form based events methods
$('document').ready(function (){
    $('.mouse-events__methods').click(function(){
        $('.list-items  li:first-child').css('color', 'green');
    });
    $('.mouse-events__methods').dblclick(function(){
        $('.list-items > li').filter(':gt(1)').addClass('changeStyling');
    });
    $('.mouse-events__methods').mousemove(function(){
        $('.list-items > li').filter(':eq(0)').addClass('changeOnDoubleClick');
    });
    $('.mouse-events__methods').mouseover(function(){
        $('.list-items > li').filter(':lt(2)').addClass('changeOnMouseOver');
    });
    $('.mouse-events__methods').mouseleave(function(){
        $('.list-items > li').filter(':gt(2)').addClass('changeOnMouseOut');
        $('.list-items > li').filter(':gt(3)').click(function(){
            $(this).mouseenter(function(){
                console.log('mouseenter');
            });
        })
    });
});


// working on form based events methods
$('document').ready(function(){
    $('.form-events__methods').hover(function(){
        $('#form-1').click(function(){
            $('#name').focus(()=>{
                $(this).css('color', 'green');
            });
            $('#name').blur(()=>{
                $(this).css('color', '#ccdddd');
            });
        });
        // 
        $('#form-1').submit(function(event){
            event.preventDefault();
            $('#submitted-content').html('Form is submitted...');
        });
    });
});


$('document').ready(function(){
    $('.keyboard-events__methods').hover(function(){
        $('#form-2').filter(':text').click(function(){
            $(this).css('font-size', '25px');
        })
    })
});

$('document').ready(function(){
    $('.document-events__methods').hover(function(){
        $('img').load(function(){
            
        });
    });
})



