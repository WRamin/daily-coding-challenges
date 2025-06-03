// Array/list problem, 8 Difficulty

/*
The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task:

Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
name is a property of Player objects, e.g Player.name

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name

Random input limits:

    6≤Players≤506 \le \text{Players} \le 506≤Players≤50
    5000≤Position≤500005000 \le \text{Position} \le 500005000≤Position≤50000
*/

function duckDuckGoose(players, goose) {
    // adjust to start at 1 and not 0 and to go in a circular wrap
    const index = (goose - 1) % players.length;
    // get the new index for the goose
    return players[index].name
    // return players[(goose - 1) % players.length].name
}

// time complexity is O(1) constant time, no looping or iterations 
// space complexity is O(1) constant  space, no new arrays, objects, or data structures are created


//Another syntax

const duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name;

// same time and space complexity



