//arrow function also known as fat arrow function 
// one of the popolar feature of ES6. They introduce the new way of writing concise code 

// functional behaviour of arrow functions

// [1] this object does not work with AF
// If you call a function with new keyword it will behave as a class so arrow function doesnt need to behave like class at any point of time, so ""this"" always points to global object

// [2] arguments object does not work with AF: to overcome above error use rest operator
function abc(a,...num){
    console.log(arguments)      
}
abc('2a---', 2,4,6,7)

// const cdf = (...num) => {       // Uncaught ReferenceError: arguments is not defined
    // console.log(arguments)      
// }
// cdf('2b---', 2,4,6,7)


// [3] you cannot use new  to call arrow function
const xyz = () => {
    console.log('hi')
}
xyz()
// const obj = new xyz() // TypeError: xyz is not a constructor

// [4] function declaration should be before function call
