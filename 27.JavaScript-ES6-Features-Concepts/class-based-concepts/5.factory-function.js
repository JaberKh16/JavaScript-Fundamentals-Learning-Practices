// Factory Function
function greetMessage(name){
    return {
        name
    }
}

const seena = greetMessage('Seena');
console.log(seena);


// Constructor Function
function Person(name){
    this.name = name
}

const rock = new Person('Rock');
console.log(rock); 