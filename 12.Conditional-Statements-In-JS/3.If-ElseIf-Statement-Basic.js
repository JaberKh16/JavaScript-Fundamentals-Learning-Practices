/*
    Working With Conditional Statement : If ElseIf 
    ==============================================
    Syntax:
        if (condition)
        {
            statement1;
            statement2;
            ..........
            ..........
        }
        else if(condition)
        {
            statement1;
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
let number = prompt("Enter a number: ");
number = Number(number); // converting the number to numeric type

// Conditional Statament
if (number > 0){
    alert(`${number} is positive number.`);
}

else if(number < 0){
    alert(`${number} is negative number.`);
}

else{
    alert(`${number} is zero.`);
}