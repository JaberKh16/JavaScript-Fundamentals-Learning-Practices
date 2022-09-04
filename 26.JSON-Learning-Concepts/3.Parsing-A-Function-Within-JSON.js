/*
    Parsing A Function Within JSON
    ==============================
    Though Function are not allowed in JSON, but if needed then can be
    included as a string.

    For Example-
        {
            "key1":"value1",
            "key2":"function(){ return val; }"
        }

*/

// defining  the 'use strict' statement
'use strict';

// defining the object
const personInfo = {
    name: "Jonathan Rack",
    age:34,
    birthdate: "function (){ return  new Date('1994-04-14');}",
    address:{
        street:"5 main st",
        city:"Boston"
    },
    language: ['spanish', 'english']
};


function parsingFunctionFromJSON(personInfo){
    const convertedObj = JSON.parse(JSON.stringify(personInfo));
    console.log(convertedObj);
    let date = convertedObj.birthdate;
    console.log(date);
    date = eval("("+date+")") // eval("exp") to evaluate the specified expression
    console.log(date());
}

parsingFunctionFromJSON(personInfo);
