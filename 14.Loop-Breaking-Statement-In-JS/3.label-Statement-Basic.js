/*
    Working With Block Level Statement: label
    =========================================
    Label is a block of code, it is basically used to create
    a different block.
    Syntax:
        label_name : {
            statement1;
            statement2;
            ...........
            ...........
            break label_name; // can use 'break' if wanted to break out from the label
        }
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a variable
let number = 1;
number = Number(number); // converting the 'number' variable to numeric type

// Declaring a Label Block
increaseUptofive :{
    let sum = 0;
    while(number <=10)
    {
        console.log(`Iteration No: ${number}`);
        number++;
        sum = sum + number;
        if (number == 5){
            //break increaseUptofive; // if breaks out from the here then nothing will be consider after that
        }    
    }
    console.log(`Sum is: ${sum}`);
    console.log('End of Label Statement');
}