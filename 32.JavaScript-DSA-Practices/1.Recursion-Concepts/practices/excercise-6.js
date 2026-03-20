// Example-6: Palindrome Check Functio
/*
    Explain the palindrom theory and its logic to implement
    - A palindrome is a word, phrase, or sequence that reads the same backward as forward
    - For example, "racecar" is a palindrome because it reads the same backward as forward
    - The logic is to check if the first and last characters are the same, and if so, recursively check the substring excluding the first and last characters

    pseudocode:
    - if string length is 1, return true
    - if first character is not equal to last character, return false
    - recursively call function with substring excluding first and last characters

*/
function isPalindrome(str) {
    if(str.length === 1) {
        return true;
    }
    if(str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));