/*
  Problem Statement: Tittle Case Problem
  FUNCTION toTitleCase(sentence):
      SET words TO split(sentence, " ")
      SET titleCasedWords TO empty list

      FOR EACH word IN words:
          SET capitalizedWord TO uppercase(first character of word) + substring(word, 1)
          ADD capitalizedWord TO titleCasedWords
      END FOR

      RETURN join(titleCasedWords, " ")
  END FUNCTION
*/
function toTitleCase(sentence) {
  const words = sentence.split(" ");
  const titleCasedWords = [];

  for (const word of words) {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    titleCasedWords.push(capitalizedWord);
  }
  return titleCasedWords.join(" ");
}

const sentence = "the quick brown fox jumps over the lazy dog";
const result = toTitleCase(sentence);
console.log(result); // Output: "The Quick Brown Fox Jumps Over The Lazy Dog"
