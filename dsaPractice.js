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
    let arr = {} // this should be an object, not an array
    for (let word of words){
        let key = word.length
        if (!arr[key]){
            arr[key] = []
        } 
        arr[key].push(word)
    } 

    let ans = Object.keys(arr)
        .sort((a, b) => b - a) // SORT: Sort keys (numbers) by *descending* numeric value (bc the keys are numbers);
        .map(key => arr[key]) // MAP: then get corresponding arrays to each numeric key. The map creates a new array by applying something to each thing in the original array. 
    
        // So for example with key => arr[key] gets the corresponding array for each numeric key. arr[5] gets that array. Then you return the total array.
        // arr["5"] → ["hello"]
        // arr["3"] → ["cat", "bat", "see"]
        // arr["2"] → ["hi", "me"]
        // arr["1"] → ["a"]
        
    return ans
} 
  
// ******************************************************************

// Write a function that takes an array of integers and returns the sum of the squares of all even numbers.

function sumEvenSquares(arr) {
    //initialize a new, blank array
    let newArr = []
    //loop through the elements in the array
    for (let num of arr){
        if (num % 2 === 0){
            let sq = num*num
            newArr.push(sq)
        }
    } 
    let init = 0 //you need to set an init value
    let sum = newArr.reduce((accumulator, currentValue) => accumulator + currentValue, init)
    //use reduce on the new array to get the sum
    return sum
    //return the sum
}
  
// ******************************************************************

// Write a function wordLengths that takes a sentence (string) and returns an array containing the length of each word. Ignore extra spaces.

function wordLengths(arr) {
    let words = arr.trim().split(/\s+/); //i had originally thought just doing a split was enough, but it wasn't, because then i was just iterating over each character in arr during the loop. so we need a trim because it removes any whitespaces (tabs, spaces, etc) and .split. /\s+/ means \s means “any whitespace” (spaces, tabs, newlines); + means any more of those; 
    //initialize an empty arr
    let final = []
    //so we need to loop through input arr
    for (let word of words){
        final.push(word.length)
    }
    //for each word in input arr, push the integer of its length into the new arr
    return final
    //return the new arr 
    
}

// ******************************************************************

// Write a function mostFrequentChar that returns the most frequent character in a string (case-insensitive), ignoring spaces and punctuation.

function mostFrequentChar(arr) {
    //initialize an empty hashmap
    hash = {}
    let cleaned = arr.toLowerCase().replace(/[^a-z0-9]/g, ''); //we need the .replace(/[^a-z0-9]/g, '') part because it replaces all starting and trailing non alphanumeric characters from the string with nothing (denoted by the '')
    //loop through the characters in the arr
    for (let char of cleaned){
        if (!hash[char]){
            hash[char] = 1 //we set it equal to 1, because that means theres 1 instance of that character
        } 
        else {
            hash[char]++ //update each key's value count
        }
    } 
    let maxChar = ''
    let maxCount = 0
    for (let char in hash){
        if (hash[char]>maxCount){
            maxCount = hash[char]
            maxChar = char //Every time we find a character with more occurrences than any we've seen before, we update maxCount to store how many times this char appeared and update maxChar to remember which character that was
        }
    }
    return maxChar
}

// ******************************************************************

// Write a function longestCommonPrefix that returns the most frequent character in a string (case-insensitive), ignoring spaces and punctuation.

 function longestCommonPrefix(strs) {
    //set up empty hash map
    if (strs.length === 0) {
        return ''
    }
    let minLength = Math.min(...strs.map(str => str.length)); 
    //the length can only be as long as the smallest string?
    for (let i = 0; i<strs.length; i++){
        if (x){
            //do all the strings start with the same first letter?
            //do they all have the same second letter?
            //third?
            //continue until there's a difference
        } else {
            return ''
        }
    }
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
    mostFrequentChar,
    longestCommonPrefix,
  };
