// 1. Variables (let, const, var)
// Question:
// "What is the difference between let, const, and var in JavaScript? Give an example where each of them would be used."
//Var is global scoped(Reassign & Redeclare), let(Reassign but not redeclare) & const(neither reassign nor redeclare) are block scoped.
const university = {
    name: "Saraswati College"
}
console.log(university);
var num1 = 20;
var num1 = 21;
console.log(num1);

let num2 = 30;
num2 = 31;
console.log(num2);
// 2. Data Types (string, number, boolean, null, undefined, symbol, bigint)
// Question:
// "What are the different primitive data types in JavaScript? How does null differ from undefined?"
//String to store Text based data, number stores integers, boolean is true & false, null means no value, Undefined is when the variable or any object or function is not defined correctly.
// 3. Operators (arithmetic, comparison, logical, assignment, ternary)
// Question:
// "Write a program that checks whether a number is even or odd using the ternary operator."
const checkEvenOdd = (number) => number % 2 === 0? "Even": "Odd";
console.log(checkEvenOdd(2));
console.log(checkEvenOdd(7));

// 4. Conditional Statements (if, else if, switch)
// Question:
// "Write a program that uses an if statement to check if a number is positive, negative, or zero, and prints the appropriate message."
var num1 = -1;
if(num1 >= 1){
    console.log("Number is Positive.")
} else if (num1 <= -1){
    console.log("Number is Negative.")
} else {
    console.log("It's a Zero.")
}

// 5. Loops (for, while, do...while, for...of, for...in)
// Question:
// "Write a for loop to print all elements of an array. Then, modify the program to use a for...of loop instead."
let fruits = ["Apple", "Banana", "Mango", "Grapes"];
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

let moreFruits = ["Pineapple", "Watermelon", "Papaya", "Pomegranate"];
for(let fruit in moreFruits){
    console.log(fruit + " : " + moreFruits[fruit]);
}

// 6. Functions (declaration, expression, arrow functions)
// Question:
// "Write a function using a function declaration that takes two numbers as arguments and returns their sum. Then, write the same function using an arrow function."

function sumNumbers(a, b){
    return a + b;
}
console.log(sumNumbers(4, 5));

const addNumbers = (a, b) => a + b;
console.log(addNumbers(2, 4));

// 7. Variables (let, const, var)
// Question:
// "What will be the output of the following code? Why?
// var x = 10;
// if (true) {
//   let x = 20;
//   console.log(x);
// }
// console.log(x);
//Output:
//20
//10

// 8. Loops (for, while, do...while, for...of, for...in)**
// Question:
// "Write a `while` loop that prints all numbers from 1 to 10, and then modify the program to use a `do...while` loop."

let j = 1;
while(j <= 10){
    console.log(j);
    j++;
}

let x = 1;
do{
    console.log(x);
    x++;
} while (x <= 10)

// 9. Data Types (string, number, boolean, null, undefined, symbol, bigint)
// Question:
// "How do you convert a string to a number in JavaScript? Provide two ways to do this."
//  Using Number(), it's a built in function in js that is used to convert string into number.
let str = "42";
let str1 = "55.5px"
let str2 = "11Nehal"
let num = Number(str);
let numm1 = parseFloat(str1);
let nums = parseInt(str2);
console.log(num);
console.log(numm1);
console.log(nums);

// 10. Functions (declaration, expression, arrow functions)**
// Question:
// "Write a function expression that returns the factorial of a given number. Also, implement the same logic using an arrow function."

const findFactorial = function(nums){
let result = 1;
    for(let i = nums; i > 0; i--){
        result = result * i
    }
    console.log(result);
}
findFactorial(10)

const factorialOfNum = (nums) => {
    let result = 1;
    for(let i = nums; i> 0; i--){
        result *= i;
    }
    console.log(result);
}
factorialOfNum(10);