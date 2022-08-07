/*
    Pattern Matching With Different Regex Modifiers/Flags
    ====================================================
    Regex Provide some flags to controll the behavior of searching
    patterns while looking for the pattern.
    Those regex flags are the following:
    1) 'g'  ; used for global case sensitive search
    2) 'i'  ; used for case insensitive search
    3) 'u'  ; used for matching full unicode or enable all unicode 
            features and interpret all unicode escape sequences.
    4) 's'  ; used for single line search. Specially dot matche new line characters.
    5) 'd'  ; used for indices search result where JS engine will returns the indices at which
            the pattern matched.
    6) 'y'  ; used for sticky search.Force the pattern to only match consecutive
            matches from where the previous match ended.
    7) 'm'  ; used for multi-line search. Cause ^ and $ to match the begin/end of each line.
*/

// Declaring 'use strict' statement
'use strict';

// Declaring a String
let text = "Some is gonna happen, i dont know exactly what!! But i can sense that.Exactly to say dont know!!";
let pattern = /exactly/gi; // case insensitive search globally via specifying 'g' flaf for globally and 'i' flag for insensitive search
console.log(`Text is: ${text}`);
console.log(`Matching Pattern Items: ${text.match(pattern)}`); // provide the index value of first occurence of the specified pattern
