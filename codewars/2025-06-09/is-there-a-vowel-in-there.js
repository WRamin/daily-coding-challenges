// string and array problem, 8 difficulty

/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.
*/

function isVow(a) {
    const vowels = [97, 101, 105, 111, 117]; // ASCII codes for lowercase vowels: ['a', 'e', 'i', 'o', 'u']

    // using map to create a new array by transforming each element 
    return a.map(num => {
        // checking if number is a vowel character code
        if (vowels.includes(num)) {
            // convert the number to its corresponding character (vowel)
            return String.fromCharCode(num);
        } else {
            // if it's not a vowel, return the number as it is 
            return num
        }
    });

}

// time and space complexity is O(n), one pass through the array and new array returned thats the same size as the input

// Another solution 

function isVow(a) {
  // Use map to go through each number in the array
  return a.map(num => {
    // Convert the number to a character
    const char = String.fromCharCode(num);

    // Check if the character is a lowercase vowel
    if ('aeiou'.includes(char)) {
      // If it's a vowel, return the vowel character instead of the number
      return char;
    } else {
      // Otherwise, keep the number as it is
      return num;
    }
  });
}



// space and time complexity are O(n) linear, a new array is create the same length as the input, no big data structures are created- just some small constants (char) is reused
// and .map loops through the array once -> n iterations 