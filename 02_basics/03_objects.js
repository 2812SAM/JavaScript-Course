// Create objects.
// you can directly create objects and can create classes aswell

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
    name:"Somesh",
    [mySymbol] : "sym",
    age:5
}

console.log(myObj2)

// you can make changes in you object also;
myObj.name="Sharma"
console.log(myObj.name);
// if you want to freeze the changes on an object then use Object.freeze(ObjName)

Object.freeze(myObj)

// you can add functions also in the object;
myObj2.greetings = function(){
    console.log(`hello there my name is ${this.name}`)
}
console.log(myObj2.greetings());
console.log(myObj2.greetings);// here only reference to function is returned

