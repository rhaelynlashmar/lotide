// create a function that returns an object
const letterPositions = function(sentence) {
  const results = {};
  // Loop through the string, checking each character
  for (let i = 0; i < sentence.length; i++) {
    // If the character is not a space, check if it is already a key in the object
    if (sentence[i] !== " ") {
      if (results[sentence[i]] === undefined) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
    
  return results;
};


const assertArraysEqual = require('./assertArraysEqual');

// assertArraysEqual(letterPositions("hello").h, [0]);
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);
// assertArraysEqual(letterPositions("hello").o, [4]);

module.exports = letterPositions;