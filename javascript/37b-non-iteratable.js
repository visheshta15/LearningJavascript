let obj = {
    start: 5,
    end: 15
}

for(let i of obj){      // TypeError: obj is not iterable
    console.log(i)
}