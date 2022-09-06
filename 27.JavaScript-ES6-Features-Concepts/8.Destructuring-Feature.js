/*
    JavaScript ES6 Features- Destructuring 
    ======================================
    In ES6 feature of Destructuring any objects or array can element
    can be destructured.
    For Example-
        // destructuring array element
        const arr = [10, 20, 40, 50];
        const [v1, v2] = arr; // stores v1=10, v2=20

        // destructuring objects properties
        const obj = {
            property1: value1,
            property2: value2,
            property3: function (){

            },
        }
        const {v1, v2} = obj; // stores v1 = value1, v2 = value3 


*/

// destructuring array elements
const fruits = ['banana', 'apple', 'guava', 'lichie'];
const [banana, apple, ...otherFruits] = fruits;
console.log(banana, apple, otherFruits);

// destructuring objects properties
let personInfo = {
    name: "Jonathan Smith",
    age: 34, 
    gender: 'Male',
    profession: "Programmer",
    languageKnown: ['C++', 'Java', 'JavaScript', 'Python']
}

const {personName, personAge, ...personOtherInfo} = personInfo;
console.log(personInfo.personName, personInfo.personAge, personOtherInfo);

// destructuring object & nested object & combine object into single object
let userInfo = {
    name: 'Mike',
    friend: ["John", "Paul", "Jimmy"],
    location: {
        region:"England",
        country:"United Kingdom"
    },
    aboutMe: {
        status: "Single",
        pet: "Dog",
    }
}

const { userName, userFriend, userLocation } = userInfo;
console.log(userName); // output: "Mike"
console.log(userFriend);  // output: [ 'John', 'Paul', 'Jimmy' ]
console.log(userLocation); // output: { region: 'England', country: 'United Kingdom' }
// console.log(status); // output: "Single"
// console.log(pet); // output: "Dog"
