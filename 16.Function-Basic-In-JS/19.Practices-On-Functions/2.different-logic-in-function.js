// Function Statement - Function Definition is Function Statement
function a(){

};

// Function Expression - Function assigned to variable where functin acts like a value is Expression
const b = function (){

};

// Difference between Function Statement and Function Expression ==> Hoisting

// Function Declaration - Function Statement is Function Declaration
function a1(){

};

// Anonymous Function - Doesn't have its identity because function have name and its a type of Function Expression
// function (){ 

// }

// Named Function Expression - Named Function assign to a variables to act like value
const namedFuncExpression = function a2 (){

};


// Parameters -  Function Definition having args/local variables are called paramerts

// Arguments - When invoking passing values are called Arguments.

// Arrow Function - () => {} is the Arrow Function which can assigned to variable where that will act as value
const num = ()=>{

};

// First Class Function - A function containg a function as arguments which has the ability to act as - value, return function
const firstClassFunc = (param)=>{
    return param;
}
function param(){};
firstClassFunc(param); // function passing as 'param' is a function - Passed Named Function as argument
