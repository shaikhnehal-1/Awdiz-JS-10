//Given an range 23 - 56, Print the count of all odd numbers.
var count = 0;
for (var i = 23; i <= 56; i++) {
  if (i % 2 === 1) {
    console.log("Found Odd Number ", i);
  }
  count++;
}
console.log("Odd Count: ", count);

//Given an range 43 - 11, Print the count of all even numbers.
var count = 0;
for (var i = 43; i >= 11; i--) {
  if (i % 2 === 0) {
    console.log("Found Even Number ", i);
  }
  count++;
}
console.log("Even Count: ", count);

//While Loop
//print 1-10
var number = 1;
while (number <= 10) {
  console.log(number);
  number++;
}

var number = 10;
while (number > 0) {
  console.log(number);
  number--;
}

//Given a range from 34 - 67, Find out total count of even & odd Number.

var evenCount = 0;
var oddCount = 0;
var number = 34;
while (number <= 67) {
  if (number % 2 === 0) {
    console.log("Found Even Number ", number);
    evenCount++;
  } else if (number % 2 === 1) {
    console.log("Found Odd Number ", number);
    oddCount++;
  }
  number++;
}
console.log("Even Count : ", evenCount);
console.log("Odd Count : ", oddCount);

//print odd numbers between 1-20 using while loop
var number = 1;
while (number <= 20) {
  console.log(number);
  if (number % 2 === 0) {
    number++;
  } else {
    number += 2;
  }
}

//Function
console.log("Outside Function")
var greet = "Hello";
var user = ["Nehal", "Ehtesham"]
function randomStuff(){
    console.log(greet, user[0]);
    console.log(greet, user[1]);
}
randomStuff();

function additionNumbers(a, b){
    console.log(a + b);
}
additionNumbers(3, 5);

//break, continue
for(var i = 1; i <= 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}

for(var i = 1; i <= 10; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
} // It will print odd numbers

//Q: Given a range from starting = 23 & ending = 45;
//find out count of even numbers by using function while loop & conditional statement.

function countOfEven(starting, ending){

    var evenCount = 0;
    var i = starting;
    while(i <= ending){
        if(i % 2 === 0){
            evenCount++;
        }
        i++;
    }
    console.log("Even Count : ", evenCount);
}
countOfEven(23, 45);

function evenCountt(starting, ending){

    var evenNoCount = 0;
    while(starting <= ending){
        if(starting % 2 === 0){
            evenNoCount++;
        }
        starting++;
    }
    console.log("Even Count : ", evenNoCount);
}
evenCountt(23, 45);