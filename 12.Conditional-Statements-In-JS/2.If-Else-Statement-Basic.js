/*
    Working With The Conditional Statement : If Else
    ================================================
    Syntax:
        if (condition)
        {
            statement1;
            statement2;
            ..........
            ..........
        }
        else
        {
            statement1;
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

else{
    console.log("Age is : " + ageValue + " Not Eligible For Voting");
}

