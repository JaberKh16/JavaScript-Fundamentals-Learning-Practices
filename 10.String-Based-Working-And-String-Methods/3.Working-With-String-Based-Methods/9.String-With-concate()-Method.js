/*
    String Method: concat("substr"/""/"","", ..)
    ============================================
    str.concat() method is used concate string either it can be
    a single string or multiple string at a time. It supports 
    concatenation of string in the following way:
        1) str.concat("substr")                         ; concatenation with string type variable 
        2) str.concat("substr" + " ")                   ; concatenation with string type and " "
        3) str.concat("substr" + " ", " ", " ", ...)    ; concatenation with string type and multiple " "
        4) "substr".concate("substr")                   ; concatenation with "substr" with "subtr"
        5) "substr".concate(" ", " ", " ")              ; concatenation with "substr" with multiple " "
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a string type variable
let x = "Something is";
let concated_x = x.concat(" Fissy.");
console.log(concated_x);

// Working Concatenation In Different Ways
let concated_x_with_multiple = x.concat(" Is Fissy", " You might", " wanna look ", "into ", "it.");
console.log(concated_x_with_multiple);

let multiple_str_conct = "This".concat("is somehting ", "i wanted", " to ", "show");
console.log(multiple_str_conct);