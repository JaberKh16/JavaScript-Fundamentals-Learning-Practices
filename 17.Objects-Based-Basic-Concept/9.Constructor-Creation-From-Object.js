/*
    Constructor Creation Of Object Literal
    =====================================
    From a Object Literal(JavaScript Object) is the ES5 JavaScript
    feature to create object. Thus, ES5 also provide a feature of
    Constructor for an object literal which resolve the issue
    of multiple object creation issues. This is also called 
    Function Constructor.
    
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

*/

// defining the 'use strict' statement
'use strict';

// creating an object
function studentInfo(firstName, lastName, age, gender) {
    console.log('Instantiated the constructor..');
    this.firstName = firstName; 
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.getFullInfo = function(){
        return `Student Name is: ${this.firstName} ${this.lastName} who's age
        is ${this.age} and is a ${this.gender} person.`;
    }
}

// instantiate the object
const student1 = new studentInfo('Jacob', 'Jonathan', 23, 'Male');
const student2 = new studentInfo('Jenny', 'Doe', 20, 'Female');

// accessing the object property
console.log(student1.firstName);
console.log(student1.age);

// accessing the object method
console.log(student1.getFullInfo());
console.log(student2.getFullInfo());
