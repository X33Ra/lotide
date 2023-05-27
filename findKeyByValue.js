// Copy assertEqual function


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// conditions:
// Implement the function findKeyByValue which takes in an object and a value
// should scan the object and return the first key which contains the given value
// If no key with that given value is found, then it should return undefined.
// Use assertEqual to write test cases for various scenarios.

// Here are some test assertions for you to implmement and make pass

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);