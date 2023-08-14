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


// calculateSsquare(3)
// .then((res1)=> {
//     console.log(res1)
//     // return 4
//     return calculateSsquare('string')
//     // throw new Error('error')
// })
// .then((res2)=> console.log(res2))
// .catch((err)=> console.log('Error happened : ', err)) 



// resolve callback hell 
calculateSsquare(2)
.then((res1) => {
    console.log(res1)
    return calculateSsquare(3)
})
.then((res2)=> {
    console.log(res2)
    return calculateSsquare('h')
})
// .then((res3)=> console.log(res3))
// .catch((err)=> console.log(err))
.then((undefined, err)=> console.log(err))