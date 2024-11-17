const head = require("../head.js");
const assertEqual = require("../assertEqual.js");


assertEqual(head(["Earth", "Fire", "Water", "Air"]), "Earth");
assertEqual(head([1000, 200, 30, 4]), 200);