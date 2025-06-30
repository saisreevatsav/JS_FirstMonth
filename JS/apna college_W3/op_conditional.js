// arithmetic operators
let numA = 5;
let numB = 2;

// binary operators
// console.log(numA + numB);
// console.log(numA - numB);
// console.log(numA % numB);
// console.log(numA ** numB);

// unary operators
// console.log(++numA); // pre-increment -> value updates immediately
// console.log(--numB); // pre-decrement
// Note: post-increment/post-decrement only reflects in the next step

// assignment operator
// numA += 4; // numA = numA + 4
// console.log(numA);

// comparison operators - result is boolean
// console.log(numA == numB);
// console.log(numA != numB);
// console.log(numA >= numB);
// let nameStr = "john";
// console.log(numA === nameStr); // false

// logical operators - result is boolean
// let cond1 = numA > numB;
// let cond2 = numA === 6;
// console.log(cond1 && cond2); // false
// console.log(cond1 || cond2); // true
// console.log(!(numA < numB)); // true

// conditional statements
// if and if-else statements
// let age = 25;
// if (age > 18) {
//     console.log("vote");
// } else {
//     console.log("study");
// }

// else-if statements
// if (age < 18) {
//     console.log("jr");
// } else if (age > 50) {
//     console.log("sr");
// } else {
//     console.log("study");
// }

// ternary operator
// let result = age > 42 ? "Sr" : "Study";
// console.log(result);

// practice problem - check if number is divisible by 5
let userNum = prompt("Enter a number:");
if (userNum % 5 === 0) {
    console.log("yes");
} else {
    console.log("no");
}
