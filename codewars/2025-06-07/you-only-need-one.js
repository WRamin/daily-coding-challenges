//string and array problem, difficulty 8

/*
You will be given an array "a" and a value "x". All you need to do is check whether the provided array contains the value.

"a" can contain numbers or strings. "x" can be either.

Return "true" if the array contains the value, "false" if not.
*/
function valueCheck(a, x) {
    return a.includes(x);
}

// Test cases
console.log(valueCheck([66, 101], 66)); // true
console.log(valueCheck([101, 45, 75, 105, 99, 107], 107)); // true

//time complexity is O(n) where n is the length of the array, since we may need to check each element in the worst case.
//space complexity is O(1) since we are not using any additional data structures that scale with input size.

// another solution/way
function valueCheck(a, x) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            return true;
        }
    }
    return false;
}
// This solution also has O(n) time complexity and O(1) space complexity.
