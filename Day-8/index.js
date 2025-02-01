//Methods
//push
var myNumbers = [1, 2, 3]
console.log(myNumbers, "Before Push");
myNumbers.push(4, 5, 6, "Hello")
console.log(myNumbers, "After Push")

//UnShift

myNumbers.unshift("Unshift", 0)
console.log(myNumbers, "After Unshift");

//Shift

myNumbers.shift()
console.log(myNumbers, "After shift");

//Pop

myNumbers.pop()
console.log(myNumbers, "After Pop");

// Splice

const weekDay = ["Mon", "Wed", "Thu", "Sat"]
console.log(weekDay,"Before Splice")
weekDay.splice(1, 0, "Tue");
console.log(weekDay, "After Tuesday")
weekDay.splice(4, 1, "Fri");
console.log(weekDay,"Replacing Sat with Fri")

// Maps

var nums = [4, 8, 12];

var newNums = nums.map((ele) => ele*2);
console.log(newNums);

// For Each
nums.forEach

// Filters

var nums1 = [2, 5, 6, 7, 9, 12, 13]

const evenNums = nums1.filter((ele) => ele % 2 == 0);
console.log(evenNums, "Even Numbers");

//Reduce

var initialValue = 0;
const additionOfNumbers = nums1.reduce((a, cv) => a + cv, initialValue,);
console.log(additionOfNumbers,"Sum of Numbers")