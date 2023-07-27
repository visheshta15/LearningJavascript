// there is a variable named addNew, and it is declared outside of the add() function. But the state of that variable is changed inside the add() function. So, the add() function has a side effect on a variable outside of its scope and is therefore considered an impure function.

let addnew = 8

function add(a,b){
    addnew+=1
    return a + b + addnew
}

console.log(add(5,6))

console.log(Math.random())

// Date.now()
// arr.splice()
// arr.push()
// arr.sort()
// console.log() and alert() are also impure functions (although they generate the same behavior and always return the same value for identical calls).
// JavaScript is synchronous by its nature. Therefore, asynchronous functions such as fetch and promise are impure.