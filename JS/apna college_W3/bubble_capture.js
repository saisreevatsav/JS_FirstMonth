//Event Bubbling
// let gParent=document.querySelector("#grandParent");
// gParent.addEventListener('click',()=>{
//     console.log("Grand parent");
// },false);

// let Parent=document.querySelector("#parent");
// Parent.addEventListener('click',()=>{
//     console.log("parent");
// },false);

// let children=document.querySelector("#child");
// children.addEventListener('click',()=>{
//     console.log("children");
// },false);

//Event Capturing
// let gParent=document.querySelector("#grandParent");
// gParent.addEventListener('click',()=>{
//     console.log("Grand parent");
// },true);

// let Parent=document.querySelector("#parent");
// Parent.addEventListener('click',()=>{
//     console.log("parent");
// },true);

// let children=document.querySelector("#child");
// children.addEventListener('click',()=>{
//     console.log("children");
// },true);

//Stopping Propagation
let gParent=document.querySelector("#grandParent");
gParent.addEventListener('click',()=>{
    console.log("Grand parent");
},false);

let Parent=document.querySelector("#parent");
Parent.addEventListener('click',(e)=>{
    console.log("parent");
    e.stopPropagation();
},false);

let children=document.querySelector("#child");
children.addEventListener('click',(e)=>{
    console.log("children");
    e.stopImmediatePropagation();
},false);