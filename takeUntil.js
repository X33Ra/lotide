// Instructions::
// We will be implementing a function quite similar to this one, but isn't present in their library: takeUntil.

// It will take in two parameters as well:

// The array to work with
// The callback (which Lodash calls "predicate")


const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  return results;
};

// The function will return a "slice of the array with elements taken from the beginning."
// It should keep going until the callback/predicate returns a truthy value.
// the callback should only be provided one value: The item in the array
// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.



// Bring in our assertArraysEqual function (and associated eqArrays function) in order write some easy-to-read test cases.
