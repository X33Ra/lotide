const isElementInArray = function(array, element) {
  return array.includes(element);
};

const without = function(source, itemsToRemove) {
  const subset = [];

  for (let i = 0; i < source.length; i++) {
    if (!isElementInArray(itemsToRemove, source[i])) {
      subset.push(source[i]);
    }
  }

  return subset;
};
// Test cases
console.log(without([1, 2, 3], [1])); // Output: [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // Output: ["1", "2"]