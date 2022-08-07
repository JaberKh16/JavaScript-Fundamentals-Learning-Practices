

// defing the 'use strict' statement
'use strict';

// creating a promise to fetch data
const setupPromiseForFetching = new Promise((resolve, reject)=>{
    setTimeout(function(){
        const url = "https://jsonplaceholder.typicode.com/todos";
        const fetchingData = fetch(url); // fetching the setted API url
        resolve(fetchingData); // now resolving the promise for "fetchingData"
    }, 2000);
    
});

setupPromiseForFetching
.then(response=>{ // returns the Response Object which is a promise
    console.log(response); // to see the Response Promise
    return response; // returning the promise so that next thenable gets the promise
})
.then(responseData=>{ // gets the promise as parameter
    const convertedToJsonData = responseData.json(); // converting into json data
    return convertedToJsonData;
})
.then(data=>{
    console.log(data);
})



