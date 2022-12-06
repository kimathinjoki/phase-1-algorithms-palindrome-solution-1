function isPalindrome(word) {
  // Write your algorithm here
  // reverse the input string
  function reverseString(word) {
    return word.split("").reverse().join("");



  }
  //create a variable for the   called string
  const reversedWord = reverseString(word);
// compare the reversed string to the input
  return word === reversedWord

}

/*
Add your pseudocode here
reverse the input string

Compare the reversed string if its the same as the input
  return true if  they do

  else return false
*/

/*
  Add written explanation of your solution here
  Created a function that took the word and split it which returns an array that can be passed the reverse() method then joined it using the join() function.
  created another function that compared the input word with the same word in our reverse function as a call back function using a strick comparison.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}