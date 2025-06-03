// array problem, 8 difficulty

/*
Given a random non-negative number, you have to return the digits of this number 
within an array in reverse order.
*/

function digitize(n) {
    // use String.split() to break the string into an array, then use map method to create a new array and turn the values into a number, followed by reversing it with an array method
    return String(n).split("").map(Number).reverse()
}

//time complexity = O(n), all operations go over the entire list n times
// space compelexity = O(n), we dont 

// another solution 

function digitize(n) {
    return n
    .toString() // convert to string eg. "3456"
    .split('')  // split into ['3', '4', '5', '6']
    .reverse()  // reverse the array ['6', '5', '4', '3']
    .map(Number); // convert them into numbers [6, 5, 4, 3]
}

//time complexity = O(n), all operations go over the entire list n times
// space compelexity = O(n)


// Anther interesting way of solving it 

function digitize(n) {
    const digits = [];
    if (n === 0) return [0];  // Handle zero case explicitly
  
    while (n > 0) {
      digits.push(n % 10);      // Get last digit
      n = Math.floor(n / 10);   // Remove last digit
    }
  
    return digits;
  }
  

  //time and space compexity is O(n), one loop per digit extracted and one array element per digit respectively