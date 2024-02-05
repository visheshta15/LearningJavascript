// method3 - in this example next() method is placed inside anothor method  [Symbol.iterator]()
//------------------------------------------
// let obj = {
//     start: 5,
//     end: 15,
//     [Symbol.iterator](){
//         const itr = {
//             next(){
//                 if(obj.start <= obj.end){
//                     return { value: obj.start++ , done: false}
//                 }else {
//                     return { done: true}
//                 }
//             }
//         }
//         return itr
//     }
// }

// method4
// cons: there connot be two or more for...of running simultaneously 
//------------------------------------------
let obj = {
    start: 5,
    end: 15,
    [Symbol.iterator](){
        // Symbol.iterable must return the object itself because there wont be any reference otherwise
        return this
    },
    next(){
        if(obj.start <= obj.end){
            return { value: obj.start++ , done: false}
        }else {
            return { done: true}
        }
    }
}

for(let i of obj){      
    console.log(i)
}