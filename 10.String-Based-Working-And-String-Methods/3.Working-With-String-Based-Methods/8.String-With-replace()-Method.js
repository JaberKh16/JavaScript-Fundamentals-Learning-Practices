/*
    String Method: replace("string_to_replace", "string_to_be_replaced")
    ====================================================================
    str.replace("string_to_replace", "string_to_replaced_with") is used to perform the
    replace operation on string, it basically take two parameters which are the
    following:
    
        1) "string_to_replace"      ; it tells basically whatever string/substring we wanted 
                                    to replace from the given string
        2) 'string_to_replace_with  ; it tells basically with what string/substring the 
                                    replacement string will be replaced with.
    
    For simplicity, can also read this method like the following way,
            str.replace(searchValue, replaceValue)

    It doesn't perform the replacement of substring if the specified "string_to_replace" doesn't
    exists in the given string.

    str.replace() performs the case sensitive operation while doing the replacement
    means exact match needs to be existed to perform the replacement. Though to make it
    case insensitive replacement - use regular expression with it like the following way:
        
        /"string_to_replace"/i   ; here 'i' stands for insensitive replacement mode

    Above way is regular expression way to search and perform replacement which only looks for
    the first occurence of the specified substring to replace and to make it global for the whole string
    use the following:
        /"string_to_replace"/ig ; here 'i' stands for insensitive mode replacement and 'g' for global replacement

*/

// Declaring 'use strict' statement
'use strict';

// Declaring a string type variable
let x = "This is something i always wanted to";
let y = x.replace("something", "somewhat"); // replacing 'something' with 'somewhat'
console.log("Before Replacement: " + x);
console.log("After Replacement: " + x);

// Making A Case Insensitive Search and Replacement
let z = "wanted to watch that movie";
let z1 = z.replace(/Watch/i, "watching"); // replacing 'watch' using regex and replace with 'watching'
console.log(z1);


// Making A Case Insensitive Search and Replacement - Having Repetted Substring
let z2 = "wanted to watch watch that movie";
let z3 = z2.replace(/Watch/i, "watching"); // only replace the first occurence of 'watch' using regex and replace with 'watching'
console.log(z3);


// Making A Case Insensitive Search and Replacement - Having Repetted Substring
let z4 = "wanted to watch watch that movie";
let z5 = z4.replace(/Watch/ig, "watched"); // globally replacing every occurence of 'watch' using regex and replace with 'watched'
console.log(z5);
