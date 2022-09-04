/*
    Parsing Date Object Within JSON
    ===============================
    Parsing a Date object within JSON is not possible in normal
    way because JSON doesn't have Date datatypes but there's two
    way of working with Date object within JSON.

    1) defining Date as an string type within the JSON as value
    2) using the JSON.parse() another parameter- 'revive' 

    'revive' is a function that checks each property before returning the
    value.
    
*/

// defining the 'use strict' statement
'use strict';

// defining the object
const personInfo = {
    name: "Jonathan Rack",
    age:34,
    birthdate: "1994-04-14",
    address:{
        street:"5 main st",
        city:"Boston"
    },
    language: ['spanish', 'english']
};

// working with JSON.parse() normal way
const button1 = document.getElementById('parsing-dates1');
button1.addEventListener('click', ()=>{
    parsingTheDateOnly(personInfo);
});

function parsingTheDateOnly(personInfo){
    const convertedObj = JSON.parse(JSON.stringify(personInfo));
    let birthdate = convertedObj.birthdate;
    // console.log(convertedObj);
    birthdate = new Date(birthdate);
    console.log(birthdate);
};



// working with JSON.parse() 2nd parameter 'revive'
const button2 = document.getElementById('parsing-dates2');
button2.addEventListener('click', ()=>{
    parsingTheDateOnlyWithReviveParameter(personInfo);
});


function parsingTheDateOnlyWithReviveParameter(personInfo){
    const convertedObj = JSON.parse(JSON.stringify(personInfo), function(key,value){
        if(key === 'birthdate'){
            return new Date(value)
        }
        else{
            return value;
        }
    });
    console.log(convertedObj);
};