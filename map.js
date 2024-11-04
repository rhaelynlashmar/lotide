const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

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


const words = ['all', 'right', 'then.', 'keep', 'your', 'secrets'];
const results1 = map(words, (word) => word[0]);
// console.log(results1);

const colors = ["blue", "pink", "yellow", "green", "purple"];
const results2 = map(colors, (color) => color === "pink");
// console.log(results2);

const results3 = map(colors, (color) => color.length > 4);
// console.log(results3);

assertArraysEqual(map(words, (word) => word[0]), [ 'a', 'r', 't', 'k', 'y', 's' ]);
assertArraysEqual(map(colors, (color) => color === "pink"), [ false, true, false, false, false ]);
assertArraysEqual(map(colors, (color) => color.length > 4), [ false, false, true, true, true ]);