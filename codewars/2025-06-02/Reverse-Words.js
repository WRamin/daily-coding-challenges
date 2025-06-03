// string problem, difficulty 7

/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseStr(str) {
    // splits the string into words
    const words = str.split(' ')
    // split and reverse the letters in the words --- map goes through each word
    const reverseWords = words.map(word => word.split('').reverse().join(''));
    // rejoin the words into a string
    const result = reverseWords.join(' ')
    return result
}

// time complexity is O(n), every step processes or creates a structure proporational to the input size (n)
// time complexity is O(n), nothin is reused in place (since strings are immutable in js)


//Another Solution to this problems is 

function reverseStr(str) {
    //split words into seperate arrays
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }