/*
    JavaScript ES6 Features- Default Parameters
    ===========================================
    JavaScript ES6 provides a way of dealing with default parameters
    whereas in ES5 there has not concept of default parameters.
    For Example-

        function functionName(firstName, lastName, gender){
            console.log(`${firstName} ${lastName} is ${gender}`); // John Smit undefined
        }
        functionName('John', 'Smith');
    
    ES5 has to work with 'arguments' to work with default parameters.
    'arguments' is an array like object which has access to all of the arguments
    passed to function while function invokation.

        function functionName(p1, p2){
            console.log(arguments); // to see the 'arguments' array
            console.log(p1, p2, arguments[2], arguments[3])
        }
        functionName(1, 4, 6, 8, 90, 34, 6);

    ES6 provided default parameters working see the example below-
        function functionName(firstName='Richard', lastName='Berry', gender='male'){
            console.log(`${firstName} ${lastName} is ${gender}`); // John Smit undefined
        }
        functionName('John', 'Smith', 'male');
        functionName('John');


*/

// Example-1 ES5 way of working with arguments
function personInfo(firstName, lastName, gender){
    console.log(`Person name is : ${firstName} ${lastName} who is ${gender}`);
}

personInfo('John', 'Smith');

// Solvance of 1.
function personInfo2(firstName, lastName, gender){
    // // with if statement solvance
    // if(gender === undefined){
    //     gender = 'male'
    // }\

    // with OR operation to solve
    gender = gender || 'male';
    console.log(`Person name is : ${firstName} ${lastName} who is ${gender}`);
}
personInfo2('John', 'Smith');


// Solvance of 1.
function personInfo3(firstName, lastName, gender){
    console.log(arguments); // to see arguments Array like 
    console.log(`Person name is : ${firstName} ${lastName} who is ${gender}
    and profession is ${arguments[3]} earns about ${arguments[4]}$}.`);
}
personInfo3('John', 'Smith', 'male', 'programmer', 25000);



// Example-2 ES6 default parameters
function personInfo4(firstName='Jacob', lastName='Richard', gender='male'){ 
    console.log(`Person name is : ${firstName} ${lastName} who is ${gender}.`);
}
personInfo4('John', 'Smith', 'male', 'programmer', 25000);
personInfo4('John');