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

// create the users object
const usersInfo = {
    emailsArray: []
}

// creating a promise for getting response from the api
const getttingAPIResponse = async ()=>{
    // creating a response to store the Response Promise
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUsersData = await response.json(); // converting into json data
    // console.log(jsonUsersData);

    const usersEmailArray = jsonUsersData.map(user =>{
        return usersInfo.emailsArray.push(user.email);
    });

    // console.log(usersEmailArray);
    console.log(usersInfo.emailsArray);

    // taking another function helo to post the information
    postToWebPage(usersInfo.emailsArray);
} 

getttingAPIResponse();

const postToWebPage = (data)=>{
    document.write(`Getting Emails are the following- <br>`);
    for(let i=0; i<data.length; i++){
        document.write(`${data[i]} + "<br>"`);
    }
}

// creating a function to printing the response
