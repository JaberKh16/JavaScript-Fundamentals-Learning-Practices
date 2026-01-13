/*
  Problem Statement: Check If A String Contains Another
  FUNCTION containsSubstring(mainString, subString):
      FOR i FROM 0 TO length(mainString) - length(subString):
          SET match TO true
          FOR j FROM 0 TO length(subString) - 1:
              IF mainString[i + j] != subString[j]:
                  SET match TO false
                  BREAK
              END IF
          END FOR
          IF match IS true:
              RETURN true
          END IF
      END FOR
      RETURN false
  END FUNCTION
*/

function containsSubstring(mainString, subString) {
  for (let i = 0; i <= mainString.length - subString.length; i++) {
    let match = true;
    for (let j = 0; j < subString.length; j++) {
      if (mainString[i + j] !== subString[j]) {
        match = false;
        break;
      }
    }
    if (match === true) {
      return true;
    }
  }
  return false;
}

const mainString = "Hello, welcome to the world of JavaScript.";
const subString = "world";
const result = containsSubstring(mainString, subString);
console.log(result); // Output: true
