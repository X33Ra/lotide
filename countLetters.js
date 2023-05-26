const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// create a function called countLetters
// function should take in a sentence (as a string)
// and then return a count of each of the letters in that sentence

const countLetters = function(sentence) {

  const letterCount = {};

  // this for loop reads the string result at line 29
  // then it counts reads the letter and count them
  // it returns the number of said letter back to an array then
  // reports it back to you

  for (const char of sentence) {
    if (char !== ' ') {
      if (letterCount[char]) {
        letterCount[char] += 1;
      } else {
        letterCount[char] = 1;
      }
    }
  }

  return letterCount;
};

const result = countLetters('LHL');
console.log(result);
assertEqual(1, 1);