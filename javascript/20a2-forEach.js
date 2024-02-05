// forEach
// this take callback function as an argument
// methods calls a function once for each element in an Array, in order.

const lang = ['c++', 'python', 'java', 'php'];
lang.forEach((e, index)=>{
    console.log(index, " : ", e);
})

lang.forEach((element, index, arr)=>{
    console.log(element, index, arr);
})

// forEach cannot be stopped in between like you break the loop
const arr = ['ES5', 'ES6', 'ES7', 'ES8'];
arr.forEach((ele, index) => {
    console.log(ele, index)
    if(index == 2){
        // break;      // SyntaxError: Illegal break statement
    }
})

console.log(arr[arr.length])      // undefined