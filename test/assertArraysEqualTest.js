const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');


// Test cases
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Pass
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Fail
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Pass
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // Fail