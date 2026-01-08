/*
    Object Methods Concepts in JavaScript
    =====================================
    In JavaScript, objects can have methods, which are functions associated with the object. Methods are defined as properties of the object that hold function definitions.
    
    Key Points:
    1. Defining Methods: Methods are defined using function expressions or arrow functions as property values.
    2. Accessing Methods: Methods can be accessed and invoked using dot notation or bracket notation.
    3. The 'this' Keyword: Inside a method, 'this' refers to the object that the method is called on, allowing access to other properties and methods of the same object.
    4. Method Invocation: Methods are invoked by appending parentheses after the method name, optionally passing arguments if required.
    
    Methods:
        1.  Object.freeze(): This method freezes an object, preventing new properties added, removed or modified.
        2.  Object.seal(): This method seals an object, preventing new properties from being added and marking all existing properties as non-configurable.
        3.  Object.keys(): This method returns an array of a given object's own enumerable property names.
        4.  Object.values(): This method returns an array of a given object's own enumerable property values.
        5.  Object.entries(): This method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
        6.  Object.hasOwn(): This method checks if an object has a specific property as its own property (not inherited).
        7.  Object.getPrototypeOf(): This method returns the prototype (i.e., the internal [[Prototype]] property) of the specified object.
        8.  Object.setPrototypeOf(): This method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.
        9.  Object.create(): This method creates a new object with the specified prototype object and properties.
        10. Object.assign(): This method copies all enumerable own properties from one or more source objects to a target object and returns the target object.
    

*/

const person = {
    name: "Jhon", 
    age:34, 
    profession:"C++ Developer", 
    salary:45000.00,
    nameAndProfessionAndSalary: function concanatedNameAndProfessionAndSalary(){
        return (person.name + " is a " + person.profession
        + "earned about " + person.salary + "$ per year");
    }
};


// freeze the object
Object.freeze(person);

// Trying to modify the frozen object
person.age = 35; // This will not change the age property
person.newProperty = "New Value"; // This will not add a new property
console.log("After freeze attempt:", person);


// seal the object
Object.seal(person);

// Trying to modify the sealed object
person.profession = "Java Developer"; // This will change the profession property
person.anotherNewProperty = "Another New Value"; // This will not add a new property
console.log("After seal attempt:", person);



// Get keys of the object
const keys = Object.keys(person);
console.log("Object Keys:", keys);

// Get values of the object
const values = Object.values(person);
console.log("Object Values:", values);

// Get entries of the object
const entries = Object.entries(person);
console.log("Object Entries:", entries);

// Check if the object has a specific property
const hasName = Object.hasOwn(person, 'name');
const hasAddress = Object.hasOwn(person, 'address');
console.log("Has 'name' property:", hasName);
console.log("Has 'address' property:", hasAddress);


// Get prototype of the object
const prototype = Object.getPrototypeOf(person);
console.log("Object Prototype:", prototype);

// Create a new object with the prototype of person
const newPerson = Object.create(person);
newPerson.name = "Doe";
console.log("New Person:", newPerson);
console.log("New Person's Profession (inherited):", newPerson.profession);

// Assign properties from one object to another
const additionalInfo = { country: "USA", city: "New York" };
Object.assign(person, additionalInfo);
console.log("After Object.assign:", person);