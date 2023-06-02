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
