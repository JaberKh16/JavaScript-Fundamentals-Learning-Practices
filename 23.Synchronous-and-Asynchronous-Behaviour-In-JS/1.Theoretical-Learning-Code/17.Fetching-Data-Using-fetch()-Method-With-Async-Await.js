/*
    Fetching Data With fetch() Example Of async/await
*/

// defing the 'use strict' statement
'use strict';

// creating a async function to fetch data
const fetchingData = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const jsonFormattedData = await response.json(); // read the data using json()
    console.log(jsonFormattedData);
}

// calling the async function
fetchingData();


