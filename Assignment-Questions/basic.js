//Basic Level

//1. Write a for loop to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Use a for loop to print all even numbers between 1 and 20.
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 3. Write a loop to calculate the sum of the first 10 natural numbers.
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);

// 4. Use a for loop to print all numbers divisible by 5 between 1 and 50.

for (let i = 1; i <= 50; i++) {
  if (i % 5 == 0) {
    console.log(i);
  }
}

// 5. Write a loop to calculate the factorial of a given number.

let n = 12;
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial = factorial * i;
}

console.log("Factorial : ", factorial);

// 6. Use a for loop with a conditional to print all odd numbers between 1 and 20.

for (let i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// 7. Write a loop to calculate the sum of all even numbers between 1 and 100.

let sumEven = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEven += i;
  }
}

console.log("Sum is : ", sumEven);

// 8. Use a loop to check if a given number is prime.

let num = 5;
isPrime = true;

if(num < 2){
    isPrime = false;
} else {
    for(let i = 2; i < num; i++){
        if (num % i === 0){
            isPrime = false;
            break;
        }
    }
}

console.log(num, "is", isPrime? "a Prime Number" : "not a Prime Number")
