// dsaPractice.js

//Write a function countVowels(str) that returns the number of vowels (a, e, i, o, u) in the input string. The input will be a string of lowercase letters.
function countVowels(str) {
    let count = 0
    let vowels = ["a", "e", "i", "o", "u"] //this works, you could also turn it into a set and use .has()
    for (let letter of str){
        if (vowels.includes(letter)){ // NOT letter.includes(vowels)
            count ++
        }
    } return count
  }
  

//Write a function squareEvens(arr) that takes an array of integers and returns a new array with only the even numbers, each squared.
function squareEvens(arr) {
    console.log("Running squareEvens");
    return []; 
  }
  

//Write a function wordFrequency(str) that takes a string and returns an object with the frequency of each word. Ignore punctuation and treat words case-insensitively.
function wordFrequency(str) {
    console.log("Running wordFrequency");
    return {}; 
  }
  
  module.exports = {
    countVowels,
    squareEvens,
    wordFrequency,
  };
