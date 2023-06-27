// promise RACE is settle as soon as any of the promises you feed it settle, whether they are fulfilled or rejected. 
// promise ANY is settle as soon as any of the promises you feed it is fulfilled or they all are rejected

let promise1 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        // resolve('Data called 1')
        reject(new Error("data rejected 1"))
    }, 1000)
})

let promise2 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        // resolve('Data called 2')
        reject(new Error("data rejected 2"))
    }, 2000)
})

let promise3 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        reject(new Error("data rejected 3"))
    }, 500)
})

let promises = [promise1, promise2, promise3]

Promise.race(promises)
    .then((v)=> console.log(v))
    .catch((e)=> console.log(e))

Promise.any(promises)
    .then((v)=> console.log(v))
    .catch((e)=> console.log(e))

