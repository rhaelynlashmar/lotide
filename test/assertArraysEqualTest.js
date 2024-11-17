const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,2,4]);
assertArraysEqual(["Linda", "David", "James"], ["Linda", "David", "Jamie"]);
assertArraysEqual(["Water", "Fire", "Air", "Earth"], ["Water", "Fire", "Air", "Earth"]);