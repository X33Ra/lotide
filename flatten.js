const flatten = function(array) {
  const flattened = [];

  for (let element of array) {
    if (Array.isArray(element)) {
      flattened.push(...flatten(element));
    } else {
      flattened.push(element);
    }
  }

  return flattened;
};
module.exports = flatten;
// Test case
// console.log(flatten([1, 2, [3, 4], 5, [6]])); // Output: [1, 2, 3, 4, 5, 6]
