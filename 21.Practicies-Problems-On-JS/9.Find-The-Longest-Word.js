/*
  // Problem: Longest Word Problem
  FUNCTION findLongestWord(words):
      SET longestWord TO empty string

      FOR EACH word IN words:
          IF length(word) > length(longestWord):
              longestWord = word
          END IF
      END FOR

      RETURN longestWord
  END FUNCTION
*/

// Example-1
function findLongestWord(words) {
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// Example-2
// function findLongestWord(words) {
//   let longestWord = "";

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// Example-3
// function longestWord(sentence) {
//   // Split sentence into words
//   const words = sentence.split(" ");
//   // Sort words by length (descending)
//   words.sort((a, b) => b.length - a.length);
//   // Return the first word (longest)
//   return words[0];
// }

const sentence = "The quick brown fox jumped over the lazy dog";
const result = findLongestWord(sentence);
console.log(result);
