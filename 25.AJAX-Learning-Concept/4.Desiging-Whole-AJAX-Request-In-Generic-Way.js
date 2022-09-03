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
            if(this.status === 200){
                resolve(this.response);
            }
        }

        // sending request
        xhttp.send();
    });

    return Promise;
    
};


// selecting the getting-data button
const getData = document.getElementById('getting-data');
getData.addEventListener('click', function(){
    sendRequest("GET", "https://jsonplaceholder.typicode.com/posts")
        .then(responseData => {
            console.log(responseData);
        }).catch(error =>{
            console.log(`Error: ${error.message}`);
        })
});



// selecting the sending-data button
const sendData = document.getElementById('sending-data');
sendData.addEventListener('click', function(){
    sendRequest("GET", "./file/person-info.json")
        .then(responseData => {
            console.log(responseData);
        }).catch(error =>{
            console.log('Error hits..');
        })
});