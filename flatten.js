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

// flatten function should take multiple-dimentional arrays and combine them into 1 single array
// using the .isArray function as you loop through the array to determine which you need to concatenate

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
  // eg. Array.isArray([1, 3, 5])
  }
  return singleArr;

};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

// Let's test them for mutations
// testing it is getting convoluted with information I don't have and it's no longer making sense

const nestedArray = [1, 2, [3, 4], 5, [6]];
const nestedArray2 = [1, 2, [3, 4], 5];
const flatArray = [1, 2, 3, 4, 5, 6];

assertArraysEqual(flatten(nestedArray), flatArray);
assertArraysEqual(flatten(nestedArray2), flatArray);
