const findKey = require('../findKey');
const assertEqual = require('../assertEqual');

const obj1 = {
  "blue": { stars: 2 },
  "green": { stars: 1 },
  "yellow": { stars: 3 },
  "red": { stars: 2 }
};

const result1 = findKey(obj1, value => value.stars === 1);
assertEqual(result1, "green");

const result2 = findKey(obj1, value => value.stars === 4);
assertEqual(result2, undefined);

const result3 = findKey(obj1, value => value.stars > 2);
assertEqual(result3, "yellow");