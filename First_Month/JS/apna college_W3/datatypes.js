// function exampleFunction() {
//     let num = 10; // number
//     let color = "yellow"; // string
//     const isAvailable = true; // boolean
//     const cars = ["Kia", "Honda"]; // array
//     const person = { firstName: "Jon", lastName: "Doe" }; // object
//     const date = new Date("2025-06-18"); // date object
//     console.log(num + " " + color + " " + isAvailable);
//     console.log(person);
//     typeof "yellow"; // type check
// }
// exampleFunction();

const student = {
    name: "John",
    age: 24,
    cgpa: 4.5,
};

student["age"] += student["age"]; // updating the object's key value
console.log(student["age"]);
