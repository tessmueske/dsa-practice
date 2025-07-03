// dsaPractice.test.js - using Node.js's assert module

const assert = require('assert');
const {
    countVowels,
    squareEvens,
    wordFrequency,
    isAnagram,
    firstNonRepeatingChar,
    groupAnagrams,
    sumEvenSquares,
    //wordLengths,
    //groupWordsByLength,
    //mostFrequentChar,
} = require('./dsaPractice');

// ******************************************************************

// countVowels tests

assert.strictEqual(countVowels("hello"), 2);
assert.strictEqual(countVowels("rhythm"), 0);
assert.strictEqual(countVowels("aeiou"), 5);
assert.strictEqual(countVowels("mississippi"), 4);
console.log("All countVowels tests passed!");

// ******************************************************************

// // squareEvens tests

assert.deepStrictEqual(squareEvens([1, 2, 3, 4]), [4, 16]);
assert.deepStrictEqual(squareEvens([0, 1, 5, 6]), [0, 36]);
assert.deepStrictEqual(squareEvens([1, 3, 5]), []);
assert.deepStrictEqual(squareEvens([2, 2, 2]), [4, 4, 4]);
console.log("All squareEvens tests passed!");

// ******************************************************************

// // wordFrequency tests

assert.deepStrictEqual(
  wordFrequency("Hello world! Hello again."),
  { hello: 2, world: 1, again: 1 }
);
assert.deepStrictEqual(
  wordFrequency("A man a plan a canal Panama"),
  { a: 3, man: 1, plan: 1, canal: 1, panama: 1 }
);
assert.deepStrictEqual(
  wordFrequency("One fish two fish red fish blue fish"),
  { one: 1, fish: 4, two: 1, red: 1, blue: 1 }
);
console.log("All wordFrequency tests passed!");

// ******************************************************************

// isAnagram tests

assert.strictEqual(isAnagram("listen", "silent"), true);
assert.strictEqual(isAnagram("hello", "olelh"), true);
assert.strictEqual(isAnagram("hello", "world"), false);
assert.strictEqual(isAnagram("Dormitory", "dirty room"), true);
console.log("All isAnagram tests passed!");

// ******************************************************************

// firstNonRepeatingChar tests

assert.strictEqual(firstNonRepeatingChar("aabcc"), "b");
assert.strictEqual(firstNonRepeatingChar("xxyz"), "y");
assert.strictEqual(firstNonRepeatingChar("aabb"), null);
assert.strictEqual(firstNonRepeatingChar("a"), "a");
console.log("All firstNonRepeatingChar tests passed!");

// ******************************************************************

// groupAnagram tests

assert.deepStrictEqual(
    groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]),
    [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
  );
  assert.deepStrictEqual(
    groupAnagrams([""]),
    [[""]]
  );
  assert.deepStrictEqual(
    groupAnagrams(["a"]),
    [["a"]]
  );
  console.log("All groupAnagrams tests passed!");

// ******************************************************************


// groupWordsByLength tests

// assert.deepStrictEqual(
//     groupWordsByLength(["cat", "hi", "bat", "hello", "me", "see", "a"]),
//     [["hello"], ["cat", "bat", "see"], ["hi", "me"], ["a"]]
//   );
  
//   assert.deepStrictEqual(
//     groupWordsByLength(["", "a", "bb", "ccc", "dd", "ee"]),
//     [["ccc"], ["bb", "dd", "ee"], ["", "a"]]
//   );
  
//   assert.deepStrictEqual(
//     groupWordsByLength(["one", "two", "three", "four", "five", "six"]),
//     [["three"], ["four", "five"], ["one", "two", "six"]]
//   );
  
//   assert.deepStrictEqual(
//     groupWordsByLength([]),
//     []
//   );
  
//   console.log("All groupWordsByLength tests passed");

// ******************************************************************

// sumEvenSquares tests

assert.strictEqual(sumEvenSquares([1, 2, 3, 4]), 20);
assert.strictEqual(sumEvenSquares([0, -2, -3]), 4);
assert.strictEqual(sumEvenSquares([1, 3, 5]), 0);
console.log("All sumEvenSquares tests passed!");

// ******************************************************************

// wordLengths tests

// assert.deepStrictEqual(wordLengths("hello world"), [5, 5]);
// assert.deepStrictEqual(wordLengths("hi  there   friend"), [2, 5, 6]);
// assert.deepStrictEqual(wordLengths("  openAI  "), [6]);
// console.log("All wordLengths tests passed!");

// ******************************************************************

// mostFrequentChar tests

// assert.strictEqual(mostFrequentChar("Hello World"), "l");
// assert.strictEqual(mostFrequentChar("aaabbc"), "a");
// assert.strictEqual(mostFrequentChar("122333"), "3");
// console.log("All mostFrequentChar tests passed!");

// ******************************************************************