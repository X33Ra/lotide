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