// yield : operator is used only in generator functions.
// yield* : when it comes to recursive function or calling one generator function from another the yield* syntax is used 

// yield should be used inside the generator function 

// example1
function* gen1(){
    console.log('hello gen1')
}

function* gen2(){
    // [1]
    // const g1 = gen1()
    // g1.next()

    // [2]
    yield* gen1()
}

const g2 = gen2()
g2.next()



// example2 - factorial - not implemented
function* fact(num){
    if(num<2)
        return num
    yield* fact()
}

const f = fact(4)