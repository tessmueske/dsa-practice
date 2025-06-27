// dsaPractice.js

// Write a function countVowels(str) that returns the number of vowels (a, e, i, o, u) in the input string. The input will be a string of lowercase letters.

function countVowels(str) {
    let count = 0
    let vowels = ["a", "e", "i", "o", "u"] //this works, you could also turn the input into a set into a set and use .has()
    for (let letter of str){
        if (vowels.includes(letter)){ // NOT letter.includes(vowels)
            count ++
        }
    } return count
  }
  
// ******************************************************************

// Write a function squareEvens(arr) that takes an array of integers and returns a new array with only the even numbers, each squared.

function squareEvens(arr) {
    let newArr= []
    for (let i = 0; i<arr.length; i++){
        let numSq = Math.pow(arr[i], 2) // Math.pow finds the power of something that's passed in as the second argument
        if (numSq % 2 === 0) {
            newArr.push(numSq)
        }
    } return newArr
}
  
// ******************************************************************

// Write a function wordFrequency(str) that takes a string and returns an object with the frequency of each word. Ignore punctuation and treat words case-insensitively.

function wordFrequency(str) {
    let words = str.toLowerCase().replace(/[^\w\s]/g, "").split(" ") // the split is necessary because it creates separated elements at each space
    let freq = {} // initialize hashmap aka empty object
    for (let word of words){
        if (word){ // this line ignores empty strings
            freq[word] = (freq[word] || 0) + 1 // freq[word] grabs the current frequency of the given word, then sets it equal to the current word count OR sets it to zero, then increases it by one
        }
    } 
    return freq;
  }

// ******************************************************************

// Write a function isAnagram(str1, str2) that returns true if str1 and str2 are anagrams of each other (same letters, same frequency), and false otherwise. Ignore case and spaces.

function isAnagram(str1, str2) {
    let sort1 = str1.toLowerCase().replace(/\s/g, '').split('').sort().join('') //the .replace() part cleans out the spaces and characters - /\s/ means to replace any whitespace character like a space, a tab, a new line, etc, and the g is globally
    let sort2 = str2.toLowerCase().replace(/\s/g, '').split('').sort().join('')
    if (sort1 === sort2){
        return true
    } else {
        return false
    }
  }

// ******************************************************************

// Write a function firstNonRepeatingChar(str) that returns the first character in the string that doesn’t repeat. If all characters repeat, return null.

function firstNonRepeatingChar(str) {
    // initialize empty object (hashmap)
    // split the string into separate characters
    // count the frequency of each character
    // if any hashmap has a count of only 1, return the character
    // if all characters repeat, return null

    let freq = {} 

    for (let char of str){
        if (char) {
            freq[char] = (freq[char] || 0) + 1 
        }
    } // this loop counts how many times each character appears

    for (let char of str){
        if (freq[char] === 1) { // we want the first non-repeating character (aka the count is 1)
            return char
        } 
    } return null;
}

// ******************************************************************

// Write a function groupAnagrams(words) that groups a list of words into anagrams.

function groupAnagrams(words) {
    // initialize empty object to store the hashmap
    let hashmap = {}
    // so we need to loop through the words, split them, sort them, re-join them
    for (let word of words){
        let x = word.split('').sort().join('') // this is creating a key

        if (!hashmap[x]) { // like if that word's hashmap doesn't exist (aka the key), we initialize a new one
            hashmap[x] = [];
        }

        hashmap[x].push(word)

    } return Object.values(hashmap); // returns an array of the values in the hashmap Object
}

// ******************************************************************

// Write a function groupWordsByLength(words) that takes an array of strings and groups them by their length. Return an array of arrays, where each sub-array contains words of the same length.

function groupWordsByLength(words) {
    //code here
}
  
// ******************************************************************

// Write a function that takes an array of integers and returns the sum of the squares of all even numbers using filter and reduce.

function sumEvenSquares(arr) {
    //code here
}
  
// ******************************************************************

// Write a function wordLengths that takes a sentence (string) and returns an array containing the length of each word. Ignore extra spaces.

function wordLengths(arr) {
    //code here
}

// ******************************************************************

// Write a function mostFrequentChar that returns the most frequent character in a string (case-insensitive), ignoring spaces and punctuation.

function mostFrequentChar(arr) {
    //code here
}

  module.exports = {
    countVowels,
    squareEvens,
    wordFrequency,
    isAnagram,
    firstNonRepeatingChar,
    groupAnagrams,
    groupWordsByLength,
    sumEvenSquares,
    wordLengths,
    mostFrequentChar
  };
