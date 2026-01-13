// Problem-1: Reverse A String
function reverseString(str) {
  return str.split("").reverse().join("");
}

const result = reverseString("This is text");
console.log(result);
