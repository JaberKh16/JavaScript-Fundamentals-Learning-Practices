/*
    Object Properties Assigning Through Variable Creation
*/

// Declaring 'use strict' statement
'use strict';

// Creating A Object
let person = new Object(); // empty object

// Assigning values to the object
person.name = 'Jhon'
person.gender = 'Male'; // assigning with dot(.) operator
person['jobStatus'] = 'Active';


// Assigning values to the object with the help of variable creation
const job = 'profession'; // creating an variable 'job' with value of 'profession'


// assigning value through the idea of object literal ['key'] way
person[job] = "Programmer"; // this will set the value of 'Programmer' with help of variable 'job' 
                            // value which is 'profession' as key or PropertyName for the value of 'Programmer'


// assigning value through the idea of dot(.) operator way
person.job = 'Programmer'; // this will set the keyword/propertyName as 'job' itself as value

// Accessing The Object 
console.log(`${person}`); // seeing the object 'person'



