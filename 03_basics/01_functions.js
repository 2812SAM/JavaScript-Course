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
const user ={
    userName : "Swayam",
    Salary: 690000
}
console.log(GiveDetails(user))

// consider an example of e-Commerece platform .If user keeps on entering item to cart add the total value of all items .. since the items is not constant so how will you make dynamic parameters in your addition func.? or can you  us rest operator ****REST OPERATOR combines the given values into an array. ***spread operator is used to spread two arrays into 3rd array.

function sum(...num){
    return 
}
sum(200,300,400)