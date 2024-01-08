/*
    Higher Order Functions- array.reduceRight()
    ===========================================
    array.reduceRight() function executes a reducer function for an array
    element which generally reduces the whole array into a single value
    with a specified case matches(conditional check).

    It is similar like reduce() method bt with a slight different it start
    from last/right side of the array.

    Syntax- 
        array.reduceRight(callbackFunc, initialValue); // takes an callbackFunc, initialValue as optional
        
        e.g- 
            array.reduceRight(function (accumulator, current){

            }, initialValue);

    Information About Those Parameters
    ----------------------------------
    1) "accumulator"--> defines the value from the previous callback. On first callback
                        it will be-     
                                    accumulator = currentIndex
                        In general, it is basically a previous callback value.
    2) "current"    --> defines the position of current callback value in the array.
                        On first callback it is 0. If "currentIndex" was specified 
                        otherwise start from first index as first starting item to reduce to.
                        
*/

// defining the 'use strict' statement
'use strict';



// Example-1
// defining an array
const numbers = [100, 20, 42, 53, 674, 75, 31, 89];
const initialValue = 0;
const summationOfNumbers = numbers.reduceRight((previous, current)=>{
    return previous + current;
}, initialValue);

console.log(summationOfNumbers);


// Example-2
// defining an array
const weeklyEarnings = [456, 234, 653, 756];
const initialEarning = 5000;
const income = weeklyEarnings.reduce((previousValue, currentValue)=>{
    return previousValue + currentValue;
}, initialEarning);

console.log(income);



// Example-3
const firstNames = ['Chandler', 'Joey', 'Rachel', 'Ross', 'Monica', 'Pheobe']
const lastNames = ['Bing', 'Tribianni', 'Green', 'Geller', 'Geller', 'Buffay'];
const initialArray = [];

const fullNames = firstNames.reduce((previous, firstNames, indexValue)=>{
    // now the previous denoted the initiaArray means previous = [] 
    previous.push(firstNames + ' ' + lastNames[indexValue]);
    return previous;
}, [])

console.log(fullNames);
