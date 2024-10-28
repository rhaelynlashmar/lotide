const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
    return;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
      return;
    }     
  }
  console.log(`✅✅✅ Asserstion Passed: ${arr1} === ${arr2}`);
};

assertArraysEqual([1, 3, 4], [1, 3, 4]);
assertArraysEqual([12, 1, 3], [1, 2, 3]);