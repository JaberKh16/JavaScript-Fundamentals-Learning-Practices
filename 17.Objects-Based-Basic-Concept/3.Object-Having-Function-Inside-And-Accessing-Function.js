/*
    Object Having Function And Accesing Function From An Object
*/

// Declaring 'use strict' statement
'use strict';

// Creating A Object
let person = {
    name: "Jhon", 
    age:34, 
    profession:"C++ Developer", 
    salary:45000.00,
    nameAndProfessionAndSalary: function concanatedNameAndProfessionAndSalary(){
        return (person.name + " is a " + person.profession
        + "earned about " + person.salary + "$ per year");
    }
};

// Accessing The Object
console.log(`Person Name: ${person.name}`); // get the value of the prototype(key) value
console.log(`Person Profession: ${person.profession}`); // get the value of the prototype(key) value
console.log(person.nameAndProfessionAndSalary());