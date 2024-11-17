const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }
};



// console.log(assertEqual("Eat, Pray, Love", "Eat, Pray, Love"));
// console.log(assertEqual(42, 42));
// console.log(assertEqual(5 * 2, 10));
// console.log(assertEqual(1000, "1000"));

module.exports = assertEqual;