/*
    Working With Loops In JS: While Loop
    =====================================
    Syntax:
        while(condition)
        {
            statement1;
            statement2;
            statement3;
        }
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a variable
let number = 1;
number = Number(number); // converting the 'number' variable to numeric type

while(number <=10)
{
    console.log(number + "\n"); // printing the 'number' variable
    number++; // incrementing the 'number' variable
}