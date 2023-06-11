// this part still stays the same they do compare and such then badabing badaboom product
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
// this part poofs the array into two and then make a new array to return back to the assert equal
const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1);
};

module.exports = tail;

// TEST CODE



                                                                            