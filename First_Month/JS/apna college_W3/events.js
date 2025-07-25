// let btnElement = document.getElementById("btn"); // For getElementById, we should use addEventListener to handle events.

// btnElement.addEventListener('click', () => {
//     console.log("hii - 1");
// });

// btnElement.addEventListener('click', () => {
//     console.log("hii - 2");
// });

// const handlerThree = () => {
//     console.log("hii - 3");
// };

// btnElement.addEventListener("click", handlerThree);
// btnElement.removeEventListener("click", handlerThree);

// btnElement.addEventListener('click', () => {
//     console.log("hii - 4");
// });

// let divElement = document.querySelector(".div"); // For querySelector, we can directly assign event handlers.
// divElement.onmouseover = (event) => {
//     console.log(event);
//     console.log(event.type, event.target);
//     console.log(event.clientX, event.clientY);
//     console.log("You are inside div");
// };

// practice question - toggle background color
let isToggleColor = false;
let btnToggle = document.getElementById("toggle");
let bodyElement = document.getElementById("body");

function handleToggleClick() {
    isToggleColor = !isToggleColor; // Dynamically toggles the boolean value

    if (!isToggleColor) {
        bodyElement.style.backgroundColor = "white";
    } else {
        bodyElement.style.backgroundColor = "grey";
    }
}

btnToggle.addEventListener("click", handleToggleClick);
