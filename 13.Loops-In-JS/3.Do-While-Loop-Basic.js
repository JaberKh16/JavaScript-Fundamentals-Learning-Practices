/*
    Working With Loops In JS: Do While Loop
    =======================================
    Syntax:
        do{
            statement1;
            statement2;
            ..........
            ..........
        }while(condition);
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a variable
let number = 1;
number = Number(number); // converting the 'number' variable to numeric type

do{
    console.log(number + "\n");
    number++;
}while(number >=10);