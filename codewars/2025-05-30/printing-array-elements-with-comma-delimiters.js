// Array Problem, 8 difficulty

/* Input: Array of elements     //Shift + Option + A

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

Note: if this seems too simple for you try the next level

Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕
 */


//Solution

function commaDelimiter(arr) {
    // merge the array
    return arr.join(",")
}
console.log(commaDelimiter(["h","o","l","a"]))

//Another way, arrow function, dont have to add the comma inbetween the brackets because if nothing is passed in the brackets it defaults to commas

const commaDelimiter = arr => arr.join();