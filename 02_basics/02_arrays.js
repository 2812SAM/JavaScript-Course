// you can add diff arrays into a new single array

const a=[1,2,3,4]
const b=[0,9,8,7]
const c=[...a,...b] /// (...) used to spread the elements of a and b
console.log(c)

// you can  flaten the array aswell.--------> suppose you have a array which has manny subarrays so you can flatten them using flat func.

const d=[1,2,3,[4,5],6,7,[8,9,[10,11,12]]]
console.log(d.flat(2)) //---------------------------> argument in flat func() indicated the about how much depth you have to flateten the array.




// You can use various func of Array.func()... like asking it weather a given argument is an array or not? , to convert the given argument into array , to add a given set of variables into array
let e=2
let f=3
console.log(Array.isArray(a))
console.log(Array.isArray("swayam"))
console.log(Array.from('ef'))                 // converts the given argument into array

// note ----> Array.from({name:'swayam'}) cant convert an object into array because it is confused that what to convert . is it the key which is to me converted or it is the variable which is to  be converted

console.log(Array.of(e,f))                    // converts the given variables into array
