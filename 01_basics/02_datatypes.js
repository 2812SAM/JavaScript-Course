//many types of data types are there in java script
let name="Swayam"   // Strings Datatype
let rollNo=22103149 // number  range of number is from 0 to -(2^53-1) to (2^53-1)
                    // to store more large numbers use BigInt is used
let future          // Undefined data type
let sadness=null    // Null data type
let bool = false                    // Boolean data type
                    // Symbol => used for uniqueness , most used in figma and react


                    // The above were primitive data types
                    // object => user defined data type;
 // How to check the type of any variable ?
 // Use consol.log(typeof variable name)
 console.table([typeof sadness,typeof name ,typeof rollNo ,typeof future ,typeof null ,typeof symbol ,typeof bool]);                    

 // Type of Null is Object , Type of Undefined id undefined

 // Two typs of data types
 //1) primitive ---- 7 data types:- number ,big number ,boolean , null , undefined , string , symbol.

 let Id = Symbol('123')
 let otherId = Symbol('123')

 // both are different .
console.log(Id===otherId);


 //***************** type of BIG INT is?  -----> Object

 // 2) Non primitive ----- Arrays , Objects , function
 // which can be passed as reference.
 const hero = ["spiderman","shaktiman","angela"]
 let myObj = {
    name: "swayam",
    age: 20,
 }

 const myFunction = function(){
    console.log("hello world")
 }

 console.table([typeof hero ,typeof myObj , typeof myFunction])

 //array type-----> Object
 //object type-----> object
 //function type -------> functionObject
