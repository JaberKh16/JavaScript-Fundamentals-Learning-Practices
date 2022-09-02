/*
    AJAX Based Concept In JS
    ========================
    AJAX stands for Asynchronous JavaScript And XML. It is not a library nor a 
    framework just a set of web technologies to work with the web network where
    it is used to transfer data i.e send or receiving data asynchronously.

            |--------------------------------------------|
            |   Server(Local Servers, Externa APIs)      |
            |--------------------------------------------|
                ^    |            ^                |
                |    |            |         XML/JSON/PlainText
                |    |      XmlHttpRequest Obj.    |
                |    |            |                |
                |    |         |------------------------|
            Common Request     |      AJAX Engine       |
                &              |------------------------|
            Response |            ^            |
                |    |            |        HTML Response
                |    |           JS Call       |
                |    |            |            |
                |    |            |            |
            |-------------------------------------------|
            |       Client(Different Browsers)          |
            |-------------------------------------------|

        Figure: Scenario o Client-Server Working Mechansim

    JS Call can be done throgh different ways such as the following-
        
        1) VanilaJS
        2) Node HTTP Library
        3) Jquery
        4) Axios
        5) Superagent
        6) Prototype
        7) Fetch API
        

    XmlHttpRequest(XHR) Object
    --------------------------
    1) XmlHttpRequest is an API in the form of an Object. 
    2) XHR provided by the browser's JS environment.
    3) XHR has some methods and properties to work with the transfering of data.
    4) XHR can be used with other protocols than HTTP.
    5) XHR can work with data other than XML(such as Plain Text, JSON) data.


    HTTP Based Methods Types
    ------------------------
    1) GET
    2) POST
    3) PUT
    4) PATCH
    5) DELETE
    6) OPTIONS

    HTTP Based Status Code
    ----------------------
    1) 200 --> 'OK'
    2) 403 --> 'Forbidden'
    3) 404 --> 'Not Found'

*/

// defining the 'use strict' statement
'use strict';


// selecting the button 
const clickButton = document.getElementById('getting-file-info');
clickButton.addEventListener('click', gettingFileInformation);

// defining a function to work with Ajax working process
function gettingFileInformation(){
    // creating the request with XmlHttpRequest object
    const xhttp = new XMLHttpRequest();

    // connecting to the server
    xhttp.open('GET', './file/solar-system-info.txt', true);

    // request after finishing on processing request
    xhttp.onload = ()=>{ // onload property takes a callback function
        if(this.status === 200){ // if xhttp.status === 200 then connection is 'OK'
            console.log(this.responseText); // xhttp.responseText to see the response in text format
        }
    }

    // sending the request
    xhttp.send();
}

// gettingFileInformation();