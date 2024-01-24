/*
    Polyfils Concepts In JS
    =======================
    Polyfils is the concepts of making custom function for the bind(), call() and apply() methods. 
    Now, Why- Because many browsers depending on version does not support these functions so
    need to custom function.

    Syntax-
        Function.prototype.customFuncName = function(){}

*/

let personInfo = {
    name: 'JK',
    age: 28,
    salary: 34000.000
};

const gettingPersonInfo = function(companyName, companyType){
    console.log(this.name + ' ' + this.age + ' ' + this.salary + ' ' + companyName + ' ' + companyType);
}

const getInfo = gettingPersonInfo.bind(personInfo, companyName='Softtech', companyType='IT');
getInfo();


// making a custom bind() method
Function.prototype.customBind = function(...args) {
    let thisObj = this; // though have to return 'this'
    const passedParams = args.slice(1); // here 'args.slice(1)' is the passed params which is not 'this'
    console.log(passedParams);
    return function(){
        thisObj.call(thisObj, passedParams);
    }
};

const getInfoWithCustomBind = gettingPersonInfo.bind(personInfo, companyName='Softtech', companyType='IT');
getInfoWithCustomBind();