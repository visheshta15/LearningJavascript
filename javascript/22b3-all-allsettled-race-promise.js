// Promise.all()
// when you have multiple promises as input, it should return a single promise after all the promises are resolved, then u can use the all()  method,
// if any one of the promise is rejected then none of the promise will execute
// all() method is used when all the promises are expected to return the resolved state 

const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('called promise1')
    }, 1000)
})
const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve('called promise2')
        reject(new Error('reject error 2'))

    }, 2000)
})
const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('called promise3')
    }, 3000)
})

Promise.all([p1, p2, p3])
    .then((val)=>{
        console.log(val);
    }).catch((e)=> console.log(e))


// Promise.allSettled()
// this method waits for all promises regardless of their state and return Promise at the end 
Promise.allSettled([p1, p2, p3])
    .then((val)=>{
        console.log(val);
    }).catch((e)=> console.log(e))
