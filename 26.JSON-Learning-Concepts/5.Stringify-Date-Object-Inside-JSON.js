/*
    Stringify Date Object In JSON
    =============================
    JSON.stringify() method converts the Date Object into a JSON string
    automatically if being defined within a object as one of its 
    property value.

    For Example-
        const info = {name:"X", date:new Date()};
        const json = JSON.stringify(info);

*/

// defining  the 'use strict' statement
'use strict';

// defining the object
const personInfo = {
    name: "Jonathan Rack",
    age:34,
    birthdate: new Date('1994-04-14'),
    address:{
        street:"5 main st",
        city:"Boston"
    },
    language: ['spanish', 'english']
};


(function stringifyDateObject(personInfo){
    const jsonData = JSON.stringify(personInfo);
    console.log(jsonData);
})(personInfo);