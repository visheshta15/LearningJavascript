// first class citizens :  FCF ability to be used like values 
// a programming language is said to have First-class function when a function in that language is treated like any other variable

// [1] when we assign a function to a variable
// [2] assign a function as a value to the key of an object
// [3] pass a function as an argument
// [4] returning function 

function a(){
    return function b(){
        console.log('hi i m inside b()');
    }
}


a()()
let c = a();
c()


x1()
// funcb() // doesnt work because b is a variable and now it is undefine and u cannot call it

// function statement aka // function declaration
function x1(){
    console.log("x1")
}
// function expression
var funcb = function (){
    console.log("funcb")
}

// named function expression
var funcc = function x2(){
    console.log("funcc")
}

// anonymous  expression
// (function (){
//     console.log("kkhkj")
// })()

x1()
funcb()
funcc()