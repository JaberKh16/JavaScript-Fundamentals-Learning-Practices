/*
    JavaScript Web Worker API
    =========================
    A Web Worker is a JS worker that runs in the background independently
    of other scripts without affecting the performance of single thread
    though JS is a single threaded language so its a another way of performing
    some large computational work though the web workers.

    Before working with the Web Worker needs to check whether the workers is
    available to the browser or not and to check do the following-

        if(typeof Worker !== "undefined"){ // if Worker not available then its type is 'undefined'
            // Web Worker Available
        }
        else{
            // Doesn't support Web Worker
        }

    To create a web woker do the following-

        let worker; // to define the worker variable later to store the worker object
        if(tyepof(worker) === "undefined"){
            worker = new Worker(file_url); // file_url must be .js file
        }
    
    From the Worker Files there is a method to post the message to general
    script file after the web worker work is being done. The method is

        postMessage(data); // postMessage() is used to post the data after working is done

    To listen to the web worker data after the worker work is being done there's
    a another function-
        
        worker.onmessage = function(event){
            // worker.onmessage is used to received the workers data
            var data = event.data; // event.data provides the workers data
        }

    To terminate a worker there's a another method-
        worker.terminate(); // only stops the worker, but worker exists
        worker = undefined; // to destroy the worker object
    
*/

// defining the 'use strict' statement
'use strict';

// defining a worker variable to store the Worker Object
let worker; 

// getting the start-worker id button
const startWebWorker = document.getElementById('start-worker');
startWebWorker.addEventListener('click', function (){
    // check whether the Web Worker Available or not
    if(typeof Worker !== "undefined"){
        // Web Worker is Available
        
        // checking the worker started or not
        if(typeof(worker) === "undefined"){
            worker = new Worker("./web_worker_file/worker_file.js");
        }
        // listening from the worker file
        worker.onmessage = function(event){
            document.getElementById('result').innerHTML = event.data;
        }
    }
    else{
        // Doesn't support the Web Worker
        alert("Web Workers Not Avaiable.");
    }
});

// getting the 'stop-worker' id button
const stopWebWorker = document.getElementById('stop-worker');
stopWebWorker.addEventListener('click', function (){
    // check whether the Web Worker Available or not
    if(typeof Worker !== "undefined"){
        // Web Worker is Available

        // terminating the worker
        worker.terminate();
        worker = "undefined"; // to destroy the worker
    }
    else{
        // Doesn't support the Web Worker
        alert("Web Workers Not Avaiable.");
    }
});


// getting the 'generate-text' id button
const generatedText = document.getElementById('generate-text');
generatedText.addEventListener('click', function printingMessage(){
    alert("Alerting Message.");
});
