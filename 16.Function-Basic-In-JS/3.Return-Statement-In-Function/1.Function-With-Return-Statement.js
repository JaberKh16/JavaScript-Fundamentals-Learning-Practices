/*
    Function With Return Statement
*/

// Declaring 'use strict' statement
'use strict';

// Declaring A Function
function getTheIndexValueOfAnElement() {
    let programmingLanguages = ['C/C++', 'Java', 'JavaScript', 'Python', 'Ruby', 'SQL'];
    const indexValue = programmingLanguages.indexOf('Ruby');
    return indexValue;
}

// Calling The Function
console.log(`Index Value is: ${getTheIndexValueOfAnElement()}`);