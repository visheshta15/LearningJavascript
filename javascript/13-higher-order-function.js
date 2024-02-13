// HOF 
// they are the functions that takes other functions as arguments or return functions as their result 
// hof can be used to compose functions, creating new functions by combining existing ones
//----------------------------------------------

// [1]
function higherOrderFunction(callback) {
    
    callback();

}

function callbackFunction() {
    console.log("This is a callback function.");
}

console.log('1.---')
higherOrderFunction(callbackFunction);

// [2]

const hof = (cb) => {
    console.log('2a.---', )
    return cb(3)
}

const cb = (a) => {
    console.log('2b.---', a)
    return 2
}

let c1 = hof(cb)
console.log(c1)
