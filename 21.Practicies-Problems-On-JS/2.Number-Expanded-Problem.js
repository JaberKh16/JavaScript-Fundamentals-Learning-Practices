/*
    Problem-2: Number Expansion Problem
*/

// Declaring 'use strict' statement
'use strict';

// Declaring A Function For Number Expansion
function expansionOfNumberForm(number){
    number = number.toString().split('').reverse().join('');
    let arrayOfExpandedNumbers = []; // to store the expande numbers
    let stringOfExpandedNumbers = ''; // to store the expanded numbers as string format
    
    // To Look For The Individual Characters
    for(let i = 0; i<number.length; i++)
    {
        let temp = parseInt(number.charAt(i) * Math.pow(10, i)); // 45302 => 4 * 10^, 5 
        if(temp !=0){
            arrayOfExpandedNumbers.push(temp); // if say 456 = [4, 5, 6]
        }
    }

    // Form The Expanded Form Of String From The Array
    for(let i = arrayOfExpandedNumbers.length; i>=0; i--)
    {
        if(i==0){
            return stringOfExpandedNumbers.concat(arrayOfExpandedNumbers[i]);
        }
        else{
            stringOfExpandedNumbers = stringOfExpandedNumbers.concat(arrayOfExpandedNumbers[i], " ", "+", " ");
        }
    }
    //return number;
}

//let number = prompt('Enter a number: ');
let expanedExpression = expansionOfNumberForm(number);
console.log(`${expanedExpression}`);