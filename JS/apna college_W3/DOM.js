// document.body.innerText = "abcd"; 

// DOM selection
// let heading = document.getElementById("head");
// console.dir(heading); // If we use an incorrect ID, it returns null.

// let container = document.getElementsByClassName("container");
// console.dir(container); // If we use an incorrect class name, it returns an empty HTMLCollection.
// console.log(container);

// let tags = document.getElementsByTagName("p");
// console.log(tags);

// let firstElement = document.querySelector("p");
// console.log(firstElement);

// let allElements = document.querySelectorAll("p");
// console.log(allElements);

// attributes
// let divList = document.querySelectorAll("div");
// console.log(divList);

// let id = divList.getAttribute("id");
// console.log(id);

// let name = divList.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("id"));

// styling
// let firstDiv = document.querySelector("div");
// firstDiv.style.backgroundColor = "green";

// insert elements
let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);

let para = document.querySelector("p");
para.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i> Hi! I am new to JS</i>";
document.querySelector("body").prepend(newHeading);

// delete elements
let removeElement = document.querySelector("p");
removeElement.remove();

// practice question
// Q1
let newBtn1 = document.createElement("button");
newBtn1.innerText = "click me";
newBtn1.style.backgroundColor = "red";
newBtn1.style.color = "white";
let bodyElement = document.querySelector("body");
bodyElement.prepend(newBtn1);
