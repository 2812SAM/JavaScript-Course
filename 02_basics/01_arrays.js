const arr1 = new Array(1,2,3,4,5,6,7)
console.log(arr1);

// array has many functions

// slice : as the name suggest it takes a copy of desired subarray of original array , does not copy the last index element;
// splice : it takes out the sub array from original array includeing the last index element;

const arr2 = [1,2,3,4,5,6,7]
console.log(arr1)
console.log('arr1' , arr1.slice(1,3))
console.log(arr1)

console.log(arr2)
console.log('arr2' , arr2.splice(1,3))
console.log(arr2)

// You  can convert an array into a sting using join operation;
const newarr1=arr2.join()
console.log(newarr1)

//  use of shift func. is used to shift all the elements to one space before and the element of 0th index gets removed;
arr2.shift();
console.log(arr2)

// use of unshift is used to add one element at the 0th index and shift all the elements 1 strep ahead.
arr2.unshift(66);
console.log(arr2)
