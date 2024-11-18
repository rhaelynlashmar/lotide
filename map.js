const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};


const assertArraysEqual = require('./assertArraysEqual');

const words = ['all', 'right', 'then.', 'keep', 'your', 'secrets'];
const colors = ["blue", "pink", "yellow", "green", "purple"];

assertArraysEqual(map(words, (word) => word[0]), [ 'a', 'r', 't', 'k', 'y', 's' ]);
assertArraysEqual(map(colors, (color) => color === "pink"), [ false, true, false, false, false ]);
assertArraysEqual(map(colors, (color) => color.length > 4), [ false, false, true, true, true ]);

module.exports = map;