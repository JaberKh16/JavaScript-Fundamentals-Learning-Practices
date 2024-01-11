/*
    Functional Prototypal Method- bind() Method
    ===========================================
    'this' keyword referes to object can be different in terms of scope where the 'this' keyword
    is being written(basically whether its on Global, an object). This bind() Method returns
    a function and also allow passing arguments as an array or as a no. of arguments.
    
    Syntax-
        someFunc.bind(thisArg,, [arg1, arg2, ..], arg3, arg4,...);
    
    Here, 'thisArg' can be a function or can be object also which is being
    invokes as an argument to this 'someFunc' thus that 'someFunc' can be
    used as that invoked object('thisArg') function because now 
    'someFunc' having the block scope of that specified 'thisArg' and creates
    a new function which can be called later.

    Unlike the call(), apply() methods which executes the current function immediately whereas 
    bind() method returns a copy of the binds function (instead of invoking a 
    function immediately) which can be called later.

    Use Case Of bind() Method
    -------------------------
    bind() method can be used with events like 'onClick' where you don't know
    when they will fired but you knw the desired context.

        someFunc.bind(context, [arg1, arg2], arg3, ..);

    bind() Methdo supports default parameter passing as well as other arguments.
    
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
const getJDInformation = function(companyName, companyType, postDate){
    return this.offerTitle + '' + this.offerRoleType + '' + this.offerTechStack + '' + this.offerSalary + companyName + companyType + '' + postDate;
}

const getPostJD1 = getJDInformation.bind(JD_INFO1, ['Enosis Solution', 'IT'], '17-July,2021');
const getPostJD2 = getJDInformation.bind(JD_INFO2, ['Field Nation', 'IT & Businness Consultance'], '17-July,2022');
console.log(getPostJD1);
console.log(getPostJD2);

// invoking function
getPostJD1();


// Example-2
// creating objects
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
    // before invoking this function through bind()
    const gettingPersonInfo1 = function (companyName, division){
        console.log(this); // now 'this' has the scope of global
        console.log(`${this.fullName()} who age is ${this.age} works at ${companyName} in ${division} division.`);
    }
    gettingPersonInfo1(); // hits: returns a TypeError: this.fullName() is not a function
    // gettingPersonInfo1.bind(personInfo, 'Eyenet', 'Software-IT'); 
}catch(error){
    console.log(error);
}




// solvance through bind()
const gettingPersonInfo = function (companyName, division){
    console.log(this); // now 'this' has the scope of 'personInfo' object
    console.log(`${this.fullName()} who age is ${this.age} works at ${companyName} in ${division} division.`);
}

const gettingPersonalInfo = gettingPersonInfo.bind(personInfo, ['Enosis Solution'], 'IT'); 
gettingPersonalInfo();

// another example of bind()
const gettingProfessionInfo = function (callback){
    // adding arguments through apply()
    // using the callback function concept here invoking with apply()
    callback.apply(personInfo, ['EycleTech', 'IT']);
    console.log(`He is a ${this.designation} have experience of ${this.experiencedYear} years as a ${this.profession}.`);
}

// passed 'getttingPersonInfo' function as an argument
const gettingPersonProfessionalInfo = gettingProfessionInfo.bind(personProfessionInfo, gettingPersonInfo);
gettingPersonProfessionalInfo();