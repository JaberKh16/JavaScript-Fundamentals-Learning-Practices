/*
    JavaScript BOM Based Tools - Popupboxes 
    =======================================
    BOM provides 3 types of popupboxes which can be accessed through the
    'window' Object because those are part of the 'window' Object.

    1) window.alert()       --> to get the alert box.
    2) window.confirm()     --> to get the confirm box.
    3) window.prompt()      --> to get the prompt box.

    Though those popups are the part of 'window' thus has the global so can be accessed without
    specifying 'window' also.
*/

// storing the window Object into a variable
var windowObj = this;

function alertPopup(windowObj){
    console.log(windowObj.alert('Alerting a message'));
}

alertPopup(windowObj);

function confirmPopup(windowObj){
    var result = windowObj.confirm('Please consider your opinion');
    if(result === true){
        console.log(`Client chose 'yes' opionon`);
    }else{
        console.log(`Client chose 'no' opionon`);
    }
}

confirmPopup(windowObj);

function promptPopup(windowObj){
    var message = windowObj.prompt('Enter a message: ');
    console.log(message);
}
promptPopup(windowObj);