// Our map function will take in two arguments:

// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
    results.push(callback(item));
  }
  return results;
};

const assertEqual = function(actual, expected)  {
  // instead of if(eqArrays(actual === expected)) i did (eqArrays(actual, Expected))
  // cause it will not work cause the actual and expected are parametres
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// for this part i wanted to make it so that the assert equal assert checks the values
// and so I added eq arrays to have it do the work then pass it back to eq array
// to print out the report

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

// Instruction:
// Call map and pass in our words and a simple arrow function.
// I also have to add 2 more function to hold the array that will be used to assert

const words = ['ground', 'control', 'to', 'major', 'tom'];
const expectedOutput = ['g','c','t','m','t'];

const results1 = map(words, word => word[0]);
console.log(results1);
// this is for the assert equal's function
assertEqual(results1, expectedOutput);