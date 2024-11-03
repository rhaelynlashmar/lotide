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

console.log(letterPositions("lighthouse in the house"));

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

assertArraysEqual(letterPositions("hello").o, [4]);