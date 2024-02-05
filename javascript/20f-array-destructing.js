
// destructuring:  Its about extracting the data pieces from array or object literal and assigning to individual variables
let arr = [30,2,60,55,89,100]
let [a,b,,d,e=0] = arr
console.log(arr, a,b,d,e)

// use rest operator
let [x, ...y] = arr
console.log(arr, x,y)
