// Callback Hell / Pyramid of Doom 
// consists of more than one nested callback which makes code hard to read and debug. As calls become more nested, the code becomes deeper and increasingly more difficult to manage, especially if we have more loops, conditional statements, and so on in the code.

// [1]
function cSqr (n, cb){
    setTimeout(()=>{
        let sr = n*n
        cb(n,sr)
    }, 2000)
}

cSqr(2, (n1, d1)=>{
    console.log(`1a.--- square root of ${n1} is ${d1}`)
    cSqr(d1, (n2, d2)=>{
        console.log(`1b.--- square root of ${n2} is ${d2}`)
        cSqr(d2, (n3, d3)=>{
            console.log(`1c.--- square root of ${n3} is ${d3}`)
        })
    })
})

// [2]
const inc = (data, cb=()=>console.log('2.--- end')) =>{
    setTimeout(()=>{
        cb(data*1.5)
    },3000)
}

inc(10, (d1)=> {
    console.log('2a.--- increment data', d1)
    inc(d1, (d2)=>{
        console.log('2b.--- increment data', d2)  
        inc(d2, (d3)=>{
            console.log('2c.--- increment data', d3)  
            inc(d3)
        })
    })
}) 