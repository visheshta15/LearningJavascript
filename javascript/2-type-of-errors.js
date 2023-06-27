// TypeError
// ReferenceError
// SyntaxError
// runtime error 
// declartion/ initialization
// set time out

// [1] ReferenceError 
// when js engine tries to find the variable and it is not present in the current scope
// console.log(x)  // x is not define

// console.log(y); //cannot access before initialization
let y=1;
var z = 10;

// console.log(window.z)  => 10
// console.log(window.y)  => undefine


// [2] SyntaxError
let a = 10;
// let a = 20;  //SyntaxError: Identifier 'a' has already been declared

// const b;  //SyntaxError: Missing initializer in const declaration


// [3] 
const c =10;
// c=20; //TypeError: Assignment to constant variable.

console.log(2 - "2");
console.log(2 * "2");
