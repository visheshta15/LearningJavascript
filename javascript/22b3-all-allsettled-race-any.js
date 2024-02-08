// Handle Multiple promise together

const pr1 = function (data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => (data % 2 == 0) ? resolve('resolve promise1') : reject('reject promise1'), 2000)
    })
}
const pr2 = function (data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => (data % 2 == 0) ? resolve('resolve promise2') : reject('reject promise2'), 4000)
    })
}
const pr3 = function (data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => (data % 2 == 0) ? resolve('resolve promise3') : reject('reject promise3'), 1000)
    })
}
const pr4 = function (data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => (data % 2 == 0) ? resolve('resolve promise4') : reject('reject promise4'), 1000)
    })
}

pr5 = 'normal string';


// [1] Promise.all()
// when you have multiple promises as input, it should return a single promise after all the promises are resolved, then u can use the all()  method,
// if any one of the promise is rejected then none of the promise will execute
// all() method is used when all the promises are expected to return the resolved state 

// Promise.all([pr1(2), pr2(3), pr3(2)])
// Promise.all([pr1(2), pr2(6), pr3(4)])
// Promise.all([pr3(2), pr2(6), pr1(10), pr5])
Promise.all([])
    .then((val)=> console.log('1a.--- val', val))
    .catch((err)=> console.log('1b.--- err', err))


// [2] Promise.allSettled()
// this method waits for all promises regardless of their state and return Promise at the end 
// this method always resolves, even if some promises passed to it are rejected. It resolves with an array of outcomes for each promise.

// Promise.allSettled([pr1(2), pr2(3), pr3(2)])
// Promise.allSettled([pr1(2), pr2(6), pr3(4)])
// Promise.allSettled([pr3(2), pr2(6), pr1(0), pr5])
Promise.allSettled([])
    .then((val)=> console.log('2a.--- val', val))

// [3] Promise.race()
// it is going to race amoung each promise
// this method returns a promise as soon as any of the promise returns the state from the iterable list provided
// promise RACE is settle as soon as any of the promises you feed it settle, whether they are fulfilled or rejected.
// if two promise takes same TimeRanges, then the first promise will get returned

// Promise.race([pr1(3), pr2(3), pr3(21), pr4(3)])
Promise.race([])
    .then((val)=> console.log('3a.--- val', val))
    .catch((err)=> console.log('3b.--- err', err))


// [4] Promise.any()
// promise ANY is settle as soon as any of the promises you feed it is fulfilled or they all are rejected

// Promise.any([pr1(3), pr2(3), pr3(21), pr4(3)])
// Promise.any([pr1(3), pr2(2), pr3(21), pr4(3)])
Promise.any([pr1(3), pr2(3), pr3(2), pr4(2)])
    .then((val)=> console.log('4a.--- val', val))
    .catch((err)=> console.log('4b.--- err', err))