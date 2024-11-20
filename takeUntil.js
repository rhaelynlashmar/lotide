const takeUntil = function(array, callback) {
  let results = [];


  for (const elem of array) {
    // if callback returns false add elem to results
    if (callback(elem) === false) {
      results.push(elem);
    } else {
      // If it's true, cease looping
      return results;
    }
  }
  // If callback doesn't occur, still need to see what the array looks like
  return results;
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const assertArraysEqual = require('./assertArraysEqual');

// assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
// assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);

module.exports = takeUntil;