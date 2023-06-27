// methods calls a function once for each element in an Array, in order.

const lang = ['c++', 'python', 'java', 'php'];
lang.forEach((e, index)=>{
    console.log(index, " : ", e);
})

lang.forEach((e, index, arr)=>{
    console.log(arr);
    console.log(arr[index] , 'language');
})