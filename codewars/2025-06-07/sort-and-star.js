// array string, and sorting problem... difficulty is 8

/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/
function twoSort(s) {
    // Sort the array alphabetically
    s.sort();
    
    // Get the first element after sorting
    const firstElement = s[0];
    
    // Join the characters with "***"
    return firstElement.split('').join('***');
}

//time complexity is O(n log n) due to the sorting operation, where n is the number of strings in the array.
//space complexity is O(n) for the sorted array and the string created by joining characters with "***".

//another way 
function twoSort(s) {
    // Sort the array alphabetically
    s.sort();
    
    // Use a regular expression to join characters with "***"
    return s[0].replace(/(.)/g, '$1***').slice(0, -3);
}
// This also sorts the array and formats the first string in the same way.
// This solution also has O(n log n) time complexity due to sorting and O(n) space complexity for the string manipulation.
