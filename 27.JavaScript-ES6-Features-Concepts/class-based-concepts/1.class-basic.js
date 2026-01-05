class Person{
    
    constructor(name){
        this.name = name;
    }

    personCanTalk(){
        console.log('Can talk');
    }

}

const person = new Person('JK')
person.personCanTalk();

// see the object
console.log(person); // resulted [Person { __proto__: Object => personCanTalk(), constructor: f(), __proto__:Object }]
console.log(Person); // resulted [class Person]
console.log(Object.getPrototypeOf(person));
