/*
  Constructor Function

  This constructor function demonstrates how functions in JavaScript
  can be used to create objects using the `new` keyword.

  - Each method is attached directly to the instance using `this`
  - `calculateArea` calculates the area of a rectangle
  - `calculateVolume` calculates the volume of a cube

  NOTE:
  Methods defined inside a constructor are recreated for every instance.
  For shared behavior, prototype-based methods are preferred.
*/

function CalculateMath() {

  // Calculates the area of a rectangle
  this.calculateArea = function (length, width) {
    return length * width;
  };

  // Calculates the volume of a cube
  this.calculateVolume = function (side) {
    return side * side * side;
  };


}

// Example usage
const math = new CalculateMath();
console.log(math.calculateArea(5, 4));     // 20
console.log(math.calculateVolume(3));      // 27
console.log(math);

// using prototype 
// CalculateMath.prototype.calculateArea = function () {}