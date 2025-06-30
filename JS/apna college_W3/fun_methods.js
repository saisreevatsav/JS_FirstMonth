// function with parameters and arguments
function greet(msg) { // parameters
    console.log("Hi");
}
greet("World"); // argument

// two numbers sum function
function sum(x, y) {
    let result = x + y;
    return result; // after return, any code will not be executed
}
let sumValue = sum(1, 3);
console.log(sumValue);

// arrow function (compact function syntax)
const multiply = (a, b) => {
    console.log(a * b);
};
multiply(1, 3);

// practice questions

// Q1 - normal function to count vowels
function countVowels(str) {
    let count = 0;
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log("Normal function:", count);
}
countVowels("Hello");

// Q2 - arrow function to count vowels
const countVowelsArrow = (str) => {
    let count = 0;
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log("Arrow function:", count);
};
countVowelsArrow("Sreevatsav");

// callback function using forEach
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printValue(val) { // value at each index
    console.log("ForEach function:", val);
});

// callback with arrow function
arr.forEach((val) => {
    console.log("Callback with arrow function:", val);
});

// practice - square of each number
let squareArray = [1, 2, 3, 4, 5];
squareArray.forEach(function squareValue(val) {
    let square = val * val;
    console.log("Square of each number:", square);
});

// map - array method
let numbers = [2, 3, 4, 5];
let mappedArray = numbers.map((val) => {
    return val;
});
console.log(mappedArray); // can create a new array using map

// filter - to get even numbers
let evenArray = [2, 3, 4, 5];
let filteredEven = evenArray.filter((val) => {
    return val % 2 === 0;
});
console.log(filteredEven);

// reduce - to sum values
let reduceArray = [2, 3, 4, 5];
const totalSum = reduceArray.reduce((res, curr) => {
    return res + curr;
});
console.log(totalSum);

// practice questions

// Q1 - filter marks >= 90
let marks = [23, 45, 67, 89, 99, 100];
const greatMarks = marks.filter((val) => {
    return val >= 90;
});
console.log("Q1 Answer is:", greatMarks);

// Q2 - input number, create array, calculate sum and product
let numberInput = prompt("Enter a number:");
let arrayOfNumbers = [];
for (let i = 1; i <= numberInput; i++) {
    arrayOfNumbers[i - 1] = i;
}
console.log(arrayOfNumbers);

let sumArray = arrayOfNumbers.reduce((res, curr) => {
    return res + curr;
});
console.log(sumArray);

let productArray = arrayOfNumbers.reduce((res, curr) => {
    return res * curr;
});
console.log(productArray);
