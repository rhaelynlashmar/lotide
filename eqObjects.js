const eqArrays = require('./eqArrays');

// create a function that takes in 2 objects and returns true or false, based on a perfect match
const eqObjects = function(object1, object2) {
  // Create variables for object1 and object2 to be shortened to
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  // First, see if the objects have the same number of keys
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  // loop through obj1 & obj2 arrays to see if they have the same keys
  for (const key of obj1Keys) {
    // We check to see if any of the values are arrays
    if  (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // If there is an array value, we run the eqArrays function and if they don't match return false
      if (!eqArrays(object1[key], object2[key])) {
        return false;
        // go on comparing the rest of the keys
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  // if everything matches, return true
  return true;
};

module.exports = eqObjects;