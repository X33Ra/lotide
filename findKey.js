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


// implement find key function that take object and a cb [check]
const findKey = function(object, callback) {
  // scan the object and return first key
  for (let key in object) {
    if (callback(object[key])) {
      //return key if work [check]
      return key;
    }
  }
  // if no key found return undefined [check]
  return undefined;
};

//Test cases
// these things go to find key
// then find key process them and return them back here
// then they go to assert equal for report
const obj1 = {
  "blue": { stars: 2 },
  "green": { stars: 1 },
  "yellow": { stars: 3 },
  "red": { stars: 2 }
};

const result1 = findKey(obj1, value => value.stars === 1);
assertEqual(result1, "green");

const result2 = findKey(obj1, value => value.stars === 4);
assertEqual(result2, undefined);

const result3 = findKey(obj1, value => value.stars > 2);
assertEqual(result3, "yellow");