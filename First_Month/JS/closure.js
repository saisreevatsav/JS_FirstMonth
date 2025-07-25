function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    // a=100; ref to "a" memory 
    return y; //closure was returned and put inside z
}
var z=x();
console.log(z);
z();

function z(){
 var b=900;
 function x(){
    var a=7;
    function y(){
        console.log(a,b);
    }
    y();
 }
 x();
}
z();

function x(){
    var i=1;
    setTimeout(function(){
        console.log(i);
    },1000);
}
x();