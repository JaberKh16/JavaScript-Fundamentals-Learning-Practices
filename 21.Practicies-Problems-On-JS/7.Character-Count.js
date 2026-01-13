
/*
    Problem:  Character Count Program

    Statement: function("Something is 121312")

    {
        'S': 1,
        'm': 2,
        'i': 3,
        1: 1,
        3: 2
    }
*/

// Solution: 1
function characterCount(passedStr)
{
    // make an object which will return at the end
    let returnObject = {};
    // loop over the passedStr for each character
    // 1. if the char is number/letter and is a key in object => add 1 to count
    // 2. if the char is number/letter and not in object => add it to the object and set value to 1
    // 3. if the char is something else(special chars) dont do anything
    for(let i = 0; i < passedStr.length; i++){
        let char = passedStr[i].toLowerCase();
        if(returnObject[char] > 0){
            returnObject[char]++;
        } else {
            returnObject[char] = 1;
        }
    }
    
    // return at the end
    return returnObject;
}


// Solution: 2 (Refactored)
function characterCountRefactored(passedStr)
{
    let returnObject = {};
    
    for(let char of passedStr){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char) === false){
            continue;
        }
        if(returnObject[char] > 0){
            returnObject[char]++;
        } else {
            returnObject[char] = 1;
        }
    }
    
    return returnObject;
}

// Solution: 3 (Refactored with Helper Function)
// check alphanumeric
function isAlphaNumeric(char){
    let code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) && // numeric (0-9)
       !(code > 64 && code < 91) && // upper alpha (A-Z)
       !(code > 96 && code < 123))  // lower alpha (a-z)
       {
           return false;
       }
    return true;
}


function characterCountRefactoredWithHelperFuncton(passedStr)
{
    let returnObject = {};
    for(let char of passedStr){
        if(isAlphaNumeric(char) === false){
            continue;
        }
        char = char.toLowerCase();
        if(returnObject[char] > 0){
            returnObject[char]++;
        } else {
            returnObject[char] = 1;
        }
    }
    
    return returnObject;
}

let result = characterCount('Hello');
let resultRefactored = characterCount('Hello2$@');
console.log(resultRefactored);


