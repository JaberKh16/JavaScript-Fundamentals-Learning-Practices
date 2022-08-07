/*
    Loop Control Statement: continue
    ================================
    'continue' Statement is used to skip a single iteration 
    from the loop either skipping the whole loop just skip
    single iteration.
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
        continue;
    }
    console.log(`Sum is: ${sum}`);
}