// [1] 
function calculateSquare(no, callback){
    console.log(typeof(no))
    setTimeout(()=>{
        if(typeof(no) !== 'number'){
            throw new Error('Argument of type number is expected...')
        }
        const result = no * no
        callback(result)
    }, 1000)
}

try {
    // calculateSquare('bad argument', (val)=> console.log(val))
} catch (error) {
    console.log(error)
}

// setTimeout will pust the callback  in the callback queue, the try catch and sorounding code reside in callstack
// by the time callback is envoke, the surrounding code including the try catch got already executed
// that's y we cannot use trycatch block when detailing with asynchrounous code

// [2]
function calculateSquare2(no, callback){
    setTimeout(()=>{
        if(typeof(no) !== 'number'){
            callback(new Error('Agrument of type no is expected'))
            return
        }
        const result = no * no
        callback(null, result)
    }, 1000)
}

// error first callback, when dealing with asynchrounous callback
calculateSquare2('bad arg', (error, result)=> {
    if(error !== null){
        console.log('caught error: ', String(error))
        return 
    }
    console.log(result)
})

calculateSquare2(2, (error, result)=> {
    if(error !== null){
        console.log('caught error: ', String(error))
        return 
    }
    console.log(result)
})



// callback hell
calculateSquare2(2, (error, result)=> {
    if(error !== null){
        console.log('caught error: ', String(error))
        return 
    }
    console.log(result)
    calculateSquare2(3, (error, result)=> {
        if(error !== null){
            console.log('caught error: ', String(error))
            return 
        }
        console.log(result)
        calculateSquare2(4, (error, result)=> {
            if(error !== null){
                console.log('caught error: ', String(error))
                return 
            }
            console.log(result)
        })
    })

})