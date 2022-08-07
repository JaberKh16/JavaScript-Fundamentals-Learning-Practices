/*
    Passing An Object As A Parameter To The Object Methods
    
*/

// declaring 'use strcit' statement
'use strict';

// declaring an object
let person = {
    firstName: 'John',
    lastName: 'Korey',
    age: 45,
    daughterInfo: {
        name: 'Sarah',
        age: 12,
        foodEats: 'Junk Food'
    },

    getDaughterInformation: function (personObject){ // passing an object to the function directly as a paramter
        console.log(personObject.fatherName + "has a daughter name"  + personObject.daughterName
        + "who's age is" + personObject.daughterAge + "and mostly eats" + personObject.foodHabit);
    }
};



// caling the obj.getDaughterInformation() to get the information
console.log(person.getDaughterInformation); // provide the function definition

// invoking the function
person.getDaughterInformation({fatherName: 'John', daughterName: 'Jenny', daughterAge:10, foodHabit:'Regular Food'});