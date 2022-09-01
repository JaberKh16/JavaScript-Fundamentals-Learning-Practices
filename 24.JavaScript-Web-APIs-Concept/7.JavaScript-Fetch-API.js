/*
    JavaScript Fetch API
    ====================
    Fetch API interface allows web browser to make HTTP request to web servers.
    With Fetch API there is no need of 'XmlHttpRequest' object to perform
    any HTTP request to fetch some information from the servers.

    Fetch API can be work with both Promises and async/await functions.

*/

// defining the 'use strict' statement
'use strict';

// Fetch API working with Promises
function fetchingDataFromTextFile(){
    fetch("http://localhost:5500/24.JavaScript-Web-APIs-Concept/file/solar-system-info.txt")
        .then(response => {
            console.log(response); // to see Response Object
            return response.text(); // returns the response as text formattted
        }) 
        .then(data => {
            console.log(data);
            // passing the data to another function
            displayingMessage(data);
        })
}


function displayingMessage(data){
    const buttonClicked = document.getElementById('getting-data');
    buttonClicked.addEventListener('click', ()=>{
        // displaying the data on click event
        document.getElementById('generating-data').innerText = data;
    }) 
}

fetchingDataFromTextFile();