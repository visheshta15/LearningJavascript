// when you want to make an object literal iterable it should have method having key value as Symbol.iterator
// the Object literal should also have the next() method

let obj = {
    start: 5,
    end: 15
}

// method1 
//------------------------------------------
// obj[Symbol.iterator] = function(){
//     // you put a method inside the Object, which returns an iterable object
//     const itr = {
//         next(){
//             if(obj.start <= obj.end){
//                 return { value: obj.start++ , done: false}
//             }else {
//                 return { done: true}
//             }
//         }
//     }
//     return itr
// }

// method2
//------------------------------------------
obj[Symbol.iterator] = function(){
    return {
        next(){
            if(obj.start <= obj.end){
                return { value: obj.start++ , done: false}
            }else {
                return { done: true}
            }
        }
    }
}

for(let i of obj){      
    console.log(i)
}