setTimeout(function (){
    console.log("timer");
},5000);
function x(y){//call back function
    console.log("x");
    y();
}
x(function y(){
     console.log("y");
});