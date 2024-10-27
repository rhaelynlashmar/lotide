// Let's create assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }
};
// create a head function
const head = function(array) {
  //get the first item in the array
  return array[0];
};
