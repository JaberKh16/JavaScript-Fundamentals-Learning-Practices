/*
    Functional Prototypal Method- call() Method
    ===========================================
    call() method basically used to call on a function to an object. Its basically invoke
    a function to an object.

    Now note- 'this' keyword referes to object can be different in terms of scope where 
    the 'this' keyword is being written(basically whether its on Global, an object). 
    This call() Method invokes the function 'this' as an argument as 
    well as take others arguments.

    Syntax-
        someFunc.call(thisArg,, arg1, arg2, ...);
    
    Here, 'thisArg' can be a function or can be object also which is being
    invokes as an argument to this 'someFunc' thus that 'someFunc' can be
    used as that invoked object('thisArg') function because now 
    'someFunc' having the block scope of that specified 'thisArg'.

    Use Case Of call() Method
    -------------------------
    - Function Borrowing
    
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

const getPostJD1 = getJDInformation.call(JD_INFO1, 'Enosis Solution', 'IT');
const getPostJD2 = getJDInformation.call(JD_INFO2, 'Field Nation', 'IT & Businness Consultance');
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
    gettingPersonInfo1(); // hits an TypeError: this.fullName() is not a function
}catch(error){
    console.log(error.toString());
}




// solvance through call()
const gettingPersonInfo = function (companyName, division){
    console.log(this); // now 'this' has the scope of 'personInfo' object
    console.log(`${this.fullName()} who age is ${this.age} works at ${companyName} in ${division} division.`);
}

gettingPersonInfo.call(personInfo, 'Enosis Solution', 'IT');


// another example of call()
const gettingProfessionInfo = function (callback){
    // using the callback function concept
    callback.call(personInfo, 'EycleTech', 'IT');
    console.log(`He is a ${this.designation} have experience of ${this.experiencedYear} years as a ${this.profession}.`);
}

// passed 'getttingPersonInfo' function as an argument
gettingProfessionInfo.call(personProfessionInfo, gettingPersonInfo);