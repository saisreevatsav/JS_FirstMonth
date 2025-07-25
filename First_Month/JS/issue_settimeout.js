console.log("s");
setTimeout(function cb() {
    console.log("c");
}, 5000);
console.log("e");
//below lines of code is to block the main thread
let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}
console.log("w expires");
