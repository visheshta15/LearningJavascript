// Generator for Itertors
//------------------------------------------
let obj = {
    start: 5,
    end: 15,
    // [Symbol.iterator]: function* (){
    *[Symbol.iterator] (){
        for(let cnt=this.start; cnt<=this.end; cnt++){
            yield cnt;
        }
    }
}



for(let i of obj){      
    console.log(i)
}

console.log([...obj])