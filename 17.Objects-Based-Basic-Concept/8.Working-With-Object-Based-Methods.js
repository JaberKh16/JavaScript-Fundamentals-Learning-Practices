/*  
    Wokring With Object Based Methods
    =================================
    Some methods regarding to object literal are the following-
    a)  Object.values(objName)
        - returns the specified object values as an array.
    b)  Object.keys(objName)
        - returns the specified object keys as an array.
*/

// defining the 'use strict' statement
'use strict';

// creating an object
const student = {
    firstName: "Jacob",
    lastName: "Jhonson",
    age: 23,
    gender: "Male",
    enrolledSubjects: function(...subjectsName){
        for(let i = 0; i<arguments.length; i++){
            console.log(`Enrolled Subjects are: ${arguments[i]}`);
        }
    }
}

// gets the object values
console.log(Object.values(student));

// gets the object keys
console.log(Object.keys(student));
