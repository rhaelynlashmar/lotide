// Create a without function which will return a subset of a given array, removing unwanted elements
const without = function(source, itemsToRemove) {
  const result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};

const assertArraysEqual = require('./assertArraysEqual');

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);

// const candy = ["tootsie roll", "mars bar", "double bubble gum", "kit kat"];

// assertArraysEqual(without(candy, ["mars bar"]), ["tootsie roll", "double bubble gum", "kit kat"]);
// assertArraysEqual(without(candy, ["mars bar", "double bubble gum"]), ["tootsie roll", "kit kat"]);

module.exports = without;



