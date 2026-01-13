/*
  Problem Statement: Largest Number in an Array
  FUNCTION findLargestNumber(numbers):
      SET largestNumber TO negative infinity

      FOR EACH number IN numbers:
          IF number > largestNumber:
              largestNumber = number
          END IF
      END FOR

      RETURN largestNumber
  END FUNCTION
*/

function findLargestNumber(numbers) {
  let largestNumber = -Infinity;

  for (const number of numbers) {
    if (number > largestNumber) {
      largestNumber = number;
    }
  }

  return largestNumber;
}

const numbers = [3, 5, 7, 2, 8, -1, 4];
const result = findLargestNumber(numbers);
console.log(result); // Output: 8
