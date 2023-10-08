
  // Write your algorithm here
  function isPalindrome(word) {
    // Convert the word to lowercase to handle case-insensitivity
    word = word.toLowerCase();
  
    // Initialize pointers
    let leftIndex = 0;
    let rightIndex = word.length - 1;
  
    // Use a while loop to check characters from both ends of the word
    while (leftIndex < rightIndex) {
      // If characters at leftIndex and rightIndex are not equal, it's not a palindrome
      if (word[leftIndex] !== word[rightIndex]) {
        return false;
      }
      leftIndex++;
      rightIndex--;
    }
  
    // If the loop completes without returning false, it's a palindrome
    return true;
  }
  
  // Example usage and testing
  if (require.main === module) {
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
  }
  
  module.exports = isPalindrome;

