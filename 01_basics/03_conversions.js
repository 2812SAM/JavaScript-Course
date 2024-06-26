// syntax to convert a string value to number ------- let num = 33 (suppose this data type is string)------------- let num1 = Number(num) -----------
let num = "49"
let nums = Number(num)
console.log(nums);
console.log(typeof nums);

// What if you want to convert a string to bool? --- if string is empty bool will give 0 & vice versa

let bool=false;
let num2 = Number(bool);
console.log(num2);

// convert null into number ------------- it will give 0


let hello =null
let newhello = Number(hello);
console.log(newhello);

// what i fyou convert a string "123abc" to a number ------------> it will get vonvert into num but when we will print it , it will display NAN;

let s2 = " 1233b "
let num3 = Number(s2);
console.log(num3);

// PRACTICAL APPLICATION ? --------------------> WHENEVER THE BROWSER GIVES US VALUES ,MOSTLY THOSE ARE STRING SO WE NEED TO CONVERT THEM TO OUR DESIRED DATATYPES TO PERFORM CERTAIN FUNCTIONS..


//************************************ OPERATIONS *********************************************

console.log(2**3)     // 2^3;
console.log("swayam" + " Sharma")    //swayam sharma;
console.log("1" + 2 + 2) // 122 (the moment it encounter string the after that every thinh is treated as string)
console.log(1+2+"3"+4+5) // 3345
console.log(+"");      // 0;