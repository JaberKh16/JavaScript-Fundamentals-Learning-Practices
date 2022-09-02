/*
    JavaScript Geolocation API
    ==========================
    Geolocation API is used to get the geographical position of a host's
    machine.

    Since this can comprise privacy, the position is not available unless
    the user approves it.

    Note: As of Chrome 50, the Geolocation API will only work on secure context
    such as HTTPs.

    Geolocation API Object Methods
    ------------------------------
    1) getCurrentPosition() --> returns the host's location(in latitude and longitude).
                                if the getCurrentPosition() method is successful, 
                                then it returns a coordinates object to the function 
                                specified in the parameter (showPosition) where 'showPositon'
                                is a callback function which has the coordinates information.
                                this method also takes another callback function to work
                                with errors on geolocation.

    2) watchPosition()      --> returns the current position of the host and continues to return 
                                updated position as the host moves (like the GPS in a car).
    
    3) clearWatch()         --> stops the watchPosition() method.


*/

// defining the 'use strict' statement
'use strict';

// selecting the generated information paragraph
const location_info = document.getElementById('generated-location-info');

// selecting the button
const getttingHostLocation = document.getElementById('get-location');
getttingHostLocation.addEventListener('click', function (){
    // checking if the navigator.geolocation is not available or not
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPositionInfo, 
            showErrorInfo, seeingHostLocationOnMap);
    }
    else{
        location_info.innerHTML = "Browser doesn't support Geolocation.";
    }
});

function showPositionInfo(position){
    location_info.innerHTML =   "Latitude: " + position.coords.latitude + ", " +
                                "Longitude: " + position.coords.longitude;
}

function showErrorInfo(error){
    console.log(error); // to see the provided Geolocation based errors
    switch(error.code) {
        case error.PERMISSION_DENIED: // PERMISSION_DENIED === 1
            location_info.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE: // PERMISSION_DENIED === 2
            location_info.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT: // PERMISSION_DENIED === 3
            location_info.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR: // PERMISSION_DENIED === 4
            location_info.innerHTML = "An unknown error occurred."
            break;
    }
}

function seeingHostLocationOnMap(position){
    let hostLocation = position.coords.latitude + "," + position.coords.longitude;
    let img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+hostLocation+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}