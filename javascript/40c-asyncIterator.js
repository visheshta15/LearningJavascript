// asyncIterator is about iterating through the data which is comming asynchronously or in chunks
// Use "for await...of" loop instead of "for...of" loop

// [1] for...of 
let obj1 = {
    a:10,
    b:20,
    [Symbol.iterator](){
        return {
            next(){
                if(obj1.a<obj1.b){
                    return {value: obj1.a++, done: false}
                }else{
                    return {done: true}
                }
            }
        }
    }
}

for(let i of obj1){
    console.log('1.---', i)
}

// [2] for await...of 
let obj2 = {
    a:10,
    b:20,
    // [a]
    // [Symbol.asyncIterator](){
    //     return {
    //         async next(){
    //             await new Promise(resolve => setTimeout(resolve, 1000));
    //             if(obj2.a<obj2.b){
    //                 return {value: obj2.a++, done: false}
    //             }else{
    //                 return {done: true}
    //             }
    //         }
    //     }
    // }

    // [b]
    async *[Symbol.asyncIterator](){
        for(let cnt = this.a; cnt<this.b; cnt++){
            await new Promise(resolve => setTimeout(resolve, 1000))
            yield cnt;
        }
    } 
};

(async ()=>{
    for await(let i of obj2){
        console.log('2.---', i)
    }
})()
