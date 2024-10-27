const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Create a tail function
const tail = function(array) {
  // remove the head of the array to only account for the tail
  return array.slice(1);
};

// declaring the array so I can test against my code
const arr = ["Howe", "Sounds", "Delightful"];
const tailArray = tail(arr);
assertEqual(tailArray.length, 2);
assertEqual(tailArray[0], "Sounds");
assertEqual(tailArray[1], "Delightful");
// checking to see if my array is still 3
assertEqual(arr.length, 3);
// testing to see if the empty array comes back an empty array
console.log(tail([]));



