const middle = function(array) {
  // make a space for array to take in middle elements
  let midnum = [];
  let i = array.length;

  // if the array has 2 or less numbers in it, it returns an empty array
  if (i <= 2) {
    return midnum;
  }
  // check to see if the array has an odd or even amount
  if (i % 2 === 0) {
    midnum.push(array[i / 2 - 1]);
    midnum.push(array[i / 2]);
  } else {
    // now if the array is odd...
    midnum.push(array[Math.floor(i / 2)]);
  }
  return midnum;

};

module.exports = middle;




