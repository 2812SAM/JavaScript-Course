// if (condition){ }
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

/* Falsy values ---> false, 0 , -0 , BigInt--> 0n , "" , NULL , undefined , Nan */

// truthy values---------> "0" , "false" , " " , {} , [] , function(){}

//  false == 0  (true statement)
// fale = ''     (true statement)
// 0 == ""      (true statement)



//******************** Nullish Coalescing Operator (??) : Null undefined;


let val1 = 5 ?? 10           // IF 1st values is Null the assign ithe variable with 2nd value.
let val2 = null ?? 23
let val3 = undefined ?? 30  // For undefined ... 30 will be assigned to val3.

console.log(val1)
console.log(val2)
console.log(val3)

// Terniary Operator

// condition ? true : false;


const passed = 20

passed>=40 ? console.log(`You are passed`) : console.log(`You are not passed`)