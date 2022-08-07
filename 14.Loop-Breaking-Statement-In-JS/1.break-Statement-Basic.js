/*
    Loop Control Statement: break
    =============================
    'break' Statement is used to skip from the loop directly
    means it stop the overall loop iteration the point it 
    found the 'break' statement.
*/

// Declaring 'use strict' statement\
'use strict';

// Declaring a variable
let number = prompt('Enter a number to start from: ');
number = Number(number); // converting the 'number' to numeric type
let sum = 0;

for(let i = 1; i<=number; i++)
{
    console.log(`Interation No: ${i}`);
    sum = sum + i;
    if(i == 5){
        break;
    }
    console.log(`Sum is: ${sum}`);
}