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

// create a function that takes in 2 objects and returns true or false, based on a perfect match
const eqObjects = function(object1, object2) {
  // Create variables for object1 and object2 to be shortened to
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  // First, see if the objects have the same number of keys
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  // loop through obj1 & obj2 arrays to see if they have the same keys
  for (const key of obj1Keys) {
    // We check to see if any of the values are arrays
    if  (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // If there is an array value, we run the eqArrays function and if they don't match return false
      if (!eqArrays(object1[key], object2[key])) {
        return false;
        // go on comparing the rest of the keys
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  // if everything matches, return true
  return true;
};


// Using assertArraysEqual.js as a template, create a function logging if your objects are equal
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed ${inspect(actual)} !== ${inspect(expected)}`);
  }

};

const object1 = { key: 1, key2: 2};
const object2 = { key: 1, key2: 2};
const object3 = { key: 6, key3: 2};
const object4 = { key: [1, 2, 3], key2: 4};
const object5 = { key2: 4, key: [1, 2, 3]};
const object6 = { key: 1, key2: 4};
assertObjectsEqual(object1, object2);
assertObjectsEqual(object1, object3);
assertObjectsEqual(object4, object5);
assertObjectsEqual(object4, object6);