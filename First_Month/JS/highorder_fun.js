const radius = [3, 1, 2, 4];

const calculateArea = function (radius) {
    return Math.PI * radius * radius;
};
const calculateCircumference = function (radius) {
    return 2 * Math.PI * radius;
};
const calculateDiameter = function (radius) {
    return 2 * radius;
};

Array.prototype.calculate = function (logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
};

console.log(radius.map(calculateArea)); //map function
console.log(radius.calculate(calculateArea));

// console.log(calculate(radius, calculateArea));
// console.log(calculate(radius, calculateCircumference));
// console.log(calculate(radius, calculateDiameter));
