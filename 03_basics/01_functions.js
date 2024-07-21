// syntax of function

function printName(name) {
    if(!name)return `Please Enter a Name`
    return `My name is ${name}`
}

console.log(printName())

/// you can send objects also in the function

function GiveDetails(anyObject){
    return `The name is ${anyObject.userName} and my salary is ${anyObject.Salary}`
}
const user = {
    userName : "Swayam",
    Salary: 6900000
}
console.log(GiveDetails(user))

// consider an example of e-Commerece platform .If user keeps on entering item to cart add the total value of all items .. since the items is not constant so how will you make dynamic parameters in your addition func.? or can you  use rest operator ****REST OPERATOR combines the given values into an array. ***spread operator is used to spread two arrays into 3rd array.

function sum(...num){
    return 
}
sum(200,300,400)


// YOU CAN define function like this also..

const fun = function(){

}


//**** THIS function.....
// 1) in objects we use (this.keyword) to excess keys of object..

//you cant use this in function


// ARROW FUNCTUION 
// const sum = ()=>{}

// ( ) contains parameters and { } contains function..... and when we use => that means no need to use return statement as well as no need of writing function

const sumi = (num1,num2) => (num1+num2)
console.log(sumi(2,3))

// You can't use curly parenthesis to return without using return word..use ()

// to return an object ({key:"hello"})

//*******************************  IMPORTANT *************************//

//**** IIFE immediately invocked function expressions

// when you want to get function run immideatly after its defination

console.log((function naaam(name){
    console.log(`my name is ${name}`);
})("Swayam") ) // this is similar to naaam("Swayam")
//Above is called NAMED IIFE

console.log(((num1,num2)=>(num1+num2))(2,3));

//General pattern ---------> ( () => {} )();
// semi colon at the end is necessary . else it will give error...
// all this is done to preve from global scope pollution on the function elements. so IIfr was used..