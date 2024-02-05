// Generators 

// Generators can help you to pause & resume the code
 
// Normally when you write a function, it returns a single value 
// You can think of generators as a kind of function which can return multiple values in phases
//-----------------------------------------------------------------

// definition	
// function* : is the keyword used to define a generator function 
// yield : is an operator which passes the generator. yield also helps to receive input and send output. yield itself is capable of returning any value

const genFunction = function* (){
    console.log('hello');
    yield "yield 1";
    console.log('world');
    yield "yield 2";
    console.log('and galaxy');
    yield;
    console.log('and milkybar');
}

// genFunction() : when a generator function is called, it does not call the function instead it returns a generator object 
// next() : method will start the execution till the yield operator

// const genObj = genFunction()
// [1]
// console.log(genObj.next())
// console.log(genObj.next())
// console.log(genObj.next())
//----------------------------------------------------------------

// Generator is an iterable object 
// so instead of writing the next() multiple time you can use a loop
// [2] 
// const genObj = genFunction()
// for(let i of genObj){
//     console.log(i)
// }


// [3]
const gObj = [...genFunction()]         // create an array with returned value
console.log(gObj)