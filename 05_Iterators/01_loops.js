// for loop , while loop , do while loop



//*********************** ARRAY SPECIFIC LOOPS *************************//
// for of loop 

// for( const iterator_name 'of' object)

// like if you want to iterate on array named myArray
// const myArray = [1,2,3]
// for(const it of myArray){
//     console.log(it);
// }
// we can iterate maps aswell

const myMap = new Map()
myMap.set('hi','Swayam')
myMap.set('hlo','Toshita')
myMap.set('hey','Somesh')
myMap.set('hola','$oniya')

// for(const it of myMap){
//     console.log(it)
// }

// If you want to destructure the map the you can use sq brackets on iterator.. while defining on for of loop

for(const [it,key] of myMap){
    console.log(`${it} my name is ${key}`)
}

// ********************************** YOU CANT ITERATE ON OBJECTS WITH (FOR OF LOOP) *************************************//

// USE OF FOR IN LOOPS IS USED TO ITERATE ON OBJECTS //

const obj={
    name:'swayam',
    age:20
}
for(const key in obj){
    console.log(`my ${key} is ${obj[key]}`)
}

// NOTE:- We can't use [ie,key] to access keys and value... instead to accss keys directly use name of iterator.. and to acces the value assigned to that key use objName[iterator]; //


// can i use FOR IN LOOP in Arrays 
const arr=[1,2,3,4,5]
for(const it in arr){
    console.log(`index ${it} has ${arr[it]} value`)
}

// NOTE unlike FOR OF loop the iterator gives the index/key number of the array where as in FOR OF loop iterator gave the key value at the index
// IN FOR IN LOOP to access key values use arrayName[IteratorName];


 // YOU CANT USE FOR IN LOOP ON MAPS

 //*************************************IMPORTANNT****************************************//

 // ForEach loop.. This is the function inside the array prototypes.
 // how to access?... arrayName.Foreach()

 arr.forEach( function (){})

 // The parenthesis contains a function whose input is sent one by one automatically .. input can be --> item(index_val) , array(whole array) , index (as the name suggests). and then apply the code in the function inside {}
 arr.forEach(function (values,array){
    console.log(values)
 })

 // To compact this use arrow function

 arr.forEach( (index)=>{console.log(`hii , I'm learning js from past ${index} year`)})

 // use of ForEach func on the array of objects.... This method is highly useable when we extract the information from a database wheree each index of array has object .

 const arrObj = [
    {
        name:"Swayam",
        Salary:8000000
    },
    {
        name:"Somesh",
        Salary:9000000
    },
    {
        name:"Toshita",
        Salary:7000000
    },
    {
        name:"$oniya",
        Salary:7000000
    }
 ]

 arrObj.forEach((item)=>{
    console.log(`The Name of Employee is ${item.name} and his/her the starting package is ${item.Salary}`)
    console.log(item)
 })