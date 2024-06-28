// how to merge two obj
const obj1={
    1:"a",
    2:"b",
    3:"c"
}
const obj2={
    1:"a",
    2:"b",
    3:"c"
}

const obj3 = {...obj1,...obj2}
console.log(obj3)

// If obj has many obj inside one another then put dots to absrtact it

// IMP there are my function which can fetch the info of an obj by Object.func(objName);
console.log(Object.keys(obj1)) 

// Array of objects can also be made.-----------> how to fetch any key from any obj in that array?--------------------------> by array[i].key