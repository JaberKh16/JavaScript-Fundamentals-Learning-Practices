/*
    Object Inheritance Concepts
    ===========================
    In JS, From pure object inheritance is possible. Basically it is under the
    Object.
    
    Object provides some methods to work on the Object creation and manipulation
    of that Object. This way of creating object passed the prototypal properties
    to the creation object. Thus created object gets all the properties and methods.
    
    Object Based Methods:
    ---------------------
    1. Object.create(obj) ----> to create an Object

*/

const personInfo = {
    name: 'RK',
    age: 36,
    gender: 'Male',
    jobInformation: {
        position: "Full Stack",
        level: "Mid Level",
        companyName: "Anonymous",
        companyType: "IT",
        salary: 42342.2323,
        technicalStack: ['C++', 'PHP', 'Laravel', 'PWS']
    }
};

const user = Object.create(personInfo);
console.log(user);


// check if the personInfo.__proto__ === user.__proto__
console.log(user.prototype == personInfo.__proto__);