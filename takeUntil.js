const takeUntil = function(array, callback) {
  let results = [];

  // need to loop through the array so we have the individual elements
  for (const elem of array) {
    //if callback returns false add elem to results
    if (callback(elem) === false) {
      // if the element doesn't match the callback criteria to stop we push it into the new array
      results.push(elem);
    } else {
      // As soon as you reach an element that does match the callback criteria we return the results to cease the function from continuing to loop
      return results;
    }
  }
  // If the callback criteria isn't met, it returns the array after it's looped all the way through
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${array1} !== ${array2}`);
  }
};

assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);