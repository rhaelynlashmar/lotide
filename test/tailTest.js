const tail = require("../tail.js");
const assert = require('chai').assert;

describe("#tail", () => {
  it("should return ['Sound', 'Brewery'] for ['Howe', 'Sound', 'Brewery']", () => {
    assert.deepEqual(tail(["Howe", "Sound", "Brewery"]), ["Sound", "Brewery"]);
  });
  it("should return [4, 6, 8, 10] for [2, 4, 6, 8, 10]", () => {
    assert.deepEqual(tail([2, 4, 6, 8, 10]), [4, 6, 8, 10]);
  });
  it("should return ['3', '5', '7', '9'] for ['1', '3', '5', '7', '9']", () => {
    assert.deepEqual(tail(['1', '3', '5', '7', '9']), ['3', '5', '7', '9']);
  });
});

