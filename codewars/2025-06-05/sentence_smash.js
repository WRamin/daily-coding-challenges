// string & array problem, 8 difficulty

/*
Sentence Smash

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
Example

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

words = ['hello', 'world', 'this', 'is', 'great']
smash(words) # returns "hello world this is great"

Assumptions

    You can assume that you are only given words.
    You cannot assume the size of the array.
    You can assume that you do get an array.

What We're Testing

*/

function smash(words) {
    return words.join(' ');
}
// time complexity is O(n) because we are iterating through the array once to join the words
// space complexity is O(n) because we are creating a new string that is the length of the words array

// another solution using a for loop
function smash(words) {
    let sentence = '';
    for (let i = 0; i < words.length; i++) {
        if (i > 0) {
            sentence += ' ';
        }
        sentence += words[i];
    }
    return sentence;
}
// time complexity is O(n) because we are iterating through the array once to build the sentence
// space complexity is O(n) because we are creating a new string that is the length of the words array