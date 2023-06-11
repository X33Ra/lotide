//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
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

module.exports = eqArrays;