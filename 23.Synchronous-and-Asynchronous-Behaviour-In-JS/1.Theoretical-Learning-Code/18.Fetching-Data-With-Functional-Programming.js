/*
    Fetching Data With Functional Programming Approach
    ==================================================
    Functional Programming is nothing but similar like callbacks in JS
    which can be passed inside an another function as an argument while
    function definition or can be called upon from function while function
    invokation.

    Advantage of Functional Programming 
    -----------------------------------
    a) Code Reusuability
    b) Scalable or Optimized Code

*/

// defining 'use strict' statement
'use strict';

// create the post object
const postObject = {
    postsArray: []
}

// creating a promise for getting response from the api
const getttingPostResponse = async ()=>{
    // creating a response to store the Response Promise
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonPostsData = await response.json(); // converting into json data
    // console.log(jsonPostsData);

    return jsonPostsData;
} 



// creating a function to printing the response
const printingPostRespone = async function(){
    const postData = await getttingPostResponse(); // wait for gettingPostResponse() function to resolve
    console.log(postData);
    postObject.postsArray = postData;
    console.log(postObject.postsArray);
}

printingPostRespone();

// this line will return an empty array list as definied initially though synchronous statement
console.log(postObject.postsArray); 