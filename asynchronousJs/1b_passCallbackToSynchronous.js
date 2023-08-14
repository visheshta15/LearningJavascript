// using callback is not something specific to asynchronous function, if you see a function taking callback as an argument, that doesn't mean this function is asynchronous. we can pass callback to synchronous as well

function fAsync(callback){
    setTimeout(()=>{
        callback()
    }, 1000)
}

fAsync(()=> console.log('callback is called') )

// called callback synchronously 
function fsync(callback){
    callback()
}
 
fsync(()=> console.log('callback is called syncronously'))
