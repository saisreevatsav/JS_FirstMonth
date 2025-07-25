// arrays
let marksArray = [92, 83, 74, 22];
console.log(marksArray.length);
marksArray[2] = 44;
console.log(marksArray);

// loops in arrays - for loop
for (let i = 0; i < marksArray.length; i++) {
    console.log(marksArray[i]);
}

// for-of loop - this is preferred
for (let mark of marksArray) {
    console.log(mark);
}

//findIndex. input is provided as callback function.
const ages=[3,10,24,29];
console.log(ages.findIndex(checkAge));
console.log(ages.find(checkAge));
console.log(ages.findLast(checkAge));
console.log(ages.findLastIndex(checkAge));
console.log(ages.lastIndexOf());
function checkAge(age){
    return age>18;
}

//some
const rates=[2,3,5,6,4];
console.log(rates.some(checkRates));
function checkRates(rate){
    return rate>2;
}

// practice question - average of marks
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let value of marks) {
    sum = sum + value;
}
let average = sum / marks.length;
console.log("Average is:", average);

// practice question - discount offer
let items = [250, 645, 300, 900, 50];
for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
}
console.log("Items after offer are:", items);

// array methods
let arr = [45, 34, 44, 22];

// push
arr.push(90, 66);
console.log(arr);

// pop
arr.pop();
console.log(arr);

// toString
console.log(arr.toString());
console.log(typeof(arr)); // This converts to string but it doesn't change its datatype to string.
// It remains an object.

// unshift
arr.unshift(88);
console.log(arr);

// shift
arr.shift();
console.log(arr);

// slice
console.log(arr.slice(0, 3));

// splice
console.log(arr.splice(0, 2)); // deleting elements
arr.splice(1, 0, 44);           // adding an element
arr.splice(1, 1, 101);          // replacing an element

// practice question - manipulating company names
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
console.log(companies);
companies.splice(1, 1, "Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);
// output: [ 'Microsoft', 'Ola', 'Google', 'IBM', 'Netflix', 'Amazon' ]

//Spread Operator
const numberOne=[1,2,3];
const numberTwo=[4,5,6];
const numbers=[...numberOne,...numberTwo];
console.log(numbers);

//Rest parameter
function restFun(...input){ //we can send any number of arguments to the function and this returns each and every argument's output.
    let sum=0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}
console.log(restFun(1,2));
console.log(restFun(1,2,3));
console.log(restFun(1,2,3,4));

//Fill operator
let nums=[1,2,3,4];
nums.fill(0);
console.log(nums);