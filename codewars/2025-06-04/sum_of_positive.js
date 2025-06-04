// array problem, difficulty is 8

/*
Task

You get an array of numbers, return the sum of all of the positives ones.
Example

    [1, -4, 7, 12] => 1+7+12=20 1 + 7 + 12 = 20 1+7+12=20

Note

If there is nothing to sum, the sum is default to 0.

*/


function sumPositiveNum(arr) {
    const initialVal = 0;
    const sum = arr.reduce((accumulator, currentVal) => {
      if (currentVal > 0) {
        return accumulator + currentVal;
      } else {
        return accumulator;
      }
    }, initialVal);
    return sum;
  }


for (let i = 0; i > 0; i++) {
    return arr[i]
}

// time complexity is O(n) because we are iterating through the array once
// space complexity is O(1) because we are using a constant amount of space for the accumulator. we are not creating new arr or data strucutres

// another solution using a for loop

function sumPositiveNum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// time complexity is O(n) because we are iterating through the array once
// space complexity is O(1) because we are using a constant amount of space for the sum variable. we are not creating new arr or data strucutres