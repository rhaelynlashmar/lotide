const flatten = function(arr) {
  // give a space for the new array to exist
  // iterate through each element and see which ones are arrays
  // concatenate those arrays into single array
  let singleArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      singleArr = singleArr.concat(arr[i]);
      // element IS an array we need to add its elements to the singleArr array
    } else {
      // If it's a normal integer we just add it to singleArr
      singleArr.push(arr[i]);
    }
  }
  return singleArr;

};

// Let's test them for mutations
const nestedArray = [1, 2, [3, 4], 5, [6]];
const nestedArray2 = [1, 2, [3, 4], 5];
const flatArray = [1, 2, 3, 4, 5, 6];
const flatArray2 = [1, 2, 3, 4, 5];

const assertArraysEqual = require('./assertArraysEqual');

// assertArraysEqual(flatten(nestedArray), flatArray);
// assertArraysEqual(flatten(nestedArray2), flatArray2);

module.exports = flatten;
