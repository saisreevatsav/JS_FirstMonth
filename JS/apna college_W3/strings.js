// strings
let nameStr = "john";
console.log(nameStr[2]); // accessing the 3rd character

// template literals
let sentence = `doe`;
console.log(sentence);
console.log(typeof(sentence));

let obj = {
    item: "pen",
    price: 10
};
let output = `The cost of ${obj.item} is ${obj.price} rs`; // using template literals
console.log(output);

// escape character
console.group("hi \t world"); 

// string methods
nameStr = nameStr.toUpperCase();
console.log(nameStr);

let text = "  eveve  ";
let trimmedStr = text.trim();
console.log(trimmedStr);

let exampleStr = "hinjkm";
//string combinations
console.log(exampleStr+23+"sai");//output is hinjkm23sai it is a string.
console.log(23+"sai");//output is 23sai it is a string.
console.log("sai"+23);//output is sai23 it is a string.


console.log(exampleStr.slice(0, 3)); // extracts substring from index 0 to 3
console.log(exampleStr.concat("dfs")); // concatenates "dfs" to the original string
console.log(exampleStr.replace("hi", "ss")); // replaces first occurrence of "hi" with "ss"
console.log(exampleStr.charAt(4)); // returns character at index 4
let str3 = "helololo";
console.log(str3.replaceAll("lo", "p")); // replaces all "lo" with "p"

// practice question
let fullName = prompt("Enter your full name");
let userName = "@" + fullName + fullName.length;
console.log(userName);
