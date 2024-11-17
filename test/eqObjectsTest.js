const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');

const candyBag =  { type: "swedish berries", color: "pink", quantity: 30};
const candyBag2 = { color: "pink", type: "swedish berries", quantity: 30};
const candyBag3 = {type: "sour patch kids", quantity: 30};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
assertEqual(eqObjects(candyBag, candyBag2), true);
assertEqual(eqObjects(candyBag, candyBag3), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};

assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true