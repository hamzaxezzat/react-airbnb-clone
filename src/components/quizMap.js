/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5];
// -->       [1, 4, 9, 16, 25]
// Your code here
let squares = nums.map((x) => 2);
/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"];
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
let capitalNames = names.map(
    (i) => i.charAt(0).toLocaleUpperCase() + i.slice(1)
);
/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here
function p(i) {
    return `<p> ${i}</p>`;
}
let pokemonToP = pokemon.map((x) => p(x));

/*
Swap Cases Challenge
*/
let swappingCases = "elZERo";
let swappingCasesSolution = swappingCases
    .split("")
    .map((i) => {
        i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase();
    })
    .join("");
console.log(swappingCasesSolution);
let invertedNumbers = [1, -10, -(-20), 15, 100, -301];
let ignoreBooleans = -"Elz123er40";
