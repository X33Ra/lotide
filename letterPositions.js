// return all the indices (zero-based positions) in the string where each character is found.
// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char !== ' ') {
      if (!results[char]) {
        results[char] = [i];
      } else {
        results[char].push(i);
      }
    }
  }

  return results;
};
const banana = letterPositions('lighthouse in the house');
console.log(banana);


//copy eqArrays function below
const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }

  return true;
};
// I added some test codes just to define eqArray's function

eqArrays([1, 2, 3], [1, 2, 3]); // => true

// Copy assertArrayEqual function below

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// Added a test case to define assetArrayEqual function
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Pass