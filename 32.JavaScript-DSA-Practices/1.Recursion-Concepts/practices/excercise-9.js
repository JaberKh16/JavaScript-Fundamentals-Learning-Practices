// Example-9: Reverse String
/*
    Explain the reverse string and its logic to implement
    - The reverse string is a function that takes a string and returns the reversed string
    - For example, "hello" is a string and "olleh" is the reversed string
    - The logic is to recursively call the function with the string and reverse it

    pseudocode:
    - if string length is 1, return string
    - recursively call function with substring excluding first character and add first character at the end

*/
function reverseString(str) {
    if(str.length === 1) {
        return str;
    }
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello"));
console.log(reverseString("world"));