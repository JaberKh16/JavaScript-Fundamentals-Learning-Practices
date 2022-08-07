/*
    Working With The Conditional Statement : If
    ===========================================
    Syntax:
        if (condition)
        {
            statement1;
            statement2;
            ..........
            ..........
        }
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a variable
let ageValue = prompt("Enter your age: ");


// Conditional Statements
if (ageValue >= 18){
    console.log("Age is : " + ageValue + " Eligible For Voting");
}

if (ageValue < 18){
    console.log("Age is : " + ageValue + " Not Eligible For Voting");
}

