// prototypal inheritance
// const employee = {
//     calcTax() {
//         console.log("Tax is 10%");
//     },
// };

// const arjun = {
//     salary: 50,
// };

// arjun.__proto__ = employee;

// classes
// class Car {
//     constructor(brand) {
//         console.log("Constructor is creating a new object");
//         this.brand = brand;
//     }
//     start() {
//         console.log("Start");
//     }
//     stop() {
//         console.log("Stop");
//     }
//     setBrand(brand) {
//         this.brand = brand; // this.brand is a property of the object, whereas brand is an argument.
//     }
// }

// let maruti = new Car("Maruti");
// let kia = new Car("Kia");

// inheritance
// class Parent {
//     constructor() {
//         this.species = "Homo sapiens";
//     }
//     adults() {
//         console.log("Hello");
//     }
// }

// class Child extends Parent {
//     constructor(way) {
//         super(way); // to invoke the parent class constructor
//         this.way = way;
//     }
//     eat() {
//         console.log("Eat");
//     }
// }

// let obj = new Child("spiritual");

// error handling
let a = 2;
let b = 10;
console.log(a + b);
console.log(a + b);

try {
    console.log(a + c); // c is not defined, will trigger catch
} catch (err) {
    console.log(err);
}

console.log(a + b);
console.log(a + b);
console.log(a + b);
console.log(a + b);
console.log(a + b);
