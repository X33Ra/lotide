// this part still stays the same they do compare and such then badabing badaboom product
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// this part poofs the array into two and then make a new array to return back to the assert equal
const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1);
};

// TEST CODE
assertEqual(tail([1, 2, 3]).toString(), [2, 3].toString()); // this checks if it's same
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).toString(), ["Lighthouse", "Labs"].toString()); // this just doesnt include the head part

// the test codes below is for fancy double checks
assertEqual(tail([5]).toString(), [].toString()); // this is to return an empty array when there is only one input in the array
assertEqual(tail([]).toString(), [].toString()); // but my guy here returns nothing when you give the code nothing to work with


                                                                            