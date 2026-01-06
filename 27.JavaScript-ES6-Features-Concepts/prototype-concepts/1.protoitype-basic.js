// object
const ob = {}
console.log(ob)

// array 
const arr = [1, 2, 4];
console.log(arr.__proto__);


// string
const str = "This"
console.log(str.__proto__);


// function
function Person(){
    this.name = 'JS';
}

const person = new Person()
Person.prototype === person.__proto__