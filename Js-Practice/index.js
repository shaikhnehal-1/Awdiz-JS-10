//Ternary Operators
// condition? expressionIfTrue: expressionIfFalse;
//If condition is true then expressionIfTrue will be executed
//If condition is falsethen expressionIfFalse will be executed
//Example
let age = 10;
let result = (age >= 18) ? "Eligible to vote.": "Not Eligible to vote.";
console.log(result);

//Loops
//For Loop
//It consists of three part: Starting Initializing Point, Condition, Increment/Decrement;
//Initialization marks the starting point; Condition checks whether the loop should continute;
//Increment/Decrement updates the loop counter after each iteration.
//Syntax:
// for (Initialization; Condition; Increment/Decrement){
//     //Code to be executed
// }
//Example: Printing Numbers from 1 to 5:
let num = 0;
for (let i = 1; i <= 5; i++){
    let num = i;
    console.log(num);
}

//While Loop
//It executes a block of code as long as specified condition is true, it check condition before executing the block.
//Syntax:
// while(condition){
//     //Code to be executed
// }
//Example: Printing Numbers from 1 to 5:
let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}

//Do...While Loop
//It executes the block of code atleast once, before checking the condition.
//Syntax:
// do{
//     //Code to be executed;
// } while (condition)
//Example: Printing Numbers from 1 to 5:
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

//for...of loop
//This loops goes through the values of an iterable object one by one, here we don't care about indexes or property names, instead only focus on values.
//Syntax:
// for (variable of iterableObject){
//     //Code to be executed for each value
// }
//Example1: Looping through an array
let fruits = ["Banana", "Pineapple", "Mango"];
for (let fruit of fruits){
    console.log(fruit);
}

let message = "HELLO";
for (let letter of message){
    console.log(letter);
}

//for...in loop
//It is used to loop through the keys(properties or indexes) of an object or array.
//It gives property names for objects, and indexes for arrays.
//Syntax:
// for (variable in object){
//     //Code to be executed for each key;
// }
// Example: Looping through an object.
let person = {
    name: "Nehal",
    age : 21,
    city: "Mumbai"
};
for (let key in person){
    console.log(key + " : " + person[key]);
}

// Example: Looping through an array;
let cars = ["Audi", "Porsche", "BMW", "Ferrari"];
cars.push("Mercedes");
cars.shift();
cars.pop();
for (let index in cars){
    console.log(index + " : " + cars[index]);
}

//Breaking out of loops with "break;"
//Example:
for(let i = 1; i <= 10; i++){
    if (i === 5){
        break;
    }
    console.log(i);
}

//Skipping an iteration
//Example
for (let i = 5; i <= 50; i+=5){
    if(i === 15 || i === 25){
        continue;
    }
    console.log(i);
}

//Practice Question: Using for loop Print all Even Numbers between 1 to 50, but skip, 20 & 32.

for (let i = 1; i <= 50; i++){
    if(i % 2 === 0){
        if(i === 20 || i === 32){
            continue;
        }
        console.log(i);
    }
}