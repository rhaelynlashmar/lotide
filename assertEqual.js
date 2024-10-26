// Let's create assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }
};
 
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Huzzah!, Huzzah!");
assertEqual(4, 10);
