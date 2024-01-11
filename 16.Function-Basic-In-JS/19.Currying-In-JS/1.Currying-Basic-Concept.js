/*
    Currrying Basic Concepts
    ========================
    Currying is a concept in functional programming where a function is transformed into a sequence of functions, 
    each taking a single argument. 
    
    The curried function returns a new function that expects the next argument, and this process continues 
    until all arguments are supplied, at which point the original function is executed.

*/

// Presetted call, bind Version Of Currying
function multiplication(num){
    return num * 3;
}

const resultMult1 = multiplication.bind(this, 4);
const resultMult2 = multiplication.bind(this, 5);
console.log(resultMult1);
console.log(resultMult2);


// Example-2 Closure Version Of Currying
// Curried version of the function
function curryAdd(x) {
    return function(y) {
      return function(z) {
        return x + y + z;
      };
    };
  }
  
// Usage of the curried function
const curriedAdd = curryAdd(2);
const result = curriedAdd(3)(4);

console.log(result); // Output: 9


// Example-3 Generic Verison Of Curry Currying Another Function
// Original function to be curried
function add(x, y, z) {
    return x + y + z;
}

  
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function (...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}
  
// Usage with the add function
const curriedAdd2 = curry(add);
const result2 = curriedAdd2(2)(3)(4);

console.log(result2); // Output: 9
  