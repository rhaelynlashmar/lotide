const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");


assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]), [2]); // should fail
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
assertArraysEqual(middle([1, 4, 7, 6, 2, 6, 7, 5, 9]),[2, 6]); // should fail
