// Copy our assertEqual function into this new file.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// rules:
// Implement the function findKey which takes in an object and a callback.
// It should scan the object and return the first key for which the callback returns a truthy value
// If no key is found, then it should return undefined.
// Use assertEqual to write test cases for various scenarios.
// The tests should be written below the definition of your function.