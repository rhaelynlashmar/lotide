const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }
};

// create a function that should take in a sentence amd return the count of each of the letters in that sentence
// We need to take in in the sentence (parameter 1)
const countLetters = function(string) {
  // we need an object that takes the count to be returned
  results = {};
  // I need to iterate over the sentence to look at each individual letter
  for (const character of string) {
    if (character !== ' ') {
      if (results[character] === undefined) {
        results[character] = 1;
      } else {
        results[character] += 1;
      }
    }
  }
  return results;
}

console.log(countLetters("lighthouse in the house"));