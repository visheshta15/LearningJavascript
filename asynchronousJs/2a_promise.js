// [1]
const newPromise  = new Promise((resolve, reject)=>{
   resolve('hi')
//    reject('error')
})
// console.log(newPromise)

newPromise
.then((res)=> console.log(res))
.catch((err)=> console.log(err))

console.log('this is written after promise')

// [2]
const calculateSsquare = (no) => {
    let promise  = new Promise((resolve , reject) => {
        setTimeout(()=>{
            if(typeof no === 'number'){
                resolve(no*no)
            }else{
                reject('bad input')
            }
        }, 1000)
    })
    return promise
}


calculateSsquare(3)
.then((res)=> console.log(res))
.catch((err)=> console.log(err))