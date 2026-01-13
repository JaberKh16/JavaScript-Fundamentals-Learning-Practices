/*
  Problem Statement: Filter Numbers From An Array
  FUNCTION filterNumbers(array):
      SET numbersArray TO empty list

      FOR EACH element IN array:
          IF typeOf(element) IS "number":
              ADD element TO numbersArray
          END IF
      END FOR

      RETURN numbersArray
  END FUNCTION
*/

// Example-1
function filterNumbers(arr) {
  // Use filter method and isNaN function
  return arr.filter((num) => !isNaN(num));
}

// Example-2
// function filterNumbers(array) {
//   const numbersArray = [];

//   for (const element of array) {
//     if (typeof element === "number") {
//       numbersArray.push(element);
//     }
//   }
//   return numbersArray;
// }

const mixedArray = [1, "hello", 3.14, true, 42, "world", null, 7];
const result = filterNumbers(mixedArray);
console.log(result); // Output: [1, 3.14, 42, 7]
