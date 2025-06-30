// a();
// b(); they define the difference between the function statement and expression.

//function statement aka function declaration
function a(){
    console.log("A");
}
//function expression
var b =function (){
    console.log("b");
}

// anonymous function - functions without names but can be used as values for variables like above
//named function expression
var b = function xy(){
    console.log(xy);
}
a();
b();
xy();

//difference between parameters and arguments ?
function a(p1,p2)//these are parameters
{
    console.log(a);
}
a(1,2); //these are arguments

//first class functions
var b = function (p1){
return function(){

}
}
console.log(b()); 
