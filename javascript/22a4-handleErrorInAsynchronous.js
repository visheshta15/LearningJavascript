// [1] setTimeout will pust the callback  in the callback queue, the try catch and surrounding code reside in callstack
// by the time callback is envoke, the surrounding code including the try catch got already executed
// that's y we cannot use trycatch block when detailing with asynchrounous code

function calculateSquare(no, callback){
    setTimeout(()=>{
        if(typeof(no) !== 'number'){
            throw new Error('Argument of type number is expected...')
        }
        const result = no * no
        callback(result)
    }, 2000)
}

try {
    calculateSquare(9, (val)=> console.log('1a.---', val))
    // calculateSquare('bad argument', (val)=> console.log('1b.---', val))
} catch (error) {
    console.log('1c.---', error)
}



// [2]
function calculateSquare2(no, callback){
    setTimeout(()=>{
        if(typeof(no) !== 'number'){
            callback(new Error('Agrument of type number is expected'))
            return
        }
        const result = no * no
        callback(null, result)
    }, 1000)
}

// error first callback, when dealing with asynchrounous callback
calculateSquare2('bad arg', (error, result)=> {
    if(error !== null){
        console.log('2a.--- caught error: ', String(error))
        return 
    }
    console.log('2b.---', result)
})

calculateSquare2(2, (error, result)=> {
    if(error !== null){
        console.log('3a.--- caught error: ', String(error))
        return 
    }
    console.log('3b.---', result)
})
