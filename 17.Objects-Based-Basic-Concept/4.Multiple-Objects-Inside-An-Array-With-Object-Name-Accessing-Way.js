/*
    Multiple Objects Inside An Array With Object Name Accessing Way
*/

// Declaring 'use strict' statement
'use strict';

// Creating A Object
let persons = 
[ 
    {
        name: "Jhon", 
        age:34, 
        profession:"C++ Developer", 
        salary:45000.00,
        nameAndProfessionAndSalary: function concanatedNameAndProfessionAndSalary(){
            return (persons.name + " is a " + persons.profession
            + "earned about " + persons.salary + "$ per year");
        }
    },

    {
        name: "Jacob", 

        age:37, 
        profession:"Python Developer", 
        salary:65000.00,
        nameAndProfessionAndSalary: function concanatedNameAndProfessionAndSalary(){
            return (persons[1].name + " is a " + persons[1].profession
            + "earned about " + persons[1].salary + "$ per year");
        }
    }
    
];

// Accessing The Object
console.log(`Person Name[1]: ${persons[1].name}`); // get the value of the prototype(key) value
console.log(`Person Profession[1]: ${persons[1].profession}`); // get the value of the prototype(key) value
console.log(persons[1].nameAndProfessionAndSalary());