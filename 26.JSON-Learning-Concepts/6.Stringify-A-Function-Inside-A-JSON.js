/*
    Stringify A Function Inside JSON
    =================================
    JSON.stringify() removes any function if being specified inside 
    the JS object basically it will remove that object property
    which has its value as a function definition.

    For Example-
        const info = {name:"X", date:function (){ return v; }};
        const json = JSON.stringify(info); // returns the JSON removing the function specified property

    
    To control this behaviour of removing the function specified property convert
    that particular property to a string and then pass it to the JSON.stringify()
    to convert the object to JSON data.

        const date = info.date.toString();
        const json = JSON.stringify(info);

*/

// defining  the 'use strict' statement
'use strict';

// defining the object
const personInfo = {
    name: "Jonathan Rack",
    age:34,
    birthdate:function (){ return new Date('1994-04-14'); },
    address:{
        street:"5 main st",
        city:"Boston"
    },
    language: ['spanish', 'english']
};

// resulted the function specified property is being omitted
(function stringifyFunction(personInfo){
    const jsonData = JSON.stringify(personInfo);
    console.log(jsonData);
})(personInfo);


// omitting the removing issue of function specified property
(function convertingBeforestringifyFunction(personInfo){
    // first converting the function specified property into a string
    const date = personInfo.birthdate.toString();
    personInfo.birthdate = date;
    const jsonData = JSON.stringify(personInfo);
    console.log(jsonData);
})(personInfo);