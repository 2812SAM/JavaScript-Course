const num = new Number(4849854300.5553876723432)
console.log(num)
// number has few functions ------> toprecision ( to create precise values.)

console.log(num.toPrecision(4))
 

// toString convert number to string and after that you can apply string functions

console.log(num.toString())

// for limiting the view of digits after decimal of big numbers , toFixed function is used.

console.log(num.toFixed(2))

//toLcocalString is very usefull to represent big numbers with commas separation
console.log(num.toLocaleString())
// by default it separates acc to us pattern ,, to represent in indian pattern ----> use 'en-IN'
console.log(num.toLocaleString('en-IN'));



//************************************** MATH *********************************************************

// use of ciel and floor , round is used to round off the number.

console.log(Math.round(3.2));

console.log(Math.ceil(3.2));

console.log(Math.floor(3.2));

// abs used to give modulus 

console.log(Math.abs(-2))

// to find min/max values among diff values

console.log(Math.max(9,3,5,1,4));

console.log(Math.min(9,3,5,1,4));

// to generate random numbers;

console.log(Math.random());  // always give values between 0 to 1

// to get values between 1 and 10---------> multiply the math.random()*10 +1(to avoid cases like 0.023)
console.log(Math.floor(Math.random()*10)+1);

// ******* IMP ----> To get random no between any two numbers-----------> multiply Math.random*(max-min+1) + min
let min = 20
let max = 90
console.log(Math.floor(Math.random()*(max-min+1))+min);

