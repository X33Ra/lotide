const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('should return [2, 3] for [1, 2, 3]', () => {
    assert.deepStrictEqual(tail([1, 2, 3]), [2, 3]);
  });

  it('should return [2, 3, 4] for [1, 2, 3, 4]', () => {
    assert.deepStrictEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it('should return [] for [5]', () => {
    assert.deepStrictEqual(tail([5]), []);
  });

  it('should return [] for an empty array', () => {
    assert.deepStrictEqual(tail([]), []);
  });
});




// assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).toString(), ["Lighthouse", "Labs"].toString()); // this just doesnt include the head part

// // the test codes below is for fancy double checks
// assertEqual(tail([5]).toString(), [].toString()); this is to return an empty array when there is only one input in the array
// assertEqual(tail([]).toString(), [].toString());  but my guy here returns nothing when you give the code nothing to work with