const assert = require('chai').assert;
const head = require("../head.js");

describe("#head", () => {
  it("should return 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("should return 5 for [5]", () =>  {
    assert.strictEqual(head([5]), 5);
  });
  it("should return Earth for [Earth, Fire, Water, Air]", () => {
    assert.strictEqual(head(["Earth", "Fire", "Water", "Air"]), "Earth");
  });
  it("should return 1000 for [1000, 200, 30, 4]", () => {
    assert.strictEqual(head([1000, 200, 30, 4]), 1000);
  });
});


