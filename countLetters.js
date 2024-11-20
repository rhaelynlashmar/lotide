// create a function that should take in a sentence amd return the count of each of the letters in that sentence
// We need to take in in the sentence (parameter 1)
const countLetters = function(string) {
  // we need an object that takes the count to be returned
  let results = {};
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
};

const assertEqual = require('./assertEqual');

// assertEqual(countLetters("lighthouse in the house").l, 1);
// assertEqual(countLetters("lighthouse in the house").u, 2);
// assertEqual(countLetters("lighthouse in the house").h, 4);
// assertEqual(countLetters("lighthouse in the house").e, 3);

module.exports = countLetters;



