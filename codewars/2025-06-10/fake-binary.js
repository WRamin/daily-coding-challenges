// string and array problem, 8 difficulty

/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/


function fakeBin(x) {
    let result = ''; //beuild new string instead of modifying the original string (can lead to unexpected behavior because strings are immutable in JS)
    for (let i = 0; i < x.length; i++) {
        if (parseInt(x[i]) < 5) {
            result += '0';
        } else {
            result += '1';
        }
    }
    return result;
}

function fakeBin(x) {
    return x.split('').map(d => parseInt(d) < 5 ? '0' : '1').join('');
}

function fakeBin(x) {
    // Use map to transform each character in the string
    return x.split('').map(num => {
        // Convert character to number and check if it's less than 5
        return num < '5' ? '0' : '1';
    }).join(''); // Join the array back into a string
}
