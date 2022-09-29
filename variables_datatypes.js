const prompt = require("prompt-sync")({ sigint: true });

let name = "Allison";

//let name = "Boobear";

//the first declaration and initialization takes precedence

console.log(`${name}`);

let dayOfBirth = 21;

console.log(`${dayOfBirth}`);

let userInput = prompt("What is your favorite color?");

console.log(`Thank you ${name} for your favoritite color. You know ${userInput} is such a pretty color!`)