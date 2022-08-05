/*
    Multiple Objects Inside An Array With 'this' Keyword
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
            return (this.name + " is a " + this.profession
            + "earned about " + this.salary + "$ per year");
        }
    },

    {
        name: "Jacob", 

        age:37, 
        profession:"Python Developer", 
        salary:65000.00,
        nameAndProfessionAndSalary: function concanatedNameAndProfessionAndSalary(){
            return (this.name + " is a " + this.profession
            + "earned about " + this.salary + "$ per year");
        }
    }
    
];



for(let i=0; i<persons.length; i++){
    // Accessing The Object
    console.log(`Person- ${i+1}`);
    console.log(`Person Name: ${persons[i].name}`); // get the value of the prototype(key) value
    console.log(`Person Profession[: ${persons[i].profession}`); // get the value of the prototype(key) value 
    console.log(persons[i].nameAndProfessionAndSalary());    
}