const assertEqual = require("../assertEqual.js");
const tail = require("../tail.js");


const arr = ["Howe", "Sound", "Brewery"];
const tailArray = tail(arr);
assertEqual(tailArray.length, 2);
assertEqual(tailArray[0], "Sound");
assertEqual(tailArray[1], "Brewery");
assertEqual(tailArray[1], "Wrong");
// checking to see if my array is still 3
assertEqual(arr.length, 3);
// testing to see if the empty array comes back an empty array
const emptyArr = tail([]);
assertEqual(emptyArr.length, 0);