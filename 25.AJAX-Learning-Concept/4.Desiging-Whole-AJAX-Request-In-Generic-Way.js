// defining the 'use strict' statement
'use strict';

// defining the function to perform the sending request to the server
const sendRequest = function (method_type, url, content=null){
    const promise = new Promise((resolve, reject)=>{
        // initialize the request 
        const xhttp = new XMLHttpRequest();

        // requesting to the server
        xhttp.open(method_type, url, true);

        // processing to the request when response is ready
        xhttp.onload = function (){
            resolve(this.response);
        }

        // to handle any kind of application error
        xhttp.onerror = function(){
            if(this.status >= 400){
                reject(`Reuqest Hits an ${this.status}`);
            }
        }

        // setting the content-type when working POST request
        xhttp.setRequestHeader('content-type', "application/json");

        // sending request
        xhttp.send(content);
    });

    return promise;
    
};


// selecting the getting-data button
const getData = document.getElementById('getting-data');
getData.addEventListener('click', function(xhttp){
    sendRequest("GET", "https://jsonplaceholder.typicode.com/posts")
        .then(responseData => {
            console.log(JSON.parse(responseData));
        }).catch(error =>{
            console.log(`Error: ${error.message}`);
        })
});



// selecting the sending-data button
const sendData = document.getElementById('sending-data');
sendData.addEventListener('click', function(){
    sendRequest("POST", "https://jsonplaceholder.typicode.com/posts", 
        JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
    ).then(responseData => {
            console.log(JSON.parse(responseData));
        }).catch(error =>{
            console.log(`Error: ${error.message}`);
        })
});