/*
  Problem Statement: Find Largest Element in an Array
  FUNCTION findLargestElement(array):
      SET largestElement TO array[0]

      FOR EACH element IN array:
          IF element > largestElement:
              largestElement = element
          END IF
      END FOR

      RETURN largestElement
  END FUNCTION
*/

function findLargestElement(array) {
  let largestElement = array[0];
  for (const element of array) {
    if (element > largestElement) {
      largestElement = element;
    }
  }
}

const arr = [10, 5, 8, 20, 15];
const result = findLargestElement(arr);
console.log(result); // Output: 20
