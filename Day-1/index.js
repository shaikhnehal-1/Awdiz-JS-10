//Nehal-JS-Day1
// Day-1
// Datatypes
//     String -> 'Nehal' "Shaikh" '1234' `@#$%`
//     Number -> 24, 5.6, 99999
//     Boolean -> true & false

// Variables

// console.log(typeof "Nehal", "Nehal Shaikh");
// console.log(typeof (8 + 7));
// console.log(typeof 9.1, 9.1)
// console.log(typeof true, true)
// console.log(typeof false, false)
// console.log(10 > 50)
// console.log(100 > 50)

// Variables
// var
// let
// const

// variableType variableName = Data
var myUserName = "Nehal";
console.log("myUserName", myUserName, typeof myUserName);
var myAge = 21;
console.log("myAge", myAge, typeof myAge);
var isOpen = true;
console.log("isOpen", isOpen, typeof isOpen);

var num1 = 150;
var num2 = 51;
console.log(num1 + num2);

// var number = 11; // Declare & Assign
// console.log(number);
// number = 9; // Re-assign
// console.log(number);
// var number = 15; // Re-declare
// console.log(number);

// let myNumber = 22; // Declare & Assign
// console.log(myNumber);
// myNumber = 25; // Re-assign
// console.log(myNumber);
// let myNumber = 31; // Cannot Re-declare
// console.log(myNumber);

// const aNumber = 60; // Declare & Assign
// console.log(aNumber);
// aNumber = 10; // Cannot Re-assign
// console.log(aNumber);
// const aNumber = 30; //Cannot Re-declare
// console.log(aNumber);

//                     Re-assign           Re-declare          Scope                    Hoisting
// var                 true                true                Global-Scoped            true
// let                 true                false               Block-Scoped             false
// const               false               false               Block-Scoped             false


//Hoisting: Pulls a value ontop of the code. Only works with Var, not with let & const.

//Comparison Operator  
    // =       -> Assign
    // ==      -> Compare data
    // ===     -> Compare data + datatype
    // !=      -> Not equals

console.log(2 == '2');
console.log(2 === '2');
console.log(2 != 2);
console.log("3" != 3);
console.log("3" !== 3);