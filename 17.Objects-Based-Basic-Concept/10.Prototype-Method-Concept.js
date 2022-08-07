/*
    Prototype Method Concept
    =========================
    ES5 JavaScript feature- Prototype Method is a type of
    method which can be created through JavaScript Object
    literal.
    Syntax-
        function ObjectName(propertyName1, propertyName2){
            this.propertyName1 = propertyName1;
            this.propertyName2 = propertyName2;
            
            this.methodName = function(p1){
                return ${this.p1};
            }

        }

        // creating object instance
        const objectInstanceName = new ObjectName(arg1, arg2, arg3);
        
        // accessing object property
        objectInstanceName.propertyName1;
        
        // accessing object method
        objectInstanceName.methodName(); 

        // prototype method creation
        ObjectName/ConstructorName.prototype.methodName= function(){

        }
    
    Use Case Of Prototype Method
    ----------------------------
    One use case of Prototype Method is instead of putting a function
    inside the Constructor, create the prototype method.

    Note: Prototype Method will be defined inside the __proto__:  if you
    inspect the object information in the browser console.
*/

// defining the 'use strict' statement
'use strict';

// creating an object
function studentInfo(firstName, lastName, age, gender) {
    this.firstName = firstName; 
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
}

// instantiate the object
const student1 = new studentInfo('Jacob', 'Jonathan', 23, 'Male');
const student2 = new studentInfo('Jenny', 'Doe', 20, 'Female');

// creating a prototype method
studentInfo.prototype.getFullInfo = function () {
    return `Student Name is: ${this.firstName} ${this.lastName} who's age
    is ${this.age} and is a ${this.gender} person.`;    
}

// creating another prototype method for enrolled subjects
studentInfo.prototype.getSubjects = function(...enrolledSubjects){
    this.enrolledSubjects = enrolledSubjects;
    return `${this.enrolledSubjects}`;
}


// calling the prototype method
console.log(student1);
console.log(student1.getFullInfo());
console.log(student1.getSubjects('OOP', 'Algorithm'));
