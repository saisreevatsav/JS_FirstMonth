const arr = [5, 1, 2, 3, 4]; // map

// function double(x){
//     return x * 2;
// }
// function triple(x){
//     return x * 3;
// }

// const output = arr.map(double);
// const out = arr.map(triple);
// const bi = arr.map(function toBinary(x){
//     return x.toString(2);
// });
// console.log(bi);
// console.log(output);
// console.log(out);

// filter
// function isOdd(x){
//     return x % 2;
// }
// const greaterThanEqualFour = arr.filter((x) => x >= 4);
// console.log(greaterThanEqualFour);
// const oddNumbers = arr.filter(isOdd);

// console.log(oddNumbers);

// reduce
// sum
const resultSum = arr.reduce(function(accumulator, current) { 
    // accumulator - accumulates the result from the array values
    // current - current value from the array
    accumulator = accumulator + current;
    return accumulator;
}, 0);
console.log(resultSum);

// max
const resultMax = arr.reduce(function(max, current) {
    if (current > max) {
        max = current;
    }
    return max;
}, 0);
console.log(resultMax);
