const assertEqual = require("./assertEqual");

// Create a tail function
const tail = function(array) {
  // remove the head of the array to only account for the tail
  return array.slice(1);
};

module.exports = tail;




