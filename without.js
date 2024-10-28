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

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);

const candy = ["tootsie roll", "mars bar", "double bubble gum", "kit kat"];
console.log(without(candy, ["tootsie roll", "double bubble gum"]));

assertArraysEqual(candy, ["tootsie roll", "mars bar", "double bubble gum", "kit kat"]);



