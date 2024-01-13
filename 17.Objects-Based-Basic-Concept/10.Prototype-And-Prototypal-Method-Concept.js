/*
    Prototype and Prototypal Method Concept
    =======================================
    ES5 JavaScript feature- Prototype Method is a type of method which can be created 
    through JavaScript Objects - an array or an object or an function type literals.

    Ever wonder when wrote array. and all built-in array related methods shows up. How this
    happening? - array is index based right so should access through indexing here access
    through dot(.) so it's possible because in JS array is an object. Same case as the
    object type or function also. See some expressions -
        
        1. array.someMethod()/properties is equivalent to array.__proto__ or Array.prototype.someMethod()
        2. object.someMethod()/properties is equivalent to object.__proto__.someMethod()
        3. function.someMethod()/properties is equivalent to fun.someMethod/properties

    Return Values From Those Are -
        1. array.__proto__ returns [constructor: f, concat:f, fill:f, append:f, .....] 
        2. object.__proto__ returns { constructor: ƒ Object(), hasOwnProperty: ƒ, isPrototypeOf: ƒ, ... }
        3. func.__proto__ returns function () {[native code]}
    
    Now, remember one thing array.__proto__ is an object also and in JS every objects has its own prototypes
    means array.__proto__ also has its prototype thus - array.__proto__.__proto__ . This case same for the
    other object literals - object or functions.


    Return Values From Above Description Are -
        1. array.__proto__.__proto__ returns {constructor: ƒ, __defineGetter__:f, __defineSetter__:f,  hasOwnProperty: ƒ, isPrototypeOf: ƒ, .....} 
        2. object.__proto__.__proto__ returns null
        3. func.__proto__.__proto__ returns {constructor: ƒ, __defineGetter__:f, __defineSetter__:f,  hasOwnProperty: ƒ, isPrototypeOf: ƒ, .....} 


    Above concepts is nothing but a chaining of Prototypes. See again now-

        1. array.__proto__ == Array.prototype ==> array.__proto__.__proto__ == object.__proto__ == Object.prototype
        2. object.__proto__ == Object.prototype ==> object.__proto__.__proto__ == null 
        3. func.__proto__ == function () { [native code]} ==> func.__proto__.__proto__ == object.__proto__ == Object.prototype


    Syntax-

    a. Prototype With Object
        const ob = {};
        ob__proto__; // to check its prototype
        Object.getPrototypeOf(ob); // to check its prototype

    b. Prototype With Array
        const arr = [];
        arr__proto__; // to check its prototype
        Object.getPrototypeOf(arr); // to check its prototype

    c. Prototype With Functions

        function funcName () {};
        funcName; // to check its prototype
        Object.getPrototypeOf(funcName); // to check its prototype



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

    Note: Prototype Method will be defined inside the __proto__:  if you inspect the object 
    information in the browser console. Now note __proto__ property is considered outdated, 
    and its use is discouraged. Instead, should use Object.getPrototypeOf() to get the 
    prototype of an object.

    Additionally, functions and arrays have different prototypes in JavaScript. 
        - Functions have a Pprototype Object, 
        - Arrays have a Prototype Array,
        - Object have Prototype Object


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
