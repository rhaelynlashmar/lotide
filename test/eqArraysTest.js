const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays(["Daisy", "Lily", "Rose"], ["Daphodile", "Lily", "Rose"]), true);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
assertEqual(eqArrays([1000, 200, 30, 4], [1000, 200, 30]), false);