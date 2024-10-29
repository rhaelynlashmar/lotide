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


// Create a function "middle" which will take an array and return the middle-most element(s) of the given array
// arrays with 1 or 2 arrays, return an empty array
// arrays with odd number of elements, return a single middle element
// arrays with and even amount of elements 4 and up, an array containing 2 elements should be returned

const middle = function(array) {
  // create an array for the elements to be shown in
  let midnum = [];
  let i = array.length;

  // if the array has 2 or less numbers in it, it returns an empty array
  if (i <= 2) {
    return midnum;
  }
  // check to see if the array has an odd or even amount
  // if it can divide by 2 it's even
  if (i % 2 === 0) {
    midnum.push(array[i / 2 - 1]);
    midnum.push(array[i / 2]);
  } else {
    // now if the array is odd...
    midnum.push(array[Math.floor(i / 2)]);
  }
  return midnum;

};

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 4, 7, 6, 2, 6, 7, 5, 9]));

assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
