// var allows redeclaration
// var userAge = 24;
// var userAge = 36;
// console.log(userAge); // Output: 36 — that's why var is avoided in modern JS

// let does not allow redeclaration but allows reassignment
// let userAge1 = 24;
// userAge1 = 34;
// console.log(userAge1); // Output: 34

// const does not allow redeclaration or reassignment
// const userAge2 = 24;
// userAge2 = 36;
// console.log(userAge2); // Output: TypeError

// uninitialized let variable
// let tempVar;
// console.log(tempVar); // Output: undefined

// const must be initialized at declaration
// const myConst;
// console.log(myConst); // SyntaxError

const myConst = 10;
console.log(myConst); // Output: 10
