// function using let
// function printNumbersWithLet() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
// }
// printNumbersWithLet(); // this is for using let

// function without using let (using closure)
function printNumbersWithVar() {
    for (var i = 1; i <= 5; i++) {
        function close(currentValue) {
            setTimeout(function () {
                console.log(currentValue);
            }, currentValue * 1000);
        }
        close(i);
    }
}
printNumbersWithVar(); // without using let
