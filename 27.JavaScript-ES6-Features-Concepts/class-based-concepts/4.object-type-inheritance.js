const Person = {
    name: 'JK',
    age: 30,
    gender:'Male',
    allInfo: function(){
        return `Name:${this.name}, Age:${this.age}. Gender: ${this.gender}`;
    }
}

const person = Object.create(Person); // creatring the object prototype
person.allInfo();


// perform a inherit
const person2 = {};
Object.setPrototypeOf(person2, Person); // setPrototyoeOf(object, inheritObj)

