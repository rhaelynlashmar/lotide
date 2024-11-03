const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }
};


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
      } else if (object1[key] !== object2[key]) {
        return false;
      }

    }
  }
  // if everything matches, return true
  return true;
};



const candyBag =  { type: "swedish berries", color: "pink", quantity: 30};
const candyBag2 = { color: "pink", type: "swedish berries", quantity: 30};
const candyBag3 = {type: "sour patch kids", quantity: 30};
eqObjects(candyBag, candyBag2);
eqObjects(candyBag, candyBag3);

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
assertEqual(eqObjects(candyBag, candyBag2), true);
assertEqual(eqObjects(candyBag, candyBag3), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false

assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true
