// hoisting is a js mechanism where variable and function declaration are moved to the top of the scope before the code execution
//-------------------------------------------------
// even before the code start executing the memory is allocated to variable and function

// Variable hosting
// ----------------------------------
// [1]
num1 =100;
console.log(num1)
var num1;
//behind the seen, hoisting effect
var x = undefined;
x = 'apple';
console.log(x)

// [2]
carName = "Volvo";
// let carName;   //ReferenceError: Cannot access 'carName' before initialization

// [3]
carCompany = "Toyota";
// const carCompany;   //SyntaxError: Missing initializer in const declaration

// [4] variable hoisting does not work with const and let


// Function Hoisting
// -----------------------------------------

sum(2,3);
var total = 10;
function sum(a,b){ 
    console.log(total)
    var total=a+b
    // var total
    console.log(total)
};
// sum(2,3);
