const newString = "swa yam"

// Defining a string using Objects
const newString2 = new String(" Sharma");

console.log(newString + newString2);
let num=6;


// Below written method is widely used.---------> ${} is used to express the variables
console.log(`My first name is ${newString} and my last name is ${newString2}`)

// Various functions of strings

console.log(newString.length)
console.log(newString.charAt(5))
console.log(newString.indexOf("a"));
//below function convert string into array.
console.log(newString.split(" "));
//give you a substring from 0 to 3
console.log(newString.substring(0,3));

//trim the extraa spaces in front and back.
//trimEnd , trimStart---> works as the name suggests
console.log(newString.trim());
console.log(newString.replace('y','k'))

//checks weathr the given substring is present or not?
console.log(newString.includes("swa"));
