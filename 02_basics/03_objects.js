// Create objects.

const myObj = {
    name: "swayam",
    age: 20,
    loggedIn : true,
    'salary': 6000000
}
//how to access the object

console.log(myObj["age"])
// you can also use . operation to access the obj . but [" "] is used as it is better. with . operatior you can't access salary. it is the [" "]  which can access salary

console.log(myObj['salary'])

// IMP how to add a symbol in to obj??-------> create a symbol variable abd add in object with sq brackets

const mySymbol = Symbol("helloWorld");
const myObj2 = {
    [mySymbol] : "sym",
    age:5
}

console.log(myObj2)



