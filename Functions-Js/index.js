//Functions: It's a block of code designed to perform a sepcific task.
//Function Declaration Syntax:
// function functionName(parameters){
//     //code to be executed
// }
//Example: Create A greet Function.
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Nehal");

//Hoisting in function declaration
sayHello();
function sayHello() {
  console.log("Hi There!");
}

//Function Expression: A function can also be stored in variable hence it's called Function Expression.
//Syntax:
// const functionName = function(parameters){
//     //Code to be executed
// };

//Example: Create a function expression that divides two numbers.
const divide = function (a, b) {
  return a / b;
};
console.log(divide(2, 9));

//Arrow Function: Used to Simplify Function Expressions
//Syntax:
// const functionName = (parameters) => {
//     //Code to be executed
// };
//Example: Add two numbers using arrow function:
const add = (a, b) => {
  return a + b;
};
console.log(add(3, 5));
//Single Line Arrow Functions w/o {} & return statement.
//Example : Calculate square of number using one liner arrow function.
const square = (num) => num * num;
console.log(square(9));

//Anonymous Function: Thee don't have a function name, it's used for cases like event handlers & callbacks.
//Example: Example of an Anonymous Function with setTimeout:
setTimeout(function () {
  console.log("This Returns after 3 Seconds.");
}, 3000);

//Create an anonymous function that:
//Accepts two numbers as parameters.
// Returns their sum.
// Use this function to calculate the sum of 10 and 15 and log it to the console.
const sum = function (num1, num2) {
  return num1 + num2;
};
console.log(sum(10, 15));

//Create a function inside an object that prints Hello, [name] after 1 second, using setTimeout and an arrow function to correctly reference this.name.
const person = {
    name: "Nehal",
    greet: function(){
        setTimeout(() => {
            console.log("Hello, " + this.name +"!");
        }, 2000);
    }
};
person.greet();