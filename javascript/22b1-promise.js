// promise 
// -------------------------------------------
// if you want to make async call and for which you have to wait until the execution completes, once you get a response, you execute some callback function and within that callback function u might want to do another ajax call , which can wait for another result and this can create a nested callback hell and sometime its hard to read and debug, that's why we use promise

// A Promise is a returned object to which you can attach callbacks, instead of passing callbacks into a function.		
 
// Promises are used to handle asynchronous operations in JavaScript.
// A Promise has Three states:
// fulfilled: Action related to the promise succeeded.
// resolve: 
// rejected: Action related to the promise failed.
// pending: Promise is still pending i.e nor fulfilled neither rejected yet.

// Promises can be consumed by registering functions using .then and .catch methods.
// then() is invoked when a promise is either resolved or rejected.
// catch() is invoked when a promise is either rejected or some error has occurred in execution


// [1] promise as a function constructor
//a) Promise //an object given by js
//b) new Promise // instantiate the promise
//c) contructor of promise is one callback function , which have 2 parameters
let pr = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve(1)
        reject(0)
    }, 3000)
})
pr.then((mgs)=> console.log('1a.--- data: ',mgs))
  .catch((err)=> console.log('1b.--- err: ',err))
  .finally(()=> console.log('1c.--- end...'))


// [2]
function cSqr (n){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(isFinite(n)){
                resolve(n*n)
            } else{
                reject('wrong input', n)
            }
    
        }, 3000)
    })
}

// [2a]
// cSqr(2)
// // cSqr('2n')
// .then((data)=> console.log('2a.---', data))
// .catch((error)=> console.log('2b.--- Error', error))

// [2b] nested promise
// cSqr(3)
// .then((data1)=> {
//     console.log('3a.--- response', data1)
//     cSqr(data1)
//     .then((data2)=> console.log('3c.--- response', data2))
//     .catch((error)=> console.log('3d.--- Error', error))
// })
// .catch((error)=> console.log('3b.--- Error', error))

// [3c] chaining the promise
cSqr(3)
.then((data1)=> {
    console.log('4a.--- response', data1)
    return cSqr(data1)
})
.then((data2)=> {
    console.log('4b.--- response', data2)
    return cSqr(data2)
})
.then((data3)=> console.log('4c.--- response', data3))
.catch((error)=> console.log('4d.--- Error', error));

// [3d] async...await
(async ()=>{
    const a1 = await cSqr(3)
    console.log('5a.---', a1)
    const a2 = await cSqr(a1)
    console.log('5b.---', a2)
    const a3 = await cSqr(a2)
    console.log('5c.---', a3)

})()