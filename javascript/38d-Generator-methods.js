// Generator methods

//1. next() : it moves the function pointer to the next line from last suspended yield 

//--------------------------------------------------------------
// 2. return() : more or less similar to the return method, returns { value: val, done: true}
// and terminates the generator

function* gen(){
    yield "yield One";
    yield "yield Two";
    yield "yield Three";
}

const g = gen()
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

console.log(g.next())
console.log(g.return("return done...terminate the generator functions"))
console.log(g.next())


//-------------------------------------------
// writing "yield" inside "finally" will not allow the "return()" to terminate
function* gen1(){
    try {
        yield "yield One";
        yield "yield Two";
        yield "yield Three";
    } finally {
        yield "yield Finally"
    }
}

console.log('------------------')
const g1 = gen1()
console.log(g1.next())
console.log(g1.return('return done...'))


// ---------------------------------------------------------------
// 3. throw() : this method throws an exception at the location of yield which made the last suspension in the generator function
function* gen2(){
    try {
        yield "yield One";
        yield "yield Two";
        yield "yield Three";
    } catch(err) {
        console.log('error', err)
    }
}

console.log('------------------')
const g2 = gen2()
console.log(g2.next())
console.log(g2.throw('error!!!'))