/*
  Problem Statement: Calculate the Average of Numbers in an Array
  FUNCTION calculateAverage(numbers):
      SET sum TO 0
      SET count TO length(numbers)

      FOR EACH number IN numbers:
          sum = sum + number
      END FOR

      IF count IS 0:
          RETURN 0
      END IF

      RETURN sum / count
  END FUNCTION
*/

// Example-1
function calculateAverage(numbers) {
  let sum = 0;
  const count = numbers.length;
  for (const number of numbers) {
    sum += number;
  }
  if (count === 0) {
    return 0;
  }
  return sum / count;
}

// Example-2
// function calculateAverage(numbers) {
//   if (numbers.length === 0) return 0;

//   const sum = numbers.reduce((acc, num) => acc + num, 0);
//   return sum / numbers.length;
// }

const nums = [10, 20, 30, 40, 50];
const result = calculateAverage(nums);
console.log(result); // Output: 30
