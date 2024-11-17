const assertObjectsEqual = require("../assertObjectsEqual");

const object1 = { key: 1, key2: 2};
const object2 = { key: 1, key2: 2};
const object3 = { key: [1, 2, 3], key2: 4};
const object4 = { key2: 4, key: [1, 2, 3]};
assertObjectsEqual(object1, object2);
assertObjectsEqual(object3, object4);
