// function that takes in an object and a value. It should scan the object and return the first key which contains the given value.
// If no key with that  given value is found, then it should return undefined
const findKeyByValue = function(object, value) {
  // have the ability to scan the object
  let keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const bestThingsAboutSeasons = {
  winter: "Christmas",
  spring: "Fresh Flowers",
  summer: "Beaches",
  autumn: "Pumpkin Spice Everything",
};

const greatAuthorsAndBooks = {
  stephenKing: "The Stand",
  janeAusten: "Pride & Prejudice",
  brandonSanderson: "Mistborn",
  robertJordan: "The Wheel Of Time",
};

const assertEqual = require('./assertEqual');

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestThingsAboutSeasons, "Christmas"), "winter");
assertEqual(findKeyByValue(bestThingsAboutSeasons, "Pumpkin Spice Everything"), "autumn");
assertEqual(findKeyByValue(greatAuthorsAndBooks, "The Stand"), "stephenKing");
assertEqual(findKeyByValue(greatAuthorsAndBooks, "The Secret Garden"), undefined);

module.exports = findKeyByValue;
