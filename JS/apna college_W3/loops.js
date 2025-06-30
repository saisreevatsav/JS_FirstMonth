// for loop
// for (let i = 1; i <= 6; i++) {
//     console.log("Hi");
// }

// sum of numbers from 1 to 5
let totalSum = 0;
for (let i = 1; i <= 5; i++) {
    totalSum = totalSum + i;
}
console.log(totalSum);

// while loop
let count = 1;
while (count <= 3) {
    console.log("Hi");
    count++;
}

// do-while loop
// let j = 1;
// do {
//     console.log("I");
//     j++;
// } while (j < 3); // this will run at least once

// for-of loop - to iterate over characters in a string
let nameStr = "john";
let charCount = 0;
for (let char of nameStr) { // iterator -> characters
    console.log(char);
    charCount++;
}
console.log(charCount);

// for-in loop - to iterate over object keys
let student = {
    name: "John",
    age: 20,
    cgpa: 7.5,
    pass: true
};

for (let key in student) {
    console.log(key); // object keys
    console.log(student[key]); // corresponding values
}

// practice question
// print all even numbers from 0 to 100
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// guessing game - match random number
let gameNum = 25;
let userNum = prompt("Guess the number:");
while (gameNum != userNum) { // do not use !== because prompt returns a string
    userNum = prompt("Wrong number, try again:");
}
console.log("Great!");
