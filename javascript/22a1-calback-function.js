 // any function that is passed as an argument
// a callback is a function that is to be executed after another function has finished executing : hence the name call back ( Callbacks make sure that certain function doesn’t execute until another function has already finished execution.)
// js is an event driven language. this means that instead of waiting for a response before moving on, js will keep executing while listening to other events
// callbacks are a ways to make sure certain code couldn't execute until other code already finished execution
// ------------------------------------------------
// fname(function(...){}) if any function has "function as a parameter", then the parameter function is called callback function 
// used to handle asynchronous process 
// ------------------------------------------------

// [1]
const getdata = (cb) => {
    setTimeout(()=>{
        let data = {
            name :  'visheshta',
            id: 1
        }
        console.log('1b.--- data fetched')
        cb(data)
    }, 3000)
}

const showData = (data) => {
    console.log('1c.--- show data', data)
}

console.log('1a.--- start')
getdata(showData)

// [2]
function cSqr (n, cb){
    setTimeout(()=>{
        let sr = n*n
        cb(n, sr)

    }, 3000)
}

cSqr(2, (num, data)=>{
    console.log('2.--- square root of', num, 'is', data)
})

