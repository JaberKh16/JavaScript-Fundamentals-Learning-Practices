/*
    Factorial Of A Number

    Use Cases Of Factorial
    ----------------------
    1)  Factorial example problem 1: the letters in the word "camper"
        
        Ques-2. How many different ways can you arrange the letters of 
        the word camper?

        Ans-The word camper has 6 letters, so the number of possible 
            arrangements is given by the factorial of ==>
                6: 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720.

                
    2) Factorial example problem 2: drawing colored balls from a bag
    
        Let's say there are three balls in a bag – one green, one blue, 
        and one yellow.

        Ques-1. If you draw the three balls in sequence, what chance is there  
        that you'll get the yellow first, the green one second, and 
        the blue one last?

        Ans-Maybe now you are wondering what chances have to do with 
            factorials – well, in a moment you will see.

            There are 6 possible sequences in which the balls can 
            be drawn thus:   3! = 6.

        There is a chance of 1 over the total number of possibilities 
        to get the yellow-green-blue sequence, so that is 1/(3!) or 1/6 
        or 16.7% chance to get the desired outcome.
*/


'use strict';


// recusrive function for factorial finding
function factorialOfNumber(number){
    if (number == 0){
        return 1;
    }
    else{
        return factorialOfNumber(number-1) * number;
    }
}


// normal way of writing factorial finding
function findingFactorial(number){
    let factorialResult = 1;
    if(number < 1){
        return factorialResult;
    }
    else{
        while(number > 1){
            factorialResult *= number
            number--; 
        }
        return factorialResult;
    }
}

// let number = Number(prompt('Enter the number: '));

// calling findingFactorial()
const result1 = findingFactorial(6);
console.log(`Factorial Of Number : ${result1}`);

// calling findingFactorial()
const result2 = factorialOfNumber(6);
console.log(`Factorial Of Number : ${result2}`);