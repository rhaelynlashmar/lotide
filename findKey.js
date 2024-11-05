const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {

  let keys = Object.keys(object);
    for (const key of keys) {
      // if keys value matches the callback return the key
      if (callback(object[key]) === true) {
        return key;
      }
    }
};

const constellations =
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    };



const sodaPops =
    {
      coke: { sugar: "39 grams" },
      sprite: { sugar: "38 grams" },
      gingerale: { sugar: "25 grams" },
      rootbeer: { sugar: "32 grams" },
      orangeCrush: { sugar: "36 grams" },
    };



console.log(findKey(constellations, (x) => x.stars === 2 ));
console.log(findKey(sodaPops, (x) => x.sugar === "32 grams" ));

assertEqual(findKey(sodaPops, (x) => x.sugar === "32 grams" ), "rootbeer");
assertEqual(findKey(constellations, (x) => x.stars === 2 ), "noma");
