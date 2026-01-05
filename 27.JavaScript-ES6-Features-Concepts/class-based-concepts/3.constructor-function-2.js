/*
  Constructor Function Template with Prototypal Behavior

  This example demonstrates the traditional JavaScript pattern for
  object creation *before ES6 classes*.

  Key Concepts:
  - `Person` is a constructor function
  - Instance-specific data is assigned inside the constructor
  - Shared behavior is defined on `Person.prototype`
  - All instances delegate method calls through the prototype chain

  Prototype Chain:
    personInstance
      → Person.prototype
          → Object.prototype
              → null

  Benefits:
  - Methods are created once and shared across instances
  - Lower memory usage compared to defining methods in the constructor
  - Explicit and transparent use of JavaScript’s prototypal inheritance
*/

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

// Shared behaviors (prototype methods)
Person.prototype.canTalk = function () {
  return 'can talk';
};

Person.prototype.canWalk = function () {
  return 'can walk';
};

// Example usage
const person1 = new Person('Jaber', 25, 'Male');
const person2 = new Person('Alex', 30, 'Female');

console.log(person1.canTalk()); // "can talk"
console.log(person2.canWalk()); // "can walk"
