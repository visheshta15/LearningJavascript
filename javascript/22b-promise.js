// promise 
// -------------------------------------------
// if you want to make async call and which have to wait until something to happen
// and once it comes back , you execute some callback function
// and within that callback function u might want to do another ajax call , which can wait for another result
// and this can create a nested callback hell and sometime its hard to read and debug
// that's why we use promise

// A Promise is a returned object to which you can attach callbacks, instead of passing callbacks into a function.		
 
// Promises are used to handle asynchronous operations in JavaScript.
// A Promise has Three states:
// fulfilled: Action related to the promise succeeded.
// resolve
// rejected: Action related to the promise failed.
// pending: Promise is still pending i.e not fulfilled or rejected yet.

// Promises can be consumed by registering functions using .then and .catch methods.
// then() is invoked when a promise is either resolved or rejected.
// catch() is invoked when a promise is either rejected or some error has occurred in execution


// var PromiseObj = new Promise(executor);
// [1] promise as a function constructor

const probj1 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        let a = [1,2,3,4,5]
        resolve(a)
        // reject('error in expression');
    }, 1000)
}) 

// probj1.then((a)=> console.log(a))
// .catch((e)=> console.log(e))

// [2] promise as an object by calling a function
const bioData = (indexdata) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let bio = {
                name: 'vish',
                age: 20
            }
            resolve(` hello i m ${bio.name} --- ${indexdata}`)
        }, 2000, indexdata)
        
    })
}


// probj1.then((rollno)=>{
//     console.log(rollno)
//     bioData(rollno[3]).then(d => console.log(d))
// }).then((e)=>{
//     console.log(e);
// })

// promise consume 

probj1.then((rollno)=>{
    console.log(rollno)
    return  (rollno[2])
// }).then((data)=>{
//     console.log(data)
}).catch((e)=>{
    console.log(e);
})