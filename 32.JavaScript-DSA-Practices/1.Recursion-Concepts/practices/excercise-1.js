// Example 1: Power Of A Number
function powerOfANumber(base, exponent) {
    if(exponent === 0) {
        return 1;
    }
    return base * powerOfANumber(base, exponent - 1);
   
}
    

console.log(powerOfANumber(2, 3));
console.log(powerOfANumber(5, 2));
