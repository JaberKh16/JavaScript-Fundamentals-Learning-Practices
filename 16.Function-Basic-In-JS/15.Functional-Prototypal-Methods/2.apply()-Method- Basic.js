/*
    Functional Prototypal Method- apply() Method
    ===========================================
    apply() method basically used to apply a function to an object. It is similar like call()
    but the major difference is passing the arguements - here 'arguments' passed as array list.

    Now note- 'this' keyword referes to object can be different in terms of scope where the 'this' keyword 
    is being written(basically whether its on Global, an object). This apply() Method invokes the
    function 'this' as an argument as well as take others arguments as an array or array-like 
    object format.

    Syntax-
        someFunc.apply(thisArg,, [arg1, arg2, ..]);
    
    Here, 'thisArg' can be a function or can be object also which is being invokes as an argument to
    this 'someFunc' thus that 'someFunc' can be used as that invoked object('thisArg') function
    because now 'someFunc' having the block scope of that specified 'thisArg'.
    
    
*/

// Example-1
const JD_INFO1 = {
    offerTitle: 'Full Stack Web Developer',
    offerRoleType: 'Mid Level',
    offerTechStack: ['PHP', 'JavaScript', 'Laravel', 'Node', 'React'],
    offerSalary: 40000
}

const JD_INFO2 = {
    offerTitle: 'Backend Web Developer',
    offerRoleType: 'Entry Level',
    offerTechStack: ['Laravel', 'Node'],
    offerSalary: 30000
}

// function will be common
const getJDInformation = function(companyName, companyType){
    return this.offerTitle + '' + this.offerRoleType + '' + this.offerTechStack + '' + this.offerSalary + companyName + companyType;
}

const getPostJD1 = getJDInformation.apply(JD_INFO1, ['Enosis Solution', 'IT']);
const getPostJD2 = getJDInformation.apply(JD_INFO2, ['Field Nation', 'IT & Businness Consultance']);
console.log(getPostJD1);
console.log(getPostJD2);



// Example-2
let personInfo = {
    firstName: 'John',
    lastName: 'Smith',
    age: 34,
    gender: 'Male',
    fullName: function (){
        return this.firstName + ' ' + this.lastName;
    }
}

let personProfessionInfo ={
    profession: 'Developer',
    experiencedYear: 4,
    designation: 'Senior Software Developer'
}

try{
    // before invoking this function through call()
    const gettingPersonInfo1 = function (companyName, division){
        console.log(this); // now 'this' has the scope of global
        console.log(`${this.fullName()} who age is ${this.age} works at ${companyName} in ${division} division.`);
    }
    gettingPersonInfo1(); // hits a TypeError: this.fullName() is not a function
}catch(error){
    console.log(error.toString());
}




// solvance through apply()
const gettingPersonInfo = function (companyName, division){
    console.log(this); // now 'this' has the scope of 'personInfo' object
    console.log(`${this.fullName()} who age is ${this.age} works at ${companyName} in ${division} division.`);
}

gettingPersonInfo.apply(personInfo, ['Enosis Solution', 'IT']);


// another example of apply()
const gettingProfessionInfo = function (callback){
    // using the callback function concept here invoking with call()
    callback.call(personInfo, 'EycleTech', 'IT');
    console.log(`He is a ${this.designation} have experience of ${this.experiencedYear} years as a ${this.profession}.`);
}

// passed 'getttingPersonInfo' function as an array
gettingProfessionInfo.apply(personProfessionInfo, [gettingPersonInfo]);