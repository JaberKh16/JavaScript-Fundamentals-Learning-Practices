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
        const {property1, property2} = obj; // stores v1 = value1, v2 = value3 

    When destructuirng objects it is necessary to have the same exact property
    name while destructuring those property values, otherwise new name will
    considered as new variable thus values of those properties will be 
    'undefined'.
*/

// destructuring array elements
const fruits = ['banana', 'apple', 'guava', 'lichie'];
const [fruit1, fruit2, ...otherFruits] = fruits;
console.log(fruit1, fruit2, otherFruits);

// destructuring objects properties
const personInfo = {
    personName: "Jonathan Smith",
    personAge: 34, 
    gender: 'Male',
    profession: "Programmer",
    languageKnown: ['C++', 'Java', 'JavaScript', 'Python']
}

const {personName, personAge, ...personOtherInfo} = personInfo;
console.log(personName, personAge, personOtherInfo);

// destructuring object & nested object & combine object into single object
let userInfo = {
    UserName: 'Mike',
    UserFriend: ["John", "Paul", "Jimmy"],
    UserLocation: {
        region:"England",
        country:"United Kingdom"
    },
    UserAboutMe: {
        status: "Single",
        pet: "Dog",
    }
}

const { userName, userFriend, userLocation, userAboutMe:{status, pet} } = userInfo;
console.log(userName); // output: "Mike"
console.log(userFriend);  // output: [ 'John', 'Paul', 'Jimmy' ]
console.log(userLocation); // output: { region: 'England', country: 'United Kingdom' }
console.log(UserAboutMe); // output: "Single"
console.log(UserAboutMe.pet); // output: "Dog"
