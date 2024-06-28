// destructuring of objects?---------> when you have to access any key from the obj multiple times then instead of writing it again and again you can destructure it in a simple way
const obj={
    userId: "ss@sss",
    companyName:"apple"
}

// Extract company name-----> obj.companyName --------> this is syntactically very long so destructure it

const {companyName:c}=obj
console.log(c)
// now you can use only c to extract the companyName from obj



//******************** How do API works? (basics)*******************************//
// APIs are object or arrays which hav various keys and info which we can extract out easily...
// APIs are in JSON fromat which is nothing but object or arrays
// APIs are complex to read and understand so we can use JSON beautify tool available on google.

