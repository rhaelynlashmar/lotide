
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @rhaelynlashmar/lotide`

**Require it:**

`const _ = require('@rhaelynlashmar/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  - `head`: a function to retrieve the first element in a given array
  - `tail`: a function to retrieve all elements following the first
  - `middle`: a function to retrieve the middle element of an array
  - `assertArraysEqual`: a function to assert if 2 arrays compared are === from actual input to expected output
  - `assertEqual`: a function to compare 2 primitive inputs and ascertain if actual input === expected output
  - `assertObjectsEqual`: a function to assert if 2 objects compared are === from actual input to expected output
  - `countLetters`: a function that takes in a sentence and returns the count of each of the letters in that sentence
  - `countOnly`: a function that takes in a collection of items and return counts for a specific subset of those items
  - `eqArrays`: a function that takes 2 arrays amd returns true or false, based on a perfect match
  - `eqObjects`: a function that takes in 2 objects and returns true or false, based on a perfect match
  - `findKey`: a function which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
  - `findKeyByValue`: a function which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
  - `letterPositions`: a function which returns all the indices in the string where each character is found.
  - `takeUntil`: a function thatn returns items in the array up to the point where the callback returns a truthy value.
  - `without`: a function which will return a subset of a given array, removing unwanted elements.
  - `map`: a function that creates a new array with the results of calling a provided function on every element in the array.
  - `flatten`: a function which will take in an array containing elements including nested arrays of elements, and return a single condensed array.
  

