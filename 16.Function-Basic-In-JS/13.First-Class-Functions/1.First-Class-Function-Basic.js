/*
    First Class Functions Basic Concept
    ===================================
    First Class Function are those function which are being passed as an arguments to
    another function call(invokation) or called parameters when defining the function.
    So, if a function is passed inside another function as arguments then those 
    arguemnts are nothing but the values(returned result) and when functions
    are treated like values then those passed functions are considered 
    as "First Class Functions". 

    For Example-
        let sum = function(para){
            console.log(para);
        }
        sum(function(){

        });

*/

// defining the 'use strict' statement
'use strict';


function gettingRadiusValue(){
    const radius = 5;
    return radius;
}

function findingAreaOfCircle(gettingRadiusValue){
    return 2 * Math.PI * gettingRadiusValue();
}

// invoking another function to this function as an argument passing
const areadOfCircle =  findingAreaOfCircle(gettingRadiusValue);
console.log(areadOfCircle);


